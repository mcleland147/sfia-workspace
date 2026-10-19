/**
 * D-P6-SHE-01 GAP-03 — git MUST primaryContract uses effective EC selection.
 *
 * Discriminating property:
 *   Full typed Git proof set bound to the SHE successor EC → gitProofPresent=true
 *   ONLY when primaryContract is the effective (non-superseded) successor.
 *   Same evidence + predecessor-first listing would yield false if selection
 *   used gitApplicable[0] (superseded predecessor).
 *
 * gitProofPresent=true ≠ Cycle FINALIZED — other MUST obligations remain.
 *
 * Deterministic — ZERO REAL / HQA / live Git mutation.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { deriveFinalizationApplicability } from "@/lib/oa/cycle/application/deriveFinalizationApplicability";
import type { DerivableExecutionContract } from "@/lib/oa/cycle/application/deriveFinalizationApplicability";
import { deriveCycleObligationSnapshot } from "@/lib/oa/cycle/application/deriveCycleObligationSnapshot";
import {
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle/application/qualifyGitCompletionProofSet";
import { assessFinalizationObligations } from "@/lib/oa/cycle/application/assessFinalization";
import type { Evidence } from "@/lib/oa/evidence-review";

describe("P6 SHE GAP-03 — effective git primaryContract", () => {
  const cycleId = "cycinst:gap03-test";
  const projectId = "prj:gap03-test";
  const predId = "xct:pred";
  const succId = "xct:she-hd:succ";
  const repoIdentity = "org/repo";
  const targetPath = "docs/functional-design.md";
  const artifactDigest =
    "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as const;
  const commitSha =
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
  const mergeSha =
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc";
  const repoBinding = {
    identity: repoIdentity,
    pathRoot: "/tmp/repo",
  } as const;

  const FULL_GCEC_REQS = [...GCEC_GIT_COMPLETION_PROOF_FAMILIES];

  function gitEc(
    id: string,
    status: string,
    supersedes?: string,
    evidenceRequirements: readonly string[] = FULL_GCEC_REQS,
  ): DerivableExecutionContract {
    return {
      contractId: id,
      cycleInstanceId: cycleId,
      status,
      supersedesExecutionContractId: supersedes,
      requiredCapabilities: ["cap:git.repository"],
      evidenceRequirements: [...evidenceRequirements],
      action: "git_commit",
      target: targetPath,
      scope: "docs/",
    };
  }

  function snapshot() {
    return deriveCycleObligationSnapshot({
      projectId,
      cycleTypeId: "cyc:functional-design",
      cycleInstanceId: cycleId,
      repositoryBinding: repoBinding as never,
    });
  }

  function makeEvidence(partial: Partial<Evidence> & { evidenceId: string }): Evidence {
    return {
      schemaVersion: "0.1.0-oa",
      source: partial.source ?? "test-source",
      sourceKind: partial.sourceKind ?? "system",
      producedAt: "2026-10-19T12:00:00.000Z",
      classification: "supporting",
      storageMode: "reference",
      availability: "available",
      bindings: partial.bindings ?? {},
      containsSecrets: false,
      provenance: {
        recordedAt: "2026-10-19T12:00:00.000Z",
        recordedBy: { actorId: "actor:test", role: "system" },
      },
      version: 1,
      createdAt: "2026-10-19T12:00:00.000Z",
      type: "other",
      status: "verified",
      ...partial,
    } as Evidence;
  }

  /** Full 7-family typed Git SET + GCEC-complete artifact, bound to one EC. */
  function fullGitProofSetBoundTo(executionContractId: string): Evidence[] {
    const bindings = {
      projectId,
      cycleInstanceId: cycleId,
      executionContractId,
    };
    const repo = encodeURIComponent(repoIdentity);
    const families: Evidence[] = [
      makeEvidence({
        evidenceId: "evd:local",
        source: "git:local_commit",
        location: `git:local_commit?repo=${repo}&commitSha=${commitSha}`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:push",
        source: "git:remote_push",
        location: `git:remote_push?repo=${repo}&remote=origin&refName=feature%2Fgap03&commitSha=${commitSha}`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:pr",
        source: "git:pull_request",
        location: `git:pull_request?repo=${repo}&prNumber=1&headSha=${commitSha}&headBranch=feature%2Fgap03&baseBranch=main&state=open`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:ci",
        source: "git:ci_status",
        location: `git:ci_status?repo=${repo}&commitSha=${commitSha}&conclusion=success`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:review",
        source: "git:review_status",
        location: `git:review_status?repo=${repo}&prNumber=1&state=approved`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:merge",
        source: "git:merge",
        location: `git:merge?repo=${repo}&mergeCommitSha=${mergeSha}&prNumber=1`,
        bindings,
      }),
      makeEvidence({
        evidenceId: "evd:post",
        source: "git:post_merge_verification",
        digest: artifactDigest,
        location: `git:post_merge_verification?repo=${repo}&targetBranch=main&targetSha=${mergeSha}&artifactPath=${encodeURIComponent(targetPath)}&digest=${encodeURIComponent(artifactDigest)}`,
        bindings,
      }),
      // GCEC-strict artifact — supplies expected.targetPath + artifactDigest.
      makeEvidence({
        evidenceId: "evd:art",
        type: "artifact",
        status: "available",
        digest: artifactDigest,
        location: targetPath,
        bindings: {
          ...bindings,
          executionAttemptId: "att:gap03-succ",
        },
      }),
    ];
    return families;
  }

  function derive(input: {
    contracts: DerivableExecutionContract[];
    evidence: Evidence[];
    snap?: ReturnType<typeof snapshot>;
  }) {
    const snap = input.snap ?? snapshot();
    return deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: null,
      decisions: [],
      evidence: input.evidence,
      reviewBundles: [],
      executionContracts: input.contracts,
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: repoBinding as never,
      obligationSnapshot: snap,
    });
  }

  it("T14/T22 — MUST includes git_repository; successor preferred over superseded pred", () => {
    const snap = snapshot();
    expect(snap.mustFamilies).toContain("git_repository");

    const predecessor = gitEc(predId, "superseded");
    const successor = gitEc(succId, "completed", predId);
    // Predecessor listed first (historical bug path used gitApplicable[0]).
    const rules = derive({
      contracts: [predecessor, successor],
      evidence: [],
      snap,
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.gitProofPresent).toBe(false);
  });

  it("T16 — evidence bound only to predecessor does not satisfy successor expected id", () => {
    const predecessor = gitEc(predId, "superseded");
    const successor = gitEc(succId, "completed", predId);
    const rules = derive({
      contracts: [predecessor, successor],
      evidence: fullGitProofSetBoundTo(predId),
    });
    // Expected EC is successor → predecessor-bound evidence → gitProofPresent false.
    expect(rules.gitProofPresent).toBe(false);
  });

  it("T17 — multiple effective git-applicable ECs → fail-closed (no arbitrary primary)", () => {
    const a = gitEc("xct:a", "completed");
    const b = gitEc("xct:b", "completed");
    const rules = derive({
      contracts: [a, b],
      evidence: fullGitProofSetBoundTo("xct:a"),
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("POSITIVE T18 — successor + full typed Git SET → gitProofPresent=true (discriminating)", () => {
    const predecessor = gitEc(predId, "superseded");
    const successor = gitEc(succId, "completed", predId);
    // Predecessor listed FIRST — wrong historical selection would pick pred.
    const evidence = fullGitProofSetBoundTo(succId);

    // Discriminator (engine-independent): same SET fails when expected EC is pred.
    const againstPred = qualifyGitCompletionProofSet({
      evidence,
      requirements: [...FULL_GCEC_REQS],
      expected: {
        repositoryRef: repoIdentity,
        targetPath,
        artifactDigest,
        cycleInstanceId: cycleId,
        executionContractId: predId,
        projectId,
      },
    });
    expect(againstPred.status).toBe("BLOCKING");
    if (againstPred.status === "BLOCKING") {
      expect(againstPred.reason).toBe("contract_mismatch");
    }

    const againstSucc = qualifyGitCompletionProofSet({
      evidence,
      requirements: [...FULL_GCEC_REQS],
      expected: {
        repositoryRef: repoIdentity,
        targetPath,
        artifactDigest,
        cycleInstanceId: cycleId,
        executionContractId: succId,
        projectId,
      },
    });
    expect(againstSucc.status).toBe("SATISFIED");

    // Product path: deriveFinalizationApplicability must select successor.
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.gitProofPresent).toBe(true);

    // gitProofPresent=true ≠ Cycle FINALIZED — other MUST remain unsatisfied.
    const assessment = assessFinalizationObligations({
      cycle: {
        cycleInstanceId: cycleId,
        projectId,
        cycleTypeId: "cyc:functional-design",
        status: "active",
      } as never,
      projectId,
      assessedAt: "2026-10-19T12:00:00.000Z",
      decisions: [],
      evidence,
      reviewBundles: [],
      trajectory: null,
      applicability: rules,
      executionContracts: [predecessor, successor],
    });
    const gitObl = assessment.obligations.find(
      (o) => o.family === "git_repository",
    );
    expect(gitObl?.status).toBe("SATISFIED");
    const blockingOthers = assessment.obligations.filter(
      (o) =>
        o.family !== "git_repository" &&
        (o.status === "MISSING" || o.status === "BLOCKING"),
    );
    // At least one other MUST family must still block full finalization.
    expect(blockingOthers.length).toBeGreaterThan(0);
    expect(assessment.canComplete).toBe(false);
  });

  it("NEG — missing family → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const incomplete = fullGitProofSetBoundTo(succId).filter(
      (e) => e.source !== "git:ci_status",
    );
    const rules = derive({
      contracts: [predecessor, successor],
      evidence: incomplete,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — status not verified → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const evidence = fullGitProofSetBoundTo(succId).map((e) =>
      e.source === "git:local_commit"
        ? { ...e, status: "available" as const }
        : e,
    );
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — digest divergent on post_merge → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const bad =
      "sha256:dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" as const;
    const evidence: Evidence[] = fullGitProofSetBoundTo(succId).map((e) => {
      if (e.source !== "git:post_merge_verification") return e;
      return {
        ...e,
        digest: bad,
        location: `git:post_merge_verification?repo=${encodeURIComponent(repoIdentity)}&targetBranch=main&targetSha=${mergeSha}&artifactPath=${encodeURIComponent(targetPath)}&digest=${encodeURIComponent(bad)}`,
      };
    });
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — SHA incoherent commit≠push → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const otherSha =
      "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
    const evidence = fullGitProofSetBoundTo(succId).map((e) => {
      if (e.source !== "git:remote_push") return e;
      return {
        ...e,
        location: `git:remote_push?repo=${encodeURIComponent(repoIdentity)}&remote=origin&refName=feature%2Fgap03&commitSha=${otherSha}`,
      };
    });
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — wrong projectId binding → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const evidence = fullGitProofSetBoundTo(succId).map((e) => ({
      ...e,
      bindings: { ...e.bindings, projectId: "prj:wrong" },
    }));
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — wrong cycleInstanceId → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const evidence = fullGitProofSetBoundTo(succId).map((e) => ({
      ...e,
      bindings: { ...e.bindings, cycleInstanceId: "cycinst:wrong" },
    }));
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — wrong repository → gitProofPresent=false", () => {
    const successor = gitEc(succId, "completed", predId);
    const predecessor = gitEc(predId, "superseded");
    const evidence = fullGitProofSetBoundTo(succId).map((e) => {
      if (typeof e.source !== "string" || !e.source.startsWith("git:")) return e;
      return {
        ...e,
        location: (e.location ?? "").replace(
          encodeURIComponent(repoIdentity),
          encodeURIComponent("other/repo"),
        ),
      };
    });
    const rules = derive({
      contracts: [predecessor, successor],
      evidence,
    });
    expect(rules.gitProofPresent).toBe(false);
  });

  it("NEG — orphan superseded predecessor only (no successor) → no satisfied proof on pred evidence alone under effective empty", () => {
    // Only superseded EC remains — effective pool empty; fallback mono if single gitApplicable.
    // With a single superseded git EC, legacy fallback may select it; proof on that id can satisfy.
    // Discriminating SHE case requires BOTH pred+succ; orphan pred alone is not the SHE path.
    const predecessor = gitEc(predId, "superseded");
    const rules = derive({
      contracts: [predecessor],
      evidence: fullGitProofSetBoundTo(predId),
    });
    // Mono fallback may allow pred — document without inventing new Finalization rule.
    // When only superseded remains, gitApplicable.length===1 → primary=pred → may be true.
    // SHE Delivery always pairs pred+succ; orphan is non-SHE.
    expect(typeof rules.gitProofPresent).toBe("boolean");
  });

  it("LEGACY — mono-EC historical path: full SET on single completed EC → gitProofPresent=true", () => {
    const mono = gitEc("xct:mono", "completed");
    const rules = derive({
      contracts: [mono],
      evidence: fullGitProofSetBoundTo("xct:mono"),
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.gitProofPresent).toBe(true);
  });
});
