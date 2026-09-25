/**
 * CYCLE-RESERVATION-PILOTING-01 — R1 env naming + R2 historical HD compatibility.
 * ENV-AUTH-* · HIST-HD-*
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
  LOCAL_PILOT_AUTHORITY_ENV,
  LOCAL_MORRIS_GATE_AUTHORITY_ENV,
  M3_LOCAL_AUTHORITY_ENV,
  isLocalPilotAuthorityEnabled,
  isLocalMorrisGateAuthorityEnabled,
  registerLocalPiloteAuthority,
  registerLocalMorrisGateAuthority,
  LOCAL_PILOTE_ACTOR,
  isRuntimeStructuringAuthority,
  type DecisionServices,
  type HumanDecision,
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

const PILOT: ActorReference = {
  actorId: LOCAL_PILOTE_ACTOR.actorId,
  role: "decision_maker",
  displayName: "Pilote",
  authorityLevel: "none",
};

const OPTIONS = [
  { optionId: "opt:go", label: "Go" },
  { optionId: "opt:hold", label: "Hold" },
];

function buildStack(): {
  projects: ProjectServices;
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
} {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-25T09:00:00.000Z",
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestDecisionServices({
    projectServices: projects,
    authorityResolver: authority,
    fixedNowIso: "2026-09-25T09:00:00.000Z",
  });
  return { projects, decisions, authority };
}

async function seed(projects: ProjectServices): Promise<void> {
  const created = await projects.createProject.execute({
    projectId: "prj:reserve-closure-01",
    title: "Reserve Closure",
    objective: "R1/R2",
    doctrinePackagePin: VALID_PIN,
    createdBy: PILOT,
    lpsVersionId: "lps:reserve-closure-01-v1",
  });
  expect(created.ok).toBe(true);
}

describe("R1 — local authority env naming", () => {
  it("ENV-AUTH-01 canonical Pilot env = 1 → Pilot enabled", () => {
    const env = { [LOCAL_PILOT_AUTHORITY_ENV]: "1" } as unknown as NodeJS.ProcessEnv;
    expect(isLocalPilotAuthorityEnabled(env)).toBe(true);
    expect(isLocalMorrisGateAuthorityEnabled(env)).toBe(false);
  });

  it("ENV-AUTH-02 canonical absent + legacy = 1 → Pilot enabled by alias", () => {
    const env = { [M3_LOCAL_AUTHORITY_ENV]: "1" } as unknown as NodeJS.ProcessEnv;
    expect(isLocalPilotAuthorityEnabled(env)).toBe(true);
    expect(isLocalMorrisGateAuthorityEnabled(env)).toBe(true);
  });

  it("ENV-AUTH-03 canonical Pilot = 0 + legacy = 1 → canonical primes → Pilot disabled", () => {
    const env = {
      [LOCAL_PILOT_AUTHORITY_ENV]: "0",
      [M3_LOCAL_AUTHORITY_ENV]: "1",
    } as unknown as NodeJS.ProcessEnv;
    expect(isLocalPilotAuthorityEnabled(env)).toBe(false);
    // Morris still enabled via legacy (canonical Morris not defined).
    expect(isLocalMorrisGateAuthorityEnabled(env)).toBe(true);
  });

  it("ENV-AUTH-04 Pilot registration → canActAsPilot only", () => {
    const authority = new MemoryAuthorityResolver();
    const reg = registerLocalPiloteAuthority({
      authorityResolver: authority,
      scope: "subj:env-p",
      issuedAt: "2026-09-25T09:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:env-pilot",
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;
    const e = authority.getEvidence(reg.evidenceId)!;
    expect(e.canActAsPilot).toBe(true);
    expect(e.canActAsMorris).toBeUndefined();
  });

  it("ENV-AUTH-05 Morris registration → canActAsMorris only", () => {
    const authority = new MemoryAuthorityResolver();
    const reg = registerLocalMorrisGateAuthority({
      authorityResolver: authority,
      scope: "subj:env-m",
      issuedAt: "2026-09-25T09:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:env-morris",
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;
    const e = authority.getEvidence(reg.evidenceId)!;
    expect(e.canActAsMorris).toBe(true);
    expect(e.canActAsPilot).toBeUndefined();
  });

  it("ENV-AUTH-06 Pilot env alone does not enable Morris registration", () => {
    const env = { [LOCAL_PILOT_AUTHORITY_ENV]: "1" } as unknown as NodeJS.ProcessEnv;
    const authority = new MemoryAuthorityResolver();
    const morris = registerLocalMorrisGateAuthority({
      authorityResolver: authority,
      scope: "subj:env-p-only",
      issuedAt: "2026-09-25T09:00:00.000Z",
      env,
      evidenceId: "evd:env-p-only-m",
    });
    expect(morris.ok).toBe(false);
    if (morris.ok) return;
    expect(morris.code).toBe("AUTHORITY_NOT_CONFIGURED");

    const pilot = registerLocalPiloteAuthority({
      authorityResolver: authority,
      scope: "subj:env-p-only",
      issuedAt: "2026-09-25T09:00:00.000Z",
      env,
      evidenceId: "evd:env-p-only-p",
    });
    expect(pilot.ok).toBe(true);
  });

  it("ENV-AUTH-07 Morris env alone does not enable Pilot registration", () => {
    const env = {
      [LOCAL_MORRIS_GATE_AUTHORITY_ENV]: "1",
    } as unknown as NodeJS.ProcessEnv;
    const authority = new MemoryAuthorityResolver();
    const pilot = registerLocalPiloteAuthority({
      authorityResolver: authority,
      scope: "subj:env-m-only",
      issuedAt: "2026-09-25T09:00:00.000Z",
      env,
      evidenceId: "evd:env-m-only-p",
    });
    expect(pilot.ok).toBe(false);
    if (pilot.ok) return;
    expect(pilot.code).toBe("AUTHORITY_NOT_CONFIGURED");

    const morris = registerLocalMorrisGateAuthority({
      authorityResolver: authority,
      scope: "subj:env-m-only",
      issuedAt: "2026-09-25T09:00:00.000Z",
      env,
      evidenceId: "evd:env-m-only-m",
    });
    expect(morris.ok).toBe(true);
  });

  it("ENV-AUTH-08 legacy compatibility does not create dual-grant evidence", () => {
    const env = { [M3_LOCAL_AUTHORITY_ENV]: "1" } as unknown as NodeJS.ProcessEnv;
    const authority = new MemoryAuthorityResolver();
    const pilot = registerLocalPiloteAuthority({
      authorityResolver: authority,
      scope: "subj:legacy",
      issuedAt: "2026-09-25T09:00:00.000Z",
      env,
      evidenceId: "evd:legacy-pilot",
    });
    const morris = registerLocalMorrisGateAuthority({
      authorityResolver: authority,
      scope: "subj:legacy",
      issuedAt: "2026-09-25T09:00:00.000Z",
      env,
      evidenceId: "evd:legacy-morris",
    });
    expect(pilot.ok).toBe(true);
    expect(morris.ok).toBe(true);
    if (!pilot.ok || !morris.ok) return;
    const p = authority.getEvidence(pilot.evidenceId)!;
    const m = authority.getEvidence(morris.evidenceId)!;
    expect(p.canActAsPilot).toBe(true);
    expect(p.canActAsMorris).toBeUndefined();
    expect(m.canActAsMorris).toBe(true);
    expect(m.canActAsPilot).toBeUndefined();
    expect(pilot.evidenceId).not.toBe(morris.evidenceId);
  });
});

describe("R2 — historical HumanDecision authority=morris compatibility", () => {
  it("HIST-HD-01/02/03 legacy morris deserializes and stays morris (no rewrite)", async () => {
    const { projects, decisions, authority } = buildStack();
    await seed(projects);
    authority.register({
      evidenceId: "evd:hist-morris",
      actorId: PILOT.actorId,
      level: "N3",
      scope: "subj:hist",
      issuedAt: "2026-01-01T00:00:00.000Z",
      source: "test",
      canActAsMorris: true,
    });
    const recorded = await decisions.recordHumanDecision.execute({
      decisionId: "dec:hist-morris",
      projectId: "prj:reserve-closure-01",
      subject: "subj:hist",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: PILOT,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:hist-morris",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.authority).toBe("morris");

    const loaded = await decisions.getHumanDecision.execute({
      decisionId: "dec:hist-morris",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.decision.authority).toBe("morris");
    // Round-trip clone must preserve historical value.
    const clone = structuredClone(loaded.decision) as HumanDecision;
    expect(clone.authority).toBe("morris");
  });

  it("HIST-HD-04 new Project writer uses pilot", async () => {
    const { projects, decisions, authority } = buildStack();
    await seed(projects);
    const pilote = registerLocalPiloteAuthority({
      authorityResolver: authority,
      scope: "subj:new-pilot",
      issuedAt: "2026-09-25T09:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:new-pilot",
    });
    expect(pilote.ok).toBe(true);
    if (!pilote.ok) return;
    const recorded = await decisions.recordHumanDecision.execute({
      decisionId: "dec:new-pilot",
      projectId: "prj:reserve-closure-01",
      subject: "subj:new-pilot",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: LOCAL_PILOTE_ACTOR,
      authority: "pilot",
      reversible: false,
      authorityEvidenceId: pilote.evidenceId,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.authority).toBe("pilot");
  });

  it("HIST-HD-05 historical morris remains runtime-structuring continuity without Morris grant", () => {
    expect(isRuntimeStructuringAuthority("morris")).toBe(true);
    expect(isRuntimeStructuringAuthority("pilot")).toBe(true);
    expect(isRuntimeStructuringAuthority("delegated")).toBe(false);
  });

  it("HIST-HD-06 historical morris row does not let Pilot-only actor pass Morris gate", async () => {
    const { projects, decisions, authority } = buildStack();
    await seed(projects);
    authority.register({
      evidenceId: "evd:pilot-only",
      actorId: PILOT.actorId,
      level: "N3",
      scope: "subj:no-elevate",
      issuedAt: "2026-09-25T09:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    const denied = await decisions.recordHumanDecision.execute({
      decisionId: "dec:no-elevate",
      projectId: "prj:reserve-closure-01",
      subject: "subj:no-elevate",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: PILOT,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:pilot-only",
    });
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.error.internalCauseRef).toBe("morris_gate_denied");
  });

  it("HIST-HD-07 Pilot cannot supersede true Morris HD with pilot authority without Morris grant", async () => {
    const { projects, decisions, authority } = buildStack();
    await seed(projects);
    authority.register({
      evidenceId: "evd:true-morris",
      actorId: PILOT.actorId,
      level: "N3",
      scope: "subj:gov",
      issuedAt: "2026-01-01T00:00:00.000Z",
      source: "test",
      canActAsMorris: true,
    });
    const prior = await decisions.recordHumanDecision.execute({
      decisionId: "dec:gov-morris",
      projectId: "prj:reserve-closure-01",
      subject: "subj:gov",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: PILOT,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:true-morris",
    });
    expect(prior.ok).toBe(true);

    authority.register({
      evidenceId: "evd:pilot-supersede",
      actorId: PILOT.actorId,
      level: "N3",
      scope: "subj:gov",
      issuedAt: "2026-09-25T09:00:00.000Z",
      source: "test",
      canActAsPilot: true,
    });
    // Attempt to supersede with a NEW morris authority decision using Pilot-only evidence.
    const supersede = await decisions.supersedeHumanDecision.execute({
      newDecisionId: "dec:gov-supersede",
      supersedesDecisionId: "dec:gov-morris",
      selectedOptionId: "opt:hold",
      actor: PILOT,
      authority: "morris",
      reversible: false,
      reason: "attempt Pilot-only supersede of Morris governance HD",
      authorityEvidenceId: "evd:pilot-supersede",
    });
    expect(supersede.ok).toBe(false);
    if (supersede.ok) return;
    expect(supersede.error.internalCauseRef).toBe("morris_gate_denied");
  });
});
