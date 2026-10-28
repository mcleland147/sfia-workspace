/**
 * EP-S2-08-PROOF-01 — R-INSPECT-01 inspection disclosure + HD coherence (DET).
 *
 * Proves durable repositoryMutationDeclared is:
 * - projected into canonical inspection disclosure;
 * - required as an inspected fact when present;
 * - rendered by the Product Pilote fact-row presentation;
 * - coherent with HD-sealed read_only / non-mutating stamps;
 * - not an independent authorization.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import {
  assertExecutionContractInternalConsistency,
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
} from "@/features/project-assistant/w2/genericMissionSubject";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import { assessProjectOnlyDeliveryCkcEligibility } from "@/features/project-assistant/w2/qualificationInputs";
import {
  projectExecutionContractInspectionDisclosure,
  requiredInspectedFactsForContract,
} from "@/lib/oa/execution-contract";
import { validateDecisionBasis } from "@/lib/oa/decision";
import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: ExecutionContract,
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  throw new Error(
    `inspection disclosure incomplete: ${(facts as { code: string }).code}`,
  );
}

function writeAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "R-INSPECT-01 declared write notes edit",
    expectedOutcome: "Inspectable write declaration on EC",
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

function readOnlyAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "R-INSPECT-01 read-only notes review",
    expectedOutcome: "Non-mutating inspection",
    scope: NOTES_PATH,
    repositoryMutation: "none",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "read_only",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

describe("EP-S2-08-PROOF-01 R-INSPECT-01 — inspection + HD coherence (DET)", () => {
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
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
  });

  async function seed(
    runtime: RuntimeApplicationService,
    suffix: string,
  ): Promise<{
    projectId: string;
    oa: NonNullable<RuntimeApplicationService["oa"]>;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08 R-INSPECT-01",
      context: "inspection disclosure",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "R-INSPECT DET"],
      shortReference: `RI${suffix.toUpperCase().slice(0, 4)}`,
      idempotencyKey: `idem:ep08-ri-${suffix}`,
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
    const identity = `acme/ep08-ri-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  it("INSPECT-P1/P2/P4/P5 — declared write persists, discloses, requires fact, SHE does not widen", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-ri-p1"),
      idPrefix: "ep08rip1",
    });
    const { projectId, oa } = await seed(runtime, "p1");

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: writeAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");

    // INSPECT-P1
    const inputs = live.contract.inputs as Record<string, unknown>;
    expect(inputs.repositoryMutationDeclared).toBe("write");

    // INSPECT-P2
    const projected = projectExecutionContractInspectionDisclosure(live.contract);
    expect(projected.ok).toBe(true);
    if (!projected.ok) throw new Error("disclosure incomplete");
    expect(projected.disclosure.repositoryMutationDeclared).toBe("write");

    // INSPECT-P4 — required fact covers displayed operation
    const required = requiredFactsOrThrow(live.contract);
    expect(required).toContain("inputs.repositoryMutationDeclared");
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure: projected.disclosure,
      requiredInspectedFacts: required,
    });
    expect(rows.missingRequired).toEqual([]);
    const mutationRow = rows.rows.find(
      (r) => r.factId === "inputs.repositoryMutationDeclared",
    );
    expect(mutationRow).toBeTruthy();
    expect(mutationRow!.label).toBe("Opération déclarée sur le dépôt");
    expect(mutationRow!.value).toContain("Écriture déclarée");
    expect(mutationRow!.value).toContain("autorisation du contrat");
    expect(rows.presentedFactIds).toContain("inputs.repositoryMutationDeclared");

    // INSPECT-P5 — SHE binds inspected identity; declaration ≠ extra authority
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: rows.presentedFactIds,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`${she.code} ${she.message}`);
    expect(she.authorization.outcome).toBe("AUTHORIZED");
    expect(she.executionAttemptCreated).toBe(false);
  }, 90_000);

  it("INSPECT-P3 — Pilote fact rows render declared write intelligibly (presentation DET)", () => {
    const disclosure = {
      action: "studio.cursor.generalist.execute",
      technicalTarget: "studio.cursor.generalist.workspace",
      scope: "project",
      targetRepositoryRef: "acme/demo",
      targetPath: null,
      scopeIn: [NOTES_PATH] as readonly string[],
      scopeOut: null,
      createOrModify: null,
      noDelete: null,
      repositoryMutationDeclared: "write" as const,
      objective: "notes edit",
      artifactType: null,
      artifactBrief: null,
      contentRequirements: null,
      validationExpectations: null,
      expectedOutputs: null,
      sourceGrounding: null,
      acceptanceCriteria: null,
      validationPlan: null,
      reportRequirements: null,
      evidenceRequirements: [] as readonly string[],
      requiredAuthority: "N3",
      requiredCapabilities: [] as readonly string[],
      constraints: ["PRODUCT_GOVERNED", "MATERIALITY:NON_STRUCTURAL"],
      stopConditions: [] as readonly string[],
      reversibility: "reversible" as const,
      contractVersion: 1,
      executionContractId: "xct:inspect-p3",
      semanticFingerprint: "fp:inspect-p3",
      disclosureComplete: true,
      incompletenessCode: null,
    };
    const required = [
      "action",
      "target",
      "scope",
      "inputs.repositoryMutationDeclared",
      "semanticFingerprint",
    ];
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure,
      requiredInspectedFacts: required,
    });
    expect(rows.missingRequired).toEqual([]);
    const row = rows.rows.find(
      (r) => r.factId === "inputs.repositoryMutationDeclared",
    );
    expect(row?.value).toMatch(/Écriture déclarée/);
    expect(row?.value).toContain("soumise");
    expect(row?.value).toContain("autorisation du contrat");
  });

  it("INSPECT-N1 — absent declaration does not invent write in disclosure or rows", async () => {
    // Pure disclosure path: inputs without repositoryMutationDeclared
    const contract = {
      executionContractId: "xct:n1",
      projectId: "prj:n1",
      version: 1,
      status: "draft",
      action: "studio.cursor.generalist.execute",
      target: "studio.cursor.generalist.workspace",
      scope: "project",
      requiredAuthority: "N3",
      requiredCapabilities: [],
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      evidenceRequirements: [],
      reversibility: "reversible",
      expectedOutputs: [],
      inputs: {
        objective: "x",
        intentKind: "other",
        scopeIn: [NOTES_PATH],
      },
      semanticFingerprint: "fp:n1",
    } as unknown as ExecutionContract;

    const projected = projectExecutionContractInspectionDisclosure(contract);
    expect(projected.ok).toBe(true);
    if (!projected.ok) return;
    expect(projected.disclosure.repositoryMutationDeclared).toBeNull();
    const facts = requiredInspectedFactsForContract(contract);
    expect(Array.isArray(facts) && facts.includes("inputs.repositoryMutationDeclared")).toBe(
      false,
    );
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure: projected.disclosure,
      requiredInspectedFacts: Array.isArray(facts) ? facts : [],
    });
    expect(
      rows.rows.some((r) => r.value.toLowerCase().includes("écriture déclarée")),
    ).toBe(false);
  });

  it("INSPECT-N2 — read-only / none declaration remains non-Delivery and discloses neutrally", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-ri-n2"),
      idPrefix: "ep08rin2",
    });
    const { projectId, oa } = await seed(runtime, "n2");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: readOnlyAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // Pathless/read_only may qualify or need concrete paths — either way mutation ≠ write.
    if (!prep.ok) {
      // Fail-closed PREPARE is acceptable for this oracle when Product refuses.
      expect(prep.ok).toBe(false);
      return;
    }
    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) return;
    const mutation = (live.contract.inputs as Record<string, unknown>)
      .repositoryMutationDeclared;
    expect(mutation === "none" || mutation === "read").toBe(true);
    expect(mutation).not.toBe("write");
    const projected = projectExecutionContractInspectionDisclosure(live.contract);
    expect(projected.ok && projected.disclosure.repositoryMutationDeclared).not.toBe(
      "write",
    );
  }, 60_000);

  it("INSPECT-N3 — unknown declaration discloses as ambiguous, not promoted to write", () => {
    const contract = {
      executionContractId: "xct:n3",
      projectId: "prj:n3",
      version: 1,
      status: "draft",
      action: "a",
      target: "t",
      scope: "s",
      requiredAuthority: "N3",
      requiredCapabilities: [],
      constraints: [],
      stopConditions: [],
      evidenceRequirements: [],
      reversibility: "reversible",
      expectedOutputs: [],
      inputs: { repositoryMutationDeclared: "unknown" },
      semanticFingerprint: "fp:n3",
    } as unknown as ExecutionContract;
    const projected = projectExecutionContractInspectionDisclosure(contract);
    expect(projected.ok).toBe(true);
    if (!projected.ok) return;
    expect(projected.disclosure.repositoryMutationDeclared).toBe("unknown");
    const facts = requiredInspectedFactsForContract(contract);
    expect(Array.isArray(facts) && facts.includes("inputs.repositoryMutationDeclared")).toBe(
      true,
    );
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure: projected.disclosure,
      requiredInspectedFacts: ["inputs.repositoryMutationDeclared"],
    });
    expect(rows.rows[0]?.value).toMatch(/inconnue/i);
    expect(rows.rows[0]?.value).not.toMatch(/^Écriture déclarée/);
  });

  it("INSPECT-N5 — required mutation fact without displayable value → missingRequired (no silent attest)", () => {
    const disclosure = {
      action: "a",
      technicalTarget: "t",
      scope: "s",
      targetRepositoryRef: null,
      targetPath: null,
      scopeIn: null,
      scopeOut: null,
      createOrModify: null,
      noDelete: null,
      repositoryMutationDeclared: null,
      objective: null,
      artifactType: null,
      artifactBrief: null,
      contentRequirements: null,
      validationExpectations: null,
      expectedOutputs: null,
      sourceGrounding: null,
      acceptanceCriteria: null,
      validationPlan: null,
      reportRequirements: null,
      evidenceRequirements: [] as readonly string[],
      requiredAuthority: "N3",
      requiredCapabilities: [] as readonly string[],
      constraints: [] as readonly string[],
      stopConditions: [] as readonly string[],
      reversibility: "reversible" as const,
      contractVersion: 1,
      executionContractId: "xct:n5",
      semanticFingerprint: "fp:n5",
      disclosureComplete: true,
      incompletenessCode: null,
    };
    const rows = buildInspectionFactRowsFromDisclosure({
      disclosure,
      requiredInspectedFacts: ["inputs.repositoryMutationDeclared"],
    });
    expect(rows.missingRequired).toContain("inputs.repositoryMutationDeclared");
    expect(rows.presentedFactIds).not.toContain("inputs.repositoryMutationDeclared");
  });

  it("HD-N1 — write vs read_only intent on same EC fails internal consistency", () => {
    const r = assertExecutionContractInternalConsistency({
      constraints: [
        "PRODUCT_GOVERNED",
        "MATERIALITY:NON_STRUCTURAL",
        "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
      ],
      inputs: {
        missionSubjectId: "ms:hd-n1",
        presentationDigest: "pd:hd-n1",
        materialityFacts: { assessedMateriality: "non_structural" },
        intentKind: "read_only",
        repositoryMutationDeclared: "write",
        boundedNonMutatingAnalysis: true,
        risks: [],
        reservations: [],
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(
        r.reason === "mutation_write_vs_read_only_intent" ||
          r.reason === "mutation_write_vs_bounded_non_mutating" ||
          r.reason === "mutation_write_vs_no_mutation_constraint",
      ).toBe(true);
    }
  });

  it("HD-P1 — coherent write + other intent passes internal consistency", () => {
    const r = assertExecutionContractInternalConsistency({
      constraints: ["PRODUCT_GOVERNED", "MATERIALITY:NON_STRUCTURAL"],
      inputs: {
        missionSubjectId: "ms:hd-p1",
        presentationDigest: "pd:hd-p1",
        materialityFacts: { assessedMateriality: "non_structural" },
        intentKind: "other",
        repositoryMutationDeclared: "write",
        boundedNonMutatingAnalysis: false,
        risks: [],
        reservations: [],
      },
    });
    expect(r.ok).toBe(true);
  });

  it("HD-N2 — absent mutation is not inferred as HD write approval", () => {
    const r = assertExecutionContractInternalConsistency({
      constraints: ["PRODUCT_GOVERNED", "MATERIALITY:NON_STRUCTURAL"],
      inputs: {
        missionSubjectId: "ms:hd-n2",
        presentationDigest: "pd:hd-n2",
        materialityFacts: { assessedMateriality: "non_structural" },
        intentKind: "other",
        // repositoryMutationDeclared intentionally absent
        risks: [],
        reservations: [],
      },
    });
    expect(r.ok).toBe(true);
    const contract = {
      executionContractId: "xct:hd-n2",
      projectId: "prj",
      version: 1,
      status: "draft",
      action: "a",
      target: "t",
      scope: "s",
      requiredAuthority: "N3",
      requiredCapabilities: [],
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      evidenceRequirements: [],
      reversibility: "reversible",
      expectedOutputs: [],
      inputs: { intentKind: "other" },
      semanticFingerprint: "fp",
    } as unknown as ExecutionContract;
    const d = projectExecutionContractInspectionDisclosure(contract);
    expect(d.ok && d.disclosure.repositoryMutationDeclared).toBeNull();
  });

  it("INSPECT-N4 — fingerprint / version binding: presented facts must match live EC identity", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-ri-n4"),
      idPrefix: "ep08rin4",
    });
    const { projectId, oa } = await seed(runtime, "n4");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: writeAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: "fp:stale-wrong-fingerprint",
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
    if (!she.ok) {
      expect(she.code).toMatch(/FINGERPRINT|STALE|CURRENT|MISMATCH|INSPECT/i);
    }
  }, 60_000);
});

/**
 * R-HD-01 — integrated Product OA HumanDecision provenance oracles.
 *
 * PATH A: historical pre-bound ACCEPT_PREPARE HD (hdRequired && decisionId).
 * PATH B: PREPARE → INSPECT → SHE → AUTHORIZE_INSPECTED_EXECUTE (when applicable).
 * PATH C: NON_STRUCTURAL PREPARE without systematic HD.
 *
 * Production code is READ-ONLY in this corrective. Tests only.
 */
describe("EP-S2-08-PROOF-01 R-HD-01 — integrated HD provenance (DET)", () => {
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
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
  });

  const STRUCT_SCOPE = "projects/demo/src/authority";

  /**
   * PATH A requires hdRequired=true. Structural impact forces HD consumption
   * when decisionId is supplied. intentKind=read_only is sealed; mutation write
   * is added only on the contradictory PREPARE analysis (verifier does not
   * compare repositoryMutationDeclared — dedicated R-INSPECT guard does).
   */
  function structuralReadOnlyAnalysis(mutation?: "none" | "write" | null): IntentAnalysisDto {
    const base = buildIntentAnalysisFromSolicitedMission({
      objective: "R-HD-01 structural read_only mission",
      expectedOutcome: "Inspectable structural resume after HD",
      scope: STRUCT_SCOPE,
      ...(mutation === "none" || mutation === "write"
        ? { repositoryMutation: mutation }
        : {}),
      impactSignals: {
        structuralChange: true,
        architectureImpact: true,
      },
    });
    return {
      ...base,
      executionIntent: {
        intentKind: "read_only",
        scopeIn: [STRUCT_SCOPE],
        requiredCapabilities: [],
      },
    };
  }

  function structuralCoherentAnalysis(): IntentAnalysisDto {
    const base = buildIntentAnalysisFromSolicitedMission({
      objective: "R-HD-01 structural coherent mission",
      expectedOutcome: "HD-bound PREPARE resume",
      scope: STRUCT_SCOPE,
      repositoryMutation: "write",
      impactSignals: {
        structuralChange: true,
        architectureImpact: true,
      },
    });
    return {
      ...base,
      executionIntent: {
        intentKind: "other",
        scopeIn: [STRUCT_SCOPE],
        requiredCapabilities: [],
      },
    };
  }

  async function seedHd(
    runtime: RuntimeApplicationService,
    suffix: string,
  ): Promise<{
    projectId: string;
    oa: NonNullable<RuntimeApplicationService["oa"]>;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08 R-HD-01",
      context: "integrated HD provenance",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "R-HD DET"],
      shortReference: `RH${suffix.toUpperCase().slice(0, 4)}`,
      idempotencyKey: `idem:ep08-rhd-${suffix}`,
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
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity: `acme/ep08-rhd-${suffix}`,
    });
    return { projectId, oa };
  }

  async function sealAndAcceptPrepare(input: {
    oa: NonNullable<RuntimeApplicationService["oa"]>;
    projectId: string;
    analysis: IntentAnalysisDto;
  }) {
    const sealed = await sealGenericMissionForPresentation({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: null,
      analysis: input.analysis,
    });
    if (!sealed.ok) {
      throw new Error(`seal: ${sealed.code} ${sealed.message}`);
    }
    const recorded = await recordGenericMissionHumanDecision({
      oa: input.oa,
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

  it("HD-N1 — real ACCEPT_PREPARE HD + contradictory write declaration → first fail-closed gate", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-rhd-n1"),
      idPrefix: "ep08rhdn1",
    });
    const { projectId, oa } = await seedHd(runtime, "n1");

    const sealedAnalysis = structuralReadOnlyAnalysis("none");
    const { decision, subject } = await sealAndAcceptPrepare({
      oa,
      projectId,
      analysis: sealedAnalysis,
    });

    // Real durable HD evidence
    expect(decision.decisionId).toMatch(/^dec:/);
    expect(decision.selectedOptionId).toBe(GENERIC_MISSION_OPTION_ACCEPT_PREPARE);
    expect(decision.decisionBasis?.sourceType).toBe("generic_mission");
    expect(decision.decisionBasis?.sourceDigest).toBe(subject.presentationDigest);
    expect(decision.subject).toBe(subject.missionSubjectId);
    // null = no invariant violation (durable DecisionBasis accepted)
    expect(validateDecisionBasis(decision.decisionBasis!)).toBeNull();
    expect(decision.decisionBasis?.genericMissionContext?.intentKind).toBe(
      "read_only",
    );
    // repositoryMutationDeclared is NOT a canonical HD-sealed field
    expect(
      (decision.decisionBasis?.genericMissionContext as Record<string, unknown> | undefined)
        ?.repositoryMutationDeclared,
    ).toBeUndefined();

    const hdCountAfterSeal = (
      await oa.decisionServices!.decisions.listByProject(projectId)
    ).length;
    expect(hdCountAfterSeal).toBe(1);

    // Same sealed mission facts for verifier; only mutation flips to write.
    const contradictory = structuralReadOnlyAnalysis("write");
    expect(
      (contradictory as { repositoryMutationDeclared?: string })
        .repositoryMutationDeclared,
    ).toBe("write");
    expect(contradictory.executionIntent?.intentKind).toBe("read_only");

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: contradictory,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });

    expect(prep.ok).toBe(false);
    if (!prep.ok) {
      // Exact first fail-closed gate (recorded for Review Pack / R23 coverage class).
      // Dedicated R-INSPECT guard is BEHAVIOR PROVEN only when this code matches.
      expect(prep.code).toBe("HD_MUTATION_DECLARATION_CONFLICT");
      expect(prep.message).toMatch(/read_only/i);
      expect(prep.message).toMatch(/write/i);
    }

    // No unauthorized Attempt; HD count unchanged (no auto HD).
    expect(
      (await oa.decisionServices!.decisions.listByProject(projectId)).length,
    ).toBe(hdCountAfterSeal);
  }, 90_000);

  it("HD-P1 — coherent structural ACCEPT_PREPARE HD → PREPARE binds real decisionRefs", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-rhd-p1"),
      idPrefix: "ep08rhdp1",
    });
    const { projectId, oa } = await seedHd(runtime, "p1");
    const analysis = structuralCoherentAnalysis();
    const { decision, subject } = await sealAndAcceptPrepare({
      oa,
      projectId,
      analysis,
    });

    expect(validateDecisionBasis(decision.decisionBasis!)).toBeNull();
    expect(decision.decisionBasis?.sourceDigest).toBe(subject.presentationDigest);
    expect(decision.selectedOptionId).toBe(GENERIC_MISSION_OPTION_ACCEPT_PREPARE);

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
    if (!prep.ok) throw new Error(`${prep.code} ${prep.message}`);
    expect(prep.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(live.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    // Analysis write may be preserved descriptively — not HD authority invention.
    const mutation = (live.contract.inputs as Record<string, unknown>)
      .repositoryMutationDeclared;
    expect(mutation === "write" || mutation == null).toBe(true);
    expect(live.contract.inputs?.intentKind).toBe("other");
    expect(live.contract.inputs?.presentationDigest).toBe(
      subject.presentationDigest,
    );

    // Inspection coherent with durable stamps
    const disclosure = projectExecutionContractInspectionDisclosure(live.contract);
    expect(disclosure.ok).toBe(true);
    if (mutation === "write" && disclosure.ok) {
      expect(disclosure.disclosure.repositoryMutationDeclared).toBe("write");
      const required = requiredFactsOrThrow(live.contract);
      expect(required).toContain("inputs.repositoryMutationDeclared");
    }

    // Structural HD-bound EC is NOT Project-only Delivery CKC-eligible
    const elig = assessProjectOnlyDeliveryCkcEligibility({
      projectId,
      contract: {
        projectId: live.contract.projectId,
        cycleInstanceId: live.contract.cycleInstanceId,
        action: live.contract.action,
        constraints: live.contract.constraints,
        inputs: live.contract.inputs,
      },
    });
    expect(elig.eligible).toBe(false);
  }, 90_000);

  it("HD-N2 — HD without sealed mutation field does not invent write authorization", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-rhd-n2"),
      idPrefix: "ep08rhdn2",
    });
    const { projectId, oa } = await seedHd(runtime, "n2");

    // Structural mission WITHOUT repositoryMutation declaration
    const absentMutation = buildIntentAnalysisFromSolicitedMission({
      objective: "R-HD-01 HD without mutation stamp",
      expectedOutcome: "No invented HD write",
      scope: STRUCT_SCOPE,
      impactSignals: {
        structuralChange: true,
        architectureImpact: true,
      },
    });
    const sealedAnalysis: IntentAnalysisDto = {
      ...absentMutation,
      executionIntent: {
        intentKind: "other",
        scopeIn: [STRUCT_SCOPE],
        requiredCapabilities: [],
      },
    };
    expect(
      (sealedAnalysis as { repositoryMutationDeclared?: unknown })
        .repositoryMutationDeclared,
    ).toBeUndefined();

    const { decision, subject } = await sealAndAcceptPrepare({
      oa,
      projectId,
      analysis: sealedAnalysis,
    });
    expect(
      (decision.decisionBasis?.genericMissionContext as Record<string, unknown>)
        ?.repositoryMutationDeclared,
    ).toBeUndefined();

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: sealedAnalysis,
      decisionId: decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(
      (live.contract.inputs as Record<string, unknown>).repositoryMutationDeclared ??
        null,
    ).toBeNull();
    expect(live.contract.decisionRefs).toEqual([decision.decisionId]);
    expect(live.contract.inputs?.presentationDigest).toBe(
      subject.presentationDigest,
    );

    // HD existence alone ≠ Delivery positive WHAT / Project-only cyc:delivery
    const elig = assessProjectOnlyDeliveryCkcEligibility({
      projectId,
      contract: {
        projectId: live.contract.projectId,
        cycleInstanceId: live.contract.cycleInstanceId,
        action: live.contract.action,
        constraints: live.contract.constraints,
        inputs: live.contract.inputs,
      },
    });
    expect(elig.eligible).toBe(false);
  }, 90_000);

  it("SHE cross-check — deferred structural PREPARE: no ACCEPT_PREPARE HD; mutation preserved on EC", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("ep08-rhd-she"),
      idPrefix: "ep08rhdshe",
    });
    const { projectId, oa } = await seedHd(runtime, "she");
    const analysis = structuralCoherentAnalysis();
    const hdBefore = (
      await oa.decisionServices!.decisions.listByProject(projectId)
    ).length;

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

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(live.contract.decisionRefs ?? []).toEqual([]);
    expect(live.contract.inputs?.sheDeferredStructuralAuthority).toBe(true);
    expect(
      (live.contract.inputs as Record<string, unknown>).repositoryMutationDeclared,
    ).toBe("write");
    expect(
      (await oa.decisionServices!.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);

    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`${she.code} ${she.message}`);
    expect(she.executionAttemptCreated).toBe(false);
    // SHE may create AUTHORIZE_INSPECTED_EXECUTE HD — not ACCEPT_PREPARE
    if (she.humanDecisionCreated) {
      expect(she.humanDecisionOptionId).not.toBe(
        GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      );
    }
    // Operative mutation must not silently disappear across SHE binding
    const afterId =
      she.executionContractId ?? live.contract.executionContractId;
    const after = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: afterId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get after SHE");
    expect(
      (after.contract.inputs as Record<string, unknown>).repositoryMutationDeclared,
    ).toBe("write");
  }, 90_000);
});
