/**
 * M4 spawn-ACK micro-correctif — invoke returns on spawn, not process close.
 * FakeSpawnPrimitive / TestOnly launch port only. No Cursor REAL. No real git.
 * @vitest-environment node
 */
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  NODE_CURSOR_STDOUT_CAP_BYTES,
  NodeCursorProcessRunner,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
} from "./helpers";
import { FakeSpawnPrimitive } from "./support/fakeSpawnAndGit";
import { M4_EVIDENCE, m4ContractInputs } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";
import {
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
} from "@/lib/oa/execution-attempt";

function tempJournalPath(prefix: string): string {
  return path.join(mkdtempSync(path.join(os.tmpdir(), prefix)), "m4-safety.sqlite");
}

async function seedM4ConfirmedContract(
  stack: ReturnType<typeof buildStack>,
): Promise<{ contractId: string; version: number }> {
  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);
  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:oa-spawn-ack",
      idempotencyKey: "idem-xct-oa-spawn-ack",
      action: M4_BOUNDED_RO_ACTION,
      target: M4_BOUNDED_RO_TARGET,
      scope: M4_BOUNDED_RO_SCOPE,
      requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: m4ContractInputs(),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");
  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");
  const confirmationId = await grantContractConfirmation(stack, {
    scope: M4_BOUNDED_RO_SCOPE,
    evidenceId: M4_EVIDENCE,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");
  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
  };
}

describe("M4 spawn ACK ≠ process completion", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("invoke resolves on spawn before close; completion is separate", async () => {
    const fake = new FakeSpawnPrimitive({
      pid: 4242,
      holdOpen: true,
    });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:spawn-ack",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 5_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(true);
    expect(result.processRef).toBe("pid:4242");
    expect(result.observation?.exitCode).toBeNull();

    const running = await runner.observe(result.processRef);
    expect(running?.exitCode).toBeNull();
    expect(running?.realProcessInvoked).toBe(true);

    let completionResolved = false;
    const completion = runner.awaitCompletion(result.processRef).then((obs) => {
      completionResolved = true;
      return obs;
    });
    await Promise.resolve();
    expect(completionResolved).toBe(false);

    fake.lastHandle?.emitClose(0);
    const terminal = await completion;
    expect(completionResolved).toBe(true);
    expect(terminal?.exitCode).toBe(0);
    expect(terminal?.realProcessInvoked).toBe(true);
  });

  it("pre-spawn throw never returns invoked=true", async () => {
    const fake = new FakeSpawnPrimitive({ throwBeforeSpawn: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:pre-throw",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 1_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(false);
  });

  it("error before spawn never returns invoked=true", async () => {
    const fake = new FakeSpawnPrimitive({ errorBeforeSpawn: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:pre-err",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 1_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(false);
  });

  it("post-spawn error keeps invoked=true and completes observation", async () => {
    const fake = new FakeSpawnPrimitive({ pid: 88, holdOpen: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:post-err",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 5_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(true);
    fake.lastHandle?.emitError("fake_after_spawn");
    const terminal = await runner.awaitCompletion(result.processRef);
    expect(terminal?.realProcessInvoked).toBe(true);
    expect(terminal?.exitCode).toBeNull();
  });

  it("timeout after ACK sends SIGTERM and marks timedOut", async () => {
    const fake = new FakeSpawnPrimitive({ pid: 99, holdOpen: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:to-after-ack",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 20,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(true);
    expect(result.observation?.timedOut).toBe(false);
    const terminal = await runner.awaitCompletion(result.processRef);
    expect(terminal?.timedOut).toBe(true);
    expect(fake.lastHandle?.lastSignal).toBe("SIGTERM");
  });

  it("stdout/stderr after ACK remain observable and capped", async () => {
    const fake = new FakeSpawnPrimitive({ pid: 11, holdOpen: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:io-after-ack",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 5_000,
      env: process.env,
    });
    expect(result.observation?.stdout).toBe("");
    const overflow = "y".repeat(NODE_CURSOR_STDOUT_CAP_BYTES + 100);
    fake.lastHandle?.emitStdout(overflow);
    fake.lastHandle?.emitStderr("err-chunk");
    const mid = await runner.observe(result.processRef);
    expect(mid?.stdout.length).toBe(NODE_CURSOR_STDOUT_CAP_BYTES);
    expect(mid?.stderr).toBe("err-chunk");
    expect(mid?.exitCode).toBeNull();
    fake.lastHandle?.emitClose(0);
    const terminal = await runner.awaitCompletion(result.processRef);
    expect(terminal?.stdout.length).toBe(NODE_CURSOR_STDOUT_CAP_BYTES);
    expect(terminal?.stderr).toBe("err-chunk");
    expect(terminal?.exitCode).toBe(0);
  });

  it("StartExecution running/executing while simulated completion still pending", async () => {
    const journalPath = tempJournalPath("m4-spawn-ack-app-");
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: true,
    });
    const fixtureAdapter = new TestExecutionAdapter();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    });
    stack.attempts = attempts as typeof stack.attempts;

    const { contractId, version } = await seedM4ConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:m4-ack-pending",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-ack-pending",
      attemptId: "xat:m4-ack-pending",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:m4-ack-pending",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedContractVersion: version,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.attempt.status).toBe("running");
    expect(launchPort.completionPending.value).toBe(true);

    const processRef = launchPort.calls[0]
      ? `proc:sim:${launchPort.calls[0].attemptId}`
      : "";
    const runningObs = await launchPort.observe(processRef);
    expect(runningObs?.exitCode).toBeNull();

    let completionDone = false;
    const completion = launchPort.awaitCompletion(processRef).then((obs) => {
      completionDone = true;
      return obs;
    });
    await Promise.resolve();
    expect(completionDone).toBe(false);

    const frontier = await journal.findFrontierByAttempt("xat:m4-ack-pending");
    expect(frontier.map((r) => r.kind).sort()).toEqual(["CREATED", "LAUNCHED"]);
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("executing");

    launchPort.resolveSimulatedCompletion(processRef, { exitCode: 0 });
    const terminal = await completion;
    expect(completionDone).toBe(true);
    expect(terminal?.exitCode).toBe(0);
    expect(
      fixtureAdapter.calls.filter((c) => c.kind === "launch"),
    ).toHaveLength(0);
    journal.close();
  });
});
