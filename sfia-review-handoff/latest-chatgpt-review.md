# SFIA Review Pack — FULL
# Studio Next · R5 · ML5 · Macro-lot 1 · Cycle 8 Delivery · CRITICAL · EVOL
# Date: 2026-11-26 20:50  (2026-11-26T19:50Z)
# Verdict Cursor: MACRO-LOT 1 — READY FOR INDEPENDENT REVIEW
# (GOVERNED BLOCKERS: Admin LIVE · migration PG · WEB LIVE · UX Figma p.13)
# Decision: REQUIRED · PUBLISH-IN-CYCLE · L3 handoff
# NO RELEASE · NOT ADOPTED · RECETTE intacte · push projet NON

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Remote | `mcleland147/sfia-workspace` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD initial GO | `ae4aff22b023fea00be5ae1ec98c903d5fbbf145` |
| HEAD final | `5794584a4dfae97dd78c5493946d9251b7847d65` |
| Merge-base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Candidat code historique | `c574d2621a6ce7b5fec3727853185982b23ca3bf` |
| Web tree pré-lot | `5a1289fcfa26b1963f53ed1364dbd842e771e46c` |
| Web tree post-lot | `ce8673f813150cba124591f12b485ccbcf2599d9` |
| BUILD_ID historique | `Le9pyy4fbPKT_m0YlplAr` (préservé comme référence ; candidat non release) |
| Contrats @1e2e188d | cadrage `66881ecd6111e7faf70f7ecb937615654eb3c0d6` · fonct `273ab3b998e3de5abece36f092d47bf21d66386a` · tech `21fe4e24d36cc6760ff1aa089af286f084bb4002` |
| Push projet | **NON** |

```
M .tmp-sfia-review/chatgpt-review.md
```

```
5794584a feat(next): ML1 native provider frontier, local tracing, Admin FinOps collector
 .../as-built-macro-lot-1-20261126.md               |  90 ++++
 .../convergence-openai-studio/cadrage.md           | 108 +++++
 .../contrat-fonctionnel.md                         | 129 ++++++
 .../convergence-openai-studio/contrat-technique.md | 208 +++++++++
 ...migration-candidate-provider-admin-snapshots.md |  67 +++
 .../ux-delta-finops-page13-candidate.md            |  23 +
 .../construction/delivery-history.md               |  15 +
 .../web/src/domains/conversation/nora-adapter.ts   |   9 +-
 .../conversation/provider-emission-frontier.ts     | 105 ++++-
 .../conversation/provider-response-continuity.ts   | 172 ++++++++
 .../conversation/provider-response-usage.ts        | 197 +++++++++
 .../conversation/public-web-search-frontier.ts     |   3 +
 .../finops/provider-admin-usage-collector.ts       | 481 +++++++++++++++++++++
 .../web/src/domains/finops/usage-read-service.ts   | 130 ++++++
 .../web/src/lib/agents-sdk-tracing.ts              | 313 ++++++++++++++
 .../web/tests/unit/ml5-agents-sdk-tracing.test.ts  | 109 +++++
 .../ml5-provider-admin-usage-collector.test.ts     | 211 +++++++++
 .../unit/ml5-provider-emission-frontier.test.ts    |  54 +++
 .../unit/ml5-provider-response-continuity.test.ts  |  98 +++++
 .../tests/unit/ml5-provider-response-usage.test.ts |  83 ++++
 .../web/tests/unit/nora-adapter-corrective.test.ts |   4 +
 21 files changed, 2604 insertions(+), 5 deletions(-)
```

---

## 2. Sources consultées

- Contrats convergence `1e2e188d` (blobs exacts vérifiés)
- Étude handoff `460a121f` / blob `89d4362c`
- Étude locale `ae4aff22` / blob `bb799545`
- Handoff régularisation `29b0ae4c`
- Code AS-IS frontier/OBS/FinOps/WEB/D3
- SDK `@openai/agents@0.21.0` / `openai@7.50.0` — `setTraceProcessors`, Decisions types, Admin types
- Docs OpenAI tracing / Usage Costs / web search / conversation state (DOCUMENTED)
- Figma page 13 : delta candidat documenté, UI non modifiée

Distinction : DOCUMENTED ≠ SDK ≠ PROVEN AT RUNTIME (Admin LIVE non exécuté).

---

## 3. Diagnostic local (Séquence A) — synthèse

Plan de contrôle Studio épais ; tracing OFF ; frontier count/max_* ; FinOps ledger attribution ; WEB OFF ; pas de collecteur Admin ; previous_response_id hors continuité.

Transformations ML1 : ADAPT tracing local ; ADAPT tool_usage ; BUILD collecteur Admin (substitué) ; ADAPT FinOps DTO ; BUILD continuité (OFF) ; KEEP OBS/D3/D6/ledger.

---

## 4. Cartographie des transformations

Voir as-built `construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md` (contenu intégral §8).

---

## 5. Inventaire fichiers

### Créés
- `projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/provider-response-usage.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts`
- `projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts`
- `projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`
- `projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md`
- `projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md`
- contrats + migration/ux candidats sous `construction/convergence-openai-studio/`

### Modifiés
- nora-adapter, provider-emission-frontier, public-web-search-frontier
- usage-read-service, delivery-history
- tests frontier + nora-adapter-corrective

### Retirés
- aucun

---

## 6. Contenu complet — fichiers créés


### `projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts`

<<<FILE_BEGIN projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts>>>
/**
 * Macro-lot 1 — Agents SDK tracing under Studio control.
 *
 * Modes (SFIA_AGENTS_TRACING_MODE):
 * - off   → setTracingDisabled(true)  [default / rollback]
 * - local → setTracingDisabled(false) + setTraceProcessors([StudioLocalTraceProcessor])
 *
 * NEVER registers a remote OpenAI exporter. Default SDK ConsoleSpanExporter is replaced.
 * Sensitive model/tool payloads are stripped before any local sink.
 * A processor failure must not throw into Nora run paths.
 */

import { emitObs } from "@/lib/observability";

export type AgentsTracingMode = "off" | "local";

export type StudioTraceSinkRecord = {
  kind: "trace" | "span";
  name: string;
  traceId: string | null;
  spanId: string | null;
  status: string | null;
  durationMs: number | null;
  /** Always redacted — presence proves filter ran. */
  dataRedacted: true;
  correlation: {
    operationId: string | null;
    generationId: string | null;
    attemptId: string | null;
    workId: string | null;
  };
  atMs: number;
};

/** Loose structural reads — SDK Span uses string timestamps; we accept both. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TraceLike = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpanLike = any;

export type StudioTracingCorrelation = {
  operationId?: string | null;
  generationId?: string | null;
  attemptId?: string | null;
  workId?: string | null;
};

let correlation: StudioTracingCorrelation = {};
let configured = false;
let lastMode: AgentsTracingMode = "off";

/** Test / egress oracle — in-memory only; never leaves process. */
const sinkRecords: StudioTraceSinkRecord[] = [];
let egressProbeHooks: Array<(url: string) => void> = [];

export function resetAgentsTracingTestState(): void {
  sinkRecords.length = 0;
  egressProbeHooks = [];
  correlation = {};
  configured = false;
  lastMode = "off";
}

export function getAgentsTracingSinkRecords(): readonly StudioTraceSinkRecord[] {
  return sinkRecords;
}

/** Independent egress observation: any processor HTTP would call this. */
export function installAgentsTracingEgressProbe(
  hook: (url: string) => void,
): () => void {
  egressProbeHooks.push(hook);
  return () => {
    egressProbeHooks = egressProbeHooks.filter((h) => h !== hook);
  };
}

function noteEgress(url: string): void {
  for (const h of egressProbeHooks) {
    try {
      h(url);
    } catch {
      /* probe must not break tracing */
    }
  }
}

/**
 * Deliberately unused by StudioLocalTraceProcessor — present so tests can assert
 * that enabling local mode never routes through a remote export helper.
 */
export function __forbiddenRemoteTraceExport(url: string, _body: unknown): void {
  noteEgress(url);
  throw new Error("FORBIDDEN_REMOTE_TRACE_EXPORT");
}

export function setAgentsTracingCorrelation(
  next: StudioTracingCorrelation,
): void {
  correlation = {
    operationId: next.operationId ?? null,
    generationId: next.generationId ?? null,
    attemptId: next.attemptId ?? null,
    workId: next.workId ?? null,
  };
}

export function clearAgentsTracingCorrelation(): void {
  correlation = {};
}

export function resolveAgentsTracingMode(
  env: NodeJS.ProcessEnv = process.env,
): AgentsTracingMode {
  const raw = (env.SFIA_AGENTS_TRACING_MODE ?? "off").trim().toLowerCase();
  return raw === "local" ? "local" : "off";
}

function spanName(span: SpanLike): string {
  const data = span?.spanData ?? span?.data;
  if (data && typeof data === "object") {
    const t = typeof data.type === "string" ? data.type : null;
    const n = typeof data.name === "string" ? data.name : null;
    if (t && n) return `${t}:${n}`;
    if (t) return t;
    if (n) return n;
  }
  return "span";
}

function asEpochMs(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim()) {
    const t = Date.parse(v);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}

function durationMs(span: SpanLike): number | null {
  const start = asEpochMs(span?.startedAt);
  const end = asEpochMs(span?.endedAt);
  if (start == null || end == null) return null;
  return Math.max(0, Math.floor(end - start));
}

function statusOf(span: SpanLike): string | null {
  if (span?.error != null) return "error";
  if (span?.endedAt != null) return "ok";
  return null;
}

function recordLocal(item: StudioTraceSinkRecord): void {
  sinkRecords.push(item);
  if (sinkRecords.length > 500) sinkRecords.shift();
  try {
    emitObs({
      event_name: "provider.agents_trace.local",
      component: "agents_sdk_tracing",
      outcome: item.status === "error" ? "FAILED" : "SUCCESS",
      operation_id: item.correlation.operationId ?? undefined,
      generation_id: item.correlation.generationId ?? undefined,
      attempt_id: item.correlation.attemptId ?? undefined,
      duration_ms: item.durationMs ?? undefined,
      // Only allowlisted meta keys (see observability.ts META_ALLOWLIST).
      meta: {
        kind: item.kind,
        status: item.status,
        tool_calls: item.name,
      },
    });
  } catch {
    /* OBS failure must not break Nora */
  }
}

/**
 * Local-only TracingProcessor: no HTTP, no model/tool payloads, OBS + in-memory sink.
 */
export class StudioLocalTraceProcessor {
  async onTraceStart(_trace: TraceLike): Promise<void> {
    /* start is noisy; we record on end */
  }

  async onTraceEnd(trace: TraceLike): Promise<void> {
    try {
      recordLocal({
        kind: "trace",
        name: typeof trace.name === "string" ? trace.name : "trace",
        traceId: typeof trace.traceId === "string" ? trace.traceId : null,
        spanId: null,
        status: "ok",
        durationMs: null,
        dataRedacted: true,
        correlation: {
          operationId: correlation.operationId ?? null,
          generationId: correlation.generationId ?? null,
          attemptId: correlation.attemptId ?? null,
          workId: correlation.workId ?? null,
        },
        atMs: Date.now(),
      });
    } catch {
      /* swallow */
    }
  }

  async onSpanStart(_span: SpanLike): Promise<void> {
    /* record on end */
  }

  async onSpanEnd(span: SpanLike): Promise<void> {
    try {
      recordLocal({
        kind: "span",
        name: spanName(span),
        traceId: typeof span.traceId === "string" ? span.traceId : null,
        spanId: typeof span.spanId === "string" ? span.spanId : null,
        status: statusOf(span),
        durationMs: durationMs(span),
        dataRedacted: true,
        correlation: {
          operationId: correlation.operationId ?? null,
          generationId: correlation.generationId ?? null,
          attemptId: correlation.attemptId ?? null,
          workId: correlation.workId ?? null,
        },
        atMs: Date.now(),
      });
    } catch {
      /* swallow */
    }
  }

  async forceFlush(): Promise<void> {
    /* no remote buffer */
  }

  async shutdown(): Promise<void> {
    /* no-op */
  }
}

export type ConfigureAgentsTracingResult = {
  mode: AgentsTracingMode;
  tracingDisabled: boolean;
  processorsReplaced: boolean;
  sensitiveLoggingForcedOff: boolean;
};

/**
 * Idempotent configuration. Safe to call before every LIVE Agents run.
 */
export async function configureAgentsSdkTracing(
  env: NodeJS.ProcessEnv = process.env,
): Promise<ConfigureAgentsTracingResult> {
  const mode = resolveAgentsTracingMode(env);
  const agents = await import("@openai/agents");

  // Always force sensitive logging OFF for the product path (DEV ephemeral
  // diagnostics remain a separate opt-in in nora-adapter, after this call).
  let sensitiveLoggingForcedOff = false;
  try {
    const core = await import("@openai/agents-core");
    if (typeof core.setSensitiveDataLoggingEnabled === "function") {
      core.setSensitiveDataLoggingEnabled(false);
      sensitiveLoggingForcedOff = true;
    }
  } catch {
    sensitiveLoggingForcedOff = false;
  }

  if (mode === "off") {
    if (typeof agents.setTracingDisabled === "function") {
      agents.setTracingDisabled(true);
    }
    // Replace any processors so a later enable cannot inherit a prior remote exporter.
    if (typeof agents.setTraceProcessors === "function") {
      agents.setTraceProcessors([]);
    }
    lastMode = "off";
    configured = true;
    return {
      mode: "off",
      tracingDisabled: true,
      processorsReplaced: true,
      sensitiveLoggingForcedOff,
    };
  }

  // local mode
  if (typeof agents.setTraceProcessors === "function") {
    agents.setTraceProcessors([new StudioLocalTraceProcessor()]);
  }
  if (typeof agents.setTracingDisabled === "function") {
    agents.setTracingDisabled(false);
  }
  lastMode = "local";
  configured = true;
  return {
    mode: "local",
    tracingDisabled: false,
    processorsReplaced: true,
    sensitiveLoggingForcedOff,
  };
}

export function getAgentsTracingConfigState(): {
  configured: boolean;
  mode: AgentsTracingMode;
} {
  return { configured, mode: lastMode };
}
<<<FILE_END>>>

### `projects/sfia-studio-next/web/src/domains/conversation/provider-response-usage.ts`

<<<FILE_BEGIN projects/sfia-studio-next/web/src/domains/conversation/provider-response-usage.ts>>>
/**
 * Macro-lot 1 — native response-side usage extraction.
 *
 * Distinguishes:
 * - max_tool_calls (a-priori built-in call bound)
 * - tool_usage.web_search.num_requests (a-posteriori billable searches when present)
 *
 * Absent tool_usage ⇒ UNKNOWN (never ASSUMED_1).
 */

export type HostedWebSearchUsageObservation = {
  numRequests: number | null;
  status: "MEASURED" | "UNKNOWN";
  provenance: "RESPONSE_TOOL_USAGE" | "ABSENT";
  limits: string[];
};

export type ResponseNativeUsageObservation = {
  responseId: string | null;
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  cachedInputTokens: number | null;
  reasoningTokens: number | null;
  hostedWebSearch: HostedWebSearchUsageObservation;
  rawToolUsagePresent: boolean;
};

function num(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? Math.floor(v) : null;
}

function asRecord(v: unknown): Record<string, unknown> | null {
  return v && typeof v === "object" ? (v as Record<string, unknown>) : null;
}

export function extractHostedWebSearchUsage(
  responseBody: unknown,
): HostedWebSearchUsageObservation {
  const body = asRecord(responseBody);
  const toolUsage = asRecord(body?.tool_usage);
  if (!toolUsage) {
    return {
      numRequests: null,
      status: "UNKNOWN",
      provenance: "ABSENT",
      limits: ["TOOL_USAGE_ABSENT"],
    };
  }
  const webSearch = asRecord(toolUsage.web_search);
  if (!webSearch) {
    return {
      numRequests: null,
      status: "UNKNOWN",
      provenance: "ABSENT",
      limits: ["TOOL_USAGE_WEB_SEARCH_ABSENT"],
    };
  }
  const n = num(webSearch.num_requests);
  if (n == null || n < 0) {
    return {
      numRequests: null,
      status: "UNKNOWN",
      provenance: "ABSENT",
      limits: ["TOOL_USAGE_WEB_SEARCH_NUM_REQUESTS_UNKNOWN"],
    };
  }
  return {
    numRequests: n,
    status: "MEASURED",
    provenance: "RESPONSE_TOOL_USAGE",
    limits: [],
  };
}

function detailTokens(
  details: unknown,
  keys: string[],
): number | null {
  if (!details) return null;
  const list = Array.isArray(details) ? details : [details];
  let sum = 0;
  let found = false;
  for (const d of list) {
    const rec = asRecord(d);
    if (!rec) continue;
    for (const k of keys) {
      const v = num(rec[k]);
      if (v != null) {
        sum += v;
        found = true;
      }
    }
  }
  return found ? sum : null;
}

/**
 * Parse a Responses API JSON body (or Agents-wrapped response object).
 */
export function extractResponseNativeUsage(
  responseBody: unknown,
): ResponseNativeUsageObservation {
  const body = asRecord(responseBody);
  const usage = asRecord(body?.usage);
  const inputTokens = num(usage?.input_tokens ?? usage?.inputTokens);
  const outputTokens = num(usage?.output_tokens ?? usage?.outputTokens);
  const totalTokens = num(usage?.total_tokens ?? usage?.totalTokens);
  const cachedInputTokens = detailTokens(
    usage?.input_tokens_details ?? usage?.inputTokensDetails,
    ["cached_tokens", "cachedTokens"],
  );
  const reasoningTokens = detailTokens(
    usage?.output_tokens_details ?? usage?.outputTokensDetails,
    ["reasoning_tokens", "reasoningTokens"],
  );
  const responseId =
    typeof body?.id === "string"
      ? body.id
      : typeof body?.response_id === "string"
        ? body.response_id
        : null;

  const hostedWebSearch = extractHostedWebSearchUsage(body);
  return {
    responseId,
    inputTokens,
    outputTokens,
    totalTokens:
      totalTokens ??
      (inputTokens != null && outputTokens != null
        ? inputTokens + outputTokens
        : null),
    cachedInputTokens,
    reasoningTokens,
    hostedWebSearch,
    rawToolUsagePresent: asRecord(body?.tool_usage) != null,
  };
}

/**
 * Reconcile a-priori max_tool_calls reservation with a-posteriori num_requests.
 * Returns the billable count to commit and whether the campaign should suspend.
 */
export function reconcileHostedSearchUsage(input: {
  reservedMaxToolCalls: number;
  observed: HostedWebSearchUsageObservation;
  alreadyCommitted: number;
  maxHostedSearches: number | null;
}): {
  commitDelta: number;
  measured: number | null;
  status: "MEASURED" | "UNKNOWN" | "RESERVED_ONLY";
  suspend: boolean;
  suspendReason: string | null;
  limits: string[];
} {
  const reserved = Math.max(0, Math.floor(input.reservedMaxToolCalls));
  const committed = Math.max(0, Math.floor(input.alreadyCommitted));
  const limits = [...input.observed.limits];

  if (input.observed.status === "MEASURED" && input.observed.numRequests != null) {
    const measured = input.observed.numRequests;
    const nextTotal = committed + measured;
    // When we already reserved `reserved` at emit time, commit only the measured
    // amount for accounting; reservation overshoot is released by caller.
    const suspend =
      input.maxHostedSearches != null && nextTotal > input.maxHostedSearches;
    if (suspend) {
      limits.push("HOSTED_SEARCH_MEASURED_OVER_ENVELOPE");
    }
    // Distinguish: max_tool_calls was never a billable guarantee.
    if (measured !== reserved) {
      limits.push("MAX_TOOL_CALLS_NE_NUM_REQUESTS");
    }
    return {
      commitDelta: measured,
      measured,
      status: "MEASURED",
      suspend,
      suspendReason: suspend ? "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED" : null,
      limits,
    };
  }

  // UNKNOWN — do not invent ASSUMED_1; keep reserved as envelope pressure only
  // and surface UNKNOWN for FinOps (no false precision).
  limits.push("HOSTED_SEARCH_BILLABLE_UNKNOWN");
  return {
    commitDelta: 0,
    measured: null,
    status: "UNKNOWN",
    suspend: false,
    suspendReason: null,
    limits,
  };
}
<<<FILE_END>>>

### `projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts`

<<<FILE_BEGIN projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts>>>
/**
 * Macro-lot 1 — native Responses continuity helpers (previous_response_id).
 *
 * D3 remains SoT for work identity, acquis, checkpoints, lease/fencing.
 * A provider chain is an optional optimization — never a durable business truth.
 *
 * Activation: SFIA_PROVIDER_CONTINUITY_MODE=native|off (default off until proven).
 * No external Conversations/background sessions without separate DATA-01 GO.
 */

export type ProviderContinuityMode = "off" | "native";

export type StudioContinuitySnapshot = {
  workId: string;
  acquisFingerprint: string | null;
  sourceVersions: string[];
  checkpointId: string | null;
  budgets: {
    tokensConsumed: number;
    tokensBudget: number | null;
    restitutionsRemaining: number | null;
  };
  rightsOk: boolean;
};

export type ProviderChainRef = {
  previousResponseId: string;
  boundWorkId: string;
  boundLane: string;
  boundAcquisFingerprint: string | null;
  boundSourceVersions: string[];
  createdAtMs: number;
};

export type ContinuityPlan =
  | {
      mode: "studio_rebuild";
      reason:
        | "MODE_OFF"
        | "NO_CHAIN"
        | "WORK_MISMATCH"
        | "LANE_MISMATCH"
        | "RIGHTS_CHANGED"
        | "SOURCES_CHANGED"
        | "ACQUIS_CHANGED"
        | "PROVIDER_UNAVAILABLE";
      previousResponseId: null;
      preserveBudgets: true;
    }
  | {
      mode: "native_previous_response";
      reason: "CHAIN_COMPATIBLE";
      previousResponseId: string;
      preserveBudgets: true;
      /** Prior tokens remain billable — not free. */
      priorTokensStillBilled: true;
    };

export function resolveProviderContinuityMode(
  env: NodeJS.ProcessEnv = process.env,
): ProviderContinuityMode {
  const raw = (env.SFIA_PROVIDER_CONTINUITY_MODE ?? "off").trim().toLowerCase();
  return raw === "native" ? "native" : "off";
}

function sameStringSet(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

/**
 * Decide whether a provider chain may be attached to the next Responses call.
 * Always preserves Studio budgets (no reset on chain change / compaction).
 */
export function planProviderContinuity(input: {
  mode: ProviderContinuityMode;
  studio: StudioContinuitySnapshot;
  chain: ProviderChainRef | null;
  lane: string;
}): ContinuityPlan {
  if (input.mode !== "native") {
    return {
      mode: "studio_rebuild",
      reason: "MODE_OFF",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (!input.chain) {
    return {
      mode: "studio_rebuild",
      reason: "NO_CHAIN",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (input.chain.boundWorkId !== input.studio.workId) {
    return {
      mode: "studio_rebuild",
      reason: "WORK_MISMATCH",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (input.chain.boundLane !== input.lane) {
    return {
      mode: "studio_rebuild",
      reason: "LANE_MISMATCH",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (!input.studio.rightsOk) {
    return {
      mode: "studio_rebuild",
      reason: "RIGHTS_CHANGED",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (
    !sameStringSet(
      input.chain.boundSourceVersions,
      input.studio.sourceVersions,
    )
  ) {
    return {
      mode: "studio_rebuild",
      reason: "SOURCES_CHANGED",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  if (
    (input.chain.boundAcquisFingerprint ?? null) !==
    (input.studio.acquisFingerprint ?? null)
  ) {
    return {
      mode: "studio_rebuild",
      reason: "ACQUIS_CHANGED",
      previousResponseId: null,
      preserveBudgets: true,
    };
  }
  return {
    mode: "native_previous_response",
    reason: "CHAIN_COMPATIBLE",
    previousResponseId: input.chain.previousResponseId,
    preserveBudgets: true,
    priorTokensStillBilled: true,
  };
}

/**
 * Attach previous_response_id only when plan allows. Never invent store=true
 * or Conversations persistence here.
 */
export function applyContinuityToResponsesBody(
  body: Record<string, unknown>,
  plan: ContinuityPlan,
): Record<string, unknown> {
  if (plan.mode !== "native_previous_response") {
    const { previous_response_id: _drop, ...rest } = body;
    return rest;
  }
  return {
    ...body,
    previous_response_id: plan.previousResponseId,
  };
}
<<<FILE_END>>>

### `projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts`

<<<FILE_BEGIN projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts>>>
/**
 * Macro-lot 1 — independent OpenAI Admin Usage & Costs collector.
 *
 * Isolated from Nora runtime:
 * - Separate secret env: OPENAI_ADMIN_KEY (never project key / never browser)
 * - Read-only GET allowlist only
 * - Failure never blocks cognitive operations
 *
 * Without secret or without GO for LIVE Admin calls:
 *   status = BLOCKED / NOT_LIVE_PROVEN
 *
 * Persistence of provider snapshots requires a migration GO (see as-built).
 * This module keeps an in-process idempotent view for tests + readiness.
 */

export type AdminCollectorStatus =
  | "READY"
  | "BLOCKED_NO_SECRET"
  | "BLOCKED_NO_LIVE_GO"
  | "PARTIAL"
  | "ERROR"
  | "IDLE";

export type AdminUsageBucket = {
  /** Stable reconciliation key components */
  source: "openai.organization.usage" | "openai.organization.costs";
  organizationScope: string;
  intervalStartUtc: string;
  intervalEndUtc: string;
  granularity: "hour" | "day";
  dimensions: Record<string, string | null>;
  unit: string;
  currency: string | null;
  value: string; // decimal string — never float money math at boundaries
  completeness: "complete" | "partial";
  collectedAtUtc: string;
  collectionId: string;
};

export type AdminCollectionResult = {
  status: AdminCollectorStatus;
  collectionId: string;
  collectedAtUtc: string;
  buckets: AdminUsageBucket[];
  pagesFetched: number;
  limits: string[];
  lastError: string | null;
};

export type AdminHttpTransport = (input: {
  method: "GET";
  path: string;
  query: Record<string, string>;
  headers: Record<string, string>;
}) => Promise<{
  status: number;
  json: unknown;
  headers?: Record<string, string>;
}>;

export type AdminCollectorConfig = {
  /** Never log this value. */
  adminApiKey: string | null;
  organizationScope: string;
  /** Explicit LIVE gate — false under initial GO. */
  liveAdminCallsAuthorized: boolean;
  transport?: AdminHttpTransport;
};

const ALLOWED_PATHS = new Set([
  "/v1/organization/usage/completions",
  "/v1/organization/usage/responses",
  "/v1/organization/usage/embeddings",
  "/v1/organization/usage/audio_speeches",
  "/v1/organization/usage/audio_transcriptions",
  "/v1/organization/usage/vector_stores",
  "/v1/organization/usage/moderations",
  "/v1/organization/usage/images",
  "/v1/organization/costs",
]);

/** In-process snapshot store — NOT a second ledger. Product PG requires migration GO. */
const snapshotByKey = new Map<string, AdminUsageBucket>();
let lastSuccessfulCollection: {
  atUtc: string;
  collectionId: string;
  status: AdminCollectorStatus;
} | null = null;

export function resetAdminCollectorStateForTests(): void {
  snapshotByKey.clear();
  lastSuccessfulCollection = null;
}

export function getAdminCollectorFreshness(): {
  lastSuccessAtUtc: string | null;
  lastCollectionId: string | null;
  status: AdminCollectorStatus;
  bucketCount: number;
} {
  return {
    lastSuccessAtUtc: lastSuccessfulCollection?.atUtc ?? null,
    lastCollectionId: lastSuccessfulCollection?.collectionId ?? null,
    status: lastSuccessfulCollection?.status ?? "IDLE",
    bucketCount: snapshotByKey.size,
  };
}

export function listAdminCollectorBuckets(): AdminUsageBucket[] {
  return [...snapshotByKey.values()];
}

export function resolveAdminCollectorConfig(
  env: NodeJS.ProcessEnv = process.env,
): AdminCollectorConfig {
  const key = (env.OPENAI_ADMIN_KEY ?? "").trim() || null;
  const live =
    (env.SFIA_ADMIN_USAGE_LIVE ?? "").trim() === "1" &&
    (env.STUDIO_LANE ?? "").trim().toUpperCase() === "DEV";
  return {
    adminApiKey: key,
    organizationScope:
      (env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
      "org:unspecified",
    liveAdminCallsAuthorized: live,
  };
}

function bucketKey(b: AdminUsageBucket): string {
  const dims = Object.keys(b.dimensions)
    .sort()
    .map((k) => `${k}=${b.dimensions[k] ?? ""}`)
    .join("&");
  return [
    b.source,
    b.organizationScope,
    b.intervalStartUtc,
    b.intervalEndUtc,
    b.granularity,
    b.unit,
    b.currency ?? "",
    dims,
  ].join("|");
}

function assertAllowedPath(path: string): void {
  if (!ALLOWED_PATHS.has(path)) {
    throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${path}`);
  }
}

/**
 * Substituted-transport page reader — representative of Usage/Costs pagination.
 * Real HTTP transport is only used when secret + LIVE GO present.
 */
export async function collectAdminUsagePage(input: {
  config: AdminCollectorConfig;
  path: string;
  query: Record<string, string>;
  collectionId: string;
}): Promise<{
  buckets: AdminUsageBucket[];
  nextPage: string | null;
  partial: boolean;
}> {
  assertAllowedPath(input.path);
  if (!input.config.adminApiKey) {
    throw new Error("BLOCKED_NO_SECRET");
  }
  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
    throw new Error("BLOCKED_NO_LIVE_GO");
  }
  const transport = input.config.transport;
  if (!transport) {
    throw new Error("BLOCKED_NO_TRANSPORT");
  }

  const res = await transport({
    method: "GET",
    path: input.path,
    query: input.query,
    headers: {
      Authorization: `Bearer ${input.config.adminApiKey}`,
      "Content-Type": "application/json",
    },
  });

  if (res.status === 429) {
    throw new Error("RATE_LIMITED");
  }
  if (res.status === 401 || res.status === 403) {
    throw new Error("ADMIN_PERMISSION_DENIED");
  }
  if (res.status < 200 || res.status >= 300) {
    throw new Error(`ADMIN_HTTP_${res.status}`);
  }

  const body = (res.json ?? {}) as {
    data?: unknown[];
    has_more?: boolean;
    next_page?: string | null;
  };
  const rows = Array.isArray(body.data) ? body.data : [];
  const collectedAtUtc = new Date().toISOString();
  const source =
    input.path.endsWith("/costs")
      ? ("openai.organization.costs" as const)
      : ("openai.organization.usage" as const);

  const buckets: AdminUsageBucket[] = [];
  for (const row of rows) {
    if (!row || typeof row !== "object") continue;
    const r = row as Record<string, unknown>;
    const start =
      typeof r.start_time === "number"
        ? new Date(r.start_time * 1000).toISOString()
        : typeof r.start_time === "string"
          ? r.start_time
          : input.query.start_time
            ? new Date(Number(input.query.start_time) * 1000).toISOString()
            : collectedAtUtc;
    const end =
      typeof r.end_time === "number"
        ? new Date(r.end_time * 1000).toISOString()
        : typeof r.end_time === "string"
          ? r.end_time
          : start;
    const amount =
      r.amount && typeof r.amount === "object"
        ? (r.amount as Record<string, unknown>)
        : null;
    const valueRaw =
      amount?.value ?? r.value ?? r.input_tokens ?? r.num_model_requests ?? 0;
    const value =
      typeof valueRaw === "number" || typeof valueRaw === "string"
        ? String(valueRaw)
        : "0";
    const currency =
      typeof amount?.currency === "string"
        ? amount.currency
        : source === "openai.organization.costs"
          ? "usd"
          : null;
    buckets.push({
      source,
      organizationScope: input.config.organizationScope,
      intervalStartUtc: start,
      intervalEndUtc: end,
      granularity: input.query.bucket_width === "1h" ? "hour" : "day",
      dimensions: {
        project_id:
          typeof r.project_id === "string"
            ? r.project_id
            : typeof (r.project_id as { value?: string } | null)?.value ===
                "string"
              ? (r.project_id as { value: string }).value
              : null,
        api_key_id:
          typeof r.api_key_id === "string"
            ? r.api_key_id
            : typeof (r.api_key_id as { value?: string } | null)?.value ===
                "string"
              ? (r.api_key_id as { value: string }).value
              : null,
        model: typeof r.model === "string" ? r.model : null,
      },
      unit:
        source === "openai.organization.costs"
          ? "currency"
          : typeof r.usage_type === "string"
            ? r.usage_type
            : "tokens",
      currency,
      value,
      completeness: "complete",
      collectedAtUtc,
      collectionId: input.collectionId,
    });
  }

  return {
    buckets,
    nextPage:
      body.has_more && typeof body.next_page === "string"
        ? body.next_page
        : null,
    partial: false,
  };
}

/**
 * Idempotent upsert: same bucket key replaces (does not add).
 * Partial collections must not wipe prior complete buckets.
 */
export function upsertAdminBuckets(
  buckets: AdminUsageBucket[],
  opts?: { replaceIncompleteOnly?: boolean },
): void {
  for (const b of buckets) {
    const key = bucketKey(b);
    const prev = snapshotByKey.get(key);
    if (
      prev &&
      prev.completeness === "complete" &&
      b.completeness === "partial" &&
      opts?.replaceIncompleteOnly !== false
    ) {
      // Do not overwrite complete with partial.
      continue;
    }
    snapshotByKey.set(key, b);
  }
}

export async function runAdminCollection(input: {
  config: AdminCollectorConfig;
  path: string;
  query: Record<string, string>;
  maxPages?: number;
}): Promise<AdminCollectionResult> {
  const collectionId = `acol_${Date.now().toString(36)}`;
  const collectedAtUtc = new Date().toISOString();
  const limits: string[] = [];

  if (!input.config.adminApiKey) {
    return {
      status: "BLOCKED_NO_SECRET",
      collectionId,
      collectedAtUtc,
      buckets: [],
      pagesFetched: 0,
      limits: ["OPENAI_ADMIN_KEY_ABSENT"],
      lastError: null,
    };
  }
  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
    return {
      status: "BLOCKED_NO_LIVE_GO",
      collectionId,
      collectedAtUtc,
      buckets: [],
      pagesFetched: 0,
      limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED"],
      lastError: null,
    };
  }

  const maxPages = Math.max(1, Math.min(50, input.maxPages ?? 10));
  const all: AdminUsageBucket[] = [];
  let page: string | null = null;
  let pagesFetched = 0;
  let partial = false;

  try {
    assertAllowedPath(input.path);
    for (let i = 0; i < maxPages; i++) {
      const query = { ...input.query };
      if (page) query.page = page;
      const result = await collectAdminUsagePage({
        config: input.config,
        path: input.path,
        query,
        collectionId,
      });
      pagesFetched += 1;
      all.push(...result.buckets);
      if (result.partial) partial = true;
      page = result.nextPage;
      if (!page) break;
      if (i === maxPages - 1 && page) {
        partial = true;
        limits.push("PAGINATION_TRUNCATED");
      }
    }

    if (partial) {
      for (const b of all) b.completeness = "partial";
      // Upsert partials without wiping prior completes for same keys.
      upsertAdminBuckets(all);
      lastSuccessfulCollection = {
        atUtc: collectedAtUtc,
        collectionId,
        status: "PARTIAL",
      };
      return {
        status: "PARTIAL",
        collectionId,
        collectedAtUtc,
        buckets: all,
        pagesFetched,
        limits,
        lastError: null,
      };
    }

    upsertAdminBuckets(all);
    lastSuccessfulCollection = {
      atUtc: collectedAtUtc,
      collectionId,
      status: "READY",
    };
    return {
      status: "READY",
      collectionId,
      collectedAtUtc,
      buckets: all,
      pagesFetched,
      limits,
      lastError: null,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg === "BLOCKED_NO_SECRET") {
      return {
        status: "BLOCKED_NO_SECRET",
        collectionId,
        collectedAtUtc,
        buckets: [],
        pagesFetched,
        limits,
        lastError: msg,
      };
    }
    if (msg === "BLOCKED_NO_LIVE_GO" || msg === "BLOCKED_NO_TRANSPORT") {
      return {
        status: "BLOCKED_NO_LIVE_GO",
        collectionId,
        collectedAtUtc,
        buckets: [],
        pagesFetched,
        limits,
        lastError: msg,
      };
    }
    // Error must not erase prior complete snapshots.
    return {
      status: "ERROR",
      collectionId,
      collectedAtUtc,
      buckets: [],
      pagesFetched,
      limits,
      lastError: msg,
    };
  }
}

/**
 * Compare Studio estimated USD (decimal string) to provider cost aggregate
 * only when scopes are comparable.
 */
export function reconcileFinOpsCosts(input: {
  studioEstimatedUsd: string;
  providerCostUsd: string | null;
  comparable: boolean;
  reasonIfNot?: string;
}): {
  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL";
  deltaUsd: string | null;
  limits: string[];
} {
  if (!input.comparable || input.providerCostUsd == null) {
    return {
      status: "NON_COMPARABLE",
      deltaUsd: null,
      limits: [input.reasonIfNot ?? "SCOPE_NOT_COMPARABLE"],
    };
  }
  const a = Number(input.studioEstimatedUsd);
  const b = Number(input.providerCostUsd);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return {
      status: "PARTIAL",
      deltaUsd: null,
      limits: ["DECIMAL_PARSE_FAILED"],
    };
  }
  // Fixed 10 dp string — display layer; not exact work attribution.
  const delta = (b - a).toFixed(10);
  return { status: "COMPARABLE", deltaUsd: delta, limits: [] };
}
<<<FILE_END>>>

### `projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`

<<<FILE_BEGIN projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md>>>
# Convergence OpenAI–Studio — As-built Macro-lot 1 (DEV candidat)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Statut | IMPLEMENTED (périmètre autorisé) — **NOT ADOPTED** · **NO RELEASE** |
| GO | Morris GO Macro-lot 1 Critical DEV |
| Contrats | `cadrage.md` / `contrat-fonctionnel.md` / `contrat-technique.md` @ `1e2e188d` |
| Candidat code tip (pré-lot) | `c574d262` · web `5a1289fc` |
| Hors GO | Migration PG · Admin LIVE · WEB LIVE · UX Figma page 13 · push projet |

## 1. Diagnostic AS-IS → transformations réalisées

| Domaine | Classe | Réalisé | Preuve | Gate restant |
|---|---|---|---|---|
| Tracing Agents SDK | ADAPT | `lib/agents-sdk-tracing.ts` ; `setTraceProcessors([StudioLocal])` ou OFF ; Nora + WEB worker | unit `ml5-agents-sdk-tracing` | Activer `SFIA_AGENTS_TRACING_MODE=local` en DEV |
| OBS métier | KEEP | `lib/observability.ts` inchangé comme SoT causale | — | — |
| Frontière | KEEP/ADAPT | `tool_usage.web_search.num_requests` a posteriori ; pas d’ASSUMED_1 | unit frontier + response-usage | G-WEB-PUBLIC |
| FinOps ledger | KEEP | `provider_usage_observations` | existant | — |
| Usage & Costs | BUILD | Collecteur isolé + rapprochement honnête UNAVAILABLE sans secret/GO | unit collector | Admin key + LIVE GO + migration PG |
| Continuité native | ADAPT/DEFER runtime | Module `provider-response-continuity` (OFF par défaut) | unit continuity | Preuve A/B + flag `native` |
| WEB | KEEP OFF | Gates préservés ; tracing aligné worker | existant + wiring | GO WEB |
| Décisions / retrieval / audio / L2 | DEFER | Non implémentés (lots suivants) | — | — |

## 2. Fichiers

### Créés
- `web/src/lib/agents-sdk-tracing.ts`
- `web/src/domains/conversation/provider-response-usage.ts`
- `web/src/domains/conversation/provider-response-continuity.ts`
- `web/src/domains/finops/provider-admin-usage-collector.ts`
- `web/tests/unit/ml5-agents-sdk-tracing.test.ts`
- `web/tests/unit/ml5-provider-response-usage.test.ts`
- `web/tests/unit/ml5-provider-response-continuity.test.ts`
- `web/tests/unit/ml5-provider-admin-usage-collector.test.ts`
- `construction/convergence-openai-studio/{cadrage,contrat-*}.md` (raccordement blob exact)
- `construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`
- `construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md`

### Modifiés
- `nora-adapter.ts` — configureAgentsSdkTracing
- `public-web-search-frontier.ts` — même politique tracing
- `provider-emission-frontier.ts` — réconciliation tool_usage
- `usage-read-service.ts` — `providerReconciliation` DTO
- `tests/unit/ml5-provider-emission-frontier.test.ts`
- `construction/delivery-history.md`

### Retirés
- Aucun (coexistence : OBS KEEP ; tracing custom mid-turn non retiré en masse — mapping partiel)

## 3. Configuration

| Variable | Rôle | Défaut |
|---|---|---|
| `SFIA_AGENTS_TRACING_MODE` | `off` \| `local` | `off` (rollback sûr) |
| `OPENAI_ADMIN_KEY` | Secret Admin isolé | absent → BLOCKED |
| `SFIA_ADMIN_USAGE_LIVE` | Autorise appels Admin réels (DEV only) | off |
| `SFIA_OPENAI_ORG_SCOPE` | Label scope org | `org:unspecified` |
| `SFIA_FINOPS_SCOPE_COMPARABLE` | Mapping lane↔projet prouvé | off → NON_COMPARABLE |
| `SFIA_PROVIDER_CONTINUITY_MODE` | `off` \| `native` | `off` |

## 4. Provisionnement Admin (procédure — secret hors chat)

1. Morris crée une clé Admin dédiée : https://platform.openai.com/settings/organization/admin-keys
2. Provisionner **uniquement** dans l’environnement isolé DEV (fichier secrets local / secret manager), variable `OPENAI_ADMIN_KEY`.
3. Ne jamais coller la valeur dans chat, Git, pack ou OBS.
4. Poser `SFIA_ADMIN_USAGE_LIVE=1` seulement après GO LIVE Admin spécifique.
5. Migration PG snapshots requise avant persistance produit (candidat documenté).

## 5. Remplacements / rationalisation

| Ancien | Nouveau | Couverture | Retrait |
|---|---|---|---|
| Tracing OFF permanent | Mode local filtré optionnel | Spans run/generation/tool redacted | Default processors remplacés ; export distant jamais enregistré |
| Commit hosted = max_tool_calls | Commit = num_requests si présent sinon UNKNOWN | Mesure billable honnête | ASSUMED_1 déjà non garantie ; confirmé |
| FinOps estimations seules | + DTO rapprochement | Fraîcheur / UNAVAILABLE | Pas de second ledger |

## 6. Critères CONV-F11…F15 (état)

| ID | Niveau | Réserve |
|---|---|---|
| F11 Tracing | COVERAGE VERIFIED (déterministe) | LIVE Agents path avec mode local à confirmer |
| F12 Continuité | IMPLEMENTED (module) / BEHAVIOR partiel | Flag native OFF ; A/B non LIVE |
| F13 FinOps rapprochement | IMPLEMENTED structurelle | Admin LIVE + mapping scope + migration |
| F14 Collecteur résilience | COVERAGE VERIFIED (transport substitué) | Pas d’appel Admin réel |
| F15 WEB | BEHAVIOR OFF / refuse gates | Pas de G-WEB-PUBLIC |

## 7. Roadmap delta (candidat — non appliqué)

Proposer sous gouvernance : « Macro-lot 1 convergence fournisseur — candidat DEV intégré ; gates Admin/WEB/migration/UX ouverts ».
<<<FILE_END>>>

### `projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md`

<<<FILE_BEGIN projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md>>>
# Migration candidate — provider Admin Usage/Costs snapshots

| Champ | Valeur |
|---|---|
| Statut | **CANDIDATE — NOT APPLIED** |
| Gate | GO Morris migration structurante (mandat §5 / §10.5) |
| Motif | Persistance idempotente des agrégats fournisseur pour rapprochement FinOps |

## Besoin

Le collecteur Admin (`provider-admin-usage-collector.ts`) maintient aujourd’hui une vue **in-process** pour tests et readiness. Une représentation PostgreSQL distincte du ledger `provider_usage_observations` est nécessaire pour :

- survie au redémarrage ;
- fraîcheur consultable par l’UI FinOps ;
- idempotence multi-collecte.

Ce n’est **pas** un second ledger métier.

## Schéma minimal proposé

```sql
-- CANDIDATE ONLY — do not apply without GO.
CREATE TABLE IF NOT EXISTS provider_admin_usage_snapshots (
  id uuid PRIMARY KEY,
  collected_at timestamptz NOT NULL,
  collection_id text NOT NULL,
  source text NOT NULL, -- openai.organization.usage | openai.organization.costs
  organization_scope text NOT NULL,
  interval_start_utc timestamptz NOT NULL,
  interval_end_utc timestamptz NOT NULL,
  granularity text NOT NULL, -- hour | day
  dimensions_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  unit text NOT NULL,
  currency text,
  value numeric(24, 10) NOT NULL,
  completeness text NOT NULL, -- complete | partial
  schema_version text NOT NULL DEFAULT '1',
  UNIQUE (
    source,
    organization_scope,
    interval_start_utc,
    interval_end_utc,
    granularity,
    unit,
    currency,
    dimensions_json
  )
);

CREATE TABLE IF NOT EXISTS provider_admin_collection_runs (
  collection_id text PRIMARY KEY,
  started_at timestamptz NOT NULL,
  finished_at timestamptz,
  status text NOT NULL,
  pages_fetched integer NOT NULL DEFAULT 0,
  limits_json jsonb NOT NULL DEFAULT '[]'::jsonb,
  last_error text
);
```

## Transition

1. GO migration DEV only.
2. Apply additive migration.
3. Brancher repository PG derrière le collecteur.
4. Ne pas backfill inventé.
5. Rollback = stop collect + drop tables si jamais écrites en RECETTE (RECETTE non touchée ici).
<<<FILE_END>>>

### `projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md`

<<<FILE_BEGIN projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md>>>
# Delta UX candidat — FinOps page 13 (Figma)

| Champ | Valeur |
|---|---|
| Référence | https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305 |
| Statut | **CANDIDATE — NOT APPLIED** (mandat §10.7 : validation Morris avant code UI) |
| Backend | `providerReconciliation` déjà exposé dans `/api/finops/summary` |

## Proposition de restitution

Conserver la page 13 existante. Ajouter une section secondaire (hors hero) :

1. **Estimation Studio** (inchangé) — travaux / tokens / USD estimés.
2. **Coût fournisseur** — montant agrégé + devise + période, ou état `Indisponible`.
3. **Écart** — uniquement si `comparability=COMPARABLE` ; sinon libellé `Non comparable` + limite.
4. **Fraîcheur** — dernière collecte réussie / partielle / bloquée (pas de secret).
5. **États d’erreur** — `OPENAI_ADMIN_KEY_ABSENT`, sync partielle, mapping lane non prouvé.

Aucune fausse précision. Aucun plafond monétaire produit. Pas de second écran FinOps.

## GO demandé

Validation Morris du delta avant transposition Figma → code.
<<<FILE_END>>>


---

## 7. Diff complet du commit produit `5794584a4dfae97dd78c5493946d9251b7847d65`

<<<DIFF_BEGIN>>>
commit 5794584a4dfae97dd78c5493946d9251b7847d65
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 20:50:12 2026 +0100

    feat(next): ML1 native provider frontier, local tracing, Admin FinOps collector

    Converge Studio Next DEV candidate on OpenAI native socle: filtered Agents
    tracing, tool_usage.web_search reconciliation, isolated Admin Usage/Costs
    collector (no LIVE), continuity helpers off-by-default, and convergence contracts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
new file mode 100644
index 00000000..1cc8155f
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md
@@ -0,0 +1,90 @@
+# Convergence OpenAI–Studio — As-built Macro-lot 1 (DEV candidat)
+
+| Champ | Valeur |
+|---|---|
+| Date | 2026-11-26 |
+| Statut | IMPLEMENTED (périmètre autorisé) — **NOT ADOPTED** · **NO RELEASE** |
+| GO | Morris GO Macro-lot 1 Critical DEV |
+| Contrats | `cadrage.md` / `contrat-fonctionnel.md` / `contrat-technique.md` @ `1e2e188d` |
+| Candidat code tip (pré-lot) | `c574d262` · web `5a1289fc` |
+| Hors GO | Migration PG · Admin LIVE · WEB LIVE · UX Figma page 13 · push projet |
+
+## 1. Diagnostic AS-IS → transformations réalisées
+
+| Domaine | Classe | Réalisé | Preuve | Gate restant |
+|---|---|---|---|---|
+| Tracing Agents SDK | ADAPT | `lib/agents-sdk-tracing.ts` ; `setTraceProcessors([StudioLocal])` ou OFF ; Nora + WEB worker | unit `ml5-agents-sdk-tracing` | Activer `SFIA_AGENTS_TRACING_MODE=local` en DEV |
+| OBS métier | KEEP | `lib/observability.ts` inchangé comme SoT causale | — | — |
+| Frontière | KEEP/ADAPT | `tool_usage.web_search.num_requests` a posteriori ; pas d’ASSUMED_1 | unit frontier + response-usage | G-WEB-PUBLIC |
+| FinOps ledger | KEEP | `provider_usage_observations` | existant | — |
+| Usage & Costs | BUILD | Collecteur isolé + rapprochement honnête UNAVAILABLE sans secret/GO | unit collector | Admin key + LIVE GO + migration PG |
+| Continuité native | ADAPT/DEFER runtime | Module `provider-response-continuity` (OFF par défaut) | unit continuity | Preuve A/B + flag `native` |
+| WEB | KEEP OFF | Gates préservés ; tracing aligné worker | existant + wiring | GO WEB |
+| Décisions / retrieval / audio / L2 | DEFER | Non implémentés (lots suivants) | — | — |
+
+## 2. Fichiers
+
+### Créés
+- `web/src/lib/agents-sdk-tracing.ts`
+- `web/src/domains/conversation/provider-response-usage.ts`
+- `web/src/domains/conversation/provider-response-continuity.ts`
+- `web/src/domains/finops/provider-admin-usage-collector.ts`
+- `web/tests/unit/ml5-agents-sdk-tracing.test.ts`
+- `web/tests/unit/ml5-provider-response-usage.test.ts`
+- `web/tests/unit/ml5-provider-response-continuity.test.ts`
+- `web/tests/unit/ml5-provider-admin-usage-collector.test.ts`
+- `construction/convergence-openai-studio/{cadrage,contrat-*}.md` (raccordement blob exact)
+- `construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`
+- `construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md`
+
+### Modifiés
+- `nora-adapter.ts` — configureAgentsSdkTracing
+- `public-web-search-frontier.ts` — même politique tracing
+- `provider-emission-frontier.ts` — réconciliation tool_usage
+- `usage-read-service.ts` — `providerReconciliation` DTO
+- `tests/unit/ml5-provider-emission-frontier.test.ts`
+- `construction/delivery-history.md`
+
+### Retirés
+- Aucun (coexistence : OBS KEEP ; tracing custom mid-turn non retiré en masse — mapping partiel)
+
+## 3. Configuration
+
+| Variable | Rôle | Défaut |
+|---|---|---|
+| `SFIA_AGENTS_TRACING_MODE` | `off` \| `local` | `off` (rollback sûr) |
+| `OPENAI_ADMIN_KEY` | Secret Admin isolé | absent → BLOCKED |
+| `SFIA_ADMIN_USAGE_LIVE` | Autorise appels Admin réels (DEV only) | off |
+| `SFIA_OPENAI_ORG_SCOPE` | Label scope org | `org:unspecified` |
+| `SFIA_FINOPS_SCOPE_COMPARABLE` | Mapping lane↔projet prouvé | off → NON_COMPARABLE |
+| `SFIA_PROVIDER_CONTINUITY_MODE` | `off` \| `native` | `off` |
+
+## 4. Provisionnement Admin (procédure — secret hors chat)
+
+1. Morris crée une clé Admin dédiée : https://platform.openai.com/settings/organization/admin-keys
+2. Provisionner **uniquement** dans l’environnement isolé DEV (fichier secrets local / secret manager), variable `OPENAI_ADMIN_KEY`.
+3. Ne jamais coller la valeur dans chat, Git, pack ou OBS.
+4. Poser `SFIA_ADMIN_USAGE_LIVE=1` seulement après GO LIVE Admin spécifique.
+5. Migration PG snapshots requise avant persistance produit (candidat documenté).
+
+## 5. Remplacements / rationalisation
+
+| Ancien | Nouveau | Couverture | Retrait |
+|---|---|---|---|
+| Tracing OFF permanent | Mode local filtré optionnel | Spans run/generation/tool redacted | Default processors remplacés ; export distant jamais enregistré |
+| Commit hosted = max_tool_calls | Commit = num_requests si présent sinon UNKNOWN | Mesure billable honnête | ASSUMED_1 déjà non garantie ; confirmé |
+| FinOps estimations seules | + DTO rapprochement | Fraîcheur / UNAVAILABLE | Pas de second ledger |
+
+## 6. Critères CONV-F11…F15 (état)
+
+| ID | Niveau | Réserve |
+|---|---|---|
+| F11 Tracing | COVERAGE VERIFIED (déterministe) | LIVE Agents path avec mode local à confirmer |
+| F12 Continuité | IMPLEMENTED (module) / BEHAVIOR partiel | Flag native OFF ; A/B non LIVE |
+| F13 FinOps rapprochement | IMPLEMENTED structurelle | Admin LIVE + mapping scope + migration |
+| F14 Collecteur résilience | COVERAGE VERIFIED (transport substitué) | Pas d’appel Admin réel |
+| F15 WEB | BEHAVIOR OFF / refuse gates | Pas de G-WEB-PUBLIC |
+
+## 7. Roadmap delta (candidat — non appliqué)
+
+Proposer sous gouvernance : « Macro-lot 1 convergence fournisseur — candidat DEV intégré ; gates Admin/WEB/migration/UX ouverts ».
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/cadrage.md b/projects/sfia-studio-next/construction/convergence-openai-studio/cadrage.md
new file mode 100644
index 00000000..66881ecd
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/cadrage.md
@@ -0,0 +1,108 @@
+# Convergence OpenAI–Studio Next — Cadrage
+
+| Champ | Valeur |
+|---|---|
+| Version / date | v0.1 — 26 novembre 2026 |
+| Statut | DOCUMENTED — orientation produit et trois macro-lots approuvés en conversation par Morris ; dossier candidat pour revue collective |
+| Nature | Cadrage de construction transverse R5 / ML5 ; non normatif, non mergé |
+| Mandat | Morris autorise la création Git des trois documents de ce dossier avant revue de contenu ; aucun GO technique, changement de doctrine, PR, merge, activation ou cutover |
+| Base documentaire | `8b334487597547484c756a135028f192d427fa88` (docs/next-ml5-uat-consolidation-20261124) ; main observé `997897fd7cf914771e7d08e8030dc7123fab7d25` |
+| Candidat produit rapporté | `c574d2621a6ce7b5fec3727853185982b23ca3bf` ; web tree `5a1289fcfa26b1963f53ed1364dbd842e771e46c` ; BUILD_ID `Le9pyy4fbPKT_m0YlplAr` |
+| Étude | Commit local docs `ae4aff22b023fea00be5ae1ec98c903d5fbbf145`, dossier blob `bb7995457ea3e40faa85968f7726e381878d6e97` ; [handoff complet](https://github.com/mcleland147/sfia-workspace/blob/460a121ff94bdfe08767a9870e7350e13f5d2a59/sfia-review-handoff/latest-chatgpt-review.md) (blob `89d4362cd82f639171220e63a64306f2e2031460`) |
+
+## 1. Intention et résultat utilisateur
+
+Faire évoluer Studio en exploitant les services natifs OpenAI lorsqu'ils couvrent mieux, ou au moins aussi bien, une responsabilité technique aujourd'hui réalisée par Studio. Conserver le fonctionnement nominal et la cohérence du produit ; améliorer l'investigation, la fiabilité, la lisibilité des consommations et l'expérience du Pilote. Éviter la duplication, le code compensatoire inutile, les moteurs parallèles durables et les remplacements par effet de mode.
+
+L'orientation « natif d'abord » est validée par Morris le 26/11 : pour une fonctionnalité existante, choisir le natif si son équivalence ou sa supériorité est démontrée ; pour une fonctionnalité absente, l'intégrer lorsqu'elle apporte une valeur produit. Un service natif ne garantit pas mécaniquement une meilleure fiabilité ni une meilleure couverture. Les preuves, les droits et les conditions réelles d'usage déterminent le remplacement. Le coût par résultat utile compte, mais jamais au détriment de la qualité.
+
+Le Pilote doit continuer à dialoguer avec Nora, investiguer, produire et consulter des documents, décider et suivre ses travaux sans apprendre le fonctionnement interne des API. Le choix technique ne doit pas créer un parcours utilisateur concurrent.
+
+## 2. Situation de départ et limites de connaissance
+
+Le candidat local ML5 a accumulé des preuves d'investigation Git, de production et de consommation, mais sa livraison n'a pas été acceptée. La trajectoire de livraison est suspendue pour cette convergence, selon l'arbitrage conversationnel. R5 IN PROGRESS / ML5 OPEN / R6 NOT STARTED / NO RELEASE / NOT ADOPTED ; RECETTE protégée, WEB LIVE OFF, livraison 2 non engagée. La Roadmap distante main et le suivi candidat du 25/11 ne matérialisent pas encore cette nouvelle orientation : aucune réécriture implicite de ces documents.
+
+Le code local n'est pas accessible directement à ChatGPT. Le handoff de l'étude, publié et relu, fournit un inventaire statique du candidat ; les états runtime et les versions exactes devront être vérifiés par Cursor avant construction. Aucun schéma de vision binaire n'est déclaré inspecté. Les versions SDK rapportées sont openai@7.50.0, @openai/agents et @openai/agents-openai@0.21.0.
+
+| Responsabilité / état rapporté | Existant | Convergence attendue |
+|---|---|---|
+| Cognition D3 | Conducteur, work, checkpoints, catalogue modèle/effort, Agents SDK + Responses | Enrichir les ressources et simplifier la gestion du contexte sans deuxième conducteur |
+| Frontière fournisseur | Contrôle HTTP, admission, count natif, limites, campagnes | Réutiliser et généraliser la frontière aux nouvelles familles d'appels ; ne pas refaire les bornes déjà qualifiées |
+| Observabilité | OBS métier, corrélation et instrumentation custom ; tracing SDK désactivé selon étude | Tracing natif filtré, retrait des seules redondances démontrées |
+| FinOps | Ledger PostgreSQL, usages, estimations, tarifs, API et interface existante | Ajouter usages/coûts fournisseur réconciliés, étendre les catégories |
+| WEB | Worker query-only, contrôle D6/B1, ouvertures directes, hosted bloqué | Mesure native des recherches facturables ; qualification des bornes ; isolation conservée |
+| D4/D9 | Journal/recherche lexicale, lecture Git, provenance et droits | Recherche sémantique/hybride, sélection d'un index dérivé, conservation des sources exactes |
+| PDF | Extraction pdfjs, visionneuse et droits ; cas scanné sans texte | Compréhension visuelle native en complément ou remplacement ciblé de préparation, jamais de la gouvernance |
+| Decisions | Pas d'intégration native rapportée | Jugements bornés à disposition de Nora |
+| Audio | NON IMPLÉMENTÉ dans le composer selon étude | Dictée éditable, transcription fichier puis qualification temps réel |
+| D7/D8 | Contrats de réalisation et preuves ; livraison 2 non engagée | Évaluer Agents API/Codex face à Cursor avant choix d'exécuteur |
+| Images génératives | Hors construction immédiate | Anticipation des dépendances seulement, horizon moyen terme ; Vision reste dans le lot documentaire |
+
+## 3. Vision cible
+
+Studio demeure l'application et le plan de contrôle métier. Nora qualifie les intentions et mobilise les capacités selon le besoin. Les domaines propriétaires conservent leurs objets, droits, effets, preuves et états durables. Les services OpenAI assurent des traitements spécialisés et fournissent leurs mesures natives. PostgreSQL reste la référence transactionnelle métier ; un stockage distant éventuel est une projection gouvernée ou un état technique d'inférence, jamais une seconde vérité sur les décisions, projets, droits, versions ou travaux.
+
+```mermaid
+flowchart TD
+ P[Pilote : conversation, documents, dictée] --> S[Studio : Nora D3 et domaines D4-D9]
+ S --> F[Admission et frontière fournisseur]
+ F --> N[OpenAI : Responses, Decisions, Retrieval, Files/Vision, WEB, Audio]
+ N --> S
+ S --> DB[(PostgreSQL métier)]
+ F --> O[OBS et FinOps Studio]
+ N --> O
+ U[Usage et Costs - consultation isolée] --> O
+ O --> UI[Consommation et coûts]
+```
+
+Le diagramme est conceptuel : la consultation administrative est indépendante du chemin cognitif ; la transcription avant envoi ne crée pas de travail D3. Il ne prescrit ni nouveau microservice ni nouveau moteur. D6 demeure l'unique autorité humaine et D7/D8 restent distincts de l'exécuteur fournisseur.
+
+## 4. Périmètre et trajectoire validée
+
+Les trois macro-lots ci-dessous sont validés en orientation et ordre logique par Morris ; leurs noms décrivent une responsabilité et non une phase historique. Les contrats détaillés restent candidats.
+
+| Macro-lot | Résultat et IN | OUT / dépendances | Sortie |
+|---|---|---|---|
+| 1 — Socle fournisseur natif et observabilité | Tracing, frontière multi-capacités, Usage & Costs isolés, FinOps, WEB, continuité native | Pas de Decisions produit, index documentaire ou audio ; gate WEB séparé | Socle mesurable, diagnostic fiable, rapprochement à périmètre égal, non-régression des travaux |
+| 2 — Cognition spécialisée et intelligence documentaire | Decisions, catalogue étendu, sélection Retrieval/Embeddings/Vector Stores/File Search, Files/Vision, PDF | Pas de moteur permanent concurrent, audio hors lot ; dépend des interfaces d'admission/usage du lot 1 | Investigation plus pertinente ou équivalente, provenance, sécurité, preuves comparatives et retrait ciblé du code remplacé |
+| 3 — Interaction audio avec Nora | Dictée, transcription, composer, qualification du mode temps réel, FinOps audio | Pas d'agent vocal autonome, génération d'image ou vidéo ; dépend du socle fournisseur | Pilote dicte, relit, corrige, annule et envoie ; texte nominal inchangé |
+
+Le lot 3 peut être parallélisé avec le lot 2 seulement après stabilisation des interfaces communes et décision au moment opportun, pas de GO anticipé. Un intégrateur commun vérifie l'ensemble. Le choix de l'exécuteur technique (Cursor, Agents API ou combinaison justifiée) est instruit avant ML5 livraison 2 ; aucune modification du processus externe ChatGPT/Cursor SFIA v2.6. La génération d'images reste différée ; aucun lot de génération vidéo.
+
+Après les trois lots : qualification intégrée, revue, périmètre et GO RECETTE spécifique, mise à disposition contrôlée, recette utilisateur, puis reprise de la livraison 2 sous arbitrage. R6, release, merge, promotion, adoption restent des gates distincts.
+
+## 5. Règle de transformation de l'existant
+
+Pour chaque responsabilité, inventorier le code effectif et ses consommateurs ; examiner le service natif et ses limites ; choisir KEEP / REUSE NATIVE / ADAPT / REPLACE / RETIRE / BUILD / DEFER / BLOCKED. La matrice du [contrat technique](contrat-technique.md) fixe les candidats, non une liste de suppressions autorisées.
+
+Avant un remplacement : fixer un oracle indépendant du mécanisme, mesurer l'existant sur des parcours représentatifs, évaluer le natif, assurer une transition réversible, vérifier les droits et les cas d'échec. Ne retirer l'ancien chemin qu'après preuve de couverture et migration de ses consommateurs ; les chemins doubles sont temporaires et bornés, pas une architecture cible. Un fallback a une condition explicite de déclenchement et ne recrée pas une seconde autorité. Les preuves historiques restent référencées à leur candidat et sont réutilisables seulement selon analyse d'impact.
+
+## 6. Revue de convergence préalable à la construction
+
+La revue collective se fonde sur les trois documents et le dossier d'étude, puis sur l'inventaire exact du candidat par Cursor. Elle doit rendre une conclusion par capacité :
+
+| Contrôle | Attendu |
+|---|---|
+| Fonctionnement nominal | parcours conversation, Git, connaissances, décisions, production/révision, PDF, FinOps préservés |
+| Responsabilités | un propriétaire, une vérité métier, aucune autorité déléguée à un score IA |
+| Compatibilité | versions SDK/REST, permissions, modèles, endpoint, données et schéma réellement compatibles |
+| Remplacement | mécanismes, consommateurs, couverture, transition, rollback et exit identifiés |
+| Intégrité | continuité, droits, versions, idempotence, annulation et erreurs |
+| Données | minimisation, rétention, révocation, isolation, coûts et nouvelles persistances explicités |
+| Preuve | niveau réel requis, oracle, preuve de non-régression et gain attendu |
+| Séquencement | interfaces stables, dépendances, capacité suivante, réserves bloquantes/isolables |
+
+Résultats possibles : compatible, compatible sous adaptation identifiée, incompatible (motif et alternative), non observé (preuve ou arbitrage requis). Aucun verdict runtime déduit de l'étude. L'intégrateur tient la matrice dans le contrat technique et l'actualise avec les preuves dans le lot concerné ; pas de registre de gouvernance parallèle.
+
+## 7. Gates et pilotage
+
+Le GO documentaire est consommé pour la création de ce dossier candidat ; le GO d'orientation ne vaut pas GO technique, permissions, clés, transfert de corpus, migration, nouvelle politique de sécurité, WEB mixte ou RECETTE. Les choix détaillés, dont l'enveloppe hosted WEB, l'identité administrative, la persistance externe Retrieval et la configuration de la continuité native, sont instruits au moment pertinent ; ne pas solliciter Morris pour un choix d'implémentation réversible non structurant. Les décisions structurelles sont explicites, datées, reportées dans les sources propriétaires après validation.
+
+Statut initial : cadrage DOCUMENTED ; contrat fonctionnel et contrat technique candidats, à revoir collectivement. Aucun ADOPTED. Une fois la revue et les autorisations obtenues, Cursor reçoit un mandat SFIA v2.6 par macro-lot cohérent. Pas de micro-cycles de pure recopie.
+
+## 8. Sources et navigation
+
+- [Contrat fonctionnel candidat](contrat-fonctionnel.md) ; [contrat technique candidat](contrat-technique.md).
+- [SEF](../../governance/SEF.md), [Roadmap](../../governance/roadmap.md), [Nommage](../../governance/product-naming-conventions.md), [R4/DATA-01](../../governance/decisions/2026-11-04-r4-architecture-exit.md), [SEM](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md), [ENV-01](../../governance/environnements-recette-et-promotions.md) : versions de la base documentaire, statut propre de chaque source conservé.
+- [Vision fondatrice](../../cadrage/vision-cible/README.md), [contrat d'acceptation ML5](../contrat-acceptation-cognition-et-realisation-gouvernee.md), [allocation/WEB/FinOps](../../conception-fonctionnelle/allocation-cognitive-recherche-web-et-finops.md), [architecture allocation](../../architecture-technique/allocation-cognitive-recherche-web-et-finops.md), [conducteur D3](../../architecture-technique/conducteur-cognitif-et-production-nora.md), [OBS](../../architecture-technique/contrat-observabilite-transverse.md).
+- Dossier d'étude intégral reproduit dans le [handoff 460a121f, lignes 193–821](https://github.com/mcleland147/sfia-workspace/blob/460a121ff94bdfe08767a9870e7350e13f5d2a59/sfia-review-handoff/latest-chatgpt-review.md#L193-L821). Étude locale et non mergée ; ne pas référencer son chemin comme disponible sur cette branche.
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md b/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md
new file mode 100644
index 00000000..273ab3b9
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md
@@ -0,0 +1,129 @@
+# Convergence OpenAI–Studio Next — Contrat fonctionnel candidat
+
+| Champ | Valeur |
+|---|---|
+| Version | v0.1 — 26 novembre 2026 |
+| Statut | DOCUMENTED / CANDIDATE SPEC — à revoir collectivement ; pas VALIDATED SPEC ni IMPLEMENTED |
+| Portée | R5 / ML5 — trois macro-lots approuvés en orientation par Morris |
+| Référence | [Cadrage](cadrage.md), [contrat technique](contrat-technique.md), étude [460a121f](https://github.com/mcleland147/sfia-workspace/blob/460a121ff94bdfe08767a9870e7350e13f5d2a59/sfia-review-handoff/latest-chatgpt-review.md) |
+| Autorité | Morris : arbitrages et gates. Pilote : décisions métier via D6. Les contrats R2 propriétaires restent applicables. |
+
+## 1. Expérience attendue
+
+Le Pilote travaille dans le même Studio et avec la même Nora. Les services natifs ne deviennent pas des applications ou assistants concurrents. Le fonctionnement existant reste utilisable lorsque les services nouveaux sont indisponibles, dans la mesure où un chemin sûr et réellement disponible existe. Sinon le produit expose la limite, sans simuler une réussite. Une amélioration doit apporter au moins une équivalence fonctionnelle sur les parcours conservés, et une valeur mesurable lorsqu'elle est annoncée : qualité, couverture, fiabilité, maintenabilité, coût par résultat utile ou expérience.
+
+Les règles ci-dessous sont des critères de conception candidats à la revue. Les décisions déjà opposables (SEM, D6, droits, versions, DATA-01, ENV-01) ne sont pas redéfinies.
+
+## 2. Règles transverses
+
+| ID | Besoin et comportement attendu | Vérification |
+|---|---|---|
+| CONV-F01 | Le Pilote conserve ses projets, conversations, travaux, documents, décisions et parcours nominaux. | Même corpus et mêmes intentions avant/après, conservation des identités et effets |
+| CONV-F02 | Nora qualifie sémantiquement le besoin puis mobilise une ressource appropriée ; les domaines Studio vérifient son admissibilité. | Pas de routeur lexical ni de classification obligatoire préalable ; proposition et admission traçables |
+| CONV-F03 | Une sortie OpenAI est un résultat technique ou cognitif, jamais une HumanDecision. | Refus des effets sans acte humain requis ; score IA non autorisant |
+| CONV-F04 | Tout usage est imputable à une opération réelle et, si applicable, au travail/projet ; les inconnues restent visibles. | Pas de workId fictif ni coût inconnu présenté comme nul |
+| CONV-F05 | Échec, annulation, absence de permission, indisponibilité ou perte de contexte sont explicites. | Reprise sans duplication, requalification ou suspension honnête |
+| CONV-F06 | Les données restent cloisonnées par environnement, Pilote et projet selon les droits applicables. | Aucune consultation après révocation ; aucune fuite via WEB, trace, index ou audio |
+| CONV-F07 | Un remplacement exige la couverture des fonctions réellement utilisées, incluant erreurs et reprise ; maintien d'un rollback borné. | Oracle indépendant, non-régression et preuve de retrait des redondances |
+| CONV-F08 | Les capacités ne sont disponibles qu'après configuration, admission et qualification effectives. | Distinction DOCUMENTED, VALIDATED SPEC, IMPLEMENTED, COVERAGE VERIFIED, BEHAVIOR PROVEN, ADOPTED |
+
+## 3. Lot 1 — Socle fournisseur natif et observabilité
+
+### 3.1 Observabilité et continuité
+
+Le Pilote doit pouvoir utiliser Nora sans changement de parcours. Le constructeur peut diagnostiquer une génération, un outil, une tentative, une erreur ou une reprise grâce à des traces liées à l'opération réelle. Le diagnostic natif complète ou remplace les événements techniques redondants ; les événements métier, effets D6 et preuves restent Studio. Le contenu privé n'est pas exposé pour les besoins du diagnostic.
+
+Nora poursuit un travail avec les acquis pertinents, ses sources et ses contraintes. Une optimisation de contexte fournisseur n'autorise ni oubli des acquis déterminants, ni réutilisation d'un contexte devenu interdit. La reprise reste possible après indisponibilité de l'état fournisseur à partir de la vérité métier Studio, sinon suspension expliquée. Aucun changement arbitraire de budgets cognitifs ou de politique modèle/effort. Les optimisations sont appréciées sur la qualité, la latence et la consommation cumulée ; pas de promesse d'économie automatique.
+
+### 3.2 Consommation et coûts : un seul espace utilisateur
+
+Le mécanisme actuel observe et estime les coûts des travaux. OpenAI Usage indique les usages agrégés ; OpenAI Costs indique les coûts enregistrés par le fournisseur. Studio réunit les deux niveaux, sans les confondre. Il ne peut pas attribuer arbitrairement un coût fournisseur agrégé à une investigation, à un document ou à un projet métier.
+
+| Information | Vue attendue | Qualification |
+|---|---|---|
+| Usage opérationnel | Travail, opération, ressource, modèle/effort observable, tokens, outils, audio et autres unités pertinentes | Mesuré / partiel / inconnu |
+| Estimation Studio | Estimation par travail et agrégat selon tarifs versionnés | Estimation, non facture |
+| Usage fournisseur | Période, projet OpenAI, clé ou autre dimension lorsqu'elle est retournée | Agrégat fournisseur, source et fraîcheur |
+| Coût fournisseur | Montant, devise, période, projet OpenAI/poste et autres regroupements réellement disponibles | Coût enregistré par le fournisseur, non coût exact par travail |
+| Écart | Coût fournisseur moins estimation Studio, exclusivement sur périmètre et période comparables | Comparable / partiel / non comparable |
+| Synchronisation | Dernière réussite, période couverte, actualité, incident ou données indisponibles | Pas d'échec de Nora si synchronisation indisponible |
+
+Exemple fictif : pour une journée UTC et un même périmètre fournisseur, trois travaux Studio totalisent 0,80 USD estimés ; Costs retourne 0,86 USD. L'écart agrégé est de 0,06 USD. Studio ne répartit pas les 0,06 entre les travaux ; il signale un écart à expliquer. Si les clés partagent un projet et que le regroupement disponible ne permet pas de les distinguer, pas d'attribution DEV/RECETTE fictive. Si la période n'est pas complète, l'écart est provisoire.
+
+La consultation administrative se fait hors runtime Nora. Le Pilote voit seulement les données autorisées, et non les coûts d'autres projets/organisations. Les permissions produit d'accès financier restent opposables. Pas de deuxième application financière ni de second ledger de consommations ; évolution de l'interface existante (contrat page 13 à préserver, revue de la nouvelle restitution avant réalisation).
+
+Fréquence candidate : usage périodique, coût rapproché quotidiennement avec fenêtre de rafraîchissement des jours récents ; actualisation contrôlée si utile. La date de disponibilité du fournisseur prévaut sur une promesse de temps réel. Pas de plafond financier imposé à Nora.
+
+### 3.3 WEB
+
+Le Pilote peut demander une recherche publique quand elle est effectivement admise. Nora examine des sources, ouvre et confronte les résultats puis indique ce qu'elle a réellement consulté. Le WEB public ne reçoit pas de contexte privé ; une requête exceptionnelle dépend de l'autorité D6 applicable et est revérifiée au point d'effet. WEB mixte reste fermé.
+
+L'usage des recherches facturables observé n'est pas assimilé au nombre de Responses ou d'appels intégrés. Les limites préventives et la mesure après appel sont distinguées. Une campagne non bornée selon le gate applicable ne démarre pas. Si WEB désactivé, le produit ne prétend pas avoir recherché ; le reste de Nora fonctionne normalement.
+
+### 3.4 Acceptation lot 1
+
+| ID | Parcours / oracle |
+|---|---|
+| CONV-F11 | Demande nominale et boucle d'outils réelle : réponse, état durable, traces natives filtrées, événements métier et tentatives concordants ; erreurs/retries visibles, absence d'export privé |
+| CONV-F12 | Reprise d'une investigation avec acquis : même travail, sources et contraintes conservées, aucune relecture artificielle ; comparaison avec chemin existant et preuve de rollback |
+| CONV-F13 | Rapprochement sur un périmètre identique : données PostgreSQL, API et DOM FinOps concordantes ; agrégats fournisseur, estimation, écart et fraîcheur séparés ; absence de double comptage |
+| CONV-F14 | Synchronisation indisponible / pagination / donnée tardive / projet non autorisé : Nora non bloquée, état exact et données cloisonnées |
+| CONV-F15 | WEB public, si gate autorisé : recherche sourcée, confrontation et mesure native ; requête interdite n'atteint pas le réseau ; WEB OFF effectif après qualification |
+
+## 4. Lot 2 — Cognition spécialisée et intelligence documentaire
+
+### 4.1 Ressources cognitives
+
+Nora peut mobiliser des générations, jugements bornés, recherche documentaire ou compréhension visuelle selon la nature du travail. Le Pilote n'a pas à choisir manuellement une API, un modèle ou un effort. Une ressource spécialisée est optionnelle et contextualisée ; la décision finale métier ou l'explication argumentée ne se réduit pas à un score. Decisions peut servir à évaluer une pertinence, une couverture, une comparaison ou un besoin d'approfondissement, sur données suffisantes. Une réponse incertaine, ambiguë ou non supportée conduit à une analyse plus adaptée ou une limite explicite. Pas de seuil universel de vérité, ni de remplacement de HumanDecision.
+
+### 4.2 Recherche documentaire
+
+Pour un besoin projet, Nora trouve les passages pertinents dans les ressources autorisées, y compris si le vocabulaire diffère, et sait retrouver les références exactes quand elles sont nécessaires. Le corpus comprend les sujets et acquis D4 et les ressources documentaires/Git autorisées D9 selon leur nature et leurs versions. Un résultat de recherche est un candidat de consultation, pas une preuve par lui-même. Nora vérifie les sources originales pertinentes et distingue fait, hypothèse, contradiction et recommandation.
+
+La sélection d'une architecture Retrieval doit comparer la recherche actuelle et les solutions natives/locaux dérivées ; une seule stratégie permanente retenue par responsabilité après preuve. Le Pilote ne doit pas subir deux moteurs, deux mémoires ni deux bibliothèques. Le rafraîchissement, l'indexation et les droits ne doivent pas dépendre d'une intervention manuelle permanente. Si une ressource n'est pas indexée, elle reste consultable par un chemin existant sûr ; l'absence de résultat n'implique pas l'absence de connaissance.
+
+Une source révoquée, supprimée, modifiée ou d'un autre projet ne doit pas être injectée à Nora ni visible dans les citations, même si un index externe retourne encore un ancien passage. L'historique déjà conservé est traité selon les droits et règles de conservation applicables, sans effacement rétroactif fictif.
+
+### 4.3 Documents et vision
+
+Nora peut analyser du texte, des schémas, tableaux, captures et PDF scannés lorsqu'une capacité native multimodale est admise. La compréhension visuelle ne vaut pas OCR exhaustif ni preuve de chaque détail. Nora signale les zones illisibles, pages non consultées et interprétations incertaines. La visionneuse actuelle continue d'ouvrir la version exacte, selon droits, avec pagination, zoom et recherche textuelle lorsque disponible ; elle ne dépend pas de la réussite d'une analyse IA.
+
+La transmission ponctuelle et l'indexation permanente sont des opérations distinctes. Les droits et règles de stockage externe s'appliquent avant chaque transfert. Le Pilote peut demander une lecture ciblée plutôt qu'une analyse de tout un corpus ; les sources utilisées restent identifiables.
+
+### 4.4 Acceptation lot 2
+
+| ID | Parcours / oracle |
+|---|---|
+| CONV-F21 | Comparaison Decisions / Responses sur jugements bornés labellisés indépendamment ; qualité au moins équivalente sur les cas remplacés, erreurs et incertitude explicites ; aucun effet D6 |
+| CONV-F22 | Recherche comparative sur Chantiers360, RoomBooking et acquis D4 autorisés : questions lexicales exactes, paraphrases, homonymes, faits contradictoires, sources absentes ; pertinence/rappel, citations exactes, coût et latence comparés |
+| CONV-F23 | Mise à jour, révocation, suppression et autre projet : ancienne version non injectée, résultats filtrés et références exactes, index reconstructible |
+| CONV-F24 | PDF textuel, schéma/scanné BatiNova si autorisé, tableau complexe : comparaison des résultats à un oracle humain/documentaire, limites explicites, visionneuse fonctionnelle |
+| CONV-F25 | Investigation → reprise → note → inspection/conservation → révision ciblée : maintien des contrats D3/D4/D6/D8/D9, V1 historique et V2 courante, pas d'effet non demandé |
+| CONV-F26 | Usages Decisions, embeddings, retrieval, stockage, Files/Vision attribuables et visibles dans FinOps ; absence de double comptage ou coût inventé |
+
+## 5. Lot 3 — Interaction audio avec Nora
+
+Le composer offre une action micro accessible. L'enregistrement commence sur action explicite après permission navigateur. Un état visible indique l'enregistrement ; le Pilote peut arrêter ou annuler. En mode fichier, le texte arrive après arrêt ; en mode temps réel candidat, le texte provisoire s'affiche progressivement, distingué du texte final. Le texte final est éditable dans le composer, jamais envoyé automatiquement.
+
+L'envoi explicite crée le même message USER authentifié que la saisie clavier ; les règles habituelles d'inspection et d'autorité restent inchangées. Une transcription ou un clic micro ne vaut pas HumanDecision. Une permission refusée, un réseau perdu, un fichier non supporté ou une interruption laisse le composer utilisable au clavier et préserve le brouillon. L'audio brut n'est pas conservé par défaut au-delà de la nécessité de traitement ; les modalités fournisseur restent à qualifier. Les consommations audio sont visibles même sans travail cognitif (transcription annulée ou non envoyée si elle a effectivement consommé).
+
+Le mode fichier est le premier parcours ; qualifier Realtime dans le même lot et retenir son intégration si l'amélioration de l'expérience et les garanties sont établies. La voix bidirectionnelle autonome est hors lot.
+
+| ID | Parcours / oracle |
+|---|---|
+| CONV-F31 | Micro autorisé → transcription française d'une demande technique → édition → envoi : texte fidèle au corpus de référence, un seul message et aucune action avant envoi |
+| CONV-F32 | Refus micro, annulation, expiration, réseau, navigation et double clic : arrêt réel, aucun envoi intempestif, aucun brouillon perdu |
+| CONV-F33 | Comparaison fichier / temps réel : qualité terminologique, latence, continuité, coût, accessibilité et sécurité ; aucune clé longue dans le navigateur |
+| CONV-F34 | Usage audio mesuré et rapproché selon dimensions disponibles ; le texte reste utilisable si transcription indisponible ; droits et rétention vérifiés |
+
+## 6. Capacités différées et future réalisation
+
+Agents API/Codex : évaluer avant livraison 2 à partir du parcours D7 mandat inspecté et autorisé → tentative → résultats/artifacts → D8 qualification → acceptation D6. Comparer Cursor et natif sur l'équivalence de preuves, la maîtrise du dépôt, l'annulation, la reprise, les droits et les coûts. Ne pas remplacer un exécuteur avant preuve ; ne pas construire d'abstraction générique sans besoin. Cette évaluation ne modifie pas notre processus externe de construction.
+
+Images génératives : orientation future seulement ; ne pas activer de permission ni d'interface par défaut. Vision d'images existantes est incluse au lot 2. Vidéo hors périmètre.
+
+## 7. Recette et revue
+
+Les critères ci-dessus complètent, sans remplacer, le [contrat d'acceptation cognition/réalisation](../contrat-acceptation-cognition-et-realisation-gouvernee.md). Les cas historiques RoomBooking, Chantiers360 et InterventionTrack constituent des sources de non-régression à réemployer selon impact, non des replays systématiques. Les scénarios doivent comporter corpus autorisés, critères individuels, oracle indépendant, résultats complets utiles et limites de preuve. PASS d'un endpoint ou présence d'un mot-clé ne valent pas validation intellectuelle. F2 visuelle relève de Morris sur l'environnement autorisé ; le navigateur fonctionnel est à qualifier avant gate.
+
+Sources propriétaires : [allocation fonctionnelle](../../conception-fonctionnelle/allocation-cognitive-recherche-web-et-finops.md), [D4](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md), [D6](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md), [D9](../../conception-fonctionnelle/integration-git-gouvernee.md), [D7](../../conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md), [D8](../../conception-fonctionnelle/resultats-et-preuves.md), [OBS](../../architecture-technique/contrat-observabilite-transverse.md), [SEM](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md). Contrat candidat soumis à revue collective, sans modification de ces sources.
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md b/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md
new file mode 100644
index 00000000..21fe4e24
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md
@@ -0,0 +1,208 @@
+# Convergence OpenAI–Studio Next — Contrat technique candidat
+
+| Champ | Valeur |
+|---|---|
+| Version | v0.1 — 26 novembre 2026 |
+| Statut | DOCUMENTED / CANDIDATE TECHNICAL CONTRACT — revue collective préalable, aucun ADR nouveau ni GO d'implémentation |
+| Références | [Cadrage](cadrage.md), [contrat fonctionnel](contrat-fonctionnel.md), [étude technique 460a121f](https://github.com/mcleland147/sfia-workspace/blob/460a121ff94bdfe08767a9870e7350e13f5d2a59/sfia-review-handoff/latest-chatgpt-review.md) |
+| Code | Candidat local `c574d262`, web tree `5a1289fc` rapportés ; NON OBSERVÉ directement par ChatGPT ; inventaire ci-dessous dérivé du handoff, à confirmer au Git Truth Check local |
+| Principe | Natif d'abord, un propriétaire par responsabilité, adaptation des mécanismes existants ; aucune architecture concurrente permanente |
+
+## 1. Architecture et frontières candidates
+
+Studio reste une application modulaire. Préserver D3 (travail et conduite), D4 (connaissances), D6 (autorité), D9 (sources Git), D7 (contrat d'exécution), D8 (qualification), OBS (causalité) et FinOps (attribution). Les API OpenAI ne possèdent aucun droit métier. Les traitements natifs deviennent des ressources derrière les frontières existantes, non une deuxième Nora. PostgreSQL unique pour les états métier ; une projection d'index ou un contexte fournisseur éventuel ne devient pas source de vérité.
+
+```mermaid
+flowchart TD
+ UI[Composer / Documents / FinOps] --> D[Domaines Studio]
+ D --> A[Admission par ressource et scope]
+ A --> T[Frontière fournisseur commune]
+ T --> R[Responses et outils]
+ T --> J[Decisions]
+ T --> V[Retrieval / Files / Vision]
+ T --> AU[Audio / Realtime]
+ R --> T
+ J --> T
+ V --> T
+ AU --> T
+ T --> D
+ D --> PG[(PostgreSQL métier)]
+ T --> O[Observations FinOps et OBS]
+ R -. spans natifs filtrés .-> O
+ C[Collecte Usage & Costs isolée] --> O
+ O --> PG
+ PG --> UI
+```
+
+Les flèches représentent des responsabilités, pas des appels synchrones obligatoires. Les lectures financières administratives et le cycle de vie des ressources externes utilisent des identités distinctes et un contrôle adapté à leur surface ; le runtime Nora n'accède pas à la clé Admin. Les appels Realtime éventuellement directs navigateur exigent admission, jeton temporaire borné, corrélation et contrôle de session ; ils ne sont pas présumés passer par un wrapper HTTP serveur.
+
+## 2. AS-IS et matrice de transformation
+
+Inventaire statique rapporté par l'étude §§1–7 et §§14–16 ; résoudre chemins réels et appels/consommateurs avant mutation. Les classifications sont des cibles candidates.
+
+| Existant / ancrage | Natif / cible | Classe | Responsabilité conservée, impact et exit |
+|---|---|---|---|
+| nora-adapter.ts, configureSdkTracingSafe, tracing OFF | Agents SDK tracing local filtré | ADAPT | OBS métier et transport ; preuve zéro export et corrélation ; retour tracing OFF |
+| lib/observability.ts, logs mid-turn | Spans natifs | REPLACE partiel / RETIRE conditionnel | Retirer seulement événements équivalents, mapping et tests outils/erreurs ; pas de suppression d'événement d'autorité |
+| provider-emission-frontier.ts, admission/count/max_* | Contrôles natifs + frontière existante étendue | KEEP / ADAPT | Identité, scope, réservation, retries, annulation, inconnues ; garder contrôle transport et usage distinct |
+| usage-accounting.ts, domains/finops/usage-*.ts, tariff-catalog.ts | Usage/Costs, usages natifs par surface | ADAPT / BUILD collecte isolée | Ledger d'attribution unique, projections et tarifs ; snapshot fournisseur distinct d'une charge métier ; réconciliation UI |
+| public-web-search-frontier.ts, web-egress-guard.ts, web-public-query-authority.ts, web-search-tools.ts | max_tool_calls, tool_usage.web_search.num_requests | ADAPT / REPLACE compteur supposé | D6/B1 et worker query-only ; gate avant effet ; jamais rollback vers ASSUMED_1 comme garantie |
+| cognitive-conductor.ts, cognitive-work.ts, context assembly | previous_response_id, cache, compaction, sessions selon preuve | KEEP / ADAPT | Checkpoints et reprise D3, fencing et acquis ; sortie de contexte fournisseur possible ; pas de stockage distant implicite |
+| semantic-qualification.ts et autres jugements Responses réellement inventoriés | Decisions | BUILD / REPLACE ciblé | Nora propose, admission vérifie ; qualité comparée ; retour Responses admissible si justifié |
+| cognitive-policy.ts / cognitive-resources | Catalogue ressources spécialisé | ADAPT | Pas de routeur parallèle, aucune nouvelle politique active sans gate ; version et qualification |
+| domains/knowledge/journal.ts, searchJournalSubjects / searchJournalDecisions, outils Git | Retrieval / Embeddings / Vector Stores | ADAPT / REPLACE ciblé | D4/D9, provenance, recherche exacte, droits ; sélection d'un index dérivé ; reconstruire et désactiver |
+| pdf-extract-server.ts, pdf-viewer-authorization.ts, visionneuse | Files / Vision | ADAPT / BUILD | Consultation, texte exact et droits maintenus ; retrait seulement d'une préparation devenue redondante ; fallback extraction sûre |
+| Composer texte | Audio Transcriptions | BUILD / REUSE NATIVE | Message USER confirmé, pas d'effet avant envoi ; désactivation micro sans perte clavier |
+| Realtime non implémenté | Transcription progressive | BUILD conditionnel | Mode fichier repli ; fin de session et quotas vérifiés |
+| D7/D8 livraison 2 non engagée | Agents API/Codex | EVALUATION différée | Contrat d'exécution et preuves indépendants du fournisseur ; pas de migration pendant ces trois lots |
+| Génération images | Images API | DEFER | Évaluer ultérieurement besoin, permission, coûts et UX |
+
+Chaque REPLACE/RETIRE exige inventaire des consommateurs (routes, outils, tests, données, UI), baseline, parité, stratégie de transition, observabilité, preuve intégrée, rollback et exit daté. Les noms techniques définitifs découlent de la responsabilité, sans noms de chantier. Pas de suppression non autorisée ; aucune bibliothèque ou table nouvelle par défaut.
+
+## 3. Lot 1 — Socle fournisseur
+
+### 3.1 Frontière et contrat commun de ressource
+
+Adapter la frontière existante plutôt que créer un deuxième client incontrôlé. Décrire chaque surface par capacité, type d'opération, destination autorisée, identité fournisseur, lane, modèle/paramètres, politique, scope, sensibilité des données, contraintes, unité d'usage et statut de permission. Ne pas imposer aux nouvelles API des paramètres Responses qui n'ont aucun sens pour elles.
+
+Flux serveur candidat : demande du domaine → admission technique et métier → validation du payload final → réservation lorsque requise → émission réelle → observation de tentative/résultat/erreur → réconciliation → projection. Conserver identifiants operation/work (si applicable), segment, admission, invocation, tentative, IDs natifs, version de politique et preuves ; aucune attribution fictive. Contrôler chaque véritable effet externe, retries inclus, au niveau adapté (HTTP, session Realtime, transfert ou tâche administrative). Séparer tentative, requête logique, usage mesuré, agrégat et estimation. Enregistrer durablement les contacts potentiellement facturables ou inconnus dans la capacité existante, sans transaction ouverte pendant le réseau ; si schéma insuffisant, changement minimal soumis au gate migration.
+
+Pour une campagne à limite stricte, exploiter input_tokens natif sur un payload de comptage équivalent et vérifier l'identité du payload émis ; comptage lui-même instrumenté, sans récursion, timeout et limites. max_output_tokens et paramètres effectivement acceptés contrôlent la sortie. Les estimations restent des estimations. Les apports de contenu hosted et contextes distants doivent être bornés ou la campagne arrêtée. Un redémarrage invalide une enveloppe non reprise de manière sûre. Aucun plafond monétaire global produit.
+
+### 3.2 Tracing natif et OBS
+
+Étude rapporte setTracingDisabled(true) dans nora-adapter.ts. Cible : activer un traitement local des spans de run/generation/tool, vérifier le SDK verrouillé et configurer explicitement la liste des processeurs sans export par défaut (setTraceProcessors si réellement disponible ; ne pas simplement ajouter un processor). Désactiver la capture sensible, filtrer aussi tags/metadata/erreurs, exclure secrets, prompts, extraits et raisonnement privé. Ne jamais utiliser un span comme preuve unique d'effet externe. Export OpenAI non autorisé par cette conception.
+
+Corrélation explicite des traceId/spanId avec operationId, generationId et attemptId lorsqu'ils sont réellement liés ; aucun parent OpenTelemetry supposé. OBS conserve événements métier, droits, effets, état et diagnostic lane. Établir un tableau de correspondance des événements actuels versus spans natifs ; retirer les doublons seulement après preuve de couverture sur parcours nominal, outil, erreur, retry et interruption. Vérifier zéro egress de traces avec transport indépendant. Une panne de diagnostic ne bloque pas Nora sauf contrôle de sécurité obligatoire ; aucun export silencieux.
+
+### 3.3 Usage & Costs — collecte financière indépendante
+
+**Architecture candidate à privilégier :** tâche/worker de synchronisation dédié, exécuté avec une identité administrative séparée du processus Nora, éventuellement même hôte/déploiement mais environnement de secrets distinct. Pas de serveur externe obligatoire, pas de clé Admin dans le runtime, navigateur, traces, Git ou configuration partagée ; stockage via interface interne bornée. Aucun endpoint public permettant de relayer arbitrairement des appels administratifs. Une clé administrative d'organisation est distincte des clés projet DEV/RECETTE ; confirmer droits minimaux réels et règles d'organisation. Ne pas présenter une clé Admin comme techniquement read-only si le fournisseur ne le garantit pas ; limiter le consommateur aux endpoints GET autorisés, durcir accès, rotation et réseau. Création et provisionnement du secret par Morris hors chat/Git, après gate. Un échec du job ne bloque pas l'inférence.
+
+Sources candidates : GET /v1/organization/usage/... (completions, decisions, embeddings, audio, vector stores, file search et autres dimensions effectivement disponibles) ; GET /v1/organization/costs. Vérifier SDK, group_by et filtres propres à chaque endpoint, pages, bornes temporelles, unités, granularité, latence et devise. Costs fournit des agrégats, pas des coûts exacts par workId. Usage et Costs peuvent ne pas exposer les mêmes dimensions. Ne pas sommer plusieurs regroupements recouvrants d'une même consommation.
+
+```mermaid
+sequenceDiagram
+ participant N as Nora / runtime (clé projet)
+ participant P as OpenAI
+ participant L as FinOps Studio / PostgreSQL
+ participant J as Collecte isolée (clé Admin)
+ N->>P: Appel cognitif autorisé
+ P-->>N: Résultat + usage disponible
+ N->>L: Observation / estimation attribuée
+ J->>P: GET Usage et Costs (période et scope)
+ P-->>J: Agrégats paginés
+ J->>L: Snapshots idempotents / état synchronisation
+ L->>L: Rapprochement comparable et écarts
+```
+
+Contrat de données candidat, à mapper sur le schéma réel :
+- Observations de consommation : conserver provider_usage_observations et mécanismes de corrélation existants. Un enregistrement technique ne doit pas ajouter un coût/requête déjà compté. Tarifs versionnés par surface, modèle, unité, devise et date.
+- Instantanés fournisseur : représentation logique distincte du ledger, dans la même base. Clé de rapprochement stable = organisation autorisée + endpoint/famille + bucket UTC [début, fin[ + dimensions demandées/retournées et identifiants fournisseur + unité/devise. Stocker valeur, provenance, date de collecte, granularité, version de schéma/filtre, état de complétude ; pas de contenu des prompts ni de secret. Ne pas inventer d'identifiant absent. Une resynchronisation du même bucket remplace la vue courante de façon idempotente et traçable, ne l'additionne pas ; révision tardive qualifiée. Table/colonnes exactes et migration à instruire, pas de deuxième base/ledger.
+- Mapping environnement : établir la relation lane Studio ↔ organisation/projet OpenAI ↔ identifiant non secret de clé, période de validité. Une clé différente ne prouve pas une séparation de coûts si les agrégats ne la distinguent pas. Ne jamais déduire un projet métier d'un project_id OpenAI. Si DEV et RECETTE ne sont pas séparables sur une dimension, état NON COMPARABLE ; aucune répartition proportionnelle fictive. Limiter le stockage et la restitution aux scopes autorisés, ne pas ingérer/afficher les autres projets de l'organisation sans mandat.
+
+Collecte : proposer fenêtre UTC périodique (usage horaire, costs quotidien avec revisite des buckets récents, cadences à confirmer) ; pagination complète, gestion 429/backoff borné, verrou/idempotence, contrôle permissions, reprise sur page sans double compte, mise à jour atomique d'un bucket complet ; conserver dernière réussite et horodatage. Agrégat partiel non finalisé explicite, erreur sans effacement des données antérieures. Pas de rafraîchissement réseau à chaque génération.
+
+Rapprochement : comparer uniquement intersections de période, scope, unité, devise et couverture réellement comparables. Sur même périmètre, écart = coût enregistré fournisseur - estimation Studio ; distinguer non attribué, donnée tardive et estimation incomplète. Aucun calcul d'écart final si périmètre insuffisant ; pas d'ajustement arbitraire des travaux. Le coût fournisseur reste agrégé ; USD conservé, conversion éventuelle clairement séparée. Le rapprochement n'est ni facture, ni garantie de causalité d'un écart.
+
+Adapter routes FinOps existantes, droits et UI de consommation : exposition des valeurs mesurées, estimées, fournisseur, couverture, fraîcheur et état de sync ; aucune réécriture des observations historiques. Conserver page 13 comme référence ; préparer le delta UX et le faire valider. Oracle indépendant PostgreSQL/API/DOM sur même fenêtre et scope (y compris retries, compte inconnu, historique, permissions, absence de clé). Tester transport substitué puis lecture fournisseur réelle autorisée, sans secrets publiés. Aucun coût fournisseur exact par travail promis.
+
+### 3.4 WEB hosted et bornes
+
+Préserver worker query-only, D6/RECORD_DECISION, identité/projet/finalité/version/restrictions, revérification avant egress, B1 (HTTPS, DNS pinning, réseaux privés et redirections interdits, limites corps/temps). WEB MIXED fermé. Le web_search tool doit rester isolé de l'agent privé.
+
+Exploiter max_tool_calls comme borne sur appels built-in par Response et num_requests comme observation du nombre de recherches facturables quand fourni ; si absent, UNKNOWN. Réserver les unités effectivement bornables avant effet, compter retries et tentatives d'ouverture directe. Ne pas déduire une recherche facturable de chaque appel tool. return_token_budget documenté mais absent des types SDK inspectés : vérifier compatibilité REST/SDK et garantie sur contenu, sans upgrade implicite.
+
+Option A3 de l'étude (pré-réserve appels intégrés, réconciliation num_requests, suspension à écart) n'est pas une borne stricte préalable sur recherches facturables. Proposer le choix entre enveloppe strictement démontrable ou enveloppe portant sur dimensions contrôlables et mesure a posteriori avec risque résiduel explicite ; arbitrage Morris spécifique avant G-WEB-PUBLIC. Aucun budget monétaire produit. Tant que gate fermé : WEB OFF et aucun effet. Retrait du compteur supposé après preuves ; rollback sûr = fermeture du gate, pas réactivation d'une hypothèse ASSUMED_1 comme garantie.
+
+### 3.5 Continuité native
+
+Comparer reconstruction actuelle, previous_response_id, compaction et cache sur un même travail autorisé : coût cumulé, latence, fidélité des acquis, reprise et qualité. previous_response_id simplifie la chaîne, mais les tokens d'entrée antérieurs restent facturés. Compaction/caching ne remplacent pas le checkpoint D3. Conversations/background/sessions sont candidates seulement si contrôle de cycle de vie, rétention, isolation et fencing démontré ; pas d'état hébergé permanent par défaut. Vérifier compatibilité avec store=false/paramètres de rétention effectivement applicables. Lier référence fournisseur à work/lane/version et rendre indisponible toute chaîne dont droits ou contenu sont devenus incompatibles ; réhydrater uniquement les acquis autorisés. Aucun reset des budgets 2M/1M/120, aucune perte de réserve de restitution ; D3 reste responsable de reprise et état terminal. Ne pas stocker de raisonnement privé.
+
+## 4. Lot 2 — Cognition spécialisée et intelligence documentaire
+
+### 4.1 Decisions et catalogue
+
+L'API /v1/decisions (SDK rapporté présent) propose des jugements bornés (predicate/choice/score). Vérifier modèle exact, contrat d'entrée/sortie, tailles, unités et tarifs au moment du lot. Les fichiers, audio et références d'items ne sont pas supportés directement selon le guide consulté ; fournir seulement les données bornées admissibles. Nora choisit sémantiquement une ressource adaptée, admission déterministe valide capacité/modèle/permission et limites. Catalogue existant étendu par type de ressource (génération, jugement borné, retrieval, vision, etc.) sans dupliquer la politique ni introduire un classifieur systématique. Aucun changement de politique v0.2 DEV/RECETTE implicite. D6 humain exclusif.
+
+Pour un remplacement de tours Responses purement évaluatifs, inventorier les chemins réellement utilisés, définir questions nommées et format attendu, traiter résultat absent/invalide/incertain, comparer qualité/latence/coût à Responses sur oracle indépendant. Une probabilité n'est pas un fait ni une preuve ; pas de seuil universel. Réévaluation par Nora, synthèse Responses ou suspension motivée. Tracer requête/usage/qualité, sans raisonnement privé. FinOps sépare unités et tarification Decisions ; pas de génération fictive. Une bascule réversible sur les chemins prouvés, puis retrait ciblé des helpers redondants.
+
+### 4.2 Recherche : comparer équitablement, sélectionner une seule stratégie
+
+| Option | Mécanisme | Avantage candidat | Risque / responsabilité résiduelle |
+|---|---|---|---|
+| Existant lexical | Journal D4 et lecture Git | Exactitude termes/identifiants, pas d'index externe | Pertinence paraphrases, relectures |
+| Embeddings + index Studio | Vectorisation native, index PostgreSQL candidat | Contrôle stockage, filtres et révocation | Chunking/index/ranking/maintenance à construire ; extension/migration à arbitrer |
+| Vector Stores + recherche directe | Files + indexation/recherche/ranking natifs | Moins de moteur custom, filtre avant injection | Persistance externe, cohérence éventuelle, droits/version à recontrôler |
+| File Search hébergé | Outil mobilisé dans Responses | Retrieval intégré à la génération | Risque de passage au modèle avant filtre Studio ; admissible seulement si isolation et droit prouvés |
+| Hybride | Exact + sémantique dans l'architecture sélectionnée | Complémentarité, identifiants exacts | Ne pas construire deux backends sémantiques permanents |
+
+Hypothèse d'intégration prioritaire à comparer : recherche directe Vector Stores pour éviter de reconstruire index/ranking, sous DATA-01 ; alternative embeddings + index local si droits, rétention, coût ou qualité rendent le natif hébergé inadapté. Aucun choix final avant benchmark et arbitrage de persistance. Ne pas créer un index externe par défaut ni téléverser tout Git. Préparer protocole borné avec corpus autorisés, version figée, oracle de faits/passages, requêtes lexicales/sémantiques, sources contradictoires et absentes, recall@k et précision/citations, coût de stockage/ingestion/requête, latence et effort de maintenance ; inclure baselines qualité. Faire les comparaisons dans le même macro-lot et retirer les artefacts comparatifs inutiles.
+
+Contrat logique D4/D9 : sourceId, projet, identité/version exacte (commit/blob ou version document), scope, état de droits, empreinte contenu, indexRef dérivée, passage/page/plage si disponible, état ingestion et fraîcheur. Dédupliquer par version et scope ; version ancienne invalidée lors de modification ; ingestion/retry/suppression idempotents. Source de vérité = D4/D9, index reconstructible. Avant recherche limiter au scope autorisé ; après recherche vérifier chaque résultat contre version et droits courants avant injection/citation. Pour File Search hosted, démontrer ces garanties avant exposition au modèle, pas seulement après retour. La suppression distante peut être éventuelle ; blocage local immédiat et tâche de suppression/réconciliation ; si impossible, désactiver ce chemin. Revalidation à la consultation originale. Erreurs/absence d'index signalées, fallback lecture exacte autorisée. Pas de résultats inter-projets, pas de réutilisation d'un vecteur révoqué.
+
+### 4.3 Files / Vision / PDF
+
+Séparer lecture et interprétation. Préserver viewer auth, owner/lane/project/work, version, token rotation, pagination, couverture honnête, limites de session. pdfjs reste utile pour texte exact et visualisation ; seules opérations de préparation devenues réellement redondantes sont candidates au retrait. Vision via input_file/input_image de Responses pour analyse de pages, schémas et tableaux ; les PDF peuvent inclure texte et images, les autres formats ne donnent pas nécessairement leurs éléments visuels au modèle. Vérifier compatibilité réelle modèle, detail, taille, pages, tokens, tarification, sécurité. Lecture ponctuelle sans index permanent privilégiée lorsque suffisante ; si Files API nécessaire, gérer fileId, durée de vie, version, expiration/suppression et contrôle d'accès. Aucun URL de fichier externe non vérifié, aucun transfert sans droits et gate DATA-01.
+
+BatiNova scanné : futur oracle humain sur diagramme et zones ambiguës ; ne pas annoncer OCR exhaustif. PDF textuel Git : corpus disponible à confirmer. Maintenir les limites locales de corps, CPU/mémoire/concurrence/rendu, annulation et couverture ; ne pas supposer que le natif sécurise la visionneuse. Les citations ouvrent la source/version/page réellement consultée. FinOps observe coût des inputs multimodaux et frais de stockage/indexation, sans réattribuer un agrégat fournisseur arbitrairement.
+
+## 5. Lot 3 — Audio
+
+Cible initiale : composer → MediaRecorder/permission navigateur → upload audio borné au serveur Studio authentifié → admission surface audio → Audio Transcriptions → texte éditable → envoi USER explicite. États idle/enregistrement/transcription/terminé/annulé/erreur ; arrêt des pistes micro à l'annulation ou navigation ; conservation du brouillon, aucun auto-envoi. Limiter formats, taille, durée, concurrence et temps selon API ; validation serveur, pas de traitement de données privées au-delà du mandat. Audio temporaire nettoyé, vérifier rétention fournisseur et gérer échec de suppression.
+
+Comparer avec transcription Realtime (WebRTC/WebSocket selon contrat réel, session de transcription seule, jeton éphémère minimal délivré après admission, aucune clé longue navigateur). Contrôler durée, scope, fermeture/expiration, reconnexion, fragments ordonnés et fin de transcription ; ne pas permettre d'outils ou d'effets via session de dictée. Si connexion directe navigateur retenue, contrôle des effets et réconciliation via session/événements réellement disponibles, pas présomption de contrôle HTTP local. Si garanties insuffisantes retenir mode fichier. Modèles et formats exacts à confirmer à la construction. Audio facturable même si texte non envoyé : operationId indépendant, lane et mesure durée/tokens selon surface, aucune génération D3 fictive. UX/accessibilité et tests navigateur réel avec consentement de qualification, oracle de transcription technique française.
+
+## 6. Agents API et images — limites de trajectoire
+
+Agents API hébergée distincte du SDK JS. Évaluer avant livraison 2 les sessions, sandbox hébergée/autogérée, vaults, autorité réseau/Git, arrêt, reprise, artifacts, coûts et provenance. Comparer D7 avec Cursor sur un mandat et un oracle identiques, sans exécuter ici. D8 examine des éléments vérifiables, D6 accepte ; un résultat natif ne vaut pas preuve ni adoption. Aucun transfert de code, secret ou création de session sans gate. Éviter une abstraction multi-exécuteur anticipée. Images API génératives différées ; Vision lot 2 ne requiert pas une permission de génération d'images par principe. Aucun changement des permissions présentes dans ce dossier.
+
+## 7. Permissions et données — proposition progressive
+
+| Lot / surface | Identité et accès candidat | Condition de mise en service |
+|---|---|---|
+| Lot 1 Responses/count/compaction | Clé projet DEV, destination et capacité autorisées | Confirmer SDK, droits et politique ; stockage/contexte natif selon DATA-01 |
+| Lot 1 tracing local | Aucun export externe ; pas de clé additionnelle par principe | Zéro export et filtrage prouvés |
+| Lot 1 Usage & Costs | Clé Admin organisation isolée, GET allowlist | Création/provisionnement Morris, scope organisation vérifié, lecture seule côté consommateur, secrets séparés |
+| Lot 1 WEB | Clé projet dédiée au scope autorisé | G-WEB-PUBLIC distinct, MIXED fermé |
+| Lot 2 Decisions | Permission spécifique projet si requise | Autorisation DEV, modèle disponible et oracle |
+| Lot 2 Embeddings, Files, Vector Stores/Retrieval | Permissions minimales de recherche/ingestion/suppression selon backend sélectionné | DATA-01 : corpus, droits, rétention, suppression, coûts de stockage ; GO persistance |
+| Lot 2 Vision | Responses et Files si nécessaire | Données autorisées, aucune permission Images génératives implicite |
+| Lot 3 Audio, Realtime | Permission audio projet ; jeton éphémère pour session directe | Autorité micro, limites, rétention, FinOps |
+| L2 Agents API/Vaults et futur Images | Hors activation actuelle | Arbitrage et GO distincts |
+
+Permissions exactes DEV/RECETTE NON OBSERVÉES actuellement ; aucune permission ALL. Les droits documentés ne prouvent pas l'accès compte. Vérifier la rétention officielle par endpoint, options de l'organisation et région, suppression, état d'indexation, données de diagnostic ; stockage externe ne se confond pas avec politique d'entraînement. Pas de nouvelle persistance de données privées sans gate. Ne pas copier secrets/identifiants sensibles dans preuves. ENV-01 reste applicable aux constructions : DEV et RECETTE isolées (code, build, DB, ports, rôles, sessions, secrets et ressources distantes). RECETTE protégée. Ne pas injecter la clé Admin dans les deux runtimes ni mutualiser un index entre lanes.
+
+## 8. Revue de convergence et plan d'acceptation
+
+Avant chaque mandat : Cursor vérifie localement HEAD/tree, code, lockfile, schéma, interfaces, routes, tests, flags, permissions non secrètes et preuves. Comparer au handoff ; documenter écarts code/doc, blast radius (API, données, UX, autorité, sécurité, tests), responsables, conditions de remplacement. Ne pas déduire la compatibilité effective de la présence d'un type SDK. Le tableau suivant est un état de conception, pas un test.
+
+| Domaine | Compatibilité présumée à instruire | Preuve / sortie |
+|---|---|---|
+| Tracing / OBS | Adapter instrumentation existante | Spans filtrés, zéro export, causalité et retrait redondances démontrés ; F11 |
+| FinOps | Adapter ledger/projections + collecte ; schéma à examiner | Même scope PG/API/DOM/fournisseur ; inconnues et doublons contrôlés ; F13–14 |
+| Frontier/WEB | Adapter contrats par surface ; gate hosted non levé | SDK réel, transport oracle, count/limits/retry et D6/B1 ; F11/F15 |
+| D3 continuité | Optimisation compatible sous preuve | A/B réel qualité/coût/reprise, checkpoint inchangé, rollback ; F12/F25 |
+| Decisions | Nouvelle ressource, couverture à qualifier | Oracles indépendants ; F21/F26 |
+| Retrieval | Alternatives non sélectionnées | Benchmark + DATA-01, révocation/version/rebuild ; F22–23 |
+| Vision/PDF | Chemins complémentaires | Tests documentaires, rights et browser ; F24 |
+| Audio | Nouvelle UX, architecture candidate | Parcours, annulation, coût et qualité ; F31–34 |
+| D7/D8 | Étude préalable L2 | Équivalence mandat/preuves, pas d'engagement |
+
+Chaque macro-lot intègre code, tests, documentation as-built et Review Pack. Tests TypeScript/lint/unitaires, PostgreSQL, API, vrai SDK avec transport substitué, navigateur, build/smoke et non-régression selon blast radius. Les oracles portent sur effets réels et population indépendante. LIVE uniquement sous autorisation explicite, identité DEV, corpus et enveloppes opposables ; observation d'un comportement ne démontre pas une sécurité générale. Les preuves historiques ne sont pas rejouées par principe mais leur pertinence est réexaminée si la frontière change.
+
+Transition : activer une capacité seulement après permission et tests ; éventuelle coexistence comparative temporaire sans double effet ni double coût non maîtrisé, rollback sûr, retrait des consommateurs anciens après preuve. Classer défaut de socle bloquant, capacité réellement isolable avec exit, réserve de qualité/UX, amélioration future. Une capacité indisponible doit être signalée ; aucune dégradation silencieuse de la voie nominale. Build final exact et manifeste/rollback avant GO RECETTE séparé. F2 Morris, R6 non démarré. Les arbitrages restant à prendre sont ceux qui engagent données, sécurité, finance administrative, architecture et gates, pas les détails réversibles d'implémentation.
+
+## 9. Sources
+
+Contrats Next à la base documentaire : [R4 et DATA-01](../../governance/decisions/2026-11-04-r4-architecture-exit.md), [ENV-01](../../governance/environnements-recette-et-promotions.md), [SEM](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md), [conducteur D3](../../architecture-technique/conducteur-cognitif-et-production-nora.md), [OBS](../../architecture-technique/contrat-observabilite-transverse.md), [allocation technique](../../architecture-technique/allocation-cognitive-recherche-web-et-finops.md), [acceptation](../contrat-acceptation-cognition-et-realisation-gouvernee.md). Étude Cursor §§1–18 au [handoff immuable](https://github.com/mcleland147/sfia-workspace/blob/460a121ff94bdfe08767a9870e7350e13f5d2a59/sfia-review-handoff/latest-chatgpt-review.md#L193-L821). Les points de code sont rapportés, non inspectés localement par ChatGPT.
+
+Documentation OpenAI consultée le 26/11/2026 (contrats fournisseur à revérifier au moment du lot, pas preuve de disponibilité compte ni d'équivalence) :
+- [Tracing Agents SDK](https://openai.github.io/openai-agents-js/guides/tracing/) ; [setTraceProcessors](https://openai.github.io/openai-agents-js/openai/agents-core/functions/settraceprocessors/).
+- [Usage](https://developers.openai.com/api/reference/resources/admin/subresources/organization/subresources/usage/methods/completions/) ; [Costs](https://developers.openai.com/api/reference/resources/admin/subresources/organization/subresources/usage/methods/costs) ; [Usage Decisions](https://developers.openai.com/api/reference/resources/admin/subresources/organization/subresources/usage/methods/decisions/) ; [pricing](https://developers.openai.com/api/docs/pricing) à revalider avant LIVE.
+- [Token counting](https://developers.openai.com/api/docs/guides/token-counting) ; [Responses](https://developers.openai.com/api/reference/resources/responses/methods/create) ; [WEB](https://developers.openai.com/api/docs/guides/tools-web-search).
+- [Conversation state](https://developers.openai.com/api/docs/guides/conversation-state) ; [compaction](https://developers.openai.com/api/docs/guides/compaction) ; [prompt caching](https://developers.openai.com/api/docs/guides/prompt-caching).
+- [Decisions](https://developers.openai.com/api/docs/guides/decisions) ; [Retrieval](https://developers.openai.com/api/docs/guides/retrieval) ; [File Search](https://developers.openai.com/api/docs/guides/tools-file-search) ; [File inputs](https://developers.openai.com/api/docs/guides/file-inputs).
+- [Transcription](https://developers.openai.com/api/docs/guides/transcription) ; [Realtime transcription](https://developers.openai.com/api/docs/guides/realtime-transcription) ; [Agents API](https://developers.openai.com/api/docs/guides/agents-api/overview) ; [data controls](https://developers.openai.com/api/docs/guides/your-data).
+
+Aucun test authentifié, changement de permission, migration, code ou runtime réalisé par cette conception. Les trois documents sont des candidats de construction, pas des ADR ni une baseline officielle.
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md b/projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md
new file mode 100644
index 00000000..90d23c1d
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/migration-candidate-provider-admin-snapshots.md
@@ -0,0 +1,67 @@
+# Migration candidate — provider Admin Usage/Costs snapshots
+
+| Champ | Valeur |
+|---|---|
+| Statut | **CANDIDATE — NOT APPLIED** |
+| Gate | GO Morris migration structurante (mandat §5 / §10.5) |
+| Motif | Persistance idempotente des agrégats fournisseur pour rapprochement FinOps |
+
+## Besoin
+
+Le collecteur Admin (`provider-admin-usage-collector.ts`) maintient aujourd’hui une vue **in-process** pour tests et readiness. Une représentation PostgreSQL distincte du ledger `provider_usage_observations` est nécessaire pour :
+
+- survie au redémarrage ;
+- fraîcheur consultable par l’UI FinOps ;
+- idempotence multi-collecte.
+
+Ce n’est **pas** un second ledger métier.
+
+## Schéma minimal proposé
+
+```sql
+-- CANDIDATE ONLY — do not apply without GO.
+CREATE TABLE IF NOT EXISTS provider_admin_usage_snapshots (
+  id uuid PRIMARY KEY,
+  collected_at timestamptz NOT NULL,
+  collection_id text NOT NULL,
+  source text NOT NULL, -- openai.organization.usage | openai.organization.costs
+  organization_scope text NOT NULL,
+  interval_start_utc timestamptz NOT NULL,
+  interval_end_utc timestamptz NOT NULL,
+  granularity text NOT NULL, -- hour | day
+  dimensions_json jsonb NOT NULL DEFAULT '{}'::jsonb,
+  unit text NOT NULL,
+  currency text,
+  value numeric(24, 10) NOT NULL,
+  completeness text NOT NULL, -- complete | partial
+  schema_version text NOT NULL DEFAULT '1',
+  UNIQUE (
+    source,
+    organization_scope,
+    interval_start_utc,
+    interval_end_utc,
+    granularity,
+    unit,
+    currency,
+    dimensions_json
+  )
+);
+
+CREATE TABLE IF NOT EXISTS provider_admin_collection_runs (
+  collection_id text PRIMARY KEY,
+  started_at timestamptz NOT NULL,
+  finished_at timestamptz,
+  status text NOT NULL,
+  pages_fetched integer NOT NULL DEFAULT 0,
+  limits_json jsonb NOT NULL DEFAULT '[]'::jsonb,
+  last_error text
+);
+```
+
+## Transition
+
+1. GO migration DEV only.
+2. Apply additive migration.
+3. Brancher repository PG derrière le collecteur.
+4. Ne pas backfill inventé.
+5. Rollback = stop collect + drop tables si jamais écrites en RECETTE (RECETTE non touchée ici).
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md b/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md
new file mode 100644
index 00000000..9d5284ed
--- /dev/null
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/ux-delta-finops-page13-candidate.md
@@ -0,0 +1,23 @@
+# Delta UX candidat — FinOps page 13 (Figma)
+
+| Champ | Valeur |
+|---|---|
+| Référence | https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305 |
+| Statut | **CANDIDATE — NOT APPLIED** (mandat §10.7 : validation Morris avant code UI) |
+| Backend | `providerReconciliation` déjà exposé dans `/api/finops/summary` |
+
+## Proposition de restitution
+
+Conserver la page 13 existante. Ajouter une section secondaire (hors hero) :
+
+1. **Estimation Studio** (inchangé) — travaux / tokens / USD estimés.
+2. **Coût fournisseur** — montant agrégé + devise + période, ou état `Indisponible`.
+3. **Écart** — uniquement si `comparability=COMPARABLE` ; sinon libellé `Non comparable` + limite.
+4. **Fraîcheur** — dernière collecte réussie / partielle / bloquée (pas de secret).
+5. **États d’erreur** — `OPENAI_ADMIN_KEY_ABSENT`, sync partielle, mapping lane non prouvé.
+
+Aucune fausse précision. Aucun plafond monétaire produit. Pas de second écran FinOps.
+
+## GO demandé
+
+Validation Morris du delta avant transposition Figma → code.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 4c0f37c5..2f5739bb 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,21 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-26-OPENAI-STUDIO-CONVERGENCE-ML1
+
+- **date_utc**: 2026-11-26T20:00Z (approx)
+- **lane**: DEV — Macro-lot 1 socle fournisseur natif et observabilité
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_initial_GO**: `ae4aff22b023fea00be5ae1ec98c903d5fbbf145`
+- **candidat_code_preserved**: `c574d262` · web tip pré-lot `5a1289fc`
+- **contrats**: raccordés @ `1e2e188d` (blobs cadrage/fonctionnel/technique exacts)
+- **focus**: tracing local filtré ; tool_usage.num_requests ; collecteur Admin (transport substitué) ; continuité native OFF ; WEB OFF
+- **gates_ouverts**: Admin LIVE · migration PG snapshots · G-WEB-PUBLIC · UX Figma p.13 · push projet
+- **web_live**: OFF · G-WEB-MIXED fermé · RECETTE intacte
+- **release**: NO RELEASE · NOT ADOPTED · ML5 OPEN · R5 IN PROGRESS · livraison 2 non engagée
+- **as_built**: `construction/convergence-openai-studio/as-built-macro-lot-1-20261126.md`
+- **statut**: **MACRO-LOT 1 — READY FOR INDEPENDENT REVIEW** (avec blockers gouvernés Admin/migration/WEB/UX)
+
 ## delivery_id: DELIV-2026-11-26-ML5-CONVERGENCE-QUALIFICATION

 - **date_utc**: 2026-11-26T17:55Z
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index e94c35b2..784f825a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -867,13 +867,14 @@ function buildPrompt(input: NoraGenerateInput, policy: CognitivePolicy): string
 }

 async function configureSdkTracingSafe(): Promise<void> {
-  const agents = await import("@openai/agents");
-  if (typeof agents.setTracingDisabled === "function") {
-    agents.setTracingDisabled(true);
-  }
+  // Macro-lot 1: local filtered processors (or OFF). Never leave default exporters
+  // that could print model/tool payloads; never register a remote OpenAI exporter.
+  const { configureAgentsSdkTracing } = await import("@/lib/agents-sdk-tracing");
+  await configureAgentsSdkTracing();
   // DEV forensic only: Agents SDK redacts Zod details by default (dontLogModelData=true).
   // Enabling sensitive logging surfaces schema paths into ModelBehaviorError messages —
   // still scrubbed before OBS/handoff; ephemeral dump captures them locally.
+  // Applied AFTER configureAgentsSdkTracing (which forces sensitive logging OFF).
   const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
   if (process.env.STUDIO_NORA_DIAG_EPHEMERAL === "1" && lane === "DEV") {
     try {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index e98b8105..34188c5c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -20,6 +20,10 @@ import {
 } from "node:fs";
 import { join } from "node:path";
 import { assertOpenAiKeyForLane } from "@/lib/openai-lane-guard";
+import {
+  extractResponseNativeUsage,
+  reconcileHostedSearchUsage,
+} from "./provider-response-usage";
 import {
   admitModelEffort,
   type CognitiveEffort,
@@ -80,6 +84,13 @@ export type CampaignEnvelope = {
   outputTokensReserved: number;
   outputTokensCommitted: number;
   hostedSearchesCommitted: number;
+  /**
+   * A-posteriori billable hosted searches from tool_usage.web_search.num_requests.
+   * null when never measured (UNKNOWN — never ASSUMED_1).
+   */
+  hostedSearchesMeasured: number | null;
+  hostedSearchMeasureStatus: "NONE" | "MEASURED" | "UNKNOWN";
+  hostedSearchMeasureLimits: string[];
   directOpensCommitted: number;
   suspended: boolean;
   suspendReason: string | null;
@@ -164,6 +175,14 @@ type FrontierStore = {
     inputTokens: number;
     countedAtMs: number;
   } | null;
+  /** Test oracle: response-side tool_usage observations (no prompt bodies). */
+  responseUsageObserved: Array<{
+    attemptId: string;
+    responseId: string | null;
+    hostedNumRequests: number | null;
+    hostedStatus: "MEASURED" | "UNKNOWN" | "RESERVED_ONLY";
+    limits: string[];
+  }>;
 };

 const als = new AsyncLocalStorage<FrontierStore>();
@@ -263,6 +282,7 @@ function emptyStore(): FrontierStore {
     modelHint: null,
     captureHttpMeta: false,
     nativeInputCount: null,
+    responseUsageObserved: [],
   };
 }

@@ -376,6 +396,9 @@ export function beginCampaignEnvelope(input: {
     outputTokensReserved: 0,
     outputTokensCommitted: 0,
     hostedSearchesCommitted: 0,
+    hostedSearchesMeasured: null,
+    hostedSearchMeasureStatus: "NONE",
+    hostedSearchMeasureLimits: [],
     directOpensCommitted: 0,
     suspended: false,
     suspendReason: null,
@@ -1822,13 +1845,93 @@ export function createFrontierAwareFetch(
       body === init?.body || init == null ? init : { ...init, body };
     try {
       const res = await baseFetch(input, nextInit);
+      // A-posteriori tool_usage.web_search.num_requests when present.
+      // max_tool_calls remains the a-priori built-in call bound — never a billable guarantee.
+      let measuredHostedDelta = 0;
+      let hostedStatus: "MEASURED" | "UNKNOWN" | "RESERVED_ONLY" =
+        hostedSearchDelta > 0 ? "RESERVED_ONLY" : "UNKNOWN";
+      let hostedLimits: string[] = [];
+      let responseId: string | null = null;
+      if (res.ok && isResponsesCreateUrl(url)) {
+        try {
+          const parsed = (await res.clone().json()) as unknown;
+          const native = extractResponseNativeUsage(parsed);
+          responseId = native.responseId;
+          const reconciled = reconcileHostedSearchUsage({
+            reservedMaxToolCalls: hostedSearchDelta,
+            observed: native.hostedWebSearch,
+            alreadyCommitted: campaign?.hostedSearchesCommitted ?? 0,
+            maxHostedSearches: campaign?.maxHostedSearches ?? null,
+          });
+          measuredHostedDelta = reconciled.commitDelta;
+          hostedStatus = reconciled.status;
+          hostedLimits = reconciled.limits;
+          if (campaign) {
+            campaign.hostedSearchMeasureStatus =
+              reconciled.status === "MEASURED"
+                ? "MEASURED"
+                : reconciled.status === "UNKNOWN"
+                  ? "UNKNOWN"
+                  : campaign.hostedSearchMeasureStatus;
+            campaign.hostedSearchMeasureLimits = [
+              ...new Set([
+                ...campaign.hostedSearchMeasureLimits,
+                ...reconciled.limits,
+              ]),
+            ];
+            if (
+              reconciled.status === "MEASURED" &&
+              reconciled.measured != null
+            ) {
+              campaign.hostedSearchesMeasured =
+                (campaign.hostedSearchesMeasured ?? 0) + reconciled.measured;
+            }
+            if (reconciled.suspend) {
+              campaign.suspended = true;
+              campaign.suspendReason =
+                reconciled.suspendReason ?? "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED";
+            }
+          }
+        } catch {
+          hostedLimits = ["RESPONSE_BODY_PARSE_FAILED"];
+          hostedStatus = "UNKNOWN";
+          if (campaign) {
+            campaign.hostedSearchMeasureStatus = "UNKNOWN";
+            campaign.hostedSearchMeasureLimits = [
+              ...new Set([
+                ...campaign.hostedSearchMeasureLimits,
+                "RESPONSE_BODY_PARSE_FAILED",
+              ]),
+            ];
+          }
+        }
+      }
+      // Envelope pressure: max_tool_calls bound is consumed even when billable
+      // num_requests is UNKNOWN — never claim ASSUMED_1 as a billable guarantee.
+      // FinOps billable figure lives in hostedSearchesMeasured when MEASURED.
+      const envelopeHostedDelta =
+        hostedStatus === "MEASURED"
+          ? measuredHostedDelta
+          : hostedSearchDelta > 0
+            ? hostedSearchDelta
+            : 0;
       commitProviderEmission({
         attemptId: reservation.attemptId,
         reservedSlots: reservation.reservedSlots,
         reservedInputTokens: reservation.reservedInputTokens,
         reservedOutputTokens: reservation.reservedOutputTokens,
-        hostedSearchDelta,
+        hostedSearchDelta: envelopeHostedDelta,
       });
+      if (alsStore.captureHttpMeta || alsStore.responseUsageObserved) {
+        alsStore.responseUsageObserved.push({
+          attemptId: reservation.attemptId,
+          responseId,
+          hostedNumRequests:
+            hostedStatus === "MEASURED" ? measuredHostedDelta : null,
+          hostedStatus,
+          limits: hostedLimits,
+        });
+      }
       return res;
     } catch (e) {
       markProviderEmissionUncertain({ attemptId: reservation.attemptId });
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
new file mode 100644
index 00000000..92527beb
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-response-continuity.ts
@@ -0,0 +1,172 @@
+/**
+ * Macro-lot 1 — native Responses continuity helpers (previous_response_id).
+ *
+ * D3 remains SoT for work identity, acquis, checkpoints, lease/fencing.
+ * A provider chain is an optional optimization — never a durable business truth.
+ *
+ * Activation: SFIA_PROVIDER_CONTINUITY_MODE=native|off (default off until proven).
+ * No external Conversations/background sessions without separate DATA-01 GO.
+ */
+
+export type ProviderContinuityMode = "off" | "native";
+
+export type StudioContinuitySnapshot = {
+  workId: string;
+  acquisFingerprint: string | null;
+  sourceVersions: string[];
+  checkpointId: string | null;
+  budgets: {
+    tokensConsumed: number;
+    tokensBudget: number | null;
+    restitutionsRemaining: number | null;
+  };
+  rightsOk: boolean;
+};
+
+export type ProviderChainRef = {
+  previousResponseId: string;
+  boundWorkId: string;
+  boundLane: string;
+  boundAcquisFingerprint: string | null;
+  boundSourceVersions: string[];
+  createdAtMs: number;
+};
+
+export type ContinuityPlan =
+  | {
+      mode: "studio_rebuild";
+      reason:
+        | "MODE_OFF"
+        | "NO_CHAIN"
+        | "WORK_MISMATCH"
+        | "LANE_MISMATCH"
+        | "RIGHTS_CHANGED"
+        | "SOURCES_CHANGED"
+        | "ACQUIS_CHANGED"
+        | "PROVIDER_UNAVAILABLE";
+      previousResponseId: null;
+      preserveBudgets: true;
+    }
+  | {
+      mode: "native_previous_response";
+      reason: "CHAIN_COMPATIBLE";
+      previousResponseId: string;
+      preserveBudgets: true;
+      /** Prior tokens remain billable — not free. */
+      priorTokensStillBilled: true;
+    };
+
+export function resolveProviderContinuityMode(
+  env: NodeJS.ProcessEnv = process.env,
+): ProviderContinuityMode {
+  const raw = (env.SFIA_PROVIDER_CONTINUITY_MODE ?? "off").trim().toLowerCase();
+  return raw === "native" ? "native" : "off";
+}
+
+function sameStringSet(a: string[], b: string[]): boolean {
+  if (a.length !== b.length) return false;
+  const sa = [...a].sort();
+  const sb = [...b].sort();
+  return sa.every((v, i) => v === sb[i]);
+}
+
+/**
+ * Decide whether a provider chain may be attached to the next Responses call.
+ * Always preserves Studio budgets (no reset on chain change / compaction).
+ */
+export function planProviderContinuity(input: {
+  mode: ProviderContinuityMode;
+  studio: StudioContinuitySnapshot;
+  chain: ProviderChainRef | null;
+  lane: string;
+}): ContinuityPlan {
+  if (input.mode !== "native") {
+    return {
+      mode: "studio_rebuild",
+      reason: "MODE_OFF",
+      previousResponseId: null,
+      preserveBudgets: true,
+    };
+  }
+  if (!input.chain) {
+    return {
+      mode: "studio_rebuild",
+      reason: "NO_CHAIN",
+      previousResponseId: null,
+      preserveBudgets: true,
+    };
+  }
+  if (input.chain.boundWorkId !== input.studio.workId) {
+    return {
+      mode: "studio_rebuild",
+      reason: "WORK_MISMATCH",
+      previousResponseId: null,
+      preserveBudgets: true,
+    };
+  }
+  if (input.chain.boundLane !== input.lane) {
+    return {
+      mode: "studio_rebuild",
+      reason: "LANE_MISMATCH",
+      previousResponseId: null,
+      preserveBudgets: true,
+    };
+  }
+  if (!input.studio.rightsOk) {
+    return {
+      mode: "studio_rebuild",
+      reason: "RIGHTS_CHANGED",
+      previousResponseId: null,
+      preserveBudgets: true,
+    };
+  }
+  if (
+    !sameStringSet(
+      input.chain.boundSourceVersions,
+      input.studio.sourceVersions,
+    )
+  ) {
+    return {
+      mode: "studio_rebuild",
+      reason: "SOURCES_CHANGED",
+      previousResponseId: null,
+      preserveBudgets: true,
+    };
+  }
+  if (
+    (input.chain.boundAcquisFingerprint ?? null) !==
+    (input.studio.acquisFingerprint ?? null)
+  ) {
+    return {
+      mode: "studio_rebuild",
+      reason: "ACQUIS_CHANGED",
+      previousResponseId: null,
+      preserveBudgets: true,
+    };
+  }
+  return {
+    mode: "native_previous_response",
+    reason: "CHAIN_COMPATIBLE",
+    previousResponseId: input.chain.previousResponseId,
+    preserveBudgets: true,
+    priorTokensStillBilled: true,
+  };
+}
+
+/**
+ * Attach previous_response_id only when plan allows. Never invent store=true
+ * or Conversations persistence here.
+ */
+export function applyContinuityToResponsesBody(
+  body: Record<string, unknown>,
+  plan: ContinuityPlan,
+): Record<string, unknown> {
+  if (plan.mode !== "native_previous_response") {
+    const { previous_response_id: _drop, ...rest } = body;
+    return rest;
+  }
+  return {
+    ...body,
+    previous_response_id: plan.previousResponseId,
+  };
+}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-response-usage.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-response-usage.ts
new file mode 100644
index 00000000..6fa61da2
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-response-usage.ts
@@ -0,0 +1,197 @@
+/**
+ * Macro-lot 1 — native response-side usage extraction.
+ *
+ * Distinguishes:
+ * - max_tool_calls (a-priori built-in call bound)
+ * - tool_usage.web_search.num_requests (a-posteriori billable searches when present)
+ *
+ * Absent tool_usage ⇒ UNKNOWN (never ASSUMED_1).
+ */
+
+export type HostedWebSearchUsageObservation = {
+  numRequests: number | null;
+  status: "MEASURED" | "UNKNOWN";
+  provenance: "RESPONSE_TOOL_USAGE" | "ABSENT";
+  limits: string[];
+};
+
+export type ResponseNativeUsageObservation = {
+  responseId: string | null;
+  inputTokens: number | null;
+  outputTokens: number | null;
+  totalTokens: number | null;
+  cachedInputTokens: number | null;
+  reasoningTokens: number | null;
+  hostedWebSearch: HostedWebSearchUsageObservation;
+  rawToolUsagePresent: boolean;
+};
+
+function num(v: unknown): number | null {
+  return typeof v === "number" && Number.isFinite(v) ? Math.floor(v) : null;
+}
+
+function asRecord(v: unknown): Record<string, unknown> | null {
+  return v && typeof v === "object" ? (v as Record<string, unknown>) : null;
+}
+
+export function extractHostedWebSearchUsage(
+  responseBody: unknown,
+): HostedWebSearchUsageObservation {
+  const body = asRecord(responseBody);
+  const toolUsage = asRecord(body?.tool_usage);
+  if (!toolUsage) {
+    return {
+      numRequests: null,
+      status: "UNKNOWN",
+      provenance: "ABSENT",
+      limits: ["TOOL_USAGE_ABSENT"],
+    };
+  }
+  const webSearch = asRecord(toolUsage.web_search);
+  if (!webSearch) {
+    return {
+      numRequests: null,
+      status: "UNKNOWN",
+      provenance: "ABSENT",
+      limits: ["TOOL_USAGE_WEB_SEARCH_ABSENT"],
+    };
+  }
+  const n = num(webSearch.num_requests);
+  if (n == null || n < 0) {
+    return {
+      numRequests: null,
+      status: "UNKNOWN",
+      provenance: "ABSENT",
+      limits: ["TOOL_USAGE_WEB_SEARCH_NUM_REQUESTS_UNKNOWN"],
+    };
+  }
+  return {
+    numRequests: n,
+    status: "MEASURED",
+    provenance: "RESPONSE_TOOL_USAGE",
+    limits: [],
+  };
+}
+
+function detailTokens(
+  details: unknown,
+  keys: string[],
+): number | null {
+  if (!details) return null;
+  const list = Array.isArray(details) ? details : [details];
+  let sum = 0;
+  let found = false;
+  for (const d of list) {
+    const rec = asRecord(d);
+    if (!rec) continue;
+    for (const k of keys) {
+      const v = num(rec[k]);
+      if (v != null) {
+        sum += v;
+        found = true;
+      }
+    }
+  }
+  return found ? sum : null;
+}
+
+/**
+ * Parse a Responses API JSON body (or Agents-wrapped response object).
+ */
+export function extractResponseNativeUsage(
+  responseBody: unknown,
+): ResponseNativeUsageObservation {
+  const body = asRecord(responseBody);
+  const usage = asRecord(body?.usage);
+  const inputTokens = num(usage?.input_tokens ?? usage?.inputTokens);
+  const outputTokens = num(usage?.output_tokens ?? usage?.outputTokens);
+  const totalTokens = num(usage?.total_tokens ?? usage?.totalTokens);
+  const cachedInputTokens = detailTokens(
+    usage?.input_tokens_details ?? usage?.inputTokensDetails,
+    ["cached_tokens", "cachedTokens"],
+  );
+  const reasoningTokens = detailTokens(
+    usage?.output_tokens_details ?? usage?.outputTokensDetails,
+    ["reasoning_tokens", "reasoningTokens"],
+  );
+  const responseId =
+    typeof body?.id === "string"
+      ? body.id
+      : typeof body?.response_id === "string"
+        ? body.response_id
+        : null;
+
+  const hostedWebSearch = extractHostedWebSearchUsage(body);
+  return {
+    responseId,
+    inputTokens,
+    outputTokens,
+    totalTokens:
+      totalTokens ??
+      (inputTokens != null && outputTokens != null
+        ? inputTokens + outputTokens
+        : null),
+    cachedInputTokens,
+    reasoningTokens,
+    hostedWebSearch,
+    rawToolUsagePresent: asRecord(body?.tool_usage) != null,
+  };
+}
+
+/**
+ * Reconcile a-priori max_tool_calls reservation with a-posteriori num_requests.
+ * Returns the billable count to commit and whether the campaign should suspend.
+ */
+export function reconcileHostedSearchUsage(input: {
+  reservedMaxToolCalls: number;
+  observed: HostedWebSearchUsageObservation;
+  alreadyCommitted: number;
+  maxHostedSearches: number | null;
+}): {
+  commitDelta: number;
+  measured: number | null;
+  status: "MEASURED" | "UNKNOWN" | "RESERVED_ONLY";
+  suspend: boolean;
+  suspendReason: string | null;
+  limits: string[];
+} {
+  const reserved = Math.max(0, Math.floor(input.reservedMaxToolCalls));
+  const committed = Math.max(0, Math.floor(input.alreadyCommitted));
+  const limits = [...input.observed.limits];
+
+  if (input.observed.status === "MEASURED" && input.observed.numRequests != null) {
+    const measured = input.observed.numRequests;
+    const nextTotal = committed + measured;
+    // When we already reserved `reserved` at emit time, commit only the measured
+    // amount for accounting; reservation overshoot is released by caller.
+    const suspend =
+      input.maxHostedSearches != null && nextTotal > input.maxHostedSearches;
+    if (suspend) {
+      limits.push("HOSTED_SEARCH_MEASURED_OVER_ENVELOPE");
+    }
+    // Distinguish: max_tool_calls was never a billable guarantee.
+    if (measured !== reserved) {
+      limits.push("MAX_TOOL_CALLS_NE_NUM_REQUESTS");
+    }
+    return {
+      commitDelta: measured,
+      measured,
+      status: "MEASURED",
+      suspend,
+      suspendReason: suspend ? "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED" : null,
+      limits,
+    };
+  }
+
+  // UNKNOWN — do not invent ASSUMED_1; keep reserved as envelope pressure only
+  // and surface UNKNOWN for FinOps (no false precision).
+  limits.push("HOSTED_SEARCH_BILLABLE_UNKNOWN");
+  return {
+    commitDelta: 0,
+    measured: null,
+    status: "UNKNOWN",
+    suspend: false,
+    suspendReason: null,
+    limits,
+  };
+}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index 2726edbc..6d6d319d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -464,6 +464,9 @@ async function executeIsolatedLiveWebSearch(
     };
   }

+  // Macro-lot 1: same tracing policy as Nora (local filtered or OFF; no remote export).
+  const { configureAgentsSdkTracing } = await import("@/lib/agents-sdk-tracing");
+  await configureAgentsSdkTracing();
   const { Agent, run, webSearchTool } = await import("@openai/agents");
   const { randomUUID } = await import("node:crypto");
   const catalog = await import("./cognitive-resources/resource-catalog");
diff --git a/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
new file mode 100644
index 00000000..1770e1cd
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/finops/provider-admin-usage-collector.ts
@@ -0,0 +1,481 @@
+/**
+ * Macro-lot 1 — independent OpenAI Admin Usage & Costs collector.
+ *
+ * Isolated from Nora runtime:
+ * - Separate secret env: OPENAI_ADMIN_KEY (never project key / never browser)
+ * - Read-only GET allowlist only
+ * - Failure never blocks cognitive operations
+ *
+ * Without secret or without GO for LIVE Admin calls:
+ *   status = BLOCKED / NOT_LIVE_PROVEN
+ *
+ * Persistence of provider snapshots requires a migration GO (see as-built).
+ * This module keeps an in-process idempotent view for tests + readiness.
+ */
+
+export type AdminCollectorStatus =
+  | "READY"
+  | "BLOCKED_NO_SECRET"
+  | "BLOCKED_NO_LIVE_GO"
+  | "PARTIAL"
+  | "ERROR"
+  | "IDLE";
+
+export type AdminUsageBucket = {
+  /** Stable reconciliation key components */
+  source: "openai.organization.usage" | "openai.organization.costs";
+  organizationScope: string;
+  intervalStartUtc: string;
+  intervalEndUtc: string;
+  granularity: "hour" | "day";
+  dimensions: Record<string, string | null>;
+  unit: string;
+  currency: string | null;
+  value: string; // decimal string — never float money math at boundaries
+  completeness: "complete" | "partial";
+  collectedAtUtc: string;
+  collectionId: string;
+};
+
+export type AdminCollectionResult = {
+  status: AdminCollectorStatus;
+  collectionId: string;
+  collectedAtUtc: string;
+  buckets: AdminUsageBucket[];
+  pagesFetched: number;
+  limits: string[];
+  lastError: string | null;
+};
+
+export type AdminHttpTransport = (input: {
+  method: "GET";
+  path: string;
+  query: Record<string, string>;
+  headers: Record<string, string>;
+}) => Promise<{
+  status: number;
+  json: unknown;
+  headers?: Record<string, string>;
+}>;
+
+export type AdminCollectorConfig = {
+  /** Never log this value. */
+  adminApiKey: string | null;
+  organizationScope: string;
+  /** Explicit LIVE gate — false under initial GO. */
+  liveAdminCallsAuthorized: boolean;
+  transport?: AdminHttpTransport;
+};
+
+const ALLOWED_PATHS = new Set([
+  "/v1/organization/usage/completions",
+  "/v1/organization/usage/responses",
+  "/v1/organization/usage/embeddings",
+  "/v1/organization/usage/audio_speeches",
+  "/v1/organization/usage/audio_transcriptions",
+  "/v1/organization/usage/vector_stores",
+  "/v1/organization/usage/moderations",
+  "/v1/organization/usage/images",
+  "/v1/organization/costs",
+]);
+
+/** In-process snapshot store — NOT a second ledger. Product PG requires migration GO. */
+const snapshotByKey = new Map<string, AdminUsageBucket>();
+let lastSuccessfulCollection: {
+  atUtc: string;
+  collectionId: string;
+  status: AdminCollectorStatus;
+} | null = null;
+
+export function resetAdminCollectorStateForTests(): void {
+  snapshotByKey.clear();
+  lastSuccessfulCollection = null;
+}
+
+export function getAdminCollectorFreshness(): {
+  lastSuccessAtUtc: string | null;
+  lastCollectionId: string | null;
+  status: AdminCollectorStatus;
+  bucketCount: number;
+} {
+  return {
+    lastSuccessAtUtc: lastSuccessfulCollection?.atUtc ?? null,
+    lastCollectionId: lastSuccessfulCollection?.collectionId ?? null,
+    status: lastSuccessfulCollection?.status ?? "IDLE",
+    bucketCount: snapshotByKey.size,
+  };
+}
+
+export function listAdminCollectorBuckets(): AdminUsageBucket[] {
+  return [...snapshotByKey.values()];
+}
+
+export function resolveAdminCollectorConfig(
+  env: NodeJS.ProcessEnv = process.env,
+): AdminCollectorConfig {
+  const key = (env.OPENAI_ADMIN_KEY ?? "").trim() || null;
+  const live =
+    (env.SFIA_ADMIN_USAGE_LIVE ?? "").trim() === "1" &&
+    (env.STUDIO_LANE ?? "").trim().toUpperCase() === "DEV";
+  return {
+    adminApiKey: key,
+    organizationScope:
+      (env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
+      "org:unspecified",
+    liveAdminCallsAuthorized: live,
+  };
+}
+
+function bucketKey(b: AdminUsageBucket): string {
+  const dims = Object.keys(b.dimensions)
+    .sort()
+    .map((k) => `${k}=${b.dimensions[k] ?? ""}`)
+    .join("&");
+  return [
+    b.source,
+    b.organizationScope,
+    b.intervalStartUtc,
+    b.intervalEndUtc,
+    b.granularity,
+    b.unit,
+    b.currency ?? "",
+    dims,
+  ].join("|");
+}
+
+function assertAllowedPath(path: string): void {
+  if (!ALLOWED_PATHS.has(path)) {
+    throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${path}`);
+  }
+}
+
+/**
+ * Substituted-transport page reader — representative of Usage/Costs pagination.
+ * Real HTTP transport is only used when secret + LIVE GO present.
+ */
+export async function collectAdminUsagePage(input: {
+  config: AdminCollectorConfig;
+  path: string;
+  query: Record<string, string>;
+  collectionId: string;
+}): Promise<{
+  buckets: AdminUsageBucket[];
+  nextPage: string | null;
+  partial: boolean;
+}> {
+  assertAllowedPath(input.path);
+  if (!input.config.adminApiKey) {
+    throw new Error("BLOCKED_NO_SECRET");
+  }
+  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
+    throw new Error("BLOCKED_NO_LIVE_GO");
+  }
+  const transport = input.config.transport;
+  if (!transport) {
+    throw new Error("BLOCKED_NO_TRANSPORT");
+  }
+
+  const res = await transport({
+    method: "GET",
+    path: input.path,
+    query: input.query,
+    headers: {
+      Authorization: `Bearer ${input.config.adminApiKey}`,
+      "Content-Type": "application/json",
+    },
+  });
+
+  if (res.status === 429) {
+    throw new Error("RATE_LIMITED");
+  }
+  if (res.status === 401 || res.status === 403) {
+    throw new Error("ADMIN_PERMISSION_DENIED");
+  }
+  if (res.status < 200 || res.status >= 300) {
+    throw new Error(`ADMIN_HTTP_${res.status}`);
+  }
+
+  const body = (res.json ?? {}) as {
+    data?: unknown[];
+    has_more?: boolean;
+    next_page?: string | null;
+  };
+  const rows = Array.isArray(body.data) ? body.data : [];
+  const collectedAtUtc = new Date().toISOString();
+  const source =
+    input.path.endsWith("/costs")
+      ? ("openai.organization.costs" as const)
+      : ("openai.organization.usage" as const);
+
+  const buckets: AdminUsageBucket[] = [];
+  for (const row of rows) {
+    if (!row || typeof row !== "object") continue;
+    const r = row as Record<string, unknown>;
+    const start =
+      typeof r.start_time === "number"
+        ? new Date(r.start_time * 1000).toISOString()
+        : typeof r.start_time === "string"
+          ? r.start_time
+          : input.query.start_time
+            ? new Date(Number(input.query.start_time) * 1000).toISOString()
+            : collectedAtUtc;
+    const end =
+      typeof r.end_time === "number"
+        ? new Date(r.end_time * 1000).toISOString()
+        : typeof r.end_time === "string"
+          ? r.end_time
+          : start;
+    const amount =
+      r.amount && typeof r.amount === "object"
+        ? (r.amount as Record<string, unknown>)
+        : null;
+    const valueRaw =
+      amount?.value ?? r.value ?? r.input_tokens ?? r.num_model_requests ?? 0;
+    const value =
+      typeof valueRaw === "number" || typeof valueRaw === "string"
+        ? String(valueRaw)
+        : "0";
+    const currency =
+      typeof amount?.currency === "string"
+        ? amount.currency
+        : source === "openai.organization.costs"
+          ? "usd"
+          : null;
+    buckets.push({
+      source,
+      organizationScope: input.config.organizationScope,
+      intervalStartUtc: start,
+      intervalEndUtc: end,
+      granularity: input.query.bucket_width === "1h" ? "hour" : "day",
+      dimensions: {
+        project_id:
+          typeof r.project_id === "string"
+            ? r.project_id
+            : typeof (r.project_id as { value?: string } | null)?.value ===
+                "string"
+              ? (r.project_id as { value: string }).value
+              : null,
+        api_key_id:
+          typeof r.api_key_id === "string"
+            ? r.api_key_id
+            : typeof (r.api_key_id as { value?: string } | null)?.value ===
+                "string"
+              ? (r.api_key_id as { value: string }).value
+              : null,
+        model: typeof r.model === "string" ? r.model : null,
+      },
+      unit:
+        source === "openai.organization.costs"
+          ? "currency"
+          : typeof r.usage_type === "string"
+            ? r.usage_type
+            : "tokens",
+      currency,
+      value,
+      completeness: "complete",
+      collectedAtUtc,
+      collectionId: input.collectionId,
+    });
+  }
+
+  return {
+    buckets,
+    nextPage:
+      body.has_more && typeof body.next_page === "string"
+        ? body.next_page
+        : null,
+    partial: false,
+  };
+}
+
+/**
+ * Idempotent upsert: same bucket key replaces (does not add).
+ * Partial collections must not wipe prior complete buckets.
+ */
+export function upsertAdminBuckets(
+  buckets: AdminUsageBucket[],
+  opts?: { replaceIncompleteOnly?: boolean },
+): void {
+  for (const b of buckets) {
+    const key = bucketKey(b);
+    const prev = snapshotByKey.get(key);
+    if (
+      prev &&
+      prev.completeness === "complete" &&
+      b.completeness === "partial" &&
+      opts?.replaceIncompleteOnly !== false
+    ) {
+      // Do not overwrite complete with partial.
+      continue;
+    }
+    snapshotByKey.set(key, b);
+  }
+}
+
+export async function runAdminCollection(input: {
+  config: AdminCollectorConfig;
+  path: string;
+  query: Record<string, string>;
+  maxPages?: number;
+}): Promise<AdminCollectionResult> {
+  const collectionId = `acol_${Date.now().toString(36)}`;
+  const collectedAtUtc = new Date().toISOString();
+  const limits: string[] = [];
+
+  if (!input.config.adminApiKey) {
+    return {
+      status: "BLOCKED_NO_SECRET",
+      collectionId,
+      collectedAtUtc,
+      buckets: [],
+      pagesFetched: 0,
+      limits: ["OPENAI_ADMIN_KEY_ABSENT"],
+      lastError: null,
+    };
+  }
+  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
+    return {
+      status: "BLOCKED_NO_LIVE_GO",
+      collectionId,
+      collectedAtUtc,
+      buckets: [],
+      pagesFetched: 0,
+      limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED"],
+      lastError: null,
+    };
+  }
+
+  const maxPages = Math.max(1, Math.min(50, input.maxPages ?? 10));
+  const all: AdminUsageBucket[] = [];
+  let page: string | null = null;
+  let pagesFetched = 0;
+  let partial = false;
+
+  try {
+    assertAllowedPath(input.path);
+    for (let i = 0; i < maxPages; i++) {
+      const query = { ...input.query };
+      if (page) query.page = page;
+      const result = await collectAdminUsagePage({
+        config: input.config,
+        path: input.path,
+        query,
+        collectionId,
+      });
+      pagesFetched += 1;
+      all.push(...result.buckets);
+      if (result.partial) partial = true;
+      page = result.nextPage;
+      if (!page) break;
+      if (i === maxPages - 1 && page) {
+        partial = true;
+        limits.push("PAGINATION_TRUNCATED");
+      }
+    }
+
+    if (partial) {
+      for (const b of all) b.completeness = "partial";
+      // Upsert partials without wiping prior completes for same keys.
+      upsertAdminBuckets(all);
+      lastSuccessfulCollection = {
+        atUtc: collectedAtUtc,
+        collectionId,
+        status: "PARTIAL",
+      };
+      return {
+        status: "PARTIAL",
+        collectionId,
+        collectedAtUtc,
+        buckets: all,
+        pagesFetched,
+        limits,
+        lastError: null,
+      };
+    }
+
+    upsertAdminBuckets(all);
+    lastSuccessfulCollection = {
+      atUtc: collectedAtUtc,
+      collectionId,
+      status: "READY",
+    };
+    return {
+      status: "READY",
+      collectionId,
+      collectedAtUtc,
+      buckets: all,
+      pagesFetched,
+      limits,
+      lastError: null,
+    };
+  } catch (e) {
+    const msg = e instanceof Error ? e.message : String(e);
+    if (msg === "BLOCKED_NO_SECRET") {
+      return {
+        status: "BLOCKED_NO_SECRET",
+        collectionId,
+        collectedAtUtc,
+        buckets: [],
+        pagesFetched,
+        limits,
+        lastError: msg,
+      };
+    }
+    if (msg === "BLOCKED_NO_LIVE_GO" || msg === "BLOCKED_NO_TRANSPORT") {
+      return {
+        status: "BLOCKED_NO_LIVE_GO",
+        collectionId,
+        collectedAtUtc,
+        buckets: [],
+        pagesFetched,
+        limits,
+        lastError: msg,
+      };
+    }
+    // Error must not erase prior complete snapshots.
+    return {
+      status: "ERROR",
+      collectionId,
+      collectedAtUtc,
+      buckets: [],
+      pagesFetched,
+      limits,
+      lastError: msg,
+    };
+  }
+}
+
+/**
+ * Compare Studio estimated USD (decimal string) to provider cost aggregate
+ * only when scopes are comparable.
+ */
+export function reconcileFinOpsCosts(input: {
+  studioEstimatedUsd: string;
+  providerCostUsd: string | null;
+  comparable: boolean;
+  reasonIfNot?: string;
+}): {
+  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL";
+  deltaUsd: string | null;
+  limits: string[];
+} {
+  if (!input.comparable || input.providerCostUsd == null) {
+    return {
+      status: "NON_COMPARABLE",
+      deltaUsd: null,
+      limits: [input.reasonIfNot ?? "SCOPE_NOT_COMPARABLE"],
+    };
+  }
+  const a = Number(input.studioEstimatedUsd);
+  const b = Number(input.providerCostUsd);
+  if (!Number.isFinite(a) || !Number.isFinite(b)) {
+    return {
+      status: "PARTIAL",
+      deltaUsd: null,
+      limits: ["DECIMAL_PARSE_FAILED"],
+    };
+  }
+  // Fixed 10 dp string — display layer; not exact work attribution.
+  const delta = (b - a).toFixed(10);
+  return { status: "COMPARABLE", deltaUsd: delta, limits: [] };
+}
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index 055cadd4..f13995bb 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -19,6 +19,11 @@ import {
   type FinOpsPeriodDays,
   type MeasuredValue,
 } from "./usage-projection";
+import {
+  getAdminCollectorFreshness,
+  listAdminCollectorBuckets,
+  reconcileFinOpsCosts,
+} from "./provider-admin-usage-collector";

 function studioLane(): string {
   return process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
@@ -111,6 +116,26 @@ export async function loadFinOpsFilterOptions(pilotId: string) {
   };
 }

+export type FinOpsProviderReconciliationDto = {
+  /** Operational Studio estimates remain the attribution ledger. */
+  studioEstimatedUsd: number | null;
+  studioEstimationKind: MeasuredValue<number>["kind"];
+  /** Provider Costs aggregate when a successful Admin collection exists. */
+  providerCostUsd: number | null;
+  providerCurrency: string | null;
+  deltaUsd: number | null;
+  comparability: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
+  freshness: {
+    lastSuccessAtUtc: string | null;
+    lastCollectionId: string | null;
+    status: string;
+    bucketCount: number;
+  };
+  limits: string[];
+  /** Explicit: Admin collection never blocks Nora. */
+  noraIndependent: true;
+};
+
 export type FinOpsSummaryDto = {
   periodDays: FinOpsPeriodDays;
   projectId: string | null;
@@ -129,6 +154,8 @@ export type FinOpsSummaryDto = {
   };
   dailyCosts: Array<{ day: string; costUsd: number | null; hasData: boolean }>;
   modelBreakdown: Array<{ model: string; costUsd: number | null; coverage: string }>;
+  /** Macro-lot 1 — Usage & Costs rapprochement (honest; may be UNAVAILABLE). */
+  providerReconciliation: FinOpsProviderReconciliationDto;
 };

 function bucketDailyCosts(rows: ObservationRow[], periodDays: FinOpsPeriodDays): FinOpsSummaryDto["dailyCosts"] {
@@ -245,6 +272,8 @@ export async function loadFinOpsSummary(
     onlyWithObservedCost: true,
   });

+  const providerReconciliation = buildProviderReconciliationDto(estimatedCostUsd);
+
   return {
     periodDays,
     projectId: input.projectId ?? null,
@@ -262,6 +291,107 @@ export async function loadFinOpsSummary(
     },
     dailyCosts: bucketDailyCosts(rows, periodDays),
     modelBreakdown: bucketModelBreakdown(rows),
+    providerReconciliation,
+  };
+}
+
+function buildProviderReconciliationDto(
+  estimatedCostUsd: MeasuredValue<number>,
+): FinOpsProviderReconciliationDto {
+  const freshness = getAdminCollectorFreshness();
+  const costBuckets = listAdminCollectorBuckets().filter(
+    (b) => b.source === "openai.organization.costs" && b.completeness === "complete",
+  );
+  const limits: string[] = [];
+
+  if (freshness.status === "IDLE" || freshness.bucketCount === 0) {
+    limits.push("ADMIN_COLLECTION_UNAVAILABLE");
+    if (!process.env.OPENAI_ADMIN_KEY?.trim()) {
+      limits.push("OPENAI_ADMIN_KEY_ABSENT");
+    }
+    if (process.env.SFIA_ADMIN_USAGE_LIVE?.trim() !== "1") {
+      limits.push("SFIA_ADMIN_USAGE_LIVE_REQUIRED");
+    }
+    limits.push("PROVIDER_SNAPSHOT_PG_MIGRATION_PENDING");
+    return {
+      studioEstimatedUsd:
+        estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial"
+          ? estimatedCostUsd.value
+          : null,
+      studioEstimationKind: estimatedCostUsd.kind,
+      providerCostUsd: null,
+      providerCurrency: null,
+      deltaUsd: null,
+      comparability: "UNAVAILABLE",
+      freshness: {
+        lastSuccessAtUtc: freshness.lastSuccessAtUtc,
+        lastCollectionId: freshness.lastCollectionId,
+        status: freshness.status,
+        bucketCount: freshness.bucketCount,
+      },
+      limits,
+      noraIndependent: true,
+    };
+  }
+
+  // Sum complete cost buckets — do not invent project/work attribution.
+  let providerSum = 0;
+  let currency: string | null = null;
+  for (const b of costBuckets) {
+    const n = Number(b.value);
+    if (!Number.isFinite(n)) {
+      limits.push("PROVIDER_COST_PARSE_PARTIAL");
+      continue;
+    }
+    providerSum += n;
+    currency = b.currency ?? currency;
+  }
+
+  const studio =
+    estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial"
+      ? estimatedCostUsd.value
+      : null;
+
+  // Without a proven lane↔project↔key mapping, org aggregates are NON_COMPARABLE
+  // to Studio pilot estimates (ENV-01 / mandate §10.6).
+  const mappingProven =
+    (process.env.SFIA_FINOPS_SCOPE_COMPARABLE ?? "").trim() === "1";
+  if (!mappingProven) {
+    limits.push("LANE_PROJECT_KEY_MAPPING_UNPROVEN");
+  }
+
+  const rec = reconcileFinOpsCosts({
+    studioEstimatedUsd: studio != null ? String(studio) : "0",
+    providerCostUsd: costBuckets.length > 0 ? String(providerSum) : null,
+    comparable: mappingProven && studio != null && costBuckets.length > 0,
+    reasonIfNot: mappingProven
+      ? "STUDIO_OR_PROVIDER_ABSENT"
+      : "LANE_PROJECT_KEY_MAPPING_UNPROVEN",
+  });
+  limits.push(...rec.limits);
+
+  return {
+    studioEstimatedUsd: studio,
+    studioEstimationKind: estimatedCostUsd.kind,
+    providerCostUsd: costBuckets.length > 0 ? providerSum : null,
+    providerCurrency: currency,
+    deltaUsd: rec.deltaUsd != null ? Number(rec.deltaUsd) : null,
+    comparability:
+      rec.status === "COMPARABLE"
+        ? "COMPARABLE"
+        : rec.status === "PARTIAL"
+          ? "PARTIAL"
+          : costBuckets.length === 0
+            ? "UNAVAILABLE"
+            : "NON_COMPARABLE",
+    freshness: {
+      lastSuccessAtUtc: freshness.lastSuccessAtUtc,
+      lastCollectionId: freshness.lastCollectionId,
+      status: freshness.status,
+      bucketCount: freshness.bucketCount,
+    },
+    limits,
+    noraIndependent: true,
   };
 }

diff --git a/projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts b/projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts
new file mode 100644
index 00000000..ff28cdf0
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/lib/agents-sdk-tracing.ts
@@ -0,0 +1,313 @@
+/**
+ * Macro-lot 1 — Agents SDK tracing under Studio control.
+ *
+ * Modes (SFIA_AGENTS_TRACING_MODE):
+ * - off   → setTracingDisabled(true)  [default / rollback]
+ * - local → setTracingDisabled(false) + setTraceProcessors([StudioLocalTraceProcessor])
+ *
+ * NEVER registers a remote OpenAI exporter. Default SDK ConsoleSpanExporter is replaced.
+ * Sensitive model/tool payloads are stripped before any local sink.
+ * A processor failure must not throw into Nora run paths.
+ */
+
+import { emitObs } from "@/lib/observability";
+
+export type AgentsTracingMode = "off" | "local";
+
+export type StudioTraceSinkRecord = {
+  kind: "trace" | "span";
+  name: string;
+  traceId: string | null;
+  spanId: string | null;
+  status: string | null;
+  durationMs: number | null;
+  /** Always redacted — presence proves filter ran. */
+  dataRedacted: true;
+  correlation: {
+    operationId: string | null;
+    generationId: string | null;
+    attemptId: string | null;
+    workId: string | null;
+  };
+  atMs: number;
+};
+
+/** Loose structural reads — SDK Span uses string timestamps; we accept both. */
+// eslint-disable-next-line @typescript-eslint/no-explicit-any
+type TraceLike = any;
+// eslint-disable-next-line @typescript-eslint/no-explicit-any
+type SpanLike = any;
+
+export type StudioTracingCorrelation = {
+  operationId?: string | null;
+  generationId?: string | null;
+  attemptId?: string | null;
+  workId?: string | null;
+};
+
+let correlation: StudioTracingCorrelation = {};
+let configured = false;
+let lastMode: AgentsTracingMode = "off";
+
+/** Test / egress oracle — in-memory only; never leaves process. */
+const sinkRecords: StudioTraceSinkRecord[] = [];
+let egressProbeHooks: Array<(url: string) => void> = [];
+
+export function resetAgentsTracingTestState(): void {
+  sinkRecords.length = 0;
+  egressProbeHooks = [];
+  correlation = {};
+  configured = false;
+  lastMode = "off";
+}
+
+export function getAgentsTracingSinkRecords(): readonly StudioTraceSinkRecord[] {
+  return sinkRecords;
+}
+
+/** Independent egress observation: any processor HTTP would call this. */
+export function installAgentsTracingEgressProbe(
+  hook: (url: string) => void,
+): () => void {
+  egressProbeHooks.push(hook);
+  return () => {
+    egressProbeHooks = egressProbeHooks.filter((h) => h !== hook);
+  };
+}
+
+function noteEgress(url: string): void {
+  for (const h of egressProbeHooks) {
+    try {
+      h(url);
+    } catch {
+      /* probe must not break tracing */
+    }
+  }
+}
+
+/**
+ * Deliberately unused by StudioLocalTraceProcessor — present so tests can assert
+ * that enabling local mode never routes through a remote export helper.
+ */
+export function __forbiddenRemoteTraceExport(url: string, _body: unknown): void {
+  noteEgress(url);
+  throw new Error("FORBIDDEN_REMOTE_TRACE_EXPORT");
+}
+
+export function setAgentsTracingCorrelation(
+  next: StudioTracingCorrelation,
+): void {
+  correlation = {
+    operationId: next.operationId ?? null,
+    generationId: next.generationId ?? null,
+    attemptId: next.attemptId ?? null,
+    workId: next.workId ?? null,
+  };
+}
+
+export function clearAgentsTracingCorrelation(): void {
+  correlation = {};
+}
+
+export function resolveAgentsTracingMode(
+  env: NodeJS.ProcessEnv = process.env,
+): AgentsTracingMode {
+  const raw = (env.SFIA_AGENTS_TRACING_MODE ?? "off").trim().toLowerCase();
+  return raw === "local" ? "local" : "off";
+}
+
+function spanName(span: SpanLike): string {
+  const data = span?.spanData ?? span?.data;
+  if (data && typeof data === "object") {
+    const t = typeof data.type === "string" ? data.type : null;
+    const n = typeof data.name === "string" ? data.name : null;
+    if (t && n) return `${t}:${n}`;
+    if (t) return t;
+    if (n) return n;
+  }
+  return "span";
+}
+
+function asEpochMs(v: unknown): number | null {
+  if (typeof v === "number" && Number.isFinite(v)) return v;
+  if (typeof v === "string" && v.trim()) {
+    const t = Date.parse(v);
+    return Number.isFinite(t) ? t : null;
+  }
+  return null;
+}
+
+function durationMs(span: SpanLike): number | null {
+  const start = asEpochMs(span?.startedAt);
+  const end = asEpochMs(span?.endedAt);
+  if (start == null || end == null) return null;
+  return Math.max(0, Math.floor(end - start));
+}
+
+function statusOf(span: SpanLike): string | null {
+  if (span?.error != null) return "error";
+  if (span?.endedAt != null) return "ok";
+  return null;
+}
+
+function recordLocal(item: StudioTraceSinkRecord): void {
+  sinkRecords.push(item);
+  if (sinkRecords.length > 500) sinkRecords.shift();
+  try {
+    emitObs({
+      event_name: "provider.agents_trace.local",
+      component: "agents_sdk_tracing",
+      outcome: item.status === "error" ? "FAILED" : "SUCCESS",
+      operation_id: item.correlation.operationId ?? undefined,
+      generation_id: item.correlation.generationId ?? undefined,
+      attempt_id: item.correlation.attemptId ?? undefined,
+      duration_ms: item.durationMs ?? undefined,
+      // Only allowlisted meta keys (see observability.ts META_ALLOWLIST).
+      meta: {
+        kind: item.kind,
+        status: item.status,
+        tool_calls: item.name,
+      },
+    });
+  } catch {
+    /* OBS failure must not break Nora */
+  }
+}
+
+/**
+ * Local-only TracingProcessor: no HTTP, no model/tool payloads, OBS + in-memory sink.
+ */
+export class StudioLocalTraceProcessor {
+  async onTraceStart(_trace: TraceLike): Promise<void> {
+    /* start is noisy; we record on end */
+  }
+
+  async onTraceEnd(trace: TraceLike): Promise<void> {
+    try {
+      recordLocal({
+        kind: "trace",
+        name: typeof trace.name === "string" ? trace.name : "trace",
+        traceId: typeof trace.traceId === "string" ? trace.traceId : null,
+        spanId: null,
+        status: "ok",
+        durationMs: null,
+        dataRedacted: true,
+        correlation: {
+          operationId: correlation.operationId ?? null,
+          generationId: correlation.generationId ?? null,
+          attemptId: correlation.attemptId ?? null,
+          workId: correlation.workId ?? null,
+        },
+        atMs: Date.now(),
+      });
+    } catch {
+      /* swallow */
+    }
+  }
+
+  async onSpanStart(_span: SpanLike): Promise<void> {
+    /* record on end */
+  }
+
+  async onSpanEnd(span: SpanLike): Promise<void> {
+    try {
+      recordLocal({
+        kind: "span",
+        name: spanName(span),
+        traceId: typeof span.traceId === "string" ? span.traceId : null,
+        spanId: typeof span.spanId === "string" ? span.spanId : null,
+        status: statusOf(span),
+        durationMs: durationMs(span),
+        dataRedacted: true,
+        correlation: {
+          operationId: correlation.operationId ?? null,
+          generationId: correlation.generationId ?? null,
+          attemptId: correlation.attemptId ?? null,
+          workId: correlation.workId ?? null,
+        },
+        atMs: Date.now(),
+      });
+    } catch {
+      /* swallow */
+    }
+  }
+
+  async forceFlush(): Promise<void> {
+    /* no remote buffer */
+  }
+
+  async shutdown(): Promise<void> {
+    /* no-op */
+  }
+}
+
+export type ConfigureAgentsTracingResult = {
+  mode: AgentsTracingMode;
+  tracingDisabled: boolean;
+  processorsReplaced: boolean;
+  sensitiveLoggingForcedOff: boolean;
+};
+
+/**
+ * Idempotent configuration. Safe to call before every LIVE Agents run.
+ */
+export async function configureAgentsSdkTracing(
+  env: NodeJS.ProcessEnv = process.env,
+): Promise<ConfigureAgentsTracingResult> {
+  const mode = resolveAgentsTracingMode(env);
+  const agents = await import("@openai/agents");
+
+  // Always force sensitive logging OFF for the product path (DEV ephemeral
+  // diagnostics remain a separate opt-in in nora-adapter, after this call).
+  let sensitiveLoggingForcedOff = false;
+  try {
+    const core = await import("@openai/agents-core");
+    if (typeof core.setSensitiveDataLoggingEnabled === "function") {
+      core.setSensitiveDataLoggingEnabled(false);
+      sensitiveLoggingForcedOff = true;
+    }
+  } catch {
+    sensitiveLoggingForcedOff = false;
+  }
+
+  if (mode === "off") {
+    if (typeof agents.setTracingDisabled === "function") {
+      agents.setTracingDisabled(true);
+    }
+    // Replace any processors so a later enable cannot inherit a prior remote exporter.
+    if (typeof agents.setTraceProcessors === "function") {
+      agents.setTraceProcessors([]);
+    }
+    lastMode = "off";
+    configured = true;
+    return {
+      mode: "off",
+      tracingDisabled: true,
+      processorsReplaced: true,
+      sensitiveLoggingForcedOff,
+    };
+  }
+
+  // local mode
+  if (typeof agents.setTraceProcessors === "function") {
+    agents.setTraceProcessors([new StudioLocalTraceProcessor()]);
+  }
+  if (typeof agents.setTracingDisabled === "function") {
+    agents.setTracingDisabled(false);
+  }
+  lastMode = "local";
+  configured = true;
+  return {
+    mode: "local",
+    tracingDisabled: false,
+    processorsReplaced: true,
+    sensitiveLoggingForcedOff,
+  };
+}
+
+export function getAgentsTracingConfigState(): {
+  configured: boolean;
+  mode: AgentsTracingMode;
+} {
+  return { configured, mode: lastMode };
+}
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing.test.ts
new file mode 100644
index 00000000..025c7094
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-agents-sdk-tracing.test.ts
@@ -0,0 +1,109 @@
+import { afterEach, describe, expect, it, vi } from "vitest";
+import {
+  StudioLocalTraceProcessor,
+  __forbiddenRemoteTraceExport,
+  configureAgentsSdkTracing,
+  getAgentsTracingSinkRecords,
+  installAgentsTracingEgressProbe,
+  resetAgentsTracingTestState,
+  resolveAgentsTracingMode,
+  setAgentsTracingCorrelation,
+} from "@/lib/agents-sdk-tracing";
+
+const setTracingDisabled = vi.fn();
+const setTraceProcessors = vi.fn();
+const setSensitiveDataLoggingEnabled = vi.fn();
+
+vi.mock("@openai/agents", () => ({
+  setTracingDisabled: (...args: unknown[]) => setTracingDisabled(...args),
+  setTraceProcessors: (...args: unknown[]) => setTraceProcessors(...args),
+}));
+
+vi.mock("@openai/agents-core", () => ({
+  setSensitiveDataLoggingEnabled: (...args: unknown[]) =>
+    setSensitiveDataLoggingEnabled(...args),
+}));
+
+vi.mock("@/lib/observability", () => ({
+  emitObs: vi.fn(() => ({ emitted: true })),
+}));
+
+describe("agents-sdk-tracing", () => {
+  afterEach(() => {
+    resetAgentsTracingTestState();
+    setTracingDisabled.mockReset();
+    setTraceProcessors.mockReset();
+    setSensitiveDataLoggingEnabled.mockReset();
+    vi.unstubAllEnvs();
+  });
+
+  it("defaults to off", () => {
+    expect(resolveAgentsTracingMode({} as NodeJS.ProcessEnv)).toBe("off");
+  });
+
+  it("configures OFF: disables tracing and clears processors", async () => {
+    vi.stubEnv("SFIA_AGENTS_TRACING_MODE", "off");
+    const r = await configureAgentsSdkTracing(process.env);
+    expect(r.mode).toBe("off");
+    expect(r.tracingDisabled).toBe(true);
+    expect(setTracingDisabled).toHaveBeenCalledWith(true);
+    expect(setTraceProcessors).toHaveBeenCalledWith([]);
+    expect(setSensitiveDataLoggingEnabled).toHaveBeenCalledWith(false);
+  });
+
+  it("configures LOCAL: replaces processors with StudioLocalTraceProcessor", async () => {
+    vi.stubEnv("SFIA_AGENTS_TRACING_MODE", "local");
+    const r = await configureAgentsSdkTracing(process.env);
+    expect(r.mode).toBe("local");
+    expect(r.tracingDisabled).toBe(false);
+    expect(setTracingDisabled).toHaveBeenCalledWith(false);
+    expect(setTraceProcessors).toHaveBeenCalledTimes(1);
+    const processors = setTraceProcessors.mock.calls[0][0] as unknown[];
+    expect(processors).toHaveLength(1);
+    expect(processors[0]).toBeInstanceOf(StudioLocalTraceProcessor);
+  });
+
+  it("local processor redacts and never triggers egress probe", async () => {
+    const egress: string[] = [];
+    installAgentsTracingEgressProbe((url) => egress.push(url));
+    setAgentsTracingCorrelation({
+      operationId: "op_1",
+      generationId: "gen_1",
+      attemptId: "att_1",
+      workId: "work_1",
+    });
+    const p = new StudioLocalTraceProcessor();
+    await p.onSpanEnd({
+      type: "span",
+      traceId: "trace_abc",
+      spanId: "span_1",
+      startedAt: 1000,
+      endedAt: 1250,
+      spanData: {
+        type: "generation",
+        name: "reply",
+        input: "SECRET_PROMPT",
+        output: "SECRET_OUTPUT",
+      },
+    });
+    const records = getAgentsTracingSinkRecords();
+    expect(records).toHaveLength(1);
+    expect(records[0].dataRedacted).toBe(true);
+    expect(records[0].name).toBe("generation:reply");
+    expect(records[0].durationMs).toBe(250);
+    expect(records[0].correlation.operationId).toBe("op_1");
+    expect(JSON.stringify(records[0])).not.toContain("SECRET_PROMPT");
+    expect(egress).toEqual([]);
+  });
+
+  it("forbidden remote export helper is detectable by egress probe", () => {
+    const egress: string[] = [];
+    installAgentsTracingEgressProbe((url) => egress.push(url));
+    expect(() =>
+      __forbiddenRemoteTraceExport("https://api.openai.com/v1/traces/ingest", {
+        prompt: "x",
+      }),
+    ).toThrow(/FORBIDDEN_REMOTE_TRACE_EXPORT/);
+    expect(egress).toEqual(["https://api.openai.com/v1/traces/ingest"]);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
new file mode 100644
index 00000000..4fe7b178
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-admin-usage-collector.test.ts
@@ -0,0 +1,211 @@
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  collectAdminUsagePage,
+  resetAdminCollectorStateForTests,
+  resolveAdminCollectorConfig,
+  runAdminCollection,
+  upsertAdminBuckets,
+  listAdminCollectorBuckets,
+  reconcileFinOpsCosts,
+  type AdminHttpTransport,
+} from "@/domains/finops/provider-admin-usage-collector";
+
+describe("provider-admin-usage-collector", () => {
+  afterEach(() => {
+    resetAdminCollectorStateForTests();
+  });
+
+  it("blocks without secret", async () => {
+    const r = await runAdminCollection({
+      config: {
+        adminApiKey: null,
+        organizationScope: "org:test",
+        liveAdminCallsAuthorized: true,
+      },
+      path: "/v1/organization/costs",
+      query: { start_time: "1", limit: "10" },
+    });
+    expect(r.status).toBe("BLOCKED_NO_SECRET");
+  });
+
+  it("blocks without LIVE GO when no substituted transport", async () => {
+    const r = await runAdminCollection({
+      config: {
+        adminApiKey: "sk-admin-test",
+        organizationScope: "org:test",
+        liveAdminCallsAuthorized: false,
+      },
+      path: "/v1/organization/costs",
+      query: { start_time: "1" },
+    });
+    expect(r.status).toBe("BLOCKED_NO_LIVE_GO");
+  });
+
+  it("refuses non-allowlisted paths", async () => {
+    const transport: AdminHttpTransport = async () => ({
+      status: 200,
+      json: { data: [] },
+    });
+    await expect(
+      collectAdminUsagePage({
+        config: {
+          adminApiKey: "sk-admin-test",
+          organizationScope: "org:test",
+          liveAdminCallsAuthorized: false,
+          transport,
+        },
+        path: "/v1/organization/projects",
+        query: {},
+        collectionId: "acol_x",
+      }),
+    ).rejects.toThrow(/ADMIN_PATH_NOT_ALLOWLISTED/);
+  });
+
+  it("paginates via substituted transport and upserts idempotently", async () => {
+    let calls = 0;
+    const transport: AdminHttpTransport = async ({ path, headers }) => {
+      calls += 1;
+      expect(path).toBe("/v1/organization/costs");
+      expect(headers.Authorization).toBe("Bearer sk-admin-test");
+      if (calls === 1) {
+        return {
+          status: 200,
+          json: {
+            data: [
+              {
+                start_time: 1_700_000_000,
+                end_time: 1_700_086_400,
+                amount: { value: 0.42, currency: "usd" },
+                project_id: "proj_a",
+              },
+            ],
+            has_more: true,
+            next_page: "page_2",
+          },
+        };
+      }
+      return {
+        status: 200,
+        json: {
+          data: [
+            {
+              start_time: 1_700_086_400,
+              end_time: 1_700_172_800,
+              amount: { value: 0.11, currency: "usd" },
+              project_id: "proj_a",
+            },
+          ],
+          has_more: false,
+        },
+      };
+    };
+
+    const r = await runAdminCollection({
+      config: {
+        adminApiKey: "sk-admin-test",
+        organizationScope: "org:test",
+        liveAdminCallsAuthorized: false,
+        transport,
+      },
+      path: "/v1/organization/costs",
+      query: { start_time: "1700000000", bucket_width: "1d" },
+    });
+    expect(r.status).toBe("READY");
+    expect(r.pagesFetched).toBe(2);
+    expect(r.buckets).toHaveLength(2);
+    expect(listAdminCollectorBuckets()).toHaveLength(2);
+
+    // Idempotent re-run replaces, does not double.
+    await runAdminCollection({
+      config: {
+        adminApiKey: "sk-admin-test",
+        organizationScope: "org:test",
+        liveAdminCallsAuthorized: false,
+        transport: async () => ({
+          status: 200,
+          json: {
+            data: [
+              {
+                start_time: 1_700_000_000,
+                end_time: 1_700_086_400,
+                amount: { value: 0.5, currency: "usd" },
+                project_id: "proj_a",
+              },
+            ],
+          },
+        }),
+      },
+      path: "/v1/organization/costs",
+      query: { start_time: "1700000000", bucket_width: "1d" },
+    });
+    const buckets = listAdminCollectorBuckets().filter(
+      (b) => b.intervalStartUtc === new Date(1_700_000_000 * 1000).toISOString(),
+    );
+    expect(buckets).toHaveLength(1);
+    expect(buckets[0].value).toBe("0.5");
+  });
+
+  it("does not overwrite complete bucket with partial", () => {
+    upsertAdminBuckets([
+      {
+        source: "openai.organization.costs",
+        organizationScope: "org:t",
+        intervalStartUtc: "2026-01-01T00:00:00.000Z",
+        intervalEndUtc: "2026-01-02T00:00:00.000Z",
+        granularity: "day",
+        dimensions: { project_id: "p", api_key_id: null, model: null },
+        unit: "currency",
+        currency: "usd",
+        value: "1.00",
+        completeness: "complete",
+        collectedAtUtc: "2026-01-02T01:00:00.000Z",
+        collectionId: "a",
+      },
+    ]);
+    upsertAdminBuckets([
+      {
+        source: "openai.organization.costs",
+        organizationScope: "org:t",
+        intervalStartUtc: "2026-01-01T00:00:00.000Z",
+        intervalEndUtc: "2026-01-02T00:00:00.000Z",
+        granularity: "day",
+        dimensions: { project_id: "p", api_key_id: null, model: null },
+        unit: "currency",
+        currency: "usd",
+        value: "9.00",
+        completeness: "partial",
+        collectedAtUtc: "2026-01-02T02:00:00.000Z",
+        collectionId: "b",
+      },
+    ]);
+    expect(listAdminCollectorBuckets()[0].value).toBe("1.00");
+  });
+
+  it("reconcile requires comparable scope", () => {
+    const non = reconcileFinOpsCosts({
+      studioEstimatedUsd: "0.80",
+      providerCostUsd: "0.86",
+      comparable: false,
+      reasonIfNot: "LANE_PROJECT_KEY_MAPPING_UNPROVEN",
+    });
+    expect(non.status).toBe("NON_COMPARABLE");
+    expect(non.deltaUsd).toBeNull();
+
+    const ok = reconcileFinOpsCosts({
+      studioEstimatedUsd: "0.80",
+      providerCostUsd: "0.86",
+      comparable: true,
+    });
+    expect(ok.status).toBe("COMPARABLE");
+    expect(ok.deltaUsd).toBe("0.0600000000");
+  });
+
+  it("resolveAdminCollectorConfig never enables LIVE outside DEV flag", () => {
+    const cfg = resolveAdminCollectorConfig({
+      OPENAI_ADMIN_KEY: "sk-admin",
+      SFIA_ADMIN_USAGE_LIVE: "1",
+      STUDIO_LANE: "RECETTE",
+    } as unknown as NodeJS.ProcessEnv);
+    expect(cfg.liveAdminCallsAuthorized).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
index fc12a10b..7590f647 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
@@ -16,6 +16,7 @@ import {
   endProcessCampaign,
   getActiveCampaignEnvelope,
   getEmissionsObservedForTests,
+  getFrontierAlsStore,
   getHttpAttempt,
   getHttpBodiesObservedForTests,
   HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS,
@@ -590,7 +591,12 @@ describe("S2/A — HTTP provider emission frontier", () => {
           }),
         });
         expect(wireBody?.max_tool_calls).toBe(1);
+        // Envelope consumes max_tool_calls; billable measure remains UNKNOWN (not ASSUMED_1).
         expect(getActiveCampaignEnvelope()?.hostedSearchesCommitted).toBe(1);
+        expect(getActiveCampaignEnvelope()?.hostedSearchesMeasured).toBeNull();
+        expect(getActiveCampaignEnvelope()?.hostedSearchMeasureStatus).toBe(
+          "UNKNOWN",
+        );
         const meta = getHttpBodiesObservedForTests().find(
           (b) => b.kind === "http.responses",
         );
@@ -599,6 +605,54 @@ describe("S2/A — HTTP provider emission frontier", () => {
     });
   });

+  it("commits hosted searches from tool_usage.num_requests when present", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 2,
+        maxHostedSearches: 5,
+        required: true,
+      });
+      enableHttpMetaCaptureForTests();
+      const fakeFetch = (async (_input: RequestInfo | URL, init?: RequestInit) => {
+        return new Response(
+          JSON.stringify({
+            id: "resp_measured",
+            tool_usage: { web_search: { num_requests: 2 } },
+            usage: { input_tokens: 10, output_tokens: 3, total_tokens: 13 },
+          }),
+          { status: 200, headers: { "content-type": "application/json" } },
+        );
+      }) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);
+      await withLaneEnv(async () => {
+        assertSdkInvocationAdmission({
+          kind: "nora.generate_reply",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        await gated("https://api.openai.com/v1/responses", {
+          method: "POST",
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 50,
+            reasoning: { effort: "medium" },
+            tools: [{ type: "web_search" }],
+            max_tool_calls: 2,
+          }),
+        });
+        const camp = getActiveCampaignEnvelope();
+        expect(camp?.hostedSearchesCommitted).toBe(2);
+        expect(camp?.hostedSearchesMeasured).toBe(2);
+        expect(camp?.hostedSearchMeasureStatus).toBe("MEASURED");
+        const obs = getFrontierAlsStore()?.responseUsageObserved ?? [];
+        expect(obs.some((o) => o.hostedStatus === "MEASURED" && o.hostedNumRequests === 2)).toBe(
+          true,
+        );
+      });
+    });
+  });
+
   it("refuses approximate openai hostname (no fuzzy host match)", async () => {
     await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-response-continuity.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-response-continuity.test.ts
new file mode 100644
index 00000000..dbc44cc3
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-response-continuity.test.ts
@@ -0,0 +1,98 @@
+import { describe, expect, it } from "vitest";
+import {
+  applyContinuityToResponsesBody,
+  planProviderContinuity,
+  resolveProviderContinuityMode,
+} from "@/domains/conversation/provider-response-continuity";
+
+describe("provider-response-continuity", () => {
+  const studio = {
+    workId: "work_1",
+    acquisFingerprint: "acq_a",
+    sourceVersions: ["blob:1", "doc:2"],
+    checkpointId: "cp_1",
+    budgets: {
+      tokensConsumed: 100,
+      tokensBudget: 2_000_000,
+      restitutionsRemaining: 120,
+    },
+    rightsOk: true,
+  };
+
+  const chain = {
+    previousResponseId: "resp_prev",
+    boundWorkId: "work_1",
+    boundLane: "DEV",
+    boundAcquisFingerprint: "acq_a",
+    boundSourceVersions: ["blob:1", "doc:2"],
+    createdAtMs: Date.now(),
+  };
+
+  it("defaults off → studio rebuild", () => {
+    expect(resolveProviderContinuityMode({} as NodeJS.ProcessEnv)).toBe("off");
+    const plan = planProviderContinuity({
+      mode: "off",
+      studio,
+      chain,
+      lane: "DEV",
+    });
+    expect(plan.mode).toBe("studio_rebuild");
+    expect(plan.preserveBudgets).toBe(true);
+  });
+
+  it("native compatible chain attaches previous_response_id without freeing prior tokens", () => {
+    const plan = planProviderContinuity({
+      mode: "native",
+      studio,
+      chain,
+      lane: "DEV",
+    });
+    expect(plan).toMatchObject({
+      mode: "native_previous_response",
+      previousResponseId: "resp_prev",
+      priorTokensStillBilled: true,
+      preserveBudgets: true,
+    });
+    const body = applyContinuityToResponsesBody(
+      { model: "gpt-x", input: [] },
+      plan,
+    );
+    expect(body.previous_response_id).toBe("resp_prev");
+  });
+
+  it("falls back when rights or sources change — no provider chain", () => {
+    const rights = planProviderContinuity({
+      mode: "native",
+      studio: { ...studio, rightsOk: false },
+      chain,
+      lane: "DEV",
+    });
+    expect(rights.reason).toBe("RIGHTS_CHANGED");
+
+    const sources = planProviderContinuity({
+      mode: "native",
+      studio: { ...studio, sourceVersions: ["blob:9"] },
+      chain,
+      lane: "DEV",
+    });
+    expect(sources.reason).toBe("SOURCES_CHANGED");
+
+    const stripped = applyContinuityToResponsesBody(
+      { previous_response_id: "stale", model: "gpt-x" },
+      sources,
+    );
+    expect(stripped.previous_response_id).toBeUndefined();
+  });
+
+  it("does not reset budgets semantics across plans", () => {
+    for (const mode of ["off", "native"] as const) {
+      const plan = planProviderContinuity({
+        mode,
+        studio,
+        chain: mode === "native" ? chain : null,
+        lane: "DEV",
+      });
+      expect(plan.preserveBudgets).toBe(true);
+    }
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-response-usage.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-response-usage.test.ts
new file mode 100644
index 00000000..2b5150fe
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-response-usage.test.ts
@@ -0,0 +1,83 @@
+import { describe, expect, it } from "vitest";
+import {
+  extractHostedWebSearchUsage,
+  extractResponseNativeUsage,
+  reconcileHostedSearchUsage,
+} from "@/domains/conversation/provider-response-usage";
+
+describe("provider-response-usage", () => {
+  it("returns UNKNOWN when tool_usage absent — never ASSUMED_1", () => {
+    const u = extractHostedWebSearchUsage({ id: "resp_1", usage: {} });
+    expect(u.status).toBe("UNKNOWN");
+    expect(u.numRequests).toBeNull();
+    expect(u.limits).toContain("TOOL_USAGE_ABSENT");
+  });
+
+  it("measures num_requests when present", () => {
+    const u = extractHostedWebSearchUsage({
+      tool_usage: { web_search: { num_requests: 3 } },
+    });
+    expect(u).toEqual({
+      numRequests: 3,
+      status: "MEASURED",
+      provenance: "RESPONSE_TOOL_USAGE",
+      limits: [],
+    });
+  });
+
+  it("extracts response usage aggregates", () => {
+    const n = extractResponseNativeUsage({
+      id: "resp_x",
+      usage: {
+        input_tokens: 10,
+        output_tokens: 4,
+        total_tokens: 14,
+        input_tokens_details: { cached_tokens: 2 },
+        output_tokens_details: { reasoning_tokens: 1 },
+      },
+      tool_usage: { web_search: { num_requests: 1 } },
+    });
+    expect(n.responseId).toBe("resp_x");
+    expect(n.inputTokens).toBe(10);
+    expect(n.outputTokens).toBe(4);
+    expect(n.cachedInputTokens).toBe(2);
+    expect(n.reasoningTokens).toBe(1);
+    expect(n.hostedWebSearch.numRequests).toBe(1);
+    expect(n.rawToolUsagePresent).toBe(true);
+  });
+
+  it("reconcile: measured over envelope suspends", () => {
+    const r = reconcileHostedSearchUsage({
+      reservedMaxToolCalls: 2,
+      observed: {
+        numRequests: 3,
+        status: "MEASURED",
+        provenance: "RESPONSE_TOOL_USAGE",
+        limits: [],
+      },
+      alreadyCommitted: 0,
+      maxHostedSearches: 2,
+    });
+    expect(r.suspend).toBe(true);
+    expect(r.commitDelta).toBe(3);
+    expect(r.limits).toContain("HOSTED_SEARCH_MEASURED_OVER_ENVELOPE");
+    expect(r.limits).toContain("MAX_TOOL_CALLS_NE_NUM_REQUESTS");
+  });
+
+  it("reconcile: UNKNOWN does not invent billable commit", () => {
+    const r = reconcileHostedSearchUsage({
+      reservedMaxToolCalls: 1,
+      observed: {
+        numRequests: null,
+        status: "UNKNOWN",
+        provenance: "ABSENT",
+        limits: ["TOOL_USAGE_ABSENT"],
+      },
+      alreadyCommitted: 0,
+      maxHostedSearches: 5,
+    });
+    expect(r.commitDelta).toBe(0);
+    expect(r.status).toBe("UNKNOWN");
+    expect(r.limits).toContain("HOSTED_SEARCH_BILLABLE_UNKNOWN");
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
index 25c04aeb..fdc0106c 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
@@ -125,9 +125,13 @@ describe("FIX-SDK / SDK-RETRY — no automatic second run()", () => {
       },
       run: runMock,
       setTracingDisabled: vi.fn(),
+      setTraceProcessors: vi.fn(),
       setDefaultOpenAIClient: vi.fn(),
       tool: vi.fn(),
     }));
+    vi.doMock("@openai/agents-core", () => ({
+      setSensitiveDataLoggingEnabled: vi.fn(),
+    }));
     vi.doMock("openai", () => ({
       default: class {
         constructor(_opts: unknown) {}
<<<DIFF_END>>>

---

## 8. Tests exécutés

```
vitest: ml5-agents-sdk-tracing, ml5-provider-response-usage,
  ml5-provider-response-continuity, ml5-provider-admin-usage-collector,
  ml5-provider-emission-frontier, nora-adapter-corrective, ml5-finops-usage-projection
→ 67 PASS (re-run ciblé 43 PASS après correctifs types)
tsc: fichiers ML1 src CLEAN (erreurs préexistantes hors périmètre non traitées)
```

Preuves clés :
- Tracing local : processors remplacés ; egress probe vide ; remote export helper détectable
- tool_usage : MEASURED / UNKNOWN ; pas ASSUMED_1 comme garantie billable
- Admin collector : BLOCKED_NO_SECRET / BLOCKED_NO_LIVE_GO ; pagination idempotente ; partial n’écrase pas complete
- Continuité : OFF → rebuild Studio ; budgets préservés

---

## 9. Qualification par capacité

| Capacité | Verdict | Preuve | Réserve / exit |
|---|---|---|---|
| TRACING | COVERAGE VERIFIED | unit + setTraceProcessors | Activer `SFIA_AGENTS_TRACING_MODE=local` ; LIVE path confirm |
| PROVIDER FRONTIER | BEHAVIOR PROVEN (déterministe) | frontier tests | LIVE tool_usage confirm |
| USAGE & COSTS | IMPLEMENTED / NOT LIVE PROVEN | collector unit | Admin key + SFIA_ADMIN_USAGE_LIVE GO |
| FINOPS RECONCILIATION | IMPLEMENTED structurelle | DTO summary | mapping comparable + migration PG |
| WEB | OFF / gates KEEP | existant | G-WEB-PUBLIC GO |
| NATIVE CONTINUITY | IMPLEMENTED module OFF | unit | A/B + flag native |
| SECURITY | COVERAGE VERIFIED (no remote trace) | egress probe | Admin secret hors chat |
| REGRESSION | PARTIAL | unit suite ML1 | browser parcours nominaux non rejoués ce lot |
| DOCUMENTATION | SYNCHRONIZED | as-built + delivery-history | Roadmap delta non appliqué |
| CANDIDATE INTEGRITY | OK | commit `5794584a4dfae97dd78c5493946d9251b7847d65` | pas de push |
| REVIEW HANDOFF | (ce pack) | L3 | vérifier SHA distant |

---

## 10. Arbitrages Morris restants (gates)

1. Provisionner `OPENAI_ADMIN_KEY` (hors chat) + GO Admin LIVE
2. GO migration `provider_admin_usage_snapshots`
3. Valider delta UX FinOps page 13
4. G-WEB-PUBLIC / option A3 risque résiduel
5. Activer tracing `local` en DEV opérationnel
6. Continuité `native` après A/B

---

## 11. Capacité suivante (non démarrée)

COGNITION SPÉCIALISÉE ET INTELLIGENCE DOCUMENTAIRE — socle ML1 prêt ; Decisions/retrieval hors implémentation.

---

## 12. Instruction ChatGPT

Relire ce handoff au commit exact publié. Distinguer IMPLEMENTED / COVERAGE VERIFIED / NOT LIVE PROVEN. Vérifier absence de secrets. Confirmer que les blockers gouvernés n’empêchent pas la revue du périmètre autorisé. Ne pas déclarer ADOPTED.

---

## 13. Verdict

**MACRO-LOT 1 — READY FOR INDEPENDENT REVIEW**

avec **GOVERNED BLOCKERS REMAIN** sur Admin LIVE, migration PG, WEB LIVE, UX Figma.

R5 IN PROGRESS · ML5 OPEN · NO RELEASE · NOT ADOPTED · L2 non engagée · RECETTE protégée.
