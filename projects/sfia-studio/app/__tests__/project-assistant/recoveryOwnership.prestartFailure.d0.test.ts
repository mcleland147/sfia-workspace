/**
 * RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 — pure CLASS 2 qualification.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  isConfirmedPreStartRejectionRecoverySource,
  isDeterministicPreStartLaunchRejectionStopReason,
} from "@/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource";

function baseContract(
  overrides: Partial<ExecutionContract> = {},
): ExecutionContract {
  return {
    schemaVersion: "0.1.0-oa",
    executionContractId: "xct:prestart:1",
    projectId: "prj:prestart",
    status: "confirmed",
    version: 3,
    action: "cursor.docs_write.apply",
    target: "workspace.isolated.docs_write",
    scope: "studio.gcec.docs_write",
    requiredCapabilities: ["cap:cursor.docs_write"],
    requiredAuthority: "N2",
    constraints: [],
    stopConditions: [],
    evidenceRequirements: [],
    expectedOutputs: [],
    reversibility: "reversible",
    semanticFingerprint: "fp",
    idempotencyKey: "idem:1",
    correlationId: "cor:1",
    createdAt: "2026-09-25T00:00:00.000Z",
    inputs: { targetPath: "projects/studyflow/01-cadrage/note-de-cadrage.md" },
    ...overrides,
  } as ExecutionContract;
}

function baseAttempt(
  overrides: Partial<ExecutionAttempt> = {},
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: "xat:prestart:1",
    executionContractId: "xct:prestart:1",
    executionContractVersion: 3,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    status: "failed",
    idempotencyKey: "idem:att:1",
    correlationId: "cor:att:1",
    version: 2,
    createdAt: "2026-09-25T00:00:00.000Z",
    failedAt: "2026-09-25T00:00:01.000Z",
    stopReason:
      "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
    irreversibleEffectsPossible: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:1",
      actor: {
        actorId: "act:test",
        displayName: "t",
        roles: [],
      },
      source: "system",
      timestamp: "2026-09-25T00:00:01.000Z",
      correlationId: "cor:att:1",
    },
    ...overrides,
  } as ExecutionAttempt;
}

describe("CLASS 2 — confirmed pre-start rejection qualification", () => {
  it("accepts StudyFlow-equivalent stopReason", () => {
    expect(
      isDeterministicPreStartLaunchRejectionStopReason(
        "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
      ),
    ).toBe(true);
  });

  it("accepts adapter reject stopReason", () => {
    expect(
      isDeterministicPreStartLaunchRejectionStopReason(
        "EXECUTION_LAUNCH_FAILED: reject:need_retry",
      ),
    ).toBe(true);
  });

  it("rejects empty / unrelated stopReason", () => {
    expect(isDeterministicPreStartLaunchRejectionStopReason(null)).toBe(false);
    expect(
      isDeterministicPreStartLaunchRejectionStopReason("REAL_PROCESS_NONZERO_EXIT"),
    ).toBe(false);
  });

  it("CLASS 2 PASS — confirmed + failed pre-start", () => {
    expect(
      isConfirmedPreStartRejectionRecoverySource({
        contract: baseContract(),
        attempt: baseAttempt(),
      }),
    ).toBe(true);
  });

  it("A — confirmed + reached running (startedAt) → NOT eligible", () => {
    expect(
      isConfirmedPreStartRejectionRecoverySource({
        contract: baseContract(),
        attempt: baseAttempt({ startedAt: "2026-09-25T00:00:00.500Z" }),
      }),
    ).toBe(false);
  });

  it("B — confirmed + realProcessInvoked=true → NOT eligible", () => {
    expect(
      isConfirmedPreStartRejectionRecoverySource({
        contract: baseContract(),
        attempt: baseAttempt({
          processDiagnostic: {
            kind: "process_failure_diagnostic",
            schemaVersion: "0.1.0-oa",
            processRef: "proc:test",
            exitCode: 1,
            timedOut: false,
            durationMs: 1,
            stdoutExcerpt: null,
            stderrExcerpt: "invoked",
            realProcessInvoked: true,
            boundaryProofMode: "cursor_real",
            authoritativeBusinessEvidence: false,
          } as never,
        }),
      }),
    ).toBe(false);
  });

  it("C — confirmed + irreversibleEffectsPossible → NOT eligible", () => {
    expect(
      isConfirmedPreStartRejectionRecoverySource({
        contract: baseContract(),
        attempt: baseAttempt({ irreversibleEffectsPossible: true }),
      }),
    ).toBe(false);
  });

  it("D — confirmed + Attempt for another EC → NOT eligible", () => {
    expect(
      isConfirmedPreStartRejectionRecoverySource({
        contract: baseContract(),
        attempt: baseAttempt({ executionContractId: "xct:other" }),
      }),
    ).toBe(false);
  });

  it("E — confirmed + non-failed Attempt → NOT eligible", () => {
    expect(
      isConfirmedPreStartRejectionRecoverySource({
        contract: baseContract(),
        attempt: baseAttempt({ status: "accepted" }),
      }),
    ).toBe(false);
  });

  it("F — completed EC → NOT eligible", () => {
    expect(
      isConfirmedPreStartRejectionRecoverySource({
        contract: baseContract({ status: "completed" }),
        attempt: baseAttempt(),
      }),
    ).toBe(false);
  });

  it("G — failed EC is not CLASS 2 (handled as CLASS 1 elsewhere)", () => {
    expect(
      isConfirmedPreStartRejectionRecoverySource({
        contract: baseContract({ status: "failed" }),
        attempt: baseAttempt(),
      }),
    ).toBe(false);
  });
});
