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
  isFsAnchorSupersededByVerifiedLocalCommit,
} from "@/lib/oa/execution-attempt";

const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const COMMIT_H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
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

  it("FS→SHA supersession: verified git:local_commit clears continuation", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          status: "succeeded",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("SHA-01 verifiedEffects git.commit WITHOUT verified Git Evidence → NOT superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
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
    expect(r.required).toBe(true);
  });

  it("SHA-02..09 wrong bindings / fake source → NOT superseded", () => {
    const goodCommit = evidence({
      evidenceId: "ev:commit",
      type: "other",
      source: "git:local_commit",
      location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}`,
      bindings: {
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        executionAttemptId: "xat:b",
      },
    });
    const cases: Array<{ label: string; evidence: Evidence[] }> = [
      {
        label: "wrong project",
        evidence: [
          {
            ...goodCommit,
            bindings: { ...goodCommit.bindings, projectId: "prj:other" },
          },
        ],
      },
      {
        label: "wrong cycle",
        evidence: [
          {
            ...goodCommit,
            bindings: { ...goodCommit.bindings, cycleInstanceId: "cyc:other" },
          },
        ],
      },
      {
        label: "wrong EC",
        evidence: [
          {
            ...goodCommit,
            bindings: {
              ...goodCommit.bindings,
              executionContractId: "xct:other",
            },
          },
        ],
      },
      {
        label: "fake source",
        evidence: [{ ...goodCommit, source: "git:local_commit_fake" }],
      },
    ];
    for (const c of cases) {
      const r = resolvePreCommitWorkspaceContinuation({
        ...baseInput,
        authorizedEffects: ["git.push"],
        verifiedEffects: [
          "filesystem.create",
          "filesystem.modify",
          "git.commit",
        ],
        attempts: [
          attempt({ attemptId: "xat:a" }),
          attempt({ attemptId: "xat:b" }),
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
          ...c.evidence,
        ],
      });
      expect(r.required, c.label).toBe(true);
    }
  });

  it("SHA-10 exact matching verified commit Evidence → superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("SHA-11 matching commit Evidence but wrong prior A → NOT superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          // parent SHA wrong vs expectedHeadSha → not superseded
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${"c".repeat(40)}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
  });

  it("SHA-12 matching repo/parent but wrong changed paths → NOT superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent("docs/other.md")}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
  });

  it("SHA-13 commit Evidence bound to docs-write Attempt A → NOT superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
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
  });

  it("SHA-15 B Attempt selected docs-write agent → NOT superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
  });

  it("SHA-16 B Attempt not succeeded → NOT superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          status: "running",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
          completedAt: undefined,
          resultRef: undefined,
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
  });

  it("SHA-17 exact A+B+H0/repo/paths → superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("SHA-19 no qualified prior A + matching commit Evidence → NOT superseded", () => {
    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        // Invented A id — no qualified docs-write prior exists in evidence.
        priorAttemptId: "xat:missing-a",
        expectedParentSha: HEAD,
        repositoryRef: "acme/widget",
        requiredPaths: [PATH],
        attempts: [
          attempt({
            attemptId: "xat:b",
            selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
          }),
        ],
        evidence: [
          evidence({
            evidenceId: "ev:commit",
            type: "other",
            source: "git:local_commit",
            location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
            bindings: {
              projectId: PROJECT,
              cycleInstanceId: CYCLE,
              executionContractId: EC,
              executionAttemptId: "xat:b",
            },
          }),
        ],
      }),
    ).toBe(false);

    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      currentAttemptId: "xat:next",
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
        }),
      ],
      evidence: [
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    // No qualified A → never FS→SHA superseded (weak same-EC commit path deleted).
    expect(r.required).toBe(true);
    if (r.required) expect(r.ok).toBe(false);
  });

  it("SHA-20 ambiguous prior A + matching commit → FAIL CLOSED / NOT superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a1" }),
        attempt({ attemptId: "xat:a2" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
        }),
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
    if (r.required && !r.ok) {
      expect(r.reason).toBe("continuation_candidate_ambiguous");
    }
  });

  it("SHA-21 prior A incomplete digest + matching commit → NOT superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
        }),
      ],
      evidence: [
        evidence({
          evidenceId: "ev:a",
          digest: "sha256:short" as Digest,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:a",
          },
        }),
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r.required).toBe(true);
    if (r.required) expect(r.ok).toBe(false);
  });

  it("SHA-22/23 unrelated B / verifiedEffects alone → NOT superseded", () => {
    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        priorAttemptId: "xat:a",
        expectedParentSha: HEAD,
        repositoryRef: "acme/widget",
        requiredPaths: [PATH],
        attempts: [
          attempt({ attemptId: "xat:a" }),
          attempt({
            attemptId: "xat:other",
            selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
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
          evidence({
            evidenceId: "ev:commit",
            type: "other",
            source: "git:local_commit",
            location: `git:local_commit?repo=${encodeURIComponent("other/repo")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
            bindings: {
              projectId: PROJECT,
              cycleInstanceId: CYCLE,
              executionContractId: EC,
              executionAttemptId: "xat:other",
            },
          }),
        ],
      }),
    ).toBe(false);

    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.commit"],
      verifiedEffects: ["git.commit"],
      attempts: [],
      evidence: [],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });

  it("SHA-24 exact A + exact B + exact H0/repo/paths → superseded", () => {
    const r = resolvePreCommitWorkspaceContinuation({
      ...baseInput,
      repositoryRef: "acme/widget",
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
      attempts: [
        attempt({ attemptId: "xat:a" }),
        attempt({
          attemptId: "xat:b",
          selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
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
        evidence({
          evidenceId: "ev:commit",
          type: "other",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
          bindings: {
            projectId: PROJECT,
            cycleInstanceId: CYCLE,
            executionContractId: EC,
            executionAttemptId: "xat:b",
          },
        }),
      ],
    });
    expect(r).toEqual({ required: false, descriptor: null });
  });
});
