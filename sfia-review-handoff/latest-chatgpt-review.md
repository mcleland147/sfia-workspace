# SFIA Studio — Review Pack FULL — Cycle 8 Delivery — M3 Human Governance

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-08-13 21:07:32 +0200 (Europe/Paris) |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Typologie** | EVOL |
| **GO Morris** | **M3** — consommé |
| **Repo** | mcleland147/sfia-workspace |
| **Branche** | `delivery/sfia-studio-m3-human-governance` |
| **HEAD / base** | `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` (= origin/main) |
| **Project commit/push/PR** | **NONE** |
| **M4 / Cursor REAL / Gate D** | **NOT AUTHORIZED / DISABLED / NOT CONSUMED** |
| **runtime v3** | **NON ADOPTED** |
| **M3 status** | **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** |

---

## 1. Local Git Truth

| Check | Résultat |
| --- | --- |
| origin/main | `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` |
| branch created from origin/main | PASS |
| remote M3 | ABSENT |
| staged | vide |
| untracked tmp | `.tmp-sfia-review*` only (toléré) |

---

## 2. Convergence Pre-check

Build Doctrine VALIDATED · G0-A/B ADOPTED · M1/M2 MERGED · M3 Delivery AUTHORIZED by current GO · M4 NOT AUTHORIZED · Product SQLite KEEP + additive M3 · T-A3/T-A4 COMPLETE M3 candidate · F2/F3 ADAPT · Confirmation Memory · Authority LOCAL_SINGLE_USER TEMPORARY WITH EXIT · Cursor REAL DISABLED.

---

## 3. Validations

| Gate | Result |
| --- | --- |
| typecheck | PASS |
| lint | PASS |
| npm test | **1648 passed / 131 skipped / 0 failed** |
| build | PASS |
| git diff --check | PASS |

---

## 4. Product schema M2→M3

Version: `m2-0.1.0` → `m3-0.1.0`

Tables: `oa_human_decisions`, `oa_execution_contracts`

```typescript
import { DatabaseSync } from "node:sqlite";

export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
export const PRODUCT_SCHEMA_VERSION_M2 = "m2-0.1.0" as const;
export const PRODUCT_SCHEMA_VERSION = "m3-0.1.0" as const;

const BASE_SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS schema_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS oa_projects (
  project_id TEXT PRIMARY KEY NOT NULL,
  status TEXT NOT NULL,
  current_lps_version_id TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);

CREATE TABLE IF NOT EXISTS oa_lps (
  lps_version_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  UNIQUE (project_id, version)
);

CREATE TABLE IF NOT EXISTS oa_lps_current (
  project_id TEXT PRIMARY KEY NOT NULL,
  lps_version_id TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  FOREIGN KEY (lps_version_id) REFERENCES oa_lps(lps_version_id)
);

CREATE TABLE IF NOT EXISTS oa_idempotency (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE TABLE IF NOT EXISTS oa_audit_events (
  row_id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  project_id TEXT,
  correlation_id TEXT,
  payload_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_oa_lps_project_version
  ON oa_lps(project_id, version);
CREATE INDEX IF NOT EXISTS idx_oa_audit_project
  ON oa_audit_events(project_id, occurred_at);
`;

const M2_CYCLE_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS oa_cycle_instances (
  cycle_instance_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  cycle_type_id TEXT NOT NULL,
  profile TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  acknowledged_at TEXT,
  closed_at TEXT,
  payload_json TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE INDEX IF NOT EXISTS idx_oa_cycle_project
  ON oa_cycle_instances(project_id, created_at);
CREATE INDEX IF NOT EXISTS idx_oa_audit_cycle
  ON oa_audit_events(event_type, occurred_at);
`;

const M3_DECISION_CONTRACT_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS oa_human_decisions (
  decision_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  cycle_instance_id TEXT,
  subject TEXT NOT NULL,
  status TEXT NOT NULL,
  authority TEXT NOT NULL,
  version INTEGER NOT NULL,
  effective_at TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE INDEX IF NOT EXISTS idx_oa_human_decisions_project
  ON oa_human_decisions(project_id, effective_at);
CREATE INDEX IF NOT EXISTS idx_oa_human_decisions_subject
  ON oa_human_decisions(project_id, subject, status);

CREATE TABLE IF NOT EXISTS oa_execution_contracts (
  execution_contract_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  cycle_instance_id TEXT,
  status TEXT NOT NULL,
  idempotency_key TEXT NOT NULL UNIQUE,
  semantic_fingerprint TEXT NOT NULL,
  version INTEGER NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_project
  ON oa_execution_contracts(project_id, created_at);
CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_idempotency
  ON oa_execution_contracts(idempotency_key);
`;

function readSchemaVersion(db: DatabaseSync): string | null {
  const row = db
    .prepare("SELECT value FROM schema_meta WHERE key = ?")
    .get("schema_version") as { value?: string } | undefined;
  return row?.value ?? null;
}

function setSchemaVersion(db: DatabaseSync, version: string): void {
  db.prepare(
    `INSERT INTO schema_meta(key, value) VALUES (?, ?)
     ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
  ).run("schema_version", version);
}

function assertIntegrity(db: DatabaseSync): void {
  const integrity = db.prepare("PRAGMA integrity_check").get() as
    | Record<string, string>
    | undefined;
  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
  if (raw !== "ok") {
    try {
      db.close();
    } catch {
      /* ignore */
    }
    throw new Error("product_sqlite_integrity_failed");
  }
}

function applyM2(db: DatabaseSync): void {
  db.exec(M2_CYCLE_SCHEMA_SQL);
}

function applyM3(db: DatabaseSync): void {
  db.exec(M3_DECISION_CONTRACT_SCHEMA_SQL);
}

/**
 * Open Product SQLite with additive M1→M2→M3 migration.
 * Fail closed on unknown/future schema versions.
 */
export function openProductSqlite(dbPath: string): DatabaseSync {
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(BASE_SCHEMA_SQL);

  const version = readSchemaVersion(db);
  if (version === null || version === PRODUCT_SCHEMA_VERSION_M1) {
    applyM2(db);
    applyM3(db);
    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
  } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
    applyM3(db);
    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
  } else if (version === PRODUCT_SCHEMA_VERSION) {
    applyM2(db);
    applyM3(db);
  } else {
    try {
      db.close();
    } catch {
      /* ignore */
    }
    throw new Error(`product_sqlite_unsupported_schema:${version}`);
  }

  assertIntegrity(db);
  return db;
}

```

---

## 5. Created files (full / capped)

### `projects/sfia-studio/app/lib/oa/decision/ports/decisionPersistenceUnitOfWorkPort.ts`

```typescript
/**
 * Minimal transactional boundary for HumanDecision mutations (M3).
 * Compatible with MemoryDecisionStore and Product SQLite UnitOfWork.
 */
export interface DecisionPersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}
```
### `projects/sfia-studio/app/lib/oa/decision/domain/decisionBasisDigest.ts`

```typescript
/**
 * Deterministic SHA-256 digest for DecisionBasis source payloads (M3).
 * Uses canonical JSON (sorted object keys) — no F2 imports.
 */
import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";

export function computeDecisionBasisSourceDigest(payload: unknown): string {
  const canonical = canonicalizeJson(payload);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}
```
### `projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts`

```typescript
/**
 * Server-owned local single-user Morris authority (M3).
 * TEMPORARY WITH EXIT — enabled only via env or explicit test inject.
 * Client canActAsMorris / claimedAuthorityLevel are never trusted.
 */
import { randomUUID } from "node:crypto";
import type { MemoryAuthorityResolver } from "./memoryAuthorityResolver";
import type { AuthorityEvidence, OaActorReference } from "../domain/types";

export const M3_LOCAL_MORRIS_ACTOR_ID = "actor:local-morris-m3" as const;

export const M3_LOCAL_AUTHORITY_SOURCE =
  "LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT" as const;

export const M3_LOCAL_AUTHORITY_ENV =
  "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY" as const;

export const LOCAL_MORRIS_M3_ACTOR: OaActorReference = Object.freeze({
  actorId: M3_LOCAL_MORRIS_ACTOR_ID,
  role: "decision_maker" as const,
  displayName: "Local Morris M3 (temporary with exit)",
  authorityLevel: "none" as const,
});

export function isM3LocalAuthorityEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return env[M3_LOCAL_AUTHORITY_ENV] === "1";
}

export type RegisterM3LocalAuthorityResult =
  | {
      ok: true;
      evidenceId: string;
      actor: OaActorReference;
      source: typeof M3_LOCAL_AUTHORITY_SOURCE;
    }
  | {
      ok: false;
      code: "AUTHORITY_NOT_CONFIGURED" | "AUTHORITY_REGISTER_FAILED";
      message: string;
    };

/**
 * Register N3 + canActAsMorris evidence for a scope when M3 authority is enabled.
 * Fail-closed when disabled (unless forceEnable for tests).
 */
export function registerM3LocalMorrisAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  issuedAt: string;
  evidenceId?: string;
  /** Test inject — bypasses env gate. */
  forceEnable?: boolean;
  env?: NodeJS.ProcessEnv;
}): RegisterM3LocalAuthorityResult {
  const enabled =
    input.forceEnable === true ||
    isM3LocalAuthorityEnabled(input.env ?? process.env);
  if (!enabled) {
    return {
      ok: false,
      code: "AUTHORITY_NOT_CONFIGURED",
      message:
        "Local single-user Morris authority is not configured (fail-closed). Set SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1.",
    };
  }

  const evidenceId =
    input.evidenceId ?? `evd:m3-local-morris:${randomUUID()}`;
  const evidence: AuthorityEvidence = {
    evidenceId,
    actorId: M3_LOCAL_MORRIS_ACTOR_ID,
    level: "N3",
    scope: input.scope,
    issuedAt: input.issuedAt,
    source: M3_LOCAL_AUTHORITY_SOURCE,
    canActAsMorris: true,
  };

  try {
    const existing = input.authorityResolver.getEvidence(evidenceId);
    if (!existing) {
      input.authorityResolver.register(evidence);
    }
    return {
      ok: true,
      evidenceId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      source: M3_LOCAL_AUTHORITY_SOURCE,
    };
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Failed to register M3 local Morris authority.",
    };
  }
}
```
### `projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts`

```typescript
/**
 * SHA-256 semantic fingerprint for ExecutionContract (M3).
 * Canonical JSON over execution-significant fields; excludes volatile provenance.
 */
import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "./types";

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
  status: ExecutionContract["status"];
  version: number;
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
    | "status"
    | "version"
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
    status: contract.status,
    version: contract.version,
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
    material.doctrinePackageRef = structuredClone(contract.doctrinePackageRef);
  }
  if (contract.inputs !== undefined) {
    material.inputs = structuredClone(contract.inputs);
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
### `projects/sfia-studio/app/lib/oa/execution-contract/projection/cursorPrepareOnlyProjection.ts`

```typescript
/**
 * Cursor PREPARE-only projection (M3).
 * Pure — no Attempt, no REAL, no Gate D consumption.
 */
import type { ExecutionContract } from "../domain/types";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";

export type CursorPrepareOnlyProjection = {
  projectionOnly: true;
  executionAllowed: false;
  cursorReal: false;
  selectedAgentRef: null;
  gateD: "NOT_CONSUMED";
  contractId: string;
  fingerprint: string;
  projectId: string;
  status: ExecutionContract["status"];
  version: number;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: ExecutionContract["requiredAuthority"];
  decisionRefs: string[];
  cycleInstanceId?: string;
  constraints: string[];
  stopConditions: string[];
};

export function projectCursorPrepareOnly(
  contract: ExecutionContract,
): CursorPrepareOnlyProjection {
  const fingerprint =
    contract.semanticFingerprint ??
    computeExecutionContractSemanticFingerprint(contract);
  return {
    projectionOnly: true,
    executionAllowed: false,
    cursorReal: false,
    selectedAgentRef: null,
    gateD: "NOT_CONSUMED",
    contractId: contract.executionContractId,
    fingerprint,
    projectId: contract.projectId,
    status: contract.status,
    version: contract.version,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    decisionRefs: [...(contract.decisionRefs ?? [])],
    cycleInstanceId: contract.cycleInstanceId,
    constraints: [...contract.constraints],
    stopConditions: [...contract.stopConditions],
  };
}
```
### `projects/sfia-studio/app/lib/oa/execution-contract/ports/executionContractPersistenceUnitOfWorkPort.ts`

```typescript
/**
 * Minimal transactional boundary for ExecutionContract mutations (M3).
 * Compatible with MemoryExecutionContractStore and Product SQLite UnitOfWork.
 */
export interface ExecutionContractPersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}
```
### `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts`

```typescript
/**
 * F3 M3 PREPARE — Build+Validate ExecutionContract from durable HumanDecision + DecisionBasis.
 * NO ProposalStore. NO F3_ACTION fixture constants. Cursor PREPARE-only projection.
 */

import type {
  DecisionBasis,
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type {
  CursorPrepareOnlyProjection,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import { projectCursorPrepareOnly } from "@/lib/oa/execution-contract";
import type { F2ContextSnapshot } from "../f2/types";

export type PrepareM3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  nowIso: () => string;
  forceM3Authority?: boolean;
};

export type F3M3PreparePayload = {
  turnKind: "f3_m3_prepare";
  mode: "M3_PREPARE";
  decisionId: string;
  projectId: string;
  contract: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: string[];
    semanticFingerprint: string;
  };
  cursorProjection: CursorPrepareOnlyProjection;
  executionPerformed: false;
  attemptCreated: false;
  cursorReal: false;
  executionAllowed: false;
  disclosures: string[];
};

function requireBasis(
  basis: DecisionBasis | undefined,
): DecisionBasis | { ok: false; code: string; message: string } {
  if (!basis) {
    return {
      ok: false,
      code: "DECISION_BASIS_REQUIRED",
      message: "HumanDecision lacks DecisionBasis — cannot PREPARE M3.",
    };
  }
  return basis;
}

function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
  const eb = basis.executionBasis;
  const action =
    (eb.requestedOperation && eb.requestedOperation.trim()) ||
    (eb.objective && eb.objective.trim()) ||
    `prepare-from-decision:${decisionId}`;
  const target =
    (eb.cycleTypeId && `cycle:${eb.cycleTypeId}`) ||
    `project:${basis.projectId}`;
  const scope =
    (eb.scope && eb.scope.trim()) || `decision:${decisionId}`;
  const constraints = [
    ...(eb.outOfScope ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
    ...(eb.risks ?? []).map((s) => `RISK:${s}`),
    ...(eb.reservations ?? []).map((s) => `RESERVATION:${s}`),
    "PREPARE_ONLY",
    "NO_CURSOR_REAL",
    "NO_ATTEMPT",
    "NO_GATE_D",
  ];
  const stopConditions = [
    ...(eb.stopConditions ?? []),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "DECISION_NOT_CURRENT",
  ];
  const expectedOutputs = eb.expectedOutcome
    ? [eb.expectedOutcome]
    : undefined;
  const requiredCapabilities = ["cap:m3-prepare-from-decision"];
  if (eb.activatedBlocks?.length) {
    for (const b of eb.activatedBlocks) {
      constraints.push(`ACTIVATED_BLOCK:${b}`);
    }
  }
  return {
    action,
    target,
    scope,
    constraints,
    stopConditions,
    expectedOutputs,
    requiredCapabilities,
    inputs: {
      objective: eb.objective,
      recommendedProfile: eb.recommendedProfile,
      cycleTypeId: eb.cycleTypeId,
      activatedBlocks: eb.activatedBlocks,
      sourceRef: basis.sourceRef,
      sourceDigest: basis.sourceDigest,
    },
  };
}

export async function prepareM3FromDecision(input: {
  projectId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  deps: PrepareM3Deps;
}): Promise<
  | { ok: true; payload: F3M3PreparePayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;

  const loaded = await input.deps.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: loaded.error.message,
    };
  }

  const decision = loaded.decision;
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "Decision does not belong to this project.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_CURRENT",
      message: `Decision status ${decision.status} is not accepted for PREPARE.`,
    };
  }

  const basisOrFail = requireBasis(decision.decisionBasis);
  if ("ok" in basisOrFail && basisOrFail.ok === false) {
    return basisOrFail;
  }
  const basis = basisOrFail as DecisionBasis;

  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.currentContext.doctrineDigest
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis doctrine digest is stale — re-decide before PREPARE.",
    };
  }
  if (ctx.lpsId !== input.currentContext.lpsId) {
    // LPS id changes on append after GO — allow when decision is linked on current LPS.
    // Fall through to decisionIds check below.
  }

  // Reload is implicit via caller currentContext; require decision linked after GO LPS append.
  // When LPS was linked, version advances; exact basis.lpsVersion match is not required.
  // Fail closed if doctrine ok but decision is not current accepted (already checked).
  if (
    ctx.lpsVersion > input.currentContext.lpsVersion
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis LPS version is ahead of current context — inconsistent state.",
    };
  }

  const fields = fieldsFromBasis(basis, decision.decisionId);
  const issuedAt = input.deps.nowIso();
  const authority = registerM3LocalMorrisAuthority({
    authorityResolver: input.deps.authorityResolver,
    scope: fields.scope,
    issuedAt,
    evidenceId: `evd:m3-prep:${decision.decisionId}`,
    forceEnable: input.deps.forceM3Authority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const safeId = decision.decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
  const executionContractId = `xct:m3:${safeId}`;
  const idempotencyKey = `idem:m3-prep:${decision.decisionId}`;

  const built =
    await input.deps.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: input.projectId,
      cycleInstanceId: decision.cycleInstanceId ?? basis.cycleInstanceId,
      decisionRefs: [decision.decisionId],
      action: fields.action,
      target: fields.target,
      scope: fields.scope,
      inputs: fields.inputs,
      expectedOutputs: fields.expectedOutputs,
      requiredCapabilities: fields.requiredCapabilities,
      requiredAuthority: "MORRIS",
      constraints: fields.constraints,
      stopConditions: fields.stopConditions,
      evidenceRequirements: ["evreq:m3-prepare-decision-basis"],
      reversibility: "reversible",
      idempotencyKey,
      correlationId: `cor:m3-prep:${decision.decisionId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
    };
  }

  const validated =
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      },
    );

  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
    };
  }

  const contract = validated.contract;
  const cursorProjection = projectCursorPrepareOnly(contract);
  if (
    cursorProjection.executionAllowed !== false ||
    cursorProjection.cursorReal !== false ||
    cursorProjection.selectedAgentRef !== null ||
    cursorProjection.gateD !== "NOT_CONSUMED"
  ) {
    return {
      ok: false,
      code: "CURSOR_PROJECTION_INVALID",
      message: "Cursor PREPARE-only projection invariants violated.",
    };
  }

  return {
    ok: true,
    payload: {
      turnKind: "f3_m3_prepare",
      mode: "M3_PREPARE",
      decisionId: decision.decisionId,
      projectId: input.projectId,
      contract: {
        executionContractId: contract.executionContractId,
        version: contract.version,
        status: contract.status,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        requiredAuthority: contract.requiredAuthority,
        constraints: [...contract.constraints],
        semanticFingerprint: contract.semanticFingerprint ?? cursorProjection.fingerprint,
      },
      cursorProjection,
      executionPerformed: false,
      attemptCreated: false,
      cursorReal: false,
      executionAllowed: false,
      disclosures: [
        "M3 PREPARE — exact contract from DecisionBasis",
        "NO CURSOR REAL",
        "NO ATTEMPT",
        "GATE D NOT_CONSUMED",
        "NO FIXTURE F3_ACTION CONSTANTS",
      ],
    },
  };
}
```
### `projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts`

```typescript
import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type { ProjectServices, ProductSqliteHandle } from "@/lib/oa/project";
import { CancelConfirmation } from "../../application/cancelConfirmation";
import { ConsumeConfirmation } from "../../application/consumeConfirmation";
import { GetHumanDecision } from "../../application/getHumanDecision";
import { GrantConfirmation } from "../../application/grantConfirmation";
import { ListDecisionHistory } from "../../application/listDecisionHistory";
import { RecordHumanDecision } from "../../application/recordHumanDecision";
import { RefuseConfirmation } from "../../application/refuseConfirmation";
import { RequestConfirmation } from "../../application/requestConfirmation";
import { SupersedeHumanDecision } from "../../application/supersedeHumanDecision";
import { VerifyAuthority } from "../../application/verifyAuthority";
import { MemoryAuthorityResolver } from "../memoryAuthorityResolver";
import { MemoryConfirmationRepository } from "../memoryConfirmationRepository";
import { MemoryDecisionStore } from "../memoryDecisionStore";
import type { AuthorityResolverPort } from "../../ports/authorityResolver";
import type { ConfirmationRepositoryPort } from "../../ports/confirmationRepository";
import type { DecisionAuditPort } from "../../ports/decisionAudit";
import type { DecisionPersistenceUnitOfWorkPort } from "../../ports/decisionPersistenceUnitOfWorkPort";
import type { DecisionRepositoryPort } from "../../ports/decisionRepository";
import { SqliteDecisionAuditJournal } from "./sqliteDecisionAuditJournal";
import { SqliteDecisionRepository } from "./sqliteDecisionRepository";

export type CreateSqliteDecisionServicesOptions = {
  projectServices: ProjectServices;
  cycleServices?: CycleServices;
  /** Shared Product SQLite handle (same DB / UoW as Project/Cycle). */
  productStore: ProductSqliteHandle & DecisionPersistenceUnitOfWorkPort;
  clock?: ClockPort;
  audit?: DecisionAuditPort;
  authorityResolver?: AuthorityResolverPort;
};

export type SqliteDecisionServices = {
  store: DecisionPersistenceUnitOfWorkPort;
  decisions: DecisionRepositoryPort;
  confirmations: ConfirmationRepositoryPort;
  authority: AuthorityResolverPort;
  audit: DecisionAuditPort;
  productStore: ProductSqliteHandle;
  recordHumanDecision: RecordHumanDecision;
  getHumanDecision: GetHumanDecision;
  listDecisionHistory: ListDecisionHistory;
  requestConfirmation: RequestConfirmation;
  grantConfirmation: GrantConfirmation;
  refuseConfirmation: RefuseConfirmation;
  consumeConfirmation: ConsumeConfirmation;
  cancelConfirmation: CancelConfirmation;
  supersedeHumanDecision: SupersedeHumanDecision;
  verifyAuthority: VerifyAuthority;
};

/**
 * HumanDecision durable services on Product SQLite (M3).
 * Confirmations remain Memory (process-local) on a dedicated MemoryDecisionStore.
 */
export function createSqliteDecisionServices(
  options: CreateSqliteDecisionServicesOptions,
): SqliteDecisionServices {
  const productStore = options.productStore;
  const confirmationStore = new MemoryDecisionStore();
  const decisions = new SqliteDecisionRepository(productStore);
  const confirmations = new MemoryConfirmationRepository(confirmationStore);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteDecisionAuditJournal(productStore);
  const authority =
    options.authorityResolver ?? new MemoryAuthorityResolver();

  return {
    store: productStore,
    decisions,
    confirmations,
    authority,
    audit,
    productStore,
    recordHumanDecision: new RecordHumanDecision(
      decisions,
      authority,
      options.projectServices,
      options.cycleServices,
      clock,
      audit,
      productStore,
    ),
    getHumanDecision: new GetHumanDecision(decisions, clock, audit),
    listDecisionHistory: new ListDecisionHistory(decisions, clock, audit),
    requestConfirmation: new RequestConfirmation(
      confirmations,
      clock,
      audit,
      confirmationStore,
    ),
    grantConfirmation: new GrantConfirmation(
      confirmations,
      authority,
      clock,
      audit,
      confirmationStore,
    ),
    refuseConfirmation: new RefuseConfirmation(
      confirmations,
      clock,
      audit,
      confirmationStore,
    ),
    consumeConfirmation: new ConsumeConfirmation(
      confirmations,
      clock,
      audit,
      confirmationStore,
    ),
    cancelConfirmation: new CancelConfirmation(
      confirmations,
      clock,
      audit,
      confirmationStore,
    ),
    supersedeHumanDecision: new SupersedeHumanDecision(
      decisions,
      authority,
      clock,
      audit,
      productStore,
    ),
    verifyAuthority: new VerifyAuthority(authority, clock, audit),
  };
}

export function createTestSqliteDecisionServices(
  options: CreateSqliteDecisionServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteDecisionServices {
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-08-13T12:00:00.000Z"));
  return createSqliteDecisionServices({ ...options, clock });
}
```
### `projects/sfia-studio/app/lib/oa/decision/infrastructure/sqlite/sqliteDecisionRepository.ts`

```typescript
import type { HumanDecision } from "../../domain/types";
import type { DecisionRepositoryPort } from "../../ports/decisionRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

type DecisionRow = {
  decision_id: string;
  project_id: string;
  cycle_instance_id: string | null;
  subject: string;
  status: string;
  authority: string;
  version: number;
  effective_at: string;
  payload_json: string;
};

function cloneDecision(decision: HumanDecision): HumanDecision {
  return structuredClone(decision);
}

/**
 * Durable HumanDecision repository on Product SQLite (M3).
 * Depends on ProductSqliteHandle — not SqliteProductStore class.
 */
export class SqliteDecisionRepository implements DecisionRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(decisionId: string): Promise<HumanDecision | null> {
    const row = this.store.db
      .prepare(
        `SELECT decision_id, project_id, cycle_instance_id, subject, status,
                authority, version, effective_at, payload_json
         FROM oa_human_decisions WHERE decision_id = ?`,
      )
      .get(decisionId) as DecisionRow | undefined;
    if (!row) return null;
    return cloneDecision(JSON.parse(row.payload_json) as HumanDecision);
  }

  async exists(decisionId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_human_decisions WHERE decision_id = ?`)
      .get(decisionId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(decision: HumanDecision): Promise<void> {
    if (this.store.failNextSave === "decision") {
      this.store.failNextSave = null;
      throw new Error("forced_decision_save_failure");
    }
    const now = decision.effectiveAt;
    const payload = JSON.stringify(cloneDecision(decision));
    this.store.db
      .prepare(
        `INSERT INTO oa_human_decisions(
           decision_id, project_id, cycle_instance_id, subject, status,
           authority, version, effective_at, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(decision_id) DO UPDATE SET
           project_id = excluded.project_id,
           cycle_instance_id = excluded.cycle_instance_id,
           subject = excluded.subject,
           status = excluded.status,
           authority = excluded.authority,
           version = excluded.version,
           effective_at = excluded.effective_at,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        decision.decisionId,
        decision.projectId,
        decision.cycleInstanceId ?? null,
        decision.subject,
        decision.status,
        decision.authority,
        decision.version ?? 1,
        decision.effectiveAt,
        payload,
        now,
        now,
      );
  }

  async listByProject(projectId: string): Promise<HumanDecision[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_human_decisions
         WHERE project_id = ?
         ORDER BY effective_at ASC, decision_id ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneDecision(JSON.parse(row.payload_json) as HumanDecision),
    );
  }

  async listBySubject(subject: string): Promise<HumanDecision[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_human_decisions
         WHERE subject = ?
         ORDER BY effective_at ASC, decision_id ASC`,
      )
      .all(subject) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneDecision(JSON.parse(row.payload_json) as HumanDecision),
    );
  }

  async listAcceptedBySubject(
    projectId: string,
    subject: string,
  ): Promise<HumanDecision[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_human_decisions
         WHERE project_id = ? AND subject = ? AND status = 'accepted'
         ORDER BY effective_at ASC, decision_id ASC`,
      )
      .all(projectId, subject) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneDecision(JSON.parse(row.payload_json) as HumanDecision),
    );
  }
}
```
### `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts`

```typescript
import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ProjectServices, ProductSqliteHandle } from "@/lib/oa/project";
import { BuildExecutionContract } from "../../application/buildExecutionContract";
import { CancelExecutionContract } from "../../application/cancelExecutionContract";
import { CheckExecutionAuthorization } from "../../application/checkExecutionAuthorization";
import { ConfirmExecutionContract } from "../../application/confirmExecutionContract";
import { GetExecutionContract } from "../../application/getExecutionContract";
import { ListExecutionContractHistory } from "../../application/listExecutionContractHistory";
import { SupersedeExecutionContract } from "../../application/supersedeExecutionContract";
import { ValidateExecutionContract } from "../../application/validateExecutionContract";
import type { ExecutionAuditPort } from "../../ports/executionAudit";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionContractRepositoryPort } from "../../ports/executionContractRepository";
import { SqliteExecutionAuditJournal } from "./sqliteExecutionAuditJournal";
import { SqliteExecutionContractRepository } from "./sqliteExecutionContractRepository";

export type CreateSqliteExecutionContractServicesOptions = {
  projectServices: ProjectServices;
  decisionServices: DecisionServices;
  cycleServices?: CycleServices;
  productStore: ProductSqliteHandle & ExecutionContractPersistenceUnitOfWorkPort;
  clock?: ClockPort;
  audit?: ExecutionAuditPort;
  authorityResolver?: AuthorityResolverPort;
};

export type SqliteExecutionContractServices = {
  store: ExecutionContractPersistenceUnitOfWorkPort;
  contracts: ExecutionContractRepositoryPort;
  audit: ExecutionAuditPort;
  productStore: ProductSqliteHandle;
  buildExecutionContract: BuildExecutionContract;
  getExecutionContract: GetExecutionContract;
  listExecutionContractHistory: ListExecutionContractHistory;
  validateExecutionContract: ValidateExecutionContract;
  confirmExecutionContract: ConfirmExecutionContract;
  supersedeExecutionContract: SupersedeExecutionContract;
  cancelExecutionContract: CancelExecutionContract;
  checkExecutionAuthorization: CheckExecutionAuthorization;
};

/**
 * ExecutionContract durable services on Product SQLite (M3).
 */
export function createSqliteExecutionContractServices(
  options: CreateSqliteExecutionContractServicesOptions,
): SqliteExecutionContractServices {
  const productStore = options.productStore;
  const contracts = new SqliteExecutionContractRepository(productStore);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteExecutionAuditJournal(productStore);
  const authority =
    options.authorityResolver ?? options.decisionServices.authority;

  const cancelExecutionContract = new CancelExecutionContract(
    contracts,
    authority,
    clock,
    audit,
    productStore,
  );

  return {
    store: productStore,
    contracts,
    audit,
    productStore,
    buildExecutionContract: new BuildExecutionContract(
      contracts,
      authority,
      options.projectServices,
      options.cycleServices,
      options.decisionServices,
      clock,
      audit,
      productStore,
    ),
    getExecutionContract: new GetExecutionContract(contracts, clock, audit),
    listExecutionContractHistory: new ListExecutionContractHistory(
      contracts,
      clock,
      audit,
    ),
    validateExecutionContract: new ValidateExecutionContract(
      contracts,
      authority,
      clock,
      audit,
      productStore,
    ),
    confirmExecutionContract: new ConfirmExecutionContract(
      contracts,
      authority,
      options.decisionServices,
      options.cycleServices,
      clock,
      audit,
      productStore,
      cancelExecutionContract,
    ),
    supersedeExecutionContract: new SupersedeExecutionContract(
      contracts,
      authority,
      clock,
      audit,
      productStore,
    ),
    cancelExecutionContract,
    checkExecutionAuthorization: new CheckExecutionAuthorization(
      contracts,
      authority,
      options.decisionServices,
      options.cycleServices,
      clock,
      audit,
    ),
  };
}

export function createTestSqliteExecutionContractServices(
  options: CreateSqliteExecutionContractServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteExecutionContractServices {
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-08-13T12:30:00.000Z"));
  return createSqliteExecutionContractServices({ ...options, clock });
}
```
### `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteExecutionContractRepository.ts`

```typescript
import type { ExecutionContract } from "../../domain/types";
import type { ExecutionContractRepositoryPort } from "../../ports/executionContractRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

type ContractRow = {
  execution_contract_id: string;
  project_id: string;
  cycle_instance_id: string | null;
  status: string;
  idempotency_key: string;
  semantic_fingerprint: string;
  version: number;
  payload_json: string;
};

function cloneContract(contract: ExecutionContract): ExecutionContract {
  return structuredClone(contract);
}

/**
 * Durable ExecutionContract repository on Product SQLite (M3).
 */
export class SqliteExecutionContractRepository
  implements ExecutionContractRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(
    executionContractId: string,
  ): Promise<ExecutionContract | null> {
    const row = this.store.db
      .prepare(
        `SELECT execution_contract_id, project_id, cycle_instance_id, status,
                idempotency_key, semantic_fingerprint, version, payload_json
         FROM oa_execution_contracts WHERE execution_contract_id = ?`,
      )
      .get(executionContractId) as ContractRow | undefined;
    if (!row) return null;
    return cloneContract(JSON.parse(row.payload_json) as ExecutionContract);
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<ExecutionContract | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_contracts WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneContract(JSON.parse(row.payload_json) as ExecutionContract);
  }

  async exists(executionContractId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(
        `SELECT 1 AS ok FROM oa_execution_contracts WHERE execution_contract_id = ?`,
      )
      .get(executionContractId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(contract: ExecutionContract): Promise<void> {
    if (this.store.failNextSave === "contract") {
      this.store.failNextSave = null;
      throw new Error("forced_execution_contract_save_failure");
    }
    const fingerprint = contract.semanticFingerprint ?? "";
    const now =
      contract.provenance?.timestamp ?? new Date().toISOString();
    const payload = JSON.stringify(cloneContract(contract));
    this.store.db
      .prepare(
        `INSERT INTO oa_execution_contracts(
           execution_contract_id, project_id, cycle_instance_id, status,
           idempotency_key, semantic_fingerprint, version, payload_json,
           created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(execution_contract_id) DO UPDATE SET
           project_id = excluded.project_id,
           cycle_instance_id = excluded.cycle_instance_id,
           status = excluded.status,
           idempotency_key = excluded.idempotency_key,
           semantic_fingerprint = excluded.semantic_fingerprint,
           version = excluded.version,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        contract.executionContractId,
        contract.projectId,
        contract.cycleInstanceId ?? null,
        contract.status,
        contract.idempotencyKey,
        fingerprint,
        contract.version,
        payload,
        now,
        now,
      );
  }

  async listByProject(projectId: string): Promise<ExecutionContract[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_contracts
         WHERE project_id = ?
         ORDER BY created_at ASC, execution_contract_id ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneContract(JSON.parse(row.payload_json) as ExecutionContract),
    );
  }

  async listSuperseding(
    executionContractId: string,
  ): Promise<ExecutionContract[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_contracts`,
      )
      .all() as Array<{ payload_json: string }>;
    const out: ExecutionContract[] = [];
    for (const row of rows) {
      const c = cloneContract(JSON.parse(row.payload_json) as ExecutionContract);
      if (c.supersedesExecutionContractId === executionContractId) {
        out.push(c);
      }
    }
    return out;
  }
}
```
### `projects/sfia-studio/app/__tests__/oa/decision/m3RestartProcessWorker.ts`

```typescript
/**
 * Child-process worker for M3 restart proof A→B→C (invoked via tsx).
 * Usage: tsx m3RestartProcessWorker.ts <create|decide|prepare> <dbPath> <projectId> [decisionId]
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
  LOCAL_MORRIS_M3_ACTOR,
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
} from "@/lib/oa/decision";
import {
  createSqliteExecutionContractServices,
  projectCursorPrepareOnly,
} from "@/lib/oa/execution-contract";

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

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId, decisionIdArg] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error("usage: <create|decide|prepare|read> <dbPath> <projectId> [decisionId]");
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
        })}
`,
      );
      return;
    }

    if (mode === "decide") {
      const lps = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) process.exit(5);
      const scope = "m3-proc-scope";
      const reg = registerM3LocalMorrisAuthority({
        authorityResolver: stack.authority,
        scope,
        issuedAt: "2026-08-13T16:00:00.000Z",
        forceEnable: true,
        evidenceId: "evd:m3-proc",
      });
      if (!reg.ok) {
        console.error(JSON.stringify(reg));
        process.exit(6);
      }
      const decisionId = decisionIdArg ?? "dec:m3-proc-1";
      const basis: DecisionBasis = {
        sourceType: "proposal",
        sourceRef: "prop:m3-proc",
        sourceDigest: "b".repeat(64),
        projectId,
        cycleInstanceId: "cyc:m3-proc-1",
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: VALID_DIGEST,
          activeCycleInstanceId: "cyc:m3-proc-1",
        },
        executionBasis: {
          objective: "m3-process-objective",
          scope,
          requestedOperation: "m3-process-prepare",
          stopConditions: ["STOP_PROC"],
        },
      };
      const recorded = await stack.decisions.recordHumanDecision.execute({
        decisionId,
        projectId,
        cycleInstanceId: "cyc:m3-proc-1",
        subject: "m3-proc-subject",
        options: [{ optionId: "opt:go", label: "GO" }],
        selectedOptionId: "opt:go",
        actor: LOCAL_MORRIS_M3_ACTOR,
        authority: "morris",
        reversible: true,
        scope,
        authorityEvidenceId: reg.evidenceId,
        decisionBasis: basis,
        linkToLivingProjectState: true,
        expectedLpsVersion: lps.livingProjectState.version,
      });
      if (!recorded.ok) {
        console.error(JSON.stringify(recorded.error));
        process.exit(7);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          decisionId,
          lpsVersion: recorded.livingProjectStateVersion,
          sourceDigest: recorded.decision.decisionBasis?.sourceDigest,
        })}
`,
      );
      return;
    }

    if (mode === "prepare" || mode === "read") {
      const decisionId = decisionIdArg ?? "dec:m3-proc-1";
      const loaded = await stack.decisions.getHumanDecision.execute({
        decisionId,
      });
      if (!loaded.ok) {
        process.stdout.write(`${JSON.stringify({ ok: false, stage: "decision" })}
`);
        process.exit(8);
      }
      const basis = loaded.decision.decisionBasis;
      if (!basis) {
        process.stdout.write(`${JSON.stringify({ ok: false, stage: "basis" })}
`);
        process.exit(9);
      }
      const scope = basis.executionBasis.scope ?? "m3-proc-scope";
      const reg = registerM3LocalMorrisAuthority({
        authorityResolver: stack.authority,
        scope,
        issuedAt: "2026-08-13T16:00:00.000Z",
        forceEnable: true,
        evidenceId: `evd:m3-proc-prep:${decisionId}`,
      });
      if (!reg.ok) process.exit(10);

      const executionContractId = `xct:m3:${decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 40)}`;
      const built = await stack.contracts.buildExecutionContract.execute({
        executionContractId,
        projectId,
        cycleInstanceId: loaded.decision.cycleInstanceId,
        decisionRefs: [decisionId],
        action: basis.executionBasis.requestedOperation ?? "prepare",
        target: `project:${projectId}`,
        scope,
        requiredCapabilities: ["cap:m3-prepare-from-decision"],
        requiredAuthority: "MORRIS",
        constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL"],
        stopConditions: basis.executionBasis.stopConditions ?? ["STOP"],
        evidenceRequirements: ["evreq:m3-prepare-decision-basis"],
        reversibility: "reversible",
        idempotencyKey: `idem:m3-proc:${decisionId}`,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: reg.evidenceId,
      });
      if (!built.ok) {
        console.error(JSON.stringify(built.error));
        process.exit(11);
      }
      const projection = projectCursorPrepareOnly(built.contract);
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          decisionId,
          contractId: built.contract.executionContractId,
          fingerprint: built.contract.semanticFingerprint,
          action: built.contract.action,
          projectionOnly: projection.projectionOnly,
          executionAllowed: projection.executionAllowed,
          cursorReal: projection.cursorReal,
          gateD: projection.gateD,
          selectedAgentRef: projection.selectedAgentRef,
        })}
`,
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
### `projects/sfia-studio/app/__tests__/oa/decision/m3RestartProcessProof.test.ts`

```typescript
/**
 * M3 strong restart proof — three independent Node processes, same Product DB.
 * A create → B decide+LPS → C prepare from durable decision (no ProposalStore).
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

describe("M3 process restart proof", () => {
  it(
    "G — A create, B decide+LPS, C prepare from decisionId (no ProposalStore)",
    () => {
      expect(fs.existsSync(TSX)).toBe(true);
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m3-proc-"));
      const dbPath = path.join(dir, "oa-product.sqlite");
      const projectId = "prj:m3-proc";
      const decisionId = "dec:m3-proc-1";

      try {
        const create = spawnSync(
          TSX,
          [WORKER, "create", dbPath, projectId],
          {
            cwd: APP_ROOT,
            encoding: "utf8",
            env: { ...process.env },
            timeout: 60_000,
          },
        );
        expect(create.status, create.stderr || create.stdout).toBe(0);
        const created = JSON.parse(create.stdout.trim()) as { ok: boolean };
        expect(created.ok).toBe(true);

        const decide = spawnSync(
          TSX,
          [WORKER, "decide", dbPath, projectId, decisionId],
          {
            cwd: APP_ROOT,
            encoding: "utf8",
            env: { ...process.env },
            timeout: 60_000,
          },
        );
        expect(decide.status, decide.stderr || decide.stdout).toBe(0);
        const decided = JSON.parse(decide.stdout.trim()) as {
          ok: boolean;
          decisionId?: string;
          lpsVersion?: number;
        };
        expect(decided.ok).toBe(true);
        expect(decided.decisionId).toBe(decisionId);
        expect(decided.lpsVersion).toBeGreaterThan(1);

        const prepare = spawnSync(
          TSX,
          [WORKER, "prepare", dbPath, projectId, decisionId],
          {
            cwd: APP_ROOT,
            encoding: "utf8",
            env: { ...process.env },
            timeout: 60_000,
          },
        );
        expect(prepare.status, prepare.stderr || prepare.stdout).toBe(0);
        const prepared = JSON.parse(prepare.stdout.trim()) as {
          ok: boolean;
          action?: string;
          fingerprint?: string;
          executionAllowed?: boolean;
          cursorReal?: boolean;
          gateD?: string;
          selectedAgentRef?: string | null;
          projectionOnly?: boolean;
        };
        expect(prepared.ok).toBe(true);
        expect(prepared.action).toBe("m3-process-prepare");
        expect(prepared.fingerprint).toMatch(/^[a-f0-9]{64}$/);
        expect(prepared.projectionOnly).toBe(true);
        expect(prepared.executionAllowed).toBe(false);
        expect(prepared.cursorReal).toBe(false);
        expect(prepared.gateD).toBe("NOT_CONSUMED");
        expect(prepared.selectedAgentRef).toBeNull();
        expect(prepare.stdout).not.toMatch(/PROPOSAL_NOT_FOUND/);
        expect(prepare.stdout).not.toMatch(/child_process|Gate D|FULLY_DURABLE|ADOPTED/i);
      } finally {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    },
    90_000,
  );
});
```
### `projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts`

```typescript
/**
 * M3 — Product SQLite migration M2→M3.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M2,
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";

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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m3-mig-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T14:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
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

describe("M3 Product SQLite schema migration", () => {
  it("A — migrates M2 DB additively to m3, preserves Project/LPS/Cycle", async () => {
    const dbPath = tempDbPath("m2-legacy.sqlite");
    {
      const bootstrap = buildProjectServices(dbPath);
      const created = await bootstrap.createProject.execute({
        projectId: "prj:m3-mig",
        title: "M2 legacy project",
        objective: "preserve-m2",
        context: "m2-context",
        scope: "m2-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m3-mig-v1",
        idempotencyKey: "idem:m3-mig",
      });
      expect(created.ok).toBe(true);
      const cycles = createSqliteCycleServices({
        projectServices: bootstrap,
        productStore: bootstrap.store,
      });
      const cycle = await cycles.createCycle.execute({
        cycleInstanceId: "cyc:m3-mig-1",
        cycleTypeId: "cyc:delivery",
        projectId: "prj:m3-mig",
        signals: {},
        createdBy: ACTOR,
      });
      expect(cycle.ok).toBe(true);
      bootstrap.dispose();
      openServices.pop();
    }

    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_human_decisions");
      db.exec("DROP TABLE IF EXISTS oa_execution_contracts");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M2);
      db.close();
    }

    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
    expect(PRODUCT_SCHEMA_VERSION).toBe("m3-0.1.0");

    const decisions = svc.store.db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_human_decisions'`,
      )
      .get() as { name?: string } | undefined;
    const contracts = svc.store.db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_execution_contracts'`,
      )
      .get() as { name?: string } | undefined;
    expect(decisions?.name).toBe("oa_human_decisions");
    expect(contracts?.name).toBe("oa_execution_contracts");

    const project = await svc.getProject.execute({ projectId: "prj:m3-mig" });
    expect(project.ok).toBe(true);
    const cycles = createSqliteCycleServices({
      projectServices: svc,
      productStore: svc.store,
    });
    const cycle = await cycles.cycles.findById("cyc:m3-mig-1");
    expect(cycle?.cycleInstanceId).toBe("cyc:m3-mig-1");
  });

  it("A2 — fails closed on unknown schema version", () => {
    const dbPath = tempDbPath("unknown.sqlite");
    const db = new DatabaseSync(dbPath);
    db.exec(`
CREATE TABLE schema_meta (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
INSERT INTO schema_meta(key, value) VALUES ('schema_version', 'm99-future');
`);
    db.close();
    expect(() => buildProjectServices(dbPath)).toThrow(
      /product_sqlite_unsupported_schema/,
    );
  });
});
```
### `projects/sfia-studio/app/__tests__/oa/decision/m3HumanDecisionDurability.test.ts`

```typescript
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
```
### `projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts`

```typescript
/**
 * M3 — ExecutionContract exactness, fingerprint, reserves/no-go, safety.
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
  projectCursorPrepareOnly,
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

describe("M3 ExecutionContract + prepare safety", () => {
  it("H — exact contract fields from DecisionBasis (never F3_ACTION)", async () => {
    const { decisions, contracts, authority, projects } = await boot("exact.sqlite");
    const scope = "exact-from-basis-scope";
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: authority,
      scope,
      issuedAt: "2026-08-13T17:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:m3:exact",
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const basis: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:exact",
      sourceDigest: computeDecisionBasisSourceDigest({
        objective: "exact-obj",
        op: "exact-op-from-basis",
      }),
      projectId: "prj:m3-xc",
      proposalContext: {
        lpsId: "lps:m3-xc-v1",
        lpsVersion: 1,
        doctrineDigest: VALID_DIGEST,
      },
      executionBasis: {
        objective: "exact-obj",
        scope,
        requestedOperation: "exact-op-from-basis",
        stopConditions: ["STOP_EXACT"],
        risks: ["risk-a"],
      },
    };

    const recorded = await decisions.recordHumanDecision.execute({
      decisionId: "dec:m3:exact",
      projectId: "prj:m3-xc",
      subject: "exact",
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

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m3-xc",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const prepared = await prepareM3FromDecision({
      projectId: "prj:m3-xc",
      decisionId: "dec:m3:exact",
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
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.action).toBe("exact-op-from-basis");
    expect(prepared.payload.contract.action).not.toBe(F3_ACTION);
    expect(prepared.payload.contract.scope).toBe(scope);
    expect(prepared.payload.cursorProjection.executionAllowed).toBe(false);
    expect(prepared.payload.cursorProjection.cursorReal).toBe(false);
    expect(prepared.payload.cursorProjection.gateD).toBe("NOT_CONSUMED");
  });

  it("I — semantic fingerprint deterministic SHA-256", async () => {
    const { decisions, contracts, authority } = await boot("fp.sqlite");
    const scope = "fp-scope";
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: authority,
      scope,
      issuedAt: "2026-08-13T17:00:00.000Z",
      forceEnable: true,
      evidenceId: "evd:m3:fp",
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;
    await decisions.recordHumanDecision.execute({
      decisionId: "dec:m3:fp",
      projectId: "prj:m3-xc",
      subject: "fp",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
    });
    const built = await contracts.buildExecutionContract.execute({
      executionContractId: "xct:m3:fp",
      projectId: "prj:m3-xc",
      decisionRefs: ["dec:m3:fp"],
      action: "fp-action",
      target: "fp-target",
      scope,
      requiredCapabilities: ["cap:m3-prepare-from-decision"],
      requiredAuthority: "MORRIS",
      constraints: ["C1"],
      stopConditions: ["S1"],
      evidenceRequirements: ["evreq:m3-prepare-decision-basis"],
      reversibility: "reversible",
      idempotencyKey: "idem:m3-fp",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: reg.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const fp = built.contract.semanticFingerprint!;
    expect(fp).toMatch(/^[a-f0-9]{64}$/);
    expect(computeExecutionContractSemanticFingerprint(built.contract)).toBe(fp);
    const { semanticFingerprint: _omit, ...rest } = built.contract;
    void _omit;
    expect(computeExecutionContractSemanticFingerprint(rest)).toBe(fp);
  });

  it("J/K — NO_GO does not prepare (decision not current)", async () => {
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

    const noGo = await decisions.recordHumanDecision.execute({
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
    expect(noGo.ok).toBe(true);

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

  it("L — critical safety negatives: no Attempt / no Gate D / projectionOnly", () => {
    const projection = projectCursorPrepareOnly({
      schemaVersion: "0.2.0-oa",
      executionContractId: "xct:m3:safe",
      projectId: "prj:m3-xc",
      action: "a",
      target: "t",
      scope: "s",
      requiredCapabilities: ["cap:m3-prepare-from-decision"],
      requiredAuthority: "MORRIS",
      constraints: [],
      stopConditions: [],
      evidenceRequirements: [],
      reversibility: "reversible",
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

  it("M/N/O — disclosures + isolation claims", () => {
    expect(RUNTIME_DISCLOSURES.persistence).toBe(
      "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
    );
    expect(RUNTIME_DISCLOSURES.humanDecisionRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.executionContractRestartSafe).toBe(true);
    expect(RUNTIME_DISCLOSURES.agentExecution).toBe("DISABLED");
    const blob = JSON.stringify(RUNTIME_DISCLOSURES);
    expect(blob).not.toMatch(/FULLY_DURABLE/);
    expect(blob).not.toMatch(/runtime v3 is ADOPTED/i);
    expect(blob).toMatch(/not ADOPTED/i);
    expect(blob).not.toMatch(/cursorReal["']?\s*:\s*true/i);
    expect(RUNTIME_DISCLOSURES.messages.join(" ")).toMatch(/Gate D NOT_CONSUMED/);
    expect(blob).not.toMatch(/"gateD"\s*:\s*"CONSUMED"/);
  });
});
```


---

## 6. Modified files — useful diffs

### diff `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index 5124f5f..54190ad 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -1,7 +1,8 @@
 import { DatabaseSync } from "node:sqlite";

 export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = "m2-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION_M2 = "m2-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = "m3-0.1.0" as const;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -80,6 +81,47 @@ CREATE INDEX IF NOT EXISTS idx_oa_audit_cycle
   ON oa_audit_events(event_type, occurred_at);
 `;

+const M3_DECISION_CONTRACT_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_human_decisions (
+  decision_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  cycle_instance_id TEXT,
+  subject TEXT NOT NULL,
+  status TEXT NOT NULL,
+  authority TEXT NOT NULL,
+  version INTEGER NOT NULL,
+  effective_at TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_human_decisions_project
+  ON oa_human_decisions(project_id, effective_at);
+CREATE INDEX IF NOT EXISTS idx_oa_human_decisions_subject
+  ON oa_human_decisions(project_id, subject, status);
+
+CREATE TABLE IF NOT EXISTS oa_execution_contracts (
+  execution_contract_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  cycle_instance_id TEXT,
+  status TEXT NOT NULL,
+  idempotency_key TEXT NOT NULL UNIQUE,
+  semantic_fingerprint TEXT NOT NULL,
+  version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_project
+  ON oa_execution_contracts(project_id, created_at);
+CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_idempotency
+  ON oa_execution_contracts(idempotency_key);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -109,8 +151,16 @@ function assertIntegrity(db: DatabaseSync): void {
   }
 }

+function applyM2(db: DatabaseSync): void {
+  db.exec(M2_CYCLE_SCHEMA_SQL);
+}
+
+function applyM3(db: DatabaseSync): void {
+  db.exec(M3_DECISION_CONTRACT_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2 migration.
+ * Open Product SQLite with additive M1→M2→M3 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -119,14 +169,16 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
   db.exec(BASE_SCHEMA_SQL);

   const version = readSchemaVersion(db);
-  if (version === null) {
-    db.exec(M2_CYCLE_SCHEMA_SQL);
+  if (version === null || version === PRODUCT_SCHEMA_VERSION_M1) {
+    applyM2(db);
+    applyM3(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
-  } else if (version === PRODUCT_SCHEMA_VERSION_M1) {
-    db.exec(M2_CYCLE_SCHEMA_SQL);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
+    applyM3(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
-    db.exec(M2_CYCLE_SCHEMA_SQL);
+    applyM2(db);
+    applyM3(db);
   } else {
     try {
       db.close();
```
### diff `projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts b/projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts
index b411c89..8f4ec36 100644
--- a/projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts
@@ -17,9 +17,9 @@ import type {
   OaActorReference,
   RecordHumanDecisionRequest,
 } from "../domain/types";
-import type { MemoryDecisionStore } from "../infrastructure/memoryDecisionStore";
 import type { AuthorityResolverPort } from "../ports/authorityResolver";
 import type { DecisionAuditPort } from "../ports/decisionAudit";
+import type { DecisionPersistenceUnitOfWorkPort } from "../ports/decisionPersistenceUnitOfWorkPort";
 import type { DecisionRepositoryPort } from "../ports/decisionRepository";

 function newId(prefix: "cor" | "prv" | "epi"): string {
@@ -53,6 +53,7 @@ type DecisionFieldSnapshot = {
   epistemicItemId: string | undefined;
   linkToLivingProjectState: boolean;
   expectedLpsVersion: number | undefined;
+  decisionBasis: RecordHumanDecisionRequest["decisionBasis"];
 };

 /**
@@ -63,7 +64,8 @@ type DecisionFieldSnapshot = {
  * (R-T-A3-1: no public AcknowledgeCriticalCycle API on T-A2).
  *
  * B1: snapshot authority/actor/selectedOptionId/status/subject/scope BEFORE awaits.
- * B4: requested LPS/epistemic links fail-closed (compensate orphan decision).
+ * M3: LPS append (when requested) runs INSIDE the same UoW as decision save —
+ * LPS_VERSION_CONFLICT rolls back (no orphan decision on Product SQLite).
  */
 export class RecordHumanDecision {
   constructor(
@@ -73,7 +75,7 @@ export class RecordHumanDecision {
     private readonly cycleServices: CycleServices | undefined,
     private readonly clock: ClockPort,
     private readonly audit: DecisionAuditPort,
-    private readonly store?: MemoryDecisionStore,
+    private readonly store?: DecisionPersistenceUnitOfWorkPort,
   ) {}

   async execute(
@@ -147,6 +149,9 @@ export class RecordHumanDecision {
         epistemicItemId: request.epistemicItemId,
         linkToLivingProjectState: request.linkToLivingProjectState === true,
         expectedLpsVersion: request.expectedLpsVersion,
+        decisionBasis: request.decisionBasis
+          ? structuredClone(request.decisionBasis)
+          : undefined,
       };

       const fieldViolation = validateDecisionFields({
@@ -279,6 +284,7 @@ export class RecordHumanDecision {
       let decision: HumanDecision | undefined;
       let epistemicItemId: string | undefined;
       let livingProjectStateVersion: number | undefined;
+      let lpsConflictCurrentVersion: number | undefined;

       const persist = async () => {
         if (status === "accepted") {
@@ -327,6 +333,9 @@ export class RecordHumanDecision {
             cloned.evidenceRefs.length > 0
               ? [...cloned.evidenceRefs]
               : undefined,
+          decisionBasis: snap.decisionBasis
+            ? structuredClone(snap.decisionBasis)
+            : undefined,
           provenance: {
             schemaVersion: "0.1.0-oa",
             provenanceRecordId: newId("prv"),
@@ -341,6 +350,50 @@ export class RecordHumanDecision {

         await this.decisions.save(next);
         decision = next;
+
+        // M3 — LPS append inside the same UoW (nested AsyncLocalStorage on Product).
+        if (status === "accepted" && snap.linkToLivingProjectState) {
+          if (snap.expectedLpsVersion === undefined) {
+            throw Object.assign(new Error("lps_expected_version_required"), {
+              detailCode: "PERSISTENCE_FAILURE" as const,
+            });
+          }
+          const current =
+            await this.projectServices.getCurrentLivingProjectState.execute({
+              projectId: snap.projectId,
+            });
+          if (!current.ok) {
+            throw Object.assign(new Error("lps_current_unavailable"), {
+              detailCode: "PERSISTENCE_FAILURE" as const,
+            });
+          }
+          const priorIds = current.livingProjectState.decisionIds ?? [];
+          const nextIds = [...priorIds, snap.decisionId];
+          const appended =
+            await this.projectServices.appendLivingProjectStateVersion.execute({
+              projectId: snap.projectId,
+              expectedVersion: snap.expectedLpsVersion,
+              objective: current.livingProjectState.objective,
+              createdBy: snap.actor,
+              correlationId,
+              context: current.livingProjectState.context,
+              scope: current.livingProjectState.scope,
+              decisionIds: nextIds,
+            });
+          if (!appended.ok) {
+            if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
+              lpsConflictCurrentVersion = current.livingProjectState.version;
+              throw Object.assign(new Error("lps_version_conflict"), {
+                detailCode: "LPS_VERSION_CONFLICT" as const,
+                currentVersion: current.livingProjectState.version,
+              });
+            }
+            throw Object.assign(new Error("lps_link_failed"), {
+              detailCode: "PERSISTENCE_FAILURE" as const,
+            });
+          }
+          livingProjectStateVersion = appended.livingProjectState.version;
+        }
       };

       try {
@@ -356,14 +409,24 @@ export class RecordHumanDecision {
           "detailCode" in err &&
           typeof (err as { detailCode: unknown }).detailCode === "string"
         ) {
+          const detailCode = (err as {
+            detailCode: Parameters<typeof createDecisionError>[0]["detailCode"];
+          }).detailCode;
           return fail(
-            (err as { detailCode: Parameters<typeof createDecisionError>[0]["detailCode"] })
-              .detailCode,
+            detailCode,
             err instanceof Error ? err.message : "rule",
             {
               projectId: snap.projectId,
               decisionId: snap.decisionId,
               subject: snap.subject,
+              expectedVersion:
+                detailCode === "LPS_VERSION_CONFLICT"
+                  ? snap.expectedLpsVersion
+                  : undefined,
+              currentVersion:
+                detailCode === "LPS_VERSION_CONFLICT"
+                  ? lpsConflictCurrentVersion
+                  : undefined,
             },
           );
         }
@@ -383,7 +446,7 @@ export class RecordHumanDecision {
       }

       const compensateOrphan = async (cause: string): Promise<DecisionResult> => {
-        // Best-effort compensate within decision store (R-T-A3-2 residual if this fails).
+        // Best-effort compensate for epistemic-only residual (R-T-A3-2).
         try {
           const mark = async () => {
             const current = await this.decisions.findById(snap.decisionId);
@@ -436,66 +499,6 @@ export class RecordHumanDecision {
         epistemicItemId = epiId;
       }

-      // B4 — Optional LPS decisionIds link: fail-closed when requested.
-      if (status === "accepted" && snap.linkToLivingProjectState) {
-        if (snap.expectedLpsVersion === undefined) {
-          return compensateOrphan("lps_expected_version_required");
-        }
-        const current =
-          await this.projectServices.getCurrentLivingProjectState.execute({
-            projectId: snap.projectId,
-          });
-        if (!current.ok) {
-          return compensateOrphan("lps_current_unavailable");
-        }
-        const priorIds = current.livingProjectState.decisionIds ?? [];
-        const nextIds = [...priorIds, snap.decisionId];
-        const appended =
-          await this.projectServices.appendLivingProjectStateVersion.execute({
-            projectId: snap.projectId,
-            expectedVersion: snap.expectedLpsVersion,
-            objective: current.livingProjectState.objective,
-            createdBy: snap.actor,
-            correlationId,
-            context: current.livingProjectState.context,
-            scope: current.livingProjectState.scope,
-            decisionIds: nextIds,
-          });
-        if (!appended.ok) {
-          if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
-            // Compensate then surface LPS_VERSION_CONFLICT (retryable).
-            try {
-              const mark = async () => {
-                const cur = await this.decisions.findById(snap.decisionId);
-                if (!cur) return;
-                await this.decisions.save({
-                  ...cur,
-                  status: "superseded",
-                  version: (cur.version ?? 1) + 1,
-                  rationale: `${cur.rationale ?? ""} [compensated:lps_version_conflict]`.trim(),
-                });
-              };
-              if (this.store) {
-                await this.store.runInTransaction(mark);
-              } else {
-                await mark();
-              }
-            } catch {
-              // R-T-A3-2 residual
-            }
-            return fail("LPS_VERSION_CONFLICT", "lps_link_version_conflict", {
-              projectId: snap.projectId,
-              decisionId: snap.decisionId,
-              subject: snap.subject,
-              expectedVersion: snap.expectedLpsVersion,
-              currentVersion: current.livingProjectState.version,
-            });
-          }
-          return compensateOrphan("lps_link_failed");
-        }
-        livingProjectStateVersion = appended.livingProjectState.version;
-      }
-
       const durationMs = Date.now() - started;
       this.audit.append({
         event: "oa.decision.recorded",
```
### diff `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
index 0fa2a69..8f85ba7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
@@ -1,10 +1,20 @@
 /**
- * Record Morris-gate HumanDecision via OA DecisionServices.
- * Authority evidence is registered server-side only.
+ * Record Morris-gate HumanDecision via OA DecisionServices (M3 durable).
+ * Authority evidence is server-owned LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT
+ * when configured; fail-closed otherwise. Client claims ignored.
  */

 import { randomUUID } from "node:crypto";
-import type { DecisionServices, MemoryAuthorityResolver } from "@/lib/oa/decision";
+import type {
+  DecisionBasis,
+  DecisionServices,
+  MemoryAuthorityResolver,
+} from "@/lib/oa/decision";
+import {
+  computeDecisionBasisSourceDigest,
+  LOCAL_MORRIS_M3_ACTOR,
+  registerM3LocalMorrisAuthority,
+} from "@/lib/oa/decision";
 import type {
   DecisionDto,
   F2ContextSnapshot,
@@ -18,6 +28,7 @@ import {
   updateProposalStatus,
 } from "./proposalStore";

+/** @deprecated M2 demo actor — prefer LOCAL_MORRIS_M3_ACTOR when M3 authority enabled. */
 export const LOCAL_MORRIS_ACTOR = Object.freeze({
   actorId: "actor:local-morris-demo",
   role: "decision_maker" as const,
@@ -25,6 +36,7 @@ export const LOCAL_MORRIS_ACTOR = Object.freeze({
   authorityLevel: "none" as const,
 });

+/** @deprecated M2 demo source — M3 uses LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT. */
 export const LOCAL_MORRIS_EVIDENCE_SOURCE =
   "LOCAL_PROCESS_MORRIS_DEMO_AUTHORITY" as const;

@@ -69,6 +81,59 @@ function mapStatus(kind: F2DecisionKind): {
   }
 }

+function buildDecisionBasis(input: {
+  proposal: ProposalDto;
+  projectId: string;
+  currentContext: F2ContextSnapshot;
+}): DecisionBasis {
+  const { proposal, projectId, currentContext } = input;
+  const stablePayload = {
+    proposalId: proposal.proposalId,
+    objective: proposal.objective,
+    scope: proposal.scope,
+    outOfScope: proposal.outOfScope,
+    activatedBlocks: proposal.activatedBlocks,
+    expectedOutcome: proposal.expectedOutcome,
+    risks: proposal.risks,
+    reservations: proposal.reservations,
+    stopConditions: proposal.stopConditions,
+    cycleTypeId: proposal.cycleTypeId,
+    recommendedProfile: proposal.recommendedProfile,
+    rephrasedRequest: proposal.rephrasedRequest,
+  };
+  const cycleInstanceId =
+    currentContext.activeCycleInstanceId ??
+    proposal.contextSnapshot.activeCycleInstanceId ??
+    undefined;
+  return {
+    sourceType: "proposal",
+    sourceRef: proposal.proposalId,
+    sourceDigest: computeDecisionBasisSourceDigest(stablePayload),
+    projectId,
+    cycleInstanceId: cycleInstanceId ?? undefined,
+    proposalContext: {
+      lpsId: currentContext.lpsId,
+      lpsVersion: currentContext.lpsVersion,
+      doctrineDigest: currentContext.doctrineDigest,
+      activeCycleInstanceId: currentContext.activeCycleInstanceId ?? undefined,
+      ckcResolutionRef: currentContext.ckcResolutionRef ?? undefined,
+    },
+    executionBasis: {
+      objective: proposal.objective,
+      scope: proposal.scope,
+      outOfScope: [...proposal.outOfScope],
+      activatedBlocks: [...proposal.activatedBlocks],
+      expectedOutcome: proposal.expectedOutcome,
+      risks: [...proposal.risks],
+      reservations: [...proposal.reservations],
+      stopConditions: [...proposal.stopConditions],
+      cycleTypeId: proposal.cycleTypeId,
+      recommendedProfile: proposal.recommendedProfile,
+      requestedOperation: proposal.rephrasedRequest,
+    },
+  };
+}
+
 export async function recordF2Decision(input: {
   proposalId: string;
   projectId: string;
@@ -81,6 +146,8 @@ export async function recordF2Decision(input: {
   decisionServices: DecisionServices;
   authorityResolver: MemoryAuthorityResolver;
   nowIso: () => string;
+  /** Test inject for M3 authority. */
+  forceM3Authority?: boolean;
 }): Promise<
   | {
       ok: true;
@@ -165,27 +232,19 @@ export async function recordF2Decision(input: {
   }

   const scope = proposalScope(proposal);
-  const evidenceId = `evd:f2-morris:${proposal.proposalId}:${randomUUID()}`;
   const issuedAt = input.nowIso();

-  try {
-    input.authorityResolver.register({
-      evidenceId,
-      actorId: LOCAL_MORRIS_ACTOR.actorId,
-      level: "N3",
-      scope,
-      issuedAt,
-      source: LOCAL_MORRIS_EVIDENCE_SOURCE,
-      canActAsMorris: true,
-    });
-  } catch (error) {
+  const authority = registerM3LocalMorrisAuthority({
+    authorityResolver: input.authorityResolver,
+    scope,
+    issuedAt,
+    forceEnable: input.forceM3Authority === true,
+  });
+  if (!authority.ok) {
     return {
       ok: false,
-      code: "AUTHORITY_REGISTER_FAILED",
-      message:
-        error instanceof Error
-          ? error.message
-          : "Échec enregistrement evidence Morris locale.",
+      code: authority.code,
+      message: authority.message,
       proposal,
     };
   }
@@ -210,20 +269,36 @@ export async function recordF2Decision(input: {
         ]
       : undefined;

+  const isGoAccepted =
+    input.decisionKind === "GO" || input.decisionKind === "GO_WITH_RESERVES";
+  const decisionBasis = isGoAccepted
+    ? buildDecisionBasis({
+        proposal,
+        projectId: input.projectId,
+        currentContext: input.currentContext,
+      })
+    : undefined;
+
   const result = await input.decisionServices.recordHumanDecision.execute({
     decisionId,
     projectId: input.projectId,
+    cycleInstanceId: decisionBasis?.cycleInstanceId,
     subject: `F2 gate for ${proposal.proposalId}`,
     options,
     selectedOptionId: mapped.selectedOptionId,
-    actor: LOCAL_MORRIS_ACTOR,
+    actor: LOCAL_MORRIS_M3_ACTOR,
     authority: "morris",
     status: mapped.humanStatus,
     reversible: true,
     scope,
     reservations,
     rationale: `F2 ${input.decisionKind} on ${proposal.proposalId}`,
-    authorityEvidenceId: evidenceId,
+    authorityEvidenceId: authority.evidenceId,
+    decisionBasis,
+    linkToLivingProjectState: isGoAccepted,
+    expectedLpsVersion: isGoAccepted
+      ? input.currentContext.lpsVersion
+      : undefined,
     correlationId: `f2-dec:${proposal.proposalId}`,
   });

@@ -249,8 +324,7 @@ export async function recordF2Decision(input: {
         ? input.reservesText!.trim()
         : null,
     capturedAt: issuedAt,
-    readyForNextGatedStep:
-      input.decisionKind === "GO" || input.decisionKind === "GO_WITH_RESERVES",
+    readyForNextGatedStep: isGoAccepted,
     executionPerformed: false,
   };
```
### diff `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 1b8a09c..3eb54c3 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -22,10 +22,13 @@ import {
 import {
   MemoryAuthorityResolver,
   createInMemoryDecisionServices,
+  createSqliteDecisionServices,
+  isM3LocalAuthorityEnabled,
   type DecisionServices,
 } from "@/lib/oa/decision";
 import {
   createInMemoryExecutionContractServices,
+  createSqliteExecutionContractServices,
   type ExecutionContractServices,
 } from "@/lib/oa/execution-contract";
 import {
@@ -119,31 +122,54 @@ function wireOaStack(
   projectServices: ProjectServices,
   clock: ClockPort,
 ): RuntimeOaStack {
-  // M2: same Product SQLite store for Project/LPS + CycleInstance when available.
-  const cycleServices =
+  // M2/M3: same Product SQLite store for Project/LPS + Cycle + Decision + Contract.
+  const productSqlite =
     projectServices.store instanceof SqliteProductStore
-      ? createSqliteCycleServices({
-          projectServices,
-          productStore: projectServices.store,
-          clock,
-        })
-      : createInMemoryCycleServices({ projectServices, clock });
+      ? projectServices.store
+      : null;
+  const cycleServices = productSqlite
+    ? createSqliteCycleServices({
+        projectServices,
+        productStore: productSqlite,
+        clock,
+      })
+    : createInMemoryCycleServices({ projectServices, clock });
   const ckcQualification = createCkcQualificationServices({ clock });
   const authorityResolver = new MemoryAuthorityResolver();
-  const decisionServices = createInMemoryDecisionServices({
-    projectServices,
-    cycleServices,
-    clock,
-    authorityResolver,
-  });
+  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
+  void isM3LocalAuthorityEnabled;

-  const executionContractServices = createInMemoryExecutionContractServices({
-    projectServices,
-    decisionServices,
-    cycleServices,
-    clock,
-    authorityResolver,
-  });
+  const decisionServices = productSqlite
+    ? createSqliteDecisionServices({
+        projectServices,
+        cycleServices,
+        productStore: productSqlite,
+        clock,
+        authorityResolver,
+      })
+    : createInMemoryDecisionServices({
+        projectServices,
+        cycleServices,
+        clock,
+        authorityResolver,
+      });
+
+  const executionContractServices = productSqlite
+    ? createSqliteExecutionContractServices({
+        projectServices,
+        decisionServices,
+        cycleServices,
+        productStore: productSqlite,
+        clock,
+        authorityResolver,
+      })
+    : createInMemoryExecutionContractServices({
+        projectServices,
+        decisionServices,
+        cycleServices,
+        clock,
+        authorityResolver,
+      });

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
   const fixtureAdapter = createF3TestExecutionAdapter();
```
### diff `projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
index 435d2a4..dc1a9b6 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
@@ -2,33 +2,37 @@ import "./serverGuard";

 /**
  * D-V2-05 runtime disclosures — always attached to runtime results.
- * M2: Project/LPS + CycleInstance subset Product SQLite restart-safe;
- * conversation/proposal/decision/contract/attempt/evidence remain process-local.
- * Not a product-ready / v3-ADOPTED claim surface.
+ * M3: Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product SQLite
+ * restart-safe; conversation/proposal/attempt/evidence remain process-local.
+ * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D claim surface.
  */
 export interface RuntimeDisclosures {
   readonly runtimeMode: "LOCAL_PROCESS";
-  /** Partial: Project/LPS + CycleInstance M2 durable; other OA stacks process-local. */
-  readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DURABLE";
+  /** Partial: Project/LPS/Cycle/Decision/Contract M3 durable; other stacks process-local. */
+  readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE";
   readonly agentExecution: "DISABLED";
   readonly iam: "NOT_SELECTED";
   readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly delivery: "NOT_AUTHORIZED";
   readonly cutover: "NOT_AUTHORIZED";
-  /** True because conversation/proposal/decision/contract/attempt/evidence remain volatile. */
+  /** True because conversation/proposal/attempt/evidence remain volatile. */
   readonly localDataVolatile: true;
-  /** True for non-M2 OA state; Project/LPS/CycleInstance survive restart. */
+  /** True for non-M3 OA state; Project/LPS/Cycle/Decision/Contract survive restart. */
   readonly restartMayLoseState: true;
   readonly projectLpsRestartSafe: true;
   readonly cycleInstanceRestartSafe: true;
+  readonly humanDecisionRestartSafe: true;
+  readonly executionContractRestartSafe: true;
   readonly messages: readonly string[];
 }

 export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
   "Mode local process-bound: the runtime lives in a single Node process.",
-  "Project/LPS + CycleInstance Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2).",
-  "Conversation, Proposal F2, HumanDecision, ExecutionContract, Attempt, and Evidence remain process-local and may be lost on restart.",
-  "Trajectory/Epistemic Memory remain process-local (out of M2 durability).",
+  "Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2 / M3).",
+  "Conversation, Proposal F2, Attempt, and Evidence remain process-local and may be lost on restart.",
+  "Trajectory/Epistemic Memory remain process-local (out of M3 durability).",
+  "Local single-user Morris authority is TEMPORARY WITH EXIT (server-owned; client claims ignored).",
+  "Cursor PREPARE-only projection — executionAllowed=false, cursorReal=false, Gate D NOT_CONSUMED.",
   "IAM is not configured.",
   "Real agent execution is disabled.",
   "Delivery and cutover are not authorized.",
@@ -37,7 +41,7 @@ export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([

 export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
   runtimeMode: "LOCAL_PROCESS",
-  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DURABLE",
+  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
   agentExecution: "DISABLED",
   iam: "NOT_SELECTED",
   productPersistence: "SQLITE_OA_PRODUCT_STORE",
@@ -47,6 +51,8 @@ export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
   restartMayLoseState: true,
   projectLpsRestartSafe: true,
   cycleInstanceRestartSafe: true,
+  humanDecisionRestartSafe: true,
+  executionContractRestartSafe: true,
   messages: RUNTIME_DISCLOSURE_MESSAGES,
 });
```
### diff `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index d04f7d1..01e714f 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,13 +6,13 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git** | origin/main @ `a9a4765c242948f2287392a2910fb1cd30061a7a` |
+| **Snapshot Git** | origin/main @ `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` |
 | **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
-| **Timestamp maintenance** | 2026-08-13 — M2 VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED |
+| **Timestamp maintenance** | 2026-08-13 — M3 Delivery proof (IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION) |
 | **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
-| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS |
-| **Sources** | Git `main` · PR #337 · CI #158 · PR #339 · CI #162 · handoff M2 PR-readiness `1ad4746b44169d777a726fc8ceeed1c663469c40` · decision pack G0 · framing `30`–`37` · code M2 on main `projects/sfia-studio/app/**` |
-| **Anti-claims** | G0-A/G0-B **consommés** · M1 **mergé** · M2 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · ≠ runtime v3 ADOPTED · ≠ Cursor REAL authorized · ≠ Gate D consumed · ≠ Auth/Ack promoted · ≠ M3 authorized · ≠ full OA durable |
+| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` |
+| **Sources** | Git `main` @ `4a8a612…` · PR #337/#339/#340 · CI #158/#162 · decision pack G0 · framing `30`–`37` · delivery M3 candidate `projects/sfia-studio/app/**` |
+| **Anti-claims** | G0-A/G0-B **consommés** · M1–M2 **mergés** · M3 **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** (delivery branch ; ≠ VALIDATED · ≠ MERGED ON MAIN) · ≠ M4 authorized · ≠ runtime v3 ADOPTED · ≠ Cursor REAL authorized · ≠ Gate D consumed · ≠ Auth/Ack promoted · ≠ full OA durable |

 ## B1. Nature du document

@@ -43,7 +43,8 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | Architecture convergence | **Option 1 ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (G0-A) |
 | Project/LPS restart safety | **PROVEN / MERGED** (process A→B + CI #158) |
 | Autres OA (T-A2 CycleInstance M2 subset) | **Product SQLite — MERGED ON MAIN** (PR #339) — Cycle/LPS/CKC linkage durable + restart-safe (subset M2) |
-| Autres OA (T-A2 trajectory/epistemic ; T-A3…T-A6) | **Memory partiel** — process-local (HD / ExecutionContract / Attempt / Evidence / Trajectory/Epistemic **non durables**) |
+| Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **Memory partiel** — process-local |
+| Autres OA (T-A3 HD / T-A4 ExecutionContract) | **main :** Memory · **delivery M3 candidate :** Product SQLite (≠ mergé) |
 | Cursor REAL depuis Nora | **0** / DISABLED |
 | Gate D | **NOT CONSUMED** |

@@ -69,8 +70,8 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | T-A0 Doctrine | `lib/oa/doctrine` + project create | **KEEP** | Appelé ; DoctrinePackage cible F03 |
 | T-A1 Project/LPS | Product SQLite + `/studio` (PR #337) | **COMPLETE** (M1) / **KEEP** backbone | Durable + restart-safe on main |
 | T-A2 Cycle/CKC | Product SQLite CycleInstance + F2/CKC/LPS linkage (PR #339) | **COMPLETE** (M2) / **KEEP** backbone | CycleInstance durable + restart-safe on main ; Trajectory/Epistemic restent Memory |
-| T-A3 HD/Confirm/Authority | Memory + F2 decide | **COMPLETE** | Backbone ; manque durable + autorité réelle |
-| T-A4 ExecutionContract | F3 prepare/confirm | **KEEP** / **COMPLETE** | Consommable ; path REAL + durable manquent |
+| T-A3 HD/Confirm/Authority | Product SQLite HD (M3 candidate) + Confirmation Memory + local Morris authority TEMPORARY WITH EXIT | **COMPLETE** (M3) / **KEEP** backbone | HD durable candidate ; Confirmation process-local ; Auth.js exit ouvert |
+| T-A4 ExecutionContract | Product SQLite + M3 PREPARE exact + Cursor projection PREPARE-only | **COMPLETE** (M3) / **KEEP** backbone | Durable candidate ; no Attempt/REAL ; fixture path kept for tests |
 | T-A5 Attempt/Adapter port | F3 fixture adapter | **ADAPT** / **HARVEST** | Port OK ; adapter REAL à harvest OPS1 |
 | T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
 | T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
@@ -82,7 +83,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
 | FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
 | Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
-| Persistence Memory OA | factories Memory* (trajectory/epistemic ; T-A3…T-A6) | **REPLACE** progressif (T-A1 + T-A2 Cycle subset = SQLite Product **MERGED**) | HD/contract/attempt/evidence/trajectory restent process-local ; milestones ultérieurs |
+| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **REPLACE** progressif (T-A1+T-A2+T-A3 HD+T-A4 contract = SQLite Product **M3 candidate**) | Attempt/Evidence/Trajectory/Confirmation restent process-local |

 ## B5. Gap map → boucle cible

@@ -91,18 +92,18 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | Project/LPS durable | **MERGED ON MAIN — EXIT PROOF SATISFIED** (PR #337) | — |
 | GuidedSession / historique durable | PARTIAL / MISSING — **DEFERRED** (dette optionnelle Roadmap) | usage quotidien / milestone ultérieur |
 | CycleInstance réel lié F2 | **CLOSED ON MAIN — M2** (PR #339) — Product SQLite + F2 wire + restart proof | — |
-| HumanDecision durable/authoritative | PROCESS_LOCAL / demo | M3, Gate D |
+| HumanDecision durable/authoritative | **CLOSED CANDIDATE — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT | M4 Auth.js / Gate D |
 | CKC ↔ cycle binding | **CLOSED ON MAIN — M2** — `ckcResolutionRef` projection on LPS | — |
 | live contextSnapshot | **CLOSED ON MAIN — M2** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
-| ExecutionContract from real HD | FIXTURE path only | M3/M4 |
-| Cursor projection canonique | PARTIAL | M3/M4 |
+| ExecutionContract from real HD | **CLOSED CANDIDATE — M3** — exact fields from DecisionBasis ; fixture path historique conservé | M4 REAL |
+| Cursor projection canonique | **CLOSED CANDIDATE — M3 PREPARE-only** (`executionAllowed=false`) | M4 |
 | Cursor REAL behind T-A5 | MISSING on Nora | M4 |
 | Critical Ack UI | CANDIDATE unwired | M4 |
 | Evidence durable | MISSING | M5 |
 | ReviewBundle → LPS writeback | MISSING | M5/M6 |
 | Nora post-exec analysis | PARTIAL (UI cards) | M5 |
-| Restart safety Studio core | **PARTIAL** — Project/LPS + CycleInstance M2 subset **restart-safe on main** ; conversation/proposal/HD/T-A3…T-A6 Memory | M3+ |
-| IAM/authz product-grade | PARTIAL (candidate Auth.js) | M4/M8 |
+| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle **on main** + HD/Contract **M3 candidate** restart-safe ; conversation/proposal/Confirmation/Attempt/Evidence Memory | M4+ |
+| IAM/authz product-grade | PARTIAL (M3 local authority temporary ; Auth.js candidate) | M4/M8 |

 ## B6. Decisions / gates

@@ -129,7 +130,8 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 1. Promotion Auth.js / Critical Ack candidate — **Decision Required**
 2. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
 3. Disposition OPS1 / D1 / execution-run — **Decision Required**
-4. **M3 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**
+4. **M3** — **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** (Delivery GO **CONSUMED** 2026-08-13 · commit/push/PR/merge ≠ autorisés · ≠ MERGED ON MAIN)
+5. **M4 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**

 ## B7–B8. Roadmap capability-driven (milestones)

@@ -190,7 +192,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | **Commit / push / PR** | **CONSUMED** — PR #339 |
 | **Merge** | **CLOSED** — PR #339 MERGED @ `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI #162 SUCCESS |
 | **Preuve e2e** | conversation → qualification → Cycle durable → LPS N+1 → proposal ContextSnapshot live → visible `/studio` · process restart PASS · R1 AsyncLocalStorage concurrency PASS · R2 test-scope SHA frozen · PR #339 · merge `a9a4765…` · CI #162 SUCCESS |
-| **Next** | M3 — **NOT AUTHORIZED — MORRIS GO REQUIRED** |
+| **Next** | M3 *(SATISFIED dependency for M3 delivery)* |
 | **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

 ### Milestone 3 — Gouvernance humaine + préparation réelle
@@ -199,14 +201,18 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | --- | --- |
 | **ID** | M3 |
 | **Capacité v3** | V3-F05 chaîne · HumanDecision · ExecutionContract (F12 réversibilité) |
-| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor |
-| **État actuel** | F2 demo authority ; F3 fixture prepare |
-| **Actifs** | T-A3/T-A4 ; F2/F3 UI |
-| **Gaps** | L2 durable HD ; L3 proposal binding ; L8 REAL contract fields ; autorité non-demo |
-| **Dépendances** | M1–M2 — **SATISFIED** ; IAM minimal |
-| **Delivery authorization** | **NOT AUTHORIZED — MORRIS GO REQUIRED** |
-| **Preuve e2e** | GO Morris → HD accepted/current survive restart → contract fingerprint stable |
-| **Statut** | **PARTIAL** — **NEXT CAPABILITY** (≠ authorized) |
+| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor PREPARE-only |
+| **État actuel** | HumanDecision Product SQLite · ExecutionContract Product SQLite · decision→LPS atomique · DecisionBasis minimal · projection Cursor PREPARE-only · authority `LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT` (fail-closed) |
+| **Actifs** | T-A3 **COMPLETE** (M3) / KEEP · T-A4 **COMPLETE** (M3) / KEEP · F2/F3 ADAPT · Product SQLite m3-0.1.0 |
+| **Gaps fermés (candidate)** | L2 durable HD · L3 proposal binding (DecisionBasis) · L8 exact contract fields (no fixture on M3 path) · autorité server-owned fail-closed (temporary with exit) |
+| **Dette restante** | conversation/proposal process-local · Confirmation process-local · Trajectory/Epistemic Memory · Attempt/Evidence Memory · autorité local-single-user temporaire (exit Auth.js/IAM) · DOC-DEBT-M1-01 |
+| **Dépendances** | M1–M2 — **SATISFIED** |
+| **Delivery authorization** | **CONSUMED** — GO MORRIS M3 — 2026-08-13 |
+| **Validation gate** | **NOT CONSUMED** — Morris validation / commit gate séparés |
+| **Commit / push / PR / Merge** | **NOT AUTHORIZED** — separate Morris gates |
+| **Preuve e2e** | GO → HD durable + LPS N+1 · restart A→B PREPARE sans Proposal · fingerprint stable A/B/C · projection PREPARE-only · authority adversarial PASS · 1648 passed / 131 skipped / 0 failed — **PASS LOCAL CANDIDATE** |
+| **Next** | M4 — **NOT AUTHORIZED — MORRIS GO REQUIRED** |
+| **Statut** | **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** |

 ### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio

@@ -294,18 +300,19 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 CRITICAL PATH:
   M1 durable Project/LPS — SATISFIED / MERGED ON MAIN (PR #337 @ c6925954…)
   → M2 Nora contextuel durable — VALIDATED BY MORRIS / MERGED ON MAIN / EXIT PROOF SATISFIED (PR #339 @ a9a4765…)
-  → M3 HD durable + ExecutionContract exact
+  → M3 HD durable + ExecutionContract exact — IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION
   → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
   → M5 Evidence/ReviewBundle + LPS writeback
   → M6 boucle complète sans copier-coller

-NEXT CAPABILITY: M3 — NOT AUTHORIZED — MORRIS GO REQUIRED
+NEXT CAPABILITY AFTER M3 VALIDATION/MERGE: M4 — NOT AUTHORIZED — MORRIS GO REQUIRED

 TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
 FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
-DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack promotion
+DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack promotion · Auth.js/IAM (exit autorité M3 temporaire)
 G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
 M2 MERGE GATE: CLOSED
+M3: IMPLEMENTED CANDIDATE — ≠ VALIDATED · ≠ MERGED
 ```

 ## B10b. Dette documentaire post-M1
```


---

## 7. Roadmap candidate sections

```markdown
# SFIA Studio Convergence Roadmap

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
| **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
| **Snapshot Git** | origin/main @ `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` |
| **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
| **Timestamp maintenance** | 2026-08-13 — M3 Delivery proof (IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION) |
| **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` |
| **Sources** | Git `main` @ `4a8a612…` · PR #337/#339/#340 · CI #158/#162 · decision pack G0 · framing `30`–`37` · delivery M3 candidate `projects/sfia-studio/app/**` |
| **Anti-claims** | G0-A/G0-B **consommés** · M1–M2 **mergés** · M3 **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** (delivery branch ; ≠ VALIDATED · ≠ MERGED ON MAIN) · ≠ M4 authorized · ≠ runtime v3 ADOPTED · ≠ Cursor REAL authorized · ≠ Gate D consumed · ≠ Auth/Ack promoted · ≠ full OA durable |

## B1. Nature du document

Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
Observation / Recommendation / Decision Required doivent rester **distincts**.

## B4. Asset disposition matrix (actuelle)

Légende : classifications = **recommandations de convergence** jusqu’à validation Morris, sauf KEEP factuel d’usage main.

| Actif | Preuve | Classification | Justification courte |
| --- | --- | --- | --- |
| T-A0 Doctrine | `lib/oa/doctrine` + project create | **KEEP** | Appelé ; DoctrinePackage cible F03 |
| T-A1 Project/LPS | Product SQLite + `/studio` (PR #337) | **COMPLETE** (M1) / **KEEP** backbone | Durable + restart-safe on main |
| T-A2 Cycle/CKC | Product SQLite CycleInstance + F2/CKC/LPS linkage (PR #339) | **COMPLETE** (M2) / **KEEP** backbone | CycleInstance durable + restart-safe on main ; Trajectory/Epistemic restent Memory |
| T-A3 HD/Confirm/Authority | Product SQLite HD (M3 candidate) + Confirmation Memory + local Morris authority TEMPORARY WITH EXIT | **COMPLETE** (M3) / **KEEP** backbone | HD durable candidate ; Confirmation process-local ; Auth.js exit ouvert |
| T-A4 ExecutionContract | Product SQLite + M3 PREPARE exact + Cursor projection PREPARE-only | **COMPLETE** (M3) / **KEEP** backbone | Durable candidate ; no Attempt/REAL ; fixture path kept for tests |
| T-A5 Attempt/Adapter port | F3 fixture adapter | **ADAPT** / **HARVEST** | Port OK ; adapter REAL à harvest OPS1 |
| T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
| T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
| Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
| F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition root Studio |
| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable |
| execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
| FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
| Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5…T-A6) | **REPLACE** progressif (T-A1+T-A2+T-A3 HD+T-A4 contract = SQLite Product **M3 candidate**) | Attempt/Evidence/Trajectory/Confirmation restent process-local |

## B5. Gap map → boucle cible

| Gap | Statut | Bloque |
| --- | --- | --- |
| Project/LPS durable | **MERGED ON MAIN — EXIT PROOF SATISFIED** (PR #337) | — |
| GuidedSession / historique durable | PARTIAL / MISSING — **DEFERRED** (dette optionnelle Roadmap) | usage quotidien / milestone ultérieur |
| CycleInstance réel lié F2 | **CLOSED ON MAIN — M2** (PR #339) — Product SQLite + F2 wire + restart proof | — |
| HumanDecision durable/authoritative | **CLOSED CANDIDATE — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT | M4 Auth.js / Gate D |
| CKC ↔ cycle binding | **CLOSED ON MAIN — M2** — `ckcResolutionRef` projection on LPS | — |
| live contextSnapshot | **CLOSED ON MAIN — M2** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
| ExecutionContract from real HD | **CLOSED CANDIDATE — M3** — exact fields from DecisionBasis ; fixture path historique conservé | M4 REAL |
| Cursor projection canonique | **CLOSED CANDIDATE — M3 PREPARE-only** (`executionAllowed=false`) | M4 |
| Cursor REAL behind T-A5 | MISSING on Nora | M4 |
| Critical Ack UI | CANDIDATE unwired | M4 |
| Evidence durable | MISSING | M5 |
| ReviewBundle → LPS writeback | MISSING | M5/M6 |
| Nora post-exec analysis | PARTIAL (UI cards) | M5 |
| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle **on main** + HD/Contract **M3 candidate** restart-safe ; conversation/proposal/Confirmation/Attempt/Evidence Memory | M4+ |
| IAM/authz product-grade | PARTIAL (M3 local authority temporary ; Auth.js candidate) | M4/M8 |

## B6. Decisions / gates

### Décision consommée

### Milestone 3 — Gouvernance humaine + préparation réelle

| Champ | Contenu |
| --- | --- |
| **ID** | M3 |
| **Capacité v3** | V3-F05 chaîne · HumanDecision · ExecutionContract (F12 réversibilité) |
| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor PREPARE-only |
| **État actuel** | HumanDecision Product SQLite · ExecutionContract Product SQLite · decision→LPS atomique · DecisionBasis minimal · projection Cursor PREPARE-only · authority `LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT` (fail-closed) |
| **Actifs** | T-A3 **COMPLETE** (M3) / KEEP · T-A4 **COMPLETE** (M3) / KEEP · F2/F3 ADAPT · Product SQLite m3-0.1.0 |
| **Gaps fermés (candidate)** | L2 durable HD · L3 proposal binding (DecisionBasis) · L8 exact contract fields (no fixture on M3 path) · autorité server-owned fail-closed (temporary with exit) |
| **Dette restante** | conversation/proposal process-local · Confirmation process-local · Trajectory/Epistemic Memory · Attempt/Evidence Memory · autorité local-single-user temporaire (exit Auth.js/IAM) · DOC-DEBT-M1-01 |
| **Dépendances** | M1–M2 — **SATISFIED** |
| **Delivery authorization** | **CONSUMED** — GO MORRIS M3 — 2026-08-13 |
| **Validation gate** | **NOT CONSUMED** — Morris validation / commit gate séparés |
| **Commit / push / PR / Merge** | **NOT AUTHORIZED** — separate Morris gates |
| **Preuve e2e** | GO → HD durable + LPS N+1 · restart A→B PREPARE sans Proposal · fingerprint stable A/B/C · projection PREPARE-only · authority adversarial PASS · 1648 passed / 131 skipped / 0 failed — **PASS LOCAL CANDIDATE** |
| **Next** | M4 — **NOT AUTHORIZED — MORRIS GO REQUIRED** |
| V3-F11 AgentCapability | Caps agents | Fixture agent | M4 | REAL agent descriptor | harvest |
| V3-F12 Réversibilité | Action policy | Partial confirmations | M3–M4 | confirm+ack path | Ack UI |
| V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
| V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |

## B10. Chemin critique explicite

```text
CRITICAL PATH:
  M1 durable Project/LPS — SATISFIED / MERGED ON MAIN (PR #337 @ c6925954…)
  → M2 Nora contextuel durable — VALIDATED BY MORRIS / MERGED ON MAIN / EXIT PROOF SATISFIED (PR #339 @ a9a4765…)
  → M3 HD durable + ExecutionContract exact — IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION
  → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
  → M5 Evidence/ReviewBundle + LPS writeback
  → M6 boucle complète sans copier-coller

NEXT CAPABILITY AFTER M3 VALIDATION/MERGE: M4 — NOT AUTHORIZED — MORRIS GO REQUIRED

TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack promotion · Auth.js/IAM (exit autorité M3 temporaire)
G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
M2 MERGE GATE: CLOSED
M3: IMPLEMENTED CANDIDATE — ≠ VALIDATED · ≠ MERGED
```

## B10b. Dette documentaire post-M1

| Id | Observation | Impact | Classification | Owner / gate | Exit |

```

---

## 8. Capability proofs (summary)

| Proof | Status |
| --- | --- |
| One Product Store | PASS — shared ProductSqliteHandle |
| HumanDecision durable | PASS — oa_human_decisions |
| DecisionBasis + sourceDigest | PASS |
| HD+LPS atomic (same txn) | PASS — nested AsyncLocalStorage |
| Authority server-owned fail-closed | PASS — env gated TEMPORARY WITH EXIT |
| Client claims ignored | PASS |
| PREPARE without Proposal after restart | PASS — process A/B/C |
| Exact contract (no fixture constants on M3 path) | PASS |
| Fingerprint SHA-256 stable | PASS |
| Cursor projection PREPARE-only | PASS — executionAllowed=false |
| Attempt created | false |
| selectedAgentRef | null |
| Cursor REAL / Gate D | DISABLED / NOT CONSUMED |
| Critical Ack unchanged | PASS |
| Isolation D1/OPS1/FinOps | PASS (no dual-write) |

---

## 9. Dettes conservées

conversation/proposal process-local · Confirmation process-local · Trajectory/Epistemic Memory · Attempt/Evidence Memory · autorité local-single-user temporaire (exit Auth.js/IAM) · DOC-DEBT-M1-01 · Auth/Ack gate · Cursor REAL/Gate D · OPS1/D1/execution-run dispositions · runtime v3 NON ADOPTED

---

## 10. Git status proof

### name-status (tracked)

```
M	projects/sfia-studio/app/__tests__/oa/decision/adversarialAuthority.test.ts
M	projects/sfia-studio/app/__tests__/oa/decision/validationAdversarial.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/lifecycleFoundation.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/qaAdversarialValidation.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-contract/runtimeValidationHardening.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
M	projects/sfia-studio/app/__tests__/setup.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
M	projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
M	projects/sfia-studio/app/features/project-assistant/f3/index.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/oa/decision/application/cancelConfirmation.ts
M	projects/sfia-studio/app/lib/oa/decision/application/consumeConfirmation.ts
M	projects/sfia-studio/app/lib/oa/decision/application/grantConfirmation.ts
M	projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts
M	projects/sfia-studio/app/lib/oa/decision/application/refuseConfirmation.ts
M	projects/sfia-studio/app/lib/oa/decision/application/requestConfirmation.ts
M	projects/sfia-studio/app/lib/oa/decision/application/supersedeHumanDecision.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/types.ts
M	projects/sfia-studio/app/lib/oa/decision/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/index.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

```

### untracked (sfia-studio)

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

### diff --stat

```
 .../oa/decision/adversarialAuthority.test.ts       |   2 +-
 .../oa/decision/validationAdversarial.test.ts      |  13 +-
 .../execution-attempt/lifecycleFoundation.test.ts  |   2 +-
 .../qaAdversarialValidation.test.ts                |   2 +-
 .../adversarialCriticalAntiTa5.test.ts             |   4 +-
 .../runtimeValidationHardening.test.ts             |   4 +-
 .../ProjectAssistantPanel.test.tsx                 |  10 +-
 .../m2CognitivePiloting.e2e.test.ts                |   4 +-
 .../project-assistant/orchestrateTurn.test.ts      |   4 +-
 projects/sfia-studio/app/__tests__/setup.ts        |   3 +
 .../runtimeApplicationService.test.ts              |   4 +-
 .../vertical-slice-ui/createProjectUi.test.tsx     |  12 +-
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  |  10 +-
 .../project-assistant/ProjectAssistantPanel.tsx    |  89 +++++++++++++-
 .../app/features/project-assistant/actions.ts      | 104 ++++++++++++++++
 .../features/project-assistant/f2/proposalStore.ts |   2 +-
 .../project-assistant/f2/recordDecision.ts         | 122 +++++++++++++++----
 .../app/features/project-assistant/f3/index.ts     |   2 +
 .../app/features/project-assistant/types.ts        |  24 ++++
 .../oa/decision/application/cancelConfirmation.ts  |   4 +-
 .../oa/decision/application/consumeConfirmation.ts |   4 +-
 .../oa/decision/application/grantConfirmation.ts   |   4 +-
 .../oa/decision/application/recordHumanDecision.ts | 135 +++++++++++----------
 .../oa/decision/application/refuseConfirmation.ts  |   4 +-
 .../oa/decision/application/requestConfirmation.ts |   4 +-
 .../decision/application/supersedeHumanDecision.ts |   4 +-
 .../app/lib/oa/decision/domain/types.ts            |  37 ++++++
 projects/sfia-studio/app/lib/oa/decision/index.ts  |  31 ++++-
 .../application/executionContractStatusWriter.ts   |   4 +-
 .../application/buildExecutionContract.ts          |   7 +-
 .../application/cancelExecutionContract.ts         |   4 +-
 .../application/confirmExecutionContract.ts        |   4 +-
 .../application/supersedeExecutionContract.ts      |   7 +-
 .../application/validateExecutionContract.ts       |   4 +-
 .../app/lib/oa/execution-contract/domain/types.ts  |   2 +
 .../app/lib/oa/execution-contract/index.ts         |  27 ++++-
 projects/sfia-studio/app/lib/oa/project/index.ts   |   1 +
 .../app/lib/oa/project/infrastructure/sqlite/db.ts |  66 ++++++++--
 .../infrastructure/sqlite/productSqliteHandle.ts   |   6 +-
 .../infrastructure/sqlite/sqliteProductStore.ts    |   7 +-
 .../app/lib/vertical-slice-runtime/disclosures.ts  |  28 +++--
 .../app/lib/vertical-slice-runtime/service.ts      |  68 +++++++----
 .../convergence/sfia-studio-convergence-roadmap.md |  61 +++++-----
 43 files changed, 714 insertions(+), 226 deletions(-)

```

staged: **vide** · project commit/push/PR: **none**

---

## 11. Coverage

| Coverage | Status |
| --- | --- |
| created files | FULL CONTENT (large files capped with note) |
| modified content useful | YES |
| schema proof | COMPLETE |
| transaction proof | COMPLETE |
| authority proof | COMPLETE |
| restart proof | COMPLETE |
| contract/fingerprint proof | COMPLETE |
| scope proof | COMPLETE |
| synthesis only | NO |
| review pack verdict | **COMPLETE** |

---

## 12. Verdict

**M3 HUMAN GOVERNANCE IMPLEMENTED —**
**DURABLE HUMANDECISION PASS —**
**DECISION/LPS ATOMICITY PASS —**
**SERVER-OWNED AUTHORITY FAIL-CLOSED PASS —**
**DURABLE PROPOSAL BINDING PASS —**
**POST-RESTART PREPARE WITHOUT PROPOSAL PASS —**
**DURABLE EXECUTIONCONTRACT PASS —**
**EXACT CONTRACT FIELDS PASS —**
**CONTRACT FINGERPRINT STABLE PASS —**
**CURSOR PROJECTION PREPARE-ONLY PASS —**
**NO EXECUTION / NO ATTEMPT / NO GATE D PASS —**
**PROCESS RESTART EVIDENCE PASS —**
**M3 IMPLEMENTED CANDIDATE —**
**READY FOR MORRIS VALIDATION / COMMIT GATE**

Anti-claims: ≠ M3 VALIDATED · ≠ M3 MERGED · ≠ M4 · ≠ Cursor REAL · ≠ Gate D · ≠ Auth.js · ≠ Critical Ack · ≠ full durable · ≠ runtime v3 ADOPTED · ≠ commit/push/PR

Instruction ChatGPT: lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
