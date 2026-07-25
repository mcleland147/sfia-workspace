/**
 * T-A4 adversarial / Critical / anti-T-A5 / concurrency / immutability.
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
  registerN3NoMorris,
  seedAcceptedDecision,
  seedCriticalCycle,
  seedProject,
  seedStandardCycle,
} from "./helpers";

describe("T-A4 Critical fail-closed (R-T-A3-1)", () => {
  it("blocks Confirm when Critical cycle still proposed", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedCriticalCycle(stack);

    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:critical-001",
      executionContractId: "xct:crit-1",
      idempotencyKey: "idem-crit-1",
    });
    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:crit-1",
    });

    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) return;
    expect(confirmed.error.detailCode).toBe("CRITICAL_NOT_ACKNOWLEDGED");
    expect(confirmed.error.code).toBe("STATE_CONFLICT");

    // Confirmation must NOT be consumed when Critical blocks confirm.
    const cfm = await stack.decisions.confirmations.findById(cfmId);
    expect(cfm?.status).toBe("granted");
  });

  it("allows Build/Validate while Critical remains proposed", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedCriticalCycle(stack, "cyc:critical-2");

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:crit-build",
        cycleInstanceId: "cyc:critical-2",
        idempotencyKey: "idem-crit-build",
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: "xct:crit-build",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(["validated", "confirmation_required"]).toContain(
      validated.contract.status,
    );
  });
});

describe("T-A4 anti-T-A5 boundaries", () => {
  it("refuses selectedAgentRef injection on Build", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        selectedAgentRef: "agent:cursor",
      }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("TA5_STATUS_REFUSED");
  });

  it("refuses operations on injected executing status", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await stack.execution.buildExecutionContract.execute(baseBuildRequest());

    // Hostile store mutation simulating T-A5 status (should be refused).
    const stored = stack.execution.store.contracts.get("xct:oa-001");
    expect(stored).toBeDefined();
    if (!stored) return;
    stored.status = "executing";

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: "xct:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(validated.ok).toBe(false);
    if (validated.ok) return;
    expect(validated.error.detailCode).toBe("TA5_STATUS_REFUSED");

    const cancelled = await stack.execution.cancelExecutionContract.execute({
      executionContractId: "xct:oa-001",
      reason: "try cancel executing",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(cancelled.ok).toBe(false);
    if (cancelled.ok) return;
    expect(cancelled.error.detailCode).toBe("TA5_STATUS_REFUSED");
  });

  it("module source does not implement StartExecution / SelectAgent", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const root = path.resolve(
      __dirname,
      "../../../lib/oa/execution-contract",
    );
    const files: string[] = [];
    const walk = (dir: string) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full);
        else if (/\.ts$/.test(e.name)) files.push(full);
      }
    };
    walk(root);
    const hits: string[] = [];
    for (const f of files) {
      const text = fs.readFileSync(f, "utf8");
      for (const line of text.split("\n")) {
        if (
          /StartExecution|SelectExecutionAgent|class Start|executing.*production/.test(
            line,
          ) &&
          !line.trim().startsWith("*") &&
          !line.trim().startsWith("//") &&
          !/REFUSED|refuse|T-A5|must not|never/i.test(line)
        ) {
          // Allow type unions listing T-A5 statuses for schema parity.
          if (/Ta5ExecutionContractStatus|ExecutionContractStatus/.test(line))
            continue;
          if (/\| "executing"/.test(line) || /\| "completed"/.test(line))
            continue;
          hits.push(`${path.basename(f)}: ${line.trim()}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });
});

describe("T-A4 authority adversarial", () => {
  it("denies MORRIS without canActAsMorris", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerN3NoMorris(stack.decisions.authority);
    // Still need a decision — use delegated path with separate N2? Use morris decision with canActAsMorris for decision only.
    stack.decisions.authority.register({
      evidenceId: "evd:morris-decision",
      actorId: "actor:morris",
      level: "N3",
      scope: "subj:exec-gate",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
    await seedAcceptedDecision(stack, {
      evidenceId: "evd:morris-decision",
    });

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        requiredAuthority: "MORRIS",
        authorityEvidenceId: "evd:n3-no-morris",
        idempotencyKey: "idem-no-morris-gate",
        executionContractId: "xct:no-morris",
      }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_DENIED");
  });

  it("ignores claimedAuthorityLevel injection", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        claimedAuthorityLevel: "N3",
        actor: {
          actorId: "actor:impostor",
          role: "user",
          displayName: "Morris",
          authorityLevel: "N3",
        },
        authorityEvidenceId: undefined,
        executionContractId: "xct:hostile-claim",
        idempotencyKey: "idem-hostile-claim",
      }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_DENIED");
  });

  it("maps detailCode AUTHORITY_DENIED to modeled AUTHORITY_DENIED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    await seedAcceptedDecision(stack);
    // No authority registered.
    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:no-auth",
        idempotencyKey: "idem-no-auth",
      }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_DENIED");
    expect(result.error.code).toBe("AUTHORITY_DENIED");
    expect(result.error.domain).toBe("F");
  });
});

describe("T-A4 immutability / TOCTOU", () => {
  it("does not alias returned contract into the store", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    built.contract.status = "executing";
    built.contract.action = "mutated";

    const got = await stack.execution.getExecutionContract.execute({
      executionContractId: "xct:oa-001",
    });
    expect(got.ok).toBe(true);
    if (!got.ok) return;
    expect(got.contract.status).toBe("draft");
    expect(got.contract.action).toBe("publish-modeled-pack");
  });

  it("snapshots request fields before await (TOCTOU)", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);

    const req = baseBuildRequest({
      executionContractId: "xct:toctou",
      idempotencyKey: "idem-toctou",
    });
    const promise = stack.execution.buildExecutionContract.execute(req);
    // Hostile mutation after call starts.
    req.action = "mutated-after-call";
    req.requiredAuthority = "N1";
    const result = await promise;
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.contract.action).toBe("publish-modeled-pack");
    expect(result.contract.requiredAuthority).toBe("N3");
  });

  it("failNextSave does not leave partial contract", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    stack.execution.store.failNextSave = true;

    const result = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:fail-save",
        idempotencyKey: "idem-fail-save",
      }),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");

    const got = await stack.execution.getExecutionContract.execute({
      executionContractId: "xct:fail-save",
    });
    expect(got.ok).toBe(false);
  });
});

describe("T-A4 decision freshness", () => {
  it("Confirm fails when source decision is superseded", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const { contractId, version } = await buildValidatedContract(stack, {
      cycleInstanceId: "cyc:std-001",
      executionContractId: "xct:stale-dec",
      idempotencyKey: "idem-stale-dec",
    });

    const supersede = await stack.decisions.supersedeHumanDecision.execute({
      newDecisionId: "dec:oa-002",
      supersedesDecisionId: "dec:oa-001",
      selectedOptionId: "opt:hold",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: false,
      reason: "Changed option",
      authorityEvidenceId: "evd:morris-subjexecgate",
    });
    // may need correct evidence id from seedAcceptedDecision
    if (!supersede.ok) {
      // retry with registered subject evidence from helper pattern
      stack.decisions.authority.register({
        evidenceId: "evd:morris-supersede",
        actorId: "actor:morris",
        level: "N3",
        scope: "subj:exec-gate",
        issuedAt: "2026-07-01T00:00:00.000Z",
        source: "registry",
        canActAsMorris: true,
      });
      const retry = await stack.decisions.supersedeHumanDecision.execute({
        newDecisionId: "dec:oa-002",
        supersedesDecisionId: "dec:oa-001",
        selectedOptionId: "opt:hold",
        actor: MORRIS_ACTOR,
        authority: "morris",
        reversible: false,
        reason: "Changed option",
        authorityEvidenceId: "evd:morris-supersede",
      });
      expect(retry.ok).toBe(true);
    }

    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:stale-dec",
      decisionRef: "dec:oa-001",
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) return;
    expect(confirmed.error.detailCode).toBe("DECISION_NOT_CURRENT");
  });
});
