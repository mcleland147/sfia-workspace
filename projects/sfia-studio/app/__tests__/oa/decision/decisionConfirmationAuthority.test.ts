/**
 * T-A3 Decision / Confirmation / Authority Foundation.
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestProjectServices,
  type ActorReference,
  type ProjectServices,
} from "@/lib/oa/project";
import {
  createTestCycleServices,
  type CycleServices,
} from "@/lib/oa/cycle";
import {
  createTestDecisionServices,
  MemoryAuthorityResolver,
  type DecisionServices,
} from "@/lib/oa/decision";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const MORRIS_ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  displayName: "Morris",
  authorityLevel: "N3",
};

const DELEGATE_ACTOR: ActorReference = {
  actorId: "actor:delegate",
  role: "approver",
  displayName: "Delegate",
  authorityLevel: "N2",
};

const HOSTILE_ACTOR: ActorReference = {
  actorId: "actor:impostor",
  role: "user",
  displayName: "Morris",
  authorityLevel: "N3",
};

function buildProjectServices(): ProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  return createTestProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-07-24T07:00:00.000Z",
  });
}

async function seedProject(
  projects: ProjectServices,
  projectId = "prj:campus360-oa",
): Promise<void> {
  const created = await projects.createProject.execute({
    projectId,
    title: "Campus360 Option A",
    objective: "Conduire Option A conversation → exécution gouvernée",
    doctrinePackagePin: VALID_PIN,
    createdBy: MORRIS_ACTOR,
    lpsVersionId: `lps:${projectId.replace("prj:", "")}-v1`,
  });
  expect(created.ok).toBe(true);
}

function buildStack(): {
  projects: ProjectServices;
  cycles: CycleServices;
  decisions: DecisionServices & {
    audit: { events: unknown[] };
    authority: MemoryAuthorityResolver;
  };
} {
  const projects = buildProjectServices();
  const cycles = createTestCycleServices({
    projectServices: projects,
    fixedNowIso: "2026-07-24T07:00:00.000Z",
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    authorityResolver: authority,
    fixedNowIso: "2026-07-24T07:00:00.000Z",
  });
  return { projects, cycles, decisions };
}

function registerMorris(
  authority: MemoryAuthorityResolver,
  scope = "subj:structuring-gate",
): void {
  authority.register({
    evidenceId: "evd:morris-n3",
    actorId: "actor:morris",
    level: "N3",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
    canActAsMorris: true,
  });
}

function registerDelegate(
  authority: MemoryAuthorityResolver,
  scope = "subj:n2-action",
): void {
  authority.register({
    evidenceId: "evd:delegate-n2",
    actorId: "actor:delegate",
    level: "N2",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
  });
}

const OPTIONS = [
  { optionId: "opt:go", label: "Go", recommended: true },
  { optionId: "opt:hold", label: "Hold" },
];

describe("T-A3 RecordHumanDecision", () => {
  it("records accepted morris decision with verified N3 + canActAsMorris", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority);

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:struct-1",
      projectId: "prj:campus360-oa",
      subject: "subj:structuring-gate",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:morris-n3",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.decision.status).toBe("accepted");
    expect(result.decision.authority).toBe("morris");
    expect(result.decision.schemaVersion).toBe("0.1.0-oa");
    expect(
      decisions.audit.events.some(
        (e) =>
          typeof e === "object" &&
          e !== null &&
          "event" in e &&
          e.event === "oa.decision.recorded",
      ),
    ).toBe(true);
  });

  it("denies morris claim from displayName without evidence", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:hostile-1",
      projectId: "prj:campus360-oa",
      subject: "subj:structuring-gate",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: HOSTILE_ACTOR,
      authority: "morris",
      reversible: false,
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_DENIED");
    expect(result.error.code).toBe("AUTHORITY_DENIED");
  });

  it("denies N3 evidence without canActAsMorris for morris authority", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    decisions.authority.register({
      evidenceId: "evd:n3-no-morris",
      actorId: "actor:morris",
      level: "N3",
      scope: "subj:structuring-gate",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: false,
    });

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:no-morris-gate",
      projectId: "prj:campus360-oa",
      subject: "subj:structuring-gate",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:n3-no-morris",
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_DENIED");
  });

  it("requires project existence", async () => {
    const { decisions } = buildStack();
    registerMorris(decisions.authority);

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:no-prj",
      projectId: "prj:missing",
      subject: "subj:structuring-gate",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PROJECT_NOT_FOUND");
  });

  it("verifies cycle belongs to same project", async () => {
    const { projects, cycles, decisions } = buildStack();
    await seedProject(projects);
    await seedProject(projects, "prj:other");
    registerMorris(decisions.authority, "subj:cycle-link");

    const cycle = await cycles.createCycle.execute({
      cycleInstanceId: "cyc:other-1",
      cycleTypeId: "cyc:standard",
      projectId: "prj:other",
      signals: {},
      createdBy: MORRIS_ACTOR,
    });
    expect(cycle.ok).toBe(true);

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:cycle-mismatch",
      projectId: "prj:campus360-oa",
      cycleInstanceId: "cyc:other-1",
      subject: "subj:cycle-link",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CYCLE_PROJECT_MISMATCH");
  });

  it("links Critical cycle without mutating cycle status (stays proposed)", async () => {
    const { projects, cycles, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:critical-ack");

    const cycle = await cycles.createCycle.execute({
      cycleInstanceId: "cyc:critical-1",
      cycleTypeId: "cyc:standard",
      projectId: "prj:campus360-oa",
      signals: { structuralChange: true },
      justification: "Structural change requires Critical profile",
      createdBy: MORRIS_ACTOR,
    });
    expect(cycle.ok).toBe(true);
    if (!cycle.ok) return;
    expect(cycle.cycle.status).toBe("proposed");

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:critical-link",
      projectId: "prj:campus360-oa",
      cycleInstanceId: "cyc:critical-1",
      subject: "subj:critical-ack",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(true);

    const after = await cycles.getCycle.execute({
      cycleInstanceId: "cyc:critical-1",
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.cycle.status).toBe("proposed");
  });

  it("allows system_non_structuring only with nonStructuring flag", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    decisions.authority.register({
      evidenceId: "evd:sys-n1",
      actorId: "actor:system",
      level: "N1",
      scope: "subj:non-struct",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });

    const denied = await decisions.recordHumanDecision.execute({
      decisionId: "dec:sys-denied",
      projectId: "prj:campus360-oa",
      subject: "subj:non-struct",
      options: OPTIONS,
      selectedOptionId: "opt:hold",
      actor: { actorId: "actor:system", role: "system" },
      authority: "system_non_structuring",
      reversible: true,
      authorityEvidenceId: "evd:sys-n1",
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) {
      expect(denied.error.detailCode).toBe("AUTHORITY_DENIED");
    }

    const ok = await decisions.recordHumanDecision.execute({
      decisionId: "dec:sys-ok",
      projectId: "prj:campus360-oa",
      subject: "subj:non-struct",
      options: OPTIONS,
      selectedOptionId: "opt:hold",
      actor: { actorId: "actor:system", role: "system" },
      authority: "system_non_structuring",
      reversible: true,
      nonStructuring: true,
      authorityEvidenceId: "evd:sys-n1",
    });
    expect(ok.ok).toBe(true);
  });

  it("enforces one accepted decision per subject (auto-supersede)", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:one-current");

    const first = await decisions.recordHumanDecision.execute({
      decisionId: "dec:one-a",
      projectId: "prj:campus360-oa",
      subject: "subj:one-current",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(first.ok).toBe(true);

    const second = await decisions.recordHumanDecision.execute({
      decisionId: "dec:one-b",
      projectId: "prj:campus360-oa",
      subject: "subj:one-current",
      options: OPTIONS,
      selectedOptionId: "opt:hold",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.supersededDecisionIds).toContain("dec:one-a");

    const prior = await decisions.getHumanDecision.execute({
      decisionId: "dec:one-a",
    });
    expect(prior.ok).toBe(true);
    if (!prior.ok) return;
    expect(prior.decision.status).toBe("superseded");
  });

  it("refuses second accepted when supersedeExistingAccepted=false", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:refuse-second");

    await decisions.recordHumanDecision.execute({
      decisionId: "dec:ref-a",
      projectId: "prj:campus360-oa",
      subject: "subj:refuse-second",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });

    const second = await decisions.recordHumanDecision.execute({
      decisionId: "dec:ref-b",
      projectId: "prj:campus360-oa",
      subject: "subj:refuse-second",
      options: OPTIONS,
      selectedOptionId: "opt:hold",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
      supersedeExistingAccepted: false,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.error.detailCode).toBe("STATE_CONFLICT");
  });

  it("lists decision history by project and subject", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:history");

    await decisions.recordHumanDecision.execute({
      decisionId: "dec:hist-1",
      projectId: "prj:campus360-oa",
      subject: "subj:history",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });

    const listed = await decisions.listDecisionHistory.execute({
      projectId: "prj:campus360-oa",
      subject: "subj:history",
    });
    expect(listed.ok).toBe(true);
    if (!listed.ok) return;
    expect(listed.decisions).toHaveLength(1);
  });
});

describe("T-A3 Confirmation lifecycle", () => {
  it("requests confirmation with idempotency reuse", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);

    const req = {
      confirmationId: "cfm:n2-1",
      level: "N2" as const,
      actionRef: "act:append-lps",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "subj:n2-action",
      idempotencyKey: "idem-key-n2-001",
    };

    const first = await decisions.requestConfirmation.execute(req);
    expect(first.ok).toBe(true);

    const reuse = await decisions.requestConfirmation.execute({
      ...req,
      confirmationId: "cfm:n2-1-dup",
    });
    expect(reuse.ok).toBe(true);
    if (!reuse.ok) return;
    expect(reuse.reusedFromIdempotencyKey).toBe(true);
    expect(reuse.confirmation.confirmationId).toBe("cfm:n2-1");
  });

  it("rejects idempotency key with different payload", async () => {
    const { decisions } = buildStack();

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:idem-a",
      level: "N2",
      actionRef: "act:a",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "subj:n2-action",
      idempotencyKey: "idem-conflict-01",
    });

    const conflict = await decisions.requestConfirmation.execute({
      confirmationId: "cfm:idem-b",
      level: "N3",
      actionRef: "act:a",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "subj:n2-action",
      idempotencyKey: "idem-conflict-01",
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("CONFIRMATION_IDEMPOTENCY_CONFLICT");
  });

  it("rejects idempotency key shorter than 8", async () => {
    const { decisions } = buildStack();
    const result = await decisions.requestConfirmation.execute({
      confirmationId: "cfm:short",
      level: "N1",
      actionRef: "act:x",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "scope",
      idempotencyKey: "short",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CONFIRMATION_INVALID");
  });

  it("grants N2 confirmation for verified N2 actor", async () => {
    const { decisions } = buildStack();
    registerDelegate(decisions.authority);

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:grant-n2",
      level: "N2",
      actionRef: "act:append-lps",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "subj:n2-action",
      idempotencyKey: "idem-grant-n2-01",
    });

    const granted = await decisions.grantConfirmation.execute({
      confirmationId: "cfm:grant-n2",
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:delegate-n2",
    });
    expect(granted.ok).toBe(true);
    if (!granted.ok) return;
    expect(granted.confirmation.status).toBe("granted");
  });

  it("refuses N2 actor granting N3 confirmation", async () => {
    const { decisions } = buildStack();
    registerDelegate(decisions.authority, "subj:n3-action");

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:n3-need",
      level: "N3",
      actionRef: "act:struct",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "subj:n3-action",
      idempotencyKey: "idem-n3-need-01",
    });

    const denied = await decisions.grantConfirmation.execute({
      confirmationId: "cfm:n3-need",
      actor: {
        ...DELEGATE_ACTOR,
        authorityLevel: "N3",
      },
      authorityEvidenceId: "evd:delegate-n2",
      claimedAuthorityLevel: "N3",
    });
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.error.detailCode).toBe("AUTHORITY_DENIED");
  });

  it("allows N3 actor to grant N2 confirmation", async () => {
    const { decisions } = buildStack();
    registerMorris(decisions.authority, "subj:n2-action");

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:n3-for-n2",
      level: "N2",
      actionRef: "act:append-lps",
      requestedBy: MORRIS_ACTOR,
      requestedTo: MORRIS_ACTOR,
      scope: "subj:n2-action",
      idempotencyKey: "idem-n3-for-n2-01",
    });

    const granted = await decisions.grantConfirmation.execute({
      confirmationId: "cfm:n3-for-n2",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(granted.ok).toBe(true);
  });

  it("consumes granted confirmation and forbids double consume", async () => {
    const { decisions } = buildStack();
    registerDelegate(decisions.authority);

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:consume-1",
      level: "N2",
      actionRef: "act:x",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "subj:n2-action",
      idempotencyKey: "idem-consume-001",
    });
    await decisions.grantConfirmation.execute({
      confirmationId: "cfm:consume-1",
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:delegate-n2",
    });

    const first = await decisions.consumeConfirmation.execute({
      confirmationId: "cfm:consume-1",
      actor: DELEGATE_ACTOR,
    });
    expect(first.ok).toBe(true);

    const second = await decisions.consumeConfirmation.execute({
      confirmationId: "cfm:consume-1",
      actor: DELEGATE_ACTOR,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.error.detailCode).toBe("CONFIRMATION_ALREADY_CONSUMED");
  });

  it("refuses consume of expired confirmation", async () => {
    const { decisions } = buildStack();
    registerDelegate(decisions.authority);

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:expired-1",
      level: "N2",
      actionRef: "act:x",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "subj:n2-action",
      idempotencyKey: "idem-expired-001",
      expiresAt: "2026-07-24T08:00:00.000Z",
    });
    const granted = await decisions.grantConfirmation.execute({
      confirmationId: "cfm:expired-1",
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:delegate-n2",
    });
    expect(granted.ok).toBe(true);

    // Simulate wall-clock expiry after grant, before consume.
    const stored = await decisions.confirmations.findById("cfm:expired-1");
    expect(stored).not.toBeNull();
    if (!stored) return;
    await decisions.confirmations.save({
      ...stored,
      expiresAt: "2026-07-24T06:30:00.000Z",
    });

    const consumed = await decisions.consumeConfirmation.execute({
      confirmationId: "cfm:expired-1",
      actor: DELEGATE_ACTOR,
      nowIso: "2026-07-24T07:00:00.000Z",
    });
    expect(consumed.ok).toBe(false);
    if (consumed.ok) return;
    expect(consumed.error.detailCode).toBe("CONFIRMATION_EXPIRED");
  });

  it("refuses and cancels confirmations", async () => {
    const { decisions } = buildStack();

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:refuse-1",
      level: "N1",
      actionRef: "act:x",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "s",
      idempotencyKey: "idem-refuse-001",
    });
    const refused = await decisions.refuseConfirmation.execute({
      confirmationId: "cfm:refuse-1",
      actor: DELEGATE_ACTOR,
    });
    expect(refused.ok).toBe(true);
    if (!refused.ok) return;
    expect(refused.confirmation.status).toBe("refused");

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:cancel-1",
      level: "N1",
      actionRef: "act:y",
      requestedBy: DELEGATE_ACTOR,
      requestedTo: DELEGATE_ACTOR,
      scope: "s",
      idempotencyKey: "idem-cancel-001",
    });
    const cancelled = await decisions.cancelConfirmation.execute({
      confirmationId: "cfm:cancel-1",
      actor: DELEGATE_ACTOR,
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    expect(cancelled.confirmation.status).toBe("cancelled");
  });
});

describe("T-A3 Authority matrix and VerifyAuthority", () => {
  it("scope mismatch returns AUTHORITY_SCOPE_MISMATCH", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:correct-scope");

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:scope-miss",
      projectId: "prj:campus360-oa",
      subject: "subj:wrong-scope",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    expect(result.error.code).toBe("AUTHORITY_DENIED");
  });

  it("ignores injected N3 on actor for VerifyAuthority", async () => {
    const { decisions } = buildStack();
    const verified = await decisions.verifyAuthority.execute({
      actorId: "actor:impostor",
      requiredLevel: "N3",
      scope: "any",
      authorityLevel: "N3",
      displayName: "Morris",
    });
    expect(verified.ok).toBe(true);
    expect(verified.result.ok).toBe(false);
    expect(verified.result.reason).toBe("no_evidence");
  });

  it("N3 covers N2 requirement", async () => {
    const { decisions } = buildStack();
    registerMorris(decisions.authority, "subj:cover");
    const verified = await decisions.verifyAuthority.execute({
      actorId: "actor:morris",
      requiredLevel: "N2",
      scope: "subj:cover",
      evidenceId: "evd:morris-n3",
    });
    expect(verified.result.ok).toBe(true);
    expect(verified.result.verifiedLevel).toBe("N3");
  });
});

describe("T-A3 Supersession", () => {
  it("supersedes with reason, re-verifies authority, preserves history", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:super");

    await decisions.recordHumanDecision.execute({
      decisionId: "dec:super-old",
      projectId: "prj:campus360-oa",
      subject: "subj:super",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });

    const supersede = await decisions.supersedeHumanDecision.execute({
      newDecisionId: "dec:super-new",
      supersedesDecisionId: "dec:super-old",
      selectedOptionId: "opt:hold",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      reason: "New evidence requires hold",
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: 1,
    });
    expect(supersede.ok).toBe(true);
    if (!supersede.ok) return;
    expect(supersede.decision.supersedes).toBe("dec:super-old");

    const old = await decisions.getHumanDecision.execute({
      decisionId: "dec:super-old",
    });
    expect(old.ok).toBe(true);
    if (!old.ok) return;
    expect(old.decision.status).toBe("superseded");

    const history = await decisions.listDecisionHistory.execute({
      projectId: "prj:campus360-oa",
      subject: "subj:super",
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(history.decisions.length).toBe(2);
  });

  it("OCC version conflict on supersede", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:occ");

    await decisions.recordHumanDecision.execute({
      decisionId: "dec:occ-old",
      projectId: "prj:campus360-oa",
      subject: "subj:occ",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });

    const conflict = await decisions.supersedeHumanDecision.execute({
      newDecisionId: "dec:occ-new",
      supersedesDecisionId: "dec:occ-old",
      selectedOptionId: "opt:hold",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      reason: "stale",
      authorityEvidenceId: "evd:morris-n3",
      expectedVersion: 99,
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("VERSION_CONFLICT");
  });
});

describe("T-A3 Epistemic DecisionRef and LPS decisionIds", () => {
  it("adds DecisionRef via public cycle API only after accept", async () => {
    const { projects, cycles, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:epi");

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:epi-1",
      projectId: "prj:campus360-oa",
      subject: "subj:epi",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
      linkEpistemicDecisionRef: true,
      epistemicItemId: "epi:decision-ref-1",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.epistemicItemId).toBe("epi:decision-ref-1");

    const state = await cycles.getEpistemicState.execute({
      projectId: "prj:campus360-oa",
    });
    expect(state.ok).toBe(true);
    if (!state.ok) return;
    const item = state.state.items.find(
      (i) => i.epistemicItemId === "epi:decision-ref-1",
    );
    expect(item?.type).toBe("DecisionRef");
  });

  it("carries decisionIds onto LPS via append extension", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:lps");

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:lps-1",
      projectId: "prj:campus360-oa",
      subject: "subj:lps",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
      linkToLivingProjectState: true,
      expectedLpsVersion: 1,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.livingProjectStateVersion).toBe(2);

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:campus360-oa",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.decisionIds).toContain("dec:lps-1");

    // Carry-forward when omitted on next append
    const append = await projects.appendLivingProjectStateVersion.execute({
      projectId: "prj:campus360-oa",
      expectedVersion: 2,
      objective: lps.livingProjectState.objective,
      createdBy: MORRIS_ACTOR,
    });
    expect(append.ok).toBe(true);
    if (!append.ok) return;
    expect(append.livingProjectState.decisionIds).toContain("dec:lps-1");
  });
});
