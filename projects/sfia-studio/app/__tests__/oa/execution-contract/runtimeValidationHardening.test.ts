/**
 * T-A4 RUNTIME VALIDATION — adversarial proofs for hardened blockers.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  baseBuildRequest,
  buildStack,
  buildValidatedContract,
  grantConfirmation,
  MORRIS_ACTOR,
  registerDelegate,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
} from "./helpers";

describe("T-A4 runtime validation — supersede TA5 / ZWSP / arrays", () => {
  it("refuses T-A5 status injection on supersede successor", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const result = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:oa-ta5-succ",
      supersedesExecutionContractId: "xct:oa-001",
      supersessionReason: "hostile ta5",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      status: "executing" as unknown as "draft",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("TA5_STATUS_REFUSED");
  });

  it("refuses selectedAgentRef injection on supersede", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const result = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:oa-agent-succ",
      supersedesExecutionContractId: "xct:oa-001",
      supersessionReason: "hostile agent",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectedAgentRef: "agent:hostile",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("TA5_STATUS_REFUSED");
  });

  it("rejects ZWSP-only supersessionReason", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const result = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:oa-zwsp",
      supersedesExecutionContractId: "xct:oa-001",
      supersessionReason: "\u200B\u200C\u200D\uFEFF",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("SUPERSESSION_REASON_INVALID");
  });

  it("rejects supersede override with empty constraints array", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const result = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:oa-bad-arr",
      supersedesExecutionContractId: "xct:oa-001",
      supersessionReason: "bad override arrays",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      constraints: [],
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONTRACT_INVALID");
  });

  it("allows draft|proposed successor status only", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    const proposed = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:oa-succ-prop",
      supersedesExecutionContractId: "xct:oa-001",
      supersessionReason: "narrow scope",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      status: "proposed",
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.contract.status).toBe("proposed");
  });
});

describe("T-A4 runtime validation — confirmation binding", () => {
  it("emits CONFIRMATION_INVALID on scope mismatch", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:cfm-scope",
      idempotencyKey: "idem-cfm-scope",
    });
    // Distinct evidence for foreign confirmation scope (grant needs matching scope).
    stack.decisions.authority.register({
      evidenceId: "evd:morris-other-scope",
      actorId: "actor:morris",
      level: "N3",
      scope: "other-scope-not-matching",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:scope-bad",
      scope: "other-scope-not-matching",
      evidenceId: "evd:morris-other-scope",
    });

    const result = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONFIRMATION_INVALID");
  });

  it("emits CONFIRMATION_INVALID when level insufficient for requiredAuthority", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    registerDelegate(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:cfm-lvl",
      idempotencyKey: "idem-cfm-lvl",
      requiredAuthority: "N3",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:lvl-n2",
      level: "N2",
      actor: MORRIS_ACTOR,
      evidenceId: "evd:morris-n3",
    });

    const result = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONFIRMATION_INVALID");
  });

  it("emits CONFIRMATION_INVALID when decisionRef not in contract.decisionRefs", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedAcceptedDecision(stack, {
      decisionId: "dec:other-001",
      subject: "subj:other-gate",
    });
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:cfm-dref",
      idempotencyKey: "idem-cfm-dref",
      decisionRefs: ["dec:oa-001"],
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:dref-bad",
      decisionRef: "dec:other-001",
    });

    const result = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONFIRMATION_INVALID");
  });
});

describe("T-A4 runtime validation — idempotency fingerprint", () => {
  it("conflicts when constraints differ under same idempotencyKey", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    await stack.execution.buildExecutionContract.execute(baseBuildRequest());
    const conflict = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:idem-cons",
        constraints: ["no-runtime-code", "no-sql", "extra-constraint"],
      }),
    );
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("CONTRACT_IDEMPOTENCY_CONFLICT");
  });

  it("conflicts when reversibility differs under same idempotencyKey", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    await stack.execution.buildExecutionContract.execute(baseBuildRequest());
    const conflict = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:idem-rev",
        reversibility: "irreversible",
      }),
    );
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("CONTRACT_IDEMPOTENCY_CONFLICT");
  });

  it("conflicts when status differs under same idempotencyKey", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({ status: "draft" }),
    );
    const conflict = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:idem-st",
        status: "proposed",
      }),
    );
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("CONTRACT_IDEMPOTENCY_CONFLICT");
  });
});

describe("T-A4 runtime validation — doctrinePackageRef TOCTOU", () => {
  it("snapshots doctrinePackageRef before await", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const req = baseBuildRequest({
      executionContractId: "xct:doct-toctou",
      idempotencyKey: "idem-doct-toctou",
      doctrinePackageRef: {
        doctrinePackageId: "pkg:studio-v3-oa",
        version: "1.0.0",
        digest:
          "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622",
        resolvedAt: "2026-07-25T06:00:00.000Z",
        resolver: MORRIS_ACTOR,
        status: "resolved",
      },
    });
    const promise = stack.execution.buildExecutionContract.execute(req);
    if (req.doctrinePackageRef) {
      req.doctrinePackageRef.version = "9.9.9-mutated";
    }
    const result = await promise;
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.contract.doctrinePackageRef?.version).toBe("1.0.0");
  });
});

describe("T-A4 runtime validation — CheckAuth draft/proposed + projectId", () => {
  it("denies draft contracts", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:authz-draft",
        idempotencyKey: "idem-authz-draft",
        status: "draft",
      }),
    );

    const check = await stack.execution.checkExecutionAuthorization.execute({
      executionContractId: "xct:authz-draft",
      action: "publish-modeled-pack",
      target: "sfia-v3-modeled/v3-native-option-a",
      scope: "docs+schemas+examples only",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(check.ok).toBe(false);
    if (check.ok) return;
    expect(check.error.detailCode).toBe("STATE_CONFLICT");
    expect(check.error.internalCauseRef).toContain("not_confirmed_draft");
  });

  it("denies proposed contracts", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:authz-prop",
        idempotencyKey: "idem-authz-prop",
        status: "proposed",
      }),
    );

    const check = await stack.execution.checkExecutionAuthorization.execute({
      executionContractId: "xct:authz-prop",
      action: "publish-modeled-pack",
      target: "sfia-v3-modeled/v3-native-option-a",
      scope: "docs+schemas+examples only",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(check.ok).toBe(false);
    if (check.ok) return;
    expect(check.error.detailCode).toBe("STATE_CONFLICT");
    expect(check.error.internalCauseRef).toContain("not_confirmed_proposed");
  });
});

describe("T-A4 runtime validation — Confirm Option B + failNextSave", () => {
  it("Confirm failNextSave leaves confirmation granted (persist-before-consume)", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:cfm-fail-save",
      idempotencyKey: "idem-cfm-fail-save",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:fail-save",
    });

    stack.execution.store.failNextSave = true;
    const result = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");

    const cfm = await stack.decisions.confirmations.findById(cfmId);
    expect(cfm?.status).toBe("granted");

    const got = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(got.ok).toBe(true);
    if (!got.ok) return;
    expect(["validated", "confirmation_required"]).toContain(
      got.contract.status,
    );
  });

  it("Option B: consume fail after persist compensates via Cancel", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:cfm-opt-b",
      idempotencyKey: "idem-cfm-opt-b",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:opt-b",
    });

    // Persist (execution store) succeeds; consume (decision store) fails via
    // failNextSave. Option B compensates by cancelling the just-confirmed row.
    stack.decisions.store.failNextSave = "confirmation";
    const result = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONFIRMATION_CONSUME_FAILED");

    const got = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(got.ok).toBe(true);
    if (!got.ok) return;
    expect(got.contract.status).toBe("cancelled");

    const cfm = await stack.decisions.confirmations.findById(cfmId);
    // Consume failed — confirmation not consumed.
    expect(cfm?.status).toBe("granted");
  });
});
