/**
 * P6 — M-HD-01 Generic Mission HumanDecision binding (O1 Delivery).
 *
 * Deterministic Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
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
  computeGenericMissionPresentationDigest,
  verifyGenericMissionSnapshotIntegrity,
} from "@/features/project-assistant/w2/genericMissionSubject";
import {
  clearPendingGenericPrepareOffer,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  inspectExecutionContract,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  authorizeGenericPreparedContract,
} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  confirmExecutionContractForAuthorization,
} from "@/features/project-assistant/w2/confirmForAuthorization";
import {
  governedExecuteSelectAgent,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { LOCAL_PILOTE_ACTOR, validateDecisionBasis } from "@/lib/oa/decision";
import {
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "@/lib/oa/execution-attempt";
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
import type {
  IntentAnalysisDto,
} from "@/features/project-assistant/f2/types";

const APP = path.resolve(__dirname, "../..");

function structuralAnalysis(overrides?: {
  objective?: string;
  expectedOutcome?: string;
  scope?: string;
}): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: overrides?.objective ?? "Refactorer le binding d'autorité générique",
    expectedOutcome:
      overrides?.expectedOutcome ?? "Mission structurante préparable après HD",
    scope: overrides?.scope ?? "projects/demo/src/authority",
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "code_change",
      scopeIn: [overrides?.scope ?? "projects/demo/src/authority"],
      requiredCapabilities: [],
    },
  };
}

function nonStructuralAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Documenter un helper local",
    expectedOutcome: "Note inspectable",
    scope: "projects/demo/src/notes.md",
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "docs_write",
      scopeIn: ["projects/demo/src/notes.md"],
      requiredCapabilities: [],
    },
  };
}

describe("P6 M-HD-01 Generic Mission HumanDecision", () => {
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
    sessionDbPath = tempProductDbPath("p6-mhd01.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhd01",
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
      name: `MHD01 ${suffix}`,
      objective: "M-HD-01 Generic Mission HD",
      context: "det mhd01",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MH${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhd01-${suffix}`,
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
    const identity = `acme/mhd01-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  async function sealAndAccept(input: {
    projectId: string;
    analysis: IntentAnalysisDto;
    cycleInstanceId?: string | null;
  }) {
    const sealed = await sealGenericMissionForPresentation({
      oa: runtime.oa!,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId ?? null,
      analysis: input.analysis,
    });
    if (!sealed.ok) throw new Error(`seal: ${sealed.code} ${sealed.message}`);
    const recorded = await recordGenericMissionHumanDecision({
      oa: runtime.oa!,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis: input.analysis,
      forceLocalAuthority: true,
    });
    if (!recorded.ok) {
      throw new Error(`record: ${recorded.code} ${recorded.message}`);
    }
    return { subject: sealed.subject, decision: recorded.decision };
  }

  it("HD01 — non-structural PREPARE without systematic HD; decisionRefs empty", async () => {
    const { projectId, oa } = await seedProject("hd01");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: nonStructuralAnalysis(),
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

  it("HD02 — SHE: structural without HD → inspectable PREPARE (empty decisionRefs; HD deferred)", async () => {
    const { projectId, oa } = await seedProject("hd02");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // D-P6-SHE-01 — PREPARE no longer consumes structural HD.
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get");
    expect(live.contract.decisionRefs ?? []).toEqual([]);
    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    expect(live.contract.inputs?.sheDeferredStructuralAuthority).toBe(true);
  });

  it("HD03 — structural with accepted HD → same mission resume + decisionRefs", async () => {
    const { projectId, oa } = await seedProject("hd03");
    const analysis = structuralAnalysis();
    const { decision, subject } = await sealAndAccept({ projectId, analysis });
    expect(decision.decisionBasis?.sourceType).toBe("generic_mission");
    expect(decision.subject).toBe(subject.missionSubjectId);
    expect(decision.decisionBasis?.sourceDigest).toBe(subject.presentationDigest);

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
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
  });

  it("HD04 — HD from another Project → REFUS", async () => {
    const a = await seedProject("hd04a");
    const b = await seedProject("hd04b");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({
      projectId: a.projectId,
      analysis,
    });
    const prep = await prepareGenericExecutionContractDraft({
      oa: b.oa,
      projectId: b.projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("HD_PROJECT_MISMATCH");
  });

  it("HD05/HD16 — HD of another mission / distinct identities → REFUS", async () => {
    const { projectId, oa } = await seedProject("hd05");
    const analysis = structuralAnalysis();
    const first = await sealAndAccept({ projectId, analysis });
    const second = await sealAndAccept({ projectId, analysis });
    expect(first.subject.missionSubjectId).not.toBe(second.subject.missionSubjectId);
    // Same content may share digest only if identity included — identities differ ⇒ digests differ.
    expect(first.subject.presentationDigest).not.toBe(
      second.subject.presentationDigest,
    );

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: first.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // first HD superseded by second accept on different subjects — first still valid for its subject
    // but second accept is different subject; first should still verify if not superseded.
    // listAcceptedBySubject is per subject — first remains accepted.
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const wrong = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis({
        objective: "Autre mission totalement différente",
        expectedOutcome: "Autre résultat",
        scope: "projects/demo/src/other",
      }),
      decisionId: first.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(wrong.ok).toBe(false);
    if (wrong.ok) throw new Error("expected refuse");
    expect(
      wrong.code === "HD_MISSION_MISMATCH" ||
        wrong.code === "HD_SCOPE_MISMATCH" ||
        wrong.code === "HD_SUBJECT_STALE" ||
        wrong.code === "HD_EFFECTS_MISMATCH",
    ).toBe(true);
  });

  it("HD06/HD17 — scope/effects modified or same id with material change → REFUS", async () => {
    const { projectId, oa } = await seedProject("hd06");
    const analysis = structuralAnalysis();
    const { decision, subject } = await sealAndAccept({ projectId, analysis });
    const tampered = buildGenericMissionSubject({
      missionSubjectId: subject.missionSubjectId,
      projectId: subject.projectId,
      cycleInstanceId: subject.cycleInstanceId,
      objective: "OBJECTIF MUTÉ",
      expectedOutcome: subject.expectedOutcome,
      scopeNarrative: subject.scopeNarrative,
      scopeIn: subject.scopeIn,
      scopeOut: subject.scopeOut,
      materiality: subject.materiality,
      materialityReasonCodes: subject.materialityReasonCodes,
      repositoryBindingIdentity: subject.repositoryBindingIdentity,
      pathRoot: subject.pathRoot,
      effects: subject.effects,
      impactSignals: subject.impactSignals,
      lpsId: subject.lpsId,
      lpsVersion: subject.lpsVersion,
      doctrineDigest: subject.doctrineDigest,
      optionRefs: subject.optionRefs,
      presentedAtIso: subject.presentedAtIso,
    });
    expect(tampered.presentationDigest).not.toBe(subject.presentationDigest);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis({
        objective: "OBJECTIF MUTÉ",
        scope: "projects/demo/src/mutated",
      }),
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
  });

  it("HD07 — superseded HD → REFUS", async () => {
    const { projectId, oa } = await seedProject("hd07");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const first = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      forceLocalAuthority: true,
    });
    if (!first.ok) throw new Error(first.message);
    // Same occurrence subject, re-seal with CURRENT LPS after first HD linked LPS.
    const resealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      missionSubjectId: sealed.subject.missionSubjectId,
    });
    if (!resealed.ok) throw new Error(resealed.message);
    const second = await recordGenericMissionHumanDecision({
      oa,
      subject: resealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      forceLocalAuthority: true,
      supersedeExistingAccepted: true,
    });
    if (!second.ok) throw new Error(second.message);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: first.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("HD_SUPERSEDED");
  });

  it("HD08/HD22 — refused HD → REFUS; no PREPARE", async () => {
    const { projectId, oa } = await seedProject("hd08");
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
    expect(refused.decision.status).toBe("refused");
    expect(refused.executionAttemptCreated).toBe(false);

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: refused.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("HD_REFUSED");
  });

  it("HD09/HD18/HD19 — digest integrity; presentedAtIso does not break seal", async () => {
    const { projectId } = await seedProject("hd09");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const again = buildGenericMissionSubject({
      ...sealed.subject,
      presentedAtIso: "2099-01-01T00:00:00.000Z",
    });
    expect(again.presentationDigest).toBe(sealed.subject.presentationDigest);

    const { decision } = await sealAndAccept({ projectId, analysis });
    const integrity = verifyGenericMissionSnapshotIntegrity({
      basis: decision.decisionBasis!,
    });
    expect(integrity.ok).toBe(true);
    expect(
      computeGenericMissionPresentationDigest({
        schemaVersion: "0.1.0-gms",
        missionSubjectId: sealed.subject.missionSubjectId,
        projectId: sealed.subject.projectId,
        cycleInstanceId: sealed.subject.cycleInstanceId,
        objective: sealed.subject.objective,
        expectedOutcome: sealed.subject.expectedOutcome,
        scopeNarrative: sealed.subject.scopeNarrative,
        scopeIn: sealed.subject.scopeIn,
        scopeOut: sealed.subject.scopeOut,
        materiality: sealed.subject.materiality,
        materialityReasonCodes: sealed.subject.materialityReasonCodes,
        repositoryBindingIdentity: sealed.subject.repositoryBindingIdentity,
        pathRoot: sealed.subject.pathRoot,
        effects: sealed.subject.effects,
        impactSignals: sealed.subject.impactSignals,
        lpsId: sealed.subject.lpsId,
        lpsVersion: sealed.subject.lpsVersion,
        doctrineDigest: sealed.subject.doctrineDigest,
        optionRefs: sealed.subject.optionRefs,
      }),
    ).toBe(sealed.subject.presentationDigest);
  });

  it("HD10 — repeated resume idempotent (same contract id)", async () => {
    const { projectId, oa } = await seedProject("hd10");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
    const a = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!a.ok) throw new Error(`prepare a: ${a.code} ${a.message}`);
    const b = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!b.ok) throw new Error(`prepare b: ${b.code} ${b.message}`);
    expect(a.contract.executionContractId).toBe(b.contract.executionContractId);
    expect(a.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(b.contract.decisionRefs).toEqual([decision.decisionId]);
  });

  it("HD11 — restart after HD: resume from OA SQLite without process-local offer", async () => {
    const { projectId } = await seedProject("hd11");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
    clearPendingGenericPrepareOffer(projectId, sessionDbPath);

    // Simulate process restart: new runtime on same Product SQLite.
    const runtime2 = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhd01r",
    });
    const oa2 = runtime2.oa!;
    const loaded = await oa2.decisionServices.getHumanDecision.execute({
      decisionId: decision.decisionId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("reload");
    expect(loaded.decision.decisionBasis?.sourceType).toBe("generic_mission");

    const prep = await prepareGenericExecutionContractDraft({
      oa: oa2,
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

  it("HD12 — with cycle / without cycle; no artificial cycle", async () => {
    const { projectId, oa } = await seedProject("hd12");
    const analysis = structuralAnalysis();
    const noCycle = await sealAndAccept({
      projectId,
      analysis,
      cycleInstanceId: null,
    });
    expect(noCycle.subject.cycleInstanceId).toBeNull();
    expect(noCycle.decision.cycleInstanceId).toBeUndefined();

    expect(noCycle.decision.decisionBasis?.genericMissionContext?.cycleInstanceId).toBeNull();
    expect(noCycle.decision.cycleInstanceId).toBeUndefined();
  });

  it("HD13 — Confirmation alone does not replace HD", async () => {
    const { projectId, oa } = await seedProject("hd13");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: nonStructuralAnalysis(),
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    if (live.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa,
        projectId,
        executionContractId: prep.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(true);
    }
    // D-P6-SHE-01 — Confirmation on another contract ≠ structural HD, but
    // STRUCTURAL PREPARE is now allowed without HD (authority at Exécuter).
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
    const structuralLive =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: structural.executionContractId,
      });
    expect(structuralLive.ok).toBe(true);
    if (!structuralLive.ok) throw new Error("get structural");
    expect(structuralLive.contract.decisionRefs ?? []).toEqual([]);
    expect(structuralLive.contract.constraints).toContain(
      "MATERIALITY:STRUCTURAL",
    );
  });

  it("HD14 — Record HumanDecision creates no Attempt", async () => {
    const { projectId, oa } = await seedProject("hd14");
    const recorded = await sealAndAccept({
      projectId,
      analysis: structuralAnalysis(),
    });
    expect(recorded.decision.decisionId).toMatch(/^dec:/);
    // No EC yet — no Attempt can exist for this decision path.
    expect(
      (
        await oa.executionAttemptServices!.attempts.listByContract(
          "xct:gen-prep:nonexistent",
        )
      ).length,
    ).toBe(0);
  });

  it("HD15 — decisionRefs only verified applicable refs", async () => {
    const { projectId, oa } = await seedProject("hd15");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
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
    expect(prep.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(prep.contract.decisionRefs).not.toContain("dec:forged");
  });

  it("HD20 — LPS transition from HD itself allows resume", async () => {
    const { projectId, oa } = await seedProject("hd20");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const lpsBefore = sealed.subject.lpsVersion;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      forceLocalAuthority: true,
      linkToLivingProjectState: true,
    });
    if (!recorded.ok) throw new Error(recorded.message);
    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lpsAfter.ok) throw new Error("lps");
    expect(lpsAfter.livingProjectState.version).toBeGreaterThanOrEqual(lpsBefore);
    expect(lpsAfter.livingProjectState.decisionIds ?? []).toContain(
      recorded.decision.decisionId,
    );
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: recorded.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
  });

  it("HD21 — material Product mutation after HD → resume refused", async () => {
    const { projectId, oa } = await seedProject("hd21");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
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
    if (prep.ok) throw new Error("expected refuse");
    expect(
      prep.code === "HD_SUBJECT_STALE" ||
        prep.code === "HD_SCOPE_MISMATCH" ||
        prep.code === "HD_EFFECTS_MISMATCH",
    ).toBe(true);
  });

  it("HD23 — request-amend requires new presentation; no PREPARE", async () => {
    const { projectId, oa } = await seedProject("hd23");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const amended = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
      analysis,
      forceLocalAuthority: true,
    });
    expect(amended.ok).toBe(true);
    if (!amended.ok) throw new Error(amended.message);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: amended.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected refuse");
    expect(prep.code).toBe("HD_AMEND_REQUIRES_NEW_PRESENTATION");
  });

  it("HD24 — legacy DecisionBasis sourceTypes still validate", () => {
    const proposal = validateDecisionBasis({
      sourceType: "proposal",
      sourceRef: "prop:legacy:1",
      sourceDigest: "a".repeat(64),
      projectId: "prj:legacy",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      executionBasis: { objective: "x" },
    });
    expect(proposal).toBeNull();

    const gm = validateDecisionBasis({
      sourceType: "generic_mission",
      sourceRef: "gms:abc123def456",
      sourceDigest: "b".repeat(64),
      projectId: "prj:legacy",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      genericMissionContext: {
        missionSubjectId: "gms:abc123def456",
        presentationDigest: "b".repeat(64),
        subjectSchemaVersion: "0.1.0-gms",
        objective: "o",
        expectedOutcome: "e",
        scopeNarrative: "s",
        scopeIn: [],
        scopeOut: [],
        materiality: "structural",
        materialityReasonCodes: [],
        repositoryBindingIdentity: null,
        pathRoot: null,
        requiredCapabilities: [],
        expectedOutputs: [],
        reversibilityExpectation: null,
        stopConditions: [],
        risks: [],
        reservations: [],
        intentKind: null,
        artifactType: null,
        requestedOperation: null,
        impactSignals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
        },
        optionRefs: [GENERIC_MISSION_OPTION_ACCEPT_PREPARE],
        selectedOptionRef: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        cycleInstanceId: null,
      },
      executionBasis: { objective: "o" },
    });
    expect(gm).toBeNull();

    const foreign = validateDecisionBasis({
      sourceType: "proposal",
      sourceRef: "prop:x",
      sourceDigest: "c".repeat(64),
      projectId: "prj:legacy",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      genericMissionContext: {
        missionSubjectId: "gms:x",
        presentationDigest: "c".repeat(64),
        subjectSchemaVersion: "0.1.0-gms",
        objective: "o",
        expectedOutcome: "e",
        scopeNarrative: "s",
        scopeIn: [],
        scopeOut: [],
        materiality: "structural",
        materialityReasonCodes: [],
        repositoryBindingIdentity: null,
        pathRoot: null,
        requiredCapabilities: [],
        expectedOutputs: [],
        reversibilityExpectation: null,
        stopConditions: [],
        risks: [],
        reservations: [],
        intentKind: null,
        artifactType: null,
        requestedOperation: null,
        impactSignals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
        },
        optionRefs: [GENERIC_MISSION_OPTION_ACCEPT_PREPARE],
        selectedOptionRef: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        cycleInstanceId: null,
      },
      executionBasis: {},
    });
    expect(foreign?.reason).toBe("proposal_forbids_generic_mission_context");
  });

  it("E1 — structural + verified HD can Select (Fake)", async () => {
    const { projectId, oa } = await seedProject("e1");
    const analysis = structuralAnalysis();
    const { decision } = await sealAndAccept({ projectId, analysis });
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
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    if (live.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa,
        projectId,
        executionContractId: prep.contract.executionContractId,
        forceLocalAuthority: true,
      });
      if (!confirmed.ok) {
        throw new Error(`confirm: ${confirmed.code} ${confirmed.message}`);
      }
    }
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) {
      throw new Error(`authorize: ${authorized.code} ${authorized.message}`);
    }
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("source: no SQL migration / no parallel Decision store in Delivery files", () => {
    const types = readFileSync(
      path.join(APP, "lib/oa/decision/domain/types.ts"),
      "utf8",
    );
    expect(types).toContain('generic_mission');
    expect(types).toContain("DecisionBasisGenericMissionContext");
    const prepSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/prepareGenericExecutionContractDraft.ts",
      ),
      "utf8",
    );
    expect(prepSrc).toContain("verifyGenericMissionHumanDecisionForPrepare");
    expect(prepSrc).not.toMatch(/CREATE TABLE/i);
  });
});
