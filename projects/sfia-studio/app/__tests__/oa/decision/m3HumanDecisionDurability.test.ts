/**
 * M3 — HumanDecision durability, authority, LPS atomicity, supersession.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  LOCAL_MORRIS_M3_ACTOR,
  M3_LOCAL_AUTHORITY_SOURCE,
  MemoryAuthorityResolver,
  createTestSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
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
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m3-hd-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

async function boot(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T15:00:00.000Z",
    dbPath,
  });
  openServices.push(projects);
  const created = await projects.createProject.execute({
    projectId: "prj:m3-hd",
    title: "M3 HD",
    objective: "m3-hd-objective",
    context: "m3-hd-context",
    scope: "m3-hd-scope",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: "lps:m3-hd-v1",
    idempotencyKey: "idem:m3-hd",
  });
  if (!created.ok) throw new Error("create failed");
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
    fixedNowIso: "2026-08-13T15:00:00.000Z",
  });
  return { projects, cycles, decisions, authority };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

function sampleBasis(): DecisionBasis {
  return {
    sourceType: "proposal",
    sourceRef: "prop:m3:1",
    sourceDigest: "a".repeat(64),
    projectId: "prj:m3-hd",
    proposalContext: {
      lpsId: "lps:m3-hd-v1",
      lpsVersion: 1,
      doctrineDigest: VALID_DIGEST,
    },
    executionBasis: {
      objective: "ship m3",
      scope: "m3-prepare-scope",
      requestedOperation: "prepare-docs",
      stopConditions: ["STOP_A"],
    },
  };
}

describe("M3 HumanDecision durability", () => {
  it("B — persists HumanDecision + DecisionBasis across reopen", async () => {
    const dbPath = tempDbPath("hd2.sqlite");
    const { projects, decisions, authority } = await boot(dbPath);
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: authority,
      scope: "m3-prepare-scope",
      issuedAt: "2026-08-13T15:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:m3:b2",
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const decisionId = "dec:m3:durable-2";
    const recorded = await decisions.recordHumanDecision.execute({
      decisionId,
      projectId: "prj:m3-hd",
      subject: "m3-subject-b2",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: "m3-prepare-scope",
      authorityEvidenceId: reg.evidenceId,
      decisionBasis: sampleBasis(),
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.decisionBasis?.sourceRef).toBe("prop:m3:1");
    expect(recorded.decision.actor.actorId).toBe(LOCAL_MORRIS_M3_ACTOR.actorId);

    projects.dispose();
    openServices.pop();

    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const projects2 = createTestSqliteProductProjectServices({
      doctrineResolver: resolver,
      fixedNowIso: "2026-08-13T15:00:00.000Z",
      dbPath,
    }) as SqliteProductProjectServices;
    openServices.push(projects2);
    const cycles2 = createSqliteCycleServices({
      projectServices: projects2,
      productStore: projects2.store,
    });
    const authority2 = new MemoryAuthorityResolver();
    const decisions2 = createTestSqliteDecisionServices({
      projectServices: projects2,
      cycleServices: cycles2,
      productStore: projects2.store,
      authorityResolver: authority2,
    });
    const loaded = await decisions2.getHumanDecision.execute({ decisionId });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.decision.decisionBasis?.executionBasis.objective).toBe(
      "ship m3",
    );
  });

  it("C — adversarial: client canActAsMorris ignored; fail-closed without config", async () => {
    const dbPath = tempDbPath("auth.sqlite");
    const { decisions, authority } = await boot(dbPath);
    const denied = registerM3LocalMorrisAuthority({
      authorityResolver: authority,
      scope: "scope-x",
      issuedAt: "2026-08-13T15:00:00.000Z",
      forceEnable: false,
      env: { ...process.env, SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY: undefined },
    });
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.code).toBe("AUTHORITY_NOT_CONFIGURED");

    // Hostile client actor without server evidence → AUTHORITY_DENIED
    const result = await decisions.recordHumanDecision.execute({
      decisionId: "dec:m3:hostile",
      projectId: "prj:m3-hd",
      subject: "hostile",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: {
        actorId: "actor:attacker",
        role: "decision_maker",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      authority: "morris",
      reversible: true,
      scope: "scope-x",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("AUTHORITY_DENIED");
  });

  it("D — LPS append atomic with HD (conflict rolls back decision)", async () => {
    const dbPath = tempDbPath("atomic.sqlite");
    const { projects, decisions, authority } = await boot(dbPath);
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: authority,
      scope: "m3-prepare-scope",
      issuedAt: "2026-08-13T15:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:m3:atomic",
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const conflict = await decisions.recordHumanDecision.execute({
      decisionId: "dec:m3:atomic-fail",
      projectId: "prj:m3-hd",
      subject: "atomic-subject",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: "m3-prepare-scope",
      authorityEvidenceId: reg.evidenceId,
      decisionBasis: sampleBasis(),
      linkToLivingProjectState: true,
      expectedLpsVersion: 999,
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("LPS_VERSION_CONFLICT");

    const orphan = await decisions.getHumanDecision.execute({
      decisionId: "dec:m3:atomic-fail",
    });
    expect(orphan.ok).toBe(false);

    const ok = await decisions.recordHumanDecision.execute({
      decisionId: "dec:m3:atomic-ok",
      projectId: "prj:m3-hd",
      subject: "atomic-subject-ok",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: "m3-prepare-scope",
      authorityEvidenceId: reg.evidenceId,
      decisionBasis: sampleBasis(),
      linkToLivingProjectState: true,
      expectedLpsVersion: 1,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.livingProjectStateVersion).toBe(2);
    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m3-hd",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.decisionIds).toContain("dec:m3:atomic-ok");
  });

  it("E — supersession leaves prior durable as superseded", async () => {
    const dbPath = tempDbPath("super.sqlite");
    const { decisions, authority } = await boot(dbPath);
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: authority,
      scope: "m3-prepare-scope",
      issuedAt: "2026-08-13T15:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:m3:super",
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const first = await decisions.recordHumanDecision.execute({
      decisionId: "dec:m3:super-1",
      projectId: "prj:m3-hd",
      subject: "same-subject",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: "m3-prepare-scope",
      authorityEvidenceId: reg.evidenceId,
    });
    expect(first.ok).toBe(true);

    const second = await decisions.recordHumanDecision.execute({
      decisionId: "dec:m3:super-2",
      projectId: "prj:m3-hd",
      subject: "same-subject",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: "m3-prepare-scope",
      authorityEvidenceId: reg.evidenceId,
      supersedeExistingAccepted: true,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.supersededDecisionIds).toContain("dec:m3:super-1");

    const prior = await decisions.getHumanDecision.execute({
      decisionId: "dec:m3:super-1",
    });
    expect(prior.ok).toBe(true);
    if (!prior.ok) return;
    expect(prior.decision.status).toBe("superseded");
    expect(M3_LOCAL_AUTHORITY_SOURCE).toContain("TEMPORARY_WITH_EXIT");
  });
});
