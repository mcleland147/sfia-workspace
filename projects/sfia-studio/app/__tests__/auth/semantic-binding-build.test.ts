/**
 * SEM-BUILD / SEM-LIFE — Auth S1 semantic binding via actual BuildExecutionContract.
 * Reuses computeInspectionFingerprint (existing EC inspection primitive).
 * ZERO real GitHub / OpenAI / web_search.
 *
 * @vitest-environment node
 */

import { beforeEach, describe, expect, it } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import type { AuthS1GovernedContractContext } from "@/lib/auth/piloteS1AuthorityPolicy";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  computeInspectionFingerprint,
  type BuildExecutionContractRequest,
} from "@/lib/oa/execution-contract";
import {
  baseBuildRequest,
  buildStack,
  grantConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  type Stack,
} from "../oa/execution-contract/helpers";

const pilote = {
  ok: true as const,
  githubUserId: "11111111",
  betterAuthUserId: "ba-user-a",
  actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
};

function futureWindow() {
  // MemoryAuthorityResolver.verify uses wall-clock Date.now() for expiry.
  const issuedAt = new Date(Date.now() - 60_000).toISOString();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  return { issuedAt, expiresAt };
}

function semanticFromBuild(
  req: BuildExecutionContractRequest,
): AuthS1GovernedContractContext {
  return {
    executionContractId: req.executionContractId,
    projectId: req.projectId,
    cycleInstanceId: req.cycleInstanceId,
    decisionRefs: req.decisionRefs,
    doctrinePackageRef: req.doctrinePackageRef,
    action: req.action,
    target: req.target,
    scope: req.scope,
    inputs: req.inputs,
    expectedOutputs: req.expectedOutputs,
    requiredCapabilities: [...req.requiredCapabilities],
    requiredAuthority: req.requiredAuthority,
    constraints: [...req.constraints],
    stopConditions: [...req.stopConditions],
    evidenceRequirements: [...req.evidenceRequirements],
    reversibility: req.reversibility,
    executionWindowClass: req.executionWindowClass,
    idempotencyKey: req.idempotencyKey,
    adapterExportRef: req.adapterExportRef,
  };
}

function effectForAuthority(
  requiredAuthority: "N1" | "N2" | "N3",
): {
  effectClass: "read" | "commit" | "push";
  action: string;
} {
  if (requiredAuthority === "N1") {
    return { effectClass: "read", action: "product:read" };
  }
  if (requiredAuthority === "N2") {
    return { effectClass: "commit", action: "product:commit" };
  }
  return { effectClass: "push", action: "product:push" };
}

function authBuildRequest(
  overrides: Partial<BuildExecutionContractRequest> = {},
): BuildExecutionContractRequest {
  const requiredAuthority = (overrides.requiredAuthority ?? "N3") as
    | "N1"
    | "N2"
    | "N3"
    | "MORRIS";
  const mapped =
    requiredAuthority === "MORRIS"
      ? { effectClass: "push" as const, action: "product:push" }
      : effectForAuthority(requiredAuthority);
  const { action: actionOverride, ...rest } = overrides;
  return baseBuildRequest({
    executionContractId: "xct:sem-bind-001",
    target: "tgt:sem-a",
    scope: "biz:sem-a",
    requiredAuthority: requiredAuthority === "MORRIS" ? "MORRIS" : requiredAuthority,
    idempotencyKey: "idem-sem-bind-001",
    actor: pilote.actor,
    authorityEvidenceId: "evd:sem-bind-s1",
    action: actionOverride ?? mapped.action,
    ...rest,
  });
}

async function issueMatchingS1(
  stack: Stack,
  req: BuildExecutionContractRequest,
  evidenceId = "evd:sem-bind-s1",
) {
  const contract = semanticFromBuild(req);
  const mapped = effectForAuthority(
    req.requiredAuthority as "N1" | "N2" | "N3",
  );
  const { issuedAt, expiresAt } = futureWindow();
  return issueS1AuthorityEvidence({
    pilote,
    authorityResolver: stack.decisions.authority,
    contract,
    governedEffects: {
      effectClass: mapped.effectClass,
      rollbackAvailable: true,
      protectedBoundaries: [],
      scopeIn: contract.scope,
      target: contract.target,
    },
    issuedAt,
    expiresAt,
    evidenceId,
  });
}

describe("SEM-BUILD Auth S1 semantic binding via BuildExecutionContract", () => {
  let stack: Stack;

  beforeEach(async () => {
    stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
  });

  it("SEM-BUILD-01 legitimate S1 for semantic A → Build A PASS", async () => {
    const req = authBuildRequest({ requiredAuthority: "N3" });
    const issued = await issueMatchingS1(stack, req);
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.scope).toBe(
      computeInspectionFingerprint(semanticFromBuild(req)),
    );
    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.contract.executionContractId).toBe(req.executionContractId);
    const stored = await stack.execution.getExecutionContract.execute({
      executionContractId: req.executionContractId,
    });
    expect(stored.ok).toBe(true);
  });

  it("SEM-BUILD-02 same ID, different action → DENY before persistence", async () => {
    const reqA = authBuildRequest({
      requiredAuthority: "N3",
      action: "product:push",
    });
    const issued = await issueMatchingS1(stack, reqA);
    expect(issued.ok).toBe(true);

    const reqB = authBuildRequest({
      requiredAuthority: "N3",
      action: "product:pull-request",
      // push and pull-request both project N3 — authority class matches; action differs.
    });
    // Cannot issue matching S1 for pull-request with push effects; use same S1 from A.
    const built = await stack.execution.buildExecutionContract.execute({
      ...reqB,
      authorityEvidenceId: "evd:sem-bind-s1",
    });
    expect(built.ok).toBe(false);
    if (built.ok) return;
    expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    const stored = await stack.execution.getExecutionContract.execute({
      executionContractId: reqA.executionContractId,
    });
    expect(stored.ok).toBe(false);
  });

  it("SEM-BUILD-03 same ID, different target → DENY", async () => {
    const reqA = authBuildRequest({ target: "tgt:sem-a" });
    expect((await issueMatchingS1(stack, reqA)).ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute({
      ...reqA,
      target: "tgt:sem-b",
    });
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-04 same ID, different business scope → DENY", async () => {
    const reqA = authBuildRequest({ scope: "biz:sem-a" });
    expect((await issueMatchingS1(stack, reqA)).ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute({
      ...reqA,
      scope: "biz:sem-b",
    });
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-05 S1 N3 for push cannot Build read/N1 same ID (hierarchy ≠ semantic)", async () => {
    const reqPush = authBuildRequest({
      requiredAuthority: "N3",
      action: "product:push",
    });
    expect((await issueMatchingS1(stack, reqPush)).ok).toBe(true);

    const reqRead = authBuildRequest({
      requiredAuthority: "N1",
      action: "product:read",
      authorityEvidenceId: "evd:sem-bind-s1",
    });
    const built = await stack.execution.buildExecutionContract.execute(reqRead);
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-06 same ID, requiredAuthority changed → DENY", async () => {
    const reqN3 = authBuildRequest({
      requiredAuthority: "N3",
      action: "product:push",
    });
    expect((await issueMatchingS1(stack, reqN3)).ok).toBe(true);
    // Keep push action but claim N2 — invalid product pairing; still semantic mismatch on requiredAuthority field.
    const built = await stack.execution.buildExecutionContract.execute({
      ...reqN3,
      requiredAuthority: "N2",
    });
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-07 mismatch leaves repository without unauthorized contract", async () => {
    const reqA = authBuildRequest();
    expect((await issueMatchingS1(stack, reqA)).ok).toBe(true);
    await stack.execution.buildExecutionContract.execute({
      ...reqA,
      target: "tgt:hostile",
    });
    const stored = await stack.execution.getExecutionContract.execute({
      executionContractId: reqA.executionContractId,
    });
    expect(stored.ok).toBe(false);
  });

  it("SEM-BUILD-08 exact semantic match remains authorized", async () => {
    const req = authBuildRequest({
      requiredAuthority: "N2",
      action: "product:commit",
    });
    expect((await issueMatchingS1(stack, req)).ok).toBe(true);
    const first = await stack.execution.buildExecutionContract.execute(req);
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const verify = stack.decisions.authority.verify({
      actorId: pilote.actor.actorId,
      requiredLevel: "N2",
      scope: computeInspectionFingerprint(first.contract),
      evidenceId: "evd:sem-bind-s1",
    });
    expect(verify.ok).toBe(true);
  });

  it("SEM-BUILD-09 non-Auth evidence still verifies with contract.scope", async () => {
    await seedAcceptedDecision(stack, {
      decisionId: "dec:oa-morris",
      subject: "subj:morris-build",
      authority: "morris",
    });
    const req = baseBuildRequest({
      executionContractId: "xct:non-auth-001",
      decisionRefs: ["dec:oa-morris"],
      idempotencyKey: "idem-non-auth-001",
      authorityEvidenceId: "evd:morris-n3",
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);
  });

  it("SEM-BUILD-10 Auth evidence for ID A does not authorize ID B", async () => {
    const reqA = authBuildRequest({
      executionContractId: "xct:sem-a",
      idempotencyKey: "idem-sem-a",
    });
    expect((await issueMatchingS1(stack, reqA, "evd:sem-a")).ok).toBe(true);
    const reqB = authBuildRequest({
      executionContractId: "xct:sem-b",
      idempotencyKey: "idem-sem-b",
      authorityEvidenceId: "evd:sem-a",
    });
    const built = await stack.execution.buildExecutionContract.execute(reqB);
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-11 MORRIS remains fail-closed for Auth S1", async () => {
    const req = authBuildRequest({ requiredAuthority: "MORRIS" });
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: stack.decisions.authority,
      contract: semanticFromBuild({
        ...req,
        requiredAuthority: "N3",
        action: "product:push",
      }),
      governedEffects: {
        effectClass: "push",
        rollbackAvailable: true,
        scopeIn: req.scope,
        target: req.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:sem-morris",
    });
    // Issuance for N3 push works; Build requiring MORRIS with that evidence must deny morris gate.
    expect(issued.ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute({
      ...req,
      requiredAuthority: "MORRIS",
      action: "product:push",
      authorityEvidenceId: "evd:sem-morris",
    });
    expect(built.ok).toBe(false);
    if (!built.ok) {
      // Auth cannot issue MORRIS-bound S1; N3 Auth S1 cannot authorize MORRIS build.
      expect(["AUTHORITY_DENIED", "AUTHORITY_SCOPE_MISMATCH"]).toContain(
        built.error.detailCode,
      );
    }
  });

  it("SEM-BUILD-12 canActAsMorris remains false on Auth S1", async () => {
    const req = authBuildRequest();
    const issued = await issueMatchingS1(stack, req);
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.canActAsMorris).toBe(false);
  });
});

describe("SEM-LIFE Auth S1 binding across EC lifecycle", () => {
  async function prepStack(): Promise<Stack> {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    return stack;
  }

  it("SEM-LIFE-01 Validate/Confirm still works with inspection fingerprint binding", async () => {
    const stack = await prepStack();

    const req = authBuildRequest({ requiredAuthority: "N3" });
    expect((await issueMatchingS1(stack, req)).ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const fpBeforeConfirm = computeInspectionFingerprint(built.contract);
    expect(fpBeforeConfirm).toBe(
      stack.decisions.authority.getEvidence("evd:sem-bind-s1")?.scope,
    );

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: req.executionContractId,
      actor: pilote.actor,
      authorityEvidenceId: "evd:sem-bind-s1",
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("confirmation_required");

    stack.decisions.authority.register({
      evidenceId: "evd:morris-cfm-sem",
      actorId: "actor:morris",
      level: "N3",
      scope: req.scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
    const confirmationId = await grantConfirmation(stack, {
      decisionRef: "dec:oa-001",
      scope: req.scope,
      evidenceId: "evd:morris-cfm-sem",
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: req.executionContractId,
      confirmationId,
      actor: pilote.actor,
      authorityEvidenceId: "evd:sem-bind-s1",
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(computeInspectionFingerprint(confirmed.contract)).toBe(
      fpBeforeConfirm,
    );
    expect(confirmed.contract.confirmationRef).toBe(confirmationId);
    expect(confirmed.contract.immutableAfterConfirm).toBe(true);
  });

  it("SEM-LIFE-02 Auth binding cannot authorize superseding semantic contract", async () => {
    const stack = await prepStack();

    const req = authBuildRequest();
    expect((await issueMatchingS1(stack, req)).ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);

    const supersede = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:sem-successor",
      supersedesExecutionContractId: req.executionContractId,
      supersessionReason: "intent-change",
      actor: pilote.actor,
      authorityEvidenceId: "evd:sem-bind-s1",
      action: "product:push",
      target: "tgt:changed",
      scope: "biz:changed",
      requiredAuthority: "N3",
      requiredCapabilities: ["cap:git-docs"],
      constraints: ["no-runtime-code"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:schemas"],
      reversibility: "partially_reversible",
      decisionRefs: req.decisionRefs,
    });
    expect(supersede.ok).toBe(false);
    if (!supersede.ok) {
      expect(supersede.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-LIFE-03 Cancel uses current contract semantic binding", async () => {
    const stack = await prepStack();
    const req = authBuildRequest();
    expect((await issueMatchingS1(stack, req)).ok).toBe(true);
    expect((await stack.execution.buildExecutionContract.execute(req)).ok).toBe(
      true,
    );
    const cancelled = await stack.execution.cancelExecutionContract.execute({
      executionContractId: req.executionContractId,
      actor: pilote.actor,
      authorityEvidenceId: "evd:sem-bind-s1",
      reason: "abort",
    });
    expect(cancelled.ok).toBe(true);
  });
});
