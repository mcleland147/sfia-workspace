/**
 * B2 — Generic Product Cursor completion (awaitIfPending + fail-closed).
 * ZERO REAL — TestOnly fake boundary only.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  settleDeterministicProductCursorFailure,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const APP = path.resolve(__dirname, "../..");

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
});

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

async function authorizeClarifyMission(suffix: string) {
  const db = tempProductDbPath(`b2-gen-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `b2g${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, {
    suffix,
    reservations: [
      { statement: `B2 réserve ${suffix}`, blocking: true },
    ],
  });
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
    selectedOptionRef: CLARIFY_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(`prepare ${prepared.code}`);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  if (prepared.contract.effectConfirmationRequired) {
    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(confirmed.code);
  }
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok).toBe(true);
  if (!authorized.ok) throw new Error("auth");
  expect(authorized.outcome).toBe("AUTHORIZED");
  const live =
    (await oa.executionContractServices.contracts.findById(executionContractId)) ??
    prepared.contract;
  const inputs = (live as { inputs?: Record<string, unknown> }).inputs ?? {};
  const repositoryRef =
    typeof inputs.repositoryBindingIdentity === "string"
      ? inputs.repositoryBindingIdentity
      : typeof inputs.repositoryRef === "string"
        ? inputs.repositoryRef
        : "acme/w2-harness";
  const baseSha =
    typeof inputs.baseHeadSha === "string"
      ? inputs.baseHeadSha
      : W2_TEST_PINNED_BASE_HEAD_SHA;
  return {
    oa,
    projectId: seeded.projectId,
    executionContractId,
    contract: live as typeof prepared.contract,
    repositoryRef,
    baseSha,
  };
}

describe("B2 generic Cursor completion", () => {
  it("wiring — Product Complete awaits; CURSOR_REPORT_PENDING preserved; no fixture fallback", () => {
    const governedSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/governedExecuteAuthorizedContract.ts",
      ),
      "utf8",
    );
    const actionsSrc = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    const roSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts",
      ),
      "utf8",
    );
    expect(actionsSrc).toMatch(/awaitIfPending:\s*true/);
    expect(governedSrc).toMatch(/completeBoundedReadOnlyLaunch/);
    expect(governedSrc).toMatch(/CURSOR_REPORT_PENDING/);
    expect(governedSrc).toMatch(/pas de fallback fixture/);
    expect(roSrc).toMatch(/awaitIfPending === true/);
  });

  it("B1/B9/B10 — spawn ACK running; pending without await; no second spawn", async () => {
    const ctx = await authorizeClarifyMission("pend");
    const port = launchPortOf(ctx.oa);
    const launchBefore = port.launchCallCount;
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.phase).toBe("running");
    expect(port.launchCallCount).toBe(launchBefore + 1);

    const pending = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
      awaitIfPending: false,
    });
    expect(pending.ok).toBe(false);
    if (pending.ok) return;
    expect(pending.code).toBe("CURSOR_REPORT_PENDING");
    expect(port.launchCallCount).toBe(launchBefore + 1);
  });

  it("B2/B3 — Complete awaits pending → exit 0 / succeeded", async () => {
    const ctx = await authorizeClarifyMission("ok");
    const port = launchPortOf(ctx.oa);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.phase).toBe("running");

    const processRef = `proc:sim:${started.attemptId}`;
    setTimeout(() => {
      port.resolveSimulatedCompletion(processRef, {
        exitCode: 0,
        timedOut: false,
        stdout: JSON.stringify({
          schemaVersion: "oa.cursor-execution-report.1",
          reportId: "rpt:cursor:b2ok",
          attemptId: started.attemptId,
          executionContractId: ctx.executionContractId,
          repositoryRef: ctx.repositoryRef,
          baseSha: ctx.baseSha,
          status: "succeeded",
          authorizedEffectsExecuted: [],
          missionResult: {
            diagnosticSummary: "Réserves clarifiées pour B2.",
            recommendedNextProductStep: "Préparer un EC ciblé.",
          },
        }),
        stderr: "",
        durationMs: 1,
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.attemptStatus).toBe("succeeded");
    expect(port.launchCallCount).toBe(1);
  });

  it("B4 — exit non-zero → failed", async () => {
    const ctx = await authorizeClarifyMission("fail");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    const settled = await settleDeterministicProductCursorFailure({
      oa: ctx.oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.attemptStatus).toBe("failed");
  });

  it("B5 — timeout via await completion timedOut", async () => {
    const ctx = await authorizeClarifyMission("to");
    const port = launchPortOf(ctx.oa);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;

    const processRef = `proc:sim:${started.attemptId}`;
    setTimeout(() => {
      port.resolveSimulatedCompletion(processRef, {
        exitCode: null,
        timedOut: true,
        stdout: "",
        stderr: "SIMULATED_TIMEOUT",
        durationMs: 1,
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(["timeout", "failed"]).toContain(terminal.attemptStatus);
  });

  it("B6/B7 source — awaitCompletion + LAUNCHED frontier required (fail-closed codes)", () => {
    const roSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts",
      ),
      "utf8",
    );
    expect(roSrc).toMatch(/REAL_AWAIT_COMPLETION_REQUIRED/);
    expect(roSrc).toMatch(/REAL_LAUNCH_FRONTIER/);
  });

  it("B8 — settle success helper still works without second spawn", async () => {
    const ctx = await authorizeClarifyMission("settle");
    const port = launchPortOf(ctx.oa);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    const before = port.launchCallCount;
    const settled = await settleDeterministicProductCursorSuccess({
      oa: ctx.oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    expect(port.launchCallCount).toBe(before);
  });
});
