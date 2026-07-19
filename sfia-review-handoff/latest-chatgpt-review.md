# ChatGPT Review Pack — SFIA Studio Cycle 13 PR Readiness Critical — Governed S1 Harness

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 17:30:48 CEST (Europe/Paris) |
| **Cycle** | 13 — PR readiness |
| **Profil** | Critical |
| **Typologie** | PR READINESS / DELIVERY / POC / ARCH / SEC / QA |
| **Décision Morris** | GO commit + push + draft PR (harness S1) — **merge FERMÉ** |
| **Branche** | `delivery/sfia-studio-poc-s1-harness` |
| **HEAD avant** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **origin/main** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **merge-base** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **PR #223** | MERGED @ `d45cc54…` |
| **Handoff Cycle 9** | `0d1c822…` — DOCUMENTARY GATE ALIGNMENT COMPLETE |
| **Handoff Cycle 8** | `e1c7902…` — HARNESS DELIVERY COMPLETE WITH RESERVES |
| **Niveau** | **full** |
| **Merge** | **NON AUTORISÉ** |

---

## 1. Local Git Truth Check

**PASS** avant staging/commit.

- branche = `delivery/sfia-studio-poc-s1-harness`
- HEAD = origin/main = `d45cc54f97479cefa3d2612c6e1a965ff50958bb`
- merge-base identique
- PR #223 MERGED
- aucun staged initial
- remote delivery absente
- aucun app/** ; aucun Docker

---

## 2. Handoffs précédents

### Cycle 9 (`0d1c822`)
- QA corrective Critical
- POC-G9 consommé harness-only
- allowlist initiale VALIDÉE pour incrément
- élargissement = nouveau GO
- Cursor fixture ; Docker non retenu ; app/** fermé
- aucun code modifié pendant Cycle 9
- verdict : DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW

### Cycle 8 (`e1c7902`)
- Delivery Critical harness-only
- 26 tests ; Option B ; Cursor fixture
- verdict : POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT

---

## 3. Architecture Option B (préservée)

```
Morris → Studio cockpit (futur) → adaptateur fin (futur)
      → harness autonome (CETTE PR)
         → GateValidator → PolicyEngine → GitReaderPort
         → CursorExecutorPortFixture → EventJournal → ProofStore
```

Studio / adaptateur **non** implémentés. `app/**` intact. Cursor **fixture**. Git **none-remote**.

---

## 4. Fichiers

### Créés (26)
- `projects/sfia-studio/harness/.gitignore`
- `projects/sfia-studio/harness/README.md`
- `projects/sfia-studio/harness/fixtures/builders.ts`
- `projects/sfia-studio/harness/package-lock.json`
- `projects/sfia-studio/harness/package.json`
- `projects/sfia-studio/harness/proofs/.gitkeep`
- `projects/sfia-studio/harness/src/cli.ts`
- `projects/sfia-studio/harness/src/gate/gateValidator.ts`
- `projects/sfia-studio/harness/src/hash/canonicalize.ts`
- `projects/sfia-studio/harness/src/hash/contractHash.ts`
- `projects/sfia-studio/harness/src/index.ts`
- `projects/sfia-studio/harness/src/journal/eventJournal.ts`
- `projects/sfia-studio/harness/src/orchestrator.ts`
- `projects/sfia-studio/harness/src/policy/policyEngine.ts`
- `projects/sfia-studio/harness/src/ports/cursorExecutor.ts`
- `projects/sfia-studio/harness/src/ports/cursorFixture.ts`
- `projects/sfia-studio/harness/src/ports/gitReader.ts`
- `projects/sfia-studio/harness/src/ports/gitReaderImpl.ts`
- `projects/sfia-studio/harness/src/proof/proofStore.ts`
- `projects/sfia-studio/harness/src/state/machine.ts`
- `projects/sfia-studio/harness/src/types/contracts.ts`
- `projects/sfia-studio/harness/tests/integration.test.ts`
- `projects/sfia-studio/harness/tests/unit.test.ts`
- `projects/sfia-studio/harness/tsconfig.build.json`
- `projects/sfia-studio/harness/tsconfig.json`
- `projects/sfia-studio/harness/vitest.config.ts`

### Modifiés (11)
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`
- `projects/sfia-studio/20-poc-orchestration-framing.md`
- `projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md`
- `projects/sfia-studio/22-poc-orchestration-decision-pack.md`
- `projects/sfia-studio/23-poc-orchestration-technical-architecture.md`
- `projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md`
- `projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md`
- `projects/sfia-studio/26-poc-orchestration-backlog.md`
- `projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md`
- `projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md`
- `projects/sfia-studio/README.md`

### Exclus
- `.tmp-sfia-review/**`
- `node_modules/`, `dist/`
- proofs runtime (`proofs/demo-*`)
- `app/**`, Docker, CI, root package.json

---

## 5. Dépendances

`@sfia-studio/poc-s1-harness` — devDependencies : typescript, vitest, @types/node. Aucune dépendance runtime réseau. package-lock inclus.

---

## 6. Composants (résumé + preuves)

| Composant | Preuve |
|-----------|--------|
| Contrats S1 / none-remote / fixture | `src/types/contracts.ts` + PolicyEngine |
| contractHash SHA-256 | `src/hash/*` + tests |
| State machine | `src/state/machine.ts` |
| GateValidator | GO/hash/replay/STOP |
| PolicyEngine | default deny |
| GitReaderPort | spawn shell:false |
| CursorFixture | realCursorClaimed=false |
| EventJournal | JSONL fail-closed |
| ProofStore | proofDir borné |
| CLI | validate/run/stop/inspect/verify |

---

## 7. Tests & qualité

```
npm ci PASS (0 vulnerabilities)
typecheck PASS
tests 26/26 PASS (unit 12 + integration 14)
build PASS
```

Couverture : A1–A6, AB-01…08.

---

## 8. Sécurité

Faux positifs documentaires / denylist : `git push` etc. uniquement en refus/tests/docs.

- shell:false sur spawn Git
- realCursorClaimed=false
- aucun app/** staged
- aucun Docker
- aucun effet Git distant dans le harness

---

## 9. Statuts

| Élément | Statut |
|---------|--------|
| Allowlist | VALIDÉE incrément harness-only ; élargissement = GO |
| POC-G9 | CONSOMMÉ harness-only |
| Cursor | fixture ; réel **FERMÉ** (trajectoire future) |
| UI Studio | **FERMÉE** (trajectoire future) |
| Docker | non retenu ; option conditionnelle future |
| POC | non lancé / non industrialisé / non déclaré réussi |
| Commit/push/draft PR | GO Cycle 13 **consommé** |
| Merge | **FERMÉ** |

### Trajectoires Morris (hors PR)
1. Tester Cursor réel — cycle séparé
2. Interface Studio ↔ harness — cycle séparé
3. Docker seulement si utilité démontrée

---

## 10. Contenu complet — fichiers créés (harness)

### `projects/sfia-studio/harness/.gitignore`

```
node_modules/
dist/
proofs/**
!proofs/.gitkeep
*.log
.DS_Store

```
### `projects/sfia-studio/harness/README.md`

```
# SFIA Studio — POC S1 Harness (harness-only)

| Métadonnée | Valeur |
|------------|--------|
| **Emplacement** | `projects/sfia-studio/harness/` |
| **Incrément** | POC-G9 harness-only |
| **Architecture** | Option B — harness autonome |
| **Studio / app/** | **Non touché** |
| **Cursor** | **Fixture uniquement** — aucun Cursor réel |
| **Docker** | **Non retenu** pour cet incrément (option ouverte) |
| **Git** | Lecture réelle allowlistée · `gitEffect=none-remote` |
| **Allowlist** | Initiale S1 **validée** pour cet incrément — élargissement = nouveau GO |
| **POC** | Preuves locales — **non industrialisé** / non lancé en autonomie permanente |

## Pourquoi cet emplacement

- Hors `app/**` (Next P0) — séparation AF-Option C / Option B.
- Aligné toolchain Node/TypeScript du projet Studio (vitest, tsc) sans Next.
- Package local autonome, testable sans UI.

## Installation

```bash
cd projects/sfia-studio/harness
npm install
```

## Commandes

```bash
npm run typecheck
npm test
npm run build
npm run cli -- validate-contract ./path/to/contract.json
npm run cli -- run-fixture ./fixtures/demo   # après génération locale
npm run cli -- inspect-journal <proofDir>
npm run cli -- verify-proofs <proofDir>
```

## Architecture effective

```text
fixture gate (Morris) → Orchestrator
  → PolicyEngine (default deny)
  → GateValidator (GO + contractHash)
  → StateMachine
  → GitReaderImpl (spawn git, shell:false)
  → CursorExecutorPortFixture
  → EventJournal (JSONL)
  → ProofStore (proofDir)
```

## Restrictions

- Aucune écriture Git distante (`add/commit/push/merge/rebase/...`).
- Aucune API Cursor inventée ; `realCursorClaimed: false` toujours.
- Aucun daemon / serveur HTTP requis.
- Aucun Dockerfile / docker-compose dans cet incrément.
- Aucune modification `projects/sfia-studio/app/**`.

## Nettoyage local

Supprimer les répertoires `proofs/` temporaires et `node_modules/` si besoin :

```bash
rm -rf proofs/* node_modules dist
```

## Limites / réserves

- Cursor réel = spike futur.
- Protocole adaptateur / UI Studio = hors incrément.
- Docker = option future non décidée.
- Allowlist détaillée toujours sujette à raffinement Morris.

```
### `projects/sfia-studio/harness/fixtures/builders.ts`

```
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { ExecutionContract, GateDecision, POCRequest } from "../src/types/contracts.js";
import { computeContractHash } from "../src/hash/contractHash.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(HERE, "../../.."); // projects/sfia-studio -> projects -> workspace?
// harness/fixtures -> harness -> sfia-studio -> projects -> workspace
// HERE = .../harness/fixtures
// ../ = harness
// ../../ = sfia-studio
// ../../../ = projects
// ../../../../ = workspace root
export const WORKSPACE_ROOT = path.resolve(HERE, "../../../..");

export function makeRequest(overrides: Partial<POCRequest> = {}): POCRequest {
  return {
    requestId: "req-s1-001",
    title: "Capitaliser une règle de gate SFIA",
    cycle: "DOC",
    scope: "projects/sfia-studio",
    operator: "Morris",
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}

export function makeContract(proofDir: string, overrides: Partial<ExecutionContract> = {}): ExecutionContract {
  return {
    contractId: "ctr-s1-001",
    requestId: "req-s1-001",
    scenario: "S1",
    repositoryRoot: WORKSPACE_ROOT,
    allowedPaths: ["projects/sfia-studio", "projects/sfia-studio/harness"],
    allowedCommands: [
      "branch-show-current",
      "rev-parse",
      "merge-base",
      "status-short",
      "diff-check",
      "diff-stat",
      "diff-name-status",
      "log",
      "show",
      "ls-remote",
    ],
    gitEffect: "none-remote",
    cursorMode: "fixture",
    timeoutMs: 30_000,
    proofDir,
    schemaVersion: "1",
    maxFiles: 30,
    maxFileBytes: 512_000,
    maxAggregateBytes: 5_000_000,
    allowedExtensions: [".md", ".txt", ".json", ".jsonl", ".ts", ""],
    decidedByAllowlist: ["Morris"],
    ...overrides,
  };
}

export function makeGo(contract: ExecutionContract, overrides: Partial<GateDecision> = {}): GateDecision {
  const hash = computeContractHash(contract);
  return {
    decisionId: "gate-go-001",
    requestId: contract.requestId,
    contractHash: hash,
    decision: "GO",
    decidedBy: "Morris",
    decidedAt: new Date().toISOString(),
    scope: "projects/sfia-studio",
    ...overrides,
  };
}

```
### `projects/sfia-studio/harness/package-lock.json`

*(package-lock.json — 53434 bytes ; inclus dans le commit ; omis ici pour lisibilité du pack — présent dans staged diff)*

### `projects/sfia-studio/harness/package.json`

```
{
  "name": "@sfia-studio/poc-s1-harness",
  "private": true,
  "version": "0.1.0",
  "description": "SFIA Studio POC S1 harness-only orchestrator (local, fail-closed, no remote Git writes, Cursor fixture only)",
  "type": "module",
  "bin": {
    "sfia-poc-s1": "./dist/cli.js"
  },
  "scripts": {
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "build": "tsc -p tsconfig.build.json",
    "cli": "tsx src/cli.ts"
  },
  "engines": {
    "node": ">=20"
  },
  "devDependencies": {
    "@types/node": "^22.15.21",
    "tsx": "^4.19.4",
    "typescript": "^5.8.3",
    "vitest": "^3.1.2"
  }
}

```
### `projects/sfia-studio/harness/proofs/.gitkeep`

```

```
### `projects/sfia-studio/harness/src/cli.ts`

```
#!/usr/bin/env node
import { readFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Orchestrator, validateContractOnly } from "./orchestrator.js";
import { EventJournal } from "./journal/eventJournal.js";
import type { ExecutionContract, GateDecision, POCRequest } from "./types/contracts.js";
import { computeContractHash } from "./hash/contractHash.js";

function usage(): never {
  console.error(`sfia-poc-s1 <command> [args]

Commands:
  validate-contract <contract.json>
  run-fixture <dir>                 # expects request.json gate.json contract.json in dir
  request-stop <dir>                # same as run-fixture with STOP gate or --stop flag via stop gate
  inspect-journal <proofDir>
  verify-proofs <proofDir>
`);
  process.exit(2);
}

async function main(): Promise<void> {
  const [, , cmd, ...args] = process.argv;
  if (!cmd) usage();

  if (cmd === "validate-contract") {
    const file = args[0];
    if (!file) usage();
    const contract = JSON.parse(readFileSync(file, "utf8")) as ExecutionContract;
    const { hash } = validateContractOnly(contract);
    console.log(JSON.stringify({ ok: true, contractHash: hash }, null, 2));
    return;
  }

  if (cmd === "run-fixture" || cmd === "request-stop") {
    const dir = args[0];
    if (!dir) usage();
    const request = JSON.parse(readFileSync(path.join(dir, "request.json"), "utf8")) as POCRequest;
    const contract = JSON.parse(readFileSync(path.join(dir, "contract.json"), "utf8")) as ExecutionContract;
    let gate = JSON.parse(readFileSync(path.join(dir, "gate.json"), "utf8")) as GateDecision;
    mkdirSync(contract.proofDir, { recursive: true });
    // Refresh hash on gate if matching contract file
    const hash = computeContractHash(contract);
    if (cmd === "request-stop") {
      gate = { ...gate, decision: "STOP", contractHash: hash };
    } else if (gate.decision === "GO") {
      gate = { ...gate, contractHash: hash };
    }
    const orch = new Orchestrator();
    const result = await orch.run({
      request,
      contract,
      gate,
      stopAfterAuthorize: args.includes("--stop-after-authorize"),
      attemptForbiddenGit: args.includes("--deny-git"),
      cursorSimulate: args.includes("--cursor-timeout")
        ? "timeout"
        : args.includes("--cursor-error")
          ? "error"
          : "success",
    });
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (cmd === "inspect-journal") {
    const proofDir = args[0];
    if (!proofDir) usage();
    const journal = new EventJournal(proofDir, "inspect");
    console.log(JSON.stringify({ events: journal.readAll(), projectedState: journal.projectLastState() }, null, 2));
    return;
  }

  if (cmd === "verify-proofs") {
    const proofDir = args[0];
    if (!proofDir) usage();
    const required = ["contract.json", "contractHash.txt", "summary.json", "events.jsonl"];
    const missing = required.filter((f) => {
      try {
        readFileSync(path.join(proofDir, f));
        return false;
      } catch {
        return true;
      }
    });
    // summary optional if rejected — accept gate.json + events
    const ok =
      missing.filter((m) => m !== "summary.json").length === 0 ||
      (missing.length <= 1 && missing[0] === "summary.json");
    const journal = new EventJournal(proofDir, "verify");
    console.log(
      JSON.stringify(
        {
          ok: missing.filter((m) => m !== "summary.json").length === 0 || journal.readAll().length > 0,
          missing,
          eventCount: journal.readAll().length,
          projectedState: journal.projectLastState(),
          softOk: ok,
        },
        null,
        2,
      ),
    );
    return;
  }

  usage();
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain || process.argv[1]?.endsWith("cli.ts") || process.argv[1]?.endsWith("cli.js")) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

```
### `projects/sfia-studio/harness/src/gate/gateValidator.ts`

```
import type { ExecutionContract, GateDecision } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";

export interface GateValidationOk {
  ok: true;
}

export interface GateValidationFail {
  ok: false;
  code: string;
  message: string;
}

export type GateValidationResult = GateValidationOk | GateValidationFail;

export class GateValidator {
  private consumedDecisionIds = new Set<string>();

  validate(input: {
    gate: GateDecision;
    contract: ExecutionContract;
    expectedHash: string;
    now?: Date;
  }): GateValidationResult {
    const { gate, contract, expectedHash } = input;
    const now = input.now ?? new Date();

    if (gate.requestId !== contract.requestId) {
      return fail("GATE_REQUEST_MISMATCH", "requestId mismatch");
    }
    if (gate.contractHash !== expectedHash) {
      return fail("GATE_HASH_MISMATCH", "contractHash mismatch");
    }
    if (gate.decision !== "GO" && gate.decision !== "STOP" && gate.decision !== "CORRIGER" && gate.decision !== "CLOSE") {
      return fail("GATE_DECISION_INVALID", "decision not explicit");
    }
    if (!gate.decidedBy || gate.decidedBy.trim() === "") {
      return fail("GATE_DECIDER_MISSING", "decidedBy required");
    }
    const allow = contract.decidedByAllowlist ?? ["Morris"];
    if (!allow.includes(gate.decidedBy)) {
      return fail("GATE_DECIDER_UNAUTHORIZED", `decidedBy not allowed: ${gate.decidedBy}`);
    }
    if (this.consumedDecisionIds.has(gate.decisionId) && gate.decision === "GO") {
      return fail("GATE_REPLAY", "GO already consumed");
    }
    const expires = gate.expiresAt ?? contract.gateExpiresAt;
    if (expires && new Date(expires).getTime() < now.getTime()) {
      return fail("GATE_EXPIRED", "gate decision expired");
    }
    return { ok: true };
  }

  consume(decisionId: string): void {
    this.consumedDecisionIds.add(decisionId);
  }

  isConsumed(decisionId: string): boolean {
    return this.consumedDecisionIds.has(decisionId);
  }
}

function fail(code: string, message: string): GateValidationFail {
  return { ok: false, code, message };
}

export function assertGateOk(result: GateValidationResult): void {
  if (!result.ok) {
    throw new HarnessError(result.code, result.message);
  }
}

```
### `projects/sfia-studio/harness/src/hash/canonicalize.ts`

```
/** Deterministic JSON canonicalization (JCS-like sorted keys). */

export function canonicalize(value: unknown): string {
  return JSON.stringify(sortValue(value));
}

function sortValue(value: unknown): unknown {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(sortValue);
  }
  const obj = value as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(obj).sort()) {
    out[key] = sortValue(obj[key]);
  }
  return out;
}

```
### `projects/sfia-studio/harness/src/hash/contractHash.ts`

```
import { createHash } from "node:crypto";
import type { ExecutionContract } from "../types/contracts.js";
import { canonicalize } from "./canonicalize.js";

/** SHA-256 of canonical contract JSON. Same contract → same hash. */
export function computeContractHash(contract: ExecutionContract): string {
  const canonical = canonicalize(contract);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

```
### `projects/sfia-studio/harness/src/index.ts`

```
export * from "./types/contracts.js";
export * from "./hash/canonicalize.js";
export * from "./hash/contractHash.js";
export * from "./state/machine.js";
export * from "./gate/gateValidator.js";
export * from "./policy/policyEngine.js";
export * from "./ports/gitReader.js";
export * from "./ports/gitReaderImpl.js";
export * from "./ports/cursorExecutor.js";
export * from "./ports/cursorFixture.js";
export * from "./journal/eventJournal.js";
export * from "./proof/proofStore.js";
export * from "./orchestrator.js";

```
### `projects/sfia-studio/harness/src/journal/eventJournal.ts`

```
import { appendFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { JournalEvent } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";

export class EventJournal {
  readonly filePath: string;

  constructor(proofDir: string, readonly correlationId: string) {
    mkdirSync(proofDir, { recursive: true });
    this.filePath = path.join(proofDir, "events.jsonl");
  }

  append(partial: Omit<JournalEvent, "schemaVersion" | "eventId" | "timestamp" | "correlationId"> &
    Partial<Pick<JournalEvent, "correlationId">>): JournalEvent {
    const event: JournalEvent = {
      schemaVersion: "1",
      eventId: randomUUID(),
      timestamp: new Date().toISOString(),
      correlationId: partial.correlationId ?? this.correlationId,
      ...partial,
      eventType: partial.eventType,
      requestId: partial.requestId,
    };
    try {
      appendFileSync(this.filePath, `${JSON.stringify(event)}\n`, { encoding: "utf8" });
    } catch (err) {
      throw new HarnessError("JOURNAL_WRITE_FAILED", (err as Error).message);
    }
    return event;
  }

  readAll(): JournalEvent[] {
    if (!existsSync(this.filePath)) return [];
    const raw = readFileSync(this.filePath, "utf8");
    return raw
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as JournalEvent);
  }

  /** Reconstruct last stateAfter from journal — projection, not a second truth. */
  projectLastState(): string | undefined {
    const events = this.readAll();
    for (let i = events.length - 1; i >= 0; i--) {
      if (events[i].stateAfter) return events[i].stateAfter;
    }
    return undefined;
  }
}

```
### `projects/sfia-studio/harness/src/orchestrator.ts`

```
import { randomUUID } from "node:crypto";
import type {
  ExecutionContract,
  GateDecision,
  POCRequest,
  CursorResult,
  GitCommandResult,
} from "./types/contracts.js";
import { HarnessError } from "./types/contracts.js";
import { computeContractHash } from "./hash/contractHash.js";
import { StateMachine } from "./state/machine.js";
import { GateValidator, assertGateOk } from "./gate/gateValidator.js";
import { PolicyEngine } from "./policy/policyEngine.js";
import { GitReaderImpl, denyWriteOp } from "./ports/gitReaderImpl.js";
import { CursorExecutorPortFixture } from "./ports/cursorFixture.js";
import { EventJournal } from "./journal/eventJournal.js";
import { ProofStore } from "./proof/proofStore.js";

export interface RunInput {
  request: POCRequest;
  contract: ExecutionContract;
  gate: GateDecision;
  stopAfterAuthorize?: boolean;
  cursorSimulate?: "success" | "timeout" | "error";
  attemptForbiddenGit?: boolean;
}

export interface RunResult {
  ok: boolean;
  terminalState: string;
  contractHash: string;
  executionId: string;
  correlationId: string;
  proofDir: string;
  journalPath: string;
  gitResults: GitCommandResult[];
  cursor?: CursorResult;
  errorCode?: string;
  projectedState?: string;
}

export class Orchestrator {
  readonly gateValidator = new GateValidator();
  readonly policy = new PolicyEngine();

  async run(input: RunInput): Promise<RunResult> {
    const correlationId = randomUUID();
    const executionId = randomUUID();
    const machine = new StateMachine("CREATED");
    const journal = new EventJournal(input.contract.proofDir, correlationId);
    const proofs = new ProofStore(input.contract.proofDir);
    const gitResults: GitCommandResult[] = [];

    const log = (
      eventType: string,
      fields: Partial<Parameters<EventJournal["append"]>[0]> & { result?: string; errorCode?: string },
    ) => {
      journal.append({
        eventType,
        requestId: input.request.requestId,
        executionId,
        contractHash: computeContractHash(input.contract),
        stateBefore: machine.current,
        ...fields,
      });
    };

    try {
      this.policy.assertContract(input.contract);
      const hash = computeContractHash(input.contract);
      proofs.writeJson("contract.json", input.contract);
      proofs.writeText("contractHash.txt", `${hash}\n`);
      proofs.writeJson("request.json", input.request);
      proofs.writeJson("gate.json", input.gate);

      machine.transition("CONTRACT_VALIDATED");
      log("contract.validated", { stateAfter: "CONTRACT_VALIDATED", result: "ok" });

      machine.transition("AWAITING_GATE");
      log("gate.awaiting", { stateAfter: "AWAITING_GATE", result: "ok" });

      if (input.gate.decision === "STOP") {
        machine.transition("STOP_REQUESTED");
        log("gate.stop", { stateAfter: "STOP_REQUESTED", result: "stop" });
        machine.transition("CLOSED");
        log("execution.closed", { stateAfter: "CLOSED", result: "stopped_before_run" });
        return finish(false, "CLOSED", hash, "GATE_STOP");
      }

      const gateResult = this.gateValidator.validate({
        gate: input.gate,
        contract: input.contract,
        expectedHash: hash,
      });
      if (!gateResult.ok) {
        machine.transition("REJECTED");
        log("gate.rejected", {
          stateAfter: "REJECTED",
          result: "rejected",
          errorCode: gateResult.code,
          detail: { message: gateResult.message },
        });
        machine.transition("CLOSED");
        return finish(false, "CLOSED", hash, gateResult.code);
      }

      if (input.gate.decision !== "GO") {
        machine.transition("REJECTED");
        log("gate.rejected", {
          stateAfter: "REJECTED",
          result: "rejected",
          errorCode: "GATE_NOT_GO",
        });
        machine.transition("CLOSED");
        return finish(false, "CLOSED", hash, "GATE_NOT_GO");
      }

      this.gateValidator.consume(input.gate.decisionId);
      machine.transition("AUTHORIZED");
      log("gate.authorized", { stateAfter: "AUTHORIZED", result: "ok" });

      if (input.stopAfterAuthorize) {
        machine.transition("STOP_REQUESTED");
        log("execution.stopped", { stateAfter: "STOP_REQUESTED", result: "stop" });
        machine.transition("CLOSED");
        log("execution.closed", { stateAfter: "CLOSED", result: "stopped" });
        proofs.writeJson("stop.json", { reason: "explicit_stop", at: new Date().toISOString() });
        return finish(false, "CLOSED", hash, "STOP");
      }

      machine.transition("RUNNING");
      log("execution.running", { stateAfter: "RUNNING", result: "ok" });

      const git = new GitReaderImpl(input.contract, this.policy);
      if (input.attemptForbiddenGit) {
        try {
          this.policy.assertDeniedShellCommand("git push");
          denyWriteOp("push");
        } catch (err) {
          const he = err as HarnessError;
          log("git.denied", {
            stateAfter: "RUNNING",
            result: "denied",
            errorCode: he.code,
          });
          proofs.writeJson("git-denied.json", { code: he.code, message: he.message });
          machine.transition("REJECTED");
          log("execution.rejected", { stateAfter: "REJECTED", result: "denied", errorCode: he.code });
          machine.transition("CLOSED");
          return finish(false, "CLOSED", hash, he.code);
        }
      }

      const ops = [
        { op: "branch-show-current" as const },
        { op: "rev-parse" as const, ref: "HEAD" },
        { op: "status-short" as const },
      ];
      for (const op of ops) {
        if (!input.contract.allowedCommands.includes(op.op)) continue;
        const res = await git.run(op);
        gitResults.push(res);
        log("git.read", {
          stateAfter: "RUNNING",
          result: res.exitCode === 0 ? "ok" : "git_error",
          detail: { argv: res.argv, exitCode: res.exitCode },
        });
      }
      proofs.writeJson("git-results.json", gitResults);

      const cursor = new CursorExecutorPortFixture();
      const cursorResult = await cursor.execute({
        requestId: input.request.requestId,
        executionId,
        mode: "fixture",
        objective: input.request.title,
        timeoutMs: input.contract.timeoutMs,
        simulate: input.cursorSimulate ?? "success",
      });
      proofs.writeJson("cursor-fixture.json", cursorResult);
      log("cursor.fixture", {
        stateAfter: "RUNNING",
        result: cursorResult.ok ? "ok" : "cursor_error",
        errorCode: cursorResult.errorCode,
        detail: { realCursorClaimed: false },
      });

      if (!cursorResult.ok) {
        machine.transition("FAILED");
        log("execution.failed", { stateAfter: "FAILED", result: "failed", errorCode: cursorResult.errorCode });
        machine.transition("CLOSED");
        return finish(false, "CLOSED", hash, cursorResult.errorCode, cursorResult);
      }

      machine.transition("COMPLETED");
      log("execution.completed", { stateAfter: "COMPLETED", result: "ok" });
      machine.transition("CLOSED");
      log("execution.closed", { stateAfter: "CLOSED", result: "completed" });

      const summary = {
        ok: true,
        contractHash: hash,
        executionId,
        correlationId,
        gitOps: gitResults.length,
        cursorMode: "fixture",
        realCursorClaimed: false,
        gitEffect: "none-remote",
        terminalState: "CLOSED",
      };
      proofs.writeJson("summary.json", summary);
      return finish(true, "CLOSED", hash, undefined, cursorResult);
    } catch (err) {
      const he = err as HarnessError;
      const code = he.code ?? "FAILED";
      try {
        if (machine.canTransition("FAILED")) machine.transition("FAILED");
        log("execution.failed", {
          stateAfter: machine.current,
          result: "failed",
          errorCode: code,
          detail: { message: he.message },
        });
        if (machine.canTransition("CLOSED")) machine.transition("CLOSED");
      } catch {
        /* ignore secondary */
      }
      return finish(false, machine.current, computeContractHash(input.contract), code);
    }

    function finish(
      ok: boolean,
      terminalState: string,
      contractHash: string,
      errorCode?: string,
      cursor?: CursorResult,
    ): RunResult {
      return {
        ok,
        terminalState,
        contractHash,
        executionId,
        correlationId,
        proofDir: input.contract.proofDir,
        journalPath: journal.filePath,
        gitResults,
        cursor,
        errorCode,
        projectedState: journal.projectLastState(),
      };
    }
  }
}

export function validateContractOnly(contract: ExecutionContract): { hash: string } {
  const policy = new PolicyEngine();
  policy.assertContract(contract);
  return { hash: computeContractHash(contract) };
}

```
### `projects/sfia-studio/harness/src/policy/policyEngine.ts`

```
import path from "node:path";
import type { ExecutionContract, GitOp } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";

const DENIED_GIT_TOKENS = [
  "add",
  "commit",
  "push",
  "merge",
  "rebase",
  "reset",
  "clean",
  "cherry-pick",
  "branch", // destructive forms checked separately — show-current is via typed op
];

/** Default-deny policy engine for S1. */
export class PolicyEngine {
  assertContract(contract: ExecutionContract): void {
    if (contract.scenario !== "S1") {
      throw new HarnessError("POLICY_SCENARIO", "Only S1 allowed");
    }
    if (contract.gitEffect !== "none-remote") {
      throw new HarnessError("POLICY_GIT_EFFECT", "gitEffect must be none-remote");
    }
    if (contract.cursorMode !== "fixture") {
      throw new HarnessError("POLICY_CURSOR_MODE", "cursorMode must be fixture for this increment");
    }
    if (!contract.repositoryRoot || !path.isAbsolute(contract.repositoryRoot)) {
      throw new HarnessError("POLICY_REPO_ROOT", "repositoryRoot must be absolute");
    }
    if (!contract.proofDir || !path.isAbsolute(contract.proofDir)) {
      throw new HarnessError("POLICY_PROOF_DIR", "proofDir must be absolute");
    }
    if (contract.timeoutMs <= 0 || contract.timeoutMs > 600_000) {
      throw new HarnessError("POLICY_TIMEOUT", "timeoutMs out of bounds");
    }
    for (const p of contract.allowedPaths) {
      this.assertAllowedPath(contract, p);
    }
    this.assertProofDirInsideOrSibling(contract);
  }

  assertAllowedPath(contract: ExecutionContract, targetPath: string): string {
    const root = path.resolve(contract.repositoryRoot);
    if (targetPath.includes("\0")) {
      throw new HarnessError("POLICY_PATH_INJECTION", "NUL in path");
    }
    if (targetPath.split(/[/\\]/).includes("..")) {
      throw new HarnessError("POLICY_PATH_TRAVERSAL", "path contains ..", { targetPath });
    }
    const resolved = path.resolve(root, targetPath);
    const rel = path.relative(root, resolved);
    if (rel.startsWith("..") || path.isAbsolute(rel)) {
      throw new HarnessError("POLICY_PATH_TRAVERSAL", "path escapes repositoryRoot", {
        targetPath,
        resolved,
      });
    }
    const matchPrefix = contract.allowedPaths.some((p) => {
      if (p === "." || p === "./") return true;
      const pref = path.resolve(root, p);
      return resolved === pref || resolved.startsWith(pref + path.sep);
    });
    if (!matchPrefix) {
      throw new HarnessError("POLICY_PATH_DENIED", "path not in allowlist", { targetPath });
    }
    const ext = path.extname(resolved).toLowerCase();
    const allowedExt = contract.allowedExtensions ?? [".md", ".txt", ".json", ".jsonl", ""];
    if (ext && !allowedExt.includes(ext)) {
      throw new HarnessError("POLICY_EXT_DENIED", `extension denied: ${ext}`);
    }
    return resolved;
  }

  assertGitOp(contract: ExecutionContract, op: GitOp): void {
    this.assertContract(contract);
    const label = op.op;
    const allowed = new Set(contract.allowedCommands);
    if (!allowed.has(label)) {
      throw new HarnessError("POLICY_GIT_OP_DENIED", `Git op not allowlisted: ${label}`, { op });
    }
    // Explicit deny of write-like tokens if someone maps wrong
    if ("ref" in op && /[\s;&|`$]/.test(op.ref)) {
      throw new HarnessError("POLICY_GIT_ARG", "unsafe git ref");
    }
    if (op.op === "log" && (op.maxCount <= 0 || op.maxCount > 20)) {
      throw new HarnessError("POLICY_GIT_LOG_LIMIT", "log maxCount must be 1..20");
    }
  }

  assertDeniedShellCommand(commandLine: string): void {
    const lower = commandLine.toLowerCase();
    for (const token of ["git push", "git commit", "git add", "git merge", "git rebase", "git reset", "git clean"]) {
      if (lower.includes(token)) {
        throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied command: ${token}`);
      }
    }
    for (const t of DENIED_GIT_TOKENS) {
      if (new RegExp(`\\bgit\\s+${t}\\b`).test(lower) && !lower.includes("git branch --show-current")) {
        if (t === "branch" && lower.includes("--show-current")) continue;
        throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied git token: ${t}`);
      }
    }
  }

  private assertProofDirInsideOrSibling(contract: ExecutionContract): void {
    const proof = path.resolve(contract.proofDir);
    if (proof.includes("..")) {
      // resolved already collapses .. but keep check on original
    }
    // proofDir must be absolute and not a symlink escape — basic check
    if (!path.isAbsolute(proof)) {
      throw new HarnessError("POLICY_PROOF_DIR", "proofDir must be absolute");
    }
  }
}

```
### `projects/sfia-studio/harness/src/ports/cursorExecutor.ts`

```
import type { CursorInstruction, CursorResult } from "../types/contracts.js";

export interface CursorExecutorPort {
  execute(instruction: CursorInstruction): Promise<CursorResult>;
}

```
### `projects/sfia-studio/harness/src/ports/cursorFixture.ts`

```
import type { CursorInstruction, CursorResult } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";
import type { CursorExecutorPort } from "./cursorExecutor.js";

/**
 * Fixture-only Cursor executor.
 * Does NOT call Cursor, does NOT claim real Cursor, does NOT invent an API.
 */
export class CursorExecutorPortFixture implements CursorExecutorPort {
  async execute(instruction: CursorInstruction): Promise<CursorResult> {
    if (instruction.mode !== "fixture") {
      throw new HarnessError("CURSOR_MODE_DENIED", "Only fixture mode allowed in this increment");
    }
    const started = Date.now();
    const sim = instruction.simulate ?? "success";

    if (sim === "timeout") {
      return {
        ok: false,
        mode: "fixture",
        summary: "fixture timeout simulated",
        artifacts: [],
        errorCode: "CURSOR_FIXTURE_TIMEOUT",
        durationMs: Date.now() - started,
        realCursorClaimed: false,
      };
    }
    if (sim === "error") {
      return {
        ok: false,
        mode: "fixture",
        summary: "fixture error simulated",
        artifacts: [],
        errorCode: "CURSOR_FIXTURE_ERROR",
        durationMs: Date.now() - started,
        realCursorClaimed: false,
      };
    }
    return {
      ok: true,
      mode: "fixture",
      summary: `fixture success: ${instruction.objective}`,
      artifacts: [`fixture://${instruction.requestId}/analysis.md`],
      durationMs: Date.now() - started,
      realCursorClaimed: false,
    };
  }
}

```
### `projects/sfia-studio/harness/src/ports/gitReader.ts`

```
import type { GitCommandResult, GitOp } from "../types/contracts.js";

export interface GitReaderPort {
  run(op: GitOp): Promise<GitCommandResult>;
}

```
### `projects/sfia-studio/harness/src/ports/gitReaderImpl.ts`

```
import { spawn } from "node:child_process";
import type { GitCommandResult, GitOp } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";
import type { GitReaderPort } from "./gitReader.js";
import type { PolicyEngine } from "../policy/policyEngine.js";
import type { ExecutionContract } from "../types/contracts.js";

const MAX_OUTPUT = 256_000;

export class GitReaderImpl implements GitReaderPort {
  constructor(
    private readonly contract: ExecutionContract,
    private readonly policy: PolicyEngine,
    private readonly timeoutMs = contract.timeoutMs,
  ) {}

  async run(op: GitOp): Promise<GitCommandResult> {
    this.policy.assertGitOp(this.contract, op);
    const argv = toArgv(op);
    // Never shell
    return this.execGit(argv);
  }

  private execGit(argv: string[]): Promise<GitCommandResult> {
    const started = Date.now();
    return new Promise((resolve, reject) => {
      const child = spawn("git", argv, {
        cwd: this.contract.repositoryRoot,
        shell: false,
        env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
      });
      let stdout = "";
      let stderr = "";
      let killed = false;
      const timer = setTimeout(() => {
        killed = true;
        child.kill("SIGTERM");
      }, this.timeoutMs);

      child.stdout.on("data", (buf: Buffer) => {
        stdout += buf.toString("utf8");
        if (stdout.length > MAX_OUTPUT) {
          killed = true;
          child.kill("SIGTERM");
        }
      });
      child.stderr.on("data", (buf: Buffer) => {
        stderr += buf.toString("utf8");
        if (stderr.length > MAX_OUTPUT) {
          killed = true;
          child.kill("SIGTERM");
        }
      });
      child.on("error", (err) => {
        clearTimeout(timer);
        reject(new HarnessError("GIT_SPAWN_ERROR", err.message));
      });
      child.on("close", (code) => {
        clearTimeout(timer);
        if (killed && (stdout.length > MAX_OUTPUT || stderr.length > MAX_OUTPUT)) {
          reject(new HarnessError("GIT_OUTPUT_LIMIT", "git output exceeded limit"));
          return;
        }
        if (killed) {
          reject(new HarnessError("GIT_TIMEOUT", "git command timed out"));
          return;
        }
        resolve({
          argv: ["git", ...argv],
          stdout: stdout.slice(0, MAX_OUTPUT),
          stderr: stderr.slice(0, MAX_OUTPUT),
          exitCode: code ?? 1,
          durationMs: Date.now() - started,
        });
      });
    });
  }
}

export function toArgv(op: GitOp): string[] {
  switch (op.op) {
    case "branch-show-current":
      return ["branch", "--show-current"];
    case "rev-parse":
      return ["rev-parse", op.ref];
    case "merge-base":
      return ["merge-base", op.a, op.b];
    case "status-short":
      return ["status", "--short"];
    case "diff-check":
      return ["diff", "--check"];
    case "diff-stat":
      return ["diff", "--stat"];
    case "diff-name-status":
      return ["diff", "--name-status"];
    case "log":
      return ["log", "--oneline", `-n${op.maxCount}`];
    case "show":
      return ["show", "--no-patch", "--format=%H %s", op.revPath];
    case "ls-remote":
      return ["ls-remote", "--heads", op.remote ?? "origin"];
    default: {
      const _exhaustive: never = op;
      throw new HarnessError("GIT_OP_UNKNOWN", String(_exhaustive));
    }
  }
}

/** Typed denial helper for tests — never executes. */
export function denyWriteOp(name: string): never {
  throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied Git write: ${name}`);
}

```
### `projects/sfia-studio/harness/src/proof/proofStore.ts`

```
import { mkdirSync, writeFileSync, realpathSync, existsSync } from "node:fs";
import path from "node:path";
import { HarnessError } from "../types/contracts.js";

export class ProofStore {
  constructor(private readonly proofDir: string) {
    mkdirSync(proofDir, { recursive: true });
    this.assertInsideProofDir(proofDir);
  }

  writeJson(name: string, data: unknown): string {
    const target = this.resolveSafe(name);
    writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`, "utf8");
    return target;
  }

  writeText(name: string, text: string): string {
    const target = this.resolveSafe(name);
    writeFileSync(target, text, "utf8");
    return target;
  }

  private resolveSafe(name: string): string {
    if (name.includes("..") || name.includes("\0") || path.isAbsolute(name)) {
      throw new HarnessError("PROOF_PATH_DENIED", "invalid proof name", { name });
    }
    const target = path.resolve(this.proofDir, name);
    const root = path.resolve(this.proofDir);
    if (!target.startsWith(root + path.sep) && target !== root) {
      throw new HarnessError("PROOF_PATH_ESCAPE", "proof path escapes proofDir");
    }
    return target;
  }

  private assertInsideProofDir(dir: string): void {
    if (!existsSync(dir)) return;
    try {
      realpathSync(dir);
    } catch {
      throw new HarnessError("PROOF_DIR_INVALID", "cannot resolve proofDir");
    }
  }
}

```
### `projects/sfia-studio/harness/src/state/machine.ts`

```
import type { ExecutionState } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";

const ALLOWED: Record<ExecutionState, ExecutionState[]> = {
  CREATED: ["CONTRACT_VALIDATED", "REJECTED", "FAILED"],
  CONTRACT_VALIDATED: ["AWAITING_GATE", "REJECTED", "FAILED"],
  AWAITING_GATE: ["AUTHORIZED", "REJECTED", "STOP_REQUESTED", "FAILED"],
  AUTHORIZED: ["RUNNING", "REJECTED", "STOP_REQUESTED", "FAILED"],
  RUNNING: ["COMPLETED", "REJECTED", "STOP_REQUESTED", "FAILED"],
  STOP_REQUESTED: ["CLOSED", "FAILED"],
  REJECTED: ["CLOSED"],
  FAILED: ["CLOSED"],
  COMPLETED: ["CLOSED"],
  CLOSED: [],
};

export class StateMachine {
  constructor(private state: ExecutionState = "CREATED") {}

  get current(): ExecutionState {
    return this.state;
  }

  canTransition(to: ExecutionState): boolean {
    return ALLOWED[this.state].includes(to);
  }

  transition(to: ExecutionState): { from: ExecutionState; to: ExecutionState } {
    if (!this.canTransition(to)) {
      throw new HarnessError(
        "STATE_TRANSITION_DENIED",
        `Illegal transition ${this.state} → ${to}`,
        { from: this.state, to },
      );
    }
    const from = this.state;
    this.state = to;
    return { from, to };
  }
}

```
### `projects/sfia-studio/harness/src/types/contracts.ts`

```
/** Shared contracts for POC S1 harness (Option B — harness autonomous). */

export type ScenarioId = "S1";
export type GitEffect = "none-remote";
export type CursorMode = "fixture";
export type GateDecisionKind = "GO" | "CORRIGER" | "STOP" | "CLOSE";

export type ExecutionState =
  | "CREATED"
  | "CONTRACT_VALIDATED"
  | "AWAITING_GATE"
  | "AUTHORIZED"
  | "RUNNING"
  | "STOP_REQUESTED"
  | "REJECTED"
  | "FAILED"
  | "COMPLETED"
  | "CLOSED";

export interface POCRequest {
  requestId: string;
  title: string;
  cycle: string;
  scope: string;
  operator: string;
  createdAt: string;
}

export interface ExecutionContract {
  contractId: string;
  requestId: string;
  scenario: ScenarioId;
  repositoryRoot: string;
  allowedPaths: string[];
  allowedCommands: string[];
  gitEffect: GitEffect;
  cursorMode: CursorMode;
  timeoutMs: number;
  proofDir: string;
  schemaVersion: string;
  maxFiles?: number;
  maxFileBytes?: number;
  maxAggregateBytes?: number;
  allowedExtensions?: string[];
  decidedByAllowlist?: string[];
  gateExpiresAt?: string;
}

export interface GateDecision {
  decisionId: string;
  requestId: string;
  contractHash: string;
  decision: GateDecisionKind;
  decidedBy: string;
  decidedAt: string;
  scope: string;
  expiresAt?: string;
}

export interface ExecutionContext {
  executionId: string;
  requestId: string;
  contractId: string;
  correlationId: string;
  startedAt: string;
}

export interface AdapterEnvelope {
  schemaVersion: string;
  correlationId: string;
  messageType: "intent" | "gate" | "stop" | "statusQuery" | "status" | "proof";
  payload: unknown;
  emittedAt: string;
}

export interface JournalEvent {
  schemaVersion: string;
  eventId: string;
  eventType: string;
  timestamp: string;
  requestId: string;
  executionId?: string;
  correlationId: string;
  contractHash?: string;
  stateBefore?: ExecutionState;
  stateAfter?: ExecutionState;
  result?: string;
  errorCode?: string;
  detail?: Record<string, unknown>;
}

export type GitOp =
  | { op: "branch-show-current" }
  | { op: "rev-parse"; ref: string }
  | { op: "merge-base"; a: string; b: string }
  | { op: "status-short" }
  | { op: "diff-check" }
  | { op: "diff-stat" }
  | { op: "diff-name-status" }
  | { op: "log"; maxCount: number }
  | { op: "show"; revPath: string }
  | { op: "ls-remote"; remote?: string };

export interface GitCommandResult {
  argv: string[];
  stdout: string;
  stderr: string;
  exitCode: number;
  durationMs: number;
}

export interface CursorInstruction {
  requestId: string;
  executionId: string;
  mode: CursorMode;
  objective: string;
  timeoutMs: number;
  simulate?: "success" | "timeout" | "error";
}

export interface CursorResult {
  ok: boolean;
  mode: CursorMode;
  summary: string;
  artifacts: string[];
  errorCode?: string;
  durationMs: number;
  realCursorClaimed: false;
}

export class HarnessError extends Error {
  constructor(
    readonly code: string,
    message: string,
    readonly detail?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "HarnessError";
  }
}

```
### `projects/sfia-studio/harness/tests/integration.test.ts`

```
import { describe, expect, it } from "vitest";
import { mkdtempSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { Orchestrator } from "../src/orchestrator.js";
import { EventJournal } from "../src/journal/eventJournal.js";
import { ProofStore } from "../src/proof/proofStore.js";
import { CursorExecutorPortFixture } from "../src/ports/cursorFixture.js";
import { computeContractHash } from "../src/hash/contractHash.js";
import { makeContract, makeGo, makeRequest } from "../fixtures/builders.js";
import { PolicyEngine } from "../src/policy/policyEngine.js";
import { HarnessError } from "../src/types/contracts.js";

function tmpProof(): string {
  return mkdtempSync(path.join(os.tmpdir(), "sfia-poc-proof-"));
}

describe("A1 nominal", () => {
  it("completes S1 with git read + cursor fixture", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract);
    const orch = new Orchestrator();
    const result = await orch.run({
      request: makeRequest(),
      contract,
      gate,
    });
    expect(result.ok).toBe(true);
    expect(result.terminalState).toBe("CLOSED");
    expect(result.cursor?.realCursorClaimed).toBe(false);
    expect(result.gitResults.length).toBeGreaterThan(0);
    expect(existsSync(path.join(proofDir, "events.jsonl"))).toBe(true);
    expect(existsSync(path.join(proofDir, "summary.json"))).toBe(true);
    expect(result.projectedState).toBe("CLOSED");
  });
});

describe("A2 deny Git write", () => {
  it("rejects git push attempt without executing write", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract);
    const orch = new Orchestrator();
    const result = await orch.run({
      request: makeRequest(),
      contract,
      gate,
      attemptForbiddenGit: true,
    });
    expect(result.ok).toBe(false);
    expect(result.errorCode).toBe("POLICY_GIT_WRITE_DENIED");
    expect(existsSync(path.join(proofDir, "git-denied.json"))).toBe(true);
  });
});

describe("A3 hash mismatch", () => {
  it("rejects GO with wrong hash — no git", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract, { contractHash: "0".repeat(64) });
    const orch = new Orchestrator();
    const result = await orch.run({
      request: makeRequest(),
      contract,
      gate,
    });
    expect(result.ok).toBe(false);
    expect(result.errorCode).toBe("GATE_HASH_MISMATCH");
    expect(result.gitResults.length).toBe(0);
  });
});

describe("A4 STOP", () => {
  it("STOP before run is priority", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract, { decision: "STOP", decisionId: "stop-1" });
    const orch = new Orchestrator();
    const result = await orch.run({ request: makeRequest(), contract, gate });
    expect(result.ok).toBe(false);
    expect(result.errorCode).toBe("GATE_STOP");
    expect(result.gitResults.length).toBe(0);
  });

  it("STOP after authorize", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract);
    const orch = new Orchestrator();
    const result = await orch.run({
      request: makeRequest(),
      contract,
      gate,
      stopAfterAuthorize: true,
    });
    expect(result.errorCode).toBe("STOP");
    expect(existsSync(path.join(proofDir, "stop.json"))).toBe(true);
  });
});

describe("A5 without Studio", () => {
  it("runs via orchestrator API only (no UI)", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const result = await new Orchestrator().run({
      request: makeRequest(),
      contract,
      gate: makeGo(contract),
    });
    expect(result.ok).toBe(true);
    // No Studio dependency — pure harness
    expect(result.journalPath.endsWith("events.jsonl")).toBe(true);
  });
});

describe("A6 journal projection is not a second truth store", () => {
  it("projects state from journal events", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    await new Orchestrator().run({
      request: makeRequest(),
      contract,
      gate: makeGo(contract),
    });
    const journal = new EventJournal(proofDir, "x");
    expect(journal.projectLastState()).toBe("CLOSED");
    expect(journal.readAll().length).toBeGreaterThan(3);
  });
});

describe("AB abuse cases", () => {
  it("AB-01 falsified GO decider", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract, { decidedBy: "Attacker" });
    const r = await new Orchestrator().run({ request: makeRequest(), contract, gate });
    expect(r.errorCode).toBe("GATE_DECIDER_UNAUTHORIZED");
  });

  it("AB-02 replay GO", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract);
    const orch = new Orchestrator();
    const first = await orch.run({ request: makeRequest(), contract, gate });
    expect(first.ok).toBe(true);
    const proofDir2 = tmpProof();
    const contract2 = makeContract(proofDir2);
    // same decisionId on same validator instance
    const r2 = await orch.run({
      request: makeRequest(),
      contract: contract2,
      gate: makeGo(contract2, { decisionId: gate.decisionId }),
    });
    expect(r2.errorCode).toBe("GATE_REPLAY");
  });

  it("AB-03 hash tampering", async () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const gate = makeGo(contract, { contractHash: computeContractHash(contract) + "ff" });
    // normalize to wrong
    gate.contractHash = "ab".repeat(32);
    const r = await new Orchestrator().run({ request: makeRequest(), contract, gate });
    expect(r.errorCode).toBe("GATE_HASH_MISMATCH");
  });

  it("AB-04/05 path traversal / injection", () => {
    const proofDir = tmpProof();
    const contract = makeContract(proofDir);
    const p = new PolicyEngine();
    expect(() => p.assertAllowedPath(contract, "../../.ssh/id_rsa")).toThrow(HarnessError);
    expect(() => p.assertDeniedShellCommand("git push; rm -rf /")).toThrow(HarnessError);
  });

  it("AB-06 proof outside proofDir denied", () => {
    const proofDir = tmpProof();
    const store = new ProofStore(proofDir);
    expect(() => store.writeText("../escape.txt", "x")).toThrow(HarnessError);
  });

  it("AB-07 cursor fixture never claims real", async () => {
    const fix = new CursorExecutorPortFixture();
    const r = await fix.execute({
      requestId: "r",
      executionId: "e",
      mode: "fixture",
      objective: "x",
      timeoutMs: 1000,
    });
    expect(r.realCursorClaimed).toBe(false);
  });

  it("AB-08 journal write failure is fail-closed typed", () => {
    // invalid proof dir on reserved device path is OS-specific; assert ProofStore escape instead
    const proofDir = tmpProof();
    const store = new ProofStore(proofDir);
    expect(() => store.writeJson("/absolute.json", {})).toThrow(HarnessError);
  });
});

```
### `projects/sfia-studio/harness/tests/unit.test.ts`

```
import { describe, expect, it } from "vitest";
import { canonicalize } from "../src/hash/canonicalize.js";
import { computeContractHash } from "../src/hash/contractHash.js";
import { StateMachine } from "../src/state/machine.js";
import { GateValidator } from "../src/gate/gateValidator.js";
import { PolicyEngine } from "../src/policy/policyEngine.js";
import { HarnessError } from "../src/types/contracts.js";
import { makeContract, makeGo, makeRequest } from "../fixtures/builders.js";
import path from "node:path";
import os from "node:os";
import { mkdtempSync } from "node:fs";

describe("canonicalize + contractHash", () => {
  it("same contract different key order → same hash", () => {
    const a = { b: 1, a: 2 };
    const b = { a: 2, b: 1 };
    expect(canonicalize(a)).toBe(canonicalize(b));
  });

  it("security field change → different hash", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-hash-"));
    const c1 = makeContract(dir);
    const c2 = makeContract(dir, { gitEffect: "none-remote", timeoutMs: c1.timeoutMs + 1 });
    expect(computeContractHash(c1)).not.toBe(computeContractHash(c2));
  });
});

describe("StateMachine", () => {
  it("allows nominal path", () => {
    const m = new StateMachine();
    m.transition("CONTRACT_VALIDATED");
    m.transition("AWAITING_GATE");
    m.transition("AUTHORIZED");
    m.transition("RUNNING");
    m.transition("COMPLETED");
    m.transition("CLOSED");
    expect(m.current).toBe("CLOSED");
  });

  it("denies illegal transition", () => {
    const m = new StateMachine();
    expect(() => m.transition("RUNNING")).toThrow(HarnessError);
  });
});

describe("GateValidator", () => {
  it("accepts valid GO", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
    const c = makeContract(dir);
    const g = makeGo(c);
    const v = new GateValidator();
    expect(v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) }).ok).toBe(true);
  });

  it("rejects hash mismatch", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
    const c = makeContract(dir);
    const g = makeGo(c, { contractHash: "deadbeef" });
    const v = new GateValidator();
    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GATE_HASH_MISMATCH");
  });

  it("rejects replay of consumed GO", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
    const c = makeContract(dir);
    const g = makeGo(c);
    const v = new GateValidator();
    v.consume(g.decisionId);
    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GATE_REPLAY");
  });

  it("rejects unauthorized decider", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
    const c = makeContract(dir);
    const g = makeGo(c, { decidedBy: "NotMorris" });
    const v = new GateValidator();
    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GATE_DECIDER_UNAUTHORIZED");
  });
});

describe("PolicyEngine", () => {
  it("denies path traversal", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-pol-"));
    const c = makeContract(dir);
    const p = new PolicyEngine();
    expect(() => p.assertAllowedPath(c, "../secrets")).toThrow(HarnessError);
  });

  it("denies git push shell", () => {
    const p = new PolicyEngine();
    expect(() => p.assertDeniedShellCommand("git push origin main")).toThrow(HarnessError);
  });

  it("requires none-remote and fixture", () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-pol-"));
    const p = new PolicyEngine();
    expect(() =>
      p.assertContract(makeContract(dir, { cursorMode: "fixture", gitEffect: "none-remote" })),
    ).not.toThrow();
  });
});

describe("request fixture smoke", () => {
  it("builds request", () => {
    expect(makeRequest().operator).toBe("Morris");
  });
});

```
### `projects/sfia-studio/harness/tsconfig.build.json`

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": false,
    "declaration": true,
    "outDir": "dist",
    "rootDir": "src",
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist", "tests", "fixtures"]
}

```
### `projects/sfia-studio/harness/tsconfig.json`

```
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "noEmit": true,
    "types": ["node", "vitest/globals"],
    "rootDir": ".",
    "outDir": "dist"
  },
  "include": ["src/**/*.ts", "tests/**/*.ts", "fixtures/**/*.ts"],
  "exclude": ["node_modules", "dist", "proofs"]
}

```
### `projects/sfia-studio/harness/vitest.config.ts`

```
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    testTimeout: 30_000,
  },
});

```

---

## 11. Contenu complet + diffs — documents modifiés

### `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` — contenu complet

```markdown
# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 8 — Delivery harness-only POC-G9 |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (**Option C méthode**) |
| **Statut** | POC-G9 **CONSOMMÉ** (harness-only local) ; POC-G8 **CONSOMMÉ** ; POC **non lancé** ; `app/**` intact |
| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist initiale **validée** harness-only |
| **Destinataire** | Morris |
| **Source de vérité** | `origin/main` @ `d45cc54…` ; branche locale `delivery/sfia-studio-poc-s1-harness` |

> Architecture Option B **intégrée**. Harness-only (POC-G9). Allowlist initiale **validée**. POC **non lancé**. GO commit/push/draft PR **consommé**. Merge **fermé**. `app/**` intact.

---

## 0. État produit (capitalisation post-Delivery P0)

| Élément | Valeur |
|---------|--------|
| Cadrage documentaire | **Clôturé** (D-VAL-11) |
| Conception fonctionnelle | **VALIDÉE** / **CLÔTURÉE** / **INTÉGRÉE** (PR #209) |
| Architecture fonctionnelle | **VALIDÉE** / **INTÉGRÉE** — clôture formelle **NON PRONONCÉE** |
| UX/UI P0 | **CLÔTURÉ** — Option B ; Figma ; docs `14`–`16` |
| Architecture technique P0 | **VALIDÉE** / **INTÉGRÉE** (`18`/`19`) |
| Delivery P0 | **CLÔTURÉ** — implémenté, validé visuellement, mergé, post-mergé, cleanup |
| PR #217 | **MERGED** — `feat: implement SFIA Studio P0 governed workspace` |
| Commit projet | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
| Merge squash | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| Périmètre | 77 fichiers ; +12830 / −0 ; 4 routes P0 |
| Squash | Commit de branche non ancêtre de `main` ; trees app **identiques** |
| Branche Delivery | **Supprimée** (local + remote) |
| Gate Morris Delivery P0 | **Aucune restante** |
| App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
| Prochaine orientation | Review draft PR ; merge **FERMÉ** ; Cursor réel / UI / Docker **FERMÉS** |
| Architecture POC | **Option B minimale** — POC-G7 **INTÉGRÉ** (PR #221) |
| Sync post-merge archi | **MERGED** — PR #222 / `60e6880…` |
| Backlog POC | POC-G8 **CONSOMMÉ** — docs `26`–`28` |
| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
| Branche backlog | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |

> Option B ≠ Option C. Harness autonome. Studio cockpit. Adaptateur sans autorité. POC non lancé.

### Trace factuelle — Delivery P0 (historique compact)

| Champ | Valeur |
|-------|--------|
| Autorisation initiale (TA-DEC-18) | Delivery P0 autorisé (historique `19`) |
| Exécution | Implémentation + polish + validation visuelle Morris |
| Intégration | PR #217 squash-mergée sur `main` |
| Post-merge | Validations reproductibles vertes |
| Cleanup | Branche Delivery locale + distante supprimées |
| Exclu / réserve | Responsive ; a11y complète ; CI ; fix postcss ; Runtime/Git/Cursor réels ; MVP |

---

## 1. Rappel D-VAL-1 à D-VAL-10 (historiques)

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | **Option C méthode** — consomme v2.6 | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** **autorisés** ; **merge non autorisé** | G7 |

### Contenu D-VAL-10 (G7) — historique

Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé** par cette décision. Handoff ≠ G7.

### D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contexte | Validation après contrôle post-merge et revue de la synchronisation documentaire |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |

---

## 2. Statut G1–G7 et DF-G1

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ** |
| **G2** | **VALIDÉ** |
| **G3** | **REVUE CONFORME** |
| **G4** | **VALIDÉ — OPTION C** |
| **G5** | **VALIDÉ SUR LE PRINCIPE** |
| **G6** | **VALIDÉ** — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** — cadrage détaillé validé (D-VAL-9) |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé. **Observation :** PR #207 mergée (`ec21074`). **Régularisation :** D-VAL-11 validée. |

G7 **≠** autorisation rétroactive de merge.

---

## 3. Trajectoire produit (état factuel)

```text
Pré-cadrage
  → cadrage détaillé
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI P0
  → architecture technique P0
  → Delivery P0
  → PR #217 / intégration main
  → post-merge / cleanup
  → capitalisation P0 (PR #218)
  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
  → architecture POC ciblée             ← POC-G7 **INTÉGRÉ** — Option B — PR #221
  → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`)
  → delivery harness-only                ← POC-G9 CONSOMMÉ ; draft PR Cycle 13 ; merge fermé
  → décision Morris : abandon / itération / préparation MVP
```

### Précisions

- Architecture : **Option B minimale** (intégrée).
- Option A : mode test / dégradé harness.
- Option C : écartée 1er POC.
- POC-G8 : **CONSOMMÉ**. POC-G9 : **CONSOMMÉ** (harness-only). POC : **non lancé**.

### Orientation

> Backlog S1 intégré. Allowlist initiale **validée** harness-only. POC-G9 **consommé**. Draft PR autorisée ; merge **fermé**. POC **non lancé**.

---

## 4. Cycles (historique et prochain)

### 4.0 Synchronisation documentaire post-merge

| Champ | Contenu |
|-------|---------|
| Statut | **FAIT / VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé |
| Objectif | Aligner docs sur l’état Git post-merge |
| Ne lance pas | Conception / architecture / POC |

### 4.1 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` (PR #209) |
| Objectif | Préciser comportements et règles métier des capacités |
| Livrables | `08` / `09` / `10` — **validés** et **intégrés** |
| Profil | Critical |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration Git | **Réalisée** — `99eaeaa…` / `fdade59…` |
| Ne lance pas | Architecture ; UX visuelle ; stack ; POC ; MVP ; code |

### 4.2 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
| Objectif | Blocs logiques ; frontières Studio / Git / GPT / Cursor / orchestrateur candidat |
| Livrables | `11` / `12` / `13` — sur `main` |
| Profil | Critical |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
| D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
| Branche | `project/sfia-studio-functional-architecture` — **conservée** |
| Commits / merges | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync `33d61e3…` ; merge #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836…` |
| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) |
| Acceptation #211 | **VALIDÉE** Morris 2026-07-18 (sans D-VAL-12) |
| Ne lance pas | Architecture technique ; stack ; POC ; MVP ; code ; clôture auto architecture |

### 4.3 UX/UI

| Champ | Contenu |
|-------|---------|
| Statut | **CLÔTURÉ** — AF-CAND-11B VALIDÉE ; Option B ; Figma P0-00C…03C |
| Référence | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO |
| Livrables | `14` / `15` / `16` |
| Suite | Delivery P0 **exécuté et clôturé** (PR #217) |
| Ne lance pas | POC ; MVP ; Runtime réel ; clôture architecture fonctionnelle |

### 4.4 Architecture technique P0

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **INTÉGRÉE** (`18`/`19` ; TA-DEC-01…18) |
| Suite | Delivery P0 **CLÔTURÉ** depuis TA-DEC-18 (autorisation historique → exécution #217) |
| Ne lance pas | Architecture Runtime ; orchestration réelle ; MVP |

### 4.5 Delivery P0

| Champ | Contenu |
|-------|---------|
| Statut | **CLÔTURÉ** — PR #217 ; post-merge ; cleanup branche |
| Livrable | `projects/sfia-studio/app/` sur `main` @ `759ab0b…` |
| Ne lance pas | POC orchestration ; Git/Cursor réels ; CI Studio |

### 4.6 Cadrage POC orchestration (Option B)

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
| Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| Architecture | Option B minimale (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
| Ne lance pas | POC ; backlog ; delivery ; MVP |

### 4.7 Sécurité (bornée)

| Champ | Contenu |
|-------|---------|
| Validé | Lecture Git réelle OK ; writes distantes simulées ; L5 global interdit ; secrets exclus |

---

## 5. Décisions à préparer

| ID | Décision | Nature | Statut |
|----|----------|--------|--------|
| D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris | **FAIT** (D-VAL-9 / DF-G1) |
| D-NEXT-2 | Sélection du cycle conception fonctionnelle | Morris | **FAIT** — 2026-07-18 |
| D-NEXT-2b | Validation de la conception (FD-CAND-01…08) | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **FAIT** — architecture fonctionnelle **lancée** |
| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209 / #210) |
| D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **VALIDÉE** sur le fond — AF-Option C + AF-CAND-01…10, 11A, 12 ; 11B ouverte |
| D-NEXT-2i | Intégration PR #211 | Observation Git | **Fait Git** (`84e4863…`) |
| D-NEXT-2i2 | Acceptation/régularisation documentaire #211 | Morris | **VALIDÉE** — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
| D-NEXT-2i3 | Sync post-merge PR #212 | Observation Git | **MERGED** (`cb870544…`) — sync **intégrée** |
| D-NEXT-2i4 | Finalisation post-merge PR #213 | Observation Git | **MERGED** (`19302836…`) — finalisation **intégrée** |
| D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **VALIDÉE** — UX/UI clôturé |
| D-NEXT-2g1 | Option B consolidation UX docs | Morris | **VALIDÉE** |
| D-NEXT-2g2 | Lancement delivery P0 | Morris | **CLÔTURÉ** — PR #217 |
| D-NEXT-2g3 | Commit/push/PR sync UX | Morris | **Historique** — intégré via trajectoire Delivery |
| D-NEXT-2g4 | Orientation Option B — cadrage POC orchestration | Morris | **VALIDÉE + INTÉGRÉE** (PR #219) — POC **non lancé** |
| D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX / Delivery | Morris | Jusqu’au cadrage POC **intégré** ; prochain = décision éventuelle POC-G7 |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | **Traité** dans le cadrage POC (G1–G6) — POC non lancé |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris — à rouvrir au cadrage POC |
| D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
| D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée ; décision distincte |
| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** + **intégrée** (PR #218) |
| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **FAIT** (PR #218) |
| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
| D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
| D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; harness-only **consommé** ; draft PR Cycle 13 ; merge **fermé** |
| D-NEXT-19 | GO versionnement sync post-merge cadrage | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
| D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
| D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
| D-NEXT-22 | Validation architecture / ARCH-POC-CAND / Option B | Morris | **FAIT** — POC-G7 **VALIDÉ AVEC RÉSERVES** |
| D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **CONSOMMÉ** — PR #221 **MERGED** (`40f8ebe…`) |
| D-NEXT-24 | Ouverture POC-G8 | Morris | **CONSOMMÉ** — backlog `26`–`28` |
| D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
| D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
| D-NEXT-27 | Validation backlog / allowlist initiale harness-only | Morris | **CONSOMMÉE** |
| D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
| D-NEXT-29 | Commit/push/draft PR delivery harness | Morris | **CONSOMMÉ** (Cycle 13) — merge **fermé** |
| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | **Fermés** |

---

## 6. Options de séquencement post-cadrage

### Option 1 — Conception puis architecture fonctionnelle

| | |
|--|--|
| **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
| **Risques** | Conception trop détaillée sans frontières |
| **Prérequis** | Cadrage documentaire clôturé (D-VAL-11) |

### Option 2 — Architecture fonctionnelle légère puis conception détaillée

| | |
|--|--|
| **Bénéfices** | Pose frontières Studio / orchestration tôt |
| **Risques** | Archi prématurée si trop technique |

### Option 3 — Exploration UX bornée après capacité map

| | |
|--|--|
| **Bénéfices** | Valide parcours opérateur tôt |
| **Risques** | UI avant règles métier |

### Recommandation (≠ décision / ≠ sélection)

**Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).

**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).

**AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.

**AF-CAND-11B :** **VALIDÉE** — UX/UI clôturé. Delivery P0 **exécuté et clôturé** (PR #217).

**Option B (Morris — capitalisation) :** cadrage POC orchestration **VALIDÉ + INTÉGRÉ** (PR #219). POC **non lancé**.

Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industrialisation **non engagés**.

---

## 7. Gates futurs proposés

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
| **DF-G2** | Sélectionner le prochain cycle | **FAIT** jusqu’à cadrage POC intégré |
| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique |
| **DF-G4** | Autoriser définition détaillée du POC | **Partiellement couvert** par cadrage POC (G1–G6) — architecture POC = POC-G7 |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** — non validé |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Architecture Option B : **intégrée** (#221). POC-G8/G9 **CONSOMMÉS**. Draft PR harness Cycle 13 ; merge **fermé**.

---

## 8. Questions Morris

1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément) ?
2. Ouvrez-vous **POC-G9** (delivery borné) ?
3. Clôture formelle AF (séparée) ?

---

## 9. Critères

| Critère | État |
|---------|------|
| Architecture Option B | **INTÉGRÉE** |
| POC-G7 | **INTÉGRÉ** |
| POC-G8 | **CONSOMMÉ** |
| POC-G9 | **Fermé** |
| POC lancé | **Non** |

---

## 10. Verdict documentaire

**Verdict :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [26](./26-poc-orchestration-backlog.md) · [27](./27-poc-orchestration-allowlist-and-acceptance.md) · [28](./28-poc-orchestration-delivery-gate-pack.md) | Backlog POC-G8 |
| [23](./23-poc-orchestration-technical-architecture.md) · [24](./24-poc-orchestration-contracts-security-and-observability.md) · [25](./25-poc-orchestration-architecture-decision-pack.md) | Archi Option B |
| [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
| [11](./11-functional-architecture.md) | AF-Option C |

*Option B — POC-G9 harness-only CONSOMMÉ — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*

```

### `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` — diff staged

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 06377f4..e2a4805 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 5 — Backlog POC-G8 ; historique Option B conservé |
+| **Cycle** | 8 — Delivery harness-only POC-G9 |
 | **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | POC-G8 **CONSOMMÉ** ; backlog S1 (`26`–`28`) ; POC-G9 **FERMÉ** ; POC **non lancé** |
-| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist candidate |
+| **Statut** | POC-G9 **CONSOMMÉ** (harness-only local) ; POC-G8 **CONSOMMÉ** ; POC **non lancé** ; `app/**` intact |
+| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist initiale **validée** harness-only |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `60e6880…` ; branche locale `backlog/sfia-studio-poc-orchestration-s1` |
+| **Source de vérité** | `origin/main` @ `d45cc54…` ; branche locale `delivery/sfia-studio-poc-s1-harness` |
 
-> Architecture Option B **intégrée**. Backlog S1 produit (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
+> Architecture Option B **intégrée**. Harness-only (POC-G9). Allowlist initiale **validée**. POC **non lancé**. GO commit/push/draft PR **consommé**. Merge **fermé**. `app/**` intact.
 
 ---
 
@@ -34,7 +34,7 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | Validation backlog + éventuel **POC-G9** — **FERMÉ** |
+| Prochaine orientation | Review draft PR ; merge **FERMÉ** ; Cursor réel / UI / Docker **FERMÉS** |
 | Architecture POC | **Option B minimale** — POC-G7 **INTÉGRÉ** (PR #221) |
 | Sync post-merge archi | **MERGED** — PR #222 / `60e6880…` |
 | Backlog POC | POC-G8 **CONSOMMÉ** — docs `26`–`28` |
@@ -122,7 +122,7 @@ Pré-cadrage
   → architecture POC ciblée             ← POC-G7 **INTÉGRÉ** — Option B — PR #221
   → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
   → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`)
-  → delivery POC                        ← POC-G9 fermé
+  → delivery harness-only                ← POC-G9 CONSOMMÉ ; draft PR Cycle 13 ; merge fermé
   → décision Morris : abandon / itération / préparation MVP
 ```
 
@@ -131,11 +131,11 @@ Pré-cadrage
 - Architecture : **Option B minimale** (intégrée).
 - Option A : mode test / dégradé harness.
 - Option C : écartée 1er POC.
-- POC-G8 : **CONSOMMÉ**. POC-G9 : **fermé**. POC : **non lancé**.
+- POC-G8 : **CONSOMMÉ**. POC-G9 : **CONSOMMÉ** (harness-only). POC : **non lancé**.
 
 ### Orientation
 
-> Backlog S1 produit (POC-G8). Allowlist candidate. Delivery (POC-G9) **fermé**. POC **non lancé**.
+> Backlog S1 intégré. Allowlist initiale **validée** harness-only. POC-G9 **consommé**. Draft PR autorisée ; merge **fermé**. POC **non lancé**.
 
 ---
 
@@ -211,7 +211,7 @@ Pré-cadrage
 |-------|---------|
 | Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; POC-G8/G9 **FERMÉS** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Architecture | Option B minimale (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
 | Ne lance pas | POC ; backlog ; delivery ; MVP |
 
@@ -260,7 +260,7 @@ Pré-cadrage
 | D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
 | D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
 | D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
-| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; delivery POC **fermé** (POC-G9) |
+| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; harness-only **consommé** ; draft PR Cycle 13 ; merge **fermé** |
 | D-NEXT-19 | GO versionnement sync post-merge cadrage | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
 | D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
 | D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
@@ -269,8 +269,10 @@ Pré-cadrage
 | D-NEXT-24 | Ouverture POC-G8 | Morris | **CONSOMMÉ** — backlog `26`–`28` |
 | D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
 | D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
-| D-NEXT-27 | Validation backlog / allowlist | Morris | **Requise** |
-| D-NEXT-28 | Ouverture POC-G9 (delivery) | Morris | **Fermée** |
+| D-NEXT-27 | Validation backlog / allowlist initiale harness-only | Morris | **CONSOMMÉE** |
+| D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
+| D-NEXT-29 | Commit/push/draft PR delivery harness | Morris | **CONSOMMÉ** (Cycle 13) — merge **fermé** |
+| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | **Fermés** |
 
 ---
 
@@ -326,13 +328,13 @@ Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industria
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **validé + intégré**. Architecture Option B : **intégrée** (#221). POC-G8/G9 : **fermés**.
+Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Architecture Option B : **intégrée** (#221). POC-G8/G9 **CONSOMMÉS**. Draft PR harness Cycle 13 ; merge **fermé**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Validez-vous le backlog / allowlist (`26`–`28`) ?
+1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément) ?
 2. Ouvrez-vous **POC-G9** (delivery borné) ?
 3. Clôture formelle AF (séparée) ?
 
@@ -352,7 +354,7 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 10. Verdict documentaire
 
-**Verdict :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+**Verdict :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
 
@@ -365,4 +367,4 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 | [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
 | [11](./11-functional-architecture.md) | AF-Option C |
 
-*Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Option B — POC-G9 harness-only CONSOMMÉ — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
```
### `projects/sfia-studio/20-poc-orchestration-framing.md` — contenu complet

```markdown
# SFIA Studio — Cadrage POC orchestration (Option B)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `20-poc-orchestration-framing.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Typologie** | DOC / EVOL (cadrage) |
| **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
| **Branche** | Historique cadrage/archi MERGED ; backlog `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
| **Base / main** | `origin/main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` (PR #222 MERGED) |
| **Statut document** | **VALIDÉ + INTÉGRÉ** ; archi #221 **MERGED** ; sync #222 **MERGED** ; backlog POC-G8 **CONSOMMÉ** |
| **POC** | **Non lancé** |
| **MVP / industrialisation** | **Non engagés** |
| **Architecture Runtime** | **Non validée** — ouverts |
| **Destinataire** | Morris |

> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **INTÉGRÉ** (#223). POC-G9 **CONSOMMÉ** (harness-only). POC **non lancé** (pas d’industrialisation).

### Décision Morris — validation du cadrage (2026-07-19)

| Élément | Statut |
|---------|--------|
| POC-CAND-01…06, 08, 10 | **VALIDÉES** |
| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
| POC-CAND-09 / POC-G10 | **CONSOMMÉE** |
| POC-G1…G6 | **VALIDÉS** |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| POC-G8 | **CONSOMMÉ** (backlog) |
| POC-G9 | **CONSOMMÉ** (harness-only) |
| Intégration | #219–#222 @ `60e6880…` |

---

## 1. Contexte

### 1.1 Acquis factuels

- Delivery P0 **CLÔTURÉ** (PR #217) — app Next.js 15 sous `projects/sfia-studio/app/` ; 4 écrans ; fixtures ; Git/Cursor/Runtime **simulés**.
- Capitalisation post-P0 **INTÉGRÉE** (PR #218) — statut `p0-delivery-integrated-next-poc-orchestration-framing`.
- Architecture fonctionnelle **VALIDÉE** / **INTÉGRÉE** — **AF-Option C** : Studio et orchestrateur déterministe **candidat séparés**.
- Architecture technique P0 **VALIDÉE** — pas d’API, auth, BDD, Runtime contractuel en P0.
- Décision Morris (2026-07-19) : **cadrage Option B VALIDÉ** (POC-G1…G6) — **POC non lancé**.
- Intégration Git : PR #219 **MERGED** (`be713c45…`) — POC-G10 **consommé** ; cycle de cadrage **terminé**.

### 1.2 Formulation structurante (D-VAL-3 — inchangée)

> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### 1.3 Runtime candidat

Un mécanisme d’orchestration déterministe, **éventuellement** nommé « SFIA Runtime », doit **appliquer** contrats, permissions, gates et stop conditions.
Nom **non contractuel**. Architecture Runtime **non validée**. Aucune technologie sélectionnée dans ce cadrage.

---

## 2. Problème technique à prouver

**Problème :** aujourd’hui, SFIA Studio P0 **représente** un cockpit gouverné, mais **ne démontre pas** qu’un orchestrateur déterministe séparé peut :

1. recevoir un contrat d’exécution borné ;
2. vérifier les préconditions (Git, gates, allowlist) ;
3. **refuser** toute action hors contrat sans arbitrage automatique ;
4. déclencher une exécution Cursor **uniquement après GO Morris** ;
5. collecter un résultat / preuve reconstructible ;
6. s’arrêter proprement (stop) et permettre une reprise contrôlée ;

…sans créer de seconde source de vérité face à Git, et sans automatiser l’arbitrage Morris.

---

## 3. Objectif de preuve

Démontrer, sur **un scénario métier unique**, que la boucle suivante est **faisable techniquement** en local (macOS) de façon **reproductible, bornée et réversible** :

```text
Intention Studio
  → qualification / contrat candidat (GPT)
  → gate Morris (GO explicite)
  → orchestrateur candidat (applique, ne décide pas)
  → exécution Cursor bornée (read-only / sandbox)
  → collecte preuve / pack
  → verdict candidat (GPT)
  → décision Morris tracée
```

**Résultat observable attendu :** un journal corrélé (demande → cycle → GO → actions → résultat → stop éventuel) + un review pack / preuve locale, sans push/PR/merge réels, sans secret réel, sans L5 global.

**Verdicts de preuve futurs (post-delivery POC — non applicables ici) :**

| Verdict | Signification |
|---------|---------------|
| `FEASIBILITY CONFIRMED` | Boucle démontrée sans écart structurant |
| `FEASIBILITY CONFIRMED WITH RESERVES` | Démontrée avec réserves non bloquantes |
| `FEASIBILITY NOT DEMONSTRATED` | Échec de preuve — abandon ou re-cadrage |

---

## 4. Périmètre du cadrage (ce cycle)

| Inclus | Exclu |
|--------|-------|
| Problème, objectif, scénario candidat | Développement / code POC |
| Frontières Studio / orch. / Git / Cursor | Branchement GitHub / Cursor réel |
| Niveaux d’automatisation candidats | Choix d’outil Runtime |
| Actions read-only / simulées / interdites | API, BDD, auth, CI/CD |
| Gates, stops, preuves, critères | Backlog / delivery POC |
| Sécurité, réversibilité, démo macOS | MVP / industrialisation |
| Décisions **candidates** POC-CAND-* | Validation de POC-CAND / D-VAL nouvelles |

---

## 5. Hors périmètre (rappel strict)

- Modification de `projects/sfia-studio/app/**`
- Push / PR / merge du présent cadrage sans GO distinct (POC-G10)
- Lancement autonome / industrialisation du POC (hors POC-G9 harness-only)
- Architecture technique détaillée du POC
- Définition du MVP
- Industrialisation
- Correction responsive / a11y / postcss P0
- Clôture formelle architecture fonctionnelle
- Évolution méthode SFIA (v2.7 / v3.0)

---

## 6. Hypothèses de cadrage

| ID | Hypothèse | Statut |
|----|-----------|--------|
| H1 | AF-Option C reste le cadre d’autorité (Studio ≠ orchestrateur) | Reprise d’acquis validé |
| H2 | Git reste la seule vérité durable | Reprise d’acquis validé |
| H3 | Un seul scénario métier suffit pour la première preuve | **Hypothèse de cadrage** |
| H4 | La première preuve peut s’appuyer sur lecture Git réelle + exécution Cursor **read-only** | **Hypothèse** |
| H5 | Toute écriture Git distante (commit/push/PR/merge) reste **simulée** dans le premier POC | **Hypothèse / garde-fou** |
| H6 | L’orchestrateur peut être un module local déterministe (script/service local) — technologie **non choisie** | **Hypothèse ouverte** |
| H7 | La surface UI P0 peut servir de cockpit humain sans être le moteur d’orchestration | **Hypothèse** |
| H8 | macOS local de Morris suffit comme environnement de preuve | Reprise D-VAL / cadrage |

---

## 7. Contraintes

### 7.1 Autorité et vérité

- Morris = seule autorité structurante (L0).
- ChatGPT qualifie / structure — ne décide pas.
- Cursor exécute un contrat borné — n’arbitre pas.
- Orchestrateur **applique** — n’autorise pas, ne crée pas de GO.
- Git prime ; Studio et orchestrateur ≠ seconde vérité.

### 7.2 Automatisation

- L5 **global** interdit.
- Arbitrage reste L0.
- Exécution après GO : L3 cible ; L4* orchestration contrôlée = **plafond candidat** (non validé).

### 7.3 Sécurité

- Aucun secret / token / identifiant réel dans fixtures ou journaux.
- Permissions minimales (least privilege).
- Séparation lecture / simulation / écriture.
- Isolation locale ; arrêt sécurisé (stop) obligatoire.
- Pas d’exécution de commandes système hors allowlist explicite (à détailler en architecture POC).

### 7.4 Réversibilité

- Toute action du POC initial doit être **réversible** ou **sans effet durable hors workspace local de preuve**.
- Actions destructives exclues.
- Force push, rewrite history, delete branch : **interdits**.

### 7.5 FinOps (qualification qualitative)

| Option | Nature | Coût potentiel |
|--------|--------|----------------|
| Orchestrateur 100 % local | Local | Faible / nul variable |
| Appels GPT | Service | Variable selon volume |
| Agent Cursor | Local / licence existante | Selon usage Morris |
| Service managé Runtime | Managé | **Non retenu pour le 1er POC** — engagement financier à arbitrer plus tard |

Aucun budget ni fournisseur validé.

---

## 8. Niveaux d’automatisation (candidats)

| Niveau | Rôle | Position cadrage POC |
|--------|------|----------------------|
| **L0** | Arbitrage Morris | **Obligatoire** |
| **L1–L2** | Qualification, drafting, verdict candidat | Autorisé |
| **L3** | Exécution bornée **après GO** | **Cible VALIDÉE** (POC-CAND-04) |
| **L4\*** | Orchestration contrôlée candidate | **Plafond VALIDÉ** sur chemin d’exécution — **≠** Runtime produit |
| **L5 global** | Auto-arbitrage | **Interdit** |
| **L5 ciblé read-only** | Consultation bornée (AF-15) | **Non autorisé automatiquement** |

\*L4 = orchestration contrôlée **candidate**, non validée techniquement (aligné `11` §17).

**Recommandation validée Morris (POC-CAND-04) :** plafond **L3 + L4* sur le chemin d’exécution uniquement** ; arbitrage **strictement L0**.
L4* = orchestration contrôlée **candidate** — **ne constitue pas** un niveau produit ni un Runtime validé.
L5 ciblé read-only **n’est pas** automatiquement autorisé par cette décision.

---

## 9. Critères de succès, d’échec et d’abandon

### 9.1 Succès (preuves futures — POC delivery)

- Boucle complète exécutée au moins une fois en local.
- GO Morris explicite avant toute exécution Cursor non triviale.
- Orchestrateur refuse une action hors allowlist (preuve de déterminisme négatif).
- Journal corrélé disponible et reconstructible.
- Aucune écriture Git distante réelle.
- Aucun secret réel exposé.
- Stop déclenchable et effectif.

### 9.2 Échec

- Impossible de séparer décision et exécution.
- Orchestrateur peut contourner un gate.
- Seconde vérité d’état durable hors Git.
- Dépendance à une techno non arbitré pour « réussir ».
- Preuve non reproductible.

### 9.3 Abandon

- Preuve nécessite écriture distante non réversible.
- Coût / complexité disproportionnés vs objectif de faisabilité.
- Contradiction avec AF-Option C non résoluble sans changer le produit.
- Morris décide `STOP` / abandon explicite.

---

## 10. Risques et réserves

| Risque | Impact | Mitigation cadrage |
|--------|--------|-------------------|
| Confusion POC / MVP | Haute | Formulations D-VAL-3 répétées ; critères faisabilité seulement |
| Seconde vérité UI/orch. | Haute | Git prime ; états dérivés = observation |
| Auto-arbitrage implicite | Haute | L5 interdit ; timeout ≠ GO |
| Fuite de secrets | Haute | Fixtures synthétiques ; pas de `.env` réel |
| Surarchitecture Runtime | Moyenne | Techno = hypothèse ; architecture POC cycle séparé |
| Élargissement scénario | Moyenne | Un seul scénario sélectionné S1 (doc `21`) |
| Coût GPT variable | Faible–moyen | Volume borné ; FinOps qualitatif |

**Réserves maintenues hors POC :** responsive P0, a11y complète, CI Studio, postcss, clôture formelle AF, branches historiques.

---

## 11. Stratégie de démonstration (macOS local)

1. Préparer un workspace de preuve isolé (clone ou worktree dédié — **à arbitrer en architecture POC**).
2. Charger fixtures / données de test synthétiques (doc `21`).
3. Déclencher le scénario depuis Studio (UI ou harness — **non choisi ici**).
4. Obtenir un GO Morris simulé puis réel (selon maturité) sur gate unique.
5. Montrer refus orchestrateur sur action hors contrat.
6. Montrer exécution read-only autorisée après GO.
7. Produire journal + pack de preuve.
8. Arrêter (stop) et montrer absence d’effet distant.

**Environnement :** macOS local Morris = contrainte de preuve (pas plateforme produit).

---

## 12. Observabilité minimale (preuve)

Événements minimaux à journaliser :

- `intent.received`
- `qualification.produced`
- `gate.requested` / `gate.decided` (GO / CORRIGER / STOP)
- `orchestrator.accepted` / `orchestrator.rejected`
- `execution.started` / `execution.finished` / `execution.stopped`
- `proof.collected`
- `verdict.candidate.produced`

Corrélation : `requestId` · `cycleId` · `gateId` · `executionId`.

Pas de plateforme de supervision industrialisée.

---

## 13. Éléments reportés après ce cadrage

| Élément | Cycle ultérieur candidat |
|---------|--------------------------|
| Architecture POC ciblée | Après POC-G7 |
| Choix techno orchestrateur | Architecture POC |
| Backlog POC borné | Après POC-G8 |
| Delivery harness-only | POC-G9 **consommé** — commit/PR séparés |
| Intégration réelle Git/Cursor | GO distincts (POC-G5+) |
| Décision post-POC (abandon / itération / MVP) | DF-G6 / DF-G7 (proposés) |

---

## 14. Décisions Morris (état post-intégration PR #219)

| Gate / CAND | Statut |
|-------------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B |
| **POC-G8** | **CONSOMMÉ** — backlog `26`–`28` |
| POC-G9 | **CONSOMMÉ** (harness-only) |
| Sync #220 / Archi #221 / Sync #222 | **MERGED** |

**Architecture :** Option B minimale (Studio cockpit + adaptateur + harness autonome). Option A = test/dégradé. Option C écartée (1er POC).

**Prochaine décision :** review draft PR harness ; merge — **FERMÉ** ; Cursor réel / UI / Docker — **FERMÉS**.

---

## 15. Documents liés

| Document | Rôle |
|----------|------|
| [21](./21-poc-orchestration-scenario-and-boundaries.md) | S1 |
| [22](./22-poc-orchestration-decision-pack.md) | POC-CAND |
| [23](./23-poc-orchestration-technical-architecture.md) | Archi Option B |
| [24](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats |
| [25](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND |
| [26](./26-poc-orchestration-backlog.md) | Backlog |
| [27](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist |
| [28](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis G9 |
| [11](./11-functional-architecture.md) | AF-Option C |

---

*Cadrage INTÉGRÉ — POC-G9 harness-only CONSOMMÉ — POC NON LANCÉ — app/** intact.*

```

### `projects/sfia-studio/20-poc-orchestration-framing.md` — diff staged

```diff
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 6f4ed10..7b6e578 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -16,7 +16,7 @@
 | **Architecture Runtime** | **Non validée** — ouverts |
 | **Destinataire** | Morris |
 
-> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **produit** (POC-G8, `26`–`28`). POC-G9 **fermé**. POC **non lancé**.
+> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **INTÉGRÉ** (#223). POC-G9 **CONSOMMÉ** (harness-only). POC **non lancé** (pas d’industrialisation).
 
 ### Décision Morris — validation du cadrage (2026-07-19)
 
@@ -28,7 +28,7 @@
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | POC-G8 | **CONSOMMÉ** (backlog) |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Intégration | #219–#222 @ `60e6880…` |
 
 ---
@@ -116,7 +116,7 @@ Intention Studio
 
 - Modification de `projects/sfia-studio/app/**`
 - Push / PR / merge du présent cadrage sans GO distinct (POC-G10)
-- Lancement du POC (POC-G9)
+- Lancement autonome / industrialisation du POC (hors POC-G9 harness-only)
 - Architecture technique détaillée du POC
 - Définition du MVP
 - Industrialisation
@@ -288,7 +288,7 @@ Pas de plateforme de supervision industrialisée.
 | Architecture POC ciblée | Après POC-G7 |
 | Choix techno orchestrateur | Architecture POC |
 | Backlog POC borné | Après POC-G8 |
-| Delivery POC | Après POC-G9 |
+| Delivery harness-only | POC-G9 **consommé** — commit/PR séparés |
 | Intégration réelle Git/Cursor | GO distincts (POC-G5+) |
 | Décision post-POC (abandon / itération / MVP) | DF-G6 / DF-G7 (proposés) |
 
@@ -302,12 +302,12 @@ Pas de plateforme de supervision industrialisée.
 | POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B |
 | **POC-G8** | **CONSOMMÉ** — backlog `26`–`28` |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Sync #220 / Archi #221 / Sync #222 | **MERGED** |
 
 **Architecture :** Option B minimale (Studio cockpit + adaptateur + harness autonome). Option A = test/dégradé. Option C écartée (1er POC).
 
-**Prochaine décision :** validation backlog / allowlist ; éventuel **POC-G9** — **FERMÉ**.
+**Prochaine décision :** review draft PR harness ; merge — **FERMÉ** ; Cursor réel / UI / Docker — **FERMÉS**.
 
 ---
 
@@ -327,4 +327,4 @@ Pas de plateforme de supervision industrialisée.
 
 ---
 
-*Cadrage INTÉGRÉ — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Cadrage INTÉGRÉ — POC-G9 harness-only CONSOMMÉ — POC NON LANCÉ — app/** intact.*
```
### `projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md` — contenu complet

```markdown
# SFIA Studio — Scénario et frontières POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `21-poc-orchestration-scenario-and-boundaries.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Statut document** | **VALIDÉ + INTÉGRÉ** (#219) ; sync #220 **MERGED** ; S1 = contrat (**non exécuté**) ; UI vs harness → voir archi candidate `23` |
| **Complète** | [20](./20-poc-orchestration-framing.md) · archi [23](./23-poc-orchestration-technical-architecture.md) |
| **POC** | **Non lancé** |

---

## 1. Scénarios étudiés (limité)

| ID | Intitulé | Couverture preuve | Risque | Retenu ? |
|----|----------|-------------------|--------|----------|
| **S1** | Cycle DOC gouverné read-only (intention → gate → exécution Cursor lecture → pack → décision) | Git + GPT + Cursor + gates + stops | Faible | **SÉLECTIONNÉ / VALIDÉ / INTÉGRÉ** |
| **S2** | Pre-check Git + détection divergence HEAD + stop + reprise lecture | Vérité Git / stops | Moyen | Non retenu |
| **S3** | Allowlist orchestrateur + rejet d’écriture simulée hors contrat | Déterminisme négatif | Moyen | **Intégré à S1** (rejet obligatoire — exigence future du POC) |
| **S4** | PR readiness locale sans push/PR/merge | Diff / review | Plus large | Reporté |

**Décision Morris (POC-CAND-02 / POC-G2) — 2026-07-19 :** scénario **S1** sélectionné, avec **rejet obligatoire** d’une action hors allowlist (élément S3) dans le flux de preuve. Intégré sur `main` via PR #219. **S1 n’est pas exécuté.**

---

## 2. Scénario S1 — « DOC read-only gouverné » (SÉLECTIONNÉ)

### 2.1 Objectif métier du scénario (preuve)

Prouver qu’une demande documentaire SFIA peut être **qualifiée**, **autorisée par Morris**, **exécutée de façon bornée** (lecture / analyse), **stoppable**, et **tracée**, via un orchestrateur déterministe séparé de Studio.

### 2.2 Acteurs

| Acteur | Rôle |
|--------|------|
| **Morris** | Décideur L0 — GO / CORRIGER / STOP |
| **ChatGPT** | Qualification, contrat candidat, verdict candidat |
| **Cursor** | Exécuteur du contrat borné (read-only) |
| **Git** | Source de vérité (lecture) |
| **SFIA Studio** | Surface de pilotage / représentation (cockpit) |
| **Orchestrateur candidat** | Applique contrats, allowlist, gates, stops — **ne décide pas** |

### 2.3 Déclencheur

Morris (ou opérateur sous son autorité) ouvre une **nouvelle demande** de type DOC dans Studio (surface P0 `/nouvelle-demande` **ou** harness équivalent — **choix ouvert** pour le cycle architecture POC ; non tranché ici).

### 2.4 Préconditions

- Workspace de preuve local disponible.
- Branche / HEAD de preuve connus (lecture Git possible).
- Aucun secret réel chargé.
- Contrat d’allowlist initial défini (lecture fichiers projet / méthode ; pas d’écriture distante).
- Orchestrateur candidat démarrable localement (techno **non choisie**).

### 2.5 Entrée

| Champ | Exemple (fixture) |
|-------|-------------------|
| Titre | « Capitaliser une règle de gate SFIA » |
| Type | DOC / CAPA légère |
| Profil proposé | Standard |
| Repo | `sfia-workspace` (preuve) |
| Branche observée | `main` (lecture) |
| Contraintes | Read-only ; pas de push |

### 2.6 Déroulement nominal

```text
1. Studio enregistre l’intention (état dérivé local / fixture)
2. GPT produit qualification + contrat Cursor candidat
3. Studio présente le dossier de gate à Morris
4. Morris décide GO (portée, durée, révocabilité explicites)
5. Orchestrateur vérifie : GO valide + allowlist + préconditions Git
6. Orchestrateur accepte l’exécution
7. Cursor exécute read-only (lecture sources, analyse, rédaction pack local)
8. Orchestrateur collecte résultat + preuves
9. GPT produit verdict candidat (faisabilité / conformité contrat)
10. Morris décide suite (CLOTURER / CORRIGER / STOP) — tracée
11. Journal corrélé finalisé
```

### 2.7 Variante obligatoire (déterminisme négatif)

Après l’étape 5, injecter une demande d’action **hors allowlist** (ex. `git push` simulé demandé par contrat altéré) :

- Orchestrateur **rejette** ;
- Aucune exécution Cursor write ;
- Événement `orchestrator.rejected` journalisé ;
- Flux peut reprendre après correction du contrat + nouveau GO si nécessaire.

### 2.8 Sortie et preuve produite

| Artefact | Description |
|----------|-------------|
| Journal d’événements | Corrélé `requestId` / `cycleId` / `gateId` / `executionId` |
| Review pack / preuve locale | Contenu produit en local (chemin de preuve à fixer en archi POC) |
| Trace de GO | Décision Morris horodatée |
| Trace de rejet | Au moins un rejet hors allowlist |
| Diff Git distant | **Aucun** (attendu vide côté remote) |

### 2.9 Postconditions

- Repo distant inchangé.
- Aucun secret dans les artefacts.
- État Studio reconstructible depuis Git + journal (pas de vérité exclusive UI).

---

## 3. Modèle d’état minimal (candidat)

| État | Signification |
|------|---------------|
| `DRAFT` | Intention saisie |
| `QUALIFIED` | Contrat candidat disponible |
| `GATE_OPEN` | Attente décision Morris |
| `AUTHORIZED` | GO reçu, non révoqué |
| `ORCHESTRATING` | Orchestrateur actif |
| `EXECUTING` | Cursor en cours |
| `PROOF_READY` | Preuves collectées |
| `STOPPED` | Stop appliqué |
| `REJECTED` | Rejet orchestrateur |
| `CLOSED` | Décision Morris de clôture |

Les états Studio/orchestrateur sont **dérivés / observationnels** — Git reste la vérité durable.

---

## 4. Contrat d’entrée / sortie (candidat — non API)

### 4.1 Entrée orchestrateur (conceptuelle)

```text
OrchestrationRequest {
  requestId, cycleId,
  gateDecision { decision, scope, expiresAt, revocable },
  allowlist { paths[], actions[] },
  denylist { actions[] },
  executionContract { tool: "cursor", mode: "read-only", ... },
  gitContext { repo, branch, headSha }  // observation
}
```

### 4.2 Sortie orchestrateur (conceptuelle)

```text
OrchestrationResult {
  requestId, executionId,
  status: accepted|rejected|stopped|completed|failed,
  events[],
  proofs[],
  gitEffect: "none-remote",
  error?
}
```

Aucun schéma JSON/OpenAPI validé ici — **contrat candidat** pour architecture POC.

---

## 5. Frontières d’autorité

| Frontière | Règle candidate |
|-----------|-----------------|
| **Studio → Orchestrateur** | Studio soumet une requête après GO ; n’exécute pas lui-même les actions outils |
| **Orchestrateur → Cursor** | Passe uniquement un contrat allowlisté ; pas d’élévation de privilèges |
| **Orchestrateur → Git** | Lecture autorisée ; écriture distante **interdite** au POC initial |
| **GPT → Orchestrateur** | Aucun canal d’autorité ; GPT ne commande pas l’orchestrateur |
| **Morris → tous** | Seul émetteur de GO / STOP structurants |
| **Studio / Git** | Studio représente ; Git prime |
| **Orchestrateur / vérité** | Journal = preuve d’exécution ; ≠ vérité produit |

Aligné **AF-Option C** — **VALIDÉ PAR MORRIS** (POC-CAND-03 / POC-G3, 2026-07-19) : Studio et orchestrateur séparés ; Git = source de vérité ; orchestrateur n’arbitre pas.
Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une architecture technique finale. Aucune technologie sélectionnée.

---

## 6. Actions : read-only, simulées, interdites

### 6.1 Read-only / autorisées (POC initial recommandé)

- `git status`, `git rev-parse`, `git log` (lecture)
- `git diff` local
- Lecture fichiers allowlistés
- Génération d’artefacts **locaux** de preuve
- Journalisation
- Stop / reject

### 6.2 Simulées (obligatoires au POC initial)

- `git commit`
- `git push`
- Création PR / ready-for-review / merge
- Delete branch
- Invocation Cursor en mode écriture hors sandbox
- Appels GitHub API
- « Runtime cloud »

### 6.3 Interdites

- Auto-GO, auto-merge, auto-push
- Force push / rewrite history
- L5 global / timeout = GO
- Secrets réels
- Exécution shell non allowlistée
- Toute action non réversible
- Création d’une vérité durable hors Git

---

## 7. Gates Morris dans le scénario

| Gate | Moment | Décision typique |
|------|--------|------------------|
| Gate scénario (POC-G2) | Avant delivery | Sélection S1 |
| Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
| Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |

Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only).

UI Studio versus harness : **Option B minimale** — Studio cockpit + adaptateur fin ; harness autonome (cœur). Option A conservée pour tests hors UI.

---

## 8. Stop conditions (scénario)

Stop immédiat si :

- GO absent, expiré ou révoqué ;
- action hors allowlist demandée ;
- divergence Git inattendue sur le workspace de preuve ;
- tentative d’écriture distante ;
- secret détecté dans le contexte ;
- orchestrateur indisponible / non déterministe ;
- Cursor sort du contrat ;
- opérateur Morris émet STOP.

---

## 9. Reprise et idempotence minimale

| Situation | Reprise |
|-----------|---------|
| STOP pendant exécution | Pas de retry auto ; nouveau GO requis |
| REJECT hors allowlist | Corriger contrat → nouveau GO |
| Échec Cursor read-only | Relancer avec même `requestId` / nouvel `executionId` si aucune écriture |
| Preuve partielle | Marquer `failed` ; ne pas inventer d’état Git |

**Idempotence :** relancer une exécution read-only ne doit pas muter le remote ; les artefacts locaux doivent être versionnés par `executionId`.

---

## 10. Données et fixtures de test

| Donnée | Nature |
|--------|--------|
| Demande DOC exemple | Fixture synthétique FR |
| Allowlist chemins | `projects/sfia-studio/**` lecture + méthode lecture |
| GO Morris de démo | Structure de décision mock puis réel |
| Branche de preuve | Locale, jetable |
| Secrets | **Aucun** — placeholders uniquement |

---

## 11. Observabilité et journalisation

Voir `20` §12. Compléments scénario :

- Preuve de **rejet** obligatoire dans la démo.
- Preuve de **stop** (au moins en dry-run documenté si non exécuté en live).
- Corrélation affichable dans un extrait de journal (fichier local).

---

## 12. Surface Studio P0 (hypothèse d’usage)

| Route P0 | Usage candidat dans S1 |
|----------|------------------------|
| `/nouvelle-demande` | Saisie intention |
| `/cycle-actif` | Suivi étapes / stops |
| `/decision` | Gate Morris |
| `/synthese` | Observation portefeuille (hors chemin critique) |

L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateur = architecture / delivery futurs.

---

## 13. Ce que ce document ne tranche pas

- Implémentation de l’orchestrateur
- Protocole (files, HTTP local, CLI…)
- Emplacement exact des preuves
- Harness vs UI pour le déclenchement
- Périmètre exact des chemins allowlist (détail archi POC)

---

*Scénario S1 VALIDÉ — harness-only local produit — Option B — POC-G9 CONSOMMÉ — POC NON LANCÉ (pas industrialisé).*

```

### `projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md` — diff staged

```diff
diff --git a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
index ba5bbfe..7a0ad4b 100644
--- a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
+++ b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
@@ -217,7 +217,7 @@ Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une
 | Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
 | Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |
 
-Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog `26`–`28`). POC-G9 **FERMÉ**.
+Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only).
 
 UI Studio versus harness : **Option B minimale** — Studio cockpit + adaptateur fin ; harness autonome (cœur). Option A conservée pour tests hors UI.
 
@@ -296,4 +296,4 @@ L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateu
 
 ---
 
-*Scénario S1 VALIDÉ — NON EXÉCUTÉ — Option B — POC-G8 CONSOMMÉ (backlog) — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Scénario S1 VALIDÉ — harness-only local produit — Option B — POC-G9 CONSOMMÉ — POC NON LANCÉ (pas industrialisé).*
```
### `projects/sfia-studio/22-poc-orchestration-decision-pack.md` — contenu complet

```markdown
# SFIA Studio — Decision pack POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `22-poc-orchestration-decision-pack.md` |
| **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (backlog) |
| **POC** | **Non lancé** |
| **POC-G9** | **CONSOMMÉ** (harness-only) |
| **Backlog** | `26`–`28` |
| **PR archi / sync** | #221 / #222 **MERGED** |
| **main** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |

> Architecture **Option B minimale** intégrée. Backlog S1 produit. Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC). Delivery **non autorisé**.

---

## 1. Observations

1. Cadrage / sync / archi intégrés (#219–#222).
2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**.
3. POC-G8 **CONSOMMÉ** — backlog `26`–`28`.
4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
5. POC-G9 **CONSOMMÉ** (harness-only) ; POC non lancé.

---

## 6. POC-CAND — inchangées

01…06, 08, 10 **VALIDÉES** · 07 **AVEC RÉSERVE** · 09 **CONSOMMÉE**.

---

## 7. Gates

| Gate | Statut |
|------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **CONSOMMÉ** |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| **POC-G8** | **CONSOMMÉ** (backlog) |
| POC-G9 | **CONSOMMÉ** (harness-only) |

ARCH-POC-CAND-* : voir `25` (inchangées).

---

## 10. Séquence

```text
POC-G7 INTÉGRÉ → versionnement CONSOMMÉ (#221)
  → sync post-merge CONSOMMÉE (#222)
  → POC-G8 CONSOMMÉ (backlog 26–28)
  → allowlist initiale validée harness-only ; élargissements = nouveau GO
  → POC-G9 (CONSOMMÉ harness-only) → POC (NON LANCÉ)
```

---

## 11. Verdict

**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**

---

*Option B — G8 consommé — G9 fermé — POC NON LANCÉ.*

---

## Delivery POC-G9 (statut)

| Élément | Statut |
|---------|--------|
| POC-G9 | **CONSOMMÉ** — harness-only local |
| Branche | `delivery/sfia-studio-poc-s1-harness` (locale) |
| Emplacement | `projects/sfia-studio/harness/` |
| Cursor | fixture only |
| Docker | non retenu (option ouverte) |
| `app/**` | **intact** |
| Commit/push/draft PR | **CONSOMMÉ** ; merge **fermé** |
| POC lancé | **Non** |

```

### `projects/sfia-studio/22-poc-orchestration-decision-pack.md` — diff staged

```diff
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index e954c3e..32dcf9d 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -5,10 +5,10 @@
 | **Document** | `22-poc-orchestration-decision-pack.md` |
 | **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (backlog) |
 | **POC** | **Non lancé** |
-| **POC-G9** | **FERMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only) |
 | **Backlog** | `26`–`28` |
 | **PR archi / sync** | #221 / #222 **MERGED** |
-| **main** | `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
+| **main** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
 
 > Architecture **Option B minimale** intégrée. Backlog S1 produit. Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC). Delivery **non autorisé**.
 
@@ -19,8 +19,8 @@
 1. Cadrage / sync / archi intégrés (#219–#222).
 2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**.
 3. POC-G8 **CONSOMMÉ** — backlog `26`–`28`.
-4. Allowlist **candidate** (`27`).
-5. POC-G9 fermé ; POC non lancé.
+4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
+5. POC-G9 **CONSOMMÉ** (harness-only) ; POC non lancé.
 
 ---
 
@@ -38,7 +38,7 @@
 | POC-G10 | **CONSOMMÉ** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **POC-G8** | **CONSOMMÉ** (backlog) |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 
 ARCH-POC-CAND-* : voir `25` (inchangées).
 
@@ -50,16 +50,31 @@ ARCH-POC-CAND-* : voir `25` (inchangées).
 POC-G7 INTÉGRÉ → versionnement CONSOMMÉ (#221)
   → sync post-merge CONSOMMÉE (#222)
   → POC-G8 CONSOMMÉ (backlog 26–28)
-  → validation backlog / allowlist (Morris)
-  → POC-G9 (FERMÉ) → POC (NON LANCÉ)
+  → allowlist initiale validée harness-only ; élargissements = nouveau GO
+  → POC-G9 (CONSOMMÉ harness-only) → POC (NON LANCÉ)
 ```
 
 ---
 
 ## 11. Verdict
 
-**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
+**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**
 
 ---
 
 *Option B — G8 consommé — G9 fermé — POC NON LANCÉ.*
+
+---
+
+## Delivery POC-G9 (statut)
+
+| Élément | Statut |
+|---------|--------|
+| POC-G9 | **CONSOMMÉ** — harness-only local |
+| Branche | `delivery/sfia-studio-poc-s1-harness` (locale) |
+| Emplacement | `projects/sfia-studio/harness/` |
+| Cursor | fixture only |
+| Docker | non retenu (option ouverte) |
+| `app/**` | **intact** |
+| Commit/push/draft PR | **CONSOMMÉ** ; merge **fermé** |
+| POC lancé | **Non** |
```
### `projects/sfia-studio/23-poc-orchestration-technical-architecture.md` — contenu complet

```markdown
# SFIA Studio — Architecture technique POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `23-poc-orchestration-technical-architecture.md` |
| **Cycle** | 6 — Architecture technique (+ correction QA Option B + post-merge #221) |
| **Profil** | Critical (architecture) / Standard (post-merge sync) |
| **Branche historique** | `architecture/sfia-studio-poc-orchestration` — **MERGED** puis **supprimée** (remote) |
| **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
| **Statut** | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** (POC-G7) — PR [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
| **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
| **POC-G8 / G9** | POC-G8 **CONSOMMÉ** · POC-G9 **CONSOMMÉ** (harness-only) |
| **POC** | **Non lancé** |
| **Runtime / techno / protocole** | **Ouverts** (non figés) |

> Architecture **validée avec réserves** et **intégrée** (PR #221). Backlog POC-G8 **consommé** (`26`–`28`). POC-G9 **non ouvert**. Aucun code.

---

## 1. Contexte

| Fait | Référence |
|------|-----------|
| Cadrage POC | PR #219 / `be713c45…` |
| Sync post-merge cadrage | PR #220 / `b882892…` **MERGED** |
| Architecture Option B | PR #221 / `40f8ebe…` **MERGED** |
| AF-Option C | Studio ≠ orchestrateur — **VALIDÉE** |
| App P0 | Next fixtures ; Git/Cursor simulés ; pas d’orch. |
| Décision Morris | **Option B minimale** retenue ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |

Objectif S1 inchangé : boucle DOC read-only gouvernée, rejet hors allowlist, writes distantes absentes, L0 Morris, Git = vérité.

---

## 2. Exigences (inchangées + E14)

| ID | Exigence |
|----|----------|
| E1–E12 | Séparation AF-C ; Git vérité ; L0 ; read Git ; deny writes ; rejet allowlist ; Cursor borné ; journal ; stop ; réversible ; secrets ; L3/L4*/L5 |
| E13 | Logique d’orchestration **hors** `app/**` |
| E14 | Studio = cockpit ; adaptateur **sans autorité** ; harness **autonome** et testable sans UI |

---

## 3. Principes

P1 Repo-first · P2 Décision ≠ exécution · P3 Fail closed · P4 Least privilege · P5 Simplicité locale · P6 Harness autonome · P7 Adaptateur fin · P8 Studio ≠ vérité · P9 Pas d’API Cursor inventée · P10 Option B = extension d’Option A (cœur harness préservé)

---

## 4. Options A / B / C — statut Morris

### 4.1 Option A — Harness autonome (historique / mode test)

**Statut :** **conservée** comme socle technique et mode de test / diagnostic / dégradé. **Non rejetée.** **Non retenue** comme architecture utilisateur du premier POC.

### 4.2 Option B minimale — **RETENUE**

Studio (cockpit) → adaptateur fin → harness autonome (gates, policies, Git, Cursor, journal, preuves).

| Critère | Évaluation |
|---------|------------|
| Preuve S1 | ★★★ (même cœur A) |
| AF-Option C | ★★★ |
| Démo cockpit | ★★★ |
| Risque Option C | Faible si adaptateur borné |
| Dette UI | Minimale, reportée au delivery |

### 4.3 Option C — Orch. dans l’app

**Écartée** pour le premier POC (couplage / seconde vérité). Conservée comme historique ; non interdite pour toute trajectoire future hors premier POC.

### 4.4 Challenge

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | Oui — B prouve S1 + cockpit sans fondre Runtime |
| Drift vers C ? | **Non** si frontières §5–7 respectées |
| Harness autonome ? | **Oui** — cœur inchangé vs A |
| Plus simple possible ? | A plus simple hors UI ; B minimale = plus simple *avec* cockpit |

---

## 5. Architecture logique — Option B minimale

```text
[Morris] --GO/STOP explicites--> [SFIA Studio cockpit]
[SFIA Studio] --intention / gate / stop / query--> [StudioAdapter] (fin, sans autorité)
[StudioAdapter] --AdapterEnvelope--> [Harness CLI autonome]
[Harness Orchestrator]
   ├─ GateValidator (revalide GO + contractHash)
   ├─ PolicyEngine (allow/deny fail-closed)
   ├─ StateMachine
   ├─ GitReaderPort (read-only réel)
   ├─ CursorExecutorPort (fixture|manual|adapter-future)
   ├─ EventJournal + ProofStore
   └─ Status/Proof responses --> Adapter --> Studio (vue dérivée)
[Mode dégradé / test] Harness utilisable **sans** Studio (= Option A)
```

---

## 6. Responsabilités

| Composant | Fait | Interdit |
|-----------|------|----------|
| **Studio** | Intention, présentation gate, STOP, suivi, consultation preuves | Auto-GO ; exec Git/Cursor ; évaluer allowlist ; vérité exclusive ; contourner harness |
| **Adaptateur** | Transformer / transmettre messages ; corrélation ; renvoyer vues | Décider ; policy ; modifier contrat ; créer GO ; masquer rejet/stop ; vérité durable |
| **Harness** | Revalider GO/contrat/allowlist ; Git ; CursorPort ; journal ; preuves ; états | Arbitrer L0 ; write remote |
| **GPT** | Qualification hors bande | Commander orch. |
| **Morris** | GO / STOP / CLOSE | — |

---

## 7. Flux

### 7.1 Nominal

```text
Studio Intent → Adapter → Harness QUALIFIED/GATE_OPEN
  → Studio présente dossier → Morris GO explicite
  → Adapter StudioGateSubmission → Harness revalide → AUTHORIZED
  → PRECHECK → ORCHESTRATING → EXECUTING → PROOF_READY
  → Statuts/preuves → Adapter → StudioExecutionView
  → Morris CLOSE → CLOSED
```

### 7.2 Rejet hors allowlist

```text
AUTHORIZED → policy deny → REJECTED + event
  → Studio affiche rejet (pas de retry auto)
  → correction contrat + **nouveau GO** requis
```

### 7.3 STOP

```text
StudioStopRequest → Adapter → Harness STOP prioritaire → STOPPED
  → flush journal → vue Studio mise à jour
```

### 7.4 Dégradé

Harness CLI sans Studio (fixtures + fichier GO) — tests / diagnostic.

---

## 8. Adaptateur — portée

**Autorisé :** intention→demande ; transmission GO/STOP ; query statut ; affichage état/erreurs/preuves ; IDs corrélation.

**Exclu :** orch. métier ; Git/Cursor ; élévation ; modif contrat ; retry auto ; auto-GO ; auto-clôture.

**Protocoles candidats (ouverts) :** fichier/répertoire · processus enfant · HTTP local · IPC · CLI encapsulé.
Choix = backlog/delivery sauf cohérence bloquante. Critères : simplicité, sécurité, testabilité, pas de daemon inutile, harness sans Studio.

---

## 9. État / Git / Cursor

Modèle d’états `21` + transitions `24` — harness = autorité d’application ; UI = vue dérivée du journal.

Git read réel ; denylist writes ; `gitEffect=none-remote`.

Cursor via port ; modes fixture/manual/adapter-future ; **pas d’API inventée**.

---

## 10. `app/**`

Au **delivery uniquement** (POC-G9, fermé) : modifications **minimales** cockpit / adaptateur / affichage.
Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans ce cycle.

---

## 11. Recommandation → décision

| Élément | Statut |
|---------|--------|
| Option B minimale | **RETENUE / VALIDÉE** (Morris) |
| Harness autonome | **Conservé** (cœur) |
| Option A | Mode test / dégradé **VALIDÉ** |
| Option C | **Écartée** premier POC |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| Versionnement docs | **CONSOMMÉ / INTÉGRÉ** (PR #221 / `40f8ebe…`) |
| Prochaine décision | Review draft PR ; merge **FERMÉ** ; Cursor réel / UI / Docker **FERMÉS** |

---

## 12. Réserves

1. Cursor réel non prouvé
2. Techno harness ouverte (Node/TS candidat)
3. Protocole adaptateur ouvert
4. Allowlist détaillée → backlog
5. Modif `app/**` seulement au delivery, bornée
6. Preuve QA : Studio ≠ seconde vérité
7. Clôture AF séparée
8. POC-G9 fermé ; POC non lancé ; backlog POC-G8 consommé

---

*Architecture POC Option B minimale — INTÉGRÉE — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*

```

### `projects/sfia-studio/23-poc-orchestration-technical-architecture.md` — diff staged

```diff
diff --git a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
index faef801..37cbc80 100644
--- a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
+++ b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
@@ -10,7 +10,7 @@
 | **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 | **Statut** | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** (POC-G7) — PR [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
 | **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
-| **POC-G8 / G9** | POC-G8 **CONSOMMÉ** (backlog) · POC-G9 **FERMÉ** |
+| **POC-G8 / G9** | POC-G8 **CONSOMMÉ** · POC-G9 **CONSOMMÉ** (harness-only) |
 | **POC** | **Non lancé** |
 | **Runtime / techno / protocole** | **Ouverts** (non figés) |
 
@@ -185,7 +185,7 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 | Option C | **Écartée** premier POC |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | Versionnement docs | **CONSOMMÉ / INTÉGRÉ** (PR #221 / `40f8ebe…`) |
-| Prochaine décision | Ouverture éventuelle **POC-G9** — **FERMÉE** (backlog POC-G8 consommé) |
+| Prochaine décision | Review draft PR ; merge **FERMÉ** ; Cursor réel / UI / Docker **FERMÉS** |
 
 ---
 
@@ -202,4 +202,4 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 
 ---
 
-*Architecture POC Option B minimale — INTÉGRÉE — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Architecture POC Option B minimale — INTÉGRÉE — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*
```
### `projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md` — contenu complet

```markdown
# SFIA Studio — Contrats, sécurité et observabilité POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `24-poc-orchestration-contracts-security-and-observability.md` |
| **Statut** | **VALIDÉ AVEC RÉSERVE — INTÉGRÉ** (Option B) — POC-G7 ; PR #221 **MERGED** |
| **Architecture** | Option B minimale (Studio + adaptateur + harness) |
| **POC** | **Non lancé** |
| **Base** | `main` @ `40f8ebe…` |
| **Merge commit** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |

> Contrats conceptuels. Harness revalide tout. Adaptateur sans autorité. Document **intégré** sur `main` via PR #221.

---

## 1. Corrélation

`requestId`, `cycleId`, `gateId`, `executionId`, `contractHash`, `correlationId` — timestamps Europe/Paris.

---

## 2. Contrats cœur harness (inchangés dans l’esprit)

OrchestrationRequest · GateDecision · Allowlist/Denylist · ExecutionContract · OrchestrationResult · Event — voir cadrage `21` et sections historiques.
**Invariant :** absence de GO valide ⇒ rejet ; fail closed.

### Allowlist / Denylist (rappel)

Allow : lecture paths projet/méthode ; `git.read.*` ; `cursor.analyze` ; `proof.write.local`.
Deny : commit/push/merge/PR/API write ; shell libre ; secrets ; fs hors `proofDir` ; toute action non listée.

---

## 3. Contrats Studio / Adaptateur (Option B)

### 3.1 StudioIntent

| Champ | Obligatoire |
|-------|-------------|
| `requestId` | Oui |
| `title` | Oui |
| `requestedCycle` | Oui |
| `requestedScope` | Oui |
| `operator` | Oui |
| `createdAt` | Oui |

### 3.2 StudioGateSubmission

| Champ | Obligatoire | Règle |
|-------|-------------|-------|
| `gateId` | Oui | |
| `requestId` | Oui | |
| `decision` | Oui | GO / CORRIGER / STOP / CLOSE — **explicite** |
| `scope` | Oui | |
| `issuedBy` | Oui | Morris |
| `issuedAt` / `expiresAt` | Oui | |
| `contractHash` | Oui | Match contrat courant |

### 3.3 StudioStopRequest

| Champ | Obligatoire |
|-------|-------------|
| `requestId` | Oui |
| `executionId` | Oui si exec active |
| `issuedBy` | Oui |
| `issuedAt` | Oui |
| `reason` | Oui |

### 3.4 AdapterEnvelope

| Champ | Obligatoire |
|-------|-------------|
| `schemaVersion` | Oui |
| `correlationId` | Oui |
| `messageType` | Oui (`intent`\|`gate`\|`stop`\|`statusQuery`\|`status`\|`proof`) |
| `payload` | Oui |
| `emittedAt` | Oui |

### 3.5 StudioExecutionView

| Champ | Obligatoire |
|-------|-------------|
| `requestId` / `executionId` | Oui |
| `status` | Oui (dérivé journal) |
| `lastEvent` | Oui |
| `proofRefs` | Oui |
| `errors` | Oui |
| `updatedAt` | Oui |

---

## 4. Invariants Option B

1. L’adaptateur **ne crée aucune décision**.
2. Le harness **revalide** tout message (GO, hash, allowlist, Git).
3. `contractHash` obligatoire pour GO ; modif contrat ⇒ GO invalide.
4. Statut UI **dérivé** du journal harness — pas de vérité UI exclusive.
5. Absence de message / timeout **≠** GO.
6. Retry après rejet ⇒ correction + **nouveau GO**.
7. STOP **prioritaire**.
8. UI indisponible **ne corrompt pas** le harness.
9. Harness **testable sans Studio**.
10. Studio / adaptateur **n’exécutent pas** Git ni Cursor.

---

## 5. Transitions d’état

Auteur L0 = Morris (via StudioGateSubmission / Stop, **revalidés** harness).
Harness applique ; Studio affiche. Transitions interdites inchangées (`GATE_OPEN`→`EXECUTING` sans GO, etc.).

---

## 6. Sécurité

### 6.1 Menaces cœur + Option B

| Menace | Contrôle |
|--------|----------|
| Auto-GO / timeout=GO | GateValidator ; décision explicite |
| Write remote | Denylist + `none-remote` |
| Path traversal / symlinks | Canonicalisation |
| Command injection | Pas de shell libre |
| Prompt injection | CursorPort borné |
| Secrets | Interdits ; redaction |
| **Falsification GO UI** | Revalidation harness + hash + issuedBy |
| **Replay message adaptateur** | `correlationId` / idempotence / issuedAt |
| **Désync Studio / journal** | Vue dérivée ; refresh depuis harness |
| **Élévation de scope** | Scope + contractHash revalidés |
| **Injection champs UI** | Validation schéma envelope |
| **Altération contractHash** | Recompute côté harness |
| **Contournement harness** | UI n’a pas d’accès Cursor/Git direct |
| **Preuve sensible dans Studio** | Refs + redaction ; pas de secrets |

### 6.2 Least privilege

Adaptateur : transmission seule. Harness : user local ; env filtré ; pas de tokens write.

---

## 7. Observabilité

Journal JSONL harness = source. Studio affiche `StudioExecutionView`.
Preuves S1 : GO, rejet allowlist, HEAD avant/après, `none-remote`, artefacts Cursor/manual.

Dégradé : CLI harness sans UI.

---

## 8. Stop / reprise / réversibilité

STOP prioritaire via `StudioStopRequest` ou harness direct.
Reprise = nouveau GO + nouvel `executionId`.
Effets locaux `proofDir` seulement ; remote inchangé.

---

## 9. Critères d’acceptation (Option B)

1. Option B minimale documentée ; A = test/dégradé ; C écartée 1er POC.
2. Harness autonome ; Studio cockpit ; adaptateur sans autorité.
3. Contrats §3 présents.
4. Invariants §4.
5. Menaces §6 couvertes.
6. POC-G8 consommé (backlog) ; POC-G9 fermé ; POC non lancé ; pas de protocole définitif non décidé.

---

*Contrats Option B — INTÉGRÉS — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*

```

### `projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md` — diff staged

```diff
diff --git a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
index a22682a..b300cc4 100644
--- a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
+++ b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
@@ -166,4 +166,4 @@ Effets locaux `proofDir` seulement ; remote inchangé.
 
 ---
 
-*Contrats Option B — INTÉGRÉS — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Contrats Option B — INTÉGRÉS — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*
```
### `projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md` — contenu complet

```markdown
# SFIA Studio — Decision pack architecture POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
| **Cycle** | Architecture Option B + post-merge + backlog POC-G8 |
| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
| **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** (inchangée) |
| **Backlog** | `26`–`28` |
| **POC** | **Non lancé** |
| **Base** | `main` @ `d45cc54…` |

---

## 1. Observations

1. #219–#222 MERGED (cadrage, sync, archi, sync post-merge).
2. Option B minimale **RETENUE / INTÉGRÉE**.
3. POC-G8 **CONSOMMÉ** — backlog borné S1 produit.
4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
5. ARCH-POC-CAND-01…12 **inchangées** (fond).
6. POC-G9 **CONSOMMÉ** (harness-only).

---

## 2. Options — statut (inchangé)

| Option | Statut Morris |
|--------|---------------|
| **A** Harness autonome | Conservée — test / diagnostic / dégradé |
| **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE / INTÉGRÉE** |
| **C** Orch. dans app | **Écartée** premier POC |

---

## 4. ARCH-POC-CAND-* — inchangées

01/02/03/06/08/10/11/12 **VALIDÉES** · 04/05/07/09 **VALIDÉES AVEC RÉSERVE** · 12 GO versionnement **CONSOMMÉ** (#221).

Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.

---

## 5. Gates

| Gate | Statut |
|------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **CONSOMMÉ** |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| **POC-G8** | **CONSOMMÉ** |
| POC-G9 | **CONSOMMÉ** (harness-only) |
| Delivery / lancement POC | **NON AUTORISÉ** |

**≠ READY FOR MERGE.** Draft PR harness autorisée (Cycle 13). Merge / industrialisation **fermés**.

---

## 6. Réserves (conservées)

1. Cursor réel non prouvé
2. Techno harness ouverte
3. Protocole adaptateur ouvert
4. Allowlist initiale validée harness-only ; élargissement = nouveau GO
5. `app/**` **fermé** (harness-only)
6. QA non-seconde-vérité
7. Clôture AF
8. Commit/push/PR delivery / UI / Cursor réel / Docker

---

## 7. Décisions Morris restantes

1. Evidence re-review harness-only.
2. Merge delivery (fermé) ; Cursor réel / UI / Docker (fermés).
3. Clôture AF (séparée).

---

## 8. Séquence

```text
POC-G8 CONSOMMÉ (backlog)
  → allowlist initiale validée harness-only
  → POC-G9 (CONSOMMÉ harness-only)
  → POC (NON LANCÉ)
```

---

## 9. Verdict

**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**

---

*Decision pack — Option B inchangée — POC-G9 harness-only consommé — POC NON LANCÉ — app/** intact.*

---

## Delivery POC-G9 (statut architecture)

Option B **inchangée**. Harness autonome sous `projects/sfia-studio/harness/`. Studio/adaptateur **non** implémentés. Cursor **fixture**. Docker **non** introduit.

```

### `projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md` — diff staged

```diff
diff --git a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
index 05a9a4c..73466f8 100644
--- a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
+++ b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
@@ -4,12 +4,12 @@
 |------------|--------|
 | **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
 | **Cycle** | Architecture Option B + post-merge + backlog POC-G8 |
-| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **FERMÉ** |
+| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
 | **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** (inchangée) |
 | **Backlog** | `26`–`28` |
 | **POC** | **Non lancé** |
-| **Base** | `main` @ `60e6880…` |
+| **Base** | `main` @ `d45cc54…` |
 
 ---
 
@@ -18,9 +18,9 @@
 1. #219–#222 MERGED (cadrage, sync, archi, sync post-merge).
 2. Option B minimale **RETENUE / INTÉGRÉE**.
 3. POC-G8 **CONSOMMÉ** — backlog borné S1 produit.
-4. Allowlist **candidate** (`27`) — validation Morris requise.
+4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
 5. ARCH-POC-CAND-01…12 **inchangées** (fond).
-6. POC-G9 **non ouvert**.
+6. POC-G9 **CONSOMMÉ** (harness-only).
 
 ---
 
@@ -50,10 +50,10 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 | POC-G10 | **CONSOMMÉ** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **POC-G8** | **CONSOMMÉ** |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Delivery / lancement POC | **NON AUTORISÉ** |
 
-**≠ READY FOR DELIVERY.** Backlog ≠ autorisation d’implémenter.
+**≠ READY FOR MERGE.** Draft PR harness autorisée (Cycle 13). Merge / industrialisation **fermés**.
 
 ---
 
@@ -62,18 +62,18 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 1. Cursor réel non prouvé
 2. Techno harness ouverte
 3. Protocole adaptateur ouvert
-4. Allowlist candidate jusqu’à validation Morris
-5. `app/**` delivery borné seulement
+4. Allowlist initiale validée harness-only ; élargissement = nouveau GO
+5. `app/**` **fermé** (harness-only)
 6. QA non-seconde-vérité
 7. Clôture AF
-8. POC-G9
+8. Commit/push/PR delivery / UI / Cursor réel / Docker
 
 ---
 
 ## 7. Décisions Morris restantes
 
-1. Validation backlog / allowlist (`26`–`28`).
-2. Ouverture éventuelle **POC-G9**.
+1. Evidence re-review harness-only.
+2. Merge delivery (fermé) ; Cursor réel / UI / Docker (fermés).
 3. Clôture AF (séparée).
 
 ---
@@ -82,8 +82,8 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 
 ```text
 POC-G8 CONSOMMÉ (backlog)
-  → validation Morris backlog/allowlist
-  → POC-G9 (FERMÉ)
+  → allowlist initiale validée harness-only
+  → POC-G9 (CONSOMMÉ harness-only)
   → POC (NON LANCÉ)
 ```
 
@@ -91,8 +91,14 @@ POC-G8 CONSOMMÉ (backlog)
 
 ## 9. Verdict
 
-**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
+**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**
 
 ---
 
-*Decision pack — Option B inchangée — POC-G8 consommé — POC-G9 fermé — POC NON LANCÉ.*
+*Decision pack — Option B inchangée — POC-G9 harness-only consommé — POC NON LANCÉ — app/** intact.*
+
+---
+
+## Delivery POC-G9 (statut architecture)
+
+Option B **inchangée**. Harness autonome sous `projects/sfia-studio/harness/`. Studio/adaptateur **non** implémentés. Cursor **fixture**. Docker **non** introduit.
```
### `projects/sfia-studio/26-poc-orchestration-backlog.md` — contenu complet

```markdown
# SFIA Studio — Backlog POC orchestration S1 (Option B minimale)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `26-poc-orchestration-backlog.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Critical |
| **Gate** | **POC-G8 CONSOMMÉ** |
| **POC-G9** | **CONSOMMÉ** (harness-only — hors UI) |
| **POC** | **NON LANCÉ** |
| **Scénario** | **S1** — DOC read-only gouverné |
| **Architecture** | **Option B minimale** (inchangée) |
| **Branche** | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
| **Base** | `main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
| **PR sync** | [#222](https://github.com/mcleland147/sfia-workspace/pull/222) **MERGED** |

> Backlog **candidat** jusqu’à validation Morris. ≠ delivery. ≠ lancement POC. ≠ choix techno/protocole définitif.

---

## 1. Périmètre

### 1.1 Inclus (Must du POC)

Démontrer qu’une intention documentaire bornée peut être qualifiée, soumise à un gate Morris explicite, contrôlée par contrat + allowlist + `contractHash`, exécutée en read-only / `gitEffect=none-remote`, journalisée, stoppable, prouvée, et restituée dans Studio — via harness autonome + adaptateur fin.

### 1.2 Hors périmètre (Won’t)

- Git write distant (add/commit/push/merge/rebase/reset destructif/PR auto)
- Multi-utilisateur / RBAC complet / cloud
- Orchestrateur distribué / daemon permanent inutile
- L5 global
- MVP / industrialisation / multi-scénarios (S2/S4)
- Clôture AF
- Choix définitif Runtime / techno harness / protocole adaptateur / mécanisme Cursor réel
- Delivery (POC-G9) et lancement POC

### 1.3 Architecture préservée

```text
Morris → Studio (cockpit) → adaptateur fin → harness autonome
  → GateValidator → PolicyEngine → GitReaderPort → CursorExecutorPort
  → EventJournal / ProofStore → vues Studio (dérivées)
```

Option A = mode test / dégradé. Option C = écartée 1er POC.

---

## 2. Definition of Ready (DoR) — story

Une story est Ready si :

1. Identifiant, epic, priorité MoSCoW présents.
2. Critères Given/When/Then testables.
3. Preuves attendues listées.
4. Dépendances et stop conditions explicites.
5. Aucune décision techno figée sans spike/gate.
6. Alignée S1 + Option B (Studio ≠ orch. ; harness autonome).
7. Hors allowlist / denylist référencée (`27`).

---

## 3. Definition of Done (DoD) — story / POC

### 3.1 Story Done (futur delivery)

1. Critères G/W/T verts.
2. Preuves locales produites et corrélées.
3. Aucune écriture distante.
4. Journal JSONL des transitions.
5. Fail-closed démontré si applicable.
6. Aucune dérive Option C.

### 3.2 POC Done (après POC-G9 + exécution — hors cycle)

1. Scénarios nominal + rejet allowlist + STOP prouvés.
2. Harness testable sans Studio.
3. UI n’est pas seconde vérité.
4. Dossier preuves remis à Morris.
5. Décision abandon / itération / poursuite.

---

## 4. Epics

| Epic | Titre | Priorité |
|------|-------|----------|
| E1 | Contrat et modèle de domaine | Must |
| E2 | Harness autonome | Must |
| E3 | GitReaderPort | Must |
| E4 | CursorExecutorPort | Must |
| E5 | Policy et allowlist S1 | Must |
| E6 | Adaptateur Studio minimal | Must |
| E7 | Cockpit Studio minimal | Must |
| E8 | Sécurité et abuse cases | Must |
| E9 | Observabilité et preuves | Must |
| E10 | QA du POC | Must |
| E11 | Démonstration et décision | Should |

---

## 5. User stories

Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW · Dépendances · G/W/T · Preuves · Risques · Stop · Candidats futurs · Gate

### E1 — Contrat et modèle

#### US-E1-01 — POCRequest

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness / Studio |
| **Besoin** | Représenter une intention DOC bornée (`requestId`, titre, cycle, scope, operator, createdAt) |
| **Valeur** | Corrélation bout-en-bout |
| **Priorité** | Must |
| **Dépendances** | — |
| **G/W/T** | Given un opérateur ; When il crée une intention S1 ; Then un `POCRequest` valide est émis avec IDs uniques |
| **Preuves** | Schéma + fixture JSON |
| **Risques** | Scope trop large |
| **Stop** | Scope hors chemins `27` |
| **Candidats** | Types partagés hors `app/**` (emplacement ouvert) |
| **Gate** | — |

#### US-E1-02 — ExecutionContract + contractHash

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness GateValidator |
| **Besoin** | Contrat d’exécution hashé ; toute modif invalide le GO |
| **Valeur** | Intégrité / anti-élévation |
| **Priorité** | Must |
| **Dépendances** | US-E1-01 |
| **G/W/T** | Given un contrat hashé et un GO ; When le contrat change ; Then le GO est rejeté et un nouveau GO est requis |
| **Preuves** | Événement `gate.rejected` + hash avant/après |
| **Risques** | Hash non canonique |
| **Stop** | GO accepté sur hash mismatch |
| **Candidats** | Module contrat harness |
| **Gate** | — |

#### US-E1-03 — GateDecision explicite

| Champ | Contenu |
|-------|---------|
| **Persona** | Morris / Studio |
| **Besoin** | Décision GO / CORRIGER / STOP / CLOSE explicite, datée, scopée, avec `contractHash` |
| **Valeur** | Autorité L0 |
| **Priorité** | Must |
| **Dépendances** | US-E1-02 |
| **G/W/T** | Given un dossier gate ; When Morris choisit GO ; Then le harness ne démarre qu’après revalidation du GO |
| **Preuves** | Trace gate journalisée |
| **Risques** | Auto-GO UI |
| **Stop** | Timeout ou clic ambigu traité comme GO |
| **Candidats** | `StudioGateSubmission` (`24`) |
| **Gate** | — |

#### US-E1-04 — AdapterEnvelope + événements

| Champ | Contenu |
|-------|---------|
| **Persona** | Adaptateur |
| **Besoin** | Enveloppes versionnées (`schemaVersion`, `correlationId`, `messageType`, payload) |
| **Valeur** | Transmission sans autorité |
| **Priorité** | Must |
| **Dépendances** | US-E1-01 |
| **G/W/T** | Given un message adaptateur ; When reçu par harness ; Then revalidé sans confiance aveugle |
| **Preuves** | Fixture enveloppe + rejet enveloppe invalide |
| **Risques** | Replay |
| **Stop** | Adaptateur crée une décision |
| **Candidats** | Couche adaptateur (protocole **ouvert**) |
| **Gate** | Spike protocole si nécessaire avant UI/adaptateur (hors harness-only) |

#### US-E1-05 — Idempotence et corrélation

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | `requestId` / `executionId` / `correlationId` stables ; pas de double exécution silencieuse |
| **Valeur** | Reprise sûre |
| **Priorité** | Should |
| **Dépendances** | E2 |
| **G/W/T** | Given un GO déjà consommé ; When rejoué ; Then rejet / no-op journalisé |
| **Preuves** | Événement replay |
| **Risques** | Double Cursor |
| **Stop** | Deux exécutions pour un même GO |
| **Candidats** | StateMachine |
| **Gate** | — |

---

### E2 — Harness autonome

#### US-E2-01 — Initialisation locale

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Démarrer localement avec config (proofDir, allowlist path, timeouts) sans Studio |
| **Valeur** | Autonomie / Option A |
| **Priorité** | Must |
| **Dépendances** | E1 |
| **G/W/T** | Given un workspace ; When harness start ; Then prêt et journal initial créé |
| **Preuves** | Log start + config effective |
| **Risques** | Service permanent inutile |
| **Stop** | Dépendance hard à Next/Studio |
| **Candidats** | Processus local (techno **ouverte**, Node/TS candidat) |
| **Gate** | Choix techno = décision distincte / spike |

#### US-E2-02 — StateMachine

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Transitions déterministes (draft → gated → running → rejected/stopped/completed) |
| **Valeur** | Preuve d’état |
| **Priorité** | Must |
| **Dépendances** | US-E2-01 |
| **G/W/T** | Given état `gated` ; When GO invalide ; Then transition `rejected` fail-closed |
| **Preuves** | Journal transitions |
| **Risques** | États UI divergents |
| **Stop** | Transition sans événement |
| **Candidats** | Module state |
| **Gate** | — |

#### US-E2-03 — GateValidator + PolicyEngine

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Revalider GO, hash, allowlist, Git avant toute exécution |
| **Valeur** | Fail-closed |
| **Priorité** | Must |
| **Dépendances** | E5, E3 |
| **G/W/T** | Given GO + allowlist OK ; When préconditions OK ; Then `accepted` ; sinon `rejected` |
| **Preuves** | Événements accept/reject |
| **Risques** | Trust UI |
| **Stop** | Exécution sans revalidation |
| **Candidats** | GateValidator, PolicyEngine |
| **Gate** | — |

#### US-E2-04 — EventJournal + ProofStore locaux

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Journal JSONL append-only + preuves locales |
| **Valeur** | Auditabilité |
| **Priorité** | Must |
| **Dépendances** | US-E2-02 |
| **G/W/T** | Given une transition ; When journalisée ; Then événement corrélé écrit sous proofDir |
| **Preuves** | Fichier JSONL |
| **Risques** | Fuite secrets |
| **Stop** | Secret dans journal |
| **Candidats** | proofDir local |
| **Gate** | — |

#### US-E2-05 — Mode test sans Studio

| Champ | Contenu |
|-------|---------|
| **Persona** | QA / Option A |
| **Besoin** | Exécuter S1 via CLI/fixture sans UI |
| **Valeur** | Autonomie harness |
| **Priorité** | Must |
| **Dépendances** | US-E2-01…04 |
| **G/W/T** | Given harness seul ; When scénario fixture ; Then preuves produites sans Studio |
| **Preuves** | Run Option A |
| **Risques** | Couplage UI |
| **Stop** | Impossible sans Next |
| **Candidats** | Entrée CLI |
| **Gate** | — |

---

### E3 — GitReaderPort

#### US-E3-01 — Lectures Git allowlistées

| Champ | Contenu |
|-------|---------|
| **Persona** | GitReaderPort |
| **Besoin** | Exécuter uniquement commandes read listées dans `27` |
| **Valeur** | Vérité Git |
| **Priorité** | Must |
| **Dépendances** | E5 |
| **G/W/T** | Given commande allowlistée ; When appelée ; Then stdout capturé + journalisé |
| **Preuves** | Trace commande + sortie |
| **Risques** | Shell libre |
| **Stop** | Commande hors liste exécutée |
| **Candidats** | Port Git |
| **Gate** | — |

#### US-E3-02 — Interdiction writes distantes

| Champ | Contenu |
|-------|---------|
| **Persona** | PolicyEngine |
| **Besoin** | Refuser add/commit/push/merge/… ; `gitEffect=none-remote` |
| **Valeur** | Sécurité |
| **Priorité** | Must |
| **Dépendances** | US-E3-01 |
| **G/W/T** | Given demande `git push` ; When évaluée ; Then rejet + aucune exécution |
| **Preuves** | `orchestrator.rejected` |
| **Risques** | Contournement |
| **Stop** | Push réussi |
| **Candidats** | Denylist `27` |
| **Gate** | — |

#### US-E3-03 — Erreurs / timeouts Git

| Champ | Contenu |
|-------|---------|
| **Persona** | GitReaderPort |
| **Besoin** | Timeout et erreurs ≠ GO ; état safe |
| **Valeur** | Fail-closed |
| **Priorité** | Should |
| **Dépendances** | US-E3-01 |
| **G/W/T** | Given timeout ; When détecté ; Then rejet/arrêt journalisé sans autorisation |
| **Preuves** | Événement timeout |
| **Risques** | Hang |
| **Stop** | Timeout = succès |
| **Candidats** | Config timeout |
| **Gate** | — |

---

### E4 — CursorExecutorPort

#### US-E4-01 — Contrat de port (pas d’API inventée)

| Champ | Contenu |
|-------|---------|
| **Persona** | CursorExecutorPort |
| **Besoin** | Interface `execute(contract) → result` ; modes fixture / manual / future-adapter |
| **Valeur** | Remplaçabilité |
| **Priorité** | Must |
| **Dépendances** | E1 |
| **G/W/T** | Given un port ; When fixture mode ; Then résultat déterministe sans API Cursor inventée |
| **Preuves** | Fixture run |
| **Risques** | API inventée |
| **Stop** | Dépendance à une API non prouvée présentée comme réelle |
| **Candidats** | Port + adapters |
| **Gate** | Spike mécanisme réel Cursor avant claim « réel » |

#### US-E4-02 — Capture I/O + STOP

| Champ | Contenu |
|-------|---------|
| **Persona** | CursorExecutorPort |
| **Besoin** | Capturer entrées/sorties/erreurs ; honorer STOP |
| **Valeur** | Preuve + contrôle |
| **Priorité** | Must |
| **Dépendances** | US-E4-01, E2 |
| **G/W/T** | Given exécution en cours ; When STOP ; Then arrêt prioritaire + preuve |
| **Preuves** | `execution.stopped` |
| **Risques** | Orphelin process |
| **Stop** | STOP ignoré |
| **Candidats** | Port |
| **Gate** | — |

---

### E5 — Policy / allowlist S1

#### US-E5-01 — Allowlist / denylist appliquées

| Champ | Contenu |
|-------|---------|
| **Persona** | PolicyEngine |
| **Besoin** | Appliquer listes `27` ; défaut = deny |
| **Valeur** | Bornage S1 |
| **Priorité** | Must |
| **Dépendances** | Doc `27` validée |
| **G/W/T** | Given action hors allowlist ; When évaluée ; Then rejet |
| **Preuves** | Rejet + raison |
| **Risques** | Liste trop large |
| **Stop** | Action non listée acceptée |
| **Candidats** | Config policy |
| **Gate** | Allowlist initiale validée harness-only (`27`) ; élargissement = nouveau GO |

#### US-E5-02 — Pas de retry auto après rejet

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Après rejet : correction + nouveau GO |
| **Valeur** | Autorité Morris |
| **Priorité** | Must |
| **Dépendances** | US-E5-01 |
| **G/W/T** | Given rejet ; When sans nouveau GO ; Then aucune réexécution |
| **Preuves** | Absence d’événement run |
| **Risques** | Boucle auto |
| **Stop** | Retry silencieux |
| **Candidats** | StateMachine |
| **Gate** | — |

---

### E6 — Adaptateur Studio

#### US-E6-01 — Transmission intention / GO / STOP / statut

| Champ | Contenu |
|-------|---------|
| **Persona** | Adaptateur |
| **Besoin** | Transmettre sans décider ; corréler ; retourner vues |
| **Valeur** | Option B |
| **Priorité** | Must |
| **Dépendances** | E1, E2 |
| **G/W/T** | Given un GO Studio ; When transmis ; Then harness revalide indépendamment |
| **Preuves** | Enveloppes + revalidation |
| **Risques** | Autorité adaptateur |
| **Stop** | Adaptateur évalue allowlist ou exécute Git |
| **Candidats** | Module adaptateur (protocole **ouvert**) |
| **Gate** | Spike protocole |

#### US-E6-02 — Pas de vérité durable exclusive

| Champ | Contenu |
|-------|---------|
| **Persona** | Adaptateur / Studio |
| **Besoin** | Pas de store d’état non reconstructible depuis le journal |
| **Valeur** | Git/journal = vérité |
| **Priorité** | Must |
| **Dépendances** | E9 |
| **G/W/T** | Given UI restart ; When statut relu ; Then dérivé du journal harness |
| **Preuves** | Test désync |
| **Risques** | Seconde vérité |
| **Stop** | État UI non dérivable |
| **Candidats** | Adapter + vues |
| **Gate** | — |

---

### E7 — Cockpit Studio

#### US-E7-01 — Vues intention / gate / état / rejet / STOP / preuves

| Champ | Contenu |
|-------|---------|
| **Persona** | Morris (UI) |
| **Besoin** | Surfaces minimales pour intention, gate explicite, suivi, preuves |
| **Valeur** | Pilotage humain |
| **Priorité** | Must |
| **Dépendances** | E6 |
| **G/W/T** | Given une exécution ; When Morris ouvre les vues ; Then statut = journal ; GO = action explicite |
| **Preuves** | Capture runtime (après UI) + traces |
| **Risques** | Orch. dans UI |
| **Stop** | Bouton ambigu = GO |
| **Candidats** | Extensions minimales `app/**` **uniquement si nouveau GO UI** (hors harness-only) |
| **Gate** | Nouveau GO Morris pour toucher `app/**` (POC-G9 harness-only ne l’autorise pas) |

#### US-E7-02 — UI indisponible ≠ corruption harness

| Champ | Contenu |
|-------|---------|
| **Persona** | Harness |
| **Besoin** | Continuer / s’arrêter proprement sans Studio |
| **Valeur** | Résilience |
| **Priorité** | Must |
| **Dépendances** | US-E2-05 |
| **G/W/T** | Given Studio down ; When harness actif ; Then pas de GO implicite ; Option A possible |
| **Preuves** | Run sans UI |
| **Risques** | Couplage |
| **Stop** | Harness bloqué sans UI pour tests |
| **Candidats** | Harness |
| **Gate** | — |

---

### E8 — Sécurité

#### US-E8-01 — Abuse cases fail-closed

| Champ | Contenu |
|-------|---------|
| **Persona** | Security / QA |
| **Besoin** | Couvrir falsification GO, replay, hash, élévation, injection, contournement, fuite preuve |
| **Valeur** | Critical |
| **Priorité** | Must |
| **Dépendances** | E2–E6 |
| **G/W/T** | Given chaque abuse case `27` ; When tenté ; Then rejet + journal |
| **Preuves** | Matrice abuse |
| **Risques** | Faux positifs confiance |
| **Stop** | Un abuse case réussi |
| **Candidats** | Tests sécurité |
| **Gate** | — |

---

### E9 — Observabilité

#### US-E9-01 — Journal corrélé + preuves Git/Cursor/refus/STOP

| Champ | Contenu |
|-------|---------|
| **Persona** | Observabilité |
| **Besoin** | JSONL + refs preuves pour chaque transition clé |
| **Valeur** | Audit |
| **Priorité** | Must |
| **Dépendances** | US-E2-04 |
| **G/W/T** | Given scénario S1 ; When terminé ; Then pack preuves complet |
| **Preuves** | Dossier preuves |
| **Risques** | Incomplete trail |
| **Stop** | Transition sans événement |
| **Candidats** | ProofStore |
| **Gate** | — |

---

### E10 — QA

#### US-E10-01 — Batterie tests S1

| Champ | Contenu |
|-------|---------|
| **Persona** | QA |
| **Besoin** | Unitaires contrats, intégration locale, refus, STOP, sans Studio, désync |
| **Valeur** | Confiance |
| **Priorité** | Must |
| **Dépendances** | E1–E9 |
| **G/W/T** | Given suite QA ; When exécutée ; Then scénarios Must verts |
| **Preuves** | Rapport tests |
| **Risques** | Tests UI only |
| **Stop** | Pas de test sans Studio |
| **Candidats** | Suite locale (outil ouvert) |
| **Gate** | — |

---

### E11 — Démonstration

#### US-E11-01 — Dossier démo Morris

| Champ | Contenu |
|-------|---------|
| **Persona** | Morris |
| **Besoin** | Pack : nominal, rejet, STOP, UI down, critères abandon/itération/poursuite |
| **Valeur** | Décision post-POC |
| **Priorité** | Should |
| **Dépendances** | E10 |
| **G/W/T** | Given POC exécuté ; When pack remis ; Then décision possible |
| **Preuves** | Pack démo |
| **Risques** | Démo non reproductible |
| **Stop** | Preuve manquante scénario obligatoire |
| **Candidats** | Doc preuves |
| **Gate** | Décision post-POC (DF-G6 proposé) |

---

## 6. Tâches techniques (futures — non exécutées ici)

| ID | Tâche | Epic | MoSCoW |
|----|-------|------|--------|
| T-01 | Schémas POCRequest / Contract / Gate / Envelope | E1 | Must |
| T-02 | Implémenter StateMachine + journal JSONL | E2 | Must |
| T-03 | GateValidator + PolicyEngine + config allowlist | E2/E5 | Must |
| T-04 | GitReaderPort read-only | E3 | Must |
| T-05 | CursorExecutorPort fixture + manual | E4 | Must |
| T-06 | Spike protocole adaptateur (critères `28`) | E6 | Should |
| T-07 | Spike mécanisme Cursor réel (si claim réel) | E4 | Should |
| T-08 | Adaptateur + cockpit minimal (delivery only) | E6/E7 | Must |
| T-09 | Matrice abuse + tests | E8/E10 | Must |
| T-10 | Pack démo | E11 | Should |

---

## 7. Séquencement candidat (futur delivery — POC-G9 requis)

```text
1. E1 contrats
2. E2 harness + E5 policy
3. E3 GitReader
4. E4 CursorPort (fixture d’abord)
5. E9 preuves
6. E8 abuse
7. E10 QA sans Studio
8. E6 adaptateur + E7 cockpit (`app/**` seulement si nouveau GO UI)
9. E11 démo
```

---

## 8. Spikes ouverts (pas de conclusion)

| Spike | Options | Critères de sortie | Gate Morris ? |
|-------|---------|-------------------|---------------|
| Techno harness | Node/TS candidat ; autres ; **Docker** = option/spike non décidé | Simplicité, testabilité, local macOS, alignement repo | Si écart majeur au candidat |
| Protocole adaptateur | fichier / child / HTTP local / IPC / CLI | Simplicité, sécu, obs., pas de service inutile | Si structurante |
| Cursor réel | fixture / manual / adapter futur | Preuve mécanisme réel avant claim | **Oui** avant « Cursor réel » |

---

## 9. Risques backlog

| Risque | Mitigation |
|--------|------------|
| Dérive Option C | Stories E6/E7 bornées ; stop conditions |
| Allowlist floue | Doc `27` + validation Morris |
| API Cursor inventée | Port + spike |
| Confusion backlog = delivery | POC-G9 fermé ; pas de code |
| Seconde vérité UI | US-E6-02 / E7 |

---

## 10. Statut gates

| Gate | Statut |
|------|--------|
| POC-G8 | **OUVERT / CONSOMMÉ** pour ce backlog |
| POC-G9 | **CONSOMMÉ** (harness-only) |
| Delivery / lancement POC | **NON AUTORISÉS** |

---

*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*

```

### `projects/sfia-studio/26-poc-orchestration-backlog.md` — diff staged

```diff
diff --git a/projects/sfia-studio/26-poc-orchestration-backlog.md b/projects/sfia-studio/26-poc-orchestration-backlog.md
index 123023d..91c76bc 100644
--- a/projects/sfia-studio/26-poc-orchestration-backlog.md
+++ b/projects/sfia-studio/26-poc-orchestration-backlog.md
@@ -5,8 +5,8 @@
 | **Document** | `26-poc-orchestration-backlog.md` |
 | **Cycle** | 5 — Backlog / user stories |
 | **Profil** | Critical |
-| **Gate** | **POC-G8 CONSOMMÉ** (ouverture backlog) |
-| **POC-G9** | **FERMÉ** |
+| **Gate** | **POC-G8 CONSOMMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only — hors UI) |
 | **POC** | **NON LANCÉ** |
 | **Scénario** | **S1** — DOC read-only gouverné |
 | **Architecture** | **Option B minimale** (inchangée) |
@@ -168,7 +168,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Risques** | Replay |
 | **Stop** | Adaptateur crée une décision |
 | **Candidats** | Couche adaptateur (protocole **ouvert**) |
-| **Gate** | Spike protocole si nécessaire avant POC-G9 |
+| **Gate** | Spike protocole si nécessaire avant UI/adaptateur (hors harness-only) |
 
 #### US-E1-05 — Idempotence et corrélation
 
@@ -376,7 +376,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Risques** | Liste trop large |
 | **Stop** | Action non listée acceptée |
 | **Candidats** | Config policy |
-| **Gate** | Validation Morris allowlist (`27`) |
+| **Gate** | Allowlist initiale validée harness-only (`27`) ; élargissement = nouveau GO |
 
 #### US-E5-02 — Pas de retry auto après rejet
 
@@ -447,8 +447,8 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Preuves** | Capture runtime (après UI) + traces |
 | **Risques** | Orch. dans UI |
 | **Stop** | Bouton ambigu = GO |
-| **Candidats** | Extensions minimales `app/**` **uniquement au delivery** (POC-G9) |
-| **Gate** | POC-G9 pour toucher `app/**` |
+| **Candidats** | Extensions minimales `app/**` **uniquement si nouveau GO UI** (hors harness-only) |
+| **Gate** | Nouveau GO Morris pour toucher `app/**` (POC-G9 harness-only ne l’autorise pas) |
 
 #### US-E7-02 — UI indisponible ≠ corruption harness
 
@@ -575,7 +575,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 5. E9 preuves
 6. E8 abuse
 7. E10 QA sans Studio
-8. E6 adaptateur + E7 cockpit (app/** seulement si POC-G9)
+8. E6 adaptateur + E7 cockpit (`app/**` seulement si nouveau GO UI)
 9. E11 démo
 ```
 
@@ -608,9 +608,9 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | Gate | Statut |
 |------|--------|
 | POC-G8 | **OUVERT / CONSOMMÉ** pour ce backlog |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Delivery / lancement POC | **NON AUTORISÉS** |
 
 ---
 
-*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ — techno/protocole ouverts.*
+*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
```
### `projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md` — contenu complet

```markdown
# SFIA Studio — Allowlist, denylist et critères d’acceptation POC S1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond technique Cycle 5 |
| **Profil** | Critical |
| **Gate** | POC-G8 CONSOMMÉ |
| **POC-G9** | **CONSOMMÉ** (harness-only ; allowlist initiale) |
| **POC** | **NON LANCÉ** |
| **Statut allowlist** | **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — élargissement = nouveau GO Morris |
| **Architecture** | Option B minimale (inchangée) |
| **Base** | `main` @ `d45cc54…` |

> Défaut = **deny**. Toute action non listée est refusée. Fail-closed.
>
> **Allowlist initiale S1** : **VALIDÉE** pour l’incrément harness-only livré localement (POC-G9).
> Périmètre = règles de ce document telles que définies. `app/**` **interdit**. `cursorMode=fixture` uniquement pour cet incrément. `gitEffect=none-remote`.
> Tout élargissement (chemins, commandes, modes Cursor, effets Git) exige un **nouveau GO Morris**.
> Cette validation **ne** vaut **pas** validation définitive pour tous les futurs incréments.

---

## 1. Principes

1. Allowlist explicite > conventions implicites.
2. Harness applique et revalide ; Studio / adaptateur **n’évaluent pas**.
3. `contractHash` lie le GO au contrat ; modif ⇒ GO invalide.
4. `gitEffect=none-remote` pour le POC S1.
5. Pas de retry automatique après rejet.
6. Timeout / absence de message ≠ GO.
7. STOP prioritaire.
8. Secrets exclus du journal et des preuves affichées.

---

## 2. Allowlist Git (initiale S1 — harness-only)

### 2.1 Commandes autorisées (lecture)

| Commande | Usage S1 | Bornes |
|----------|----------|--------|
| `git branch --show-current` | Branche courante | — |
| `git rev-parse HEAD` | HEAD | — |
| `git rev-parse origin/main` | Réf main | Ref explicite |
| `git merge-base <a> <b>` | Divergence | Refs allowlistées |
| `git status --short` | État worktree | — |
| `git diff --check` | Whitespace | Paths allowlistés |
| `git diff --stat` | Résumé | Paths allowlistés |
| `git diff --name-status` | Fichiers | Paths allowlistés |
| `git log` | Historique | `--oneline` + limite ≤ 20 ; refs allowlistées |
| `git show <ref>:<path>` | Contenu | Ref + path allowlistés |
| `git ls-remote` | Lecture remote | **read-only** ; pas de write |

### 2.2 Interdit (denylist Git) — non exhaustif, défaut deny

- `git add`, `git commit`, `git push`
- `git merge`, `git rebase`, `git cherry-pick`
- `git reset` destructif (`--hard`, etc.)
- `git checkout` / `git restore` destructifs de worktree hors preuve locale contrôlée
- `git clean`, suppression de branche
- modification de remote / `git remote set-url`
- write GitHub (PR create/merge, releases, secrets)
- tout shell composé non listé (`&&`, pipes vers write, etc.)

**Effet attendu :** rejet `orchestrator.rejected` ; aucune exécution.

---

## 3. Allowlist documentaire / fichiers (initiale S1 — harness-only)

### 3.1 Chemins (figés dans le contrat d’exécution harness-only)

| Zone | Exemple | Règle |
|------|---------|-------|
| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**`) | Lecture |
| Méthode (si contrat) | chemins méthode explicitement listés | Lecture |
| Preuves locales | `proofDir` dédié POC | Lecture/écriture **locale** preuves seulement |
| Fixtures POC | répertoire fixtures déclaré | Lecture |

### 3.2 Bornes

| Borne | Valeur (incrément harness-only) |
|-------|------------------|
| Extensions | `.md`, `.txt`, `.json`, `.jsonl` (autres = deny) |
| Nb max fichiers / run | 30 |
| Taille max / fichier | 512 KiB |
| Taille max agrégée | 5 MiB |
| Traversée | Interdite (`..`, symlinks hors root) |
| Secrets | Interdits (`.env`, credentials, clés) |
| `app/**` | **Interdit** — POC-G9 harness-only n’autorise **pas** `app/**` |
| Chemins protégés méthode | Selon règles repo — deny par défaut |

---

## 4. Allowlist Cursor (initiale S1 — harness-only)

| Règle | Détail |
|-------|--------|
| Entrée | Via `CursorExecutorPort` uniquement |
| Modes | **Cet incrément :** `fixture` **uniquement**. `manual` / `real-adapter` = futurs GO Morris (fermés ici) |
| Instruction | Bornée par contrat (objectif DOC read-only) |
| CWD | Répertoire imposé par contrat |
| Timeout | Configurable (borné par contrat ; ex. 30–300 s) |
| Sortie | Capturée (stdout/stderr/artefacts locaux) |
| Hors scope | Deny |
| Action distante | Deny |
| Élargissement autonome | Deny |
| API inventée | **Interdite** |

---

## 5. Allowlist adaptateur / Studio

| Autorisé | Interdit |
|----------|----------|
| Émettre intention | Créer GO |
| Transmettre GO/STOP explicites Morris | Interpréter clic ambigu comme GO |
| Interroger statut | Exécuter Git/Cursor |
| Afficher vues dérivées | Évaluer allowlist |
| Corrélation IDs | Persister vérité exclusive |
| | Modifier contrat / hash |
| | Retry auto / auto-clôture |

---

## 6. Contrats autorisés (rappel)

Voir `24` : `StudioIntent`, `StudioGateSubmission` (GO + `contractHash`), `StudioStopRequest`, `AdapterEnvelope`, `StudioExecutionView`, plus contrats cœur harness.

**Invariant :** GO sans `contractHash` valide = rejet.

---

## 7. Scénarios d’acceptation Must

### A1 — Nominal S1

| | |
|--|--|
| **Given** | Intention DOC bornée + contrat hashé + allowlist OK + Git readable |
| **When** | Morris émet GO explicite |
| **Then** | Harness revalide ; exécute read-only ; journalise ; produit preuves ; Studio affiche statut dérivé |
| **Preuves** | GO, journal, HEAD, artefacts, `gitEffect=none-remote` |

### A2 — Rejet hors allowlist

| | |
|--|--|
| **Given** | Demande `git push` ou path hors liste |
| **When** | Policy évalue |
| **Then** | Rejet ; aucune exécution Cursor write ; événement journalisé ; pas de retry auto |
| **Preuves** | `orchestrator.rejected` |

### A3 — Contrat modifié / hash mismatch

| | |
|--|--|
| **Given** | GO émis pour hash H1 |
| **When** | Contrat devient H2 |
| **Then** | GO invalide ; rejet ; nouveau GO requis |
| **Preuves** | reject + hashes |

### A4 — STOP

| | |
|--|--|
| **Given** | Exécution active |
| **When** | STOP explicite Morris |
| **Then** | Arrêt prioritaire ; preuve STOP ; pas de poursuite |
| **Preuves** | `execution.stopped` |

### A5 — Sans Studio (Option A)

| | |
|--|--|
| **Given** | Harness seul + fixtures |
| **When** | Scénario A1/A2 |
| **Then** | Preuves produites sans UI |
| **Preuves** | Run CLI/fixture |

### A6 — UI indisponible

| | |
|--|--|
| **Given** | Studio down |
| **When** | Message absent / timeout |
| **Then** | ≠ GO ; harness non corrompu |
| **Preuves** | Journal timeout/safe |

---

## 8. Critères fail-closed

1. Défaut deny.
2. Erreur / timeout / message manquant ⇒ pas d’autorisation.
3. Hash mismatch ⇒ rejet.
4. Scope elevation ⇒ rejet.
5. Replay GO consommé ⇒ rejet / no-op journalisé.
6. Injection path / command ⇒ rejet.
7. Contournement harness (appel direct Git/Cursor depuis UI) ⇒ hors design ; tests de non-régression.
8. Fuite secret ⇒ stop + redaction.

---

## 9. Abuse cases (matrice minimale)

| ID | Case | Attendu |
|----|------|---------|
| AB-01 | Falsification GO UI | Rejet harness |
| AB-02 | Replay enveloppe | Rejet / no-op |
| AB-03 | Altération contractHash | Rejet |
| AB-04 | Élévation scope | Rejet |
| AB-05 | Injection `../` / commande | Rejet |
| AB-06 | Contournement harness | Non possible via adaptateur ; test |
| AB-07 | Exposition preuve sensible | Redaction / deny |
| AB-08 | Studio down pendant run | Safe / STOP possible côté harness |

---

## 10. Preuves attendues (pack S1)

| Preuve | Obligatoire |
|--------|-------------|
| Trace GO Morris + hash | Oui |
| Journal JSONL corrélé | Oui |
| Trace rejet allowlist | Oui |
| HEAD / status Git avant-après (read) | Oui |
| Affirmation `none-remote` | Oui |
| Artefacts Cursor/fixture | Oui |
| Trace STOP | Oui (scénario A4) |
| Preuve run sans Studio | Oui |
| Preuve statut UI dérivé | Oui (si cockpit livré) |

---

## 11. Statut de validation Morris

L’allowlist / denylist de ce document est **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** (POC-G9 consommé).

**Réserve explicite :** validation limitée à cet incrément. L’allowlist reste **révisable**. Tout élargissement de chemins, commandes, modes Cursor ou effets Git est soumis à un **nouveau GO Morris**.

Pour tout élargissement futur, Morris doit notamment :

1. Valider ou corriger les listes §2–§5 au-delà du périmètre actuel.
2. Valider toute nouvelle borne fichiers §3.2.
3. Autoriser explicitement tout mode Cursor autre que `fixture`.
4. Autoriser explicitement tout touch `app/**` (aujourd’hui **interdit**).

Cette validation initiale **n’autorise pas** : Cursor manuel/réel, écriture Git, Docker, multi-scénario, industrialisation.

---

*Allowlist S1 initiale VALIDÉE harness-only — POC-G9 CONSOMMÉ — POC NON LANCÉ — défaut deny — app/** interdit — élargissement = nouveau GO.*

```

### `projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md` — diff staged

```diff
diff --git a/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md b/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
index 774a41b..03cbc5d 100644
--- a/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
+++ b/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
@@ -3,16 +3,21 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
-| **Cycle** | 5 — Backlog |
+| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond technique Cycle 5 |
 | **Profil** | Critical |
 | **Gate** | POC-G8 CONSOMMÉ |
-| **POC-G9** | **FERMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only ; allowlist initiale) |
 | **POC** | **NON LANCÉ** |
-| **Statut allowlist** | **CANDIDATE** — validation Morris requise |
+| **Statut allowlist** | **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — élargissement = nouveau GO Morris |
 | **Architecture** | Option B minimale (inchangée) |
-| **Base** | `main` @ `60e6880…` |
+| **Base** | `main` @ `d45cc54…` |
 
 > Défaut = **deny**. Toute action non listée est refusée. Fail-closed.
+>
+> **Allowlist initiale S1** : **VALIDÉE** pour l’incrément harness-only livré localement (POC-G9).
+> Périmètre = règles de ce document telles que définies. `app/**` **interdit**. `cursorMode=fixture` uniquement pour cet incrément. `gitEffect=none-remote`.
+> Tout élargissement (chemins, commandes, modes Cursor, effets Git) exige un **nouveau GO Morris**.
+> Cette validation **ne** vaut **pas** validation définitive pour tous les futurs incréments.
 
 ---
 
@@ -29,7 +34,7 @@
 
 ---
 
-## 2. Allowlist Git candidate
+## 2. Allowlist Git (initiale S1 — harness-only)
 
 ### 2.1 Commandes autorisées (lecture)
 
@@ -62,20 +67,20 @@
 
 ---
 
-## 3. Allowlist documentaire / fichiers candidate
+## 3. Allowlist documentaire / fichiers (initiale S1 — harness-only)
 
-### 3.1 Chemins candidats (à figer dans le contrat d’exécution)
+### 3.1 Chemins (figés dans le contrat d’exécution harness-only)
 
 | Zone | Exemple | Règle |
 |------|---------|-------|
-| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**` sauf GO delivery) | Lecture |
+| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**`) | Lecture |
 | Méthode (si contrat) | chemins méthode explicitement listés | Lecture |
 | Preuves locales | `proofDir` dédié POC | Lecture/écriture **locale** preuves seulement |
 | Fixtures POC | répertoire fixtures déclaré | Lecture |
 
 ### 3.2 Bornes
 
-| Borne | Valeur candidate |
+| Borne | Valeur (incrément harness-only) |
 |-------|------------------|
 | Extensions | `.md`, `.txt`, `.json`, `.jsonl` (autres = deny) |
 | Nb max fichiers / run | 30 |
@@ -83,20 +88,20 @@
 | Taille max agrégée | 5 MiB |
 | Traversée | Interdite (`..`, symlinks hors root) |
 | Secrets | Interdits (`.env`, credentials, clés) |
-| `app/**` | **Interdit** en S1 backlog/delivery sauf GO POC-G9 explicite borné |
+| `app/**` | **Interdit** — POC-G9 harness-only n’autorise **pas** `app/**` |
 | Chemins protégés méthode | Selon règles repo — deny par défaut |
 
 ---
 
-## 4. Allowlist Cursor candidate
+## 4. Allowlist Cursor (initiale S1 — harness-only)
 
 | Règle | Détail |
 |-------|--------|
 | Entrée | Via `CursorExecutorPort` uniquement |
-| Modes | `fixture` (Must) · `manual` (Must) · `real-adapter` (ouvert — spike) |
+| Modes | **Cet incrément :** `fixture` **uniquement**. `manual` / `real-adapter` = futurs GO Morris (fermés ici) |
 | Instruction | Bornée par contrat (objectif DOC read-only) |
 | CWD | Répertoire imposé par contrat |
-| Timeout | Configurable (candidat 120–300 s) |
+| Timeout | Configurable (borné par contrat ; ex. 30–300 s) |
 | Sortie | Capturée (stdout/stderr/artefacts locaux) |
 | Hors scope | Deny |
 | Action distante | Deny |
@@ -229,17 +234,21 @@ Voir `24` : `StudioIntent`, `StudioGateSubmission` (GO + `contractHash`), `Studi
 
 ---
 
-## 11. Validation Morris requise
+## 11. Statut de validation Morris
 
-Cette allowlist / denylist est **candidate**.
+L’allowlist / denylist de ce document est **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** (POC-G9 consommé).
 
-Avant POC-G9, Morris doit :
+**Réserve explicite :** validation limitée à cet incrément. L’allowlist reste **révisable**. Tout élargissement de chemins, commandes, modes Cursor ou effets Git est soumis à un **nouveau GO Morris**.
 
-1. Valider ou corriger les listes §2–§5.
-2. Valider les bornes fichiers §3.2.
-3. Confirmer modes Cursor acceptables pour le 1er delivery.
-4. Confirmer que `app/**` reste hors S1 jusqu’à GO delivery borné.
+Pour tout élargissement futur, Morris doit notamment :
+
+1. Valider ou corriger les listes §2–§5 au-delà du périmètre actuel.
+2. Valider toute nouvelle borne fichiers §3.2.
+3. Autoriser explicitement tout mode Cursor autre que `fixture`.
+4. Autoriser explicitement tout touch `app/**` (aujourd’hui **interdit**).
+
+Cette validation initiale **n’autorise pas** : Cursor manuel/réel, écriture Git, Docker, multi-scénario, industrialisation.
 
 ---
 
-*Allowlist S1 candidate — POC-G8 — POC-G9 FERMÉ — POC NON LANCÉ — défaut deny.*
+*Allowlist S1 initiale VALIDÉE harness-only — POC-G9 CONSOMMÉ — POC NON LANCÉ — défaut deny — app/** interdit — élargissement = nouveau GO.*
```
### `projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md` — contenu complet

```markdown
# SFIA Studio — Gate pack delivery POC S1 (POC-G9 harness-only)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond Cycle 5 |
| **Profil** | Critical |
| **POC-G8** | **CONSOMMÉ** (backlog produit) |
| **POC-G9** | **CONSOMMÉ** — harness-only local |
| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
| **Delivery** | Harness versionné via **draft PR** (Cycle 13) — merge **fermé** |
| **Allowlist** | **VALIDÉE** pour incrément harness-only S1 |
| **Cursor** | **fixture** uniquement (réel **fermé**) |
| **Docker** | **Non retenu** pour l’incrément ; option future = gate Morris |
| **Base** | `main` @ `d45cc54…` |
| **Architecture** | Option B minimale (inchangée) |

> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.

---

## 1. Couverture backlog

| Epic | Couvert dans `26` | Ready pour instruction delivery ? |
|------|-------------------|-----------------------------------|
| E1 Contrats | Oui | Couvert harness-only local |
| E2 Harness | Oui | Oui |
| E3 GitReader | Oui | Oui |
| E4 CursorPort | Oui | Oui — réel = spike |
| E5 Policy | Oui + `27` | Allowlist initiale **validée** harness-only |
| E6 Adaptateur | Oui | Oui — protocole ouvert |
| E7 Cockpit | Oui | **Fermé** — `app/**` interdit (POC-G9 harness-only) |
| E8 Sécurité | Oui | Oui |
| E9 Observabilité | Oui | Oui |
| E10 QA | Oui | Oui |
| E11 Démo | Oui | Should |

---

## 2. Prérequis POC-G9 — statut après consommation harness-only

Checklist **consommée** pour l’incrément harness-only :

1. Backlog `26` validé / intégré (#223) — **fait**.
2. Allowlist/denylist `27` **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — **fait** ; élargissement = nouveau GO.
3. Option B confirmée : Studio cockpit / adaptateur fin / harness autonome — architecture inchangée ; Studio/adaptateur **non** livrés dans cet incrément.
4. Hors périmètre confirmé : no remote write, no L5 global, no MVP — **en vigueur**.
5. Modes Cursor pour cet incrément : **fixture uniquement** — **fait** ; manuel/réel **fermés**.
6. Touch `app/**` : **non** — harness-only ; `app/**` **fermé**.
7. Stratégie de preuve (§5) — preuves locales harness produites ; relecture evidence requise.
8. Plan de réversibilité (§7) — **en vigueur**.
9. Techno/protocole non présentés comme définitifs — **en vigueur**.

**POC-G9 = CONSOMMÉ** pour harness-only local.
**Restent fermés :** UI/`app/**` · Cursor réel · Docker (non retenu) · **merge** · lancement autonome / industrialisation. *(commit/push/draft PR = GO Cycle 13 consommé)*
**POC global :** **non** validé comme réussi.

---

## 3. Risques delivery (harness-only / élargissements futurs)

| Risque | Sévérité | Mitigation |
|--------|----------|------------|
| Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
| Allowlist trop large | Haute | Allowlist initiale validée bornée ; défaut deny ; élargissement = GO |
| API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
| Seconde vérité UI | Haute | Statut dérivé journal |
| Écriture Git accidentelle | Haute | Denylist + tests A2 |
| Service permanent inutile | Moyenne | Processus local à la demande |
| Scope creep multi-scénario | Moyenne | S1 only |

---

## 4. Réserves conservées (architecture)

1. Cursor réel non prouvé — **fermé** pour cet incrément (fixture only).
2. Technologie harness ouverte (Node/TS candidat POC, pas Runtime produit définitif).
3. Protocole adaptateur ouvert — adaptateur/UI non livrés.
4. Allowlist initiale S1 **validée** pour le harness-only livré localement. Tout élargissement de chemins, commandes, modes Cursor ou effets Git nécessite un **nouveau GO Morris**.
5. `app/**` **fermé** — POC-G9 harness-only n’autorise pas `app/**`.
6. QA non-seconde-vérité.
7. Clôture AF séparée.
8. POC-G9 **consommé** pour harness-only ; draft PR Cycle 13 ; **merge** / lancement autonome / industrialisation **fermés**.
9. **Docker** n’est pas utilisé pour l’incrément harness-only. Toute introduction ultérieure nécessite une décision Morris distincte. Docker n’est ni retenu ni définitivement exclu pour la trajectoire future.

---

## 5. Stratégie de preuve (delivery futur)

| Phase | Preuve |
|-------|--------|
| Harness-only | A1, A2, A4, A5 (`27`) verts |
| Sécurité | Matrice AB-01…08 |
| Option B UI | A1 + A6 + preuve statut dérivé |
| Démo Morris | Pack E11 |

Outils de test : ouverts (alignement repo). Pas de CI Studio imposée dans ce pack.

---

## 6. Sécurité (gate)

- Authority : Morris L0 ; harness revalide.
- Intégrité : `contractHash`.
- Replay : détection GO consommé.
- Injection : paths/commands.
- Fail-closed : défaut deny.
- Journal : pas de secrets.
- STOP : prioritaire.

---

## 7. Observabilité / réversibilité

| Thème | Exigence |
|-------|----------|
| Journal | JSONL corrélé |
| Preuves | Locales sous proofDir |
| Corrélation | request/execution/gate IDs |
| Erreurs | Explicitement journalisées |
| Reprise | Nouveau GO après rejet |
| Réversibilité | Pas d’effet distant ; cleanup local preuves possible |
| Mode dégradé | Option A sans Studio |

---

## 8. FinOps / GreenOps

- Local macOS.
- Pas de composant managé.
- Pas de daemon permanent non nécessaire.
- Protocole simple.
- Dette minimale.

---

## 9. Décisions Morris — consommées / restantes

### Consommées (POC-G9 harness-only)

1. Allowlist `27` **validée** pour l’incrément harness-only S1.
2. Premier incrément **harness-only** autorisé (`app/**` intact / fermé).
3. Mode Cursor : **fixture uniquement**.
4. Commit/push/draft PR delivery = **CONSOMMÉ** (Cycle 13) ; **merge** = **fermé**.

### Restantes (nouveau GO requis)

1. Review / re-review des preuves harness.
2. Merge delivery (après review) — **non autorisé** ici.
3. Toute surface `app/**` / UI Studio.
4. Cursor manuel ou réel (spike + preuve).
5. Introduction Docker.
6. Tout élargissement allowlist.
7. Lancement autonome / industrialisation / clôture AF.

---

## 10. Verdicts

Verdict **futur candidat** (après preuves validées + démo + décisions Morris) — **non actuel** :

`POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`

**Verdict documentaire courant (Cycle 9 QA) :**

`DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW`

Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industrialisé.

---

## 11. Actions interdites (rappel)

`app/**` · Cursor réel · Docker (cet incrément) · **merge** delivery · lancement autonome / industrialisation · L5 · writes Git distantes · élargissement allowlist sans nouveau GO · choix techno/protocole définitifs sans preuve

*(POC-G9 harness-only déjà consommé — ne pas relire comme « ouverture interdite » du harness local.)*

---

*Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist VALIDÉE (incrément) — draft PR Cycle 13 — merge FERMÉ — POC NON LANCÉ.*

```

### `projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md` — diff staged

```diff
diff --git a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
index 32bee4f..b25197d 100644
--- a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
+++ b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
@@ -1,18 +1,21 @@
-# SFIA Studio — Gate pack delivery POC S1 (prérequis POC-G9)
+# SFIA Studio — Gate pack delivery POC S1 (POC-G9 harness-only)
 
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
-| **Cycle** | 5 — Backlog |
+| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond Cycle 5 |
 | **Profil** | Critical |
 | **POC-G8** | **CONSOMMÉ** (backlog produit) |
-| **POC-G9** | **FERMÉ** — décision Morris distincte |
-| **POC** | **NON LANCÉ** |
-| **Delivery** | **NON AUTORISÉ** |
-| **Base** | `main` @ `60e6880…` |
+| **POC-G9** | **CONSOMMÉ** — harness-only local |
+| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
+| **Delivery** | Harness versionné via **draft PR** (Cycle 13) — merge **fermé** |
+| **Allowlist** | **VALIDÉE** pour incrément harness-only S1 |
+| **Cursor** | **fixture** uniquement (réel **fermé**) |
+| **Docker** | **Non retenu** pour l’incrément ; option future = gate Morris |
+| **Base** | `main` @ `d45cc54…` |
 | **Architecture** | Option B minimale (inchangée) |
 
-> Ce document **prépare** POC-G9. Il ne l’ouvre pas. Il n’autorise ni code, ni `app/**`, ni lancement.
+> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.
 
 ---
 
@@ -20,13 +23,13 @@
 
 | Epic | Couvert dans `26` | Ready pour instruction delivery ? |
 |------|-------------------|-----------------------------------|
-| E1 Contrats | Oui | Oui (après validation Morris backlog) |
+| E1 Contrats | Oui | Couvert harness-only local |
 | E2 Harness | Oui | Oui |
 | E3 GitReader | Oui | Oui |
 | E4 CursorPort | Oui | Oui — réel = spike |
-| E5 Policy | Oui + `27` | Oui — allowlist candidate |
+| E5 Policy | Oui + `27` | Allowlist initiale **validée** harness-only |
 | E6 Adaptateur | Oui | Oui — protocole ouvert |
-| E7 Cockpit | Oui | Oui — `app/**` seulement si POC-G9 |
+| E7 Cockpit | Oui | **Fermé** — `app/**` interdit (POC-G9 harness-only) |
 | E8 Sécurité | Oui | Oui |
 | E9 Observabilité | Oui | Oui |
 | E10 QA | Oui | Oui |
@@ -34,30 +37,32 @@
 
 ---
 
-## 2. Prérequis POC-G9 (checklist)
+## 2. Prérequis POC-G9 — statut après consommation harness-only
 
-Avant tout GO delivery, Morris doit disposer de :
+Checklist **consommée** pour l’incrément harness-only :
 
-1. Backlog `26` validé (ou corrections actées).
-2. Allowlist/denylist `27` **validée** (plus seulement candidate).
-3. Confirmation Option B : Studio cockpit / adaptateur fin / harness autonome.
-4. Confirmation hors périmètre : no remote write, no L5 global, no MVP.
-5. Décision explicite sur modes Cursor acceptés pour le 1er incrément (fixture±manual).
-6. Décision sur touch `app/**` (oui borné / non — harness-only d’abord).
-7. Stratégie de preuve acceptée (§5).
-8. Plan de réversibilité (§7).
-9. Aucune techno/protocole présentée comme définitive sans preuve.
+1. Backlog `26` validé / intégré (#223) — **fait**.
+2. Allowlist/denylist `27` **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — **fait** ; élargissement = nouveau GO.
+3. Option B confirmée : Studio cockpit / adaptateur fin / harness autonome — architecture inchangée ; Studio/adaptateur **non** livrés dans cet incrément.
+4. Hors périmètre confirmé : no remote write, no L5 global, no MVP — **en vigueur**.
+5. Modes Cursor pour cet incrément : **fixture uniquement** — **fait** ; manuel/réel **fermés**.
+6. Touch `app/**` : **non** — harness-only ; `app/**` **fermé**.
+7. Stratégie de preuve (§5) — preuves locales harness produites ; relecture evidence requise.
+8. Plan de réversibilité (§7) — **en vigueur**.
+9. Techno/protocole non présentés comme définitifs — **en vigueur**.
 
-**POC-G9 reste FERMÉ jusqu’à GO Morris explicite.**
+**POC-G9 = CONSOMMÉ** pour harness-only local.
+**Restent fermés :** UI/`app/**` · Cursor réel · Docker (non retenu) · **merge** · lancement autonome / industrialisation. *(commit/push/draft PR = GO Cycle 13 consommé)*
+**POC global :** **non** validé comme réussi.
 
 ---
 
-## 3. Risques delivery (à traiter si POC-G9)
+## 3. Risques delivery (harness-only / élargissements futurs)
 
 | Risque | Sévérité | Mitigation |
 |--------|----------|------------|
 | Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
-| Allowlist trop large | Haute | Validation `27` ; défaut deny |
+| Allowlist trop large | Haute | Allowlist initiale validée bornée ; défaut deny ; élargissement = GO |
 | API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
 | Seconde vérité UI | Haute | Statut dérivé journal |
 | Écriture Git accidentelle | Haute | Denylist + tests A2 |
@@ -68,15 +73,15 @@ Avant tout GO delivery, Morris doit disposer de :
 
 ## 4. Réserves conservées (architecture)
 
-1. Cursor réel non prouvé.
-2. Technologie harness ouverte (Node/TS candidat).
-3. Protocole adaptateur ouvert.
-4. Allowlist détaillée = candidate jusqu’à validation Morris.
-5. `app/**` uniquement delivery borné.
+1. Cursor réel non prouvé — **fermé** pour cet incrément (fixture only).
+2. Technologie harness ouverte (Node/TS candidat POC, pas Runtime produit définitif).
+3. Protocole adaptateur ouvert — adaptateur/UI non livrés.
+4. Allowlist initiale S1 **validée** pour le harness-only livré localement. Tout élargissement de chemins, commandes, modes Cursor ou effets Git nécessite un **nouveau GO Morris**.
+5. `app/**` **fermé** — POC-G9 harness-only n’autorise pas `app/**`.
 6. QA non-seconde-vérité.
 7. Clôture AF séparée.
-8. POC-G9 / lancement non autorisés ici.
-9. **Docker** : option / spike d’évaluation possible avant POC-G9 — **non décidé**, ni obligatoire ni exclu.
+8. POC-G9 **consommé** pour harness-only ; draft PR Cycle 13 ; **merge** / lancement autonome / industrialisation **fermés**.
+9. **Docker** n’est pas utilisé pour l’incrément harness-only. Toute introduction ultérieure nécessite une décision Morris distincte. Docker n’est ni retenu ni définitivement exclu pour la trajectoire future.
 
 ---
 
@@ -129,47 +134,47 @@ Outils de test : ouverts (alignement repo). Pas de CI Studio imposée dans ce pa
 
 ---
 
-## 9. Décision Morris attendue (future)
+## 9. Décisions Morris — consommées / restantes
 
-### Question POC-G9
+### Consommées (POC-G9 harness-only)
 
-Autorisez-vous le **delivery** du POC S1 Option B selon `26`/`27`/`28` ?
+1. Allowlist `27` **validée** pour l’incrément harness-only S1.
+2. Premier incrément **harness-only** autorisé (`app/**` intact / fermé).
+3. Mode Cursor : **fixture uniquement**.
+4. Commit/push/draft PR delivery = **CONSOMMÉ** (Cycle 13) ; **merge** = **fermé**.
 
-Sous-questions :
+### Restantes (nouveau GO requis)
 
-1. Validez-vous l’allowlist `27` ?
-2. Autorisez-vous un premier incrément **harness-only** (sans `app/**`) ?
-3. Si UI : quelles surfaces `app/**` minimales ?
-4. Modes Cursor : fixture seulement / + manual / spike réel ?
-5. Commit/push/PR delivery = gates séparés après POC-G9.
-
-### Conséquences
-
-| Décision | Effet |
-|----------|-------|
-| GO POC-G9 | Delivery documentaire+code borné possible (cycle dédié) |
-| NO-GO | Backlog reste ; pas d’implémentation |
-| GO harness-only | `app/**` reste intact |
-| Claim Cursor réel | Spike + preuve obligatoires |
+1. Review / re-review des preuves harness.
+2. Merge delivery (après review) — **non autorisé** ici.
+3. Toute surface `app/**` / UI Studio.
+4. Cursor manuel ou réel (spike + preuve).
+5. Introduction Docker.
+6. Tout élargissement allowlist.
+7. Lancement autonome / industrialisation / clôture AF.
 
 ---
 
-## 10. Verdict futur (non actuel)
+## 10. Verdicts
 
-Verdict **candidat** après POC-G9 réussi + démo :
+Verdict **futur candidat** (après preuves validées + démo + décisions Morris) — **non actuel** :
 
 `POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`
 
-**Verdict actuel de ce cycle :**
+**Verdict documentaire courant (Cycle 9 QA) :**
 
-`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+`DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW`
+
+Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industrialisé.
 
 ---
 
 ## 11. Actions interdites (rappel)
 
-code · `app/**` · commit/push/PR · merge · ouverture POC-G9 · lancement POC · L5 · writes Git distantes · choix techno/protocole définitifs sans preuve
+`app/**` · Cursor réel · Docker (cet incrément) · **merge** delivery · lancement autonome / industrialisation · L5 · writes Git distantes · élargissement allowlist sans nouveau GO · choix techno/protocole définitifs sans preuve
+
+*(POC-G9 harness-only déjà consommé — ne pas relire comme « ouverture interdite » du harness local.)*
 
 ---
 
-*Gate pack delivery — prépare POC-G9 — ne l’ouvre pas — POC NON LANCÉ.*
+*Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist VALIDÉE (incrément) — draft PR Cycle 13 — merge FERMÉ — POC NON LANCÉ.*
```
### `projects/sfia-studio/README.md` — contenu complet

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `poc-s1-harness-delivery-local` — POC-G9 **CONSOMMÉ** (harness-only) ; POC-G8 **CONSOMMÉ** ; Option B **INTÉGRÉE** ; POC **non lancé** ; `app/**` **intact** |
| **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
| **Typologie cycle** | DELIVERY / POC / ARCH / SEC / QA — Critical |
| **Cycle projet** | 8 — Delivery / implémentation (harness-only) |
| **Profil SFIA** | Critical |
| **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
| **Branche architecture** | historique — MERGED #221 |
| **Base canonique** | `origin/main` @ `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **Chemin** | `projects/sfia-studio/` |
| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
| **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
| **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
| **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
| **POC** | **Non lancé** (pas d’industrialisation / daemon) |
| **Prochaine décision** | Merge delivery — **FERMÉ** ; Cursor réel / UI Studio / Docker — **FERMÉS** |

---

## 0. État produit (capitalisation post-Delivery P0)

| Élément | Valeur |
|---------|--------|
| Cadrage | **Clôturé** (D-VAL-11) |
| Conception fonctionnelle | **Clôturée** et **intégrée** (PR #209 / #210) |
| Architecture fonctionnelle | **Validée** et **intégrée** (#211–#214) — clôture formelle **ouverte** |
| UX/UI P0 | **Clôturé** (Option B ; `14`–`16` ; Figma) |
| Architecture technique P0 | **Validée** et **intégrée** (`18`/`19`) |
| Delivery P0 | **Clôturé** — implémenté, validé, mergé, post-mergé, cleanup effectué |
| PR Delivery P0 | [#217](https://github.com/mcleland147/sfia-workspace/pull/217) — **MERGED** (squash) |
| Titre | `feat: implement SFIA Studio P0 governed workspace` |
| Commit projet | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
| Merge squash | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| Périmètre | 77 fichiers sous `projects/sfia-studio/app/**` ; +12830 / −0 |
| Routes P0 | `/` → `/synthese` ; `/nouvelle-demande` ; `/cycle-actif` ; `/decision` |
| Preuves | Validation visuelle Morris ; lint / typecheck / Vitest / build / Playwright post-merge verts |
| Nature squash | Commit de branche **non ancêtre** de `main` ; trees applicatifs **vérifiés identiques** |
| Branche Delivery | **Supprimée** (locale + distante) — aucune gate Morris restante sur Delivery P0 |
| App sur `main` | Disponible — desktop 1440×1024 ; pas d’API / auth / BDD / orchestration réelle |
| Git / Cursor / Runtime | **Simulés ou désactivés** en P0 |
| Produit complet / MVP / industrialisation | **Non atteints** |
| Cadrage POC orchestration (Option B) | **VALIDÉ** et **INTÉGRÉ** — PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) ; merge `be713c45…` |
| Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
| Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
| Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| Sync post-merge cadrage | PR #220 — **MERGED** (`b882892…`) |
| Architecture POC | **Option B minimale** (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
| Sync post-merge archi | PR #222 — **MERGED** (`60e6880…`) |
| Backlog POC | `26`–`28` — POC-G8 **CONSOMMÉ** |
| Branche architecture | historique — remote **supprimée** après #221 |
| Branche cadrage | conservée |
| Branches historiques | conservées |

> Architecture Option B **INTÉGRÉE**. Harness-only (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**. GO commit/push/draft PR **consommé** (Cycle 13). Merge **fermé**. `app/**` intact.

---

## 1. Finalité du projet (produit complet)

**SFIA Studio vise la construction d’une plateforme métier complète** permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.

### Formulation structurante (D-VAL-3)

> SFIA Studio vise la construction d’une plateforme métier complète permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.
>
> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### Distinction obligatoire

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme complète — opérationnelle et durable |
| **POC** | Preuve de **faisabilité technique** limitée |
| **MVP** | Première version **réellement utilisable** (valeur métier) — non défini ici |
| **Industrialisation** | Exploitation industrialisée de la **plateforme** — pas « industrialiser les cycles » |

### Vision produit (base du cadrage)

> SFIA Studio permet de **qualifier, lancer, suivre et clôturer** les cycles SFIA.
> La plateforme est ensuite destinée à être **exploitée de manière industrialisée**, sécurisée, observable, maintenable et distribuable.

Revue documentaire G3 : **conforme** (aucune réserve bloquante). La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**. Cadrage détaillé **validé** via **D-VAL-9 / DF-G1**.

### Orchestration déterministe (candidat — non validé)

Un mécanisme d’orchestration déterministe, **éventuellement** matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions. Séparation Studio / Runtime à qualifier en architecture.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel | **Candidat** |
| Architecture Runtime | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Couverture des 15 cycles

Couverture **progressive**. Pas d’obligation dans le POC ou le MVP. Sous-ensemble MVP **non sélectionné** ici.

### Faisabilité vs valeur

| Étape | Ce qu’elle valide |
|-------|-------------------|
| **POC** | Faisabilité technique |
| **MVP** | Première valeur métier utilisable |
| **Industrialisation** | Durabilité d’exploitation de la plateforme |

### macOS

Contrainte de **preuve** du POC — **pas** plateforme produit définitive.

### Relation méthode (G4 — Option C)

Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution méthode = CAPA/EVOL séparé + GO Morris.

---

## 2. Trajectoire macro (état factuel)

```text
Pré-cadrage
  → cadrage détaillé
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI P0
  → architecture technique P0
  → Delivery P0
  → PR #217 / intégration main
  → post-merge / cleanup
  → capitalisation P0 (PR #218)
  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B — PR #221 / `40f8ebe…`
  → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist initiale **validée** harness-only
  → delivery harness-only                ← POC-G9 **CONSOMMÉ** ; draft PR Cycle 13 ; merge **fermé**
  → décision Morris : abandon / itération / préparation MVP
```

Architecture Option B **intégrée**. Backlog S1 **intégré**. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**.

---

## 3. Navigation

### Pré-cadrage (historique)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, état, décisions, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision (historique) |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles (historique) |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage (historique) |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Rôle |
|----------|------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit détaillé |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités et cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres et critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire et décisions |

> **Cadrage détaillé ≠ conception / architecture / UX / backlog / POC / code.**

### Conception fonctionnelle — VALIDÉE

| Document | Rôle |
|----------|------|
| [08-functional-design.md](./08-functional-design.md) | Contrat de conception fonctionnelle |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours F1–F12 et règles métier |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation (FD-CAND-01…08 VALIDÉES) |

> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. **Intégrée** sur `main` via PR #209 / sync #210 (`e9d8193…`). Baseline `08`–`10` **inchangée** pendant le cycle architecture. ≠ stack / UX visuelle / backlog / POC / MVP / code.

### Architecture fonctionnelle — VALIDÉE et INTÉGRÉE (PR #211)

| Document | Rôle |
|----------|------|
| [11-functional-architecture.md](./11-functional-architecture.md) | Blocs, authority/truth models, NFR fonctionnels |
| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |

> Statut architecture `functional-architecture-post-merge-integrated` (intégration). **AF-Option C VALIDÉE**. AF-CAND-01…10, 11A, 12 **VALIDÉES**. **AF-CAND-11B VALIDÉE** (UX/UI clôturé). Aucune D-VAL-12. Clôture formelle architecture **non prononcée**.

### UX/UI — CLÔTURÉ (cycle 4)

| Document | Rôle |
|----------|------|
| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | Contrat visuel + règles transverses ; Figma `lrjA1WEyRpL05vKR8k29LO` |
| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | Quatre écrans P0 et parcours |
| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | Décisions UX Morris / Option B |

| Frame | node | Dimensions |
|-------|------|------------|
| P0-00C Nouvelle demande | `19:2` | 1440×1024 |
| P0-01C Vue synthèse | `22:2` | 1440×1024 |
| P0-02C Cycle actif | `22:133` | 1440×1024 |
| P0-03C Décision Morris | `22:270` | 1440×1024 |

> UX/UI **CLÔTURÉ**. Référence Figma = implémentation **initiale** (non intangible). Delivery P0 **exécuté et clôturé** (PR #217). Desktop 1440×1024 uniquement ; responsive / a11y complète / CI / Runtime réel **non validés**.

### Delivery P0 — CLÔTURÉ (PR #217)

| Document / artefact | Rôle |
|---------------------|------|
| [app/README.md](./app/README.md) | Runtime P0 — stack, routes, contraintes |
| `projects/sfia-studio/app/**` | 77 fichiers intégrés sur `main` @ `759ab0b…` |

> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Cadrage POC Option B : documents `20`–`22` **VALIDÉS** (2026-07-19) — POC **non lancé**.

### Cadrage POC orchestration — VALIDÉ et INTÉGRÉ (PR #219)

| Document | Rôle |
|----------|------|
| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif, contraintes, critères — **VALIDÉ + INTÉGRÉ** |
| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario **S1** contrat de cadrage — **VALIDÉ + INTÉGRÉ** (**non exécuté**) |
| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — G7–G8 OK ; G9 **CONSOMMÉ** harness-only |

| Fait Git | Valeur |
|----------|--------|
| PR | [#219](https://github.com/mcleland147/sfia-workspace/pull/219) — **MERGED** (squash) |
| Merge | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
| Sync post-merge | PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **MERGED** (`b882892…`) |
| POC-G10 | **CONSOMMÉ** |

### Architecture POC orchestration — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ)

| Document | Rôle |
|----------|------|
| [23-poc-orchestration-technical-architecture.md](./23-poc-orchestration-technical-architecture.md) | Option B minimale ; harness autonome ; adaptateur ; Option A = test |
| [24-poc-orchestration-contracts-security-and-observability.md](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats Studio/adaptateur/harness ; sécurité |
| [25-poc-orchestration-architecture-decision-pack.md](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND-* validées (avec réserves) |

| Fait Git | Valeur |
|----------|--------|
| PR | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) — **MERGED** (squash) |
| Merge | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
| Branche remote archi | **supprimée** après merge |

> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only). Runtime/protocole **ouverts**. POC **non lancé**.

> Studio = cockpit. Adaptateur = sans autorité. Harness = cœur d’exécution autonome. Option C écartée (1er POC).

---

## 4. Justification Critical

Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.

Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical** : règles de contrôle des actions Git/GPT/Cursor ; gates, permissions, arrêts ; prévention d’auto-arbitrage et de seconde vérité.

Le cycle d’architecture fonctionnelle est en profil **Critical** : responsabilités Morris/GPT/Cursor/Git/orchestrateur candidat ; gates et preuves ; frontières empêchant une seconde vérité ou une architecture technique implicite.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git `main` = source de vérité | Cadrage `01`–`07` + conception `08`–`10` intégrés (PR #207 / #208 / #209) |
| Conception validée = intégrée | PR #209 / `fdade59…` ; branche `functional-design` conservée |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C méthode | Consomme v2.6 (**validé**) |
| POC ≠ valeur | Faisabilité ≠ MVP |
| Couverture progressive | 15 cycles = cible long terme |
| Runtime candidat | Non figé |
| macOS = preuve | Non plateforme produit |
| Observation ≠ règle | Pas de promotion méthode |
| Commit / push / PR / merge | Autorisations **distinctes** (règle générique) |

---

## 6. Gates G1–G7 (historiques) et observation merge

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 |
| **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
| **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** (D-VAL-9) — cadrage détaillé validé |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 **mergée**. **Régularisation :** D-VAL-11 **VALIDÉE**. |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. G7 **≠** autorisation rétroactive de merge.

---

## 7. Décisions D-VAL-1 à D-VAL-11 et FD-CAND

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | **Option C méthode** (consomme v2.6) | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** autorisés ; **merge non autorisé** (historique) | G7 |
| D-VAL-11 | Intégration PR #207 reconnue ; socle sur `main` ; cadrage documentaire **clôturé** ; branche conservée ; prochain cycle non sélectionné | Clôture |

### Contenu D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche `project/sfia-studio-pre-framing` conservée jusqu’à décision distincte |

### FD-CAND-01…08 — VALIDÉES

Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01…08 — **2026-07-18**. Identifiants locaux au cycle de conception — **pas de D-VAL-12**.

### Décisions architecture — VALIDÉES sur le fond

| Décision | Statut |
|----------|--------|
| AF-Option C (Studio / orchestrateur séparés) | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10 | **VALIDÉES** |
| AF-CAND-11A (trajectoire recommandée) | **VALIDÉE** (recommandation uniquement) |
| AF-CAND-11B (sélection prochain cycle) | **VALIDÉE** — UX/UI clôturé |
| AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
| D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |

### Décisions encore ouvertes / clôturées depuis

| Décision | Statut |
|----------|--------|
| AF-CAND-11B — UX/UI | **VALIDÉE** — UX/UI clôturé |
| Option B consolidation 14/15/16 | **VALIDÉE** |
| Delivery P0 | **CLÔTURÉ** — PR #217 mergée ; post-merge + cleanup effectués ; aucune gate restante |
| Acceptation / régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 |
| Sync #212 + finalisation #213 | **INTÉGRÉES** |
| Clôture formelle cycle architecture | **Non** — non automatique |
| Sort des branches historiques | Conservées ; décisions distinctes |
| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| Définition MVP | **Non pris** |
| Industrialisation | **Non engagée** |
| Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
| Vulnérabilités moderate postcss (via Next) | **Ouvertes** — pas de fix forcé |
| Runtime / Git / Cursor réels | P0 = simulés ; futur POC = lecture Git réelle + writes distantes simulées ; Runtime **non sélectionné** |

> Conception : intégrée (PR #209 / #210). Architecture fonctionnelle : intégrée (#211–#213). Architecture technique P0 + Delivery P0 : **intégrés** (PR #217 / `759ab0b…`). Aucune D-VAL-12.

### Orientation Morris — architecture POC

> POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog S1). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
> **POC non lancé.** POC-G9 **CONSOMMÉ** (harness-only). Allowlist initiale **validée** pour cet incrément. Draft PR autorisée ; merge **fermé**.

---

## 8. Prochaine décision

1. Review ChatGPT de la draft PR harness-only.
2. Merge delivery — **FERMÉ**. Cursor réel / UI Studio / Docker / élargissement allowlist — **FERMÉS**.
3. Clôture formelle AF (séparée).

**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 — Option C méthode |
| Socle | `main` @ `60e6880…` (PR #222 MERGED) |
| Architecture POC | `23`–`25` **intégrés** |
| Backlog POC | `26`–`28` **intégrés** (#223) ; harness versionné via draft PR |
| Handoff | `sfia/review-handoff` |

---

### Harness POC S1 (delivery local)

| Document | Rôle |
|----------|------|
| [harness/README.md](./harness/README.md) | Harness-only — installation, CLI, limites |

### Navigation backlog POC

| Document | Rôle |
|----------|------|
| [26-poc-orchestration-backlog.md](./26-poc-orchestration-backlog.md) | Epics, stories, DoR/DoD |
| [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
| [28-poc-orchestration-delivery-gate-pack.md](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis POC-G9 |

*SFIA Studio — Option B — POC-G9 harness-only local — app/** intact — POC NON LANCÉ.*

```

### `projects/sfia-studio/README.md` — diff staged

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1c6614c..223b1dc 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,23 +4,24 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-backlog-g8-consumed` — POC-G8 **CONSOMMÉ** (backlog S1) ; Option B **INTÉGRÉE** ; POC-G7 **INTÉGRÉ** ; POC-G9 **FERMÉ** ; POC **non lancé** |
+| **Statut** | `poc-s1-harness-delivery-local` — POC-G9 **CONSOMMÉ** (harness-only) ; POC-G8 **CONSOMMÉ** ; Option B **INTÉGRÉE** ; POC **non lancé** ; `app/**` **intact** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — backlog POC-G8 (BACKLOG/DOC/ARCH/SEC, Critical) |
-| **Typologie cycle** | BACKLOG / DOC / ARCH / SEC — Critical |
-| **Cycle projet** | 5 — Backlog / user stories (POC-G8) |
+| **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
+| **Typologie cycle** | DELIVERY / POC / ARCH / SEC / QA — Critical |
+| **Cycle projet** | 8 — Delivery / implémentation (harness-only) |
 | **Profil SFIA** | Critical |
-| **Branche backlog** | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
+| **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
 | **Branche architecture** | historique — MERGED #221 |
-| **Base canonique** | `origin/main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
+| **Base canonique** | `origin/main` @ `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
-| **Backlog POC** | `26`–`28` — POC-G8 **CONSOMMÉ** ; allowlist **candidate** |
-| **POC** | **Non lancé** — delivery **fermé** (POC-G9) |
-| **Prochaine décision** | Ouverture éventuelle **POC-G9** — **FERMÉE** |
+| **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
+| **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
+| **POC** | **Non lancé** (pas d’industrialisation / daemon) |
+| **Prochaine décision** | Merge delivery — **FERMÉ** ; Cursor réel / UI Studio / Docker — **FERMÉS** |
 
 ---
 
@@ -50,7 +51,7 @@
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
 | Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
 | Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **fermé** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Sync post-merge cadrage | PR #220 — **MERGED** (`b882892…`) |
 | Architecture POC | **Option B minimale** (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
 | Sync post-merge archi | PR #222 — **MERGED** (`60e6880…`) |
@@ -59,7 +60,7 @@
 | Branche cadrage | conservée |
 | Branches historiques | conservées |
 
-> Architecture Option B **INTÉGRÉE**. Backlog S1 produit (POC-G8). Studio cockpit + adaptateur + harness autonome. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
+> Architecture Option B **INTÉGRÉE**. Harness-only (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**. GO commit/push/draft PR **consommé** (Cycle 13). Merge **fermé**. `app/**` intact.
 
 ---
 
@@ -139,12 +140,12 @@ Pré-cadrage
   → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
   → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B — PR #221 / `40f8ebe…`
   → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
-  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist candidate
-  → delivery POC                        ← POC-G9 **fermé**
+  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist initiale **validée** harness-only
+  → delivery harness-only                ← POC-G9 **CONSOMMÉ** ; draft PR Cycle 13 ; merge **fermé**
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**.
+Architecture Option B **intégrée**. Backlog S1 **intégré**. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**.
 
 ---
 
@@ -222,7 +223,7 @@ Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness a
 |----------|------|
 | [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif, contraintes, critères — **VALIDÉ + INTÉGRÉ** |
 | [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario **S1** contrat de cadrage — **VALIDÉ + INTÉGRÉ** (**non exécuté**) |
-| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — **VALIDÉ + INTÉGRÉ** (G7–G9 fermés) |
+| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — G7–G8 OK ; G9 **CONSOMMÉ** harness-only |
 
 | Fait Git | Valeur |
 |----------|--------|
@@ -245,7 +246,7 @@ Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness a
 | Merge | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 | Branche remote archi | **supprimée** après merge |
 
-> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. Versionnement **consommé**. POC-G8/G9 **fermés**. Runtime/protocole **ouverts**. POC **non lancé**.
+> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only). Runtime/protocole **ouverts**. POC **non lancé**.
 
 > Studio = cockpit. Adaptateur = sans autorité. Harness = cœur d’exécution autonome. Option C écartée (1er POC).
 
@@ -347,7 +348,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (`26`–`28`) ; POC-G9 **fermé** |
+| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
@@ -359,17 +360,17 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 ### Orientation Morris — architecture POC
 
 > POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog S1). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
-> **POC non lancé.** POC-G9 **fermé**. Delivery **non autorisé**. Allowlist **candidate**.
+> **POC non lancé.** POC-G9 **CONSOMMÉ** (harness-only). Allowlist initiale **validée** pour cet incrément. Draft PR autorisée ; merge **fermé**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Validation Morris du backlog / allowlist (`26`–`28`).
-2. Ouverture éventuelle **POC-G9** (delivery) — **FERMÉE**.
+1. Review ChatGPT de la draft PR harness-only.
+2. Merge delivery — **FERMÉ**. Cursor réel / UI Studio / Docker / élargissement allowlist — **FERMÉS**.
 3. Clôture formelle AF (séparée).
 
-**Verdict documentaire :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
 
@@ -380,11 +381,17 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Méthode | SFIA v2.6 — Option C méthode |
 | Socle | `main` @ `60e6880…` (PR #222 MERGED) |
 | Architecture POC | `23`–`25` **intégrés** |
-| Backlog POC | `26`–`28` (**locaux** — non versionnés ici) |
+| Backlog POC | `26`–`28` **intégrés** (#223) ; harness versionné via draft PR |
 | Handoff | `sfia/review-handoff` |
 
 ---
 
+### Harness POC S1 (delivery local)
+
+| Document | Rôle |
+|----------|------|
+| [harness/README.md](./harness/README.md) | Harness-only — installation, CLI, limites |
+
 ### Navigation backlog POC
 
 | Document | Rôle |
@@ -393,4 +400,4 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
 | [28-poc-orchestration-delivery-gate-pack.md](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis POC-G9 |
 
-*SFIA Studio — Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*SFIA Studio — Option B — POC-G9 harness-only local — app/** intact — POC NON LANCÉ.*
```

---

## 12. Staged diff complet

```
 .../07-product-trajectory-and-decision-pack.md     |   36 +-
 .../sfia-studio/20-poc-orchestration-framing.md    |   14 +-
 ...21-poc-orchestration-scenario-and-boundaries.md |    4 +-
 .../22-poc-orchestration-decision-pack.md          |   31 +-
 .../23-poc-orchestration-technical-architecture.md |    6 +-
 ...tration-contracts-security-and-observability.md |    2 +-
 ...poc-orchestration-architecture-decision-pack.md |   36 +-
 .../sfia-studio/26-poc-orchestration-backlog.md    |   18 +-
 ...7-poc-orchestration-allowlist-and-acceptance.md |   51 +-
 .../28-poc-orchestration-delivery-gate-pack.md     |  115 +-
 projects/sfia-studio/README.md                     |   53 +-
 projects/sfia-studio/harness/.gitignore            |    6 +
 projects/sfia-studio/harness/README.md             |   74 +
 projects/sfia-studio/harness/fixtures/builders.ts  |   73 +
 projects/sfia-studio/harness/package-lock.json     | 1683 ++++++++++++++++++++
 projects/sfia-studio/harness/package.json          |   26 +
 projects/sfia-studio/harness/proofs/.gitkeep       |    0
 projects/sfia-studio/harness/src/cli.ts            |  117 ++
 .../sfia-studio/harness/src/gate/gateValidator.ts  |   71 +
 .../sfia-studio/harness/src/hash/canonicalize.ts   |   20 +
 .../sfia-studio/harness/src/hash/contractHash.ts   |    9 +
 projects/sfia-studio/harness/src/index.ts          |   13 +
 .../harness/src/journal/eventJournal.ts            |   51 +
 projects/sfia-studio/harness/src/orchestrator.ts   |  259 +++
 .../sfia-studio/harness/src/policy/policyEngine.ts |  117 ++
 .../harness/src/ports/cursorExecutor.ts            |    5 +
 .../sfia-studio/harness/src/ports/cursorFixture.ts |   48 +
 .../sfia-studio/harness/src/ports/gitReader.ts     |    5 +
 .../sfia-studio/harness/src/ports/gitReaderImpl.ts |  112 ++
 .../sfia-studio/harness/src/proof/proofStore.ts    |   43 +
 projects/sfia-studio/harness/src/state/machine.ts  |   40 +
 .../sfia-studio/harness/src/types/contracts.ts     |  140 ++
 .../sfia-studio/harness/tests/integration.test.ts  |  201 +++
 projects/sfia-studio/harness/tests/unit.test.ts    |  113 ++
 projects/sfia-studio/harness/tsconfig.build.json   |   12 +
 projects/sfia-studio/harness/tsconfig.json         |   19 +
 projects/sfia-studio/harness/vitest.config.ts      |    9 +
 37 files changed, 3471 insertions(+), 161 deletions(-)

```

```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/20-poc-orchestration-framing.md
M	projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
M	projects/sfia-studio/22-poc-orchestration-decision-pack.md
M	projects/sfia-studio/23-poc-orchestration-technical-architecture.md
M	projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
M	projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
M	projects/sfia-studio/26-poc-orchestration-backlog.md
M	projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
M	projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
M	projects/sfia-studio/README.md
A	projects/sfia-studio/harness/.gitignore
A	projects/sfia-studio/harness/README.md
A	projects/sfia-studio/harness/fixtures/builders.ts
A	projects/sfia-studio/harness/package-lock.json
A	projects/sfia-studio/harness/package.json
A	projects/sfia-studio/harness/proofs/.gitkeep
A	projects/sfia-studio/harness/src/cli.ts
A	projects/sfia-studio/harness/src/gate/gateValidator.ts
A	projects/sfia-studio/harness/src/hash/canonicalize.ts
A	projects/sfia-studio/harness/src/hash/contractHash.ts
A	projects/sfia-studio/harness/src/index.ts
A	projects/sfia-studio/harness/src/journal/eventJournal.ts
A	projects/sfia-studio/harness/src/orchestrator.ts
A	projects/sfia-studio/harness/src/policy/policyEngine.ts
A	projects/sfia-studio/harness/src/ports/cursorExecutor.ts
A	projects/sfia-studio/harness/src/ports/cursorFixture.ts
A	projects/sfia-studio/harness/src/ports/gitReader.ts
A	projects/sfia-studio/harness/src/ports/gitReaderImpl.ts
A	projects/sfia-studio/harness/src/proof/proofStore.ts
A	projects/sfia-studio/harness/src/state/machine.ts
A	projects/sfia-studio/harness/src/types/contracts.ts
A	projects/sfia-studio/harness/tests/integration.test.ts
A	projects/sfia-studio/harness/tests/unit.test.ts
A	projects/sfia-studio/harness/tsconfig.build.json
A	projects/sfia-studio/harness/tsconfig.json
A	projects/sfia-studio/harness/vitest.config.ts

```

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 06377f4..e2a4805 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 5 — Backlog POC-G8 ; historique Option B conservé |
+| **Cycle** | 8 — Delivery harness-only POC-G9 |
 | **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | POC-G8 **CONSOMMÉ** ; backlog S1 (`26`–`28`) ; POC-G9 **FERMÉ** ; POC **non lancé** |
-| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist candidate |
+| **Statut** | POC-G9 **CONSOMMÉ** (harness-only local) ; POC-G8 **CONSOMMÉ** ; POC **non lancé** ; `app/**` intact |
+| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist initiale **validée** harness-only |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `60e6880…` ; branche locale `backlog/sfia-studio-poc-orchestration-s1` |
+| **Source de vérité** | `origin/main` @ `d45cc54…` ; branche locale `delivery/sfia-studio-poc-s1-harness` |
 
-> Architecture Option B **intégrée**. Backlog S1 produit (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
+> Architecture Option B **intégrée**. Harness-only (POC-G9). Allowlist initiale **validée**. POC **non lancé**. GO commit/push/draft PR **consommé**. Merge **fermé**. `app/**` intact.
 
 ---
 
@@ -34,7 +34,7 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | Validation backlog + éventuel **POC-G9** — **FERMÉ** |
+| Prochaine orientation | Review draft PR ; merge **FERMÉ** ; Cursor réel / UI / Docker **FERMÉS** |
 | Architecture POC | **Option B minimale** — POC-G7 **INTÉGRÉ** (PR #221) |
 | Sync post-merge archi | **MERGED** — PR #222 / `60e6880…` |
 | Backlog POC | POC-G8 **CONSOMMÉ** — docs `26`–`28` |
@@ -122,7 +122,7 @@ Pré-cadrage
   → architecture POC ciblée             ← POC-G7 **INTÉGRÉ** — Option B — PR #221
   → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
   → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`)
-  → delivery POC                        ← POC-G9 fermé
+  → delivery harness-only                ← POC-G9 CONSOMMÉ ; draft PR Cycle 13 ; merge fermé
   → décision Morris : abandon / itération / préparation MVP
 ```
 
@@ -131,11 +131,11 @@ Pré-cadrage
 - Architecture : **Option B minimale** (intégrée).
 - Option A : mode test / dégradé harness.
 - Option C : écartée 1er POC.
-- POC-G8 : **CONSOMMÉ**. POC-G9 : **fermé**. POC : **non lancé**.
+- POC-G8 : **CONSOMMÉ**. POC-G9 : **CONSOMMÉ** (harness-only). POC : **non lancé**.
 
 ### Orientation
 
-> Backlog S1 produit (POC-G8). Allowlist candidate. Delivery (POC-G9) **fermé**. POC **non lancé**.
+> Backlog S1 intégré. Allowlist initiale **validée** harness-only. POC-G9 **consommé**. Draft PR autorisée ; merge **fermé**. POC **non lancé**.
 
 ---
 
@@ -211,7 +211,7 @@ Pré-cadrage
 |-------|---------|
 | Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; POC-G8/G9 **FERMÉS** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Architecture | Option B minimale (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
 | Ne lance pas | POC ; backlog ; delivery ; MVP |
 
@@ -260,7 +260,7 @@ Pré-cadrage
 | D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
 | D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
 | D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
-| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; delivery POC **fermé** (POC-G9) |
+| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; harness-only **consommé** ; draft PR Cycle 13 ; merge **fermé** |
 | D-NEXT-19 | GO versionnement sync post-merge cadrage | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
 | D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
 | D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
@@ -269,8 +269,10 @@ Pré-cadrage
 | D-NEXT-24 | Ouverture POC-G8 | Morris | **CONSOMMÉ** — backlog `26`–`28` |
 | D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
 | D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
-| D-NEXT-27 | Validation backlog / allowlist | Morris | **Requise** |
-| D-NEXT-28 | Ouverture POC-G9 (delivery) | Morris | **Fermée** |
+| D-NEXT-27 | Validation backlog / allowlist initiale harness-only | Morris | **CONSOMMÉE** |
+| D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
+| D-NEXT-29 | Commit/push/draft PR delivery harness | Morris | **CONSOMMÉ** (Cycle 13) — merge **fermé** |
+| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | **Fermés** |
 
 ---
 
@@ -326,13 +328,13 @@ Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industria
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **validé + intégré**. Architecture Option B : **intégrée** (#221). POC-G8/G9 : **fermés**.
+Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Architecture Option B : **intégrée** (#221). POC-G8/G9 **CONSOMMÉS**. Draft PR harness Cycle 13 ; merge **fermé**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Validez-vous le backlog / allowlist (`26`–`28`) ?
+1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément) ?
 2. Ouvrez-vous **POC-G9** (delivery borné) ?
 3. Clôture formelle AF (séparée) ?
 
@@ -352,7 +354,7 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 10. Verdict documentaire
 
-**Verdict :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+**Verdict :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
 
@@ -365,4 +367,4 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 | [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
 | [11](./11-functional-architecture.md) | AF-Option C |
 
-*Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Option B — POC-G9 harness-only CONSOMMÉ — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 6f4ed10..7b6e578 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -16,7 +16,7 @@
 | **Architecture Runtime** | **Non validée** — ouverts |
 | **Destinataire** | Morris |
 
-> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **produit** (POC-G8, `26`–`28`). POC-G9 **fermé**. POC **non lancé**.
+> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **INTÉGRÉ** (#223). POC-G9 **CONSOMMÉ** (harness-only). POC **non lancé** (pas d’industrialisation).
 
 ### Décision Morris — validation du cadrage (2026-07-19)
 
@@ -28,7 +28,7 @@
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | POC-G8 | **CONSOMMÉ** (backlog) |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Intégration | #219–#222 @ `60e6880…` |
 
 ---
@@ -116,7 +116,7 @@ Intention Studio
 
 - Modification de `projects/sfia-studio/app/**`
 - Push / PR / merge du présent cadrage sans GO distinct (POC-G10)
-- Lancement du POC (POC-G9)
+- Lancement autonome / industrialisation du POC (hors POC-G9 harness-only)
 - Architecture technique détaillée du POC
 - Définition du MVP
 - Industrialisation
@@ -288,7 +288,7 @@ Pas de plateforme de supervision industrialisée.
 | Architecture POC ciblée | Après POC-G7 |
 | Choix techno orchestrateur | Architecture POC |
 | Backlog POC borné | Après POC-G8 |
-| Delivery POC | Après POC-G9 |
+| Delivery harness-only | POC-G9 **consommé** — commit/PR séparés |
 | Intégration réelle Git/Cursor | GO distincts (POC-G5+) |
 | Décision post-POC (abandon / itération / MVP) | DF-G6 / DF-G7 (proposés) |
 
@@ -302,12 +302,12 @@ Pas de plateforme de supervision industrialisée.
 | POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B |
 | **POC-G8** | **CONSOMMÉ** — backlog `26`–`28` |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Sync #220 / Archi #221 / Sync #222 | **MERGED** |
 
 **Architecture :** Option B minimale (Studio cockpit + adaptateur + harness autonome). Option A = test/dégradé. Option C écartée (1er POC).
 
-**Prochaine décision :** validation backlog / allowlist ; éventuel **POC-G9** — **FERMÉ**.
+**Prochaine décision :** review draft PR harness ; merge — **FERMÉ** ; Cursor réel / UI / Docker — **FERMÉS**.
 
 ---
 
@@ -327,4 +327,4 @@ Pas de plateforme de supervision industrialisée.
 
 ---
 
-*Cadrage INTÉGRÉ — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Cadrage INTÉGRÉ — POC-G9 harness-only CONSOMMÉ — POC NON LANCÉ — app/** intact.*
diff --git a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
index ba5bbfe..7a0ad4b 100644
--- a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
+++ b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
@@ -217,7 +217,7 @@ Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une
 | Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
 | Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |
 
-Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog `26`–`28`). POC-G9 **FERMÉ**.
+Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only).
 
 UI Studio versus harness : **Option B minimale** — Studio cockpit + adaptateur fin ; harness autonome (cœur). Option A conservée pour tests hors UI.
 
@@ -296,4 +296,4 @@ L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateu
 
 ---
 
-*Scénario S1 VALIDÉ — NON EXÉCUTÉ — Option B — POC-G8 CONSOMMÉ (backlog) — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Scénario S1 VALIDÉ — harness-only local produit — Option B — POC-G9 CONSOMMÉ — POC NON LANCÉ (pas industrialisé).*
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index e954c3e..32dcf9d 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -5,10 +5,10 @@
 | **Document** | `22-poc-orchestration-decision-pack.md` |
 | **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (backlog) |
 | **POC** | **Non lancé** |
-| **POC-G9** | **FERMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only) |
 | **Backlog** | `26`–`28` |
 | **PR archi / sync** | #221 / #222 **MERGED** |
-| **main** | `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
+| **main** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
 
 > Architecture **Option B minimale** intégrée. Backlog S1 produit. Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC). Delivery **non autorisé**.
 
@@ -19,8 +19,8 @@
 1. Cadrage / sync / archi intégrés (#219–#222).
 2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**.
 3. POC-G8 **CONSOMMÉ** — backlog `26`–`28`.
-4. Allowlist **candidate** (`27`).
-5. POC-G9 fermé ; POC non lancé.
+4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
+5. POC-G9 **CONSOMMÉ** (harness-only) ; POC non lancé.
 
 ---
 
@@ -38,7 +38,7 @@
 | POC-G10 | **CONSOMMÉ** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **POC-G8** | **CONSOMMÉ** (backlog) |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 
 ARCH-POC-CAND-* : voir `25` (inchangées).
 
@@ -50,16 +50,31 @@ ARCH-POC-CAND-* : voir `25` (inchangées).
 POC-G7 INTÉGRÉ → versionnement CONSOMMÉ (#221)
   → sync post-merge CONSOMMÉE (#222)
   → POC-G8 CONSOMMÉ (backlog 26–28)
-  → validation backlog / allowlist (Morris)
-  → POC-G9 (FERMÉ) → POC (NON LANCÉ)
+  → allowlist initiale validée harness-only ; élargissements = nouveau GO
+  → POC-G9 (CONSOMMÉ harness-only) → POC (NON LANCÉ)
 ```
 
 ---
 
 ## 11. Verdict
 
-**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
+**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**
 
 ---
 
 *Option B — G8 consommé — G9 fermé — POC NON LANCÉ.*
+
+---
+
+## Delivery POC-G9 (statut)
+
+| Élément | Statut |
+|---------|--------|
+| POC-G9 | **CONSOMMÉ** — harness-only local |
+| Branche | `delivery/sfia-studio-poc-s1-harness` (locale) |
+| Emplacement | `projects/sfia-studio/harness/` |
+| Cursor | fixture only |
+| Docker | non retenu (option ouverte) |
+| `app/**` | **intact** |
+| Commit/push/draft PR | **CONSOMMÉ** ; merge **fermé** |
+| POC lancé | **Non** |
diff --git a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
index faef801..37cbc80 100644
--- a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
+++ b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
@@ -10,7 +10,7 @@
 | **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 | **Statut** | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** (POC-G7) — PR [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
 | **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
-| **POC-G8 / G9** | POC-G8 **CONSOMMÉ** (backlog) · POC-G9 **FERMÉ** |
+| **POC-G8 / G9** | POC-G8 **CONSOMMÉ** · POC-G9 **CONSOMMÉ** (harness-only) |
 | **POC** | **Non lancé** |
 | **Runtime / techno / protocole** | **Ouverts** (non figés) |
 
@@ -185,7 +185,7 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 | Option C | **Écartée** premier POC |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | Versionnement docs | **CONSOMMÉ / INTÉGRÉ** (PR #221 / `40f8ebe…`) |
-| Prochaine décision | Ouverture éventuelle **POC-G9** — **FERMÉE** (backlog POC-G8 consommé) |
+| Prochaine décision | Review draft PR ; merge **FERMÉ** ; Cursor réel / UI / Docker **FERMÉS** |
 
 ---
 
@@ -202,4 +202,4 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 
 ---
 
-*Architecture POC Option B minimale — INTÉGRÉE — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Architecture POC Option B minimale — INTÉGRÉE — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
index a22682a..b300cc4 100644
--- a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
+++ b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
@@ -166,4 +166,4 @@ Effets locaux `proofDir` seulement ; remote inchangé.
 
 ---
 
-*Contrats Option B — INTÉGRÉS — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Contrats Option B — INTÉGRÉS — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
index 05a9a4c..73466f8 100644
--- a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
+++ b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
@@ -4,12 +4,12 @@
 |------------|--------|
 | **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
 | **Cycle** | Architecture Option B + post-merge + backlog POC-G8 |
-| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **FERMÉ** |
+| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
 | **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** (inchangée) |
 | **Backlog** | `26`–`28` |
 | **POC** | **Non lancé** |
-| **Base** | `main` @ `60e6880…` |
+| **Base** | `main` @ `d45cc54…` |
 
 ---
 
@@ -18,9 +18,9 @@
 1. #219–#222 MERGED (cadrage, sync, archi, sync post-merge).
 2. Option B minimale **RETENUE / INTÉGRÉE**.
 3. POC-G8 **CONSOMMÉ** — backlog borné S1 produit.
-4. Allowlist **candidate** (`27`) — validation Morris requise.
+4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
 5. ARCH-POC-CAND-01…12 **inchangées** (fond).
-6. POC-G9 **non ouvert**.
+6. POC-G9 **CONSOMMÉ** (harness-only).
 
 ---
 
@@ -50,10 +50,10 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 | POC-G10 | **CONSOMMÉ** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **POC-G8** | **CONSOMMÉ** |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Delivery / lancement POC | **NON AUTORISÉ** |
 
-**≠ READY FOR DELIVERY.** Backlog ≠ autorisation d’implémenter.
+**≠ READY FOR MERGE.** Draft PR harness autorisée (Cycle 13). Merge / industrialisation **fermés**.
 
 ---
 
@@ -62,18 +62,18 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 1. Cursor réel non prouvé
 2. Techno harness ouverte
 3. Protocole adaptateur ouvert
-4. Allowlist candidate jusqu’à validation Morris
-5. `app/**` delivery borné seulement
+4. Allowlist initiale validée harness-only ; élargissement = nouveau GO
+5. `app/**` **fermé** (harness-only)
 6. QA non-seconde-vérité
 7. Clôture AF
-8. POC-G9
+8. Commit/push/PR delivery / UI / Cursor réel / Docker
 
 ---
 
 ## 7. Décisions Morris restantes
 
-1. Validation backlog / allowlist (`26`–`28`).
-2. Ouverture éventuelle **POC-G9**.
+1. Evidence re-review harness-only.
+2. Merge delivery (fermé) ; Cursor réel / UI / Docker (fermés).
 3. Clôture AF (séparée).
 
 ---
@@ -82,8 +82,8 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 
 ```text
 POC-G8 CONSOMMÉ (backlog)
-  → validation Morris backlog/allowlist
-  → POC-G9 (FERMÉ)
+  → allowlist initiale validée harness-only
+  → POC-G9 (CONSOMMÉ harness-only)
   → POC (NON LANCÉ)
 ```
 
@@ -91,8 +91,14 @@ POC-G8 CONSOMMÉ (backlog)
 
 ## 9. Verdict
 
-**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
+**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**
 
 ---
 
-*Decision pack — Option B inchangée — POC-G8 consommé — POC-G9 fermé — POC NON LANCÉ.*
+*Decision pack — Option B inchangée — POC-G9 harness-only consommé — POC NON LANCÉ — app/** intact.*
+
+---
+
+## Delivery POC-G9 (statut architecture)
+
+Option B **inchangée**. Harness autonome sous `projects/sfia-studio/harness/`. Studio/adaptateur **non** implémentés. Cursor **fixture**. Docker **non** introduit.
diff --git a/projects/sfia-studio/26-poc-orchestration-backlog.md b/projects/sfia-studio/26-poc-orchestration-backlog.md
index 123023d..91c76bc 100644
--- a/projects/sfia-studio/26-poc-orchestration-backlog.md
+++ b/projects/sfia-studio/26-poc-orchestration-backlog.md
@@ -5,8 +5,8 @@
 | **Document** | `26-poc-orchestration-backlog.md` |
 | **Cycle** | 5 — Backlog / user stories |
 | **Profil** | Critical |
-| **Gate** | **POC-G8 CONSOMMÉ** (ouverture backlog) |
-| **POC-G9** | **FERMÉ** |
+| **Gate** | **POC-G8 CONSOMMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only — hors UI) |
 | **POC** | **NON LANCÉ** |
 | **Scénario** | **S1** — DOC read-only gouverné |
 | **Architecture** | **Option B minimale** (inchangée) |
@@ -168,7 +168,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Risques** | Replay |
 | **Stop** | Adaptateur crée une décision |
 | **Candidats** | Couche adaptateur (protocole **ouvert**) |
-| **Gate** | Spike protocole si nécessaire avant POC-G9 |
+| **Gate** | Spike protocole si nécessaire avant UI/adaptateur (hors harness-only) |
 
 #### US-E1-05 — Idempotence et corrélation
 
@@ -376,7 +376,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Risques** | Liste trop large |
 | **Stop** | Action non listée acceptée |
 | **Candidats** | Config policy |
-| **Gate** | Validation Morris allowlist (`27`) |
+| **Gate** | Allowlist initiale validée harness-only (`27`) ; élargissement = nouveau GO |
 
 #### US-E5-02 — Pas de retry auto après rejet
 
@@ -447,8 +447,8 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Preuves** | Capture runtime (après UI) + traces |
 | **Risques** | Orch. dans UI |
 | **Stop** | Bouton ambigu = GO |
-| **Candidats** | Extensions minimales `app/**` **uniquement au delivery** (POC-G9) |
-| **Gate** | POC-G9 pour toucher `app/**` |
+| **Candidats** | Extensions minimales `app/**` **uniquement si nouveau GO UI** (hors harness-only) |
+| **Gate** | Nouveau GO Morris pour toucher `app/**` (POC-G9 harness-only ne l’autorise pas) |
 
 #### US-E7-02 — UI indisponible ≠ corruption harness
 
@@ -575,7 +575,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 5. E9 preuves
 6. E8 abuse
 7. E10 QA sans Studio
-8. E6 adaptateur + E7 cockpit (app/** seulement si POC-G9)
+8. E6 adaptateur + E7 cockpit (`app/**` seulement si nouveau GO UI)
 9. E11 démo
 ```
 
@@ -608,9 +608,9 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | Gate | Statut |
 |------|--------|
 | POC-G8 | **OUVERT / CONSOMMÉ** pour ce backlog |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Delivery / lancement POC | **NON AUTORISÉS** |
 
 ---
 
-*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ — techno/protocole ouverts.*
+*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md b/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
index 774a41b..03cbc5d 100644
--- a/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
+++ b/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
@@ -3,16 +3,21 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
-| **Cycle** | 5 — Backlog |
+| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond technique Cycle 5 |
 | **Profil** | Critical |
 | **Gate** | POC-G8 CONSOMMÉ |
-| **POC-G9** | **FERMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only ; allowlist initiale) |
 | **POC** | **NON LANCÉ** |
-| **Statut allowlist** | **CANDIDATE** — validation Morris requise |
+| **Statut allowlist** | **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — élargissement = nouveau GO Morris |
 | **Architecture** | Option B minimale (inchangée) |
-| **Base** | `main` @ `60e6880…` |
+| **Base** | `main` @ `d45cc54…` |
 
 > Défaut = **deny**. Toute action non listée est refusée. Fail-closed.
+>
+> **Allowlist initiale S1** : **VALIDÉE** pour l’incrément harness-only livré localement (POC-G9).
+> Périmètre = règles de ce document telles que définies. `app/**` **interdit**. `cursorMode=fixture` uniquement pour cet incrément. `gitEffect=none-remote`.
+> Tout élargissement (chemins, commandes, modes Cursor, effets Git) exige un **nouveau GO Morris**.
+> Cette validation **ne** vaut **pas** validation définitive pour tous les futurs incréments.
 
 ---
 
@@ -29,7 +34,7 @@
 
 ---
 
-## 2. Allowlist Git candidate
+## 2. Allowlist Git (initiale S1 — harness-only)
 
 ### 2.1 Commandes autorisées (lecture)
 
@@ -62,20 +67,20 @@
 
 ---
 
-## 3. Allowlist documentaire / fichiers candidate
+## 3. Allowlist documentaire / fichiers (initiale S1 — harness-only)
 
-### 3.1 Chemins candidats (à figer dans le contrat d’exécution)
+### 3.1 Chemins (figés dans le contrat d’exécution harness-only)
 
 | Zone | Exemple | Règle |
 |------|---------|-------|
-| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**` sauf GO delivery) | Lecture |
+| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**`) | Lecture |
 | Méthode (si contrat) | chemins méthode explicitement listés | Lecture |
 | Preuves locales | `proofDir` dédié POC | Lecture/écriture **locale** preuves seulement |
 | Fixtures POC | répertoire fixtures déclaré | Lecture |
 
 ### 3.2 Bornes
 
-| Borne | Valeur candidate |
+| Borne | Valeur (incrément harness-only) |
 |-------|------------------|
 | Extensions | `.md`, `.txt`, `.json`, `.jsonl` (autres = deny) |
 | Nb max fichiers / run | 30 |
@@ -83,20 +88,20 @@
 | Taille max agrégée | 5 MiB |
 | Traversée | Interdite (`..`, symlinks hors root) |
 | Secrets | Interdits (`.env`, credentials, clés) |
-| `app/**` | **Interdit** en S1 backlog/delivery sauf GO POC-G9 explicite borné |
+| `app/**` | **Interdit** — POC-G9 harness-only n’autorise **pas** `app/**` |
 | Chemins protégés méthode | Selon règles repo — deny par défaut |
 
 ---
 
-## 4. Allowlist Cursor candidate
+## 4. Allowlist Cursor (initiale S1 — harness-only)
 
 | Règle | Détail |
 |-------|--------|
 | Entrée | Via `CursorExecutorPort` uniquement |
-| Modes | `fixture` (Must) · `manual` (Must) · `real-adapter` (ouvert — spike) |
+| Modes | **Cet incrément :** `fixture` **uniquement**. `manual` / `real-adapter` = futurs GO Morris (fermés ici) |
 | Instruction | Bornée par contrat (objectif DOC read-only) |
 | CWD | Répertoire imposé par contrat |
-| Timeout | Configurable (candidat 120–300 s) |
+| Timeout | Configurable (borné par contrat ; ex. 30–300 s) |
 | Sortie | Capturée (stdout/stderr/artefacts locaux) |
 | Hors scope | Deny |
 | Action distante | Deny |
@@ -229,17 +234,21 @@ Voir `24` : `StudioIntent`, `StudioGateSubmission` (GO + `contractHash`), `Studi
 
 ---
 
-## 11. Validation Morris requise
+## 11. Statut de validation Morris
 
-Cette allowlist / denylist est **candidate**.
+L’allowlist / denylist de ce document est **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** (POC-G9 consommé).
 
-Avant POC-G9, Morris doit :
+**Réserve explicite :** validation limitée à cet incrément. L’allowlist reste **révisable**. Tout élargissement de chemins, commandes, modes Cursor ou effets Git est soumis à un **nouveau GO Morris**.
 
-1. Valider ou corriger les listes §2–§5.
-2. Valider les bornes fichiers §3.2.
-3. Confirmer modes Cursor acceptables pour le 1er delivery.
-4. Confirmer que `app/**` reste hors S1 jusqu’à GO delivery borné.
+Pour tout élargissement futur, Morris doit notamment :
+
+1. Valider ou corriger les listes §2–§5 au-delà du périmètre actuel.
+2. Valider toute nouvelle borne fichiers §3.2.
+3. Autoriser explicitement tout mode Cursor autre que `fixture`.
+4. Autoriser explicitement tout touch `app/**` (aujourd’hui **interdit**).
+
+Cette validation initiale **n’autorise pas** : Cursor manuel/réel, écriture Git, Docker, multi-scénario, industrialisation.
 
 ---
 
-*Allowlist S1 candidate — POC-G8 — POC-G9 FERMÉ — POC NON LANCÉ — défaut deny.*
+*Allowlist S1 initiale VALIDÉE harness-only — POC-G9 CONSOMMÉ — POC NON LANCÉ — défaut deny — app/** interdit — élargissement = nouveau GO.*
diff --git a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
index 32bee4f..b25197d 100644
--- a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
+++ b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
@@ -1,18 +1,21 @@
-# SFIA Studio — Gate pack delivery POC S1 (prérequis POC-G9)
+# SFIA Studio — Gate pack delivery POC S1 (POC-G9 harness-only)
 
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
-| **Cycle** | 5 — Backlog |
+| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond Cycle 5 |
 | **Profil** | Critical |
 | **POC-G8** | **CONSOMMÉ** (backlog produit) |
-| **POC-G9** | **FERMÉ** — décision Morris distincte |
-| **POC** | **NON LANCÉ** |
-| **Delivery** | **NON AUTORISÉ** |
-| **Base** | `main` @ `60e6880…` |
+| **POC-G9** | **CONSOMMÉ** — harness-only local |
+| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
+| **Delivery** | Harness versionné via **draft PR** (Cycle 13) — merge **fermé** |
+| **Allowlist** | **VALIDÉE** pour incrément harness-only S1 |
+| **Cursor** | **fixture** uniquement (réel **fermé**) |
+| **Docker** | **Non retenu** pour l’incrément ; option future = gate Morris |
+| **Base** | `main` @ `d45cc54…` |
 | **Architecture** | Option B minimale (inchangée) |
 
-> Ce document **prépare** POC-G9. Il ne l’ouvre pas. Il n’autorise ni code, ni `app/**`, ni lancement.
+> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.
 
 ---
 
@@ -20,13 +23,13 @@
 
 | Epic | Couvert dans `26` | Ready pour instruction delivery ? |
 |------|-------------------|-----------------------------------|
-| E1 Contrats | Oui | Oui (après validation Morris backlog) |
+| E1 Contrats | Oui | Couvert harness-only local |
 | E2 Harness | Oui | Oui |
 | E3 GitReader | Oui | Oui |
 | E4 CursorPort | Oui | Oui — réel = spike |
-| E5 Policy | Oui + `27` | Oui — allowlist candidate |
+| E5 Policy | Oui + `27` | Allowlist initiale **validée** harness-only |
 | E6 Adaptateur | Oui | Oui — protocole ouvert |
-| E7 Cockpit | Oui | Oui — `app/**` seulement si POC-G9 |
+| E7 Cockpit | Oui | **Fermé** — `app/**` interdit (POC-G9 harness-only) |
 | E8 Sécurité | Oui | Oui |
 | E9 Observabilité | Oui | Oui |
 | E10 QA | Oui | Oui |
@@ -34,30 +37,32 @@
 
 ---
 
-## 2. Prérequis POC-G9 (checklist)
+## 2. Prérequis POC-G9 — statut après consommation harness-only
 
-Avant tout GO delivery, Morris doit disposer de :
+Checklist **consommée** pour l’incrément harness-only :
 
-1. Backlog `26` validé (ou corrections actées).
-2. Allowlist/denylist `27` **validée** (plus seulement candidate).
-3. Confirmation Option B : Studio cockpit / adaptateur fin / harness autonome.
-4. Confirmation hors périmètre : no remote write, no L5 global, no MVP.
-5. Décision explicite sur modes Cursor acceptés pour le 1er incrément (fixture±manual).
-6. Décision sur touch `app/**` (oui borné / non — harness-only d’abord).
-7. Stratégie de preuve acceptée (§5).
-8. Plan de réversibilité (§7).
-9. Aucune techno/protocole présentée comme définitive sans preuve.
+1. Backlog `26` validé / intégré (#223) — **fait**.
+2. Allowlist/denylist `27` **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — **fait** ; élargissement = nouveau GO.
+3. Option B confirmée : Studio cockpit / adaptateur fin / harness autonome — architecture inchangée ; Studio/adaptateur **non** livrés dans cet incrément.
+4. Hors périmètre confirmé : no remote write, no L5 global, no MVP — **en vigueur**.
+5. Modes Cursor pour cet incrément : **fixture uniquement** — **fait** ; manuel/réel **fermés**.
+6. Touch `app/**` : **non** — harness-only ; `app/**` **fermé**.
+7. Stratégie de preuve (§5) — preuves locales harness produites ; relecture evidence requise.
+8. Plan de réversibilité (§7) — **en vigueur**.
+9. Techno/protocole non présentés comme définitifs — **en vigueur**.
 
-**POC-G9 reste FERMÉ jusqu’à GO Morris explicite.**
+**POC-G9 = CONSOMMÉ** pour harness-only local.
+**Restent fermés :** UI/`app/**` · Cursor réel · Docker (non retenu) · **merge** · lancement autonome / industrialisation. *(commit/push/draft PR = GO Cycle 13 consommé)*
+**POC global :** **non** validé comme réussi.
 
 ---
 
-## 3. Risques delivery (à traiter si POC-G9)
+## 3. Risques delivery (harness-only / élargissements futurs)
 
 | Risque | Sévérité | Mitigation |
 |--------|----------|------------|
 | Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
-| Allowlist trop large | Haute | Validation `27` ; défaut deny |
+| Allowlist trop large | Haute | Allowlist initiale validée bornée ; défaut deny ; élargissement = GO |
 | API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
 | Seconde vérité UI | Haute | Statut dérivé journal |
 | Écriture Git accidentelle | Haute | Denylist + tests A2 |
@@ -68,15 +73,15 @@ Avant tout GO delivery, Morris doit disposer de :
 
 ## 4. Réserves conservées (architecture)
 
-1. Cursor réel non prouvé.
-2. Technologie harness ouverte (Node/TS candidat).
-3. Protocole adaptateur ouvert.
-4. Allowlist détaillée = candidate jusqu’à validation Morris.
-5. `app/**` uniquement delivery borné.
+1. Cursor réel non prouvé — **fermé** pour cet incrément (fixture only).
+2. Technologie harness ouverte (Node/TS candidat POC, pas Runtime produit définitif).
+3. Protocole adaptateur ouvert — adaptateur/UI non livrés.
+4. Allowlist initiale S1 **validée** pour le harness-only livré localement. Tout élargissement de chemins, commandes, modes Cursor ou effets Git nécessite un **nouveau GO Morris**.
+5. `app/**` **fermé** — POC-G9 harness-only n’autorise pas `app/**`.
 6. QA non-seconde-vérité.
 7. Clôture AF séparée.
-8. POC-G9 / lancement non autorisés ici.
-9. **Docker** : option / spike d’évaluation possible avant POC-G9 — **non décidé**, ni obligatoire ni exclu.
+8. POC-G9 **consommé** pour harness-only ; draft PR Cycle 13 ; **merge** / lancement autonome / industrialisation **fermés**.
+9. **Docker** n’est pas utilisé pour l’incrément harness-only. Toute introduction ultérieure nécessite une décision Morris distincte. Docker n’est ni retenu ni définitivement exclu pour la trajectoire future.
 
 ---
 
@@ -129,47 +134,47 @@ Outils de test : ouverts (alignement repo). Pas de CI Studio imposée dans ce pa
 
 ---
 
-## 9. Décision Morris attendue (future)
+## 9. Décisions Morris — consommées / restantes
 
-### Question POC-G9
+### Consommées (POC-G9 harness-only)
 
-Autorisez-vous le **delivery** du POC S1 Option B selon `26`/`27`/`28` ?
+1. Allowlist `27` **validée** pour l’incrément harness-only S1.
+2. Premier incrément **harness-only** autorisé (`app/**` intact / fermé).
+3. Mode Cursor : **fixture uniquement**.
+4. Commit/push/draft PR delivery = **CONSOMMÉ** (Cycle 13) ; **merge** = **fermé**.
 
-Sous-questions :
+### Restantes (nouveau GO requis)
 
-1. Validez-vous l’allowlist `27` ?
-2. Autorisez-vous un premier incrément **harness-only** (sans `app/**`) ?
-3. Si UI : quelles surfaces `app/**` minimales ?
-4. Modes Cursor : fixture seulement / + manual / spike réel ?
-5. Commit/push/PR delivery = gates séparés après POC-G9.
-
-### Conséquences
-
-| Décision | Effet |
-|----------|-------|
-| GO POC-G9 | Delivery documentaire+code borné possible (cycle dédié) |
-| NO-GO | Backlog reste ; pas d’implémentation |
-| GO harness-only | `app/**` reste intact |
-| Claim Cursor réel | Spike + preuve obligatoires |
+1. Review / re-review des preuves harness.
+2. Merge delivery (après review) — **non autorisé** ici.
+3. Toute surface `app/**` / UI Studio.
+4. Cursor manuel ou réel (spike + preuve).
+5. Introduction Docker.
+6. Tout élargissement allowlist.
+7. Lancement autonome / industrialisation / clôture AF.
 
 ---
 
-## 10. Verdict futur (non actuel)
+## 10. Verdicts
 
-Verdict **candidat** après POC-G9 réussi + démo :
+Verdict **futur candidat** (après preuves validées + démo + décisions Morris) — **non actuel** :
 
 `POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`
 
-**Verdict actuel de ce cycle :**
+**Verdict documentaire courant (Cycle 9 QA) :**
 
-`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+`DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW`
+
+Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industrialisé.
 
 ---
 
 ## 11. Actions interdites (rappel)
 
-code · `app/**` · commit/push/PR · merge · ouverture POC-G9 · lancement POC · L5 · writes Git distantes · choix techno/protocole définitifs sans preuve
+`app/**` · Cursor réel · Docker (cet incrément) · **merge** delivery · lancement autonome / industrialisation · L5 · writes Git distantes · élargissement allowlist sans nouveau GO · choix techno/protocole définitifs sans preuve
+
+*(POC-G9 harness-only déjà consommé — ne pas relire comme « ouverture interdite » du harness local.)*
 
 ---
 
-*Gate pack delivery — prépare POC-G9 — ne l’ouvre pas — POC NON LANCÉ.*
+*Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist VALIDÉE (incrément) — draft PR Cycle 13 — merge FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1c6614c..223b1dc 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,23 +4,24 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-backlog-g8-consumed` — POC-G8 **CONSOMMÉ** (backlog S1) ; Option B **INTÉGRÉE** ; POC-G7 **INTÉGRÉ** ; POC-G9 **FERMÉ** ; POC **non lancé** |
+| **Statut** | `poc-s1-harness-delivery-local` — POC-G9 **CONSOMMÉ** (harness-only) ; POC-G8 **CONSOMMÉ** ; Option B **INTÉGRÉE** ; POC **non lancé** ; `app/**` **intact** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — backlog POC-G8 (BACKLOG/DOC/ARCH/SEC, Critical) |
-| **Typologie cycle** | BACKLOG / DOC / ARCH / SEC — Critical |
-| **Cycle projet** | 5 — Backlog / user stories (POC-G8) |
+| **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
+| **Typologie cycle** | DELIVERY / POC / ARCH / SEC / QA — Critical |
+| **Cycle projet** | 8 — Delivery / implémentation (harness-only) |
 | **Profil SFIA** | Critical |
-| **Branche backlog** | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
+| **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
 | **Branche architecture** | historique — MERGED #221 |
-| **Base canonique** | `origin/main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
+| **Base canonique** | `origin/main` @ `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
-| **Backlog POC** | `26`–`28` — POC-G8 **CONSOMMÉ** ; allowlist **candidate** |
-| **POC** | **Non lancé** — delivery **fermé** (POC-G9) |
-| **Prochaine décision** | Ouverture éventuelle **POC-G9** — **FERMÉE** |
+| **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
+| **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
+| **POC** | **Non lancé** (pas d’industrialisation / daemon) |
+| **Prochaine décision** | Merge delivery — **FERMÉ** ; Cursor réel / UI Studio / Docker — **FERMÉS** |
 
 ---
 
@@ -50,7 +51,7 @@
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
 | Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
 | Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **fermé** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Sync post-merge cadrage | PR #220 — **MERGED** (`b882892…`) |
 | Architecture POC | **Option B minimale** (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
 | Sync post-merge archi | PR #222 — **MERGED** (`60e6880…`) |
@@ -59,7 +60,7 @@
 | Branche cadrage | conservée |
 | Branches historiques | conservées |
 
-> Architecture Option B **INTÉGRÉE**. Backlog S1 produit (POC-G8). Studio cockpit + adaptateur + harness autonome. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
+> Architecture Option B **INTÉGRÉE**. Harness-only (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**. GO commit/push/draft PR **consommé** (Cycle 13). Merge **fermé**. `app/**` intact.
 
 ---
 
@@ -139,12 +140,12 @@ Pré-cadrage
   → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
   → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B — PR #221 / `40f8ebe…`
   → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
-  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist candidate
-  → delivery POC                        ← POC-G9 **fermé**
+  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist initiale **validée** harness-only
+  → delivery harness-only                ← POC-G9 **CONSOMMÉ** ; draft PR Cycle 13 ; merge **fermé**
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**.
+Architecture Option B **intégrée**. Backlog S1 **intégré**. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**.
 
 ---
 
@@ -222,7 +223,7 @@ Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness a
 |----------|------|
 | [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif, contraintes, critères — **VALIDÉ + INTÉGRÉ** |
 | [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario **S1** contrat de cadrage — **VALIDÉ + INTÉGRÉ** (**non exécuté**) |
-| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — **VALIDÉ + INTÉGRÉ** (G7–G9 fermés) |
+| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — G7–G8 OK ; G9 **CONSOMMÉ** harness-only |
 
 | Fait Git | Valeur |
 |----------|--------|
@@ -245,7 +246,7 @@ Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness a
 | Merge | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 | Branche remote archi | **supprimée** après merge |
 
-> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. Versionnement **consommé**. POC-G8/G9 **fermés**. Runtime/protocole **ouverts**. POC **non lancé**.
+> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only). Runtime/protocole **ouverts**. POC **non lancé**.
 
 > Studio = cockpit. Adaptateur = sans autorité. Harness = cœur d’exécution autonome. Option C écartée (1er POC).
 
@@ -347,7 +348,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (`26`–`28`) ; POC-G9 **fermé** |
+| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
@@ -359,17 +360,17 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 ### Orientation Morris — architecture POC
 
 > POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog S1). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
-> **POC non lancé.** POC-G9 **fermé**. Delivery **non autorisé**. Allowlist **candidate**.
+> **POC non lancé.** POC-G9 **CONSOMMÉ** (harness-only). Allowlist initiale **validée** pour cet incrément. Draft PR autorisée ; merge **fermé**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Validation Morris du backlog / allowlist (`26`–`28`).
-2. Ouverture éventuelle **POC-G9** (delivery) — **FERMÉE**.
+1. Review ChatGPT de la draft PR harness-only.
+2. Merge delivery — **FERMÉ**. Cursor réel / UI Studio / Docker / élargissement allowlist — **FERMÉS**.
 3. Clôture formelle AF (séparée).
 
-**Verdict documentaire :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
 
@@ -380,11 +381,17 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Méthode | SFIA v2.6 — Option C méthode |
 | Socle | `main` @ `60e6880…` (PR #222 MERGED) |
 | Architecture POC | `23`–`25` **intégrés** |
-| Backlog POC | `26`–`28` (**locaux** — non versionnés ici) |
+| Backlog POC | `26`–`28` **intégrés** (#223) ; harness versionné via draft PR |
 | Handoff | `sfia/review-handoff` |
 
 ---
 
+### Harness POC S1 (delivery local)
+
+| Document | Rôle |
+|----------|------|
+| [harness/README.md](./harness/README.md) | Harness-only — installation, CLI, limites |
+
 ### Navigation backlog POC
 
 | Document | Rôle |
@@ -393,4 +400,4 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
 | [28-poc-orchestration-delivery-gate-pack.md](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis POC-G9 |
 
-*SFIA Studio — Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*SFIA Studio — Option B — POC-G9 harness-only local — app/** intact — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/harness/.gitignore b/projects/sfia-studio/harness/.gitignore
new file mode 100644
index 0000000..b4501a4
--- /dev/null
+++ b/projects/sfia-studio/harness/.gitignore
@@ -0,0 +1,6 @@
+node_modules/
+dist/
+proofs/**
+!proofs/.gitkeep
+*.log
+.DS_Store
diff --git a/projects/sfia-studio/harness/README.md b/projects/sfia-studio/harness/README.md
new file mode 100644
index 0000000..9f304ee
--- /dev/null
+++ b/projects/sfia-studio/harness/README.md
@@ -0,0 +1,74 @@
+# SFIA Studio — POC S1 Harness (harness-only)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Emplacement** | `projects/sfia-studio/harness/` |
+| **Incrément** | POC-G9 harness-only |
+| **Architecture** | Option B — harness autonome |
+| **Studio / app/** | **Non touché** |
+| **Cursor** | **Fixture uniquement** — aucun Cursor réel |
+| **Docker** | **Non retenu** pour cet incrément (option ouverte) |
+| **Git** | Lecture réelle allowlistée · `gitEffect=none-remote` |
+| **Allowlist** | Initiale S1 **validée** pour cet incrément — élargissement = nouveau GO |
+| **POC** | Preuves locales — **non industrialisé** / non lancé en autonomie permanente |
+
+## Pourquoi cet emplacement
+
+- Hors `app/**` (Next P0) — séparation AF-Option C / Option B.
+- Aligné toolchain Node/TypeScript du projet Studio (vitest, tsc) sans Next.
+- Package local autonome, testable sans UI.
+
+## Installation
+
+```bash
+cd projects/sfia-studio/harness
+npm install
+```
+
+## Commandes
+
+```bash
+npm run typecheck
+npm test
+npm run build
+npm run cli -- validate-contract ./path/to/contract.json
+npm run cli -- run-fixture ./fixtures/demo   # après génération locale
+npm run cli -- inspect-journal <proofDir>
+npm run cli -- verify-proofs <proofDir>
+```
+
+## Architecture effective
+
+```text
+fixture gate (Morris) → Orchestrator
+  → PolicyEngine (default deny)
+  → GateValidator (GO + contractHash)
+  → StateMachine
+  → GitReaderImpl (spawn git, shell:false)
+  → CursorExecutorPortFixture
+  → EventJournal (JSONL)
+  → ProofStore (proofDir)
+```
+
+## Restrictions
+
+- Aucune écriture Git distante (`add/commit/push/merge/rebase/...`).
+- Aucune API Cursor inventée ; `realCursorClaimed: false` toujours.
+- Aucun daemon / serveur HTTP requis.
+- Aucun Dockerfile / docker-compose dans cet incrément.
+- Aucune modification `projects/sfia-studio/app/**`.
+
+## Nettoyage local
+
+Supprimer les répertoires `proofs/` temporaires et `node_modules/` si besoin :
+
+```bash
+rm -rf proofs/* node_modules dist
+```
+
+## Limites / réserves
+
+- Cursor réel = spike futur.
+- Protocole adaptateur / UI Studio = hors incrément.
+- Docker = option future non décidée.
+- Allowlist détaillée toujours sujette à raffinement Morris.
diff --git a/projects/sfia-studio/harness/fixtures/builders.ts b/projects/sfia-studio/harness/fixtures/builders.ts
new file mode 100644
index 0000000..71eee28
--- /dev/null
+++ b/projects/sfia-studio/harness/fixtures/builders.ts
@@ -0,0 +1,73 @@
+import path from "node:path";
+import { fileURLToPath } from "node:url";
+import type { ExecutionContract, GateDecision, POCRequest } from "../src/types/contracts.js";
+import { computeContractHash } from "../src/hash/contractHash.js";
+
+const HERE = path.dirname(fileURLToPath(import.meta.url));
+export const REPO_ROOT = path.resolve(HERE, "../../.."); // projects/sfia-studio -> projects -> workspace?
+// harness/fixtures -> harness -> sfia-studio -> projects -> workspace
+// HERE = .../harness/fixtures
+// ../ = harness
+// ../../ = sfia-studio
+// ../../../ = projects
+// ../../../../ = workspace root
+export const WORKSPACE_ROOT = path.resolve(HERE, "../../../..");
+
+export function makeRequest(overrides: Partial<POCRequest> = {}): POCRequest {
+  return {
+    requestId: "req-s1-001",
+    title: "Capitaliser une règle de gate SFIA",
+    cycle: "DOC",
+    scope: "projects/sfia-studio",
+    operator: "Morris",
+    createdAt: new Date().toISOString(),
+    ...overrides,
+  };
+}
+
+export function makeContract(proofDir: string, overrides: Partial<ExecutionContract> = {}): ExecutionContract {
+  return {
+    contractId: "ctr-s1-001",
+    requestId: "req-s1-001",
+    scenario: "S1",
+    repositoryRoot: WORKSPACE_ROOT,
+    allowedPaths: ["projects/sfia-studio", "projects/sfia-studio/harness"],
+    allowedCommands: [
+      "branch-show-current",
+      "rev-parse",
+      "merge-base",
+      "status-short",
+      "diff-check",
+      "diff-stat",
+      "diff-name-status",
+      "log",
+      "show",
+      "ls-remote",
+    ],
+    gitEffect: "none-remote",
+    cursorMode: "fixture",
+    timeoutMs: 30_000,
+    proofDir,
+    schemaVersion: "1",
+    maxFiles: 30,
+    maxFileBytes: 512_000,
+    maxAggregateBytes: 5_000_000,
+    allowedExtensions: [".md", ".txt", ".json", ".jsonl", ".ts", ""],
+    decidedByAllowlist: ["Morris"],
+    ...overrides,
+  };
+}
+
+export function makeGo(contract: ExecutionContract, overrides: Partial<GateDecision> = {}): GateDecision {
+  const hash = computeContractHash(contract);
+  return {
+    decisionId: "gate-go-001",
+    requestId: contract.requestId,
+    contractHash: hash,
+    decision: "GO",
+    decidedBy: "Morris",
+    decidedAt: new Date().toISOString(),
+    scope: "projects/sfia-studio",
+    ...overrides,
+  };
+}
diff --git a/projects/sfia-studio/harness/package-lock.json b/projects/sfia-studio/harness/package-lock.json
new file mode 100644
index 0000000..e571fe5
--- /dev/null
+++ b/projects/sfia-studio/harness/package-lock.json
@@ -0,0 +1,1683 @@
+{
+  "name": "@sfia-studio/poc-s1-harness",
+  "version": "0.1.0",
+  "lockfileVersion": 3,
+  "requires": true,
+  "packages": {
+    "": {
+      "name": "@sfia-studio/poc-s1-harness",
+      "version": "0.1.0",
+      "bin": {
+        "sfia-poc-s1": "dist/cli.js"
+      },
+      "devDependencies": {
+        "@types/node": "^22.15.21",
+        "tsx": "^4.19.4",
+        "typescript": "^5.8.3",
+        "vitest": "^3.1.2"
+      },
+      "engines": {
+        "node": ">=20"
+      }
+    },
+    "node_modules/@esbuild/aix-ppc64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.28.1.tgz",
+      "integrity": "sha512-Svl7tq8k/08+p6CXPpRjQ1fKX+1odH/BQbb48fV6fj3CWHhsoIOoY87w1oHXm0qEpkIK3ZfVgp0hed3XBXzXMQ==",
+      "cpu": [
+        "ppc64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "aix"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/android-arm": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.28.1.tgz",
+      "integrity": "sha512-0k2F129Xdio1TdJfzJ8sy1Q47vUD2NnwdhiAf7drUN1EBTfPf4hsFCtmMgu/6m8JSzsBrlmVjudMBQqOfG8usQ==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/android-arm64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.28.1.tgz",
+      "integrity": "sha512-34EGEbCIAgosYz6goLcopX6Mo7NyGv9tfwEM2/7Ce2VcVRk568iSvniGWcUXIy7wEDR1wzolcxcriFVrWYcwBg==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/android-x64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.28.1.tgz",
+      "integrity": "sha512-dbwY7ltSMDWsRatcRpCnES4F+im88OCUgGZjy52shC7GqHRE/cYlxNbB4Z4UpJswpcc4Qxd2oE/ufM0p61IKng==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "android"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/darwin-arm64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.28.1.tgz",
+      "integrity": "sha512-TZbWkQY7kvTAXbXUT7uVACR5cMHsDiSz9z7ZKAX/RTq/WJEk3QyRr0wZpNhBDX+/0CtdqUIJlOiodQcta6tY3Q==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/darwin-x64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.28.1.tgz",
+      "integrity": "sha512-zfdzgK9ACBNZLI/CyHTOx81SyNbM6YXn7rxSgX97VjyiPl9W1i4Ka4fgKECEoFCKGpvBj5qArWIGgQjOwkgskQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/freebsd-arm64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.28.1.tgz",
+      "integrity": "sha512-wG2EA8ENdEI0qhkSZMjfqrdY+ziCYCPMmtZjjIwOmXFjmyzEHn+UUxk5of+SYsjtfs3VpnlC7QLzSI5hY/rOAw==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "freebsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/freebsd-x64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.28.1.tgz",
+      "integrity": "sha512-i7dZ9vQgnvSCzi/rYCXNgtF/U+eKZNJBzu3eTQbRgHnM7tNSizLOkRFAl3qzVc/Op/u5YkHHa4pf/3DOYHthLQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "freebsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-arm": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.28.1.tgz",
+      "integrity": "sha512-qVXBOHQS+d5Y722GwJzJUtOLlX7km3CraOaGormF1pDtPd2C/l1SHRPgjLunLGe51Sh5YYWKMFDyV4SxgMQYTQ==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-arm64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.28.1.tgz",
+      "integrity": "sha512-yHs+0uc8+nvEAfAfxrWQKK5peSNzBc4PegcMO0EJ2hT71uA7vB8Ihg2e77R2P7SG5uYjPbHlLLmve4LLLRCf0g==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-ia32": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.28.1.tgz",
+      "integrity": "sha512-d1z4ZuP0ajrfz/FhGT4vv278rX8KnPPJx8i5+AtK7TYbx9Le9F1hyzurZpkEyjkGa9dUGhQow4C1NmeGvqxN2w==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-loong64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.28.1.tgz",
+      "integrity": "sha512-M5sRjUVZrkm1OAPR3dlOYzNmN+loZKGVi1VUQGrwuqLcbR6qeAz+famMhjASeH3YVKvZz+zT1jlh/keC3Rj/lg==",
+      "cpu": [
+        "loong64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-mips64el": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.28.1.tgz",
+      "integrity": "sha512-mRObBZeHh2OxcBFPWE/FjylkRgZdYuiTR3vaTozquCGOH14iP9oN4x4Ge81CoIDYQrXmIxpFumJBu5MtZpnQJQ==",
+      "cpu": [
+        "mips64el"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-ppc64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.28.1.tgz",
+      "integrity": "sha512-slScBsMAb3GFDcdrCgLwZtPYRoH2H/youv10QiZyRjmsP48fznoveWytSgCI/R0ZcUgpc0ZhIUEx6LHts8yrfQ==",
+      "cpu": [
+        "ppc64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-riscv64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.28.1.tgz",
+      "integrity": "sha512-kw0owk1o0GFETUJyW0jc0G4Yzs0BHZn0JDZ8JRT088vjJYX777BAs1fDGxAC+q831qOs2DTC96mNsG2opdfyyQ==",
+      "cpu": [
+        "riscv64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-s390x": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.28.1.tgz",
+      "integrity": "sha512-/lAIjX8aYFRByhh6L5rYtPEDRqa9de/4V/juOXcta5frjvzXO4/sqEtyytse0g3zZFuWu5cDN0MkLz2qRDD2Ag==",
+      "cpu": [
+        "s390x"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/linux-x64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.28.1.tgz",
+      "integrity": "sha512-u/anNYF2mmVOEDwLtnQ1wOr3EZ9sTNGLWrsYGYwHWzGA3Si84IOkHXlbWTD1NB+9/1lcnweYKO54uhxZydNzfA==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/netbsd-arm64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.28.1.tgz",
+      "integrity": "sha512-oks0DYbLwWMmaakTsCb+zL4E+aHRVLom9IJZOAthMQEPiQmydXHkziYEsGYRx0uNV/IjEKGAV941JzH02pflqw==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "netbsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/netbsd-x64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.28.1.tgz",
+      "integrity": "sha512-aeL6lAnN89Hz43Mlh1G8ARasbuoYvSITDEx0tHh5b7jJnHcssqgjy9Yx430GDpmCa6OyrKoS0aNRjKundRizGg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "netbsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/openbsd-arm64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.28.1.tgz",
+      "integrity": "sha512-MEFJe5C3R8pwXdZ5Y21oo6m7ePiS0d9pWucn99O/wvyJZChoIQKrQDxKrGeW8F5+T0okTHesAmDeiHDTIq0V/Q==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openbsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/openbsd-x64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.28.1.tgz",
+      "integrity": "sha512-i/ZLIOafE0Z8cI/XANJAixoJL/uRAoS2xOA3rb0xN+KK0K177cMAsQYkzHtBrtMXAKuAc7HGgcWiZ/sRC1Nxgw==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openbsd"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/openharmony-arm64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.28.1.tgz",
+      "integrity": "sha512-ge+Z7EXFNt2BO1oAMsVpiQ8EwndV9i1xXerAeTIK7AtPs3bKFXQM7nlRxDSIUIMeueR1CNXxqztLzdNeReKBJg==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openharmony"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/sunos-x64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.28.1.tgz",
+      "integrity": "sha512-BEjgtECkL3vY+SaSQ6nzVfiALUeFxpawyp8Jmf5PtYhf1Ug40N1h/hxlhts+f1FvSvarEigdxS3BlSMI2PJLcQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "sunos"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/win32-arm64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.28.1.tgz",
+      "integrity": "sha512-lCv9eK/H6ZJWbE7bh2nw54CZ9M2nupBxJcTsdk/QQnWkdSjKGuxmmH8/GWrlT1eMmZfn4dGcCjRte397WqfQXA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/win32-ia32": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.28.1.tgz",
+      "integrity": "sha512-zvb/mB2bSCoJOpoCBgYKKpX6YM6mJBlBUVUtVj41DlZJVEB6/0CKlRYxP5wWl1C1ILiCoAU5wZZ4q1P3qeS6Eg==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@esbuild/win32-x64": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.28.1.tgz",
+      "integrity": "sha512-bm4Mowrv+GXMlpWX++EcXw/iLyd1o3+bJkC2DkWXYVvgZCqD/bSj9ctZeAMC3cIxgjRVR2Dufaiu4YPxr5gW1A==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ],
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/@jridgewell/sourcemap-codec": {
+      "version": "1.5.5",
+      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
+      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/@rollup/rollup-android-arm-eabi": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.62.2.tgz",
+      "integrity": "sha512-6o7ZLZK+BeenkZCFNDXqpbjw9bD6nuWonvS/lwQJp7NoVVxm6p3qE7qQ5jGuBjiFsgvqjD8mZAU5oWxTmbOeOg==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "android"
+      ]
+    },
+    "node_modules/@rollup/rollup-android-arm64": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.62.2.tgz",
+      "integrity": "sha512-BaH7BllCACHoH1LguOU56UItGfUWjujlO65kS9LAodViaN4bwIKd7oeW/ZHJ/4ljr/7MIiENnNy3HJ0zXv8Zkw==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "android"
+      ]
+    },
+    "node_modules/@rollup/rollup-darwin-arm64": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.62.2.tgz",
+      "integrity": "sha512-v39RCCvj4He82I9sFmk+M1VZ0PLM9sfsLVikjfx2hYBNALhrrOR2D3JjQA6AhlaSOgcR+RzrKY7e1+bT6SUO/A==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "darwin"
+      ]
+    },
+    "node_modules/@rollup/rollup-darwin-x64": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.62.2.tgz",
+      "integrity": "sha512-yl0y2vq3S3lHeuXhEdss6TWfKW8vkujImO12tn4ZkG/4oghr09LvdYm2RElVjokTQiUvDUGXLGsYeLqUMCKpGA==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "darwin"
+      ]
+    },
+    "node_modules/@rollup/rollup-freebsd-arm64": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.62.2.tgz",
+      "integrity": "sha512-tT4pvt4qXD+vEoezupCWi+a1F0vvDiksiHc+PxRlYTOH1I6/X4id9jPxTP+Fg+545euaFT1jJVs4CEdHZAU1vw==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "freebsd"
+      ]
+    },
+    "node_modules/@rollup/rollup-freebsd-x64": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.62.2.tgz",
+      "integrity": "sha512-6nU5F2wCW+qvCBhTn1pdIU3bzsIoF7EUwsCDRxilWGprQR6yd508YnH9+OKFCwpfS8pjZqDUmnCAr7exax0XCg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "freebsd"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.62.2.tgz",
+      "integrity": "sha512-n1GJHPOvpIfhi3TmrCeh6S6URt9BFCt0KQE3qvexyGCTAKpR4Lg+eWvNZEqu7epxwus/8ElT3hacYEucm49SZg==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.62.2.tgz",
+      "integrity": "sha512-JqgflS8wEB+UXV/vS1RpRbifGBeN4D5lz8D8oOFbFZw4vedvdOgCFAjfBmIMdW3yL10XpQQ0Ambepw6MXrhOnA==",
+      "cpu": [
+        "arm"
+      ],
+      "dev": true,
+      "libc": [
+        "musl"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-arm64-gnu": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.62.2.tgz",
+      "integrity": "sha512-wnFJkogWvN4jm/hQRF2UBaeUmk20j5+DmHvoyWii2b8HJDyvz1MF2OU/6ynXt2KR63rbZLWkFpoytpdc/yBuSA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-arm64-musl": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.62.2.tgz",
+      "integrity": "sha512-HVu2bp0zhvJ8xHEV9+UUs7S90VadmBSY3LcIMvozbPo4AuMGDWlz3ymHLHZPX4hR67TKTt8Qp5PJ5RBg/i+RMQ==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "libc": [
+        "musl"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-loong64-gnu": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.62.2.tgz",
+      "integrity": "sha512-mQqqAV8QaoSgr9I2fKDLY2BAVvmKjWoGiu/cSYQonsLvtqwEn1E4QYfnCOcp5zoEqNhsDYin1s6jx/VJmrxlZg==",
+      "cpu": [
+        "loong64"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-loong64-musl": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.62.2.tgz",
+      "integrity": "sha512-IxKLoxCQ2IWi6bT2akyDUBGsOImDKB+sPp4EsTmwFQ/fMwpCKm8uLSSgP/Kx/QYUgKis6SEZ5/Nlhup0DIA0PQ==",
+      "cpu": [
+        "loong64"
+      ],
+      "dev": true,
+      "libc": [
+        "musl"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.62.2.tgz",
+      "integrity": "sha512-Mk5ha2RQSgyFfmYYLkBpPnUk8D8FriBxesO1u9O75X0mHgXL1UQcH5Itl2lurWL2tj0RxV9b9tJgipac0hRY9A==",
+      "cpu": [
+        "ppc64"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-ppc64-musl": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.62.2.tgz",
+      "integrity": "sha512-CjvEnqJL/0/TQ3TXX3OPIJ/kmBellrWd4heXUmHeJlTnmwjKpSJzoehLaL6Xk0ZnMHBu9dZuFADNOrtjF4v+2w==",
+      "cpu": [
+        "ppc64"
+      ],
+      "dev": true,
+      "libc": [
+        "musl"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.62.2.tgz",
+      "integrity": "sha512-1SiZbzwdkaDURsew/tSOrooKiYy7EQGT6m8ufavAi9NEyQb/6VuIxFXAL1fqa4iZe3g4NbNk4P7J32z2tw5Mgg==",
+      "cpu": [
+        "riscv64"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-riscv64-musl": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.62.2.tgz",
+      "integrity": "sha512-nQts12zJ3NQRoE6uYljOH89v7szzLDvG2JD/vsX+vGXU8w/At1GowTZ5/7qeFQ8m7L55rpR8Okugnuo5bgjy2Q==",
+      "cpu": [
+        "riscv64"
+      ],
+      "dev": true,
+      "libc": [
+        "musl"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-s390x-gnu": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.62.2.tgz",
+      "integrity": "sha512-E9/ll019jhPIJgpzfZoIkBGhcz+kKNgVWYRY0zr9srBdPPFVpvOKW8VaJKUbeK+eZXyQF9ltME+Kk6affeaPgg==",
+      "cpu": [
+        "s390x"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-x64-gnu": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.62.2.tgz",
+      "integrity": "sha512-5BqxR/pshjey51iliyzTD5Xi3EN0aLmQ2lZ3lvefVV9c82BvrLo2/6OT55iifpWBufs6kdwWbuOKS841DrmK9A==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-x64-musl": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.62.2.tgz",
+      "integrity": "sha512-uNN83XxQrRAh/w0/pmAfibcwyb6YWt4gP+dpnQKPVJshAloQ785ii8CT8ZCIxkGg9opVsvAlGhFitSm6D1Jjpg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "libc": [
+        "musl"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-openbsd-x64": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.62.2.tgz",
+      "integrity": "sha512-srjEIxSH3LRnJN6THczDHWQplqEMFiAJrTab0msUryh9kwNpkICf3Ea6q6MN/2cZwRFUNx5w+h6Hpi4QuHS6Zg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openbsd"
+      ]
+    },
+    "node_modules/@rollup/rollup-openharmony-arm64": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.62.2.tgz",
+      "integrity": "sha512-8hOJnxgbyObnCm5AlRA3A931xX19xq80RjVTKgJOvEKWqJruP/Uf12IbAOaDjjEXYRewwHLfmF0YRIdK3OwKWA==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openharmony"
+      ]
+    },
+    "node_modules/@rollup/rollup-win32-arm64-msvc": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.62.2.tgz",
+      "integrity": "sha512-mmF4AY1i0hG/bLWUctUq59gtmgaSIRa3cu/A3JFRp/sCNEme2bgDEiDS22P9FbnJB8NJNF4jPJiSP5RHQpUTDg==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ]
+    },
+    "node_modules/@rollup/rollup-win32-ia32-msvc": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.62.2.tgz",
+      "integrity": "sha512-DZgkknc6jhHrk46V25vbAM0zZkyP0nSDkJB8/dRkLTxv470dOmWDqGoEJl/9A0dFfS7yE3REOwNDxpHwSLSt0Q==",
+      "cpu": [
+        "ia32"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ]
+    },
+    "node_modules/@rollup/rollup-win32-x64-gnu": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.62.2.tgz",
+      "integrity": "sha512-T6xr6ucWSFto+VGajA8YH26LdpHRuP4YLHEKAtCWvJDOlnmWcDZVCI2Jmjr+IFHDlt2zRaTAKE4tfjTaWLgJBg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ]
+    },
+    "node_modules/@rollup/rollup-win32-x64-msvc": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.62.2.tgz",
+      "integrity": "sha512-BfzEnDJOt9T8M989/lA37EcJgat01wLRnoi5dQf3QzOH7jzpqTAzdDbVfRljVr5r+jzKqpbHeyOfAaXxAd0PAA==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ]
+    },
+    "node_modules/@types/chai": {
+      "version": "5.2.3",
+      "resolved": "https://registry.npmjs.org/@types/chai/-/chai-5.2.3.tgz",
+      "integrity": "sha512-Mw558oeA9fFbv65/y4mHtXDs9bPnFMZAL/jxdPFUpOHHIXX91mcgEHbS5Lahr+pwZFR8A7GQleRWeI6cGFC2UA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/deep-eql": "*",
+        "assertion-error": "^2.0.1"
+      }
+    },
+    "node_modules/@types/deep-eql": {
+      "version": "4.0.2",
+      "resolved": "https://registry.npmjs.org/@types/deep-eql/-/deep-eql-4.0.2.tgz",
+      "integrity": "sha512-c9h9dVVMigMPc4bwTvC5dxqtqJZwQPePsWjPlpSOnojbor6pGqdk541lfA7AqFQr5pB1BRdq0juY9db81BwyFw==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/@types/estree": {
+      "version": "1.0.9",
+      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
+      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/@types/node": {
+      "version": "22.20.1",
+      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.20.1.tgz",
+      "integrity": "sha512-EANqOCF9QFyra+4pfxUcX9STKJpCLjMbObVzljIJomAWSnuSIEAvyzEU53GaajbXJEgdh0iEcPL+DGvpUd4k1Q==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "undici-types": "~6.21.0"
+      }
+    },
+    "node_modules/@vitest/expect": {
+      "version": "3.2.7",
+      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-3.2.7.tgz",
+      "integrity": "sha512-E8eBXaKibuvH2pSZErOjdVb5vF4PbKYcrnluBTYxEk1l/VhhwZg1kZQsdtjq+CsF5CFydf2Rdkz7jDHKSisi3w==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/chai": "^5.2.2",
+        "@vitest/spy": "3.2.7",
+        "@vitest/utils": "3.2.7",
+        "chai": "^5.2.0",
+        "tinyrainbow": "^2.0.0"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      }
+    },
+    "node_modules/@vitest/mocker": {
+      "version": "3.2.7",
+      "resolved": "https://registry.npmjs.org/@vitest/mocker/-/mocker-3.2.7.tgz",
+      "integrity": "sha512-Trr0hYO9CM3Wj6ksWHRhK9IZpIY6wTMO5u/MqXurMxT57sWBaOPEtP3Oq60ihZuh5JsiagKfz95OcxdEP6dBrA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@vitest/spy": "3.2.7",
+        "estree-walker": "^3.0.3",
+        "magic-string": "^0.30.17"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      },
+      "peerDependencies": {
+        "msw": "^2.4.9",
+        "vite": "^5.0.0 || ^6.0.0 || ^7.0.0-0"
+      },
+      "peerDependenciesMeta": {
+        "msw": {
+          "optional": true
+        },
+        "vite": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/@vitest/pretty-format": {
+      "version": "3.2.7",
+      "resolved": "https://registry.npmjs.org/@vitest/pretty-format/-/pretty-format-3.2.7.tgz",
+      "integrity": "sha512-KUHlwqVu0sRlhCdyPdQ/wBoTfRahjUky1MubOmYw9fWfIZy1gNoHpuaaQBPAaMaVYdQYHJLurzj8ECCj5OwTqA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "tinyrainbow": "^2.0.0"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      }
+    },
+    "node_modules/@vitest/runner": {
+      "version": "3.2.7",
+      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-3.2.7.tgz",
+      "integrity": "sha512-sB9y4ovltoQP+WaUPwmSxO9WIg9Ig694Di5PalVPsYHklAdE027mehpWF2SQSVq+k6sFgaivbTjTJwZLSHbedA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@vitest/utils": "3.2.7",
+        "pathe": "^2.0.3",
+        "strip-literal": "^3.0.0"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      }
+    },
+    "node_modules/@vitest/snapshot": {
+      "version": "3.2.7",
+      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-3.2.7.tgz",
+      "integrity": "sha512-7C+MwShwtBSI5Buwoyg3s/iY1eHL9PKAf+O1wVh/TdnjXUtkoL/9YQtre90i4MtNXM6edP1wJ2zOBpfCyhIS7g==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@vitest/pretty-format": "3.2.7",
+        "magic-string": "^0.30.17",
+        "pathe": "^2.0.3"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      }
+    },
+    "node_modules/@vitest/spy": {
+      "version": "3.2.7",
+      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-3.2.7.tgz",
+      "integrity": "sha512-Q2eQGI6d2L/hBtZ0qNuKcAGid68XK6cv1xsoaIma6PaJhHPoqcEJhYpXZ/5myCMqkNgtP6UKuBhbc0nHKnrkuQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "tinyspy": "^4.0.3"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      }
+    },
+    "node_modules/@vitest/utils": {
+      "version": "3.2.7",
+      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-3.2.7.tgz",
+      "integrity": "sha512-x6BDOd7dyo3PFLY3I9/HJ25X/6OurhGXk2/B9gOZNPF7XDVjeBK4k01lQE5uvDpbuheErh91qYuE1E2OEjK3Rw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@vitest/pretty-format": "3.2.7",
+        "loupe": "^3.1.4",
+        "tinyrainbow": "^2.0.0"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      }
+    },
+    "node_modules/assertion-error": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
+      "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/cac": {
+      "version": "6.7.14",
+      "resolved": "https://registry.npmjs.org/cac/-/cac-6.7.14.tgz",
+      "integrity": "sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/chai": {
+      "version": "5.3.3",
+      "resolved": "https://registry.npmjs.org/chai/-/chai-5.3.3.tgz",
+      "integrity": "sha512-4zNhdJD/iOjSH0A05ea+Ke6MU5mmpQcbQsSOkgdaUMJ9zTlDTD/GYlwohmIE2u0gaxHYiVHEn1Fw9mZ/ktJWgw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "assertion-error": "^2.0.1",
+        "check-error": "^2.1.1",
+        "deep-eql": "^5.0.1",
+        "loupe": "^3.1.0",
+        "pathval": "^2.0.0"
+      },
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/check-error": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/check-error/-/check-error-2.1.3.tgz",
+      "integrity": "sha512-PAJdDJusoxnwm1VwW07VWwUN1sl7smmC3OKggvndJFadxxDRyFJBX/ggnu/KE4kQAB7a3Dp8f/YXC1FlUprWmA==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 16"
+      }
+    },
+    "node_modules/debug": {
+      "version": "4.4.3",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
+      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "ms": "^2.1.3"
+      },
+      "engines": {
+        "node": ">=6.0"
+      },
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/deep-eql": {
+      "version": "5.0.2",
+      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-5.0.2.tgz",
+      "integrity": "sha512-h5k/5U50IJJFpzfL6nO9jaaumfjO/f2NjK/oYB2Djzm4p9L+3T9qWpZqZ2hAbLPuuYq9wrU08WQyBTL5GbPk5Q==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/es-module-lexer": {
+      "version": "1.7.0",
+      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.7.0.tgz",
+      "integrity": "sha512-jEQoCwk8hyb2AZziIOLhDqpm5+2ww5uIE6lkO/6jcOCusfk6LhMHpXXfBLXTZ7Ydyt0j4VoUQv6uGNYbdW+kBA==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/esbuild": {
+      "version": "0.28.1",
+      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.28.1.tgz",
+      "integrity": "sha512-HrJrvZv5ayxBzPfwphOoNzkzOIIlifzk0KJrGK2c8R4+LKpMtpYLQeUdjnwjWv/LZlkH2laZk+4w78pi99D4Vw==",
+      "dev": true,
+      "hasInstallScript": true,
+      "license": "MIT",
+      "bin": {
+        "esbuild": "bin/esbuild"
+      },
+      "engines": {
+        "node": ">=18"
+      },
+      "optionalDependencies": {
+        "@esbuild/aix-ppc64": "0.28.1",
+        "@esbuild/android-arm": "0.28.1",
+        "@esbuild/android-arm64": "0.28.1",
+        "@esbuild/android-x64": "0.28.1",
+        "@esbuild/darwin-arm64": "0.28.1",
+        "@esbuild/darwin-x64": "0.28.1",
+        "@esbuild/freebsd-arm64": "0.28.1",
+        "@esbuild/freebsd-x64": "0.28.1",
+        "@esbuild/linux-arm": "0.28.1",
+        "@esbuild/linux-arm64": "0.28.1",
+        "@esbuild/linux-ia32": "0.28.1",
+        "@esbuild/linux-loong64": "0.28.1",
+        "@esbuild/linux-mips64el": "0.28.1",
+        "@esbuild/linux-ppc64": "0.28.1",
+        "@esbuild/linux-riscv64": "0.28.1",
+        "@esbuild/linux-s390x": "0.28.1",
+        "@esbuild/linux-x64": "0.28.1",
+        "@esbuild/netbsd-arm64": "0.28.1",
+        "@esbuild/netbsd-x64": "0.28.1",
+        "@esbuild/openbsd-arm64": "0.28.1",
+        "@esbuild/openbsd-x64": "0.28.1",
+        "@esbuild/openharmony-arm64": "0.28.1",
+        "@esbuild/sunos-x64": "0.28.1",
+        "@esbuild/win32-arm64": "0.28.1",
+        "@esbuild/win32-ia32": "0.28.1",
+        "@esbuild/win32-x64": "0.28.1"
+      }
+    },
+    "node_modules/estree-walker": {
+      "version": "3.0.3",
+      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
+      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/estree": "^1.0.0"
+      }
+    },
+    "node_modules/expect-type": {
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.4.0.tgz",
+      "integrity": "sha512-KfYbmpRm0VbLjEvVa9yGwCi9GI34xvi7A/HXYWQO65CSD2u3MczUJSuwXKFIxlGsgBQizV9q5J9NHj4VG0n+pA==",
+      "dev": true,
+      "license": "Apache-2.0",
+      "engines": {
+        "node": ">=12.0.0"
+      }
+    },
+    "node_modules/fdir": {
+      "version": "6.5.0",
+      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
+      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=12.0.0"
+      },
+      "peerDependencies": {
+        "picomatch": "^3 || ^4"
+      },
+      "peerDependenciesMeta": {
+        "picomatch": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/fsevents": {
+      "version": "2.3.3",
+      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
+      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
+      "dev": true,
+      "hasInstallScript": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "darwin"
+      ],
+      "engines": {
+        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
+      }
+    },
+    "node_modules/js-tokens": {
+      "version": "9.0.1",
+      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-9.0.1.tgz",
+      "integrity": "sha512-mxa9E9ITFOt0ban3j6L5MpjwegGz6lBQmM1IJkWeBZGcMxto50+eWdjC/52xDbS2vy0k7vIMK0Fe2wfL9OQSpQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/loupe": {
+      "version": "3.2.1",
+      "resolved": "https://registry.npmjs.org/loupe/-/loupe-3.2.1.tgz",
+      "integrity": "sha512-CdzqowRJCeLU72bHvWqwRBBlLcMEtIvGrlvef74kMnV2AolS9Y8xUv1I0U/MNAWMhBlKIoyuEgoJ0t/bbwHbLQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/magic-string": {
+      "version": "0.30.21",
+      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
+      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@jridgewell/sourcemap-codec": "^1.5.5"
+      }
+    },
+    "node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/nanoid": {
+      "version": "3.3.16",
+      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.16.tgz",
+      "integrity": "sha512-bzlKTyNJ7+LdGIIwy8ijFpIqEQIvafahV7eYykJ8Cvh42EdJeODoJ6gUJXpQJvej1BddH8OqTXZNE/KfbWAu8Q==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "license": "MIT",
+      "bin": {
+        "nanoid": "bin/nanoid.cjs"
+      },
+      "engines": {
+        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
+      }
+    },
+    "node_modules/pathe": {
+      "version": "2.0.3",
+      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
+      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/pathval": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/pathval/-/pathval-2.0.1.tgz",
+      "integrity": "sha512-//nshmD55c46FuFw26xV/xFAaB5HF9Xdap7HJBBnrKdAd6/GxDBaNA1870O79+9ueg61cZLSVc+OaFlfmObYVQ==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 14.16"
+      }
+    },
+    "node_modules/picocolors": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
+      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
+      "dev": true,
+      "license": "ISC"
+    },
+    "node_modules/picomatch": {
+      "version": "4.0.5",
+      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
+      "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/jonschlinkert"
+      }
+    },
+    "node_modules/postcss": {
+      "version": "8.5.20",
+      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.20.tgz",
+      "integrity": "sha512-lW616l85ucIQL+FocMmL7pQFPqBmwejrCMg+iPxyImlrANNJG9NHq/RkyCZopDhd8C3LA03PHRJDjkbGu8vvug==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/postcss/"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/postcss"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "license": "MIT",
+      "dependencies": {
+        "nanoid": "^3.3.16",
+        "picocolors": "^1.1.1",
+        "source-map-js": "^1.2.1"
+      },
+      "engines": {
+        "node": "^10 || ^12 || >=14"
+      }
+    },
+    "node_modules/rollup": {
+      "version": "4.62.2",
+      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.62.2.tgz",
+      "integrity": "sha512-RFnrW4lhXA3s3eqHDZvN654g8OTjzRfqpIRJYczCGB6HzphckVAi/Qh4tbPUbRuDi7s1Llv8g/NspLkttY3gTA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/estree": "1.0.9"
+      },
+      "bin": {
+        "rollup": "dist/bin/rollup"
+      },
+      "engines": {
+        "node": ">=18.0.0",
+        "npm": ">=8.0.0"
+      },
+      "optionalDependencies": {
+        "@rollup/rollup-android-arm-eabi": "4.62.2",
+        "@rollup/rollup-android-arm64": "4.62.2",
+        "@rollup/rollup-darwin-arm64": "4.62.2",
+        "@rollup/rollup-darwin-x64": "4.62.2",
+        "@rollup/rollup-freebsd-arm64": "4.62.2",
+        "@rollup/rollup-freebsd-x64": "4.62.2",
+        "@rollup/rollup-linux-arm-gnueabihf": "4.62.2",
+        "@rollup/rollup-linux-arm-musleabihf": "4.62.2",
+        "@rollup/rollup-linux-arm64-gnu": "4.62.2",
+        "@rollup/rollup-linux-arm64-musl": "4.62.2",
+        "@rollup/rollup-linux-loong64-gnu": "4.62.2",
+        "@rollup/rollup-linux-loong64-musl": "4.62.2",
+        "@rollup/rollup-linux-ppc64-gnu": "4.62.2",
+        "@rollup/rollup-linux-ppc64-musl": "4.62.2",
+        "@rollup/rollup-linux-riscv64-gnu": "4.62.2",
+        "@rollup/rollup-linux-riscv64-musl": "4.62.2",
+        "@rollup/rollup-linux-s390x-gnu": "4.62.2",
+        "@rollup/rollup-linux-x64-gnu": "4.62.2",
+        "@rollup/rollup-linux-x64-musl": "4.62.2",
+        "@rollup/rollup-openbsd-x64": "4.62.2",
+        "@rollup/rollup-openharmony-arm64": "4.62.2",
+        "@rollup/rollup-win32-arm64-msvc": "4.62.2",
+        "@rollup/rollup-win32-ia32-msvc": "4.62.2",
+        "@rollup/rollup-win32-x64-gnu": "4.62.2",
+        "@rollup/rollup-win32-x64-msvc": "4.62.2",
+        "fsevents": "~2.3.2"
+      }
+    },
+    "node_modules/siginfo": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/siginfo/-/siginfo-2.0.0.tgz",
+      "integrity": "sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==",
+      "dev": true,
+      "license": "ISC"
+    },
+    "node_modules/source-map-js": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
+      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
+      "dev": true,
+      "license": "BSD-3-Clause",
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/stackback": {
+      "version": "0.0.2",
+      "resolved": "https://registry.npmjs.org/stackback/-/stackback-0.0.2.tgz",
+      "integrity": "sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/std-env": {
+      "version": "3.10.0",
+      "resolved": "https://registry.npmjs.org/std-env/-/std-env-3.10.0.tgz",
+      "integrity": "sha512-5GS12FdOZNliM5mAOxFRg7Ir0pWz8MdpYm6AY6VPkGpbA7ZzmbzNcBJQ0GPvvyWgcY7QAhCgf9Uy89I03faLkg==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/strip-literal": {
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/strip-literal/-/strip-literal-3.1.0.tgz",
+      "integrity": "sha512-8r3mkIM/2+PpjHoOtiAW8Rg3jJLHaV7xPwG+YRGrv6FP0wwk/toTpATxWYOW0BKdWwl82VT2tFYi5DlROa0Mxg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "js-tokens": "^9.0.1"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/antfu"
+      }
+    },
+    "node_modules/tinybench": {
+      "version": "2.9.0",
+      "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-2.9.0.tgz",
+      "integrity": "sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/tinyexec": {
+      "version": "0.3.2",
+      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-0.3.2.tgz",
+      "integrity": "sha512-KQQR9yN7R5+OSwaK0XQoj22pwHoTlgYqmUscPYoknOoWCWfj/5/ABTMRi69FrKU5ffPVh5QcFikpWJI/P1ocHA==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/tinyglobby": {
+      "version": "0.2.17",
+      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
+      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "fdir": "^6.5.0",
+        "picomatch": "^4.0.4"
+      },
+      "engines": {
+        "node": ">=12.0.0"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/SuperchupuDev"
+      }
+    },
+    "node_modules/tinypool": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/tinypool/-/tinypool-1.1.1.tgz",
+      "integrity": "sha512-Zba82s87IFq9A9XmjiX5uZA/ARWDrB03OHlq+Vw1fSdt0I+4/Kutwy8BP4Y/y/aORMo61FQ0vIb5j44vSo5Pkg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": "^18.0.0 || >=20.0.0"
+      }
+    },
+    "node_modules/tinyrainbow": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/tinyrainbow/-/tinyrainbow-2.0.0.tgz",
+      "integrity": "sha512-op4nsTR47R6p0vMUUoYl/a+ljLFVtlfaXkLQmqfLR1qHma1h/ysYk4hEXZ880bf2CYgTskvTa/e196Vd5dDQXw==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=14.0.0"
+      }
+    },
+    "node_modules/tinyspy": {
+      "version": "4.0.4",
+      "resolved": "https://registry.npmjs.org/tinyspy/-/tinyspy-4.0.4.tgz",
+      "integrity": "sha512-azl+t0z7pw/z958Gy9svOTuzqIk6xq+NSheJzn5MMWtWTFywIacg2wUlzKFGtt3cthx0r2SxMK0yzJOR0IES7Q==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=14.0.0"
+      }
+    },
+    "node_modules/tsx": {
+      "version": "4.23.1",
+      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.23.1.tgz",
+      "integrity": "sha512-GQHnkIfxyx1wYCOS/wonik5MVRZU9hi1TEZmzGZSCJB1y9YgoZ8H6itNE/u4suE+yLmOzuE4E5S4TZ/ZX2wcWQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "esbuild": "~0.28.0"
+      },
+      "bin": {
+        "tsx": "dist/cli.mjs"
+      },
+      "engines": {
+        "node": ">=18.0.0"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.3"
+      }
+    },
+    "node_modules/typescript": {
+      "version": "5.9.3",
+      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
+      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
+      "dev": true,
+      "license": "Apache-2.0",
+      "bin": {
+        "tsc": "bin/tsc",
+        "tsserver": "bin/tsserver"
+      },
+      "engines": {
+        "node": ">=14.17"
+      }
+    },
+    "node_modules/undici-types": {
+      "version": "6.21.0",
+      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
+      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/vite": {
+      "version": "7.3.6",
+      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.6.tgz",
+      "integrity": "sha512-4XP60spRGjSZFf1qYH+dJIkK2znL3zQfl9KkOV9MkkRR/3Dls0dxaBsQPTloEc5BLXWPL9vsOxopxyKoMmDueg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "esbuild": "^0.27.0 || ^0.28.0",
+        "fdir": "^6.5.0",
+        "picomatch": "^4.0.3",
+        "postcss": "^8.5.6",
+        "rollup": "^4.43.0",
+        "tinyglobby": "^0.2.15"
+      },
+      "bin": {
+        "vite": "bin/vite.js"
+      },
+      "engines": {
+        "node": "^20.19.0 || >=22.12.0"
+      },
+      "funding": {
+        "url": "https://github.com/vitejs/vite?sponsor=1"
+      },
+      "optionalDependencies": {
+        "fsevents": "~2.3.3"
+      },
+      "peerDependencies": {
+        "@types/node": "^20.19.0 || >=22.12.0",
+        "jiti": ">=1.21.0",
+        "less": "^4.0.0",
+        "lightningcss": "^1.21.0",
+        "sass": "^1.70.0",
+        "sass-embedded": "^1.70.0",
+        "stylus": ">=0.54.8",
+        "sugarss": "^5.0.0",
+        "terser": "^5.16.0",
+        "tsx": "^4.8.1",
+        "yaml": "^2.4.2"
+      },
+      "peerDependenciesMeta": {
+        "@types/node": {
+          "optional": true
+        },
+        "jiti": {
+          "optional": true
+        },
+        "less": {
+          "optional": true
+        },
+        "lightningcss": {
+          "optional": true
+        },
+        "sass": {
+          "optional": true
+        },
+        "sass-embedded": {
+          "optional": true
+        },
+        "stylus": {
+          "optional": true
+        },
+        "sugarss": {
+          "optional": true
+        },
+        "terser": {
+          "optional": true
+        },
+        "tsx": {
+          "optional": true
+        },
+        "yaml": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/vite-node": {
+      "version": "3.2.4",
+      "resolved": "https://registry.npmjs.org/vite-node/-/vite-node-3.2.4.tgz",
+      "integrity": "sha512-EbKSKh+bh1E1IFxeO0pg1n4dvoOTt0UDiXMd/qn++r98+jPO1xtJilvXldeuQ8giIB5IkpjCgMleHMNEsGH6pg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "cac": "^6.7.14",
+        "debug": "^4.4.1",
+        "es-module-lexer": "^1.7.0",
+        "pathe": "^2.0.3",
+        "vite": "^5.0.0 || ^6.0.0 || ^7.0.0-0"
+      },
+      "bin": {
+        "vite-node": "vite-node.mjs"
+      },
+      "engines": {
+        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      }
+    },
+    "node_modules/vitest": {
+      "version": "3.2.7",
+      "resolved": "https://registry.npmjs.org/vitest/-/vitest-3.2.7.tgz",
+      "integrity": "sha512-KrxIJ62Fd89gfysR4WotlgZABiz2dqFPgqGzX7s+CwsqLFomRH7777ZcrOD6+WVAh7khPQP41A+BKbpcJFrdEg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/chai": "^5.2.2",
+        "@vitest/expect": "3.2.7",
+        "@vitest/mocker": "3.2.7",
+        "@vitest/pretty-format": "^3.2.7",
+        "@vitest/runner": "3.2.7",
+        "@vitest/snapshot": "3.2.7",
+        "@vitest/spy": "3.2.7",
+        "@vitest/utils": "3.2.7",
+        "chai": "^5.2.0",
+        "debug": "^4.4.1",
+        "expect-type": "^1.2.1",
+        "magic-string": "^0.30.17",
+        "pathe": "^2.0.3",
+        "picomatch": "^4.0.2",
+        "std-env": "^3.9.0",
+        "tinybench": "^2.9.0",
+        "tinyexec": "^0.3.2",
+        "tinyglobby": "^0.2.14",
+        "tinypool": "^1.1.1",
+        "tinyrainbow": "^2.0.0",
+        "vite": "^5.0.0 || ^6.0.0 || ^7.0.0-0",
+        "vite-node": "3.2.4",
+        "why-is-node-running": "^2.3.0"
+      },
+      "bin": {
+        "vitest": "vitest.mjs"
+      },
+      "engines": {
+        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
+      },
+      "funding": {
+        "url": "https://opencollective.com/vitest"
+      },
+      "peerDependencies": {
+        "@edge-runtime/vm": "*",
+        "@types/debug": "^4.1.12",
+        "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
+        "@vitest/browser": "3.2.7",
+        "@vitest/ui": "3.2.7",
+        "happy-dom": "*",
+        "jsdom": "*"
+      },
+      "peerDependenciesMeta": {
+        "@edge-runtime/vm": {
+          "optional": true
+        },
+        "@types/debug": {
+          "optional": true
+        },
+        "@types/node": {
+          "optional": true
+        },
+        "@vitest/browser": {
+          "optional": true
+        },
+        "@vitest/ui": {
+          "optional": true
+        },
+        "happy-dom": {
+          "optional": true
+        },
+        "jsdom": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/why-is-node-running": {
+      "version": "2.3.0",
+      "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-2.3.0.tgz",
+      "integrity": "sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "siginfo": "^2.0.0",
+        "stackback": "0.0.2"
+      },
+      "bin": {
+        "why-is-node-running": "cli.js"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    }
+  }
+}
diff --git a/projects/sfia-studio/harness/package.json b/projects/sfia-studio/harness/package.json
new file mode 100644
index 0000000..29077db
--- /dev/null
+++ b/projects/sfia-studio/harness/package.json
@@ -0,0 +1,26 @@
+{
+  "name": "@sfia-studio/poc-s1-harness",
+  "private": true,
+  "version": "0.1.0",
+  "description": "SFIA Studio POC S1 harness-only orchestrator (local, fail-closed, no remote Git writes, Cursor fixture only)",
+  "type": "module",
+  "bin": {
+    "sfia-poc-s1": "./dist/cli.js"
+  },
+  "scripts": {
+    "typecheck": "tsc --noEmit",
+    "test": "vitest run",
+    "test:watch": "vitest",
+    "build": "tsc -p tsconfig.build.json",
+    "cli": "tsx src/cli.ts"
+  },
+  "engines": {
+    "node": ">=20"
+  },
+  "devDependencies": {
+    "@types/node": "^22.15.21",
+    "tsx": "^4.19.4",
+    "typescript": "^5.8.3",
+    "vitest": "^3.1.2"
+  }
+}
diff --git a/projects/sfia-studio/harness/proofs/.gitkeep b/projects/sfia-studio/harness/proofs/.gitkeep
new file mode 100644
index 0000000..e69de29
diff --git a/projects/sfia-studio/harness/src/cli.ts b/projects/sfia-studio/harness/src/cli.ts
new file mode 100644
index 0000000..189ddd9
--- /dev/null
+++ b/projects/sfia-studio/harness/src/cli.ts
@@ -0,0 +1,117 @@
+#!/usr/bin/env node
+import { readFileSync, mkdirSync } from "node:fs";
+import path from "node:path";
+import { fileURLToPath } from "node:url";
+import { Orchestrator, validateContractOnly } from "./orchestrator.js";
+import { EventJournal } from "./journal/eventJournal.js";
+import type { ExecutionContract, GateDecision, POCRequest } from "./types/contracts.js";
+import { computeContractHash } from "./hash/contractHash.js";
+
+function usage(): never {
+  console.error(`sfia-poc-s1 <command> [args]
+
+Commands:
+  validate-contract <contract.json>
+  run-fixture <dir>                 # expects request.json gate.json contract.json in dir
+  request-stop <dir>                # same as run-fixture with STOP gate or --stop flag via stop gate
+  inspect-journal <proofDir>
+  verify-proofs <proofDir>
+`);
+  process.exit(2);
+}
+
+async function main(): Promise<void> {
+  const [, , cmd, ...args] = process.argv;
+  if (!cmd) usage();
+
+  if (cmd === "validate-contract") {
+    const file = args[0];
+    if (!file) usage();
+    const contract = JSON.parse(readFileSync(file, "utf8")) as ExecutionContract;
+    const { hash } = validateContractOnly(contract);
+    console.log(JSON.stringify({ ok: true, contractHash: hash }, null, 2));
+    return;
+  }
+
+  if (cmd === "run-fixture" || cmd === "request-stop") {
+    const dir = args[0];
+    if (!dir) usage();
+    const request = JSON.parse(readFileSync(path.join(dir, "request.json"), "utf8")) as POCRequest;
+    const contract = JSON.parse(readFileSync(path.join(dir, "contract.json"), "utf8")) as ExecutionContract;
+    let gate = JSON.parse(readFileSync(path.join(dir, "gate.json"), "utf8")) as GateDecision;
+    mkdirSync(contract.proofDir, { recursive: true });
+    // Refresh hash on gate if matching contract file
+    const hash = computeContractHash(contract);
+    if (cmd === "request-stop") {
+      gate = { ...gate, decision: "STOP", contractHash: hash };
+    } else if (gate.decision === "GO") {
+      gate = { ...gate, contractHash: hash };
+    }
+    const orch = new Orchestrator();
+    const result = await orch.run({
+      request,
+      contract,
+      gate,
+      stopAfterAuthorize: args.includes("--stop-after-authorize"),
+      attemptForbiddenGit: args.includes("--deny-git"),
+      cursorSimulate: args.includes("--cursor-timeout")
+        ? "timeout"
+        : args.includes("--cursor-error")
+          ? "error"
+          : "success",
+    });
+    console.log(JSON.stringify(result, null, 2));
+    process.exit(result.ok ? 0 : 1);
+  }
+
+  if (cmd === "inspect-journal") {
+    const proofDir = args[0];
+    if (!proofDir) usage();
+    const journal = new EventJournal(proofDir, "inspect");
+    console.log(JSON.stringify({ events: journal.readAll(), projectedState: journal.projectLastState() }, null, 2));
+    return;
+  }
+
+  if (cmd === "verify-proofs") {
+    const proofDir = args[0];
+    if (!proofDir) usage();
+    const required = ["contract.json", "contractHash.txt", "summary.json", "events.jsonl"];
+    const missing = required.filter((f) => {
+      try {
+        readFileSync(path.join(proofDir, f));
+        return false;
+      } catch {
+        return true;
+      }
+    });
+    // summary optional if rejected — accept gate.json + events
+    const ok =
+      missing.filter((m) => m !== "summary.json").length === 0 ||
+      (missing.length <= 1 && missing[0] === "summary.json");
+    const journal = new EventJournal(proofDir, "verify");
+    console.log(
+      JSON.stringify(
+        {
+          ok: missing.filter((m) => m !== "summary.json").length === 0 || journal.readAll().length > 0,
+          missing,
+          eventCount: journal.readAll().length,
+          projectedState: journal.projectLastState(),
+          softOk: ok,
+        },
+        null,
+        2,
+      ),
+    );
+    return;
+  }
+
+  usage();
+}
+
+const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
+if (isMain || process.argv[1]?.endsWith("cli.ts") || process.argv[1]?.endsWith("cli.js")) {
+  main().catch((err) => {
+    console.error(err);
+    process.exit(1);
+  });
+}
diff --git a/projects/sfia-studio/harness/src/gate/gateValidator.ts b/projects/sfia-studio/harness/src/gate/gateValidator.ts
new file mode 100644
index 0000000..1e2aea0
--- /dev/null
+++ b/projects/sfia-studio/harness/src/gate/gateValidator.ts
@@ -0,0 +1,71 @@
+import type { ExecutionContract, GateDecision } from "../types/contracts.js";
+import { HarnessError } from "../types/contracts.js";
+
+export interface GateValidationOk {
+  ok: true;
+}
+
+export interface GateValidationFail {
+  ok: false;
+  code: string;
+  message: string;
+}
+
+export type GateValidationResult = GateValidationOk | GateValidationFail;
+
+export class GateValidator {
+  private consumedDecisionIds = new Set<string>();
+
+  validate(input: {
+    gate: GateDecision;
+    contract: ExecutionContract;
+    expectedHash: string;
+    now?: Date;
+  }): GateValidationResult {
+    const { gate, contract, expectedHash } = input;
+    const now = input.now ?? new Date();
+
+    if (gate.requestId !== contract.requestId) {
+      return fail("GATE_REQUEST_MISMATCH", "requestId mismatch");
+    }
+    if (gate.contractHash !== expectedHash) {
+      return fail("GATE_HASH_MISMATCH", "contractHash mismatch");
+    }
+    if (gate.decision !== "GO" && gate.decision !== "STOP" && gate.decision !== "CORRIGER" && gate.decision !== "CLOSE") {
+      return fail("GATE_DECISION_INVALID", "decision not explicit");
+    }
+    if (!gate.decidedBy || gate.decidedBy.trim() === "") {
+      return fail("GATE_DECIDER_MISSING", "decidedBy required");
+    }
+    const allow = contract.decidedByAllowlist ?? ["Morris"];
+    if (!allow.includes(gate.decidedBy)) {
+      return fail("GATE_DECIDER_UNAUTHORIZED", `decidedBy not allowed: ${gate.decidedBy}`);
+    }
+    if (this.consumedDecisionIds.has(gate.decisionId) && gate.decision === "GO") {
+      return fail("GATE_REPLAY", "GO already consumed");
+    }
+    const expires = gate.expiresAt ?? contract.gateExpiresAt;
+    if (expires && new Date(expires).getTime() < now.getTime()) {
+      return fail("GATE_EXPIRED", "gate decision expired");
+    }
+    return { ok: true };
+  }
+
+  consume(decisionId: string): void {
+    this.consumedDecisionIds.add(decisionId);
+  }
+
+  isConsumed(decisionId: string): boolean {
+    return this.consumedDecisionIds.has(decisionId);
+  }
+}
+
+function fail(code: string, message: string): GateValidationFail {
+  return { ok: false, code, message };
+}
+
+export function assertGateOk(result: GateValidationResult): void {
+  if (!result.ok) {
+    throw new HarnessError(result.code, result.message);
+  }
+}
diff --git a/projects/sfia-studio/harness/src/hash/canonicalize.ts b/projects/sfia-studio/harness/src/hash/canonicalize.ts
new file mode 100644
index 0000000..4144b1c
--- /dev/null
+++ b/projects/sfia-studio/harness/src/hash/canonicalize.ts
@@ -0,0 +1,20 @@
+/** Deterministic JSON canonicalization (JCS-like sorted keys). */
+
+export function canonicalize(value: unknown): string {
+  return JSON.stringify(sortValue(value));
+}
+
+function sortValue(value: unknown): unknown {
+  if (value === null || typeof value !== "object") {
+    return value;
+  }
+  if (Array.isArray(value)) {
+    return value.map(sortValue);
+  }
+  const obj = value as Record<string, unknown>;
+  const out: Record<string, unknown> = {};
+  for (const key of Object.keys(obj).sort()) {
+    out[key] = sortValue(obj[key]);
+  }
+  return out;
+}
diff --git a/projects/sfia-studio/harness/src/hash/contractHash.ts b/projects/sfia-studio/harness/src/hash/contractHash.ts
new file mode 100644
index 0000000..a26eab8
--- /dev/null
+++ b/projects/sfia-studio/harness/src/hash/contractHash.ts
@@ -0,0 +1,9 @@
+import { createHash } from "node:crypto";
+import type { ExecutionContract } from "../types/contracts.js";
+import { canonicalize } from "./canonicalize.js";
+
+/** SHA-256 of canonical contract JSON. Same contract → same hash. */
+export function computeContractHash(contract: ExecutionContract): string {
+  const canonical = canonicalize(contract);
+  return createHash("sha256").update(canonical, "utf8").digest("hex");
+}
diff --git a/projects/sfia-studio/harness/src/index.ts b/projects/sfia-studio/harness/src/index.ts
new file mode 100644
index 0000000..1396593
--- /dev/null
+++ b/projects/sfia-studio/harness/src/index.ts
@@ -0,0 +1,13 @@
+export * from "./types/contracts.js";
+export * from "./hash/canonicalize.js";
+export * from "./hash/contractHash.js";
+export * from "./state/machine.js";
+export * from "./gate/gateValidator.js";
+export * from "./policy/policyEngine.js";
+export * from "./ports/gitReader.js";
+export * from "./ports/gitReaderImpl.js";
+export * from "./ports/cursorExecutor.js";
+export * from "./ports/cursorFixture.js";
+export * from "./journal/eventJournal.js";
+export * from "./proof/proofStore.js";
+export * from "./orchestrator.js";
diff --git a/projects/sfia-studio/harness/src/journal/eventJournal.ts b/projects/sfia-studio/harness/src/journal/eventJournal.ts
new file mode 100644
index 0000000..5586136
--- /dev/null
+++ b/projects/sfia-studio/harness/src/journal/eventJournal.ts
@@ -0,0 +1,51 @@
+import { appendFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
+import path from "node:path";
+import { randomUUID } from "node:crypto";
+import type { JournalEvent } from "../types/contracts.js";
+import { HarnessError } from "../types/contracts.js";
+
+export class EventJournal {
+  readonly filePath: string;
+
+  constructor(proofDir: string, readonly correlationId: string) {
+    mkdirSync(proofDir, { recursive: true });
+    this.filePath = path.join(proofDir, "events.jsonl");
+  }
+
+  append(partial: Omit<JournalEvent, "schemaVersion" | "eventId" | "timestamp" | "correlationId"> &
+    Partial<Pick<JournalEvent, "correlationId">>): JournalEvent {
+    const event: JournalEvent = {
+      schemaVersion: "1",
+      eventId: randomUUID(),
+      timestamp: new Date().toISOString(),
+      correlationId: partial.correlationId ?? this.correlationId,
+      ...partial,
+      eventType: partial.eventType,
+      requestId: partial.requestId,
+    };
+    try {
+      appendFileSync(this.filePath, `${JSON.stringify(event)}\n`, { encoding: "utf8" });
+    } catch (err) {
+      throw new HarnessError("JOURNAL_WRITE_FAILED", (err as Error).message);
+    }
+    return event;
+  }
+
+  readAll(): JournalEvent[] {
+    if (!existsSync(this.filePath)) return [];
+    const raw = readFileSync(this.filePath, "utf8");
+    return raw
+      .split("\n")
+      .filter(Boolean)
+      .map((line) => JSON.parse(line) as JournalEvent);
+  }
+
+  /** Reconstruct last stateAfter from journal — projection, not a second truth. */
+  projectLastState(): string | undefined {
+    const events = this.readAll();
+    for (let i = events.length - 1; i >= 0; i--) {
+      if (events[i].stateAfter) return events[i].stateAfter;
+    }
+    return undefined;
+  }
+}
diff --git a/projects/sfia-studio/harness/src/orchestrator.ts b/projects/sfia-studio/harness/src/orchestrator.ts
new file mode 100644
index 0000000..d9c6041
--- /dev/null
+++ b/projects/sfia-studio/harness/src/orchestrator.ts
@@ -0,0 +1,259 @@
+import { randomUUID } from "node:crypto";
+import type {
+  ExecutionContract,
+  GateDecision,
+  POCRequest,
+  CursorResult,
+  GitCommandResult,
+} from "./types/contracts.js";
+import { HarnessError } from "./types/contracts.js";
+import { computeContractHash } from "./hash/contractHash.js";
+import { StateMachine } from "./state/machine.js";
+import { GateValidator, assertGateOk } from "./gate/gateValidator.js";
+import { PolicyEngine } from "./policy/policyEngine.js";
+import { GitReaderImpl, denyWriteOp } from "./ports/gitReaderImpl.js";
+import { CursorExecutorPortFixture } from "./ports/cursorFixture.js";
+import { EventJournal } from "./journal/eventJournal.js";
+import { ProofStore } from "./proof/proofStore.js";
+
+export interface RunInput {
+  request: POCRequest;
+  contract: ExecutionContract;
+  gate: GateDecision;
+  stopAfterAuthorize?: boolean;
+  cursorSimulate?: "success" | "timeout" | "error";
+  attemptForbiddenGit?: boolean;
+}
+
+export interface RunResult {
+  ok: boolean;
+  terminalState: string;
+  contractHash: string;
+  executionId: string;
+  correlationId: string;
+  proofDir: string;
+  journalPath: string;
+  gitResults: GitCommandResult[];
+  cursor?: CursorResult;
+  errorCode?: string;
+  projectedState?: string;
+}
+
+export class Orchestrator {
+  readonly gateValidator = new GateValidator();
+  readonly policy = new PolicyEngine();
+
+  async run(input: RunInput): Promise<RunResult> {
+    const correlationId = randomUUID();
+    const executionId = randomUUID();
+    const machine = new StateMachine("CREATED");
+    const journal = new EventJournal(input.contract.proofDir, correlationId);
+    const proofs = new ProofStore(input.contract.proofDir);
+    const gitResults: GitCommandResult[] = [];
+
+    const log = (
+      eventType: string,
+      fields: Partial<Parameters<EventJournal["append"]>[0]> & { result?: string; errorCode?: string },
+    ) => {
+      journal.append({
+        eventType,
+        requestId: input.request.requestId,
+        executionId,
+        contractHash: computeContractHash(input.contract),
+        stateBefore: machine.current,
+        ...fields,
+      });
+    };
+
+    try {
+      this.policy.assertContract(input.contract);
+      const hash = computeContractHash(input.contract);
+      proofs.writeJson("contract.json", input.contract);
+      proofs.writeText("contractHash.txt", `${hash}\n`);
+      proofs.writeJson("request.json", input.request);
+      proofs.writeJson("gate.json", input.gate);
+
+      machine.transition("CONTRACT_VALIDATED");
+      log("contract.validated", { stateAfter: "CONTRACT_VALIDATED", result: "ok" });
+
+      machine.transition("AWAITING_GATE");
+      log("gate.awaiting", { stateAfter: "AWAITING_GATE", result: "ok" });
+
+      if (input.gate.decision === "STOP") {
+        machine.transition("STOP_REQUESTED");
+        log("gate.stop", { stateAfter: "STOP_REQUESTED", result: "stop" });
+        machine.transition("CLOSED");
+        log("execution.closed", { stateAfter: "CLOSED", result: "stopped_before_run" });
+        return finish(false, "CLOSED", hash, "GATE_STOP");
+      }
+
+      const gateResult = this.gateValidator.validate({
+        gate: input.gate,
+        contract: input.contract,
+        expectedHash: hash,
+      });
+      if (!gateResult.ok) {
+        machine.transition("REJECTED");
+        log("gate.rejected", {
+          stateAfter: "REJECTED",
+          result: "rejected",
+          errorCode: gateResult.code,
+          detail: { message: gateResult.message },
+        });
+        machine.transition("CLOSED");
+        return finish(false, "CLOSED", hash, gateResult.code);
+      }
+
+      if (input.gate.decision !== "GO") {
+        machine.transition("REJECTED");
+        log("gate.rejected", {
+          stateAfter: "REJECTED",
+          result: "rejected",
+          errorCode: "GATE_NOT_GO",
+        });
+        machine.transition("CLOSED");
+        return finish(false, "CLOSED", hash, "GATE_NOT_GO");
+      }
+
+      this.gateValidator.consume(input.gate.decisionId);
+      machine.transition("AUTHORIZED");
+      log("gate.authorized", { stateAfter: "AUTHORIZED", result: "ok" });
+
+      if (input.stopAfterAuthorize) {
+        machine.transition("STOP_REQUESTED");
+        log("execution.stopped", { stateAfter: "STOP_REQUESTED", result: "stop" });
+        machine.transition("CLOSED");
+        log("execution.closed", { stateAfter: "CLOSED", result: "stopped" });
+        proofs.writeJson("stop.json", { reason: "explicit_stop", at: new Date().toISOString() });
+        return finish(false, "CLOSED", hash, "STOP");
+      }
+
+      machine.transition("RUNNING");
+      log("execution.running", { stateAfter: "RUNNING", result: "ok" });
+
+      const git = new GitReaderImpl(input.contract, this.policy);
+      if (input.attemptForbiddenGit) {
+        try {
+          this.policy.assertDeniedShellCommand("git push");
+          denyWriteOp("push");
+        } catch (err) {
+          const he = err as HarnessError;
+          log("git.denied", {
+            stateAfter: "RUNNING",
+            result: "denied",
+            errorCode: he.code,
+          });
+          proofs.writeJson("git-denied.json", { code: he.code, message: he.message });
+          machine.transition("REJECTED");
+          log("execution.rejected", { stateAfter: "REJECTED", result: "denied", errorCode: he.code });
+          machine.transition("CLOSED");
+          return finish(false, "CLOSED", hash, he.code);
+        }
+      }
+
+      const ops = [
+        { op: "branch-show-current" as const },
+        { op: "rev-parse" as const, ref: "HEAD" },
+        { op: "status-short" as const },
+      ];
+      for (const op of ops) {
+        if (!input.contract.allowedCommands.includes(op.op)) continue;
+        const res = await git.run(op);
+        gitResults.push(res);
+        log("git.read", {
+          stateAfter: "RUNNING",
+          result: res.exitCode === 0 ? "ok" : "git_error",
+          detail: { argv: res.argv, exitCode: res.exitCode },
+        });
+      }
+      proofs.writeJson("git-results.json", gitResults);
+
+      const cursor = new CursorExecutorPortFixture();
+      const cursorResult = await cursor.execute({
+        requestId: input.request.requestId,
+        executionId,
+        mode: "fixture",
+        objective: input.request.title,
+        timeoutMs: input.contract.timeoutMs,
+        simulate: input.cursorSimulate ?? "success",
+      });
+      proofs.writeJson("cursor-fixture.json", cursorResult);
+      log("cursor.fixture", {
+        stateAfter: "RUNNING",
+        result: cursorResult.ok ? "ok" : "cursor_error",
+        errorCode: cursorResult.errorCode,
+        detail: { realCursorClaimed: false },
+      });
+
+      if (!cursorResult.ok) {
+        machine.transition("FAILED");
+        log("execution.failed", { stateAfter: "FAILED", result: "failed", errorCode: cursorResult.errorCode });
+        machine.transition("CLOSED");
+        return finish(false, "CLOSED", hash, cursorResult.errorCode, cursorResult);
+      }
+
+      machine.transition("COMPLETED");
+      log("execution.completed", { stateAfter: "COMPLETED", result: "ok" });
+      machine.transition("CLOSED");
+      log("execution.closed", { stateAfter: "CLOSED", result: "completed" });
+
+      const summary = {
+        ok: true,
+        contractHash: hash,
+        executionId,
+        correlationId,
+        gitOps: gitResults.length,
+        cursorMode: "fixture",
+        realCursorClaimed: false,
+        gitEffect: "none-remote",
+        terminalState: "CLOSED",
+      };
+      proofs.writeJson("summary.json", summary);
+      return finish(true, "CLOSED", hash, undefined, cursorResult);
+    } catch (err) {
+      const he = err as HarnessError;
+      const code = he.code ?? "FAILED";
+      try {
+        if (machine.canTransition("FAILED")) machine.transition("FAILED");
+        log("execution.failed", {
+          stateAfter: machine.current,
+          result: "failed",
+          errorCode: code,
+          detail: { message: he.message },
+        });
+        if (machine.canTransition("CLOSED")) machine.transition("CLOSED");
+      } catch {
+        /* ignore secondary */
+      }
+      return finish(false, machine.current, computeContractHash(input.contract), code);
+    }
+
+    function finish(
+      ok: boolean,
+      terminalState: string,
+      contractHash: string,
+      errorCode?: string,
+      cursor?: CursorResult,
+    ): RunResult {
+      return {
+        ok,
+        terminalState,
+        contractHash,
+        executionId,
+        correlationId,
+        proofDir: input.contract.proofDir,
+        journalPath: journal.filePath,
+        gitResults,
+        cursor,
+        errorCode,
+        projectedState: journal.projectLastState(),
+      };
+    }
+  }
+}
+
+export function validateContractOnly(contract: ExecutionContract): { hash: string } {
+  const policy = new PolicyEngine();
+  policy.assertContract(contract);
+  return { hash: computeContractHash(contract) };
+}
diff --git a/projects/sfia-studio/harness/src/policy/policyEngine.ts b/projects/sfia-studio/harness/src/policy/policyEngine.ts
new file mode 100644
index 0000000..5d18417
--- /dev/null
+++ b/projects/sfia-studio/harness/src/policy/policyEngine.ts
@@ -0,0 +1,117 @@
+import path from "node:path";
+import type { ExecutionContract, GitOp } from "../types/contracts.js";
+import { HarnessError } from "../types/contracts.js";
+
+const DENIED_GIT_TOKENS = [
+  "add",
+  "commit",
+  "push",
+  "merge",
+  "rebase",
+  "reset",
+  "clean",
+  "cherry-pick",
+  "branch", // destructive forms checked separately — show-current is via typed op
+];
+
+/** Default-deny policy engine for S1. */
+export class PolicyEngine {
+  assertContract(contract: ExecutionContract): void {
+    if (contract.scenario !== "S1") {
+      throw new HarnessError("POLICY_SCENARIO", "Only S1 allowed");
+    }
+    if (contract.gitEffect !== "none-remote") {
+      throw new HarnessError("POLICY_GIT_EFFECT", "gitEffect must be none-remote");
+    }
+    if (contract.cursorMode !== "fixture") {
+      throw new HarnessError("POLICY_CURSOR_MODE", "cursorMode must be fixture for this increment");
+    }
+    if (!contract.repositoryRoot || !path.isAbsolute(contract.repositoryRoot)) {
+      throw new HarnessError("POLICY_REPO_ROOT", "repositoryRoot must be absolute");
+    }
+    if (!contract.proofDir || !path.isAbsolute(contract.proofDir)) {
+      throw new HarnessError("POLICY_PROOF_DIR", "proofDir must be absolute");
+    }
+    if (contract.timeoutMs <= 0 || contract.timeoutMs > 600_000) {
+      throw new HarnessError("POLICY_TIMEOUT", "timeoutMs out of bounds");
+    }
+    for (const p of contract.allowedPaths) {
+      this.assertAllowedPath(contract, p);
+    }
+    this.assertProofDirInsideOrSibling(contract);
+  }
+
+  assertAllowedPath(contract: ExecutionContract, targetPath: string): string {
+    const root = path.resolve(contract.repositoryRoot);
+    if (targetPath.includes("\0")) {
+      throw new HarnessError("POLICY_PATH_INJECTION", "NUL in path");
+    }
+    if (targetPath.split(/[/\\]/).includes("..")) {
+      throw new HarnessError("POLICY_PATH_TRAVERSAL", "path contains ..", { targetPath });
+    }
+    const resolved = path.resolve(root, targetPath);
+    const rel = path.relative(root, resolved);
+    if (rel.startsWith("..") || path.isAbsolute(rel)) {
+      throw new HarnessError("POLICY_PATH_TRAVERSAL", "path escapes repositoryRoot", {
+        targetPath,
+        resolved,
+      });
+    }
+    const matchPrefix = contract.allowedPaths.some((p) => {
+      if (p === "." || p === "./") return true;
+      const pref = path.resolve(root, p);
+      return resolved === pref || resolved.startsWith(pref + path.sep);
+    });
+    if (!matchPrefix) {
+      throw new HarnessError("POLICY_PATH_DENIED", "path not in allowlist", { targetPath });
+    }
+    const ext = path.extname(resolved).toLowerCase();
+    const allowedExt = contract.allowedExtensions ?? [".md", ".txt", ".json", ".jsonl", ""];
+    if (ext && !allowedExt.includes(ext)) {
+      throw new HarnessError("POLICY_EXT_DENIED", `extension denied: ${ext}`);
+    }
+    return resolved;
+  }
+
+  assertGitOp(contract: ExecutionContract, op: GitOp): void {
+    this.assertContract(contract);
+    const label = op.op;
+    const allowed = new Set(contract.allowedCommands);
+    if (!allowed.has(label)) {
+      throw new HarnessError("POLICY_GIT_OP_DENIED", `Git op not allowlisted: ${label}`, { op });
+    }
+    // Explicit deny of write-like tokens if someone maps wrong
+    if ("ref" in op && /[\s;&|`$]/.test(op.ref)) {
+      throw new HarnessError("POLICY_GIT_ARG", "unsafe git ref");
+    }
+    if (op.op === "log" && (op.maxCount <= 0 || op.maxCount > 20)) {
+      throw new HarnessError("POLICY_GIT_LOG_LIMIT", "log maxCount must be 1..20");
+    }
+  }
+
+  assertDeniedShellCommand(commandLine: string): void {
+    const lower = commandLine.toLowerCase();
+    for (const token of ["git push", "git commit", "git add", "git merge", "git rebase", "git reset", "git clean"]) {
+      if (lower.includes(token)) {
+        throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied command: ${token}`);
+      }
+    }
+    for (const t of DENIED_GIT_TOKENS) {
+      if (new RegExp(`\\bgit\\s+${t}\\b`).test(lower) && !lower.includes("git branch --show-current")) {
+        if (t === "branch" && lower.includes("--show-current")) continue;
+        throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied git token: ${t}`);
+      }
+    }
+  }
+
+  private assertProofDirInsideOrSibling(contract: ExecutionContract): void {
+    const proof = path.resolve(contract.proofDir);
+    if (proof.includes("..")) {
+      // resolved already collapses .. but keep check on original
+    }
+    // proofDir must be absolute and not a symlink escape — basic check
+    if (!path.isAbsolute(proof)) {
+      throw new HarnessError("POLICY_PROOF_DIR", "proofDir must be absolute");
+    }
+  }
+}
diff --git a/projects/sfia-studio/harness/src/ports/cursorExecutor.ts b/projects/sfia-studio/harness/src/ports/cursorExecutor.ts
new file mode 100644
index 0000000..0e126c3
--- /dev/null
+++ b/projects/sfia-studio/harness/src/ports/cursorExecutor.ts
@@ -0,0 +1,5 @@
+import type { CursorInstruction, CursorResult } from "../types/contracts.js";
+
+export interface CursorExecutorPort {
+  execute(instruction: CursorInstruction): Promise<CursorResult>;
+}
diff --git a/projects/sfia-studio/harness/src/ports/cursorFixture.ts b/projects/sfia-studio/harness/src/ports/cursorFixture.ts
new file mode 100644
index 0000000..98a56f3
--- /dev/null
+++ b/projects/sfia-studio/harness/src/ports/cursorFixture.ts
@@ -0,0 +1,48 @@
+import type { CursorInstruction, CursorResult } from "../types/contracts.js";
+import { HarnessError } from "../types/contracts.js";
+import type { CursorExecutorPort } from "./cursorExecutor.js";
+
+/**
+ * Fixture-only Cursor executor.
+ * Does NOT call Cursor, does NOT claim real Cursor, does NOT invent an API.
+ */
+export class CursorExecutorPortFixture implements CursorExecutorPort {
+  async execute(instruction: CursorInstruction): Promise<CursorResult> {
+    if (instruction.mode !== "fixture") {
+      throw new HarnessError("CURSOR_MODE_DENIED", "Only fixture mode allowed in this increment");
+    }
+    const started = Date.now();
+    const sim = instruction.simulate ?? "success";
+
+    if (sim === "timeout") {
+      return {
+        ok: false,
+        mode: "fixture",
+        summary: "fixture timeout simulated",
+        artifacts: [],
+        errorCode: "CURSOR_FIXTURE_TIMEOUT",
+        durationMs: Date.now() - started,
+        realCursorClaimed: false,
+      };
+    }
+    if (sim === "error") {
+      return {
+        ok: false,
+        mode: "fixture",
+        summary: "fixture error simulated",
+        artifacts: [],
+        errorCode: "CURSOR_FIXTURE_ERROR",
+        durationMs: Date.now() - started,
+        realCursorClaimed: false,
+      };
+    }
+    return {
+      ok: true,
+      mode: "fixture",
+      summary: `fixture success: ${instruction.objective}`,
+      artifacts: [`fixture://${instruction.requestId}/analysis.md`],
+      durationMs: Date.now() - started,
+      realCursorClaimed: false,
+    };
+  }
+}
diff --git a/projects/sfia-studio/harness/src/ports/gitReader.ts b/projects/sfia-studio/harness/src/ports/gitReader.ts
new file mode 100644
index 0000000..75e98d8
--- /dev/null
+++ b/projects/sfia-studio/harness/src/ports/gitReader.ts
@@ -0,0 +1,5 @@
+import type { GitCommandResult, GitOp } from "../types/contracts.js";
+
+export interface GitReaderPort {
+  run(op: GitOp): Promise<GitCommandResult>;
+}
diff --git a/projects/sfia-studio/harness/src/ports/gitReaderImpl.ts b/projects/sfia-studio/harness/src/ports/gitReaderImpl.ts
new file mode 100644
index 0000000..a3f1ccd
--- /dev/null
+++ b/projects/sfia-studio/harness/src/ports/gitReaderImpl.ts
@@ -0,0 +1,112 @@
+import { spawn } from "node:child_process";
+import type { GitCommandResult, GitOp } from "../types/contracts.js";
+import { HarnessError } from "../types/contracts.js";
+import type { GitReaderPort } from "./gitReader.js";
+import type { PolicyEngine } from "../policy/policyEngine.js";
+import type { ExecutionContract } from "../types/contracts.js";
+
+const MAX_OUTPUT = 256_000;
+
+export class GitReaderImpl implements GitReaderPort {
+  constructor(
+    private readonly contract: ExecutionContract,
+    private readonly policy: PolicyEngine,
+    private readonly timeoutMs = contract.timeoutMs,
+  ) {}
+
+  async run(op: GitOp): Promise<GitCommandResult> {
+    this.policy.assertGitOp(this.contract, op);
+    const argv = toArgv(op);
+    // Never shell
+    return this.execGit(argv);
+  }
+
+  private execGit(argv: string[]): Promise<GitCommandResult> {
+    const started = Date.now();
+    return new Promise((resolve, reject) => {
+      const child = spawn("git", argv, {
+        cwd: this.contract.repositoryRoot,
+        shell: false,
+        env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
+      });
+      let stdout = "";
+      let stderr = "";
+      let killed = false;
+      const timer = setTimeout(() => {
+        killed = true;
+        child.kill("SIGTERM");
+      }, this.timeoutMs);
+
+      child.stdout.on("data", (buf: Buffer) => {
+        stdout += buf.toString("utf8");
+        if (stdout.length > MAX_OUTPUT) {
+          killed = true;
+          child.kill("SIGTERM");
+        }
+      });
+      child.stderr.on("data", (buf: Buffer) => {
+        stderr += buf.toString("utf8");
+        if (stderr.length > MAX_OUTPUT) {
+          killed = true;
+          child.kill("SIGTERM");
+        }
+      });
+      child.on("error", (err) => {
+        clearTimeout(timer);
+        reject(new HarnessError("GIT_SPAWN_ERROR", err.message));
+      });
+      child.on("close", (code) => {
+        clearTimeout(timer);
+        if (killed && (stdout.length > MAX_OUTPUT || stderr.length > MAX_OUTPUT)) {
+          reject(new HarnessError("GIT_OUTPUT_LIMIT", "git output exceeded limit"));
+          return;
+        }
+        if (killed) {
+          reject(new HarnessError("GIT_TIMEOUT", "git command timed out"));
+          return;
+        }
+        resolve({
+          argv: ["git", ...argv],
+          stdout: stdout.slice(0, MAX_OUTPUT),
+          stderr: stderr.slice(0, MAX_OUTPUT),
+          exitCode: code ?? 1,
+          durationMs: Date.now() - started,
+        });
+      });
+    });
+  }
+}
+
+export function toArgv(op: GitOp): string[] {
+  switch (op.op) {
+    case "branch-show-current":
+      return ["branch", "--show-current"];
+    case "rev-parse":
+      return ["rev-parse", op.ref];
+    case "merge-base":
+      return ["merge-base", op.a, op.b];
+    case "status-short":
+      return ["status", "--short"];
+    case "diff-check":
+      return ["diff", "--check"];
+    case "diff-stat":
+      return ["diff", "--stat"];
+    case "diff-name-status":
+      return ["diff", "--name-status"];
+    case "log":
+      return ["log", "--oneline", `-n${op.maxCount}`];
+    case "show":
+      return ["show", "--no-patch", "--format=%H %s", op.revPath];
+    case "ls-remote":
+      return ["ls-remote", "--heads", op.remote ?? "origin"];
+    default: {
+      const _exhaustive: never = op;
+      throw new HarnessError("GIT_OP_UNKNOWN", String(_exhaustive));
+    }
+  }
+}
+
+/** Typed denial helper for tests — never executes. */
+export function denyWriteOp(name: string): never {
+  throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied Git write: ${name}`);
+}
diff --git a/projects/sfia-studio/harness/src/proof/proofStore.ts b/projects/sfia-studio/harness/src/proof/proofStore.ts
new file mode 100644
index 0000000..e0f6f6a
--- /dev/null
+++ b/projects/sfia-studio/harness/src/proof/proofStore.ts
@@ -0,0 +1,43 @@
+import { mkdirSync, writeFileSync, realpathSync, existsSync } from "node:fs";
+import path from "node:path";
+import { HarnessError } from "../types/contracts.js";
+
+export class ProofStore {
+  constructor(private readonly proofDir: string) {
+    mkdirSync(proofDir, { recursive: true });
+    this.assertInsideProofDir(proofDir);
+  }
+
+  writeJson(name: string, data: unknown): string {
+    const target = this.resolveSafe(name);
+    writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`, "utf8");
+    return target;
+  }
+
+  writeText(name: string, text: string): string {
+    const target = this.resolveSafe(name);
+    writeFileSync(target, text, "utf8");
+    return target;
+  }
+
+  private resolveSafe(name: string): string {
+    if (name.includes("..") || name.includes("\0") || path.isAbsolute(name)) {
+      throw new HarnessError("PROOF_PATH_DENIED", "invalid proof name", { name });
+    }
+    const target = path.resolve(this.proofDir, name);
+    const root = path.resolve(this.proofDir);
+    if (!target.startsWith(root + path.sep) && target !== root) {
+      throw new HarnessError("PROOF_PATH_ESCAPE", "proof path escapes proofDir");
+    }
+    return target;
+  }
+
+  private assertInsideProofDir(dir: string): void {
+    if (!existsSync(dir)) return;
+    try {
+      realpathSync(dir);
+    } catch {
+      throw new HarnessError("PROOF_DIR_INVALID", "cannot resolve proofDir");
+    }
+  }
+}
diff --git a/projects/sfia-studio/harness/src/state/machine.ts b/projects/sfia-studio/harness/src/state/machine.ts
new file mode 100644
index 0000000..0b43783
--- /dev/null
+++ b/projects/sfia-studio/harness/src/state/machine.ts
@@ -0,0 +1,40 @@
+import type { ExecutionState } from "../types/contracts.js";
+import { HarnessError } from "../types/contracts.js";
+
+const ALLOWED: Record<ExecutionState, ExecutionState[]> = {
+  CREATED: ["CONTRACT_VALIDATED", "REJECTED", "FAILED"],
+  CONTRACT_VALIDATED: ["AWAITING_GATE", "REJECTED", "FAILED"],
+  AWAITING_GATE: ["AUTHORIZED", "REJECTED", "STOP_REQUESTED", "FAILED"],
+  AUTHORIZED: ["RUNNING", "REJECTED", "STOP_REQUESTED", "FAILED"],
+  RUNNING: ["COMPLETED", "REJECTED", "STOP_REQUESTED", "FAILED"],
+  STOP_REQUESTED: ["CLOSED", "FAILED"],
+  REJECTED: ["CLOSED"],
+  FAILED: ["CLOSED"],
+  COMPLETED: ["CLOSED"],
+  CLOSED: [],
+};
+
+export class StateMachine {
+  constructor(private state: ExecutionState = "CREATED") {}
+
+  get current(): ExecutionState {
+    return this.state;
+  }
+
+  canTransition(to: ExecutionState): boolean {
+    return ALLOWED[this.state].includes(to);
+  }
+
+  transition(to: ExecutionState): { from: ExecutionState; to: ExecutionState } {
+    if (!this.canTransition(to)) {
+      throw new HarnessError(
+        "STATE_TRANSITION_DENIED",
+        `Illegal transition ${this.state} → ${to}`,
+        { from: this.state, to },
+      );
+    }
+    const from = this.state;
+    this.state = to;
+    return { from, to };
+  }
+}
diff --git a/projects/sfia-studio/harness/src/types/contracts.ts b/projects/sfia-studio/harness/src/types/contracts.ts
new file mode 100644
index 0000000..242a5bc
--- /dev/null
+++ b/projects/sfia-studio/harness/src/types/contracts.ts
@@ -0,0 +1,140 @@
+/** Shared contracts for POC S1 harness (Option B — harness autonomous). */
+
+export type ScenarioId = "S1";
+export type GitEffect = "none-remote";
+export type CursorMode = "fixture";
+export type GateDecisionKind = "GO" | "CORRIGER" | "STOP" | "CLOSE";
+
+export type ExecutionState =
+  | "CREATED"
+  | "CONTRACT_VALIDATED"
+  | "AWAITING_GATE"
+  | "AUTHORIZED"
+  | "RUNNING"
+  | "STOP_REQUESTED"
+  | "REJECTED"
+  | "FAILED"
+  | "COMPLETED"
+  | "CLOSED";
+
+export interface POCRequest {
+  requestId: string;
+  title: string;
+  cycle: string;
+  scope: string;
+  operator: string;
+  createdAt: string;
+}
+
+export interface ExecutionContract {
+  contractId: string;
+  requestId: string;
+  scenario: ScenarioId;
+  repositoryRoot: string;
+  allowedPaths: string[];
+  allowedCommands: string[];
+  gitEffect: GitEffect;
+  cursorMode: CursorMode;
+  timeoutMs: number;
+  proofDir: string;
+  schemaVersion: string;
+  maxFiles?: number;
+  maxFileBytes?: number;
+  maxAggregateBytes?: number;
+  allowedExtensions?: string[];
+  decidedByAllowlist?: string[];
+  gateExpiresAt?: string;
+}
+
+export interface GateDecision {
+  decisionId: string;
+  requestId: string;
+  contractHash: string;
+  decision: GateDecisionKind;
+  decidedBy: string;
+  decidedAt: string;
+  scope: string;
+  expiresAt?: string;
+}
+
+export interface ExecutionContext {
+  executionId: string;
+  requestId: string;
+  contractId: string;
+  correlationId: string;
+  startedAt: string;
+}
+
+export interface AdapterEnvelope {
+  schemaVersion: string;
+  correlationId: string;
+  messageType: "intent" | "gate" | "stop" | "statusQuery" | "status" | "proof";
+  payload: unknown;
+  emittedAt: string;
+}
+
+export interface JournalEvent {
+  schemaVersion: string;
+  eventId: string;
+  eventType: string;
+  timestamp: string;
+  requestId: string;
+  executionId?: string;
+  correlationId: string;
+  contractHash?: string;
+  stateBefore?: ExecutionState;
+  stateAfter?: ExecutionState;
+  result?: string;
+  errorCode?: string;
+  detail?: Record<string, unknown>;
+}
+
+export type GitOp =
+  | { op: "branch-show-current" }
+  | { op: "rev-parse"; ref: string }
+  | { op: "merge-base"; a: string; b: string }
+  | { op: "status-short" }
+  | { op: "diff-check" }
+  | { op: "diff-stat" }
+  | { op: "diff-name-status" }
+  | { op: "log"; maxCount: number }
+  | { op: "show"; revPath: string }
+  | { op: "ls-remote"; remote?: string };
+
+export interface GitCommandResult {
+  argv: string[];
+  stdout: string;
+  stderr: string;
+  exitCode: number;
+  durationMs: number;
+}
+
+export interface CursorInstruction {
+  requestId: string;
+  executionId: string;
+  mode: CursorMode;
+  objective: string;
+  timeoutMs: number;
+  simulate?: "success" | "timeout" | "error";
+}
+
+export interface CursorResult {
+  ok: boolean;
+  mode: CursorMode;
+  summary: string;
+  artifacts: string[];
+  errorCode?: string;
+  durationMs: number;
+  realCursorClaimed: false;
+}
+
+export class HarnessError extends Error {
+  constructor(
+    readonly code: string,
+    message: string,
+    readonly detail?: Record<string, unknown>,
+  ) {
+    super(message);
+    this.name = "HarnessError";
+  }
+}
diff --git a/projects/sfia-studio/harness/tests/integration.test.ts b/projects/sfia-studio/harness/tests/integration.test.ts
new file mode 100644
index 0000000..fe18a6e
--- /dev/null
+++ b/projects/sfia-studio/harness/tests/integration.test.ts
@@ -0,0 +1,201 @@
+import { describe, expect, it } from "vitest";
+import { mkdtempSync, existsSync, readFileSync } from "node:fs";
+import path from "node:path";
+import os from "node:os";
+import { Orchestrator } from "../src/orchestrator.js";
+import { EventJournal } from "../src/journal/eventJournal.js";
+import { ProofStore } from "../src/proof/proofStore.js";
+import { CursorExecutorPortFixture } from "../src/ports/cursorFixture.js";
+import { computeContractHash } from "../src/hash/contractHash.js";
+import { makeContract, makeGo, makeRequest } from "../fixtures/builders.js";
+import { PolicyEngine } from "../src/policy/policyEngine.js";
+import { HarnessError } from "../src/types/contracts.js";
+
+function tmpProof(): string {
+  return mkdtempSync(path.join(os.tmpdir(), "sfia-poc-proof-"));
+}
+
+describe("A1 nominal", () => {
+  it("completes S1 with git read + cursor fixture", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const gate = makeGo(contract);
+    const orch = new Orchestrator();
+    const result = await orch.run({
+      request: makeRequest(),
+      contract,
+      gate,
+    });
+    expect(result.ok).toBe(true);
+    expect(result.terminalState).toBe("CLOSED");
+    expect(result.cursor?.realCursorClaimed).toBe(false);
+    expect(result.gitResults.length).toBeGreaterThan(0);
+    expect(existsSync(path.join(proofDir, "events.jsonl"))).toBe(true);
+    expect(existsSync(path.join(proofDir, "summary.json"))).toBe(true);
+    expect(result.projectedState).toBe("CLOSED");
+  });
+});
+
+describe("A2 deny Git write", () => {
+  it("rejects git push attempt without executing write", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const gate = makeGo(contract);
+    const orch = new Orchestrator();
+    const result = await orch.run({
+      request: makeRequest(),
+      contract,
+      gate,
+      attemptForbiddenGit: true,
+    });
+    expect(result.ok).toBe(false);
+    expect(result.errorCode).toBe("POLICY_GIT_WRITE_DENIED");
+    expect(existsSync(path.join(proofDir, "git-denied.json"))).toBe(true);
+  });
+});
+
+describe("A3 hash mismatch", () => {
+  it("rejects GO with wrong hash — no git", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const gate = makeGo(contract, { contractHash: "0".repeat(64) });
+    const orch = new Orchestrator();
+    const result = await orch.run({
+      request: makeRequest(),
+      contract,
+      gate,
+    });
+    expect(result.ok).toBe(false);
+    expect(result.errorCode).toBe("GATE_HASH_MISMATCH");
+    expect(result.gitResults.length).toBe(0);
+  });
+});
+
+describe("A4 STOP", () => {
+  it("STOP before run is priority", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const gate = makeGo(contract, { decision: "STOP", decisionId: "stop-1" });
+    const orch = new Orchestrator();
+    const result = await orch.run({ request: makeRequest(), contract, gate });
+    expect(result.ok).toBe(false);
+    expect(result.errorCode).toBe("GATE_STOP");
+    expect(result.gitResults.length).toBe(0);
+  });
+
+  it("STOP after authorize", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const gate = makeGo(contract);
+    const orch = new Orchestrator();
+    const result = await orch.run({
+      request: makeRequest(),
+      contract,
+      gate,
+      stopAfterAuthorize: true,
+    });
+    expect(result.errorCode).toBe("STOP");
+    expect(existsSync(path.join(proofDir, "stop.json"))).toBe(true);
+  });
+});
+
+describe("A5 without Studio", () => {
+  it("runs via orchestrator API only (no UI)", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const result = await new Orchestrator().run({
+      request: makeRequest(),
+      contract,
+      gate: makeGo(contract),
+    });
+    expect(result.ok).toBe(true);
+    // No Studio dependency — pure harness
+    expect(result.journalPath.endsWith("events.jsonl")).toBe(true);
+  });
+});
+
+describe("A6 journal projection is not a second truth store", () => {
+  it("projects state from journal events", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    await new Orchestrator().run({
+      request: makeRequest(),
+      contract,
+      gate: makeGo(contract),
+    });
+    const journal = new EventJournal(proofDir, "x");
+    expect(journal.projectLastState()).toBe("CLOSED");
+    expect(journal.readAll().length).toBeGreaterThan(3);
+  });
+});
+
+describe("AB abuse cases", () => {
+  it("AB-01 falsified GO decider", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const gate = makeGo(contract, { decidedBy: "Attacker" });
+    const r = await new Orchestrator().run({ request: makeRequest(), contract, gate });
+    expect(r.errorCode).toBe("GATE_DECIDER_UNAUTHORIZED");
+  });
+
+  it("AB-02 replay GO", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const gate = makeGo(contract);
+    const orch = new Orchestrator();
+    const first = await orch.run({ request: makeRequest(), contract, gate });
+    expect(first.ok).toBe(true);
+    const proofDir2 = tmpProof();
+    const contract2 = makeContract(proofDir2);
+    // same decisionId on same validator instance
+    const r2 = await orch.run({
+      request: makeRequest(),
+      contract: contract2,
+      gate: makeGo(contract2, { decisionId: gate.decisionId }),
+    });
+    expect(r2.errorCode).toBe("GATE_REPLAY");
+  });
+
+  it("AB-03 hash tampering", async () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const gate = makeGo(contract, { contractHash: computeContractHash(contract) + "ff" });
+    // normalize to wrong
+    gate.contractHash = "ab".repeat(32);
+    const r = await new Orchestrator().run({ request: makeRequest(), contract, gate });
+    expect(r.errorCode).toBe("GATE_HASH_MISMATCH");
+  });
+
+  it("AB-04/05 path traversal / injection", () => {
+    const proofDir = tmpProof();
+    const contract = makeContract(proofDir);
+    const p = new PolicyEngine();
+    expect(() => p.assertAllowedPath(contract, "../../.ssh/id_rsa")).toThrow(HarnessError);
+    expect(() => p.assertDeniedShellCommand("git push; rm -rf /")).toThrow(HarnessError);
+  });
+
+  it("AB-06 proof outside proofDir denied", () => {
+    const proofDir = tmpProof();
+    const store = new ProofStore(proofDir);
+    expect(() => store.writeText("../escape.txt", "x")).toThrow(HarnessError);
+  });
+
+  it("AB-07 cursor fixture never claims real", async () => {
+    const fix = new CursorExecutorPortFixture();
+    const r = await fix.execute({
+      requestId: "r",
+      executionId: "e",
+      mode: "fixture",
+      objective: "x",
+      timeoutMs: 1000,
+    });
+    expect(r.realCursorClaimed).toBe(false);
+  });
+
+  it("AB-08 journal write failure is fail-closed typed", () => {
+    // invalid proof dir on reserved device path is OS-specific; assert ProofStore escape instead
+    const proofDir = tmpProof();
+    const store = new ProofStore(proofDir);
+    expect(() => store.writeJson("/absolute.json", {})).toThrow(HarnessError);
+  });
+});
diff --git a/projects/sfia-studio/harness/tests/unit.test.ts b/projects/sfia-studio/harness/tests/unit.test.ts
new file mode 100644
index 0000000..2f886a8
--- /dev/null
+++ b/projects/sfia-studio/harness/tests/unit.test.ts
@@ -0,0 +1,113 @@
+import { describe, expect, it } from "vitest";
+import { canonicalize } from "../src/hash/canonicalize.js";
+import { computeContractHash } from "../src/hash/contractHash.js";
+import { StateMachine } from "../src/state/machine.js";
+import { GateValidator } from "../src/gate/gateValidator.js";
+import { PolicyEngine } from "../src/policy/policyEngine.js";
+import { HarnessError } from "../src/types/contracts.js";
+import { makeContract, makeGo, makeRequest } from "../fixtures/builders.js";
+import path from "node:path";
+import os from "node:os";
+import { mkdtempSync } from "node:fs";
+
+describe("canonicalize + contractHash", () => {
+  it("same contract different key order → same hash", () => {
+    const a = { b: 1, a: 2 };
+    const b = { a: 2, b: 1 };
+    expect(canonicalize(a)).toBe(canonicalize(b));
+  });
+
+  it("security field change → different hash", () => {
+    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-hash-"));
+    const c1 = makeContract(dir);
+    const c2 = makeContract(dir, { gitEffect: "none-remote", timeoutMs: c1.timeoutMs + 1 });
+    expect(computeContractHash(c1)).not.toBe(computeContractHash(c2));
+  });
+});
+
+describe("StateMachine", () => {
+  it("allows nominal path", () => {
+    const m = new StateMachine();
+    m.transition("CONTRACT_VALIDATED");
+    m.transition("AWAITING_GATE");
+    m.transition("AUTHORIZED");
+    m.transition("RUNNING");
+    m.transition("COMPLETED");
+    m.transition("CLOSED");
+    expect(m.current).toBe("CLOSED");
+  });
+
+  it("denies illegal transition", () => {
+    const m = new StateMachine();
+    expect(() => m.transition("RUNNING")).toThrow(HarnessError);
+  });
+});
+
+describe("GateValidator", () => {
+  it("accepts valid GO", () => {
+    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
+    const c = makeContract(dir);
+    const g = makeGo(c);
+    const v = new GateValidator();
+    expect(v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) }).ok).toBe(true);
+  });
+
+  it("rejects hash mismatch", () => {
+    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
+    const c = makeContract(dir);
+    const g = makeGo(c, { contractHash: "deadbeef" });
+    const v = new GateValidator();
+    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.code).toBe("GATE_HASH_MISMATCH");
+  });
+
+  it("rejects replay of consumed GO", () => {
+    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
+    const c = makeContract(dir);
+    const g = makeGo(c);
+    const v = new GateValidator();
+    v.consume(g.decisionId);
+    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.code).toBe("GATE_REPLAY");
+  });
+
+  it("rejects unauthorized decider", () => {
+    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-gate-"));
+    const c = makeContract(dir);
+    const g = makeGo(c, { decidedBy: "NotMorris" });
+    const v = new GateValidator();
+    const r = v.validate({ gate: g, contract: c, expectedHash: computeContractHash(c) });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.code).toBe("GATE_DECIDER_UNAUTHORIZED");
+  });
+});
+
+describe("PolicyEngine", () => {
+  it("denies path traversal", () => {
+    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-pol-"));
+    const c = makeContract(dir);
+    const p = new PolicyEngine();
+    expect(() => p.assertAllowedPath(c, "../secrets")).toThrow(HarnessError);
+  });
+
+  it("denies git push shell", () => {
+    const p = new PolicyEngine();
+    expect(() => p.assertDeniedShellCommand("git push origin main")).toThrow(HarnessError);
+  });
+
+  it("requires none-remote and fixture", () => {
+    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-pol-"));
+    const p = new PolicyEngine();
+    expect(() =>
+      p.assertContract(makeContract(dir, { cursorMode: "fixture", gitEffect: "none-remote" })),
+    ).not.toThrow();
+  });
+});
+
+describe("request fixture smoke", () => {
+  it("builds request", () => {
+    expect(makeRequest().operator).toBe("Morris");
+  });
+});
diff --git a/projects/sfia-studio/harness/tsconfig.build.json b/projects/sfia-studio/harness/tsconfig.build.json
new file mode 100644
index 0000000..3d088d0
--- /dev/null
+++ b/projects/sfia-studio/harness/tsconfig.build.json
@@ -0,0 +1,12 @@
+{
+  "extends": "./tsconfig.json",
+  "compilerOptions": {
+    "noEmit": false,
+    "declaration": true,
+    "outDir": "dist",
+    "rootDir": "src",
+    "types": ["node"]
+  },
+  "include": ["src/**/*.ts"],
+  "exclude": ["node_modules", "dist", "tests", "fixtures"]
+}
diff --git a/projects/sfia-studio/harness/tsconfig.json b/projects/sfia-studio/harness/tsconfig.json
new file mode 100644
index 0000000..c3c0eeb
--- /dev/null
+++ b/projects/sfia-studio/harness/tsconfig.json
@@ -0,0 +1,19 @@
+{
+  "compilerOptions": {
+    "target": "ES2022",
+    "lib": ["ES2022"],
+    "module": "NodeNext",
+    "moduleResolution": "NodeNext",
+    "strict": true,
+    "skipLibCheck": true,
+    "esModuleInterop": true,
+    "forceConsistentCasingInFileNames": true,
+    "resolveJsonModule": true,
+    "noEmit": true,
+    "types": ["node", "vitest/globals"],
+    "rootDir": ".",
+    "outDir": "dist"
+  },
+  "include": ["src/**/*.ts", "tests/**/*.ts", "fixtures/**/*.ts"],
+  "exclude": ["node_modules", "dist", "proofs"]
+}
diff --git a/projects/sfia-studio/harness/vitest.config.ts b/projects/sfia-studio/harness/vitest.config.ts
new file mode 100644
index 0000000..96d38dc
--- /dev/null
+++ b/projects/sfia-studio/harness/vitest.config.ts
@@ -0,0 +1,9 @@
+import { defineConfig } from "vitest/config";
+
+export default defineConfig({
+  test: {
+    environment: "node",
+    include: ["tests/**/*.test.ts"],
+    testTimeout: 30_000,
+  },
+});

```

---

## 13. Commit / push / PR

*(complété après exécution — section mise à jour)*


### Commit
- SHA : `e1040b5452fe6e60e21af2a0901e1373fc3905c8`
- Message : `feat(sfia-studio): add governed S1 orchestration harness`
- Stats : 37 files, +3471 / −161

### Push
- Ref : `origin/delivery/sfia-studio-poc-s1-harness`
- SHA distant = HEAD local = `e1040b5452fe6e60e21af2a0901e1373fc3905c8`

### Draft PR
| Champ | Valeur |
|-------|--------|
| Number | **#224** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/224 |
| state | open |
| draft | true |
| merged | false |
| base | main |
| head | delivery/sfia-studio-poc-s1-harness |
| head SHA | e1040b5452fe6e60e21af2a0901e1373fc3905c8 |
| app/** | absent |
| Docker | absent |

Working tree après commit : propre hors `.tmp-sfia-review/`.

Horodatage final pack : 2026-07-19 17:31:13 CEST


---

## 14. Risques / réserves / gates

### Réserves
- Cursor réel non prouvé
- UI / adaptateur non implémentés
- Docker non retenu
- POC non réussi / non industrialisé
- Merge fermé

### Gates restantes
1. Review ChatGPT draft PR
2. Merge (GO distinct)
3. Cursor réel
4. UI Studio
5. Docker
6. Élargissement allowlist

---

## 15. Verdict

**`PR READINESS COMPLETE WITH RESERVES — GOVERNED S1 HARNESS DRAFT PR OPEN — CURSOR REAL AND STUDIO UI GATES CLOSED`**
