/**
 * GCEC One-Lot Delivery — deterministic unit + light integration proofs.
 * ZERO OpenAI. ZERO REAL Cursor.
 * @vitest-environment node
 */
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
  assessFinalizationObligations,
  createSqliteCycleServices,
  deriveCycleObligationSnapshot,
  deriveFinalizationApplicability,
  isGitCompletionProofEvidence,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  type CycleInstance,
  type ProjectTrajectory,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  evaluateFunctionalDesignArtifactCompleteness,
  TYPED_GIT_EVIDENCE_SOURCES,
  validateTypedGitEvidencePayload,
  type Evidence,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import {
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  type RealLaunchRequest,
} from "@/lib/oa/execution-attempt";
import {
  LOCAL_MORRIS_M3_ACTOR,
  LOCAL_PILOTE_ACTOR,
  MemoryAuthorityResolver,
  computeDecisionBasisSourceDigest,
  createTestSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
  type HumanDecision,
} from "@/lib/oa/decision";
import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  prepareM3FromDecision,
} from "@/features/project-assistant/f3/prepareM3FromDecision";
import {
  authorizedM3ResolutionKind,
  selectProductM3ResolutionProfile,
} from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
import {
  BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
  boundedReadOnlyM3ResolutionProfile,
} from "@/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile";

import { mustBlocksNoGovernedEffects } from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";

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

const FULL_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const MERGE_SHA = "cccccccccccccccccccccccccccccccccccccccc";

type ProjectRepositoryBinding = any;
const VALID_BINDING: ProjectRepositoryBinding = {
  provider: "github",
  identity: "acme/widget",
  remoteUrl: "https://github.com/acme/widget.git",
  defaultBranch: "main",
  baseSha: FULL_SHA,
  pathRoot: "docs",
};

const STEPS_DONE: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "done",
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

function tempDbPath(name: string): string {
  return path.join(tempDir("sfia-gcec-"), name);
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-11T08:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

function baseCycle(overrides?: Partial<CycleInstance>): CycleInstance {
  return {
    schemaVersion: "0.1.0-oa",
    cycleInstanceId: "cyc:gcec-base",
    cycleTypeId: "cyc:functional-design",
    projectId: "prj:gcec-base",
    profile: "Standard",
    status: "active",
    createdAt: "2026-09-11T08:00:00.000Z",
    ...overrides,
  };
}

function baseTrajectory(
  overrides?: Partial<ProjectTrajectory>,
): ProjectTrajectory {
  return {
    schemaVersion: "0.1.0-oa",
    trajectoryId: "trj:gcec",
    projectId: "prj:gcec-base",
    version: 1,
    status: "active",
    steps: STEPS_DONE,
    ...overrides,
  };
}

function makeObligationPolicyDecision(
  cycleInstanceId: string,
  projectId: string,
  selectedOptionId: string,
): HumanDecision {
  return {
    schemaVersion: "0.1.0-oa",
    decisionId: `dec:policy-${selectedOptionId}`,
    projectId,
    cycleInstanceId,
    subject: obligationPolicySubjectFor(cycleInstanceId),
    options: [
      { optionId: selectedOptionId, label: selectedOptionId },
      { optionId: "opt:accept", label: "Accept" },
    ],
    selectedOptionId,
    actor: LOCAL_PILOTE_ACTOR,
    authority: "pilot",
    status: "accepted",
    reversible: false,
    effectiveAt: "2026-09-11T08:00:00.000Z",
    recordedAt: "2026-09-11T08:00:00.000Z",
  } as HumanDecision;
}

function makeEvidence(
  partial: Partial<Evidence> & Pick<Evidence, "evidenceId" | "type" | "status">,
): Evidence {
  return {
    schemaVersion: "0.1.0-oa",
    source: partial.source ?? "test-source",
    sourceKind: partial.sourceKind ?? "human",
    producedAt: "2026-09-11T08:00:00.000Z",
    classification: "supporting",
    storageMode: "reference",
    availability: "available",
    bindings: partial.bindings ?? {},
    containsSecrets: false,
    provenance: {
      recordedAt: "2026-09-11T08:00:00.000Z",
      recordedBy: { actorId: "actor:test", role: "system" },
    },
    version: 1,
    createdAt: "2026-09-11T08:00:00.000Z",
    ...partial,
  } as Evidence;
}

function validPayloadFor(source: TypedGitEvidenceSource): unknown {
  switch (source) {
    case "git:working_tree_diff":
      return { repositoryRef: "acme/widget", summary: "diff" };
    case "git:local_commit":
      return {
        repositoryRef: "acme/widget",
        commitSha: FULL_SHA,
        message: "wip",
      };
    case "git:remote_push":
      return {
        repositoryRef: "acme/widget",
        remote: "origin",
        refName: "refs/heads/feature",
        commitSha: FULL_SHA,
      };
    case "git:pull_request":
      return {
        repositoryRef: "acme/widget",
        prNumber: 1,
        headSha: FULL_SHA,
        headBranch: "feature",
        baseBranch: "main",
        state: "open",
      };
    case "git:ci_status":
      return {
        repositoryRef: "acme/widget",
        commitSha: FULL_SHA,
        conclusion: "success",
      };
    case "git:review_status":
      return { repositoryRef: "acme/widget", state: "approved" };
    case "git:merge":
      return {
        repositoryRef: "acme/widget",
        mergeCommitSha: MERGE_SHA,
        baseRef: "main",
      };
    case "git:post_merge_verification":
      return {
        repositoryRef: "acme/widget",
        targetBranch: "main",
        targetSha: MERGE_SHA,
        artifactPath: "docs/functional-design.md",
        artifactDigest: VALID_DIGEST,
      };
    default: {
      const _e: never = source;
      return _e;
    }
  }
}


afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("2 — deriveCycleObligationSnapshot", () => {
  it("repo-backed cyc:functional-design makes artifact/EC/evidence/RB/git/exit APPLICABLE", () => {
    const snap = deriveCycleObligationSnapshot({
      projectId: "prj:gcec",
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(snap.repositoryBound).toBe(true);
    expect(snap.mustFamilies).toEqual(
      expect.arrayContaining([
        "artifact",
        "execution_contract",
        "evidence",
        "review_bundle",
        "git_repository",
        "exit_criteria",
      ]),
    );
    for (const family of snap.mustFamilies) {
      const entry = snap.entries.find((e) => e.family === family);
      expect(entry?.applicability).toBe("APPLICABLE");
    }
  });

  it("without repo binding does NOT invent global git MUST for functional-design", () => {
    const snap = deriveCycleObligationSnapshot({
      projectId: "prj:gcec",
      cycleTypeId: "cyc:functional-design",
    });
    expect(snap.repositoryBound).toBe(false);
    expect(snap.mustFamilies).toEqual(["exit_criteria"]);
    expect(snap.entries.some((e) => e.family === "git_repository")).toBe(false);
  });
});

describe("3 — deriveFinalizationApplicability pre-row APPLICABLE", () => {
  it("families APPLICABLE before EC/Evidence; absence missing/blocking", () => {
    const cycleId = "cyc:gcec-pre";
    const projectId = "prj:gcec-pre";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId }),
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(rules.artifact).toBe("APPLICABLE");
    expect(rules.execution_contract).toBe("APPLICABLE");
    expect(rules.evidence).toBe("APPLICABLE");
    expect(rules.review_bundle).toBe("APPLICABLE");
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.exit_criteria).toBe("APPLICABLE");
    expect(rules.gitProofPresent).toBe(false);
    expect(rules.artifactProofPresent).toBe(false);

    const assessment = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-11T08:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId }),
      applicability: rules,
      executionContracts: [],
    });
    expect(assessment.canComplete).toBe(false);
    expect(assessment.blockers).toEqual(
      expect.arrayContaining([
        "artifact_missing",
        "execution_contract_missing",
        "evidence_missing",
        "review_bundle_missing",
        "git_proof_missing",
      ]),
    );
  });
});

describe("4 — MUST + opt:no-governed-effects contradiction", () => {
  it("families stay APPLICABLE with contradictions (corrProof05 pattern)", () => {
    const cycleId = "cyc:gcec-contradict";
    const projectId = "prj:gcec-contradict";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId }),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(rules.artifact).toBe("APPLICABLE");
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.execution_contract).toBe("APPLICABLE");
    expect(rules.evidence).toBe("APPLICABLE");
    expect(rules.review_bundle).toBe("APPLICABLE");
    expect(rules.contradictions?.length).toBeGreaterThan(0);
    expect(
      rules.contradictions?.some((c) => c.conflictingOptionId === OBLIGATION_POLICY_NO_GOVERNED_EFFECTS),
    ).toBe(true);

    const assessment = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-11T08:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId }),
      applicability: rules,
    });
    expect(assessment.canComplete).toBe(false);
    expect(assessment.blockers.some((b) => b.includes("contradicts"))).toBe(
      true,
    );
  });
});

describe("7–8 — M3 resolution profiles (docs_write Product specialization retired)", () => {
  it("preferBoundedReadOnlyProfile → bounded_read_only only", () => {
    const ro = selectProductM3ResolutionProfile({
      preferBoundedReadOnlyProfile: true,
      env: { NODE_ENV: "test" },
    });
    expect(ro.kind).toBe("bounded_read_only");
    expect(ro.profile).toEqual(boundedReadOnlyM3ResolutionProfile());
  });

  it("authorizedM3ResolutionKind matches read-only profile; docs_write kinds retired", () => {
    const roProfile = boundedReadOnlyM3ResolutionProfile();
    expect(
      authorizedM3ResolutionKind({
        action: roProfile.action,
        target: roProfile.target,
        scope: roProfile.scope ?? "studio.m4.real_off",
        reversibility: roProfile.reversibility,
        requiredCapabilities: roProfile.requiredCapabilities,
        constraints: roProfile.constraints ?? [],
        stopConditions: roProfile.stopConditions ?? [],
      }),
    ).toBe("bounded_read_only");
    expect(
      authorizedM3ResolutionKind({
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        reversibility: "reversible",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: [],
        stopConditions: [],
      }),
    ).toBeNull();
  });
});

describe("9 — evaluateFunctionalDesignArtifactCompleteness", () => {
  it("ok when complete; reports gaps when incomplete", () => {
    const ok = evaluateFunctionalDesignArtifactCompleteness(
      makeEvidence({
        evidenceId: "evd:art-ok",
        type: "artifact",
        status: "available",
        digest: VALID_DIGEST,
        location: "docs/functional-design.md",
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: "cyc:gcec",
          executionContractId: "xct:gcec",
          executionAttemptId: "att:gcec",
        },
      }),
    );
    expect(ok).toEqual({ ok: true, gaps: [] });

    const gaps = evaluateFunctionalDesignArtifactCompleteness(
      makeEvidence({
        evidenceId: "evd:art-gap",
        type: "other",
        status: "unavailable",
        bindings: {},
      }),
    );
    expect(gaps.ok).toBe(false);
    expect(gaps.gaps).toEqual(
      expect.arrayContaining([
        "not_artifact_type",
        "digest_missing",
        "location_missing",
        "bindings_missing",
        "status_not_proof",
      ]),
    );
  });
});

describe("10 — validateTypedGitEvidencePayload", () => {
  it("accepts valid payload for each typed source; rejects bad payloads", () => {
    for (const source of TYPED_GIT_EVIDENCE_SOURCES) {
      expect(validateTypedGitEvidencePayload(source, validPayloadFor(source))).toEqual(
        { ok: true },
      );
      expect(validateTypedGitEvidencePayload(source, null).ok).toBe(false);
      expect(validateTypedGitEvidencePayload(source, {}).ok).toBe(false);
    }
    expect(
      validateTypedGitEvidencePayload("git:local_commit", {
        repositoryRef: "acme/widget",
        commitSha: "short",
      }),
    ).toEqual({ ok: false, reason: "commit_sha_invalid" });
  });
});

describe("11–12 — git completion proof progression", () => {
  it("local_commit does NOT satisfy; post_merge_verification does", () => {
    const cycleId = "cyc:gcec-git";
    const local = makeEvidence({
      evidenceId: "evd:local",
      type: "other",
      status: "available",
      source: "git:local_commit",
      location: `git://commit/${FULL_SHA}`,
      bindings: { cycleInstanceId: cycleId },
    });
    const post = makeEvidence({
      evidenceId: "evd:post",
      type: "other",
      status: "verified",
      source: "git:post_merge_verification",
      location: `git://post-merge/main@${MERGE_SHA}/docs/functional-design.md`,
      digest: VALID_DIGEST,
      bindings: { cycleInstanceId: cycleId },
    });
    expect(isGitCompletionProofEvidence(local, [], cycleId)).toBe(false);
    expect(isGitCompletionProofEvidence(post, [], cycleId)).toBe(true);
  });

  it("deriveFinalizationApplicability gitProofPresent false then true (full SET)", () => {
    const cycleId = "cyc:gcec-git-prog";
    const projectId = "prj:gcec-git-prog";
    const afterLocal = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId }),
      decisions: [],
      evidence: [
        makeEvidence({
          evidenceId: "evd:local",
          type: "other",
          status: "available",
          source: "git:local_commit",
          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${FULL_SHA}`,
          bindings: { cycleInstanceId: cycleId, projectId },
        }),
      ],
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "xct:gcec-git",
          status: "completed",
          requiredCapabilities: ["cap:git"],
          evidenceRequirements: [
            "git:local_commit",
            "git:remote_push",
            "git:pull_request",
            "git:ci_status",
            "git:review_status",
            "git:merge",
            "git:post_merge_verification",
          ],
        },
      ],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(afterLocal.git_repository).toBe("APPLICABLE");
    expect(afterLocal.gitProofPresent).toBe(false);

    const full = [
      "git:local_commit",
      "git:remote_push",
      "git:pull_request",
      "git:ci_status",
      "git:review_status",
      "git:merge",
      "git:post_merge_verification",
    ].map((source, i) =>
      makeEvidence({
        evidenceId: `evd:${i}`,
        type: "other",
        status: "verified",
        source,
        technicalResultRef: `res:attempt-git:${source}`,
        location:
          source === "git:post_merge_verification"
            ? `git:post_merge_verification?repo=${encodeURIComponent(VALID_BINDING.identity)}&targetBranch=main&targetSha=${MERGE_SHA}&artifactPath=${encodeURIComponent("docs/functional-design.md")}&digest=${encodeURIComponent(VALID_DIGEST)}`
            : source === "git:ci_status"
              ? `git:ci_status?repo=${encodeURIComponent(VALID_BINDING.identity)}&commitSha=${FULL_SHA}&conclusion=success`
              : source === "git:review_status"
                ? `git:review_status?repo=${encodeURIComponent(VALID_BINDING.identity)}&prNumber=1&state=approved`
                : source === "git:pull_request"
                  ? `git:pull_request?repo=${encodeURIComponent(VALID_BINDING.identity)}&prNumber=1&headSha=${FULL_SHA}&headBranch=gcec%2Fdocs&baseBranch=main&state=open`
                  : source === "git:merge"
                    ? `git:merge?repo=${encodeURIComponent(VALID_BINDING.identity)}&mergeCommitSha=${MERGE_SHA}&prNumber=1`
                    : source === "git:remote_push"
                      ? `git:remote_push?repo=${encodeURIComponent(VALID_BINDING.identity)}&remote=origin&refName=gcec%2Fdocs&commitSha=${FULL_SHA}`
                      : `git:local_commit?repo=${encodeURIComponent(VALID_BINDING.identity)}&commitSha=${FULL_SHA}`,
        digest:
          source === "git:post_merge_verification" ? VALID_DIGEST : VALID_DIGEST,
        bindings: {
          cycleInstanceId: cycleId,
          projectId,
          executionContractId: "xct:gcec-git",
        },
      }),
    );
    // Also need artifact for digest/targetPath expected
    full.push(
      makeEvidence({
        evidenceId: "evd:art",
        type: "artifact",
        status: "available",
        digest: VALID_DIGEST,
        location: "docs/functional-design.md",
        bindings: {
          projectId,
          cycleInstanceId: cycleId,
          executionContractId: "xct:gcec-git",
          executionAttemptId: "att:gcec-git",
        },
      }),
    );

    const afterFull = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId }),
      decisions: [],
      evidence: full,
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "xct:gcec-git",
          status: "completed",
          requiredCapabilities: ["cap:git"],
          evidenceRequirements: [
            "git:local_commit",
            "git:remote_push",
            "git:pull_request",
            "git:ci_status",
            "git:review_status",
            "git:merge",
            "git:post_merge_verification",
          ],
        },
      ],
      cycleTypeId: "cyc:functional-design",
      repositoryBinding: VALID_BINDING,
    });
    expect(afterFull.gitProofPresent).toBe(true);
  });
});

describe("16 — mustBlocksNoGovernedEffects", () => {
  it("true when governed family APPLICABLE; false otherwise", () => {
    expect(
      mustBlocksNoGovernedEffects({
        artifact: "APPLICABLE",
        git_repository: "UNKNOWN",
      }),
    ).toBe(true);
    expect(
      mustBlocksNoGovernedEffects({
        artifact: "UNKNOWN",
        git_repository: "NOT_APPLICABLE",
      }),
    ).toBe(false);
    expect(mustBlocksNoGovernedEffects(null)).toBe(false);
  });
});

describe("17 — boundedReadOnlyM3ResolutionProfile constants", () => {
  it("RO profile constants unchanged", () => {
    const profile = boundedReadOnlyM3ResolutionProfile();
    expect(profile.action).toBe(M4_BOUNDED_RO_ACTION);
    expect(profile.target).toBe(M4_BOUNDED_RO_TARGET);
    expect(profile.requiredCapabilities).toEqual([M4_BOUNDED_RO_CAPABILITY]);
    expect(profile.scope).toBe(M4_BOUNDED_RO_SCOPE);
    expect(BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON).toContain("bounded read-only");
  });
});

describe("19 — prepareBlockedReason field shape", () => {
  it("completedMatchingCycle + prepareBlockedReason type works for UI gating", () => {
    type AlreadyDecided = {
      trajectoryId: string;
      version: number;
      status: string;
      decidedByDecisionRef: string | null;
      targetCycleTypeId: string | null;
      catalogLabel: string | null;
      completedMatchingCycle?: boolean;
      prepareBlockedReason?: "cycle_type_already_completed";
    };
    const blocked: AlreadyDecided = {
      trajectoryId: "trj:gf",
      version: 1,
      status: "validated",
      decidedByDecisionRef: "dec:gf",
      targetCycleTypeId: "cyc:functional-design",
      catalogLabel: "Conception fonctionnelle",
      completedMatchingCycle: true,
      prepareBlockedReason: "cycle_type_already_completed",
    };
    expect(blocked.completedMatchingCycle).toBe(true);
    expect(blocked.prepareBlockedReason).toBe("cycle_type_already_completed");
    const showPrepareCta = !(
      blocked.prepareBlockedReason || blocked.completedMatchingCycle
    );
    expect(showPrepareCta).toBe(false);
  });
});
