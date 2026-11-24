/**
 * C14 S2 (negation) + S5 (prepare contract) — inspect DB messages + contracts.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { desc, eq } from "drizzle-orm";
import { chromium } from "@playwright/test";
import { db } from "../src/db/client";
import {
  conversations,
  messages,
  pilots,
  preparations,
  technicalContracts,
} from "../src/db/schema";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { savePreparationDocument } from "../src/domains/document/service";
import { newId } from "../src/lib/ids";
import { semanticWantsCursorContractPrepare } from "../src/domains/conversation/nora-contract-bridge";
import type { NoraTurnQualification } from "../src/domains/conversation/semantic-qualification";

const BASE = process.env.SFIA_C14_BASE_URL ?? "http://127.0.0.1:3100";
const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c14");

async function main() {
  mkdirSync(OUT, { recursive: true });
  const pilotId = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
  )[0]?.id;
  if (!pilotId) throw new Error("pilot missing");

  const label = `ML5-C14-S25-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "C14 S2/S5");
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
    "Spec TVA C14",
    "# Spec\nTVA 0% export ; arrondi centimes ; pas de push Git.\n",
    undefined,
    { correlationKey: `c14-s25-${newId("ck").slice(-6)}` },
  );

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext();
  const request = ctx.request;
  await request.post(`${BASE}/api/dev/auto-session`, { data: {} });

  async function turn(text: string, tag: string) {
    const key = `c14-${tag}-${Date.now()}`;
    const res = await request.post(`${BASE}/api/preparations/${prep.id}/messages`, {
      data: { content: text, clientTurnKey: key, correlationKey: key },
      timeout: 300_000,
    });
    const body = (await res.json()) as Record<string, unknown>;
    const conv = (
      await db
        .select()
        .from(conversations)
        .where(eq(conversations.preparationId, prep.id))
        .limit(1)
    )[0];
    let assistantSnippet = "";
    if (conv) {
      const msgs = await db
        .select()
        .from(messages)
        .where(eq(messages.conversationId, conv.id))
        .orderBy(desc(messages.createdAt))
        .limit(8);
      const assistant = msgs.find((m) => m.role === "assistant");
      assistantSnippet = (assistant?.content || "").slice(0, 500);
    }
    const qualification = (body.qualification as NoraTurnQualification | undefined) ?? null;
    return {
      http: res.status(),
      noraMode: body.noraMode,
      preparedContract: body.preparedContract ?? null,
      semanticStatus: body.semanticQualificationStatus,
      assistantSnippet,
      wantsPrepare: semanticWantsCursorContractPrepare(qualification),
      mentionsCursor: /cursor/i.test(assistantSnippet),
      bodyKeys: Object.keys(body),
    };
  }

  const s2 = await turn(
    "Je ne veux surtout pas lancer Cursor ; explique seulement ce qui serait nécessaire pour corriger un calcul de TVA, sans préparer d'exécution.",
    "s2",
  );
  const s5 = await turn(
    "Prépare maintenant un contrat technique Cursor complet pour corriger le calcul de TVA (0% export, arrondi), en t'appuyant sur le document Spec TVA. Ne l'exécute pas.",
    "s5",
  );
  const contracts = await db
    .select()
    .from(technicalContracts)
    .where(eq(technicalContracts.projectId, projectId));
  const latest = contracts.sort((a, b) => b.version - a.version)[0];
  const out = {
    at: new Date().toISOString(),
    projectId,
    s2,
    s5,
    contracts: contracts.length,
    latest: latest
      ? {
          id: latest.id,
          status: latest.status,
          title: latest.title,
          instructionLen: latest.instructionText.length,
          fingerprint: latest.fingerprint.slice(0, 16),
        }
      : null,
  };
  writeFileSync(join(OUT, "s2-s5-live.json"), JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
