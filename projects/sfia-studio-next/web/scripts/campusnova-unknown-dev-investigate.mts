/**
 * DEV-only LIVE forensic for CampusNova UNKNOWN (schema mismatch).
 * Enables STUDIO_NORA_DIAG_EPHEMERAL + sensitive SDK logging for Zod path.
 *
 * Usage (from web/):
 *   npx tsx --env-file=.env.local scripts/campusnova-unknown-dev-investigate.mts
 *   npx tsx --env-file=.env.local scripts/campusnova-unknown-dev-investigate.mts --attempts 3
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, ".tmp-sfia-nora-diag");
const PROMPT_FILE = path.join(OUT, "campusnova-prompt.txt");

function assertDevSafe() {
  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
  if (lane && lane !== "DEV") throw new Error(`STOP — lane must be DEV, got ${lane}`);
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "";
  process.env.STUDIO_NORA_SIMULATED_PROVIDER = "";
  process.env.STUDIO_E2E = "";
  process.env.STUDIO_NORA_DIAG_EPHEMERAL = "1";
  process.env.SFIA_COG_PROFILE_TYPE = process.env.SFIA_COG_PROFILE_TYPE || "TEST_BOUNDARY";
  if (!process.env.OPENAI_API_KEY) throw new Error("STOP — OPENAI_API_KEY missing");
  const db = process.env.DATABASE_URL ?? "";
  if (/5434|recette|stable|prod/i.test(db)) {
    throw new Error("STOP — DATABASE_URL looks like RECETTE/STABLE");
  }
}

function parseAttempts(argv: string[]) {
  let attempts = 1;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--attempts") attempts = Math.max(1, Number(argv[++i] ?? 1) || 1);
  }
  return Math.min(attempts, 5);
}

function qualificationPressure(q: {
  replyDraft?: string;
  intents?: Array<{
    summary?: string;
    parameters?: {
      knowledgeStatement?: string;
      continuityReason?: string;
      subjectTitle?: string;
      subjectId?: string;
      supersedesAcquisId?: string;
      resolvesOpenPointId?: string;
    };
  }>;
  clarifications?: string[];
  goal?: string;
}) {
  const intents = q.intents ?? [];
  const statements = intents
    .map((i) => i.parameters?.knowledgeStatement ?? "")
    .filter(Boolean);
  return {
    replyDraft_len: (q.replyDraft ?? "").length,
    replyDraft_near_12000: (q.replyDraft ?? "").length >= 11000,
    goal_len: (q.goal ?? "").length,
    intent_count: intents.length,
    intent_summaries_max: Math.max(0, ...intents.map((i) => (i.summary ?? "").length)),
    knowledgeStatement_max: Math.max(0, ...statements.map((s) => s.length)),
    knowledgeStatement_near_5000: statements.some((s) => s.length >= 4500),
    continuityReason_max: Math.max(
      0,
      ...intents.map((i) => (i.parameters?.continuityReason ?? "").length),
    ),
    clarifications_max: Math.max(0, ...(q.clarifications ?? []).map((c) => c.length)),
    has_subjectId: intents.some((i) => Boolean(i.parameters?.subjectId)),
    has_supersedes: intents.some((i) => Boolean(i.parameters?.supersedesAcquisId)),
    has_resolves: intents.some((i) => Boolean(i.parameters?.resolvesOpenPointId)),
  };
}

async function main() {
  assertDevSafe();
  fs.mkdirSync(OUT, { recursive: true });
  const prompt = fs.readFileSync(PROMPT_FILE, "utf8").trim();
  if (prompt.length < 100) throw new Error("STOP — campusnova prompt missing/short");
  const maxAttempts = parseAttempts(process.argv.slice(2));

  const { generateNoraReply } = await import("../src/domains/conversation/nora-adapter.ts");
  const { buildCognitivePolicy } = await import("../src/domains/conversation/cognitive-policy.ts");

  // Pressure close to RECETTE: real-looking ids + many acquis/open points + subject ids.
  const contextSnippets = [
    "Projet CampusNova — cadrage réservation multi-centres (Lyon, Lille, Bordeaux).",
    "Sujet EXISTANT subjectId=subj_b28922af-d852-4641-9122-0c50cc0d01df titre=Parcours de réservation et responsabilités.",
    "Sujet EXISTANT subjectId=subj_691af6f0-684a-404e-b550-81e2365c8577 titre=Accompagnement et déploiement des utilisateurs.",
    "Inventaire Lille corrigé: 12 portables, 2 maintenance, 10 opérationnels actuellement; 9 mobilisables lors de l'incident.",
    "Incident Lyon: un portable opérationnel déjà prêté; procédure de substitution à clarifier.",
    "Interchangeabilité: même configuration pour les formations concernées (périmètre partiel).",
    "Responsabilité future des prêts Lille: encore ouverte; support utilisateur non défini.",
  ];
  const knowledgeSnippets = [
    "[acquis id=acq_20ceea40-c41e-4d82-8198-0121ff744496] Les responsables souhaitent des formations proches de la mise en service, sans charge excessive.",
    "[acquis id=acq_f0af9cfc-6024-4bb1-8404-52f3283dadee] Le responsable de Bordeaux souhaite un point de contact unique pour les utilisateurs.",
    "[acquis id=acq_360ecb98-5b98-47ad-b6f7-5391a8619a80] Les assistants administratifs de Lille demandent des exercices pratiques sur la réservation.",
    "[acquis id=acq_33c8f077-833a-4285-b5fd-0923155d499e] L’équipe d’accueil de Lille souhaite participer aux formations en lien avec son rôle.",
    "[acquis id=acq_807c4cbb-ac5a-4a8f-a554-1bf5c9cc9872] À Lyon, un responsable pédagogique est pressenti comme référent local.",
    "[acquis id=acq_lille_inventory_old] Lille: 12 portables, 3 en maintenance, 9 opérationnels (HISTORIQUE à superséder).",
    "[ouvert id=opn_7b40d325-220a-40da-a210-ff326a6da301] Quelle organisation du support utilisateur retenir après le lancement ?",
    "[ouvert id=opn_ee5dc65c-5bba-44b2-8ec5-9a5160df7397] Le format envisagé de deux ateliers de 90 minutes par centre convient-il ?",
    "[ouvert id=opn_dc2309ac-5173-439c-882d-bc3927b62f6d] L'équipe assurant actuellement les remises et réceptions à Lille est désormais incertaine.",
    "[ouvert id=opn_9d3ea72e-4743-4c34-aede-10bfa81c91b4] La responsabilité de gestion des prêts de matériel à Lille reste à trancher.",
  ];

  const runs: unknown[] = [];
  for (let i = 1; i <= maxAttempts; i++) {
    const policy = buildCognitivePolicy(prompt, "TEST_BOUNDARY");
    console.log(
      JSON.stringify({
        phase: "start",
        attempt: i,
        of: maxAttempts,
        prompt_chars: prompt.length,
        profile: policy.profile,
        effort: policy.effortRequested,
        model: policy.modelRequested,
      }),
    );

    const started = Date.now();
    const result = await generateNoraReply({
      userText: prompt,
      contextSnippets,
      knowledgeSnippets,
      policyOverride: policy,
    });
    const duration_ms = Date.now() - started;

    const dumps = fs.existsSync(OUT)
      ? fs
          .readdirSync(OUT)
          .filter((f) => f.startsWith(result.generationId) && f.endsWith(".json"))
          .map((f) => {
            const raw = JSON.parse(fs.readFileSync(path.join(OUT, f), "utf8"));
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

    const pressure = result.qualification
      ? qualificationPressure(result.qualification)
      : null;

    // Persist full qualification locally for forensic (DEV only, not handoff).
    if (result.qualification) {
      fs.writeFileSync(
        path.join(OUT, `${result.generationId}.qualification.json`),
        JSON.stringify(result.qualification, null, 2),
      );
    }

    const summary = {
      attempt: i,
      status: result.status,
      mode: result.mode,
      generationId: result.generationId,
      duration_ms,
      streamingNotes: result.streamingNotes,
      attempts: result.attempts,
      reply_len: (result.content ?? "").length,
      qualification_status: result.qualification?.status ?? null,
      pressure,
      dumps,
    };
    runs.push(summary);
    console.log(JSON.stringify(summary, null, 2));

    if (result.status === "UNKNOWN" || dumps.some((d) => d.diag?.zod_issue_path)) {
      console.log("STOP — UNKNOWN or zod path captured");
      break;
    }
  }

  const outFile = path.join(OUT, `campusnova-dev-batch-${Date.now()}.summary.json`);
  fs.writeFileSync(outFile, JSON.stringify({ runs }, null, 2));
  console.log(`wrote ${outFile}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
