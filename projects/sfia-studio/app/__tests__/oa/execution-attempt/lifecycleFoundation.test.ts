/**
 * T-A5 lifecycle foundation — Select / Start / Result / Timeout / Cancel /
 * Retry / Confirmation / compensation / adversarial Morris.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  formatAgentSelectionActionRef,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import {
  MORRIS_ACTOR,
  N1_ACTOR,
  NOW,
  buildStack,
  grantAgentSelectionConfirmation,
  registerN1,
  registerN3NoMorris,
  seedConfirmedContract,
  seedRunningAttempt,
  selectStandardAgent,
} from "./helpers";

describe("T-A5 SelectExecutionAgent", () => {
  it("persists accepted without launching an adapter", async () => {
    const stack = buildStack();
    const { contractId, version } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.attempt.status).toBe("accepted");
    expect(selected.attempt.selectedAgentRef).toBe("agt:alpha");
    expect(selected.attempt.executionContractVersion).toBe(version);
    expect(selected.attempt.selectionStrategy).toBe(
      "capabilities_deterministic",
    );
    expect(
      (stack.adapter as TestExecutionAdapter).calls.filter(
        (c) => c.kind === "launch",
      ),
    ).toHaveLength(0);
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("confirmed");
  });

  it("is idempotent on the same key and conflicts on a different payload", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    const first = await selectStandardAgent(stack, {
      executionContractId: contractId,
      idempotencyKey: "idem-select-same",
    });
    expect(first.ok).toBe(true);
    const replay = await selectStandardAgent(stack, {
      executionContractId: contractId,
      idempotencyKey: "idem-select-same",
    });
    expect(replay.ok).toBe(true);
    if (replay.ok) expect(replay.reusedFromIdempotencyKey).toBe(true);

    const conflict = await selectStandardAgent(stack, {
      attemptId: "xat:oa-002",
      executionContractId: contractId,
      idempotencyKey: "idem-select-same",
      requestedAgentRef: "agt:beta",
    });
    expect(conflict.ok).toBe(false);
    if (!conflict.ok) {
      expect(conflict.error.detailCode).toBe("ATTEMPT_IDEMPOTENCY_CONFLICT");
    }
  });

  it("refuses a second active Attempt on the same contract", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    const first = await selectStandardAgent(stack, {
      executionContractId: contractId,
      idempotencyKey: "idem-active-1",
    });
    expect(first.ok).toBe(true);
    const second = await selectStandardAgent(stack, {
      attemptId: "xat:oa-002",
      executionContractId: contractId,
      idempotencyKey: "idem-active-2",
    });
    expect(second.ok).toBe(false);
    if (!second.ok) {
      expect(second.error.detailCode).toBe("EXECUTION_ALREADY_ACTIVE");
    }
  });

  it("selects Critical only with a valid agent_selection Confirmation", async () => {
    const stack = buildStack();
    const { contractId, version } = await seedConfirmedContract(stack);
    const confirmationId = await grantAgentSelectionConfirmation(stack, {
      executionContractId: contractId,
      executionContractVersion: version,
      selectedAgentRef: "agt:alpha",
    });
    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:crit-001",
      executionContractId: contractId,
      idempotencyKey: "idem-crit-select",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "critical",
      agentConfirmationRef: confirmationId,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.attempt.selectionStrategy).toBe(
      "human_confirmed_proposal",
    );
    expect(selected.attempt.agentConfirmationRef).toBe(confirmationId);
  });

  it("refuses Critical without Confirmation and refuses wrong binding", async () => {
    const stack = buildStack();
    const { contractId, version } = await seedConfirmedContract(stack);
    const missing = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:crit-miss",
      executionContractId: contractId,
      idempotencyKey: "idem-crit-miss",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "critical",
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) {
      expect(missing.error.detailCode).toBe("AGENT_CONFIRMATION_REQUIRED");
    }

    const wrong = await grantAgentSelectionConfirmation(stack, {
      confirmationId: "cfm:wrong-bind",
      executionContractId: contractId,
      executionContractVersion: version,
      selectedAgentRef: "agt:alpha",
      actionRef: formatAgentSelectionActionRef({
        executionContractId: contractId,
        executionContractVersion: version + 99,
        selectedAgentRef: "agt:alpha",
      }),
    });
    const bound = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:crit-wrong",
      executionContractId: contractId,
      idempotencyKey: "idem-crit-wrong",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "critical",
      agentConfirmationRef: wrong,
    });
    expect(bound.ok).toBe(false);
    if (!bound.ok) {
      expect(bound.error.detailCode).toBe("AGENT_CONFIRMATION_INVALID");
    }
  });

  it("refuses capabilities_deterministic on the critical profile", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    const refused = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:crit-det",
      executionContractId: contractId,
      idempotencyKey: "idem-crit-det",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "critical",
      selectionStrategy: "capabilities_deterministic",
    });
    expect(refused.ok).toBe(false);
    if (!refused.ok) {
      expect(refused.error.detailCode).toBe(
        "AGENT_SELECTION_STRATEGY_REFUSED",
      );
    }
  });
});

describe("T-A5 StartExecution RTA5-09", () => {
  it("keeps contract confirmed while accepted, then running before executing", async () => {
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter });
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);
    let contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("confirmed");

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.attempt.status).toBe("running");
    expect(started.attempt.launchedAt).toBeTruthy();
    contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("executing");
    expect(adapter.calls.filter((c) => c.kind === "launch")).toHaveLength(1);
    expect(adapter.calls[0]?.attemptId).toBe("xat:oa-001");
  });

  it("proves persist-before-launch: accepted exists before any launch call", async () => {
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter });
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    expect(adapter.calls).toHaveLength(0);
    const accepted = await stack.attempts.attempts.findById("xat:oa-001");
    expect(accepted?.status).toBe("accepted");
    await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(adapter.calls[0]?.kind).toBe("launch");
  });

  it("refuses double Start and replays idempotent Start", async () => {
    const stack = buildStack();
    await seedRunningAttempt(stack);
    const replay = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(replay.ok).toBe(true);
    if (replay.ok) expect(replay.replayed).toBe(true);
  });

  it("maps launch reject to Attempt failed without Contract executing", async () => {
    const adapter = new TestExecutionAdapter({
      launchFixtures: {
        "xat:oa-001": { outcome: "reject", reason: "fixture_reject" },
      },
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
    expect(contract?.status).toBe("confirmed");
  });

  it("maps launch fail to Attempt failed and Contract failed", async () => {
    const adapter = new TestExecutionAdapter({
      launchFixtures: {
        "xat:oa-001": { outcome: "fail", reason: "fixture_fail" },
      },
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

  it("compensates Attempt when Contract executing persist fails after running", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    stack.execution.store.failNextSave = true;
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(false);
    const attempt = await stack.attempts.attempts.findById("xat:oa-001");
    expect(attempt?.status).toBe("failed");
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("confirmed");
    expect(
      stack.attempts.audit.events.some(
        (e) => e.event === "oa.execution_attempt.compensated",
      ),
    ).toBe(true);
  });

  it("consumes agent_selection Confirmation only after successful Start", async () => {
    const stack = buildStack();
    const { contractId, version } = await seedConfirmedContract(stack);
    const confirmationId = await grantAgentSelectionConfirmation(stack, {
      executionContractId: contractId,
      executionContractVersion: version,
      selectedAgentRef: "agt:alpha",
    });
    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:crit-start",
      executionContractId: contractId,
      idempotencyKey: "idem-crit-start",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "critical",
      agentConfirmationRef: confirmationId,
    });
    expect(selected.ok).toBe(true);
    let confirmation = await stack.decisions.confirmations.findById(
      confirmationId,
    );
    expect(confirmation?.status).toBe("granted");

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:crit-start",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(true);
    confirmation = await stack.decisions.confirmations.findById(confirmationId);
    expect(confirmation?.status).toBe("consumed");
  });

  it("refuses Start after selection TTL expiry", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
      selectionTtlMs: 60_000,
    });
    expect(selected.ok).toBe(true);
    const expired = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      nowIso: "2026-07-25T07:00:00.000Z",
    });
    expect(expired.ok).toBe(false);
    if (!expired.ok) {
      expect(expired.error.detailCode).toBe("AGENT_SELECTION_EXPIRED");
    }
  });
});

describe("T-A5 RecordResult / result_pending / Failure", () => {
  it("records succeeded and maps Contract to completed", async () => {
    const stack = buildStack();
    await seedRunningAttempt(stack);
    const recorded = await stack.attempts.recordExecutionResult.execute({
      attemptId: "xat:oa-001",
      adapterId: "adp:test-fixture",
      resultRef: "res:tech-001",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.attempt.status).toBe("succeeded");
    const contract = await stack.execution.contracts.findById("xct:oa-001");
    expect(contract?.status).toBe("completed");
  });

  it("enters result_pending when terminal persist fails; Contract stays executing", async () => {
    const stack = buildStack();
    await seedRunningAttempt(stack);
    stack.attempts.store.failNextSave = true;
    const pending = await stack.attempts.recordExecutionResult.execute({
      attemptId: "xat:oa-001",
      adapterId: "adp:test-fixture",
      resultRef: "res:tech-pending",
    });
    // Command fails closed, but Attempt is parked in result_pending (no speculative completed).
    expect(pending.ok).toBe(false);
    expect(pending.attempt?.status).toBe("result_pending");
    const contract = await stack.execution.contracts.findById("xct:oa-001");
    expect(contract?.status).toBe("executing");

    const retry = await stack.attempts.recordExecutionResult.execute({
      attemptId: "xat:oa-001",
      adapterId: "adp:test-fixture",
      resultRef: "res:tech-pending",
    });
    expect(retry.ok).toBe(true);
    if (retry.ok) expect(retry.attempt.status).toBe("succeeded");
  });

  it("refuses a foreign adapterId and refuses success after failure", async () => {
    const stack = buildStack();
    await seedRunningAttempt(stack);
    const foreign = await stack.attempts.recordExecutionResult.execute({
      attemptId: "xat:oa-001",
      adapterId: "adp:foreign",
      resultRef: "res:tech-x",
    });
    expect(foreign.ok).toBe(false);
    if (!foreign.ok) {
      expect(foreign.error.detailCode).toBe("ADAPTER_ATTEMPT_MISMATCH");
    }

    const failed = await stack.attempts.recordExecutionFailure.execute({
      attemptId: "xat:oa-001",
      adapterId: "adp:test-fixture",
      errorRef: "err:tech-001",
      stopReason: "fixture failure",
    });
    expect(failed.ok).toBe(true);
    const after = await stack.attempts.recordExecutionResult.execute({
      attemptId: "xat:oa-001",
      adapterId: "adp:test-fixture",
      resultRef: "res:late",
    });
    expect(after.ok).toBe(false);
  });
});

describe("T-A5 timeout / auto-safety / stale", () => {
  it("refuses timeout before deadline and applies after", async () => {
    const stack = buildStack({
      policy: { attemptTimeoutMs: 60_000 },
    });
    await seedRunningAttempt(stack);
    const early = await stack.attempts.triggerAttemptTimeout.execute({
      attemptId: "xat:oa-001",
      autoSafety: true,
      nowIso: NOW,
    });
    expect(early.ok).toBe(false);

    const late = await stack.attempts.triggerAttemptTimeout.execute({
      attemptId: "xat:oa-001",
      autoSafety: true,
      nowIso: "2026-07-25T06:05:00.000Z",
    });
    expect(late.ok).toBe(true);
    if (!late.ok) return;
    expect(late.attempt.status).toBe("timeout");
    const contract = await stack.execution.contracts.findById("xct:oa-001");
    expect(contract?.status).toBe("failed");

    const replay = await stack.attempts.triggerAttemptTimeout.execute({
      attemptId: "xat:oa-001",
      autoSafety: true,
      nowIso: "2026-07-25T06:10:00.000Z",
    });
    expect(replay.ok).toBe(true);
    if (replay.ok) expect(replay.replayed).toBe(true);
  });

  it("detects stale Contract without auto-cancel", async () => {
    const stack = buildStack();
    const { contractId, version } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    const cancelled = await stack.execution.cancelExecutionContract.execute({
      executionContractId: contractId,
      reason: "stale detection only — no auto-cancel of Attempt",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(cancelled.ok).toBe(true);
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(false);
    const attempt = await stack.attempts.attempts.findById("xat:oa-001");
    expect(attempt?.status).toBe("accepted");
    expect(
      stack.attempts.audit.events.some(
        (e) => e.event === "oa.execution_attempt.stale_context_detected",
      ),
    ).toBe(true);
  });
});

describe("T-A5 cancel / Morris emergency / retry", () => {
  it("cancels accepted without adapter call", async () => {
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter });
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, { executionContractId: contractId });
    const cancelled = await stack.attempts.cancelExecutionAttempt.execute({
      attemptId: "xat:oa-001",
      reason: "abandon selection",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    expect(cancelled.attempt.status).toBe("cancelled");
    expect(adapter.calls.filter((c) => c.kind === "cancel")).toHaveLength(0);
  });

  it("best-effort cancels a running Attempt via adapter", async () => {
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter });
    await seedRunningAttempt(stack);
    const cancelled = await stack.attempts.cancelExecutionAttempt.execute({
      attemptId: "xat:oa-001",
      reason: "operator stop",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(cancelled.ok).toBe(true);
    expect(adapter.calls.some((c) => c.kind === "cancel")).toBe(true);
  });

  it("allows Morris emergency and refuses N3 without canActAsMorris spoof", async () => {
    const stack = buildStack();
    await seedRunningAttempt(stack);
    registerN3NoMorris(stack.decisions.authority);
    const spoof = await stack.attempts.cancelExecutionAttempt.execute({
      attemptId: "xat:oa-001",
      reason: "spoof morris",
      actor: {
        actorId: "actor:n3-plain",
        role: "decision_maker",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      authorityEvidenceId: "evd:n3-no-morris",
      emergency: true,
      claimedAuthorityLevel: "N3",
    });
    expect(spoof.ok).toBe(false);
    if (!spoof.ok) {
      expect(spoof.error.detailCode).toMatch(/AUTHORITY|MORRIS/);
    }

    const emergency = await stack.attempts.cancelExecutionAttempt.execute({
      attemptId: "xat:oa-001",
      reason: "morris emergency",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      emergency: true,
    });
    expect(emergency.ok).toBe(true);
  });

  it("creates a new Attempt on retry after launch reject (contract stays confirmed)", async () => {
    const rejectAdapter = new TestExecutionAdapter({
      launchFixtures: {
        "xat:retry-0": { outcome: "reject", reason: "need_retry" },
      },
    });
    const stack = buildStack({ adapter: rejectAdapter });
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, {
      attemptId: "xat:retry-0",
      executionContractId: contractId,
      idempotencyKey: "idem-retry-0",
    });
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:retry-0",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(false);
    const prior = await stack.attempts.attempts.findById("xat:retry-0");
    expect(prior?.status).toBe("failed");
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("confirmed");

    registerN1(stack.decisions.authority);
    const n1 = await stack.attempts.retryExecutionAttempt.execute({
      priorAttemptId: "xat:retry-0",
      newAttemptId: "xat:retry-1",
      idempotencyKey: "idem-retry-1",
      actor: N1_ACTOR,
      authorityEvidenceId: "evd:n1",
    });
    expect(n1.ok).toBe(false);

    const retried = await stack.attempts.retryExecutionAttempt.execute({
      priorAttemptId: "xat:retry-0",
      newAttemptId: "xat:retry-1",
      idempotencyKey: "idem-retry-1",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(retried.ok).toBe(true);
    if (!retried.ok) return;
    expect(retried.attempt.attemptId).toBe("xat:retry-1");
    expect(retried.attempt.retryOfAttemptId).toBe("xat:retry-0");
    expect(retried.attempt.retryIndex).toBe(1);
    expect(retried.attempt.status).toBe("accepted");
    expect(prior?.attemptId).not.toBe(retried.attempt.attemptId);
  });
});

describe("T-A5 CheckAttemptAuthorization", () => {
  it("checks without mutating", async () => {
    const stack = buildStack();
    await seedRunningAttempt(stack);
    const before = await stack.attempts.attempts.findById("xat:oa-001");
    const checked = await stack.attempts.checkAttemptAuthorization.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(checked.ok).toBe(true);
    const after = await stack.attempts.attempts.findById("xat:oa-001");
    expect(after?.version).toBe(before?.version);
    expect(after?.status).toBe(before?.status);
  });
});
