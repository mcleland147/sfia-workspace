/**
 * P6 — M-HD-01 Final EC/HD Authority Binding Correction.
 * IC: EC internal dual-representation consistency.
 * CM: CURRENT Product materiality continuity.
 *
 * Fake only — ZERO Cursor REAL / OpenAI LIVE / Pilot UI claim.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  assertExecutionContractInternalConsistency,
  materialityContinuityCompatible,
} from "@/features/project-assistant/w2/genericMissionSubject";
import {
  verifyGenericMissionHumanDecisionForContract,
} from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
import {
  inspectExecutionContract,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  authorizeGenericPreparedContract,
} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  confirmExecutionContractForAuthorization,
} from "@/features/project-assistant/w2/confirmForAuthorization";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
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

function structuralAnalysis(overrides?: {
  objective?: string;
  scope?: string;
}): IntentAnalysisDto {
  const scope = overrides?.scope ?? "projects/demo/src/final-bind";
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: overrides?.objective ?? "Mission structurante final binding",
    expectedOutcome: "Autorité EC/HD cohérente",
    scope,
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    stopConditions: ["STOP_FINAL_A"],
    risks: ["RISK_FINAL"],
    reservations: ["RES_FINAL"],
    executionIntent: {
      intentKind: "other",
      artifactType: "module",
      scopeIn: [scope],
      requiredCapabilities: [],
      requestedOperation: "final-bind",
      reversibilityExpectation: "reversible",
    },
  };
}

function cloneMutated(
  contract: ExecutionContract,
  mutate: (c: ExecutionContract) => void,
): ExecutionContract {
  const copy = structuredClone(contract) as ExecutionContract;
  mutate(copy);
  return copy;
}

function driftSealedGitTarget(identity: string): void {
  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = identity;
  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
    `https://github.com/${identity}.git`;
}

describe("P6 M-HD-01 Final Authority Binding (IC + CM)", () => {
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
    sessionDbPath = tempProductDbPath("p6-mhd01-final.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhdfin",
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
      name: "demo",
      objective: "M-HD-01 final authority binding",
      context: "det final",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MF${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhdfin-${suffix}`,
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
    const identity = `acme/mhdfin-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa, identity };
  }

  async function prepareStructuralWithHd(suffix: string) {
    const { projectId, oa, identity } = await seedProject(suffix);
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      forceLocalAuthority: true,
    });
    if (!recorded.ok) throw new Error(recorded.message);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: recorded.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(`${prep.code} ${prep.message}`);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!live.ok) throw new Error("get EC");
    return {
      projectId,
      oa,
      identity,
      analysis,
      decision: recorded.decision,
      subject: sealed.subject,
      prep,
      inspected,
      contract: live.contract,
    };
  }

  describe("IC — EC internal consistency", () => {
    it("IC01 — EC cohérent → Confirm/Authorize PASS", async () => {
      const ctx = await prepareStructuralWithHd("ic01");
      const internal = assertExecutionContractInternalConsistency({
        constraints: ctx.contract.constraints,
        inputs: ctx.contract.inputs as Record<string, unknown>,
      });
      expect(internal.ok).toBe(true);
      if (ctx.contract.status === "confirmation_required") {
        const confirmed = await confirmExecutionContractForAuthorization({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.contract.executionContractId,
          forceLocalAuthority: true,
        });
        expect(confirmed.ok).toBe(true);
      }
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(true);
    });

    it("IC02 — facts STRUCTURAL vs constraint NON_STRUCTURAL → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ic02");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.constraints = (c.constraints ?? [])
          .filter((x) => !x.startsWith("MATERIALITY:"))
          .concat(["MATERIALITY:NON_STRUCTURAL"]);
        c.inputs = {
          ...c.inputs,
          materialityFacts: {
            ...((c.inputs?.materialityFacts as object) ?? {}),
            assessedMateriality: "structural",
          },
        };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("materiality_facts_vs_constraint_conflict");
    });

    it("IC03 — facts NON_STRUCTURAL vs constraint STRUCTURAL → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ic03");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.constraints = (c.constraints ?? [])
          .filter((x) => !x.startsWith("MATERIALITY:"))
          .concat(["MATERIALITY:STRUCTURAL"]);
        c.inputs = {
          ...c.inputs,
          materialityFacts: {
            ...((c.inputs?.materialityFacts as object) ?? {}),
            assessedMateriality: "non_structural",
          },
        };
      });
      const internal = assertExecutionContractInternalConsistency({
        constraints: mutated.constraints,
        inputs: mutated.inputs as Record<string, unknown>,
      });
      expect(internal.ok).toBe(false);
      if (internal.ok) throw new Error("expected refuse");
      expect(internal.reason).toBe("materiality_facts_vs_constraint_conflict");
    });

    it("IC04 — deux tokens MATERIALITY contradictoires → REFUS", () => {
      const internal = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL", "MATERIALITY:NON_STRUCTURAL"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          materialityFacts: { assessedMateriality: "structural" },
        },
      });
      expect(internal.ok).toBe(false);
      if (internal.ok) throw new Error("expected refuse");
      expect(internal.reason).toBe("materiality_constraint_conflict");
    });

    it("IC05/IC06 — risks / reservations inputs vs constraints → REFUS", () => {
      const risks = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL", "RISK:A"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          materialityFacts: { assessedMateriality: "structural" },
          risks: ["B"],
        },
      });
      expect(risks.ok).toBe(false);
      if (risks.ok) throw new Error("expected refuse");
      expect(risks.reason).toBe("risks_inputs_vs_constraints_conflict");

      const reservations = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL", "RESERVATION:A"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          materialityFacts: { assessedMateriality: "structural" },
          reservations: [],
        },
      });
      expect(reservations.ok).toBe(false);
      if (reservations.ok) throw new Error("expected refuse");
      expect(reservations.reason).toBe(
        "reservations_inputs_vs_constraints_conflict",
      );
    });

    it("IC07/IC08 — repository / pathRoot dual conflict → REFUS", () => {
      const repo = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          repositoryBindingIdentity: "acme/a",
          pathRoot: "projects/demo",
          materialityFacts: {
            assessedMateriality: "structural",
            productCurrentness: {
              repositoryIdentity: "acme/b",
              pathRoot: "projects/demo",
            },
          },
        },
      });
      expect(repo.ok).toBe(false);
      if (repo.ok) throw new Error("expected refuse");
      expect(repo.reason).toBe("repository_identity_dual_conflict");

      const path = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          repositoryBindingIdentity: "acme/a",
          pathRoot: "projects/demo",
          materialityFacts: {
            assessedMateriality: "structural",
            productCurrentness: {
              repositoryIdentity: "acme/a",
              pathRoot: "projects/other",
            },
          },
        },
      });
      expect(path.ok).toBe(false);
      if (path.ok) throw new Error("expected refuse");
      expect(path.reason).toBe("path_root_dual_conflict");
    });

    it("IC09 — assessedMateriality invalide ne devient pas absence", () => {
      const internal = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:STRUCTURAL"],
        inputs: {
          missionSubjectId: "gms:x",
          presentationDigest: "abc",
          materialityFacts: { assessedMateriality: "not-a-class" },
        },
      });
      expect(internal.ok).toBe(false);
      if (internal.ok) throw new Error("expected refuse");
      expect(internal.reason).toBe("materiality_facts_malformed");
    });

    it("IC10 — contrat historique sans stamp generic_mission → legacy OK", () => {
      const internal = assertExecutionContractInternalConsistency({
        constraints: ["MATERIALITY:NON_STRUCTURAL", "PRODUCT_GOVERNED"],
        inputs: {
          objective: "legacy",
          // no missionSubjectId / presentationDigest
        },
      });
      expect(internal.ok).toBe(true);
    });
  });

  describe("CM — Product current materiality continuity", () => {
    it("CM01 — structural+HD + Product concordant → Confirm/Authorize PASS", async () => {
      const ctx = await prepareStructuralWithHd("cm01");
      if (ctx.contract.status === "confirmation_required") {
        const confirmed = await confirmExecutionContractForAuthorization({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.contract.executionContractId,
          forceLocalAuthority: true,
        });
        expect(confirmed.ok).toBe(true);
      }
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(true);
    });

    it("CM02 — materiality continuity refuses structural degradation", () => {
      const ok = materialityContinuityCompatible({
        sealed: "structural",
        current: "non_structural",
      });
      expect(ok.ok).toBe(false);
      if (ok.ok) throw new Error("expected refuse");
      expect(ok.reason).toBe("structural_materiality_degraded");
    });

    it("CM03 — historical signals absent + Product insufficient → REFUS path", async () => {
      const ctx = await prepareStructuralWithHd("cm03");
      const mutated = cloneMutated(ctx.contract, (c) => {
        const facts = {
          ...((c.inputs?.materialityFacts as object) ?? {}),
        } as Record<string, unknown>;
        delete facts.modelSignals;
        c.inputs = {
          ...c.inputs,
          impactSignals: null,
          materialityFacts: facts,
        };
      });
      // Clear sealed fallback by also using a contract whose verify still has HD
      // impactSignals from decision — to force unknown we need signals null AND
      // productContextInsufficient. Mutating scopeIn to empty breaks concrete paths.
      mutated.inputs = {
        ...mutated.inputs,
        scopeIn: [],
        missionScopeNarrative: "narrative without path",
      };
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      // Either scope mismatch vs HD or materiality unknown — both fail-closed.
      expect(v.ok).toBe(false);
    });

    it("CM05 — sealed git-target divergent → Confirm REFUS", async () => {
      const ctx = await prepareStructuralWithHd("cm05");
      driftSealedGitTarget("acme/mhdfin-mutated");
      const confirmed = await confirmExecutionContractForAuthorization({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(false);
    });

    it("CM06 — NON_STRUCTURAL sans HD → non-régression", async () => {
      const { projectId, oa } = await seedProject("cm06");
      const analysis = buildIntentAnalysisFromSolicitedMission({
        objective: "Lecture bornée",
        expectedOutcome: "note",
        scope: "projects/demo/README.md",
        impactSignals: {
          structuralChange: false,
          architectureImpact: false,
          securityImpact: false,
          dataImpact: false,
          irreversible: false,
        },
      });
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      expect(prep.contract.decisionRefs ?? []).toEqual([]);
    });

    it("CM07 — unknown seal + structural current is compatible (documented)", () => {
      const ok = materialityContinuityCompatible({
        sealed: "unknown",
        current: "structural",
      });
      expect(ok.ok).toBe(true);
    });

    it("CM08 — cycle absent → parcours possible", async () => {
      const ctx = await prepareStructuralWithHd("cm08");
      expect(
        ctx.contract.cycleInstanceId == null ||
          ctx.contract.cycleInstanceId === "",
      ).toBe(true);
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: ctx.contract,
      });
      expect(v.ok).toBe(true);
    });

    it("CM10 — HD superseded → Authorize REFUS", async () => {
      const ctx = await prepareStructuralWithHd("cm10");
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
        executionContractId: ctx.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(false);
      if (authorized.ok) throw new Error("expected refuse");
      expect(authorized.code).toBe("HD_SUPERSEDED");
    });
  });
});
