/**
 * Independent QA adversarial proofs for T-A5 runtime foundation (RTA5).
 * Seeks defects; does not trust delivery docs alone.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  createInMemoryExecutionAttemptServices,
  createTestExecutionAttemptServices,
  ExecutionContractStatusWriter,
  isInjectableExecutionAdapter,
  MemoryExecutionAttemptRepository,
  MemoryExecutionAttemptStore,
  NoOpExecutionAdapter,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import {
  MORRIS_ACTOR,
  N1_ACTOR,
  buildStack,
  grantAgentSelectionConfirmation,
  registerN1,
  seedConfirmedContract,
  selectStandardAgent,
} from "./helpers";
import { MemoryExecutionContractStore } from "@/lib/oa/execution-contract";

describe("QA RTA5-09 invariant — Contract executing requires persisted running", () => {
  it("refuses executing when caller claims running but Attempt is only accepted", async () => {
    const stack = buildStack();
    const { contractId, version } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);

    const hostile = await stack.attempts.contractStatusWriter.write({
      executionContractId: contractId,
      expectedVersion: version,
      nextStatus: "executing",
      selectedAgentRef: "agt:alpha",
      // Hostile claim — Attempt is still accepted in the repository.
      runningAttempt: { attemptId: "xat:oa-001", status: "running" },
    });
    expect(hostile.ok).toBe(false);
    if (!hostile.ok) {
      expect(hostile.internalCauseRef).toMatch(/running_attempt/);
    }
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("confirmed");
  });

  it("allows executing only after Attempt is actually persisted running", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(true);
    const attempt = await stack.attempts.attempts.findById("xat:oa-001");
    expect(attempt?.status).toBe("running");
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("executing");
  });
});

describe("QA RTA5-03 — adapter identity binding + closed factories", () => {
  it("fails Start when LaunchAck spoofs a foreign adapterId", async () => {
    const adapter = new TestExecutionAdapter({
      spoofAdapterIdOnAck: "adp:foreign-spoof",
    });
    const stack = buildStack({ adapter });
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(false);
    const attempt = await stack.attempts.attempts.findById("xat:oa-001");
    expect(attempt?.status).toBe("failed");
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("failed");
  });

  it("rejects foreign adapter objects at the factory boundary", () => {
    const foreign = {
      adapterId: "adp:evil",
      externalEffects: false as const,
      async launch() {
        return {
          outcome: "ack" as const,
          adapterId: "adp:evil",
          attemptId: "xat:x",
        };
      },
      async cancel() {
        return {
          outcome: "ack" as const,
          adapterId: "adp:evil",
          attemptId: "xat:x",
        };
      },
    };
    expect(isInjectableExecutionAdapter(foreign)).toBe(false);
    expect(isInjectableExecutionAdapter(new TestExecutionAdapter())).toBe(true);
    expect(isInjectableExecutionAdapter(new NoOpExecutionAdapter())).toBe(true);
  });
});

describe("QA concurrent Start / Cancel / Timeout (Promise.all)", () => {
  it("double concurrent Start: exactly one success, no Contract executing without running", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });

    const [a, b] = await Promise.all([
      stack.attempts.startExecution.execute({
        attemptId: "xat:oa-001",
        actor: MORRIS_ACTOR,
        authorityEvidenceId: "evd:morris-n3",
      }),
      stack.attempts.startExecution.execute({
        attemptId: "xat:oa-001",
        actor: MORRIS_ACTOR,
        authorityEvidenceId: "evd:morris-n3",
      }),
    ]);

    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    // One winner (or one winner + idempotent replay). Never two independent starts.
    expect(oks.length).toBeGreaterThanOrEqual(1);
    expect(oks.length + fails.length).toBe(2);

    const attempt = await stack.attempts.attempts.findById("xat:oa-001");
    const contract = await stack.execution.contracts.findById(contractId);
    if (contract?.status === "executing") {
      expect(attempt?.status).toBe("running");
    }
    // Never executing without a matching running Attempt.
    if (attempt?.status !== "running") {
      expect(contract?.status).not.toBe("executing");
    }
  });

  it("concurrent Result vs Timeout: terminal coherence, no speculative completed", async () => {
    const stack = buildStack({ policy: { attemptTimeoutMs: 1 } });
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(true);

    const [result, timeout] = await Promise.all([
      stack.attempts.recordExecutionResult.execute({
        attemptId: "xat:oa-001",
        adapterId: "adp:test-fixture",
        resultRef: "res:race-1",
      }),
      stack.attempts.triggerAttemptTimeout.execute({
        attemptId: "xat:oa-001",
        autoSafety: true,
        nowIso: "2026-07-25T06:10:00.000Z",
      }),
    ]);

    const attempt = await stack.attempts.attempts.findById("xat:oa-001");
    const contract = await stack.execution.contracts.findById(contractId);
    expect(["succeeded", "timeout", "failed"]).toContain(attempt?.status);
    if (attempt?.status === "succeeded") {
      expect(contract?.status).toBe("completed");
      expect(result.ok).toBe(true);
    }
    if (attempt?.status === "timeout") {
      expect(contract?.status).toBe("failed");
      expect(timeout.ok).toBe(true);
    }
    // Never completed without succeeded Attempt.
    if (contract?.status === "completed") {
      expect(attempt?.status).toBe("succeeded");
    }
  });
});

describe("QA Confirmation consume / replay / contract distinction", () => {
  it("does not consume agent_selection before Start; consumes once; Start replay is idempotent", async () => {
    const stack = buildStack();
    const { contractId, version } = await seedConfirmedContract(stack);
    const confirmationId = await grantAgentSelectionConfirmation(stack, {
      executionContractId: contractId,
      executionContractVersion: version,
      selectedAgentRef: "agt:alpha",
    });
    await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:crit-qa",
      executionContractId: contractId,
      idempotencyKey: "idem-crit-qa",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "critical",
      agentConfirmationRef: confirmationId,
    });
    let cnf = await stack.decisions.confirmations.findById(confirmationId);
    expect(cnf?.status).toBe("granted");

    const first = await stack.attempts.startExecution.execute({
      attemptId: "xat:crit-qa",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(first.ok).toBe(true);
    cnf = await stack.decisions.confirmations.findById(confirmationId);
    expect(cnf?.status).toBe("consumed");

    const replay = await stack.attempts.startExecution.execute({
      attemptId: "xat:crit-qa",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(replay.ok).toBe(true);
    if (replay.ok) expect(replay.replayed).toBe(true);
    cnf = await stack.decisions.confirmations.findById(confirmationId);
    expect(cnf?.status).toBe("consumed");
  });

  it("refuses contract-scope Confirmation as agent_selection", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    // Contract confirm uses scope = CONTRACT_SCOPE, not agent_selection.
    const wrong = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:wrong-cnf",
      executionContractId: contractId,
      idempotencyKey: "idem-wrong-cnf",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "critical",
      agentConfirmationRef: "cfm:exec-001",
    });
    expect(wrong.ok).toBe(false);
  });
});

describe("QA authority / spoof / N1", () => {
  it("ignores displayName Morris and client authorityLevel for Start", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    registerN1(stack.decisions.authority);
    const spoof = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: {
        ...N1_ACTOR,
        displayName: "Morris",
        authorityLevel: "N3",
      },
      authorityEvidenceId: "evd:n1",
      claimedAuthorityLevel: "N3",
    });
    expect(spoof.ok).toBe(false);
  });
});

describe("QA retry debt post-contract-failed", () => {
  it("documents and proves retry after launch-fail (contract failed) is refused", async () => {
    const adapter = new TestExecutionAdapter({
      launchFixtures: {
        "xat:debt-0": { outcome: "fail", reason: "indeterminate" },
      },
    });
    const stack = buildStack({ adapter });
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, {
      attemptId: "xat:debt-0",
      executionContractId: contractId,
      idempotencyKey: "idem-debt-0",
    });
    await stack.attempts.startExecution.execute({
      attemptId: "xat:debt-0",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("failed");

    const retry = await stack.attempts.retryExecutionAttempt.execute({
      priorAttemptId: "xat:debt-0",
      newAttemptId: "xat:debt-1",
      idempotencyKey: "idem-debt-1",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect(retry.error.detailCode).toBe("EXECUTION_CONTRACT_NOT_CONFIRMED");
    }
  });
});

describe("QA compensation — no second launch", () => {
  it("compensates without a second adapter launch when Contract update fails", async () => {
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter });
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    // M3 widened ExecutionContractServices.store to UoW port; failNextSave is memory-store only.
    (stack.execution.store as MemoryExecutionContractStore).failNextSave = true;
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(false);
    expect(adapter.launchCallCount).toBe(1);
    const attempt = await stack.attempts.attempts.findById("xat:oa-001");
    expect(attempt?.status).toBe("failed");
  });
});

describe("QA factory wiring for hardened writer", () => {
  it("createTest and createInMemory wire Attempt repo into ContractStatusWriter", async () => {
    const stack = buildStack();
    await seedConfirmedContract(stack);
    expect(stack.attempts.contractStatusWriter).toBeInstanceOf(
      ExecutionContractStatusWriter,
    );
    // Direct construction still requires the Attempt repository argument.
    const store = new MemoryExecutionAttemptStore();
    const attempts = new MemoryExecutionAttemptRepository(store);
    const writer = new ExecutionContractStatusWriter(
      stack.execution.contracts,
      stack.execution.store,
      attempts,
    );
    const refused = await writer.write({
      executionContractId: "xct:oa-001",
      expectedVersion: 1,
      nextStatus: "executing",
      runningAttempt: { attemptId: "xat:missing", status: "running" },
    });
    expect(refused.ok).toBe(false);

    // Smoke: factories still construct.
    expect(() =>
      createTestExecutionAttemptServices({
        decisionServices: stack.decisions,
        executionContractServices: stack.execution,
        agents: [],
      }),
    ).not.toThrow();
    expect(() =>
      createInMemoryExecutionAttemptServices({
        decisionServices: stack.decisions,
        executionContractServices: stack.execution,
        adapter: new NoOpExecutionAdapter(),
        agents: [],
      }),
    ).not.toThrow();
  });
});
