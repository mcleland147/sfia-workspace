/**
 * P6 — M-HD-02 Pilot Presentation & Record Binding.
 *
 * Deterministic Fake SQLite / unit proofs. ZERO Cursor REAL / OpenAI LIVE.
 * Authenticated actor binding proven via recordGenericMissionHumanDecision.
 * Product action path asserts session resolve + no forceLocalAuthority.
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
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import {
  readGenericMissionDecisionContinuity,
  missionSubjectIdFromOfferFingerprint,
} from "@/features/project-assistant/w2/genericMissionDecisionContinuity";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
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

function structuralAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Mission structurante M-HD-02",
    expectedOutcome: "Décision Pilote explicite avant PREPARE",
    scope: "projects/demo/src/mhd02",
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    risks: ["Risque de dérive de périmètre"],
    reservations: ["Réserve inspection"],
    executionIntent: {
      intentKind: "code_change",
      scopeIn: ["projects/demo/src/mhd02"],
      requiredCapabilities: [],
      requestedOperation: "refactor-mhd02",
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

describe("P6 M-HD-02 Pilot Presentation & Record Binding", () => {
  let runtime: RuntimeApplicationService;
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
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-mhd02.sqlite"),
      idPrefix: "mhd02",
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
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MHD02 ${suffix}`,
      objective: "M-HD-02 Pilot Presentation",
      context: "det mhd02",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `M2${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhd02-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const identity = `acme/mhd02-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  it("AUTH01 — session-bound actor + Pilot gate → HD recordable (unit)", async () => {
    const { projectId, oa } = await seedProject("auth01");
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
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.actor.actorId).toBe(SESSION_PILOTE.actor.actorId);
    expect(recorded.decision.actor.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(recorded.humanDecisionCreated).toBe(true);
    expect(recorded.executionAttemptCreated).toBe(false);
  });

  it("AUTH02 — missing authenticatedPilote without forceLocal → refuse", async () => {
    const { projectId, oa } = await seedProject("auth02");
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
    });
    expect(recorded.ok).toBe(false);
    if (recorded.ok) return;
    expect(recorded.code).toBe("AUTHENTICATED_PILOTE_REQUIRED");
  });

  it("AUTH05 — actor/github mismatch → refuse", async () => {
    const { projectId, oa } = await seedProject("auth05");
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
      authenticatedPilote: {
        actor: SESSION_PILOTE.actor,
        githubUserId: "99999999",
      },
    });
    expect(recorded.ok).toBe(false);
    if (recorded.ok) return;
    expect(recorded.code).toBe("PILOTE_ACTOR_IDENTITY_MISMATCH");
  });

  it("AUTH06 — Pilot actor ≠ Morris grant", async () => {
    const { projectId, oa } = await seedProject("auth06");
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
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.authority).toBe("pilot");
    expect(recorded.decision.actor.actorId).toBe(SESSION_PILOTE.actor.actorId);
    const verified = oa.authorityResolver.verify({
      actorId: SESSION_PILOTE.actor.actorId,
      requiredLevel: "N3",
      scope: `generic-mission:${sealed.subject.missionSubjectId}`,
      requirePilotGate: true,
    });
    expect(verified.ok).toBe(true);
    expect(verified.canActAsPilot).toBe(true);
    expect(verified.canActAsMorris).not.toBe(true);
  });

  it("AUTH07 — Product action never forceLocalAuthority", () => {
    const src = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    const recordFn = src.slice(
      src.indexOf("w2RecordGenericMissionHumanDecisionAction"),
    );
    expect(recordFn).toContain("resolveCurrentAuthenticatedPilote");
    expect(recordFn).toContain("authenticatedPilote");
    expect(recordFn).not.toMatch(/forceLocalAuthority:\s*true/);
  });

  it("PRES01/02 — sealed subject from pending offer is faithful", async () => {
    const { projectId, oa } = await seedProject("pres01");
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
    expect(continuity.ok).toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") {
      expect(continuity).toMatchObject({ kind: "awaiting_decision" });
      return;
    }
    expect(continuity.subject.objective).toContain("M-HD-02");
    expect(continuity.subject.scopeNarrative).toContain("mhd02");
    expect(continuity.subject.effects.requestedOperation).toBe("refactor-mhd02");
    expect(continuity.subject.missionSubjectId).toBe(
      missionSubjectIdFromOfferFingerprint(continuity.offerFingerprint),
    );
  });

  it("PRES03/04/05 — accept / refuse / amend statuses", async () => {
    const { projectId, oa } = await seedProject("pres345");
    const analysis = structuralAnalysis();
    for (const [option, status] of [
      [GENERIC_MISSION_OPTION_ACCEPT_PREPARE, "accepted"],
      [GENERIC_MISSION_OPTION_REFUSE, "refused"],
      [GENERIC_MISSION_OPTION_REQUEST_AMEND, "amended"],
    ] as const) {
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        analysis,
        missionSubjectId: `gms:pres-${status}`,
      });
      expect(sealed.ok).toBe(true);
      if (!sealed.ok) return;
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: option,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: false,
      });
      expect(recorded.ok).toBe(true);
      if (!recorded.ok) return;
      expect(recorded.decision.status).toBe(status);
      expect(recorded.executionAttemptCreated).toBe(false);
    }
  });

  it("PRES06 — seal alone creates no HD", async () => {
    const { projectId, oa } = await seedProject("pres06");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: sealed.subject.missionSubjectId,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(history.decisions).toHaveLength(0);
  });

  it("PRES08 — double accept is idempotent (ALREADY_APPLIED), no Attempt", async () => {
    const { projectId, oa } = await seedProject("pres08");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:double-click",
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
      missionSubjectId: "gms:double-click",
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
    expect(second.decision.decisionId).toBe(first.decision.decisionId);
    expect(second.executionAttemptCreated).toBe(false);
  });

  it("PRES09 — digest mismatch refuses", async () => {
    const { projectId, oa } = await seedProject("pres09");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const forged = {
      ...sealed.subject,
      presentationDigest: "sha256:" + "0".repeat(64),
    };
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: forged,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
    });
    expect(recorded.ok).toBe(false);
  });

  it("PRES11 — no offer → stale when client held digest", async () => {
    const { projectId, oa } = await seedProject("pres11");
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: "sha256:" + "a".repeat(64),
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.kind).toBe("stale_presentation_required");
  });

  it("PRES12 — decided state re-read from OA after record", async () => {
    const { projectId, oa } = await seedProject("pres12");
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
    });
    expect(recorded.ok).toBe(true);
    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(again.ok && again.kind === "decided").toBe(true);
    if (!again.ok || again.kind !== "decided") return;
    expect(again.decision.status).toBe("accepted");
    expect(again.decision.actorId).toBe(SESSION_PILOTE.actor.actorId);
  });

  it("PRES13 — without cycle, presentation possible", async () => {
    const { projectId, oa } = await seedProject("pres13");
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
    expect(continuity.subject.cycleInstanceId).toBeNull();
  });

  it("PRES15/16 — D-P6-SHE-01: structural solicit without HD prepares (empty refs STRUCTURAL); no Attempt", async () => {
    const { projectId, oa } = await seedProject("pres15");
    const analysis = structuralAnalysis();
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
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

  it("UI01 — GovernedGenericMissionDecisionCard wired in ConversationSurface", () => {
    const surface = readFileSync(
      path.join(
        APP,
        "features/pre-m6-product-ui/surfaces/ConversationSurface.tsx",
      ),
      "utf8",
    );
    expect(surface).toContain("GovernedGenericMissionDecisionCard");
    expect(surface).toContain("generic-mission-decision-slot");
    expect(surface).toContain("GovernedDecisionCard");
    expect(surface).toContain("GovernedConfirmationCard");
  });

  it("UI05/06/07 — trajectory Decision + Confirmation remain; no parallel store", () => {
    const hook = readFileSync(
      path.join(
        APP,
        "features/pre-m6-product-ui/hooks/useProductConversation.ts",
      ),
      "utf8",
    );
    expect(hook).toContain("decideGovernedDirection");
    expect(hook).toContain("confirmGovernedContract");
    expect(hook).toContain("decideGenericMission");
    expect(hook).toContain("w2DecideTrajectoryAction");
    expect(hook).not.toContain("createPresentedMissionStore");
  });
});
