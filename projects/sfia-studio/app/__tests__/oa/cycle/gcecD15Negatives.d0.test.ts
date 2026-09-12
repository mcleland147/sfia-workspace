/**
 * D-GCEC-15 Option B negatives — N1–N28 (unit/integration focused).
 * CR-GCEC-17: technicalResultRef is never a trust marker; only Evidence.status=verified.
 * Empty git families do not expand to full GCEC chain.
 * ZERO OpenAI. ZERO REAL Cursor.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  deriveCycleExitState,
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  gitProofFamiliesFromRequirements,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle";
import {
  buildTypedGitEvidenceFields,
  createTestEvidenceReviewServices,
  type Evidence,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import {
  buildGitEffectActionRef,
  deriveAuthorizedExecutionSlice,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  qualifyExecutionContractCompletion,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  verifyCommitClaim,
  verifyPullRequestClaim,
} from "@/lib/oa/git-ports";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools";

const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const CYCLE = "cycinst:gcec-n";
const REPO = "acme/widget";
const PATH = "docs/functional-design.md";

function baseEvidence(
  partial: Partial<Evidence> & { evidenceId: string },
): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: partial.evidenceId,
    type: partial.type ?? "other",
    status: partial.status ?? "available",
    source: partial.source ?? "test",
    sourceKind: partial.sourceKind ?? "external",
    classification: partial.classification ?? "internal",
    storageMode: partial.storageMode ?? "metadata_only",
    bindings: partial.bindings ?? {
      cycleInstanceId: CYCLE,
      projectId: "prj:gcec",
      executionContractId: "xct:gcec",
    },
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
  status: Evidence["status"] = "verified",
): Evidence {
  const fields = buildTypedGitEvidenceFields(source, payload as never);
  if (!fields.ok) throw new Error(fields.reason);
  return baseEvidence({
    evidenceId,
    source: fields.fields.source,
    location: fields.fields.location,
    digest: fields.fields.digest ?? DIGEST,
    status,
    // CR-17 — forgeable marker must not grant trust by itself
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

function fullVerifiedSet(): Evidence[] {
  return [
    typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: SHA, message: "docs" },
      "ev:commit",
    ),
    typed(
      "git:remote_push",
      {
        repositoryRef: REPO,
        remote: "origin",
        refName: "gcec/docs",
        commitSha: SHA,
      },
      "ev:push",
    ),
    typed(
      "git:pull_request",
      {
        repositoryRef: REPO,
        prNumber: 1,
        headSha: SHA,
        headBranch: "gcec/docs",
        baseBranch: "main",
        state: "open",
      },
      "ev:pr",
    ),
    typed(
      "git:ci_status",
      {
        repositoryRef: REPO,
        commitSha: SHA,
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
        mergeCommitSha: SHA,
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
        targetSha: SHA,
        artifactPath: PATH,
        artifactDigest: DIGEST,
      },
      "ev:post",
    ),
  ];
}

describe("gcecD15Negatives — N1–N28", () => {
  it("N1 attempt success with remaining git reqs → nextStatus confirmed not completed", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
    expect(q.remainingRequiredEffects.length).toBeGreaterThan(0);
  });

  it("N2 empty evidenceRequirements + no docs_write capability → no git candidates", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n2",
      evidenceRequirements: [],
      requiredCapabilities: [],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("N3 empty git families in qualifyGitCompletionProofSet with requirements:[] → BLOCKING unresolved", () => {
    expect(gitProofFamiliesFromRequirements([])).toEqual([]);
    const r = qualifyGitCompletionProofSet({
      evidence: [],
      requirements: [],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("git_requirements_unresolved");
    }
  });

  it("N4 CR-17 technicalResultRef alone with available status → BLOCKING", () => {
    const forged = fullVerifiedSet().map((e) => ({
      ...e,
      status: "available" as const,
      technicalResultRef: `studio:repository_read_verified:${e.source}`,
    }));
    const r = qualifyGitCompletionProofSet({ evidence: forged, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("status_not_verified");
    }
  });

  it("N5 verified full set → SATISFIED", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected,
    });
    expect(r.status).toBe("SATISFIED");
  });

  it("N6 slice blocks git without Confirmation; git-only does not authorize FS", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n6",
      evidenceRequirements: ["git:local_commit", "git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("N7 confirmation grants git.commit only when actionRef matches", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:n7",
      effect: "git.commit",
      repositoryRef: REPO,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n7",
      evidenceRequirements: ["git:local_commit", "git:remote_push"],
      confirmations: [
        {
          confirmationId: "cnf:n7",
          status: "granted",
          actionRef,
          scope: "git:local_commit",
          level: "N3",
          requestedBy: { actorId: "a", role: "system" },
          requestedTo: { actorId: "a", role: "system" },
          version: 1,
          createdAt: "2026-09-11T10:00:00.000Z",
          updatedAt: "2026-09-11T10:00:00.000Z",
        } as never,
      ],
      confirmationMatch: { repositoryRef: REPO },
    });
    expect(slice.authorizedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.push");
  });

  it("N8 cap:cursor.docs_write does NOT imply Git effects (CR-GCEC-15)", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n8",
      evidenceRequirements: [],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("validation.run");
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("N9 FakeDocsWrite skips filesystem when not authorized (git-only)", async () => {
    const root = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "gcec-n9-"));
    try {
      const port = new FakeDocsWriteLaunchPort({
        worktreeRoot: root,
        pathAllowlist: ["docs/"],
        targetPath: PATH,
      });
      const launch = await port.launch({
        attemptId: "xat:n9",
        executionContractId: "xct:n9",
        executionContractVersion: 1,
        semanticFingerprint: "fp:n9",
        selectedAgentRef: "agt:m4",
        adapterRef: "adp:m4",
        correlationId: "cor:n9",
        baseHeadSha: SHA,
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: "workspace.isolated.docs_write",
        scope: "docs",
        timeoutMs: 1000,
        authorizedEffects: ["git.commit"],
        authorizedExecutionSlice: {
          authorizedEffects: ["git.commit"],
          blockedEffects: ["filesystem.create", "filesystem.modify"],
          reasons: [],
        },
        docsWriteSpec: {
          repositoryRef: REPO,
          targetPath: PATH,
          pathAllowlist: ["docs/"],
          artifactType: "functional_design",
          artifactBrief: "fd",
          contentRequirements: [],
          scopeIn: ["docs/"],
          scopeOut: [],
          expectedOutputs: [PATH],
          validationExpectations: [],
          evidenceRequirements: ["git:local_commit"],
          createOrModify: true,
          noDelete: true,
        },
      });
      expect(launch.outcome).toBe("ack");
      expect(port.lastReport?.stoppedBeforeEffects).toEqual(
        expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
      );
      expect(fs.existsSync(path.join(root, PATH))).toBe(false);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("N10 commit claim without repository SHA → reported not verified", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyCommitClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: REPO,
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

  it("N11 PR claim head mismatch → failed", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    read.seedPullRequest({
      number: 42,
      title: "x",
      state: "open",
      headSha: OTHER,
      headBranch: "feature/gcec",
      baseBranch: "main",
      url: "https://github.com/acme/widget/pull/42",
    });
    const r = await verifyPullRequestClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: REPO,
      claimedPrNumber: 42,
      claimedHeadSha: SHA,
      bindings: { projectId: "prj:n", cycleInstanceId: "cyc:n" },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("pr_head_mismatch");
  });

  it("N12 out-of-scope workspace write → verify fails", async () => {
    const r = await verifyWorkspaceFileEffects({
      worktreePath: "/tmp",
      pathAllowlist: ["docs/"],
      targetPath: "docs/fd.md",
      nameStatusText: "A\tsrc/evil.ts\nA\tdocs/fd.md",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_files_outside_allowlist");
  });

  it("N13 Studio git-ports barrel exports no mutation methods", () => {
    const barrel = fs.readFileSync(
      path.resolve(__dirname, "../../../lib/oa/git-ports/index.ts"),
      "utf8",
    );
    expect(barrel).not.toMatch(/LocalGitCommitPort/);
    expect(barrel).not.toMatch(/NodeLocalGitCommitPort/);
    expect(barrel).not.toMatch(/commitArtifactEvidence/);
  });

  it("N14 Nora tools have no Git mutation tools", () => {
    const names = CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name);
    const mutationLike = names.filter((n) =>
      /(?:^|_)(push|merge|create_pr|pr_create|pr_merge|git_commit)(?:_|$)/i.test(
        n,
      ),
    );
    expect(mutationLike).toEqual([]);
  });

  it("N15 cycle without Git requirement → absence does not block", () => {
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
        baseEvidence({
          evidenceId: "ev:art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: "docs/note.md",
        }),
      ],
    });
    expect(state.requirements.find((r) => r.kind === "commit")?.status).toBe(
      "NOT_APPLICABLE",
    );
  });

  it("N16 cursor report claim alone does not satisfy git SET", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: [
        baseEvidence({
          evidenceId: "ev:claim",
          status: "available",
          source: "git:local_commit",
          location: `git:local_commit?repo=acme%2Fwidget&commitSha=${SHA}`,
          technicalResultRef: "studio:cursor_report_claim:git:local_commit",
        }),
      ],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N17 ci failure → BLOCKING", () => {
    const set = fullVerifiedSet().map((e) =>
      e.source === "git:ci_status"
        ? typed(
            "git:ci_status",
            {
              repositoryRef: REPO,
              commitSha: SHA,
              conclusion: "failure",
            },
            "ev:ci-fail",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") expect(r.reason).toBe("ci_not_success");
  });

  it("N18 review pending → BLOCKING", () => {
    const set = fullVerifiedSet().map((e) =>
      e.source === "git:review_status"
        ? typed(
            "git:review_status",
            { repositoryRef: REPO, prNumber: 1, state: "pending" },
            "ev:review-pending",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") expect(r.reason).toBe("review_not_approved");
  });

  it("N19 digest mismatch on post_merge → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, artifactDigest: ("sha256:" + "0".repeat(64)) as Digest },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N20 CR-GCEC-20 foreign-EC verified Evidence must NOT complete xct:n20", () => {
    const evidence = [
      baseEvidence({
        evidenceId: "ev:art",
        type: "artifact",
        status: "verified",
        digest: DIGEST,
        location: PATH,
        source: "execution_attempt:docs_write",
        bindings: {
          cycleInstanceId: CYCLE,
          projectId: "prj:gcec",
          executionContractId: "xct:gcec",
        },
      }),
      ...fullVerifiedSet(),
    ];
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:n20",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
  });

  it("N21 verifiedEffects exclude FS from re-authorization", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n21",
      evidenceRequirements: ["artifact", "git:local_commit"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      verifiedEffects: ["filesystem.create", "filesystem.modify", "validation.run"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toEqual(
      expect.arrayContaining([
        "filesystem.create",
        "filesystem.modify",
      ]),
    );
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
    // CR-GCEC-24 — validation not required → not re-authorized
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("N22 git:commit alias authorizes same as git:local_commit", () => {
    const a = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n22a",
      evidenceRequirements: ["git:commit"],
      confirmations: [],
    });
    const b = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n22b",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [],
    });
    expect(a.blockedEffects).toContain("git.commit");
    expect(b.blockedEffects).toContain("git.commit");
  });

  it("N23 requireVerified default rejects available rows even with forge marker", () => {
    const available = typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: SHA, message: "docs" },
      "ev:avail",
      "available",
    );
    const r = qualifyGitCompletionProofSet({
      evidence: [available],
      requirements: ["git:local_commit"],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N24 buildGitEffectActionRef embeds executionContractId + repo", () => {
    const ref = buildGitEffectActionRef({
      executionContractId: "xct:n24",
      effect: "git.push",
      repositoryRef: "acme/widget",
      branchOrRef: "gcec/docs",
    });
    expect(ref).toContain("xct:n24");
    expect(ref).toContain("acme__widget");
    expect(ref).toContain("git-remote_push");
  });

  it("N25 incomplete set missing merge → BLOCKING incomplete_git_proof_set", () => {
    const partial = fullVerifiedSet().filter((e) => e.source !== "git:merge");
    const r = qualifyGitCompletionProofSet({ evidence: partial, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.missing).toContain("git:merge");
    }
  });

  it("N26 repo mismatch → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, repositoryRef: "other/repo" },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N27 cycleInstance mismatch → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, cycleInstanceId: "cyc:other" },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N28 StartExecutionRequest type surface includes confirmations (compile/runtime shape)", () => {
    // Structural guard — confirmations must be passable for Option B continuation.
    const req: { confirmations?: readonly unknown[] } = {
      confirmations: [],
    };
    expect(Array.isArray(req.confirmations)).toBe(true);
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/execution-attempt/application/startExecution.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/confirmations:\s*request\.confirmations\s*\?\?\s*\[\]/);
  });

  function grantedCnf(partial: {
    confirmationId: string;
    actionRef: string;
    scope: string;
    requestedTo?: { actorId: string; role: string };
    expiresAt?: string;
  }) {
    return {
      confirmationId: partial.confirmationId,
      status: "granted" as const,
      actionRef: partial.actionRef,
      scope: partial.scope,
      level: "N3" as const,
      requestedBy: { actorId: "a", role: "system" },
      requestedTo: partial.requestedTo ?? { actorId: "a", role: "system" },
      version: 1,
      createdAt: "2026-09-11T10:00:00.000Z",
      updatedAt: "2026-09-11T10:00:00.000Z",
      expiresAt: partial.expiresAt,
    } as never;
  }

  it("C19-N1 generic actionRef git:merge + correct scope + concrete match → REFUSED", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n1",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n1",
          actionRef: "git:merge",
          scope: "git:merge",
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 7,
        branchOrRef: "main",
      },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
    expect(slice.blockedEffects).toContain("github.pr.merge");
  });

  it("C19-N2 correct effect wrong executionContractId → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:other",
      effect: "git.push",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n2",
      evidenceRequirements: ["git:remote_push"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n2",
          actionRef,
          scope: "git:remote_push",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
  });

  it("C19-N3 correct EC wrong repository → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n3",
      effect: "git.commit",
      repositoryRef: "other/repo",
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n3",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n3",
          actionRef,
          scope: "git:local_commit",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N4 correct repo wrong branch for push → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n4",
      effect: "git.push",
      repositoryRef: REPO,
      branchOrRef: "wrong/branch",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n4",
      evidenceRequirements: ["git:remote_push"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n4",
          actionRef,
          scope: "git:remote_push",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
  });

  it("C19-N5 correct repo wrong PR number for merge → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n5",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 99,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n5",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n5",
          actionRef,
          scope: "git:merge",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, prNumber: 1 },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C19-N6 correct target wrong requestedTo actor → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n6",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n6",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n6",
          actionRef,
          scope: "git:local_commit",
          requestedTo: { actorId: "actor:other", role: "human" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "gcec/docs",
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N7 expired Confirmation → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n7",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n7",
      evidenceRequirements: ["git:local_commit"],
      nowIso: "2026-09-11T12:00:00.000Z",
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n7",
          actionRef,
          scope: "git:local_commit",
          expiresAt: "2026-09-11T11:00:00.000Z",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N8 exact canonical actionRef + correct scope/actor → AUTHORIZED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n8",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 1,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n8",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n8",
          actionRef,
          scope: "git:merge",
          requestedTo: { actorId: "actor:pilote", role: "human" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 1,
        branchOrRef: "main",
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).toContain("github.pr.merge");
  });

  it("C19 collision-safe actionRef: different PR → different refs under length bound", () => {
    const longEc = `xct:${"n".repeat(80)}`;
    const a = buildGitEffectActionRef({
      executionContractId: longEc,
      effect: "github.pr.merge",
      repositoryRef: "org/very-long-repository-name-for-collision-test",
      branchOrRef: "feature/very-long-branch-name-aaaaaaaa",
      prNumber: 1,
    });
    const b = buildGitEffectActionRef({
      executionContractId: longEc,
      effect: "github.pr.merge",
      repositoryRef: "org/very-long-repository-name-for-collision-test",
      branchOrRef: "feature/very-long-branch-name-aaaaaaaa",
      prNumber: 2,
    });
    expect(a.length).toBeLessThanOrEqual(128);
    expect(b.length).toBeLessThanOrEqual(128);
    expect(a).not.toBe(b);
  });

  function evidenceForContract(
    executionContractId: string,
    extras?: Partial<Evidence>,
  ): Evidence[] {
    const art = baseEvidence({
      evidenceId: `ev:art:${executionContractId}`,
      type: "artifact",
      status: "verified",
      digest: DIGEST,
      location: PATH,
      source: "execution_attempt:docs_write",
      bindings: {
        cycleInstanceId: CYCLE,
        projectId: "prj:gcec",
        executionContractId,
      },
      ...extras,
    });
    const git = fullVerifiedSet().map((e) => ({
      ...e,
      evidenceId: `${e.evidenceId}:${executionContractId}`,
      bindings: {
        cycleInstanceId: CYCLE,
        projectId: "prj:gcec",
        executionContractId,
      },
    }));
    return [art, ...git];
  }

  it("C20-N1 all Evidence verified but foreign EC → complete=false", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: evidenceForContract("xct:foreign"),
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N2 all Evidence verified but foreign project → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n2").map((e) => ({
      ...e,
      bindings: {
        ...e.bindings!,
        projectId: "prj:foreign",
        executionContractId: "xct:c20n2",
      },
    }));
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n2",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N3 all Evidence verified but foreign cycle → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n3").map((e) => ({
      ...e,
      bindings: {
        ...e.bindings!,
        cycleInstanceId: "cyc:foreign",
        executionContractId: "xct:c20n3",
      },
    }));
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N4 binding absent → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n4").map((e) => {
      const { bindings: _b, ...rest } = e;
      return rest as Evidence;
    });
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n4",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-P1 exact project/cycle/EC bindings → complete=true", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20p1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: evidenceForContract("xct:c20p1"),
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("completed");
  });

  it("C21-N1 VERIFIED Artifact only + explicit validation → NOT complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n1-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n1",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C21-N2 VERIFIED Artifact only + no validation requirement → validation does not block", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n2",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n2-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n2",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
    expect(q.remainingRequiredEffects).not.toContain("validation.run");
  });

  it("C21-N3 VERIFIED validation + missing Artifact when required → NOT complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n3-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n3",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("filesystem.create");
  });

  it("C21-P1 Artifact + validation verified → complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21p1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21p1-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21p1",
          },
        }),
        baseEvidence({
          evidenceId: "ev:c21p1-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21p1",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
  });

  it("C21-N4 Artifact source cannot be interpreted as validation/tests", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n4",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["validation"],
        requiredCapabilities: [],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n4-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "artifact",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n4",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C21-N5 validation Evidence from foreign EC → cannot satisfy", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n5",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n5-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n5",
          },
        }),
        baseEvidence({
          evidenceId: "ev:c21n5-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:foreign",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C24-N1 artifact-only → filesystem eligible; validation.run NOT authorized", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n1",
      evidenceRequirements: ["artifact"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("C24-P1 artifact + explicit validation → validation.run authorized", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p1",
      evidenceRequirements: ["artifact", "validation"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toContain("validation.run");
  });

  it("C24-N2 post_merge_verification only → github.pr.merge NOT authorized", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c24n2",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 1,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n2",
      evidenceRequirements: ["git:post_merge_verification"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c24n2",
          actionRef,
          scope: "git:merge",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, prNumber: 1 },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
    expect(slice.blockedEffects).toContain("github.pr.merge");
  });

  it("C24-P2 git:merge explicit → merge candidate Confirmation-gated", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p2",
      evidenceRequirements: ["git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.reasons.some((r) => r.includes("confirmation_required"))).toBe(
      true,
    );
  });

  it("C24-N3 ci_status only → no Cursor Git mutation", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n3",
      evidenceRequirements: ["git:ci_status"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C24-N4 review_status only → no Cursor Git mutation", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n4",
      evidenceRequirements: ["git:review_status"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
    expect(slice.authorizedEffects).not.toContain("github.pr.create");
  });

  it("C24-N5 postmerge + no merge + exact merge Confirmation → still NO merge", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c24n5",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 7,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n5",
      evidenceRequirements: ["git:post_merge_verification"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c24n5",
          actionRef,
          scope: actionRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 7,
        branchOrRef: "main",
      },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C24-P3 full vertical → Cursor gets commit/push/PR/merge only", () => {
    const classified = {
      reqs: [
        "artifact",
        "git:local_commit",
        "git:remote_push",
        "git:pull_request",
        "git:ci_status",
        "git:review_status",
        "git:merge",
        "git:post_merge_verification",
      ],
    };
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p3",
      evidenceRequirements: classified.reqs,
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(slice.blockedEffects).toEqual(
      expect.arrayContaining([
        "git.commit",
        "git.push",
        "github.pr.create",
        "github.pr.merge",
      ]),
    );
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("C23 resolveGitEffectTarget refuses projected repo mismatch", async () => {
    const { resolveGitEffectTarget } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23",
        projectId: "prj:gcec",
        inputs: { workingBranch: "gcec/docs" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      projectedRepositoryRef: "other/repo",
      actorId: "actor:pilote",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toContain("mismatch");
  });

  it("C23-N1 caller repo override refused vs Project binding", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
      resolvedTargetToConfirmationMatch,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23n1",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.repositoryRef).toBe("acme/widget");
    const hostile = assertConfirmationMatchAgreesWithServerTarget({
      assertion: { repositoryRef: "other/repo" },
      server: resolved.target,
    });
    expect(hostile.ok).toBe(false);
    const serverMatch = resolvedTargetToConfirmationMatch(resolved.target);
    const actionRefHostile = buildGitEffectActionRef({
      executionContractId: "xct:c23n1",
      effect: "git.commit",
      repositoryRef: "other/repo",
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c23n1",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c23n1",
          actionRef: actionRefHostile,
          scope: actionRefHostile,
        }),
      ],
      confirmationMatch: serverMatch,
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C23-N2 caller branch override refused vs EC durable branch", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.push",
      contract: {
        executionContractId: "xct:c23n2",
        projectId: "prj:gcec",
        inputs: { workingBranch: "branch-a" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.branchOrRef).toBe("branch-a");
    expect(
      assertConfirmationMatchAgreesWithServerTarget({
        assertion: { branchOrRef: "branch-b" },
        server: resolved.target,
      }).ok,
    ).toBe(false);
  });

  it("C23-N3 verified PR #41; caller assertion #42 refused by assert helper", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const evidence = [
      baseEvidence({
        evidenceId: "ev:pr41",
        status: "verified",
        source: "git:pull_request",
        location: "git:pull_request?repo=acme%2Fwidget&prNumber=41&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fx&baseBranch=main&state=open",
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: CYCLE,
          executionContractId: "xct:c23n3",
        },
      }),
    ];
    const resolved = resolveGitEffectTarget({
      effect: "github.pr.merge",
      contract: {
        executionContractId: "xct:c23n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        inputs: {},
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
      verifiedEvidence: evidence,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.prNumber).toBe(41);
    const assertOk = assertConfirmationMatchAgreesWithServerTarget({
      assertion: { prNumber: 42 },
      server: resolved.target,
    });
    expect(assertOk.ok).toBe(false);
  });

  it("C23-N4 hostile actorId cannot authorize — server actor from request wins", async () => {
    const { resolveGitEffectTarget } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23n4",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.actorId).toBe("actor:pilote");
    expect(resolved.target.actorId).not.toBe("actor:hostile");
  });

  it("C23-P1 canonical server-derived target + exact Confirmation → authorized", async () => {
    const {
      resolveGitEffectTarget,
      resolvedTargetToConfirmationMatch,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23p1",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    const match = resolvedTargetToConfirmationMatch(resolved.target);
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c23p1",
      effect: "git.commit",
      repositoryRef: match.repositoryRef!,
      branchOrRef: match.branchOrRef,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c23p1",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c23p1",
          actionRef,
          scope: actionRef,
          requestedTo: { actorId: "actor:pilote", role: "pilote" },
        }),
      ],
      confirmationMatch: match,
    });
    expect(slice.authorizedEffects).toContain("git.commit");
  });

  it("C23-P2 matching assertion allowed but non-authoritative", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23p2",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(
      assertConfirmationMatchAgreesWithServerTarget({
        assertion: {
          repositoryRef: REPO,
          branchOrRef: "main",
          actorId: "actor:pilote",
        },
        server: resolved.target,
      }).ok,
    ).toBe(true);
  });

  it("H23A-P1 canonical repo + branch + exact Confirmation → git.commit authorized", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:h23a-p1",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23a-p1",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23a-p1",
          actionRef,
          scope: actionRef,
          requestedTo: { actorId: "actor:pilote", role: "pilote" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "main",
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).toContain("git.commit");
  });

  it("H23A-N3 empty repositoryRef Confirmation cannot authorize git.commit", () => {
    const emptyRef = buildGitEffectActionRef({
      executionContractId: "xct:h23a-n3",
      effect: "git.commit",
      repositoryRef: "",
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23a-n3",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23a-n3",
          actionRef: emptyRef,
          scope: emptyRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: "",
        branchOrRef: "main",
      },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("H23A unavailableProtectedEffects blocks git even with crafted Confirmation", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:h23a-u",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23a-u",
      evidenceRequirements: ["artifact", "git:local_commit"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23a-u",
          actionRef,
          scope: actionRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "main",
        actorId: "a",
      },
      unavailableProtectedEffects: ["git.commit"],
    });
    expect(slice.authorizedEffects).toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.reasons.some((r) => r.includes("canonical_target_unavailable"))).toBe(
      true,
    );
  });

  it("H23B-N1 merge without VERIFIED PR + crafted Confirmation → not authorized", async () => {
    const { resolveGitEffectTarget } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "github.pr.merge",
      contract: {
        executionContractId: "xct:h23b-n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        inputs: {},
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
      verifiedEvidence: [],
    });
    expect(resolved.ok).toBe(false);
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:h23b-n1",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      branchOrRef: "main",
      prNumber: 1,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23b-n1",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23b-n1",
          actionRef,
          scope: actionRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "main",
        // no prNumber — incomplete canonical target
      },
      unavailableProtectedEffects: ["github.pr.merge"],
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("H23B-N2 ambiguous VERIFIED PR identities → resolve fails", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const evidence = [
      baseEvidence({
        evidenceId: "ev:pr41",
        status: "verified",
        source: "git:pull_request",
        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fx&baseBranch=main&state=open`,
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: CYCLE,
          executionContractId: "xct:h23b-n2",
        },
      }),
      baseEvidence({
        evidenceId: "ev:pr42",
        status: "verified",
        source: "git:pull_request",
        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=42&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fy&baseBranch=main&state=open`,
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: CYCLE,
          executionContractId: "xct:h23b-n2",
        },
      }),
    ];
    const r = resolveVerifiedPullRequestNumber({
      evidence,
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23b-n2",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_ambiguous");
  });

  it("H23B-P1 unique VERIFIED PR + exact merge Confirmation → authorized", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:h23b-p1",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      branchOrRef: "main",
      prNumber: 41,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23b-p1",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23b-p1",
          actionRef,
          scope: actionRef,
          requestedTo: { actorId: "actor:pilote", role: "pilote" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "main",
        prNumber: 41,
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).toContain("github.pr.merge");
  });

  it("H23C-N1 VERIFIED PR without repository identity → ineligible", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-norepo",
          status: "verified",
          source: "git:pull_request",
          location: "git:pull_request?prNumber=41",
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n1",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-n1",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_missing");
  });

  it("H23C-N2 VERIFIED PR wrong repository → ineligible", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-wrong",
          status: "verified",
          source: "git:pull_request",
          location: "git:pull_request?repo=other%2Frepo&prNumber=41",
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n2",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-n2",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
  });

  it("H23C-N3 VERIFIED PR missing prNumber → ineligible", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-nopr",
          status: "verified",
          source: "git:pull_request",
          location: `git:pull_request?repo=${encodeURIComponent(REPO)}`,
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n3",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-n3",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
  });

  it("H23C-P1 exact project/cycle/EC/repo/pr → trusted #41", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-ok",
          status: "verified",
          source: "git:pull_request",
          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fx&baseBranch=main&state=open`,
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-p1",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-p1",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.prNumber).toBe(41);
  });

  it("H23C-N4 malformed no-repo row does not make unique #41 ambiguous", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-ok41",
          status: "verified",
          source: "git:pull_request",
          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41&headSha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&headBranch=feature%2Fx&baseBranch=main&state=open`,
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n4",
          },
        }),
        baseEvidence({
          evidenceId: "ev:pr-malformed42",
          status: "verified",
          source: "git:pull_request",
          location: "git:pull_request?prNumber=42",
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n4",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-n4",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.prNumber).toBe(41);
  });
});
