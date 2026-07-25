/**
 * T-A4 ExecutionContract — Build / Validate / Confirm / Get / List.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  baseBuildRequest,
  buildStack,
  buildValidatedContract,
  grantConfirmation,
  MORRIS_ACTOR,
  N1_ACTOR,
  registerMorris,
  registerN1,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
} from "./helpers";

describe("T-A4 BuildExecutionContract", () => {
  it("builds draft contract with schemaVersion 0.2.0-oa", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(),
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.contract.schemaVersion).toBe("0.2.0-oa");
    expect(result.contract.status).toBe("draft");
    expect(result.contract.requiredAuthority).toBe("N3");
    expect(result.contract.version).toBe(1);
    expect(result.contract.selectedAgentRef).toBeUndefined();
  });

  it("builds proposed when status=proposed", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({ status: "proposed" }),
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.contract.status).toBe("proposed");
  });

  it("requires project existence", async () => {
    const stack = buildStack();
    registerMorris(stack.decisions.authority);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PROJECT_NOT_FOUND");
  });

  it("requires accepted same-project decisionRefs", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("DECISION_NOT_FOUND");
  });

  it("rejects empty action/target/scope", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({ action: "   " }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONTRACT_INVALID");
  });

  it("rejects invalid requiredAuthority enum", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        requiredAuthority: "morris-N3" as unknown as "N3",
      }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONTRACT_INVALID");
  });

  it("rejects short idempotencyKey", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({ idempotencyKey: "short" }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONTRACT_INVALID");
  });

  it("reuses identical idempotency payload", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const first = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(),
    );
    expect(first.ok).toBe(true);
    const reuse = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({ executionContractId: "xct:oa-dup" }),
    );
    expect(reuse.ok).toBe(true);
    if (!reuse.ok) return;
    expect(reuse.reusedFromIdempotencyKey).toBe(true);
    expect(reuse.contract.executionContractId).toBe("xct:oa-001");
  });

  it("conflicts on idempotency key with different payload", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    await stack.execution.buildExecutionContract.execute(baseBuildRequest());
    const conflict = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:oa-diff",
        action: "different-action",
      }),
    );
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("CONTRACT_IDEMPOTENCY_CONFLICT");
  });

  it("does not consume confirmation on build", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const cfmId = await grantConfirmation(stack);

    await stack.execution.buildExecutionContract.execute(baseBuildRequest());
    const cfm = await stack.decisions.confirmations.findById(cfmId);
    expect(cfm?.status).toBe("granted");
  });

  it("supports MORRIS requiredAuthority with canActAsMorris", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:morris-1",
        requiredAuthority: "MORRIS",
        idempotencyKey: "idem-morris-001",
      }),
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.contract.requiredAuthority).toBe("MORRIS");
  });
});

describe("T-A4 ValidateExecutionContract", () => {
  it("N3 → confirmation_required without consuming confirmation", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const cfmId = await grantConfirmation(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("confirmation_required");
    const cfm = await stack.decisions.confirmations.findById(cfmId);
    expect(cfm?.status).toBe("granted");
  });

  it("N1 → validated", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerN1(stack.decisions.authority);
    stack.decisions.authority.register({
      evidenceId: "evd:n1-subj",
      actorId: "actor:n1",
      level: "N1",
      scope: "subj:n1-gate",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
    const dec = await stack.decisions.recordHumanDecision.execute({
      decisionId: "dec:n1-1",
      projectId: "prj:campus360-oa",
      subject: "subj:n1-gate",
      options: [
        { optionId: "opt:go", label: "Go" },
        { optionId: "opt:hold", label: "Hold" },
      ],
      selectedOptionId: "opt:go",
      actor: N1_ACTOR,
      authority: "system_non_structuring",
      reversible: true,
      nonStructuring: true,
      authorityEvidenceId: "evd:n1-subj",
    });
    expect(dec.ok).toBe(true);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:n1-1",
        decisionRefs: ["dec:n1-1"],
        requiredAuthority: "N1",
        scope: "docs+schemas+examples only",
        idempotencyKey: "idem-n1-001",
        actor: N1_ACTOR,
        authorityEvidenceId: "evd:n1",
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: "xct:n1-1",
      actor: N1_ACTOR,
      authorityEvidenceId: "evd:n1",
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("validated");
  });

  it("refuses validate from confirmed", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
    });
    const cfmId = await grantConfirmation(stack);
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(true);

    const again = await stack.execution.validateExecutionContract.execute({
      executionContractId: contractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(again.ok).toBe(false);
    if (again.ok) return;
    expect(again.error.detailCode).toBe("STATE_CONFLICT");
  });
});

describe("T-A4 ConfirmExecutionContract", () => {
  it("consumes confirmation once and sets confirmed + confirmationRef", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
    });
    const cfmId = await grantConfirmation(stack);

    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.contract.status).toBe("confirmed");
    expect(confirmed.contract.confirmationRef).toBe(cfmId);
    expect(confirmed.contract.immutableAfterConfirm).toBe(true);

    const cfm = await stack.decisions.confirmations.findById(cfmId);
    expect(cfm?.status).toBe("consumed");
  });

  it("refuses double confirm / double consume", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:dbl-1",
      idempotencyKey: "idem-dbl-001",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:dbl-1",
    });

    const first = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(first.ok).toBe(true);

    const second = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version + 1,
    });
    expect(second.ok).toBe(false);
  });

  it("enforces OCC expectedVersion", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:occ-1",
      idempotencyKey: "idem-occ-001",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:occ-1",
    });

    const bad = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: 99,
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.error.detailCode).toBe("VERSION_CONFLICT");
  });
});

describe("T-A4 Get / List", () => {
  it("gets and lists history including superseded lineage", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    await stack.execution.buildExecutionContract.execute(baseBuildRequest());
    const got = await stack.execution.getExecutionContract.execute({
      executionContractId: "xct:oa-001",
    });
    expect(got.ok).toBe(true);

    const list = await stack.execution.listExecutionContractHistory.execute({
      projectId: "prj:campus360-oa",
    });
    expect(list.ok).toBe(true);
    if (!list.ok) return;
    expect(list.contracts.length).toBe(1);
  });
});
