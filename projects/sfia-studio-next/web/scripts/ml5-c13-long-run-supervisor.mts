/**
 * ML5 C13 T-05 — mission LIVE longue + supervision durable (sans boucle navigateur).
 * LIVE_WAIT=0: dispatch ACK-first → serveur supervise → client se déconnecte →
 * rouvre et retrouve la même tentative sans second dispatch.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { chromium } from "@playwright/test";
import { db } from "../src/db/client";
import { pilots, preparations } from "../src/db/schema";
import { createTechnicalContract } from "../src/domains/execution/technical-contract";
import type { TechnicalContractBody } from "../src/domains/execution/types";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";

const BASE = process.env.SFIA_C13_BASE_URL ?? "http://127.0.0.1:3100";
const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c13");
const WS_ROOT = "/tmp/sfia-c13-cursor-live-ws";

const INSTRUCTION = [
  "# Mission C13 — long run + supervisor",
  "",
  "Dans le workspace Cursor:",
  "1. Créer immédiatement `PHASE1.txt` avec exactement: C13-PHASE1-OK",
  "2. Attendre environ 25 secondes (sleep ou boucle)",
  "3. Créer `RESULT_C13.txt` avec exactement: C13-LONG-RUN-OK",
  "4. Créer `src/ping.ts` exportant export const ping = 'c13'",
  "",
  "Aucun git push.",
].join("\n");

function body(): TechnicalContractBody {
  return {
    title: "ML5 C13 — long run supervisor",
    engagements: {
      willDo: "PHASE1 puis RESULT_C13 après délai dans workspace DEV",
      willNotDo: "Aucun push GitHub",
      expectedResult: "RESULT_C13.txt = C13-LONG-RUN-OK",
      pilotControl: "D6 Oui",
    },
    volets: {
      mission: "Démontrer supervision durable indépendante du navigateur",
      perimeter: "Workspace Cursor DEV isolé",
      capabilitiesAuthority: "CURSOR_SDK_LOCAL",
      stopConditions: "STOP demandé ≠ observé",
      proofsSources: "PHASE1.txt + RESULT_C13.txt",
      integrity: "Fingerprint = D6",
    },
    instructionText: INSTRUCTION,
    risks: ["Confusion supervisor vs second dispatch"],
    exclusions: ["GitHub REAL", "WEB LIVE"],
    acceptance: {
      criteria: ["PHASE1 puis RESULT_C13"],
      expectedProofs: ["fichiers workspace"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["file_edit", "shell"],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP", "DOUBLE_DISPATCH"],
    reversibilityLimits: ["Pas de rollback auto"],
    gitScope: null,
  };
}

async function resolvePilotA() {
  const byGh = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
  )[0];
  if (byGh) return byGh.id;
  throw new Error("Pilot A missing");
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(WS_ROOT, { recursive: true });
  if ((process.env.SFIA_CURSOR_EFFECT_MODE || "").toUpperCase() !== "LIVE") {
    throw new Error("SFIA_CURSOR_EFFECT_MODE must be LIVE");
  }

  const pilotId = await resolvePilotA();
  const label = `ML5-C13-LONG-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "C13 long-run supervisor");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C13 LONG",
    idempotencyKey: newId("idem"),
  });
  if (!("projectId" in created) || !created.projectId) throw new Error(JSON.stringify(created));
  const projectId = created.projectId;

  const seeded = await createTechnicalContract({
    pilotId,
    projectId,
    preparationId: prep.id,
    contractKey: `c13-long-${newId("ck").slice(-6)}`,
    body: body(),
    markReady: true,
    sourcesSufficient: true,
    unknownRestrictions: [],
  });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const request = context.request;
  await request.post(`${BASE}/api/dev/auto-session`, { data: {} });

  const contracts = (
    (await (await request.get(`${BASE}/api/projects/${projectId}/realization/contracts`)).json()) as {
      contracts?: Array<{ id: string; fingerprint: string }>;
    }
  ).contracts ?? [];
  const contract = contracts.find((c) => c.id === seeded.contractId) ?? contracts[0];
  if (!contract) throw new Error("no contract");

  const prepYes = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/prepare`,
    {
      data: {
        contractId: contract.id,
        correlationKey: `c13-long-${Date.now()}`,
        workspaceKey: "default",
      },
    },
  );
  const { attemptId } = (await prepYes.json()) as { attemptId: string };
  await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/authorize`,
    {
      data: {
        statement: "C13 Oui LONG",
        inspectedFingerprint: contract.fingerprint,
        confirmed: true,
      },
    },
  );

  const t0 = Date.now();
  const dispatch = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/dispatch`,
    { data: {}, timeout: 120_000 },
  );
  const dispatchJ = (await dispatch.json()) as {
    status?: string;
    live?: { agentId?: string; runId?: string; terminalStatus?: string | null };
  };
  const dispatchMs = Date.now() - t0;
  const agentId = dispatchJ.live?.agentId;
  const runId = dispatchJ.live?.runId;

  // Simulate browser close — NO client reconcile loop.
  await context.close();
  await browser.close();

  // Wait for durable server-side supervision to progress (no browser).
  const waitMs = 90_000;
  await new Promise((r) => setTimeout(r, waitMs));

  // Reopen fresh context — same attempt identities.
  const browser2 = await chromium.launch({ headless: true });
  const context2 = await browser2.newContext();
  const request2 = context2.request;
  await request2.post(`${BASE}/api/dev/auto-session`, { data: {} });

  const get = await request2.get(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
  );
  const bodyGet = (await get.json()) as {
    status?: string;
    live?: {
      agentId?: string;
      runId?: string;
      terminalStatus?: string | null;
      limits?: string[];
    };
    plan?: { workspaceCwd?: string };
  };

  // One optional reconcile if still DISPATCHED (should be observation-only).
  if (bodyGet.status === "DISPATCHED") {
    await request2.post(
      `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/reconcile`,
      { data: {}, timeout: 120_000 },
    );
  }
  const get2 = await request2.get(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
  );
  const final = (await get2.json()) as typeof bodyGet;

  const cwd = final.plan?.workspaceCwd ?? WS_ROOT;
  const phase1Ok =
    existsSync(join(cwd, "PHASE1.txt")) &&
    readFileSync(join(cwd, "PHASE1.txt"), "utf8").trim() === "C13-PHASE1-OK";
  const resultOk =
    existsSync(join(cwd, "RESULT_C13.txt")) &&
    readFileSync(join(cwd, "RESULT_C13.txt"), "utf8").trim() === "C13-LONG-RUN-OK";

  // Double-dispatch probe (must be idempotent / refuse second send)
  const dispatch2 = await request2.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/dispatch`,
    { data: {}, timeout: 60_000 },
  );
  const dispatch2J = (await dispatch2.json()) as {
    idempotent?: boolean;
    status?: number;
    error?: string;
  };

  const ids = {
    scenarioId: "ml5-c13-long-run-20261123",
    at: new Date().toISOString(),
    pilotId,
    projectId,
    contractId: contract.id,
    attemptId,
    agentId,
    runId,
    agentIdFinal: final.live?.agentId,
    runIdFinal: final.live?.runId,
    identitiesStable:
      agentId === final.live?.agentId && runId === final.live?.runId,
    dispatchStatus: dispatchJ.status,
    finalStatus: final.status,
    terminal: final.live?.terminalStatus,
    phase1Ok,
    resultOk,
    dispatchMs,
    browserClosedWaitMs: waitMs,
    doubleDispatch: {
      http: dispatch2.status(),
      body: dispatch2J,
    },
    liveWait: process.env.SFIA_CURSOR_LIVE_WAIT,
    effectMode: process.env.SFIA_CURSOR_EFFECT_MODE,
    workspaceCwd: cwd,
  };
  writeFileSync(join(OUT, "long-run-ids.json"), JSON.stringify(ids, null, 2));
  console.log(JSON.stringify(ids, null, 2));
  await browser2.close();

  if (!agentId || !runId || !ids.identitiesStable) process.exit(2);
  if (!phase1Ok && !resultOk) process.exit(3);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
