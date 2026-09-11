/**
 * GCEC deterministic E2E — ownership realignment (D-GCEC-09..14).
 * Cursor writes (Fake) → Studio reads/verifies → Nora reasons.
 * ZERO OpenAI REAL. ZERO Cursor REAL. ZERO remote Product Git.
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  deriveCycleExitState,
  deriveFinalizationApplicability,
  qualifyGitCompletionProofSet,
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
} from "@/lib/oa/cycle";
import {
  createTestEvidenceReviewServices,
  evaluateGcecArtifactEvidence,
  type Evidence,
} from "@/lib/oa/evidence-review";
import {
  FakeDocsWriteLaunchPort,
  ManagedProjectRepositoryResolver,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  deriveAuthorizedExecutionSlice,
  extractDocsWriteLaunchSpec,
  verifyWorkspaceFileEffects,
  type DocsWriteLaunchSpec,
} from "@/lib/oa/execution-attempt";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { validateExecutionIntentPayload } from "@/features/project-assistant/f2/executionIntentSchema";
import {
  FakeRepositoryReadPorts,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  verifyCommitClaim,
  verifyMergeClaim,
  verifyPostMergeEvidence,
  verifyPullRequestClaim,
  verifyPushClaim,
} from "@/lib/oa/git-ports";
import { createTestDecisionServices } from "@/lib/oa/decision";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const temps: string[] = [];
afterEach(() => {
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

function initManagedRepo(managedBase: string, identity: string): {
  repoRoot: string;
  baseHeadSha: string;
} {
  const resolver = new ManagedProjectRepositoryResolver();
  const sanitized = identity.replace(/[^a-zA-Z0-9._-]+/g, "__");
  const repoRoot = path.join(managedBase, sanitized);
  fs.mkdirSync(repoRoot, { recursive: true });
  git(repoRoot, ["init"]);
  git(repoRoot, ["config", "user.email", "gcec@test.local"]);
  git(repoRoot, ["config", "user.name", "GCEC Test"]);
  git(repoRoot, [
    "remote",
    "add",
    "origin",
    `https://github.com/${identity}.git`,
  ]);
  fs.writeFileSync(path.join(repoRoot, "README.md"), "# widget\n");
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  git(repoRoot, ["add", "README.md"]);
  git(repoRoot, ["commit", "-m", "init"]);
  const baseHeadSha = git(repoRoot, ["rev-parse", "HEAD"]);
  expect(resolver.resolveLocalRepoRoot({ identity }, managedBase)).toBe(
    repoRoot,
  );
  return { repoRoot, baseHeadSha };
}

describe("gcecDeterministicE2e — Cursor writes / Studio verifies", () => {
  it("A→AC: F2 intent → Fake Cursor → independent verify → CycleExit VERIFIED", async () => {
    const root = tempDir("sfia-gcec-own-");
    const managedBase = path.join(root, "managed");
    const dbPath = path.join(root, "product.sqlite");
    const identity = "acme/widget";
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, identity);

    const { resolver: doctrine } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const projects: SqliteProductProjectServices =
      createTestSqliteProductProjectServices({
        doctrineResolver: doctrine,
        dbPath,
        fixedNowIso: "2026-09-11T12:00:00.000Z",
      });
    createTestDecisionServices({
      projectServices: projects,
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });

    // A–B Project + repositoryBinding
    const created = await projects.createProject.execute({
      projectId: "prj:gcec-e2e",
      title: "GCEC E2E",
      objective: "Functional design governed cycle",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:gcec-e2e-v1",
      idempotencyKey: "idem:gcec-e2e",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const bound = await projects.setProjectRepositoryBinding.execute({
      projectId: "prj:gcec-e2e",
      actor: ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: baseHeadSha,
      },
    });
    expect(bound.ok).toBe(true);

    // D–E Fake OpenAI → F2 structured intent
    const provider = new FakeConversationProvider();
    const analyzed = await analyzeIntent({
      userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
      projectSummary: "GCEC E2E project",
      provider,
    });
    expect(analyzed.analysis.parseOk).toBe(true);
    const ei = validateExecutionIntentPayload(
      analyzed.analysis.executionIntent,
    );
    expect(ei.ok).toBe(true);
    if (!ei.ok) return;
    expect(ei.payload.exitRequirementKinds?.length).toBeGreaterThan(0);

    const docsWriteSpec: DocsWriteLaunchSpec = {
      repositoryRef: ei.payload.targetRepositoryRef!,
      targetPath: ei.payload.targetPath!,
      pathAllowlist: ei.payload.scopeIn ?? ["docs/"],
      artifactType: ei.payload.artifactType ?? "functional_design",
      artifactBrief: ei.payload.artifactBrief!,
      contentRequirements: ei.payload.contentRequirements ?? [],
      scopeIn: ei.payload.scopeIn ?? ["docs/"],
      scopeOut: ei.payload.scopeOut ?? [],
      expectedOutputs: ei.payload.expectedOutputs ?? [ei.payload.targetPath!],
      validationExpectations: ei.payload.validationExpectations ?? [],
      evidenceRequirements: ei.payload.evidenceRequirements ?? [
        ...GCEC_GIT_COMPLETION_PROOF_FAMILIES,
      ],
      createOrModify: true,
      noDelete: true,
    };

    // H — EC inputs MUST NOT carry managedRepoRoot (server resolves).
    const contractLike = {
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      expectedOutputs: docsWriteSpec.expectedOutputs,
      evidenceRequirements: docsWriteSpec.evidenceRequirements,
      inputs: {
        repositoryRef: docsWriteSpec.repositoryRef,
        targetPath: docsWriteSpec.targetPath,
        pathAllowlist: docsWriteSpec.pathAllowlist,
        artifactType: docsWriteSpec.artifactType,
        artifactBrief: docsWriteSpec.artifactBrief,
        contentRequirements: docsWriteSpec.contentRequirements,
        scopeIn: docsWriteSpec.scopeIn,
        scopeOut: docsWriteSpec.scopeOut,
        expectedOutputs: docsWriteSpec.expectedOutputs,
        validationExpectations: docsWriteSpec.validationExpectations,
        evidenceRequirements: docsWriteSpec.evidenceRequirements,
        repositoryIdentity: identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseHeadSha,
      },
    };
    expect(extractDocsWriteLaunchSpec(contractLike as never).ok).toBe(true);

    // I–J AuthorizedExecutionSlice — filesystem only initially
    const slice0 = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:gcec-e2e",
      evidenceRequirements: docsWriteSpec.evidenceRequirements,
      confirmations: [],
    });
    expect(slice0.authorizedEffects).toContain("filesystem.create");
    expect(slice0.blockedEffects).toContain("git.commit");

    // K–M Fake Cursor docs-write; stops before Git effects
    const worktreeRoot = path.join(root, "wt");
    fs.mkdirSync(worktreeRoot, { recursive: true });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot,
      pathAllowlist: ["docs"],
    });
    const launch = await fakeLaunch.launch({
      attemptId: "xat:gcec-e2e",
      executionContractId: "xct:gcec-e2e",
      executionContractVersion: 2,
      semanticFingerprint: "fp:gcec-e2e",
      selectedAgentRef: "agent:m4-docs-write",
      adapterRef: "adp:studio-cursor-real",
      correlationId: "cor:gcec-e2e",
      baseHeadSha,
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      timeoutMs: 60_000,
      docsWriteSpec,
      repositoryBinding: {
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
      },
    });
    expect(launch.outcome).toBe("ack");
    expect(fakeLaunch.lastReport?.stoppedBeforeEffects).toContain("git.commit");

    // N — Studio independent workspace verification
    const ws = await verifyWorkspaceFileEffects({
      worktreePath: worktreeRoot,
      pathAllowlist: docsWriteSpec.pathAllowlist,
      targetPath: docsWriteSpec.targetPath,
      report: fakeLaunch.lastReport,
      nameStatusText: `A\t${docsWriteSpec.targetPath}`,
    });
    expect(ws.ok).toBe(true);
    if (!ws.ok) return;
    const artifactDigest = ws.digest;

    const cycleInstanceId = "cyc:gcec-e2e";
    const projectId = "prj:gcec-e2e";
    const executionContractId = "xct:gcec-e2e";
    const executionAttemptId = "xat:gcec-e2e";
    const bindings = {
      projectId,
      cycleInstanceId,
      executionContractId,
      executionAttemptId,
    };

    const art = await evidence.registerEvidence.execute({
      evidenceId: "ev:gcec-e2e-art",
      idempotencyKey: "idem:gcec-e2e-art",
      actor: ACTOR,
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      digest: artifactDigest as Digest,
      location: docsWriteSpec.targetPath,
      bindings,
    });
    expect(art.ok).toBe(true);
    if (!art.ok) return;
    expect(evaluateGcecArtifactEvidence(art.evidence).ok).toBe(true);

    const rb = await evidence.createReviewBundle.execute({
      reviewBundleId: "rb:gcec-e2e",
      idempotencyKey: "idem:gcec-e2e-rb",
      actor: ACTOR,
      projectId,
      cycleInstanceId,
      executionContractId,
      evidenceIds: [art.evidence.evidenceId],
    });
    expect(rb.ok).toBe(true);

    // O — CycleExitState: artifact VERIFIED, Git REQUIRED
    let exitState = deriveCycleExitState({
      projectId,
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
      },
      executionContracts: [
        {
          contractId: executionContractId,
          status: "executing",
          requiredCapabilities: ["cap:cursor.docs_write"],
          evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
          expectedOutputs: ["artifact"],
        },
      ],
      evidence: [art.evidence],
      proposedExitRequirementKinds: ei.payload.exitRequirementKinds,
    });
    expect(
      exitState.requirements.find((r) => r.kind === "artifact")?.status,
    ).toBe("VERIFIED");
    expect(exitState.requirements.find((r) => r.kind === "commit")?.status).toBe(
      "REQUIRED",
    );
    expect(exitState.allRequiredVerified).toBe(false);

    // Q–X — Cursor-reported Git claims verified via FakeRepositoryRead (not Studio mutate)
    // Emulate Cursor having committed in disposable repo, then seed read adapter.
    const written = path.join(worktreeRoot, docsWriteSpec.targetPath);
    const dest = path.join(repoRoot, docsWriteSpec.targetPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(written, dest);
    git(repoRoot, ["add", docsWriteSpec.targetPath]);
    git(repoRoot, ["commit", "-m", "docs: functional design"]);
    const commitSha = git(repoRoot, ["rev-parse", "HEAD"]);
    const mergeSha = commitSha; // deterministic same-tree merge stand-in

    const repoRead = new FakeRepositoryReadPorts();
    repoRead.seedCommit({
      sha: commitSha,
      message: "docs: functional design",
      parents: [baseHeadSha],
    });
    repoRead.seedBranchHead("gcec/docs", commitSha);
    repoRead.seedBranchHead("main", mergeSha);
    repoRead.seedPullRequest({
      number: 42,
      title: "FD",
      state: "open",
      headSha: commitSha,
      baseBranch: "main",
      url: `https://github.com/${identity}/pull/42`,
    });
    repoRead.ciByCommit.set(commitSha, {
      conclusion: "success",
      checkName: "fake-ci",
    });
    repoRead.reviewByPr.set(42, { state: "approved" });
    repoRead.seedFileAtRef(mergeSha, docsWriteSpec.targetPath, fs.readFileSync(dest, "utf8"));

    const collected: Evidence[] = [art.evidence];
    const expected = {
      repositoryRef: identity,
      targetPath: docsWriteSpec.targetPath,
      artifactDigest,
      cycleInstanceId,
      executionContractId,
      projectId,
    };

    // P — after confirmation, Cursor would resume; Studio only verifies claims
    const vCommit = await verifyCommitClaim({
      repositoryRead: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      claimedCommitSha: commitSha,
      message: "docs: functional design",
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(vCommit.ok).toBe(true);
    if (vCommit.ok) {
      const loaded = await evidence.evidenceReader.findById(vCommit.evidenceId);
      if (loaded) collected.push(loaded);
    }
    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("BLOCKING");

    const vPush = await verifyPushClaim({
      repositoryRead: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      branch: "gcec/docs",
      claimedCommitSha: commitSha,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(vPush.ok).toBe(true);
    if (vPush.ok) {
      const loaded = await evidence.evidenceReader.findById(vPush.evidenceId);
      if (loaded) collected.push(loaded);
    }

    const vPr = await verifyPullRequestClaim({
      repositoryRead: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      claimedPrNumber: 42,
      claimedHeadSha: commitSha,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(vPr.ok).toBe(true);
    if (vPr.ok) {
      const loaded = await evidence.evidenceReader.findById(vPr.evidenceId);
      if (loaded) collected.push(loaded);
    }

    const ci = await recordCiStatusEvidence({
      ciPort: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      commitSha,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(ci.ok && ci.status === "verified").toBe(true);
    if (ci.ok) {
      const loaded = await evidence.evidenceReader.findById(ci.evidenceId);
      if (loaded) collected.push(loaded);
    }

    const review = await recordReviewStatusEvidence({
      reviewPort: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      prNumber: 42,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(review.ok && review.status === "verified").toBe(true);
    if (review.ok) {
      const loaded = await evidence.evidenceReader.findById(review.evidenceId);
      if (loaded) collected.push(loaded);
    }

    // V — merge executed by Fake Cursor boundary (seeded), not Studio
    repoRead.seedMergeInfo({
      prNumber: 42,
      state: "merged",
      mergeSha,
      targetBranch: "main",
      headSha: commitSha,
    });
    repoRead.seedPullRequest({
      number: 42,
      title: "FD",
      state: "merged",
      headSha: commitSha,
      baseBranch: "main",
      url: `https://github.com/${identity}/pull/42`,
    });

    const vMerge = await verifyMergeClaim({
      repositoryRead: repoRead,
      evidenceServices: evidence,
      repositoryRef: identity,
      claimedPrNumber: 42,
      claimedMergeSha: mergeSha,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(vMerge.ok).toBe(true);
    if (vMerge.ok) {
      const loaded = await evidence.evidenceReader.findById(vMerge.evidenceId);
      if (loaded) collected.push(loaded);
    }

    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("BLOCKING");

    const post = await verifyPostMergeEvidence({
      evidenceServices: evidence,
      repositoryRead: repoRead,
      repositoryRef: identity,
      targetBranch: "main",
      targetSha: mergeSha,
      artifactPath: docsWriteSpec.targetPath,
      artifactDigest: artifactDigest as Digest,
      expectedTargetSha: mergeSha,
      observedTargetSha: mergeSha,
      expectedArtifactDigest: artifactDigest as Digest,
      observedArtifactDigest: artifactDigest as Digest,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(post.ok).toBe(true);
    if (post.ok) {
      const loaded = await evidence.evidenceReader.findById(post.evidenceId);
      if (loaded) collected.push(loaded);
    }

    // Y — full verified proof set
    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("SATISFIED");

    exitState = deriveCycleExitState({
      projectId,
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
      },
      executionContracts: [
        {
          contractId: executionContractId,
          status: "completed",
          requiredCapabilities: ["cap:cursor.docs_write"],
          evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
          expectedOutputs: ["artifact"],
        },
      ],
      evidence: collected,
      proposedExitRequirementKinds: ei.payload.exitRequirementKinds,
    });
    expect(exitState.allRequiredVerified).toBe(true);

    const rules = deriveFinalizationApplicability({
      cycleInstanceId,
      projectId,
      trajectory: null,
      decisions: [],
      evidence: collected,
      reviewBundles: rb.ok ? [rb.reviewBundle] : [],
      executionContracts: [
        {
          contractId: executionContractId,
          status: "completed",
          requiredCapabilities: ["cap:cursor.docs_write", "cap:git"],
          evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
          action: M4_BOUNDED_DOCS_WRITE_ACTION,
        },
      ],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
      },
    });
    expect(rules.gitProofPresent).toBe(true);
    expect(rules.artifactProofPresent).toBe(true);

    // Z — without FINALIZE HD, cycle remains incomplete (assessment only here)
    expect(rules.git_repository).toBe("APPLICABLE");

    projects.dispose();
  });
});
