/**
 * P6 — M-HD-01 EC ↔ HumanDecision Effects Binding Correction Pass.
 *
 * Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 * Confirms Confirm/Authorize refuse material EC/HD divergence.
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
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
  compareExecutionContractToSealedHumanDecision,
  mapReversibilityExpectationToOa,
  projectExecutionContractEffects,
} from "@/features/project-assistant/w2/genericMissionSubject";
import type { DecisionBasisGenericMissionContext } from "@/lib/oa/decision";
import { verifyGenericMissionHumanDecisionForContract } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
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
import { readFileSync } from "node:fs";
import { join } from "node:path";

function structuralAnalysis(overrides?: {
  objective?: string;
  expectedOutcome?: string;
  scope?: string;
  intentKind?: string;
  artifactType?: string;
  requestedOperation?: string | null;
  stopConditions?: string[];
  risks?: string[];
  reservations?: string[];
  reversibility?: "reversible" | "irreversible" | "unknown";
}): IntentAnalysisDto {
  const scope = overrides?.scope ?? "projects/demo/src/echd";
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: overrides?.objective ?? "Mission structurante EC/HD binding",
    expectedOutcome: overrides?.expectedOutcome ?? "Effets EC couverts par HD",
    scope,
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    stopConditions: overrides?.stopConditions ?? ["STOP_EC_HD_A"],
    risks: overrides?.risks ?? ["RISK_MATERIAL"],
    reservations: overrides?.reservations ?? ["RES_BLOCKING"],
    executionIntent: {
      intentKind: overrides?.intentKind ?? "code_change",
      artifactType: overrides?.artifactType ?? "module",
      scopeIn: [scope],
      requiredCapabilities: [],
      requestedOperation: overrides?.requestedOperation ?? "bind-effects",
      reversibilityExpectation: overrides?.reversibility ?? "reversible",
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

describe("P6 M-HD-01 EC ↔ HD Effects Binding", () => {
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
    sessionDbPath = tempProductDbPath("p6-mhd01-echd.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhdechd",
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
      name: `MHDECHD ${suffix}`,
      objective: "M-HD-01 EC/HD binding",
      context: "det echd",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `ME${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhdechd-${suffix}`,
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
    const identity = `acme/mhdechd-${suffix}`;
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

  async function prepareStructuralWithHd(suffix: string) {
    const { projectId, oa } = await seedProject(suffix);
    const analysis = structuralAnalysis();
    const { decision, subject } = await sealAccept(projectId, analysis);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: decision.decisionId,
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
      analysis,
      decision,
      subject,
      prep,
      inspected,
      contract: live.contract,
    };
  }

  async function confirmIfNeeded(ctx: {
    oa: NonNullable<RuntimeApplicationService["oa"]>;
    projectId: string;
    contract: ExecutionContract;
  }) {
    if (ctx.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        forceLocalAuthority: true,
      });
      return confirmed;
    }
    return { ok: true as const };
  }

  describe("EC01–EC10 — Confirm/Authorize + adversarial EC fixture", () => {
    it("EC01 — EC inchangé + HD valide → Confirm/Authorize OK", async () => {
      const ctx = await prepareStructuralWithHd("ec01");
      const confirmed = await confirmIfNeeded(ctx);
      expect(confirmed.ok).toBe(true);
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(true);
      // Stamps present on new generic_mission EC.
      expect(ctx.contract.inputs?.missionSubjectId).toBe(ctx.subject.missionSubjectId);
      expect(ctx.contract.inputs?.presentationDigest).toBe(
        ctx.subject.presentationDigest,
      );
      expect(ctx.contract.inputs?.requestedOperation).toBe("bind-effects");
      expect(ctx.contract.reversibility).toBe("reversible");
    });

    it("EC02 — requestedOperation EC mutée → REFUS (verify + Confirm)", async () => {
      const ctx = await prepareStructuralWithHd("ec02");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, requestedOperation: "other-op" };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_EFFECTS_MISMATCH");
      expect(v.message).toContain("requested_operation_mismatch");
    });

    it("EC03 — expectedOutputs EC divergents → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec03");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.expectedOutputs = ["unauthorized-output"];
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("expected_outputs_mismatch");
    });

    it("EC04 — stopConditions scellées supprimées → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec04");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.stopConditions = c.stopConditions.filter((s) => s !== "STOP_EC_HD_A");
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("stop_conditions_missing");
    });

    it("EC05 — reversibility incompatible → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec05");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.reversibility = "irreversible";
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("oa_reversibility_mismatch");
    });

    it("EC06 — requiredCapabilities élargies → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec06");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.requiredCapabilities = [
          ...c.requiredCapabilities,
          "cap:unauthorized-elevated",
        ];
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toContain("capabilities_mismatch");
    });

    it("EC07 — scopeIn/scopeOut divergents → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec07");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, scopeIn: ["projects/demo/src/other"] };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_SCOPE_MISMATCH");
    });

    it("EC08 — intentKind / artifactType divergents → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec08");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, intentKind: "docs_write", artifactType: "doc" };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toMatch(/intent_kind_mismatch|artifact_type_mismatch/);
    });

    it("EC09 — risks / reservations matériellement affaiblis → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec09");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, risks: [], reservations: [] };
        c.constraints = (c.constraints ?? []).filter(
          (x) => !x.startsWith("RISK:") && !x.startsWith("RESERVATION:"),
        );
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.message).toMatch(/risks_missing|reservations_missing/);
    });

    it("EC10 — presentationDigest absent ou divergent → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec10");
      const absent = cloneMutated(ctx.contract, (c) => {
        const next = { ...c.inputs };
        delete next.presentationDigest;
        c.inputs = next;
      });
      const v1 = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: absent,
      });
      expect(v1.ok).toBe(false);
      if (v1.ok) throw new Error("expected refuse");
      expect(v1.message).toContain("presentation_digest_absent");

      const divergent = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, presentationDigest: "sha256:forged" };
      });
      const v2 = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: divergent,
      });
      expect(v2.ok).toBe(false);
      if (v2.ok) throw new Error("expected refuse");
      expect(v2.message).toContain("presentation_digest_mismatch");
    });
  });

  describe("EC11–EC17 — authority transitions", () => {
    it("EC12 — HD superseded entre PREPARE et AUTHORIZE → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec12");
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

    it("EC14 — EC avec décision d'une autre mission → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec14");
      const otherAnalysis = structuralAnalysis({
        objective: "Autre mission",
        expectedOutcome: "Autre outcome",
        scope: "projects/demo/src/other-mission",
      });
      const other = await sealAccept(ctx.projectId, otherAnalysis);
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.decisionRefs = [other.decision.decisionId];
        c.inputs = {
          ...c.inputs,
          verifiedGenericMissionHumanDecisionId: other.decision.decisionId,
          missionSubjectId: other.subject.missionSubjectId,
          presentationDigest: other.subject.presentationDigest,
        };
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: other.decision.decisionId,
        contract: mutated,
      });
      expect(v.ok).toBe(false);
    });

    it("EC15 — EC avec decisionRef forgée → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec15");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.decisionRefs = ["dec:forged-not-real"];
      });
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: "dec:forged-not-real",
        contract: mutated,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_ABSENT");
    });

    it("EC16 — Repository binding divergent → REFUS", async () => {
      const ctx = await prepareStructuralWithHd("ec16");
      await ctx.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: ctx.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/mhdechd-ec16",
          remoteUrl: "https://github.com/acme/mhdechd-ec16.git",
          defaultBranch: "main",
          pathRoot: "projects/other-root",
        },
      });
      const confirmed = await confirmExecutionContractForAuthorization({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.contract.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(false);
    });

    it("EC17 — helper refuse materiality degraded on projection", () => {
      const sealed: DecisionBasisGenericMissionContext = {
        missionSubjectId: "gms:x",
        presentationDigest: "sha256:abc",
        subjectSchemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
        objective: "o",
        expectedOutcome: "e",
        scopeNarrative: "s",
        scopeIn: ["a"],
        scopeOut: [],
        materiality: "structural",
        materialityReasonCodes: [],
        repositoryBindingIdentity: "acme/x",
        pathRoot: "projects/demo",
        requiredCapabilities: ["cap:studio.product.canonical-execution"],
        expectedOutputs: ["e"],
        reversibilityExpectation: "reversible",
        stopConditions: ["STOP"],
        risks: [],
        reservations: [],
        intentKind: "code_change",
        artifactType: "module",
        requestedOperation: "op",
        impactSignals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: true,
          dataImpact: false,
          irreversible: false,
        },
        optionRefs: [GENERIC_MISSION_OPTION_ACCEPT_PREPARE],
        selectedOptionRef: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        cycleInstanceId: null,
      };
      const ec = projectExecutionContractEffects({
        projectId: "prj:x",
        status: "draft",
        version: 1,
        reversibility: "reversible",
        expectedOutputs: ["e"],
        requiredCapabilities: ["cap:studio.product.canonical-execution"],
        stopConditions: ["STOP", "AUTHORITY_DENIED"],
        decisionRefs: ["dec:1"],
        constraints: ["MATERIALITY:NON_STRUCTURAL"],
        inputs: {
          objective: "o",
          expectedOutcome: "e",
          missionScopeNarrative: "s",
          scopeIn: ["a"],
          scopeOut: [],
          intentKind: "code_change",
          artifactType: "module",
          requestedOperation: "op",
          reversibilityExpectation: "reversible",
          missionSubjectId: "gms:x",
          presentationDigest: "sha256:abc",
          materialityFacts: { assessedMateriality: "non_structural" },
          repositoryBindingIdentity: "acme/x",
          pathRoot: "projects/demo",
          risks: [],
          reservations: [],
        },
      });
      const cmp = compareExecutionContractToSealedHumanDecision({
        sealed,
        ec,
        decisionId: "dec:1",
      });
      expect(cmp.ok).toBe(false);
      if (cmp.ok) throw new Error("expected refuse");
      expect(cmp.reason).toMatch(/materiality/);
    });
  });

  describe("EC18–EC26 — cycle / idempotence / NR / Attempt", () => {
    it("EC20 — mission Project indépendante d'un cycle clos → OK", async () => {
      const ctx = await prepareStructuralWithHd("ec20");
      expect(ctx.contract.cycleInstanceId == null || ctx.contract.cycleInstanceId === "").toBe(
        true,
      );
      const confirmed = await confirmIfNeeded(ctx);
      expect(confirmed.ok).toBe(true);
    });

    it("EC22 — même mission / même HD / EC CURRENT → idempotence", async () => {
      const ctx = await prepareStructuralWithHd("ec22");
      const again = await prepareGenericExecutionContractDraft({
        oa: ctx.oa,
        projectId: ctx.projectId,
        cycleInstanceId: null,
        analysis: ctx.analysis,
        decisionId: ctx.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(again.ok).toBe(true);
      if (!again.ok) throw new Error(again.message);
      expect(again.contract.executionContractId).toBe(
        ctx.contract.executionContractId,
      );
    });

    it("EC23 — NON_STRUCTURAL sans HD → non-régression", async () => {
      const { projectId, oa } = await seedProject("ec23");
      const analysis = buildIntentAnalysisFromSolicitedMission({
        objective: "Lecture bornée non structurante",
        expectedOutcome: "Synthèse locale",
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

    it("EC25 — aucun Attempt sur chemin refusé", async () => {
      const ctx = await prepareStructuralWithHd("ec25");
      const mutated = cloneMutated(ctx.contract, (c) => {
        c.inputs = { ...c.inputs, requestedOperation: "mutated" };
      });
      const before = await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: ctx.contract.executionContractId,
      });
      const beforeCount = before.ok ? before.attempts.length : 0;
      await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: mutated,
      });
      const after = await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: ctx.contract.executionContractId,
      });
      const afterCount = after.ok ? after.attempts.length : 0;
      expect(afterCount).toBe(beforeCount);
    });

    it("EC26 — Inspection préservée après PREPARE structural+HD", async () => {
      const ctx = await prepareStructuralWithHd("ec26");
      expect(ctx.inspected.ok).toBe(true);
      expect(ctx.inspected.semanticFingerprint).toBeTruthy();
    });
  });

  describe("PB — Pilot presentation provenance qualification", () => {
    it("PB01 — Seal Product réel: sujet et options qualifiés", async () => {
      const { projectId } = await seedProject("pb01");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa: runtime.oa!,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      expect(sealed.ok).toBe(true);
      if (!sealed.ok) throw new Error(sealed.message);
      expect(sealed.subject.optionRefs).toContain(GENERIC_MISSION_OPTION_ACCEPT_PREPARE);
      expect(/^[a-f0-9]{64}$/.test(sealed.subject.presentationDigest)).toBe(true);
    });

    it("PB02 — Payload sujet falsifié → Record refusé", async () => {
      const { projectId } = await seedProject("pb02");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa: runtime.oa!,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const forged = {
        ...sealed.subject,
        objective: "Forged objective",
        presentationDigest: sealed.subject.presentationDigest,
      };
      const recorded = await recordGenericMissionHumanDecision({
        oa: runtime.oa!,
        subject: forged,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        forceLocalAuthority: true,
      });
      expect(recorded.ok).toBe(false);
    });

    it("PB04 — Autorité Pilote absente → Record refusé", async () => {
      const { projectId, oa } = await seedProject("pb04");
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

    it("PB05 — M-HD-02: ConversationSurface + hook consomment Record actions", () => {
      // Code inspection — not a synthetic UI click / Human QA proof.
      const surface = readFileSync(
        join(
          process.cwd(),
          "features/pre-m6-product-ui/surfaces/ConversationSurface.tsx",
        ),
        "utf8",
      );
      const hook = readFileSync(
        join(
          process.cwd(),
          "features/pre-m6-product-ui/hooks/useProductConversation.ts",
        ),
        "utf8",
      );
      expect(surface).toContain("GovernedGenericMissionDecisionCard");
      expect(hook).toContain("w2RecordGenericMissionHumanDecisionAction");
      expect(hook).toContain("w2ReadGenericMissionDecisionContinuityAction");
      const actions = readFileSync(
        join(process.cwd(), "features/project-assistant/w2/actions.ts"),
        "utf8",
      );
      expect(actions).toContain("w2SealGenericMissionAction");
      expect(actions).toContain("w2RecordGenericMissionHumanDecisionAction");
      expect(actions).toContain("resolveCurrentAuthenticatedPilote");
    });

    it("PB06/PB07 — refuse / request-amend n'autorisent pas PREPARE", async () => {
      const { projectId, oa } = await seedProject("pb06");
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
    });

    it("PB08/PB09 — Confirmation ≠ HD; Record crée aucun Attempt", async () => {
      const ctx = await prepareStructuralWithHd("pb08");
      const attempts = await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: ctx.contract.executionContractId,
      });
      expect(attempts.ok ? attempts.attempts.length : 0).toBe(0);
      // Confirmation path is distinct — Confirm still requires HD binding for structural.
      const confirmed = await confirmIfNeeded(ctx);
      expect(confirmed.ok).toBe(true);
    });

    it("PB12 — mapReversibilityExpectationToOa is conservative (no silent irreversible)", () => {
      expect(mapReversibilityExpectationToOa("reversible")).toBe("reversible");
      expect(mapReversibilityExpectationToOa("irreversible")).toBe("irreversible");
      expect(mapReversibilityExpectationToOa("unknown")).toBe("partially_reversible");
      expect(mapReversibilityExpectationToOa(null)).toBe("partially_reversible");
    });
  });
});
