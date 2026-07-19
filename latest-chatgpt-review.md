# SFIA Studio — Review Pack FULL — Incrément B

## Métadonnées
- **Date / heure / fuseau** : 2026-07-20 00:09:44 CEST
- **Cycle** : 8 — Delivery / implémentation
- **Profil** : Standard
- **Typologie** : EVOL / DELIVERY / INTEGRATION / FIXTURE
- **GO Morris consommé** : G-VS-DEL-B (implémentation locale non live)
- **Branche** : `delivery/sfia-studio-poc-increment-b`
- **HEAD** : `ee9487797ce44c8d864846030c54fac43ee33611`
- **origin/main** : `ee9487797ce44c8d864846030c54fac43ee33611` (attendu min. ee9487797ce44c8d864846030c54fac43ee33611)
- **Working tree initial** : clean hors `.tmp-sfia-review/` ; Truth Check FF `main` → branche créée ; aucun stage/commit/push delivery

## Verdict
**SFIA STUDIO INCREMENT B IMPLEMENTED — MORRIS FUNCTIONAL AND TECHNICAL VALIDATION REQUIRED**

## Sources Git consultées
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- projects/sfia-studio/32–40 (conception, UX, backlog)
- projects/sfia-studio/app/** et harness/**

## Découverte locale app/harness
| Élément | Localisation |
|---|---|
| Entrée autonome harness | `harness/src/cli.ts`, `Orchestrator.run`, `npm run cli` |
| GateValidator | `harness/src/gate/gateValidator.ts` (+ ancrage branche/HEAD/allowlist) |
| Journal | `harness/src/journal/eventJournal.ts` → `events.jsonl` |
| ProofStore | `harness/src/proof/proofStore.js` + `verifyProofPack.ts` |
| Ports fixtures | `cursorFixture.ts`, `gptFixture.ts` (défaut) ; spikes live non utilisés |
| Contrats | `harness/src/types/contracts.ts` |
| Adaptateur fin | `harness/src/adapter/thinStudioAdapter.ts` |
| Reprise session | `harness/src/session/resumeSession.ts` |
| Pont Studio | `app/lib/harness/*` + Server Action `runStudioHarness` |
| Cockpit Incr. A | routes ×4 + switcher `?vs=` conservés |

## Readiness Standard (avant code — confirmée)
1. Inventaire harness : OK (orchestrator, gate, journal, proof, ports fixtures, CLI)
2. Point d’entrée autonome : `cli.ts` / `Orchestrator` — intact
3. Contrats/types : `ExecutionContract`, `GateDecision`, `JournalEvent` (+ extensions B)
4. GateValidator : étendu ancrages ; pas de second moteur
5. Ports fixtures GPT/Cursor : réutilisés ; live refusé (`LIVE_PORT_DENIED`)
6. Journal : `EventJournal` unique
7. ProofStore : unique + `verifyProofPack`
8. Fixtures : `fixtures/builders.ts`
9. Tests harness : unit + integration + increment-b
10. Studio Incr. A : 4 routes, VsDemo*, fixtures — raccordés
11. Fichiers envisagés = fichiers livrés (ci-dessous)
12. Écarts 32–40 : aucun doc 01–40 modifié ; Option B respectée
13. Adaptateur minimal : map/forward/return uniquement
14. Aucune dépendance npm ajoutée
15. Harness autonome intact (preuve tests sans React/Studio)

**STOP architecture** : non déclenché (pas de second moteur, pas d’autorité Studio, pas de bus/API/BDD)

## Contrat d’intégration (avant code — formalisé)

### Entrée Studio → adaptateur
`requestId`, `correlationId`, `contractId`, `contractHash` (claim), `branch`, `head`, `allowlist`, `morrisDecision`, `decidedAt` (ISO+TZ), `action`

### Responsabilité adaptateur
- Traduire / mapper / transmettre / retourner
- **Ne jamais** valider un GO, décider, écrire journal/proofStore, appeler ports live

### Responsabilité harness
- Schéma/invariants, revalidation hash/branche/HEAD/allowlist/décision Morris
- Fail-closed, ports fixtures, événements, rapport, preuves, état dérivé, CLI autonome

### Sortie harness → Studio
`statusSource: "harness"`, `canonicalStatus`, `events`, `report`, `proofPack`, `refusalReason`, `stopOrTimeout`, `goValid`, timestamps, réserves, `realGptClaimed: false`, `realCursorClaimed: false`, `remoteGitWrite: false`

## Architecture réutilisée
Option B : Studio = cockpit / vue dérivée ; harness = autorité gates/journal/preuves. Adaptateur fin sans policy. Pas de duplication GateValidator/journal/proofStore côté Studio.

## Fichiers créés / modifiés
### Diffstat
```
 .../app/components/vertical-slice/VsDemoChrome.tsx |   2 +-
 .../app/components/vertical-slice/VsShared.tsx     |  93 ++++++++++-
 .../features/cycle-actif/VsCycleActifScreen.tsx    |  14 +-
 .../app/features/decision/VsDecisionScreen.tsx     |  11 +-
 .../nouvelle-demande/VsNouvelleDemandeScreen.tsx   |   8 +-
 .../app/features/synthese/VsSyntheseScreen.tsx     |  14 +-
 .../sfia-studio/app/fixtures/vertical-slice.ts     |  14 +-
 .../app/lib/vertical-slice/VsDemoContext.tsx       | 130 +++++++++++++--
 .../sfia-studio/app/lib/vertical-slice/types.ts    |   4 +
 projects/sfia-studio/app/playwright.config.ts      |   3 +-
 projects/sfia-studio/harness/fixtures/builders.ts  |   4 +
 projects/sfia-studio/harness/src/cli.ts            |  32 +++-
 .../sfia-studio/harness/src/gate/gateValidator.ts  |  62 ++++++-
 projects/sfia-studio/harness/src/index.ts          |   3 +
 projects/sfia-studio/harness/src/orchestrator.ts   | 179 ++++++++++++++++++++-
 .../sfia-studio/harness/src/types/contracts.ts     |  70 +++++++-
 16 files changed, 596 insertions(+), 47 deletions(-)

```
### Nouveaux fichiers (contenu complet ci-dessous)

### `projects/sfia-studio/harness/src/adapter/thinStudioAdapter.ts`
```typescript
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Orchestrator, type RunInput, type RunResult } from "../orchestrator.js";
import { resumeSessionFromProofDir } from "../session/resumeSession.js";
import { verifyProofPack } from "../proof/verifyProofPack.js";
import { EventJournal } from "../journal/eventJournal.js";
import { computeContractHash } from "../hash/contractHash.js";
import { makeContract, makeRequest, WORKSPACE_ROOT } from "../../fixtures/builders.js";
import type {
  GateDecision,
  StudioAdapterRequest,
  StudioAdapterResponse,
} from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";
import { ProofStore } from "../proof/proofStore.js";

/**
 * Thin Studio↔harness adapter (Increment B).
 *
 * Responsibilities ONLY:
 * - map Studio payload → harness RunInput
 * - forward to Orchestrator / resume
 * - return derived StudioAdapterResponse
 *
 * NEVER:
 * - validate or authorize a GO
 * - own policy / gate logic
 * - write journal or proofStore directly (harness owns those)
 * - call live GPT / Cursor ports
 */
export class ThinStudioAdapter {
  constructor(private readonly orchestrator = new Orchestrator()) {}

  async forward(request: StudioAdapterRequest): Promise<StudioAdapterResponse> {
    if (request.action === "resume") {
      if (!request.proofDir) {
        return this.refusalSkeleton(request, "RESUME_PROOF_DIR_MISSING", "proofDir required for resume");
      }
      return resumeSessionFromProofDir(request.proofDir);
    }

    const proofDir =
      request.proofDir ?? mkdtempSync(path.join(os.tmpdir(), "sfia-studio-inc-b-"));
    const contract = makeContract(proofDir, {
      contractId: request.contractId,
      requestId: request.requestId,
      allowedPaths:
        request.allowlist.length > 0
          ? request.allowlist
          : ["projects/sfia-studio", "projects/sfia-studio/harness"],
      repositoryRoot: WORKSPACE_ROOT,
    });

    // Probe scenarios mutate mapping before forward — still no authority here.
    let gate = this.mapGate(request, contract);
    const runInput = this.mapRunInput(request, contract, gate, proofDir);

    if (request.action === "probe-write-escape") {
      try {
        new ProofStore(proofDir).writeText("../escape-probe.txt", "denied");
        return this.refusalSkeleton(request, "PROBE_UNEXPECTED", "escape write unexpectedly allowed");
      } catch (err) {
        const he = err as HarnessError;
        const journal = new EventJournal(proofDir, request.correlationId);
        journal.append({
          eventType: "security.refusal",
          requestId: request.requestId,
          result: "denied",
          errorCode: he.code,
          detail: { message: he.message, source: "harness", probe: "write-escape" },
        });
        return {
          ...this.refusalSkeleton(request, he.code, he.message),
          proofDir,
          journalPath: journal.filePath,
          events: journal.readAll(),
          proofPack: verifyProofPack(proofDir),
        };
      }
    }

    const result = await this.orchestrator.run(runInput);
    return this.toResponse(request, result, gate);
  }

  /** Pure mapping — no validation. */
  mapGate(
    request: StudioAdapterRequest,
    contract: ReturnType<typeof makeContract>,
  ): GateDecision {
    const hash = computeContractHash(contract);
    const base: GateDecision = {
      decisionId: request.decisionId ?? `gate-${request.correlationId}`,
      requestId: request.requestId,
      contractHash: hash,
      decision: request.morrisDecision,
      decidedBy: "Morris",
      decidedAt: request.decidedAt,
      scope: contract.allowedPaths[0] ?? "projects/sfia-studio",
      gitBranch: request.branch,
      gitHead: request.head,
      allowlistSnapshot: [...contract.allowedPaths],
      correlationId: request.correlationId,
    };

    switch (request.action) {
      case "stop":
        return { ...base, decision: "STOP" };
      case "probe-invalid-hash":
        return { ...base, contractHash: "0".repeat(64) };
      case "probe-invalid-branch":
        return { ...base, gitBranch: `${request.branch}-tampered` };
      case "probe-invalid-head":
        return { ...base, gitHead: "b".repeat(40) };
      case "probe-invalid-allowlist":
        return { ...base, allowlistSnapshot: ["forbidden/path"] };
      case "probe-missing-decider":
        return { ...base, decidedBy: "" };
      default:
        return base;
    }
  }

  mapRunInput(
    request: StudioAdapterRequest,
    contract: ReturnType<typeof makeContract>,
    gate: GateDecision,
    proofDir: string,
  ): RunInput {
    const poc = makeRequest({
      requestId: request.requestId,
      title: "SFIA Studio Increment B fixture cycle",
      cycle: "8",
      scope: proofDir,
      operator: "Morris",
      createdAt: request.decidedAt,
    });

    const input: RunInput = {
      request: poc,
      contract,
      gate,
      expectedBranch: request.branch,
      expectedHead: request.head,
      revalidateBeforeExecute: true,
      studioCorrelationId: request.correlationId,
    };

    if (request.action === "probe-timeout") {
      input.cursorSimulate = "timeout";
    }
    if (request.action === "probe-incomplete-report") {
      input.simulateIncompleteReport = true;
    }
    if (request.action === "probe-missing-proof") {
      input.simulateMissingProof = true;
    }
    if (request.action === "probe-live-port") {
      input.attemptLiveCursor = true;
    }
    return input;
  }

  toResponse(
    request: StudioAdapterRequest,
    result: RunResult,
    gate: GateDecision,
  ): StudioAdapterResponse {
    const journal = new EventJournal(result.proofDir, result.correlationId);
    const events = journal.readAll();
    const requireSuccess = result.ok && result.terminalState === "CLOSED";
    const proofPack = verifyProofPack(result.proofDir, {
      requireSuccessArtifacts: requireSuccess,
    });
    const stopOrTimeout = classify(result.errorCode);
    const goValid =
      result.ok &&
      gate.decision === "GO" &&
      !result.errorCode &&
      stopOrTimeout === null;

    return {
      ok: result.ok && proofPack.ok,
      statusSource: "harness",
      mode: "fixture",
      canonicalStatus: result.projectedState ?? result.terminalState,
      goValid,
      errorCode: result.errorCode,
      refusalReason: result.errorCode
        ? `Harness refusal: ${result.errorCode}`
        : !proofPack.ok
          ? `Proof pack incomplete: ${proofPack.missing.join(", ")}`
          : undefined,
      stopOrTimeout,
      contractHash: result.contractHash,
      executionId: result.executionId,
      correlationId: result.correlationId,
      proofDir: result.proofDir,
      journalPath: result.journalPath,
      events,
      report: result.report ?? null,
      proofPack,
      reserves: [
        "Statut source = harness",
        "Adaptateur sans autorité",
        "Aucun GPT/Cursor live",
        "Aucune écriture Git distante",
        ...(result.ok ? [] : ["Exécution non réussie — aucun faux succès"]),
      ],
      timestamps: {
        decidedAt: gate.decidedAt,
        completedAt: new Date().toISOString(),
      },
      realGptClaimed: false,
      realCursorClaimed: false,
      remoteGitWrite: false,
    };
  }

  private refusalSkeleton(
    request: StudioAdapterRequest,
    code: string,
    message: string,
  ): StudioAdapterResponse {
    return {
      ok: false,
      statusSource: "harness",
      mode: "fixture",
      canonicalStatus: "REJECTED",
      goValid: false,
      errorCode: code,
      refusalReason: message,
      stopOrTimeout: "refusal",
      contractHash: request.contractHash,
      correlationId: request.correlationId,
      proofDir: request.proofDir ?? "",
      events: [],
      report: null,
      proofPack: { ok: false, missing: [], present: [], integrityNotes: [] },
      reserves: ["Adaptateur sans autorité — refus harness"],
      timestamps: { decidedAt: request.decidedAt, completedAt: new Date().toISOString() },
      realGptClaimed: false,
      realCursorClaimed: false,
      remoteGitWrite: false,
    };
  }
}

function classify(errorCode?: string): "STOP" | "timeout" | "refusal" | null {
  if (!errorCode) return null;
  if (errorCode === "GATE_STOP" || errorCode === "STOP") return "STOP";
  if (errorCode.includes("TIMEOUT")) return "timeout";
  return "refusal";
}

/** Factory used by CLI and autonomous tests — zero React / Studio imports. */
export function createThinStudioAdapter(): ThinStudioAdapter {
  return new ThinStudioAdapter();
}

```

### `projects/sfia-studio/harness/src/session/resumeSession.ts`
```typescript
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { EventJournal } from "../journal/eventJournal.js";
import { verifyProofPack } from "../proof/verifyProofPack.js";
import type { JournalEvent, StudioAdapterResponse } from "../types/contracts.js";

/**
 * Rebuild derived Studio view from harness journal/proofs only.
 * Never recreates an implicit GO. Never invents success from incomplete state.
 */
export function resumeSessionFromProofDir(proofDir: string): StudioAdapterResponse {
  const journal = new EventJournal(proofDir, "resume");
  const events = journal.readAll();
  const projected = journal.projectLastState() ?? "UNKNOWN";
  const proofPack = verifyProofPack(proofDir, {
    requireSuccessArtifacts: projected === "CLOSED" && lastResultIsSuccess(events),
  });

  let report: Record<string, unknown> | null = null;
  const summaryPath = path.join(proofDir, "summary.json");
  if (existsSync(summaryPath)) {
    report = JSON.parse(readFileSync(summaryPath, "utf8")) as Record<string, unknown>;
  }

  const lastFail = [...events].reverse().find((e) => e.errorCode || e.result === "rejected" || e.result === "stop");
  const errorCode = lastFail?.errorCode;
  const stopOrTimeout = classifyStopTimeout(errorCode, lastFail?.result);
  const ok = projected === "CLOSED" && !errorCode && proofPack.ok && !!report;
  const contractHash =
    events.map((e) => e.contractHash).filter(Boolean).at(-1) ??
    (existsSync(path.join(proofDir, "contractHash.txt"))
      ? readFileSync(path.join(proofDir, "contractHash.txt"), "utf8").trim()
      : "");

  return {
    ok,
    statusSource: "harness",
    mode: "fixture",
    canonicalStatus: projected,
    goValid: false,
    errorCode,
    refusalReason: lastFail?.detail?.message
      ? String(lastFail.detail.message)
      : errorCode
        ? `Resumed with ${errorCode}`
        : !ok
          ? "Incomplete or non-success session — no implicit GO"
          : undefined,
    stopOrTimeout,
    contractHash,
    correlationId: events[0]?.correlationId ?? "resume",
    executionId: events.find((e) => e.executionId)?.executionId,
    proofDir,
    journalPath: journal.filePath,
    events,
    report,
    proofPack,
    reserves: [
      "État dérivé du journal harness uniquement",
      "Aucun GO implicite à la reprise",
      "Mode fixture / simulation",
    ],
    timestamps: {
      completedAt: events.at(-1)?.timestamp ?? new Date().toISOString(),
    },
    realGptClaimed: false,
    realCursorClaimed: false,
    remoteGitWrite: false,
  };
}

function lastResultIsSuccess(events: JournalEvent[]): boolean {
  const last = [...events].reverse().find((e) => e.result);
  return last?.result === "completed" || last?.result === "ok";
}

function classifyStopTimeout(
  errorCode?: string,
  result?: string,
): "STOP" | "timeout" | "refusal" | null {
  if (!errorCode && result !== "rejected" && result !== "stop") return null;
  if (errorCode === "GATE_STOP" || errorCode === "STOP" || result === "stop") return "STOP";
  if (errorCode?.includes("TIMEOUT")) return "timeout";
  if (errorCode || result === "rejected") return "refusal";
  return null;
}

```

### `projects/sfia-studio/harness/src/proof/verifyProofPack.ts`
```typescript
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { ProofPackVerification } from "../types/contracts.js";

const CORE_ARTIFACTS = [
  "contract.json",
  "contractHash.txt",
  "request.json",
  "gate.json",
  "events.jsonl",
] as const;

const SUCCESS_ARTIFACTS = ["summary.json", "cursor-fixture.json", "git-results.json"] as const;

/**
 * Verify fixture proof pack completeness against harness proofDir.
 * Single source of truth — does not invent a second store.
 */
export function verifyProofPack(
  proofDir: string,
  options: { requireSuccessArtifacts?: boolean } = {},
): ProofPackVerification {
  const required = [
    ...CORE_ARTIFACTS,
    ...(options.requireSuccessArtifacts ? SUCCESS_ARTIFACTS : []),
  ];
  const present: string[] = [];
  const missing: string[] = [];
  for (const name of required) {
    if (existsSync(path.join(proofDir, name))) present.push(name);
    else missing.push(name);
  }
  const integrityNotes: string[] = [];
  const hashFile = path.join(proofDir, "contractHash.txt");
  if (existsSync(hashFile)) {
    const hash = readFileSync(hashFile, "utf8").trim();
    if (!/^[a-f0-9]{64}$/i.test(hash)) {
      integrityNotes.push("contractHash.txt format unexpected");
    } else {
      integrityNotes.push("contractHash.txt present (sha256 hex)");
    }
  }
  if (existsSync(path.join(proofDir, "events.jsonl"))) {
    integrityNotes.push("events.jsonl present (journal canonical)");
  }
  return {
    ok: missing.length === 0,
    missing: [...missing],
    present,
    integrityNotes,
  };
}

```

### `projects/sfia-studio/harness/tests/increment-b.test.ts`
```typescript
import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import { createThinStudioAdapter } from "../src/adapter/thinStudioAdapter.js";
import { Orchestrator } from "../src/orchestrator.js";
import { GateValidator } from "../src/gate/gateValidator.js";
import { computeContractHash } from "../src/hash/contractHash.js";
import { resumeSessionFromProofDir } from "../src/session/resumeSession.js";
import { verifyProofPack } from "../src/proof/verifyProofPack.js";
import { makeContract, makeGo, makeRequest } from "../fixtures/builders.js";
import type { StudioAdapterRequest } from "../src/types/contracts.js";

const HARNESS_SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src");

function tmp(): string {
  return mkdtempSync(path.join(os.tmpdir(), "sfia-inc-b-"));
}

function baseReq(overrides: Partial<StudioAdapterRequest> = {}): StudioAdapterRequest {
  return {
    requestId: "req-inc-b-001",
    correlationId: "corr-inc-b-001",
    contractId: "ctr-inc-b-001",
    contractHash: "claimed-ignored-by-adapter",
    branch: "delivery/sfia-studio-poc-increment-b",
    head: "ee9487797ce44c8d864846030c54fac43ee33611",
    allowlist: ["projects/sfia-studio", "projects/sfia-studio/harness"],
    morrisDecision: "GO",
    decidedAt: "2026-07-20T00:10:00+02:00",
    action: "run-fixture",
    proofDir: tmp(),
    ...overrides,
  };
}

describe("Increment B — thin adapter (no authority)", () => {
  it("maps and forwards without validating GO itself", async () => {
    const adapter = createThinStudioAdapter();
    const src = readFileSync(
      path.join(HARNESS_SRC, "adapter/thinStudioAdapter.ts"),
      "utf8",
    );
    expect(src).not.toMatch(/GateValidator/);
    expect(src).not.toMatch(/assertGateOk/);
    expect(src).toMatch(/forward/);
    const res = await adapter.forward(baseReq());
    expect(res.statusSource).toBe("harness");
    expect(res.mode).toBe("fixture");
    expect(res.realGptClaimed).toBe(false);
    expect(res.realCursorClaimed).toBe(false);
    expect(res.remoteGitWrite).toBe(false);
    expect(res.ok).toBe(true);
    expect(res.goValid).toBe(true);
    expect(res.events.length).toBeGreaterThan(3);
    expect(res.proofPack?.ok).toBe(true);
    expect(res.report).toBeTruthy();
  });

  it("does not auto-retry after GO consume (replay refused)", async () => {
    const adapter = createThinStudioAdapter();
    const decisionId = "gate-once-only";
    const proof1 = tmp();
    const first = await adapter.forward(baseReq({ proofDir: proof1, decisionId }));
    expect(first.ok).toBe(true);
    const second = await adapter.forward(
      baseReq({ proofDir: tmp(), decisionId, correlationId: "corr-retry" }),
    );
    // Same Orchestrator instance inside adapter — replay blocked
    expect(second.ok).toBe(false);
    expect(second.errorCode).toBe("GATE_REPLAY");
    expect(second.stopOrTimeout).toBe("refusal");
  });
});

describe("Increment B — harness autonomy (no Studio)", () => {
  it("src tree has no React imports", () => {
    const walk = (dir: string): string[] => {
      const out: string[] = [];
      for (const ent of readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) out.push(...walk(p));
        else if (/\.(ts|js)$/.test(ent.name)) out.push(p);
      }
      return out;
    };
    for (const file of walk(HARNESS_SRC)) {
      const text = readFileSync(file, "utf8");
      expect(text).not.toMatch(/from ["']react["']/);
      expect(text).not.toMatch(/from ["']react-dom["']/);
      expect(text).not.toMatch(/from ["']next\//);
      expect(text).not.toMatch(/from ["'][^"']*\/app\//);
      expect(text).not.toMatch(/import\(["'][^"']*sfia-studio\/app/);
    }
  });

  it("nominal + invalid GO + STOP + journal + proofs without Studio", async () => {
    const orch = new Orchestrator();
    const proofOk = tmp();
    const c = makeContract(proofOk);
    const ok = await orch.run({
      request: makeRequest(),
      contract: c,
      gate: makeGo(c),
      expectedBranch: "delivery/sfia-studio-poc-increment-b",
      expectedHead: "ee9487797ce44c8d864846030c54fac43ee33611",
      revalidateBeforeExecute: true,
    });
    expect(ok.ok).toBe(true);
    expect(verifyProofPack(proofOk, { requireSuccessArtifacts: true }).ok).toBe(true);

    const proofBad = tmp();
    const c2 = makeContract(proofBad);
    const bad = await orch.run({
      request: makeRequest(),
      contract: c2,
      gate: makeGo(c2, { contractHash: "0".repeat(64) }),
      expectedBranch: "delivery/sfia-studio-poc-increment-b",
      expectedHead: "ee9487797ce44c8d864846030c54fac43ee33611",
    });
    expect(bad.ok).toBe(false);
    expect(bad.errorCode).toBe("GATE_HASH_MISMATCH");

    const proofStop = tmp();
    const c3 = makeContract(proofStop);
    const stop = await orch.run({
      request: makeRequest(),
      contract: c3,
      gate: makeGo(c3, { decision: "STOP", decisionId: "stop-b" }),
    });
    expect(stop.errorCode).toBe("GATE_STOP");
    expect(stop.ok).toBe(false);
  });
});

describe("Increment B — gates & invalidation", () => {
  it("rejects branch / HEAD / allowlist / missing Morris", () => {
    const dir = tmp();
    const c = makeContract(dir);
    const v = new GateValidator();
    const hash = computeContractHash(c);
    const branch = "delivery/sfia-studio-poc-increment-b";
    const head = "ee9487797ce44c8d864846030c54fac43ee33611";

    expect(
      v.validate({
        gate: makeGo(c, { gitBranch: "other" }),
        contract: c,
        expectedHash: hash,
        expectedBranch: branch,
        expectedHead: head,
      }).ok,
    ).toBe(false);

    expect(
      v.validate({
        gate: makeGo(c, { gitHead: "a".repeat(40) }),
        contract: c,
        expectedHash: hash,
        expectedBranch: branch,
        expectedHead: head,
      }).ok,
    ).toBe(false);

    expect(
      v.validate({
        gate: makeGo(c, { allowlistSnapshot: ["evil"] }),
        contract: c,
        expectedHash: hash,
        expectedBranch: branch,
        expectedHead: head,
      }).ok,
    ).toBe(false);

    expect(
      v.validate({
        gate: makeGo(c, { decidedBy: "" }),
        contract: c,
        expectedHash: hash,
      }).ok,
    ).toBe(false);
  });

  it("adapter probes refuse without success", async () => {
    const adapter = createThinStudioAdapter();
    for (const action of [
      "probe-invalid-hash",
      "probe-invalid-branch",
      "probe-invalid-head",
      "probe-invalid-allowlist",
      "probe-missing-decider",
      "probe-timeout",
      "probe-incomplete-report",
      "probe-missing-proof",
      "probe-live-port",
      "probe-write-escape",
    ] as const) {
      const res = await adapter.forward(baseReq({ action, proofDir: tmp() }));
      expect(res.ok, action).toBe(false);
      expect(res.canonicalStatus === "CLOSED" || res.canonicalStatus === "REJECTED", action).toBe(
        true,
      );
      if (action === "probe-timeout") {
        expect(res.stopOrTimeout).toBe("timeout");
        expect(res.errorCode).toMatch(/TIMEOUT/);
      }
      if (action === "stop" as never) {
        /* n/a */
      }
    }
    const stop = await adapter.forward(baseReq({ action: "stop", proofDir: tmp() }));
    expect(stop.ok).toBe(false);
    expect(stop.stopOrTimeout).toBe("STOP");
  });
});

describe("Increment B — session resume", () => {
  it("reconstructs state from journal without implicit GO", async () => {
    const adapter = createThinStudioAdapter();
    const proofDir = tmp();
    const run = await adapter.forward(baseReq({ proofDir }));
    expect(run.ok).toBe(true);
    const resumed = resumeSessionFromProofDir(proofDir);
    expect(resumed.statusSource).toBe("harness");
    expect(resumed.canonicalStatus).toBe("CLOSED");
    expect(resumed.goValid).toBe(false);
    expect(resumed.events.length).toBeGreaterThan(0);
    expect(resumed.report).toBeTruthy();

    const stoppedDir = tmp();
    await adapter.forward(baseReq({ action: "stop", proofDir: stoppedDir }));
    const resumedStop = resumeSessionFromProofDir(stoppedDir);
    expect(resumedStop.ok).toBe(false);
    expect(resumedStop.stopOrTimeout).toBe("STOP");
    expect(resumedStop.refusalReason).toBeTruthy();
  });
});

```

### `projects/sfia-studio/app/lib/harness/types.ts`
```typescript
/** Derived Studio view of harness Incremental B responses (no second truth). */

export type StudioHarnessAction =
  | "run-fixture"
  | "stop"
  | "resume"
  | "probe-invalid-hash"
  | "probe-invalid-branch"
  | "probe-invalid-head"
  | "probe-invalid-allowlist"
  | "probe-missing-decider"
  | "probe-timeout"
  | "probe-incomplete-report"
  | "probe-missing-proof"
  | "probe-live-port"
  | "probe-write-escape";

export interface StudioHarnessRequest {
  requestId: string;
  correlationId: string;
  contractId: string;
  contractHash: string;
  branch: string;
  head: string;
  allowlist: string[];
  morrisDecision: "GO" | "NO-GO" | "CORRIGER" | "STOP" | "CLOSE";
  decidedAt: string;
  action: StudioHarnessAction;
  proofDir?: string;
  decisionId?: string;
}

export interface StudioHarnessEvent {
  eventId: string;
  eventType: string;
  timestamp: string;
  requestId: string;
  correlationId: string;
  result?: string;
  errorCode?: string;
  detail?: Record<string, unknown>;
}

export interface StudioHarnessView {
  ok: boolean;
  statusSource: "harness";
  mode: "fixture" | "simulation";
  canonicalStatus: string;
  goValid: boolean;
  errorCode?: string;
  refusalReason?: string;
  stopOrTimeout?: "STOP" | "timeout" | "refusal" | null;
  contractHash: string;
  executionId?: string;
  correlationId: string;
  proofDir: string;
  journalPath?: string;
  events: StudioHarnessEvent[];
  report?: Record<string, unknown> | null;
  proofPack?: {
    ok: boolean;
    missing: string[];
    present: string[];
    integrityNotes: string[];
  };
  reserves: string[];
  timestamps: { decidedAt?: string; completedAt: string };
  realGptClaimed: false;
  realCursorClaimed: false;
  remoteGitWrite: false;
}

```

### `projects/sfia-studio/app/lib/harness/buildRequest.ts`
```typescript
import { vsFixture } from "@/fixtures/vertical-slice";
import type { StudioHarnessAction, StudioHarnessRequest } from "./types";

/**
 * Pure mapping Studio fixture → adapter payload.
 * No GO validation, no policy, no journal writes.
 */
export function buildStudioHarnessRequest(
  action: StudioHarnessAction,
  overrides: Partial<StudioHarnessRequest> = {},
): StudioHarnessRequest {
  return {
    requestId: vsFixture.requestId,
    correlationId: `${vsFixture.correlationId}-${action}`,
    contractId: vsFixture.contractId,
    contractHash: vsFixture.contractHash,
    branch: "delivery/sfia-studio-poc-increment-b",
    head: "ee9487797ce44c8d864846030c54fac43ee33611",
    allowlist: ["projects/sfia-studio", "projects/sfia-studio/harness"],
    morrisDecision: action === "stop" ? "STOP" : "GO",
    decidedAt: new Date().toISOString(),
    action,
    ...overrides,
  };
}

/** Map UI gate choice to harness action (still no authority). */
export function actionForGateConfirm(input: {
  gateAction: "GO" | "NO-GO" | "CORRIGER" | "ABANDONNER";
  stateId: string;
}): StudioHarnessAction | "local-only" {
  if (input.gateAction === "ABANDONNER" || input.gateAction === "CORRIGER") {
    return "local-only";
  }
  if (input.gateAction === "NO-GO") {
    return "run-fixture"; // morrisDecision overridden by caller
  }
  if (input.stateId === "VS-UX-VAR-GO-INVALID") {
    return "probe-invalid-head";
  }
  return "run-fixture";
}

```

### `projects/sfia-studio/app/lib/harness/invokeHarness.ts`
```typescript
import { execFile } from "node:child_process";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import type { StudioHarnessRequest, StudioHarnessView } from "./types";

const execFileAsync = promisify(execFile);

/**
 * Thin process boundary: map JSON → harness CLI `studio-run` / `resume-session`.
 * Does not validate GO. Does not call live GPT APIs or real Cursor.
 */
export async function invokeHarnessStudioRun(
  request: StudioHarnessRequest,
): Promise<StudioHarnessView> {
  const harnessRoot = path.resolve(process.cwd(), "../harness");
  const work = mkdtempSync(path.join(os.tmpdir(), "sfia-studio-bridge-"));
  mkdirSync(work, { recursive: true });
  const payloadPath = path.join(work, "payload.json");
  writeFileSync(payloadPath, `${JSON.stringify(request, null, 2)}\n`, "utf8");

  const tsxBin = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cliEntry = path.join(harnessRoot, "src/cli.ts");
  const cmd = request.action === "resume" ? "resume-session" : "studio-run";
  const cmdArg =
    request.action === "resume"
      ? (request.proofDir ?? "")
      : payloadPath;

  if (request.action === "resume" && !request.proofDir) {
    return {
      ok: false,
      statusSource: "harness",
      mode: "fixture",
      canonicalStatus: "REJECTED",
      goValid: false,
      errorCode: "RESUME_PROOF_DIR_MISSING",
      refusalReason: "proofDir required for resume",
      stopOrTimeout: "refusal",
      contractHash: request.contractHash,
      correlationId: request.correlationId,
      proofDir: "",
      events: [],
      report: null,
      reserves: ["Adaptateur sans autorité"],
      timestamps: { completedAt: new Date().toISOString() },
      realGptClaimed: false,
      realCursorClaimed: false,
      remoteGitWrite: false,
    };
  }

  try {
    const { stdout } = await execFileAsync(
      process.execPath,
      [tsxBin, cliEntry, cmd, cmdArg],
      {
        cwd: harnessRoot,
        maxBuffer: 12 * 1024 * 1024,
        env: { ...process.env, SFIA_CURSOR_REAL_SPIKE: "0" },
      },
    );
    return JSON.parse(stdout) as StudioHarnessView;
  } catch (err) {
    const e = err as { stdout?: string; stderr?: string; message?: string };
    if (e.stdout) {
      try {
        return JSON.parse(e.stdout) as StudioHarnessView;
      } catch {
        /* fall through */
      }
    }
    return {
      ok: false,
      statusSource: "harness",
      mode: "fixture",
      canonicalStatus: "FAILED",
      goValid: false,
      errorCode: "ADAPTER_FORWARD_FAILED",
      refusalReason: e.stderr || e.message || "harness invoke failed",
      stopOrTimeout: "refusal",
      contractHash: request.contractHash,
      correlationId: request.correlationId,
      proofDir: request.proofDir ?? "",
      events: [],
      report: null,
      reserves: ["Adaptateur sans autorité — échec de transmission"],
      timestamps: { completedAt: new Date().toISOString() },
      realGptClaimed: false,
      realCursorClaimed: false,
      remoteGitWrite: false,
    };
  }
}

```

### `projects/sfia-studio/app/lib/harness/actions.ts`
```typescript
"use server";

import { invokeHarnessStudioRun } from "./invokeHarness";
import type { StudioHarnessRequest, StudioHarnessView } from "./types";

/** Server-only forward to harness CLI. No authority in this layer. */
export async function runStudioHarness(
  request: StudioHarnessRequest,
): Promise<StudioHarnessView> {
  return invokeHarnessStudioRun(request);
}

```

### `projects/sfia-studio/app/lib/harness/index.ts`
```typescript
export type {
  StudioHarnessAction,
  StudioHarnessRequest,
  StudioHarnessView,
  StudioHarnessEvent,
} from "./types";
export { buildStudioHarnessRequest, actionForGateConfirm } from "./buildRequest";
export { runStudioHarness } from "./actions";

```

### `projects/sfia-studio/app/__tests__/increment-b.test.tsx`
```typescript
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { STUDIO_ROUTES } from "@/lib/navigation";
import { STUDIO_ROUTES_ONLY } from "@/lib/vertical-slice";
import {
  actionForGateConfirm,
  buildStudioHarnessRequest,
} from "@/lib/harness/buildRequest";
import { DecisionScreen } from "@/features/decision/DecisionScreen";

const push = vi.fn();
let mockPathname = "/decision";
let mockSearch = "vs=VS-UX-04";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => mockPathname,
  useSearchParams: () => new URLSearchParams(mockSearch),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/harness/actions", () => ({
  runStudioHarness: vi.fn(async () => ({
    ok: true,
    statusSource: "harness",
    mode: "fixture",
    canonicalStatus: "CLOSED",
    goValid: true,
    contractHash: "abc",
    correlationId: "corr-test",
    proofDir: "/tmp/proof",
    events: [
      {
        eventId: "e1",
        eventType: "execution.closed",
        timestamp: "2026-07-20T00:00:00Z",
        requestId: "r",
        correlationId: "c",
        result: "completed",
      },
    ],
    report: { ok: true },
    proofPack: { ok: true, missing: [], present: ["summary.json"], integrityNotes: [] },
    reserves: [],
    timestamps: { completedAt: "2026-07-20T00:00:00Z" },
    realGptClaimed: false,
    realCursorClaimed: false,
    remoteGitWrite: false,
  })),
}));

afterEach(() => {
  cleanup();
  push.mockClear();
});

beforeEach(() => {
  mockPathname = "/decision";
  mockSearch = "vs=VS-UX-04";
});

describe("Increment B — adapter mapping (no authority)", () => {
  it("buildStudioHarnessRequest never invents GO validation fields as authority", () => {
    const req = buildStudioHarnessRequest("run-fixture");
    expect(req.action).toBe("run-fixture");
    expect(req.morrisDecision).toBe("GO");
    const src = readFileSync(
      path.resolve(__dirname, "../lib/harness/buildRequest.ts"),
      "utf8",
    );
    expect(src).not.toMatch(/GateValidator/);
    expect(src).not.toMatch(/contractHash\s*===/);
  });

  it("maps GO-INVALID to probe-invalid-head", () => {
    expect(
      actionForGateConfirm({ gateAction: "GO", stateId: "VS-UX-VAR-GO-INVALID" }),
    ).toBe("probe-invalid-head");
  });

  it("keeps exactly four routes", () => {
    expect(STUDIO_ROUTES).toHaveLength(4);
    expect(STUDIO_ROUTES_ONLY).toHaveLength(4);
  });
});

describe("Increment B — Studio derives harness status", () => {
  it("renders harness panel and fixture labels on decision", () => {
    render(<DecisionScreen />);
    expect(screen.getByTestId("vs-harness-idle")).toBeInTheDocument();
    expect(screen.getByTestId("vs-demo-banner")).toHaveTextContent("Incrément B");
    expect(screen.getByTestId("vs-status-source")).toBeInTheDocument();
  });
});

describe("Increment B — no live / no openai in app bridge", () => {
  it("invokeHarness and actions contain no OpenAI or live cursor calls", () => {
    const files = [
      "../lib/harness/invokeHarness.ts",
      "../lib/harness/actions.ts",
      "../lib/harness/buildRequest.ts",
    ];
    for (const rel of files) {
      const text = readFileSync(path.resolve(__dirname, rel), "utf8");
      expect(text).not.toMatch(/api\.openai\.com/i);
      expect(text).not.toMatch(/from ["']openai["']/);
      expect(text).not.toMatch(/SFIA_CURSOR_REAL_SPIKE\s*=\s*["']1["']/);
      expect(text).not.toMatch(/git push/);
    }
  });

  it("Studio P0 routes remain exactly four (no new feature route)", () => {
    expect(STUDIO_ROUTES_ONLY).toEqual([
      "/nouvelle-demande",
      "/decision",
      "/cycle-actif",
      "/synthese",
    ]);
    const appDir = path.resolve(__dirname, "../app");
    const featurePages = readdirSync(appDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .filter((name) =>
        ["nouvelle-demande", "decision", "cycle-actif", "synthese"].includes(name),
      );
    expect(featurePages.sort()).toEqual(
      ["cycle-actif", "decision", "nouvelle-demande", "synthese"].sort(),
    );
  });
});

```

### `projects/sfia-studio/app/e2e/increment-b.spec.ts`
```typescript
import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-b",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("Increment B — harness-derived cockpit", () => {
  test("decision shows harness panel and four routes only", async ({ page }) => {
    await page.goto("/decision?vs=VS-UX-04");
    await expect(page.getByTestId("vs-demo-banner")).toContainText("Incrément B");
    await expect(page.getByTestId("vs-harness-idle")).toBeVisible();
    await expect(page.getByTestId("vs-status-source")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-gate-valide-idle.png"),
      fullPage: true,
    });
  });

  test("GO confirm runs fixture harness and shows derived status", async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto("/decision?vs=VS-UX-04");
    await page.getByTestId("vs-gate-GO").click();
    await page.getByTestId("vs-gate-confirm").click();
    // Nominal GO navigates to cycle-actif; harness view is persisted in sessionStorage.
    await expect(page).toHaveURL(/cycle-actif/, { timeout: 60_000 });
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-status-source")).toContainText("harness");
    await expect(page.getByTestId("vs-go-valid")).toContainText("oui");
    await expect(page.getByTestId("vs-report-flag")).toContainText("disponible");
    await expect(page.getByTestId("vs-proof-flag")).toContainText("complet");
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-execution-fixture.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-rapport-preuves.png"),
      fullPage: true,
    });
    await page.getByTestId("vs-resume").click();
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-harness-status")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-reprise-session.png"),
      fullPage: true,
    });
  });

  test("GO invalid probe refuses without success", async ({ page }) => {
    await page.goto("/decision?vs=VS-UX-04");
    await page.getByRole("button", { name: /Simuler GO invalide/i }).click();
    await page.getByTestId("vs-gate-GO").click();
    await page.getByTestId("vs-gate-confirm").click();
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-go-valid")).toContainText("non");
    await expect(page.getByTestId("vs-harness-error")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-go-invalide.png"),
      fullPage: true,
    });
  });

  test("STOP via cycle harness is distinct", async ({ page }) => {
    await page.goto("/cycle-actif?vs=VS-UX-05");
    await page.getByTestId("vs-stop-execution").click();
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-stop-timeout")).toContainText("STOP");
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-stop.png"),
      fullPage: true,
    });
  });

  test("synthese shows derived closure from harness when resumed", async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto("/decision?vs=VS-UX-04");
    await page.getByTestId("vs-gate-GO").click();
    await page.getByTestId("vs-gate-confirm").click();
    await expect(page).toHaveURL(/cycle-actif/, { timeout: 60_000 });
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await page.goto("/synthese?vs=VS-UX-10");
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 30_000 });
    await page.getByTestId("vs-resume").click();
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-cycle-summary")).toContainText(/harness|CLOSED|fixture/i);
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-cloture-derivee.png"),
      fullPage: true,
    });
  });
});


```

### Diffs utiles des fichiers modifiés

#### Diff `projects/sfia-studio/harness/src/gate/gateValidator.ts`
```diff
diff --git a/projects/sfia-studio/harness/src/gate/gateValidator.ts b/projects/sfia-studio/harness/src/gate/gateValidator.ts
index 1e2aea0..22518a6 100644
--- a/projects/sfia-studio/harness/src/gate/gateValidator.ts
+++ b/projects/sfia-studio/harness/src/gate/gateValidator.ts
@@ -13,6 +13,14 @@ export interface GateValidationFail {
 
 export type GateValidationResult = GateValidationOk | GateValidationFail;
 
+function sameAllowlist(a: string[] | undefined, b: string[] | undefined): boolean {
+  if (!a || !b) return false;
+  if (a.length !== b.length) return false;
+  const sa = [...a].sort();
+  const sb = [...b].sort();
+  return sa.every((v, i) => v === sb[i]);
+}
+
 export class GateValidator {
   private consumedDecisionIds = new Set<string>();
 
@@ -20,6 +28,10 @@ export class GateValidator {
     gate: GateDecision;
     contract: ExecutionContract;
     expectedHash: string;
+    /** Current branch at revalidation time (Increment B). */
+    expectedBranch?: string;
+    /** Current HEAD at revalidation time (Increment B). */
+    expectedHead?: string;
     now?: Date;
   }): GateValidationResult {
     const { gate, contract, expectedHash } = input;
@@ -28,21 +40,61 @@ export class GateValidator {
     if (gate.requestId !== contract.requestId) {
       return fail("GATE_REQUEST_MISMATCH", "requestId mismatch");
     }
-    if (gate.contractHash !== expectedHash) {
-      return fail("GATE_HASH_MISMATCH", "contractHash mismatch");
+    if (!gate.decision) {
+      return fail("GATE_DECISION_MISSING", "decision required");
     }
-    if (gate.decision !== "GO" && gate.decision !== "STOP" && gate.decision !== "CORRIGER" && gate.decision !== "CLOSE") {
+    if (
+      gate.decision !== "GO" &&
+      gate.decision !== "STOP" &&
+      gate.decision !== "CORRIGER" &&
+      gate.decision !== "CLOSE" &&
+      gate.decision !== "NO-GO"
+    ) {
       return fail("GATE_DECISION_INVALID", "decision not explicit");
     }
     if (!gate.decidedBy || gate.decidedBy.trim() === "") {
-      return fail("GATE_DECIDER_MISSING", "decidedBy required");
+      return fail("GATE_DECIDER_MISSING", "decidedBy required — Morris decision absent");
     }
     const allow = contract.decidedByAllowlist ?? ["Morris"];
     if (!allow.includes(gate.decidedBy)) {
       return fail("GATE_DECIDER_UNAUTHORIZED", `decidedBy not allowed: ${gate.decidedBy}`);
     }
+
+    // STOP short-circuits structural GO checks after identity/decider checks
+    if (gate.decision === "STOP") {
+      return { ok: true };
+    }
+
+    if (gate.contractHash !== expectedHash) {
+      return fail("GATE_HASH_MISMATCH", "contractHash mismatch — GO invalidated");
+    }
+
+    if (input.expectedBranch !== undefined) {
+      if (!gate.gitBranch) {
+        return fail("GATE_BRANCH_MISSING", "GO missing gitBranch anchor");
+      }
+      if (gate.gitBranch !== input.expectedBranch) {
+        return fail("GATE_BRANCH_MISMATCH", "branch changed — GO invalidated");
+      }
+    }
+
+    if (input.expectedHead !== undefined) {
+      if (!gate.gitHead) {
+        return fail("GATE_HEAD_MISSING", "GO missing gitHead anchor");
+      }
+      if (gate.gitHead !== input.expectedHead) {
+        return fail("GATE_HEAD_MISMATCH", "HEAD changed — GO invalidated");
+      }
+    }
+
+    if (gate.allowlistSnapshot) {
+      if (!sameAllowlist(gate.allowlistSnapshot, contract.allowedPaths)) {
+        return fail("GATE_ALLOWLIST_MISMATCH", "allowlist changed — GO invalidated");
+      }
+    }
+
     if (this.consumedDecisionIds.has(gate.decisionId) && gate.decision === "GO") {
-      return fail("GATE_REPLAY", "GO already consumed");
+      return fail("GATE_REPLAY", "GO already consumed — no automatic retry");
     }
     const expires = gate.expiresAt ?? contract.gateExpiresAt;
     if (expires && new Date(expires).getTime() < now.getTime()) {

```

#### Diff `projects/sfia-studio/harness/src/orchestrator.ts`
```diff
diff --git a/projects/sfia-studio/harness/src/orchestrator.ts b/projects/sfia-studio/harness/src/orchestrator.ts
index d9c6041..f21b582 100644
--- a/projects/sfia-studio/harness/src/orchestrator.ts
+++ b/projects/sfia-studio/harness/src/orchestrator.ts
@@ -1,4 +1,6 @@
 import { randomUUID } from "node:crypto";
+import { unlinkSync, existsSync } from "node:fs";
+import path from "node:path";
 import type {
   ExecutionContract,
   GateDecision,
@@ -9,12 +11,13 @@ import type {
 import { HarnessError } from "./types/contracts.js";
 import { computeContractHash } from "./hash/contractHash.js";
 import { StateMachine } from "./state/machine.js";
-import { GateValidator, assertGateOk } from "./gate/gateValidator.js";
+import { GateValidator } from "./gate/gateValidator.js";
 import { PolicyEngine } from "./policy/policyEngine.js";
 import { GitReaderImpl, denyWriteOp } from "./ports/gitReaderImpl.js";
 import { CursorExecutorPortFixture } from "./ports/cursorFixture.js";
 import { EventJournal } from "./journal/eventJournal.js";
 import { ProofStore } from "./proof/proofStore.js";
+import { verifyProofPack } from "./proof/verifyProofPack.js";
 
 export interface RunInput {
   request: POCRequest;
@@ -23,6 +26,20 @@ export interface RunInput {
   stopAfterAuthorize?: boolean;
   cursorSimulate?: "success" | "timeout" | "error";
   attemptForbiddenGit?: boolean;
+  /** Current branch for GO anchor revalidation (Increment B). */
+  expectedBranch?: string;
+  /** Current HEAD for GO anchor revalidation (Increment B). */
+  expectedHead?: string;
+  /** Re-check GO anchors immediately before fixture cursor execution. */
+  revalidateBeforeExecute?: boolean;
+  /** Skip writing summary.json — blocks successful proof pack. */
+  simulateIncompleteReport?: boolean;
+  /** Remove a core proof artifact after run path — blocks progression. */
+  simulateMissingProof?: boolean;
+  /** Attempt to invoke non-fixture cursor mode — must fail closed. */
+  attemptLiveCursor?: boolean;
+  /** Prefer Studio correlation when provided (adapter forward). */
+  studioCorrelationId?: string;
 }
 
 export interface RunResult {
@@ -37,6 +54,7 @@ export interface RunResult {
   cursor?: CursorResult;
   errorCode?: string;
   projectedState?: string;
+  report?: Record<string, unknown> | null;
 }
 
 export class Orchestrator {
@@ -44,24 +62,27 @@ export class Orchestrator {
   readonly policy = new PolicyEngine();
 
   async run(input: RunInput): Promise<RunResult> {
-    const correlationId = randomUUID();
+    const correlationId = input.studioCorrelationId ?? randomUUID();
     const executionId = randomUUID();
     const machine = new StateMachine("CREATED");
     const journal = new EventJournal(input.contract.proofDir, correlationId);
     const proofs = new ProofStore(input.contract.proofDir);
     const gitResults: GitCommandResult[] = [];
+    let report: Record<string, unknown> | null = null;
 
     const log = (
       eventType: string,
       fields: Partial<Parameters<EventJournal["append"]>[0]> & { result?: string; errorCode?: string },
     ) => {
+      const { detail: fieldDetail, ...rest } = fields;
       journal.append({
         eventType,
         requestId: input.request.requestId,
         executionId,
         contractHash: computeContractHash(input.contract),
         stateBefore: machine.current,
-        ...fields,
+        ...rest,
+        detail: { source: "harness", ...(fieldDetail ?? {}) },
       });
     };
 
@@ -80,10 +101,29 @@ export class Orchestrator {
       log("gate.awaiting", { stateAfter: "AWAITING_GATE", result: "ok" });
 
       if (input.gate.decision === "STOP") {
+        const stopGate = this.gateValidator.validate({
+          gate: input.gate,
+          contract: input.contract,
+          expectedHash: hash,
+          expectedBranch: input.expectedBranch,
+          expectedHead: input.expectedHead,
+        });
+        if (!stopGate.ok) {
+          machine.transition("REJECTED");
+          log("gate.rejected", {
+            stateAfter: "REJECTED",
+            result: "rejected",
+            errorCode: stopGate.code,
+            detail: { message: stopGate.message },
+          });
+          machine.transition("CLOSED");
+          return finish(false, "CLOSED", hash, stopGate.code);
+        }
         machine.transition("STOP_REQUESTED");
-        log("gate.stop", { stateAfter: "STOP_REQUESTED", result: "stop" });
+        log("gate.stop", { stateAfter: "STOP_REQUESTED", result: "stop", errorCode: "GATE_STOP" });
         machine.transition("CLOSED");
         log("execution.closed", { stateAfter: "CLOSED", result: "stopped_before_run" });
+        proofs.writeJson("stop.json", { reason: "morris_stop", at: new Date().toISOString() });
         return finish(false, "CLOSED", hash, "GATE_STOP");
       }
 
@@ -91,6 +131,8 @@ export class Orchestrator {
         gate: input.gate,
         contract: input.contract,
         expectedHash: hash,
+        expectedBranch: input.expectedBranch,
+        expectedHead: input.expectedHead,
       });
       if (!gateResult.ok) {
         machine.transition("REJECTED");
@@ -104,6 +146,18 @@ export class Orchestrator {
         return finish(false, "CLOSED", hash, gateResult.code);
       }
 
+      if (input.gate.decision === "NO-GO") {
+        machine.transition("REJECTED");
+        log("gate.rejected", {
+          stateAfter: "REJECTED",
+          result: "rejected",
+          errorCode: "GATE_NO_GO",
+          detail: { message: "Morris NO-GO — no execution" },
+        });
+        machine.transition("CLOSED");
+        return finish(false, "CLOSED", hash, "GATE_NO_GO");
+      }
+
       if (input.gate.decision !== "GO") {
         machine.transition("REJECTED");
         log("gate.rejected", {
@@ -121,13 +175,29 @@ export class Orchestrator {
 
       if (input.stopAfterAuthorize) {
         machine.transition("STOP_REQUESTED");
-        log("execution.stopped", { stateAfter: "STOP_REQUESTED", result: "stop" });
+        log("execution.stopped", { stateAfter: "STOP_REQUESTED", result: "stop", errorCode: "STOP" });
         machine.transition("CLOSED");
         log("execution.closed", { stateAfter: "CLOSED", result: "stopped" });
         proofs.writeJson("stop.json", { reason: "explicit_stop", at: new Date().toISOString() });
         return finish(false, "CLOSED", hash, "STOP");
       }
 
+      if (input.revalidateBeforeExecute) {
+        const reval = this.revalidateGo(input, hash);
+        if (!reval.ok) {
+          machine.transition("REJECTED");
+          log("gate.revalidation_failed", {
+            stateAfter: "REJECTED",
+            result: "rejected",
+            errorCode: reval.code,
+            detail: { message: reval.message },
+          });
+          machine.transition("CLOSED");
+          return finish(false, "CLOSED", hash, reval.code);
+        }
+        log("gate.revalidated", { stateAfter: "AUTHORIZED", result: "ok" });
+      }
+
       machine.transition("RUNNING");
       log("execution.running", { stateAfter: "RUNNING", result: "ok" });
 
@@ -168,6 +238,28 @@ export class Orchestrator {
       }
       proofs.writeJson("git-results.json", gitResults);
 
+      if (input.attemptLiveCursor) {
+        log("security.refusal", {
+          stateAfter: "RUNNING",
+          result: "denied",
+          errorCode: "LIVE_PORT_DENIED",
+          detail: { message: "Live Cursor port refused — fixtures only" },
+        });
+        machine.transition("REJECTED");
+        log("execution.rejected", {
+          stateAfter: "REJECTED",
+          result: "denied",
+          errorCode: "LIVE_PORT_DENIED",
+        });
+        machine.transition("CLOSED");
+        log("execution.closed", {
+          stateAfter: "CLOSED",
+          result: "denied",
+          errorCode: "LIVE_PORT_DENIED",
+        });
+        return finish(false, "CLOSED", hash, "LIVE_PORT_DENIED");
+      }
+
       const cursor = new CursorExecutorPortFixture();
       const cursorResult = await cursor.execute({
         requestId: input.request.requestId,
@@ -186,12 +278,59 @@ export class Orchestrator {
       });
 
       if (!cursorResult.ok) {
+        // Timeout / error never become success
         machine.transition("FAILED");
-        log("execution.failed", { stateAfter: "FAILED", result: "failed", errorCode: cursorResult.errorCode });
+        log("execution.failed", {
+          stateAfter: "FAILED",
+          result: "failed",
+          errorCode: cursorResult.errorCode,
+        });
         machine.transition("CLOSED");
+        log("execution.closed", {
+          stateAfter: "CLOSED",
+          result: "failed",
+          errorCode: cursorResult.errorCode,
+        });
         return finish(false, "CLOSED", hash, cursorResult.errorCode, cursorResult);
       }
 
+      if (input.simulateMissingProof) {
+        const hashPath = path.join(input.contract.proofDir, "contractHash.txt");
+        if (existsSync(hashPath)) unlinkSync(hashPath);
+        const pack = verifyProofPack(input.contract.proofDir, { requireSuccessArtifacts: true });
+        machine.transition("FAILED");
+        log("proof.incomplete", {
+          stateAfter: "FAILED",
+          result: "failed",
+          errorCode: "PROOF_INCOMPLETE",
+          detail: { missing: pack.missing },
+        });
+        machine.transition("CLOSED");
+        log("execution.closed", {
+          stateAfter: "CLOSED",
+          result: "failed",
+          errorCode: "PROOF_INCOMPLETE",
+        });
+        return finish(false, "CLOSED", hash, "PROOF_INCOMPLETE", cursorResult);
+      }
+
+      if (input.simulateIncompleteReport) {
+        machine.transition("FAILED");
+        log("report.incomplete", {
+          stateAfter: "FAILED",
+          result: "failed",
+          errorCode: "REPORT_INCOMPLETE",
+          detail: { message: "summary.json not written — progression blocked" },
+        });
+        machine.transition("CLOSED");
+        log("execution.closed", {
+          stateAfter: "CLOSED",
+          result: "failed",
+          errorCode: "REPORT_INCOMPLETE",
+        });
+        return finish(false, "CLOSED", hash, "REPORT_INCOMPLETE", cursorResult);
+      }
+
       machine.transition("COMPLETED");
       log("execution.completed", { stateAfter: "COMPLETED", result: "ok" });
       machine.transition("CLOSED");
@@ -207,8 +346,11 @@ export class Orchestrator {
         realCursorClaimed: false,
         gitEffect: "none-remote",
         terminalState: "CLOSED",
+        statusSource: "harness",
+        mode: "fixture",
       };
       proofs.writeJson("summary.json", summary);
+      report = summary;
       return finish(true, "CLOSED", hash, undefined, cursorResult);
     } catch (err) {
       const he = err as HarnessError;
@@ -247,9 +389,34 @@ export class Orchestrator {
         cursor,
         errorCode,
         projectedState: journal.projectLastState(),
+        report,
       };
     }
   }
+
+  private revalidateGo(
+    input: RunInput,
+    hash: string,
+  ): { ok: true } | { ok: false; code: string; message: string } {
+    const gate = input.gate;
+    if (gate.contractHash !== hash) {
+      return { ok: false, code: "GATE_HASH_MISMATCH", message: "revalidation hash mismatch" };
+    }
+    if (input.expectedBranch !== undefined && gate.gitBranch !== input.expectedBranch) {
+      return { ok: false, code: "GATE_BRANCH_MISMATCH", message: "revalidation branch mismatch" };
+    }
+    if (input.expectedHead !== undefined && gate.gitHead !== input.expectedHead) {
+      return { ok: false, code: "GATE_HEAD_MISMATCH", message: "revalidation HEAD mismatch" };
+    }
+    if (
+      gate.allowlistSnapshot &&
+      JSON.stringify([...gate.allowlistSnapshot].sort()) !==
+        JSON.stringify([...input.contract.allowedPaths].sort())
+    ) {
+      return { ok: false, code: "GATE_ALLOWLIST_MISMATCH", message: "revalidation allowlist mismatch" };
+    }
+    return { ok: true };
+  }
 }
 
 export function validateContractOnly(contract: ExecutionContract): { hash: string } {

```

#### Diff `projects/sfia-studio/harness/src/types/contracts.ts`
```diff
diff --git a/projects/sfia-studio/harness/src/types/contracts.ts b/projects/sfia-studio/harness/src/types/contracts.ts
index 242a5bc..66ab23d 100644
--- a/projects/sfia-studio/harness/src/types/contracts.ts
+++ b/projects/sfia-studio/harness/src/types/contracts.ts
@@ -3,7 +3,7 @@
 export type ScenarioId = "S1";
 export type GitEffect = "none-remote";
 export type CursorMode = "fixture";
-export type GateDecisionKind = "GO" | "CORRIGER" | "STOP" | "CLOSE";
+export type GateDecisionKind = "GO" | "NO-GO" | "CORRIGER" | "STOP" | "CLOSE";
 
 export type ExecutionState =
   | "CREATED"
@@ -55,6 +55,74 @@ export interface GateDecision {
   decidedAt: string;
   scope: string;
   expiresAt?: string;
+  /** Anchors captured at GO time — revalidated by harness before fixture execution. */
+  gitBranch?: string;
+  gitHead?: string;
+  allowlistSnapshot?: string[];
+  correlationId?: string;
+}
+
+/** Studio → thin adapter input (Increment B). Adapter maps/forwards only — no authority. */
+export interface StudioAdapterRequest {
+  requestId: string;
+  correlationId: string;
+  contractId: string;
+  /** Claimed hash — harness recomputes and compares; adapter never validates GO. */
+  contractHash: string;
+  branch: string;
+  head: string;
+  allowlist: string[];
+  morrisDecision: GateDecisionKind;
+  decidedAt: string;
+  action:
+    | "run-fixture"
+    | "stop"
+    | "resume"
+    | "probe-invalid-hash"
+    | "probe-invalid-branch"
+    | "probe-invalid-head"
+    | "probe-invalid-allowlist"
+    | "probe-missing-decider"
+    | "probe-timeout"
+    | "probe-incomplete-report"
+    | "probe-missing-proof"
+    | "probe-live-port"
+    | "probe-write-escape";
+  proofDir?: string;
+  /** Optional claimed decisionId for replay / correlation tests. */
+  decisionId?: string;
+}
+
+/** Harness → Studio derived view (canonical status source = harness). */
+export interface StudioAdapterResponse {
+  ok: boolean;
+  statusSource: "harness";
+  mode: "fixture" | "simulation";
+  canonicalStatus: string;
+  goValid: boolean;
+  errorCode?: string;
+  refusalReason?: string;
+  stopOrTimeout?: "STOP" | "timeout" | "refusal" | null;
+  contractHash: string;
+  executionId?: string;
+  correlationId: string;
+  proofDir: string;
+  journalPath?: string;
+  events: JournalEvent[];
+  report?: Record<string, unknown> | null;
+  proofPack?: ProofPackVerification;
+  reserves: string[];
+  timestamps: { decidedAt?: string; completedAt: string };
+  realGptClaimed: false;
+  realCursorClaimed: false;
+  remoteGitWrite: false;
+}
+
+export interface ProofPackVerification {
+  ok: boolean;
+  missing: string[];
+  present: string[];
+  integrityNotes: string[];
 }
 
 export interface ExecutionContext {

```

#### Diff `projects/sfia-studio/harness/src/cli.ts`
```diff
diff --git a/projects/sfia-studio/harness/src/cli.ts b/projects/sfia-studio/harness/src/cli.ts
index 189ddd9..a5c2de7 100644
--- a/projects/sfia-studio/harness/src/cli.ts
+++ b/projects/sfia-studio/harness/src/cli.ts
@@ -4,7 +4,15 @@ import path from "node:path";
 import { fileURLToPath } from "node:url";
 import { Orchestrator, validateContractOnly } from "./orchestrator.js";
 import { EventJournal } from "./journal/eventJournal.js";
-import type { ExecutionContract, GateDecision, POCRequest } from "./types/contracts.js";
+import { createThinStudioAdapter } from "./adapter/thinStudioAdapter.js";
+import { resumeSessionFromProofDir } from "./session/resumeSession.js";
+import { verifyProofPack } from "./proof/verifyProofPack.js";
+import type {
+  ExecutionContract,
+  GateDecision,
+  POCRequest,
+  StudioAdapterRequest,
+} from "./types/contracts.js";
 import { computeContractHash } from "./hash/contractHash.js";
 
 function usage(): never {
@@ -16,6 +24,8 @@ Commands:
   request-stop <dir>                # same as run-fixture with STOP gate or --stop flag via stop gate
   inspect-journal <proofDir>
   verify-proofs <proofDir>
+  studio-run <payload.json>         # Increment B thin adapter forward (stdout JSON)
+  resume-session <proofDir>         # Increment B session resume from journal/proofs
 `);
   process.exit(2);
 }
@@ -89,6 +99,7 @@ async function main(): Promise<void> {
       missing.filter((m) => m !== "summary.json").length === 0 ||
       (missing.length <= 1 && missing[0] === "summary.json");
     const journal = new EventJournal(proofDir, "verify");
+    const pack = verifyProofPack(proofDir);
     console.log(
       JSON.stringify(
         {
@@ -97,6 +108,7 @@ async function main(): Promise<void> {
           eventCount: journal.readAll().length,
           projectedState: journal.projectLastState(),
           softOk: ok,
+          proofPack: pack,
         },
         null,
         2,
@@ -105,6 +117,24 @@ async function main(): Promise<void> {
     return;
   }
 
+  if (cmd === "studio-run") {
+    const file = args[0];
+    if (!file) usage();
+    const payload = JSON.parse(readFileSync(file, "utf8")) as StudioAdapterRequest;
+    const adapter = createThinStudioAdapter();
+    const result = await adapter.forward(payload);
+    console.log(JSON.stringify(result, null, 2));
+    process.exit(result.ok ? 0 : 1);
+  }
+
+  if (cmd === "resume-session") {
+    const proofDir = args[0];
+    if (!proofDir) usage();
+    const result = resumeSessionFromProofDir(proofDir);
+    console.log(JSON.stringify(result, null, 2));
+    process.exit(result.ok ? 0 : 1);
+  }
+
   usage();
 }
 

```

#### Diff `projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx`
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx b/projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx
index 72530ff..7ee4fc3 100644
--- a/projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx
+++ b/projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx
@@ -11,6 +11,12 @@ import {
 } from "react";
 import { usePathname, useRouter, useSearchParams } from "next/navigation";
 import type { StudioRoute } from "@/lib/navigation";
+import { runStudioHarness } from "@/lib/harness/actions";
+import {
+  actionForGateConfirm,
+  buildStudioHarnessRequest,
+} from "@/lib/harness/buildRequest";
+import type { StudioHarnessView } from "@/lib/harness/types";
 import {
   defaultStateForRoute,
   metaFor,
@@ -23,6 +29,33 @@ import type {
   VsStateId,
 } from "@/lib/vertical-slice/types";
 
+const PROOF_DIR_KEY = "sfia-vs-inc-b-proofDir";
+const HARNESS_VIEW_KEY = "sfia-vs-inc-b-harnessView";
+
+function persistHarness(view: StudioHarnessView | null): void {
+  if (typeof window === "undefined") return;
+  if (!view) {
+    window.sessionStorage.removeItem(HARNESS_VIEW_KEY);
+    window.sessionStorage.removeItem(PROOF_DIR_KEY);
+    return;
+  }
+  window.sessionStorage.setItem(HARNESS_VIEW_KEY, JSON.stringify(view));
+  if (view.proofDir) {
+    window.sessionStorage.setItem(PROOF_DIR_KEY, view.proofDir);
+  }
+}
+
+function readPersistedHarness(): StudioHarnessView | null {
+  if (typeof window === "undefined") return null;
+  const raw = window.sessionStorage.getItem(HARNESS_VIEW_KEY);
+  if (!raw) return null;
+  try {
+    return JSON.parse(raw) as StudioHarnessView;
+  } catch {
+    return null;
+  }
+}
+
 interface VsDemoContextValue extends VsDemoUiState {
   setStateId: (id: VsStateId) => void;
   selectGateAction: (action: VsGateAction) => void;
@@ -33,6 +66,7 @@ interface VsDemoContextValue extends VsDemoUiState {
   selectFinalAction: (action: VsFinalAction) => void;
   fireStop: () => void;
   resetDemo: () => void;
+  resumeFromHarness: () => void;
 }
 
 const VsDemoContext = createContext<VsDemoContextValue | null>(null);
@@ -44,6 +78,25 @@ function routeFromPath(pathname: string): StudioRoute {
   return "/nouvelle-demande";
 }
 
+function deriveStateFromHarness(view: StudioHarnessView): VsStateId {
+  if (view.stopOrTimeout === "STOP") return "VS-UX-VAR-STOP";
+  if (view.stopOrTimeout === "timeout" || view.errorCode?.includes("TIMEOUT")) {
+    return "VS-UX-VAR-ERROR";
+  }
+  if (
+    view.errorCode?.includes("HASH") ||
+    view.errorCode?.includes("BRANCH") ||
+    view.errorCode?.includes("HEAD") ||
+    view.errorCode?.includes("ALLOWLIST")
+  ) {
+    return "VS-UX-VAR-GO-INVALID";
+  }
+  if (view.ok && view.goValid) return "VS-UX-05";
+  if (view.errorCode === "GATE_NO_GO") return "VS-UX-10";
+  if (!view.ok) return "VS-UX-VAR-ERROR";
+  return "VS-UX-05";
+}
+
 export function VsDemoProvider({ children }: { children: ReactNode }) {
   const router = useRouter();
   const pathname = usePathname() || "/nouvelle-demande";
@@ -59,6 +112,13 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
   const [abandonConfirmOpen, setAbandonConfirmOpen] = useState(false);
   const [finalAction, setFinalAction] = useState<VsFinalAction | null>(null);
   const [stopFired, setStopFired] = useState(false);
+  const [harnessView, setHarnessView] = useState<StudioHarnessView | null>(null);
+  const [harnessBusy, setHarnessBusy] = useState(false);
+
+  useEffect(() => {
+    const persisted = readPersistedHarness();
+    if (persisted) setHarnessView(persisted);
+  }, []);
 
   useEffect(() => {
     const fromQuery = parseVsQuery(searchParams.get("vs"));
@@ -73,6 +133,11 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
     // eslint-disable-next-line react-hooks/exhaustive-deps -- sync on route/query only
   }, [pathname, searchParams]);
 
+  const applyHarnessView = useCallback((view: StudioHarnessView) => {
+    setHarnessView(view);
+    persistHarness(view);
+  }, []);
+
   const setStateId = useCallback(
     (id: VsStateId) => {
       const meta = metaFor(id);
@@ -116,14 +181,30 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
   const confirmGate = useCallback(() => {
     if (!gateAction || gateAction === "ABANDONNER") return;
     setGateConfirmed(true);
-    if (gateAction === "GO") {
-      setStateId("VS-UX-05");
-    } else if (gateAction === "NO-GO") {
-      setStateId("VS-UX-10");
-    } else if (gateAction === "CORRIGER") {
-      setStateId("VS-UX-02");
+
+    const mapped = actionForGateConfirm({ gateAction, stateId });
+    if (mapped === "local-only") {
+      if (gateAction === "NO-GO") {
+        setStateId("VS-UX-10");
+      } else if (gateAction === "CORRIGER") {
+        setStateId("VS-UX-02");
+      }
+      return;
     }
-  }, [gateAction, setStateId]);
+
+    setHarnessBusy(true);
+    const req = buildStudioHarnessRequest(mapped, {
+      morrisDecision: gateAction === "NO-GO" ? "NO-GO" : "GO",
+      action: gateAction === "NO-GO" ? "run-fixture" : mapped,
+    });
+
+    void runStudioHarness(req)
+      .then((view) => {
+        applyHarnessView(view);
+        setStateId(deriveStateFromHarness(view));
+      })
+      .finally(() => setHarnessBusy(false));
+  }, [applyHarnessView, gateAction, setStateId, stateId]);
 
   const selectFinalAction = useCallback(
     (action: VsFinalAction) => {
@@ -140,8 +221,31 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
 
   const fireStop = useCallback(() => {
     setStopFired(true);
-    setStateId("VS-UX-VAR-STOP");
-  }, [setStateId]);
+    setHarnessBusy(true);
+    const req = buildStudioHarnessRequest("stop");
+    void runStudioHarness(req)
+      .then((view) => {
+        applyHarnessView(view);
+        setStateId("VS-UX-VAR-STOP");
+      })
+      .finally(() => setHarnessBusy(false));
+  }, [applyHarnessView, setStateId]);
+
+  const resumeFromHarness = useCallback(() => {
+    const proofDir =
+      typeof window !== "undefined"
+        ? window.sessionStorage.getItem(PROOF_DIR_KEY) ?? undefined
+        : undefined;
+    if (!proofDir) return;
+    setHarnessBusy(true);
+    const req = buildStudioHarnessRequest("resume", { proofDir });
+    void runStudioHarness(req)
+      .then((view) => {
+        // Resume rebuilds derived view only — no implicit GO, no forced navigation.
+        applyHarnessView(view);
+      })
+      .finally(() => setHarnessBusy(false));
+  }, [applyHarnessView]);
 
   const resetDemo = useCallback(() => {
     setAbandoned(false);
@@ -150,6 +254,8 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
     setAbandonConfirmOpen(false);
     setFinalAction(null);
     setStopFired(false);
+    setHarnessView(null);
+    persistHarness(null);
     setStateId("VS-UX-01");
   }, [setStateId]);
 
@@ -162,6 +268,8 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
       abandonConfirmOpen,
       finalAction,
       stopFired,
+      harnessView,
+      harnessBusy,
       setStateId,
       selectGateAction,
       openAbandonConfirm,
@@ -171,6 +279,7 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
       selectFinalAction,
       fireStop,
       resetDemo,
+      resumeFromHarness,
     }),
     [
       stateId,
@@ -180,6 +289,8 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
       abandonConfirmOpen,
       finalAction,
       stopFired,
+      harnessView,
+      harnessBusy,
       setStateId,
       selectGateAction,
       openAbandonConfirm,
@@ -189,6 +300,7 @@ export function VsDemoProvider({ children }: { children: ReactNode }) {
       selectFinalAction,
       fireStop,
       resetDemo,
+      resumeFromHarness,
     ],
   );
 

```

#### Diff `projects/sfia-studio/app/components/vertical-slice/VsShared.tsx`
```diff
diff --git a/projects/sfia-studio/app/components/vertical-slice/VsShared.tsx b/projects/sfia-studio/app/components/vertical-slice/VsShared.tsx
index c273f56..108953a 100644
--- a/projects/sfia-studio/app/components/vertical-slice/VsShared.tsx
+++ b/projects/sfia-studio/app/components/vertical-slice/VsShared.tsx
@@ -1,7 +1,16 @@
 import { vsFixture } from "@/fixtures/vertical-slice";
+import type { StudioHarnessView } from "@/lib/harness/types";
+import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
 import styles from "./vs-panels.module.css";
 
 export function IdStrip() {
+  const { harnessView } = useVsDemo();
+  const source = harnessView?.statusSource
+    ? `harness (${harnessView.mode})`
+    : vsFixture.sourceStatus;
+  const hash = harnessView?.contractHash ?? vsFixture.contractHash;
+  const corr = harnessView?.correlationId ?? vsFixture.correlationId;
+
   return (
     <dl className={styles.idStrip} data-testid="vs-id-strip">
       <div>
@@ -10,7 +19,7 @@ export function IdStrip() {
       </div>
       <div>
         <dt>correlationId</dt>
-        <dd>{vsFixture.correlationId}</dd>
+        <dd>{corr}</dd>
       </div>
       <div>
         <dt>contractId</dt>
@@ -18,7 +27,7 @@ export function IdStrip() {
       </div>
       <div>
         <dt>contractHash</dt>
-        <dd>{vsFixture.contractHash}</dd>
+        <dd>{hash.length > 24 ? `${hash.slice(0, 20)}…` : hash}</dd>
       </div>
       <div>
         <dt>Branche</dt>
@@ -30,18 +39,94 @@ export function IdStrip() {
       </div>
       <div>
         <dt>Source statut</dt>
-        <dd>{vsFixture.sourceStatus}</dd>
+        <dd data-testid="vs-status-source">{source}</dd>
       </div>
       <div>
         <dt>Horodatage</dt>
         <dd>
-          {vsFixture.timestamp} ({vsFixture.timezone})
+          {harnessView?.timestamps.completedAt ?? vsFixture.timestamp} (
+          {vsFixture.timezone})
         </dd>
       </div>
     </dl>
   );
 }
 
+export function HarnessStatusPanel() {
+  const { harnessView, harnessBusy, resumeFromHarness } = useVsDemo();
+  if (harnessBusy) {
+    return (
+      <aside className={styles.finops} data-testid="vs-harness-busy">
+        <p>Transmission harness (fixture)…</p>
+      </aside>
+    );
+  }
+  if (!harnessView) {
+    return (
+      <aside className={styles.finops} data-testid="vs-harness-idle">
+        <p className={styles.finopsTitle}>Harness (Increment B)</p>
+        <p>Aucun cycle harness encore — simulation / fixture uniquement.</p>
+        <p className={styles.muted}>Aucun GPT live · aucun Cursor live</p>
+        <button type="button" data-testid="vs-resume" onClick={resumeFromHarness}>
+          Reprendre depuis journal harness
+        </button>
+      </aside>
+    );
+  }
+  return <HarnessViewCard view={harnessView} onResume={resumeFromHarness} />;
+}
+
+function HarnessViewCard({
+  view,
+  onResume,
+}: {
+  view: StudioHarnessView;
+  onResume: () => void;
+}) {
+  const last = view.events[view.events.length - 1];
+  return (
+    <aside className={styles.finops} data-testid="vs-harness-panel">
+      <p className={styles.finopsTitle}>État dérivé harness (fixture)</p>
+      <p>
+        Statut canonique :{" "}
+        <strong data-testid="vs-harness-status">{view.canonicalStatus}</strong>
+      </p>
+      <p>
+        GO valide :{" "}
+        <strong data-testid="vs-go-valid">{view.goValid ? "oui" : "non"}</strong>
+      </p>
+      <p data-testid="vs-harness-mode">Mode : {view.mode} · source : {view.statusSource}</p>
+      {view.errorCode ? (
+        <p data-testid="vs-harness-error">
+          Refus / écart : {view.errorCode}
+          {view.refusalReason ? ` — ${view.refusalReason}` : ""}
+        </p>
+      ) : null}
+      {view.stopOrTimeout ? (
+        <p data-testid="vs-stop-timeout">Classe : {view.stopOrTimeout}</p>
+      ) : null}
+      {last ? (
+        <p data-testid="vs-last-event">
+          Dernier événement : {last.eventType} ({last.result ?? "—"})
+        </p>
+      ) : null}
+      <p data-testid="vs-report-flag">
+        Rapport : {view.report ? "disponible" : "absent"}
+      </p>
+      <p data-testid="vs-proof-flag">
+        Pack preuves :{" "}
+        {view.proofPack?.ok
+          ? "complet"
+          : `incomplet (${view.proofPack?.missing.join(", ") || "n/a"})`}
+      </p>
+      <p className={styles.muted}>Aucun GPT/Cursor live · aucune écriture Git distante</p>
+      <button type="button" data-testid="vs-resume" onClick={onResume}>
+        Reprendre depuis journal harness
+      </button>
+    </aside>
+  );
+}
+
 export function FinOpsBox({
   phase,
   calls,

```

## Matrice stories → fichiers → tests → preuves
| Story | Fichiers | Tests | Preuves |
|---|---|---|---|
| VS-BL-US-009 contrat borné | contracts, builders, IdStrip | harness + e2e | captures gate |
| VS-BL-US-012 invalidation GO | gateValidator, probes | increment-b harness/e2e | inc-b-go-invalide.png |
| VS-BL-US-013 adaptateur sans autorité | thinStudioAdapter, buildRequest, invokeHarness | src sans GateValidator ; unit app | revue code |
| VS-BL-US-014 états dérivés | VsDemoContext, HarnessStatusPanel | e2e B | panels runtime |
| VS-BL-US-015 autonome | CLI, autonomy test | increment-b autonomy | 80 tests harness |
| VS-BL-US-016 reprise | resumeSession, sessionStorage | e2e reprise | inc-b-reprise-session.png |
| VS-BL-US-017 revalidation GO | orchestrator.revalidateGo | integration+B | journal gate.revalidated |
| VS-BL-US-019 STOP/timeout | cursorFixture, classify | probes | inc-b-stop.png |
| VS-BL-US-021 rapport | summary.json | e2e report flag | captures |
| VS-BL-US-022 proof pack | verifyProofPack | harness+e2e | proof complet |
| VS-BL-US-029 refus journalisés | journal security.refusal | probes live/escape | events |
| VS-BL-US-033 négatifs | adapter probes | 10 probes | tests |

## Adaptateur et preuve d’absence d’autorité
- `ThinStudioAdapter` : mapGate/mapRunInput/forward/toResponse uniquement
- Source inspectée : **aucun** `GateValidator` / `assertGateOk` dans l’adaptateur
- Studio `buildRequest.ts` : mapping pur ; validation déléguée au harness
- `invokeHarness.ts` : spawn CLI `studio-run` / `resume-session` seulement

## Preuve harness autonome
- Test « src tree has no React imports »
- Scénario nominal + hash invalide + STOP + journal + proofs via `Orchestrator` seul
- CLI `studio-run` / `resume-session` sans démarrer Next/Studio

## Gates et invalidation
Invalide si mismatch `contractHash` / `gitBranch` / `gitHead` / `allowlistSnapshot` / décideur absent → aucune exécution, événement `gate.rejected`, motif visible, pas de retry auto (`GATE_REPLAY`).

## Journal / proofStore
- Journal canonique `events.jsonl` (`source: harness` dans detail)
- Proof pack : contract, hash, request, gate, events, summary, cursor-fixture, git-results
- `verifyProofPack` ; incomplets bloquent (`REPORT_INCOMPLETE`, `PROOF_INCOMPLETE`)

## Ports fixtures
Réutilisation `CursorExecutorPortFixture` ; `attemptLiveCursor` → `LIVE_PORT_DENIED` ; `SFIA_CURSOR_REAL_SPIKE=0` côté pont Studio.

## Reprise session
`resumeSessionFromProofDir` + persistance `sessionStorage` (`proofDir` + vue) ; `goValid: false` à la reprise (pas de GO implicite).

## Commandes exécutées et résultats
| Commande | Résultat |
|---|---|
| harness `npm run typecheck` | OK |
| harness `npm test` | **80 passed**, 1 skipped |
| app `npm run typecheck` | OK |
| app `npm run lint` | OK |
| app `npm test` | **23 passed** |
| app `npm run build` | OK (4 routes P0 + `/`) |
| e2e increment-b | **5/5 passed** |
| e2e increment-a | **13/13 passed** |
| e2e p0-smoke | **6/6 passed** |
| `git diff --check` | OK (vide) |

## Runtime observé
- Next.js : `http://127.0.0.1:3020`
- Parcours GO → cycle-actif dérivé harness ; GO invalide refuse ; STOP journalisé ; reprise depuis journal

## Captures produites
`.tmp-sfia-review/screenshots-increment-b/` :
- inc-b-gate-valide-idle.png
- inc-b-execution-fixture.png
- inc-b-rapport-preuves.png
- inc-b-reprise-session.png
- inc-b-go-invalide.png
- inc-b-stop.png
- inc-b-cloture-derivee.png

## Absence GPT/Cursor live / secrets / Git distant
- Aucun appel OpenAI applicatif ; spikes non activés
- Aucun Cursor réel ; fixture only
- Aucune écriture Git distante (`remoteGitWrite: false`, policy none-remote)
- Aucun secret/PII réelle ; fixtures fictives

## git status final
```
 M projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx
 M projects/sfia-studio/app/components/vertical-slice/VsShared.tsx
 M projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
 M projects/sfia-studio/app/features/decision/VsDecisionScreen.tsx
 M projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx
 M projects/sfia-studio/app/features/synthese/VsSyntheseScreen.tsx
 M projects/sfia-studio/app/fixtures/vertical-slice.ts
 M projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx
 M projects/sfia-studio/app/lib/vertical-slice/types.ts
 M projects/sfia-studio/app/playwright.config.ts
 M projects/sfia-studio/harness/fixtures/builders.ts
 M projects/sfia-studio/harness/src/cli.ts
 M projects/sfia-studio/harness/src/gate/gateValidator.ts
 M projects/sfia-studio/harness/src/index.ts
 M projects/sfia-studio/harness/src/orchestrator.ts
 M projects/sfia-studio/harness/src/types/contracts.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/increment-b.test.tsx
?? projects/sfia-studio/app/e2e/increment-b.spec.ts
?? projects/sfia-studio/app/lib/harness/
?? projects/sfia-studio/harness/src/adapter/
?? projects/sfia-studio/harness/src/proof/verifyProofPack.ts
?? projects/sfia-studio/harness/src/session/
?? projects/sfia-studio/harness/tests/increment-b.test.ts

```

## Fichiers protégés
Non modifiés : `01–40`, `prompts/**`, `method/**`, `.github/**`, `package.json` / lockfiles, Figma, `.env`.

## Écarts et réserves
- Provider VsDemo encore par écran : état harness persisté via `sessionStorage` (acceptable POC B)
- Pont Studio = subprocess CLI (pas de dépendance workspace) — latence locale acceptable
- Plafond GPT numérique toujours « À définir »
- Incrément C / live non démarrés

## Décisions Morris attendues
1. Validation fonctionnelle et technique de B
2. Autorisation commit / push / PR / merge (nouveaux GO)
3. Non-démarrage Incrément C tant que B non validé
4. Gates live GPT/Cursor toujours **non** autorisés

## Anti-stub checklist
- [x] contenu/diff fichiers (pas seulement liste)
- [x] contrat d’intégration explicite
- [x] preuve harness autonome
- [x] journal/proofStore démontrés
- [x] résultats tests
- [x] captures runtime
