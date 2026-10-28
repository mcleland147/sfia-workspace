/**
 * EP-S2-08-PROOF-01 — R1 Option A bounded Delivery CKC eligibility (DET).
 *
 * Morris 2026-10-28: Option A — Delivery post-Evidence CKC only when Generic
 * Project-only NON_STRUCTURAL Delivery eligibility is positively proven.
 * Universal null-cycle → cyc:delivery is NOT authorized.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildIntentAnalysisFromSolicitedMission,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import {
  assessProjectOnlyDeliveryCkcEligibility,
  POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
  resolvePostEvidenceCkcContext,
  resolveW2QualificationInputs,
} from "@/features/project-assistant/w2/qualificationInputs";
import { loadProductCkcCognitiveContent } from "@/features/project-assistant/f2/ckcCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { PRODUCT_CANONICAL_EXECUTION_ACTION } from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import { PRODUCT_GOVERNED_CONSTRAINT } from "@/lib/oa/execution-contract";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  throw new Error(
    `inspection disclosure incomplete: ${(facts as { code: string }).code}`,
  );
}

function launchPortOf(oa: {
  executionAttemptServices?: {
    realBoundary?: { launchPort?: unknown };
  } | null;
}): TestOnlyRealExecutionLaunchPort {
  const port = oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

function deliveryEligibleAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "EP-S2-08 R1-A Delivery-eligible notes edit",
    expectedOutcome: "Bounded local-write Evidence",
    scope: NOTES_PATH,
    repositoryMutation: "write",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

function cursorReportStdout(input: {
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
}): string {
  const body = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: `rpt:r1:${input.attemptId}`.slice(0, 128),
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.modify"],
    workPerformed: [`modified ${NOTES_PATH}`],
    fileEffects: {
      created: [],
      modified: [NOTES_PATH],
      deleted: [],
    },
  };
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

describe("EP-S2-08-PROOF-01 R1 Option A — Delivery CKC eligibility (DET)", () => {
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let previousExclusive: string | undefined;
  let previousRefs: string | undefined;
  let refsRoot: string;
  let dbPath: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID;
    previousExclusive = process.env.SFIA_STUDIO_OA_EXCLUSIVE;
    previousRefs = process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT;
    process.env.SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID = "actor:local-pilote";
    process.env.SFIA_STUDIO_OA_EXCLUSIVE = "0";
    refsRoot = tempProductDbPath("ep08-r1-refs").replace(/\.sqlite$/, "-refs");
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refsRoot;
    dbPath = tempProductDbPath("ep08-r1-optA");
    setConversationProviderForTests(new FakeConversationProvider());
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID", previousPilot);
    restoreEnvVar("SFIA_STUDIO_OA_EXCLUSIVE", previousExclusive);
    restoreEnvVar("SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT", previousRefs);
    setConversationProviderForTests(null);
  });

  describe("pure assessor matrix (R1 final)", () => {
    const allClearSignals = {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
    };
    /** Positive WHAT requires exact EFFECT_CLASS:local-write or mutation=write — not scopeIn. */
    const baseContract = {
      projectId: "prj:r1",
      cycleInstanceId: null as string | null,
      action: PRODUCT_CANONICAL_EXECUTION_ACTION,
      constraints: [
        PRODUCT_GOVERNED_CONSTRAINT,
        "MATERIALITY:NON_STRUCTURAL",
        "EFFECT_CLASS:local-write",
      ],
      inputs: {
        intentKind: "other",
        scopeIn: [NOTES_PATH],
        repositoryMutationDeclared: "write",
        materialityFacts: { assessedMateriality: "non_structural" },
        impactSignals: { ...allClearSignals },
      },
    };

    it("R1-P1 — positive when exact local-write / mutation=write present", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: baseContract,
      });
      expect(r).toEqual({
        eligible: true,
        reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY",
      });
    });

    it("R1-P1b — repositoryMutationDeclared=write alone (no EFFECT_CLASS) eligible", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
          ],
        },
      });
      expect(r).toEqual({
        eligible: true,
        reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY",
      });
    });

    it("NEG-01 — intentKind=other + scopeIn only (no positive WHAT) → refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          projectId: "prj:r1",
          cycleInstanceId: null,
          action: PRODUCT_CANONICAL_EXECUTION_ACTION,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
          ],
          inputs: {
            intentKind: "other",
            scopeIn: [NOTES_PATH],
            repositoryMutationDeclared: null,
            materialityFacts: { assessedMateriality: "non_structural" },
            impactSignals: { ...allClearSignals },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("DELIVERY_POSITIVE_FACTS_ABSENT");
      }
    });

    it("NEG-04 — EFFECT_CLASS:local-write-extra prefix must not pass", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
            "EFFECT_CLASS:local-write-extra",
          ],
          inputs: {
            ...baseContract.inputs,
            repositoryMutationDeclared: null,
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("DELIVERY_POSITIVE_FACTS_ABSENT");
      }
    });

    it("R1-N1 — read_only refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: { ...baseContract.inputs, intentKind: "read_only" },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("READ_ONLY_NOT_DELIVERY");
    });

    it("R1-N2 — absent intent refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            scopeIn: [NOTES_PATH],
            materialityFacts: { assessedMateriality: "non_structural" },
            impactSignals: { ...allClearSignals },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("INTENT_ABSENT_OR_UNKNOWN");
    });

    it("R1-N3 — other without positive Delivery facts refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          projectId: "prj:r1",
          cycleInstanceId: null,
          action: PRODUCT_CANONICAL_EXECUTION_ACTION,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
          ],
          inputs: {
            intentKind: "other",
            materialityFacts: { assessedMateriality: "non_structural" },
            impactSignals: { ...allClearSignals },
            // no scopeIn, no write mutation, no EFFECT_CLASS
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("DELIVERY_POSITIVE_FACTS_ABSENT");
      }
    });

    it("R1-N3b — unknown intentKind refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: { ...baseContract.inputs, intentKind: "implement" },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("INTENT_ABSENT_OR_UNKNOWN");
    });

    it("R1-N4 — dataImpact conflicts with NON_STRUCTURAL → refuse", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            ...baseContract.inputs,
            impactSignals: { ...allClearSignals, dataImpact: true },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("IMPACT_CATEGORY_NON_DELIVERY");
    });

    it("R1-N4b — irreversible conflicts with NON_STRUCTURAL → refuse", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            ...baseContract.inputs,
            impactSignals: { ...allClearSignals, irreversible: true },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("IMPACT_CATEGORY_NON_DELIVERY");
    });

    it("R1-N5 — absent impactSignals refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            intentKind: "other",
            scopeIn: [NOTES_PATH],
            materialityFacts: { assessedMateriality: "non_structural" },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("IMPACT_SIGNALS_ABSENT");
    });

    it("R1-N5b — malformed impactSignals refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          inputs: {
            ...baseContract.inputs,
            impactSignals: { structuralChange: false },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("IMPACT_SIGNALS_MALFORMED");
    });

    it("R1-N6 — materiality constraint vs assessedMateriality contradiction", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [
            PRODUCT_GOVERNED_CONSTRAINT,
            "MATERIALITY:NON_STRUCTURAL",
          ],
          inputs: {
            ...baseContract.inputs,
            materialityFacts: { assessedMateriality: "structural" },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("MATERIALITY_CONTRADICTION");
    });

    it("R1-N7 — UNKNOWN materiality not promoted to Delivery", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [PRODUCT_GOVERNED_CONSTRAINT, "MATERIALITY:UNKNOWN"],
          inputs: {
            ...baseContract.inputs,
            materialityFacts: { assessedMateriality: "unknown" },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("MATERIALITY_NOT_NON_STRUCTURAL");
      }
    });

    it("R1-N7b — STRUCTURAL materiality refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: {
          ...baseContract,
          constraints: [PRODUCT_GOVERNED_CONSTRAINT, "MATERIALITY:STRUCTURAL"],
          inputs: {
            ...baseContract.inputs,
            materialityFacts: { assessedMateriality: "structural" },
          },
        },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) {
        expect(r.reasonCode).toBe("MATERIALITY_NOT_NON_STRUCTURAL");
      }
    });

    it("R1-N8 — Attempt/EC project mismatch refused", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:other",
        contract: baseContract,
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("CONTRACT_PROJECT_MISMATCH");
    });

    it("null-cycle alone is insufficient — non-generic action refuses", () => {
      const r = assessProjectOnlyDeliveryCkcEligibility({
        projectId: "prj:r1",
        contract: { ...baseContract, action: "other.action" },
      });
      expect(r.eligible).toBe(false);
      if (!r.eligible) expect(r.reasonCode).toBe("NOT_GENERIC_PRODUCT_EC");
    });
  });

  async function seedProject(runtime: RuntimeApplicationService, suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08 R1 Option A",
      context: "r1 eligibility",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "R1 DET"],
      shortReference: `R1${suffix.toUpperCase().slice(0, 4)}`,
      idempotencyKey: `idem:ep08-r1-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
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
    const identity = `acme/ep08-r1-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  it("POS-01 — real Generic PREPARE→SHE→Attempt preserves declared write → Delivery CKC", async () => {
    /**
     * Option 1 (2026-10-28): declared repositoryMutation=write is preserved on
     * the durable EC (inspectable WHAT). No EFFECT_CLASS:local-write invented.
     * SHE / materiality / confirmation remain the authority gates.
     */
    const runtime = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "ep08r1a",
    });
    const { projectId, oa } = await seedProject(runtime, "a");

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: deliveryEligibleAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.projectContextOnly).toBe(true);

    const liveEc = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(liveEc.ok).toBe(true);
    if (!liveEc.ok) throw new Error("get EC");
    const inputs = liveEc.contract.inputs as Record<string, unknown>;
    // POS-01 / POS-02 — declared write preserved; WHERE still present; no invented EFFECT_CLASS.
    expect(inputs.repositoryMutationDeclared).toBe("write");
    expect(
      liveEc.contract.constraints.includes("EFFECT_CLASS:local-write"),
    ).toBe(false);
    expect(Array.isArray(inputs.scopeIn) && (inputs.scopeIn as string[]).length).toBeGreaterThan(
      0,
    );
    expect(inputs.boundedNonMutatingAnalysis).toBe(false);

    const facts = requiredFactsOrThrow(liveEc.contract);
    const repositoryRef = String(inputs.repositoryBindingIdentity ?? "");
    const baseSha = String(inputs.baseHeadSha ?? W2_TEST_PINNED_BASE_HEAD_SHA);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: liveEc.contract.executionContractId,
      expectedVersion: liveEc.contract.version,
      expectedSemanticFingerprint: liveEc.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code}`);
    // POS-03 — SHE does not widen: still AUTHORIZED on inspected EC only.
    expect(she.authorization.outcome).toBe("AUTHORIZED");

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    const attemptId = selected.attempt!.attemptId;

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: cursorReportStdout({
          attemptId,
          executionContractId: she.executionContractId,
          repositoryRef,
          baseSha,
        }),
        stderr: "",
        durationMs: 5,
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) throw new Error(terminal.message);

    const ckc = await resolvePostEvidenceCkcContext({
      oa,
      projectId,
      attemptId,
    });
    // POS-05 — Project-only positive Delivery reaches W3-C with cyc:delivery.
    expect(ckc.ok).toBe(true);
    if (ckc.ok) {
      expect(ckc.context.projectScoped).toBe(true);
      expect(ckc.context.cycleTypeId).toBe(
        POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
      );
      expect(ckc.context.cycleTypeId).toBe("cyc:delivery");
      expect(ckc.context.eligibilityReasonCode).toBe(
        "GENERIC_NON_STRUCTURAL_DELIVERY",
      );
      expect(ckc.context.activeCycleInstanceId).toBeNull();
    }

    // AUTH-03 — W2 Options still cycle-gated.
    const qual = await resolveW2QualificationInputs({ oa, projectId });
    expect(qual.ok).toBe(false);
    if (!qual.ok) expect(qual.code).toBe("CYCLE_NOT_QUALIFIED");

    // AUTH-01 — no CycleInstance invented.
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(live.ok && (live.livingProjectState.activeCycleInstanceId ?? null)).toBe(
      null,
    );

    // AUTH-02 — no automatic HD; Product UNCLAIMED remains honest.
    const hdBefore = (
      await oa.decisionServices!.decisions.listByProject(projectId)
    ).length;
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (materialized.ok) {
      expect(materialized.product.outcome).toBe("UNCLAIMED");
      expect(materialized.postEvidence?.ok).toBe(true);
      if (materialized.postEvidence?.ok) {
        expect(materialized.postEvidence.replanInvoked).toBe(false);
        expect(materialized.postEvidence.recommendation.authority).toBe("none");
        expect(materialized.postEvidence.recommendation.decisionCreated).toBe(
          false,
        );
        expect(
          materialized.postEvidence.recommendation.attemptAutoLaunchNextCycle,
        ).toBe(false);
      }
    }
    const hdAfter = (
      await oa.decisionServices!.decisions.listByProject(projectId)
    ).length;
    expect(hdAfter).toBe(hdBefore);
  }, 90_000);

  it("R1-P2 — cycle-bound Attempt→EC lineage uses real cycleTypeId (not forced Delivery)", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-r1d"),
      idPrefix: "ep08r1d",
    });
    const { projectId, oa } = await seedProject(runtime, "r1d");
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const cycleInstanceId = `cyc:inst:ep08-r1d-framing`;
    const cycle = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
      projectId,
      signals: {},
      objective: "R1-P2 framing lineage",
      scope: "r1-p2",
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      linkAsActiveCycle: true,
      expectedLpsVersion: lps.livingProjectState.version,
      ckcResolutionRef: "ckcres:ep08-r1d",
    });
    expect(cycle.ok).toBe(true);
    if (!cycle.ok) throw new Error("createCycle");

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      analysis: deliveryEligibleAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const liveEc = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(liveEc.ok).toBe(true);
    if (!liveEc.ok) throw new Error("get EC");
    expect(liveEc.contract.cycleInstanceId).toBe(cycleInstanceId);
    const facts = requiredFactsOrThrow(liveEc.contract);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: liveEc.contract.executionContractId,
      expectedVersion: liveEc.contract.version,
      expectedSemanticFingerprint: liveEc.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code} ${she.message ?? ""}`);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    const attemptId = selected.attempt!.attemptId;

    const ckc = await resolvePostEvidenceCkcContext({
      oa,
      projectId,
      attemptId,
    });
    expect(ckc.ok).toBe(true);
    if (!ckc.ok) throw new Error(`${ckc.code}: ${ckc.message}`);
    expect(ckc.context.projectScoped).toBe(false);
    expect(ckc.context.activeCycleInstanceId).toBe(cycleInstanceId);
    expect(ckc.context.cycleTypeId).toBe("cyc:framing");
    expect(ckc.context.eligibilityReasonCode).toBe("ACTIVE_CYCLE_TYPE");
    expect(ckc.context.cycleTypeId).not.toBe(
      POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
    );
  }, 90_000);

  it("R1-N9 — missing Attempt refused (no silent LPS-cycle CKC)", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-r1n9"),
      idPrefix: "ep08r1n9",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "r1n9",
      cycleTypeId: "cyc:framing",
    });
    const ckc = await resolvePostEvidenceCkcContext({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      attemptId: "xat:does-not-exist-r1n9",
    });
    expect(ckc.ok).toBe(false);
    if (!ckc.ok) {
      expect(ckc.code).not.toBe("ACTIVE_CYCLE_TYPE");
    }
  });

  it("R1-C — Project-only ambiguous (no impactSignals) → POST_EVIDENCE_CKC_AMBIGUOUS", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-r1c"),
      idPrefix: "ep08r1c",
    });
    const { projectId, oa } = await seedProject(runtime, "c");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: deliveryEligibleAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    // Simulate durable ambiguity: strip sealed impactSignals (no invented classifier).
    const strippedInputs = { ...(loaded.contract.inputs as Record<string, unknown>) };
    delete strippedInputs.impactSignals;
    const ambiguous = assessProjectOnlyDeliveryCkcEligibility({
      projectId,
      contract: {
        projectId: loaded.contract.projectId,
        cycleInstanceId: loaded.contract.cycleInstanceId,
        action: loaded.contract.action,
        constraints: loaded.contract.constraints,
        inputs: strippedInputs,
      },
    });
    expect(ambiguous.eligible).toBe(false);
    if (!ambiguous.eligible) {
      expect(ambiguous.reasonCode).toBe("IMPACT_SIGNALS_ABSENT");
    }
  });

  it("R1-B — Project-only securityImpact Generic → Delivery orientation refused", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-r1b"),
      idPrefix: "ep08r1b",
    });
    const { projectId, oa } = await seedProject(runtime, "b");
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Security-sensitive Generic mission",
      expectedOutcome: "Must not get Delivery CKC",
      scope: NOTES_PATH,
      repositoryMutation: "write",
      impactSignals: {
        structuralChange: false,
        securityImpact: true,
        architectureImpact: false,
      },
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...analysis,
        executionIntent: {
          intentKind: "other",
          scopeIn: [NOTES_PATH],
          requiredCapabilities: [],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) return;

    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    // Security signal on a Generic Project-only EC must not yield Delivery CKC.
    // Materiality may already refuse (STRUCTURAL/UNKNOWN) before impact category —
    // either refuse code is a valid Delivery denial (no usurpation).
    const eligibility = assessProjectOnlyDeliveryCkcEligibility({
      projectId,
      contract: {
        projectId: loaded.contract.projectId,
        cycleInstanceId: loaded.contract.cycleInstanceId,
        action: loaded.contract.action,
        constraints: [
          ...loaded.contract.constraints.filter(
            (c) => !c.startsWith("MATERIALITY:"),
          ),
          "MATERIALITY:NON_STRUCTURAL",
        ],
        inputs: {
          ...loaded.contract.inputs,
          materialityFacts: { materiality: "non_structural" },
        },
      },
    });
    expect(eligibility.eligible).toBe(false);
    if (!eligibility.eligible) {
      expect(eligibility.reasonCode).toBe("IMPACT_CATEGORY_NON_DELIVERY");
    }
  });
});
