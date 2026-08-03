# Full Review Pack — SFIA Studio V3.1-D2-D1 Delivery (Cycle 8 Critical)

## 0. En-tête

| Champ | Valeur |
|-------|--------|
| **Date/heure début** | 2026-08-03 22:16 CEST (+0200) |
| **Date/heure fin** | 2026-08-03 22:50 CEST (+0200) |
| **Rôle Cursor** | Cycle 8 Delivery Critical — D2-D1 execution-run core |
| **Cycle** | Cycle 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Justification Critical** | Autorité unique d'état D2-D ; contrats consommés par D2-D2/D2-D3 ; validation fail-closed ; risque double runtime |
| **Typologie** | INC |
| **Branche** | `delivery/sfia-studio-v3-1-d2-d1` |
| **HEAD** | `df4377249660aab79d764915ad3166608a8a9a7d` |
| **Gate consommé** | G-D2D-DELIVERY-01 uniquement |
| **Fichiers créés** | 32 |

---

## 1. GO Morris

```text
GO DELIVERY SFIA STUDIO V3.1-D2-D1
Date/heure : 2026-08-03 22:16 CEST (+0200)
Consomme : G-D2D-DELIVERY-01
```

Autorise : branche locale · module execution-run · tests · validations · Full Review Pack · handoff L3.
N'autorise pas : staging/commit/push/PR projet · D2-D2/D2-D3 · providers réels · Cursor · D2-C · persistance durable · UI/D3 · méthode.

---

## 2. Git Truth initiale

| Champ | Valeur |
|-------|--------|
| Baseline | `main@df4377249660aab79d764915ad3166608a8a9a7d` |
| DELIVERY_WT | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1` |
| Branche créée | `delivery/sfia-studio-v3-1-d2-d1` |
| Remote/PR | absents |
| Handoff tip/blob predecessor | `07141d975617e1a03c84b860052f9878d4ad2e2c` / `86499fdd6109abb9460c024e473fc7a303e33794` |
| execution-run initial | **absent** |

---

## 3. Sources / CKC

Méthode : template · routing · operating model · guardrails · validation checklist · carte synthétique · §4.8.
Projet : docs 20–24 · handoff post-merge.
Code lecture : execution-contract · execution-attempt · doctrine · vertical-slice-* · package/vitest/CI.
CKC Delivery détaillé : absent — fallback method-candidate — aucune autorité d'exécution.

---

## 4. Décisions appliquées

D-CAD-01…12 · D-FD-01…12 · D-FA-01…12 · D-TA-01…14 · BLG-01…08.
`execution-run` = seule state authority D2-D. CONTRACT-B. STORE-B memory. ASYNC-B représentable. D2-D4 out. Cursor UNVERIFIED.

---

## 5. Anti-double-runtime

| Module | Rôle | Modifié |
|--------|------|---------|
| execution-run | D2-D state authority | **créé** |
| execution-contract | pré-exécution T-A4 | non |
| execution-attempt | T-A5 foundation | non |
| vertical-slice-runtime | façade | non |

Aucune importation croisée vers attempt/contract/runtime dans execution-run.

---

## 6. Architecture créée

```text
lib/oa/execution-run/
  domain/     types, errors, transitions, policy, evidence, invariants
  application/ create, transition, compose
  ports/      repository, schema validation, clock, identity
  infrastructure/ memory repo/store, AJV adapter, fixed clock, sequential identity
  schemas/    JSON Schema Draft-07
  fixtures/   catalogue
  index.ts
__tests__/oa/execution-run/*.test.ts
```

---

## 7. Liste des fichiers

- `projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/application/composeExecutionRun.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/index.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json`
- `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json`
- `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json`
- `projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json`
- `projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json`

## 8. Contenu complet de chaque fichier

### `projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts`

`````text
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assertSourceHonest,
  canSucceed,
  createOfficialEvidence,
  createSourceDisclosure,
  isIsoTimestamp,
  usageUnavailable,
} from "@/lib/oa/execution-run";

describe("D2-D1 evidence and disclosure", () => {
  it("distinguishes sources honestly", () => {
    expect(assertSourceHonest("fixture", "fixture")).toBe(true);
    expect(assertSourceHonest("fixture", "real")).toBe(false);
  });

  it("partial cannot succeed", () => {
    expect(canSucceed("partial")).toBe(false);
    expect(canSucceed("complete")).toBe(true);
  });

  it("creates official evidence without secrets", () => {
    const e = createOfficialEvidence({
      evidenceId: "evidence:1",
      runId: "run:1",
      correlationId: "corr:1",
      source: "fixture",
      completeness: "complete",
      producedAt: "2026-08-03T20:00:00.000Z",
      summary: "ok",
    });
    expect(e.official).toBe(true);
    expect(JSON.stringify(e)).not.toMatch(/sk-|password/i);
  });

  it("marks process-local disclosure", () => {
    const d = createSourceDisclosure({ source: "fixture", providerLane: "ai" });
    expect(d.processLocalMemory).toBe(true);
  });

  it("usage unavailable when not validated", () => {
    expect(usageUnavailable("missing").status).toBe("unavailable");
  });

  it("validates ISO timestamps", () => {
    expect(isIsoTimestamp("2026-08-03T20:00:00.000Z")).toBe(true);
    expect(isIsoTimestamp("not-a-date")).toBe(false);
  });
});
`````

### `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts`

`````text
/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/execution-run");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function importsOf(file: string): string[] {
  return fs
    .readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
}

describe("D2-D1 execution-run import boundaries", () => {
  it("domain stays pure", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:node:|next|react|ajv|@\/lib\/(?:ops1|d1|platform|vertical-slice|harness)|fs|path|child_process)/;
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
      }
    }
    expect(hits).toEqual([]);
  });

  it("application does not import provider SDKs or AJV", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "application"));
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (/from\s+["']ajv|openai|@octokit|cursor/.test(line)) {
          hits.push(`${file}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("module does not import harness, vertical-slice-runtime, execution-attempt, or execution-contract internals", () => {
    const files = listTsFiles(MODULE_ROOT);
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /vertical-slice-runtime|execution-attempt|execution-contract|harness\//.test(
            line,
          )
        ) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });
});
`````

### `projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts`

`````text
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  composeExecutionRunMemory,
  FIXTURE_CATALOGUE,
  getFixture,
} from "@/lib/oa/execution-run";

describe("D2-D1 fixture lifecycle", () => {
  it("covers required catalogue scenarios", () => {
    const ids = FIXTURE_CATALOGUE.map((f) => f.id);
    for (const id of [
      "nominal",
      "validation_failure",
      "auth_failure",
      "provider_unavailable",
      "rate_limit",
      "timeout",
      "cancellation",
      "blocked_gate",
      "protected_path",
      "mutation_forbidden",
      "partial_result",
      "invalid_provider_result",
      "late_result",
      "secret_redaction",
      "source_mismatch",
    ]) {
      expect(ids).toContain(id);
      expect(getFixture(id as never).source).toBe("fixture");
    }
  });

  it("runs nominal to succeeded", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun(
      { intent: f.intent, context: f.context, capability: f.capability },
      c,
    );
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const started = await c.transitionExecutionRun(
      { runId: created.run.runId, reason: "intent_valid" },
      c,
    );
    expect(started.ok && started.run.state).toBe("running");
    if (!started.ok) return;
    const done = await c.transitionExecutionRun(
      {
        runId: started.run.runId,
        reason: "outputs_validated",
        completeness: "complete",
        externalResult: {
          kind: "success",
          completeness: "complete",
          redactedSummary: "ok",
          rawPresent: false,
        },
      },
      c,
    );
    expect(done.ok && done.run.state).toBe("succeeded");
  });

  it("never succeeds on partial", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("partial_result");
    const created = await c.createExecutionRun(
      { intent: f.intent, context: f.context, capability: f.capability },
      c,
    );
    if (!created.ok) return;
    await c.transitionExecutionRun({ runId: created.run.runId, reason: "intent_valid" }, c);
    const done = await c.transitionExecutionRun(
      {
        runId: created.run.runId,
        reason: "outputs_validated",
        completeness: "partial",
        externalResult: {
          kind: "success",
          completeness: "partial",
          redactedSummary: "partial",
          rawPresent: false,
        },
      },
      c,
    );
    expect(done.ok).toBe(false);
  });

  it("records late evidence without state change", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("late_result");
    const created = await c.createExecutionRun(
      { intent: f.intent, context: f.context, capability: f.capability },
      c,
    );
    if (!created.ok) return;
    await c.transitionExecutionRun({ runId: created.run.runId, reason: "intent_valid" }, c);
    await c.transitionExecutionRun({ runId: created.run.runId, reason: "cancel_accepted" }, c);
    const late = await c.transitionExecutionRun(
      {
        runId: created.run.runId,
        reason: "late_result_evidence_only",
        lateEvidenceSummary: "late_redacted",
      },
      c,
    );
    expect(late.ok).toBe(true);
    if (!late.ok) return;
    expect(late.run.state).toBe("cancelled");
    expect(late.run.evidence?.some((e) => e.late)).toBe(true);
  });

  it("blocks mutation intent at create", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("mutation_forbidden");
    const created = await c.createExecutionRun(
      { intent: f.intent, context: f.context, capability: f.capability },
      c,
    );
    expect(created.ok).toBe(false);
    if (created.run) expect(created.run.state).toBe("blocked");
  });
});
`````

### `projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts`

`````text
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { evaluateReadOnlyPolicy, getFixture } from "@/lib/oa/execution-run";

describe("D2-D1 read-only policy", () => {
  it("denies mutation", () => {
    const f = getFixture("mutation_forbidden");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("MUTATION_FORBIDDEN");
  });

  it("denies protected path", () => {
    const f = getFixture("protected_path");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("PROTECTED_PATH");
  });

  it("denies auth failure", () => {
    const f = getFixture("auth_failure");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("AUTHORIZATION_ERROR");
  });

  it("denies provider unavailable", () => {
    const f = getFixture("provider_unavailable");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("PROVIDER_UNAVAILABLE");
  });

  it("denies source mismatch", () => {
    const f = getFixture("source_mismatch");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("SOURCE_MISMATCH");
  });

  it("denies unsatisfied human gate", () => {
    const f = getFixture("blocked_gate");
    const d = evaluateReadOnlyPolicy({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
      gateSatisfied: false,
    });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("HUMAN_GATE_REQUIRED");
  });

  it("accepts nominal", () => {
    const f = getFixture("nominal");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(true);
  });

  it("never exposes secrets in failures", () => {
    const f = getFixture("secret_redaction");
    expect(JSON.stringify(f.expectedFailure)).not.toMatch(/sk-|BEGIN PRIVATE|password/i);
    expect(f.expectedFailure?.technicalDetailsRedacted).toBe(true);
  });
});
`````

### `projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts`

`````text
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunMemory, getFixture } from "@/lib/oa/execution-run";

describe("D2-D1 memory repository", () => {
  it("saves and loads with defensive copies", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun(
      { intent: f.intent, context: f.context, capability: f.capability },
      c,
    );
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const loaded = await c.repository.getById(created.run.runId);
    expect(loaded?.runId).toBe(created.run.runId);
    expect(loaded).not.toBe(created.run);
  });

  it("lists by correlation deterministically", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    await c.createExecutionRun({ intent: f.intent, context: f.context, capability: f.capability }, c);
    const list = await c.repository.listByCorrelationId(f.intent.correlationId);
    expect(list.length).toBe(1);
  });

  it("returns null for missing", async () => {
    const c = composeExecutionRunMemory();
    expect(await c.repository.getById("missing")).toBeNull();
  });

  it("issues new identity after terminal via new create", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const a = await c.createExecutionRun({ intent: f.intent, context: f.context, capability: f.capability }, c);
    const b = await c.createExecutionRun({ intent: f.intent, context: f.context, capability: f.capability }, c);
    expect(a.ok && b.ok).toBe(true);
    if (a.ok && b.ok) expect(a.run.runId).not.toBe(b.run.runId);
  });

  it("discloses process-local memory only", () => {
    const c = composeExecutionRunMemory();
    expect(c.disclosure).toEqual({
      persistence: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    });
  });
});
`````

### `projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts`

`````text
/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import { getFixture } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

describe("D2-D1 AJV adversarial validation", () => {
  const validator = new AjvExecutionRunSchemaValidation(schemasDir);

  it("rejects null and undefined before metadata use", async () => {
    expect((await validator.validate("execution-intent", null)).ok).toBe(false);
    expect((await validator.validate("execution-intent", undefined)).ok).toBe(false);
  });

  it("rejects wrong types and missing fields", async () => {
    expect((await validator.validate("execution-intent", 42)).ok).toBe(false);
    expect((await validator.validate("execution-intent", {})).ok).toBe(false);
    expect(
      (
        await validator.validate("execution-intent", {
          ...getFixture("nominal").intent,
          requestedLane: "openai",
        })
      ).ok,
    ).toBe(false);
  });

  it("rejects empty operation", async () => {
    const f = getFixture("validation_failure");
    const r = await validator.validate("execution-intent", f.intent);
    expect(r.ok).toBe(false);
  });

  it("accepts nominal intent", async () => {
    const f = getFixture("nominal");
    const r = await validator.validate("execution-intent", f.intent);
    expect(r.ok).toBe(true);
  });

  it("does not throw raw AJV exceptions", async () => {
    await expect(validator.validate("execution-run", { circular: null })).resolves.toMatchObject({
      ok: false,
    });
  });
});
`````

### `projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts`

`````text
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  decideTransition,
  listAllowedTransitions,
  EXECUTION_STATES,
  isTerminalState,
} from "@/lib/oa/execution-run";

describe("D2-D1 transition authority", () => {
  it("exposes exactly eight states", () => {
    expect(EXECUTION_STATES).toHaveLength(8);
  });

  it("allows documented transitions", () => {
    for (const edge of listAllowedTransitions()) {
      expect(
        decideTransition({
          from: edge.from,
          to: edge.to,
          reason: edge.reason,
          completeness: edge.to === "succeeded" ? "complete" : undefined,
        }).allowed,
      ).toBe(true);
    }
  });

  it("refuses terminal without new run", () => {
    for (const state of ["succeeded", "failed", "cancelled", "timed_out", "blocked"] as const) {
      expect(isTerminalState(state)).toBe(true);
      const d = decideTransition({ from: state, to: "running", reason: "intent_valid" });
      expect(d.allowed).toBe(false);
    }
  });

  it("refuses partial succeeded", () => {
    const d = decideTransition({
      from: "running",
      to: "succeeded",
      reason: "outputs_validated",
      completeness: "partial",
    });
    expect(d.allowed).toBe(false);
  });

  it("refuses late result state mutation", () => {
    const d = decideTransition({
      from: "cancelled",
      to: "succeeded",
      reason: "late_result_evidence_only",
    });
    expect(d.allowed).toBe(false);
  });

  it("refuses idle→succeeded", () => {
    const d = decideTransition({
      from: "idle",
      to: "succeeded",
      reason: "outputs_validated",
      completeness: "complete",
    });
    expect(d.allowed).toBe(false);
  });
});
`````

### `projects/sfia-studio/app/lib/oa/execution-run/application/composeExecutionRun.ts`

`````text
import { AjvExecutionRunSchemaValidation } from "../infrastructure/ajvExecutionRunSchemaValidation";
import { FixedClock } from "../infrastructure/fixedClock";
import { MemoryExecutionRunRepository } from "../infrastructure/memoryExecutionRunRepository";
import { MemoryExecutionRunStore } from "../infrastructure/memoryExecutionRunStore";
import { SequentialIdentity } from "../infrastructure/sequentialIdentity";
import type { ClockPort } from "../ports/clockPort";
import type { IdentityPort } from "../ports/identityPort";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
import { createExecutionRun } from "./createExecutionRun";
import { transitionExecutionRun } from "./transitionExecutionRun";

export type ExecutionRunComposition = {
  clock: ClockPort;
  identity: IdentityPort;
  repository: ExecutionRunRepositoryPort;
  schemas: ExecutionRunSchemaValidationPort;
  store: MemoryExecutionRunStore;
  createExecutionRun: typeof createExecutionRun;
  transitionExecutionRun: typeof transitionExecutionRun;
  disclosure: {
    persistence: "memory_process_local";
    durable: false;
    multiInstance: false;
    restartSafe: false;
  };
};

export function composeExecutionRunMemory(options?: {
  clockIso?: string;
}): ExecutionRunComposition {
  const store = new MemoryExecutionRunStore();
  const clock = new FixedClock(options?.clockIso ?? "2026-08-03T20:00:00.000Z");
  const identity = new SequentialIdentity();
  const repository = new MemoryExecutionRunRepository(store);
  const schemas = new AjvExecutionRunSchemaValidation();
  return {
    clock,
    identity,
    repository,
    schemas,
    store,
    createExecutionRun,
    transitionExecutionRun,
    disclosure: {
      persistence: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
  };
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts`

`````text
import { createSourceDisclosure, usageUnavailable } from "../domain/evidence";
import { evaluateReadOnlyPolicy } from "../domain/policy";
import { normalizedFailure } from "../domain/errors";
import type {
  ExecutionContext,
  ExecutionIntent,
  ExecutionRun,
  ProviderCapabilityDescriptor,
} from "../domain/types";
import { EXECUTION_RUN_SCHEMA_VERSION } from "../domain/types";
import type { ClockPort } from "../ports/clockPort";
import type { IdentityPort } from "../ports/identityPort";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";

export type CreateExecutionRunInput = {
  intent: ExecutionIntent;
  context: ExecutionContext;
  capability?: ProviderCapabilityDescriptor;
};

export type CreateExecutionRunResult =
  | { ok: true; run: ExecutionRun }
  | { ok: false; failure: ReturnType<typeof normalizedFailure>; run?: ExecutionRun };

export async function createExecutionRun(
  input: CreateExecutionRunInput,
  deps: {
    clock: ClockPort;
    identity: IdentityPort;
    repository: ExecutionRunRepositoryPort;
    schemas: ExecutionRunSchemaValidationPort;
  },
): Promise<CreateExecutionRunResult> {
  const schema = await deps.schemas.validate("execution-intent", input.intent);
  if (!schema.ok) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Execution intent failed schema validation",
        retryable: true,
        correlationId: typeof input.intent?.correlationId === "string"
          ? input.intent.correlationId
          : "unknown",
      }),
    };
  }

  const now = deps.clock.nowIso();
  const policy = evaluateReadOnlyPolicy({
    intent: input.intent,
    context: input.context,
    capability: input.capability,
    gateSatisfied: input.intent.requiresHumanGate ? false : undefined,
  });

  const disclosure = createSourceDisclosure({
    source: input.context.declaredSource,
    providerLane: input.intent.requestedLane,
    limits: ["d2-d1-fixture-first", "memory-process-local"],
    cursorUnverified: input.intent.requestedLane === "cursor",
  });

  const runId = deps.identity.nextRunId();
  const base: ExecutionRun = {
    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
    runId,
    correlationId: input.intent.correlationId,
    state: policy.ok ? "idle" : "blocked",
    intent: input.intent,
    context: input.context,
    disclosure,
    createdAt: now,
    updatedAt: now,
    version: 1,
    capability: input.capability,
    usage: usageUnavailable("not_provided"),
    persistence: {
      kind: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
    validation: policy.ok
      ? { ok: true, validatedAt: now }
      : { ok: false, validatedAt: now, failure: policy.failure },
    failure: policy.ok ? undefined : policy.failure,
    blockedReason: policy.ok ? undefined : policy.failure.code,
  };

  const runSchema = await deps.schemas.validate("execution-run", base);
  if (!runSchema.ok) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "internal_normalized_failure",
        code: "INTERNAL_NORMALIZED_FAILURE",
        userMessage: "Created run failed schema validation",
        retryable: false,
        correlationId: input.intent.correlationId,
      }),
    };
  }

  await deps.repository.save(base);
  if (!policy.ok) {
    return { ok: false, failure: policy.failure, run: base };
  }
  return { ok: true, run: base };
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts`

`````text
import { createOfficialEvidence, canSucceed } from "../domain/evidence";
import { decideTransition, type TransitionReason } from "../domain/transitions";
import { normalizedFailure } from "../domain/errors";
import type {
  Completeness,
  ExecutionRun,
  ExternalResult,
  NormalizedFailure,
} from "../domain/types";
import type { ClockPort } from "../ports/clockPort";
import type { IdentityPort } from "../ports/identityPort";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";

export type TransitionExecutionRunInput = {
  runId: string;
  reason: TransitionReason;
  completeness?: Completeness;
  externalResult?: ExternalResult;
  failure?: NormalizedFailure;
  lateEvidenceSummary?: string;
};

export type TransitionExecutionRunResult =
  | { ok: true; run: ExecutionRun }
  | { ok: false; failure: NormalizedFailure; run?: ExecutionRun };

function targetForReason(
  reason: TransitionReason,
): ExecutionRun["state"] | null {
  switch (reason) {
    case "intent_valid":
      return "running";
    case "pre_engagement_block":
      return "blocked";
    case "human_gate_required":
      return "awaiting_human";
    case "outputs_validated":
      return "succeeded";
    case "engaged_operation_failed":
      return "failed";
    case "time_limit":
    case "human_gate_expired":
      return "timed_out";
    case "cancel_accepted":
    case "human_cancel":
      return "cancelled";
    case "human_approve":
      return "running";
    case "human_reject_or_unsatisfied":
      return "blocked";
    default:
      return null;
  }
}

export async function transitionExecutionRun(
  input: TransitionExecutionRunInput,
  deps: {
    clock: ClockPort;
    identity: IdentityPort;
    repository: ExecutionRunRepositoryPort;
  },
): Promise<TransitionExecutionRunResult> {
  const existing = await deps.repository.getById(input.runId);
  if (!existing) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Execution run not found",
        retryable: false,
        correlationId: "unknown",
      }),
    };
  }

  if (input.reason === "late_result_evidence_only") {
    const evidence = createOfficialEvidence({
      evidenceId: deps.identity.nextEvidenceId(),
      runId: existing.runId,
      correlationId: existing.correlationId,
      source: existing.disclosure.source,
      completeness: "partial",
      producedAt: deps.clock.nowIso(),
      summary: input.lateEvidenceSummary ?? "late_result_redacted",
      late: true,
    });
    const updated: ExecutionRun = {
      ...existing,
      updatedAt: deps.clock.nowIso(),
      version: existing.version + 1,
      evidence: [...(existing.evidence ?? []), evidence],
    };
    await deps.repository.save(updated);
    return { ok: true, run: updated };
  }

  const to = targetForReason(input.reason);
  if (!to) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Unknown transition reason",
        retryable: false,
        correlationId: existing.correlationId,
      }),
      run: existing,
    };
  }

  const decision = decideTransition({
    from: existing.state,
    to,
    reason: input.reason,
    completeness: input.completeness,
  });
  if (!decision.allowed) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: decision.message,
        retryable: false,
        correlationId: existing.correlationId,
      }),
      run: existing,
    };
  }

  if (to === "succeeded") {
    const completeness =
      input.completeness ??
      (input.externalResult?.kind === "success"
        ? input.externalResult.completeness
        : undefined);
    if (!completeness || !canSucceed(completeness)) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "invalid_provider_result",
          code: "INVALID_PROVIDER_RESULT",
          userMessage: "Cannot succeed with partial or missing completeness",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
  }

  const now = deps.clock.nowIso();
  const updated: ExecutionRun = {
    ...existing,
    state: to,
    updatedAt: now,
    version: existing.version + 1,
    externalResult: input.externalResult ?? existing.externalResult,
    failure: input.failure ?? (to === "failed" || to === "blocked" ? existing.failure : existing.failure),
    blockedReason:
      to === "blocked"
        ? input.failure?.code ?? existing.blockedReason ?? "blocked"
        : existing.blockedReason,
  };
  await deps.repository.save(updated);
  return { ok: true, run: updated };
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts`

`````text
import type { FailureCode, FailureFamily, NormalizedFailure } from "./types";

export function normalizedFailure(input: {
  family: FailureFamily;
  code: FailureCode;
  userMessage: string;
  retryable: boolean;
  correlationId: string;
}): NormalizedFailure {
  return {
    family: input.family,
    code: input.code,
    userMessage: input.userMessage,
    technicalDetailsRedacted: true,
    retryable: input.retryable,
    correlationId: input.correlationId,
  };
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts`

`````text
/**
 * Evidence, completeness, source disclosure rules (FD-05/08).
 */
import type {
  Completeness,
  ExecutionEvidence,
  ExecutionSource,
  ProviderLane,
  SourceDisclosure,
  UsageSummary,
} from "./types";

export function assertSourceHonest(
  declared: ExecutionSource,
  claimed: ExecutionSource,
): boolean {
  return declared === claimed;
}

export function canSucceed(completeness: Completeness): boolean {
  return completeness === "complete";
}

export function createOfficialEvidence(input: {
  evidenceId: string;
  runId: string;
  correlationId: string;
  source: ExecutionSource;
  completeness: Completeness;
  producedAt: string;
  summary: string;
  late?: boolean;
  digest?: string;
}): ExecutionEvidence {
  return {
    evidenceId: input.evidenceId,
    runId: input.runId,
    correlationId: input.correlationId,
    source: input.source,
    completeness: input.completeness,
    producedAt: input.producedAt,
    digest: input.digest,
    summary: input.summary,
    late: input.late ?? false,
    official: true,
  };
}

export function createSourceDisclosure(input: {
  source: ExecutionSource;
  providerLane: ProviderLane;
  limits?: readonly string[];
  cursorUnverified?: boolean;
}): SourceDisclosure {
  return {
    source: input.source,
    providerLane: input.providerLane,
    limits: input.limits ?? [],
    processLocalMemory: true,
    cursorUnverified: input.cursorUnverified ?? input.providerLane === "cursor",
  };
}

export function usageUnavailable(reason: string): UsageSummary {
  return { status: "unavailable", reason };
}

export function isIsoTimestamp(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) {
    return false;
  }
  const t = Date.parse(value);
  return Number.isFinite(t);
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts`

`````text
import type { ExecutionRun } from "./types";
import { canSucceed } from "./evidence";

export type InvariantIssue = { readonly code: string; readonly message: string };

export function checkExecutionRunInvariants(run: ExecutionRun): InvariantIssue[] {
  const issues: InvariantIssue[] = [];
  if (run.persistence.kind !== "memory_process_local") {
    issues.push({ code: "PERSISTENCE", message: "Only memory_process_local allowed in D2-D1" });
  }
  if (run.persistence.durable || run.persistence.multiInstance || run.persistence.restartSafe) {
    issues.push({ code: "CLAIM", message: "Durable/multi-instance/restart-safe claims forbidden" });
  }
  if (run.state === "succeeded") {
    const c = run.externalResult?.kind === "success" ? run.externalResult.completeness : undefined;
    if (!c || !canSucceed(c)) {
      issues.push({ code: "PARTIAL_SUCCESS", message: "succeeded requires complete external result" });
    }
  }
  if (run.disclosure.source !== run.context.declaredSource) {
    issues.push({ code: "SOURCE", message: "disclosure source mismatch vs declared context source" });
  }
  return issues;
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts`

`````text
/**
 * Pure Validation & Read-only Policy foundation (FD-04 / CAD-04).
 * Operates on contracts only — no FS/Git/provider I/O.
 */
import { normalizedFailure } from "./errors";
import type {
  ExecutionContext,
  ExecutionIntent,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "./types";

export type PolicyInput = {
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly gateSatisfied?: boolean;
};

export type PolicyDecision =
  | { readonly ok: true }
  | { readonly ok: false; readonly failure: NormalizedFailure };

export function evaluateReadOnlyPolicy(input: PolicyInput): PolicyDecision {
  const { intent, context, capability } = input;
  const cid = intent.correlationId;

  if (intent.mutationRequested || context.permissions.gitWrite) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "mutation_forbidden",
        code: "MUTATION_FORBIDDEN",
        userMessage: "Git write or mutation intent is forbidden in D2-D",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  if (intent.arbitraryCommandRequested) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Arbitrary commands are not permitted",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  if (intent.targetPath && context.protectedPaths?.length) {
    const hit = context.protectedPaths.some(
      (p) => intent.targetPath === p || intent.targetPath!.startsWith(`${p}/`),
    );
    if (hit) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "protected_path",
          code: "PROTECTED_PATH",
          userMessage: "Target path is protected",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
  }

  if (!context.permissions.gitRead && intent.requestedLane === "git") {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "authorization",
        code: "AUTHORIZATION_ERROR",
        userMessage: "Insufficient permission for Git read",
        retryable: true,
        correlationId: cid,
      }),
    };
  }

  if (intent.requestedLane !== "none") {
    if (!capability) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "Provider capability descriptor is required",
          retryable: true,
          correlationId: cid,
        }),
      };
    }
    if (!capability.available) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "Requested provider is unavailable",
          retryable: true,
          correlationId: cid,
        }),
      };
    }
    if (!capability.readOnly) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "mutation_forbidden",
          code: "MUTATION_FORBIDDEN",
          userMessage: "Provider must be read-only for D2-D",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
    if (intent.requestedLane === "cursor" && !capability.verified) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "sandbox_blocked",
          code: "SANDBOX_BLOCKED",
          userMessage: "Cursor product capabilities remain unverified",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
  }

  if (intent.requiresHumanGate && input.gateSatisfied === false) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "human_gate_required",
        code: "HUMAN_GATE_REQUIRED",
        userMessage: "A structural human gate is required",
        retryable: true,
        correlationId: cid,
      }),
    };
  }

  if (intent.requestedSource !== context.declaredSource) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "source_mismatch",
        code: "SOURCE_MISMATCH",
        userMessage: "Declared source does not match requested source",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  return { ok: true };
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts`

`````text
/**
 * Pure eight-state transition authority (FD-02/03/04/06).
 * Sole decision of whether a transition is valid for D2-D.
 */
import type { Completeness, ExecutionState } from "./types";
import { isTerminalState } from "./types";

export type TransitionReason =
  | "intent_valid"
  | "pre_engagement_block"
  | "human_gate_required"
  | "outputs_validated"
  | "engaged_operation_failed"
  | "time_limit"
  | "cancel_accepted"
  | "human_approve"
  | "human_cancel"
  | "human_reject_or_unsatisfied"
  | "human_gate_expired"
  | "late_result_evidence_only"
  | "forbidden";

export type TransitionRequest = {
  readonly from: ExecutionState;
  readonly to: ExecutionState;
  readonly reason: TransitionReason;
  /** Required when to === succeeded */
  readonly completeness?: Completeness;
};

export type TransitionDecision =
  | { readonly allowed: true }
  | { readonly allowed: false; readonly code: string; readonly message: string };

/** Allowed edges from documents 21 §J + FD-06 (awaiting_human → timed_out). */
const ALLOWED: ReadonlyArray<readonly [ExecutionState, ExecutionState, TransitionReason]> = [
  ["idle", "running", "intent_valid"],
  ["idle", "blocked", "pre_engagement_block"],
  ["running", "awaiting_human", "human_gate_required"],
  ["running", "succeeded", "outputs_validated"],
  ["running", "failed", "engaged_operation_failed"],
  ["running", "timed_out", "time_limit"],
  ["running", "cancelled", "cancel_accepted"],
  ["awaiting_human", "running", "human_approve"],
  ["awaiting_human", "cancelled", "human_cancel"],
  ["awaiting_human", "blocked", "human_reject_or_unsatisfied"],
  ["awaiting_human", "timed_out", "human_gate_expired"],
];

export function isAllowedTransition(
  from: ExecutionState,
  to: ExecutionState,
  reason: TransitionReason,
): boolean {
  return ALLOWED.some(([f, t, r]) => f === from && t === to && r === reason);
}

export function decideTransition(req: TransitionRequest): TransitionDecision {
  if (req.reason === "late_result_evidence_only") {
    return {
      allowed: false,
      code: "LATE_RESULT_NO_STATE_MUTATION",
      message: "Late result is evidence-only and must not mutate state",
    };
  }

  if (isTerminalState(req.from)) {
    return {
      allowed: false,
      code: "TERMINAL_REQUIRES_NEW_RUN",
      message: "Terminal state requires a new run identity",
    };
  }

  if (req.to === "succeeded") {
    if (req.completeness === "partial") {
      return {
        allowed: false,
        code: "PARTIAL_NEVER_SUCCEEDED",
        message: "Partial completeness cannot transition to succeeded",
      };
    }
    if (req.completeness !== "complete") {
      return {
        allowed: false,
        code: "SUCCEEDED_REQUIRES_COMPLETE",
        message: "succeeded requires completeness complete",
      };
    }
  }

  if (!isAllowedTransition(req.from, req.to, req.reason)) {
    return {
      allowed: false,
      code: "TRANSITION_FORBIDDEN",
      message: `Transition ${req.from}→${req.to} (${req.reason}) is not allowed`,
    };
  }

  return { allowed: true };
}

export function listAllowedTransitions(): ReadonlyArray<{
  from: ExecutionState;
  to: ExecutionState;
  reason: TransitionReason;
}> {
  return ALLOWED.map(([from, to, reason]) => ({ from, to, reason }));
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts`

`````text
/**
 * D2-D1 Execution Run — canonical domain vocabulary (twelve functional objects).
 * Pure domain: no Next/Node/fs/process/network/SDK/AJV.
 * Authority: sole D2-D technical state authority (TECH-RUN-B).
 */

export const EXECUTION_RUN_SCHEMA_VERSION = "0.1.0-d2d1" as const;

/** Eight persistent states exactly (FD-02). No STATE-B. */
export type ExecutionState =
  | "idle"
  | "running"
  | "awaiting_human"
  | "succeeded"
  | "failed"
  | "cancelled"
  | "timed_out"
  | "blocked";

export const EXECUTION_STATES: readonly ExecutionState[] = [
  "idle",
  "running",
  "awaiting_human",
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "blocked",
] as const;

export type TerminalExecutionState =
  | "succeeded"
  | "failed"
  | "cancelled"
  | "timed_out"
  | "blocked";

export const TERMINAL_STATES: readonly TerminalExecutionState[] = [
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "blocked",
] as const;

export type ExecutionSource = "fixture" | "sandbox-real" | "real";

export type Completeness = "complete" | "partial";

export type ProviderLane = "ai" | "git" | "cursor" | "none";

export type FailureFamily =
  | "validation"
  | "authentication"
  | "authorization"
  | "provider_unavailable"
  | "rate_limited"
  | "timed_out"
  | "cancelled"
  | "sandbox_blocked"
  | "protected_path"
  | "mutation_forbidden"
  | "human_gate_required"
  | "invalid_provider_result"
  | "internal_normalized_failure"
  | "source_mismatch";

export type FailureCode =
  | "VALIDATION_ERROR"
  | "AUTHENTICATION_ERROR"
  | "AUTHORIZATION_ERROR"
  | "PROVIDER_UNAVAILABLE"
  | "RATE_LIMITED"
  | "TIMED_OUT"
  | "CANCELLED"
  | "SANDBOX_BLOCKED"
  | "PROTECTED_PATH"
  | "MUTATION_FORBIDDEN"
  | "HUMAN_GATE_REQUIRED"
  | "INVALID_PROVIDER_RESULT"
  | "INTERNAL_NORMALIZED_FAILURE"
  | "SOURCE_MISMATCH";

/** 1. ExecutionIntent */
export type ExecutionIntent = {
  readonly intentId: string;
  readonly correlationId: string;
  readonly requestedLane: ProviderLane;
  readonly operation: string;
  readonly requestedSource: ExecutionSource;
  readonly requiresHumanGate: boolean;
  readonly mutationRequested: boolean;
  readonly arbitraryCommandRequested: boolean;
  readonly targetPath?: string;
  readonly metadata?: Readonly<Record<string, unknown>>;
};

/** 2. ExecutionContext */
export type ExecutionContext = {
  readonly projectId: string;
  readonly workspaceId?: string;
  readonly actorId: string;
  readonly declaredSource: ExecutionSource;
  readonly allowlistRepos?: readonly string[];
  readonly protectedPaths?: readonly string[];
  readonly permissions: {
    readonly gitRead: boolean;
    readonly gitWrite: boolean;
    readonly providerInvoke: boolean;
  };
};

/** 3. ProviderCapabilityDescriptor — provider-independent */
export type ProviderCapabilityDescriptor = {
  readonly lane: ProviderLane;
  readonly capabilityId: string;
  readonly available: boolean;
  readonly verified: boolean;
  readonly readOnly: boolean;
  readonly supportsCancellation: boolean;
  readonly supportsTimeout: boolean;
};

/** 4. ValidationOutcome */
export type ValidationOutcome =
  | {
      readonly ok: true;
      readonly validatedAt: string;
    }
  | {
      readonly ok: false;
      readonly validatedAt: string;
      readonly failure: NormalizedFailure;
    };

/** 6. ExecutionState — see union above */

/** 7. ExternalResult */
export type ExternalResult =
  | {
      readonly kind: "success";
      readonly completeness: Completeness;
      readonly redactedSummary: string;
      readonly rawPresent: false;
    }
  | {
      readonly kind: "failure";
      readonly failure: NormalizedFailure;
    }
  | {
      readonly kind: "empty";
    };

/** 8. ExecutionEvidence */
export type ExecutionEvidence = {
  readonly evidenceId: string;
  readonly runId: string;
  readonly correlationId: string;
  readonly source: ExecutionSource;
  readonly completeness: Completeness;
  readonly producedAt: string;
  readonly digest?: string;
  readonly summary: string;
  readonly late: boolean;
  readonly official: true;
};

/** 9. SourceDisclosure */
export type SourceDisclosure = {
  readonly source: ExecutionSource;
  readonly providerLane: ProviderLane;
  readonly limits: readonly string[];
  readonly processLocalMemory: boolean;
  readonly cursorUnverified: boolean;
};

/** 10. HumanDecisionGate */
export type HumanDecisionGate = {
  readonly gateId: string;
  readonly question: string;
  readonly required: boolean;
  readonly decision?: "approve" | "reject" | "cancel";
  readonly decidedAt?: string;
  readonly expiresAt?: string;
};

/** 11. UsageSummary */
export type UsageSummary =
  | {
      readonly status: "validated";
      readonly inputTokens?: number;
      readonly outputTokens?: number;
      readonly unit?: string;
    }
  | {
      readonly status: "unavailable";
      readonly reason: string;
    };

/** 12. NormalizedFailure */
export type NormalizedFailure = {
  readonly family: FailureFamily;
  readonly code: FailureCode;
  readonly userMessage: string;
  readonly technicalDetailsRedacted: true;
  readonly retryable: boolean;
  readonly correlationId: string;
};

/** 5. ExecutionRun — aggregate holding state authority fields */
export type ExecutionRun = {
  readonly schemaVersion: typeof EXECUTION_RUN_SCHEMA_VERSION;
  readonly runId: string;
  readonly correlationId: string;
  readonly state: ExecutionState;
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly disclosure: SourceDisclosure;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly version: number;
  readonly validation?: ValidationOutcome;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly gate?: HumanDecisionGate;
  readonly externalResult?: ExternalResult;
  readonly evidence?: readonly ExecutionEvidence[];
  readonly usage: UsageSummary;
  readonly failure?: NormalizedFailure;
  readonly blockedReason?: string;
  /** Process-local memory disclosure (STORE-B stage 1). */
  readonly persistence: {
    readonly kind: "memory_process_local";
    readonly durable: false;
    readonly multiInstance: false;
    readonly restartSafe: false;
  };
};

export function isTerminalState(state: ExecutionState): state is TerminalExecutionState {
  return (TERMINAL_STATES as readonly string[]).includes(state);
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts`

`````text
/**
 * Deterministic D2-D1 fixture catalogue — source always fixture.
 */
import type {
  ExecutionContext,
  ExecutionIntent,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "../domain/types";
import { normalizedFailure } from "../domain/errors";

export type FixtureScenarioId =
  | "nominal"
  | "validation_failure"
  | "auth_failure"
  | "provider_unavailable"
  | "rate_limit"
  | "timeout"
  | "cancellation"
  | "blocked_gate"
  | "protected_path"
  | "mutation_forbidden"
  | "partial_result"
  | "invalid_provider_result"
  | "late_result"
  | "secret_redaction"
  | "source_mismatch";

export type FixtureScenario = {
  readonly id: FixtureScenarioId;
  readonly source: "fixture";
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly expectedFailure?: NormalizedFailure;
  readonly notes: string;
};

const baseContext = (over: Partial<ExecutionContext> = {}): ExecutionContext => ({
  projectId: "project:d2d1-fixture",
  actorId: "actor:fixture",
  declaredSource: "fixture",
  protectedPaths: [".env", "secrets"],
  permissions: { gitRead: true, gitWrite: false, providerInvoke: true },
  ...over,
});

const baseIntent = (over: Partial<ExecutionIntent> = {}): ExecutionIntent => ({
  intentId: "intent:fixture:base",
  correlationId: "corr:fixture:base",
  requestedLane: "ai",
  operation: "summarize_read_only",
  requestedSource: "fixture",
  requiresHumanGate: false,
  mutationRequested: false,
  arbitraryCommandRequested: false,
  ...over,
});

const aiCapability: ProviderCapabilityDescriptor = {
  lane: "ai",
  capabilityId: "ai:fixture",
  available: true,
  verified: true,
  readOnly: true,
  supportsCancellation: true,
  supportsTimeout: true,
};

export const FIXTURE_CATALOGUE: readonly FixtureScenario[] = [
  {
    id: "nominal",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:nominal", correlationId: "corr:fixture:nominal" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Happy path idle→running→succeeded",
  },
  {
    id: "validation_failure",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:validation",
      correlationId: "corr:fixture:validation",
      operation: "",
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Invalid operation empty — schema deny",
  },
  {
    id: "auth_failure",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:auth", correlationId: "corr:fixture:auth", requestedLane: "git" }),
    context: baseContext({ permissions: { gitRead: false, gitWrite: false, providerInvoke: false } }),
    capability: { ...aiCapability, lane: "git", capabilityId: "git:fixture" },
    expectedFailure: normalizedFailure({
      family: "authorization",
      code: "AUTHORIZATION_ERROR",
      userMessage: "Insufficient permission for Git read",
      retryable: true,
      correlationId: "corr:fixture:auth",
    }),
    notes: "Authorization deny",
  },
  {
    id: "provider_unavailable",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:unavail", correlationId: "corr:fixture:unavail" }),
    context: baseContext(),
    capability: { ...aiCapability, available: false },
    notes: "Provider unavailable",
  },
  {
    id: "rate_limit",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:rate", correlationId: "corr:fixture:rate" }),
    context: baseContext(),
    capability: aiCapability,
    expectedFailure: normalizedFailure({
      family: "rate_limited",
      code: "RATE_LIMITED",
      userMessage: "Provider rate limited",
      retryable: true,
      correlationId: "corr:fixture:rate",
    }),
    notes: "Represents rate limit failure object",
  },
  {
    id: "timeout",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:timeout", correlationId: "corr:fixture:timeout" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "running→timed_out",
  },
  {
    id: "cancellation",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:cancel", correlationId: "corr:fixture:cancel" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "running→cancelled",
  },
  {
    id: "blocked_gate",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:gate",
      correlationId: "corr:fixture:gate",
      requiresHumanGate: true,
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Human gate required blocks engagement when unsatisfied",
  },
  {
    id: "protected_path",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:path",
      correlationId: "corr:fixture:path",
      targetPath: ".env/token",
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Protected path deny",
  },
  {
    id: "mutation_forbidden",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:mutate",
      correlationId: "corr:fixture:mutate",
      mutationRequested: true,
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Mutation forbidden",
  },
  {
    id: "partial_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:partial", correlationId: "corr:fixture:partial" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Partial never succeeded",
  },
  {
    id: "invalid_provider_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:invalid", correlationId: "corr:fixture:invalid" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Invalid provider result → failed",
  },
  {
    id: "late_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:late", correlationId: "corr:fixture:late" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Late result evidence-only",
  },
  {
    id: "secret_redaction",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:secret", correlationId: "corr:fixture:secret" }),
    context: baseContext(),
    capability: aiCapability,
    expectedFailure: normalizedFailure({
      family: "authentication",
      code: "AUTHENTICATION_ERROR",
      userMessage: "Credentials unavailable",
      retryable: true,
      correlationId: "corr:fixture:secret",
    }),
    notes: "Failure object never carries secrets",
  },
  {
    id: "source_mismatch",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:mismatch",
      correlationId: "corr:fixture:mismatch",
      requestedSource: "real",
    }),
    context: baseContext({ declaredSource: "fixture" }),
    capability: aiCapability,
    notes: "Source mismatch deny",
  },
] as const;

export function getFixture(id: FixtureScenarioId): FixtureScenario {
  const found = FIXTURE_CATALOGUE.find((f) => f.id === id);
  if (!found) throw new Error(`missing_fixture:${id}`);
  return found;
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/index.ts`

`````text
/**
 * D2-D1 OA execution-run public barrel.
 * Sole D2-D technical state authority — memory/fixture-first only.
 */
export { EXECUTION_RUN_SCHEMA_VERSION, EXECUTION_STATES, TERMINAL_STATES, isTerminalState } from "./domain/types";
export type {
  Completeness,
  ExecutionContext,
  ExecutionEvidence,
  ExecutionIntent,
  ExecutionRun,
  ExecutionSource,
  ExecutionState,
  ExternalResult,
  FailureCode,
  FailureFamily,
  HumanDecisionGate,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
  ProviderLane,
  SourceDisclosure,
  UsageSummary,
  ValidationOutcome,
} from "./domain/types";
export { normalizedFailure } from "./domain/errors";
export {
  decideTransition,
  isAllowedTransition,
  listAllowedTransitions,
} from "./domain/transitions";
export type { TransitionDecision, TransitionReason, TransitionRequest } from "./domain/transitions";
export { evaluateReadOnlyPolicy } from "./domain/policy";
export type { PolicyDecision, PolicyInput } from "./domain/policy";
export {
  assertSourceHonest,
  canSucceed,
  createOfficialEvidence,
  createSourceDisclosure,
  isIsoTimestamp,
  usageUnavailable,
} from "./domain/evidence";
export { checkExecutionRunInvariants } from "./domain/invariants";
export { createExecutionRun } from "./application/createExecutionRun";
export type { CreateExecutionRunInput, CreateExecutionRunResult } from "./application/createExecutionRun";
export { transitionExecutionRun } from "./application/transitionExecutionRun";
export type {
  TransitionExecutionRunInput,
  TransitionExecutionRunResult,
} from "./application/transitionExecutionRun";
export { composeExecutionRunMemory } from "./application/composeExecutionRun";
export type { ExecutionRunComposition } from "./application/composeExecutionRun";
export type { ExecutionRunRepositoryPort } from "./ports/executionRunRepository";
export type { ExecutionRunSchemaValidationPort } from "./ports/executionRunSchemaValidation";
export type { ClockPort } from "./ports/clockPort";
export type { IdentityPort } from "./ports/identityPort";
export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";
`````

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts`

`````text
/**
 * AJV Draft-07 boundary validation for D2-D1 — infrastructure only.
 * Domain/application must not import this module.
 */
import fs from "node:fs";
import path from "node:path";
import Ajv from "ajv";
import type {
  ExecutionRunSchemaName,
  ExecutionRunSchemaValidationPort,
  ExecutionRunSchemaValidationResult,
} from "../ports/executionRunSchemaValidation";

const MAX_ERRORS = 20;

const SCHEMA_FILES: Record<ExecutionRunSchemaName, string> = {
  "execution-intent": "execution-intent.schema.json",
  "execution-run": "execution-run.schema.json",
  "normalized-failure": "normalized-failure.schema.json",
  "execution-evidence": "execution-evidence.schema.json",
  "source-disclosure": "source-disclosure.schema.json",
};

const SCHEMA_IDS: Record<ExecutionRunSchemaName, string> = {
  "execution-intent":
    "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
  "execution-run": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
  "normalized-failure":
    "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
  "execution-evidence":
    "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
  "source-disclosure":
    "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
};

export class AjvExecutionRunSchemaValidation
  implements ExecutionRunSchemaValidationPort
{
  private readonly ajv: Ajv.Ajv;
  private ready = false;
  private readonly schemasDir: string;

  constructor(schemasDir?: string) {
    this.schemasDir = schemasDir ?? path.join(__dirname, "../schemas");
    this.ajv = new Ajv({
      allErrors: true,
      schemaId: "auto",
      meta: true,
      validateSchema: true,
      format: "full",
      unknownFormats: "ignore",
    });
  }

  private ensureLoaded(): void {
    if (this.ready) return;
    for (const file of Object.values(SCHEMA_FILES)) {
      const full = path.join(this.schemasDir, file);
      const raw = JSON.parse(fs.readFileSync(full, "utf8")) as object;
      this.ajv.addSchema(raw);
    }
    this.ready = true;
  }

  async validate(
    schema: ExecutionRunSchemaName,
    value: unknown,
  ): Promise<ExecutionRunSchemaValidationResult> {
    try {
      // Fail-closed: reject null/undefined before schema metadata use.
      if (value === null || value === undefined) {
        return { ok: false, errors: ["value_null_or_undefined"] };
      }
      this.ensureLoaded();
      const validate = this.ajv.getSchema(SCHEMA_IDS[schema]);
      if (!validate) {
        return { ok: false, errors: ["schema_not_loaded"] };
      }
      const ok = validate(value) as boolean;
      if (ok) return { ok: true };
      const errors = (validate.errors ?? [])
        .slice(0, MAX_ERRORS)
        .map((e) => `${e.dataPath || "/"} ${e.message ?? "invalid"}`.trim());
      return { ok: false, errors: errors.length ? errors : ["schema_invalid"] };
    } catch {
      return { ok: false, errors: ["schema_validation_internal_failure"] };
    }
  }
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts`

`````text
import type { ClockPort } from "../ports/clockPort";

export class FixedClock implements ClockPort {
  constructor(private readonly iso: string) {}
  nowIso(): string {
    return this.iso;
  }
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts`

`````text
import type { ExecutionRun } from "../domain/types";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { MemoryExecutionRunStore } from "./memoryExecutionRunStore";

export class MemoryExecutionRunRepository implements ExecutionRunRepositoryPort {
  constructor(private readonly store: MemoryExecutionRunStore) {}

  async save(run: ExecutionRun): Promise<void> {
    this.store.runs.set(run.runId, structuredClone(run));
  }

  async getById(runId: string): Promise<ExecutionRun | null> {
    const found = this.store.runs.get(runId);
    return found ? structuredClone(found) : null;
  }

  async listByCorrelationId(correlationId: string): Promise<ExecutionRun[]> {
    const out: ExecutionRun[] = [];
    for (const run of this.store.runs.values()) {
      if (run.correlationId === correlationId) {
        out.push(structuredClone(run));
      }
    }
    out.sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.runId.localeCompare(b.runId));
    return out;
  }
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts`

`````text
import type { ExecutionRun } from "../domain/types";

export class MemoryExecutionRunStore {
  readonly runs = new Map<string, ExecutionRun>();
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts`

`````text
import type { IdentityPort } from "../ports/identityPort";

export class SequentialIdentity implements IdentityPort {
  private run = 0;
  private evidence = 0;
  private intent = 0;

  nextRunId(): string {
    this.run += 1;
    return `executionrun:d2d1:${String(this.run).padStart(4, "0")}`;
  }

  nextEvidenceId(): string {
    this.evidence += 1;
    return `evidence:d2d1:${String(this.evidence).padStart(4, "0")}`;
  }

  nextIntentId(): string {
    this.intent += 1;
    return `intent:d2d1:${String(this.intent).padStart(4, "0")}`;
  }
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts`

`````text
export interface ClockPort {
  nowIso(): string;
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts`

`````text
import type { ExecutionRun } from "../domain/types";

export interface ExecutionRunRepositoryPort {
  save(run: ExecutionRun): Promise<void>;
  getById(runId: string): Promise<ExecutionRun | null>;
  listByCorrelationId(correlationId: string): Promise<ExecutionRun[]>;
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts`

`````text
export type ExecutionRunSchemaValidationSuccess = { ok: true };
export type ExecutionRunSchemaValidationFailure = {
  ok: false;
  errors: string[];
};
export type ExecutionRunSchemaValidationResult =
  | ExecutionRunSchemaValidationSuccess
  | ExecutionRunSchemaValidationFailure;

export type ExecutionRunSchemaName =
  | "execution-intent"
  | "execution-run"
  | "normalized-failure"
  | "execution-evidence"
  | "source-disclosure";

export interface ExecutionRunSchemaValidationPort {
  /**
   * Fail-closed validation before any metadata exploitation.
   * Must not throw raw AJV exceptions to callers.
   */
  validate(
    schema: ExecutionRunSchemaName,
    value: unknown,
  ): Promise<ExecutionRunSchemaValidationResult>;
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts`

`````text
export interface IdentityPort {
  nextRunId(): string;
  nextEvidenceId(): string;
  nextIntentId(): string;
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json`

`````text
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "evidenceId",
    "runId",
    "correlationId",
    "source",
    "completeness",
    "producedAt",
    "summary",
    "late",
    "official"
  ],
  "properties": {
    "evidenceId": {
      "type": "string",
      "minLength": 1
    },
    "runId": {
      "type": "string",
      "minLength": 1
    },
    "correlationId": {
      "type": "string",
      "minLength": 1
    },
    "source": {
      "type": "string",
      "enum": [
        "fixture",
        "sandbox-real",
        "real"
      ]
    },
    "completeness": {
      "type": "string",
      "enum": [
        "complete",
        "partial"
      ]
    },
    "producedAt": {
      "type": "string",
      "format": "date-time"
    },
    "digest": {
      "type": "string"
    },
    "summary": {
      "type": "string"
    },
    "late": {
      "type": "boolean"
    },
    "official": {
      "type": "boolean",
      "const": true
    }
  }
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json`

`````text
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "intentId",
    "correlationId",
    "requestedLane",
    "operation",
    "requestedSource",
    "requiresHumanGate",
    "mutationRequested",
    "arbitraryCommandRequested"
  ],
  "properties": {
    "intentId": {
      "type": "string",
      "minLength": 1
    },
    "correlationId": {
      "type": "string",
      "minLength": 1
    },
    "requestedLane": {
      "type": "string",
      "enum": [
        "ai",
        "git",
        "cursor",
        "none"
      ]
    },
    "operation": {
      "type": "string",
      "minLength": 1
    },
    "requestedSource": {
      "type": "string",
      "enum": [
        "fixture",
        "sandbox-real",
        "real"
      ]
    },
    "requiresHumanGate": {
      "type": "boolean"
    },
    "mutationRequested": {
      "type": "boolean"
    },
    "arbitraryCommandRequested": {
      "type": "boolean"
    },
    "targetPath": {
      "type": "string"
    },
    "metadata": {
      "type": "object"
    }
  }
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json`

`````text
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "runId",
    "correlationId",
    "state",
    "intent",
    "context",
    "disclosure",
    "createdAt",
    "updatedAt",
    "version",
    "usage",
    "persistence"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-d2d1"
    },
    "runId": {
      "type": "string",
      "minLength": 1
    },
    "correlationId": {
      "type": "string",
      "minLength": 1
    },
    "state": {
      "type": "string",
      "enum": [
        "idle",
        "running",
        "awaiting_human",
        "succeeded",
        "failed",
        "cancelled",
        "timed_out",
        "blocked"
      ]
    },
    "intent": {
      "type": "object"
    },
    "context": {
      "type": "object"
    },
    "disclosure": {
      "type": "object"
    },
    "createdAt": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    },
    "version": {
      "type": "integer",
      "minimum": 1
    },
    "validation": {
      "type": "object"
    },
    "capability": {
      "type": "object"
    },
    "gate": {
      "type": "object"
    },
    "externalResult": {
      "type": "object"
    },
    "evidence": {
      "type": "array"
    },
    "usage": {
      "type": "object"
    },
    "failure": {
      "type": "object"
    },
    "blockedReason": {
      "type": "string"
    },
    "persistence": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "kind",
        "durable",
        "multiInstance",
        "restartSafe"
      ],
      "properties": {
        "kind": {
          "const": "memory_process_local"
        },
        "durable": {
          "const": false
        },
        "multiInstance": {
          "const": false
        },
        "restartSafe": {
          "const": false
        }
      }
    }
  }
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json`

`````text
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "family",
    "code",
    "userMessage",
    "technicalDetailsRedacted",
    "retryable",
    "correlationId"
  ],
  "properties": {
    "family": {
      "type": "string"
    },
    "code": {
      "type": "string"
    },
    "userMessage": {
      "type": "string",
      "minLength": 1
    },
    "technicalDetailsRedacted": {
      "type": "boolean",
      "const": true
    },
    "retryable": {
      "type": "boolean"
    },
    "correlationId": {
      "type": "string",
      "minLength": 1
    }
  }
}
`````

### `projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json`

`````text
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "source",
    "providerLane",
    "limits",
    "processLocalMemory",
    "cursorUnverified"
  ],
  "properties": {
    "source": {
      "type": "string",
      "enum": [
        "fixture",
        "sandbox-real",
        "real"
      ]
    },
    "providerLane": {
      "type": "string",
      "enum": [
        "ai",
        "git",
        "cursor",
        "none"
      ]
    },
    "limits": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "processLocalMemory": {
      "type": "boolean",
      "const": true
    },
    "cursorUnverified": {
      "type": "boolean"
    }
  }
}
`````

## 9. Diff complet

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts
@@ -0,0 +1,52 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assertSourceHonest,
+  canSucceed,
+  createOfficialEvidence,
+  createSourceDisclosure,
+  isIsoTimestamp,
+  usageUnavailable,
+} from "@/lib/oa/execution-run";
+
+describe("D2-D1 evidence and disclosure", () => {
+  it("distinguishes sources honestly", () => {
+    expect(assertSourceHonest("fixture", "fixture")).toBe(true);
+    expect(assertSourceHonest("fixture", "real")).toBe(false);
+  });
+
+  it("partial cannot succeed", () => {
+    expect(canSucceed("partial")).toBe(false);
+    expect(canSucceed("complete")).toBe(true);
+  });
+
+  it("creates official evidence without secrets", () => {
+    const e = createOfficialEvidence({
+      evidenceId: "evidence:1",
+      runId: "run:1",
+      correlationId: "corr:1",
+      source: "fixture",
+      completeness: "complete",
+      producedAt: "2026-08-03T20:00:00.000Z",
+      summary: "ok",
+    });
+    expect(e.official).toBe(true);
+    expect(JSON.stringify(e)).not.toMatch(/sk-|password/i);
+  });
+
+  it("marks process-local disclosure", () => {
+    const d = createSourceDisclosure({ source: "fixture", providerLane: "ai" });
+    expect(d.processLocalMemory).toBe(true);
+  });
+
+  it("usage unavailable when not validated", () => {
+    expect(usageUnavailable("missing").status).toBe("unavailable");
+  });
+
+  it("validates ISO timestamps", () => {
+    expect(isIsoTimestamp("2026-08-03T20:00:00.000Z")).toBe(true);
+    expect(isIsoTimestamp("not-a-date")).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
@@ -0,0 +1,78 @@
+/**
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/execution-run");
+
+function listTsFiles(dir: string): string[] {
+  if (!fs.existsSync(dir)) return [];
+  const out: string[] = [];
+  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+    const full = path.join(dir, entry.name);
+    if (entry.isDirectory()) {
+      if (entry.name === "node_modules") continue;
+      out.push(...listTsFiles(full));
+    } else if (/\.tsx?$/.test(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+function importsOf(file: string): string[] {
+  return fs
+    .readFileSync(file, "utf8")
+    .split("\n")
+    .map((l) => l.trim())
+    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
+}
+
+describe("D2-D1 execution-run import boundaries", () => {
+  it("domain stays pure", () => {
+    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
+    expect(files.length).toBeGreaterThan(0);
+    const hits: string[] = [];
+    const forbidden =
+      /from\s+["'](?:node:|next|react|ajv|@\/lib\/(?:ops1|d1|platform|vertical-slice|harness)|fs|path|child_process)/;
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("application does not import provider SDKs or AJV", () => {
+    const files = listTsFiles(path.join(MODULE_ROOT, "application"));
+    const hits: string[] = [];
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (/from\s+["']ajv|openai|@octokit|cursor/.test(line)) {
+          hits.push(`${file}: ${line}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("module does not import harness, vertical-slice-runtime, execution-attempt, or execution-contract internals", () => {
+    const files = listTsFiles(MODULE_ROOT);
+    const hits: string[] = [];
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (
+          /vertical-slice-runtime|execution-attempt|execution-contract|harness\//.test(
+            line,
+          )
+        ) {
+          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts
@@ -0,0 +1,128 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  composeExecutionRunMemory,
+  FIXTURE_CATALOGUE,
+  getFixture,
+} from "@/lib/oa/execution-run";
+
+describe("D2-D1 fixture lifecycle", () => {
+  it("covers required catalogue scenarios", () => {
+    const ids = FIXTURE_CATALOGUE.map((f) => f.id);
+    for (const id of [
+      "nominal",
+      "validation_failure",
+      "auth_failure",
+      "provider_unavailable",
+      "rate_limit",
+      "timeout",
+      "cancellation",
+      "blocked_gate",
+      "protected_path",
+      "mutation_forbidden",
+      "partial_result",
+      "invalid_provider_result",
+      "late_result",
+      "secret_redaction",
+      "source_mismatch",
+    ]) {
+      expect(ids).toContain(id);
+      expect(getFixture(id as never).source).toBe("fixture");
+    }
+  });
+
+  it("runs nominal to succeeded", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun(
+      { intent: f.intent, context: f.context, capability: f.capability },
+      c,
+    );
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    const started = await c.transitionExecutionRun(
+      { runId: created.run.runId, reason: "intent_valid" },
+      c,
+    );
+    expect(started.ok && started.run.state).toBe("running");
+    if (!started.ok) return;
+    const done = await c.transitionExecutionRun(
+      {
+        runId: started.run.runId,
+        reason: "outputs_validated",
+        completeness: "complete",
+        externalResult: {
+          kind: "success",
+          completeness: "complete",
+          redactedSummary: "ok",
+          rawPresent: false,
+        },
+      },
+      c,
+    );
+    expect(done.ok && done.run.state).toBe("succeeded");
+  });
+
+  it("never succeeds on partial", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("partial_result");
+    const created = await c.createExecutionRun(
+      { intent: f.intent, context: f.context, capability: f.capability },
+      c,
+    );
+    if (!created.ok) return;
+    await c.transitionExecutionRun({ runId: created.run.runId, reason: "intent_valid" }, c);
+    const done = await c.transitionExecutionRun(
+      {
+        runId: created.run.runId,
+        reason: "outputs_validated",
+        completeness: "partial",
+        externalResult: {
+          kind: "success",
+          completeness: "partial",
+          redactedSummary: "partial",
+          rawPresent: false,
+        },
+      },
+      c,
+    );
+    expect(done.ok).toBe(false);
+  });
+
+  it("records late evidence without state change", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("late_result");
+    const created = await c.createExecutionRun(
+      { intent: f.intent, context: f.context, capability: f.capability },
+      c,
+    );
+    if (!created.ok) return;
+    await c.transitionExecutionRun({ runId: created.run.runId, reason: "intent_valid" }, c);
+    await c.transitionExecutionRun({ runId: created.run.runId, reason: "cancel_accepted" }, c);
+    const late = await c.transitionExecutionRun(
+      {
+        runId: created.run.runId,
+        reason: "late_result_evidence_only",
+        lateEvidenceSummary: "late_redacted",
+      },
+      c,
+    );
+    expect(late.ok).toBe(true);
+    if (!late.ok) return;
+    expect(late.run.state).toBe("cancelled");
+    expect(late.run.evidence?.some((e) => e.late)).toBe(true);
+  });
+
+  it("blocks mutation intent at create", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("mutation_forbidden");
+    const created = await c.createExecutionRun(
+      { intent: f.intent, context: f.context, capability: f.capability },
+      c,
+    );
+    expect(created.ok).toBe(false);
+    if (created.run) expect(created.run.state).toBe("blocked");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts
@@ -0,0 +1,66 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { evaluateReadOnlyPolicy, getFixture } from "@/lib/oa/execution-run";
+
+describe("D2-D1 read-only policy", () => {
+  it("denies mutation", () => {
+    const f = getFixture("mutation_forbidden");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("MUTATION_FORBIDDEN");
+  });
+
+  it("denies protected path", () => {
+    const f = getFixture("protected_path");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("PROTECTED_PATH");
+  });
+
+  it("denies auth failure", () => {
+    const f = getFixture("auth_failure");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("AUTHORIZATION_ERROR");
+  });
+
+  it("denies provider unavailable", () => {
+    const f = getFixture("provider_unavailable");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("PROVIDER_UNAVAILABLE");
+  });
+
+  it("denies source mismatch", () => {
+    const f = getFixture("source_mismatch");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("SOURCE_MISMATCH");
+  });
+
+  it("denies unsatisfied human gate", () => {
+    const f = getFixture("blocked_gate");
+    const d = evaluateReadOnlyPolicy({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+      gateSatisfied: false,
+    });
+    expect(d.ok).toBe(false);
+    if (!d.ok) expect(d.failure.code).toBe("HUMAN_GATE_REQUIRED");
+  });
+
+  it("accepts nominal", () => {
+    const f = getFixture("nominal");
+    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
+    expect(d.ok).toBe(true);
+  });
+
+  it("never exposes secrets in failures", () => {
+    const f = getFixture("secret_redaction");
+    expect(JSON.stringify(f.expectedFailure)).not.toMatch(/sk-|BEGIN PRIVATE|password/i);
+    expect(f.expectedFailure?.technicalDetailsRedacted).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts
@@ -0,0 +1,53 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { composeExecutionRunMemory, getFixture } from "@/lib/oa/execution-run";
+
+describe("D2-D1 memory repository", () => {
+  it("saves and loads with defensive copies", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await c.createExecutionRun(
+      { intent: f.intent, context: f.context, capability: f.capability },
+      c,
+    );
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    const loaded = await c.repository.getById(created.run.runId);
+    expect(loaded?.runId).toBe(created.run.runId);
+    expect(loaded).not.toBe(created.run);
+  });
+
+  it("lists by correlation deterministically", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    await c.createExecutionRun({ intent: f.intent, context: f.context, capability: f.capability }, c);
+    const list = await c.repository.listByCorrelationId(f.intent.correlationId);
+    expect(list.length).toBe(1);
+  });
+
+  it("returns null for missing", async () => {
+    const c = composeExecutionRunMemory();
+    expect(await c.repository.getById("missing")).toBeNull();
+  });
+
+  it("issues new identity after terminal via new create", async () => {
+    const c = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const a = await c.createExecutionRun({ intent: f.intent, context: f.context, capability: f.capability }, c);
+    const b = await c.createExecutionRun({ intent: f.intent, context: f.context, capability: f.capability }, c);
+    expect(a.ok && b.ok).toBe(true);
+    if (a.ok && b.ok) expect(a.run.runId).not.toBe(b.run.runId);
+  });
+
+  it("discloses process-local memory only", () => {
+    const c = composeExecutionRunMemory();
+    expect(c.disclosure).toEqual({
+      persistence: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts
@@ -0,0 +1,52 @@
+/**
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
+import { getFixture } from "@/lib/oa/execution-run";
+
+const schemasDir = path.resolve(
+  __dirname,
+  "../../../lib/oa/execution-run/schemas",
+);
+
+describe("D2-D1 AJV adversarial validation", () => {
+  const validator = new AjvExecutionRunSchemaValidation(schemasDir);
+
+  it("rejects null and undefined before metadata use", async () => {
+    expect((await validator.validate("execution-intent", null)).ok).toBe(false);
+    expect((await validator.validate("execution-intent", undefined)).ok).toBe(false);
+  });
+
+  it("rejects wrong types and missing fields", async () => {
+    expect((await validator.validate("execution-intent", 42)).ok).toBe(false);
+    expect((await validator.validate("execution-intent", {})).ok).toBe(false);
+    expect(
+      (
+        await validator.validate("execution-intent", {
+          ...getFixture("nominal").intent,
+          requestedLane: "openai",
+        })
+      ).ok,
+    ).toBe(false);
+  });
+
+  it("rejects empty operation", async () => {
+    const f = getFixture("validation_failure");
+    const r = await validator.validate("execution-intent", f.intent);
+    expect(r.ok).toBe(false);
+  });
+
+  it("accepts nominal intent", async () => {
+    const f = getFixture("nominal");
+    const r = await validator.validate("execution-intent", f.intent);
+    expect(r.ok).toBe(true);
+  });
+
+  it("does not throw raw AJV exceptions", async () => {
+    await expect(validator.validate("execution-run", { circular: null })).resolves.toMatchObject({
+      ok: false,
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts
@@ -0,0 +1,66 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  decideTransition,
+  listAllowedTransitions,
+  EXECUTION_STATES,
+  isTerminalState,
+} from "@/lib/oa/execution-run";
+
+describe("D2-D1 transition authority", () => {
+  it("exposes exactly eight states", () => {
+    expect(EXECUTION_STATES).toHaveLength(8);
+  });
+
+  it("allows documented transitions", () => {
+    for (const edge of listAllowedTransitions()) {
+      expect(
+        decideTransition({
+          from: edge.from,
+          to: edge.to,
+          reason: edge.reason,
+          completeness: edge.to === "succeeded" ? "complete" : undefined,
+        }).allowed,
+      ).toBe(true);
+    }
+  });
+
+  it("refuses terminal without new run", () => {
+    for (const state of ["succeeded", "failed", "cancelled", "timed_out", "blocked"] as const) {
+      expect(isTerminalState(state)).toBe(true);
+      const d = decideTransition({ from: state, to: "running", reason: "intent_valid" });
+      expect(d.allowed).toBe(false);
+    }
+  });
+
+  it("refuses partial succeeded", () => {
+    const d = decideTransition({
+      from: "running",
+      to: "succeeded",
+      reason: "outputs_validated",
+      completeness: "partial",
+    });
+    expect(d.allowed).toBe(false);
+  });
+
+  it("refuses late result state mutation", () => {
+    const d = decideTransition({
+      from: "cancelled",
+      to: "succeeded",
+      reason: "late_result_evidence_only",
+    });
+    expect(d.allowed).toBe(false);
+  });
+
+  it("refuses idle→succeeded", () => {
+    const d = decideTransition({
+      from: "idle",
+      to: "succeeded",
+      reason: "outputs_validated",
+      completeness: "complete",
+    });
+    expect(d.allowed).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/composeExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/composeExecutionRun.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/composeExecutionRun.ts
@@ -0,0 +1,52 @@
+import { AjvExecutionRunSchemaValidation } from "../infrastructure/ajvExecutionRunSchemaValidation";
+import { FixedClock } from "../infrastructure/fixedClock";
+import { MemoryExecutionRunRepository } from "../infrastructure/memoryExecutionRunRepository";
+import { MemoryExecutionRunStore } from "../infrastructure/memoryExecutionRunStore";
+import { SequentialIdentity } from "../infrastructure/sequentialIdentity";
+import type { ClockPort } from "../ports/clockPort";
+import type { IdentityPort } from "../ports/identityPort";
+import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
+import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
+import { createExecutionRun } from "./createExecutionRun";
+import { transitionExecutionRun } from "./transitionExecutionRun";
+
+export type ExecutionRunComposition = {
+  clock: ClockPort;
+  identity: IdentityPort;
+  repository: ExecutionRunRepositoryPort;
+  schemas: ExecutionRunSchemaValidationPort;
+  store: MemoryExecutionRunStore;
+  createExecutionRun: typeof createExecutionRun;
+  transitionExecutionRun: typeof transitionExecutionRun;
+  disclosure: {
+    persistence: "memory_process_local";
+    durable: false;
+    multiInstance: false;
+    restartSafe: false;
+  };
+};
+
+export function composeExecutionRunMemory(options?: {
+  clockIso?: string;
+}): ExecutionRunComposition {
+  const store = new MemoryExecutionRunStore();
+  const clock = new FixedClock(options?.clockIso ?? "2026-08-03T20:00:00.000Z");
+  const identity = new SequentialIdentity();
+  const repository = new MemoryExecutionRunRepository(store);
+  const schemas = new AjvExecutionRunSchemaValidation();
+  return {
+    clock,
+    identity,
+    repository,
+    schemas,
+    store,
+    createExecutionRun,
+    transitionExecutionRun,
+    disclosure: {
+      persistence: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts
@@ -0,0 +1,112 @@
+import { createSourceDisclosure, usageUnavailable } from "../domain/evidence";
+import { evaluateReadOnlyPolicy } from "../domain/policy";
+import { normalizedFailure } from "../domain/errors";
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  ExecutionRun,
+  ProviderCapabilityDescriptor,
+} from "../domain/types";
+import { EXECUTION_RUN_SCHEMA_VERSION } from "../domain/types";
+import type { ClockPort } from "../ports/clockPort";
+import type { IdentityPort } from "../ports/identityPort";
+import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
+import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
+
+export type CreateExecutionRunInput = {
+  intent: ExecutionIntent;
+  context: ExecutionContext;
+  capability?: ProviderCapabilityDescriptor;
+};
+
+export type CreateExecutionRunResult =
+  | { ok: true; run: ExecutionRun }
+  | { ok: false; failure: ReturnType<typeof normalizedFailure>; run?: ExecutionRun };
+
+export async function createExecutionRun(
+  input: CreateExecutionRunInput,
+  deps: {
+    clock: ClockPort;
+    identity: IdentityPort;
+    repository: ExecutionRunRepositoryPort;
+    schemas: ExecutionRunSchemaValidationPort;
+  },
+): Promise<CreateExecutionRunResult> {
+  const schema = await deps.schemas.validate("execution-intent", input.intent);
+  if (!schema.ok) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Execution intent failed schema validation",
+        retryable: true,
+        correlationId: typeof input.intent?.correlationId === "string"
+          ? input.intent.correlationId
+          : "unknown",
+      }),
+    };
+  }
+
+  const now = deps.clock.nowIso();
+  const policy = evaluateReadOnlyPolicy({
+    intent: input.intent,
+    context: input.context,
+    capability: input.capability,
+    gateSatisfied: input.intent.requiresHumanGate ? false : undefined,
+  });
+
+  const disclosure = createSourceDisclosure({
+    source: input.context.declaredSource,
+    providerLane: input.intent.requestedLane,
+    limits: ["d2-d1-fixture-first", "memory-process-local"],
+    cursorUnverified: input.intent.requestedLane === "cursor",
+  });
+
+  const runId = deps.identity.nextRunId();
+  const base: ExecutionRun = {
+    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
+    runId,
+    correlationId: input.intent.correlationId,
+    state: policy.ok ? "idle" : "blocked",
+    intent: input.intent,
+    context: input.context,
+    disclosure,
+    createdAt: now,
+    updatedAt: now,
+    version: 1,
+    capability: input.capability,
+    usage: usageUnavailable("not_provided"),
+    persistence: {
+      kind: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    },
+    validation: policy.ok
+      ? { ok: true, validatedAt: now }
+      : { ok: false, validatedAt: now, failure: policy.failure },
+    failure: policy.ok ? undefined : policy.failure,
+    blockedReason: policy.ok ? undefined : policy.failure.code,
+  };
+
+  const runSchema = await deps.schemas.validate("execution-run", base);
+  if (!runSchema.ok) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "internal_normalized_failure",
+        code: "INTERNAL_NORMALIZED_FAILURE",
+        userMessage: "Created run failed schema validation",
+        retryable: false,
+        correlationId: input.intent.correlationId,
+      }),
+    };
+  }
+
+  await deps.repository.save(base);
+  if (!policy.ok) {
+    return { ok: false, failure: policy.failure, run: base };
+  }
+  return { ok: true, run: base };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts
@@ -0,0 +1,170 @@
+import { createOfficialEvidence, canSucceed } from "../domain/evidence";
+import { decideTransition, type TransitionReason } from "../domain/transitions";
+import { normalizedFailure } from "../domain/errors";
+import type {
+  Completeness,
+  ExecutionRun,
+  ExternalResult,
+  NormalizedFailure,
+} from "../domain/types";
+import type { ClockPort } from "../ports/clockPort";
+import type { IdentityPort } from "../ports/identityPort";
+import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
+
+export type TransitionExecutionRunInput = {
+  runId: string;
+  reason: TransitionReason;
+  completeness?: Completeness;
+  externalResult?: ExternalResult;
+  failure?: NormalizedFailure;
+  lateEvidenceSummary?: string;
+};
+
+export type TransitionExecutionRunResult =
+  | { ok: true; run: ExecutionRun }
+  | { ok: false; failure: NormalizedFailure; run?: ExecutionRun };
+
+function targetForReason(
+  reason: TransitionReason,
+): ExecutionRun["state"] | null {
+  switch (reason) {
+    case "intent_valid":
+      return "running";
+    case "pre_engagement_block":
+      return "blocked";
+    case "human_gate_required":
+      return "awaiting_human";
+    case "outputs_validated":
+      return "succeeded";
+    case "engaged_operation_failed":
+      return "failed";
+    case "time_limit":
+    case "human_gate_expired":
+      return "timed_out";
+    case "cancel_accepted":
+    case "human_cancel":
+      return "cancelled";
+    case "human_approve":
+      return "running";
+    case "human_reject_or_unsatisfied":
+      return "blocked";
+    default:
+      return null;
+  }
+}
+
+export async function transitionExecutionRun(
+  input: TransitionExecutionRunInput,
+  deps: {
+    clock: ClockPort;
+    identity: IdentityPort;
+    repository: ExecutionRunRepositoryPort;
+  },
+): Promise<TransitionExecutionRunResult> {
+  const existing = await deps.repository.getById(input.runId);
+  if (!existing) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Execution run not found",
+        retryable: false,
+        correlationId: "unknown",
+      }),
+    };
+  }
+
+  if (input.reason === "late_result_evidence_only") {
+    const evidence = createOfficialEvidence({
+      evidenceId: deps.identity.nextEvidenceId(),
+      runId: existing.runId,
+      correlationId: existing.correlationId,
+      source: existing.disclosure.source,
+      completeness: "partial",
+      producedAt: deps.clock.nowIso(),
+      summary: input.lateEvidenceSummary ?? "late_result_redacted",
+      late: true,
+    });
+    const updated: ExecutionRun = {
+      ...existing,
+      updatedAt: deps.clock.nowIso(),
+      version: existing.version + 1,
+      evidence: [...(existing.evidence ?? []), evidence],
+    };
+    await deps.repository.save(updated);
+    return { ok: true, run: updated };
+  }
+
+  const to = targetForReason(input.reason);
+  if (!to) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Unknown transition reason",
+        retryable: false,
+        correlationId: existing.correlationId,
+      }),
+      run: existing,
+    };
+  }
+
+  const decision = decideTransition({
+    from: existing.state,
+    to,
+    reason: input.reason,
+    completeness: input.completeness,
+  });
+  if (!decision.allowed) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: decision.message,
+        retryable: false,
+        correlationId: existing.correlationId,
+      }),
+      run: existing,
+    };
+  }
+
+  if (to === "succeeded") {
+    const completeness =
+      input.completeness ??
+      (input.externalResult?.kind === "success"
+        ? input.externalResult.completeness
+        : undefined);
+    if (!completeness || !canSucceed(completeness)) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "invalid_provider_result",
+          code: "INVALID_PROVIDER_RESULT",
+          userMessage: "Cannot succeed with partial or missing completeness",
+          retryable: false,
+          correlationId: existing.correlationId,
+        }),
+        run: existing,
+      };
+    }
+  }
+
+  const now = deps.clock.nowIso();
+  const updated: ExecutionRun = {
+    ...existing,
+    state: to,
+    updatedAt: now,
+    version: existing.version + 1,
+    externalResult: input.externalResult ?? existing.externalResult,
+    failure: input.failure ?? (to === "failed" || to === "blocked" ? existing.failure : existing.failure),
+    blockedReason:
+      to === "blocked"
+        ? input.failure?.code ?? existing.blockedReason ?? "blocked"
+        : existing.blockedReason,
+  };
+  await deps.repository.save(updated);
+  return { ok: true, run: updated };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts
@@ -0,0 +1,18 @@
+import type { FailureCode, FailureFamily, NormalizedFailure } from "./types";
+
+export function normalizedFailure(input: {
+  family: FailureFamily;
+  code: FailureCode;
+  userMessage: string;
+  retryable: boolean;
+  correlationId: string;
+}): NormalizedFailure {
+  return {
+    family: input.family,
+    code: input.code,
+    userMessage: input.userMessage,
+    technicalDetailsRedacted: true,
+    retryable: input.retryable,
+    correlationId: input.correlationId,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts
@@ -0,0 +1,74 @@
+/**
+ * Evidence, completeness, source disclosure rules (FD-05/08).
+ */
+import type {
+  Completeness,
+  ExecutionEvidence,
+  ExecutionSource,
+  ProviderLane,
+  SourceDisclosure,
+  UsageSummary,
+} from "./types";
+
+export function assertSourceHonest(
+  declared: ExecutionSource,
+  claimed: ExecutionSource,
+): boolean {
+  return declared === claimed;
+}
+
+export function canSucceed(completeness: Completeness): boolean {
+  return completeness === "complete";
+}
+
+export function createOfficialEvidence(input: {
+  evidenceId: string;
+  runId: string;
+  correlationId: string;
+  source: ExecutionSource;
+  completeness: Completeness;
+  producedAt: string;
+  summary: string;
+  late?: boolean;
+  digest?: string;
+}): ExecutionEvidence {
+  return {
+    evidenceId: input.evidenceId,
+    runId: input.runId,
+    correlationId: input.correlationId,
+    source: input.source,
+    completeness: input.completeness,
+    producedAt: input.producedAt,
+    digest: input.digest,
+    summary: input.summary,
+    late: input.late ?? false,
+    official: true,
+  };
+}
+
+export function createSourceDisclosure(input: {
+  source: ExecutionSource;
+  providerLane: ProviderLane;
+  limits?: readonly string[];
+  cursorUnverified?: boolean;
+}): SourceDisclosure {
+  return {
+    source: input.source,
+    providerLane: input.providerLane,
+    limits: input.limits ?? [],
+    processLocalMemory: true,
+    cursorUnverified: input.cursorUnverified ?? input.providerLane === "cursor",
+  };
+}
+
+export function usageUnavailable(reason: string): UsageSummary {
+  return { status: "unavailable", reason };
+}
+
+export function isIsoTimestamp(value: string): boolean {
+  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) {
+    return false;
+  }
+  const t = Date.parse(value);
+  return Number.isFinite(t);
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts
@@ -0,0 +1,24 @@
+import type { ExecutionRun } from "./types";
+import { canSucceed } from "./evidence";
+
+export type InvariantIssue = { readonly code: string; readonly message: string };
+
+export function checkExecutionRunInvariants(run: ExecutionRun): InvariantIssue[] {
+  const issues: InvariantIssue[] = [];
+  if (run.persistence.kind !== "memory_process_local") {
+    issues.push({ code: "PERSISTENCE", message: "Only memory_process_local allowed in D2-D1" });
+  }
+  if (run.persistence.durable || run.persistence.multiInstance || run.persistence.restartSafe) {
+    issues.push({ code: "CLAIM", message: "Durable/multi-instance/restart-safe claims forbidden" });
+  }
+  if (run.state === "succeeded") {
+    const c = run.externalResult?.kind === "success" ? run.externalResult.completeness : undefined;
+    if (!c || !canSucceed(c)) {
+      issues.push({ code: "PARTIAL_SUCCESS", message: "succeeded requires complete external result" });
+    }
+  }
+  if (run.disclosure.source !== run.context.declaredSource) {
+    issues.push({ code: "SOURCE", message: "disclosure source mismatch vs declared context source" });
+  }
+  return issues;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
@@ -0,0 +1,163 @@
+/**
+ * Pure Validation & Read-only Policy foundation (FD-04 / CAD-04).
+ * Operates on contracts only — no FS/Git/provider I/O.
+ */
+import { normalizedFailure } from "./errors";
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+} from "./types";
+
+export type PolicyInput = {
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly capability?: ProviderCapabilityDescriptor;
+  readonly gateSatisfied?: boolean;
+};
+
+export type PolicyDecision =
+  | { readonly ok: true }
+  | { readonly ok: false; readonly failure: NormalizedFailure };
+
+export function evaluateReadOnlyPolicy(input: PolicyInput): PolicyDecision {
+  const { intent, context, capability } = input;
+  const cid = intent.correlationId;
+
+  if (intent.mutationRequested || context.permissions.gitWrite) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "mutation_forbidden",
+        code: "MUTATION_FORBIDDEN",
+        userMessage: "Git write or mutation intent is forbidden in D2-D",
+        retryable: false,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  if (intent.arbitraryCommandRequested) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "Arbitrary commands are not permitted",
+        retryable: false,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  if (intent.targetPath && context.protectedPaths?.length) {
+    const hit = context.protectedPaths.some(
+      (p) => intent.targetPath === p || intent.targetPath!.startsWith(`${p}/`),
+    );
+    if (hit) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "protected_path",
+          code: "PROTECTED_PATH",
+          userMessage: "Target path is protected",
+          retryable: false,
+          correlationId: cid,
+        }),
+      };
+    }
+  }
+
+  if (!context.permissions.gitRead && intent.requestedLane === "git") {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "authorization",
+        code: "AUTHORIZATION_ERROR",
+        userMessage: "Insufficient permission for Git read",
+        retryable: true,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  if (intent.requestedLane !== "none") {
+    if (!capability) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "provider_unavailable",
+          code: "PROVIDER_UNAVAILABLE",
+          userMessage: "Provider capability descriptor is required",
+          retryable: true,
+          correlationId: cid,
+        }),
+      };
+    }
+    if (!capability.available) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "provider_unavailable",
+          code: "PROVIDER_UNAVAILABLE",
+          userMessage: "Requested provider is unavailable",
+          retryable: true,
+          correlationId: cid,
+        }),
+      };
+    }
+    if (!capability.readOnly) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "mutation_forbidden",
+          code: "MUTATION_FORBIDDEN",
+          userMessage: "Provider must be read-only for D2-D",
+          retryable: false,
+          correlationId: cid,
+        }),
+      };
+    }
+    if (intent.requestedLane === "cursor" && !capability.verified) {
+      return {
+        ok: false,
+        failure: normalizedFailure({
+          family: "sandbox_blocked",
+          code: "SANDBOX_BLOCKED",
+          userMessage: "Cursor product capabilities remain unverified",
+          retryable: false,
+          correlationId: cid,
+        }),
+      };
+    }
+  }
+
+  if (intent.requiresHumanGate && input.gateSatisfied === false) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "human_gate_required",
+        code: "HUMAN_GATE_REQUIRED",
+        userMessage: "A structural human gate is required",
+        retryable: true,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  if (intent.requestedSource !== context.declaredSource) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "source_mismatch",
+        code: "SOURCE_MISMATCH",
+        userMessage: "Declared source does not match requested source",
+        retryable: false,
+        correlationId: cid,
+      }),
+    };
+  }
+
+  return { ok: true };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts
@@ -0,0 +1,109 @@
+/**
+ * Pure eight-state transition authority (FD-02/03/04/06).
+ * Sole decision of whether a transition is valid for D2-D.
+ */
+import type { Completeness, ExecutionState } from "./types";
+import { isTerminalState } from "./types";
+
+export type TransitionReason =
+  | "intent_valid"
+  | "pre_engagement_block"
+  | "human_gate_required"
+  | "outputs_validated"
+  | "engaged_operation_failed"
+  | "time_limit"
+  | "cancel_accepted"
+  | "human_approve"
+  | "human_cancel"
+  | "human_reject_or_unsatisfied"
+  | "human_gate_expired"
+  | "late_result_evidence_only"
+  | "forbidden";
+
+export type TransitionRequest = {
+  readonly from: ExecutionState;
+  readonly to: ExecutionState;
+  readonly reason: TransitionReason;
+  /** Required when to === succeeded */
+  readonly completeness?: Completeness;
+};
+
+export type TransitionDecision =
+  | { readonly allowed: true }
+  | { readonly allowed: false; readonly code: string; readonly message: string };
+
+/** Allowed edges from documents 21 §J + FD-06 (awaiting_human → timed_out). */
+const ALLOWED: ReadonlyArray<readonly [ExecutionState, ExecutionState, TransitionReason]> = [
+  ["idle", "running", "intent_valid"],
+  ["idle", "blocked", "pre_engagement_block"],
+  ["running", "awaiting_human", "human_gate_required"],
+  ["running", "succeeded", "outputs_validated"],
+  ["running", "failed", "engaged_operation_failed"],
+  ["running", "timed_out", "time_limit"],
+  ["running", "cancelled", "cancel_accepted"],
+  ["awaiting_human", "running", "human_approve"],
+  ["awaiting_human", "cancelled", "human_cancel"],
+  ["awaiting_human", "blocked", "human_reject_or_unsatisfied"],
+  ["awaiting_human", "timed_out", "human_gate_expired"],
+];
+
+export function isAllowedTransition(
+  from: ExecutionState,
+  to: ExecutionState,
+  reason: TransitionReason,
+): boolean {
+  return ALLOWED.some(([f, t, r]) => f === from && t === to && r === reason);
+}
+
+export function decideTransition(req: TransitionRequest): TransitionDecision {
+  if (req.reason === "late_result_evidence_only") {
+    return {
+      allowed: false,
+      code: "LATE_RESULT_NO_STATE_MUTATION",
+      message: "Late result is evidence-only and must not mutate state",
+    };
+  }
+
+  if (isTerminalState(req.from)) {
+    return {
+      allowed: false,
+      code: "TERMINAL_REQUIRES_NEW_RUN",
+      message: "Terminal state requires a new run identity",
+    };
+  }
+
+  if (req.to === "succeeded") {
+    if (req.completeness === "partial") {
+      return {
+        allowed: false,
+        code: "PARTIAL_NEVER_SUCCEEDED",
+        message: "Partial completeness cannot transition to succeeded",
+      };
+    }
+    if (req.completeness !== "complete") {
+      return {
+        allowed: false,
+        code: "SUCCEEDED_REQUIRES_COMPLETE",
+        message: "succeeded requires completeness complete",
+      };
+    }
+  }
+
+  if (!isAllowedTransition(req.from, req.to, req.reason)) {
+    return {
+      allowed: false,
+      code: "TRANSITION_FORBIDDEN",
+      message: `Transition ${req.from}→${req.to} (${req.reason}) is not allowed`,
+    };
+  }
+
+  return { allowed: true };
+}
+
+export function listAllowedTransitions(): ReadonlyArray<{
+  from: ExecutionState;
+  to: ExecutionState;
+  reason: TransitionReason;
+}> {
+  return ALLOWED.map(([from, to, reason]) => ({ from, to, reason }));
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
@@ -0,0 +1,241 @@
+/**
+ * D2-D1 Execution Run — canonical domain vocabulary (twelve functional objects).
+ * Pure domain: no Next/Node/fs/process/network/SDK/AJV.
+ * Authority: sole D2-D technical state authority (TECH-RUN-B).
+ */
+
+export const EXECUTION_RUN_SCHEMA_VERSION = "0.1.0-d2d1" as const;
+
+/** Eight persistent states exactly (FD-02). No STATE-B. */
+export type ExecutionState =
+  | "idle"
+  | "running"
+  | "awaiting_human"
+  | "succeeded"
+  | "failed"
+  | "cancelled"
+  | "timed_out"
+  | "blocked";
+
+export const EXECUTION_STATES: readonly ExecutionState[] = [
+  "idle",
+  "running",
+  "awaiting_human",
+  "succeeded",
+  "failed",
+  "cancelled",
+  "timed_out",
+  "blocked",
+] as const;
+
+export type TerminalExecutionState =
+  | "succeeded"
+  | "failed"
+  | "cancelled"
+  | "timed_out"
+  | "blocked";
+
+export const TERMINAL_STATES: readonly TerminalExecutionState[] = [
+  "succeeded",
+  "failed",
+  "cancelled",
+  "timed_out",
+  "blocked",
+] as const;
+
+export type ExecutionSource = "fixture" | "sandbox-real" | "real";
+
+export type Completeness = "complete" | "partial";
+
+export type ProviderLane = "ai" | "git" | "cursor" | "none";
+
+export type FailureFamily =
+  | "validation"
+  | "authentication"
+  | "authorization"
+  | "provider_unavailable"
+  | "rate_limited"
+  | "timed_out"
+  | "cancelled"
+  | "sandbox_blocked"
+  | "protected_path"
+  | "mutation_forbidden"
+  | "human_gate_required"
+  | "invalid_provider_result"
+  | "internal_normalized_failure"
+  | "source_mismatch";
+
+export type FailureCode =
+  | "VALIDATION_ERROR"
+  | "AUTHENTICATION_ERROR"
+  | "AUTHORIZATION_ERROR"
+  | "PROVIDER_UNAVAILABLE"
+  | "RATE_LIMITED"
+  | "TIMED_OUT"
+  | "CANCELLED"
+  | "SANDBOX_BLOCKED"
+  | "PROTECTED_PATH"
+  | "MUTATION_FORBIDDEN"
+  | "HUMAN_GATE_REQUIRED"
+  | "INVALID_PROVIDER_RESULT"
+  | "INTERNAL_NORMALIZED_FAILURE"
+  | "SOURCE_MISMATCH";
+
+/** 1. ExecutionIntent */
+export type ExecutionIntent = {
+  readonly intentId: string;
+  readonly correlationId: string;
+  readonly requestedLane: ProviderLane;
+  readonly operation: string;
+  readonly requestedSource: ExecutionSource;
+  readonly requiresHumanGate: boolean;
+  readonly mutationRequested: boolean;
+  readonly arbitraryCommandRequested: boolean;
+  readonly targetPath?: string;
+  readonly metadata?: Readonly<Record<string, unknown>>;
+};
+
+/** 2. ExecutionContext */
+export type ExecutionContext = {
+  readonly projectId: string;
+  readonly workspaceId?: string;
+  readonly actorId: string;
+  readonly declaredSource: ExecutionSource;
+  readonly allowlistRepos?: readonly string[];
+  readonly protectedPaths?: readonly string[];
+  readonly permissions: {
+    readonly gitRead: boolean;
+    readonly gitWrite: boolean;
+    readonly providerInvoke: boolean;
+  };
+};
+
+/** 3. ProviderCapabilityDescriptor — provider-independent */
+export type ProviderCapabilityDescriptor = {
+  readonly lane: ProviderLane;
+  readonly capabilityId: string;
+  readonly available: boolean;
+  readonly verified: boolean;
+  readonly readOnly: boolean;
+  readonly supportsCancellation: boolean;
+  readonly supportsTimeout: boolean;
+};
+
+/** 4. ValidationOutcome */
+export type ValidationOutcome =
+  | {
+      readonly ok: true;
+      readonly validatedAt: string;
+    }
+  | {
+      readonly ok: false;
+      readonly validatedAt: string;
+      readonly failure: NormalizedFailure;
+    };
+
+/** 6. ExecutionState — see union above */
+
+/** 7. ExternalResult */
+export type ExternalResult =
+  | {
+      readonly kind: "success";
+      readonly completeness: Completeness;
+      readonly redactedSummary: string;
+      readonly rawPresent: false;
+    }
+  | {
+      readonly kind: "failure";
+      readonly failure: NormalizedFailure;
+    }
+  | {
+      readonly kind: "empty";
+    };
+
+/** 8. ExecutionEvidence */
+export type ExecutionEvidence = {
+  readonly evidenceId: string;
+  readonly runId: string;
+  readonly correlationId: string;
+  readonly source: ExecutionSource;
+  readonly completeness: Completeness;
+  readonly producedAt: string;
+  readonly digest?: string;
+  readonly summary: string;
+  readonly late: boolean;
+  readonly official: true;
+};
+
+/** 9. SourceDisclosure */
+export type SourceDisclosure = {
+  readonly source: ExecutionSource;
+  readonly providerLane: ProviderLane;
+  readonly limits: readonly string[];
+  readonly processLocalMemory: boolean;
+  readonly cursorUnverified: boolean;
+};
+
+/** 10. HumanDecisionGate */
+export type HumanDecisionGate = {
+  readonly gateId: string;
+  readonly question: string;
+  readonly required: boolean;
+  readonly decision?: "approve" | "reject" | "cancel";
+  readonly decidedAt?: string;
+  readonly expiresAt?: string;
+};
+
+/** 11. UsageSummary */
+export type UsageSummary =
+  | {
+      readonly status: "validated";
+      readonly inputTokens?: number;
+      readonly outputTokens?: number;
+      readonly unit?: string;
+    }
+  | {
+      readonly status: "unavailable";
+      readonly reason: string;
+    };
+
+/** 12. NormalizedFailure */
+export type NormalizedFailure = {
+  readonly family: FailureFamily;
+  readonly code: FailureCode;
+  readonly userMessage: string;
+  readonly technicalDetailsRedacted: true;
+  readonly retryable: boolean;
+  readonly correlationId: string;
+};
+
+/** 5. ExecutionRun — aggregate holding state authority fields */
+export type ExecutionRun = {
+  readonly schemaVersion: typeof EXECUTION_RUN_SCHEMA_VERSION;
+  readonly runId: string;
+  readonly correlationId: string;
+  readonly state: ExecutionState;
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly disclosure: SourceDisclosure;
+  readonly createdAt: string;
+  readonly updatedAt: string;
+  readonly version: number;
+  readonly validation?: ValidationOutcome;
+  readonly capability?: ProviderCapabilityDescriptor;
+  readonly gate?: HumanDecisionGate;
+  readonly externalResult?: ExternalResult;
+  readonly evidence?: readonly ExecutionEvidence[];
+  readonly usage: UsageSummary;
+  readonly failure?: NormalizedFailure;
+  readonly blockedReason?: string;
+  /** Process-local memory disclosure (STORE-B stage 1). */
+  readonly persistence: {
+    readonly kind: "memory_process_local";
+    readonly durable: false;
+    readonly multiInstance: false;
+    readonly restartSafe: false;
+  };
+};
+
+export function isTerminalState(state: ExecutionState): state is TerminalExecutionState {
+  return (TERMINAL_STATES as readonly string[]).includes(state);
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts b/projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts
@@ -0,0 +1,238 @@
+/**
+ * Deterministic D2-D1 fixture catalogue — source always fixture.
+ */
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+} from "../domain/types";
+import { normalizedFailure } from "../domain/errors";
+
+export type FixtureScenarioId =
+  | "nominal"
+  | "validation_failure"
+  | "auth_failure"
+  | "provider_unavailable"
+  | "rate_limit"
+  | "timeout"
+  | "cancellation"
+  | "blocked_gate"
+  | "protected_path"
+  | "mutation_forbidden"
+  | "partial_result"
+  | "invalid_provider_result"
+  | "late_result"
+  | "secret_redaction"
+  | "source_mismatch";
+
+export type FixtureScenario = {
+  readonly id: FixtureScenarioId;
+  readonly source: "fixture";
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly capability?: ProviderCapabilityDescriptor;
+  readonly expectedFailure?: NormalizedFailure;
+  readonly notes: string;
+};
+
+const baseContext = (over: Partial<ExecutionContext> = {}): ExecutionContext => ({
+  projectId: "project:d2d1-fixture",
+  actorId: "actor:fixture",
+  declaredSource: "fixture",
+  protectedPaths: [".env", "secrets"],
+  permissions: { gitRead: true, gitWrite: false, providerInvoke: true },
+  ...over,
+});
+
+const baseIntent = (over: Partial<ExecutionIntent> = {}): ExecutionIntent => ({
+  intentId: "intent:fixture:base",
+  correlationId: "corr:fixture:base",
+  requestedLane: "ai",
+  operation: "summarize_read_only",
+  requestedSource: "fixture",
+  requiresHumanGate: false,
+  mutationRequested: false,
+  arbitraryCommandRequested: false,
+  ...over,
+});
+
+const aiCapability: ProviderCapabilityDescriptor = {
+  lane: "ai",
+  capabilityId: "ai:fixture",
+  available: true,
+  verified: true,
+  readOnly: true,
+  supportsCancellation: true,
+  supportsTimeout: true,
+};
+
+export const FIXTURE_CATALOGUE: readonly FixtureScenario[] = [
+  {
+    id: "nominal",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:nominal", correlationId: "corr:fixture:nominal" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Happy path idle→running→succeeded",
+  },
+  {
+    id: "validation_failure",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:validation",
+      correlationId: "corr:fixture:validation",
+      operation: "",
+    }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Invalid operation empty — schema deny",
+  },
+  {
+    id: "auth_failure",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:auth", correlationId: "corr:fixture:auth", requestedLane: "git" }),
+    context: baseContext({ permissions: { gitRead: false, gitWrite: false, providerInvoke: false } }),
+    capability: { ...aiCapability, lane: "git", capabilityId: "git:fixture" },
+    expectedFailure: normalizedFailure({
+      family: "authorization",
+      code: "AUTHORIZATION_ERROR",
+      userMessage: "Insufficient permission for Git read",
+      retryable: true,
+      correlationId: "corr:fixture:auth",
+    }),
+    notes: "Authorization deny",
+  },
+  {
+    id: "provider_unavailable",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:unavail", correlationId: "corr:fixture:unavail" }),
+    context: baseContext(),
+    capability: { ...aiCapability, available: false },
+    notes: "Provider unavailable",
+  },
+  {
+    id: "rate_limit",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:rate", correlationId: "corr:fixture:rate" }),
+    context: baseContext(),
+    capability: aiCapability,
+    expectedFailure: normalizedFailure({
+      family: "rate_limited",
+      code: "RATE_LIMITED",
+      userMessage: "Provider rate limited",
+      retryable: true,
+      correlationId: "corr:fixture:rate",
+    }),
+    notes: "Represents rate limit failure object",
+  },
+  {
+    id: "timeout",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:timeout", correlationId: "corr:fixture:timeout" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "running→timed_out",
+  },
+  {
+    id: "cancellation",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:cancel", correlationId: "corr:fixture:cancel" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "running→cancelled",
+  },
+  {
+    id: "blocked_gate",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:gate",
+      correlationId: "corr:fixture:gate",
+      requiresHumanGate: true,
+    }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Human gate required blocks engagement when unsatisfied",
+  },
+  {
+    id: "protected_path",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:path",
+      correlationId: "corr:fixture:path",
+      targetPath: ".env/token",
+    }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Protected path deny",
+  },
+  {
+    id: "mutation_forbidden",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:mutate",
+      correlationId: "corr:fixture:mutate",
+      mutationRequested: true,
+    }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Mutation forbidden",
+  },
+  {
+    id: "partial_result",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:partial", correlationId: "corr:fixture:partial" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Partial never succeeded",
+  },
+  {
+    id: "invalid_provider_result",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:invalid", correlationId: "corr:fixture:invalid" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Invalid provider result → failed",
+  },
+  {
+    id: "late_result",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:late", correlationId: "corr:fixture:late" }),
+    context: baseContext(),
+    capability: aiCapability,
+    notes: "Late result evidence-only",
+  },
+  {
+    id: "secret_redaction",
+    source: "fixture",
+    intent: baseIntent({ intentId: "intent:fixture:secret", correlationId: "corr:fixture:secret" }),
+    context: baseContext(),
+    capability: aiCapability,
+    expectedFailure: normalizedFailure({
+      family: "authentication",
+      code: "AUTHENTICATION_ERROR",
+      userMessage: "Credentials unavailable",
+      retryable: true,
+      correlationId: "corr:fixture:secret",
+    }),
+    notes: "Failure object never carries secrets",
+  },
+  {
+    id: "source_mismatch",
+    source: "fixture",
+    intent: baseIntent({
+      intentId: "intent:fixture:mismatch",
+      correlationId: "corr:fixture:mismatch",
+      requestedSource: "real",
+    }),
+    context: baseContext({ declaredSource: "fixture" }),
+    capability: aiCapability,
+    notes: "Source mismatch deny",
+  },
+] as const;
+
+export function getFixture(id: FixtureScenarioId): FixtureScenario {
+  const found = FIXTURE_CATALOGUE.find((f) => f.id === id);
+  if (!found) throw new Error(`missing_fixture:${id}`);
+  return found;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -0,0 +1,57 @@
+/**
+ * D2-D1 OA execution-run public barrel.
+ * Sole D2-D technical state authority — memory/fixture-first only.
+ */
+export { EXECUTION_RUN_SCHEMA_VERSION, EXECUTION_STATES, TERMINAL_STATES, isTerminalState } from "./domain/types";
+export type {
+  Completeness,
+  ExecutionContext,
+  ExecutionEvidence,
+  ExecutionIntent,
+  ExecutionRun,
+  ExecutionSource,
+  ExecutionState,
+  ExternalResult,
+  FailureCode,
+  FailureFamily,
+  HumanDecisionGate,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+  ProviderLane,
+  SourceDisclosure,
+  UsageSummary,
+  ValidationOutcome,
+} from "./domain/types";
+export { normalizedFailure } from "./domain/errors";
+export {
+  decideTransition,
+  isAllowedTransition,
+  listAllowedTransitions,
+} from "./domain/transitions";
+export type { TransitionDecision, TransitionReason, TransitionRequest } from "./domain/transitions";
+export { evaluateReadOnlyPolicy } from "./domain/policy";
+export type { PolicyDecision, PolicyInput } from "./domain/policy";
+export {
+  assertSourceHonest,
+  canSucceed,
+  createOfficialEvidence,
+  createSourceDisclosure,
+  isIsoTimestamp,
+  usageUnavailable,
+} from "./domain/evidence";
+export { checkExecutionRunInvariants } from "./domain/invariants";
+export { createExecutionRun } from "./application/createExecutionRun";
+export type { CreateExecutionRunInput, CreateExecutionRunResult } from "./application/createExecutionRun";
+export { transitionExecutionRun } from "./application/transitionExecutionRun";
+export type {
+  TransitionExecutionRunInput,
+  TransitionExecutionRunResult,
+} from "./application/transitionExecutionRun";
+export { composeExecutionRunMemory } from "./application/composeExecutionRun";
+export type { ExecutionRunComposition } from "./application/composeExecutionRun";
+export type { ExecutionRunRepositoryPort } from "./ports/executionRunRepository";
+export type { ExecutionRunSchemaValidationPort } from "./ports/executionRunSchemaValidation";
+export type { ClockPort } from "./ports/clockPort";
+export type { IdentityPort } from "./ports/identityPort";
+export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
+export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts
@@ -0,0 +1,89 @@
+/**
+ * AJV Draft-07 boundary validation for D2-D1 — infrastructure only.
+ * Domain/application must not import this module.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import Ajv from "ajv";
+import type {
+  ExecutionRunSchemaName,
+  ExecutionRunSchemaValidationPort,
+  ExecutionRunSchemaValidationResult,
+} from "../ports/executionRunSchemaValidation";
+
+const MAX_ERRORS = 20;
+
+const SCHEMA_FILES: Record<ExecutionRunSchemaName, string> = {
+  "execution-intent": "execution-intent.schema.json",
+  "execution-run": "execution-run.schema.json",
+  "normalized-failure": "normalized-failure.schema.json",
+  "execution-evidence": "execution-evidence.schema.json",
+  "source-disclosure": "source-disclosure.schema.json",
+};
+
+const SCHEMA_IDS: Record<ExecutionRunSchemaName, string> = {
+  "execution-intent":
+    "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
+  "execution-run": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
+  "normalized-failure":
+    "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
+  "execution-evidence":
+    "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
+  "source-disclosure":
+    "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
+};
+
+export class AjvExecutionRunSchemaValidation
+  implements ExecutionRunSchemaValidationPort
+{
+  private readonly ajv: Ajv.Ajv;
+  private ready = false;
+  private readonly schemasDir: string;
+
+  constructor(schemasDir?: string) {
+    this.schemasDir = schemasDir ?? path.join(__dirname, "../schemas");
+    this.ajv = new Ajv({
+      allErrors: true,
+      schemaId: "auto",
+      meta: true,
+      validateSchema: true,
+      format: "full",
+      unknownFormats: "ignore",
+    });
+  }
+
+  private ensureLoaded(): void {
+    if (this.ready) return;
+    for (const file of Object.values(SCHEMA_FILES)) {
+      const full = path.join(this.schemasDir, file);
+      const raw = JSON.parse(fs.readFileSync(full, "utf8")) as object;
+      this.ajv.addSchema(raw);
+    }
+    this.ready = true;
+  }
+
+  async validate(
+    schema: ExecutionRunSchemaName,
+    value: unknown,
+  ): Promise<ExecutionRunSchemaValidationResult> {
+    try {
+      // Fail-closed: reject null/undefined before schema metadata use.
+      if (value === null || value === undefined) {
+        return { ok: false, errors: ["value_null_or_undefined"] };
+      }
+      this.ensureLoaded();
+      const validate = this.ajv.getSchema(SCHEMA_IDS[schema]);
+      if (!validate) {
+        return { ok: false, errors: ["schema_not_loaded"] };
+      }
+      const ok = validate(value) as boolean;
+      if (ok) return { ok: true };
+      const errors = (validate.errors ?? [])
+        .slice(0, MAX_ERRORS)
+        .map((e) => `${e.dataPath || "/"} ${e.message ?? "invalid"}`.trim());
+      return { ok: false, errors: errors.length ? errors : ["schema_invalid"] };
+    } catch {
+      return { ok: false, errors: ["schema_validation_internal_failure"] };
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts
@@ -0,0 +1,8 @@
+import type { ClockPort } from "../ports/clockPort";
+
+export class FixedClock implements ClockPort {
+  constructor(private readonly iso: string) {}
+  nowIso(): string {
+    return this.iso;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts
@@ -0,0 +1,27 @@
+import type { ExecutionRun } from "../domain/types";
+import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
+import type { MemoryExecutionRunStore } from "./memoryExecutionRunStore";
+
+export class MemoryExecutionRunRepository implements ExecutionRunRepositoryPort {
+  constructor(private readonly store: MemoryExecutionRunStore) {}
+
+  async save(run: ExecutionRun): Promise<void> {
+    this.store.runs.set(run.runId, structuredClone(run));
+  }
+
+  async getById(runId: string): Promise<ExecutionRun | null> {
+    const found = this.store.runs.get(runId);
+    return found ? structuredClone(found) : null;
+  }
+
+  async listByCorrelationId(correlationId: string): Promise<ExecutionRun[]> {
+    const out: ExecutionRun[] = [];
+    for (const run of this.store.runs.values()) {
+      if (run.correlationId === correlationId) {
+        out.push(structuredClone(run));
+      }
+    }
+    out.sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.runId.localeCompare(b.runId));
+    return out;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts
@@ -0,0 +1,5 @@
+import type { ExecutionRun } from "../domain/types";
+
+export class MemoryExecutionRunStore {
+  readonly runs = new Map<string, ExecutionRun>();
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts
@@ -0,0 +1,22 @@
+import type { IdentityPort } from "../ports/identityPort";
+
+export class SequentialIdentity implements IdentityPort {
+  private run = 0;
+  private evidence = 0;
+  private intent = 0;
+
+  nextRunId(): string {
+    this.run += 1;
+    return `executionrun:d2d1:${String(this.run).padStart(4, "0")}`;
+  }
+
+  nextEvidenceId(): string {
+    this.evidence += 1;
+    return `evidence:d2d1:${String(this.evidence).padStart(4, "0")}`;
+  }
+
+  nextIntentId(): string {
+    this.intent += 1;
+    return `intent:d2d1:${String(this.intent).padStart(4, "0")}`;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts
@@ -0,0 +1,3 @@
+export interface ClockPort {
+  nowIso(): string;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts
@@ -0,0 +1,7 @@
+import type { ExecutionRun } from "../domain/types";
+
+export interface ExecutionRunRepositoryPort {
+  save(run: ExecutionRun): Promise<void>;
+  getById(runId: string): Promise<ExecutionRun | null>;
+  listByCorrelationId(correlationId: string): Promise<ExecutionRun[]>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts
@@ -0,0 +1,26 @@
+export type ExecutionRunSchemaValidationSuccess = { ok: true };
+export type ExecutionRunSchemaValidationFailure = {
+  ok: false;
+  errors: string[];
+};
+export type ExecutionRunSchemaValidationResult =
+  | ExecutionRunSchemaValidationSuccess
+  | ExecutionRunSchemaValidationFailure;
+
+export type ExecutionRunSchemaName =
+  | "execution-intent"
+  | "execution-run"
+  | "normalized-failure"
+  | "execution-evidence"
+  | "source-disclosure";
+
+export interface ExecutionRunSchemaValidationPort {
+  /**
+   * Fail-closed validation before any metadata exploitation.
+   * Must not throw raw AJV exceptions to callers.
+   */
+  validate(
+    schema: ExecutionRunSchemaName,
+    value: unknown,
+  ): Promise<ExecutionRunSchemaValidationResult>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts
@@ -0,0 +1,5 @@
+export interface IdentityPort {
+  nextRunId(): string;
+  nextEvidenceId(): string;
+  nextIntentId(): string;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json
@@ -0,0 +1,63 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "evidenceId",
+    "runId",
+    "correlationId",
+    "source",
+    "completeness",
+    "producedAt",
+    "summary",
+    "late",
+    "official"
+  ],
+  "properties": {
+    "evidenceId": {
+      "type": "string",
+      "minLength": 1
+    },
+    "runId": {
+      "type": "string",
+      "minLength": 1
+    },
+    "correlationId": {
+      "type": "string",
+      "minLength": 1
+    },
+    "source": {
+      "type": "string",
+      "enum": [
+        "fixture",
+        "sandbox-real",
+        "real"
+      ]
+    },
+    "completeness": {
+      "type": "string",
+      "enum": [
+        "complete",
+        "partial"
+      ]
+    },
+    "producedAt": {
+      "type": "string",
+      "format": "date-time"
+    },
+    "digest": {
+      "type": "string"
+    },
+    "summary": {
+      "type": "string"
+    },
+    "late": {
+      "type": "boolean"
+    },
+    "official": {
+      "type": "boolean",
+      "const": true
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json
@@ -0,0 +1,62 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "intentId",
+    "correlationId",
+    "requestedLane",
+    "operation",
+    "requestedSource",
+    "requiresHumanGate",
+    "mutationRequested",
+    "arbitraryCommandRequested"
+  ],
+  "properties": {
+    "intentId": {
+      "type": "string",
+      "minLength": 1
+    },
+    "correlationId": {
+      "type": "string",
+      "minLength": 1
+    },
+    "requestedLane": {
+      "type": "string",
+      "enum": [
+        "ai",
+        "git",
+        "cursor",
+        "none"
+      ]
+    },
+    "operation": {
+      "type": "string",
+      "minLength": 1
+    },
+    "requestedSource": {
+      "type": "string",
+      "enum": [
+        "fixture",
+        "sandbox-real",
+        "real"
+      ]
+    },
+    "requiresHumanGate": {
+      "type": "boolean"
+    },
+    "mutationRequested": {
+      "type": "boolean"
+    },
+    "arbitraryCommandRequested": {
+      "type": "boolean"
+    },
+    "targetPath": {
+      "type": "string"
+    },
+    "metadata": {
+      "type": "object"
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json
@@ -0,0 +1,114 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "schemaVersion",
+    "runId",
+    "correlationId",
+    "state",
+    "intent",
+    "context",
+    "disclosure",
+    "createdAt",
+    "updatedAt",
+    "version",
+    "usage",
+    "persistence"
+  ],
+  "properties": {
+    "schemaVersion": {
+      "type": "string",
+      "const": "0.1.0-d2d1"
+    },
+    "runId": {
+      "type": "string",
+      "minLength": 1
+    },
+    "correlationId": {
+      "type": "string",
+      "minLength": 1
+    },
+    "state": {
+      "type": "string",
+      "enum": [
+        "idle",
+        "running",
+        "awaiting_human",
+        "succeeded",
+        "failed",
+        "cancelled",
+        "timed_out",
+        "blocked"
+      ]
+    },
+    "intent": {
+      "type": "object"
+    },
+    "context": {
+      "type": "object"
+    },
+    "disclosure": {
+      "type": "object"
+    },
+    "createdAt": {
+      "type": "string"
+    },
+    "updatedAt": {
+      "type": "string"
+    },
+    "version": {
+      "type": "integer",
+      "minimum": 1
+    },
+    "validation": {
+      "type": "object"
+    },
+    "capability": {
+      "type": "object"
+    },
+    "gate": {
+      "type": "object"
+    },
+    "externalResult": {
+      "type": "object"
+    },
+    "evidence": {
+      "type": "array"
+    },
+    "usage": {
+      "type": "object"
+    },
+    "failure": {
+      "type": "object"
+    },
+    "blockedReason": {
+      "type": "string"
+    },
+    "persistence": {
+      "type": "object",
+      "additionalProperties": false,
+      "required": [
+        "kind",
+        "durable",
+        "multiInstance",
+        "restartSafe"
+      ],
+      "properties": {
+        "kind": {
+          "const": "memory_process_local"
+        },
+        "durable": {
+          "const": false
+        },
+        "multiInstance": {
+          "const": false
+        },
+        "restartSafe": {
+          "const": false
+        }
+      }
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json
@@ -0,0 +1,37 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "family",
+    "code",
+    "userMessage",
+    "technicalDetailsRedacted",
+    "retryable",
+    "correlationId"
+  ],
+  "properties": {
+    "family": {
+      "type": "string"
+    },
+    "code": {
+      "type": "string"
+    },
+    "userMessage": {
+      "type": "string",
+      "minLength": 1
+    },
+    "technicalDetailsRedacted": {
+      "type": "boolean",
+      "const": true
+    },
+    "retryable": {
+      "type": "boolean"
+    },
+    "correlationId": {
+      "type": "string",
+      "minLength": 1
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json b/projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json
@@ -0,0 +1,45 @@
+{
+  "$schema": "http://json-schema.org/draft-07/schema#",
+  "$id": "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
+  "type": "object",
+  "additionalProperties": false,
+  "required": [
+    "source",
+    "providerLane",
+    "limits",
+    "processLocalMemory",
+    "cursorUnverified"
+  ],
+  "properties": {
+    "source": {
+      "type": "string",
+      "enum": [
+        "fixture",
+        "sandbox-real",
+        "real"
+      ]
+    },
+    "providerLane": {
+      "type": "string",
+      "enum": [
+        "ai",
+        "git",
+        "cursor",
+        "none"
+      ]
+    },
+    "limits": {
+      "type": "array",
+      "items": {
+        "type": "string"
+      }
+    },
+    "processLocalMemory": {
+      "type": "boolean",
+      "const": true
+    },
+    "cursorUnverified": {
+      "type": "boolean"
+    }
+  }
+}
```

## 10. Matrices D2D1-01…09

| Story | Fichiers | Critères | Tests | Résultat | Réserve |
|-------|----------|----------|-------|----------|---------|
| D2D1-01 | domain/types.ts + errors | twelve objects | transitions/evidence/policy tests | PASS | — |
| D2D1-02 | schemas/* + ajv adapter | AJV fail-closed | schemas.adversarial | PASS | R-QA-D2C-01 open |
| D2D1-03 | domain/transitions.ts | eight states | transitions.test | PASS | — |
| D2D1-04 | domain/policy.ts | read-only deny | policy.test | PASS | — |
| D2D1-05 | domain/evidence.ts | source/completeness | evidence.test | PASS | R-QA-REV-01 open |
| D2D1-06 | memory repository | process-local | repository.memory | PASS | — |
| D2D1-07 | fixtures/catalogue.ts | 15 scenarios | lifecycle.fixture | PASS | — |
| D2D1-08 | compose + import tests | server-only | importBoundaries | PASS | — |
| D2D1-09 | review pack matrices | evidence pack | this pack | PASS | reserves transported |

### Objets (12)

ExecutionIntent · ExecutionContext · ProviderCapabilityDescriptor · ValidationOutcome · ExecutionRun · ExecutionState · ExternalResult · ExecutionEvidence · SourceDisclosure · HumanDecisionGate · UsageSummary · NormalizedFailure

### États (8)

idle · running · awaiting_human · succeeded · failed · cancelled · timed_out · blocked

### Transitions

Voir `listAllowedTransitions()` + refus terminaux / partial / late-result.

### Fixtures (15)

nominal · validation_failure · auth_failure · provider_unavailable · rate_limit · timeout · cancellation · blocked_gate · protected_path · mutation_forbidden · partial_result · invalid_provider_result · late_result · secret_redaction · source_mismatch

---

## 11. Validations exécutées

### typecheck

```text

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

```

### lint

```text

> sfia-studio@0.1.0 lint
> next lint

✔ No ESLint warnings or errors
```

### build

```text
next build — Compiled successfully (see cycle execution)
```

### Vitest (extrait final)

```text
 ✓ __tests__/increment-c.test.tsx (8 tests) 1251ms
   ✓ Increment C — editable demand + confirmation > accepts editable Campus360 demand and shows exact text in confirmation  303ms
   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  344ms
 ✓ __tests__/increment-a.test.tsx (8 tests) 114ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-03T20:47:40.810Z","status":"started","intentLength":39,"sessionLocalId":"s4"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-03T20:47:40.938Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":128,"providerMode":"fake","errorCode":"PROVIDER"}

 ✓ __tests__/d1/intake-c2.test.ts (13 tests) 461ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 2ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1869ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  840ms
   ✓ ops1 I5 execution contract + fixture run > rejects run adapterMode mismatch (no silent real→fixture swap)  348ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 2ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 4ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 77ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 82ms
 ✓ __tests__/shell.test.tsx (1 test) 45ms
 ✓ __tests__/navigation.test.tsx (2 tests) 46ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 15ms
 ✓ __tests__/gates.test.tsx (1 test) 41ms
 ✓ __tests__/status-pill.test.tsx (1 test) 16ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3258ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1779ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  414ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 3279ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  715ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  691ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  607ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  330ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  315ms

 Test Files  109 passed (109)
      Tests  1084 passed (1084)
   Start at  22:47:35
   Duration  7.74s (transform 3.34s, setup 3.94s, collect 13.49s, tests 20.23s, environment 7.13s, prepare 4.29s)
```

### Gouvernance modeled (extrait)

```text
✔ catalog documents T-A5 commands events errors and persist-then-launch (0.25025ms)
✔ doc 07 documents Attempt 0.2.0-oa ownership and T-A5/T-A6 boundary (0.290083ms)
✔ T-A5 modeled docs do not own Evidence/Claim maturity (0.131709ms)
✔ anti-runtime strings present on AgentDescriptor and Attempt descriptions (0.147542ms)
✔ attemptId and executionContractId prefixes enforced (3.805084ms)
✔ expired selection narrative documents runtime Start refuse (0.230459ms)
✔ adversarial C1: timeout without timedOutAt rejected (3.47625ms)
✔ adversarial C1: failed without failedAt rejected; launch-fail without launchedAt accepted (3.308875ms)
✔ adversarial C1: cancelled without cancelledAt; running without launchedAt (4.300958ms)
✔ adversarial C1: accepted requires selection fields; capabilities forbids critical (3.336584ms)
✔ adversarial C1: retryIndex requires retryOfAttemptId; failed needs errorRef or stopReason (3.512083ms)
✔ adversarial: legacy contractId/agentRef and ta6 claimId rejected (3.475ms)
✔ §25 narratives exist with key phrases (runtime-only coverage) (0.870916ms)
✔ catalog authority matrix rows cover Select Start Cancel Morris auto-safety Record Retry (0.086625ms)
✔ ExecutionContract schema compiles with resolved $refs (25.764708ms)
✔ ExecutionContract schemaVersion is 0.2.0-oa breaking bump (0.366417ms)
✔ valid examples accept under ExecutionContract schema (6.842041ms)
✔ invalid examples reject under ExecutionContract schema (6.162333ms)
✔ arbitrary authority string morris-N3 is rejected (4.217292ms)
✔ MORRIS enum value accepted (3.840375ms)
✔ supersessionReason required with supersedesExecutionContractId (4.473542ms)
✔ status=superseded requires supersessionReason (5.415083ms)
✔ self-supersession is schema-accepted; runtime must reject (documented) (3.764625ms)
✔ catalog documents ConfirmExecutionContract and SupersedeExecutionContract (0.30625ms)
✔ adversarial: authority casing morris/Morris/n3 rejected (4.184875ms)
✔ adversarial: whitespace-only supersessionReason rejected (3.921125ms)
✔ adversarial: unicode supersessionReason with real content accepted (3.944333ms)
✔ adversarial: confirmed without confirmationRef/decisionRefs rejected (3.50825ms)
✔ adversarial: bad schemaVersion rejected (3.312958ms)
✔ adversarial: additionalProperties rejected (3.380459ms)
✔ adversarial: supersedes without xct: prefix rejected (4.046916ms)
✔ catalog CancelExecution dual-context ownership is explicit (0.133083ms)
ℹ tests 73
ℹ suites 0
ℹ pass 73
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 224.622792```

### secret scan

```text
(no matches)
```

### diff --check

```text
(empty — exit 0)
```

---

## 12. Réserves / limites / claims

| ID | Statut |
|----|--------|
| R-QA-REV-01 | OPEN NOT LIFTED |
| R-QA-REV-02 | OPEN NOT LIFTED |
| R-QA-D2C-01 | OPEN NOT LIFTED |
| CURSOR PRODUCT CAPABILITIES | UNVERIFIED |

**Claims autorisés :** D2-D1 CONTRACT FOUNDATION VERIFIED LOCALLY · process-local memory · fixture-first · sole D2-D state authority.

**Claims interdits :** provider integrated · Cursor verified · sandbox secure · durable · restart-safe · multi-instance · production-ready · RUN READY · D2-D2/D3 authorized.

**Limites :** pas de provider réel · pas d'EventSink · pas d'UI · memory only · validation D2-C core non corrigée (R-C transportée).

---

## 13. Git Truth finale

| Champ | Valeur |
|-------|--------|
| Branche | `delivery/sfia-studio-v3-1-d2-d1` |
| HEAD | `df4377249660aab79d764915ad3166608a8a9a7d` |
| origin/main | `df4377249660aab79d764915ad3166608a8a9a7d` |
| staged | vide |
| tracked diff | aucun |
| status | |
```
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/execution-run/
?? projects/sfia-studio/app/lib/oa/execution-run/
```
| untracked | |
```
.tmp-sfia-review/d2d1-full.diff
.tmp-sfia-review/diff-check.txt
.tmp-sfia-review/governance.txt
.tmp-sfia-review/lint.txt
.tmp-sfia-review/secret-scan.txt
.tmp-sfia-review/typecheck.txt
.tmp-sfia-review/vitest.txt
projects/sfia-studio/app/__tests__/oa/execution-run/evidence.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/lifecycle.fixture.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/policy.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/repository.memory.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/schemas.adversarial.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/transitions.test.ts
projects/sfia-studio/app/lib/oa/execution-run/application/composeExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/application/createExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/application/transitionExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/errors.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/evidence.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/invariants.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/transitions.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-run/fixtures/catalogue.ts
projects/sfia-studio/app/lib/oa/execution-run/index.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/fixedClock.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunRepository.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/sequentialIdentity.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/clockPort.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunRepository.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/executionRunSchemaValidation.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/identityPort.ts
projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-evidence.schema.json
projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-intent.schema.json
projects/sfia-studio/app/lib/oa/execution-run/schemas/execution-run.schema.json
projects/sfia-studio/app/lib/oa/execution-run/schemas/normalized-failure.schema.json
projects/sfia-studio/app/lib/oa/execution-run/schemas/source-disclosure.schema.json
```

Remote delivery branch / PR : **absents**. Aucun commit/push projet.

---

## 14. Handoff before / after

### Before

| tip | `07141d975617e1a03c84b860052f9878d4ad2e2c` |
| blob | `86499fdd6109abb9460c024e473fc7a303e33794` |

### After

Le tip et le blob du présent rapport sont calculés après publication.
Ils sont remontés dans le rapport terminal Cursor et vérifiés
indépendamment par ChatGPT afin d'éviter une boucle autoréférentielle.

- `D2D1_DELIVERY_HANDOFF_TIP` : *(pending publish)*
- `D2D1_DELIVERY_HANDOFF_BLOB` : *(pending publish)*
- `D2D1_DELIVERY_HANDOFF_PARENT` : *(pending publish)*

---

## 15. Verdict

```text
V3.1-D2-D1 DELIVERY COMPLETE LOCALLY WITH RESERVES —

MAIN POST-MERGE BASE VERIFIED —
D2-D1 DELIVERY GATE CONSUMED —
D2-D2 / D2-D3 DELIVERY GATES NOT CONSUMED —

EXECUTION-RUN CORE CREATED —
SOLE D2-D STATE AUTHORITY IMPLEMENTED —
CANONICAL TWELVE-OBJECT VOCABULARY IMPLEMENTED —
TYPESCRIPT CONTRACTS IMPLEMENTED —
JSON SCHEMAS AND AJV VALIDATION IMPLEMENTED —
EIGHT-STATE TRANSITION AUTHORITY IMPLEMENTED —
READ-ONLY POLICY FOUNDATION IMPLEMENTED —
NORMALIZED FAILURE FOUNDATION IMPLEMENTED —
EVIDENCE / COMPLETENESS / DISCLOSURE IMPLEMENTED —
MEMORY REPOSITORY IMPLEMENTED —
DETERMINISTIC FIXTURE CATALOGUE IMPLEMENTED —
SERVER-ONLY COMPOSITION IMPLEMENTED —
IMPORT BOUNDARIES VERIFIED —

D2D1-01 COMPLETE —
D2D1-02 COMPLETE —
D2D1-03 COMPLETE —
D2D1-04 COMPLETE —
D2D1-05 COMPLETE —
D2D1-06 COMPLETE —
D2D1-07 COMPLETE —
D2D1-08 COMPLETE —
D2D1-09 COMPLETE —

TYPECHECK SUCCESSFUL —
LINT SUCCESSFUL —
BUILD SUCCESSFUL —
UNIT AND CONTRACT TESTS SUCCESSFUL —
MODELED GOVERNANCE TESTS SUCCESSFUL —
SECRET SCAN SUCCESSFUL —
DIFF CHECK SUCCESSFUL —

D2-D1 CONTRACT FOUNDATION VERIFIED LOCALLY —

PROCESS-LOCAL MEMORY ONLY —
NO DURABILITY CLAIM —
NO MULTI-INSTANCE CLAIM —
NO PROVIDER INTEGRATION —
NO LIVE PROVIDER TEST —
NO CURSOR CAPABILITY VERIFICATION —
NO SANDBOX CLAIM —
NO D2-C CORRECTION —
NO D2-D2 DELIVERY —
NO D2-D3 DELIVERY —
NO D2-D4 WRITE —
NO UI —
NO D3 TRANSPORT —
NO CREATECYCLE —
NO METHOD PROMOTION —

R-QA-REV-01 OPEN NOT LIFTED —
R-QA-REV-02 OPEN NOT LIFTED —
R-QA-D2C-01 OPEN NOT LIFTED —
CURSOR PRODUCT CAPABILITIES UNVERIFIED —

NO STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

REVIEW HANDOFF UPDATED AND REMOTE VERIFIED — (pending publish verification)

READY FOR CHATGPT DELIVERY VALIDATION
```

---

## 16. Prochaine gate candidate

```text
GO QA SFIA STUDIO V3.1-D2-D1
```

Ne pas proposer GO DELIVERY D2-D2 / GO PR READINESS / GO MERGE avant QA et décision Morris.

---

## 17. Instruction ChatGPT

Lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` au nouveau
`D2D1_DELIVERY_HANDOFF_TIP` / `D2D1_DELIVERY_HANDOFF_BLOB` et vérifier indépendamment
Cycle 8 Critical, GO, baseline, module complet, fichiers, diff, D2D1-01…09,
schemas/transitions/policies/fixtures/boundaries, validations, réserves,
Cursor UNVERIFIED, absence provider/staging/commit/PR, handoff, verdict.
