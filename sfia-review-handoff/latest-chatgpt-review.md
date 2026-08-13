# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-13 22:04:17 +0200 (CEST) |
| **Niveau** | FULL |
| **Cycle** | 9 — QA / validation |
| **Profil** | Critical |
| **Typologie** | RUN |
| **GO Morris** | GO MORRIS — M3 FINAL FINGERPRINT CORRECTION MICRO-CYCLE (**consommé**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche** | `delivery/sfia-studio-m3-human-governance` |
| **HEAD** | `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` |
| **origin/main** | `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` |
| **Remote M3** | ABSENT |
| **Handoff source tip** | `0bdfcb1a715dc8a442110b1587267c18cc24c78e` |
| **Project commit/push/PR** | NONE |

## Convergence Pre-check

| Item | Status |
|------|--------|
| M1 / M2 | SATISFIED |
| M3 | IMPLEMENTED CANDIDATE — NOT VALIDATED BY MORRIS |
| R1–R4 prior micro-cycle | CLOSED |
| F1 fingerprint lifecycle-stability | **CLOSED** below |
| F2 collateral test scope | **REGULARIZED** (forceM3Authority only) |
| M4 | NOT AUTHORIZED |
| Cursor REAL / Gate D | DISABLED / NOT_CONSUMED |
| runtime v3 | NON ADOPTED |

## Scope exact

WRITE:
- `semanticFingerprint.ts`
- `m3ExecutionContractPrepare.test.ts`
- `m3RestartProcessWorker.ts`
- `m3RestartProcessProof.test.ts`

REGULARIZED EXISTING (no further edits this cycle):
- `f2.orchestrate.test.ts`
- `f3.fixtureVerticalSlice.test.ts`

## F1 — Semantic fingerprint lifecycle-stable

### Material before → after

**Before:** material included `status` + `version` (lifecycle T-A4), causing draft→validated / version++ to change the hash.

**After:**
- EXCLUDED from material: `status`, `version`
- KEPT: execution-significant fields (projectId, cycleInstanceId, decisionRefs, doctrinePackageRef, action, target, scope, inputs, expectedOutputs, requiredCapabilities, requiredAuthority, constraints, stopConditions, evidenceRequirements, reversibility, idempotencyKey, supersession bindings, …)
- Nested `inputs` / `doctrinePackageRef` persistence-normalized via JSON round-trip so undefined keys cannot diverge build-time vs reload recompute (same as SQLite `payload_json`)

### Code complet

```typescript
/**
 * SHA-256 semantic fingerprint for ExecutionContract (M3).
 * Canonical JSON over execution-significant fields; excludes volatile provenance
 * and T-A4 lifecycle metadata (status, version) that do not change intent.
 *
 * Nested objects are persistence-normalized (JSON round-trip) so undefined keys
 * cannot make build-time hashes diverge from reload/recompute.
 */
import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "./types";

/** Drop undefined keys the same way SQLite payload_json persistence does. */
function persistenceNormalize<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export type ExecutionContractSemanticMaterial = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  decisionRefs?: string[];
  confirmationRef?: string;
  doctrinePackageRef?: ExecutionContract["doctrinePackageRef"];
  action: string;
  target: string;
  scope: string;
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  requiredCapabilities: string[];
  requiredAuthority: ExecutionContract["requiredAuthority"];
  constraints: string[];
  stopConditions: string[];
  evidenceRequirements: string[];
  reversibility: ExecutionContract["reversibility"];
  idempotencyKey: string;
  supersedesExecutionContractId?: string;
  supersessionReason?: string;
  adapterExportRef?: string;
  immutableAfterConfirm?: true;
};

export function executionContractSemanticMaterial(
  contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "decisionRefs"
    | "confirmationRef"
    | "doctrinePackageRef"
    | "action"
    | "target"
    | "scope"
    | "inputs"
    | "expectedOutputs"
    | "requiredCapabilities"
    | "requiredAuthority"
    | "constraints"
    | "stopConditions"
    | "evidenceRequirements"
    | "reversibility"
    | "idempotencyKey"
    | "supersedesExecutionContractId"
    | "supersessionReason"
    | "adapterExportRef"
    | "immutableAfterConfirm"
  >,
): ExecutionContractSemanticMaterial {
  const material: ExecutionContractSemanticMaterial = {
    executionContractId: contract.executionContractId,
    projectId: contract.projectId,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredCapabilities: [...contract.requiredCapabilities],
    requiredAuthority: contract.requiredAuthority,
    constraints: [...contract.constraints],
    stopConditions: [...contract.stopConditions],
    evidenceRequirements: [...contract.evidenceRequirements],
    reversibility: contract.reversibility,
    idempotencyKey: contract.idempotencyKey,
  };
  if (contract.cycleInstanceId !== undefined) {
    material.cycleInstanceId = contract.cycleInstanceId;
  }
  if (contract.decisionRefs !== undefined) {
    material.decisionRefs = [...contract.decisionRefs];
  }
  if (contract.confirmationRef !== undefined) {
    material.confirmationRef = contract.confirmationRef;
  }
  if (contract.doctrinePackageRef !== undefined) {
    material.doctrinePackageRef = persistenceNormalize(
      contract.doctrinePackageRef,
    );
  }
  if (contract.inputs !== undefined) {
    material.inputs = persistenceNormalize(contract.inputs);
  }
  if (contract.expectedOutputs !== undefined) {
    material.expectedOutputs = [...contract.expectedOutputs];
  }
  if (contract.supersedesExecutionContractId !== undefined) {
    material.supersedesExecutionContractId =
      contract.supersedesExecutionContractId;
  }
  if (contract.supersessionReason !== undefined) {
    material.supersessionReason = contract.supersessionReason;
  }
  if (contract.adapterExportRef !== undefined) {
    material.adapterExportRef = contract.adapterExportRef;
  }
  if (contract.immutableAfterConfirm !== undefined) {
    material.immutableAfterConfirm = contract.immutableAfterConfirm;
  }
  return material;
}

export function computeExecutionContractSemanticFingerprint(
  contract: Parameters<typeof executionContractSemanticMaterial>[0],
): string {
  const material = executionContractSemanticMaterial(contract);
  const canonical = canonicalizeJson(material);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

```

### Preuve status/version excluded

- Type `ExecutionContractSemanticMaterial` has **no** `status` / `version` properties
- `executionContractSemanticMaterial` never assigns them
- Tests: status-only and version-only copies keep same fingerprint

### Equality of four

PERSISTED (build)
= RECOMPUTED AFTER VALIDATE
= RECOMPUTED AFTER PROCESS RESTART
= CURSOR PROJECTION FINGERPRINT

### Tests (complet)

```typescript
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

```

## F3 restart recomputation (worker + proof)

```typescript
/**
 * Child-process worker for M3 restart proof A→B→C (R2).
 * Modes:
 *   create  — Product Project + Cycle
 *   go      — real saveProposal + recordF2Decision (NOT direct recordHumanDecision)
 *   prepare — prepareM3FromDecision with empty ProposalStore
 *   read    — reload decision/contract + fingerprint
 *
 * Usage: tsx m3RestartProcessWorker.ts <create|go|prepare|read> <dbPath> <projectId> [decisionId] [proposalId]
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
} from "@/lib/oa/decision";
import { createSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  getProposal,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";

const APP_ROOT = process.cwd();
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

function boot(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T16:00:00.000Z",
    dbPath,
  });
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  const contracts = createSqliteExecutionContractServices({
    projectServices: projects,
    decisionServices: decisions,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  return { projects, cycles, decisions, contracts, authority };
}

function buildProposal(input: {
  proposalId: string;
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  cycleInstanceId: string;
}): ProposalDto {
  return {
    proposalId: input.proposalId,
    status: "PROPOSED",
    rephrasedRequest: "m3-e2e-requested-operation",
    objective: "m3-e2e-objective",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "m3-e2e-rationale",
    scope: "m3-e2e-scope",
    outOfScope: ["out-a"],
    activatedBlocks: ["block-a"],
    expectedOutcome: "m3-e2e-outcome",
    sources: ["source:test"],
    risks: ["risk-a"],
    reservations: [],
    stopConditions: ["STOP_E2E"],
    morrisGateRequired: true,
    nextPossibleStep: "morris-gate",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: VALID_DIGEST,
      activeCycleInstanceId: input.cycleInstanceId,
      ckcResolutionRef: "ckc:m3-e2e",
    },
    processLocalNotice: "process-local",
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  };
}

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId, idArg, proposalIdArg] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error(
      "usage: <create|go|prepare|read> <dbPath> <projectId> [decisionId|proposalId] [proposalId]",
    );
  }

  const stack = boot(dbPath);
  try {
    if (mode === "create") {
      const created = await stack.projects.createProject.execute({
        projectId,
        title: "M3 Process Restart",
        objective: "m3-process-restart-objective",
        context: "m3-process-restart-context",
        scope: "m3-process-restart-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m3-proc-v1",
        idempotencyKey: `idem:${projectId}`,
      });
      if (!created.ok) {
        console.error(JSON.stringify(created.error));
        process.exit(2);
      }
      const cycle = await stack.cycles.createCycle.execute({
        cycleInstanceId: "cyc:m3-proc-1",
        cycleTypeId: "cyc:delivery",
        projectId,
        signals: {},
        createdBy: ACTOR,
        linkAsActiveCycle: true,
        expectedLpsVersion: 1,
        ckcResolutionRef: "ckc:m3-proc-bind",
      });
      if (!cycle.ok) {
        console.error(JSON.stringify(cycle.error));
        process.exit(3);
      }
      const lps = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) process.exit(4);
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId,
          lpsVersion: lps.livingProjectState.version,
          lpsId: lps.livingProjectState.lpsVersionId,
          cycleInstanceId: cycle.cycle.cycleInstanceId,
        })}\n`,
      );
      return;
    }

    if (mode === "go") {
      // Process A — real ProposalStore + recordF2Decision (anti-bypass).
      const proposalId = idArg ?? "prop:m3-e2e";
      const lps = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) process.exit(5);

      const proposal = buildProposal({
        proposalId,
        projectId,
        lpsId: lps.livingProjectState.lpsVersionId,
        lpsVersion: lps.livingProjectState.version,
        cycleInstanceId: "cyc:m3-proc-1",
      });

      // MUST call saveProposal — not invent DecisionBasis.
      const saved = saveProposal(proposal);
      if (getProposal(proposalId) === null) {
        process.stdout.write(
          `${JSON.stringify({ ok: false, code: "PROPOSAL_SAVE_FAILED" })}\n`,
        );
        process.exit(6);
      }

      const decided = await recordF2Decision({
        proposalId,
        projectId,
        decisionKind: "GO",
        currentContext: saved.contextSnapshot,
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        nowIso: () => "2026-08-13T16:00:00.000Z",
        forceM3Authority: true,
      });
      if (!decided.ok) {
        console.error(JSON.stringify(decided));
        process.exit(7);
      }

      const durable = await stack.decisions.getHumanDecision.execute({
        decisionId: decided.decision.decisionId,
      });
      if (!durable.ok || !durable.decision.decisionBasis) {
        process.stdout.write(
          `${JSON.stringify({ ok: false, code: "BASIS_MISSING" })}\n`,
        );
        process.exit(8);
      }
      const basis = durable.decision.decisionBasis;
      if (basis.sourceRef !== proposalId) {
        process.stdout.write(
          `${JSON.stringify({ ok: false, code: "SOURCE_REF_MISMATCH" })}\n`,
        );
        process.exit(9);
      }

      const lpsAfter = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lpsAfter.ok) process.exit(10);

      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          path: "recordF2Decision",
          proposalId,
          decisionId: decided.decision.decisionId,
          sourceRef: basis.sourceRef,
          sourceDigest: basis.sourceDigest,
          requestedOperation: basis.executionBasis.requestedOperation,
          lpsVersion: lpsAfter.livingProjectState.version,
          decisionIds: lpsAfter.livingProjectState.decisionIds,
          proposalPresentInProcessA: getProposal(proposalId) !== null,
          // Anti-cheat markers for the parent test:
          usedSaveProposal: true,
          usedRecordF2Decision: true,
          manuallyBuiltDecisionBasis: false,
        })}\n`,
      );
      return;
    }

    if (mode === "prepare") {
      const decisionId = idArg ?? "dec:m3-proc-1";
      const proposalId = proposalIdArg ?? "prop:m3-e2e";

      // Process B — ProposalStore MUST be empty (new process).
      const proposalInB = getProposal(proposalId);
      if (proposalInB !== null) {
        process.stdout.write(
          `${JSON.stringify({
            ok: false,
            code: "PROPOSAL_UNEXPECTEDLY_PRESENT",
          })}\n`,
        );
        process.exit(11);
      }

      const lps = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) process.exit(12);

      const prepared = await prepareM3FromDecision({
        projectId,
        decisionId,
        currentContext: {
          projectId,
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: VALID_DIGEST,
          activeCycleInstanceId: "cyc:m3-proc-1",
          ckcResolutionRef: "ckc:m3-e2e",
        },
        deps: {
          decisionServices: stack.decisions,
          authorityResolver: stack.authority,
          executionContractServices: stack.contracts,
          nowIso: () => "2026-08-13T16:00:00.000Z",
          forceM3Authority: true,
        },
      });
      if (!prepared.ok) {
        console.error(JSON.stringify(prepared));
        process.exit(13);
      }

      const loaded = await stack.contracts.getExecutionContract.execute({
        executionContractId: prepared.payload.contract.executionContractId,
      });
      if (!loaded.ok) process.exit(14);

      const { computeExecutionContractSemanticFingerprint } = await import(
        "@/lib/oa/execution-contract"
      );
      const persistedFingerprint =
        prepared.payload.contract.semanticFingerprint;
      const recomputedAfterValidate =
        computeExecutionContractSemanticFingerprint(loaded.contract);

      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          decisionId,
          contractId: prepared.payload.contract.executionContractId,
          fingerprint: persistedFingerprint,
          persistedFingerprint,
          recomputedAfterValidate,
          action: prepared.payload.contract.action,
          target: prepared.payload.contract.target,
          stopConditions: loaded.contract.stopConditions,
          requiredCapabilities: loaded.contract.requiredCapabilities,
          reversibility: loaded.contract.reversibility,
          status: loaded.contract.status,
          version: loaded.contract.version,
          proposalPresentInProcessB: getProposal(proposalId) !== null,
          projectionOnly: prepared.payload.cursorProjection.projectionOnly,
          executionAllowed: prepared.payload.executionAllowed,
          cursorReal: prepared.payload.cursorReal,
          gateD: prepared.payload.cursorProjection.gateD,
          selectedAgentRef: prepared.payload.cursorProjection.selectedAgentRef,
          attemptCreated: prepared.payload.attemptCreated,
          projectionFingerprint: prepared.payload.cursorProjection.fingerprint,
        })}\n`,
      );
      return;
    }

    if (mode === "read") {
      const decisionId = idArg ?? "dec:m3-proc-1";
      const proposalId = proposalIdArg ?? "prop:m3-e2e";
      const loaded = await stack.decisions.getHumanDecision.execute({
        decisionId,
      });
      if (!loaded.ok) process.exit(15);
      const contracts = await stack.contracts.listExecutionContractHistory.execute({
        projectId,
      });
      if (!contracts.ok || contracts.contracts.length === 0) process.exit(16);
      const contract = contracts.contracts[0]!;
      const { projectCursorPrepareOnly, computeExecutionContractSemanticFingerprint } =
        await import("@/lib/oa/execution-contract");
      const projection = projectCursorPrepareOnly(contract);
      const persistedFingerprint = contract.semanticFingerprint;
      const recomputedFingerprint =
        computeExecutionContractSemanticFingerprint(contract);
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          decisionId: loaded.decision.decisionId,
          contractId: contract.executionContractId,
          fingerprint: persistedFingerprint,
          persistedFingerprint,
          recomputedFingerprint,
          projectionFingerprint: projection.fingerprint,
          proposalPresentInProcessC: getProposal(proposalId) !== null,
          projectionOnly: projection.projectionOnly,
          executionAllowed: projection.executionAllowed,
          cursorReal: projection.cursorReal,
          gateD: projection.gateD,
          selectedAgentRef: projection.selectedAgentRef,
        })}\n`,
      );
      return;
    }

    throw new Error(`unknown mode ${mode}`);
  } finally {
    stack.projects.dispose();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});

```

```typescript
/**
 * M3 R2 — real Proposal → recordF2Decision → restart → PREPARE without Proposal.
 * Three independent Node processes, same Product DB.
 * @vitest-environment node
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const WORKER = path.join(
  APP_ROOT,
  "__tests__/oa/decision/m3RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

function run(
  mode: string,
  dbPath: string,
  projectId: string,
  extra: string[] = [],
) {
  return spawnSync(TSX, [WORKER, mode, dbPath, projectId, ...extra], {
    cwd: APP_ROOT,
    encoding: "utf8",
    env: { ...process.env },
    timeout: 90_000,
  });
}

describe("M3 process restart proof (R2 real F2 chain)", () => {
  it(
    "G — A create, B saveProposal+recordF2Decision, C PREPARE (Proposal absent), D read fingerprint",
    () => {
      expect(fs.existsSync(TSX)).toBe(true);
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m3-proc-"));
      const dbPath = path.join(dir, "oa-product.sqlite");
      const projectId = "prj:m3-proc";
      const proposalId = "prop:m3-e2e";

      // Anti-cheat: worker source must use real F2 APIs for Process A.
      const workerSrc = fs.readFileSync(WORKER, "utf8");
      expect(workerSrc).toMatch(/saveProposal\(/);
      expect(workerSrc).toMatch(/recordF2Decision\(/);
      expect(workerSrc).toMatch(/prepareM3FromDecision\(/);
      // Process A must not fabricate DecisionBasis for the E2E go path.
      expect(workerSrc).not.toMatch(
        /mode === "go"[\s\S]*decisionBasis:\s*\{/,
      );

      try {
        const create = run("create", dbPath, projectId);
        expect(create.status, create.stderr || create.stdout).toBe(0);
        const created = JSON.parse(create.stdout.trim()) as { ok: boolean };
        expect(created.ok).toBe(true);

        const go = run("go", dbPath, projectId, [proposalId]);
        expect(go.status, go.stderr || go.stdout).toBe(0);
        const decided = JSON.parse(go.stdout.trim()) as {
          ok: boolean;
          path?: string;
          proposalId?: string;
          decisionId?: string;
          sourceRef?: string;
          sourceDigest?: string;
          requestedOperation?: string;
          lpsVersion?: number;
          decisionIds?: string[];
          usedSaveProposal?: boolean;
          usedRecordF2Decision?: boolean;
          manuallyBuiltDecisionBasis?: boolean;
          proposalPresentInProcessA?: boolean;
        };
        expect(decided.ok).toBe(true);
        expect(decided.path).toBe("recordF2Decision");
        expect(decided.usedSaveProposal).toBe(true);
        expect(decided.usedRecordF2Decision).toBe(true);
        expect(decided.manuallyBuiltDecisionBasis).toBe(false);
        expect(decided.proposalPresentInProcessA).toBe(true);
        expect(decided.proposalId).toBe(proposalId);
        expect(decided.sourceRef).toBe(proposalId);
        expect(decided.sourceDigest).toMatch(/^[a-f0-9]{64}$/);
        expect(decided.requestedOperation).toBe("m3-e2e-requested-operation");
        expect(decided.lpsVersion).toBeGreaterThan(1);
        expect(decided.decisionIds).toContain(decided.decisionId!);
        const decisionId = decided.decisionId!;

        const prepare = run("prepare", dbPath, projectId, [
          decisionId,
          proposalId,
        ]);
        expect(prepare.status, prepare.stderr || prepare.stdout).toBe(0);
        expect(prepare.stdout).not.toMatch(/PROPOSAL_NOT_FOUND/);
        const prepared = JSON.parse(prepare.stdout.trim()) as {
          ok: boolean;
          decisionId?: string;
          contractId?: string;
          fingerprint?: string;
          persistedFingerprint?: string;
          recomputedAfterValidate?: string;
          projectionFingerprint?: string;
          action?: string;
          target?: string;
          stopConditions?: string[];
          requiredCapabilities?: string[];
          reversibility?: string;
          status?: string;
          version?: number;
          proposalPresentInProcessB?: boolean;
          projectionOnly?: boolean;
          executionAllowed?: boolean;
          cursorReal?: boolean;
          gateD?: string;
          selectedAgentRef?: string | null;
          attemptCreated?: boolean;
        };
        expect(prepared.ok).toBe(true);
        expect(prepared.proposalPresentInProcessB).toBe(false);
        expect(prepared.decisionId).toBe(decisionId);
        expect(prepared.action).toBe("m3-e2e-requested-operation");
        expect(prepared.action).not.toMatch(/^prepare-from-decision:/);
        expect(prepared.target).toBe("UNRESOLVED_TARGET");
        expect(prepared.target).not.toMatch(/^cycle:|^project:/);
        expect(prepared.requiredCapabilities).toEqual(["cap:unresolved"]);
        expect(prepared.requiredCapabilities).not.toContain(
          "cap:m3-prepare-from-decision",
        );
        expect(prepared.stopConditions).toEqual(
          expect.arrayContaining([
            "TARGET_UNRESOLVED",
            "CAPABILITY_UNRESOLVED",
            "REVERSIBILITY_UNRESOLVED",
          ]),
        );
        expect(prepared.reversibility).toBe("irreversible");
        expect(prepared.fingerprint).toMatch(/^[a-f0-9]{64}$/);
        expect(prepared.persistedFingerprint).toBe(prepared.fingerprint);
        expect(prepared.recomputedAfterValidate).toBe(prepared.fingerprint);
        expect(prepared.projectionFingerprint).toBe(prepared.fingerprint);
        expect(prepared.status).not.toBe("draft");
        expect(prepared.projectionOnly).toBe(true);
        expect(prepared.executionAllowed).toBe(false);
        expect(prepared.cursorReal).toBe(false);
        expect(prepared.gateD).toBe("NOT_CONSUMED");
        expect(prepared.selectedAgentRef).toBeNull();
        expect(prepared.attemptCreated).toBe(false);

        const read = run("read", dbPath, projectId, [decisionId, proposalId]);
        expect(read.status, read.stderr || read.stdout).toBe(0);
        const reread = JSON.parse(read.stdout.trim()) as {
          ok: boolean;
          decisionId?: string;
          contractId?: string;
          fingerprint?: string;
          persistedFingerprint?: string;
          recomputedFingerprint?: string;
          projectionFingerprint?: string;
          proposalPresentInProcessC?: boolean;
          executionAllowed?: boolean;
          cursorReal?: boolean;
          gateD?: string;
          selectedAgentRef?: string | null;
        };
        expect(reread.ok).toBe(true);
        expect(reread.proposalPresentInProcessC).toBe(false);
        expect(reread.decisionId).toBe(decisionId);
        expect(reread.contractId).toBe(prepared.contractId);
        // PERSISTED = RECOMPUTED AFTER VALIDATE = RECOMPUTED AFTER RESTART = PROJECTION
        expect(reread.persistedFingerprint).toBe(prepared.fingerprint);
        expect(reread.recomputedFingerprint).toBe(prepared.fingerprint);
        expect(reread.projectionFingerprint).toBe(prepared.fingerprint);
        expect(reread.fingerprint).toBe(prepared.fingerprint);
        expect(reread.executionAllowed).toBe(false);
        expect(reread.cursorReal).toBe(false);
        expect(reread.gateD).toBe("NOT_CONSUMED");
        expect(reread.selectedAgentRef).toBeNull();
      } finally {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    },
    120_000,
  );
});

```

## Non-régression R1/R2

UNRESOLVED_ACTION / UNRESOLVED_TARGET / cap:unresolved / REVERSIBILITY_UNRESOLVED + related stops + PREPARE_ONLY rails + Proposal absent after restart — **PASS** (targeted + full suite).

No synthetic `prepare-from-decision:` / `cap:m3-prepare-from-decision` / cycle|project targets.

## F2 — Collateral scope regularization

Diffs **before = after** this cycle (unchanged). Only `forceM3Authority: true` local injections.

### f2.orchestrate.test.ts

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
index ec51c5c..4ce26d6 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
@@ -474,6 +474,7 @@ describe("F2 decisions with shared OA stack", () => {
       decisionServices: runtime.oa!.decisionServices,
       authorityResolver: runtime.oa!.authorityResolver,
       nowIso: () => runtime.oa!.clock.nowIso(),
+      forceM3Authority: true,
     });
     expect(go.ok).toBe(true);
     if (!go.ok) return;
@@ -490,6 +491,7 @@ describe("F2 decisions with shared OA stack", () => {
       decisionServices: runtime.oa!.decisionServices,
       authorityResolver: runtime.oa!.authorityResolver,
       nowIso: () => runtime.oa!.clock.nowIso(),
+      forceM3Authority: true,
     });
     expect(noGo.ok).toBe(true);
     if (!noGo.ok) return;
@@ -505,6 +507,7 @@ describe("F2 decisions with shared OA stack", () => {
       decisionServices: runtime.oa!.decisionServices,
       authorityResolver: runtime.oa!.authorityResolver,
       nowIso: () => runtime.oa!.clock.nowIso(),
+      forceM3Authority: true,
     });
     expect(amend.ok).toBe(true);
     if (!amend.ok) return;

```

### f3.fixtureVerticalSlice.test.ts

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
index 662b11b..d97e15d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
@@ -119,6 +119,7 @@ async function seedApprovedGo(runtime: RuntimeApplicationService) {
     decisionServices: runtime.oa!.decisionServices,
     authorityResolver: runtime.oa!.authorityResolver,
     nowIso: () => runtime.oa!.clock.nowIso(),
+    forceM3Authority: true,
   });
   expect(go.ok).toBe(true);
   if (!go.ok) throw new Error("GO failed");

```

### setup.ts

Identical to origin/main regarding M3 authority — **no** global `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY`.

## Freeze / Roadmap

| Artefact | Result |
|----------|--------|
| Roadmap SHA before/after | `96977f7ef7a701e93b2989a3f655e1f987971cca0563e9dba595b4865be033a0` **IDENTICAL** |
| prepareM3FromDecision / recordDecision / db.ts / recordHumanDecision / cursor projection / SQLite decision+contract | **IDENTICAL** |
| Tracked name-status vs pre-cycle | **IDENTICAL** (fingerprint file remains untracked M3 candidate) |

## Validation

| Suite | Result |
|-------|--------|
| Targeted M3 + authority + f2/f3 | **PASS** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm test` | **1656 passed / 131 skipped / 0 failed** |
| `npm run build` | **PASS** |
| `git diff --check` | **PASS** |

## R4 Git truth

| Classe | Count |
|--------|-------|
| Tracked modified | 44 |
| Untracked application | 18 |
| Untracked .tmp | 43 |
| Staged | 0 |

### Tracked modified

```
projects/sfia-studio/app/__tests__/oa/decision/adversarialAuthority.test.ts
projects/sfia-studio/app/__tests__/oa/decision/validationAdversarial.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/lifecycleFoundation.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/qaAdversarialValidation.test.ts
projects/sfia-studio/app/__tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts
projects/sfia-studio/app/__tests__/oa/execution-contract/runtimeValidationHardening.test.ts
projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
projects/sfia-studio/app/features/project-assistant/actions.ts
projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
projects/sfia-studio/app/features/project-assistant/f3/index.ts
projects/sfia-studio/app/features/project-assistant/types.ts
projects/sfia-studio/app/lib/oa/decision/application/cancelConfirmation.ts
projects/sfia-studio/app/lib/oa/decision/application/consumeConfirmation.ts
projects/sfia-studio/app/lib/oa/decision/application/grantConfirmation.ts
projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts
projects/sfia-studio/app/lib/oa/decision/application/refuseConfirmation.ts
projects/sfia-studio/app/lib/oa/decision/application/requestConfirmation.ts
projects/sfia-studio/app/lib/oa/decision/application/supersedeHumanDecision.ts
projects/sfia-studio/app/lib/oa/decision/domain/types.ts
projects/sfia-studio/app/lib/oa/decision/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts
projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-contract/index.ts
projects/sfia-studio/app/lib/oa/project/index.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
```

### Untracked application

```
projects/sfia-studio/app/__tests__/oa/decision/m3HumanDecisionDurability.test.ts
projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/decision/m3RestartProcessProof.test.ts
projects/sfia-studio/app/__tests__/oa/decision/m3RestartProcessWorker.ts
projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
projects/sfia-studio/app/lib/oa/decision/domain/decisionBasisDigest.ts
projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts
projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts
projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/sqliteDecisionAuditJournal.ts
projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/sqliteDecisionRepository.ts
projects/sfia-studio/app/lib/oa/decision/ports/decisionPersistenceUnitOfWorkPort.ts
projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts
projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteExecutionAuditJournal.ts
projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteExecutionContractRepository.ts
projects/sfia-studio/app/lib/oa/execution-contract/ports/executionContractPersistenceUnitOfWorkPort.ts
projects/sfia-studio/app/lib/oa/execution-contract/projection/cursorPrepareOnlyProjection.ts
```

### Untracked .tmp

```
.tmp-sfia-review-pre.txt
.tmp-sfia-review/chatgpt-review.md
.tmp-sfia-review/convergence-pr-creation/A.md
.tmp-sfia-review/convergence-pr-creation/B.md
.tmp-sfia-review/convergence-pr-creation/commit-full.show
.tmp-sfia-review/convergence-pr-creation/pr-334.diff
.tmp-sfia-review/convergence-pr-creation/worktrees-after.txt
.tmp-sfia-review/convergence-pr-creation/worktrees-before.txt
.tmp-sfia-review/post-merge-status.diff
.tmp-sfia-review/reattach-recovery/POST_AFTER_HANDOFF_SHA.txt
.tmp-sfia-review/reattach-recovery/POST_RECOVERY_SHA.txt
.tmp-sfia-review/reattach-recovery/PRE_BEFORE_SWITCH.txt
.tmp-sfia-review/reattach-recovery/PRE_RECOVERY_SHA.txt
.tmp-sfia-review/reattach-recovery/diff-after.patch
.tmp-sfia-review/reattach-recovery/diff-before.patch
.tmp-sfia-review/reattach-recovery/diff-stat-after.txt
.tmp-sfia-review/reattach-recovery/diff-stat-before.txt
.tmp-sfia-review/reattach-recovery/names-after.txt
.tmp-sfia-review/reattach-recovery/other-wt-after.txt
.tmp-sfia-review/reattach-recovery/other-wt-before.txt
.tmp-sfia-review/reattach-recovery/staged-after-switch.txt
.tmp-sfia-review/reattach-recovery/staged-after-unstage.txt
.tmp-sfia-review/reattach-recovery/staged-before.txt
.tmp-sfia-review/reattach-recovery/status-after.txt
.tmp-sfia-review/reattach-recovery/status-before.txt
.tmp-sfia-review/reattach-recovery/worktrees-after.porcelain
.tmp-sfia-review/reattach-recovery/worktrees-after.txt
.tmp-sfia-review/reattach-recovery/worktrees-before-handoff.porcelain
.tmp-sfia-review/reattach-recovery/worktrees-before.porcelain
.tmp-sfia-review/status-commit/A.md
.tmp-sfia-review/status-commit/B.md
.tmp-sfia-review/status-commit/commit-full.show
.tmp-sfia-review/status-commit/diff-before-commit.patch
.tmp-sfia-review/status-commit/worktrees-before-handoff.porcelain
.tmp-sfia-review/status-pr/A.md
.tmp-sfia-review/status-pr/B.md
.tmp-sfia-review/status-pr/pr-335.diff
.tmp-sfia-review/status-pr/pr-body.md
.tmp-sfia-review/status-pr/pr-checks.txt
.tmp-sfia-review/status-pr/pr-diff-saved.diff
.tmp-sfia-review/status-pr/pr-view.json
.tmp-sfia-review/status-pr/runs.txt
.tmp-sfia-review/worktrees-before.txt
```

## Status claims

| Claim | Value |
|-------|-------|
| M3 | **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** |
| M3 VALIDATED BY MORRIS | NO |
| M3 COMMITTED / PUSHED / PR / MERGED | NO |
| M4 | NOT AUTHORIZED |
| Cursor REAL / Gate D / Auth-Ack / runtime v3 ADOPTED | NO |

## Coverage

| Item | Status |
|------|--------|
| fingerprint correction | COMPLETE |
| recomputation proof | COMPLETE |
| restart proof | COMPLETE |
| scope regularization | COMPLETE |
| non-regression | COMPLETE |
| Git truth | COMPLETE |
| modified content useful/full | YES |
| synthesis only | NO |
| review pack verdict | COMPLETE |

## Verdict

**M3 FINAL CORRECTION PASS —**
SEMANTIC FINGERPRINT LIFECYCLE-STABLE PASS —
BUILD = VALIDATED RECOMPUTE PASS —
PROCESS RESTART RECOMPUTE PASS —
CURSOR PROJECTION FINGERPRINT PASS —
EXECUTION-SIGNIFICANT DRIFT DETECTION PASS —
REAL PROPOSAL→GO→RESTART→PREPARE NON-REGRESSION PASS —
UNRESOLVED SEMANTICS NON-REGRESSION PASS —
COLLATERAL TEST SCOPE REGULARIZED PASS —
FULL VALIDATION GREEN —
M3 VALIDATION EVIDENCE COMPLETE —
READY FOR CHATGPT RE-VALIDATION / MORRIS VALIDATION GATE

Anti-claims: ≠ M3 VALIDATED BY MORRIS · ≠ M3 COMMITTED · ≠ M3 PUSHED · ≠ M3 PR · ≠ M3 MERGED · ≠ M4 AUTHORIZED · ≠ Cursor REAL · ≠ Gate D consumed · ≠ Auth/Ack promoted · ≠ full runtime durable · ≠ runtime v3 ADOPTED
