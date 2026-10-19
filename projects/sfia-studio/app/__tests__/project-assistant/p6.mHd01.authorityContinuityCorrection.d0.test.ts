/**
 * P6 — M-HD-01 Authority Continuity Correction Pass (CR-01…CR-04).
 *
 * Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  buildGenericMissionSubject,
  evaluateLpsTransitionAfterHumanDecision,
  materialCurrentnessMatch,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { verifyGenericMissionHumanDecisionForContract } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { DecisionBasisGenericMissionContext } from "@/lib/oa/decision";

function structuralAnalysis(overrides?: {
  objective?: string;
  expectedOutcome?: string;
  scope?: string;
  intentKind?: string;
  artifactType?: string;
  requestedOperation?: string | null;
  requiredCapabilities?: string[];
  stopConditions?: string[];
  reversibility?: "reversible" | "irreversible" | "unknown";
}): IntentAnalysisDto {
  const scope = overrides?.scope ?? "projects/demo/src/authority";
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: overrides?.objective ?? "Mission structurante correction",
    expectedOutcome: overrides?.expectedOutcome ?? "Effets scellés stables",
    scope,
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    stopConditions: overrides?.stopConditions ?? ["STOP_MATERIAL_A"],
    executionIntent: {
      intentKind: overrides?.intentKind ?? "code_change",
      artifactType: overrides?.artifactType ?? "module",
      scopeIn: [scope],
      requiredCapabilities: overrides?.requiredCapabilities ?? [],
      requestedOperation: overrides?.requestedOperation ?? "refactor-binding",
      reversibilityExpectation: overrides?.reversibility ?? "reversible",
    },
  };
}

describe("P6 M-HD-01 Authority Continuity Correction", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    sessionDbPath = tempProductDbPath("p6-mhd01-cr.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhdcr",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else {
      process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MHDCR ${suffix}`,
      objective: "M-HD-01 authority continuity",
      context: "det mhdcr",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhdcr-${suffix}`,
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
    const identity = `acme/mhdcr-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
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
    return { projectId, oa };
  }

  async function sealAccept(projectId: string, analysis: IntentAnalysisDto) {
    const sealed = await sealGenericMissionForPresentation({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(`seal ${sealed.code}`);
    const recorded = await recordGenericMissionHumanDecision({
      oa: runtime.oa!,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      forceLocalAuthority: true,
    });
    if (!recorded.ok) throw new Error(`record ${recorded.code}`);
    return { subject: sealed.subject, decision: recorded.decision };
  }

  // ---------- CR-01 FX ----------
  describe("CR-01 effects revalidation (FX)", () => {
    it("FX01 — requestedOperation change → REFUS", async () => {
      const { projectId, oa } = await seedProject("fx01");
      const analysis = structuralAnalysis({ requestedOperation: "op-a" });
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ requestedOperation: "op-b" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) throw new Error("expected refuse");
      expect(prep.code).toBe("HD_EFFECTS_MISMATCH");
    });

    it("FX02 — intentKind change → REFUS", async () => {
      const { projectId, oa } = await seedProject("fx02");
      const analysis = structuralAnalysis({ intentKind: "code_change" });
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ intentKind: "docs_write" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) throw new Error("expected refuse");
      expect(prep.code).toBe("HD_EFFECTS_MISMATCH");
    });

    it("FX03 — artifactType change → REFUS", async () => {
      const { projectId, oa } = await seedProject("fx03");
      const analysis = structuralAnalysis({ artifactType: "module" });
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ artifactType: "service" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) throw new Error("expected refuse");
      expect(prep.code).toBe("HD_EFFECTS_MISMATCH");
    });

    it("FX05/FX06/FX07 — outputs / reversibility / stopConditions → REFUS", async () => {
      const sealedCtx = {
        objective: "o",
        expectedOutcome: "e",
        scopeNarrative: "s",
        scopeIn: ["a"],
        scopeOut: [],
        materiality: "structural" as const,
        materialityReasonCodes: [],
        repositoryBindingIdentity: "acme/x",
        pathRoot: "projects/demo",
        requiredCapabilities: ["cap:x"],
        expectedOutputs: ["e"],
        intentKind: "code_change",
        artifactType: "module",
        requestedOperation: "op",
        reversibilityExpectation: "reversible" as const,
        stopConditions: ["STOP_A", "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE"],
        risks: [],
        reservations: [],
        impactSignals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
        },
        cycleInstanceId: null,
        missionSubjectId: "gms:x",
        presentationDigest: "a".repeat(64),
        subjectSchemaVersion: "0.1.0-gms" as const,
        optionRefs: [GENERIC_MISSION_OPTION_ACCEPT_PREPARE],
        selectedOptionRef: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      } satisfies DecisionBasisGenericMissionContext;

      expect(
        materialCurrentnessMatch({
          sealed: sealedCtx,
          current: {
            ...sealedCtx,
            expectedOutputs: ["OTHER"],
            requiredCapabilities: sealedCtx.requiredCapabilities,
          },
        }).ok,
      ).toBe(false);

      expect(
        materialCurrentnessMatch({
          sealed: sealedCtx,
          current: {
            ...sealedCtx,
            reversibilityExpectation: "irreversible",
            requiredCapabilities: sealedCtx.requiredCapabilities,
          },
        }).ok,
      ).toBe(false);

      expect(
        materialCurrentnessMatch({
          sealed: sealedCtx,
          current: {
            ...sealedCtx,
            stopConditions: ["NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE"],
            requiredCapabilities: sealedCtx.requiredCapabilities,
          },
        }).ok,
      ).toBe(false);
    });

    it("FX08/FX09 — scope / repository → REFUS", async () => {
      const { projectId, oa } = await seedProject("fx08");
      const analysis = structuralAnalysis({
        scope: "projects/demo/src/authority",
      });
      const { decision } = await sealAccept(projectId, analysis);
      const scopeDrift = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ scope: "projects/demo/src/other" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(scopeDrift.ok).toBe(false);

      await oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/mhdcr-mutated",
          remoteUrl: "https://github.com/acme/mhdcr-mutated.git",
          defaultBranch: "main",
          pathRoot: "projects/other",
        },
      });
      const repoDrift = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(repoDrift.ok).toBe(false);
    });

    it("FX10 — identical mission → PREPARE OK", async () => {
      const { projectId, oa } = await seedProject("fx10");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      expect(prep.contract.decisionRefs).toEqual([decision.decisionId]);
    });
  });

  // ---------- CR-02 PR ----------
  describe("CR-02 presentation / Record authenticity (PR)", () => {
    it("PR01 — Product-qualified subject + explicit Pilote option → Record OK", async () => {
      const { projectId } = await seedProject("pr01");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      expect(decision.authority).toBe("pilot");
      expect(decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR.actorId);
      expect(decision.decisionBasis?.sourceType).toBe("generic_mission");
    });

    it("PR02 — forged subject with recomputed digest → Record REFUS", async () => {
      const { projectId, oa } = await seedProject("pr02");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const forged = buildGenericMissionSubject({
        ...sealed.subject,
        objective: "OBJECTIF FORGE",
      });
      expect(forged.presentationDigest).not.toBe(sealed.subject.presentationDigest);
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: forged,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        forceLocalAuthority: true,
      });
      expect(recorded.ok).toBe(false);
      if (recorded.ok) throw new Error("expected refuse");
      expect(recorded.code).toBe("HD_SUBJECT_STALE");
    });

    it("PR03 — Pilote authority absent → Record REFUS", async () => {
      const { projectId, oa } = await seedProject("pr03");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const prev = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      const prevLegacy = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      // M-HD-02 — session actor present; Pilot evidence gate still fail-closed.
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        authenticatedPilote: {
          actor: {
            actorId: "actor:github:11111111",
            role: "decision_maker",
            authorityLevel: "none",
          },
          githubUserId: "11111111",
        },
        forceLocalAuthority: false,
      });
      if (prev === undefined) delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      else process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = prev;
      if (prevLegacy === undefined) {
        delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      } else {
        process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = prevLegacy;
      }
      expect(recorded.ok).toBe(false);
      if (recorded.ok) throw new Error("expected refuse");
      expect(recorded.code).toBe("AUTHORITY_NOT_CONFIGURED");
    });

    it("PR04 — D-P6-SHE-01: Confirmation alone is not HumanDecision; structural PREPARE empty refs", async () => {
      const { projectId, oa } = await seedProject("pr04");
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: buildIntentAnalysisFromSolicitedMission({
          objective: "Non structural note",
          expectedOutcome: "note",
          scope: "projects/demo/src/notes.md",
        }),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      if (!prep.ok) throw new Error(prep.message);
      const live = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prep.executionContractId,
      });
      if (!live.ok) throw new Error("get");
      if (live.contract.status === "confirmation_required") {
        await inspectExecutionContract({
          oa,
          projectId,
          executionContractId: prep.executionContractId,
        });
        await confirmExecutionContractForAuthorization({
          oa,
          projectId,
          executionContractId: prep.executionContractId,
          forceLocalAuthority: true,
        });
      }
      // D-P6-SHE-01 — Confirmation alone is not HumanDecision; structural PREPARE
      // succeeds with empty decisionRefs (HD deferred to Execute).
      const structural = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis(),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(structural.ok).toBe(true);
      if (!structural.ok) throw new Error(structural.message);
      expect(structural.humanDecisionCreated).toBe(false);
      expect(structural.executionAttemptCreated).toBe(false);
      const structuralLive =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: structural.executionContractId,
        });
      expect(structuralLive.ok).toBe(true);
      if (!structuralLive.ok) throw new Error("structural get");
      expect(structuralLive.contract.decisionRefs ?? []).toEqual([]);
      expect(structuralLive.contract.constraints).toContain(
        "MATERIALITY:STRUCTURAL",
      );
    });

    it("PR05/PR06/PR07 — refuse/amend/no Attempt", async () => {
      const { projectId, oa } = await seedProject("pr05");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const refused = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
        analysis,
        forceLocalAuthority: true,
      });
      expect(refused.ok).toBe(true);
      if (!refused.ok) throw new Error(refused.message);
      expect(refused.executionAttemptCreated).toBe(false);
      const prepRefuse = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: refused.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prepRefuse.ok).toBe(false);

      const sealed2 = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed2.ok) throw new Error(sealed2.message);
      const amended = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed2.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
        analysis,
        forceLocalAuthority: true,
      });
      expect(amended.ok).toBe(true);
      if (!amended.ok) throw new Error(amended.message);
      const prepAmend = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: amended.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prepAmend.ok).toBe(false);
      if (prepAmend.ok) throw new Error("expected refuse");
      expect(prepAmend.code).toBe("HD_AMEND_REQUIRES_NEW_PRESENTATION");
    });
  });

  // ---------- CR-03 AU ----------
  describe("CR-03 Confirm/Authorize currentness (AU)", () => {
    async function prepareStructuralWithHd(suffix: string) {
      const { projectId, oa } = await seedProject(suffix);
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      if (!prep.ok) throw new Error(prep.message);
      const inspected = await inspectExecutionContract({
        oa,
        projectId,
        executionContractId: prep.contract.executionContractId,
      });
      if (!inspected.ok) throw new Error(inspected.message);
      return { projectId, oa, analysis, decision, prep, inspected };
    }

    it("AU01 — HD valid → Confirm/Authorize possible", async () => {
      const ctx = await prepareStructuralWithHd("au01");
      const live = await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: ctx.prep.contract.executionContractId,
      });
      if (!live.ok) throw new Error("get");
      if (live.contract.status === "confirmation_required") {
        const confirmed = await confirmExecutionContractForAuthorization({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.prep.contract.executionContractId,
          forceLocalAuthority: true,
        });
        expect(confirmed.ok).toBe(true);
      }
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.prep.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(true);
    });

    it("AU03 — HD superseded after PREPARE → Authorize REFUS", async () => {
      const ctx = await prepareStructuralWithHd("au03");
      const resealed = await sealGenericMissionForPresentation({
        oa: ctx.oa,
        projectId: ctx.projectId,
        cycleInstanceId: null,
        analysis: ctx.analysis,
        missionSubjectId: ctx.decision.subject,
      });
      if (!resealed.ok) throw new Error(resealed.message);
      const second = await recordGenericMissionHumanDecision({
        oa: ctx.oa,
        subject: resealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis: ctx.analysis,
        forceLocalAuthority: true,
        supersedeExistingAccepted: true,
      });
      if (!second.ok) throw new Error(second.message);
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.prep.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(false);
      if (authorized.ok) throw new Error("expected refuse");
      expect(authorized.code).toBe("HD_SUPERSEDED");
    });

    it("AU05 — repository divergent → contract verify REFUS", async () => {
      const ctx = await prepareStructuralWithHd("au05");
      await ctx.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: ctx.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/mhdcr-au05",
          remoteUrl: "https://github.com/acme/mhdcr-au05.git",
          defaultBranch: "main",
          pathRoot: "projects/other",
        },
      });
      const live = await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: ctx.prep.contract.executionContractId,
      });
      if (!live.ok) throw new Error("get");
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: live.contract,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_SUBJECT_STALE");
    });

    it("AU06 — forged decisionRef → verify REFUS", async () => {
      const ctx = await prepareStructuralWithHd("au06");
      const live = await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: ctx.prep.contract.executionContractId,
      });
      if (!live.ok) throw new Error("get");
      const forged = {
        ...live.contract,
        decisionRefs: ["dec:forged:not-real"],
      };
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: "dec:forged:not-real",
        contract: forged,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_ABSENT");
    });

    it("AU08 — NON_STRUCTURAL without HD non-regression", async () => {
      const { projectId, oa } = await seedProject("au08");
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: buildIntentAnalysisFromSolicitedMission({
          objective: "Note locale",
          expectedOutcome: "note",
          scope: "projects/demo/src/notes.md",
        }),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      const live = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prep.executionContractId,
      });
      expect(live.ok).toBe(true);
      if (!live.ok) throw new Error("get");
      expect(live.contract.decisionRefs ?? []).toEqual([]);
    });

    it("AU10 — D-P6-SHE-01: structural without HD → PREPARE OK empty refs STRUCTURAL", async () => {
      const { projectId, oa } = await seedProject("au10");
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis(),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      expect(prep.humanDecisionCreated).toBe(false);
      expect(prep.executionAttemptCreated).toBe(false);
      const live = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prep.executionContractId,
      });
      expect(live.ok).toBe(true);
      if (!live.ok) throw new Error("get");
      expect(live.contract.decisionRefs ?? []).toEqual([]);
      expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    });
  });

  // ---------- CR-04 LP ----------
  describe("CR-04 LPS currentness (LP)", () => {
    it("LP01 — transition due to Record HD alone → OK", async () => {
      const { projectId, oa } = await seedProject("lp01");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
    });

    it("LP02/LP03 — material LPS drift after HD → REFUS", async () => {
      const sealed = {
        version: 1,
        objective: "obj",
        context: "ctx",
        scope: "scp",
        constraints: ["C1"],
        doctrineDigest: "d1",
        activeCycleInstanceId: null,
        trajectoryId: "trj:1",
        trajectoryVersion: 1,
        decisionIds: [] as string[],
      };
      const drifted = {
        ...sealed,
        version: 3,
        objective: "MUTATED",
        decisionIds: ["dec:x"],
      };
      const evalDrift = evaluateLpsTransitionAfterHumanDecision({
        sealed,
        current: drifted,
        decisionId: "dec:x",
      });
      expect(evalDrift.ok).toBe(false);
      if (evalDrift.ok) throw new Error("expected refuse");
      expect(evalDrift.reason).toBe("lps_objective_drift");
    });

    it("LP04 — repository muté → REFUS", async () => {
      const { projectId, oa } = await seedProject("lp04");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      await oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/lp04-mut",
          remoteUrl: "https://github.com/acme/lp04-mut.git",
          defaultBranch: "main",
          pathRoot: "projects/other",
        },
      });
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
    });

    it("LP06 — restart on legitimate state → resume OK", async () => {
      const { projectId } = await seedProject("lp06");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const runtime2 = bootW2Runtime({
        productDbPath: sessionDbPath,
        idPrefix: "mhdcr2",
      });
      const prep = await prepareGenericExecutionContractDraft({
        oa: runtime2.oa!,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
    });
  });

  // ---------- CY / ID ----------
  describe("Cycle + idempotence (CY/ID)", () => {
    it("CY02 — sans cycle → parcours valide", async () => {
      const { projectId, oa } = await seedProject("cy02");
      const analysis = structuralAnalysis();
      const { decision, subject } = await sealAccept(projectId, analysis);
      expect(subject.cycleInstanceId).toBeNull();
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
    });

    it("ID01 — même EC courant → idempotence", async () => {
      const { projectId, oa } = await seedProject("id01");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const a = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      const b = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(a.ok && b.ok).toBe(true);
      if (!a.ok || !b.ok) throw new Error("prepare");
      expect(a.contract.executionContractId).toBe(b.contract.executionContractId);
    });

    it("ID03 — same decisionRefs but effects diverge → no reuse as success path", async () => {
      const { projectId, oa } = await seedProject("id03");
      const analysis = structuralAnalysis({ requestedOperation: "op-a" });
      const { decision } = await sealAccept(projectId, analysis);
      const a = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(a.ok).toBe(true);
      const b = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ requestedOperation: "op-b" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(b.ok).toBe(false);
      if (b.ok) throw new Error("expected refuse");
      expect(b.code).toBe("HD_EFFECTS_MISMATCH");
    });
  });
});
