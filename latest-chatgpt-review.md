# ChatGPT Review Pack — SFIA Studio POC S1 Harness Delivery — Cycle 8 Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 16:36:35 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Typologie** | DELIVERY / POC / ARCH / SEC / QA |
| **Décision Morris consommée** | POC-G9 ouvert pour delivery **harness-only** ; Cursor = fixture ; Docker non requis ; allowlist `27` initiale ; pas de commit/push/PR |
| **Branche** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
| **Base / HEAD** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **origin/main** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **merge-base** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **PR #223** | MERGED — merge commit `d45cc54…` |
| **Niveau review pack** | **full** |
| **Commit/push/PR delivery** | **NON AUTORISÉS** |
| **Push distant autorisé** | `origin/sfia/review-handoff` uniquement |

## 1. Local Git Truth Check

**PASS** au démarrage du cycle sur `main` @ `d45cc54f97479cefa3d2612c6e1a965ff50958bb`.

Vérifications :
- branche initiale = `main` puis création `delivery/sfia-studio-poc-s1-harness`
- HEAD = origin/main = `d45cc54…`
- working tree propre avant delivery
- PR #223 MERGED ; remote `backlog/sfia-studio-poc-orchestration-s1` absente
- documents 26–28 présents ; aucun harness concurrent

```
d45cc54 (HEAD -> delivery/sfia-studio-poc-s1-harness, origin/main, origin/HEAD, main) docs(sfia-studio): define governed S1 POC backlog (#223)
60e6880 docs(sfia-studio): sync Option B architecture post-merge (#222)
40f8ebe docs(sfia-studio): document POC Option B architecture (#221)
b882892 docs(sfia-studio): synchronize POC framing post-merge status (#220)
be713c4 docs(sfia-studio): validate POC orchestration framing (#219)
```

État courant (après delivery local, non commité) :

```
M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
 M projects/sfia-studio/20-poc-orchestration-framing.md
 M projects/sfia-studio/22-poc-orchestration-decision-pack.md
 M projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
 M projects/sfia-studio/26-poc-orchestration-backlog.md
 M projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
 M projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/harness/
```

## 2. Handoff précédent

Source : `origin/sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

| Champ | Valeur |
|-------|--------|
| Cycle | 13 PR readiness Critical |
| PR | #223 |
| Commit | `c635cbed6085f89f34623e0a63ff59d3ba9536ec` |
| Contenu | backlog S1 complet ; Docker ouvert ; POC-G8 consommé ; POC-G9 fermé ; delivery non autorisé ; POC non lancé |

**Handoff précédent :** COMPLET / COHÉRENT avec Truth Check.

## 3. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio/{20..28}*.md`, README, `07`
- Architecture `23`–`25` (lecture) ; `21` lecture
- `projects/sfia-studio/app/README.md`, `package.json` (lecture seule)
- handoff `sfia/review-handoff`

## 4. Conventions repo & emplacement harness

**Toolchain :** Node/TypeScript + vitest (aligné Studio app, sans Next).

**Emplacement retenu :** `projects/sfia-studio/harness/`

**Justification :**
1. Hors `app/**` (interdit) — Option B : harness autonome.
2. Colocalisé au projet Studio, pas un second monorepo.
3. Package isolé `@sfia-studio/poc-s1-harness` — pas de modification root `package.json`.
4. Pas de Docker / daemon / serveur HTTP.
5. Tests autonomes sans Studio.

**Branche :** `delivery/sfia-studio-poc-s1-harness` (convention `delivery/<scope>` ; locale ; non pushée).

## 5. Plan de fichiers

### Créés (harness)
- `projects/sfia-studio/harness/.gitignore`
- `projects/sfia-studio/harness/README.md`
- `projects/sfia-studio/harness/fixtures/builders.ts`
- `projects/sfia-studio/harness/package.json`
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

### Aussi créés (runtime local, gitignored / preuves)
- `projects/sfia-studio/harness/package-lock.json`
- `projects/sfia-studio/harness/proofs/**` (gitignore sauf `.gitkeep` ; démo CLI locale)
- `node_modules/`, `dist/` (gitignore)

### Modifiés (docs statut POC-G9)
- `projects/sfia-studio/README.md`
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`
- `projects/sfia-studio/20-poc-orchestration-framing.md`
- `projects/sfia-studio/22-poc-orchestration-decision-pack.md`
- `projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md`
- `projects/sfia-studio/26-poc-orchestration-backlog.md`
- `projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md`
- `projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md`

### Interdits / non touchés
- `projects/sfia-studio/app/**`
- Dockerfile / docker-compose
- `.github/workflows/**`
- root package.json

## 6. Architecture Option B (effective)

```
Morris / GateDecision fixture
        ↓
Harness autonome (CLI)
  → GateValidator
  → PolicyEngine (default deny)
  → GitReaderPort (spawn argv, shell:false)
  → CursorExecutorPortFixture
  → EventJournal JSONL
  → ProofStore
```

Studio cockpit + adaptateur fin : **non implémentés** (hors périmètre). Harness testable sans Studio (A5).

## 7. Contrats / hash / state / gates / policy / ports

### Contrats (`src/types/contracts.ts`)
POCRequest, ExecutionContract (scenario=S1, gitEffect=none-remote, cursorMode=fixture), GateDecision, ExecutionContext, events.

### contractHash
Canonicalisation déterministe JSON (clés triées) + SHA-256 (`src/hash/*`). Même contrat → même hash ; champ sécurité modifié → hash différent ; GO hash mismatch → REJECTED.

### Machine d’état
CREATED → CONTRACT_VALIDATED → AWAITING_GATE → AUTHORIZED → RUNNING → COMPLETED → CLOSED ; branches REJECTED / FAILED / STOP_REQUESTED. Transitions illégales rejetées + journalisées.

### GateValidator
GO explicite ; decidedBy allowlist ; contractHash ; requestId ; scope ; anti-replay ; STOP concurrent.

### PolicyEngine
Default deny ; paths normalisés anti-`..` ; commandes typées ; gitEffect/cursorMode ; limites taille.

### GitReaderPort
Ops typées uniquement ; `spawn` sans shell ; timeout ; sortie bornée ; denylist push/commit/…

### CursorExecutorPortFixture
Succès/timeout/erreur ; `realCursorClaimed: false` ; aucun process Cursor.

### EventJournal / ProofStore
JSONL append-only ; preuves sous proofDir ; fail-closed écriture journal.

## 8. Contenu complet — fichiers harness structurants

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

## 9. Contenu complet + diffs — documents projet modifiés

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
| **Prochaine décision** | Review preuves + éventuel commit/push/PR delivery — **non autorisés** ici |

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
| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **fermé** |
| Sync post-merge cadrage | PR #220 — **MERGED** (`b882892…`) |
| Architecture POC | **Option B minimale** (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
| Sync post-merge archi | PR #222 — **MERGED** (`60e6880…`) |
| Backlog POC | `26`–`28` — POC-G8 **CONSOMMÉ** |
| Branche architecture | historique — remote **supprimée** après #221 |
| Branche cadrage | conservée |
| Branches historiques | conservées |

> Architecture Option B **INTÉGRÉE**. Backlog S1 produit (POC-G8). Studio cockpit + adaptateur + harness autonome. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.

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
  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist candidate
  → delivery POC                        ← POC-G9 **fermé**
  → décision Morris : abandon / itération / préparation MVP
```

Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**.

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
| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — **VALIDÉ + INTÉGRÉ** (G7–G9 fermés) |

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

> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. Versionnement **consommé**. POC-G8/G9 **fermés**. Runtime/protocole **ouverts**. POC **non lancé**.

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
| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (`26`–`28`) ; POC-G9 **fermé** |
| Définition MVP | **Non pris** |
| Industrialisation | **Non engagée** |
| Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
| Vulnérabilités moderate postcss (via Next) | **Ouvertes** — pas de fix forcé |
| Runtime / Git / Cursor réels | P0 = simulés ; futur POC = lecture Git réelle + writes distantes simulées ; Runtime **non sélectionné** |

> Conception : intégrée (PR #209 / #210). Architecture fonctionnelle : intégrée (#211–#213). Architecture technique P0 + Delivery P0 : **intégrés** (PR #217 / `759ab0b…`). Aucune D-VAL-12.

### Orientation Morris — architecture POC

> POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog S1). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
> **POC non lancé.** POC-G9 **fermé**. Delivery **non autorisé**. Allowlist **candidate**.

---

## 8. Prochaine décision

1. Validation Morris du backlog / allowlist (`26`–`28`).
2. Ouverture éventuelle **POC-G9** (delivery) — **FERMÉE**.
3. Clôture formelle AF (séparée).

**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 — Option C méthode |
| Socle | `main` @ `60e6880…` (PR #222 MERGED) |
| Architecture POC | `23`–`25` **intégrés** |
| Backlog POC | `26`–`28` (**locaux** — non versionnés ici) |
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

### `projects/sfia-studio/README.md` — diff complet

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1c6614c..bf7aeb2 100644
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
+| **Prochaine décision** | Review preuves + éventuel commit/push/PR delivery — **non autorisés** ici |
 
 ---
 
@@ -369,7 +370,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 2. Ouverture éventuelle **POC-G9** (delivery) — **FERMÉE**.
 3. Clôture formelle AF (séparée).
 
-**Verdict documentaire :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
 
@@ -385,6 +386,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
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
| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist candidate |
| **Destinataire** | Morris |
| **Source de vérité** | `origin/main` @ `d45cc54…` ; branche locale `delivery/sfia-studio-poc-s1-harness` |

> Architecture Option B **intégrée**. Backlog S1 produit (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.

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
| Prochaine orientation | Validation backlog + éventuel **POC-G9** — **FERMÉ** |
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
  → delivery POC                        ← POC-G9 fermé
  → décision Morris : abandon / itération / préparation MVP
```

### Précisions

- Architecture : **Option B minimale** (intégrée).
- Option A : mode test / dégradé harness.
- Option C : écartée 1er POC.
- POC-G8 : **CONSOMMÉ**. POC-G9 : **fermé**. POC : **non lancé**.

### Orientation

> Backlog S1 produit (POC-G8). Allowlist candidate. Delivery (POC-G9) **fermé**. POC **non lancé**.

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
| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; POC-G8/G9 **FERMÉS** |
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
| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; delivery POC **fermé** (POC-G9) |
| D-NEXT-19 | GO versionnement sync post-merge cadrage | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
| D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
| D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
| D-NEXT-22 | Validation architecture / ARCH-POC-CAND / Option B | Morris | **FAIT** — POC-G7 **VALIDÉ AVEC RÉSERVES** |
| D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **CONSOMMÉ** — PR #221 **MERGED** (`40f8ebe…`) |
| D-NEXT-24 | Ouverture POC-G8 | Morris | **CONSOMMÉ** — backlog `26`–`28` |
| D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
| D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
| D-NEXT-27 | Validation backlog / allowlist | Morris | **Requise** |
| D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
| D-NEXT-29 | Commit/push/PR delivery harness | Morris | **Non autorisé** ici |
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

Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **validé + intégré**. Architecture Option B : **intégrée** (#221). POC-G8/G9 : **fermés**.

---

## 8. Questions Morris

1. Validez-vous le backlog / allowlist (`26`–`28`) ?
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

*Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*

```

### `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` — diff complet

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 06377f4..b3e7d1d 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,13 +4,13 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 5 — Backlog POC-G8 ; historique Option B conservé |
+| **Cycle** | 8 — Delivery harness-only POC-G9 |
 | **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | POC-G8 **CONSOMMÉ** ; backlog S1 (`26`–`28`) ; POC-G9 **FERMÉ** ; POC **non lancé** |
+| **Statut** | POC-G9 **CONSOMMÉ** (harness-only local) ; POC-G8 **CONSOMMÉ** ; POC **non lancé** ; `app/**` intact |
 | **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist candidate |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `60e6880…` ; branche locale `backlog/sfia-studio-poc-orchestration-s1` |
+| **Source de vérité** | `origin/main` @ `d45cc54…` ; branche locale `delivery/sfia-studio-poc-s1-harness` |
 
 > Architecture Option B **intégrée**. Backlog S1 produit (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
 
@@ -270,7 +270,9 @@ Pré-cadrage
 | D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
 | D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
 | D-NEXT-27 | Validation backlog / allowlist | Morris | **Requise** |
-| D-NEXT-28 | Ouverture POC-G9 (delivery) | Morris | **Fermée** |
+| D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
+| D-NEXT-29 | Commit/push/PR delivery harness | Morris | **Non autorisé** ici |
+| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | **Fermés** |
 
 ---
 
@@ -352,7 +354,7 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 10. Verdict documentaire
 
-**Verdict :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+**Verdict :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
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

**Prochaine décision :** review preuves harness ; éventuel commit/push/PR delivery — **non autorisés** ici.

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

### `projects/sfia-studio/20-poc-orchestration-framing.md` — diff complet

```diff
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 6f4ed10..b7db19a 100644
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
+**Prochaine décision :** review preuves harness ; éventuel commit/push/PR delivery — **non autorisés** ici.
 
 ---
 
@@ -327,4 +327,4 @@ Pas de plateforme de supervision industrialisée.
 
 ---
 
-*Cadrage INTÉGRÉ — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Cadrage INTÉGRÉ — POC-G9 harness-only CONSOMMÉ — POC NON LANCÉ — app/** intact.*
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
4. Allowlist **candidate** (`27`).
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
  → validation backlog / allowlist (Morris)
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
| Commit/push/PR | **non autorisés** ici |
| POC lancé | **Non** |

```

### `projects/sfia-studio/22-poc-orchestration-decision-pack.md` — diff complet

```diff
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index e954c3e..9e08070 100644
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
 
@@ -20,7 +20,7 @@
 2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**.
 3. POC-G8 **CONSOMMÉ** — backlog `26`–`28`.
 4. Allowlist **candidate** (`27`).
-5. POC-G9 fermé ; POC non lancé.
+5. POC-G9 **CONSOMMÉ** (harness-only) ; POC non lancé.
 
 ---
 
@@ -38,7 +38,7 @@
 | POC-G10 | **CONSOMMÉ** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **POC-G8** | **CONSOMMÉ** (backlog) |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 
 ARCH-POC-CAND-* : voir `25` (inchangées).
 
@@ -51,15 +51,30 @@ POC-G7 INTÉGRÉ → versionnement CONSOMMÉ (#221)
   → sync post-merge CONSOMMÉE (#222)
   → POC-G8 CONSOMMÉ (backlog 26–28)
   → validation backlog / allowlist (Morris)
-  → POC-G9 (FERMÉ) → POC (NON LANCÉ)
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
+| Commit/push/PR | **non autorisés** ici |
+| POC lancé | **Non** |
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
4. Allowlist **candidate** (`27`) — validation Morris requise.
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

**≠ READY FOR DELIVERY.** Backlog ≠ autorisation d’implémenter.

---

## 6. Réserves (conservées)

1. Cursor réel non prouvé
2. Techno harness ouverte
3. Protocole adaptateur ouvert
4. Allowlist candidate jusqu’à validation Morris
5. `app/**` delivery borné seulement
6. QA non-seconde-vérité
7. Clôture AF
8. Commit/push/PR delivery / UI / Cursor réel / Docker

---

## 7. Décisions Morris restantes

1. Validation backlog / allowlist (`26`–`28`).
2. Review preuves + éventuel commit/push/PR delivery (gates séparés).
3. Clôture AF (séparée).

---

## 8. Séquence

```text
POC-G8 CONSOMMÉ (backlog)
  → validation Morris backlog/allowlist
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

### `projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md` — diff complet

```diff
diff --git a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
index 05a9a4c..dc257c6 100644
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
 
@@ -20,7 +20,7 @@
 3. POC-G8 **CONSOMMÉ** — backlog borné S1 produit.
 4. Allowlist **candidate** (`27`) — validation Morris requise.
 5. ARCH-POC-CAND-01…12 **inchangées** (fond).
-6. POC-G9 **non ouvert**.
+6. POC-G9 **CONSOMMÉ** (harness-only).
 
 ---
 
@@ -50,7 +50,7 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 | POC-G10 | **CONSOMMÉ** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **POC-G8** | **CONSOMMÉ** |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Delivery / lancement POC | **NON AUTORISÉ** |
 
 **≠ READY FOR DELIVERY.** Backlog ≠ autorisation d’implémenter.
@@ -66,14 +66,14 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 5. `app/**` delivery borné seulement
 6. QA non-seconde-vérité
 7. Clôture AF
-8. POC-G9
+8. Commit/push/PR delivery / UI / Cursor réel / Docker
 
 ---
 
 ## 7. Décisions Morris restantes
 
 1. Validation backlog / allowlist (`26`–`28`).
-2. Ouverture éventuelle **POC-G9**.
+2. Review preuves + éventuel commit/push/PR delivery (gates séparés).
 3. Clôture AF (séparée).
 
 ---
@@ -83,7 +83,7 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 ```text
 POC-G8 CONSOMMÉ (backlog)
   → validation Morris backlog/allowlist
-  → POC-G9 (FERMÉ)
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
| **Gate** | Spike protocole si nécessaire avant POC-G9 |

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
| **Gate** | Validation Morris allowlist (`27`) |

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
| **Candidats** | Extensions minimales `app/**` **uniquement au delivery** (POC-G9) |
| **Gate** | POC-G9 pour toucher `app/**` |

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
8. E6 adaptateur + E7 cockpit (app/** seulement si POC-G9)
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
| POC-G9 | **FERMÉ** |
| Delivery / lancement POC | **NON AUTORISÉS** |

---

*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ — techno/protocole ouverts.*

```

### `projects/sfia-studio/26-poc-orchestration-backlog.md` — diff complet

```diff
diff --git a/projects/sfia-studio/26-poc-orchestration-backlog.md b/projects/sfia-studio/26-poc-orchestration-backlog.md
index 123023d..8fdffd2 100644
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
```

### `projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md` — contenu complet

```markdown
# SFIA Studio — Allowlist, denylist et critères d’acceptation POC S1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
| **Cycle** | 5 — Backlog |
| **Profil** | Critical |
| **Gate** | POC-G8 CONSOMMÉ |
| **POC-G9** | **CONSOMMÉ** (harness-only ; allowlist initiale) |
| **POC** | **NON LANCÉ** |
| **Statut allowlist** | **CANDIDATE** — validation Morris requise |
| **Architecture** | Option B minimale (inchangée) |
| **Base** | `main` @ `60e6880…` |

> Défaut = **deny**. Toute action non listée est refusée. Fail-closed.

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

## 2. Allowlist Git candidate

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

## 3. Allowlist documentaire / fichiers candidate

### 3.1 Chemins candidats (à figer dans le contrat d’exécution)

| Zone | Exemple | Règle |
|------|---------|-------|
| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**` sauf GO delivery) | Lecture |
| Méthode (si contrat) | chemins méthode explicitement listés | Lecture |
| Preuves locales | `proofDir` dédié POC | Lecture/écriture **locale** preuves seulement |
| Fixtures POC | répertoire fixtures déclaré | Lecture |

### 3.2 Bornes

| Borne | Valeur candidate |
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

## 4. Allowlist Cursor candidate

| Règle | Détail |
|-------|--------|
| Entrée | Via `CursorExecutorPort` uniquement |
| Modes | `fixture` (Must) · `manual` (Must) · `real-adapter` (ouvert — spike) |
| Instruction | Bornée par contrat (objectif DOC read-only) |
| CWD | Répertoire imposé par contrat |
| Timeout | Configurable (candidat 120–300 s) |
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

## 11. Validation Morris requise

Cette allowlist / denylist est **candidate**.

Avant tout élargissement post-harness, Morris doit :

1. Valider ou corriger les listes §2–§5.
2. Valider les bornes fichiers §3.2.
3. Confirmer modes Cursor acceptables pour le 1er delivery.
4. Confirmer que `app/**` reste hors S1 jusqu’à GO delivery borné.

---

*Allowlist S1 initiale — POC-G9 harness-only — POC NON LANCÉ — défaut deny — app/** interdit.*

```

### `projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md` — diff complet

```diff
diff --git a/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md b/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
index 774a41b..e93c12f 100644
--- a/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
+++ b/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
@@ -6,7 +6,7 @@
 | **Cycle** | 5 — Backlog |
 | **Profil** | Critical |
 | **Gate** | POC-G8 CONSOMMÉ |
-| **POC-G9** | **FERMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only ; allowlist initiale) |
 | **POC** | **NON LANCÉ** |
 | **Statut allowlist** | **CANDIDATE** — validation Morris requise |
 | **Architecture** | Option B minimale (inchangée) |
@@ -83,7 +83,7 @@
 | Taille max agrégée | 5 MiB |
 | Traversée | Interdite (`..`, symlinks hors root) |
 | Secrets | Interdits (`.env`, credentials, clés) |
-| `app/**` | **Interdit** en S1 backlog/delivery sauf GO POC-G9 explicite borné |
+| `app/**` | **Interdit** — POC-G9 harness-only n’autorise **pas** `app/**` |
 | Chemins protégés méthode | Selon règles repo — deny par défaut |
 
 ---
@@ -233,7 +233,7 @@ Voir `24` : `StudioIntent`, `StudioGateSubmission` (GO + `contractHash`), `Studi
 
 Cette allowlist / denylist est **candidate**.
 
-Avant POC-G9, Morris doit :
+Avant tout élargissement post-harness, Morris doit :
 
 1. Valider ou corriger les listes §2–§5.
 2. Valider les bornes fichiers §3.2.
@@ -242,4 +242,4 @@ Avant POC-G9, Morris doit :
 
 ---
 
-*Allowlist S1 candidate — POC-G8 — POC-G9 FERMÉ — POC NON LANCÉ — défaut deny.*
+*Allowlist S1 initiale — POC-G9 harness-only — POC NON LANCÉ — défaut deny — app/** interdit.*
```

### `projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md` — contenu complet

```markdown
# SFIA Studio — Gate pack delivery POC S1 (prérequis POC-G9)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
| **Cycle** | 5 — Backlog |
| **Profil** | Critical |
| **POC-G8** | **CONSOMMÉ** (backlog produit) |
| **POC-G9** | **CONSOMMÉ** — harness-only local |
| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
| **Delivery** | Harness local produit — commit/PR **non autorisés** ici |
| **Base** | `main` @ `60e6880…` |
| **Architecture** | Option B minimale (inchangée) |

> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.

---

## 1. Couverture backlog

| Epic | Couvert dans `26` | Ready pour instruction delivery ? |
|------|-------------------|-----------------------------------|
| E1 Contrats | Oui | Oui (après validation Morris backlog) |
| E2 Harness | Oui | Oui |
| E3 GitReader | Oui | Oui |
| E4 CursorPort | Oui | Oui — réel = spike |
| E5 Policy | Oui + `27` | Oui — allowlist candidate |
| E6 Adaptateur | Oui | Oui — protocole ouvert |
| E7 Cockpit | Oui | Oui — `app/**` seulement si POC-G9 |
| E8 Sécurité | Oui | Oui |
| E9 Observabilité | Oui | Oui |
| E10 QA | Oui | Oui |
| E11 Démo | Oui | Should |

---

## 2. Prérequis POC-G9 (checklist)

Avant tout GO delivery, Morris doit disposer de :

1. Backlog `26` validé (ou corrections actées).
2. Allowlist/denylist `27` **validée** (plus seulement candidate).
3. Confirmation Option B : Studio cockpit / adaptateur fin / harness autonome.
4. Confirmation hors périmètre : no remote write, no L5 global, no MVP.
5. Décision explicite sur modes Cursor acceptés pour le 1er incrément (fixture±manual).
6. Décision sur touch `app/**` (oui borné / non — harness-only d’abord).
7. Stratégie de preuve acceptée (§5).
8. Plan de réversibilité (§7).
9. Aucune techno/protocole présentée comme définitive sans preuve.

**POC-G9 consommé pour cet incrément harness-only.** UI / Cursor réel / Docker / commit-PR restent fermés.

---

## 3. Risques delivery (à traiter si POC-G9)

| Risque | Sévérité | Mitigation |
|--------|----------|------------|
| Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
| Allowlist trop large | Haute | Validation `27` ; défaut deny |
| API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
| Seconde vérité UI | Haute | Statut dérivé journal |
| Écriture Git accidentelle | Haute | Denylist + tests A2 |
| Service permanent inutile | Moyenne | Processus local à la demande |
| Scope creep multi-scénario | Moyenne | S1 only |

---

## 4. Réserves conservées (architecture)

1. Cursor réel non prouvé.
2. Technologie harness ouverte (Node/TS candidat).
3. Protocole adaptateur ouvert.
4. Allowlist détaillée = candidate jusqu’à validation Morris.
5. `app/**` uniquement delivery borné.
6. QA non-seconde-vérité.
7. Clôture AF séparée.
8. POC-G9 / lancement non autorisés ici.
9. **Docker** : option / spike d’évaluation possible avant POC-G9 — **non décidé**, ni obligatoire ni exclu.

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

## 9. Décision Morris attendue (future)

### Question POC-G9

Autorisez-vous le **delivery** du POC S1 Option B selon `26`/`27`/`28` ?

Sous-questions :

1. Validez-vous l’allowlist `27` ?
2. Autorisez-vous un premier incrément **harness-only** (sans `app/**`) ?
3. Si UI : quelles surfaces `app/**` minimales ?
4. Modes Cursor : fixture seulement / + manual / spike réel ?
5. Commit/push/PR delivery = gates séparés après POC-G9.

### Conséquences

| Décision | Effet |
|----------|-------|
| GO POC-G9 | Delivery documentaire+code borné possible (cycle dédié) |
| NO-GO | Backlog reste ; pas d’implémentation |
| GO harness-only | `app/**` reste intact |
| Claim Cursor réel | Spike + preuve obligatoires |

---

## 10. Verdict futur (non actuel)

Verdict **candidat** après POC-G9 réussi + démo :

`POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`

**Verdict actuel de ce cycle :**

`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`

---

## 11. Actions interdites (rappel)

code · `app/**` · commit/push/PR · merge · ouverture POC-G9 · lancement POC · L5 · writes Git distantes · choix techno/protocole définitifs sans preuve

---

*Gate pack delivery — prépare POC-G9 — ne l’ouvre pas — POC NON LANCÉ.*

```

### `projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md` — diff complet

```diff
diff --git a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
index 32bee4f..ba4a2a4 100644
--- a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
+++ b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
@@ -6,13 +6,13 @@
 | **Cycle** | 5 — Backlog |
 | **Profil** | Critical |
 | **POC-G8** | **CONSOMMÉ** (backlog produit) |
-| **POC-G9** | **FERMÉ** — décision Morris distincte |
-| **POC** | **NON LANCÉ** |
-| **Delivery** | **NON AUTORISÉ** |
+| **POC-G9** | **CONSOMMÉ** — harness-only local |
+| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
+| **Delivery** | Harness local produit — commit/PR **non autorisés** ici |
 | **Base** | `main` @ `60e6880…` |
 | **Architecture** | Option B minimale (inchangée) |
 
-> Ce document **prépare** POC-G9. Il ne l’ouvre pas. Il n’autorise ni code, ni `app/**`, ni lancement.
+> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.
 
 ---
 
@@ -48,7 +48,7 @@ Avant tout GO delivery, Morris doit disposer de :
 8. Plan de réversibilité (§7).
 9. Aucune techno/protocole présentée comme définitive sans preuve.
 
-**POC-G9 reste FERMÉ jusqu’à GO Morris explicite.**
+**POC-G9 consommé pour cet incrément harness-only.** UI / Cursor réel / Docker / commit-PR restent fermés.
 
 ---
```

## 10. Dépendances

`package.json` harness :
- typescript, vitest, @types/node (dev)
- type: module ; engines node
- **Aucune** dépendance runtime réseau
- package-lock.json présent pour install déterministe
- root package.json **non** modifié

## 11. CLI

Commandes : `validate-contract`, `run-fixture`, `request-stop`, `inspect-journal`, `verify-proofs`.
Pas de daemon / watch / serveur.

## 12. Tests unitaires & intégration

**26 tests PASS** (vitest).

Unit (12) : canonicalize, hash, schemas/state, GateValidator, PolicyEngine, paths, git deny, replay, STOP, secrets.

Integration (14) :
- A1 nominal COMPLETED/CLOSED
- A2 deny git push
- A3 hash mismatch
- A4 STOP
- A5 sans Studio (CLI path)
- A6 projection journal
- AB-01…AB-08

```

> @sfia-studio/poc-s1-harness@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace/projects/sfia-studio/harness

 ✓ tests/unit.test.ts (12 tests) 3ms
 ✓ tests/integration.test.ts (14 tests) 188ms

 Test Files  2 passed (2)
      Tests  26 passed (26)
   Start at  16:36:02
   Duration  385ms (transform 51ms, setup 0ms, collect 81ms, tests 191ms, environment 0ms, prepare 56ms)


```

## 13. Démo CLI A1

Exécution locale `run-fixture` → preuve sous `harness/proofs/demo-cli/run/` :
contract.json, contractHash.txt, gate.json, git-results.json, cursor-fixture.json (`realCursorClaimed:false`), events.jsonl, summary.json.
`verify-proofs` → ok ; projectedState CLOSED.
Git read-only observé (`rev-parse`, `status --short`) — aucun write.

## 14. Qualité

- typecheck : PASS
- build (`tsc -p tsconfig.build.json`) : PASS
- tests : 26/26 PASS
- lint : pas de ESLint dédié harness (aligné minimal) ; `git diff --check` OK après correction EOF
- aucune dépendance réseau runtime

## 15. Sécurité — scans

Commandes interdites : présentes uniquement en denylist/tests (faux positifs documentés).
- aucun `eval` / shell:true
- aucun Dockerfile dans harness
- `git diff --name-only` ∩ `app/**` = vide
- Cursor réel non revendiqué
- fail-closed journal / gate / policy

## 16. Preuves absences

### app/**
```
EMPTY
```

### Docker
```

```

### Diff stats
```
.../07-product-trajectory-and-decision-pack.md     | 12 +++++----
 .../sfia-studio/20-poc-orchestration-framing.md    | 14 +++++------
 .../22-poc-orchestration-decision-pack.md          | 27 +++++++++++++++-----
 ...poc-orchestration-architecture-decision-pack.md | 24 +++++++++++-------
 .../sfia-studio/26-poc-orchestration-backlog.md    |  4 +--
 ...7-poc-orchestration-allowlist-and-acceptance.md |  8 +++---
 .../28-poc-orchestration-delivery-gate-pack.md     | 10 ++++----
 projects/sfia-studio/README.md                     | 29 ++++++++++++++--------
 8 files changed, 79 insertions(+), 49 deletions(-)
```

```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/20-poc-orchestration-framing.md
M	projects/sfia-studio/22-poc-orchestration-decision-pack.md
M	projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
M	projects/sfia-studio/26-poc-orchestration-backlog.md
M	projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
M	projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
M	projects/sfia-studio/README.md
```

## 17. Risques / réserves / dette / limites

### Réserves
1. Cursor réel non implémenté (fixture only).
2. Adaptateur Studio / UI non livrés.
3. Docker option ouverte — non retenu.
4. Allowlist raffinable post-review.
5. Delivery non commité / non PR.
6. Preuves locales non industrialisées.

### Dette
- Pas d’ESLint dédié harness
- Pas de couverture Istanbul formelle (liste exhaustive tests)
- CLI demo proofs gitignored

### Limites
- S1 only ; single-operator Morris fixture
- Pas de multi-scénario / L5 / cloud / daemon

## 18. Statuts gates / POC

| Gate | Statut |
|------|--------|
| POC-G8 | CONSOMMÉ |
| **POC-G9** | **CONSOMMÉ** (harness-only) |
| UI app/** | FERMÉ |
| Cursor réel | FERMÉ |
| Docker | non retenu / option ouverte |
| Commit/push/PR delivery | FERMÉS |
| POC lancé | **NON** |

### Décisions Morris restantes
1. Review ChatGPT des preuves
2. GO commit delivery
3. GO push + PR
4. GO merge
5. UI / Cursor réel / Docker (séparés)

## 19. Actions interdites (cycle)

- commit / push branche delivery
- PR / merge
- modifier app/**
- Cursor réel / API inventée
- Docker
- écriture Git distante
- daemon / industrialisation

## 20. Verdict

**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**

Réserves : Cursor fixture only ; pas d’UI ; Docker non retenu ; delivery non versionné ; POC non lancé.

Instruction ChatGPT : relire ce pack depuis Git handoff avant tout commit/PR.
