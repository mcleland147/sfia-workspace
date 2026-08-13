/**
 * T-A3 adversarial / concurrency / immutability / fault injection.
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

describe("T-A3 adversarial authority", () => {
  it("ignores client-mutated options after clone-before-validate", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    decisions.authority.register({
      evidenceId: "evd:morris-n3",
      actorId: "actor:morris",
      level: "N3",
      scope: "subj:clone",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });

    const options = freshOptions();
    const pending = decisions.recordHumanDecision.execute({
      decisionId: "dec:clone-1",
      projectId: "prj:campus360-oa",
      subject: "subj:clone",
      options,
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });

    // Hostile TOCTOU: mutate after call starts / before validate completes.
    options.push({ optionId: "opt:evil", label: "Evil" });
    options[0].label = "MUTATED";

    const result = await pending;
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.decision.options).toHaveLength(2);
    expect(result.decision.options[0].label).toBe("Go");
    expect(
      result.decision.options.find((o) => o.optionId === "opt:evil"),
    ).toBeUndefined();
  });

  it("returns structuredClone boundaries (caller mutation does not affect store)", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    decisions.authority.register({
      evidenceId: "evd:morris-n3",
      actorId: "actor:morris",
      level: "N3",
      scope: "subj:immut",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:immut-1",
      projectId: "prj:campus360-oa",
      subject: "subj:immut",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    result.decision.options[0].label = "HACKED";
    const again = await decisions.getHumanDecision.execute({
      decisionId: "dec:immut-1",
    });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.decision.options[0].label).toBe("Go");
  });

  it("failNextSave decision rolls back transaction", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    decisions.authority.register({
      evidenceId: "evd:morris-n3",
      actorId: "actor:morris",
      level: "N3",
      scope: "subj:fail",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });

    (decisions.store as import("@/lib/oa/decision").MemoryDecisionStore).failNextSave = "decision";
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:fail-1",
      projectId: "prj:campus360-oa",
      subject: "subj:fail",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");

    const missing = await decisions.getHumanDecision.execute({
      decisionId: "dec:fail-1",
    });
    expect(missing.ok).toBe(false);
  });

  it("concurrent double grant yields one success and one conflict", async () => {
    const { decisions } = buildStack();
    decisions.authority.register({
      evidenceId: "evd:delegate-n2",
      actorId: "actor:delegate",
      level: "N2",
      scope: "subj:race-grant",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:race-grant",
      level: "N2",
      actionRef: "act:x",
      requestedBy: DELEGATE,
      requestedTo: DELEGATE,
      scope: "subj:race-grant",
      idempotencyKey: "idem-race-grant-1",
    });

    const [a, b] = await Promise.all([
      decisions.grantConfirmation.execute({
        confirmationId: "cfm:race-grant",
        actor: DELEGATE,
        authorityEvidenceId: "evd:delegate-n2",
      }),
      decisions.grantConfirmation.execute({
        confirmationId: "cfm:race-grant",
        actor: DELEGATE,
        authorityEvidenceId: "evd:delegate-n2",
      }),
    ]);

    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks).toHaveLength(1);
    expect(fails).toHaveLength(1);
    if (!fails[0].ok) {
      expect(fails[0].error.detailCode).toBe("STATE_CONFLICT");
    }
  });

  it("concurrent double consume yields one success and one already-consumed", async () => {
    const { decisions } = buildStack();
    decisions.authority.register({
      evidenceId: "evd:delegate-n2",
      actorId: "actor:delegate",
      level: "N2",
      scope: "subj:race-consume",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });

    await decisions.requestConfirmation.execute({
      confirmationId: "cfm:race-consume",
      level: "N2",
      actionRef: "act:x",
      requestedBy: DELEGATE,
      requestedTo: DELEGATE,
      scope: "subj:race-consume",
      idempotencyKey: "idem-race-consume-1",
    });
    await decisions.grantConfirmation.execute({
      confirmationId: "cfm:race-consume",
      actor: DELEGATE,
      authorityEvidenceId: "evd:delegate-n2",
    });

    const [a, b] = await Promise.all([
      decisions.consumeConfirmation.execute({
        confirmationId: "cfm:race-consume",
        actor: DELEGATE,
      }),
      decisions.consumeConfirmation.execute({
        confirmationId: "cfm:race-consume",
        actor: DELEGATE,
      }),
    ]);

    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks).toHaveLength(1);
    expect(fails).toHaveLength(1);
    if (!fails[0].ok) {
      expect(
        ["CONFIRMATION_ALREADY_CONSUMED", "STATE_CONFLICT"].includes(
          fails[0].error.detailCode,
        ),
      ).toBe(true);
    }
  });

  it("recommendation flag does not invent selected option", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    decisions.authority.register({
      evidenceId: "evd:morris-n3",
      actorId: "actor:morris",
      level: "N3",
      scope: "subj:rec",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });

    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:rec-1",
      projectId: "prj:campus360-oa",
      subject: "subj:rec",
      options: freshOptions(),
      selectedOptionId: "opt:hold",
      actor: ACTOR,
      authority: "morris",
      reversible: true,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.decision.selectedOptionId).toBe("opt:hold");
    expect(
      result.decision.options.find((o) => o.recommended)?.optionId,
    ).toBe("opt:go");
  });

  it("delegated authority requires verified >= N2", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    decisions.authority.register({
      evidenceId: "evd:n1-only",
      actorId: "actor:delegate",
      level: "N1",
      scope: "subj:delegated",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });

    const denied = await decisions.recordHumanDecision.execute({
      decisionId: "dec:deleg-denied",
      projectId: "prj:campus360-oa",
      subject: "subj:delegated",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: DELEGATE,
      authority: "delegated",
      reversible: true,
      authorityEvidenceId: "evd:n1-only",
    });
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.error.detailCode).toBe("AUTHORITY_DENIED");

    decisions.authority.register({
      evidenceId: "evd:n2-ok",
      actorId: "actor:delegate",
      level: "N2",
      scope: "subj:delegated",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
    const ok = await decisions.recordHumanDecision.execute({
      decisionId: "dec:deleg-ok",
      projectId: "prj:campus360-oa",
      subject: "subj:delegated",
      options: freshOptions(),
      selectedOptionId: "opt:go",
      actor: DELEGATE,
      authority: "delegated",
      reversible: true,
      authorityEvidenceId: "evd:n2-ok",
    });
    expect(ok.ok).toBe(true);
  });

  it("detailCode maps to modeled ErrorRecord codes", async () => {
    const { decisions } = buildStack();
    const verified = await decisions.verifyAuthority.execute({
      actorId: "actor:nobody",
      requiredLevel: "N3",
      scope: "x",
    });
    expect(verified.result.ok).toBe(false);

    const { createDecisionError, mapDetailToModeledCode } = await import(
      "@/lib/oa/decision"
    );
    expect(mapDetailToModeledCode("AUTHORITY_SCOPE_MISMATCH")).toBe(
      "AUTHORITY_DENIED",
    );
    expect(mapDetailToModeledCode("CONFIRMATION_EXPIRED")).toBe(
      "CONFIRMATION_REQUIRED",
    );
    expect(mapDetailToModeledCode("DECISION_REQUIRED")).toBe(
      "DECISION_REQUIRED",
    );
    const err = createDecisionError({
      detailCode: "AUTHORITY_DENIED",
      timestamp: "2026-07-24T07:00:00.000Z",
    });
    expect(err.domain).toBe("E");
    expect(err.code).toBe("AUTHORITY_DENIED");
  });
});
