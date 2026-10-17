/**
 * STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03
 * Durable contract → W2 requiredInspectedFacts → inspect → confirm refuse/pass.
 *
 * Deterministic — ZERO Cursor REAL — ZERO HQA mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
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
    objective: "Corriger la fonctionnalité de filtrage",
    scope: "projects/demo/app/filter.ts",
    rephrasedRequest: "Corriger le bug de filtrage signalé",
    outOfScope: ["refonte UI", "migration DB"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: [],
    expectedOutcome: "Filtrage corrigé avec tests verts",
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

describe("P6 R03 — inspection continuity attestation", () => {
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
    resetPendingGenericPrepareOfferStoreForTests();
    dbPath = tempProductDbPath("p6-r03-insp.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "r03i" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
  });

  async function seedActiveCycle(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `R03 Insp ${suffix}`,
      objective: "Inspection disclosure closure",
      context: "active cycle + generic prepare",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `R03${suffix.toUpperCase().slice(0, 5)}`,
      idempotencyKey: `idem:r03i-${suffix}`,
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

    const cycleInstanceId = `cyc:r03i-${suffix}`;
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
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("auth");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");

    await oa.cycleServices.pilotLifecycle.start({
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

    if (oa.projectServices.setProjectRepositoryBinding) {
      const identity = `acme/r03i-${suffix}`;
      await oa.projectServices.setProjectRepositoryBinding.execute({
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
      ensureManagedRepoCloneSkeleton({
        managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
        identity,
      });
    }

    return { projectId, cycleInstanceId };
  }

  it("INS09/INS13/INS16/INS18 — G-D4 required facts from W2; confirm refuses before attest; inspect writes only on attest", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("a");
    const oa = runtime.oa!;
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const beforeHd = await oa.decisionServices.decisions.listByProject(projectId);
    const inspBefore =
      await oa.executionContractServices.inspectionAttestations.listByContract(
        prep.contract.executionContractId,
      );

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok || continuity.kind !== "active") {
      throw new Error("expected active");
    }
    expect(continuity.decisionRef).toBeNull();
    expect(continuity.requiredInspectedFacts).not.toBeNull();
    expect(continuity.requiredInspectedFacts!.length).toBeGreaterThan(0);
    expect(continuity.inspection.inspectionSufficient).toBe(false);

    // Opening a view = presentation only (no write) — simulated by row build.
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure: continuity.contract.inspectionDisclosure,
      requiredInspectedFacts: continuity.requiredInspectedFacts!,
    });
    expect(rows.missingRequired).toEqual([]);
    const inspMid =
      await oa.executionContractServices.inspectionAttestations.listByContract(
        prep.contract.executionContractId,
      );
    expect(inspMid.length).toBe(inspBefore.length);

    const refused = await confirmExecutionContractForAuthorization({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(refused.ok).toBe(false);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      inspectedFacts: rows.presentedFactIds,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);
    expect(inspected.inspectionSufficient).toBe(true);

    const inspAfter =
      await oa.executionContractServices.inspectionAttestations.listByContract(
        prep.contract.executionContractId,
      );
    expect(inspAfter.length).toBe(inspBefore.length + 1);
    expect([...inspAfter[inspAfter.length - 1]!.inspectedFacts]).toEqual(
      [...rows.presentedFactIds],
    );

    const afterHd = await oa.decisionServices.decisions.listByProject(projectId);
    expect(afterHd.length).toBe(beforeHd.length);
    const attempts = await oa.executionAttemptServices!.listExecutionAttempts.execute(
      { executionContractId: prep.contract.executionContractId },
    );
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toEqual([]);
  });

  it("INS10 — incomplete attested facts → inspectionSufficient false", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("b");
    const oa = runtime.oa!;
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    if (!continuity.ok || continuity.kind !== "active") {
      throw new Error("expected active");
    }
    expect(continuity.requiredInspectedFacts).not.toBeNull();

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      inspectedFacts: ["action", "scope"],
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);
    expect(inspected.inspectionSufficient).toBe(false);

    const after = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok || after.kind !== "active") throw new Error("expected active");
    expect(after.inspection.inspectionSufficient).toBe(false);
  });
});
