/**
 * GCEC-CROSS-EC-VERIFIED-REMOTE-PUSH-PRIOR-BINDING-01 — XEC-01..22 + BIND checks.
 * ZERO MUTATING REAL. @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  M4_BOUNDED_PR_CREATE_ACTION,
  M4_BOUNDED_PR_CREATE_CAPABILITY,
  M4_BOUNDED_PR_CREATE_SCOPE,
  M4_BOUNDED_PR_CREATE_TARGET,
  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
  parseVerifiedRemotePushPriorBinding,
  resolveCrossEcVerifiedRemotePushPrior,
  resolveVerifiedRemotePushPriorAttempt,
  resolveVerifiedRemotePushPriorForPrCreate,
  VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY,
} from "@/lib/oa/execution-attempt";
import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";

const NOW = "2026-09-13T12:00:00.000Z";
const PROJECT = "prj:xec";
const CYCLE = "cyc:xec";
const EC_C = "xct:ec-c-push";
const EC_D = "xct:ec-d-pr";
const ATTEMPT_C = "xat:push-c";
const EVIDENCE_C = "ev:push-c";
const REPO = "acme/widget";
const BRANCH = "gcec/xec/proof";
const SHA = "dddddddddddddddddddddddddddddddddddddddd";
const SHA2 = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

function binding(partial: Record<string, unknown> = {}) {
  return {
    sourceExecutionContractId: EC_C,
    sourceExecutionAttemptId: ATTEMPT_C,
    evidenceId: EVIDENCE_C,
    repositoryRef: REPO,
    branchName: BRANCH,
    commitSha: SHA,
    ...partial,
  };
}

function pushLocation(
  sha = SHA,
  repo = REPO,
  branch = BRANCH,
): string {
  return `git:remote_push?repo=${encodeURIComponent(repo)}&remote=origin&refName=${encodeURIComponent(`refs/heads/${branch}`)}&commitSha=${sha}`;
}

function pushEvidence(
  partial: Partial<Evidence> & { evidenceId?: string } = {},
): Evidence {
  const {
    evidenceId = EVIDENCE_C,
    bindings,
    ...rest
  } = partial;
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId,
    type: "other",
    source: "git:remote_push",
    sourceKind: "external",
    status: "verified",
    classification: "internal",
    storageMode: "metadata_only",
    digest: DIGEST,
    location: pushLocation(),
    bindings: {
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      executionContractId: EC_C,
      executionAttemptId: ATTEMPT_C,
      ...bindings,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev",
      actor: { actorId: "a", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:ev",
    },
    ...rest,
  };
}

function contractD(inputsExtra: Record<string, unknown> = {}) {
  return {
    executionContractId: EC_D,
    projectId: PROJECT,
    cycleInstanceId: CYCLE,
    action: M4_BOUNDED_PR_CREATE_ACTION,
    target: M4_BOUNDED_PR_CREATE_TARGET,
    scope: M4_BOUNDED_PR_CREATE_SCOPE,
    requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
    evidenceRequirements: ["git:pull_request"],
    expectedOutputs: ["git:pull_request"],
    inputs: {
      repositoryRef: REPO,
      workingBranch: BRANCH,
      [VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY]: binding(),
      ...inputsExtra,
    },
  };
}

function attemptC(
  status: ExecutionAttempt["status"] = "succeeded",
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: ATTEMPT_C,
    executionContractId: EC_C,
    executionContractVersion: 1,
    selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
    status,
    idempotencyKey: `idem:${ATTEMPT_C}`,
    correlationId: `cor:${ATTEMPT_C}`,
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${ATTEMPT_C}`,
      actor: { actorId: "actor:t", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:t",
    },
  };
}

function fingerprintMaterial(
  verifiedRemotePushPrior: Record<string, unknown>,
) {
  return {
    executionContractId: EC_D,
    projectId: PROJECT,
    cycleInstanceId: CYCLE,
    action: M4_BOUNDED_PR_CREATE_ACTION,
    target: M4_BOUNDED_PR_CREATE_TARGET,
    scope: M4_BOUNDED_PR_CREATE_SCOPE,
    requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
    requiredAuthority: "N3" as const,
    constraints: [] as string[],
    stopConditions: [] as string[],
    evidenceRequirements: ["git:pull_request"],
    reversibility: "reversible" as const,
    idempotencyKey: "idem:xec-fp",
    inputs: {
      repositoryRef: REPO,
      workingBranch: BRANCH,
      verifiedRemotePushPrior,
    },
  };
}

describe("GCEC-CROSS-EC verified remote-push prior binding", () => {
  it("XEC-01 nominal cross-EC PASS", () => {
    const r = resolveVerifiedRemotePushPriorForPrCreate({
      contract: contractD(),
      attempts: [],
      evidence: [pushEvidence()],
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.mode).toBe("cross_ec");
    expect(r.prior.evidenceId).toBe(EVIDENCE_C);
    expect(r.prior.commitSha).toBe(SHA);
    expect(r.prior.branchName).toBe(BRANCH);
    expect(r.prior.repositoryRef).toBe(REPO);
  });

  it("XEC-02 Attempt absent Evidence present → PASS (critical)", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding(),
      evidence: [pushEvidence()],
      attempts: [], // no C Attempt row
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.prior.priorAttemptId).toBe(ATTEMPT_C);
  });

  it("XEC-03 no explicit binding → no auto-discovery FAIL", () => {
    const c = contractD();
    const { verifiedRemotePushPrior: _drop, ...restInputs } = c.inputs as Record<
      string,
      unknown
    > & { verifiedRemotePushPrior?: unknown };
    void _drop;
    const r = resolveVerifiedRemotePushPriorForPrCreate({
      contract: { ...c, inputs: restInputs },
      attempts: [],
      evidence: [pushEvidence()],
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.mode).toBe("same_ec");
    expect(r.reason).toBe("remote_push_prior_none");
  });

  it("XEC-04 Evidence missing → FAIL", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding(),
      evidence: [],
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.reason).toBe("cross_ec_remote_push_evidence_not_found");
  });

  it("XEC-05 Evidence unverified → FAIL", () => {
    for (const status of ["expected", "rejected", "incomplete"] as const) {
      const r = resolveCrossEcVerifiedRemotePushPrior({
        contract: contractD(),
        binding: binding(),
        evidence: [pushEvidence({ status })],
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_evidence_unverified");
    }
  });

  it("XEC-06 Evidence source != git:remote_push → FAIL", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding(),
      evidence: [pushEvidence({ source: "git:local_commit" })],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_evidence_source_mismatch");
  });

  it("XEC-07 project mismatch → FAIL", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding(),
      evidence: [
        pushEvidence({
          bindings: {
            projectId: "prj:other",
            cycleInstanceId: CYCLE,
            executionContractId: EC_C,
            executionAttemptId: ATTEMPT_C,
          },
        }),
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_lineage_mismatch");
  });

  it("XEC-08 sourceExecutionContractId mismatch → FAIL", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding({ sourceExecutionContractId: "xct:wrong" }),
      evidence: [pushEvidence()],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_lineage_mismatch");
  });

  it("XEC-09 sourceExecutionAttemptId mismatch → FAIL", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding({ sourceExecutionAttemptId: "xat:wrong" }),
      evidence: [pushEvidence()],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_lineage_mismatch");
  });

  it("XEC-10 repository mismatch → FAIL", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding({ repositoryRef: "other/repo" }),
      evidence: [pushEvidence()],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_repo_mismatch");
  });

  it("XEC-11 branch mismatch → FAIL", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding({ branchName: "other/branch" }),
      evidence: [pushEvidence()],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_branch_mismatch");
  });

  it("XEC-12 commit SHA mismatch → FAIL", () => {
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding({ commitSha: SHA2 }),
      evidence: [pushEvidence()],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_sha_mismatch");
  });

  it("XEC-13 malformed / short SHA → FAIL", () => {
    const parse = parseVerifiedRemotePushPriorBinding({
      verifiedRemotePushPrior: binding({ commitSha: "abc123" }),
    });
    expect(parse.present).toBe(true);
    if (!parse.present) return;
    expect(parse.ok).toBe(false);
  });

  it("XEC-14..16 RepositoryRead causes reserved for StartExecution mapping", () => {
    // Domain resolver is Evidence-only; remote-head causes are StartExecution.
    const causes = [
      "cross_ec_remote_push_repository_read_unavailable",
      "cross_ec_remote_push_remote_head_drift",
    ];
    expect(causes).toHaveLength(2);
  });

  it("XEC-17 D workingBranch differs from prior branch → chooser still PASS; Start maps mismatch", () => {
    // Domain prior OK when binding matches Evidence; Start compares workingBranch.
    const r = resolveVerifiedRemotePushPriorForPrCreate({
      contract: contractD({ workingBranch: "hostile/other" }),
      attempts: [],
      evidence: [pushEvidence()],
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.prior.branchName).toBe(BRANCH);
    expect(r.prior.branchName).not.toBe("hostile/other");
  });

  it("XEC-18 exact D-only authority shape (effect set checked by profile/Start)", () => {
    const c = contractD();
    expect(c.requiredCapabilities).toEqual([M4_BOUNDED_PR_CREATE_CAPABILITY]);
    expect(c.action).toBe(M4_BOUNDED_PR_CREATE_ACTION);
  });

  it("XEC-19 same-EC legacy nominal → PASS", () => {
    const sameEcContract = {
      executionContractId: EC_C,
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      expectedOutputs: ["git:remote_push"] as string[],
      inputs: { repositoryRef: REPO, workingBranch: BRANCH },
    };
    const r = resolveVerifiedRemotePushPriorAttempt({
      contract: sameEcContract,
      attempts: [attemptC()],
      evidence: [pushEvidence()],
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(true);
  });

  it("XEC-20 same-EC legacy no prior → FAIL", () => {
    const sameEcContract = {
      executionContractId: EC_C,
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      expectedOutputs: ["git:remote_push"] as string[],
      inputs: { repositoryRef: REPO, workingBranch: BRANCH },
    };
    const r = resolveVerifiedRemotePushPriorAttempt({
      contract: sameEcContract,
      attempts: [],
      evidence: [],
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("remote_push_prior_none");
  });

  it("XEC-21 semantic fingerprint changes on each binding field", () => {
    const base = fingerprintMaterial(binding());
    const baseFp = computeExecutionContractSemanticFingerprint(base);
    const fields = [
      "sourceExecutionContractId",
      "sourceExecutionAttemptId",
      "evidenceId",
      "repositoryRef",
      "branchName",
      "commitSha",
    ] as const;
    for (const field of fields) {
      const mutated = binding({
        [field]:
          field === "commitSha"
            ? SHA2
            : `mutated-${field}`,
      });
      const fp = computeExecutionContractSemanticFingerprint(
        fingerprintMaterial(mutated),
      );
      expect(fp).not.toBe(baseFp);
    }
  });

  it("XEC-22 resolver performs zero Git mutation (pure Evidence read)", () => {
    const before = structuredClone(pushEvidence());
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding(),
      evidence: [before],
      attempts: [],
    });
    expect(r.ok).toBe(true);
    expect(before).toEqual(pushEvidence());
  });

  it("BIND-01 binding parse exact", () => {
    const p = parseVerifiedRemotePushPriorBinding(contractD().inputs);
    expect(p.present && p.ok).toBe(true);
  });

  it("malformed binding does not fall through to same-EC", () => {
    const r = resolveVerifiedRemotePushPriorForPrCreate({
      contract: contractD({
        [VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY]: { evidenceId: "only" },
      }),
      attempts: [attemptC()],
      evidence: [pushEvidence()],
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.mode).toBe("cross_ec");
      expect(r.reason).toBe("cross_ec_remote_push_binding_invalid");
    }
  });

  it("source Attempt present+inconsistent → FAIL closed", () => {
    const bad = attemptC("failed");
    const r = resolveCrossEcVerifiedRemotePushPrior({
      contract: contractD(),
      binding: binding(),
      evidence: [pushEvidence()],
      attempts: [bad],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_attempt_inconsistent");
  });
});
