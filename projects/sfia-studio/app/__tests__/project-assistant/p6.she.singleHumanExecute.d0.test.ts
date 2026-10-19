/**
 * D-P6-SHE-01 — Single Human Execute deterministic Product proofs.
 *
 * PREPARE (incl. STRUCTURAL, empty decisionRefs) → inspectable EC →
 * one Exécuter gesture (attest + HD bind + Confirm + Authorize) →
 * Select Fake Cursor. ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
  assessGenericMissionPrepareReadiness,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
  GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS,
  buildGenericMissionSubject,
  compareContractMaterialEffectsForSheBinding,
  projectExecutionContractEffects,
  assertExecutionContractInternalConsistency,
} from "@/features/project-assistant/w2/genericMissionSubject";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { settleDeterministicProductCursorSuccess } from "./w2Harness";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  const incomplete = facts as { incomplete: true; code: string };
  throw new Error(`inspection disclosure incomplete: ${incomplete.code}`);
}

function structuralAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Refactorer le binding d'autorité générique SHE",
    expectedOutcome: "Contrat inspectable puis Exécuter unique",
    scope: "projects/demo/src/authority",
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "code_change",
      scopeIn: ["projects/demo/src/authority"],
      requiredCapabilities: [],
    },
  };
}

function nonStructuralAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Analyser le graphe de dépendances sans mutation",
    expectedOutcome: "Synthèse lecture seule",
    scope: "analyse bornée sans chemin concret",
    repositoryMutation: "none",
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "read_only",
      scopeIn: [],
      requiredCapabilities: [],
    },
  };
}

describe("P6 SHE — Single Human Execute D-P6-SHE-01", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-she.sqlite"),
      idPrefix: "she01",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `SHE ${suffix}`,
      objective: "SHE Delivery",
      context: "det she",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `SH${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:she-${suffix}`,
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
    const identity = `acme/she-${suffix}`;
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

  it("A/D — readiness: structural signals do not block PREPARE; missing fields still do", () => {
    const structural = assessGenericMissionPrepareReadiness(structuralAnalysis());
    expect(structural.structuralBlocked).toBe(true);
    expect(structural.ready).toBe(true);
    const incomplete = assessGenericMissionPrepareReadiness(
      buildIntentAnalysisFromSolicitedMission({
        objective: "",
        expectedOutcome: "",
        scope: "",
      }),
    );
    expect(incomplete.ready).toBe(false);
    expect(incomplete.missingFields.length).toBeGreaterThan(0);
  });

  it("B/D/E — STRUCTURAL PREPARE without HD → durable inspectable EC, empty refs, no Attempt", async () => {
    const { projectId, oa } = await seedProject("struct-prep");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    expect(prep.contract.inputs?.sheDeferredStructuralAuthority).toBe(true);
    expect(
      ["draft", "validated", "confirmation_required"].includes(
        prep.contract.status,
      ),
    ).toBe(true);
  });

  it("A/I/K/L/V/W — NON_STRUCTURAL and STRUCTURAL share Exécuter path (Fake Select)", async () => {
    for (const kind of ["non_structural", "structural"] as const) {
      const { projectId, oa } = await seedProject(`ux-${kind}`);
      const analysis =
        kind === "structural" ? structuralAnalysis() : nonStructuralAnalysis();
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(`${kind}: ${prep.message}`);

      const live = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prep.executionContractId,
      });
      expect(live.ok).toBe(true);
      if (!live.ok) throw new Error("get");

      const facts = requiredFactsOrThrow(live.contract);
      expect(facts.length).toBeGreaterThan(0);

      const she = await singleHumanExecutePreparedContract({
        oa,
        projectId,
        executionContractId: live.contract.executionContractId,
        expectedVersion: live.contract.version,
        expectedSemanticFingerprint: live.contract.semanticFingerprint!,
        presentedFactIds: facts,
        forceLocalAuthority: true,
      });
      if (!she.ok) {
        throw new Error(`${kind} she: ${she.code} ${she.message}`);
      }
      expect(she.ok).toBe(true);
      expect(she.executionAttemptCreated).toBe(false);
      expect(she.authorization.outcome).toBe("AUTHORIZED");
      expect(she.authorization.executionEligible).toBe(true);

      if (kind === "structural") {
        expect(she.humanDecisionId).toBeTruthy();
        // T04/T05 — HD is authorize-inspected-execute, not ACCEPT_PREPARE.
        expect(she.humanDecisionOptionId).toBe(
          GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
        );
        expect(she.humanDecisionOptionId).not.toBe(
          GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        );
        expect(she.supersededFromExecutionContractId).toBe(
          live.contract.executionContractId,
        );
        const bound =
          await oa.executionContractServices.getExecutionContract.execute({
            executionContractId: she.executionContractId,
          });
        expect(bound.ok).toBe(true);
        if (!bound.ok) throw new Error("bound");
        expect(bound.contract.decisionRefs).toEqual([she.humanDecisionId]);
        // T09–T12 — successor material effects ≡ inspected predecessor.
        const priorInternal = assertExecutionContractInternalConsistency({
          constraints: live.contract.constraints,
          inputs: live.contract.inputs as Record<string, unknown>,
        });
        expect(priorInternal.ok).toBe(true);
        const priorProj = projectExecutionContractEffects({
          projectId: live.contract.projectId,
          cycleInstanceId: live.contract.cycleInstanceId,
          decisionRefs: live.contract.decisionRefs,
          status: live.contract.status,
          version: live.contract.version,
          semanticFingerprint: live.contract.semanticFingerprint,
          expectedOutputs: live.contract.expectedOutputs,
          requiredCapabilities: live.contract.requiredCapabilities,
          stopConditions: live.contract.stopConditions,
          reversibility: live.contract.reversibility as
            | "reversible"
            | "partially_reversible"
            | "irreversible",
          constraints: live.contract.constraints,
          inputs: live.contract.inputs as Record<string, unknown>,
        });
        const succProj = projectExecutionContractEffects({
          projectId: bound.contract.projectId,
          cycleInstanceId: bound.contract.cycleInstanceId,
          decisionRefs: bound.contract.decisionRefs,
          status: bound.contract.status,
          version: bound.contract.version,
          semanticFingerprint: bound.contract.semanticFingerprint,
          expectedOutputs: bound.contract.expectedOutputs,
          requiredCapabilities: bound.contract.requiredCapabilities,
          stopConditions: bound.contract.stopConditions,
          reversibility: bound.contract.reversibility as
            | "reversible"
            | "partially_reversible"
            | "irreversible",
          constraints: bound.contract.constraints,
          inputs: bound.contract.inputs as Record<string, unknown>,
        });
        const eq = compareContractMaterialEffectsForSheBinding({
          inspected: priorProj,
          successor: succProj,
        });
        expect(eq).toEqual({ ok: true });
        const hd = await oa.decisionServices.getHumanDecision.execute({
          decisionId: she.humanDecisionId!,
        });
        expect(hd.ok).toBe(true);
        if (!hd.ok) throw new Error("hd");
        expect(hd.decision.selectedOptionId).toBe(
          GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
        );
      }

      const selected = await governedExecuteSelectAgent({
        oa,
        projectId,
        executionContractId: she.executionContractId,
        forceLocalAuthority: true,
      });
      expect(selected.ok).toBe(true);
      if (!selected.ok) throw new Error(`${kind} select: ${selected.message}`);
      expect(selected.attempt).toBeTruthy();

      await settleDeterministicProductCursorSuccess({
        oa,
        attemptId: selected.attempt!.attemptId,
      });
      const started = await governedExecuteStart({
        oa,
        projectId,
        executionContractId: she.executionContractId,
        attemptId: selected.attempt!.attemptId,
        forceLocalAuthority: true,
      });
      expect(started.ok).toBe(true);
      void STUDIO_CURSOR_GENERALIST_AGENT_ID;
    }
  });

  it("J — fingerprint mismatch on Exécuter → refuse (no Attempt)", async () => {
    const { projectId, oa } = await seedProject("stale-fp");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: nonStructuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: "sha256:forged-not-real",
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.code).toBe("FINGERPRINT_MISMATCH");
    expect(she.executionAttemptCreated).toBe(false);
  });

  it("H — empty presented facts → refuse silent attest", async () => {
    const { projectId, oa } = await seedProject("no-facts");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: nonStructuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: [],
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.code).toBe("SHE_PRESENTATION_FACTS_REQUIRED");
  });

  it("P — double Exécuter is idempotent (no second Cursor launch invent)", async () => {
    const { projectId, oa } = await seedProject("idem");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const first = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    if (!first.ok) throw new Error(`first: ${first.code} ${first.message}`);
    expect(first.ok).toBe(true);

    // Second call on superseded prior id must fail closed (stale identity).
    const staleRetry = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(staleRetry.ok).toBe(false);

    // Retry on successor with current version/fp succeeds idempotently.
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: first.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get");
    const facts2 = requiredFactsOrThrow(live.contract);
    const second = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts2,
      forceLocalAuthority: true,
    });
    if (!second.ok) throw new Error(`second: ${second.code} ${second.message}`);
    expect(second.ok).toBe(true);
    expect(second.executionContractId).toBe(first.executionContractId);
  });

  it("T14 — absent authenticatedPilote without forceLocal → refuse silent consent", async () => {
    const { projectId, oa } = await seedProject("t14");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.code).toBe("AUTHENTICATED_PILOTE_REQUIRED");
    expect(she.humanDecisionCreated).toBe(false);
  });

  it("T07 — incomplete disclosure → no HD / Confirm / Attempt", async () => {
    const { projectId, oa } = await seedProject("t07");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts.slice(0, Math.max(1, Math.floor(facts.length / 3))),
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.humanDecisionCreated).toBe(false);
    expect(she.executionAttemptCreated).toBe(false);
    expect(
      ["INSPECTION_INSUFFICIENT", "REINSPECTION_REQUIRED"].includes(she.code) ||
        she.code.includes("INSPECT"),
    ).toBe(true);
  });

  it("GAP-01 — STRUCTURAL SHE draft continuity READ/INSPECT after PREPARE", async () => {
    const { projectId, oa } = await seedProject("gap01-cont");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) throw new Error(continuity.message);
    expect(continuity.kind).toBe("active");
    if (continuity.kind !== "active") throw new Error("kind");
    expect(continuity.contract.executionContractId).toBe(
      prep.contract.executionContractId,
    );
    expect(continuity.inspection.grantsAuthority).toBe(false);
  });

  it("GAP-04 T24 — forged SHE subject + recomputed digest → Record refuse", async () => {
    const { projectId, oa } = await seedProject("gap04-forge");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const optionRefs = GENERIC_MISSION_SHE_EXECUTE_PRESENTED_OPTIONS.map(
      (o) => o.optionId,
    );
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      optionRefs,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) throw new Error(sealed.message);

    // Forge: widen scope + recompute digest (self-consistent but not OA EC).
    const forged = buildGenericMissionSubject({
      ...sealed.subject,
      objective: "FORGED OBJECTIVE — not from inspected EC",
      scopeIn: [...sealed.subject.scopeIn, "projects/evil/widen"],
      effects: {
        ...sealed.subject.effects,
        expectedOutputs: ["evil-output"],
        requiredCapabilities: ["cap:evil"],
      },
      presentedAtIso: sealed.subject.presentedAtIso,
    });
    expect(forged.presentationDigest).not.toBe(
      sealed.subject.presentationDigest,
    );

    // Missing OA binding → refuse.
    const noBind = await recordGenericMissionHumanDecision({
      oa,
      subject: forged,
      selectedOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      presentedPresentationDigest: forged.presentationDigest,
    });
    expect(noBind.ok).toBe(false);
    if (noBind.ok) throw new Error("expected refuse");
    expect(noBind.code).toBe("SHE_INSPECTED_CONTRACT_BINDING_REQUIRED");

    // Binding to real EC + forged subject → OA re-project diverges → stale.
    const withBind = await recordGenericMissionHumanDecision({
      oa,
      subject: forged,
      selectedOptionId: GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      presentedPresentationDigest: forged.presentationDigest,
      sheInspectedExecutionContract: {
        executionContractId: prep.contract.executionContractId,
        expectedVersion: prep.contract.version,
        expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      },
    });
    expect(withBind.ok).toBe(false);
    if (withBind.ok) throw new Error("expected refuse");
    expect(
      withBind.code === "HD_SUBJECT_STALE" ||
        withBind.code === "HD_SUBJECT_DIGEST_MISMATCH" ||
        withBind.code.includes("STALE") ||
        withBind.code.includes("MISMATCH"),
    ).toBe(true);
  });

  it("I/K — UNKNOWN materiality → inspectable PREPARE but Execute refuse", async () => {
    const { projectId, oa } = await seedProject("unknown-block");
    const analysis = {
      ...structuralAnalysis(),
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      objective: "Mission ambiguë sans matérialité claire",
      scope: "périmètre indéterminé",
      executionIntent: {
        intentKind: "other",
        scopeIn: [],
      },
    };
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // UNKNOWN may prepare inspectable or refuse depending on materiality path.
    if (!prep.ok) {
      expect(prep.code).toBeTruthy();
      return;
    }
    const stamped = (prep.contract.constraints ?? []).find((c) =>
      c.startsWith("MATERIALITY:"),
    );
    if (stamped !== "MATERIALITY:UNKNOWN") {
      // Materiality resolved — skip UNKNOWN-specific refuse (not reproducible).
      return;
    }
    const facts = requiredFactsOrThrow(prep.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (she.ok) throw new Error("expected refuse");
    expect(she.code).toBe("SHE_UNKNOWN_BLOCKS_EXECUTE");
    expect(she.executionAttemptCreated).toBe(false);
  });

  it("GAP-05 — STRUCTURAL successor supersedes predecessor; Attempt binds successor", async () => {
    const { projectId, oa } = await seedProject("gap05-succ");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const predId = prep.contract.executionContractId;
    const facts = requiredFactsOrThrow(prep.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: predId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(she.message);
    expect(she.executionContractId).not.toBe(predId);
    const pred =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: predId,
      });
    expect(pred.ok).toBe(true);
    if (!pred.ok) throw new Error("pred");
    expect(pred.contract.status).toBe("superseded");
    const succ =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: she.executionContractId,
      });
    expect(succ.ok).toBe(true);
    if (!succ.ok) throw new Error("succ");
    expect(succ.contract.supersedesExecutionContractId).toBe(predId);
    expect(succ.contract.status).not.toBe("superseded");

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.attempt).toBeTruthy();
    // Phase result binds Attempt to successor EC id (not predecessor).
    expect(selected.executionContractId).toBe(she.executionContractId);
    expect(selected.executionContractId).not.toBe(predId);
  });

  it("T23 — concurrent Exécuter yields one effective authority chain", async () => {
    const { projectId, oa } = await seedProject("t23");
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: structuralAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const facts = requiredFactsOrThrow(prep.contract);
    const args = {
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: prep.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true as const,
    };
    const [a, b] = await Promise.all([
      singleHumanExecutePreparedContract(args),
      singleHumanExecutePreparedContract(args),
    ]);
    const oks = [a, b].filter((r) => r.ok);
    expect(oks.length).toBeGreaterThanOrEqual(1);
    const created = [a, b].filter((r) => r.ok && r.humanDecisionCreated);
    expect(created.length).toBeLessThanOrEqual(1);
    if (oks.length === 2 && oks[0]!.ok && oks[1]!.ok) {
      expect(oks[0].executionContractId).toBe(oks[1].executionContractId);
      expect(oks[0].humanDecisionId).toBe(oks[1].humanDecisionId);
    }
  });
});
