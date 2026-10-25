/**
 * P6 Authority & Chat-First Continuity — CURRENT materiality revalidation,
 * protected-path gate, and chat-first prepare offer binding.
 *
 * Deterministic only — ZERO OpenAI REAL — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import type {
  IntentAnalysisDto,
} from "@/features/project-assistant/f2/types";
import {
  prepareGenericExecutionContractDraft,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  authorizeGenericPreparedContract,
} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  inspectExecutionContract,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
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
    objective: "Documenter le filtre",
    scope: "projects/demo/docs/filter.md",
    rephrasedRequest: "Mettre à jour la doc du filtre",
    outOfScope: ["migration"],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "Doc à jour",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/docs/filter.md"],
      scopeOut: [],
    } as IntentAnalysisDto["executionIntent"],
    ...overrides,
  };
}

describe("P6 Authority & Chat-First Continuity", () => {
  let runtime: RuntimeApplicationService;
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
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-auth-cf.sqlite"),
      idPrefix: "acfc",
    });
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

  async function seed(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `ACFC ${suffix}`,
      objective: "Authority continuity",
      context: "det",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `AC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:acfc-${suffix}`,
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
    const cycleInstanceId = `cyc:acfc-${suffix}`;
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
    const identity = `acme/acfc-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId };
  }

  it("Q03/Q04/Q07 — LPS currentness change between PREPARE and AUTHORIZE → BLOCK", async () => {
    const { projectId, cycleInstanceId } = await seed("stale");
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

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    // Mutate LPS (objective) → currentness fingerprint changes.
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const appended =
      await oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId,
        expectedVersion: lps.livingProjectState.version,
        objective: "Objectif LPS modifié après PREPARE",
        context: lps.livingProjectState.context,
        scope: lps.livingProjectState.scope,
        createdBy: LOCAL_PILOTE_ACTOR,
      });
    expect(appended.ok).toBe(true);

    const blocked = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected currentness block");
    expect(blocked.code).toBe("MATERIALITY_CURRENTNESS_STALE");
  });

  it("Q06 — D-P6-SHE-01: protected path PREPARE stamps STRUCTURAL (empty refs; not silent NON_STRUCTURAL)", async () => {
    const { projectId, cycleInstanceId } = await seed("prot");
    const prep = await prepareGenericExecutionContractDraft({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis({
        objective: "Modifier la doctrine",
        scope: "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
        expectedOutcome: "Doctrine touchée",
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

  it("Q23 — D-P6-SHE-01: without repository binding PREPARE may be inspectable; authorize stays fail-closed", async () => {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "No binding",
      objective: "No repo",
      context: "det",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "NOBIND",
      idempotencyKey: "idem:acfc-nobind",
    });
    if (!created.ok) throw new Error("create");
    const projectId = created.project.projectId;
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // SHE — missing binding is a reserve / fail-closed at authorize, not a
    // silent NON_STRUCTURAL. If PREPARE still refuses, accept historical codes.
    if (!prep.ok) {
      expect(
        [
          "REPOSITORY_BINDING_REQUIRED",
          "MATERIALITY_UNKNOWN",
          "STRUCTURAL_HUMAN_DECISION_REQUIRED",
        ].includes(prep.code),
      ).toBe(true);
      return;
    }
    expect(prep.contract.decisionRefs).toEqual([]);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      inspectedFacts: ["action", "semanticFingerprint"],
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error("inspect");
    const blocked = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
  });
});
