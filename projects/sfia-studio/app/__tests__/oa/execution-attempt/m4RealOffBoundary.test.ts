/**
 * M4 Delivery REAL-OFF — Gate D / CREATED / specialized launch boundary.
 * Positive StartExecution paths use TestOnlyRealExecutionLaunchPort (SIMULATED ACK).
 * Production gateway tested only for OFF/reject paths — never SFIA_STUDIO_CURSOR_REAL=1.
 * @vitest-environment node
 */
import { readdirSync, readFileSync, mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  CursorCliLaunchGateway,
  DisabledRealProcessRunner,
  isInjectableExecutionAdapter,
  isStudioCursorRealEnabled,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  type RealLaunchSafetyJournalPort,
} from "@/lib/oa/execution-attempt";
import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
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
  seedRunningAttempt,
  type Stack,
} from "./helpers";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import { FakeRealExecutionWorkspacePort } from "./support/fakeSpawnAndGit";
import { M4_EVIDENCE, m4ContractInputs } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

const APP_LIB_OA = path.resolve(__dirname, "../../../lib/oa");

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "m4-safety.sqlite");
}

function scanForOps1Imports(root: string): string[] {
  const hits: string[] = [];
  const walk = (dir: string) => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.(ts|tsx|js|mjs|cjs)$/.test(ent.name)) continue;
      const text = readFileSync(full, "utf8");
      if (
        text.includes("@/lib/ops1") ||
        text.includes('from "@/lib/ops1') ||
        text.includes("from '@/lib/ops1") ||
        /from\s+["'].*\/lib\/ops1/.test(text)
      ) {
        hits.push(path.relative(root, full));
      }
    }
  };
  walk(root);
  return hits;
}

/** Confirmed M4 contract with contract-bound inputs.baseHeadSha. */
async function seedM4ConfirmedContract(
  stack: Stack,
  overrides: {
    executionContractId?: string;
    idempotencyKey?: string;
    inputs?: Record<string, unknown>;
  } = {},
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
      inputs: overrides.inputs ?? m4ContractInputs(),
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

function wireM4Stack(input: {
  journalPath: string;
  launchPort?: TestOnlyRealExecutionLaunchPort;
  journal?: RealLaunchSafetyJournalPort;
}) {
  const launchPort = input.launchPort ?? new TestOnlyRealExecutionLaunchPort();
  const fixtureAdapter = new TestExecutionAdapter();
  const ownedJournal =
    input.journal == null
      ? new SqliteRealLaunchSafetyJournal({ databasePath: input.journalPath })
      : null;
  const safetyJournal = input.journal ?? ownedJournal!;
  const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
  const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
  const attempts = createTestExecutionAttemptServices({
    decisionServices: stack.decisions,
    executionContractServices: stack.execution,
    agents: [m4Agent],
    adapter: fixtureAdapter,
    realBoundary: { launchPort, safetyJournal },
    fixedNowIso: NOW,
  });
  stack.attempts = attempts as typeof stack.attempts;
  return {
    stack,
    launchPort,
    fixtureAdapter,
    safetyJournal,
    close: () => {
      ownedJournal?.close();
    },
  };
}

describe("M4 REAL-OFF boundary", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    expect(process.env.OPS1_CURSOR_REAL).not.toBe("1");
  });

  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("fixture regression still starts via TestExecutionAdapter", async () => {
    const stack = buildStack();
    const { attemptId } = await seedRunningAttempt(stack);
    const attempt = await stack.attempts.attempts.findById(attemptId);
    expect(attempt?.status).toBe("running");
    expect(
      (stack.adapter as TestExecutionAdapter).calls.filter(
        (c) => c.kind === "launch",
      ).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("rejects CursorCliLaunchGateway as InjectableExecutionAdapter", () => {
    const gateway = new CursorCliLaunchGateway({
      processRunner: new DisabledRealProcessRunner(),
      workspacePort: new FakeRealExecutionWorkspacePort(),
    });
    expect(isInjectableExecutionAdapter(gateway)).toBe(false);
    expect(() =>
      createTestExecutionAttemptServices({
        // @ts-expect-error intentional hostile inject
        adapter: gateway,
        decisionServices: {} as never,
        executionContractServices: {} as never,
      }),
    ).toThrow(/adapter_not_allowed/);
  });

  it("static scan: no ops1 imports under oa execution-attempt", () => {
    const hits = scanForOps1Imports(
      path.join(APP_LIB_OA, "execution-attempt"),
    );
    expect(hits).toEqual([]);
  });

  it("Gate D grant then start: CREATED is journaled before simulated launch", async () => {
    const journalPath = tempJournalPath("m4-created-before-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const inner = new TestOnlyRealExecutionLaunchPort();
    const launchPort: TestOnlyRealExecutionLaunchPort = Object.assign(
      Object.create(Object.getPrototypeOf(inner)),
      inner,
      {
        async launch(
          request: Parameters<TestOnlyRealExecutionLaunchPort["launch"]>[0],
        ) {
          const frontier = await journal.findFrontierByAttempt(
            request.attemptId,
          );
          expect(frontier.some((r) => r.kind === "CREATED")).toBe(true);
          expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(false);
          return inner.launch(request);
        },
      },
    );

    const fixtureAdapter = new TestExecutionAdapter();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
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
      attemptId: "xat:m4-001",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    expect(stack.attempts.grantRealExecutionGate).toBeDefined();
    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-001",
      attemptId: "xat:m4-001",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:m4-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedContractVersion: version,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.attempt.status).toBe("running");
    expect(inner.launchCallCount).toBe(1);
    expect(inner.simulatedAckCount).toBe(1);
    expect(
      fixtureAdapter.calls.filter((c) => c.kind === "launch"),
    ).toHaveLength(0);

    const frontier = await journal.findFrontierByAttempt("xat:m4-001");
    expect(frontier.map((r) => r.kind).sort()).toEqual(["CREATED", "LAUNCHED"]);
    journal.close();
  });

  it("REAL flag OFF → production gateway reject; runner and fixture calls stay 0", async () => {
    const journalPath = tempJournalPath("m4-flag-off-");
    const runner = new FakeProcessRunner();
    const safetyJournal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const launchPort = new CursorCliLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort(),
      env: process.env,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const fixtureAdapter = new TestExecutionAdapter();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    const attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal },
      fixedNowIso: NOW,
    });
    stack.attempts = attempts as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:m4-off",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-off",
      attemptId: "xat:m4-off",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:m4-off",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("REAL_BOUNDARY_DISABLED");
    }
    expect(runner.calls).toHaveLength(0);
    expect(
      fixtureAdapter.calls.filter((c) => c.kind === "launch"),
    ).toHaveLength(0);
    safetyJournal.close();
  });

  it("CREATED then crash before launch → retry LAUNCH_RECONCILIATION_REQUIRED", async () => {
    const journalPath = tempJournalPath("m4-created-crash-");
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const ctx = wireM4Stack({ journalPath, launchPort });

    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
    const selected = await selectStandardAgent(ctx.stack, {
      attemptId: "xat:m4-created",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;

    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-created",
      attemptId: "xat:m4-created",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);
    if (!granted.ok) return;

    const contract = await ctx.stack.execution.contracts.findById(contractId);
    expect(contract).not.toBeNull();
    const fingerprint =
      contract!.semanticFingerprint ??
      computeExecutionContractSemanticFingerprint(contract!);

    await ctx.safetyJournal.consumeGateDAndAppendCreated({
      grantId: granted.grant.grantId,
      attemptId: "xat:m4-created",
      occurredAt: NOW,
      identity: {
        executionContractId: contractId,
        executionContractVersion: contract!.version,
        semanticFingerprint: fingerprint,
      },
      selectedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
      actorId: MORRIS_ACTOR.actorId,
      correlationId: "cor:crash-created",
    });
    expect(launchPort.launchCallCount).toBe(0);

    const retry = await ctx.stack.attempts.startExecution.execute({
      attemptId: "xat:m4-created",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(launchPort.launchCallCount).toBe(0);
    expect(
      ctx.fixtureAdapter.calls.filter((c) => c.kind === "launch"),
    ).toHaveLength(0);
    ctx.close();
  });

  it("simulated ACK then fail before LAUNCHED → no second simulated launch on retry", async () => {
    const journalPath = tempJournalPath("m4-launched-fail-");
    const baseJournal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    let failAppend = true;
    const journal: RealLaunchSafetyJournalPort = {
      persistGateDGrant: (i) => baseJournal.persistGateDGrant(i),
      findGateDGrant: (id) => baseJournal.findGateDGrant(id),
      findActiveGateDGrantForAttempt: (id) =>
        baseJournal.findActiveGateDGrantForAttempt(id),
      consumeGateDAndAppendCreated: (i) =>
        baseJournal.consumeGateDAndAppendCreated(i),
      appendLaunched: async (i) => {
        if (failAppend) {
          failAppend = false;
          throw new Error("simulated_crash_before_launched");
        }
        return baseJournal.appendLaunched(i);
      },
      findFrontierByAttempt: (id) => baseJournal.findFrontierByAttempt(id),
      findFrontierByIdentity: (id) => baseJournal.findFrontierByIdentity(id),
      hasAmbiguousFrontier: (id) => baseJournal.hasAmbiguousFrontier(id),
      reconcileDispositionForIdentity: (id) =>
        baseJournal.reconcileDispositionForIdentity(id),
      hasKindForAttempt: (id, k) => baseJournal.hasKindForAttempt(id, k),
    };
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const ctx = wireM4Stack({ journalPath, launchPort, journal });

    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
    const selected = await selectStandardAgent(ctx.stack, {
      attemptId: "xat:m4-ack-fail",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-ack-fail",
      attemptId: "xat:m4-ack-fail",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const first = await ctx.stack.attempts.startExecution.execute({
      attemptId: "xat:m4-ack-fail",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(first.ok).toBe(false);
    if (!first.ok) {
      expect(first.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(launchPort.launchCallCount).toBe(1);
    const frontier = await baseJournal.findFrontierByAttempt("xat:m4-ack-fail");
    expect(frontier.some((r) => r.kind === "CREATED")).toBe(true);
    expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(false);

    const retry = await ctx.stack.attempts.startExecution.execute({
      attemptId: "xat:m4-ack-fail",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(launchPort.launchCallCount).toBe(1);
    baseJournal.close();
  });

  it("new attemptId with same fingerprint is blocked by ambiguous frontier", async () => {
    const journalPath = tempJournalPath("m4-ambig-");
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const ctx = wireM4Stack({ journalPath, launchPort });

    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
    const selected = await selectStandardAgent(ctx.stack, {
      attemptId: "xat:m4-a1",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-a1",
      attemptId: "xat:m4-a1",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await ctx.stack.attempts.startExecution.execute({
      attemptId: "xat:m4-a1",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    expect(launchPort.launchCallCount).toBe(1);

    const frontier = await ctx.safetyJournal.findFrontierByAttempt("xat:m4-a1");
    expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(true);
    const launched = frontier.find((r) => r.kind === "LAUNCHED")!;
    const identity = {
      executionContractId: launched.executionContractId,
      executionContractVersion: launched.executionContractVersion,
      semanticFingerprint: launched.semanticFingerprint,
    };
    expect(await ctx.safetyJournal.hasAmbiguousFrontier(identity)).toBe(true);
    expect(
      await ctx.safetyJournal.reconcileDispositionForIdentity(identity),
    ).toBe("REVIEW_REQUIRED");
    expect(launchPort.launchCallCount).toBe(1);
    ctx.close();
  });
});
