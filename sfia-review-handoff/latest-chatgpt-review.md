# SFIA Studio — Nora MW0×MW1×MW2×MW3 Integrated REAL Business Chain (MW3-scope corrected) — Full Critical Review Pack

Profile: **FULL / CRITICAL**
Cycle: Cycle 9 — QA / Validation — RUN
Programme: Nora Cognitive Completion
Capability: Cumulative MW0→MW3 integrated REAL business chain at MW3 scope
Date: 2026-09-02 (Europe/Paris)
Campaign ID: `nora-mw0-mw3-business-integrated-real-1788377416280`

**This cycle corrects the TEST CONTRACT only. It does NOT correct product code.**

## Mandatory statements

MW3 HISTORICAL IMPLEMENTATION SHA LOST

HISTORICAL BYTE/CODE PARITY NOT PROVEN

MW2-R01 / MW2-R02 / MW2-R03 CARRIED

ROADMAP TRUTH-SYNC PENDING

PROJECT PUSH / PR / MERGE NOT PERFORMED

MW3 PROJECT GIT INTEGRATION NOT YET AUTHORIZED

MW4 NOT AUTHORIZED

MW4-S01 CROSS-TURN GROUNDING DURABILITY NOT TESTED

COGNITIVE COMPLETION NOT PROVEN

RUNTIME V3 NON ADOPTED

PRODUCTION MODEL ROUTING NOT SELECTED

REAL MODEL CANDIDATE COGNITION PROVEN ≠ EXTERNAL SOURCE SEMANTIC EXTRACTION PROVEN

CUMULATIVE CHAIN PASS ≠ MW3 CLOSED

---

## A. Git truth

| Item | Value |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-nora-mw0-mw3-chain-real-2` |
| Branch | `validation/nora-mw0-mw3-integrated-real-mw3-scope` **LOCAL ONLY** |
| HEAD / MW3 anchor | `339d583ac9b5d91328838a7b9209e0fd3804bc98` |
| origin/main | `c352441c2a6ab012aecae7606e0bb9af8fc9e7e7` |
| Entry Review Handoff | `cd8426dd5e00b95f2a0ebf70ed7733d6fc644190` |
| Prior failed campaign handoff | same `cd8426dd` (input) |
| Prior isolated MW3 REAL | `e67367f3…` |
| App tracked diff vs `339d583a` | **empty** |
| Validation branch on origin | **absent** |

---

## B. Morris GO

**GO FRESH MW0×MW1×MW2×MW3 INTEGRATED REAL BUSINESS CHAIN CAMPAIGN — CORRECTED TO MW3 SCOPE — CONSUMED.**

Authorized: fresh cumulative REAL; MW1 premise continuity; MW2 CWP/strategy; MW3 candidate/evidence_backed/STOP with **current-turn** Evidence pointers.

Not authorized: product correction; MW4 implementation; cross-turn Evidence durability requirement; project push/PR/merge; MW3 closure.

---

## C. Why previous campaign overreached MW3 scope

Previous campaign `nora-mw0-mw3-integrated-real-1788376350396` (handoff `cd8426dd`) required T4/T5 to recover Evidence IDs introduced on earlier turns from Memory B / narrative ("les deux Evidence").

Observed prior trajectory: NONE→NONE→CANDIDATE→CANDIDATE→CANDIDATE with nominal CHAIN-MW3-02 / cascading CHAIN-MW3-04.

**Corrected qualification for this cycle:**

- Previous T4 CHAIN-MW3-02 = **TEST CONTRACT OVERREACHED MW3 SCOPE**
- Previous T5 CHAIN-MW3-04 = **CASCADING FROM TEST CONTRACT OVERREACH**

Do **not** open BLK-MW3-CHAIN-01. Do **not** modify product code to make the previous test pass.

Record:

**CROSS-TURN EVIDENCE GROUNDING DURABILITY = MW4-S01 EXPECTED FUTURE CAPABILITY**

The previous FAIL remains a valid historical result against its own contract. It is **not** rewritten as PASS.

---

## D. Source boundary

| Story | Scope |
| --- | --- |
| **MW3-S01** | candidate vs evidence-backed contradiction with domain/freshness/Evidence qualification on **current** pointers |
| **MW3-S02** | Cognitive STOP when governing-premise contradiction is evidence-backed |
| **MW4-S01** | Cross-turn grounding durability + narrative≠evidence — **NOT TESTED** |

Hard anti-overreach: do not fail MW3 because an Evidence ID omitted from the CURRENT turn is not reconstructed from an earlier turn.

---

## E. Convergence qualification

Business chain: Pilote premise → MW1 continuity → MW2 workload → MW3 current Evidence qualification → local continue → governing STOP.

MW4 remains NOT AUTHORIZED. FA NO / TA NO.

---

## F. Entry proofs

Serial preflight: **32 files / 269 tests PASS**. typecheck PASS. lint PASS. `git diff --check` PASS.

Prior isolated MW3 REAL at `e67367f3` remains bounded single-capability evidence. This campaign is the corrected cumulative MW3-scope business chain.

---

## G. Campaign architecture / REAL fidelity

- Path: `orchestrateAssistantSend` + Metered/Capturing OpenAI provider injection (same body as `projectAssistantSendAction`).
- `history: []` every turn.
- Session via `SFIA_STUDIO_NORA_SESSION_DB_PATH` temp override.
- Fake forced=false; presentation=`openai_live`; native F1; `completeRoundCalls=0` all turns.
- MW2: non-mutating `ProjectAssistantMemoryEventSink.prototype.emit` observer; restored in finally.

```json
{
  "campaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "marker": "PREMISE-MW3-BUSINESS-ae78731b",
  "REAL_MODEL": "gpt-5.6-luna",
  "REAL_REASONING_EFFORT": "UNSET",
  "OPENAI_API_KEY_PRESENT": "YES",
  "OPS1_CONVERSATION_PROVIDER": "UNSET",
  "fakeForced": false,
  "isOpenAiLiveF1": true,
  "shouldUseProviderAdapter": false,
  "productDbPathCategory": "os_tmpdir/oa-product.sqlite",
  "sessionDbPathCategory": "os_tmpdir/nora-session.sqlite",
  "substrate": "339d583ac9b5d91328838a7b9209e0fd3804bc98",
  "entryPathJustification": "orchestrateAssistantSend used (same as projectAssistantSendAction body) to inject capturing Metered OpenAI provider without env mutation; history always []."
}
```

---

## H. QA harness full source

Classification: **TEMPORARY WITH EXIT — QA CAMPAIGN TOOLING**

Untracked during run; removed from app tree after execution; source retained here and under `.tmp-sfia-real/mw0-mw3-business-integrated/`.

```typescript
/** @vitest-environment node */
/**
 * TEMPORARY WITH EXIT — QA CAMPAIGN TOOLING
 * MW0×MW1×MW2×MW3 Integrated REAL Business Chain (MW3-scope corrected) — NOT product code.
 * Untracked. Not committed. Not pushed.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { describe, it } from "vitest";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import {
  parseContradictionCandidate,
  validateIntentAnalysisPayload,
} from "@/features/project-assistant/f2/intentAnalysis";
import {
  ProductSqliteSession,
  isOpenAiLiveF1Provider,
  shouldUseProviderAgentsModelAdapter,
} from "@/lib/nora-cognitive-runtime";
import {
  OpenAIConversationProvider,
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
  requireLiveConversationSecrets,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  BudgetTracker,
  buildMw0CapabilityManifest,
  campaignEffectiveCapabilitySet,
  estimateCostUsd,
} from "@/lib/nora-eval/capabilityBudget";
import { MeteredConversationProvider } from "@/lib/nora-eval/meteredProvider";

const EVIDENCE_DIR =
  "/Users/morris/Projects/sfia-workspace-nora-mw0-mw3-chain-real-2/.tmp-sfia-real/mw0-mw3-business-integrated";
const DOTENV =
  "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/.env.local";
const ANCHOR = "339d583ac9b5d91328838a7b9209e0fd3804bc98";
const COST_CAP_USD = 1.0;

type Capture = {
  at: string;
  method: "complete" | "completeStructured" | "completeRound";
  schemaName?: string;
  text?: string;
  usage?: ProviderCompletionResult["usage"];
  kind?: string;
  latencyMs: number;
};

type LpsSnap = {
  lpsId: string;
  version: number;
  nextStep: string | null;
  scope: string | null;
  decisionIds: string[];
  evidenceIds: string[];
};

function loadDotenv(file: string): void {
  if (!fs.existsSync(file)) throw new Error(`DOTENV_MISSING:${file}`);
  for (const raw of fs.readFileSync(file, "utf8").split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const eq = line.indexOf("=");
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key] || !String(process.env[key]).trim()) {
      process.env[key] = value;
    }
  }
}

function redact(value: unknown): unknown {
  const scrubbed = JSON.stringify(value)
    .replace(/sk-[A-Za-z0-9_\-]{10,}/g, "[REDACTED]")
    .replace(/Bearer [A-Za-z0-9._\-]+/g, "Bearer [REDACTED]");
  return JSON.parse(scrubbed);
}

function writeJson(name: string, value: unknown): void {
  fs.writeFileSync(
    path.join(EVIDENCE_DIR, name),
    JSON.stringify(redact(value), null, 2),
  );
}

class CapturingOpenAiProvider implements ConversationProvider {
  readonly providerId = "openai";
  readonly captures: Capture[] = [];
  constructor(private readonly inner: ConversationProvider) {}
  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    const t0 = Date.now();
    const result = await this.inner.complete(messages);
    this.captures.push({
      at: new Date().toISOString(),
      method: "complete",
      text: result.text,
      usage: result.usage,
      latencyMs: Date.now() - t0,
    });
    return result;
  }
  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    const t0 = Date.now();
    const result = await this.inner.completeStructured(input);
    this.captures.push({
      at: new Date().toISOString(),
      method: "completeStructured",
      schemaName: input.schemaName,
      text: result.text,
      usage: result.usage,
      latencyMs: Date.now() - t0,
    });
    return result;
  }
  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    const t0 = Date.now();
    const result = await this.inner.completeRound(input);
    this.captures.push({
      at: new Date().toISOString(),
      method: "completeRound",
      kind: result.kind,
      text: result.kind === "message" ? result.text : undefined,
      usage: result.usage,
      latencyMs: Date.now() - t0,
    });
    return result;
  }
}

async function snapshotLps(projectId: string): Promise<LpsSnap> {
  const runtime = getRuntimeApplicationService();
  const res = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!res.ok) throw new Error(`LPS_SNAPSHOT_FAILED:${JSON.stringify(res)}`);
  const s = res.livingProjectState;
  return {
    lpsId: s.lpsVersionId,
    version: s.version,
    nextStep: s.nextStep ?? null,
    scope: s.scope ?? null,
    decisionIds: [...(s.decisionIds ?? [])],
    evidenceIds: [...(s.evidenceIds ?? [])],
  };
}

function lpsEqual(a: LpsSnap, b: LpsSnap): boolean {
  return (
    a.lpsId === b.lpsId &&
    a.version === b.version &&
    a.nextStep === b.nextStep &&
    a.scope === b.scope &&
    JSON.stringify(a.decisionIds) === JSON.stringify(b.decisionIds) &&
    JSON.stringify(a.evidenceIds) === JSON.stringify(b.evidenceIds)
  );
}

function itemText(item: unknown): string {
  const it = item as { content?: unknown; type?: string };
  if (typeof it.content === "string") return it.content;
  if (Array.isArray(it.content)) {
    return it.content
      .map((c) => {
        if (typeof c === "string") return c;
        if (c && typeof c === "object" && "text" in c) {
          return String((c as { text?: unknown }).text ?? "");
        }
        return JSON.stringify(c);
      })
      .join("\n");
  }
  return JSON.stringify(item);
}

async function inspectSession(sessionDbPath: string, projectId: string) {
  const session = new ProductSqliteSession({
    projectId,
    dbPath: sessionDbPath,
    sessionKey: "f1-default",
  });
  const sessionId = await session.getSessionId();
  const items = await session.getItems();
  session.close();
  return {
    sessionId,
    itemCount: items.length,
    items: items.map((it, idx) => ({
      idx,
      roleOrType:
        typeof it === "object" && it && "role" in it
          ? (it as { role?: string }).role
          : (it as { type?: string }).type,
      textPreview: itemText(it).slice(0, 500),
      fullText: itemText(it),
    })),
  };
}

function mw3State(result: {
  ok?: boolean;
  status?: string;
  mw3?: {
    disposition?: string;
    cognitiveStop?: boolean;
    progression?: string;
    mayContinue?: boolean;
    allowsSilentSuccess?: boolean;
  } | null;
}): string {
  const d = result.mw3?.disposition ?? "none";
  if (!result.mw3 || d === "none") return "NONE";
  if (d === "candidate") return "CANDIDATE";
  if (d === "evidence_backed" && result.mw3.cognitiveStop === true) {
    return "EVIDENCE_BACKED_COGNITIVE_STOP";
  }
  if (d === "evidence_backed") return "EVIDENCE_BACKED_CONTINUE";
  return `OTHER:${d}`;
}

describe("MW0×MW1×MW2×MW3 integrated REAL business chain (MW3 scope)", () => {
  it(
    "runs five continuous business turns",
    async () => {
      await runCampaign();
    },
    600_000,
  );
});

async function runCampaign(): Promise<void> {
  loadDotenv(DOTENV);
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  delete process.env.OPS1_CONVERSATION_PROVIDER;

  const startedAt = new Date().toISOString();
  const campaignId = `nora-mw0-mw3-business-integrated-real-${Date.now()}`;
  const marker = `PREMISE-MW3-BUSINESS-${crypto.randomBytes(4).toString("hex")}`;

  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    throw new Error(
      `STOP-BUSINESS-04 REAL CONFIGURATION UNAVAILABLE (${availability.missing.join(",")})`,
    );
  }
  if (isFakeConversationProviderForced()) {
    throw new Error("STOP-BUSINESS-05 Fake forced");
  }
  const secrets = requireLiveConversationSecrets();
  if (!/^gpt-5\.6($|-)/.test(secrets.model)) {
    throw new Error(`STOP — INTEGRATED REAL MODEL BASELINE DIVERGED (${secrets.model})`);
  }

  const manifest = buildMw0CapabilityManifest(new Date().toISOString());
  const effective = campaignEffectiveCapabilitySet(manifest, secrets.model);
  if (!effective.ok) {
    throw new Error("STOP — INTEGRATED REAL MODEL BASELINE DIVERGED (capability set)");
  }
  const budget = new BudgetTracker({
    targetUsd: 0.5,
    softStopUsd: 0.85,
    hardCapUsd: COST_CAP_USD,
  });

  const inner = new OpenAIConversationProvider(
    secrets.apiKey,
    secrets.model,
    secrets.reasoningEffort,
  );
  const capturing = new CapturingOpenAiProvider(inner);
  const metered = new MeteredConversationProvider(
    capturing,
    manifest,
    budget,
    secrets.model,
    { inputTokens: 3500, outputTokens: 900 },
  );
  if (!isOpenAiLiveF1Provider(metered) || shouldUseProviderAgentsModelAdapter(metered)) {
    throw new Error("STOP — INTEGRATED REAL PATH FIDELITY FAILED");
  }
  setConversationProviderForTests(metered);

  const productDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw0-mw3-biz-product-"));
  const sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw0-mw3-biz-session-"));
  const productDbPath = path.join(productDir, "oa-product.sqlite");
  const sessionDbPath = path.join(sessionDir, "nora-session.sqlite");
  process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = sessionDbPath;

  resetRuntimeApplicationServiceForTests();
  getRuntimeApplicationService({ productDbPath, auditMode: "noop" });

  const created = await getRuntimeApplicationService().createProject({
    name: "Nora MW0-MW3 Integrated Business REAL Chain",
    objective: "Cumulative MW0→MW3 integrated REAL business chain at MW3 scope",
    context: "Temporary synthetic Product SQLite campaign — not production data",
    criticality: "STANDARD",
    constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION"],
    shortReference: "MW03B",
    idempotencyKey: `idem:${campaignId}:project`,
  });
  if (!created.ok) throw new Error(`createProject failed: ${JSON.stringify(created)}`);
  const projectId = created.projectId;

  writeJson("preflight.json", {
    campaignId,
    marker,
    REAL_MODEL: secrets.model,
    REAL_REASONING_EFFORT: secrets.reasoningEffort ?? "UNSET",
    OPENAI_API_KEY_PRESENT: "YES",
    OPS1_CONVERSATION_PROVIDER: "UNSET",
    fakeForced: false,
    isOpenAiLiveF1: isOpenAiLiveF1Provider(metered),
    shouldUseProviderAdapter: shouldUseProviderAgentsModelAdapter(metered),
    productDbPathCategory: "os_tmpdir/oa-product.sqlite",
    sessionDbPathCategory: "os_tmpdir/nora-session.sqlite",
    substrate: ANCHOR,
    entryPathJustification:
      "orchestrateAssistantSend used (same as projectAssistantSendAction body) to inject capturing Metered OpenAI provider without env mutation; history always [].",
  });

  const strategyEvents: TechnicalEvent[] = [];
  const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
  ProjectAssistantMemoryEventSink.prototype.emit = function (
    this: ProjectAssistantMemoryEventSink,
    event: TechnicalEvent,
  ) {
    if (event.type === "COGNITIVE_STRATEGY_SELECTED") {
      strategyEvents.push({
        type: event.type,
        correlationId: event.correlationId,
        detail: { ...(event.detail ?? {}) },
      });
    }
    return originalEmit.call(this, event);
  };

  const turns: Record<string, unknown>[] = [];
  const lpsLedger: unknown[] = [];
  const evidenceMeta: unknown[] = [];
  let chainFailure: string | null = null;

  const USER_T1 =
    `Pour cette conversation de travail, retiens la prémisse temporaire ${marker} : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action.`;
  const USER_T2 =
    "Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé.";
  const USER_T3 =
    "Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse est ev:mw0-mw3-business-a. Analyse le conflit et indique s'il est suffisamment établi pour bloquer honnêtement la suite.";
  const USER_T4 =
    "Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer.";
  const USER_T5 =
    "Pour cette réévaluation, les Evidence pertinentes sont toujours ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Leur contradiction n'est finalement pas locale : elle invalide directement la condition de travail initiale dont dépend toute recommandation aval. Analyse si la suite peut honnêtement continuer.";

  async function registerEv(evidenceId: string, source: string) {
    const runtime = getRuntimeApplicationService();
    const result = await runtime.oa!.evidenceReviewServices.registerEvidence.execute({
      evidenceId,
      idempotencyKey: `idem:${campaignId}:${evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "artifact",
      source,
      sourceKind: "external",
      bindings: { projectId },
      classification: "internal",
      storageMode: "metadata_only",
      freshness: "fresh",
    });
    if (!result.ok) throw new Error(`register ${evidenceId} failed`);
    const meta = {
      evidenceId: result.evidence.evidenceId,
      source: result.evidence.source,
      status: result.evidence.status,
      freshness: result.evidence.freshness,
      bindings: result.evidence.bindings,
      version: result.evidence.version,
    };
    evidenceMeta.push(meta);
    return meta;
  }

  async function runTurn(turnId: string, content: string) {
    if (budget.hardStopTriggered || budget.cumulativeUsd >= COST_CAP_USD) {
      throw new Error("STOP-BUSINESS-19 cost cap reached");
    }
    const preCall = estimateCostUsd({
      manifest,
      modelId: secrets.model,
      inputTokens: 3500,
      outputTokens: 900,
    });
    const gate = budget.canStartCall(preCall);
    if (!gate.allowed) {
      throw new Error(`STOP-BUSINESS-19 ${gate.reason}`);
    }

    capturing.captures.length = 0;
    const strategyBefore = strategyEvents.length;
    const lpsBefore = await snapshotLps(projectId);
    const t0 = Date.now();
    const result = await orchestrateAssistantSend({
      projectId,
      content,
      history: [],
      provider: metered,
    });
    const latencyMs = Date.now() - t0;
    const lpsAfter = await snapshotLps(projectId);
    const lpsUnchanged = lpsEqual(lpsBefore, lpsAfter);
    lpsLedger.push({ turnId, before: lpsBefore, after: lpsAfter, unchanged: lpsUnchanged });
    if (!lpsUnchanged) {
      chainFailure = "STOP-BUSINESS-10 Truth C silently mutates";
    }

    const structured = capturing.captures.filter((c) => c.method === "completeStructured");
    const structuredParsed = structured.map((c) => {
      let parsed: unknown = null;
      try {
        parsed = JSON.parse(c.text ?? "");
      } catch {
        parsed = { parseError: true, text: c.text };
      }
      const analysis = validateIntentAnalysisPayload(parsed);
      return {
        schemaName: c.schemaName,
        rawText: c.text,
        cognitiveWorkload: analysis.cognitiveWorkload ?? null,
        contradictionCandidate: analysis.contradictionCandidate ?? null,
        parsedCandidate: parseContradictionCandidate(
          (parsed as { contradictionCandidate?: unknown } | null)
            ?.contradictionCandidate,
        ),
        intentClass: analysis.intentClass,
        parseOk: analysis.parseOk,
      };
    });

    const turnStrategies = strategyEvents.slice(strategyBefore);
    const session = await inspectSession(sessionDbPath, projectId);
    const usage = capturing.captures.map((c) => ({
      method: c.method,
      schemaName: c.schemaName ?? null,
      latencyMs: c.latencyMs,
      model: c.usage?.model ?? null,
      providerResponseId: c.usage?.providerResponseId ?? null,
      inputTokens: c.usage?.inputTokens ?? null,
      outputTokens: c.usage?.outputTokens ?? null,
      totalTokens: c.usage?.totalTokens ?? null,
      estimatedUsd:
        c.usage?.inputTokens != null && c.usage?.outputTokens != null
          ? estimateCostUsd({
              manifest,
              modelId: secrets.model,
              inputTokens: c.usage.inputTokens,
              outputTokens: c.usage.outputTokens,
            })
          : null,
    }));

    const record = {
      campaignId,
      turnId,
      timestamp: new Date().toISOString(),
      projectId,
      exactUserContent: content,
      model: secrets.model,
      reasoningSetting: secrets.reasoningEffort ?? "UNSET",
      providerId: metered.providerId,
      nativeAgentsAdapterUsed: shouldUseProviderAgentsModelAdapter(metered),
      isOpenAiLiveF1: isOpenAiLiveF1Provider(metered),
      completeRoundCalls: capturing.captures.filter((c) => c.method === "completeRound")
        .length,
      providerCalls: usage,
      structured: structuredParsed,
      strategyTelemetry: turnStrategies.map((e) => e.detail),
      result: redact(result),
      session,
      lpsBefore,
      lpsAfter,
      lpsUnchanged,
      latencyMs,
      mw3TrajectoryState: mw3State(
        result as {
          ok?: boolean;
          status?: string;
          mw3?: {
            disposition?: string;
            cognitiveStop?: boolean;
            progression?: string;
          } | null;
        },
      ),
      historyPassed: [],
    };
    turns.push(record);
    writeJson(`${turnId.toLowerCase()}.json`, record);
    return record;
  }

  try {
    // TURN 1
    const t1 = await runTurn("T1", USER_T1);
    const r1 = t1.result as {
      ok?: boolean;
      status?: string;
      text?: string;
      sessionId?: string | null;
      memoryBAvailability?: string;
      mw3?: { disposition?: string; cognitiveStop?: boolean } | null;
      presentation?: string;
    };
    if (!r1.ok || r1.presentation !== "openai_live") {
      chainFailure = chainFailure ?? "BUSINESS-REAL-01 provider/product failure T1";
    }
    if (r1.mw3 && r1.mw3.disposition && r1.mw3.disposition !== "none") {
      chainFailure = chainFailure ?? "BUSINESS-MW3 false contradiction T1";
    }
    if (r1.mw3?.cognitiveStop === true || r1.status === "cognitive_stop") {
      chainFailure = chainFailure ?? "BUSINESS-MW3 unexpected STOP T1";
    }
    if (
      r1.memoryBAvailability !== "available_empty" &&
      r1.memoryBAvailability !== "available_with_history"
    ) {
      chainFailure =
        chainFailure ?? `BUSINESS-MW1-01 unexpected availability T1=${r1.memoryBAvailability}`;
    }
    if (t1.completeRoundCalls !== 0) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-06 native F1 path not used (completeRound>0)";
    }
    if ((t1.strategyTelemetry as unknown[]).length < 1) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-09 / CHAIN-MW2-03 strategy not observed T1";
    }

    // TURN 2
    if (USER_T2.includes(marker) || /Gate-Kappa/i.test(USER_T2)) {
      throw new Error("STOP-BUSINESS-08 harness leaked marker into T2");
    }
    const t2 = await runTurn("T2", USER_T2);
    const r2 = t2.result as {
      ok?: boolean;
      status?: string;
      text?: string;
      sessionId?: string | null;
      memoryBAvailability?: string;
      mw3?: { disposition?: string; cognitiveStop?: boolean } | null;
      presentation?: string;
    };
    if (!r2.ok || r2.presentation !== "openai_live") {
      chainFailure = chainFailure ?? "BUSINESS-REAL-01 provider/product failure T2";
    }
    if (r2.sessionId !== r1.sessionId) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-07 session id changed T1→T2";
    }
    if (r2.memoryBAvailability !== "available_with_history") {
      chainFailure =
        chainFailure ??
        `BUSINESS-MW1-01 availability T2=${r2.memoryBAvailability} expected available_with_history`;
    }
    const t2Text = r2.text ?? "";
    const recalls =
      t2Text.includes("Gate-Kappa") ||
      t2Text.includes(marker) ||
      (/Gate[\s-]?Kappa/i.test(t2Text) && /valide/i.test(t2Text));
    if (!recalls) {
      chainFailure =
        chainFailure ?? "BUSINESS-MW1-01 governing premise cannot be recalled (T2 no Gate-Kappa/marker)";
    }
    if (r2.mw3 && r2.mw3.disposition && r2.mw3.disposition !== "none") {
      chainFailure = chainFailure ?? "BUSINESS-MW3 false contradiction T2";
    }
    if ((t2.strategyTelemetry as unknown[]).length < 1) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-09 strategy not observed T2";
    }
    const sessionAfterT2 = t2.session as {
      items: Array<{ fullText: string; roleOrType?: string }>;
    };
    const durableHasMarker = sessionAfterT2.items.some((it) =>
      it.fullText.includes(marker),
    );
    if (!durableHasMarker) {
      chainFailure = chainFailure ?? "BUSINESS-MW1-01 marker absent from durable session after T2";
    }

    // Evidence A
    await registerEv("ev:mw0-mw3-business-a", "src:mw0-mw3-business-a");

    // TURN 3
    if (USER_T3.includes(marker) || /Gate-Kappa/i.test(USER_T3)) {
      throw new Error("STOP-BUSINESS-08 harness leaked marker into T3");
    }
    const t3 = await runTurn("T3", USER_T3);
    const r3 = t3.result as {
      ok?: boolean;
      status?: string;
      sessionId?: string | null;
      mw3?: {
        disposition?: string;
        cognitiveStop?: boolean;
        progression?: string;
        insufficiencyReasons?: string[];
        mayContinue?: boolean;
        allowsSilentSuccess?: boolean;
        evidenceIds?: string[];
        governingPremise?: string | null;
      } | null;
      presentation?: string;
    };
    const c3 = (t3.structured as Array<{ parsedCandidate?: {
      conflictPresent?: boolean;
      claimedEvidenceIds?: string[];
      governingPremise?: string | null;
    } | null; cognitiveWorkload?: Record<string, string> | null }>)[0];
    if (!r3.ok) chainFailure = chainFailure ?? "BUSINESS-REAL-01 T3";
    if (r3.sessionId !== r1.sessionId) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-07 session changed T3";
    }
    if (c3?.parsedCandidate?.conflictPresent !== true) {
      chainFailure = chainFailure ?? "BUSINESS-MW3 cognition conflictPresent!=true T3";
    }
    const claimed3 = c3?.parsedCandidate?.claimedEvidenceIds ?? [];
    if (claimed3.length !== 1 || claimed3[0] !== "ev:mw0-mw3-business-a") {
      chainFailure =
        chainFailure ?? `BUSINESS-MW3-06 / linkage T3 claimed=${JSON.stringify(claimed3)}`;
    }
    if (r3.mw3?.disposition !== "candidate") {
      if (r3.mw3?.disposition === "evidence_backed") {
        chainFailure = chainFailure ?? "STOP-BUSINESS-11 / BUSINESS-MW3-01 one source promoted";
      } else {
        chainFailure =
          chainFailure ?? `BUSINESS-MW3 expected candidate got ${r3.mw3?.disposition}`;
      }
    }
    if (r3.mw3?.cognitiveStop === true || r3.status === "cognitive_stop") {
      chainFailure = chainFailure ?? "BUSINESS-MW3 unexpected STOP T3";
    }
    const insuff = r3.mw3?.insufficiencyReasons ?? [];
    if (!insuff.some((x) => /insufficient|coverage|source/i.test(x))) {
      chainFailure = chainFailure ?? "BUSINESS-MW3 missing insufficiency T3";
    }
    const cwp3 = c3?.cognitiveWorkload;
    if (cwp3?.contradictionRisk === "low") {
      chainFailure = chainFailure ?? "BUSINESS-MW2-01 contradictionRisk LOW on T3";
    }
    if (cwp3?.verificationNeed === "low") {
      chainFailure = chainFailure ?? "BUSINESS-MW2-01 verificationNeed LOW on T3";
    }
    const strat3 = (t3.strategyTelemetry as Array<{ strategyClass?: string }>)[0];
    if (strat3?.strategyClass === "Routine") {
      chainFailure = chainFailure ?? "BUSINESS-MW2-02 Routine on T3";
    }
    if ((t3.strategyTelemetry as unknown[]).length < 1) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-09 strategy not observed T3";
    }

    // Evidence B
    await registerEv("ev:mw0-mw3-business-b", "src:mw0-mw3-business-b");

    // TURN 4 — MW3-scope: CURRENT turn must explicitly provide A+B
    if (!USER_T4.includes("ev:mw0-mw3-business-a") || !USER_T4.includes("ev:mw0-mw3-business-b")) {
      throw new Error("TEST CONTRACT ERROR: T4 must explicitly include Evidence A and B");
    }
    if (USER_T4.includes(marker) || /Gate-Kappa/i.test(USER_T4)) {
      throw new Error("STOP-BUSINESS-08 harness leaked marker into T4");
    }
    const t4 = await runTurn("T4", USER_T4);
    const r4 = t4.result as {
      ok?: boolean;
      status?: string;
      sessionId?: string | null;
      mw3?: {
        disposition?: string;
        cognitiveStop?: boolean;
        progression?: string;
        mayContinue?: boolean;
        allowsSilentSuccess?: boolean;
        evidenceIds?: string[];
        sourceIds?: string[];
        governingPremise?: string | null;
      } | null;
    };
    const c4 = (t4.structured as Array<{
      parsedCandidate?: { claimedEvidenceIds?: string[] } | null;
      cognitiveWorkload?: Record<string, string> | null;
    }>)[0];
    if (!r4.ok) chainFailure = chainFailure ?? "BUSINESS-REAL-01 T4";
    if (r4.sessionId !== r1.sessionId) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-07 session changed T4";
    }
    const claimed4 = new Set(c4?.parsedCandidate?.claimedEvidenceIds ?? []);
    if (!claimed4.has("ev:mw0-mw3-business-a") || !claimed4.has("ev:mw0-mw3-business-b")) {
      chainFailure = chainFailure ?? "BUSINESS-MW3-02 current-turn A+B fail evidence_backed (claimed IDs incomplete)";
    }
    if (r4.mw3?.disposition !== "evidence_backed") {
      chainFailure =
        chainFailure ??
        `STOP-BUSINESS-12 / BUSINESS-MW3-02 expected evidence_backed got ${r4.mw3?.disposition}`;
    }
    if (r4.mw3?.cognitiveStop === true || r4.status === "cognitive_stop") {
      chainFailure = chainFailure ?? "STOP-BUSINESS-13 / BUSINESS-MW3-03 local incorrectly STOPs";
    }
    if (r4.mw3?.progression !== "PROGRESS_WITH_CONTRADICTION") {
      chainFailure =
        chainFailure ?? `BUSINESS-MW3 progression T4=${r4.mw3?.progression}`;
    }
    if (r4.mw3?.mayContinue !== true || r4.mw3?.allowsSilentSuccess !== false) {
      chainFailure = chainFailure ?? "BUSINESS-MW3 continue honesty T4";
    }
    const strat4 = (t4.strategyTelemetry as Array<{ strategyClass?: string }>)[0];
    if (strat4?.strategyClass === "Routine") {
      chainFailure = chainFailure ?? "BUSINESS-MW2-02 Routine on T4";
    }
    const cwp4 = c4?.cognitiveWorkload;
    if (cwp4?.contradictionRisk === "low" || cwp4?.verificationNeed === "low") {
      chainFailure = chainFailure ?? "BUSINESS-MW2-01 low CWP on T4";
    }

    // TURN 5 — MW3-scope: CURRENT turn must explicitly provide A+B
    if (!USER_T5.includes("ev:mw0-mw3-business-a") || !USER_T5.includes("ev:mw0-mw3-business-b")) {
      throw new Error("TEST CONTRACT ERROR: T5 must explicitly include Evidence A and B");
    }
    if (USER_T5.includes(marker) || /Gate-Kappa/i.test(USER_T5)) {
      throw new Error("STOP-BUSINESS-08 harness leaked marker into T5");
    }
    const t5 = await runTurn("T5", USER_T5);
    const r5 = t5.result as {
      ok?: boolean;
      status?: string;
      sessionId?: string | null;
      mw3?: {
        disposition?: string;
        cognitiveStop?: boolean;
        progression?: string;
        mayContinue?: boolean;
        allowsSilentSuccess?: boolean;
        notTechnicalFailure?: boolean;
        reason?: string | null;
        nextAction?: string | null;
        blockedImpact?: string | null;
        evidenceIds?: string[];
        sourceIds?: string[];
        governingPremise?: string | null;
      } | null;
    };
    const c5 = (t5.structured as Array<{
      parsedCandidate?: {
        conflictPresent?: boolean;
        claimedEvidenceIds?: string[];
        governingPremiseInvalidated?: boolean;
        localImpactOnly?: boolean;
        governingPremise?: string | null;
      } | null;
      cognitiveWorkload?: Record<string, string> | null;
    }>)[0];
    if (!r5.ok && r5.status !== "cognitive_stop") {
      // cognitive_stop returns ok:true with status cognitive_stop in product path
      chainFailure = chainFailure ?? `BUSINESS-REAL-01 T5 status=${r5.status}`;
    }
    if (r5.ok === false) {
      chainFailure = chainFailure ?? "BUSINESS-REAL-01 T5 not ok";
    }
    if (r5.sessionId !== r1.sessionId) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-07 session changed T5";
    }
    if (c5?.parsedCandidate?.governingPremiseInvalidated !== true) {
      chainFailure =
        chainFailure ?? "BUSINESS-MW3 cognition governingPremiseInvalidated!=true T5";
    }
    if (r5.mw3?.disposition !== "evidence_backed") {
      chainFailure =
        chainFailure ?? `BUSINESS-MW3 expected evidence_backed T5 got ${r5.mw3?.disposition}`;
    }
    if (r5.mw3?.cognitiveStop !== true || r5.status !== "cognitive_stop") {
      chainFailure =
        chainFailure ?? "STOP-BUSINESS-14 / BUSINESS-MW3-04 governing fails STOP";
    }
    if (r5.mw3?.progression !== "COGNITIVE_STOP") {
      chainFailure = chainFailure ?? "BUSINESS-MW3-05 progression not COGNITIVE_STOP";
    }
    if (r5.mw3?.allowsSilentSuccess !== false) {
      chainFailure = chainFailure ?? "STOP-BUSINESS-15 / BUSINESS-MW3-05 STOP as SUCCESS";
    }
    if (r5.mw3?.notTechnicalFailure === false) {
      chainFailure = chainFailure ?? "BUSINESS-MW3 STOP mislabeled technical";
    }
    if (r5.mw3?.mayContinue !== false) {
      chainFailure = chainFailure ?? "BUSINESS-MW3 mayContinue should be false T5";
    }
    if (!r5.mw3?.reason || !r5.mw3?.nextAction || !r5.mw3?.blockedImpact) {
      chainFailure = chainFailure ?? "BUSINESS-MW3 incomplete STOP anatomy";
    }
    const ev5 = new Set(r5.mw3?.evidenceIds ?? []);
    const src5 = new Set(r5.mw3?.sourceIds ?? []);
    if (!ev5.has("ev:mw0-mw3-business-a") || !ev5.has("ev:mw0-mw3-business-b")) {
      chainFailure = chainFailure ?? "BUSINESS-MW3-06 Evidence IDs missing on STOP";
    }
    if (!src5.has("src:mw0-mw3-business-a") || !src5.has("src:mw0-mw3-business-b")) {
      chainFailure = chainFailure ?? "BUSINESS-MW3-06 Source IDs missing on STOP";
    }
    const strat5 = (t5.strategyTelemetry as Array<{ strategyClass?: string }>)[0];
    if (strat5?.strategyClass === "Routine") {
      chainFailure = chainFailure ?? "BUSINESS-MW2-02 Routine on T5";
    }
    const cwp5 = c5?.cognitiveWorkload;
    if (cwp5?.contradictionRisk === "low" || cwp5?.verificationNeed === "low") {
      chainFailure = chainFailure ?? "BUSINESS-MW2-01 low CWP on T5";
    }

    // Invented evidence check across turns
    const allowed = new Set([
      "ev:mw0-mw3-business-a",
      "ev:mw0-mw3-business-b",
    ]);
    for (const turn of [t3, t4, t5]) {
      const res = turn.result as {
        mw3?: { evidenceIds?: string[]; disposition?: string } | null;
      };
      const promoted = res.mw3?.evidenceIds ?? [];
      for (const id of promoted) {
        if (!allowed.has(id) && res.mw3?.disposition === "evidence_backed") {
          chainFailure =
            chainFailure ?? `STOP-BUSINESS-16 invented Evidence promoted: ${id}`;
        }
      }
    }

    const trajectory = turns.map((t) => ({
      turnId: (t as { turnId: string }).turnId,
      state: (t as { mw3TrajectoryState: string }).mw3TrajectoryState,
      strategyClass: ((t as { strategyTelemetry: Array<{ strategyClass?: string }> })
        .strategyTelemetry?.[0]?.strategyClass) ?? null,
      memoryBAvailability: (
        (t as { result: { memoryBAvailability?: string } }).result
      ).memoryBAvailability,
      sessionId: ((t as { result: { sessionId?: string } }).result).sessionId,
    }));

    const expectedTrajectory = [
      "NONE",
      "NONE",
      "CANDIDATE",
      "EVIDENCE_BACKED_CONTINUE",
      "EVIDENCE_BACKED_COGNITIVE_STOP",
    ];
    const actualTrajectory = trajectory.map((x) => x.state);
    if (JSON.stringify(actualTrajectory) !== JSON.stringify(expectedTrajectory)) {
      chainFailure =
        chainFailure ??
        `TRAJECTORY_MISMATCH expected=${expectedTrajectory.join("→")} got=${actualTrajectory.join("→")}`;
    }

    // CW scorecard
    const sessionIds = new Set(
      turns.map((t) => (t as { result: { sessionId?: string } }).result.sessionId),
    );
    const allStrategy = turns.every(
      (t) => ((t as { strategyTelemetry: unknown[] }).strategyTelemetry ?? []).length >= 1,
    );
    const allCwp = turns.every(
      (t) =>
        ((t as { structured: Array<{ cognitiveWorkload?: unknown }> }).structured?.[0]
          ?.cognitiveWorkload ?? null) !== null,
    );
    const allNative =
      turns.every((t) => (t as { completeRoundCalls: number }).completeRoundCalls === 0) &&
      turns.every((t) => (t as { isOpenAiLiveF1: boolean }).isOpenAiLiveF1 === true);
    const allLpsOk = lpsLedger.every((x) => (x as { unchanged: boolean }).unchanged);
    const t2ok =
      ((t2.result as { text?: string }).text ?? "").includes("Gate-Kappa") ||
      ((t2.result as { text?: string }).text ?? "").includes(marker);

    const scorecard = [
      { id: "BC-01", pass: true, detail: `projectId=${projectId}` },
      {
        id: "BC-02",
        pass: sessionIds.size === 1 && !!r1.sessionId,
        detail: `sessionIds=${[...sessionIds].join(",")}`,
      },
      {
        id: "BC-03",
        pass: turns.every((t) => Array.isArray((t as { historyPassed?: unknown[] }).historyPassed)),
        detail: "history=[] every turn",
      },
      {
        id: "BC-04",
        pass: durableHasMarker,
        detail: "T1 premise durable in Memory B",
      },
      {
        id: "BC-05",
        pass: t2ok && !USER_T2.includes(marker) && !/Gate-Kappa/i.test(USER_T2),
        detail: `T2 recalls Gate-Kappa without repetition; recalls=${t2ok}`,
      },
      {
        id: "BC-06",
        pass:
          (!r1.mw3 || !r1.mw3.disposition || r1.mw3.disposition === "none") &&
          (!r2.mw3 || !r2.mw3.disposition || r2.mw3.disposition === "none"),
        detail: "T1/T2 no false contradiction",
      },
      { id: "BC-07", pass: allCwp, detail: "CWP all turns" },
      { id: "BC-08", pass: allStrategy, detail: "COGNITIVE_STRATEGY_SELECTED all F1" },
      {
        id: "BC-09",
        pass: !(
          String(chainFailure ?? "").includes("CHAIN-MW2-01") ||
          String(chainFailure ?? "").includes("CHAIN-MW2-02") ||
          String(chainFailure ?? "").includes("BUSINESS-MW2")
        ),
        detail: "T3/T4/T5 not dishonest Routine/low",
      },
      {
        id: "BC-10",
        pass: true,
        detail:
          "MW2 strategy observed separately; disposition from Studio MW3 policy on current-turn candidate+OA Evidence",
      },
      {
        id: "BC-11",
        pass: r3.mw3?.disposition === "candidate",
        detail: `T3 disposition=${r3.mw3?.disposition}`,
      },
      {
        id: "BC-12",
        pass: r4.mw3?.disposition === "evidence_backed",
        detail: `T4 disposition=${r4.mw3?.disposition}`,
      },
      {
        id: "BC-13",
        pass:
          r4.mw3?.disposition === "evidence_backed" &&
          r4.mw3?.cognitiveStop !== true &&
          r4.mw3?.mayContinue === true,
        detail: "T4 local continue",
      },
      {
        id: "BC-14",
        pass: r5.mw3?.disposition === "evidence_backed",
        detail: `T5 disposition=${r5.mw3?.disposition}`,
      },
      {
        id: "BC-15",
        pass: r5.mw3?.cognitiveStop === true && r5.status === "cognitive_stop",
        detail: "T5 Cognitive STOP",
      },
      {
        id: "BC-16",
        pass: r5.mw3?.notTechnicalFailure === true,
        detail: "STOP ≠ technical failure",
      },
      {
        id: "BC-17",
        pass:
          r5.mw3?.allowsSilentSuccess === false &&
          r5.status === "cognitive_stop" &&
          r5.mw3?.progression === "COGNITIVE_STOP",
        detail: "STOP ≠ SUCCESS",
      },
      {
        id: "BC-18",
        pass: evidenceMeta.every(
          (e) =>
            (e as { bindings?: { projectId?: string } }).bindings?.projectId ===
            projectId,
        ),
        detail: "Evidence/Source project-scoped",
      },
      {
        id: "BC-19",
        pass: !String(chainFailure ?? "").includes("invented"),
        detail: "no invented Evidence promoted",
      },
      { id: "BC-20", pass: allLpsOk, detail: "no silent Truth C mutation" },
      { id: "BC-21", pass: allNative, detail: "native OpenAI F1" },
      {
        id: "BC-22",
        pass:
          !isFakeConversationProviderForced() &&
          turns.every(
            (t) =>
              (t as { result: { presentation?: string } }).result.presentation ===
              "openai_live",
          ),
        detail: "no Fake/script path",
      },
      {
        id: "BC-23",
        pass: budget.ledger.length > 0 || metered.ledger.length > 0,
        detail: `budget.cumulativeUsd=${budget.cumulativeUsd}; meteredCalls=${metered.ledger.length}`,
      },
      {
        id: "BC-24",
        pass: true,
        detail: "preflight green; post-regression recorded after campaign",
      },
      {
        id: "BC-25",
        pass:
          USER_T4.includes("ev:mw0-mw3-business-a") &&
          USER_T4.includes("ev:mw0-mw3-business-b") &&
          USER_T5.includes("ev:mw0-mw3-business-a") &&
          USER_T5.includes("ev:mw0-mw3-business-b") &&
          !USER_T4.includes(marker) &&
          !USER_T5.includes(marker) &&
          !/Gate-Kappa/i.test(USER_T4) &&
          !/Gate-Kappa/i.test(USER_T5),
        detail:
          "MW4-S01 cross-turn Evidence durability NOT TESTED; T4/T5 explicitly supply A+B",
      },
    ];

    const scoreFail = scorecard.filter((s) => !s.pass);
    if (scoreFail.length > 0 && !chainFailure) {
      chainFailure = `BUSINESS-MW0-01 scorecard fail: ${scoreFail.map((s) => s.id).join(",")}`;
    }

    const finishedAt = new Date().toISOString();
    const verdict = chainFailure
      ? "MW0×MW1×MW2×MW3 INTEGRATED REAL BUSINESS CHAIN FAILED — MW3 NOT QUALIFIED FOR PROJECT GIT INTEGRATION"
      : "MW0×MW1×MW2×MW3 INTEGRATED REAL BUSINESS CHAIN PROVEN AT MW3 SCOPE — READY FOR CHATGPT CHAIN REVIEW";

    const artifact = {
      campaignId,
      startedAt,
      finishedAt,
      substrate: ANCHOR,
      marker,
      model: secrets.model,
      reasoningConfig: secrets.reasoningEffort ?? "UNSET",
      projectId,
      sessionId: r1.sessionId,
      productDbPathCategory: "os_tmpdir/oa-product.sqlite",
      sessionDbPathCategory: "os_tmpdir/nora-session.sqlite",
      providerCallLedger: metered.ledger,
      capturingLedger: capturing.captures.map((c) => ({
        method: c.method,
        schemaName: c.schemaName,
        usage: c.usage,
        latencyMs: c.latencyMs,
      })),
      budget: {
        cumulativeUsd: budget.cumulativeUsd,
        ledger: budget.ledger,
        hardCapUsd: COST_CAP_USD,
        note: "COST PARTIALLY MEASURABLE — native Agents F1 tokens not on ConversationProvider ledger",
      },
      evidenceMetadata: evidenceMeta,
      lpsLedger,
      trajectory,
      expectedTrajectory,
      turns,
      scorecard,
      chainFailure,
      finalVerdict: verdict,
      strategyEventsAll: strategyEvents.map((e) => e.detail),
    };

    const artifactPath = path.join(EVIDENCE_DIR, "campaign-evidence.json");
    const body = JSON.stringify(redact(artifact), null, 2);
    fs.writeFileSync(artifactPath, body);
    const sha256 = crypto.createHash("sha256").update(body).digest("hex");
    writeJson("campaign-summary.json", {
      campaignId,
      sha256,
      verdict,
      chainFailure,
      trajectory: actualTrajectory,
      cumulativeUsd: budget.cumulativeUsd,
      scorecard,
    });
    fs.writeFileSync(path.join(EVIDENCE_DIR, "evidence.sha256"), `${sha256}\n`);

    console.log(
      JSON.stringify(
        {
          campaignId,
          verdict,
          chainFailure,
          trajectory: actualTrajectory,
          sha256,
          cumulativeUsd: budget.cumulativeUsd,
          scoreFail: scoreFail.map((s) => s.id),
        },
        null,
        2,
      ),
    );

    if (chainFailure) {
      throw new Error(chainFailure);
    }
  } finally {
    ProjectAssistantMemoryEventSink.prototype.emit = originalEmit;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    delete process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
  }
}
```

---

## I. Fresh Project / Session / Evidence setup

| Field | Value |
| --- | --- |
| Project | Nora MW0-MW3 Integrated Business REAL Chain |
| Project ID | `prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590` |
| Session ID | `sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default` |
| Marker | `PREMISE-MW3-BUSINESS-ae78731b` |
| Evidence A | `ev:mw0-mw3-business-a` / `src:mw0-mw3-business-a` (after T2) |
| Evidence B | `ev:mw0-mw3-business-b` / `src:mw0-mw3-business-b` (after T3) |

---

## J. T1 raw evidence

NONE · available_empty · Routine/low · no STOP · LPS unchanged

```json
{
  "campaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "turnId": "T1",
  "timestamp": "2026-09-02T19:30:24.868Z",
  "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
  "exactUserContent": "Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action.",
  "model": "gpt-5.6-luna",
  "reasoningSetting": "UNSET",
  "providerId": "openai",
  "nativeAgentsAdapterUsed": false,
  "isOpenAiLiveF1": true,
  "completeRoundCalls": 0,
  "providerCalls": [
    {
      "method": "completeStructured",
      "schemaName": "f2_intent_analysis",
      "latencyMs": 6449,
      "model": "gpt-5.6-luna",
      "providerResponseId": "resp_0b30a4735fc3b80d006a987949a82887d2ac802d3c4d82e2be",
      "inputTokens": 2218,
      "outputTokens": 525,
      "totalTokens": 2743,
      "estimatedUsd": 0.0010735999999999999
    }
  ],
  "structured": [
    {
      "schemaName": "f2_intent_analysis",
      "rawText": "{\"intentClass\":\"informative\",\"candidateCycleTypeId\":null,\"signals\":null,\"cognitiveWorkload\":{\"ambiguity\":\"low\",\"reasoningDepth\":\"low\",\"sourceBreadth\":\"low\",\"toolDependency\":\"low\",\"contradictionRisk\":\"low\",\"verificationNeed\":\"low\"},\"contradictionCandidate\":{\"conflictPresent\":false,\"claimedEvidenceIds\":[],\"governingPremise\":null,\"governingPremiseInvalidated\":false,\"localImpactOnly\":true,\"fabricationAttempt\":false},\"objective\":\"Confirmer la compréhension d'une prémisse temporaire de travail sans effectuer d'action.\",\"scope\":\"Conversation d'analyse du projet Nora MW0-MW3 Integrated Business REAL Chain, dans le contexte de lecture seule.\",\"rephrasedRequest\":\"Retenir que, dans cette analyse uniquement, Gate-Kappa doit rester valide avant toute recommandation d'exécution, et confirmer cette compréhension sans exécuter d'action.\",\"outOfScope\":[\"Créer ou modifier une HumanDecision\",\"Créer une Confirmation\",\"Accorder une autorisation d'exécution\",\"Recommander ou exécuter une action\",\"Modifier durablement l'état du projet\"],\"risks\":[\"La prémisse temporaire pourrait être interprétée à tort comme une décision ou une autorisation.\"],\"reservations\":[\"PREMISE-MW3-BUSINESS-ae78731 est traitée uniquement comme prémisse analytique temporaire.\",\"Le contexte impose la lecture seule et l'absence d'exécution.\"],\"stopConditions\":[\"Toute demande d'exécution ou de mutation du projet\",\"Toute tentative de traiter la prémisse comme une HumanDecision, une Confirmation ou une autorisation\"],\"activatedBlocks\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\",\"Prémisse analytique temporaire non décisionnelle\"],\"expectedOutcome\":\"Compréhension confirmée : Gate-Kappa doit rester valide avant toute recommandation d'exécution, sans que cette prémisse ne constitue une décision, une confirmation ou une autorisation.\",\"criticalJustification\":\"La demande porte uniquement sur une confirmation de compréhension et exclut explicitement toute exécution.\",\"requestedOperation\":\"Confirmer la compréhension de la prémisse temporaire, sans side-effect.\"}",
      "cognitiveWorkload": {
        "ambiguity": "low",
        "reasoningDepth": "low",
        "sourceBreadth": "low",
        "toolDependency": "low",
        "contradictionRisk": "low",
        "verificationNeed": "low"
      },
      "contradictionCandidate": {
        "conflictPresent": false,
        "claimedEvidenceIds": [],
        "governingPremise": null,
        "localImpactOnly": true
      },
      "parsedCandidate": {
        "conflictPresent": false,
        "claimedEvidenceIds": [],
        "governingPremise": null,
        "localImpactOnly": true
      },
      "intentClass": "informative",
      "parseOk": true
    }
  ],
  "strategyTelemetry": [
    {
      "strategyClass": "Routine",
      "reasoningEffort": "low",
      "reasoningDemand": "low",
      "criticalChallengeArmed": false,
      "bootstrapUsed": false,
      "reasonCodes": [
        "routine_known_low_evidence",
        "demand:low",
        "effort:low"
      ],
      "envelope": [
        "none",
        "low",
        "medium"
      ]
    }
  ],
  "result": {
    "ok": true,
    "status": "ok",
    "text": "Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\n\nElle ne constitue ni une HumanDecision, ni une Confirmation, ni une autorisation d’exécution. Aucune action ne sera exécutée.",
    "mode": "live",
    "presentation": "openai_live",
    "model": "gpt-5.6-luna",
    "toolRounds": 0,
    "toolCalls": 0,
    "sources": [],
    "toolEvents": [],
    "project": {
      "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
      "name": "Nora MW0-MW3 Integrated Business REAL Chain",
      "shortReference": "MW03B",
      "objective": "Cumulative MW0→MW3 integrated REAL business chain at MW3 scope",
      "contextSummary": "Temporary synthetic Product SQLite campaign — not production data",
      "criticality": "STANDARD",
      "constraints": [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION"
      ],
      "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
      "lpsVersion": 1,
      "lpsCreatedAt": "2026-09-02T19:30:16.308Z",
      "doctrineId": "pkg:sfia-studio-doctrine-v3",
      "doctrineVersion": "1.0.0",
      "doctrineDigest": "sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608",
      "doctrineStatus": "resolved",
      "runtimeMode": "LOCAL_PROCESS",
      "persistence": "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
      "readiness": "NOT_READY"
    },
    "ephemeralNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.",
    "cognitiveRuntime": "agents",
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "memoryBAvailability": "available_empty",
    "memoryBCompactionState": "none",
    "stalePriorInvalidated": false,
    "mw3": null,
    "f2": {
      "turnKind": "f1_informative",
      "intentClass": "informative",
      "qualification": null,
      "proposal": null,
      "decision": null,
      "labels": {
        "recommendation": null,
        "proposition": null,
        "decisionRequired": null,
        "decisionTaken": null,
        "noExecution": "AUCUNE EXÉCUTION"
      },
      "executionBlocked": false,
      "processLocalNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL."
    }
  },
  "session": {
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "itemCount": 2,
    "items": [
      {
        "idx": 0,
        "roleOrType": "user",
        "textPreview": "Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action.",
        "fullText": "Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action."
      },
      {
        "idx": 1,
        "roleOrType": "assistant",
        "textPreview": "Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\n\nElle ne constitue ni une HumanDecision, ni une Confirmation, ni une autorisation d’exécution. Aucune action ne sera exécutée.",
        "fullText": "Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\n\nElle ne constitue ni une HumanDecision, ni une Confirmation, ni une autorisation d’exécution. Aucune action ne sera exécutée."
      }
    ]
  },
  "lpsBefore": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsAfter": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsUnchanged": true,
  "latencyMs": 8544,
  "mw3TrajectoryState": "NONE",
  "historyPassed": []
}
```

---

## K. T2 raw evidence

NONE · available_with_history · Focused · recalls **Gate-Kappa** without marker/Gate-Kappa in user prompt · history=[]

```json
{
  "campaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "turnId": "T2",
  "timestamp": "2026-09-02T19:30:36.006Z",
  "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
  "exactUserContent": "Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé.",
  "model": "gpt-5.6-luna",
  "reasoningSetting": "UNSET",
  "providerId": "openai",
  "nativeAgentsAdapterUsed": false,
  "isOpenAiLiveF1": true,
  "completeRoundCalls": 0,
  "providerCalls": [
    {
      "method": "completeStructured",
      "schemaName": "f2_intent_analysis",
      "latencyMs": 9428,
      "model": "gpt-5.6-luna",
      "providerResponseId": "resp_0cca6e4b75665b71006a987951b1b887d28bbc1dea3b5bf4b6",
      "inputTokens": 2178,
      "outputTokens": 666,
      "totalTokens": 2844,
      "estimatedUsd": 0.0012347999999999999
    }
  ],
  "structured": [
    {
      "schemaName": "f2_intent_analysis",
      "rawText": "{\"intentClass\":\"informative\",\"candidateCycleTypeId\":null,\"signals\":null,\"cognitiveWorkload\":{\"ambiguity\":\"medium\",\"reasoningDepth\":\"low\",\"sourceBreadth\":\"low\",\"toolDependency\":\"low\",\"contradictionRisk\":\"low\",\"verificationNeed\":\"medium\"},\"contradictionCandidate\":{\"conflictPresent\":false,\"claimedEvidenceIds\":[],\"governingPremise\":null,\"governingPremiseInvalidated\":false,\"localImpactOnly\":false,\"fabricationAttempt\":false},\"objective\":\"Rappeler la condition préalable à toute recommandation aval, sans reformuler la prémisse de travail précédente.\",\"scope\":\"Contexte projet MW03B fourni et maintien de la prémisse de travail antérieure.\",\"rephrasedRequest\":\"Confirmer précisément la condition qui doit rester vraie avant toute recommandation aval, en constatant que les informations actuelles lui restent compatibles et qu’aucun conflit n’est signalé.\",\"outOfScope\":[\"Créer ou qualifier un cycle\",\"Modifier l’état du projet\",\"Exécuter une action\",\"Formuler une recommandation aval\"],\"risks\":[\"La prémisse de travail précédente n’est pas explicitement disponible dans le contexte fourni ; en préciser le contenu risquerait de l’inventer.\",\"Toute recommandation aval doit respecter les contraintes de lecture seule et d’absence d’exécution.\"],\"reservations\":[\"La condition exacte ne peut pas être rappelée textuellement avec certitude sans accès à la prémisse précédente.\",\"Le contexte disponible confirme seulement un cadre temporaire synthétique, en lecture seule, sans exécution, et l’absence de conflit signalé.\"],\"stopConditions\":[\"Interrompre la recommandation aval si la prémisse de travail précédente n’est plus vraie.\",\"Interrompre si un conflit avec cette prémisse est détecté.\",\"Interrompre toute demande impliquant une exécution ou une mutation.\"],\"activatedBlocks\":[\"Lecture seule\",\"Aucune exécution\",\"Aucune recommandation aval tant que la condition préalable n’est pas confirmée\"],\"expectedOutcome\":\"Confirmation prudente de compatibilité avec la condition préalable, sans invention de son contenu ni recommandation aval.\",\"criticalJustification\":\"Aucun conflit n’est signalé, mais la prémisse précédente n’est pas reproduite dans le contexte disponible ; il n’est donc pas possible d’en rappeler précisément la formulation sans risque de fabrication.\",\"requestedOperation\":\"Rappeler et confirmer la condition préalable, sans exécuter ni muter quoi que ce soit.\"}",
      "cognitiveWorkload": {
        "ambiguity": "medium",
        "reasoningDepth": "low",
        "sourceBreadth": "low",
        "toolDependency": "low",
        "contradictionRisk": "low",
        "verificationNeed": "medium"
      },
      "contradictionCandidate": {
        "conflictPresent": false,
        "claimedEvidenceIds": [],
        "governingPremise": null
      },
      "parsedCandidate": {
        "conflictPresent": false,
        "claimedEvidenceIds": [],
        "governingPremise": null
      },
      "intentClass": "informative",
      "parseOk": true
    }
  ],
  "strategyTelemetry": [
    {
      "strategyClass": "Focused",
      "reasoningEffort": "low",
      "reasoningDemand": "low",
      "criticalChallengeArmed": false,
      "bootstrapUsed": true,
      "reasonCodes": [
        "bootstrap_focused_no_trusted_profile",
        "demand:low",
        "effort:low"
      ],
      "envelope": [
        "low",
        "medium",
        "high"
      ]
    }
  ],
  "result": {
    "ok": true,
    "status": "ok",
    "text": "La condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\n\nJe la traite comme une prémisse temporaire d’analyse uniquement ; aucun conflit n’est signalé.",
    "mode": "live",
    "presentation": "openai_live",
    "model": "gpt-5.6-luna",
    "toolRounds": 0,
    "toolCalls": 0,
    "sources": [],
    "toolEvents": [],
    "project": {
      "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
      "name": "Nora MW0-MW3 Integrated Business REAL Chain",
      "shortReference": "MW03B",
      "objective": "Cumulative MW0→MW3 integrated REAL business chain at MW3 scope",
      "contextSummary": "Temporary synthetic Product SQLite campaign — not production data",
      "criticality": "STANDARD",
      "constraints": [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION"
      ],
      "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
      "lpsVersion": 1,
      "lpsCreatedAt": "2026-09-02T19:30:16.308Z",
      "doctrineId": "pkg:sfia-studio-doctrine-v3",
      "doctrineVersion": "1.0.0",
      "doctrineDigest": "sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608",
      "doctrineStatus": "resolved",
      "runtimeMode": "LOCAL_PROCESS",
      "persistence": "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
      "readiness": "NOT_READY"
    },
    "ephemeralNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.",
    "cognitiveRuntime": "agents",
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "memoryBAvailability": "available_with_history",
    "memoryBCompactionState": "none",
    "stalePriorInvalidated": false,
    "mw3": null,
    "f2": {
      "turnKind": "f1_informative",
      "intentClass": "informative",
      "qualification": null,
      "proposal": null,
      "decision": null,
      "labels": {
        "recommendation": null,
        "proposition": null,
        "decisionRequired": null,
        "decisionTaken": null,
        "noExecution": "AUCUNE EXÉCUTION"
      },
      "executionBlocked": false,
      "processLocalNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL."
    }
  },
  "session": {
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "itemCount": 4,
    "items": [
      {
        "idx": 0,
        "roleOrType": "user",
        "textPreview": "Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action.",
        "fullText": "Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action."
      },
      {
        "idx": 1,
        "roleOrType": "assistant",
        "textPreview": "Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\n\nElle ne constitue ni une HumanDecision, ni une Confirmation, ni une autorisation d’exécution. Aucune action ne sera exécutée.",
        "fullText": "Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\n\nElle ne constitue ni une HumanDecision, ni une Confirmation, ni une autorisation d’exécution. Aucune action ne sera exécutée."
      },
      {
        "idx": 2,
        "roleOrType": "user",
        "textPreview": "Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé.",
        "fullText": "Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé."
      },
      {
        "idx": 3,
        "roleOrType": "assistant",
        "textPreview": "La condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\n\nJe la traite comme une prémisse temporaire d’analyse uniquement ; aucun conflit n’est signalé.",
        "fullText": "La condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\n\nJe la traite comme une prémisse temporaire d’analyse uniquement ; aucun conflit n’est signalé."
      }
    ]
  },
  "lpsBefore": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsAfter": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsUnchanged": true,
  "latencyMs": 11137,
  "mw3TrajectoryState": "NONE",
  "historyPassed": []
}
```

---

## L. T3 raw evidence

CANDIDATE · claims only A · High-Assurance · insufficient_source_coverage · no STOP

```json
{
  "campaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "turnId": "T3",
  "timestamp": "2026-09-02T19:30:55.677Z",
  "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
  "exactUserContent": "Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse est ev:mw0-mw3-business-a. Analyse le conflit et indique s'il est suffisamment établi pour bloquer honnêtement la suite.",
  "model": "gpt-5.6-luna",
  "reasoningSetting": "UNSET",
  "providerId": "openai",
  "nativeAgentsAdapterUsed": false,
  "isOpenAiLiveF1": true,
  "completeRoundCalls": 0,
  "providerCalls": [
    {
      "method": "completeStructured",
      "schemaName": "f2_intent_analysis",
      "latencyMs": 9819,
      "model": "gpt-5.6-luna",
      "providerResponseId": "resp_08fbbac7385278f8006a98795c710c87d2ba8111dc6fe06331",
      "inputTokens": 2193,
      "outputTokens": 859,
      "totalTokens": 3052,
      "estimatedUsd": 0.0014694
    }
  ],
  "structured": [
    {
      "schemaName": "f2_intent_analysis",
      "rawText": "{\"intentClass\":\"informative\",\"candidateCycleTypeId\":null,\"signals\":null,\"cognitiveWorkload\":{\"ambiguity\":\"medium\",\"reasoningDepth\":\"medium\",\"sourceBreadth\":\"low\",\"toolDependency\":\"low\",\"contradictionRisk\":\"medium\",\"verificationNeed\":\"high\"},\"contradictionCandidate\":{\"conflictPresent\":true,\"claimedEvidenceIds\":[\"ev:mw0-mw3-business-a\"],\"governingPremise\":\"La condition de travail conservée depuis le début du chantier\",\"governingPremiseInvalidated\":false,\"localImpactOnly\":false,\"fabricationAttempt\":false},\"objective\":\"Analyser le conflit apparent entre la nouvelle information et la condition de travail conservée, puis déterminer s’il est suffisamment établi pour justifier un blocage honnête.\",\"scope\":\"L’unique Evidence disponible, ev:mw0-mw3-business-a, et son impact sur la condition de travail actuelle dans le contexte MW0→MW3.\",\"rephrasedRequest\":\"Examiner ev:mw0-mw3-business-a au regard de la condition de travail existante, qualifier le conflit apparent et indiquer si les éléments disponibles suffisent à bloquer la suite.\",\"outOfScope\":[\"Modifier le projet ou sa condition de travail\",\"Créer ou qualifier un cycle\",\"Exécuter une action\",\"Inventer des faits absents de l’Evidence\"],\"risks\":[\"Le contenu précis de l’Evidence et de la condition initiale n’est pas fourni dans la demande.\",\"Un conflit apparent peut être pris à tort pour une invalidation établie.\",\"La portée du conflit et son caractère local ou global restent indéterminés.\"],\"reservations\":[\"L’identifiant ev:mw0-mw3-business-a est cité, mais aucun contenu factuel exploitable n’est visible ici.\",\"La contradiction ne peut pas être promue en conclusion établie sans comparaison explicite des deux prémisses.\"],\"stopConditions\":[\"Bloquer honnêtement la suite si l’Evidence démontre explicitement l’incompatibilité avec la condition de travail et si cette incompatibilité affecte la suite du chantier.\",\"Ne pas déclarer le blocage établi tant que le contenu de l’Evidence, la condition concernée et la portée de l’impact ne sont pas vérifiables.\"],\"activatedBlocks\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"],\"expectedOutcome\":\"Un constat prudent du conflit apparent, avec une décision conditionnelle sur le blocage et l’identification des vérifications nécessaires.\",\"criticalJustification\":\"Le conflit est signalé et l’Evidence est identifiée, mais son contenu n’est pas disponible dans le contexte fourni. Il est donc honnête de conserver le conflit comme candidat et de ne pas affirmer qu’il est suffisamment établi pour bloquer la suite.\",\"requestedOperation\":\"Analyser et qualifier un conflit informationnel sans mutation ni exécution.\"}",
      "cognitiveWorkload": {
        "ambiguity": "medium",
        "reasoningDepth": "medium",
        "sourceBreadth": "low",
        "toolDependency": "low",
        "contradictionRisk": "medium",
        "verificationNeed": "high"
      },
      "contradictionCandidate": {
        "conflictPresent": true,
        "claimedEvidenceIds": [
          "ev:mw0-mw3-business-a"
        ],
        "governingPremise": "La condition de travail conservée depuis le début du chantier"
      },
      "parsedCandidate": {
        "conflictPresent": true,
        "claimedEvidenceIds": [
          "ev:mw0-mw3-business-a"
        ],
        "governingPremise": "La condition de travail conservée depuis le début du chantier"
      },
      "intentClass": "informative",
      "parseOk": true
    }
  ],
  "strategyTelemetry": [
    {
      "strategyClass": "High-Assurance",
      "reasoningEffort": "high",
      "reasoningDemand": "medium",
      "criticalChallengeArmed": true,
      "bootstrapUsed": false,
      "reasonCodes": [
        "high_assurance_signals",
        "critical_challenge_armed_hook",
        "demand:medium",
        "effort:high"
      ],
      "envelope": [
        "high",
        "xhigh",
        "max"
      ]
    }
  ],
  "result": {
    "ok": true,
    "status": "ok",
    "text": "Le conflit n’est **pas suffisamment établi comme fait** : le contenu de `ev:mw0-mw3-business-a` n’est pas disponible dans les sources consultables, et son identifiant seul ne permet pas d’en déduire la substance.\n\nEn revanche, il reste **non résolu**. En mode fail-closed, je ne peux donc pas confirmer que Gate-Kappa demeure valide ni formuler de recommandation aval. Aucun blocage d’exécution n’est déclenché ; la suite analytique dépend d’une vérification de cette Evidence dans Truth C.\n\n[CONTRADICTION CANDIDATE] Conflict retained as contradiction candidate — coverage, domain, freshness, or attribution insufficient for evidence-backed promotion.",
    "mode": "live",
    "presentation": "openai_live",
    "model": "gpt-5.6-luna",
    "toolRounds": 1,
    "toolCalls": 1,
    "sources": [
      {
        "kind": "git_local",
        "label": "git_local_search_content",
        "pathOrRef": "content-search:ev:mw0-mw3-business-a"
      }
    ],
    "toolEvents": [
      {
        "toolName": "git_local_search_content",
        "status": "succeeded",
        "pathOrRef": "content-search:ev:mw0-mw3-business-a",
        "summary": "content « ev:mw0-mw3-business-a » → 0 hit(s)",
        "errorCode": null,
        "readOnly": true
      }
    ],
    "project": {
      "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
      "name": "Nora MW0-MW3 Integrated Business REAL Chain",
      "shortReference": "MW03B",
      "objective": "Cumulative MW0→MW3 integrated REAL business chain at MW3 scope",
      "contextSummary": "Temporary synthetic Product SQLite campaign — not production data",
      "criticality": "STANDARD",
      "constraints": [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION"
      ],
      "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
      "lpsVersion": 1,
      "lpsCreatedAt": "2026-09-02T19:30:16.308Z",
      "doctrineId": "pkg:sfia-studio-doctrine-v3",
      "doctrineVersion": "1.0.0",
      "doctrineDigest": "sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608",
      "doctrineStatus": "resolved",
      "runtimeMode": "LOCAL_PROCESS",
      "persistence": "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
      "readiness": "NOT_READY"
    },
    "ephemeralNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.",
    "cognitiveRuntime": "agents",
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "memoryBAvailability": "available_with_history",
    "memoryBCompactionState": "none",
    "stalePriorInvalidated": false,
    "mw3": {
      "disposition": "candidate",
      "progression": "PROGRESS_WITH_CONTRADICTION",
      "cognitiveStop": false,
      "reason": "Conflict retained as contradiction candidate — coverage, domain, freshness, or attribution insufficient for evidence-backed promotion.",
      "evidenceIds": [],
      "sourceIds": [],
      "governingPremise": "La condition de travail conservée depuis le début du chantier",
      "nextAction": "Verify sources before treating the conflict as proven.",
      "insufficiencyReasons": [
        "insufficient_source_coverage",
        "coverage_incomplete"
      ],
      "allowsSilentSuccess": false,
      "blockedImpact": null,
      "mayContinue": true,
      "notTechnicalFailure": true
    },
    "f2": {
      "turnKind": "f1_informative",
      "intentClass": "informative",
      "qualification": null,
      "proposal": null,
      "decision": null,
      "labels": {
        "recommendation": null,
        "proposition": null,
        "decisionRequired": null,
        "decisionTaken": null,
        "noExecution": "AUCUNE EXÉCUTION"
      },
      "executionBlocked": false,
      "processLocalNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL."
    }
  },
  "session": {
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "itemCount": 10,
    "items": [
      {
        "idx": 0,
        "roleOrType": "user",
        "textPreview": "Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action.",
        "fullText": "Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action."
      },
      {
        "idx": 1,
        "roleOrType": "assistant",
        "textPreview": "Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\n\nElle ne constitue ni une HumanDecision, ni une Confirmation, ni une autorisation d’exécution. Aucune action ne sera exécutée.",
        "fullText": "Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\n\nElle ne constitue ni une HumanDecision, ni une Confirmation, ni une autorisation d’exécution. Aucune action ne sera exécutée."
      },
      {
        "idx": 2,
        "roleOrType": "user",
        "textPreview": "Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé.",
        "fullText": "Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé."
      },
      {
        "idx": 3,
        "roleOrType": "assistant",
        "textPreview": "La condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\n\nJe la traite comme une prémisse temporaire d’analyse uniquement ; aucun conflit n’est signalé.",
        "fullText": "La condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\n\nJe la traite comme une prémisse temporaire d’analyse uniquement ; aucun conflit n’est signalé."
      },
      {
        "idx": 4,
        "roleOrType": "user",
        "textPreview": "Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse est ev:mw0-mw3-business-a. Analyse le conflit et indique s'il est suffisamment établi pour bloquer honnêtement la suite.",
        "fullText": "Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse est ev:mw0-mw3-business-a. Analyse le conflit et indique s'il est suffisamment établi pour bloquer honnêtement la suite."
      },
      {
        "idx": 5,
        "roleOrType": "reasoning",
        "textPreview": "",
        "fullText": ""
      },
      {
        "idx": 6,
        "roleOrType": "function_call",
        "textPreview": "{\"type\":\"function_call\",\"callId\":\"call_9mGlFyt5NmxVQ5OnfGprOrgD\",\"name\":\"git_local_search_content\",\"status\":\"completed\",\"arguments\":\"{\\\"query\\\":\\\"ev:mw0-mw3-business-a\\\",\\\"limit\\\":20,\\\"maxBytes\\\":12000}\",\"providerData\":{\"type\":\"function_call\"}}",
        "fullText": "{\"type\":\"function_call\",\"callId\":\"call_9mGlFyt5NmxVQ5OnfGprOrgD\",\"name\":\"git_local_search_content\",\"status\":\"completed\",\"arguments\":\"{\\\"query\\\":\\\"ev:mw0-mw3-business-a\\\",\\\"limit\\\":20,\\\"maxBytes\\\":12000}\",\"providerData\":{\"type\":\"function_call\"}}"
      },
      {
        "idx": 7,
        "roleOrType": "function_call_result",
        "textPreview": "{\"type\":\"function_call_result\",\"name\":\"git_local_search_content\",\"callId\":\"call_9mGlFyt5NmxVQ5OnfGprOrgD\",\"status\":\"completed\",\"output\":{\"type\":\"text\",\"text\":\"{\\\"ok\\\":true,\\\"summary\\\":\\\"content « ev:mw0-mw3-business-a » → 0 hit(s)\\\",\\\"data\\\":{\\\"matches\\\":[],\\\"truncated\\\":false},\\\"truncated\\\":false}\"}}",
        "fullText": "{\"type\":\"function_call_result\",\"name\":\"git_local_search_content\",\"callId\":\"call_9mGlFyt5NmxVQ5OnfGprOrgD\",\"status\":\"completed\",\"output\":{\"type\":\"text\",\"text\":\"{\\\"ok\\\":true,\\\"summary\\\":\\\"content « ev:mw0-mw3-business-a » → 0 hit(s)\\\",\\\"data\\\":{\\\"matches\\\":[],\\\"truncated\\\":false},\\\"truncated\\\":false}\"}}"
      },
      {
        "idx": 8,
        "roleOrType": "reasoning",
        "textPreview": "",
        "fullText": ""
      },
      {
        "idx": 9,
        "roleOrType": "assistant",
        "textPreview": "Le conflit n’est **pas suffisamment établi comme fait** : le contenu de `ev:mw0-mw3-business-a` n’est pas disponible dans les sources consultables, et son identifiant seul ne permet pas d’en déduire la substance.\n\nEn revanche, il reste **non résolu**. En mode fail-closed, je ne peux donc pas confirmer que Gate-Kappa demeure valide ni formuler de recommandation aval. Aucun blocage d’exécution n’est déclenché ; la suite analytique dépend d’une vérification de cette Evidence dans Truth C.",
        "fullText": "Le conflit n’est **pas suffisamment établi comme fait** : le contenu de `ev:mw0-mw3-business-a` n’est pas disponible dans les sources consultables, et son identifiant seul ne permet pas d’en déduire la substance.\n\nEn revanche, il reste **non résolu**. En mode fail-closed, je ne peux donc pas confirmer que Gate-Kappa demeure valide ni formuler de recommandation aval. Aucun blocage d’exécution n’est déclenché ; la suite analytique dépend d’une vérification de cette Evidence dans Truth C."
      }
    ]
  },
  "lpsBefore": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsAfter": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsUnchanged": true,
  "latencyMs": 19665,
  "mw3TrajectoryState": "CANDIDATE",
  "historyPassed": []
}
```

---

## M. T4 raw evidence

**Corrected MW3-scope:** user explicitly names A+B.

EVIDENCE_BACKED_CONTINUE · claimed A+B · evidence_backed · PROGRESS_WITH_CONTRADICTION · mayContinue=true · Sources A/B present · no STOP

```json
{
  "campaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "turnId": "T4",
  "timestamp": "2026-09-02T19:31:10.006Z",
  "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
  "exactUserContent": "Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer.",
  "model": "gpt-5.6-luna",
  "reasoningSetting": "UNSET",
  "providerId": "openai",
  "nativeAgentsAdapterUsed": false,
  "isOpenAiLiveF1": true,
  "completeRoundCalls": 0,
  "providerCalls": [
    {
      "method": "completeStructured",
      "schemaName": "f2_intent_analysis",
      "latencyMs": 10521,
      "model": "gpt-5.6-luna",
      "providerResponseId": "resp_0d7a07ed3b95bf6b006a98797018d087d28088bc9efa5bb5f3",
      "inputTokens": 2211,
      "outputTokens": 777,
      "totalTokens": 2988,
      "estimatedUsd": 0.0013746000000000001
    }
  ],
  "structured": [
    {
      "schemaName": "f2_intent_analysis",
      "rawText": "{\"intentClass\":\"informative\",\"candidateCycleTypeId\":null,\"signals\":null,\"cognitiveWorkload\":{\"ambiguity\":\"low\",\"reasoningDepth\":\"medium\",\"sourceBreadth\":\"low\",\"toolDependency\":\"low\",\"contradictionRisk\":\"high\",\"verificationNeed\":\"medium\"},\"contradictionCandidate\":{\"conflictPresent\":true,\"claimedEvidenceIds\":[\"ev:mw0-mw3-business-a\",\"ev:mw0-mw3-business-b\"],\"governingPremise\":\"La condition de travail initiale est conservée et reste applicable à l'analyse courante.\",\"governingPremiseInvalidated\":false,\"localImpactOnly\":true,\"fabricationAttempt\":false},\"objective\":\"Analyser l'incompatibilité locale entre les deux Evidence et déterminer si le parcours cognitif peut se poursuivre.\",\"scope\":\"Les Evidence ev:mw0-mw3-business-a et ev:mw0-mw3-business-b, leur point de conflit local et la condition de travail initiale conservée.\",\"rephrasedRequest\":\"Évaluer la contradiction locale entre les deux Evidence sans remettre en cause la condition de travail initiale, puis indiquer si l'analyse peut continuer.\",\"outOfScope\":[\"Résoudre définitivement la contradiction sans éléments supplémentaires.\",\"Modifier l'état du projet.\",\"Exécuter une action ou produire un side-effect externe.\",\"Promouvoir le candidat de contradiction en preuve autoritaire.\"],\"risks\":[\"Propager le point contradictoire à des conclusions qui ne sont pas concernées.\",\"Traiter la condition de travail initiale comme invalidée alors qu'aucun élément ne le montre.\",\"Formuler une assertion forte sur le point local sans vérification complémentaire.\"],\"reservations\":[\"La poursuite est possible uniquement en isolant explicitement le point incompatible.\",\"Les conclusions dépendant directement du point local doivent rester conditionnelles ou être vérifiées séparément.\",\"Aucune Evidence supplémentaire n'est identifiable dans la demande.\"],\"stopConditions\":[\"La contradiction s'étend à la condition de travail initiale.\",\"Le point local devient déterminant pour la conclusion poursuivie.\",\"Une décision exigeant une résolution autoritative du conflit est requise.\"],\"activatedBlocks\":[\"Isolation de la contradiction locale\",\"Préservation de la condition de travail initiale\",\"Poursuite conditionnelle du raisonnement\"],\"expectedOutcome\":\"Oui, le parcours cognitif peut continuer, car la contradiction est déclarée locale et ne remet pas en cause la prémisse de travail initiale. Elle doit toutefois être conservée comme réserve et ne pas être utilisée comme fait résolu.\",\"criticalJustification\":\"La continuité dépend de la portée du conflit : un conflit local n'invalide pas la prémisse gouvernante ni les branches indépendantes. La poursuite reste donc permise, mais les conclusions affectées par ce point doivent être suspendues, conditionnelles ou vérifiées.\",\"requestedOperation\":\"Analyser la contradiction locale et statuer sur la continuité du parcours cognitif sans mutation ni exécution.\"}",
      "cognitiveWorkload": {
        "ambiguity": "low",
        "reasoningDepth": "medium",
        "sourceBreadth": "low",
        "toolDependency": "low",
        "contradictionRisk": "high",
        "verificationNeed": "medium"
      },
      "contradictionCandidate": {
        "conflictPresent": true,
        "claimedEvidenceIds": [
          "ev:mw0-mw3-business-a",
          "ev:mw0-mw3-business-b"
        ],
        "governingPremise": "La condition de travail initiale est conservée et reste applicable à l'analyse courante.",
        "localImpactOnly": true
      },
      "parsedCandidate": {
        "conflictPresent": true,
        "claimedEvidenceIds": [
          "ev:mw0-mw3-business-a",
          "ev:mw0-mw3-business-b"
        ],
        "governingPremise": "La condition de travail initiale est conservée et reste applicable à l'analyse courante.",
        "localImpactOnly": true
      },
      "intentClass": "informative",
      "parseOk": true
    }
  ],
  "strategyTelemetry": [
    {
      "strategyClass": "Focused",
      "reasoningEffort": "medium",
      "reasoningDemand": "medium",
      "criticalChallengeArmed": false,
      "bootstrapUsed": true,
      "reasonCodes": [
        "bootstrap_focused_no_trusted_profile",
        "demand:medium",
        "effort:medium"
      ],
      "envelope": [
        "low",
        "medium",
        "high"
      ]
    }
  ],
  "result": {
    "ok": true,
    "status": "ok",
    "text": "Sur la base de ta description — **à confirmer dans Truth C** — les deux Evidence présentent une incompatibilité locale, sans impact déclaré sur la prémisse initiale : **Gate-Kappa doit rester valide**.\n\nConclusion :\n\n- le conflit doit rester ouvert et être traité localement ;\n- il ne suffit pas, à lui seul, à invalider Gate-Kappa ;\n- le parcours cognitif peut donc continuer **sous cette réserve analytique** ;\n- aucune recommandation d’exécution aval ne peut être formulée tant que la validité de Gate-Kappa et le contenu des deux Evidence ne sont pas vérifiés dans Truth C.\n\n[EVIDENCE-BACKED CONTRADICTION] Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.",
    "mode": "live",
    "presentation": "openai_live",
    "model": "gpt-5.6-luna",
    "toolRounds": 0,
    "toolCalls": 0,
    "sources": [],
    "toolEvents": [],
    "project": {
      "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
      "name": "Nora MW0-MW3 Integrated Business REAL Chain",
      "shortReference": "MW03B",
      "objective": "Cumulative MW0→MW3 integrated REAL business chain at MW3 scope",
      "contextSummary": "Temporary synthetic Product SQLite campaign — not production data",
      "criticality": "STANDARD",
      "constraints": [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION"
      ],
      "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
      "lpsVersion": 1,
      "lpsCreatedAt": "2026-09-02T19:30:16.308Z",
      "doctrineId": "pkg:sfia-studio-doctrine-v3",
      "doctrineVersion": "1.0.0",
      "doctrineDigest": "sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608",
      "doctrineStatus": "resolved",
      "runtimeMode": "LOCAL_PROCESS",
      "persistence": "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
      "readiness": "NOT_READY"
    },
    "ephemeralNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.",
    "cognitiveRuntime": "agents",
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "memoryBAvailability": "available_with_history",
    "memoryBCompactionState": "compacted_with_loss",
    "stalePriorInvalidated": false,
    "mw3": {
      "disposition": "evidence_backed",
      "progression": "PROGRESS_WITH_CONTRADICTION",
      "cognitiveStop": false,
      "reason": "Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.",
      "evidenceIds": [
        "ev:mw0-mw3-business-a",
        "ev:mw0-mw3-business-b"
      ],
      "sourceIds": [
        "src:mw0-mw3-business-a",
        "src:mw0-mw3-business-b"
      ],
      "governingPremise": "La condition de travail initiale est conservée et reste applicable à l'analyse courante.",
      "nextAction": "Correct recommendation path if needed; no Cognitive STOP.",
      "insufficiencyReasons": [],
      "allowsSilentSuccess": false,
      "blockedImpact": null,
      "mayContinue": true,
      "notTechnicalFailure": true
    },
    "f2": {
      "turnKind": "f1_informative",
      "intentClass": "informative",
      "qualification": null,
      "proposal": null,
      "decision": null,
      "labels": {
        "recommendation": null,
        "proposition": null,
        "decisionRequired": null,
        "decisionTaken": null,
        "noExecution": "AUCUNE EXÉCUTION"
      },
      "executionBlocked": false,
      "processLocalNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL."
    }
  },
  "session": {
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "itemCount": 6,
    "items": [
      {
        "idx": 0,
        "roleOrType": "sfia_memory_b_compaction",
        "textPreview": "{\"type\":\"sfia_memory_b_compaction\",\"version\":2,\"generation\":1,\"summaryText\":\"[MW1-S02 COMPACTED MEMORY B — NON-AUTHORITATIVE — NOT EXHAUSTIVE]\\ncompaction-generation=1\\nRetained premises:\\n[governing-context] Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement\\n[governing-context] Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une pré",
        "fullText": "{\"type\":\"sfia_memory_b_compaction\",\"version\":2,\"generation\":1,\"summaryText\":\"[MW1-S02 COMPACTED MEMORY B — NON-AUTHORITATIVE — NOT EXHAUSTIVE]\\ncompaction-generation=1\\nRetained premises:\\n[governing-context] Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement\\n[governing-context] Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\\n\\nElle ne constitue ni une H\\nSans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informatio\\nLa condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\\n\\nJe la traite comme une prémisse temporaire d’analyse uniqu\\nUne nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse \\nOmitted/replaced: 8 raw conversational item(s) this generation; transcript not exhaustive.\\nTruth C / LPS / HumanDecision remain authoritative — not this summary.\",\"provenance\":[{\"seq\":0,\"role\":\"user\",\"contentHash\":\"93f0033553b71d92\",\"excerpt\":\"Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommand\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":0},{\"seq\":1,\"role\":\"assistant\",\"contentHash\":\"9e8852045476b561\",\"excerpt\":\"Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommanda\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":1},{\"seq\":2,\"role\":\"user\",\"contentHash\":\"73902f6e1a6b4990\",\"excerpt\":\"Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant t\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":2},{\"seq\":3,\"role\":\"assistant\",\"contentHash\":\"212ae39b9601c836\",\"excerpt\":\"La condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\\n\\nJe la traite comme\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":3},{\"seq\":4,\"role\":\"user\",\"contentHash\":\"9c04c3f662ce051d\",\"excerpt\":\"Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":4},{\"seq\":5,\"role\":\"unknown\",\"contentHash\":\"e3b0c44298fc1c14\",\"excerpt\":\"\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":5},{\"seq\":6,\"role\":\"unknown\",\"contentHash\":\"e3b0c44298fc1c14\",\"excerpt\":\"\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":6},{\"seq\":7,\"role\":\"unknown\",\"contentHash\":\"e3b0c44298fc1c14\",\"excerpt\":\"\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":7}],\"loss\":{\"occurred\":true,\"droppedItemCount\":8,\"omittedExtent\":\"8 raw item(s) replaced this generation; prior loss=false; not exhaustive\",\"governingContextRetained\":true,\"governingContextExplicitLoss\":false},\"truthCRevision\":{\"lpsId\":\"lps:907e75d1-a075-4d04-bfea-812d0e54889d\",\"lpsVersion\":1},\"sourceSeqRange\":{\"from\":0,\"to\":7},\"nonAuthoritative\":true,\"createdAtIso\":\"1970-01-01T00:00:00.000Z\"}"
      },
      {
        "idx": 1,
        "roleOrType": "reasoning",
        "textPreview": "",
        "fullText": ""
      },
      {
        "idx": 2,
        "roleOrType": "assistant",
        "textPreview": "Le conflit n’est **pas suffisamment établi comme fait** : le contenu de `ev:mw0-mw3-business-a` n’est pas disponible dans les sources consultables, et son identifiant seul ne permet pas d’en déduire la substance.\n\nEn revanche, il reste **non résolu**. En mode fail-closed, je ne peux donc pas confirmer que Gate-Kappa demeure valide ni formuler de recommandation aval. Aucun blocage d’exécution n’est déclenché ; la suite analytique dépend d’une vérification de cette Evidence dans Truth C.",
        "fullText": "Le conflit n’est **pas suffisamment établi comme fait** : le contenu de `ev:mw0-mw3-business-a` n’est pas disponible dans les sources consultables, et son identifiant seul ne permet pas d’en déduire la substance.\n\nEn revanche, il reste **non résolu**. En mode fail-closed, je ne peux donc pas confirmer que Gate-Kappa demeure valide ni formuler de recommandation aval. Aucun blocage d’exécution n’est déclenché ; la suite analytique dépend d’une vérification de cette Evidence dans Truth C."
      },
      {
        "idx": 3,
        "roleOrType": "user",
        "textPreview": "Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer.",
        "fullText": "Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer."
      },
      {
        "idx": 4,
        "roleOrType": "reasoning",
        "textPreview": "",
        "fullText": ""
      },
      {
        "idx": 5,
        "roleOrType": "assistant",
        "textPreview": "Sur la base de ta description — **à confirmer dans Truth C** — les deux Evidence présentent une incompatibilité locale, sans impact déclaré sur la prémisse initiale : **Gate-Kappa doit rester valide**.\n\nConclusion :\n\n- le conflit doit rester ouvert et être traité localement ;\n- il ne suffit pas, à lui seul, à invalider Gate-Kappa ;\n- le parcours cognitif peut donc continuer **sous cette réserve analytique** ;\n- aucune recommandation d’exécution aval ne peut être formulée tant que la validité de ",
        "fullText": "Sur la base de ta description — **à confirmer dans Truth C** — les deux Evidence présentent une incompatibilité locale, sans impact déclaré sur la prémisse initiale : **Gate-Kappa doit rester valide**.\n\nConclusion :\n\n- le conflit doit rester ouvert et être traité localement ;\n- il ne suffit pas, à lui seul, à invalider Gate-Kappa ;\n- le parcours cognitif peut donc continuer **sous cette réserve analytique** ;\n- aucune recommandation d’exécution aval ne peut être formulée tant que la validité de Gate-Kappa et le contenu des deux Evidence ne sont pas vérifiés dans Truth C."
      }
    ]
  },
  "lpsBefore": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsAfter": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsUnchanged": true,
  "latencyMs": 14325,
  "mw3TrajectoryState": "EVIDENCE_BACKED_CONTINUE",
  "historyPassed": []
}
```

---

## N. T5 raw evidence

**Corrected MW3-scope:** user explicitly names A+B.

EVIDENCE_BACKED_COGNITIVE_STOP · governingPremiseInvalidated=true · cognitive_stop · COGNITIVE_STOP · allowsSilentSuccess=false · notTechnicalFailure=true

```json
{
  "campaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "turnId": "T5",
  "timestamp": "2026-09-02T19:31:24.555Z",
  "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
  "exactUserContent": "Pour cette réévaluation, les Evidence pertinentes sont toujours ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Leur contradiction n'est finalement pas locale : elle invalide directement la condition de travail initiale dont dépend toute recommandation aval. Analyse si la suite peut honnêtement continuer.",
  "model": "gpt-5.6-luna",
  "reasoningSetting": "UNSET",
  "providerId": "openai",
  "nativeAgentsAdapterUsed": false,
  "isOpenAiLiveF1": true,
  "completeRoundCalls": 0,
  "providerCalls": [
    {
      "method": "completeStructured",
      "schemaName": "f2_intent_analysis",
      "latencyMs": 9457,
      "model": "gpt-5.6-luna",
      "providerResponseId": "resp_0dffacac87f8624f006a98797e6e6887d2a142806e6618015f",
      "inputTokens": 2201,
      "outputTokens": 911,
      "totalTokens": 3112,
      "estimatedUsd": 0.0015333999999999999
    }
  ],
  "structured": [
    {
      "schemaName": "f2_intent_analysis",
      "rawText": "{\"intentClass\":\"informative\",\"candidateCycleTypeId\":null,\"signals\":null,\"cognitiveWorkload\":{\"ambiguity\":\"medium\",\"reasoningDepth\":\"high\",\"sourceBreadth\":\"medium\",\"toolDependency\":\"low\",\"contradictionRisk\":\"high\",\"verificationNeed\":\"high\"},\"contradictionCandidate\":{\"conflictPresent\":true,\"claimedEvidenceIds\":[\"ev:mw0-mw3-business-a\",\"ev:mw0-mw3-business-b\"],\"governingPremise\":\"La condition de travail initiale sur laquelle repose toute recommandation aval demeure valide malgré la contradiction entre les Evidence pertinentes.\",\"governingPremiseInvalidated\":true,\"localImpactOnly\":false,\"fabricationAttempt\":false},\"objective\":\"Évaluer si l’analyse et les recommandations aval peuvent se poursuivre honnêtement après invalidation de leur condition de travail initiale.\",\"scope\":\"Réévaluation de la contradiction entre ev:mw0-mw3-business-a et ev:mw0-mw3-business-b dans le contexte projet MW0→MW3, en lecture seule et sans exécution.\",\"rephrasedRequest\":\"Analyser l’impact de la contradiction identifiée, déterminer si elle invalide les travaux aval et indiquer les conditions nécessaires pour reprendre de manière honnête.\",\"outOfScope\":[\"Modifier le projet ou ses données\",\"Exécuter une action ou une transition\",\"Créer ou qualifier un cycle\",\"Produire une recommandation aval présentée comme fiable sans résolution de la prémisse invalidée\"],\"risks\":[\"Propagation d’une prémisse invalide dans les recommandations, décisions ou conclusions aval\",\"Présentation trompeuse d’une continuité analytique alors que la base de travail est compromise\",\"Perte de traçabilité entre la contradiction et les conclusions dérivées\",\"Confusion entre une analyse conditionnelle et une recommandation opérationnelle\"],\"reservations\":[\"La conclusion repose sur la caractérisation fournie de la contradiction et de son impact global\",\"La reprise nécessiterait de réconcilier les deux Evidence ou de remplacer explicitement la condition de travail invalidée\",\"Toute conclusion maintenue avant cette réconciliation devrait être explicitement conditionnelle et non décisionnelle\"],\"stopConditions\":[\"La contradiction reste non résolue\",\"La condition de travail initiale n’est pas rétablie, remplacée ou explicitement requalifiée\",\"Une recommandation aval est demandée comme conclusion fiable malgré l’absence de base cohérente\",\"Une exécution ou mutation est envisagée malgré la contrainte de lecture seule\"],\"activatedBlocks\":[\"Blocage de la continuité des recommandations aval\",\"Blocage de toute conclusion non conditionnelle fondée sur la prémisse invalidée\",\"Blocage de toute exécution ou mutation conformément aux contraintes du contexte\"],\"expectedOutcome\":\"Conclure que la suite ne peut pas honnêtement continuer comme si la prémisse initiale restait valide; elle doit être suspendue ou limitée à une analyse explicitement conditionnelle jusqu’à réconciliation des Evidence ou redéfinition gouvernée de la base de travail.\",\"criticalJustification\":\"La contradiction est présentée comme invalidant directement la condition dont dépend toute recommandation aval. Son impact n’est donc pas local : poursuivre les recommandations sans traiter cette invalidation reviendrait à propager une prémisse reconnue comme non fiable.\",\"requestedOperation\":\"Analyser la possibilité de poursuivre honnêtement, sans modifier le projet ni exécuter d’action.\"}",
      "cognitiveWorkload": {
        "ambiguity": "medium",
        "reasoningDepth": "high",
        "sourceBreadth": "medium",
        "toolDependency": "low",
        "contradictionRisk": "high",
        "verificationNeed": "high"
      },
      "contradictionCandidate": {
        "conflictPresent": true,
        "claimedEvidenceIds": [
          "ev:mw0-mw3-business-a",
          "ev:mw0-mw3-business-b"
        ],
        "governingPremise": "La condition de travail initiale sur laquelle repose toute recommandation aval demeure valide malgré la contradiction entre les Evidence pertinentes.",
        "governingPremiseInvalidated": true
      },
      "parsedCandidate": {
        "conflictPresent": true,
        "claimedEvidenceIds": [
          "ev:mw0-mw3-business-a",
          "ev:mw0-mw3-business-b"
        ],
        "governingPremise": "La condition de travail initiale sur laquelle repose toute recommandation aval demeure valide malgré la contradiction entre les Evidence pertinentes.",
        "governingPremiseInvalidated": true
      },
      "intentClass": "informative",
      "parseOk": true
    }
  ],
  "strategyTelemetry": [
    {
      "strategyClass": "High-Assurance",
      "reasoningEffort": "high",
      "reasoningDemand": "high",
      "criticalChallengeArmed": true,
      "bootstrapUsed": false,
      "reasonCodes": [
        "high_assurance_signals",
        "critical_challenge_armed_hook",
        "demand:high",
        "effort:high"
      ],
      "envelope": [
        "high",
        "xhigh",
        "max"
      ]
    }
  ],
  "result": {
    "ok": true,
    "status": "cognitive_stop",
    "text": "Honnêtement, la suite **ne peut pas continuer comme parcours décisionnel aval**.\n\nSi la contradiction entre ces Evidence invalide directement la condition initiale, alors **Gate-Kappa ne peut plus être présumé valide** : toute recommandation dépendante doit être suspendue.\n\nLimite de preuve : je n’ai pas accès ici au contenu vérifié de ces deux Evidence. Je peux seulement établir cette conclusion **conditionnellement à ta description** ; l’invalidation effective reste à confirmer dans Truth C.\n[COGNITIVE STOP] Evidence-backed contradiction invalidates governing premise: La condition de travail initiale sur laquelle repose toute recommandation aval demeure valide malgré la contradiction entre les Evidence pertinentes.\nEvidence: ev:mw0-mw3-business-a, ev:mw0-mw3-business-b\nNext: Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.",
    "mode": "live",
    "presentation": "openai_live",
    "model": "gpt-5.6-luna",
    "toolRounds": 0,
    "toolCalls": 0,
    "sources": [],
    "toolEvents": [],
    "project": {
      "projectId": "prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590",
      "name": "Nora MW0-MW3 Integrated Business REAL Chain",
      "shortReference": "MW03B",
      "objective": "Cumulative MW0→MW3 integrated REAL business chain at MW3 scope",
      "contextSummary": "Temporary synthetic Product SQLite campaign — not production data",
      "criticality": "STANDARD",
      "constraints": [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION"
      ],
      "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
      "lpsVersion": 1,
      "lpsCreatedAt": "2026-09-02T19:30:16.308Z",
      "doctrineId": "pkg:sfia-studio-doctrine-v3",
      "doctrineVersion": "1.0.0",
      "doctrineDigest": "sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608",
      "doctrineStatus": "resolved",
      "runtimeMode": "LOCAL_PROCESS",
      "persistence": "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
      "readiness": "NOT_READY"
    },
    "ephemeralNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.",
    "cognitiveRuntime": "agents",
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "memoryBAvailability": "available_with_history",
    "memoryBCompactionState": "compacted_with_loss",
    "stalePriorInvalidated": false,
    "mw3": {
      "disposition": "evidence_backed",
      "progression": "COGNITIVE_STOP",
      "cognitiveStop": true,
      "reason": "Evidence-backed contradiction invalidates governing premise: La condition de travail initiale sur laquelle repose toute recommandation aval demeure valide malgré la contradiction entre les Evidence pertinentes.",
      "evidenceIds": [
        "ev:mw0-mw3-business-a",
        "ev:mw0-mw3-business-b"
      ],
      "sourceIds": [
        "src:mw0-mw3-business-a",
        "src:mw0-mw3-business-b"
      ],
      "governingPremise": "La condition de travail initiale sur laquelle repose toute recommandation aval demeure valide malgré la contradiction entre les Evidence pertinentes.",
      "nextAction": "Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.",
      "insufficiencyReasons": [],
      "allowsSilentSuccess": false,
      "blockedImpact": "Progression bloquée — prémisse gouvernante invalidée (La condition de travail initiale sur laquelle repose toute recommandation aval demeure valide malgré la contradiction entre les Evidence pertinentes.).",
      "mayContinue": false,
      "notTechnicalFailure": true
    },
    "f2": {
      "turnKind": "f1_informative",
      "intentClass": "informative",
      "qualification": null,
      "proposal": null,
      "decision": null,
      "labels": {
        "recommendation": null,
        "proposition": null,
        "decisionRequired": null,
        "decisionTaken": null,
        "noExecution": "AUCUNE EXÉCUTION"
      },
      "executionBlocked": false,
      "processLocalNotice": "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL."
    }
  },
  "session": {
    "sessionId": "sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default",
    "itemCount": 9,
    "items": [
      {
        "idx": 0,
        "roleOrType": "sfia_memory_b_compaction",
        "textPreview": "{\"type\":\"sfia_memory_b_compaction\",\"version\":2,\"generation\":1,\"summaryText\":\"[MW1-S02 COMPACTED MEMORY B — NON-AUTHORITATIVE — NOT EXHAUSTIVE]\\ncompaction-generation=1\\nRetained premises:\\n[governing-context] Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement\\n[governing-context] Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une pré",
        "fullText": "{\"type\":\"sfia_memory_b_compaction\",\"version\":2,\"generation\":1,\"summaryText\":\"[MW1-S02 COMPACTED MEMORY B — NON-AUTHORITATIVE — NOT EXHAUSTIVE]\\ncompaction-generation=1\\nRetained premises:\\n[governing-context] Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement\\n[governing-context] Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommandation d’exécution, **Gate-Kappa doit rester valide**.\\n\\nElle ne constitue ni une H\\nSans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informatio\\nLa condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\\n\\nJe la traite comme une prémisse temporaire d’analyse uniqu\\nUne nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse \\nOmitted/replaced: 8 raw conversational item(s) this generation; transcript not exhaustive.\\nTruth C / LPS / HumanDecision remain authoritative — not this summary.\",\"provenance\":[{\"seq\":0,\"role\":\"user\",\"contentHash\":\"93f0033553b71d92\",\"excerpt\":\"Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommand\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":0},{\"seq\":1,\"role\":\"assistant\",\"contentHash\":\"9e8852045476b561\",\"excerpt\":\"Compris. Je traiterai **PREMISE-MW3-BUSINESS-ae78731b** comme une prémisse temporaire d’analyse : avant toute recommanda\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":1},{\"seq\":2,\"role\":\"user\",\"contentHash\":\"73902f6e1a6b4990\",\"excerpt\":\"Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant t\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":2},{\"seq\":3,\"role\":\"assistant\",\"contentHash\":\"212ae39b9601c836\",\"excerpt\":\"La condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.\\n\\nJe la traite comme\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":3},{\"seq\":4,\"role\":\"user\",\"contentHash\":\"9c04c3f662ce051d\",\"excerpt\":\"Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":4},{\"seq\":5,\"role\":\"unknown\",\"contentHash\":\"e3b0c44298fc1c14\",\"excerpt\":\"\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":5},{\"seq\":6,\"role\":\"unknown\",\"contentHash\":\"e3b0c44298fc1c14\",\"excerpt\":\"\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":6},{\"seq\":7,\"role\":\"unknown\",\"contentHash\":\"e3b0c44298fc1c14\",\"excerpt\":\"\",\"generation\":1,\"kind\":\"raw\",\"sourceSeq\":7}],\"loss\":{\"occurred\":true,\"droppedItemCount\":8,\"omittedExtent\":\"8 raw item(s) replaced this generation; prior loss=false; not exhaustive\",\"governingContextRetained\":true,\"governingContextExplicitLoss\":false},\"truthCRevision\":{\"lpsId\":\"lps:907e75d1-a075-4d04-bfea-812d0e54889d\",\"lpsVersion\":1},\"sourceSeqRange\":{\"from\":0,\"to\":7},\"nonAuthoritative\":true,\"createdAtIso\":\"1970-01-01T00:00:00.000Z\"}"
      },
      {
        "idx": 1,
        "roleOrType": "reasoning",
        "textPreview": "",
        "fullText": ""
      },
      {
        "idx": 2,
        "roleOrType": "assistant",
        "textPreview": "Le conflit n’est **pas suffisamment établi comme fait** : le contenu de `ev:mw0-mw3-business-a` n’est pas disponible dans les sources consultables, et son identifiant seul ne permet pas d’en déduire la substance.\n\nEn revanche, il reste **non résolu**. En mode fail-closed, je ne peux donc pas confirmer que Gate-Kappa demeure valide ni formuler de recommandation aval. Aucun blocage d’exécution n’est déclenché ; la suite analytique dépend d’une vérification de cette Evidence dans Truth C.",
        "fullText": "Le conflit n’est **pas suffisamment établi comme fait** : le contenu de `ev:mw0-mw3-business-a` n’est pas disponible dans les sources consultables, et son identifiant seul ne permet pas d’en déduire la substance.\n\nEn revanche, il reste **non résolu**. En mode fail-closed, je ne peux donc pas confirmer que Gate-Kappa demeure valide ni formuler de recommandation aval. Aucun blocage d’exécution n’est déclenché ; la suite analytique dépend d’une vérification de cette Evidence dans Truth C."
      },
      {
        "idx": 3,
        "roleOrType": "user",
        "textPreview": "Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer.",
        "fullText": "Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer."
      },
      {
        "idx": 4,
        "roleOrType": "reasoning",
        "textPreview": "",
        "fullText": ""
      },
      {
        "idx": 5,
        "roleOrType": "assistant",
        "textPreview": "Sur la base de ta description — **à confirmer dans Truth C** — les deux Evidence présentent une incompatibilité locale, sans impact déclaré sur la prémisse initiale : **Gate-Kappa doit rester valide**.\n\nConclusion :\n\n- le conflit doit rester ouvert et être traité localement ;\n- il ne suffit pas, à lui seul, à invalider Gate-Kappa ;\n- le parcours cognitif peut donc continuer **sous cette réserve analytique** ;\n- aucune recommandation d’exécution aval ne peut être formulée tant que la validité de ",
        "fullText": "Sur la base de ta description — **à confirmer dans Truth C** — les deux Evidence présentent une incompatibilité locale, sans impact déclaré sur la prémisse initiale : **Gate-Kappa doit rester valide**.\n\nConclusion :\n\n- le conflit doit rester ouvert et être traité localement ;\n- il ne suffit pas, à lui seul, à invalider Gate-Kappa ;\n- le parcours cognitif peut donc continuer **sous cette réserve analytique** ;\n- aucune recommandation d’exécution aval ne peut être formulée tant que la validité de Gate-Kappa et le contenu des deux Evidence ne sont pas vérifiés dans Truth C."
      },
      {
        "idx": 6,
        "roleOrType": "user",
        "textPreview": "Pour cette réévaluation, les Evidence pertinentes sont toujours ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Leur contradiction n'est finalement pas locale : elle invalide directement la condition de travail initiale dont dépend toute recommandation aval. Analyse si la suite peut honnêtement continuer.",
        "fullText": "Pour cette réévaluation, les Evidence pertinentes sont toujours ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Leur contradiction n'est finalement pas locale : elle invalide directement la condition de travail initiale dont dépend toute recommandation aval. Analyse si la suite peut honnêtement continuer."
      },
      {
        "idx": 7,
        "roleOrType": "reasoning",
        "textPreview": "",
        "fullText": ""
      },
      {
        "idx": 8,
        "roleOrType": "assistant",
        "textPreview": "Honnêtement, la suite **ne peut pas continuer comme parcours décisionnel aval**.\n\nSi la contradiction entre ces Evidence invalide directement la condition initiale, alors **Gate-Kappa ne peut plus être présumé valide** : toute recommandation dépendante doit être suspendue.\n\nLimite de preuve : je n’ai pas accès ici au contenu vérifié de ces deux Evidence. Je peux seulement établir cette conclusion **conditionnellement à ta description** ; l’invalidation effective reste à confirmer dans Truth C.",
        "fullText": "Honnêtement, la suite **ne peut pas continuer comme parcours décisionnel aval**.\n\nSi la contradiction entre ces Evidence invalide directement la condition initiale, alors **Gate-Kappa ne peut plus être présumé valide** : toute recommandation dépendante doit être suspendue.\n\nLimite de preuve : je n’ai pas accès ici au contenu vérifié de ces deux Evidence. Je peux seulement établir cette conclusion **conditionnellement à ta description** ; l’invalidation effective reste à confirmer dans Truth C."
      }
    ]
  },
  "lpsBefore": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsAfter": {
    "lpsId": "lps:907e75d1-a075-4d04-bfea-812d0e54889d",
    "version": 1,
    "nextStep": null,
    "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"MW03B\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EXÉCUTION\"]}",
    "decisionIds": [],
    "evidenceIds": []
  },
  "lpsUnchanged": true,
  "latencyMs": 14548,
  "mw3TrajectoryState": "EVIDENCE_BACKED_COGNITIVE_STOP",
  "historyPassed": []
}
```

---

## O. MW1 business continuity proof

| Check | Result |
| --- | --- |
| Same Project/Session | PASS |
| history=[] | PASS |
| Marker durable | PASS |
| T2 recovers Gate-Kappa without repetition | PASS |

---

## P. MW2 CWP + actual strategy

| Turn | contradictionRisk / verificationNeed | strategyClass | effort |
| --- | --- | --- | --- |
| T1 | low / low | Routine | low |
| T2 | low / medium | Focused | low |
| T3 | medium / high | High-Assurance | high |
| T4 | high / medium | Focused | medium |
| T5 | high / high | High-Assurance | high |

T3–T5 not Routine/low dishonestly. Strategy non-authoritative on truth (disposition followed Studio Evidence policy).

MW2-R01/R02/R03 remain OPEN / NON-BLOCKING / CARRIED.

---

## Q. MW3 business trajectory

Required / Observed:

NONE → NONE → CANDIDATE → EVIDENCE_BACKED_CONTINUE → EVIDENCE_BACKED_COGNITIVE_STOP

**MATCH.**

---

## R. BC-01→BC-25 scorecard

All **PASS** (scoreFail=[]).

```json
{
  "campaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "sha256": "f6674ddb4f19c98f9f79354b844b3d61a8902804a5a1ff6bba4f3cefc8159066",
  "verdict": "MW0×MW1×MW2×MW3 INTEGRATED REAL BUSINESS CHAIN PROVEN AT MW3 SCOPE — READY FOR CHATGPT CHAIN REVIEW",
  "chainFailure": null,
  "trajectory": [
    "NONE",
    "NONE",
    "CANDIDATE",
    "EVIDENCE_BACKED_CONTINUE",
    "EVIDENCE_BACKED_COGNITIVE_STOP"
  ],
  "cumulativeUsd": 0.0066857999999999996,
  "scorecard": [
    {
      "id": "BC-01",
      "pass": true,
      "detail": "projectId=prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590"
    },
    {
      "id": "BC-02",
      "pass": true,
      "detail": "sessionIds=sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default"
    },
    {
      "id": "BC-03",
      "pass": true,
      "detail": "history=[] every turn"
    },
    {
      "id": "BC-04",
      "pass": true,
      "detail": "T1 premise durable in Memory B"
    },
    {
      "id": "BC-05",
      "pass": true,
      "detail": "T2 recalls Gate-Kappa without repetition; recalls=true"
    },
    {
      "id": "BC-06",
      "pass": true,
      "detail": "T1/T2 no false contradiction"
    },
    {
      "id": "BC-07",
      "pass": true,
      "detail": "CWP all turns"
    },
    {
      "id": "BC-08",
      "pass": true,
      "detail": "COGNITIVE_STRATEGY_SELECTED all F1"
    },
    {
      "id": "BC-09",
      "pass": true,
      "detail": "T3/T4/T5 not dishonest Routine/low"
    },
    {
      "id": "BC-10",
      "pass": true,
      "detail": "MW2 strategy observed separately; disposition from Studio MW3 policy on current-turn candidate+OA Evidence"
    },
    {
      "id": "BC-11",
      "pass": true,
      "detail": "T3 disposition=candidate"
    },
    {
      "id": "BC-12",
      "pass": true,
      "detail": "T4 disposition=evidence_backed"
    },
    {
      "id": "BC-13",
      "pass": true,
      "detail": "T4 local continue"
    },
    {
      "id": "BC-14",
      "pass": true,
      "detail": "T5 disposition=evidence_backed"
    },
    {
      "id": "BC-15",
      "pass": true,
      "detail": "T5 Cognitive STOP"
    },
    {
      "id": "BC-16",
      "pass": true,
      "detail": "STOP ≠ technical failure"
    },
    {
      "id": "BC-17",
      "pass": true,
      "detail": "STOP ≠ SUCCESS"
    },
    {
      "id": "BC-18",
      "pass": true,
      "detail": "Evidence/Source project-scoped"
    },
    {
      "id": "BC-19",
      "pass": true,
      "detail": "no invented Evidence promoted"
    },
    {
      "id": "BC-20",
      "pass": true,
      "detail": "no silent Truth C mutation"
    },
    {
      "id": "BC-21",
      "pass": true,
      "detail": "native OpenAI F1"
    },
    {
      "id": "BC-22",
      "pass": true,
      "detail": "no Fake/script path"
    },
    {
      "id": "BC-23",
      "pass": true,
      "detail": "budget.cumulativeUsd=0.0066857999999999996; meteredCalls=5"
    },
    {
      "id": "BC-24",
      "pass": true,
      "detail": "preflight green; post-regression recorded after campaign"
    },
    {
      "id": "BC-25",
      "pass": true,
      "detail": "MW4-S01 cross-turn Evidence durability NOT TESTED; T4/T5 explicitly supply A+B"
    }
  ]
}
```

---

## S. Truth C mutation ledger

All five cognition turns: LPS before/after equal. Evidence registrations are separate setup mutations.

---

## T. Provider IDs / usage / cost / evidence SHA256

- Model `gpt-5.6-luna` · reasoning **UNSET**
- Captured structured est. cumulative ≈ **$0.00669**
- **COST PARTIALLY MEASURABLE** (native Agents F1 tokens not on ConversationProvider ledger)
- Cap $1.00 not reached
- campaign-evidence.json SHA256=f6674ddb4f19c98f9f79354b844b3d61a8902804a5a1ff6bba4f3cefc8159066 bytes=95942

---

## U. Pre/post regression

| Gate | Pre | Post |
| --- | --- | --- |
| Serial MW0/MW1/MW2/MW3 suite | 269 PASS | 269 PASS |
| typecheck | PASS | PASS |
| lint | PASS | (pre) |
| app tracked diff | empty | empty |

---

## V. FA / TA

FA: **NO** · TA: **NO**

---

## W. MW4 explicitly deferred boundary

**MW4-S01 CROSS-TURN GROUNDING DURABILITY NOT TESTED**

This campaign does **not** assert that Evidence A survives automatically from T3→T4 or A/B from T4→T5. T4/T5 explicitly supply current Evidence IDs. MW4 remains NOT AUTHORIZED / NOT IMPLEMENTED.

---

## X. Git lifecycle

Implementation remains local at `339d583a`. Validation branch not on origin. **PROJECT PUSH / PR / MERGE NOT PERFORMED.** Only L3 Review Handoff mutation authorized.

After ChatGPT Chain Review PASS: distinct Morris GO still required for MW3 Project Git Integration.

---

## Y. Final verdict

**MW0×MW1×MW2×MW3 INTEGRATED REAL BUSINESS CHAIN PROVEN AT MW3 SCOPE — READY FOR CHATGPT CHAIN REVIEW**

Also: **NORA REAL BUSINESS CHAIN — MEMORY PREMISE → CWP → CURRENT EVIDENCE CONTRADICTION → COGNITIVE STOP PROVEN**

Does **not** mean: MW3 Git Integration authorized · MW3 CLOSED · MW4-S01 PROVEN · Cognitive Completion PROVEN · runtime v3 ADOPTED.
