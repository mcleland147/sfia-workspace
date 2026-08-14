/**
 * M4 REAL-OFF crash replay — durable journal across process restart.
 * Uses TestOnlyRealExecutionLaunchPort (SIMULATED ACK) — never enables production REAL flag.
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
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  type RealLaunchSafetyJournalPort,
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
  type Stack,
} from "./helpers";
import { M4_EVIDENCE, m4ContractInputs } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "m4-safety.sqlite");
}

async function seedM4ConfirmedContract(
  stack: Stack,
  overrides: { executionContractId?: string; idempotencyKey?: string } = {},
): Promise<{ contractId: string; version: number }> {
  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      executionContractId: overrides.executionContractId ?? "xct:oa-001",
      idempotencyKey: overrides.idempotencyKey ?? "idem-xct-oa-001",
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

describe("M4 REAL-OFF crash replay", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });

  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("restart with same journal path + new MemoryAttempt store refuses second launch", async () => {
    const journalPath = tempJournalPath("m4-replay-");
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const fixtureAdapter = new TestExecutionAdapter();

    // --- Process 1: simulated ACK then crash before LAUNCHED ---
    const journal1 = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    let failAppend = true;
    const wrappingJournal = (
      base: SqliteRealLaunchSafetyJournal,
    ): RealLaunchSafetyJournalPort => ({
      persistGateDGrant: (i) => base.persistGateDGrant(i),
      findGateDGrant: (id) => base.findGateDGrant(id),
      findActiveGateDGrantForAttempt: (id) =>
        base.findActiveGateDGrantForAttempt(id),
      consumeGateDAndAppendCreated: (i) =>
        base.consumeGateDAndAppendCreated(i),
      appendLaunched: async (i) => {
        if (failAppend) {
          failAppend = false;
          throw new Error("process1_crash_before_launched");
        }
        return base.appendLaunched(i);
      },
      findFrontierByAttempt: (id) => base.findFrontierByAttempt(id),
      findFrontierByIdentity: (id) => base.findFrontierByIdentity(id),
      hasAmbiguousFrontier: (id) => base.hasAmbiguousFrontier(id),
      reconcileDispositionForIdentity: (id) =>
        base.reconcileDispositionForIdentity(id),
      hasKindForAttempt: (id, k) => base.hasKindForAttempt(id, k),
    });

    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const stack1 = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    const attempts1 = createTestExecutionAttemptServices({
      decisionServices: stack1.decisions,
      executionContractServices: stack1.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: wrappingJournal(journal1),
      },
      fixedNowIso: NOW,
    });
    stack1.attempts = attempts1 as typeof stack1.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack1);
    const selected = await selectStandardAgent(stack1, {
      attemptId: "xat:m4-replay",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await stack1.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-replay",
      attemptId: "xat:m4-replay",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const crashed = await stack1.attempts.startExecution.execute({
      attemptId: "xat:m4-replay",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(crashed.ok).toBe(false);
    if (!crashed.ok) {
      expect(crashed.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(launchPort.launchCallCount).toBe(1);

    const frontierBeforeRestart =
      await journal1.findFrontierByAttempt("xat:m4-replay");
    expect(frontierBeforeRestart.some((r) => r.kind === "CREATED")).toBe(true);
    expect(frontierBeforeRestart.some((r) => r.kind === "LAUNCHED")).toBe(
      false,
    );
    journal1.close();

    // --- Process 2: new MemoryAttempt store, same journal file ---
    const journal2 = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const stack2 = buildStack({
      agents: [m4Agent],
      adapter: new TestExecutionAdapter(),
    });
    const attempts2 = createTestExecutionAttemptServices({
      decisionServices: stack2.decisions,
      executionContractServices: stack2.execution,
      agents: [m4Agent],
      adapter: stack2.adapter as TestExecutionAdapter,
      realBoundary: { launchPort, safetyJournal: journal2 },
      fixedNowIso: NOW,
    });
    stack2.attempts = attempts2 as typeof stack2.attempts;

    const seeded2 = await seedM4ConfirmedContract(stack2, {
      executionContractId: "xct:oa-replay-2",
      idempotencyKey: "idem-xct-replay-2",
    });
    const selected2 = await selectStandardAgent(stack2, {
      attemptId: "xat:m4-replay",
      executionContractId: seeded2.contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected2.ok).toBe(true);

    const durable = await journal2.findFrontierByAttempt("xat:m4-replay");
    expect(durable.some((r) => r.kind === "CREATED")).toBe(true);
    expect(durable.some((r) => r.kind === "LAUNCHED")).toBe(false);

    const retry = await stack2.attempts.startExecution.execute({
      attemptId: "xat:m4-replay",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect([
        "LAUNCH_RECONCILIATION_REQUIRED",
        "GATE_D_REQUIRED",
      ]).toContain(retry.error.detailCode);
    }
    expect(launchPort.launchCallCount).toBe(1);
    journal2.close();
  });
});
