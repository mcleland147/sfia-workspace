/**
 * B1 corrective — Product mission Evidence chain end-to-end (ZERO REAL).
 * Complete → Mission Evidence (execution_attempt + verified) → W3-B frozen RB
 * → ContractResult pass → Product SUCCESS → W3-C.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { MISSION_RESULT_RULE_REF } from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  canonicalizeMissionResultPayload,
  digestMissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  missionResultEvidenceIdForAttempt,
  persistMissionResultPayload,
} from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
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

type AuthorizedMission = {
  oa: NonNullable<
    ReturnType<typeof bootW2Runtime>["oa"]
  >;
  projectId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
  refsRoot: string;
};

async function authorizeClarifyMission(suffix: string): Promise<AuthorizedMission> {
  const db = tempProductDbPath(`b1-e2e-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `b1e${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, {
    suffix,
    reservations: [{ statement: `B1 E2E réserve ${suffix}`, blocking: true }],
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
    repositoryRef,
    baseSha,
    refsRoot: path.join(path.dirname(db), "mission-result-refs"),
  };
}

function missionReportStdout(input: {
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
  forbiddenEffects?: string[];
  omitMissionResult?: boolean;
}): string {
  const body: Record<string, unknown> = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: "rpt:cursor:b1e2e",
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: input.forbiddenEffects ?? [],
  };
  if (!input.omitMissionResult) {
    body.missionResult = {
      diagnosticSummary: "Réserves bloquantes clarifiées (E2E).",
      recommendedNextProductStep:
        "Préparer un EC ciblé sans exécution automatique.",
    };
  }
  return JSON.stringify(body);
}

async function startAndCompleteMission(
  ctx: AuthorizedMission,
  opts?: {
    omitMissionResult?: boolean;
    repositoryRef?: string;
    baseSha?: string;
    forbiddenEffects?: string[];
  },
) {
  const port = launchPortOf(ctx.oa);
  const selected = await governedExecuteSelectAgent({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId: ctx.executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error("select");
  expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  const started = await governedExecuteStart({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error("start");
  expect(started.phase).toBe("running");

  setTimeout(() => {
    port.resolveSimulatedCompletion(`proc:sim:${started.attemptId}`, {
      exitCode: 0,
      timedOut: false,
      stdout: missionReportStdout({
        attemptId: started.attemptId,
        executionContractId: ctx.executionContractId,
        repositoryRef: opts?.repositoryRef ?? ctx.repositoryRef,
        baseSha: opts?.baseSha ?? ctx.baseSha,
        omitMissionResult: opts?.omitMissionResult,
        forbiddenEffects: opts?.forbiddenEffects,
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
    missionResultRefsRoot: ctx.refsRoot,
  });

  return { port, started, terminal };
}

describe("B1 Product mission Evidence chain E2E", () => {
  it("E2E — Complete → verified Mission Evidence → W3-B RB → CE pass → Product SUCCESS → W3-C", async () => {
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBeUndefined();
    const ctx = await authorizeClarifyMission("pass");
    const { port, started, terminal } = await startAndCompleteMission(ctx);
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.attemptStatus).toBe("succeeded");
    expect(port.launchCallCount).toBe(1);

    const missionEvidenceId = missionResultEvidenceIdForAttempt(
      started.attemptId,
    );
    const missionEvidence =
      await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
        missionEvidenceId,
      );
    expect(missionEvidence).toBeTruthy();
    expect(missionEvidence!.sourceKind).toBe("execution_attempt");
    expect(missionEvidence!.status).toBe("verified");
    expect(missionEvidence!.bindings.projectId).toBe(ctx.projectId);
    expect(missionEvidence!.bindings.executionContractId).toBe(
      ctx.executionContractId,
    );
    expect(missionEvidence!.bindings.executionAttemptId).toBe(
      started.attemptId,
    );
    expect(missionEvidence!.technicalResultRef).toBeTruthy();
    expect(missionEvidence!.digest?.startsWith("sha256:")).toBe(true);
    expect(fs.existsSync(missionEvidence!.location!)).toBe(true);

    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(true);
    expect(materialized.product.evidenceId).toBe(missionEvidenceId);
    expect(materialized.product.reviewBundleId).toMatch(/^rb:w3b:/);

    const rb = await ctx.oa.evidenceReviewServices!.reviewBundleReader.findById(
      materialized.product.reviewBundleId!,
    );
    expect(rb?.frozenAt).toBeTruthy();
    expect(
      rb?.frozenEvidenceSnapshots?.some(
        (s) => s.evidenceId === missionEvidenceId,
      ),
    ).toBe(true);

    const ce = materialized.product.claimEvaluationId
      ? await ctx.oa.evidenceReviewServices!.claimEvaluationReader.findById(
          materialized.product.claimEvaluationId,
        )
      : null;
    expect(ce?.status).toBe("pass");
    expect(ce?.ruleRef).toBe(MISSION_RESULT_RULE_REF);

    expect(materialized.postEvidence?.ok).toBe(true);
    expect(port.launchCallCount).toBe(1);
  });

  it("N1 — succeeded without missionResult → Product not PASS", async () => {
    const ctx = await authorizeClarifyMission("n1");
    const { started, terminal } = await startAndCompleteMission(ctx, {
      omitMissionResult: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.attemptStatus).toBe("succeeded");
    const missionEvidence =
      await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
        missionResultEvidenceIdForAttempt(started.attemptId),
      );
    expect(missionEvidence).toBeNull();
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).not.toBe("SUCCESS");
  });

  it("N2 — tamper payload after verify → NOT_PROVEN / no Product PASS", async () => {
    const ctx = await authorizeClarifyMission("n2");
    const { started, terminal } = await startAndCompleteMission(ctx);
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    const missionEvidenceId = missionResultEvidenceIdForAttempt(
      started.attemptId,
    );
    const before =
      await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
        missionEvidenceId,
      );
    expect(before?.status).toBe("verified");
    fs.writeFileSync(
      before!.location!,
      JSON.stringify({ tampered: true }),
      "utf8",
    );
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).not.toBe("SUCCESS");
  });

  it("N6 — repository mismatch → Complete reject", async () => {
    const ctx = await authorizeClarifyMission("n6");
    const { terminal } = await startAndCompleteMission(ctx, {
      repositoryRef: "evil/other-repo",
    });
    expect(terminal.ok).toBe(false);
    if (terminal.ok) return;
    expect(terminal.code).toBe("REPORT_REPOSITORY_MISMATCH");
  });

  it("N7 — baseSha mismatch → Complete reject", async () => {
    const ctx = await authorizeClarifyMission("n7");
    const { terminal } = await startAndCompleteMission(ctx, {
      baseSha: "b".repeat(40),
    });
    expect(terminal.ok).toBe(false);
    if (terminal.ok) return;
    expect(terminal.code).toBe("REPORT_BASE_SHA_MISMATCH");
  });

  it("N8 — forbidden authorized effect → Complete ok but Product not PASS", async () => {
    const ctx = await authorizeClarifyMission("n8");
    const { started, terminal } = await startAndCompleteMission(ctx, {
      forbiddenEffects: ["filesystem.modify"],
    });
    // Attempt may succeed technically; mission semantic rejects forbidden effects.
    if (!terminal.ok) {
      expect(terminal.code).toMatch(/MISSION|FORBIDDEN|EFFECT|POST_/);
      return;
    }
    expect(terminal.attemptStatus).toBe("succeeded");
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).not.toBe("SUCCESS");
  });
});

describe("B1 payload canonical persist", () => {
  it("persist body equals canonicalize (digest match after write)", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mission-canon-"));
    const payload = {
      schemaVersion: "oa.mission-result.1" as const,
      reportId: "rpt:x",
      attemptId: "xat:canon:1",
      executionContractId: "xct:canon:1",
      repositoryRef: "acme/x",
      baseSha: "a".repeat(40),
      status: "succeeded" as const,
      diagnosticSummary: "  diag  ",
      recommendedNextProductStep: "  next  ",
      authorizedEffectsExecuted: [] as string[],
    };
    const persisted = persistMissionResultPayload({
      refsRoot: dir,
      attemptId: payload.attemptId,
      payload,
    });
    expect(persisted.ok).toBe(true);
    if (!persisted.ok) return;
    const onDisk = fs.readFileSync(persisted.absolutePath, "utf8");
    expect(onDisk).toBe(canonicalizeMissionResultPayload(payload));
    expect(persisted.digest).toBe(digestMissionResultPayload(payload));
    fs.rmSync(dir, { recursive: true, force: true });
  });
});
