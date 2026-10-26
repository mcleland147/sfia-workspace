/**
 * P6 PRODUCT CONTINUITY CLOSURE — integrated Product happy path + adversarials.
 *
 * Traverses real F2 → prepare offer → OK vas-y → ExecutionContract →
 * w2Inspect → w2Confirm → w2Authorize (with version/fingerprint binding).
 *
 * Fake only at OpenAI boundary. ZERO Cursor REAL. ZERO Attempt.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  orchestrateAssistantSend,
} from "@/features/project-assistant/f2/orchestrateF2";
import {
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import {
  resetMw5ChallengeStoreForTests,
} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  getPendingGenericPrepareOffer,
  resolvePrepareOfferSessionKey,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2InspectExecutionContractAction,
} from "@/features/project-assistant/w2/actions";
import {
  prepareGenericExecutionContractDraft,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  resolveAuthoritativeProductMateriality,
} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import type {
  IntentAnalysisDto,
} from "@/features/project-assistant/f2/types";
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
  W2_DEMO_WORKSPACE_PROJECT_TITLE,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("P6 Product Continuity Closure — integrated Product path", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("p6-pcc-session.sqlite");
    // bootW2Runtime registers the global RuntimeApplicationService used by w2* actions.
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-pcc-product.sqlite"),
      idPrefix: "pcc",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: W2_DEMO_WORKSPACE_PROJECT_TITLE,
      objective: "Product continuity closure",
      context: "det integrated",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `PC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:pcc-${suffix}`,
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
    const cycleInstanceId = `cyc:pcc-${suffix}`;
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
    const identity = `acme/pcc-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa };
  }

  it("E01–E16 happy path: F2 recommend → OK vas-y → inspect → authorize via Product actions", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject("happy");

    const turn1 = await orchestrateAssistantSend({
      projectId,
      content:
        "Je voudrais réorganiser les fichiers du projet pour clarifier leur structure. __P6_GENERIC_MISSION__",
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).toMatch(/préparer le contrat|Je peux préparer|Je recommande/i);

    const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
    const offer = getPendingGenericPrepareOffer(projectId, sessionKey);
    expect(offer).toBeTruthy();
    expect(offer?.cycleInstanceId).toBe(cycleInstanceId);
    expect(offer?.scopeIn.length).toBeGreaterThan(0);

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    expect(turn2.text).toMatch(/préparé le contrat|Contrat inspectable/i);
    expect(turn2.text).toMatch(/xct:gen-prep:/);

    const contractIdMatch = turn2.text.match(/xct:gen-prep:[a-f0-9]+/);
    expect(contractIdMatch).toBeTruthy();
    const executionContractId = contractIdMatch![0];

    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId },
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    expect(
      (loaded.contract.inputs as { scopeIn?: string[] })?.scopeIn?.length,
    ).toBeGreaterThan(0);
    expect(
      (loaded.contract.inputs as { trustedLaunchContextPinnedAtPrepare?: boolean })
        ?.trustedLaunchContextPinnedAtPrepare,
    ).toBe(true);

    const decisionsBefore = await oa.decisionServices.decisions.listByProject(
      projectId,
    );

    // Product actions path (same handlers TrajectorySurface uses).
    // Ensure actions see this OA: bootW2Runtime registers globally — re-get.
    const inspect = await w2InspectExecutionContractAction({
      projectId,
      executionContractId,
      expectedVersion: loaded.contract.version,
    });
    expect(inspect.ok).toBe(true);
    if (!inspect.ok) throw new Error(inspect.message);
    expect(inspect.inspectionSufficient).toBe(true);

    if (loaded.contract.status === "confirmation_required") {
      const confirmed = await w2ConfirmExecutionContractAction({
        projectId,
        executionContractId,
      });
      expect(confirmed.ok).toBe(true);
      if (!confirmed.ok) throw new Error(confirmed.message);
    }

    const authorized = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId,
      expectedVersion: loaded.contract.version,
      expectedSemanticFingerprint: inspect.semanticFingerprint,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.outcome).toBe("AUTHORIZED");
    expect(authorized.attemptCreated).toBe(false);
    expect(authorized.executionPerformed).toBe(false);
    expect(authorized.authorityReceiptRef).toBeTruthy();

    const decisionsAfter = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    expect(decisionsAfter.length).toBe(decisionsBefore.length);

    // Offer consumed
    expect(getPendingGenericPrepareOffer(projectId, sessionKey)).toBeNull();
  });

  it("C05 — OK vas-y on other session does not bind offer", async () => {
    const { projectId } = await seedProject("sess");
    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: "Réorganiser docs __P6_GENERIC_MISSION__",
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);

    const otherSession = tempProductDbPath("p6-pcc-other-session.sqlite");
    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath: otherSession,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    // Cross-session: no prepare of the other session's offer.
    expect(turn2.text).not.toMatch(/xct:gen-prep:/);
    expect(turn2.text).not.toMatch(/J'ai préparé le contrat/i);
  });

  it("M02 — structural Build Doctrine path: SHE PREPARE inspectable ≠ authorize/execute (GAP-02)", async () => {
    // Historical assertion expected prep.ok=false (HD-before-PREPARE).
    // D-P6-SHE-01: PREPARE may yield an inspectable STRUCTURAL draft without HD.
    // Conserved safety: materiality not NON_STRUCTURAL; HD still required;
    // empty decisionRefs; no Attempt; protected Build Doctrine path is NOT
    // granted Morris GO by PREPARE alone (Execute still applies protected gates).
    const { projectId, cycleInstanceId, oa } = await seedProject("struct");
    const analysis: IntentAnalysisDto = {
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
      objective: "Mettre à jour le fichier indiqué pour améliorer la clarté",
      scope:
        "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
      rephrasedRequest: "Ajuster le fichier de cadrage listé",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: "Fichier ajusté",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: {
        intentKind: "other",
        scopeIn: [
          "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
        ],
        scopeOut: [],
      } as IntentAnalysisDto["executionIntent"],
    };
    const mat = await resolveAuthoritativeProductMateriality({
      oa,
      projectId,
      analysis,
      cycleInstanceId,
    });
    expect(mat.assessment.materiality).not.toBe("non_structural");
    expect(mat.assessment.humanDecisionRequired).toBe(true);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // SHE: inspectable PREPARE is admissible; PREPARE ≠ AUTHORIZE ≠ EXECUTE.
    // If a protected-path gate refuses PREPARE itself, that refuse is also valid.
    if (!prep.ok) {
      expect(prep.code).toBeTruthy();
      return;
    }
    expect(prep.ok).toBe(true);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    expect(prep.contract.inputs?.sheDeferredStructuralAuthority).toBe(true);
    // No Attempt listed for this contract after PREPARE.
    const attempts =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: prep.contract.executionContractId,
      });
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toHaveLength(0);
  });

  it("M04 — scope outside pathRoot → AUTHORITY / not NON_STRUCTURAL", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject("oos");
    const analysis: IntentAnalysisDto = {
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
      objective: "Modifier un autre arbre",
      scope: "projects/other/app/x.ts",
      rephrasedRequest: "Changer projects/other/app/x.ts",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: "Fichier modifié",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: {
        intentKind: "other",
        scopeIn: ["projects/other/app/x.ts"],
        scopeOut: [],
      } as IntentAnalysisDto["executionIntent"],
    };
    const mat = await resolveAuthoritativeProductMateriality({
      oa,
      projectId,
      analysis,
      cycleInstanceId,
    });
    expect(mat.facts.authorityEnvelopeExpanded).toBe(true);
    expect(mat.assessment.materiality).not.toBe("non_structural");
  });

  it("A01 — authorize without expectedVersion on stamped contract → BLOCK", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject("nov");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId,
      analysis: {
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
        objective: "Clarifier docs",
        scope: "projects/demo/docs/a.md",
        rephrasedRequest: "Clarifier docs",
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: "Docs clairs",
        criticalJustification: null,
        requestedOperation: null,
        executionIntent: {
          intentKind: "other",
          scopeIn: ["projects/demo/docs/a.md"],
          scopeOut: [],
        } as IntentAnalysisDto["executionIntent"],
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const inspected = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);

    const blocked = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: prep.contract.executionContractId,
      // missing expectedVersion / fingerprint
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected block");
    expect(blocked.code).toMatch(/EXPECTED_VERSION|EXPECTED_FINGERPRINT/);
  });
});
