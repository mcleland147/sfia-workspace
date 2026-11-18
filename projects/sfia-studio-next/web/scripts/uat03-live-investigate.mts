/**
 * UAT-03 LIVE root-cause investigation — DEV only.
 * Exact Morris prompt · real provider · streaming path · ephemeral diag dump.
 *
 * Usage (from web/):
 *   STUDIO_NORA_DIAG_EPHEMERAL=1 SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY \
 *     npx tsx --env-file=.env.local scripts/uat03-live-investigate.mts [--label EXP-01] [--no-stream]
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EVIDENCE = path.join(
  ROOT,
  "docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-rootcause-live-20261118",
);

const UAT03_PROMPT =
  "Je prépare le déploiement d'un outil métier. Le travail doit suivre cet ordre : cadrer les besoins, valider les prérequis, configurer la solution, réaliser un pilote, corriger les anomalies, puis généraliser le déploiement. Peux-tu m'expliquer ce parcours, les résultats attendus à chaque étape et les points de vigilance avant de passer à la suivante ?";

const USD_IN = 2.0;
const USD_OUT = 10.0;
const USD_TO_EUR = 0.95;
const VAT = 1.2;
const FALLBACK_EUR_TTC = 0.85;

function parseArgs(argv: string[]) {
  let label = "EXP";
  let stream = true;
  let prompt = UAT03_PROMPT;
  let variant: string | null = null;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--label") label = argv[++i] ?? label;
    else if (a === "--no-stream") stream = false;
    else if (a === "--variant") variant = argv[++i] ?? null;
    else if (a === "--prompt-file") {
      prompt = fs.readFileSync(argv[++i]!, "utf8").trim();
    }
  }
  return { label, stream, prompt, variant };
}

function assertDevSafe() {
  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
  if (lane && lane !== "DEV") {
    throw new Error(`STOP — lane must be DEV, got ${lane}`);
  }
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "";
  process.env.STUDIO_NORA_SIMULATED_PROVIDER = "";
  process.env.STUDIO_E2E = "";
  process.env.STUDIO_NORA_DIAG_EPHEMERAL = "1";
  if (!process.env.SFIA_COG_PROFILE_TYPE) {
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
  }
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("STOP — OPENAI_API_KEY missing");
  }
  const db = process.env.DATABASE_URL ?? "";
  if (/5434|recette|stable|prod/i.test(db)) {
    throw new Error("STOP — DATABASE_URL looks like RECETTE/STABLE");
  }
}

function estimateCost(usage?: { input_tokens?: number; output_tokens?: number }) {
  if (usage?.input_tokens != null && usage?.output_tokens != null) {
    const usd = (usage.input_tokens / 1e6) * USD_IN + (usage.output_tokens / 1e6) * USD_OUT;
    return { eur_ttc: +(usd * USD_TO_EUR * VAT).toFixed(4), source: "tokens" as const, usage };
  }
  return { eur_ttc: FALLBACK_EUR_TTC, source: "fallback" as const, usage: null };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  assertDevSafe();
  fs.mkdirSync(EVIDENCE, { recursive: true });
  fs.mkdirSync(path.join(ROOT, ".tmp-sfia-nora-diag"), { recursive: true });

  // Dynamic import after env mutation
  const { generateNoraReply } = await import("../src/domains/conversation/nora-adapter.ts");
  const { buildCognitivePolicy } = await import("../src/domains/conversation/cognitive-policy.ts");

  const policy = buildCognitivePolicy(args.prompt, "TEST_BOUNDARY");
  const started = Date.now();
  const result = await generateNoraReply({
    userText: args.prompt,
    contextSnippets: [],
    policyOverride: policy,
  });
  const duration_ms = Date.now() - started;

  // Collect ephemeral dumps for this generation
  const diagDir = path.join(ROOT, ".tmp-sfia-nora-diag");
  const dumps = fs.existsSync(diagDir)
    ? fs
        .readdirSync(diagDir)
        .filter((f) => f.startsWith(result.generationId))
        .map((f) => {
          const raw = JSON.parse(fs.readFileSync(path.join(diagDir, f), "utf8"));
          return {
            file: f,
            category: raw.category,
            diag: raw.diag,
            raw_name: raw.raw?.name,
            raw_message: raw.raw?.message,
            cause: raw.raw?.cause,
          };
        })
    : [];

  const cost = estimateCost(
    (result as { usage?: { input_tokens?: number; output_tokens?: number } }).usage,
  );

  const vc = result.qualification?.visualComposition as
    | { blocks?: Array<{ kind?: string; steps?: unknown[] }> }
    | undefined;
  const blocks = vc?.blocks ?? [];
  const sequenceBlock = blocks.find((b) => b.kind === "sequence");

  const record = {
    id: args.label,
    ts_utc: new Date().toISOString(),
    hypothesis: args.variant ?? "exact_uat03_nominal_stream",
    environment: "DEV",
    sha: process.env.SFIA_SOURCE_SHA ?? null,
    message: "exact_uat03",
    prompt_len: args.prompt.length,
    prompt_sha16: createHash("sha256").update(args.prompt).digest("hex").slice(0, 16),
    model: result.modelRequested,
    profile: result.policy.profile,
    effort: result.effortRequested,
    profileType: result.policy.profileType,
    maxTurns_note: "from policy",
    stream_nominal: args.stream,
    status: result.status,
    mode: result.mode,
    generationId: result.generationId,
    streamingAttempted: result.streamingAttempted,
    streamingDelivered: result.streamingDelivered,
    streamingNotes: result.streamingNotes,
    attempts: result.attempts,
    duration_ms,
    composition_kinds: blocks.map((b) => b.kind ?? "?"),
    sequence_steps: sequenceBlock?.steps?.length ?? null,
    reply_len: (result.content ?? "").length,
    ephemeral_dumps: dumps,
    cost,
    notice:
      "LIVE investigation — dumps may contain error messages; scrub before handoff publication",
  };

  const outFile = path.join(EVIDENCE, `${args.label}.json`);
  fs.writeFileSync(outFile, JSON.stringify(record, null, 2));
  console.log(JSON.stringify({ ok: true, file: outFile, status: result.status, dumps: dumps.length, cost }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
