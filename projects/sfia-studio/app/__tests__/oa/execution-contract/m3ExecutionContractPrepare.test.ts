/**
 * M3 — ExecutionContract UNRESOLVED semantics + fingerprint + safety (R1).
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
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  LOCAL_MORRIS_M3_ACTOR,
  MemoryAuthorityResolver,
  computeDecisionBasisSourceDigest,
  createTestSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
} from "@/lib/oa/decision";
import {
  computeExecutionContractSemanticFingerprint,
  createTestSqliteExecutionContractServices,
  executionContractSemanticMaterial,
  projectCursorPrepareOnly,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { F3_ACTION } from "@/features/project-assistant/f3/constants";
import { RUNTIME_DISCLOSURES } from "@/lib/vertical-slice-runtime/disclosures";

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

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

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

async function boot(name: string) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m3-xc-"));
  tempDirs.push(dir);
  const dbPath = path.join(dir, name);
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T17:00:00.000Z",
    dbPath,
  });
  openServices.push(projects);
  await projects.createProject.execute({
    projectId: "prj:m3-xc",
    title: "M3 XC",
    objective: "exact-contract",
    context: "xc",
    scope: "xc-scope",
    doctrinePackagePin: VALID_PIN,
    createdBy: {
      actorId: "actor:morris",
      role: "project_owner",
      displayName: "Morris",
      authorityLevel: "N3",
    },
    lpsVersionId: "lps:m3-xc-v1",
    idempotencyKey: "idem:m3-xc",
  });
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
  });
  const contracts = createTestSqliteExecutionContractServices({
    projectServices: projects,
    decisionServices: decisions,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  return { projects, decisions, contracts, authority };
}

async function recordAndPrepare(
  name: string,
  basisPatch: Partial<DecisionBasis["executionBasis"]>,
  decisionId: string,
) {
  const stack = await boot(name);
  const scope = basisPatch.scope ?? "exact-from-basis-scope";
  const reg = registerM3LocalMorrisAuthority({
    authorityResolver: stack.authority,
    scope,
    issuedAt: "2026-08-13T17:00:00.000Z",
    forceEnable: true,
    evidenceId: `evd:m3:${decisionId}`,
  });
  expect(reg.ok).toBe(true);
  if (!reg.ok) return null;

  const basis: DecisionBasis = {
    sourceType: "proposal",
    sourceRef: "prop:exact",
    sourceDigest: computeDecisionBasisSourceDigest({
      objective: basisPatch.objective ?? "exact-obj",
      op: basisPatch.requestedOperation ?? "",
    }),
    projectId: "prj:m3-xc",
    cycleInstanceId: undefined,
    proposalContext: {
      lpsId: "lps:m3-xc-v1",
      lpsVersion: 1,
      doctrineDigest: VALID_DIGEST,
    },
    executionBasis: {
      objective: "exact-obj",
      scope,
      cycleTypeId: "cyc:delivery",
      ...basisPatch,
    },
  };

  const recorded = await stack.decisions.recordHumanDecision.execute({
    decisionId,
    projectId: "prj:m3-xc",
    subject: decisionId,
    options: [{ optionId: "opt:go", label: "GO" }],
    selectedOptionId: "opt:go",
    actor: LOCAL_MORRIS_M3_ACTOR,
    authority: "morris",
    reversible: true,
    scope,
    authorityEvidenceId: reg.evidenceId,
    decisionBasis: basis,
    linkToLivingProjectState: true,
    expectedLpsVersion: 1,
  });
  expect(recorded.ok).toBe(true);

  const lps = await stack.projects.getCurrentLivingProjectState.execute({
    projectId: "prj:m3-xc",
  });
  expect(lps.ok).toBe(true);
  if (!lps.ok) return null;

  const prepared = await prepareM3FromDecision({
    projectId: "prj:m3-xc",
    decisionId,
    currentContext: {
      projectId: "prj:m3-xc",
      lpsId: lps.livingProjectState.lpsVersionId,
      lpsVersion: lps.livingProjectState.version,
      doctrineDigest: VALID_DIGEST,
    },
    deps: {
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      executionContractServices: stack.contracts,
      nowIso: () => "2026-08-13T17:00:00.000Z",
      forceM3Authority: true,
    },
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) return null;

  const loaded = await stack.contracts.getExecutionContract.execute({
    executionContractId: prepared.payload.contract.executionContractId,
  });
  expect(loaded.ok).toBe(true);
  if (!loaded.ok) return null;

  return { prepared: prepared.payload, contract: loaded.contract, stack };
}

describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
  it("R1-A — requestedOperation known → exact action (never prepare-from-decision)", async () => {
    const result = await recordAndPrepare(
      "r1a.sqlite",
      { requestedOperation: "exact-op-from-basis" },
      "dec:m3:r1a",
    );
    expect(result).not.toBeNull();
    if (!result) return;
    expect(result.prepared.contract.action).toBe("exact-op-from-basis");
    expect(result.prepared.contract.action).not.toBe(F3_ACTION);
    expect(result.prepared.contract.action).not.toMatch(/^prepare-from-decision:/);
    expect(result.contract.stopConditions).not.toContain("ACTION_UNRESOLVED");
  });

  it("R1-B — requestedOperation absent → UNRESOLVED_ACTION + stop", async () => {
    const result = await recordAndPrepare(
      "r1b.sqlite",
      { requestedOperation: "", objective: "obj-is-not-action" },
      "dec:m3:r1b",
    );
    expect(result).not.toBeNull();
    if (!result) return;
    expect(result.prepared.contract.action).toBe("UNRESOLVED_ACTION");
    expect(result.prepared.contract.action).not.toBe("obj-is-not-action");
    expect(result.contract.stopConditions).toContain("ACTION_UNRESOLVED");
  });

  it("R1-C — target never synthesized from cycle:/project:", async () => {
    const result = await recordAndPrepare(
      "r1c.sqlite",
      { requestedOperation: "op-c", cycleTypeId: "cyc:delivery" },
      "dec:m3:r1c",
    );
    expect(result).not.toBeNull();
    if (!result) return;
    expect(result.prepared.contract.target).toBe("UNRESOLVED_TARGET");
    expect(result.prepared.contract.target).not.toMatch(/^cycle:/);
    expect(result.prepared.contract.target).not.toMatch(/^project:/);
    expect(result.contract.stopConditions).toContain("TARGET_UNRESOLVED");
  });

  it("R1-D — capabilities sentinel only + CAPABILITY_UNRESOLVED", async () => {
    const result = await recordAndPrepare(
      "r1d.sqlite",
      { requestedOperation: "op-d" },
      "dec:m3:r1d",
    );
    expect(result).not.toBeNull();
    if (!result) return;
    expect(result.contract.requiredCapabilities).toEqual(["cap:unresolved"]);
    expect(result.contract.requiredCapabilities).not.toContain(
      "cap:m3-prepare-from-decision",
    );
    expect(result.contract.stopConditions).toContain("CAPABILITY_UNRESOLVED");
  });

  it("R1-E — reversibility fail-closed irreversible + REVERSIBILITY_UNRESOLVED", async () => {
    const result = await recordAndPrepare(
      "r1e.sqlite",
      { requestedOperation: "op-e" },
      "dec:m3:r1e",
    );
    expect(result).not.toBeNull();
    if (!result) return;
    // irreversible = fail-closed safety default ≠ business reversibility claim
    expect(result.contract.reversibility).toBe("irreversible");
    expect(result.contract.stopConditions).toContain("REVERSIBILITY_UNRESOLVED");
  });

  it("R1-F — PREPARE ONLY rails", async () => {
    const result = await recordAndPrepare(
      "r1f.sqlite",
      { requestedOperation: "op-f" },
      "dec:m3:r1f",
    );
    expect(result).not.toBeNull();
    if (!result) return;
    expect(result.prepared.cursorProjection.projectionOnly).toBe(true);
    expect(result.prepared.executionAllowed).toBe(false);
    expect(result.prepared.cursorReal).toBe(false);
    expect(result.prepared.attemptCreated).toBe(false);
    expect(result.prepared.cursorProjection.selectedAgentRef).toBeNull();
    expect(result.prepared.cursorProjection.gateD).toBe("NOT_CONSUMED");
  });

  it("R1-G — fingerprint persisted stable; changes when action resolves", async () => {
    const a = await recordAndPrepare(
      "r1g-a.sqlite",
      { requestedOperation: "" },
      "dec:m3:r1g-a",
    );
    expect(a).not.toBeNull();
    if (!a) return;
    const fp1 = a.prepared.contract.semanticFingerprint;
    expect(fp1).toMatch(/^[a-f0-9]{64}$/);
    expect(a.contract.semanticFingerprint).toBe(fp1);
    expect(computeExecutionContractSemanticFingerprint(a.contract)).toBe(fp1);

    const b = await recordAndPrepare(
      "r1g-b.sqlite",
      { requestedOperation: "resolved-op" },
      "dec:m3:r1g-b",
    );
    expect(b).not.toBeNull();
    if (!b) return;
    expect(b.prepared.contract.semanticFingerprint).not.toBe(fp1);
    expect(b.contract.semanticFingerprint).toBe(
      b.prepared.contract.semanticFingerprint,
    );
  });

  it("F1 — build→validate: persisted fingerprint === recomputed after validation", async () => {
    const stack = await boot("f1-lifecycle.sqlite");
    const decisionId = "dec:m3:f1";
    const scope = "f1-scope";
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope,
      issuedAt: "2026-08-13T17:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:m3:${decisionId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const basis: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:f1",
      sourceDigest: computeDecisionBasisSourceDigest({
        objective: "f1-obj",
        op: "exact-op-f1",
      }),
      projectId: "prj:m3-xc",
      proposalContext: {
        lpsId: "lps:m3-xc-v1",
        lpsVersion: 1,
        doctrineDigest: VALID_DIGEST,
      },
      executionBasis: {
        objective: "f1-obj",
        scope,
        requestedOperation: "exact-op-f1",
        cycleTypeId: "cyc:delivery",
      },
    };

    const recorded = await stack.decisions.recordHumanDecision.execute({
      decisionId,
      projectId: "prj:m3-xc",
      subject: decisionId,
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      decisionBasis: basis,
      linkToLivingProjectState: true,
      expectedLpsVersion: 1,
    });
    expect(recorded.ok).toBe(true);

    const built =
      await stack.contracts.buildExecutionContract.execute({
        executionContractId: "xct:m3:f1",
        projectId: "prj:m3-xc",
        decisionRefs: [decisionId],
        action: "exact-op-f1",
        target: "UNRESOLVED_TARGET",
        scope,
        requiredCapabilities: ["cap:unresolved"],
        requiredAuthority: "MORRIS",
        constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT", "NO_GATE_D"],
        stopConditions: [
          "AUTHORITY_DENIED",
          "CONTEXT_STALE",
          "DECISION_NOT_CURRENT",
          "TARGET_UNRESOLVED",
          "CAPABILITY_UNRESOLVED",
          "REVERSIBILITY_UNRESOLVED",
        ],
        evidenceRequirements: ["evreq:m3-prepare-decision-basis"],
        reversibility: "irreversible",
        idempotencyKey: "idem:m3-f1",
        correlationId: "cor:m3-f1",
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: reg.evidenceId,
      });
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const F_BUILD = built.contract.semanticFingerprint;
    expect(F_BUILD).toMatch(/^[a-f0-9]{64}$/);
    expect(computeExecutionContractSemanticFingerprint(built.contract)).toBe(
      F_BUILD,
    );
    expect(built.contract.status).toBe("draft");
    const buildVersion = built.contract.version;

    const validated = await stack.contracts.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: reg.evidenceId,
      expectedVersion: buildVersion,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;

    expect(validated.contract.status).not.toBe("draft");
    expect(validated.contract.version).toBeGreaterThan(buildVersion);
    const F_RECALC_VALIDATED = computeExecutionContractSemanticFingerprint(
      validated.contract,
    );
    expect(F_RECALC_VALIDATED).toBe(F_BUILD);
    expect(validated.contract.semanticFingerprint).toBe(F_BUILD);

    // Material must not include lifecycle fields.
    const material = executionContractSemanticMaterial(validated.contract);
    expect(material).not.toHaveProperty("status");
    expect(material).not.toHaveProperty("version");
  });

  it("F2 — execution-significant drift changes fingerprint; status/version do not", async () => {
    const result = await recordAndPrepare(
      "f2-drift.sqlite",
      { requestedOperation: "base-op" },
      "dec:m3:f2drift",
    );
    expect(result).not.toBeNull();
    if (!result) return;
    const base = result.contract;
    const F_BUILD = base.semanticFingerprint!;
    expect(computeExecutionContractSemanticFingerprint(base)).toBe(F_BUILD);

    const significant: Array<keyof ExecutionContract> = [
      "action",
      "scope",
      "requiredCapabilities",
      "stopConditions",
      "reversibility",
    ];
    for (const field of significant) {
      const modified = structuredClone(base);
      if (field === "action") modified.action = "drifted-action";
      if (field === "scope") modified.scope = "drifted-scope";
      if (field === "requiredCapabilities") {
        modified.requiredCapabilities = ["cap:other"];
      }
      if (field === "stopConditions") {
        modified.stopConditions = [...modified.stopConditions, "EXTRA_STOP"];
      }
      if (field === "reversibility") modified.reversibility = "reversible";
      expect(
        computeExecutionContractSemanticFingerprint(modified),
        `field ${field} must change fingerprint`,
      ).not.toBe(F_BUILD);
    }

    const statusOnly = { ...base, status: "confirmed" as const };
    expect(computeExecutionContractSemanticFingerprint(statusOnly)).toBe(
      F_BUILD,
    );
    const versionOnly = { ...base, version: base.version + 99 };
    expect(computeExecutionContractSemanticFingerprint(versionOnly)).toBe(
      F_BUILD,
    );
  });

  it("J/K — NO_GO does not prepare", async () => {
    const { decisions, contracts, authority, projects } = await boot(
      "reserves.sqlite",
    );
    const scope = "reserves-scope";
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: authority,
      scope,
      issuedAt: "2026-08-13T17:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:m3:rsv",
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    await decisions.recordHumanDecision.execute({
      decisionId: "dec:m3:nogo",
      projectId: "prj:m3-xc",
      subject: "nogo",
      options: [{ optionId: "opt:no-go", label: "NO-GO" }],
      selectedOptionId: "opt:no-go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      status: "refused",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
    });

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m3-xc",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const prepared = await prepareM3FromDecision({
      projectId: "prj:m3-xc",
      decisionId: "dec:m3:nogo",
      currentContext: {
        projectId: "prj:m3-xc",
        lpsId: lps.livingProjectState.lpsVersionId,
        lpsVersion: lps.livingProjectState.version,
        doctrineDigest: VALID_DIGEST,
      },
      deps: {
        decisionServices: decisions,
        authorityResolver: authority,
        executionContractServices: contracts,
        nowIso: () => "2026-08-13T17:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("DECISION_NOT_CURRENT");
  });

  it("L — critical safety negatives", () => {
    const projection = projectCursorPrepareOnly({
      schemaVersion: "0.2.0-oa",
      executionContractId: "xct:m3:safe",
      projectId: "prj:m3-xc",
      action: "UNRESOLVED_ACTION",
      target: "UNRESOLVED_TARGET",
      scope: "s",
      requiredCapabilities: ["cap:unresolved"],
      requiredAuthority: "MORRIS",
      constraints: [],
      stopConditions: ["ACTION_UNRESOLVED"],
      evidenceRequirements: [],
      reversibility: "irreversible",
      idempotencyKey: "idem:safe",
      correlationId: "cor:safe",
      status: "validated",
      version: 1,
      semanticFingerprint: "c".repeat(64),
    });
    expect(projection.projectionOnly).toBe(true);
    expect(projection.executionAllowed).toBe(false);
    expect(projection.cursorReal).toBe(false);
    expect(projection.gateD).toBe("NOT_CONSUMED");
    expect(projection.selectedAgentRef).toBeNull();
  });

  it("M/N/O — disclosures", () => {
    expect(RUNTIME_DISCLOSURES.persistence).toBe(
      "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
    );
    expect(RUNTIME_DISCLOSURES.humanDecisionRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.executionContractRestartSafe).toBe(true);
  });

  it("negative — prepareM3 source has no synthetic truth strings", async () => {
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/f3/prepareM3FromDecision.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/prepare-from-decision:\$\{/);
    expect(src).not.toMatch(/cap:m3-prepare-from-decision/);
    expect(src).not.toMatch(/`cycle:\$\{/);
    expect(src).not.toMatch(/`project:\$\{basis\.projectId\}/);
  });
});
