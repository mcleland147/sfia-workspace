/**
 * M4 REAL-OFF correction R3 — no test enables SFIA_STUDIO_CURSOR_REAL=1.
 * @vitest-environment node
 */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  DisabledRealProcessRunner,
  isStudioCursorRealEnabled,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import { mkdtempSync } from "node:fs";
import os from "node:os";
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
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import { FakeRealExecutionWorkspacePort } from "./support/fakeSpawnAndGit";
import {
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
} from "@/lib/oa/execution-attempt";
import { M4_EVIDENCE, m4ContractInputs } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

const TESTS_DIR = __dirname;

function scanM4TestsForRealFlagEnablement(): string[] {
  const hits: string[] = [];
  const walk = (dir: string) => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.(ts|tsx)$/.test(ent.name)) continue;
      const text = readFileSync(full, "utf8");
      // Positive enablement literals / assignments — allow negative assertions.
      const enablePatterns = [
        /SFIA_STUDIO_CURSOR_REAL:\s*["']1["']/,
        /SFIA_STUDIO_CURSOR_REAL\s*=\s*["']1["']/,
        /process\.env\.SFIA_STUDIO_CURSOR_REAL\s*=\s*["']1["']/,
        /OPS1_CURSOR_REAL:\s*["']1["']/,
        /OPS1_CURSOR_REAL\s*=\s*["']1["']/,
      ];
      for (const re of enablePatterns) {
        if (re.test(text)) {
          hits.push(path.relative(TESTS_DIR, full));
          break;
        }
      }
    }
  };
  walk(TESTS_DIR);
  return hits;
}

describe("M4 REAL-OFF correction R3", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("R3-01 assertStudioCursorRealOffForTests passes in harness", () => {
    expect(() => assertStudioCursorRealOffForTests()).not.toThrow();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    expect(process.env.OPS1_CURSOR_REAL).not.toBe("1");
  });

  it("R3-02/03/04 static scan: no M4 test enables REAL flag to 1", () => {
    expect(scanM4TestsForRealFlagEnablement()).toEqual([]);
  });

  it("R3-05 production gateway OFF → processRunner call count 0", async () => {
    const runner = new FakeProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort(),
      env: process.env,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:r3-05",
      executionContractId: "xct:1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4",
      adapterRef: gateway.gatewayId,
      correlationId: "cor",
      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      timeoutMs: 15 * 60 * 1000,
    });
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("R3-05b missing flag / non-1 env reject with DisabledRealProcessRunner unused", async () => {
    const runner = new DisabledRealProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort(),
      env: { ...process.env, SFIA_STUDIO_CURSOR_REAL: "0" },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:r3-05b",
      executionContractId: "xct:1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4",
      adapterRef: gateway.gatewayId,
      correlationId: "cor",
      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      timeoutMs: 15 * 60 * 1000,
    });
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.detailCode).toBe("REAL_BOUNDARY_DISABLED");
    }
  });

  it("R3-06 positive StartExecution uses TestOnlyRealExecutionLaunchPort only", async () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "m4-r3-06-"));
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: path.join(dir, "j.sqlite"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    expect(launchPort.constructor.name).toBe("TestOnlyRealExecutionLaunchPort");

    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        cycleInstanceId: "cyc:std-001",
        action: M4_BOUNDED_RO_ACTION,
        target: M4_BOUNDED_RO_TARGET,
        scope: M4_BOUNDED_RO_SCOPE,
        requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
        authorityEvidenceId: M4_EVIDENCE,
        inputs: m4ContractInputs(),
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
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
    if (!confirmed.ok) return;

    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:r3-06",
      executionContractId: confirmed.contract.executionContractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);
    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:r3-06",
      attemptId: "xat:r3-06",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r3-06",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    expect(launchPort.simulatedAckCount).toBe(1);
    expect(isStudioCursorRealEnabled()).toBe(false);
    journal.close();
  });
});
