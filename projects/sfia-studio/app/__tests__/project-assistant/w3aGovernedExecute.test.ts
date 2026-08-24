// @vitest-environment node
/**
 * W3-A targeted correction — actual work / scope / Confirmation / lifecycle.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import {
  assertNotF3FixtureSemantics,
  deriveW3AExecutionEnvelope,
} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import {
  buildActualExecutionWork,
  isHighRiskPolicyOnlyOperationKind,
  projectConfirmationRequirementFromEffects,
  W3A_PRODUCT_SCOPE,
  W3A_PRODUCT_TARGET_WORKSPACE,
} from "@/features/project-assistant/w2/w3aActualExecutionWork";
import {
  buildQualifiedExecutionEffects,
  deriveReversibilityFromEffects,
  projectRequiredAuthorityFromEffects,
  qualifyDefaultW3ATemporaryArtifactEffects,
} from "@/features/project-assistant/w2/w3aQualifiedExecutionEffects";
import {
  EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
  assertUserAmendableExecutionConstraint,
  hasConfirmationConstraintContradiction,
  isExecutionReadyStatus,
  isSystemOwnedExecutionConstraint,
} from "@/lib/oa/execution-contract";
import { amendExecutionContractWithConstraint } from "@/features/project-assistant/w2/amendExecutionContract";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionBasis,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  BOUNDED_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  W3A_BOUNDED_FIXTURE_AGENT_ID,
  W3A_FIXTURE_ALLOWED_SCOPES,
} from "@/lib/vertical-slice-runtime/w3aProductFixtureWiring";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
});

function asWork(
  value: ReturnType<typeof buildActualExecutionWork>,
): import("@/features/project-assistant/w2/w3aActualExecutionWork").ActualExecutionWork {
  if ("ok" in value && value.ok === false) {
    throw new Error(value.message);
  }
  return value as import("@/features/project-assistant/w2/w3aActualExecutionWork").ActualExecutionWork;
}

function sampleBasis(scope?: string): DecisionBasis {
  return {
    sourceType: "trajectory_option",
    sourceRef: "optset:test",
    sourceDigest: "a".repeat(64),
    projectId: "prj:test",
    proposalContext: { lpsId: "lps:test", lpsVersion: 1 },
    trajectoryContext: {
      trajectoryId: "trj:test",
      candidateVersion: 1,
      optionRefs: [GOVERNED_OPTION_REF],
      selectedOptionRef: GOVERNED_OPTION_REF,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    },
    executionBasis: {
      objective: "obj",
      scope,
      expectedOutcome: "outcome",
      stopConditions: ["STOP"],
    },
  };
}

describe("W3-A actual work provenance", () => {
  it("W2 GOVERNED alone does not select temp-artifact", () => {
    const env = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      ),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent:
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
    });
    expect(env.ok).toBe(false);
    if (env.ok) return;
    expect(env.code).toBe("EFFECTS_UNRESOLVED");
  });

  it("W2 BOUNDED alone does not select temp-artifact", () => {
    const env = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(
        "Cadrer un périmètre réversible et resserré, décider, préparer puis inspecter avant de statuer.",
      ),
      selectedOptionRef: BOUNDED_OPTION_REF,
      selectedOptionIntent:
        "Cadrer un périmètre réversible et resserré, décider, préparer puis inspecter avant de statuer.",
      selectedOptionLabel: "Bounded",
      projectObjective: "obj",
    });
    expect(env.ok).toBe(false);
    if (env.ok) return;
    expect(env.code).toBe("EFFECTS_UNRESOLVED");
  });

  it("qualifyDefaultW3ATemporaryArtifactEffects is fail-closed (no W2 fallback)", () => {
    const q = qualifyDefaultW3ATemporaryArtifactEffects({
      projectId: "prj:x",
      scopeIn: "anything",
      trajectoryOptionRef: GOVERNED_OPTION_REF,
    });
    expect(q.ok).toBe(false);
    if (q.ok) return;
    expect(q.code).toBe("EFFECTS_UNRESOLVED");
  });

  it("actual TEMP_ARTIFACT work → product:generate-temporary-artifact + coherent scope IN/OUT", () => {
    const work = buildActualExecutionWork({
      operationKind: "generate-temporary-artifact",
      projectId: "prj:x",
      projectTitle: "Demo",
      objective: "obj",
      qualificationSource: "test",
    });
    const actual = asWork(work);
    expect(actual.scopeIn).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
    expect(actual.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
    expect(actual.scopeOut).toContain("DURABLE_PROJECT_WRITE");
    expect(actual.scopeOut).toContain("GIT_PUSH");
    expect(actual.scopeOut).toContain("REAL");
    // R13 — scopeOut must not forbid the current action/scopeIn effect.
    expect(actual.scopeOut).not.toContain("TEMPORARY_ARTIFACT");
    expect(actual.scopeOut).not.toContain(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
    const env = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      ),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent:
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
      actualWork: actual,
    });
    expect(env.ok).toBe(true);
    if (!env.ok) return;
    expect(env.envelope.action).toBe("product:generate-temporary-artifact");
    expect(env.envelope.scope).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
    expect(env.envelope.scope).not.toContain("décider");
    expect(env.envelope.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
    expect(env.envelope.requiredAuthority).toBe("N1");
    expect(env.envelope.effectConfirmationRequired).toBe(true);
    expect(env.envelope.effectConfirmationLevel).toBe("N1");
    expect(env.envelope.constraints).toContain(
      "EFFECT_CONFIRMATION_REQUIRED:N1",
    );
    expect(env.envelope.constraints).not.toContain(
      EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
    );
  });

  it("read scopeOut forbids mutations; never forbids read itself (R13)", () => {
    const read = asWork(
      buildActualExecutionWork({
        operationKind: "read",
        projectId: "prj:x",
        qualificationSource: "test",
      }),
    );
    expect(read.scopeIn).toBe(W3A_PRODUCT_SCOPE.READ);
    expect(read.scopeOut).toContain("GIT_PUSH");
    expect(read.scopeOut).toContain("DURABLE_PROJECT_WRITE");
    expect(read.scopeOut).not.toContain("READ");
    expect(read.scopeOut).not.toContain(W3A_PRODUCT_SCOPE.READ);
  });

  it("high-risk operationKind is policy-only — not ActualExecutionWork (R15)", () => {
    expect(isHighRiskPolicyOnlyOperationKind("push")).toBe(true);
    expect(isHighRiskPolicyOnlyOperationKind("read")).toBe(false);
  });

  it("distinct actual operations change action/scope without changing W2 option", () => {
    const intent =
      "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.";
    const sim = buildActualExecutionWork({
      operationKind: "simulate",
      projectId: "prj:x",
      qualificationSource: "test",
    });
    const read = buildActualExecutionWork({
      operationKind: "read",
      projectId: "prj:x",
      qualificationSource: "test",
    });
    const simWork = asWork(sim);
    const readWork = asWork(read);
    const envSim = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(intent),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent: intent,
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
      actualWork: simWork,
    });
    const envRead = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(intent),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent: intent,
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
      actualWork: readWork,
    });
    expect(envSim.ok && envRead.ok).toBe(true);
    if (!envSim.ok || !envRead.ok) return;
    expect(envSim.envelope.action).toBe("product:simulate");
    expect(envRead.envelope.action).toBe("product:read");
    expect(envSim.envelope.scope).toBe(W3A_PRODUCT_SCOPE.SIMULATE);
    expect(envRead.envelope.scope).toBe(W3A_PRODUCT_SCOPE.READ);
    expect(envSim.envelope.scope).not.toBe(envRead.envelope.scope);
  });
});

describe("W3-A effects → authority / Confirmation", () => {
  it("READ/SIMULATE/TEMP → N1; WRITE/COMMIT → N2; PUSH → N3", () => {
    expect(
      projectRequiredAuthorityFromEffects({
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
      }),
    ).toMatchObject({ ok: true, requiredAuthority: "N1" });
    expect(
      projectRequiredAuthorityFromEffects({
        effectClass: "generate-temporary-artifact",
        rollbackAvailable: true,
        protectedBoundaries: [],
      }),
    ).toMatchObject({ ok: true, requiredAuthority: "N1" });
    expect(
      projectRequiredAuthorityFromEffects({
        effectClass: "local-write",
        rollbackAvailable: true,
        protectedBoundaries: [],
      }),
    ).toMatchObject({ ok: true, requiredAuthority: "N2" });
    expect(
      projectRequiredAuthorityFromEffects({
        effectClass: "push",
        rollbackAvailable: false,
        protectedBoundaries: [],
      }),
    ).toMatchObject({ ok: true, requiredAuthority: "N3" });
  });

  it("read → no Confirmation; temp weak → N1 Confirmation; commit → N2 Confirmation", () => {
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "read",
        protectedBoundaries: [],
        rollbackAvailable: true,
        weakBoundary: true,
      }),
    ).toMatchObject({ required: false });
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "generate-temporary-artifact",
        protectedBoundaries: [],
        rollbackAvailable: true,
        weakBoundary: true,
      }),
    ).toMatchObject({ required: true, level: "N1" });
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "commit",
        protectedBoundaries: [],
        rollbackAvailable: true,
        weakBoundary: false,
      }),
    ).toMatchObject({ required: true, level: "N2" });
  });

  it("R14: protected floor never downgrades N3; protected raises to min N2", () => {
    for (const effectClass of [
      "push",
      "pull-request",
      "merge",
      "critical-delete",
      "doctrine-change",
      "baseline-promotion",
    ] as const) {
      expect(
        projectConfirmationRequirementFromEffects({
          effectClass,
          protectedBoundaries: ["protected:path"],
          rollbackAvailable: false,
          weakBoundary: false,
        }),
      ).toMatchObject({ required: true, level: "N3" });
    }
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "local-write",
        protectedBoundaries: ["protected:path"],
        rollbackAvailable: true,
        weakBoundary: false,
      }),
    ).toMatchObject({ required: true, level: "N2" });
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "generate-temporary-artifact",
        protectedBoundaries: ["protected:path"],
        rollbackAvailable: true,
        weakBoundary: true,
      }),
    ).toMatchObject({ required: true, level: "N2" });
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "read",
        protectedBoundaries: ["protected:path"],
        rollbackAvailable: true,
        weakBoundary: true,
      }),
    ).toMatchObject({ required: true, level: "N2" });
  });

  it("R16 readiness: confirmed true; marked validated/N1 true; legacy unmarked false", () => {
    expect(
      isExecutionReadyStatus({
        status: "confirmed",
        requiredAuthority: "N1",
        constraints: [],
      }),
    ).toBe(true);
    expect(
      isExecutionReadyStatus({
        status: "validated",
        requiredAuthority: "N1",
        constraints: [EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED],
      }),
    ).toBe(true);
    expect(
      isExecutionReadyStatus({
        status: "validated",
        requiredAuthority: "N1",
        constraints: [],
      }),
    ).toBe(false);
    expect(
      isExecutionReadyStatus({
        status: "validated",
        requiredAuthority: "N2",
        constraints: [EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED],
      }),
    ).toBe(false);
    expect(
      isExecutionReadyStatus({
        status: "validated",
        requiredAuthority: "N1",
        constraints: [
          EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
      }),
    ).toBe(false);
    expect(
      isExecutionReadyStatus({
        status: "confirmation_required",
        requiredAuthority: "N1",
        constraints: ["EFFECT_CONFIRMATION_REQUIRED:N1"],
      }),
    ).toBe(false);
    expect(
      isExecutionReadyStatus({
        status: "confirmed",
        requiredAuthority: "N1",
        constraints: [
          EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
      }),
    ).toBe(false);
    expect(
      hasConfirmationConstraintContradiction([
        EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
        "EFFECT_CONFIRMATION_REQUIRED:N1",
      ]),
    ).toBe(true);
  });

  it("R16 reserved namespaces reject user amendment forgery", () => {
    expect(
      isSystemOwnedExecutionConstraint(EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED),
    ).toBe(true);
    expect(
      isSystemOwnedExecutionConstraint("EXECUTION_CONFIRMATION_EVALUATED:FORGED"),
    ).toBe(true);
    expect(isSystemOwnedExecutionConstraint("EFFECT_CONFIRMATION_REQUIRED")).toBe(
      true,
    );
    expect(isSystemOwnedExecutionConstraint("EFFECT_CONFIRMATION_REQUIRED:N1")).toBe(
      true,
    );
    expect(
      assertUserAmendableExecutionConstraint(
        "  EXECUTION_CONFIRMATION_EVALUATED:NOT_REQUIRED  ",
      ).ok,
    ).toBe(false);
    expect(
      assertUserAmendableExecutionConstraint("EFFECT_CONFIRMATION_REQUIRED:N2").ok,
    ).toBe(false);
    expect(
      assertUserAmendableExecutionConstraint("BORN_STRICTLY_TO_SELECTED_SLICE").ok,
    ).toBe(true);
  });

  it("HumanDecision.reversible is not an input to execution reversibility", () => {
    expect(
      deriveReversibilityFromEffects({
        effectClass: "generate-temporary-artifact",
        rollbackAvailable: true,
      }),
    ).toMatchObject({ ok: true, reversibility: "reversible" });
    expect(
      deriveReversibilityFromEffects({
        effectClass: "generate-temporary-artifact",
        rollbackAvailable: false,
      }),
    ).toMatchObject({ ok: false, code: "REVERSIBILITY_UNRESOLVED" });
  });

  it("fixture allowed scopes are product scopes, not W2 intents", () => {
    expect([...W3A_FIXTURE_ALLOWED_SCOPES]).toEqual([
      W3A_PRODUCT_SCOPE.TEMP_ARTIFACT,
      W3A_PRODUCT_SCOPE.SIMULATE,
    ]);
    expect(W3A_FIXTURE_ALLOWED_SCOPES[0]).not.toContain("décider");
  });
});

describe("W3-A product seam — actual work prepare + Confirmation + Attempt", () => {
  async function decideGoverned(suffix: string) {
    const db = tempProductDbPath(`w3a-fx-${suffix}.sqlite`);
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: `w3afx${suffix}`,
    });
    const seeded = await seedQualifiedProject(runtime, { suffix });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    return { runtime, oa, seeded, decided };
  }

  it("prepare without operationKind → EFFECTS_UNRESOLVED · no EC", async () => {
    const ctx = await decideGoverned("nowork");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("EFFECTS_UNRESOLVED");
  });

  it("temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal", async () => {
    const ctx = await decideGoverned("pos");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare ${prepared.code}`);
    expect(prepared.contract.action).toBe("product:generate-temporary-artifact");
    expect(prepared.contract.action).not.toContain("trajectory");
    expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
    expect(prepared.contract.scope).not.toContain("décider");
    expect(prepared.contract.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
    expect(prepared.contract.requiredAuthority).toBe("N1");
    expect(prepared.contract.status).toBe("confirmation_required");
    expect(prepared.contract.effectConfirmationRequired).toBe(true);
    expect(prepared.contract.effectConfirmationLevel).toBe("N1");
    expect(prepared.contract.constraints.some((c) =>
      c.startsWith("EFFECT_CONFIRMATION_REQUIRED"),
    )).toBe(true);

    const executionContractId = prepared.contract.executionContractId;
    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const blockedWithoutCfm = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(blockedWithoutCfm.ok).toBe(true);
    if (!blockedWithoutCfm.ok) return;
    expect(blockedWithoutCfm.outcome).toBe("BLOCKED");
    expect(blockedWithoutCfm.reasonCode).toBe("confirmation_required");

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(`confirm ${confirmed.code}`);

    const authorized = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error("auth");
    expect(authorized.outcome).toBe("AUTHORIZED");
    expect(ctx.oa.executionAttemptServices.registry.getAgent(W3A_BOUNDED_FIXTURE_AGENT_ID)).toBeTruthy();

    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.phase).toBe("accepted");
    expect(selected.selectedAgentRef).toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);

    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.phase).toBe("running");
    expect(started.attemptId).toBe(selected.attemptId);

    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.phase).toBe("terminal");
    expect(terminal.attemptId).toBe(selected.attemptId);
    expect(terminal.cycleInstanceClosed).toBe(false);
    expect(terminal.realExecution).toBe(false);
  });

  it("read → N1 · Confirmation NOT_REQUIRED marker · validated · SC-CAP (R15/R16)", async () => {
    const ctx = await decideGoverned("read");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "read",
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.contract.requiredAuthority).toBe("N1");
    expect(prepared.contract.status).toBe("validated");
    expect(prepared.contract.effectConfirmationRequired).toBe(false);
    expect(prepared.contract.constraints).toContain(
      EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
    );
    expect(
      isExecutionReadyStatus({
        status: prepared.contract.status,
        requiredAuthority: prepared.contract.requiredAuthority,
        constraints: prepared.contract.constraints,
      }),
    ).toBe(true);
    expect(prepared.contract.action).toBe("product:read");
    expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.READ);

    const executionContractId = prepared.contract.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
    });
    const authorized = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    // Fixture does not support read — truthful SC-CAP / executor insufficiency.
    expect(authorized.outcome).toBe("BLOCKED");
    expect(authorized.reasonCode).toMatch(/executor|capability|insufficient/i);
    const launchBefore = ctx.oa.fixtureAdapter.launchCallCount;
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    expect(ctx.oa.fixtureAdapter.launchCallCount).toBe(launchBefore);
  });

  it("high-risk push operationKind rejected before EC (R15)", async () => {
    const ctx = await decideGoverned("push-reject");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "push" as never,
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("PREPARATION_BLOCKED");
  });

  it("legacy validated/N1 without evaluation marker is not Execute-ready (R16)", async () => {
    const ctx = await decideGoverned("legacy");
    const oa = ctx.oa;
    const scope = W3A_PRODUCT_SCOPE.READ;
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:legacy-n1",
      projectId: ctx.seeded.projectId,
      cycleInstanceId: ctx.seeded.cycleInstanceId,
      decisionRefs: [],
      action: "product:read",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
      scope,
      requiredCapabilities: ["cap:product-read"],
      requiredAuthority: "N1",
      constraints: ["LEGACY_NO_EVAL_MARKER"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:read"],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:legacy-n1",
      correlationId: "cor:w3a:legacy-n1",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        expectedVersion: built.contract.version,
        actor: LOCAL_PILOTE_ACTOR,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("validated");
    expect(
      isExecutionReadyStatus({
        status: validated.contract.status,
        requiredAuthority: validated.contract.requiredAuthority,
        constraints: validated.contract.constraints,
      }),
    ).toBe(false);
  });

  it("legacy validated/N1 cannot become Execute-ready via forged NOT_REQUIRED amendment (R16-B)", async () => {
    const ctx = await decideGoverned("legacy-forge");
    const oa = ctx.oa;
    const scope = W3A_PRODUCT_SCOPE.READ;
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:legacy-forge",
      projectId: ctx.seeded.projectId,
      cycleInstanceId: ctx.seeded.cycleInstanceId,
      decisionRefs: [],
      action: "product:read",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
      scope,
      requiredCapabilities: ["cap:product-read"],
      requiredAuthority: "N1",
      constraints: ["LEGACY_NO_EVAL_MARKER"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:read"],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:legacy-forge",
      correlationId: "cor:w3a:legacy-forge",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        expectedVersion: built.contract.version,
        actor: LOCAL_PILOTE_ACTOR,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    await inspectExecutionContract({
      oa,
      projectId: ctx.seeded.projectId,
      executionContractId: validated.contract.executionContractId,
    });
    const forged = await amendExecutionContractWithConstraint({
      oa,
      projectId: ctx.seeded.projectId,
      executionContractId: validated.contract.executionContractId,
      additionalConstraint: EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
      forceLocalAuthority: true,
    });
    expect(forged.ok).toBe(false);
    if (forged.ok) return;
    expect(forged.code).toBe("CONSTRAINT_SYSTEM_RESERVED");
    expect(
      isExecutionReadyStatus({
        status: validated.contract.status,
        requiredAuthority: validated.contract.requiredAuthority,
        constraints: validated.contract.constraints,
      }),
    ).toBe(false);
  });

  it("Validate/Confirm/Authorization fail-closed on contradictory Confirmation markers (R16-A)", async () => {
    const ctx = await decideGoverned("contradiction");
    const oa = ctx.oa;
    const scope = W3A_PRODUCT_SCOPE.TEMP_ARTIFACT;
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:contradiction",
      projectId: ctx.seeded.projectId,
      cycleInstanceId: ctx.seeded.cycleInstanceId,
      decisionRefs: [],
      action: "product:generate-temporary-artifact",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
      scope,
      requiredCapabilities: ["cap:product-temp-artifact"],
      requiredAuthority: "N1",
      constraints: ["test-only-contradiction-setup"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:temp"],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:contradiction",
      correlationId: "cor:w3a:contradiction",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    await oa.executionContractServices.contracts.save({
      ...built.contract,
      constraints: [
        EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
        "EFFECT_CONFIRMATION_REQUIRED:N1",
      ],
    });
    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        expectedVersion: built.contract.version,
        actor: LOCAL_PILOTE_ACTOR,
      });
    expect(validated.ok).toBe(false);
    if (validated.ok) return;
    expect(validated.error.detailCode).toBe("CONTRACT_INVALID");
  });

  it("envelope rejects trajectory-as-action leakage", () => {
    const work = buildActualExecutionWork({
      operationKind: "generate-temporary-artifact",
      projectId: "prj:x",
      qualificationSource: "test",
    });
    const env = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      ),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent:
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
      actualWork: asWork(work),
    });
    expect(env.ok).toBe(true);
    if (!env.ok) return;
    expect(
      assertNotF3FixtureSemantics({
        action: env.envelope.action,
        target: env.envelope.target,
        scope: env.envelope.scope,
        requiredCapabilities: env.envelope.requiredCapabilities,
      }),
    ).toBeNull();
  });

  it("decisionRefs 0..n still valid", async () => {
    const db = tempProductDbPath("w3a-zeroref4.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w3az4" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "z4" });
    const oa = runtime.oa!;
    const scope = W3A_PRODUCT_SCOPE.TEMP_ARTIFACT;
    const auth2 = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(auth2.ok).toBe(true);
    if (!auth2.ok) return;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:zero-ref-4",
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionRefs: [],
      action: "product:generate-temporary-artifact",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
      scope,
      requiredCapabilities: ["cap:product-temp-artifact"],
      requiredAuthority: "N1",
      constraints: ["NO_HD"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:generate-temporary-artifact"],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:zero-ref-4",
      correlationId: "cor:w3a:zero-ref-4",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth2.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.contract.decisionRefs).toEqual([]);
  });

  it("explicitEffects with wrong target/scope still contract-first", async () => {
    const effects = buildQualifiedExecutionEffects({
      effectClass: "generate-temporary-artifact",
      projectId: "prj:x",
      scopeIn: W3A_PRODUCT_SCOPE.TEMP_ARTIFACT,
      rollbackAvailable: true,
      rollbackDescription: "cleanup",
      qualificationSource: "test",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
    });
    expect(effects.ok).toBe(true);
    if (!effects.ok) return;
    expect(effects.effects.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
  });
});
