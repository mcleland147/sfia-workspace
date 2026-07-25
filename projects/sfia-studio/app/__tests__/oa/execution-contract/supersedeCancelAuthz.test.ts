/**
 * T-A4 ExecutionContract — Supersede / Cancel / CheckAuthorization.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  baseBuildRequest,
  buildStack,
  buildValidatedContract,
  grantConfirmation,
  MORRIS_ACTOR,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
} from "./helpers";

describe("T-A4 SupersedeExecutionContract", () => {
  it("creates successor and marks prior superseded with reason", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const result = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:oa-002",
      supersedesExecutionContractId: "xct:oa-001",
      supersessionReason: "Scope narrowed after review",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: built.contract.version,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.contract.executionContractId).toBe("xct:oa-002");
    expect(result.contract.supersedesExecutionContractId).toBe("xct:oa-001");
    expect(result.contract.supersessionReason).toBe(
      "Scope narrowed after review",
    );
    expect(result.supersededContract?.status).toBe("superseded");

    const old = await stack.execution.getExecutionContract.execute({
      executionContractId: "xct:oa-001",
    });
    expect(old.ok).toBe(true);
    if (!old.ok) return;
    expect(old.contract.status).toBe("superseded");
  });

  it("rejects self-supersession", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const result = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:oa-001",
      supersedesExecutionContractId: "xct:oa-001",
      supersessionReason: "self",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("SELF_SUPERSESSION");
  });

  it("rejects whitespace-only supersessionReason", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const result = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:oa-ws",
      supersedesExecutionContractId: "xct:oa-001",
      supersessionReason: "   \t  ",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("SUPERSESSION_REASON_INVALID");
  });

  it("enforces concurrent OCC on supersede", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const [a, b] = await Promise.all([
      stack.execution.supersedeExecutionContract.execute({
        newExecutionContractId: "xct:race-a",
        supersedesExecutionContractId: "xct:oa-001",
        supersessionReason: "race A",
        actor: MORRIS_ACTOR,
        authorityEvidenceId: "evd:morris-n3",
        expectedVersion: built.contract.version,
      }),
      stack.execution.supersedeExecutionContract.execute({
        newExecutionContractId: "xct:race-b",
        supersedesExecutionContractId: "xct:oa-001",
        supersessionReason: "race B",
        actor: MORRIS_ACTOR,
        authorityEvidenceId: "evd:morris-n3",
        expectedVersion: built.contract.version,
      }),
    ]);
    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks.length).toBe(1);
    expect(fails.length).toBe(1);
  });
});

describe("T-A4 CancelExecutionContract (pre-exec)", () => {
  it("cancels draft with required reason", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const result = await stack.execution.cancelExecutionContract.execute({
      executionContractId: "xct:oa-001",
      reason: "Aborted before validate",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.contract.status).toBe("cancelled");
  });

  it("cancels confirmed pre-exec (not T-A5 path)", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:cancel-cfm",
      idempotencyKey: "idem-cancel-cfm",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:cancel-1",
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const cancelled = await stack.execution.cancelExecutionContract.execute({
      executionContractId: contractId,
      reason: "Withdrawn before start",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: confirmed.contract.version,
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    expect(cancelled.contract.status).toBe("cancelled");
  });

  it("rejects empty cancel reason", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const result = await stack.execution.cancelExecutionContract.execute({
      executionContractId: "xct:oa-001",
      reason: "  ",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONTRACT_INVALID");
  });
});

describe("T-A4 CheckExecutionAuthorization", () => {
  it("authorizes confirmed current matching action/target/scope", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:authz-1",
      idempotencyKey: "idem-authz-1",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:authz-1",
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const check = await stack.execution.checkExecutionAuthorization.execute({
      executionContractId: contractId,
      action: confirmed.contract.action,
      target: confirmed.contract.target,
      scope: confirmed.contract.scope,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(check.ok).toBe(true);
    if (!check.ok) return;
    expect(check.authorized).toBe(true);
  });

  it("deny-by-default on action/target/scope mismatch", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:authz-deny",
      idempotencyKey: "idem-authz-deny",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:authz-deny",
    });
    await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });

    const check = await stack.execution.checkExecutionAuthorization.execute({
      executionContractId: contractId,
      action: "hostile-other-action",
      target: "sfia-v3-modeled/v3-native-option-a",
      scope: "docs+schemas+examples only",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(check.ok).toBe(false);
    if (check.ok) return;
    expect(check.error.detailCode).toBe("AUTHORIZATION_DENIED");
  });

  it("never mutates contract on check", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:authz-immut",
      idempotencyKey: "idem-authz-immut",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:authz-immut",
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    const vBefore = confirmed.contract.version;

    await stack.execution.checkExecutionAuthorization.execute({
      executionContractId: contractId,
      action: confirmed.contract.action,
      target: confirmed.contract.target,
      scope: confirmed.contract.scope,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });

    const after = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.contract.version).toBe(vBefore);
    expect(after.contract.status).toBe("confirmed");
  });

  it("denies cancelled or superseded contracts", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:authz-cancel",
        idempotencyKey: "idem-authz-cancel",
      }),
    );
    await stack.execution.cancelExecutionContract.execute({
      executionContractId: "xct:authz-cancel",
      reason: "stop",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });

    const check = await stack.execution.checkExecutionAuthorization.execute({
      executionContractId: "xct:authz-cancel",
      action: "publish-modeled-pack",
      target: "sfia-v3-modeled/v3-native-option-a",
      scope: "docs+schemas+examples only",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(check.ok).toBe(false);
    if (check.ok) return;
    expect(check.error.detailCode).toBe("STATE_CONFLICT");
  });
});
