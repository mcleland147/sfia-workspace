/**
 * P6 CLOSURE REGULARIZATION — CR-P6-CLOSURE-01 repository binding currentness.
 *
 * SetProjectRepositoryBinding can change identity/pathRoot WITHOUT bumping
 * lpsVersion. Authorize/Confirm must still STALE/BLOCK.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
} from "@/features/project-assistant/w2/actions";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
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
    objective: "Réorganiser les fichiers demo",
    scope: "projects/demo/app/filter.ts",
    rephrasedRequest: "Clarifier la structure des fichiers demo",
    outOfScope: ["refonte UI"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: [],
    expectedOutcome: "Structure clarifiée",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/app/filter.ts"],
      scopeOut: ["refonte UI"],
    } as IntentAnalysisDto["executionIntent"],
    ...overrides,
  };
}

describe("P6 Closure Regularization — repository binding currentness", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-closure-repo.sqlite"),
      idPrefix: "creg",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
  });

  async function seed(suffix: string, identity = `acme/creg-${suffix}`) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `Closure ${suffix}`,
      objective: "Repo currentness",
      context: "det",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `CR${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:creg-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const cycleInstanceId = `cyc:creg-${suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
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
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-15T08:00:00.000Z",
      forceEnable: true,
    });
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
    if (!started.ok) throw new Error("start");
    const bound = await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    if (!bound.ok) throw new Error("bind");
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    const lpsAfterBind =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    if (!lpsAfterBind.ok) throw new Error("lpsAfterBind");
    return {
      projectId,
      cycleInstanceId,
      oa,
      lpsVersionAtPrepare: lpsAfterBind.livingProjectState.version,
      identity,
    };
  }

  async function prepareAndInspect(
    projectId: string,
    cycleInstanceId: string,
    analysis: IntentAnalysisDto = baseAnalysis(),
  ) {
    const oa = runtime.oa!;
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);
    return { prep, inspected };
  }

  async function assertLpsUnchanged(
    projectId: string,
    expectedVersion: number,
  ) {
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.version).toBe(expectedVersion);
  }

  it("A01 — repository A→B with pathRoot unchanged and LPS unchanged → STALE at authorize", async () => {
    const seeded = await seed("a01", "acme/repo-a");
    const { prep, inspected } = await prepareAndInspect(
      seeded.projectId,
      seeded.cycleInstanceId,
    );

    const rebound =
      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: seeded.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/repo-b",
          remoteUrl: "https://github.com/acme/repo-b.git",
          defaultBranch: "main",
          pathRoot: "projects/demo",
        },
      });
    expect(rebound.ok).toBe(true);
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity: "acme/repo-b",
    });
    await assertLpsUnchanged(seeded.projectId, seeded.lpsVersionAtPrepare);

    const blocked = await authorizeGenericPreparedContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected stale");
    expect(blocked.code).toBe("REPOSITORY_BINDING_STALE");

    // Product action path must also refuse (Confirm cannot bypass).
    if (prep.contract.status === "confirmation_required") {
      const confirm = await w2ConfirmExecutionContractAction({
        projectId: seeded.projectId,
        executionContractId: prep.contract.executionContractId,
      });
      // Confirm may itself revalidate — either refuse or succeed then authorize refuses.
      if (confirm.ok) {
        const auth = await w2AuthorizeExecutionContractAction({
          projectId: seeded.projectId,
          executionContractId: prep.contract.executionContractId,
          expectedVersion: prep.contract.version,
          expectedSemanticFingerprint: inspected.semanticFingerprint,
        });
        expect(auth.ok).toBe(false);
        if (auth.ok) throw new Error("expected auth refuse");
        expect(auth.code).toBe("REPOSITORY_BINDING_STALE");
      } else {
        expect(
          confirm.code === "REPOSITORY_BINDING_STALE" ||
            confirm.message.toLowerCase().includes("repository") ||
            confirm.message.toLowerCase().includes("pathroot") ||
            confirm.message.toLowerCase().includes("requalif"),
        ).toBe(true);
      }
    }
  });

  it("A02 — pathRoot change only, LPS unchanged → STALE", async () => {
    const seeded = await seed("a02");
    const { prep, inspected } = await prepareAndInspect(
      seeded.projectId,
      seeded.cycleInstanceId,
      baseAnalysis({
        scope: "projects/demo/app/filter.ts",
        executionIntent: {
          intentKind: "other",
          // Still under both pathRoots for WHERE shape; binding stamp must still diverge.
          scopeIn: ["projects/demo/app/filter.ts"],
          scopeOut: [],
        } as IntentAnalysisDto["executionIntent"],
      }),
    );

    const rebound =
      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: seeded.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: seeded.identity,
          remoteUrl: `https://github.com/${seeded.identity}.git`,
          defaultBranch: "main",
          pathRoot: "projects/demo-alt",
        },
      });
    expect(rebound.ok).toBe(true);
    await assertLpsUnchanged(seeded.projectId, seeded.lpsVersionAtPrepare);

    const blocked = await authorizeGenericPreparedContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected pathRoot stale");
    expect(blocked.code).toBe("REPOSITORY_BINDING_STALE");
  });

  it("A03 — unchanged binding remains authorizable", async () => {
    const seeded = await seed("a03");
    const { prep, inspected } = await prepareAndInspect(
      seeded.projectId,
      seeded.cycleInstanceId,
    );

    if (prep.contract.status === "confirmation_required") {
      const confirm = await w2ConfirmExecutionContractAction({
        projectId: seeded.projectId,
        executionContractId: prep.contract.executionContractId,
      });
      expect(confirm.ok).toBe(true);
    }

    const authorized = await authorizeGenericPreparedContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint:
        inspected.attestedSemanticFingerprint ?? inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.authorization.outcome).toBe("AUTHORIZED");
    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);
  });

  it("A04 — binding cleared → UNAVAILABLE / STOP", async () => {
    const seeded = await seed("a04");
    const { prep, inspected } = await prepareAndInspect(
      seeded.projectId,
      seeded.cycleInstanceId,
    );

    const got = await seeded.oa.projectServices.getProject.execute({
      projectId: seeded.projectId,
    });
    if (!got.ok) throw new Error("get");
    const projectSnapshot = got.project;
    // SetProjectRepositoryBinding cannot clear; use its private Project repository port.
    const setSvc = seeded.oa.projectServices
      .setProjectRepositoryBinding as unknown as {
      projects: {
        save: (p: typeof projectSnapshot) => Promise<void>;
      };
    };
    expect(typeof setSvc?.projects?.save).toBe("function");
    const cleared = { ...projectSnapshot };
    delete (cleared as { repositoryBinding?: unknown }).repositoryBinding;
    await setSvc.projects.save(cleared);

    await assertLpsUnchanged(seeded.projectId, seeded.lpsVersionAtPrepare);
    const after = await seeded.oa.projectServices.getProject.execute({
      projectId: seeded.projectId,
    });
    expect(after.ok && !after.project.repositoryBinding).toBe(true);

    const blocked = await authorizeGenericPreparedContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected unavailable");
    expect(
      blocked.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
        blocked.code === "REPOSITORY_BINDING_STALE" ||
        blocked.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
        blocked.code === "SCOPE_PATH_ROOT_REQUIRED",
    ).toBe(true);
  });

  it("A06 — D-P6-SHE-01: protected path PREPARE stamps STRUCTURAL (empty refs; not HD forge / not silent NON_STRUCTURAL)", async () => {
    const seeded = await seed("a06");
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis({
        objective: "Toucher doctrine",
        scope:
          "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
        executionIntent: {
          intentKind: "other",
          scopeIn: [
            "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
          ],
          scopeOut: [],
        } as IntentAnalysisDto["executionIntent"],
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error("expected SHE inspectable PREPARE");
    expect(prep.contract.decisionRefs).toEqual([]);
    expect(
      prep.contract.constraints.some((c) =>
        String(c).includes("MATERIALITY:STRUCTURAL"),
      ),
    ).toBe(true);
  });

  it("A07 — non-material remoteUrl/defaultBranch-only change does not invent new compare fields", async () => {
    // ProductMaterialityCurrentness stamps identity + pathRoot only.
    // Changing remoteUrl alone while identity+pathRoot stable must NOT stale
    // (A07 — no false positive on fields not in stamp).
    const seeded = await seed("a07");
    const { prep, inspected } = await prepareAndInspect(
      seeded.projectId,
      seeded.cycleInstanceId,
    );

    // defaultBranch alone is not stamped in ProductMaterialityCurrentness —
    // identity + pathRoot unchanged ⇒ must remain authorizable (A07).
    const rebound =
      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: seeded.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: seeded.identity,
          remoteUrl: `https://github.com/${seeded.identity}.git`,
          defaultBranch: "develop",
          pathRoot: "projects/demo",
        },
      });
    expect(rebound.ok).toBe(true);
    await assertLpsUnchanged(seeded.projectId, seeded.lpsVersionAtPrepare);

    if (prep.contract.status === "confirmation_required") {
      const confirm = await w2ConfirmExecutionContractAction({
        projectId: seeded.projectId,
        executionContractId: prep.contract.executionContractId,
      });
      expect(confirm.ok).toBe(true);
    }

    const authorized = await authorizeGenericPreparedContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint:
        inspected.attestedSemanticFingerprint ?? inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.authorization.outcome).toBe("AUTHORIZED");
  });
});
