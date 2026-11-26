/**
 * Resume documentary LIVE after client timeout — continues RB28–31, Git PDF, IT-06.
 * Reuses existing corpus IDs. WEB LIVE OFF. Long undici timeouts.
 */
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { config } from "dotenv";
import path from "node:path";

config({ path: path.resolve(process.cwd(), ".env.local") });

process.env.STUDIO_LANE = "DEV";
process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";

const BASE = process.env.SFIA_QUAL_BASE || "http://127.0.0.1:3100";
const OUT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/documentary-qual-live-20261126",
);
mkdirSync(OUT, { recursive: true });

const RB_PREP = "prep_0e1c005b-c62c-4e5f-9ede-884b837b407e";
const RB_WORK = "cgw_912cf02a-cbd0-483f-8c17-97f924a119e2";
const ST_PREP = "prep_11f71e3d-d053-4b9e-a62b-3ddd3ec1acfd";

type Ledger = {
  startedAt: string;
  finishedAt: string | null;
  responsesAttempted: number;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  stopReason: string | null;
  scenarios: Array<Record<string, unknown>>;
  priorRbWorkId: string;
};

const ledger: Ledger = {
  startedAt: new Date().toISOString(),
  finishedAt: null,
  responsesAttempted: 6, // prior RB27 reservation / observed client attempt
  inputTokens: 0,
  outputTokens: 0,
  estimatedCostUsd: 0,
  stopReason: null,
  scenarios: [],
  priorRbWorkId: RB_WORK,
};

function save() {
  writeFileSync(path.join(OUT, "qualification-resume-ledger.json"), JSON.stringify(ledger, null, 2));
}

const jar = { cookie: "" };
/**
 * Long-running Nora turns exceed undici default headersTimeout (~300s).
 * Use curl with --max-time 1800 to keep the HTTP session open.
 */
function api(p: string, opts: { method?: string; body?: unknown } = {}) {
  const method = opts.method || "GET";
  const url = `${BASE}${p}`;
  const args = [
    "-sS",
    "-X",
    method,
    "--max-time",
    "1800",
    "-D",
    "-",
    "-o",
    "/tmp/sfia-qual-body.json",
    "-H",
    "Accept: application/json",
  ];
  if (jar.cookie) {
    args.push("-H", `Cookie: ${jar.cookie}`);
  }
  if (opts.body) {
    writeFileSync("/tmp/sfia-qual-req.json", JSON.stringify(opts.body));
    args.push("-H", "Content-Type: application/json", "--data-binary", "@/tmp/sfia-qual-req.json");
  }
  args.push(url);
  const raw = execSync(`curl ${args.map((a) => JSON.stringify(a)).join(" ")}`, {
    encoding: "utf8",
    maxBuffer: 20_000_000,
  });
  const split = raw.indexOf("\r\n\r\n") >= 0 ? raw.indexOf("\r\n\r\n") : raw.indexOf("\n\n");
  const headerBlob = split >= 0 ? raw.slice(0, split) : raw;
  const statusMatch = headerBlob.match(/HTTP\/[\d.]+ (\d+)/);
  const status = statusMatch ? Number(statusMatch[1]) : 0;
  for (const line of headerBlob.split(/\r?\n/)) {
    const m = line.match(/^set-cookie:\s*([^;]+)/i);
    if (m) {
      jar.cookie = jar.cookie ? `${jar.cookie}; ${m[1]}` : m[1]!;
    }
  }
  const text = readFileSync("/tmp/sfia-qual-body.json", "utf8");
  let json: Record<string, unknown> = {};
  try {
    json = JSON.parse(text) as Record<string, unknown>;
  } catch {
    json = { _raw: text.slice(0, 800) };
  }
  return { status, json, text };
}

function pgJson(sql: string): unknown {
  try {
    const raw = execSync(
      `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(sql)}`,
      { encoding: "utf8", maxBuffer: 20_000_000 },
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

function accumulate(workId: string | null) {
  if (!workId) return { inTok: 0, outTok: 0, cost: 0, reqs: 0 };
  const usage = pgJson(
    `SELECT COALESCE(sum(input_tokens),0)::int AS in, COALESCE(sum(output_tokens),0)::int AS out, COALESCE(sum(estimated_cost_usd),0)::float AS cost, COALESCE(sum(provider_requests),0)::int AS reqs FROM provider_usage_observations WHERE cognitive_work_id='${workId}';`,
  ) as { in?: number; out?: number; cost?: number; reqs?: number } | null;
  return {
    inTok: usage?.in ?? 0,
    outTok: usage?.out ?? 0,
    cost: usage?.cost ?? 0,
    reqs: usage?.reqs ?? 0,
  };
}

async function post(
  prepId: string,
  label: string,
  content: string,
  workId?: string | null,
  forceNew?: boolean,
) {
  ledger.responsesAttempted += 6;
  const body: Record<string, unknown> = {
    content,
    clientTurnKey: `doc-resume-${label}-${Date.now()}`,
  };
  if (forceNew) body.forceNewCognitiveWork = true;
  if (workId) body.cognitiveWorkId = workId;
  const before = Date.now();
  const r = api(`/api/preparations/${prepId}/messages`, {
    method: "POST",
    body,
  });
  const cw = ((r.json as { cognitiveWork?: Record<string, unknown> }).cognitiveWork ||
    {}) as Record<string, unknown>;
  const wid = (cw.workId || cw.id || workId || null) as string | null;
  const usage = accumulate(wid);
  ledger.inputTokens += usage.inTok;
  ledger.outputTokens += usage.outTok;
  ledger.estimatedCostUsd += usage.cost;
  const msgs = (r.json as { messages?: Array<{ content?: string }> }).messages;
  const reply = msgs?.slice(-1)[0]?.content || "";
  const row = {
    id: label,
    http: r.status,
    workId: wid,
    durationMs: Date.now() - before,
    replyPreview: String(reply).slice(0, 1000),
    replyFull: String(reply).slice(0, 24_000),
    usage,
  };
  ledger.scenarios.push(row);
  save();
  console.log(`[${label}] http=${r.status} work=${wid} reqs=${usage.reqs} cost=${usage.cost}`);
  return row;
}

async function main() {
  const key = (process.env.OPENAI_API_KEY || "").trim();
  const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
  const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim().toLowerCase();
  if (!key || expected !== fp) {
    ledger.stopReason = "KEY_PRECONDITION_FAIL";
    save();
    process.exit(2);
  }
  const auth = api("/api/dev/auto-session", { method: "POST" });
  if (auth.status !== 200) {
    ledger.stopReason = `AUTO_SESSION_${auth.status}`;
    save();
    process.exit(2);
  }

  // Snapshot prior RB27 work.
  const prior = pgJson(
    `SELECT row_to_json(t) FROM (SELECT id, status, revision, state_json::json AS state FROM cognitive_works WHERE id='${RB_WORK}') t;`,
  );
  ledger.scenarios.push({ id: "RB27-prior-snapshot", prior });
  save();

  await post(
    RB_PREP,
    "RB28-resume-from-acquis",
    [
      "Reprise du travail cognitif déjà engagé sur les conflits de planning.",
      "À partir des acquis Git déjà consultés, complète uniquement le travail restant utile",
      "(garantie au point d'écriture, risque check-then-insert, tests concurrent).",
      "Ne relis pas systématiquement les sources déjà CONSULTED. Pas de mutation. Pas de web.",
    ].join(" "),
    RB_WORK,
  );

  await post(
    RB_PREP,
    "RB29-intention-git-readonly",
    [
      "Changement d'intention : consultation Git lecture seule uniquement.",
      "Identifie deux inspirations proportionnées dans le dépôt pour une note technique future,",
      "sans préparer de révision documentaire et sans mutation D4. Pas de web.",
    ].join(" "),
    RB_WORK,
  );

  await post(
    RB_PREP,
    "RB31-technical-note-from-acquis",
    [
      "À partir de l'analyse de conflits de planning déjà réalisée, produis une courte note technique",
      "distincte (nouveau document) : références Git exactes, recommandations distinguées des décisions,",
      "limites. Présente le candidat pour inspection avant conservation. Pas de web.",
    ].join(" "),
    RB_WORK,
  );

  await post(
    RB_PREP,
    "GIT-PDF-BPMN-read",
    [
      "Dans le dépôt Git attaché (mcleland147/chantiers360 @ 8c398c494dd918272aab5b2653777c6c21d2e76e),",
      'ouvre le PDF "Diagramme BPMN_BatiNova.pdf". Extrais plusieurs pages, recherche un élément',
      "déterminant du diagramme, cite la page réellement consultée et le commit. Utilise les outils Git PDF. Pas de web.",
    ].join(" "),
    null,
    true,
  );

  await post(
    ST_PREP,
    "IT06-revise-rm02-rec03",
    [
      "Repars de la version V1 actuellement conservée du document de conception fonctionnelle de StockTrack,",
      "sans réutiliser les propositions précédentes. Je souhaite que la référence d'un article comporte",
      "au minimum trois caractères. Modifie uniquement la règle RM-02 et le scénario REC-03 pour intégrer",
      "cette exigence et vérifier qu'une référence de deux caractères est refusée. Conserve strictement",
      "tout le reste du document à l'identique. Compare ta proposition avec la V1 et présente-moi le",
      "document révisé complet pour inspection avant conservation. Pas de web.",
    ].join(" "),
    null,
    true,
  );

  // Independent oracle for IT-06 candidate if present in reply / DB.
  const stRevs = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json) FROM (SELECT revision_number, status, length(content_markdown) AS chars, (content_markdown ILIKE '%trois caractères%' OR content_markdown ILIKE '%trois caracteres%') AS has_3, (content_markdown ILIKE '%AB%') AS has_ab FROM document_revisions WHERE document_id='doc_65200758-7b3c-40a8-9998-3d373b3aacc9' ORDER BY revision_number) t;`,
  );
  ledger.scenarios.push({ id: "IT06-oracle-revisions", stRevs });

  ledger.finishedAt = new Date().toISOString();
  ledger.stopReason = "COMPLETED_RESUME";
  save();
  writeFileSync(
    path.join(OUT, "qualification-resume-summary.json"),
    JSON.stringify(
      {
        stopReason: ledger.stopReason,
        responsesAttempted: ledger.responsesAttempted,
        inputTokens: ledger.inputTokens,
        outputTokens: ledger.outputTokens,
        estimatedCostUsd: ledger.estimatedCostUsd,
        scenarios: ledger.scenarios.map((s) => s.id),
      },
      null,
      2,
    ),
  );
  console.log("RESUME DONE", ledger.stopReason, ledger.estimatedCostUsd);
}

main().catch((e) => {
  ledger.stopReason = String((e as Error)?.message ?? e).slice(0, 300);
  ledger.finishedAt = new Date().toISOString();
  save();
  console.error(e);
  process.exit(1);
});
