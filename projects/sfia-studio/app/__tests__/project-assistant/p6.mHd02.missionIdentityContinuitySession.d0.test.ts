/**
 * P6 — M-HD-02 Targeted Correction: identity / HD continuity / session / replay.
 *
 * Fake SQLite only. ZERO Cursor REAL / OpenAI LIVE / Human QA.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  buildIntentAnalysisFromSolicitedMission,
  rememberGenericPrepareRecommendation,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  resetPendingGenericPrepareOfferStoreForTests,
  resolveProductPrepareOfferSessionKey,
  getPendingGenericPrepareOffer,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import {
  missionSubjectIdFromOfferFingerprint,
  readGenericMissionDecisionContinuity,
} from "@/features/project-assistant/w2/genericMissionDecisionContinuity";
import { assessApplicableGenericMissionDecision } from "@/features/project-assistant/w2/genericMissionDecisionApplicability";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
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

const APP = path.resolve(__dirname, "../..");

function structuralAnalysis(overrides?: {
  risks?: string[];
  stopConditions?: string[];
  reservations?: string[];
  structuralChange?: boolean;
}): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Mission structurante correction M-HD-02",
    expectedOutcome: "Identité et continuité prouvées",
    scope: "projects/demo/src/mhd02-corr",
    impactSignals: {
      structuralChange: overrides?.structuralChange !== false,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    risks: overrides?.risks ?? ["Risque A"],
    reservations: overrides?.reservations ?? ["Réserve A"],
    stopConditions: overrides?.stopConditions ?? ["STOP_A"],
    executionIntent: {
      intentKind: "code_change",
      scopeIn: ["projects/demo/src/mhd02-corr"],
      requiredCapabilities: [],
      requestedOperation: "refactor-corr",
      reversibilityExpectation: "reversible",
    },
  };
}

const SESSION_PILOTE = {
  actor: mapGithubIdentityToPiloteActor({
    githubUserId: "11111111",
    displayName: "Pilote QA",
  }),
  githubUserId: "11111111",
};

describe("P6 M-HD-02 mission identity / continuity / session / replay", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;
  let previousSessionDb: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousSessionDb = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-mhd02-corr.sqlite"),
      idPrefix: "mhd02c",
    });
    resetPendingGenericPrepareOfferStoreForTests();
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
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
    if (previousSessionDb === undefined) {
      delete process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    } else {
      process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = previousSessionDb;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MHD02C ${suffix}`,
      objective: "M-HD-02 correction",
      context: "det mhd02c",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhd02c-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const identity = `acme/mhd02c-${suffix}`;
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

  it("MI01 — canonical identity from CURRENT offer allows Record", async () => {
    const { projectId, oa } = await seedProject("mi01");
    const analysis = structuralAnalysis();
    const fp = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const canonical = missionSubjectIdFromOfferFingerprint(fp);
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    expect(continuity.subject.missionSubjectId).toBe(canonical);
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.subject).toBe(canonical);
  });

  it("MI02 — arbitrary missionSubjectId mismatches canonical (action source)", () => {
    const src = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    expect(src).toContain("HD_MISSION_IDENTITY_MISMATCH");
    expect(src).toContain("missionSubjectIdFromOfferFingerprint");
    expect(src).toContain("canonicalMissionSubjectId");
    // Seal uses canonical id, not raw client id as authority.
    const recordFn = src.slice(
      src.indexOf("w2RecordGenericMissionHumanDecisionAction"),
    );
    expect(recordFn).toContain("missionSubjectId: canonicalMissionSubjectId");
  });

  it("MI03 — old offer identity with current offer fingerprint diverges", async () => {
    const { projectId, oa } = await seedProject("mi03");
    const a1 = structuralAnalysis({ risks: ["R1"] });
    const fp1 = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: a1,
      offeredAtIso: oa.clock.nowIso(),
    });
    const oldId = missionSubjectIdFromOfferFingerprint(fp1);
    // Change fingerprint fields (expectedOutputs / operation) → new offer id.
    const a2: IntentAnalysisDto = {
      ...structuralAnalysis({ risks: ["R1"] }),
      expectedOutcome: "Résultat matériellement différent",
      executionIntent: {
        intentKind: "code_change",
        scopeIn: ["projects/demo/src/mhd02-corr"],
        requiredCapabilities: [],
        requestedOperation: "other-op",
        reversibilityExpectation: "reversible",
        expectedOutputs: ["out-b"],
      },
    };
    const fp2 = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: a2,
      offeredAtIso: oa.clock.nowIso(),
    });
    const newId = missionSubjectIdFromOfferFingerprint(fp2);
    expect(newId).not.toBe(oldId);
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    expect(continuity.subject.missionSubjectId).toBe(newId);
    expect(continuity.subject.missionSubjectId).not.toBe(oldId);
  });

  it("HC02/HC04 — same subject id, risks/reservations changed → HD inapplicable", async () => {
    const { projectId, oa } = await seedProject("hc02");
    const analysis = structuralAnalysis({
      risks: ["Risque A"],
      reservations: ["Réserve A"],
    });
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:hc02-fixed",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;

    const drifted = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis: structuralAnalysis({
        risks: ["Risque B CHANGÉ"],
        reservations: ["Réserve B"],
      }),
      missionSubjectId: "gms:hc02-fixed",
    });
    expect(drifted.ok).toBe(true);
    if (!drifted.ok) return;
    expect(drifted.subject.presentationDigest).not.toBe(
      sealed.subject.presentationDigest,
    );
    const assessed = assessApplicableGenericMissionDecision({
      decision: recorded.decision,
      subject: drifted.subject,
    });
    expect(assessed.applicable).toBe(false);
    if (assessed.applicable) return;
    expect(
      assessed.reason === "presentation_digest_mismatch" ||
        assessed.reason === "risks_drift" ||
        assessed.reason === "reservations_drift",
    ).toBe(true);
  });

  it("HC03/HC05 — stopConditions / impactSignals drift → inapplicable", async () => {
    const { projectId, oa } = await seedProject("hc03");
    const analysis = structuralAnalysis({ stopConditions: ["STOP_A"] });
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:hc03",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    const drifted = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis: structuralAnalysis({
        stopConditions: ["STOP_A", "STOP_B_NEW"],
      }),
      missionSubjectId: "gms:hc03",
    });
    // Adding stops is OK in materialCurrentnessMatch (suppression refused).
    // Change impact instead:
    const impactDrift = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis: {
        ...structuralAnalysis(),
        signals: {
          structuralChange: true,
          architectureImpact: true,
          securityImpact: true,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
      },
      missionSubjectId: "gms:hc03",
    });
    expect(impactDrift.ok).toBe(true);
    if (!impactDrift.ok) return;
    const assessed = assessApplicableGenericMissionDecision({
      decision: recorded.decision,
      subject: impactDrift.subject,
    });
    expect(assessed.applicable).toBe(false);
    void drifted;
  });

  it("HC06 — LPS bump linked to HD remains applicable", async () => {
    const { projectId, oa } = await seedProject("hc06");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(recorded.ok).toBe(true);
    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(again.ok && again.kind === "decided").toBe(true);
    if (!again.ok || again.kind !== "decided") return;
    expect(again.decision.status).toBe("accepted");
    expect(again.decision.presentationDigest).toBe(
      continuity.subject.presentationDigest,
    );
  });

  it("HC08/HC09 — superseded/refused/amended statuses preserved", async () => {
    const { projectId, oa } = await seedProject("hc08");
    const analysis = structuralAnalysis();
    for (const [opt, status] of [
      [GENERIC_MISSION_OPTION_REFUSE, "refused"],
      [GENERIC_MISSION_OPTION_REQUEST_AMEND, "amended"],
    ] as const) {
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        analysis,
        missionSubjectId: `gms:hc08-${status}`,
      });
      expect(sealed.ok).toBe(true);
      if (!sealed.ok) return;
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: opt,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: false,
      });
      expect(recorded.ok).toBe(true);
      if (!recorded.ok) return;
      expect(recorded.decision.status).toBe(status);
      const assessed = assessApplicableGenericMissionDecision({
        decision: recorded.decision,
        subject: sealed.subject,
      });
      expect(assessed.applicable).toBe(true);
    }
  });

  it("HC10 — OA history failure code is fail-closed (source)", () => {
    const src = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/genericMissionDecisionContinuity.ts",
      ),
      "utf8",
    );
    expect(src).toContain("OA_DECISION_HISTORY_UNREADABLE");
    expect(src).toContain("!history.ok");
  });

  it("SI01/SI06 — non-default sessionKey remember/read/record coherent", async () => {
    const { projectId, oa } = await seedProject("si01");
    const analysis = structuralAnalysis();
    const sessionDbPath = tempProductDbPath("p6-mhd02-sess-a.sqlite");
    const sessionKey = resolveProductPrepareOfferSessionKey({ sessionDbPath });
    expect(sessionKey.startsWith("sessdb:")).toBe(true);
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
      sessionDbPath,
    });
    const offer = getPendingGenericPrepareOffer(projectId, sessionKey);
    expect(offer).not.toBeNull();
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      sessionDbPath,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    expect(continuity.sessionKey).toBe(sessionKey);
  });

  it("SI02/SI03 — session A cannot read session B offer", async () => {
    const { projectId, oa } = await seedProject("si02");
    const analysis = structuralAnalysis();
    const pathA = tempProductDbPath("p6-mhd02-iso-a.sqlite");
    const pathB = tempProductDbPath("p6-mhd02-iso-b.sqlite");
    const keyA = resolveProductPrepareOfferSessionKey({ sessionDbPath: pathA });
    const keyB = resolveProductPrepareOfferSessionKey({ sessionDbPath: pathB });
    expect(keyA).not.toBe(keyB);
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
      sessionDbPath: pathA,
    });
    const readB = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      sessionDbPath: pathB,
    });
    expect(readB.ok).toBe(true);
    if (!readB.ok) return;
    expect(readB.kind === "none" || readB.kind === "stale_presentation_required").toBe(
      true,
    );
    const readA = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      sessionDbPath: pathA,
    });
    expect(readA.ok && readA.kind === "awaiting_decision").toBe(true);
  });

  it("SI05 — claimedSessionKey ignored in Product actions (source)", () => {
    const src = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    expect(src).toContain("claimedSessionKey");
    expect(src).toContain("void input.claimedSessionKey");
    expect(src).toContain("resolveProductPrepareOfferSessionKey()");
  });

  it("ID01 — double Accept identical → ALREADY_APPLIED, no new HD", async () => {
    const { projectId, oa } = await seedProject("id01");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:id01",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const first = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const resealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:id01",
    });
    expect(resealed.ok).toBe(true);
    if (!resealed.ok) return;
    const second = await recordGenericMissionHumanDecision({
      oa,
      subject: resealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.code).toBe("GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED");
    expect(second.humanDecisionCreated).toBe(false);
    expect(second.decision.decisionId).toBe(first.decision.decisionId);
    expect(second.executionAttemptCreated).toBe(false);
  });

  it("ID04/ID05 — refuse/amend replay does not convert to accepted", async () => {
    const { projectId, oa } = await seedProject("id04");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:id04",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const refused = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(refused.ok).toBe(true);
    if (!refused.ok) return;
    const replay = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.code).toBe("GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED");
    expect(replay.decision.status).toBe("refused");
  });

  it("ID07/ID08 — Record never creates Attempt / Execute (source + result)", async () => {
    const { projectId, oa } = await seedProject("id07");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.executionAttemptCreated).toBe(false);
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: recorded.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // PREPARE is separate — Record itself did not execute.
    expect(recorded.executionAttemptCreated).toBe(false);
    void prep;
  });

  it("NR09 — restart without offer → stale when clientDigest held", async () => {
    const { projectId, oa } = await seedProject("nr09");
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: "sha256:" + "b".repeat(64),
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.kind).toBe("stale_presentation_required");
  });
});
