/**
 * D-GCEC-CONT-01 — continuation candidate resolution (pure Product truth).
 * ZERO REAL. No heuristic latest/first under ambiguity.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  preCommitWorkspaceContinuationRequired,
  resolvePreCommitWorkspaceContinuation,
} from "@/lib/oa/execution-attempt";

const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const PROJECT = "prj:cont";
const CYCLE = "cyc:cont-001";
const EC = "xct:cont-001";
const PATH = "docs/functional-design.md";

function attempt(
  partial: Partial<ExecutionAttempt> & { attemptId: string },
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: partial.attemptId,
    executionContractId: partial.executionContractId ?? EC,
    executionContractVersion: partial.executionContractVersion ?? 1,
    selectedAgentRef:
      partial.selectedAgentRef ?? "agt:m4.cursor.bounded_docs_write",
    status: partial.status ?? "succeeded",
    idempotencyKey: partial.idempotencyKey ?? `idem:${partial.attemptId}`,
    correlationId: partial.correlationId ?? `cor:${partial.attemptId}`,
    version: partial.version ?? 2,
    createdAt: partial.createdAt ?? "2026-09-11T10:00:00.000Z",
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${partial.attemptId}`,
      actor: { actorId: "actor:test", role: "system" },
      source: "system",
      timestamp: "2026-09-11T10:00:00.000Z",
      correlationId: "cor:test",
    },
    launchedAt: partial.launchedAt ?? "2026-09-11T10:01:00.000Z",
    startedAt: partial.startedAt ?? "2026-09-11T10:01:00.000Z",
    completedAt: partial.completedAt ?? "2026-09-11T10:02:00.000Z",
    resultRef: partial.resultRef ?? `res:${partial.attemptId}`,
    retryOfAttemptId: partial.retryOfAttemptId,
    retryIndex: partial.retryIndex,
    maxRetriesBudget: partial.maxRetriesBudget,
  };
}

function evidence(
  partial: Partial<Evidence> & { evidenceId: string },
): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: partial.evidenceId,
    type: partial.type ?? "artifact",
    status: partial.status ?? "verified",
    source: partial.source ?? "execution_attempt:docs_write",
    sourceKind: partial.sourceKind ?? "external",
    classification: partial.classification ?? "internal",
    storageMode: partial.storageMode ?? "metadata_only",
    bindings: partial.bindings ?? {
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      executionContractId: EC,
      executionAttemptId: "xat:a",
    },
    createdAt: partial.createdAt ?? "2026-09-11T10:00:00.000Z",
    updatedAt: partial.updatedAt ?? "2026-09-11T10:00:00.000Z",
    version: partial.version ?? 1,
    location: partial.location ?? PATH,
    digest: partial.digest ?? DIGEST,
    producedAt: "2026-09-11T10:00:00.000Z",
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev",
      actor: { actorId: "actor:test", role: "system" },
      source: "system",
      timestamp: "2026-09-11T10:00:00.000Z",
      correlationId: "cor:ev",
    },
  };
}

const baseInput = {
  currentAttemptId: "xat:b",
  executionContractId: EC,
  projectId: PROJECT,
  cycleInstanceId: CYCLE,
  expectedHeadSha: HEAD,
  authorizedEffects: ["git.commit"] as const,
  verifiedEffects: ["filesystem.create", "filesystem.modify"] as const,
};

describe("D-GCEC-CONT-01 continuation resolver", () => {
  it("required only when verified FS + authorized protected Git", () => {
    expect(
      preCommitWorkspaceContinuationRequired({
        authorizedEffects: ["git.commit"],
        verifiedEffects: ["filesystem.create"],
      }),
    ).toBe(true);
    expect(
      preCommitWorkspaceContinuationRequired({
        authorizedEffects: ["filesystem.create"],
        verifiedEffects: ["filesystem.create"],
      }),
    ).toBe(false);
    expect(
      preCommitWorkspaceContinuationRequired({
        authorizedEffects: ["git.commit"],
        verifiedEffects: [],
      }),
    ).toBe(false);
  });

  it("CONT-01 unique succeeded same-EC + VERIFIED Evidence → candidate", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [attempt({ attemptId: "xat:a" }), attempt({ attemptId: "xat:b", status: "accepted", completedAt: undefined, resultRef: undefined, launchedAt: undefined, startedAt: undefined })],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
    if (!r.required || !r.ok) throw new Error("expected ok");
    expect(r.descriptor.priorAttemptId).toBe("xat:a");
    expect(r.descriptor.expectedVerifiedFiles[0]?.digest).toBe(DIGEST);
    expect(r.descriptor.evidenceId).toBe("ev:a");
  });

  it("CONT-02 prior Attempt other EC → rejected (none)", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [
        attempt({
          attemptId: "xat:a",
          executionContractId: "xct:other",
        }),
      ],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: "xct:other",
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    // Other-EC prior does not open the same-EC continuation window.
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("CONT-03 prior Attempt failed/cancelled/running → rejected", () => {
    for (const status of ["failed", "cancelled", "running"] as const) {
      const r = resolvePreCommitWorkspaceContinuation({
        ...baseInput,
        attempts: [
          attempt({
            attemptId: "xat:a",
            status,
            completedAt: status === "running" ? undefined : "2026-09-11T10:02:00.000Z",
            resultRef: status === "running" ? undefined : "res:a",
            failedAt: status === "failed" ? "2026-09-11T10:02:00.000Z" : undefined,
            cancelledAt:
              status === "cancelled" ? "2026-09-11T10:02:00.000Z" : undefined,
            errorRef: status === "failed" ? "err:a" : undefined,
            stopReason: status === "failed" ? "stop" : undefined,
          }),
        ],
        evidence: [
          evidence({
            evidenceId: "ev:a",
            bindings: {
              projectId: PROJECT,
              cycleInstanceId: CYCLE,
              executionContractId: EC,
              executionAttemptId: "xat:a",
            },
          }),
        ],
      });
      // Non-succeeded priors do not open the continuation window.
      expect(r).toEqual({ required: false, descriptor: null });
    }
  });

  it("CONT-04 Evidence not VERIFIED → rejected", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [attempt({ attemptId: "xat:a" })],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          status: "available",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    expect(r).toMatchObject({
      required: true,
      ok: false,
      reason: "continuation_candidate_none",
    });
  });

  it("CONT-05 Evidence wrong Project/Cycle/EC/Attempt → rejected", () => {
    const wrongBindings = [
      {
        projectId: "prj:wrong",
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        executionAttemptId: "xat:a",
      },
      {
        projectId: PROJECT,
        cycleInstanceId: "cyc:wrong",
        executionContractId: EC,
        executionAttemptId: "xat:a",
      },
      {
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: "xct:wrong",
        executionAttemptId: "xat:a",
      },
      {
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        executionAttemptId: "xat:other",
      },
    ];
    for (const bindings of wrongBindings) {
      const r = resolvePreCommitWorkspaceContinuation({
        ...baseInput,
        attempts: [attempt({ attemptId: "xat:a" })],
        evidence: [evidence({ evidenceId: "ev:a", bindings })],
      });
      expect(r).toMatchObject({
        required: true,
        ok: false,
        reason: "continuation_candidate_none",
      });
    }
  });

  it("CONT-06 zero candidate while continuation required → fail closed", () => {
    // Prior succeeded Attempt exists (window open) but no matching VERIFIED Evidence.
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [attempt({ attemptId: "xat:a" })],
      evidence: [],
    });
    expect(r).toEqual({
      required: true,
      ok: false,
      reason: "continuation_candidate_none",
    });
  });

  it("no prior succeeded Attempt → continuation not required", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [],
      evidence: [],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("CONT-07 two eligible candidates → fail closed ambiguity", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      attempts: [
        attempt({ attemptId: "xat:a1" }),
        attempt({ attemptId: "xat:a2" }),
      ],
      evidence: [
        evidence({
          evidenceId: "ev:a1",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a1",
          },
        }),
        evidence({
          evidenceId: "ev:a2",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a2",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
    if (!r.required || r.ok) throw new Error("expected ambiguous");
    expect(r.reason).toBe("continuation_candidate_ambiguous");
    expect(r.candidateAttemptIds).toEqual(["xat:a1", "xat:a2"]);
  });

  it("CONT-08 does not select current Attempt as prior", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      currentAttemptId: "xat:a",
      attempts: [attempt({ attemptId: "xat:a" })],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    // Only current Attempt succeeded → no prior lineage window.
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("CONT-09 retryOfAttemptId is not workspace lineage authority", () => {
    // B retries A, but only C has VERIFIED docs-write Evidence → C wins uniquely.
    // retryOf must not override Evidence uniqueness.
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      currentAttemptId: "xat:b",
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          status: "accepted",
          completedAt: undefined,
          resultRef: undefined,
          launchedAt: undefined,
          startedAt: undefined,
          retryOfAttemptId: "xat:a",
          retryIndex: 1,
          maxRetriesBudget: 3,
        }),
        attempt({ attemptId: "xat:c" }),
      ],
      evidence: [
        evidence({
          evidenceId: "ev:c",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:c",
          },
        }),
      ],
    });
    expect(r.required && r.ok).toBe(true);
    if (!r.required || !r.ok) throw new Error("expected c");
    expect(r.descriptor.priorAttemptId).toBe("xat:c");
    expect(r.descriptor.priorAttemptId).not.toBe("xat:a");
  });

  it("not required → descriptor null (no heuristic)", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      authorizedEffects: ["filesystem.create"],
      attempts: [attempt({ attemptId: "xat:a" })],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
      ],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });
});
