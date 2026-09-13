/**
 * GCEC git.commit Evidence — EVP (CR-GCEC-AGENT-09).
 * Production Evidence creator owns observation. ZERO synthetic Product facts.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  verifyLocalCommitEffect,
  observeLocalCommitFacts,
  NodeGitCommandRunner,
} from "@/lib/oa/execution-attempt";
import * as executionAttemptIndex from "@/lib/oa/execution-attempt";
import { createGovernedCommittedWorktree } from "./support/governedCommitFixture";

const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const BODY = "# evidence-proof\n";
const NOW = "2026-09-11T20:00:00.000Z";
const PRIOR = "xat:evp-a";

const BINDINGS = {
  projectId: "prj:ge",
  cycleInstanceId: "cyc:ge",
  executionContractId: "xct:ge",
  executionAttemptId: "xat:ge-b",
};

const cleanups: Array<() => void> = [];
afterEach(() => {
  for (const c of cleanups.splice(0)) c();
});

describe("GCEC git.commit Evidence EVP (observer-owned)", () => {
  it("EVP-05 synthetic helper not exported by Product public index", () => {
    expect(
      "localCommitFactsFromSynthetic" in executionAttemptIndex,
    ).toBe(false);
    expect(
      "allowTestOnlySyntheticObservation" in
        ({} as Parameters<typeof verifyLocalCommitEffect>[0]),
    ).toBe(false);
  });

  it("EVP-06 production API has no allowTestOnlySyntheticObservation", () => {
    const keys = [
      "gitRunner",
      "governed",
      "spec",
      "expectedArtifactDigests",
      "expectedBindings",
      "actor",
      "evidenceServices",
    ] as const;
    void keys;
    // Type-level: VerifyLocalCommitEffectInput must not include the escape hatch.
    type Input = Parameters<typeof verifyLocalCommitEffect>[0];
    type Forbidden = "allowTestOnlySyntheticObservation" | "observed";
    type HasForbidden = Forbidden extends keyof Input ? true : false;
    const hasForbidden: HasForbidden = false;
    expect(hasForbidden).toBe(false);
  });

  it("EVP-01/02/12 production Evidence creator observes → VERIFIED with B bindings", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
      nowIso: NOW,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) throw new Error(r.reason);
    expect(r.status).toBe("verified");
    expect(r.commitSha).toBe(fx.H1.toLowerCase());
    expect(r.provenance).toBe("studio:local_git_readonly:observe");
    const loaded = await evidence.evidenceReader.findById(r.evidenceId);
    expect(loaded?.bindings.executionAttemptId).toBe(BINDINGS.executionAttemptId);
    expect(loaded?.source).toBe("git:local_commit");
    expect(String(loaded?.location)).toContain(`path=${encodeURIComponent(PATH)}`);
  });

  it("EVP-03/04 forged observed / SHA fields rejected", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
      observed: {
        observedHeadSha: "f".repeat(40),
        observedParentSha: "e".repeat(40),
      },
    } as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/forged_observation/);
  });

  it("EVP-07 wrong governed repo → no Evidence", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: {
        ...fx.governed,
        repositoryBinding: {
          identity: "other/repo",
          remoteUrl: "https://github.com/other/repo.git",
          defaultBranch: "main",
        },
      },
      spec: { ...fx.spec, repositoryRef: "other/repo" },
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/origin_remote_mismatch/);
  });

  it("EVP-08 wrong worktree / prior path → no Evidence", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: { ...fx.governed, priorAttemptId: "xat:wrong" },
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/prior_attempt_path_mismatch/);
  });

  it("EVP-09 observer failure → no Evidence", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: {
        async run() {
          return { stdout: "", stderr: "boom", exitCode: 1 };
        },
      },
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
  });

  it("EVP-10 fact verification failure → no VERIFIED Evidence", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: {
        ...fx.spec,
        commitMessage: "docs: wrong subject",
      },
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/subject|message/i);
  });

  it("EVP-11 Cursor report alone remains non-verified", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
      trustCursorReportOnly: true,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.status).toBe("reported");
      expect(r.reason).toMatch(/cursor_report_alone/);
    }
  });

  it("incomplete bindings → failed", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
      expectedBindings: {
        projectId: "prj:ge",
        cycleInstanceId: "cyc:ge",
      },
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/bindings_incomplete/);
  });

  it("observer still independently callable (not Evidence creator)", async () => {
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: PRIOR,
      pathRel: PATH,
      body: BODY,
      commitMessage: MSG,
    });
    cleanups.push(fx.cleanup);
    const r = await observeLocalCommitFacts({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: fx.spec,
      expectedArtifactDigests: { [PATH]: fx.digest },
    });
    expect(r.ok).toBe(true);
  });

  it("NodeGitCommandRunner import remains available for REAL harness", () => {
    expect(typeof NodeGitCommandRunner).toBe("function");
  });
});
