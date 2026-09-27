/**
 * ACTIVE-CYCLE-ARTIFACT-APPLICABILITY-CONTINUATION-BRIDGE-CORR-01
 *
 * Canonical Artifact APPLICABLE (F14 obligation snapshot) + not SATISFIED must
 * admit ACTIVE_CYCLE_GOVERNED_CONTINUATION without a redundant CURRENT
 * REQUIRE_ARTIFACT HumanDecision. Applicability ≠ execution authority:
 * Proposal HD remains required before any ExecutionContract.
 *
 * Deterministic Fake only — ZERO Cursor REAL — ZERO PocketTasks mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  admitsActiveCycleArtifactMaterializationContinuation,
  hasCanonicalArtifactApplicableUnsatisfied,
  hasCurrentRequireArtifactObligation,
  resolveActiveCycleGovernedContinuation,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import {
  recordObligationPolicyNoGovernedEffects,
  recordObligationPolicyRequireArtifact,
} from "@/features/project-assistant/f2/pilotLifecycleActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type HumanDecision,
} from "@/lib/oa/decision";
import {
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
} from "@/lib/oa/cycle";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";

const SANDBOX_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox/",
} as const;

const PATHLESS_NATURAL = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre ni ajouter de choix techniques.
La spécification consolidée inclut : statuts A / B / C ; attribut optionnel P ; attribut optionnel D ; persistance locale ; règle Z hors périmètre.`;

const VAGUE_TALK = `Parlons du livrable attendu du cycle — qu'est-ce qui doit y figurer ?`;

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function materializationAnalysis(
  overrides: {
    continuationKind?: "active_cycle_artifact_materialization" | null;
    rephrasedRequest?: string;
    objective?: string;
  } = {},
) {
  return validateIntentAnalysisPayload({
    intentClass: "execution_request",
    candidateCycleTypeId: "cyc:functional-design",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    continuationKind:
      overrides.continuationKind === undefined
        ? "active_cycle_artifact_materialization"
        : overrides.continuationKind,
    artifactMaterializationOperation: "cursor.docs_write.apply",
    objective: overrides.objective ?? "Matérialiser le livrable requis du cycle actif",
    scope: "docs_write borné — cycle actif",
    rephrasedRequest:
      overrides.rephrasedRequest ??
      "Matérialisation de la spécification comme livrable de référence du cycle",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetRepositoryRef: null,
      targetPath: null,
      scopeIn: [],
      scopeOut: [],
      expectedOutputs: [],
      requiredCapabilities: [],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: null,
      artifactBrief: PATHLESS_NATURAL.slice(0, 240),
      contentRequirements: [PATHLESS_NATURAL.slice(0, 240)],
      exitRequirementKinds: [],
    },
  });
}

function projectDtoFromOverview(input: {
  projectId: string;
  overview: {
    project: { name: string; objective: string };
    livingState: { id: string; version: number; createdAt: string };
    doctrine: {
      id: string;
      version: string | number;
      digest: string;
      status: string;
    };
  };
  activeCycleInstanceId: string | null;
}): ProjectAssistantContextDto {
  return {
    projectId: input.projectId,
    name: input.overview.project.name,
    shortReference: null,
    objective: input.overview.project.objective,
    contextSummary: "bridge corr-01",
    criticality: "STANDARD",
    constraints: [],
    lpsId: input.overview.livingState.id,
    lpsVersion: input.overview.livingState.version,
    lpsCreatedAt: input.overview.livingState.createdAt,
    doctrineId: input.overview.doctrine.id,
    doctrineVersion: String(input.overview.doctrine.version),
    doctrineDigest: input.overview.doctrine.digest,
    doctrineStatus: input.overview.doctrine.status,
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: input.activeCycleInstanceId,
    ckcResolutionRef: null,
  };
}

describe("ACTIVE-CYCLE ARTIFACT APPLICABILITY CONTINUATION BRIDGE CORR-01", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("ac-artifact-bridge-corr01.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "acbr" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
  });

  async function seedActiveCycle(input: {
    suffix: string;
    cycleTypeId: string;
    withRepoBinding: boolean;
    withRequireArtifactPolicy: boolean;
    withNoGovernedEffects?: boolean;
  }): Promise<{ projectId: string; cycleInstanceId: string }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `AC bridge ${input.suffix}`,
      objective: "Applicability continuation bridge",
      context: "canonical Artifact APPLICABLE vs REQUIRE_ARTIFACT HD",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `ACBR${input.suffix.toUpperCase()}`,
      idempotencyKey: `idem:acbr-${input.suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");

    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:a", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:b", order: 2, label: "Deliver", state: "done" },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });

    const cycleInstanceId = `cyc:acbr-${input.suffix}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: input.cycleTypeId,
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-27T09:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("auth");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    if (input.withRepoBinding) {
      const bound = await runtime.setProjectRepositoryBinding({
        projectId,
        ...SANDBOX_BINDING,
      });
      expect(bound.ok).toBe(true);
    }

    if (input.withNoGovernedEffects) {
      const noFx = await recordObligationPolicyNoGovernedEffects({
        projectId,
        cycleInstanceId,
        cycleServices: oa.cycleServices,
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        nowIso: () => "2026-09-27T09:01:00.000Z",
      });
      expect(noFx.ok).toBe(true);
    }

    if (input.withRequireArtifactPolicy) {
      const obligation = await recordObligationPolicyRequireArtifact({
        projectId,
        cycleInstanceId,
        cycleServices: oa.cycleServices,
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        nowIso: () => "2026-09-27T09:02:00.000Z",
      });
      expect(obligation.ok).toBe(true);
    }

    return { projectId, cycleInstanceId };
  }

  async function countCycles(projectId: string): Promise<number> {
    return (await runtime.oa!.cycleServices.cycles.listByProject(projectId))
      .length;
  }

  async function countRequireArtifactHd(
    projectId: string,
    cycleInstanceId: string,
  ): Promise<number> {
    const decisions =
      await runtime.oa!.decisionServices.decisions.listByProject(projectId);
    const subject = obligationPolicySubjectFor(cycleInstanceId);
    return decisions.filter(
      (d) =>
        d.subject === subject &&
        d.selectedOptionId === OBLIGATION_POLICY_REQUIRE_ARTIFACT,
    ).length;
  }

  it("unit helpers — APPLICABLE admits; UNKNOWN/N/A do not without policy", () => {
    expect(
      hasCanonicalArtifactApplicableUnsatisfied({
        obligations: [
          { family: "artifact", status: "MISSING", applicability: "APPLICABLE" },
        ],
      }),
    ).toBe(true);
    expect(
      hasCanonicalArtifactApplicableUnsatisfied({
        obligations: [
          { family: "artifact", status: "SATISFIED", applicability: "APPLICABLE" },
        ],
      }),
    ).toBe(false);
    expect(
      hasCanonicalArtifactApplicableUnsatisfied({
        obligations: [
          { family: "artifact", status: "MISSING", applicability: "UNKNOWN" },
        ],
      }),
    ).toBe(false);

    expect(
      admitsActiveCycleArtifactMaterializationContinuation({
        activeCycleInstanceId: "cyc:x",
        decisions: [],
        assessment: {
          obligations: [
            {
              family: "artifact",
              status: "MISSING",
              applicability: "APPLICABLE",
            },
          ],
        },
      }),
    ).toBe(true);

    const policyHd = {
      decisionId: "hd:req",
      projectId: "p",
      subject: obligationPolicySubjectFor("cyc:x"),
      selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
      status: "accepted",
      createdAt: "2026-09-27T09:00:00.000Z",
    } as unknown as HumanDecision;
    expect(
      hasCurrentRequireArtifactObligation({
        activeCycleInstanceId: "cyc:x",
        decisions: [policyHd],
      }),
    ).toBe(true);
    expect(
      admitsActiveCycleArtifactMaterializationContinuation({
        activeCycleInstanceId: "cyc:x",
        decisions: [policyHd],
        assessment: {
          obligations: [
            {
              family: "artifact",
              status: "MISSING",
              applicability: "UNKNOWN",
            },
          ],
        },
      }),
    ).toBe(true);
  });

  it("T1 — APPLICABLE via snapshot + no policy HD → continuation; ZERO new cycle", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t1",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    expect(await countRequireArtifactHd(projectId, cycleInstanceId)).toBe(0);

    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const art = assessed.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("APPLICABLE");
    expect(art?.status).not.toBe("SATISFIED");

    const cyclesBefore = await countCycles(projectId);
    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await countCycles(projectId)).toBe(cyclesBefore);
    expect(await countRequireArtifactHd(projectId, cycleInstanceId)).toBe(0);
    expect(send.text).not.toMatch(/aucune décision CURRENT REQUIRE_ARTIFACT/i);
    expect(send.text).not.toMatch(/nouveau cycle est proposé/i);

    if (send.f2?.turnKind === "f2_clarification") {
      expect(send.f2.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    } else {
      expect(send.f2?.turnKind).toBe("f2_proposal");
      expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
      expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
      expect(send.f2?.proposal?.requestedOperation).toBe(
        F2_ARTIFACT_MATERIALIZATION_OPERATION,
      );
    }
  });

  it("T2 — before Proposal HD: ZERO materialization HD inventée; ZERO EC", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t2",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const oa = runtime.oa!;
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;

    expect(send.f2?.decision).toBeNull();
    const hdAfter = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;
    expect(hdAfter).toBe(hdBefore);
    expect(await countRequireArtifactHd(projectId, cycleInstanceId)).toBe(0);

    if (typeof oa.executionContractServices.contracts.listByProject === "function") {
      const contracts =
        await oa.executionContractServices.contracts.listByProject(projectId);
      expect(contracts.length).toBe(0);
    }
  });

  it("T3 — Proposal is DECISION_REQUIRED (Proposal ≠ Decision); EC still gated", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t3",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");

    const send = await projectAssistantSendAction({
      projectId,
      content: `${PATHLESS_NATURAL}\nN'exécute rien : prépare la proposition pour ma décision.`,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;
    // Clarification or Proposal — never an invented Decision / EC.
    expect(send.f2?.decision).toBeNull();
    if (send.f2?.turnKind === "f2_proposal") {
      expect(send.f2.proposal?.status).toBe("DECISION_REQUIRED");
    }
    const contracts =
      await runtime.oa!.executionContractServices.contracts.listByProject(
        projectId,
      );
    expect(contracts.length).toBe(0);
  });

  it("T4 — UNKNOWN Artifact + no policy → fail-closed no_require_artifact", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t4",
      cycleTypeId: "cyc:framing",
      withRepoBinding: false,
      withRequireArtifactPolicy: false,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const art = assessed.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability === "APPLICABLE").toBe(false);

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_require_artifact");
    }
    expect(await countCycles(projectId)).toBe(1);
  });

  it("T5 — NOT_APPLICABLE + no REQUIRE_ARTIFACT → fail-closed", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t5",
      cycleTypeId: "cyc:framing",
      withRepoBinding: false,
      withRequireArtifactPolicy: false,
      withNoGovernedEffects: true,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const art = assessed.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("NOT_APPLICABLE");

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_require_artifact");
    }
  });

  it("T6 — NOT_APPLICABLE then explicit REQUIRE_ARTIFACT → continuation (historical)", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t6",
      cycleTypeId: "cyc:framing",
      withRepoBinding: false,
      withRequireArtifactPolicy: true,
      withNoGovernedEffects: true,
    });
    // withNoGovernedEffects then withRequireArtifact — order in seed applies
    // no-governed first then require. Require should re-open Artifact.
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const art = assessed.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("APPLICABLE");

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
  });

  it("T7 — APPLICABLE + SATISFIED → artifact_already_satisfied", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t7",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oa = runtime.oa!;

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...oa,
        cycleServices: {
          ...oa.cycleServices,
          pilotLifecycle: {
            ...oa.cycleServices.pilotLifecycle,
            assess: async () => ({
              ok: true as const,
              assessment: {
                obligations: [
                  {
                    family: "artifact",
                    status: "SATISFIED",
                    applicability: "APPLICABLE",
                  },
                ],
              },
            }),
          },
        },
      },
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("artifact_already_satisfied");
    }
  });

  it("T8 — assessment read failure → fail-closed; ZERO HD/EC/cycle", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t8",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oa = runtime.oa!;
    const cyclesBefore = await countCycles(projectId);
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...oa,
        cycleServices: {
          ...oa.cycleServices,
          pilotLifecycle: {
            ...oa.cycleServices.pilotLifecycle,
            assess: async () => {
              throw new Error("assess boom");
            },
          },
        },
      },
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("lifecycle_assess_failed");
    }
    expect(await countCycles(projectId)).toBe(cyclesBefore);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);
  });

  it("T9 — old-cycle REQUIRE_ARTIFACT only + current UNKNOWN → blocked", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle({
      suffix: "t9",
      cycleTypeId: "cyc:framing",
      withRepoBinding: false,
      withRequireArtifactPolicy: false,
    });
    const oa = runtime.oa!;
    const oldCycleId = `cyc:acbr-old-t9`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId: oldCycleId,
      cycleTypeId: "cyc:framing",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const oldOnly: HumanDecision[] = [
      {
        decisionId: "hd:old-require",
        projectId,
        subject: obligationPolicySubjectFor(oldCycleId),
        selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
        status: "accepted",
        createdAt: "2026-09-27T08:00:00.000Z",
      } as unknown as HumanDecision,
    ];

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: cycleInstanceId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...oa,
        decisionServices: {
          ...oa.decisionServices,
          decisions: {
            ...oa.decisionServices.decisions,
            listByProject: async () => oldOnly,
          },
        },
      },
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_require_artifact");
    }
  });

  it("T10 — #532 regression: pathless natural + APPLICABLE → never NEW_CYCLE", async () => {
    const { projectId } = await seedActiveCycle({
      suffix: "t10",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;
    expect(send.text).not.toMatch(/nouveau cycle est proposé/i);
    expect(await countCycles(projectId)).toBe(1);
  });

  it("T11 — vague talk does not open materialization", async () => {
    const { projectId } = await seedActiveCycle({
      suffix: "t11",
      cycleTypeId: "cyc:functional-design",
      withRepoBinding: true,
      withRequireArtifactPolicy: false,
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: VAGUE_TALK,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;
    expect(send.f2?.proposal ?? null).toBeNull();
    expect(send.f2?.turnKind === "f2_proposal").toBe(false);
  });

  it("T12 — no active cycle → blocked; ZERO createCycle", async () => {
    const created = await runtime.createProject({
      name: "AC bridge t12",
      objective: "no active cycle",
      context: "bridge",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "ACBRT12",
      idempotencyKey: "idem:acbr-t12",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const createSpy = vi.spyOn(runtime.oa!.cycleServices.createCycle, "execute");
    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: null,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_active_cycle");
    }
    expect(createSpy).not.toHaveBeenCalled();
    createSpy.mockRestore();
  });
});
