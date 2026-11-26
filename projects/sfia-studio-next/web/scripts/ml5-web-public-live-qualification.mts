/**
 * ML5 S5 — G-WEB-PUBLIC LIVE qualification (DEV only).
 * Envelope: ≤20 Responses attempted, ≤5 hosted searches, ≤10 opens.
 * Distinct from documentary G-LIVE-API. Must end with WEB LIVE=0.
 *
 * Preconditions: S1/S2 readiness; dedicated public qual project; no private context.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import path from "node:path";
import { config } from "dotenv";

config({ path: path.resolve(process.cwd(), ".env.local") });

process.env.STUDIO_LANE = "DEV";
process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
process.env.SFIA_COGNITIVE_ADMISSION_MODE =
  process.env.SFIA_COGNITIVE_ADMISSION_MODE || "operational";
// Campaign enables LIVE only after preflight; forced OFF in finally.
process.env.SFIA_WEB_SEARCH_ENABLED = "0";
process.env.SFIA_WEB_SEARCH_LIVE = "0";

const BASE = process.env.SFIA_QUAL_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_QUAL_OUT ||
  path.resolve(
    process.cwd(),
    "../../../.tmp-sfia-review/web-public-qual-live-20261126",
  );
mkdirSync(OUT, { recursive: true });

const ENVELOPE = {
  maxResponses: 20,
  maxHostedSearches: 5,
  maxDirectOpens: 10,
  maxResultsPerSearch: 5,
  maxInputTokens: 500_000,
  maxOutputTokens: 100_000,
  maxInputPerRequest: 100_000,
  maxOutputPerRequest: 10_000,
  maxHtmlBytes: 200_000,
  maxPdfBytes: 8_000_000,
  maxPdfPages: 80,
  maxPdfProcessMs: 15_000,
  maxOpenMs: 20_000,
};

type Ledger = {
  startedAt: string;
  finishedAt: string | null;
  envelope: typeof ENVELOPE;
  responsesAttempted: number;
  hostedSearches: number;
  directOpens: number;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  stopReason: string | null;
  webLiveFinal: string | null;
  preconditions: Record<string, unknown>;
  scenarios: Array<Record<string, unknown>>;
};

const ledger: Ledger = {
  startedAt: new Date().toISOString(),
  finishedAt: null,
  envelope: ENVELOPE,
  responsesAttempted: 0,
  hostedSearches: 0,
  directOpens: 0,
  inputTokens: 0,
  outputTokens: 0,
  estimatedCostUsd: 0,
  stopReason: null,
  webLiveFinal: null,
  preconditions: {},
  scenarios: [],
};

function save() {
  writeFileSync(path.join(OUT, "qualification-ledger.json"), JSON.stringify(ledger, null, 2));
}

function canEmit(reserve = 1): boolean {
  if (ledger.responsesAttempted + reserve > ENVELOPE.maxResponses) return false;
  if (ledger.hostedSearches >= ENVELOPE.maxHostedSearches) return false;
  if (ledger.directOpens >= ENVELOPE.maxDirectOpens) return false;
  if (ledger.inputTokens >= ENVELOPE.maxInputTokens) return false;
  if (ledger.outputTokens >= ENVELOPE.maxOutputTokens) return false;
  return true;
}

function reserveBeforeEmit(slots: number): boolean {
  if (!canEmit(slots)) return false;
  ledger.responsesAttempted += slots;
  return true;
}

function reconcileAfterEmit(reserved: number, observed: number) {
  const actual = Math.max(1, observed || 1);
  const delta = actual - reserved;
  if (delta > 0) {
    if (!canEmit(delta)) ledger.stopReason = ledger.stopReason || "ENVELOPE_EXCEEDED";
    ledger.responsesAttempted += delta;
  } else if (delta < 0) {
    ledger.responsesAttempted = Math.max(0, ledger.responsesAttempted + delta);
  }
}

const jar = { cookie: "" };
async function api(p: string, opts: { method?: string; body?: unknown; timeoutMs?: number } = {}) {
  const res = await fetch(`${BASE}${p}`, {
    method: opts.method || "GET",
    headers: {
      ...(opts.body ? { "content-type": "application/json" } : {}),
      ...(jar.cookie ? { cookie: jar.cookie } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    signal: AbortSignal.timeout(opts.timeoutMs ?? 600_000),
  });
  for (const c of res.headers.getSetCookie?.() || []) {
    const part = c.split(";")[0]!;
    jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
  }
  const text = await res.text();
  let json: Record<string, unknown> = {};
  try {
    json = JSON.parse(text) as Record<string, unknown>;
  } catch {
    json = { _raw: text.slice(0, 800) };
  }
  return { status: res.status, json };
}

function pgJson(sql: string): unknown {
  try {
    const raw = execSync(
      `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(sql)}`,
      { encoding: "utf8", maxBuffer: 10_000_000 },
    ).trim();
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return raw;
    }
  } catch (e) {
    return { error: String(e).slice(0, 200) };
  }
}

function forceWebLiveOff() {
  process.env.SFIA_WEB_SEARCH_LIVE = "0";
  process.env.SFIA_WEB_SEARCH_ENABLED = "0";
  ledger.webLiveFinal = process.env.SFIA_WEB_SEARCH_LIVE || "0";
}

async function main() {
  const key = (process.env.OPENAI_API_KEY || "").trim();
  const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
  const expectedFp = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim().toLowerCase();

  ledger.preconditions = {
    lane: process.env.STUDIO_LANE,
    policy: process.env.SFIA_COG_PROVISIONAL_POLICY,
    keyFpMatch: Boolean(expectedFp) && expectedFp === fp,
    webLiveBefore: process.env.SFIA_WEB_SEARCH_LIVE,
    note: "Public-only campaign — no RoomBooking/StockTrack/Git private context",
  };

  if (!key || expectedFp !== fp) {
    ledger.stopReason = "KEY_PRECONDITION_FAIL";
    save();
    process.exit(2);
  }

  // Deterministic readiness (S1/S2) — do not require prior LIVE proof.
  const { canUsePublicWebFrontier } = await import(
    "../src/domains/conversation/public-web-search-frontier.ts"
  );
  const { buildCognitivePolicy } = await import(
    "../src/domains/conversation/cognitive-policy.ts"
  );
  const policy = buildCognitivePolicy("public web qualification", "OPERATIONAL_PROVISIONAL", {
    profileHint: "analyse",
  });

  // Enable LIVE only for this process after readiness.
  // NOTE: Next.js server process must ALSO be started with these flags — script env alone is insufficient.
  process.env.SFIA_WEB_SEARCH_ENABLED = "1";
  process.env.SFIA_WEB_SEARCH_LIVE = "1";
  process.env.SFIA_WEB_SEARCH_MODEL = process.env.SFIA_WEB_SEARCH_MODEL || "gpt-6.1-terra";
  process.env.SFIA_WEB_SEARCH_EFFORT = process.env.SFIA_WEB_SEARCH_EFFORT || "medium";
  ledger.preconditions.webLiveScript = process.env.SFIA_WEB_SEARCH_LIVE;
  ledger.preconditions.webEnabledScript = process.env.SFIA_WEB_SEARCH_ENABLED;

  if (!canUsePublicWebFrontier(policy)) {
    ledger.stopReason = "G-WEB-PUBLIC BLOCKED — PRECONDITIONS NOT QUALIFIED";
    forceWebLiveOff();
    save();
    process.exit(2);
  }

  const auth = await api("/api/dev/auto-session", { method: "POST" });
  if (auth.status !== 200) {
    ledger.stopReason = `AUTO_SESSION_${auth.status}`;
    forceWebLiveOff();
    save();
    process.exit(2);
  }

  // Dedicated public project — no private markers in prompts.
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = (prep.json as { preparationId: string }).preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  const name = `ML5-Qual-WebPublic-${Date.now().toString(36)}`;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: name,
      previewSummary: "WEB LIVE public qualification — no private project context.",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `web-pub-${Date.now()}`,
      previewSummary: "G-WEB-PUBLIC public-only",
    },
  });
  const projectId = (created.json as { projectId?: string }).projectId;
  ledger.preconditions.projectId = projectId;
  ledger.preconditions.preparationId = preparationId;
  save();
  if (!projectId) {
    ledger.stopReason = "PROJECT_CREATE_FAIL";
    forceWebLiveOff();
    save();
    process.exit(2);
  }

  // Wait out initial trajectory qualification lock (composer blocked otherwise).
  {
    const iqStarted = Date.now();
    let iqLast: unknown = null;
    while (Date.now() - iqStarted < 180_000) {
      const r = await api(`/api/projects/${projectId}/initial-qualification/reconcile`, {
        method: "POST",
        timeoutMs: 60_000,
      });
      iqLast =
        (r.json as { initialQualification?: unknown }).initialQualification || r.json;
      const status = (iqLast as { status?: string } | null)?.status;
      if (status && !["PENDING", "RUNNING", "UNKNOWN"].includes(status)) break;
      await new Promise((res) => setTimeout(res, 1500));
    }
    ledger.preconditions.initialQualification = {
      status: (iqLast as { status?: string } | null)?.status ?? null,
      phase: (iqLast as { phase?: string } | null)?.phase ?? null,
    };
    save();
    const iqStatus = (iqLast as { status?: string } | null)?.status;
    if (!iqStatus || ["PENDING", "RUNNING", "UNKNOWN", "TIMEOUT"].includes(iqStatus)) {
      ledger.stopReason = `IQ_NOT_READY_${iqStatus || "NULL"}`;
      forceWebLiveOff();
      save();
      process.exit(2);
    }
  }

  const RESERVE = 4;

  function scenarioFail(http: number, json: Record<string, unknown>): string {
    return String(
      json.error || json.errorCategory || json.message || `HTTP_${http}`,
    ).slice(0, 200);
  }

  // WEB-01 — catalogue nominal (postgres-docs / node-lts topic).
  if (!ledger.stopReason && reserveBeforeEmit(RESERVE)) {
    const r = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content:
          "Recherche la documentation officielle PostgreSQL (sujet public catalogue). Résume 1–2 sources https publiques. N'utilise aucun contexte privé.",
        clientTurnKey: `web01-${Date.now()}`,
        forceNewCognitiveWork: true,
      },
      timeoutMs: 600_000,
    });
    const cw = (r.json as { cognitiveWork?: { workId?: string } }).cognitiveWork;
    const usage = pgJson(
      `SELECT COALESCE(sum(provider_requests),0) FROM provider_usage_observations WHERE cognitive_work_id='${cw?.workId || ""}';`,
    );
    reconcileAfterEmit(RESERVE, Number(usage) || 1);
    if (r.status >= 400) {
      ledger.stopReason = ledger.stopReason || `WEB01_${scenarioFail(r.status, r.json)}`;
    } else {
      ledger.hostedSearches += 1;
    }
    ledger.scenarios.push({
      id: "WEB-01-nominal-search",
      http: r.status,
      workId: cw?.workId ?? null,
      error: r.status >= 400 ? scenarioFail(r.status, r.json) : null,
      preview: String(
        (r.json as { messages?: Array<{ content?: string }> }).messages?.slice(-1)[0]
          ?.content || "",
      ).slice(0, 600),
    });
    save();
  }

  // WEB-02 — new subject requiring exact authorization.
  if (!ledger.stopReason && reserveBeforeEmit(RESERVE)) {
    const r = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content:
          'Nouveau sujet public non catalogue : propose une recherche sur "HTTP/3 site:datatracker.ietf.org". Si le serveur exige une autorisation exacte, demande-moi AUTHORIZE_PUBLIC_QUERY sans inventer de fuite privée.',
        clientTurnKey: `web02-${Date.now()}`,
        forceNewCognitiveWork: true,
      },
      timeoutMs: 600_000,
    });
    if (r.status >= 400) {
      ledger.stopReason = ledger.stopReason || `WEB02_${scenarioFail(r.status, r.json)}`;
    }
    ledger.scenarios.push({
      id: "WEB-02-new-subject-admission",
      http: r.status,
      error: r.status >= 400 ? scenarioFail(r.status, r.json) : null,
      preview: String(
        (r.json as { messages?: Array<{ content?: string }> }).messages?.slice(-1)[0]
          ?.content || "",
      ).slice(0, 800),
    });
    // Follow-up exact auth if needed.
    const authorize = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content:
          'AUTHORIZE_PUBLIC_QUERY: "HTTP/3 site:datatracker.ietf.org" — tu peux maintenant exécuter cette recherche publique exacte.',
        clientTurnKey: `web02b-${Date.now()}`,
      },
      timeoutMs: 600_000,
    });
    reconcileAfterEmit(RESERVE, 2);
    if (authorize.status >= 400) {
      ledger.stopReason =
        ledger.stopReason || `WEB02B_${scenarioFail(authorize.status, authorize.json)}`;
    } else {
      ledger.hostedSearches += 1;
    }
    ledger.scenarios.push({
      id: "WEB-02b-exact-authorize",
      http: authorize.status,
      error: authorize.status >= 400 ? scenarioFail(authorize.status, authorize.json) : null,
      preview: String(
        (authorize.json as { messages?: Array<{ content?: string }> }).messages?.slice(
          -1,
        )[0]?.content || "",
      ).slice(0, 800),
    });
    save();
  }

  // WEB-03 — open HTML + progressive read (official public page).
  if (!ledger.stopReason && canEmit(RESERVE) && reserveBeforeEmit(RESERVE)) {
    const r = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content:
          "Ouvre uniquement l'URL publique https://www.postgresql.org/docs/current/index.html (documentation officielle). Lis plusieurs plages via les outils de lecture progressive, recherche un terme visible dans la page, et cite la couverture réellement consultée. Aucun contexte privé.",
        clientTurnKey: `web03-${Date.now()}`,
        forceNewCognitiveWork: true,
      },
      timeoutMs: 600_000,
    });
    const cw = (r.json as { cognitiveWork?: { workId?: string } }).cognitiveWork;
    const usage = pgJson(
      `SELECT COALESCE(sum(provider_requests),0) FROM provider_usage_observations WHERE cognitive_work_id='${cw?.workId || ""}';`,
    );
    reconcileAfterEmit(RESERVE, Number(usage) || 1);
    if (r.status >= 400) {
      ledger.stopReason = ledger.stopReason || `WEB03_${scenarioFail(r.status, r.json)}`;
    } else {
      ledger.directOpens += 1;
    }
    ledger.scenarios.push({
      id: "WEB-03-html-progressive",
      http: r.status,
      workId: cw?.workId ?? null,
      error: r.status >= 400 ? scenarioFail(r.status, r.json) : null,
      preview: String(
        (r.json as { messages?: Array<{ content?: string }> }).messages?.slice(-1)[0]
          ?.content || "",
      ).slice(0, 800),
    });
    save();
  }

  // WEB-04 — public PDF beyond initial page range (official PDF).
  if (!ledger.stopReason && canEmit(RESERVE) && reserveBeforeEmit(RESERVE)) {
    const r = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content:
          "Ouvre le PDF public https://www.rfc-editor.org/rfc/rfc9114.pdf . Extrais plusieurs pages dont au moins une hors de la plage initiale 1–5, recherche un terme présent plus loin, cite le numéro de page réellement lu. Aucun contexte privé ni Git.",
        clientTurnKey: `web04-${Date.now()}`,
        forceNewCognitiveWork: true,
      },
      timeoutMs: 600_000,
    });
    const cw = (r.json as { cognitiveWork?: { workId?: string } }).cognitiveWork;
    const usage = pgJson(
      `SELECT COALESCE(sum(provider_requests),0) FROM provider_usage_observations WHERE cognitive_work_id='${cw?.workId || ""}';`,
    );
    reconcileAfterEmit(RESERVE, Number(usage) || 1);
    if (r.status >= 400) {
      ledger.stopReason = ledger.stopReason || `WEB04_${scenarioFail(r.status, r.json)}`;
    } else {
      ledger.directOpens += 1;
    }
    ledger.scenarios.push({
      id: "WEB-04-pdf-progressive",
      http: r.status,
      workId: cw?.workId ?? null,
      error: r.status >= 400 ? scenarioFail(r.status, r.json) : null,
      preview: String(
        (r.json as { messages?: Array<{ content?: string }> }).messages?.slice(-1)[0]
          ?.content || "",
      ).slice(0, 800),
    });
    save();
  }

  // WEB-05 — confront two official versioned sources.
  if (!ledger.stopReason && canEmit(RESERVE) && reserveBeforeEmit(RESERVE)) {
    const r = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content:
          "Compare les pages publiques https://nodejs.org/dist/latest-v20.x/docs/api/ et https://nodejs.org/dist/latest-v22.x/docs/api/ : dates/versions, différences de périmètre éventuelles, sans jugement hors sources. Contexte privé interdit.",
        clientTurnKey: `web05-${Date.now()}`,
        forceNewCognitiveWork: true,
      },
      timeoutMs: 600_000,
    });
    const cw = (r.json as { cognitiveWork?: { workId?: string } }).cognitiveWork;
    const usage = pgJson(
      `SELECT COALESCE(sum(provider_requests),0) FROM provider_usage_observations WHERE cognitive_work_id='${cw?.workId || ""}';`,
    );
    reconcileAfterEmit(RESERVE, Number(usage) || 1);
    if (r.status >= 400) {
      ledger.stopReason = ledger.stopReason || `WEB05_${scenarioFail(r.status, r.json)}`;
    } else {
      ledger.directOpens += 2;
    }
    ledger.scenarios.push({
      id: "WEB-05-confront-sources",
      http: r.status,
      workId: cw?.workId ?? null,
      error: r.status >= 400 ? scenarioFail(r.status, r.json) : null,
      preview: String(
        (r.json as { messages?: Array<{ content?: string }> }).messages?.slice(-1)[0]
          ?.content || "",
      ).slice(0, 800),
    });
    save();
  }

  // WEB-06 — deterministic refuse (synthetic non-sensitive).
  if (!ledger.stopReason) {
    const { assertPublicHttpsUrl } = await import(
      "../src/domains/conversation/public-web-search-frontier.ts"
    );
    const denies = [
      assertPublicHttpsUrl("https://127.0.0.1/x"),
      assertPublicHttpsUrl("https://user:pass@example.com/a"),
      assertPublicHttpsUrl("http://example.com"),
    ];
    ledger.scenarios.push({
      id: "WEB-06-deterministic-denies",
      denies: denies.map((d) => ({ ok: d.ok, reason: d.ok ? null : d.reason })),
    });
    save();
  }

  // WEB-07 — FinOps reconciliation for works exercised in this campaign.
  if (!ledger.stopReason) {
    const workIds = ledger.scenarios
      .map((s) => (typeof s.workId === "string" ? s.workId : null))
      .filter(Boolean) as string[];
    const finops = workIds.map((wid) => {
      const row = pgJson(
        `SELECT cognitive_work_id, COALESCE(sum(provider_requests),0) AS reqs, COALESCE(sum(input_tokens),0) AS in_tok, COALESCE(sum(output_tokens),0) AS out_tok, COALESCE(sum(estimated_cost_usd),0) AS cost FROM provider_usage_observations WHERE cognitive_work_id='${wid}' GROUP BY cognitive_work_id;`,
      );
      return { workId: wid, row };
    });
    ledger.scenarios.push({ id: "WEB-07-finops-reconcile", finops, responsesAttempted: ledger.responsesAttempted });
    save();
  }

  forceWebLiveOff();
  ledger.finishedAt = new Date().toISOString();
  if (!ledger.stopReason) ledger.stopReason = "COMPLETED_WEB_PUBLIC_CAMPAIGN";
  save();
  writeFileSync(
    path.join(OUT, "qualification-summary.json"),
    JSON.stringify(
      {
        stopReason: ledger.stopReason,
        responsesAttempted: ledger.responsesAttempted,
        hostedSearches: ledger.hostedSearches,
        directOpens: ledger.directOpens,
        webLiveFinal: ledger.webLiveFinal,
        scenarios: ledger.scenarios.map((s) => s.id),
        note: "First public WEB LIVE campaign under G-WEB-PUBLIC; server must be restarted LIVE=0 after run",
      },
      null,
      2,
    ),
  );
  console.log("WEB PUBLIC LIVE done", ledger.stopReason, {
    responsesAttempted: ledger.responsesAttempted,
    webLiveFinal: ledger.webLiveFinal,
  });
}

main()
  .catch((e) => {
    forceWebLiveOff();
    ledger.stopReason = String((e as Error)?.message ?? e).slice(0, 200);
    ledger.finishedAt = new Date().toISOString();
    save();
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    forceWebLiveOff();
    save();
  });
