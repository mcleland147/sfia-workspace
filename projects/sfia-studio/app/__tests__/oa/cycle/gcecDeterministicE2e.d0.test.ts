/**
 * GCEC deterministic E2E — Product path A→Y as far as feasible with fakes.
 * ZERO OpenAI. ZERO REAL Cursor. ZERO remote Git.
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
  extractDocsWriteLaunchSpec,
  type DocsWriteLaunchSpec,
} from "@/lib/oa/execution-attempt";
import {
  FakeConversationProvider,
} from "@/lib/platform/ai";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { validateExecutionIntentPayload } from "@/features/project-assistant/f2/executionIntentSchema";
import {
  FakeGitProviderPorts,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  openPullRequestEvidence,
  pushBranchEvidence,
  mergePullRequestEvidence,
  verifyPostMergeEvidence,
} from "@/lib/oa/git-ports";
import {
  createTestDecisionServices,
  type Confirmation,
} from "@/lib/oa/decision";

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
  const resolved = resolver.resolveLocalRepoRoot({ identity }, managedBase);
  expect(resolved).toBe(repoRoot);
  return { repoRoot, baseHeadSha };
}

async function grantConfirmation(input: {
  decisions: ReturnType<typeof createTestDecisionServices>;
  confirmationId: string;
  scope: string;
  actionRef: string;
}): Promise<void> {
  const now = "2026-09-11T12:00:00.000Z";
  const confirmation: Confirmation = {
    schemaVersion: "0.1.0-oa",
    confirmationId: input.confirmationId,
    level: "N3",
    actionRef: input.actionRef,
    requestedBy: {
      actorId: ACTOR.actorId,
      role: "project_owner",
      authorityLevel: "N3",
    },
    requestedTo: {
      actorId: ACTOR.actorId,
      role: "project_owner",
      authorityLevel: "N3",
    },
    scope: input.scope,
    status: "granted",
    idempotencyKey: `idem:${input.confirmationId}`,
    confirmedAt: now,
  };
  await input.decisions.confirmations.save(confirmation);
}

describe("gcecDeterministicE2e — Product A→Y (fake boundary)", () => {
  it("binding → F2 docs_write intent → docsWriteSpec → fake write → artifact → git SET → SATISFIED", async () => {
    const root = tempDir("sfia-gcec-e2e-");
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
    const decisions = createTestDecisionServices({
      projectServices: projects,
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });

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

    const provider = new FakeConversationProvider();
    const analyzed = await analyzeIntent({
      userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
      projectSummary: "GCEC E2E project",
      provider,
    });
    expect(analyzed.analysis.parseOk).toBe(true);
    expect(analyzed.analysis.executionIntent?.intentKind).toBe("docs_write");
    const ei = validateExecutionIntentPayload(
      analyzed.analysis.executionIntent,
    );
    expect(ei.ok).toBe(true);
    if (!ei.ok) return;

    const docsWriteSpec: DocsWriteLaunchSpec = {
      repositoryRef: ei.payload.targetRepositoryRef!,
      targetPath: ei.payload.targetPath!,
      pathAllowlist: ei.payload.scopeIn ?? ["docs/"],
      artifactType: ei.payload.artifactType ?? "functional_design",
      artifactBrief: ei.payload.artifactBrief!,
      contentRequirements: ei.payload.contentRequirements ?? [],
      scopeIn: ei.payload.scopeIn ?? ["docs/"],
      scopeOut: ei.payload.scopeOut ?? [],
      expectedOutputs: ei.payload.expectedOutputs ?? [
        ei.payload.targetPath!,
      ],
      validationExpectations: ei.payload.validationExpectations ?? [],
      evidenceRequirements: ei.payload.evidenceRequirements ?? [
        ...GCEC_GIT_COMPLETION_PROOF_FAMILIES,
      ],
      createOrModify: true,
      noDelete: true,
    };

    // Simulate EC.inputs after PREPARE/resolve (binding + managed root + baseSha).
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
        managedRepoRoot: repoRoot,
        repositoryIdentity: identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseHeadSha,
      },
    };
    const extracted = extractDocsWriteLaunchSpec(contractLike as never);
    expect(extracted.ok).toBe(true);

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
      managedRepoRoot: repoRoot,
      repositoryBinding: {
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
      },
    });
    expect(launch.outcome).toBe("ack");
    expect(fakeLaunch.lastDigest).toMatch(/^sha256:[a-f0-9]{64}$/);
    const artifactDigest = fakeLaunch.lastDigest!;

    // Copy written artifact into managed repo for local commit proof.
    const written = path.join(worktreeRoot, docsWriteSpec.targetPath);
    const dest = path.join(repoRoot, docsWriteSpec.targetPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(written, dest);

    const cycleInstanceId = "cyc:gcec-e2e";
    const projectId = "prj:gcec-e2e";
    const executionContractId = "xct:gcec-e2e";
    const executionAttemptId = "xat:gcec-e2e";

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
      bindings: {
        projectId,
        cycleInstanceId,
        executionContractId,
        executionAttemptId,
      },
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

    const gitPorts = new FakeGitProviderPorts();
    const bindings = {
      projectId,
      cycleInstanceId,
      executionContractId,
      executionAttemptId,
    };
    const collected: Evidence[] = [art.evidence];

    // Local commit via real git in disposable repo (local only).
    git(repoRoot, ["add", docsWriteSpec.targetPath]);
    git(repoRoot, ["commit", "-m", "docs: functional design"]);
    const commitSha = git(repoRoot, ["rev-parse", "HEAD"]);

    const commitEv = await evidence.registerEvidence.execute({
      evidenceId: "ev:gcec-commit",
      idempotencyKey: "idem:gcec-commit",
      actor: ACTOR,
      type: "other",
      source: "git:local_commit",
      sourceKind: "external",
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      location: `git:local_commit?repo=${encodeURIComponent(identity)}&commitSha=${commitSha}`,
      bindings,
    });
    expect(commitEv.ok).toBe(true);
    if (commitEv.ok) collected.push(commitEv.evidence);

    const expected = {
      repositoryRef: identity,
      targetPath: docsWriteSpec.targetPath,
      artifactDigest,
      cycleInstanceId,
      executionContractId,
      projectId,
    };
    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("BLOCKING");

    await grantConfirmation({
      decisions,
      confirmationId: "conf:gcec-push",
      scope: "git:remote_push",
      actionRef: "git:remote_push",
    });
    const pushed = await pushBranchEvidence({
      pushPort: gitPorts,
      evidenceServices: evidence,
      repositoryRef: identity,
      remote: "origin",
      refName: "gcec/docs",
      commitSha,
      bindings,
      actor: ACTOR,
      confirmationId: "conf:gcec-push",
      confirmations: decisions.confirmations,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(pushed.ok).toBe(true);
    if (pushed.ok) {
      const loaded = await evidence.evidenceReader.findById(pushed.evidenceId);
      if (loaded) collected.push(loaded);
    }
    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("BLOCKING");

    await grantConfirmation({
      decisions,
      confirmationId: "conf:gcec-pr",
      scope: "git:pull_request",
      actionRef: "git:pull_request",
    });
    const pr = await openPullRequestEvidence({
      prPort: gitPorts,
      evidenceServices: evidence,
      repositoryRef: identity,
      title: "FD",
      headRef: "gcec/docs",
      baseRef: "main",
      bindings,
      actor: ACTOR,
      confirmationId: "conf:gcec-pr",
      confirmations: decisions.confirmations,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(pr.ok).toBe(true);
    if (!pr.ok) return;
    {
      const loaded = await evidence.evidenceReader.findById(pr.evidenceId);
      if (loaded) collected.push(loaded);
    }

    gitPorts.ciByCommit.set(commitSha, {
      conclusion: "success",
      checkName: "fake-ci",
    });
    const ci = await recordCiStatusEvidence({
      ciPort: gitPorts,
      evidenceServices: evidence,
      repositoryRef: identity,
      commitSha,
      bindings,
      actor: ACTOR,
      forcedConclusion: "success",
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(ci.ok).toBe(true);
    if (ci.ok) {
      const loaded = await evidence.evidenceReader.findById(ci.evidenceId);
      if (loaded) collected.push(loaded);
    }

    gitPorts.reviewByPr.set(pr.prNumber, { state: "approved" });
    const review = await recordReviewStatusEvidence({
      reviewPort: gitPorts,
      evidenceServices: evidence,
      repositoryRef: identity,
      prNumber: pr.prNumber,
      bindings,
      actor: ACTOR,
      forcedState: "approved",
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(review.ok).toBe(true);
    if (review.ok) {
      const loaded = await evidence.evidenceReader.findById(review.evidenceId);
      if (loaded) collected.push(loaded);
    }

    await grantConfirmation({
      decisions,
      confirmationId: "conf:gcec-merge",
      scope: "git:merge",
      actionRef: "git:merge",
    });
    const merged = await mergePullRequestEvidence({
      mergePort: gitPorts,
      evidenceServices: evidence,
      repositoryRef: identity,
      prNumber: pr.prNumber,
      confirmationId: "conf:gcec-merge",
      confirmations: decisions.confirmations,
      bindings,
      actor: ACTOR,
      nowIso: "2026-09-11T12:00:00.000Z",
    });
    expect(merged.ok).toBe(true);
    if (!merged.ok) return;
    {
      const loaded = await evidence.evidenceReader.findById(merged.evidenceId);
      if (loaded) collected.push(loaded);
    }

    expect(
      qualifyGitCompletionProofSet({ evidence: collected, expected }).status,
    ).toBe("BLOCKING");

    const post = await verifyPostMergeEvidence({
      evidenceServices: evidence,
      repositoryRef: identity,
      targetBranch: "main",
      targetSha: merged.mergeCommitSha,
      artifactPath: docsWriteSpec.targetPath,
      artifactDigest: artifactDigest as Digest,
      expectedTargetSha: merged.mergeCommitSha,
      observedTargetSha: merged.mergeCommitSha,
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

    const finalSet = qualifyGitCompletionProofSet({
      evidence: collected,
      expected,
    });
    expect(finalSet.status).toBe("SATISFIED");

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

    projects.dispose();
  });
});
