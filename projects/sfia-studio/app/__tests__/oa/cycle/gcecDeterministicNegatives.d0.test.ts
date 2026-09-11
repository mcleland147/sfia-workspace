/**
 * CR-GCEC-05 — qualifyGitCompletionProofSet matrix + CR negatives (subset).
 * ZERO OpenAI. ZERO REAL Cursor.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle";
import {
  buildTypedGitEvidenceFields,
  evaluateFunctionalDesignArtifactCompleteness,
  evaluateGcecArtifactEvidence,
  type Evidence,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";

const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const FULL_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const MERGE_SHA = "cccccccccccccccccccccccccccccccccccccccc";
const CYCLE = "cycinst:gcec-proof";
const REPO = "acme/widget";
const PATH = "docs/functional-design.md";

function baseEvidence(partial: Partial<Evidence> & { evidenceId: string }): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: partial.evidenceId,
    type: partial.type ?? "other",
    status: partial.status ?? "available",
    source: partial.source ?? "test",
    sourceKind: partial.sourceKind ?? "external",
    classification: partial.classification ?? "internal",
    storageMode: partial.storageMode ?? "metadata_only",
    bindings: partial.bindings ?? { cycleInstanceId: CYCLE, projectId: "prj:gcec" },
    createdAt: partial.createdAt ?? "2026-09-11T10:00:00.000Z",
    updatedAt: partial.updatedAt ?? "2026-09-11T10:00:00.000Z",
    version: partial.version ?? 1,
    location: partial.location,
    digest: partial.digest,
    technicalResultRef: partial.technicalResultRef,
    producedAt: "2026-09-11T10:00:00.000Z",
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:test",
      actor: { actorId: "actor:test", role: "system" },
      source: "system",
      timestamp: "2026-09-11T10:00:00.000Z",
      correlationId: "cor:test",
    },
  } as unknown as Evidence;
}

function typed(
  source: TypedGitEvidenceSource,
  payload: Record<string, unknown>,
  evidenceId: string,
  status: Evidence["status"] = "available",
): Evidence {
  const fields = buildTypedGitEvidenceFields(source, payload as never);
  if (!fields.ok) throw new Error(fields.reason);
  return baseEvidence({
    evidenceId,
    source: fields.fields.source,
    location: fields.fields.location,
    digest: fields.fields.digest ?? DIGEST,
    status,
    technicalResultRef: `studio:repository_read_verified:${source}`,
    bindings: {
      cycleInstanceId: CYCLE,
      projectId: "prj:gcec",
      executionContractId: "xct:gcec",
    },
  });
}

const expected = {
  repositoryRef: REPO,
  targetPath: PATH,
  artifactDigest: DIGEST,
  cycleInstanceId: CYCLE,
  executionContractId: "xct:gcec",
  projectId: "prj:gcec",
};

function fullSet(): Evidence[] {
  return [
    typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: FULL_SHA, message: "docs" },
      "ev:commit",
    ),
    typed(
      "git:remote_push",
      {
        repositoryRef: REPO,
        remote: "origin",
        refName: "gcec/docs",
        commitSha: FULL_SHA,
      },
      "ev:push",
    ),
    typed(
      "git:pull_request",
      {
        repositoryRef: REPO,
        prNumber: 1,
        headSha: FULL_SHA,
        state: "open",
      },
      "ev:pr",
    ),
    typed(
      "git:ci_status",
      {
        repositoryRef: REPO,
        commitSha: FULL_SHA,
        conclusion: "success",
      },
      "ev:ci",
    ),
    typed(
      "git:review_status",
      {
        repositoryRef: REPO,
        prNumber: 1,
        state: "approved",
      },
      "ev:review",
    ),
    typed(
      "git:merge",
      {
        repositoryRef: REPO,
        mergeCommitSha: MERGE_SHA,
        baseRef: "main",
        prNumber: 1,
      },
      "ev:merge",
    ),
    typed(
      "git:post_merge_verification",
      {
        repositoryRef: REPO,
        targetBranch: "main",
        targetSha: MERGE_SHA,
        artifactPath: PATH,
        artifactDigest: DIGEST,
      },
      "ev:post",
    ),
  ];
}

describe("CR-GCEC-05 qualifyGitCompletionProofSet matrix", () => {
  it("legacy lexical alone → BLOCKING", () => {
    const legacy = baseEvidence({
      evidenceId: "ev:legacy",
      source: "git-repository-proof",
      location: "git://legacy",
      status: "available",
    });
    const r = qualifyGitCompletionProofSet({
      evidence: [legacy],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("post_merge alone → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: [
        typed(
          "git:post_merge_verification",
          {
            repositoryRef: REPO,
            targetBranch: "main",
            targetSha: MERGE_SHA,
            artifactPath: PATH,
            artifactDigest: DIGEST,
          },
          "ev:post-only",
        ),
      ],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.missing.length).toBeGreaterThan(0);
    }
  });

  it("CI fail → BLOCKING", () => {
    const set = fullSet().map((e) =>
      e.source === "git:ci_status"
        ? typed(
            "git:ci_status",
            {
              repositoryRef: REPO,
              commitSha: FULL_SHA,
              conclusion: "failure",
            },
            "ev:ci-fail",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("ci_not_success");
    }
  });

  it("review pending → BLOCKING", () => {
    const set = fullSet().map((e) =>
      e.source === "git:review_status"
        ? typed(
            "git:review_status",
            {
              repositoryRef: REPO,
              prNumber: 1,
              state: "pending",
            },
            "ev:review-pending",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("review_not_approved");
    }
  });

  it("reported (available, no studio verify marker) full set → BLOCKING", () => {
    const reported = fullSet().map((e) => ({
      ...e,
      status: "available" as const,
      technicalResultRef: undefined,
    }));
    const r = qualifyGitCompletionProofSet({
      evidence: reported,
      expected,
    });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("status_not_verified");
    }
  });

  it("full studio-verified set → SATISFIED", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullSet(),
      requirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
      expected,
    });
    expect(r).toEqual({
      status: "SATISFIED",
      present: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
    });
  });

  it("digest / repo / cycle mismatch → BLOCKING", () => {
    const badDigest = qualifyGitCompletionProofSet({
      evidence: fullSet(),
      expected: { ...expected, artifactDigest: "sha256:" + "0".repeat(64) },
    });
    expect(badDigest.status).toBe("BLOCKING");

    const badRepo = qualifyGitCompletionProofSet({
      evidence: fullSet(),
      expected: { ...expected, repositoryRef: "other/repo" },
    });
    expect(badRepo.status).toBe("BLOCKING");

    const badCycle = qualifyGitCompletionProofSet({
      evidence: fullSet(),
      expected: { ...expected, cycleInstanceId: "cycinst:other" },
    });
    expect(badCycle.status).toBe("BLOCKING");
  });
});

describe("CR-GCEC-04 artifact completeness strict", () => {
  it("requires all four GCEC bindings", () => {
    const loose = baseEvidence({
      evidenceId: "ev:art-loose",
      type: "artifact",
      status: "available",
      digest: DIGEST,
      location: PATH,
      bindings: { projectId: "prj:gcec", cycleInstanceId: CYCLE },
    });
    expect(evaluateGcecArtifactEvidence(loose).ok).toBe(false);
    expect(evaluateFunctionalDesignArtifactCompleteness(loose).ok).toBe(false);

    const strict = baseEvidence({
      evidenceId: "ev:art-strict",
      type: "artifact",
      status: "available",
      digest: DIGEST,
      location: PATH,
      bindings: {
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        executionContractId: "xct:gcec",
        executionAttemptId: "att:gcec",
      },
    });
    expect(evaluateGcecArtifactEvidence(strict)).toEqual({ ok: true, gaps: [] });
  });
});
