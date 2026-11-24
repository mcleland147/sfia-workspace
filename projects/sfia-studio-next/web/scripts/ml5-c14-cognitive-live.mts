/**
 * ML5 C14 — scénarios LIVE cognitifs (S1/S2/S4/S5 bornés).
 * Fixtures = données d'entrée ; réponses Nora LIVE non injectées.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { chromium } from "@playwright/test";
import { db } from "../src/db/client";
import { pilots, preparations, technicalContracts } from "../src/db/schema";
import { savePreparationDocument } from "../src/domains/document/service";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";
import {
  assertOutboundHasNoPrivateLeak,
  executePublicWebSearch,
  executePublicWebOpenPage,
  __getPublicWebOutboundLogForTests,
  __resetPublicWebOutboundLogForTests,
} from "../src/domains/conversation/public-web-search-frontier";
import {
  semanticWantsCursorContractPrepare,
  detectsTechnicalContractIntent,
} from "../src/domains/conversation/nora-contract-bridge";
import { qualifyCognitiveProfile } from "../src/domains/conversation/cognitive-policy";

const BASE = process.env.SFIA_C14_BASE_URL ?? "http://127.0.0.1:3100";
const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c14");

async function resolvePilotA() {
  const byGh = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
  )[0];
  if (byGh) return byGh.id;
  throw new Error("Pilot A missing");
}

async function noraTurn(
  request: Awaited<ReturnType<typeof chromium.launch>> extends infer B
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    : never,
  prepId: string,
  content: string,
  tag: string,
) {
  const turnKey = `c14-${tag}-${Date.now()}`;
  const res = await request.post(`${BASE}/api/preparations/${prepId}/messages`, {
    data: { content, clientTurnKey: turnKey, correlationKey: turnKey },
    timeout: 300_000,
  });
  const j = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  return { http: res.status(), turnKey, body: j };
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  process.env.SFIA_WEB_SEARCH_ENABLED = "1";
  process.env.SFIA_WEB_SEARCH_LIVE = "1";

  const results: Record<string, unknown> = {
    scenarioId: "ml5-c14-cognitive-20261124",
    at: new Date().toISOString(),
  };

  // Deterministic C14 guards (no LIVE needed)
  results.lexicalDetectorsInert = {
    tech: detectsTechnicalContractIntent("Prépare un contrat technique Cursor"),
    lengthProfile: qualifyCognitiveProfile("x".repeat(900)).profile,
  };

  // S4a — WEB LIVE isolation + search at frontier (not via Nora agent private context)
  __resetPublicWebOutboundLogForTests();
  const privateMarkers = [
    "pilot_b8d7e5a2-SECRET",
    "DOC_PRIVATE_C14_INTERNAL",
    "sk-proj-NOTAREALKEY",
  ];
  const webSearch = await executePublicWebSearch({
    rawQuery: "MDN Array.prototype.map JavaScript",
    privateContextMarkers: privateMarkers,
  });
  const outbound = __getPublicWebOutboundLogForTests();
  const leak = outbound.length
    ? assertOutboundHasNoPrivateLeak(outbound[0]!.outboundFields, privateMarkers)
    : { ok: true as const };
  let webOpen: unknown = null;
  if (webSearch.items[0]?.url) {
    webOpen = await executePublicWebOpenPage({ url: webSearch.items[0].url });
  }
  results.s4_web = {
    searchStatus: webSearch.status,
    searchMode: webSearch.mode,
    itemCount: webSearch.items.length,
    limits: webSearch.limits,
    isolationOk: leak.ok,
    outboundQuery: outbound[0]?.outboundFields?.q ?? null,
    open: webOpen,
  };

  const pilotId = await resolvePilotA();
  const label = `ML5-C14-COG-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "C14 cognitive");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C14",
    idempotencyKey: newId("idem"),
  });
  if (!("projectId" in created) || !created.projectId) throw new Error(JSON.stringify(created));
  const projectId = created.projectId;

  await savePreparationDocument(
    pilotId,
    prep.id,
    "Besoin C14 — facturation",
    [
      "# Besoin",
      "Corriger le calcul de TVA d'une facture (cas 0% et arrondi centimes).",
      "",
      "## Restriction",
      "Aucun push GitHub. Aucune donnée client réelle.",
      "",
      "## Contradictions",
      "V1: TVA 20% partout. V2: TVA 0% pour export.",
    ].join("\n"),
    undefined,
    { correlationKey: `c14-need-${newId("ck").slice(-6)}` },
  );

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const request = context.request;
  await request.post(`${BASE}/api/dev/auto-session`, { data: {} });

  // S1 — simple
  const s1 = await noraTurn(
    request,
    prep.id,
    "Bonjour Nora, rappelle-moi brièvement ce qu'est un fingerprint de contrat.",
    "s1",
  );
  results.s1 = {
    http: s1.http,
    noraMode: s1.body.noraMode,
    hasPreparedContract: Boolean(s1.body.preparedContract),
    replyChars: String(s1.body.assistantContent ?? s1.body.content ?? "").length,
  };

  // S2 — negation / no Cursor launch
  const s2 = await noraTurn(
    request,
    prep.id,
    "Je ne veux surtout pas lancer Cursor ; explique-moi seulement ce qui serait nécessaire pour corriger un calcul de TVA, sans préparer d'exécution.",
    "s2",
  );
  const s2Qual = s2.body.qualification as
    | { intents?: Array<{ capabilityId?: string; mode?: string }> }
    | undefined;
  results.s2 = {
    http: s2.http,
    noraMode: s2.body.noraMode,
    preparedContract: s2.body.preparedContract ?? null,
    wantsPrepare: semanticWantsCursorContractPrepare(
      (s2.body.qualification as never) ?? null,
    ),
    intentCapabilities: (s2Qual?.intents ?? []).map((i) => i.capabilityId),
  };

  // S5 — ask to prepare technical contract (semantic)
  const s5 = await noraTurn(
    request,
    prep.id,
    "À partir du document besoin facturation (TVA 0% export, arrondi), prépare un contrat technique Cursor complet pour corriger le calcul — sans l'exécuter et sans push Git.",
    "s5",
  );
  const contracts = await db
    .select()
    .from(technicalContracts)
    .where(eq(technicalContracts.projectId, projectId));
  const latest = contracts.sort(
    (a, b) => (b.version ?? 0) - (a.version ?? 0),
  )[0];
  results.s5 = {
    http: s5.http,
    noraMode: s5.body.noraMode,
    preparedContract: s5.body.preparedContract ?? null,
    wantsPrepare: semanticWantsCursorContractPrepare(
      (s5.body.qualification as never) ?? null,
    ),
    contractsInProject: contracts.length,
    latestStatus: latest?.status ?? null,
    latestTitle: latest?.title ?? null,
    instructionLen: latest?.instructionText?.length ?? 0,
  };

  // S8 — D6 still required: no dispatch without authorize (spot-check API)
  const prepAttempt = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/prepare`,
    {
      data: {
        contractId: latest?.id,
        correlationKey: `c14-d6-${Date.now()}`,
        workspaceKey: "default",
      },
    },
  );
  results.s8 = {
    prepareWithoutReadyContractHttp: prepAttempt.status(),
    note: "Dispatch still requires D6 authorize — prepare may fail if no READY contract",
  };

  writeFileSync(join(OUT, "cognitive-live.json"), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  await browser.close();

  if (results.lexicalDetectorsInert && (results.lexicalDetectorsInert as { tech: boolean }).tech) {
    process.exit(2);
  }
  if ((results.s4_web as { isolationOk?: boolean }).isolationOk === false) process.exit(3);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
