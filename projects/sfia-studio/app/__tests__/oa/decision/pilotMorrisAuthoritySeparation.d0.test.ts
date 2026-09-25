/**
 * CYCLE-RESERVATION-PILOTING-01 — Option A Pilot / Morris authority separation.
 * AUTH-PILOT-* · AUTH-MORRIS-* · AUTH-BOTH-* · AUTH-NO-INFERENCE-* · AUTH-CORR-*
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
  createTestDecisionServices,
  MemoryAuthorityResolver,
  registerLocalPiloteAuthority,
  registerLocalMorrisGateAuthority,
  registerM3LocalMorrisAuthority,
  LOCAL_PILOTE_ACTOR,
  LOCAL_MORRIS_M3_ACTOR,
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

const GENERIC_PILOT: ActorReference = {
  actorId: "actor:test-generic-pilot",
  role: "decision_maker",
  displayName: "Morris Pilote Alias", // hostile identity — must not grant
  authorityLevel: "none",
};

const OPTIONS = [
  { optionId: "opt:go", label: "Go" },
  { optionId: "opt:hold", label: "Hold" },
];

function buildProjectServices(): ProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  return createTestProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-25T08:00:00.000Z",
  });
}

async function seedProject(projects: ProjectServices): Promise<void> {
  const created = await projects.createProject.execute({
    projectId: "prj:auth-sep-01",
    title: "Authority Separation",
    objective: "Option A proof",
    doctrinePackagePin: VALID_PIN,
    createdBy: GENERIC_PILOT,
    lpsVersionId: "lps:auth-sep-01-v1",
  });
  expect(created.ok).toBe(true);
}

function buildStack(): {
  projects: ProjectServices;
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
} {
  const projects = buildProjectServices();
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestDecisionServices({
    projectServices: projects,
    authorityResolver: authority,
    fixedNowIso: "2026-09-25T08:00:00.000Z",
  });
  return { projects, decisions, authority };
}

describe("Option A — Pilot / Morris authority separation", () => {
  it("AUTH-CORR-01/02 DecisionAuthority contains distinct pilot and morris", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:pilot-ok",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:pilot",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    const pilot = await decisions.recordHumanDecision.execute({
      decisionId: "dec:pilot-enum",
      projectId: "prj:auth-sep-01",
      subject: "subj:pilot",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: "evd:pilot-ok",
    });
    expect(pilot.ok).toBe(true);
    if (!pilot.ok) return;
    expect(pilot.decision.authority).toBe("pilot");
    expect(pilot.decision.authority).not.toBe("morris");
  });

  it("AUTH-PILOT-01 PASS: N3 + canActAsPilot", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:p01",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:p01",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:p01",
      projectId: "prj:auth-sep-01",
      subject: "subj:p01",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: "evd:p01",
    });
    expect(result.ok).toBe(true);
  });

  it("AUTH-PILOT-02 DENY: N3 + canActAsMorris only → pilot_gate_denied", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:p02",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:p02",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsMorris: true,
    });
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:p02",
      projectId: "prj:auth-sep-01",
      subject: "subj:p02",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: "evd:p02",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_DENIED");
    expect(result.error.internalCauseRef).toBe("pilot_gate_denied");
  });

  it("AUTH-PILOT-03 DENY: N2 + canActAsPilot → level_insufficient", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:p03",
      actorId: GENERIC_PILOT.actorId,
      level: "N2",
      scope: "subj:p03",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:p03",
      projectId: "prj:auth-sep-01",
      subject: "subj:p03",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: "evd:p03",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe("level_insufficient");
  });

  it("AUTH-PILOT-04 DENY: wrong scope", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:p04",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:other",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:p04",
      projectId: "prj:auth-sep-01",
      subject: "subj:p04",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      scope: "subj:p04",
      authorityEvidenceId: "evd:p04",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
  });

  it("AUTH-PILOT-05 DENY: wrong actor", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:p05",
      actorId: "actor:someone-else",
      level: "N3",
      scope: "subj:p05",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:p05",
      projectId: "prj:auth-sep-01",
      subject: "subj:p05",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: "evd:p05",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe("actor_mismatch");
  });

  it("AUTH-PILOT-06 DENY: expired evidence", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:p06",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:p06",
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-02T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:p06",
      projectId: "prj:auth-sep-01",
      subject: "subj:p06",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: "evd:p06",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe("expired");
  });

  it("AUTH-MORRIS-01 PASS: N3 + canActAsMorris", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:m01",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:m01",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsMorris: true,
    });
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:m01",
      projectId: "prj:auth-sep-01",
      subject: "subj:m01",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:m01",
    });
    expect(result.ok).toBe(true);
  });

  it("AUTH-MORRIS-02 DENY: N3 + canActAsPilot only → morris_gate_denied", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:m02",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:m02",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:m02",
      projectId: "prj:auth-sep-01",
      subject: "subj:m02",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:m02",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe("morris_gate_denied");
  });

  it("AUTH-BOTH-01 evidence with both grants serves each gate separately", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:both",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:both",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
      canActAsMorris: true,
    });
    const pilot = await decisions.recordHumanDecision.execute({
      decisionId: "dec:both-pilot",
      projectId: "prj:auth-sep-01",
      subject: "subj:both",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: "evd:both",
    });
    expect(pilot.ok).toBe(true);

    const morris = await decisions.recordHumanDecision.execute({
      decisionId: "dec:both-morris",
      projectId: "prj:auth-sep-01",
      subject: "subj:both-m",
      options: OPTIONS,
      selectedOptionId: "opt:hold",
      actor: GENERIC_PILOT,
      authority: "morris",
      reversible: false,
      scope: "subj:both",
      authorityEvidenceId: "evd:both",
    });
    expect(morris.ok).toBe(true);
  });

  it("AUTH-NO-INFERENCE-01 displayName/actorId never grant authority", async () => {
    const { projects, decisions } = buildStack();
    await seedProject(projects);
    const impersonator: ActorReference = {
      actorId: "actor:morris-impersonator",
      role: "decision_maker",
      displayName: "Morris",
      authorityLevel: "N3",
    };
    const pilotClaim = await decisions.recordHumanDecision.execute({
      decisionId: "dec:inf-pilot",
      projectId: "prj:auth-sep-01",
      subject: "subj:inf",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: impersonator,
      authority: "pilot",
      reversible: false,
    });
    expect(pilotClaim.ok).toBe(false);

    const morrisClaim = await decisions.recordHumanDecision.execute({
      decisionId: "dec:inf-morris",
      projectId: "prj:auth-sep-01",
      subject: "subj:inf",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: impersonator,
      authority: "morris",
      reversible: false,
    });
    expect(morrisClaim.ok).toBe(false);
  });

  it("AUTH-CORR-08/06/07 generic non-Morris Pilot can pilot but not morris", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:generic-pilot",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:generic",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
      canActAsPilot: true,
      canActAsMorris: false,
    });
    const pilot = await decisions.recordHumanDecision.execute({
      decisionId: "dec:generic-pilot",
      projectId: "prj:auth-sep-01",
      subject: "subj:generic",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: "evd:generic-pilot",
    });
    expect(pilot.ok).toBe(true);

    const morris = await decisions.recordHumanDecision.execute({
      decisionId: "dec:generic-morris",
      projectId: "prj:auth-sep-01",
      subject: "subj:generic-m",
      options: OPTIONS,
      selectedOptionId: "opt:hold",
      actor: GENERIC_PILOT,
      authority: "morris",
      reversible: false,
      scope: "subj:generic",
      authorityEvidenceId: "evd:generic-pilot",
    });
    expect(morris.ok).toBe(false);
    if (!morris.ok) {
      expect(morris.error.internalCauseRef).toBe("morris_gate_denied");
    }
  });

  it("AUTH-CORR-03/04/05 LOCAL_PILOTE register grants Pilot not Morris", () => {
    const authority = new MemoryAuthorityResolver();
    const pilote = registerLocalPiloteAuthority({
      authorityResolver: authority,
      scope: "subj:local",
      issuedAt: "2026-09-25T08:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:local-pilote-test",
    });
    expect(pilote.ok).toBe(true);
    if (!pilote.ok) return;
    const evidence = authority.getEvidence(pilote.evidenceId);
    expect(evidence?.canActAsPilot).toBe(true);
    expect(evidence?.canActAsMorris).not.toBe(true);
    expect(evidence?.actorId).toBe(LOCAL_PILOTE_ACTOR.actorId);

    const pilotOk = authority.verify({
      actorId: LOCAL_PILOTE_ACTOR.actorId,
      requiredLevel: "N3",
      scope: "subj:local",
      evidenceId: pilote.evidenceId,
      requirePilotGate: true,
    });
    expect(pilotOk.ok).toBe(true);

    const morrisDeny = authority.verify({
      actorId: LOCAL_PILOTE_ACTOR.actorId,
      requiredLevel: "N3",
      scope: "subj:local",
      evidenceId: pilote.evidenceId,
      requireMorrisGate: true,
    });
    expect(morrisDeny.ok).toBe(false);
    expect(morrisDeny.reason).toBe("morris_gate_denied");
  });

  it("AUTH-CORR-05/23 true Morris gate + legacy Morris actor remain", () => {
    const authority = new MemoryAuthorityResolver();
    const morris = registerLocalMorrisGateAuthority({
      authorityResolver: authority,
      scope: "subj:morris-ec",
      issuedAt: "2026-09-25T08:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:local-morris-gate-test",
    });
    expect(morris.ok).toBe(true);
    if (!morris.ok) return;
    const evidence = authority.getEvidence(morris.evidenceId);
    expect(evidence?.canActAsMorris).toBe(true);
    expect(evidence?.canActAsPilot).not.toBe(true);

    const legacy = registerM3LocalMorrisAuthority({
      authorityResolver: authority,
      scope: "subj:legacy-morris",
      issuedAt: "2026-09-25T08:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:legacy-morris-test",
    });
    expect(legacy.ok).toBe(true);
    if (!legacy.ok) return;
    expect(legacy.actor.actorId).toBe(LOCAL_MORRIS_M3_ACTOR.actorId);
    expect(authority.getEvidence(legacy.evidenceId)?.canActAsMorris).toBe(true);
  });

  it("AUTH-CORR-10/21 historical authority=morris remains readable without rewrite", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:hist",
      actorId: GENERIC_PILOT.actorId,
      level: "N3",
      scope: "subj:hist",
      issuedAt: "2026-01-01T00:00:00.000Z",
      source: "test",
      canActAsMorris: true,
    });
    const recorded = await decisions.recordHumanDecision.execute({
      decisionId: "dec:hist-morris",
      projectId: "prj:auth-sep-01",
      subject: "subj:hist",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: GENERIC_PILOT,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:hist",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    const loaded = await decisions.getHumanDecision.execute({
      decisionId: "dec:hist-morris",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.decision.authority).toBe("morris");
  });

  it("AUTH-CORR-24/25 delegated and system_non_structuring unchanged", async () => {
    const { projects, decisions, authority } = buildStack();
    await seedProject(projects);
    authority.register({
      evidenceId: "evd:del",
      actorId: "actor:delegate",
      level: "N2",
      scope: "subj:del",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
    });
    const delegated = await decisions.recordHumanDecision.execute({
      decisionId: "dec:del",
      projectId: "prj:auth-sep-01",
      subject: "subj:del",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: {
        actorId: "actor:delegate",
        role: "approver",
        displayName: "Delegate",
        authorityLevel: "none",
      },
      authority: "delegated",
      reversible: true,
      authorityEvidenceId: "evd:del",
    });
    expect(delegated.ok).toBe(true);

    authority.register({
      evidenceId: "evd:sys",
      actorId: "actor:system",
      level: "N1",
      scope: "subj:sys",
      issuedAt: "2026-09-01T00:00:00.000Z",
      source: "test",
    });
    const system = await decisions.recordHumanDecision.execute({
      decisionId: "dec:sys",
      projectId: "prj:auth-sep-01",
      subject: "subj:sys",
      options: OPTIONS,
      selectedOptionId: "opt:hold",
      actor: {
        actorId: "actor:system",
        role: "system",
        displayName: "System",
        authorityLevel: "none",
      },
      authority: "system_non_structuring",
      reversible: true,
      nonStructuring: true,
      authorityEvidenceId: "evd:sys",
    });
    expect(system.ok).toBe(true);
  });
});
