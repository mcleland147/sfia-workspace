// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — prepare-time contract source
 * grounding + structured mission semantics on the Product path.
 *
 * Deterministic: injected grounding reader, no Nora session sqlite,
 * no model call, no REAL, no StudyFlow mutation.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { resolveContractSourceGroundingForPrepare } from "@/features/project-assistant/w2/resolveContractSourceGrounding";
import {
  deriveMissionAcceptanceCriteria,
  deriveMissionReportRequirements,
  deriveMissionValidationPlan,
  MISSION_VALIDATION_NO_MUTATING_EFFECT,
} from "@/features/project-assistant/w2/missionContractSemanticInputs";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import type { ProductMissionFields } from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import {
  assertContractSourceGroundingHonest,
  assertCursorPromptParityWithInspection,
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY,
  CONTRACT_SOURCE_GROUNDING_INPUT_KEY,
  CONTRACT_VALIDATION_PLAN_INPUT_KEY,
  parseContractAcceptanceCriteria,
  parseContractSourceGrounding,
  projectExecutionContractToCursorPrompt,
} from "@/lib/oa/execution-contract";
import { assertStudioCursorRealOffForTests } from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const READ_PATH = "docs/functional-design.md";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  assertStudioCursorRealOffForTests();
});

afterEach(() => {
  cleanupW2TempDirs();
  assertStudioCursorRealOffForTests();
});

async function prepareClarifyContract(
  idPrefix: string,
  sourceGroundingReader?: Parameters<
    typeof prepareExecutionContractFromW2Decision
  >[0]["sourceGroundingReader"],
) {
  const db = tempProductDbPath(`${idPrefix}.sqlite`);
  const runtime = bootW2Runtime({ productDbPath: db, idPrefix });
  const seeded = await seedQualifiedProject(runtime, { suffix: idPrefix });
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  if (!qualification.ok) throw new Error("qualification");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: CLARIFY_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
    forceLocalAuthority: true,
  });
  if (!decided.ok) throw new Error("decide");
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: await currentF2Context(runtime, seeded.projectId),
    forceLocalAuthority: true,
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    ...(sourceGroundingReader ? { sourceGroundingReader } : {}),
  });
  return { prepared, oa, projectId: seeded.projectId };
}

describe("prepare — contract source grounding is attached honestly", () => {
  it("attaches UNAVAILABLE grounding when no durable reader is wired", async () => {
    const { prepared, oa } = await prepareClarifyContract("nelc-noreader");
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: prepared.contract.executionContractId },
    );
    if (!loaded.ok) throw new Error("load");
    const grounding = parseContractSourceGrounding(
      loaded.contract.inputs?.[CONTRACT_SOURCE_GROUNDING_INPUT_KEY],
    );
    expect(grounding).not.toBeNull();
    // Clarify missions declare durable object refs, not repository documents.
    expect(grounding!.honesty).toBe("NOT_APPLICABLE");
    expect(grounding!.readRefs).toEqual([]);
    expect(grounding!.repositoryIdentity).not.toBeNull();
    expect(grounding!.repositoryHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
  });

  it("folds materially read repository paths into EC sourcesToRead + grounding", async () => {
    const { prepared, oa } = await prepareClarifyContract(
      "nelc-grounded",
      async () => [
        {
          pathOrRef: READ_PATH,
          coverage: "full",
          origin: "remembered_prior_read",
          rememberedAtIso: "2026-09-01T00:00:00.000Z",
          cycleInstanceId: null,
          repositoryHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        },
        {
          pathOrRef: "docs/only-skimmed.md",
          coverage: "partial",
          origin: "remembered_prior_read",
          rememberedAtIso: "2026-09-01T00:00:00.000Z",
          cycleInstanceId: null,
          repositoryHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        },
      ],
    );
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: prepared.contract.executionContractId },
    );
    if (!loaded.ok) throw new Error("load");
    const inputs = loaded.contract.inputs ?? {};
    const grounding = parseContractSourceGrounding(
      inputs[CONTRACT_SOURCE_GROUNDING_INPUT_KEY],
    );
    expect(grounding!.readRefs.map((r) => r.pathOrRef)).toEqual([READ_PATH]);
    expect(inputs.sourcesToRead).toContain(READ_PATH);
    // Partial reads are never promoted to declared, grounded sources.
    expect(inputs.sourcesToRead).not.toContain("docs/only-skimmed.md");
  });

  it("attaches structured acceptance criteria / validation plan / report requirements", async () => {
    const { prepared, oa } = await prepareClarifyContract("nelc-criteria");
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: prepared.contract.executionContractId },
    );
    if (!loaded.ok) throw new Error("load");
    const inputs = loaded.contract.inputs ?? {};
    const criteria = parseContractAcceptanceCriteria(
      inputs[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY],
    );
    expect(criteria.length).toBeGreaterThan(0);
    // Every criterion binds an exact declared expectedOutput.
    for (const criterion of criteria) {
      expect(loaded.contract.expectedOutputs).toContain(
        criterion.expectedOutputRef,
      );
    }
    expect(criteria.some((c) => c.kind === "mission_diagnostic")).toBe(true);
    expect(criteria.some((c) => c.kind === "mission_next_step")).toBe(true);
    expect(inputs[CONTRACT_VALIDATION_PLAN_INPUT_KEY]).toEqual([
      MISSION_VALIDATION_NO_MUTATING_EFFECT,
    ]);
    expect(
      (inputs[CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY] as string[]).length,
    ).toBeGreaterThan(0);
  });

  it("disclosure and Cursor prompt stay in parity for the prepared contract", async () => {
    const { prepared, oa } = await prepareClarifyContract("nelc-parity");
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: prepared.contract.executionContractId },
    );
    if (!loaded.ok) throw new Error("load");
    const disclosure = prepared.contract.inspectionDisclosure;
    expect(disclosure.sourceGrounding?.honesty).toBe("NOT_APPLICABLE");
    expect(disclosure.acceptanceCriteria?.length).toBeGreaterThan(0);

    const projection = projectExecutionContractToCursorPrompt({
      contract: loaded.contract,
      attemptId: "xat:nelc-parity",
    });
    expect(assertCursorPromptParityWithInspection({ projection }).ok).toBe(true);
    for (const criterion of disclosure.acceptanceCriteria ?? []) {
      expect(projection.promptText).toContain(criterion.criterionId);
    }
    expect(projection.promptText).toContain("honnêteté du grounding:");
  });

  it("grounding changes the durable semanticFingerprint", async () => {
    const plain = await prepareClarifyContract("nelc-fp-a");
    const grounded = await prepareClarifyContract("nelc-fp-b", async () => [
      {
        pathOrRef: READ_PATH,
        coverage: "full",
        origin: "remembered_prior_read",
        rememberedAtIso: "2026-09-01T00:00:00.000Z",
        cycleInstanceId: null,
        repositoryHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      },
    ]);
    expect(plain.prepared.ok && grounded.prepared.ok).toBe(true);
    if (!plain.prepared.ok || !grounded.prepared.ok) throw new Error("prepare");
    expect(plain.prepared.contract.semanticFingerprint).not.toBe(
      grounded.prepared.contract.semanticFingerprint,
    );
  });

  it("a failing durable reader degrades to UNAVAILABLE, never to grounded", async () => {
    const grounding = await resolveContractSourceGroundingForPrepare({
      projectId: "prj:x",
      cycleInstanceId: "cyc:x",
      declaredSources: [READ_PATH],
      reader: async () => {
        throw new Error("session unreadable");
      },
    });
    expect(grounding.honesty).toBe("UNAVAILABLE");
    expect(assertContractSourceGroundingHonest(grounding).ok).toBe(false);
  });

  it("an unread declared repository source is never silently contract-ready", async () => {
    const grounding = await resolveContractSourceGroundingForPrepare({
      projectId: "prj:x",
      cycleInstanceId: "cyc:x",
      declaredSources: [READ_PATH],
      // Coverage exists for another file only — search ≠ read for READ_PATH.
      reader: async () => [
        {
          pathOrRef: "docs/other.md",
          coverage: "full",
          origin: "remembered_prior_read",
          rememberedAtIso: null,
          cycleInstanceId: null,
          repositoryHeadSha: null,
        },
      ],
    });
    expect(grounding.honesty).toBe("UNREAD");
    const honest = assertContractSourceGroundingHonest(grounding);
    expect(honest.ok).toBe(false);
    if (honest.ok) throw new Error("expected fail-closed");
    expect(honest.code).toBe("SOURCE_GROUNDING_UNREAD");
  });
});

describe("mission semantic derivation is pure and bound to declared outputs", () => {
  const mission: ProductMissionFields = {
    objective: "O",
    expectedOutputs: [
      "Diagnostic utilisable des preuves manquantes / expected outcomes non tenus",
      "Prochaine étape produit recommandée (sans relance automatique)",
      "Trace d'inspection Attempt xat:1 / Evidence ev:1 / ReviewBundle rb:1",
      "Un livrable lisible par le Pilote",
    ],
    scopeIn: [],
    scopeOut: [],
    stopConditions: [],
    evidenceRequirements: [],
    sourcesToRead: [],
    contextNotes: [],
    authorizesMutatingEffects: false,
    recoveryAttemptId: null,
    recoveryEvidenceId: null,
    recoveryReviewBundleId: null,
    recoveryExecutionContractId: null,
    productOutcome: null,
  };

  it("maps known mission outputs to deterministic kinds and the rest to manual_review", () => {
    const criteria = deriveMissionAcceptanceCriteria(mission);
    expect(criteria.map((c) => c.kind)).toEqual([
      "mission_diagnostic",
      "mission_next_step",
      "mission_trace",
      "manual_review",
    ]);
    expect(new Set(criteria.map((c) => c.criterionId)).size).toBe(4);
  });

  it("validation plan tracks the mission perimeter", () => {
    expect(deriveMissionValidationPlan(mission)).toEqual([
      MISSION_VALIDATION_NO_MUTATING_EFFECT,
    ]);
    expect(
      deriveMissionValidationPlan({
        ...mission,
        authorizesMutatingEffects: true,
      }),
    ).toEqual([]);
    expect(deriveMissionReportRequirements().length).toBeGreaterThan(0);
  });
});
