/**
 * T-A3 VALIDATION — adversarial proofs for B1–B4 + authority evidence edges.
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
  type RecordHumanDecisionRequest,
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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  displayName: "Morris",
  authorityLevel: "N3",
};

const DELEGATE: ActorReference = {
  actorId: "actor:delegate",
  role: "approver",
  displayName: "Delegate",
  authorityLevel: "N2",
};

const OTHER: ActorReference = {
  actorId: "actor:other",
  role: "user",
  displayName: "Other",
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

async function seedProject(projects: ProjectServices): Promise<void> {
  const created = await projects.createProject.execute({
    projectId: "prj:campus360-oa",
    title: "Campus360",
    objective: "objective",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: "lps:campus360-oa-v1",
  });
  expect(created.ok).toBe(true);
}

function buildStack(): {
  projects: ProjectServices;
  cycles: CycleServices;
  decisions: DecisionServices & { authority: MemoryAuthorityResolver };
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

function freshOptions() {
  return [
    { optionId: "opt:go", label: "Go", recommended: true },
    { optionId: "opt:hold", label: "Hold" },
  ];
}

function registerMorris(
  authority: MemoryAuthorityResolver,
  scope: string,
  evidenceId = "evd:morris-n3",
): void {
  authority.register({
    evidenceId,
    actorId: "actor:morris",
    level: "N3",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
    canActAsMorris: true,
  });
}

describe("T-A3 validation B1 TOCTOU snapshots", () => {
  it("ignores authority/selectedOptionId/actor mutated after await starts", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:toctou");

    const actor = { ...ACTOR };
    const req: RecordHumanDecisionRequest = {
      decisionId: "dec:toctou-1",
      projectId: "prj:campus360-oa",
      subject: "subj:toctou",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    };

    const pending = decisions.recordHumanDecision.execute(req);

    // Hostile TOCTOU during project/authority awaits.
    req.authority = "delegated";
    req.selectedOptionId = "opt:hold";
    req.actor.actorId = "actor:evil";
    req.status = "refused";
    req.subject = "subj:hijacked";
    req.scope = "subj:hijacked";
    req.nonStructuring = true;

    const result = await pending;
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.decision.authority).toBe("morris");
    expect(result.decision.selectedOptionId).toBe("opt:go");
    expect(result.decision.actor.actorId).toBe("actor:morris");
    expect(result.decision.status).toBe("accepted");
    expect(result.decision.subject).toBe("subj:toctou");
    expect(result.decision.scope).toBe("subj:toctou");
  });

  it("ignores supersede selectedOptionId/authority mutated after await starts", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:sup-toctou");

    const first = await decisions.recordHumanDecision.execute({
      decisionId: "dec:sup-toctou-1",
      projectId: "prj:campus360-oa",
      subject: "subj:sup-toctou",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(first.ok).toBe(true);

    const actor = { ...ACTOR };
    const req = {
      newDecisionId: "dec:sup-toctou-2",
      supersedesDecisionId: "dec:sup-toctou-1",
      selectedOptionId: "opt:hold",
      actor,
      authority: "morris" as const,
      reversible: true,
      reason: "change course",
      authorityEvidenceId: "evd:morris-n3",
    };

    const pending = decisions.supersedeHumanDecision.execute(req);
    (req as { selectedOptionId: string }).selectedOptionId = "opt:go";
    (req as { authority: string }).authority = "delegated";
    req.actor.actorId = "actor:evil";

    const result = await pending;
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.decision.selectedOptionId).toBe("opt:hold");
    expect(result.decision.authority).toBe("morris");
    expect(result.decision.actor.actorId).toBe("actor:morris");
  });
});

describe("T-A3 validation B2 refuse/cancel vs grant", () => {
  it("concurrent grant+refuse: grant wins, refuse cannot overwrite", async () => {
    const { decisions } = buildStack();
    decisions.authority.register({
      evidenceId: "evd:delegate-n2",
      actorId: "actor:delegate",
      level: "N2",
      scope: "subj:race-refuse",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:race-refuse",
      level: "N2",
      actionRef: "act:x",
      requestedBy: DELEGATE,
      requestedTo: DELEGATE,
      scope: "subj:race-refuse",
      idempotencyKey: "idem-race-refuse-1",
    });

    const [grant, refuse] = await Promise.all([
      decisions.grantConfirmation.execute({
        confirmationId: "cfm:race-refuse",
        actor: DELEGATE,
        authorityEvidenceId: "evd:delegate-n2",
      }),
      decisions.refuseConfirmation.execute({
        confirmationId: "cfm:race-refuse",
        actor: DELEGATE,
      }),
    ]);

    const oks = [grant, refuse].filter((r) => r.ok);
    const fails = [grant, refuse].filter((r) => !r.ok);
    expect(oks).toHaveLength(1);
    expect(fails).toHaveLength(1);
    if (!fails[0].ok) {
      expect(fails[0].error.detailCode).toBe("STATE_CONFLICT");
    }

    // Winner must leave a terminal non-overwritten consistent status.
    const stored = await decisions.confirmations.findById("cfm:race-refuse");
    expect(stored).not.toBeNull();
    expect(["granted", "refused"]).toContain(stored!.status);
    if (grant.ok) {
      expect(stored!.status).toBe("granted");
    }
    if (refuse.ok) {
      expect(stored!.status).toBe("refused");
    }
  });

  it("refuse after grant is STATE_CONFLICT (no overwrite)", async () => {
    const { decisions } = buildStack();
    decisions.authority.register({
      evidenceId: "evd:delegate-n2b",
      actorId: "actor:delegate",
      level: "N2",
      scope: "subj:refuse-after",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:refuse-after",
      level: "N2",
      actionRef: "act:x",
      requestedBy: DELEGATE,
      requestedTo: DELEGATE,
      scope: "subj:refuse-after",
      idempotencyKey: "idem-refuse-after-1",
    });
    const granted = await decisions.grantConfirmation.execute({
      confirmationId: "cfm:refuse-after",
      actor: DELEGATE,
      authorityEvidenceId: "evd:delegate-n2b",
    });
    expect(granted.ok).toBe(true);

    const refused = await decisions.refuseConfirmation.execute({
      confirmationId: "cfm:refuse-after",
      actor: DELEGATE,
    });
    expect(refused.ok).toBe(false);
    if (refused.ok) return;
    expect(refused.error.detailCode).toBe("STATE_CONFLICT");

    const stored = await decisions.confirmations.findById("cfm:refuse-after");
    expect(stored?.status).toBe("granted");
  });

  it("cancel after consume is STATE_CONFLICT (no overwrite)", async () => {
    const { decisions } = buildStack();
    decisions.authority.register({
      evidenceId: "evd:delegate-n2c",
      actorId: "actor:delegate",
      level: "N2",
      scope: "subj:cancel-after",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:cancel-after",
      level: "N2",
      actionRef: "act:x",
      requestedBy: DELEGATE,
      requestedTo: DELEGATE,
      scope: "subj:cancel-after",
      idempotencyKey: "idem-cancel-after-1",
    });
    await decisions.grantConfirmation.execute({
      confirmationId: "cfm:cancel-after",
      actor: DELEGATE,
      authorityEvidenceId: "evd:delegate-n2c",
    });
    const consumed = await decisions.consumeConfirmation.execute({
      confirmationId: "cfm:cancel-after",
      actor: DELEGATE,
    });
    expect(consumed.ok).toBe(true);

    const cancelled = await decisions.cancelConfirmation.execute({
      confirmationId: "cfm:cancel-after",
      actor: DELEGATE,
    });
    expect(cancelled.ok).toBe(false);
    if (cancelled.ok) return;
    expect(cancelled.error.detailCode).toBe("STATE_CONFLICT");

    const stored = await decisions.confirmations.findById("cfm:cancel-after");
    expect(stored?.status).toBe("consumed");
  });
});

describe("T-A3 validation B3 concurrent supersede", () => {
  it("concurrent supersede of same prior yields one accepted successor", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:dual-sup");

    const first = await decisions.recordHumanDecision.execute({
      decisionId: "dec:dual-sup-0",
      projectId: "prj:campus360-oa",
      subject: "subj:dual-sup",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(first.ok).toBe(true);

    const [a, b] = await Promise.all([
      decisions.supersedeHumanDecision.execute({
        newDecisionId: "dec:dual-sup-a",
        supersedesDecisionId: "dec:dual-sup-0",
        selectedOptionId: "opt:hold",
        actor: ACTOR,
        authority: "morris",
        reversible: true,
        reason: "path A",
        authorityEvidenceId: "evd:morris-n3",
      }),
      decisions.supersedeHumanDecision.execute({
        newDecisionId: "dec:dual-sup-b",
        supersedesDecisionId: "dec:dual-sup-0",
        selectedOptionId: "opt:hold",
        actor: ACTOR,
        authority: "morris",
        reversible: true,
        reason: "path B",
        authorityEvidenceId: "evd:morris-n3",
      }),
    ]);

    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks).toHaveLength(1);
    expect(fails).toHaveLength(1);
    if (!fails[0].ok) {
      expect(fails[0].error.detailCode).toBe("STATE_CONFLICT");
    }

    const accepted = await decisions.decisions.listAcceptedBySubject(
      "prj:campus360-oa",
      "subj:dual-sup",
    );
    expect(accepted).toHaveLength(1);
    expect(["dec:dual-sup-a", "dec:dual-sup-b"]).toContain(
      accepted[0].decisionId,
    );

    const prior = await decisions.getHumanDecision.execute({
      decisionId: "dec:dual-sup-0",
    });
    expect(prior.ok).toBe(true);
    if (!prior.ok) return;
    expect(prior.decision.status).toBe("superseded");
  });

  it("refuses supersede of already superseded prior", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:already-sup", "evd:morris-n3b");

    await decisions.recordHumanDecision.execute({
      decisionId: "dec:already-0",
      projectId: "prj:campus360-oa",
      subject: "subj:already-sup",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3b",
    });
    const mid = await decisions.supersedeHumanDecision.execute({
      newDecisionId: "dec:already-1",
      supersedesDecisionId: "dec:already-0",
      selectedOptionId: "opt:hold",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      reason: "first",
      authorityEvidenceId: "evd:morris-n3b",
    });
    expect(mid.ok).toBe(true);

    const again = await decisions.supersedeHumanDecision.execute({
      newDecisionId: "dec:already-2",
      supersedesDecisionId: "dec:already-0",
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      reason: "second on stale prior",
      authorityEvidenceId: "evd:morris-n3b",
    });
    expect(again.ok).toBe(false);
    if (again.ok) return;
    expect(again.error.detailCode).toBe("STATE_CONFLICT");
  });
});

describe("T-A3 validation B4 link fail-closed", () => {
  it("LPS link version conflict fails closed with atomic rollback (no orphan)", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:lps-fail");

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:lps-fail-1",
      projectId: "prj:campus360-oa",
      subject: "subj:lps-fail",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
      linkToLivingProjectState: true,
      expectedLpsVersion: 99, // stale — current is 1
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("LPS_VERSION_CONFLICT");

    const stored = await decisions.getHumanDecision.execute({
      decisionId: "dec:lps-fail-1",
    });
    // M3: HD+LPS share one UoW — conflict rolls back; no orphan / no compensate.
    expect(stored.ok).toBe(false);

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:campus360-oa",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.decisionIds ?? []).not.toContain(
      "dec:lps-fail-1",
    );
  });

  it("LPS link without expectedLpsVersion fails closed with atomic rollback", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:lps-nov", "evd:morris-n3c");

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:lps-nov-1",
      projectId: "prj:campus360-oa",
      subject: "subj:lps-nov",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3c",
      linkToLivingProjectState: true,
      // expectedLpsVersion omitted
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
    expect(result.error.internalCauseRef).toBe(
      "lps_expected_version_required",
    );

    const stored = await decisions.getHumanDecision.execute({
      decisionId: "dec:lps-nov-1",
    });
    expect(stored.ok).toBe(false);
  });

  it("successful LPS link still returns ok with version", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    registerMorris(decisions.authority, "subj:lps-ok", "evd:morris-n3d");

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:lps-ok-1",
      projectId: "prj:campus360-oa",
      subject: "subj:lps-ok",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3d",
      linkToLivingProjectState: true,
      expectedLpsVersion: 1,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.livingProjectStateVersion).toBe(2);
    expect(result.decision.status).toBe("accepted");
  });
});

describe("T-A3 validation authority evidence edges", () => {
  it("denies when evidence actorId mismatches request actorId", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    decisions.authority.register({
      evidenceId: "evd:morris-only",
      actorId: "actor:morris",
      level: "N3",
      scope: "subj:mismatch",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:mismatch-1",
      projectId: "prj:campus360-oa",
      subject: "subj:mismatch",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: OTHER,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-only",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_DENIED");

    const verified = decisions.authority.verify({
      actorId: "actor:other",
      requiredLevel: "N3",
      scope: "subj:mismatch",
      evidenceId: "evd:morris-only",
      requireMorrisGate: true,
    });
    expect(verified.ok).toBe(false);
    expect(verified.reason).toBe("actor_mismatch");
  });

  it("rejects re-register escalating canActAsMorris (immutable evidence)", () => {
    const authority = new MemoryAuthorityResolver();
    authority.register({
      evidenceId: "evd:freeze",
      actorId: "actor:morris",
      level: "N3",
      scope: "subj:freeze",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: false,
    });

    expect(() =>
      authority.register({
        evidenceId: "evd:freeze",
        actorId: "actor:morris",
        level: "N3",
        scope: "subj:freeze",
        issuedAt: "2026-07-01T00:00:00.000Z",
        source: "registry",
        canActAsMorris: true,
      }),
    ).toThrow(/evidence_immutable/);

    const verified = authority.verify({
      actorId: "actor:morris",
      requiredLevel: "N3",
      scope: "subj:freeze",
      evidenceId: "evd:freeze",
      requireMorrisGate: true,
    });
    expect(verified.ok).toBe(false);
    expect(verified.reason).toBe("morris_gate_denied");
  });
});
