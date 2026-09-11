/**
 * GCEC ownership negatives — D-GCEC-09..14 (report ≠ proof, no Studio mutation).
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  deriveCycleExitState,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle";
import {
  FakeRepositoryReadPorts,
  verifyCommitClaim,
  verifyPullRequestClaim,
} from "@/lib/oa/git-ports";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  deriveAuthorizedExecutionSlice,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools";

const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

describe("GCEC ownership negatives", () => {
  it("N1 commit claim without repository SHA → reported not verified", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyCommitClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: "acme/widget",
      claimedCommitSha: SHA,
      bindings: {
        projectId: "prj:n",
        cycleInstanceId: "cyc:n",
        executionContractId: "xct:n",
      },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe("reported");
  });

  it("N2 PR claim head mismatch → failed", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    read.seedPullRequest({
      number: 42,
      title: "x",
      state: "open",
      headSha: OTHER,
      baseBranch: "main",
      url: "https://github.com/acme/widget/pull/42",
    });
    const r = await verifyPullRequestClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: "acme/widget",
      claimedPrNumber: 42,
      claimedHeadSha: SHA,
      bindings: {
        projectId: "prj:n",
        cycleInstanceId: "cyc:n",
      },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("pr_head_mismatch");
  });

  it("N6 out-of-scope workspace write → verify fails", async () => {
    const r = await verifyWorkspaceFileEffects({
      worktreePath: "/tmp",
      pathAllowlist: ["docs/"],
      targetPath: "docs/fd.md",
      nameStatusText: "A\tsrc/evil.ts\nA\tdocs/fd.md",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_files_outside_allowlist");
  });

  it("N7 Studio git-ports barrel exports no mutation methods", () => {
    const barrel = fs.readFileSync(
      path.resolve(__dirname, "../../../lib/oa/git-ports/index.ts"),
      "utf8",
    );
    expect(barrel).not.toMatch(/commitArtifactEvidence/);
    expect(barrel).not.toMatch(/pushBranchEvidence/);
    expect(barrel).not.toMatch(/openPullRequestEvidence/);
    expect(barrel).not.toMatch(/mergePullRequestEvidence/);
    expect(barrel).not.toMatch(/LocalGitCommitPort/);
    expect(barrel).not.toMatch(/NodeLocalGitCommitPort/);
  });

  it("N8 Nora tools have no Git mutation tools", () => {
    const names = CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name);
    const mutationLike = names.filter((n) =>
      /(?:^|_)(push|merge|create_pr|pr_create|pr_merge|git_commit)(?:_|$)/i.test(
        n,
      ),
    );
    expect(mutationLike).toEqual([]);
    expect(
      names.every((n) => n.startsWith("git_local_") || n.startsWith("github_")),
    ).toBe(true);
    // Read-only commit *inspection* is allowed; mutation is not.
    expect(names).toContain("github_get_commit");
  });

  it("N9 cycle without Git requirement → absence does not block", () => {
    const state = deriveCycleExitState({
      projectId: "prj:n",
      cycleInstanceId: "cyc:n",
      cycleTypeId: "cyc:framing",
      repositoryBinding: null,
      executionContracts: [
        {
          contractId: "xct:n",
          status: "completed",
          expectedOutputs: ["artifact"],
          evidenceRequirements: [],
        },
      ],
      evidence: [
        {
          schemaVersion: "0.2.0-oa",
          evidenceId: "ev:art",
          type: "artifact",
          status: "available",
          source: "test",
          sourceKind: "external",
          classification: "internal",
          storageMode: "metadata_only",
          digest: DIGEST,
          location: "docs/note.md",
          bindings: {
            projectId: "prj:n",
            cycleInstanceId: "cyc:n",
            executionContractId: "xct:n",
            executionAttemptId: "xat:n",
          },
          createdAt: "2026-09-11T12:00:00.000Z",
          updatedAt: "2026-09-11T12:00:00.000Z",
          version: 1,
          producedAt: "2026-09-11T12:00:00.000Z",
          availability: "available",
          containsSecrets: false,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: "prv:t",
            actor: { actorId: "a", role: "system" },
            source: "system",
            timestamp: "2026-09-11T12:00:00.000Z",
            correlationId: "c",
          },
        } as never,
      ],
    });
    expect(
      state.requirements.every(
        (r) =>
          r.kind === "artifact" ||
          r.status === "NOT_APPLICABLE" ||
          r.status === "VERIFIED",
      ),
    ).toBe(true);
    expect(state.requirements.find((r) => r.kind === "commit")?.status).toBe(
      "NOT_APPLICABLE",
    );
  });

  it("N10 AuthorizedExecutionSlice blocks git without Confirmation", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n",
      evidenceRequirements: ["git:local_commit", "git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.authorizedEffects).toContain("filesystem.create");
  });

  it("N12 cursor report claim alone does not satisfy git SET", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: [
        {
          schemaVersion: "0.2.0-oa",
          evidenceId: "ev:claim",
          type: "other",
          status: "available",
          source: "git:local_commit",
          sourceKind: "external",
          classification: "internal",
          storageMode: "metadata_only",
          location: `git:local_commit?repo=acme%2Fwidget&commitSha=${SHA}`,
          technicalResultRef: "studio:cursor_report_claim:git:local_commit",
          bindings: { cycleInstanceId: "cyc:n", projectId: "prj:n" },
          createdAt: "2026-09-11T12:00:00.000Z",
          updatedAt: "2026-09-11T12:00:00.000Z",
          version: 1,
          producedAt: "2026-09-11T12:00:00.000Z",
          availability: "available",
          containsSecrets: false,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: "prv:t",
            actor: { actorId: "a", role: "system" },
            source: "system",
            timestamp: "2026-09-11T12:00:00.000Z",
            correlationId: "c",
          },
        } as never,
      ],
      expected: {
        repositoryRef: "acme/widget",
        targetPath: "docs/fd.md",
        artifactDigest: DIGEST,
        cycleInstanceId: "cyc:n",
      },
    });
    expect(r.status).toBe("BLOCKING");
  });
});
