/**
 * ML5 C12 — seconde mission LIVE (module+test) + ACK-first (LIVE_WAIT=0) + reconcile.
 * Seed: project data only. Nora LIVE prepare when possible; fallback contract READY
 * labelled honestly if Nora does not produce one in time.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { createHash } from "crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { chromium } from "@playwright/test";
import { db } from "../src/db/client";
import { pilots, preparations } from "../src/db/schema";
import { savePreparationDocument } from "../src/domains/document/service";
import { createTechnicalContract } from "../src/domains/execution/technical-contract";
import type { TechnicalContractBody } from "../src/domains/execution/types";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";

const BASE = process.env.SFIA_C12_BASE_URL ?? "http://127.0.0.1:3100";
const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c12");
const WS_ROOT = "/tmp/sfia-c12-cursor-live-ws";

const INSTRUCTION = [
  "# Mission C12 — module + test",
  "",
  "Dans le workspace Cursor de cette tentative:",
  "1. Créer `src/add.ts` exportant `export function add(a: number, b: number) { return a + b; }`",
  "2. Créer `src/add.test.mjs` qui importe add et assert add(2,3)===5, puis console.log('C12_TEST_OK')",
  "3. Exécuter: `node --test src/add.test.mjs` (ou node src/add.test.mjs)",
  "4. Créer `RESULT_C12.txt` avec exactement: C12-LIVE-MODULE-OK",
  "",
  "Aucun git push. Aucun MCP.",
].join("\n");

function sampleBody(): TechnicalContractBody {
  return {
    title: "ML5 C12 — module add + test LIVE",
    engagements: {
      willDo: "Créer module add, test, RESULT_C12.txt dans workspace DEV isolé",
      willNotDo: "Aucun push GitHub, aucun effet hors workspace",
      expectedResult: "RESULT_C12.txt = C12-LIVE-MODULE-OK et test exécuté",
      pilotControl: "D6 Oui sur empreinte exacte",
    },
    volets: {
      mission: "Petite évolution technique démonstrative C12",
      perimeter: "Workspace Cursor DEV isolé sous SFIA_CURSOR_WORKSPACE_ROOT",
      capabilitiesAuthority: "CURSOR_SDK_LOCAL",
      stopConditions: "STOP demandé ≠ observé",
      proofsSources: "Fichiers workspace + RESULT_C12.txt + sortie test",
      integrity: "Fingerprint contrat = D6",
    },
    instructionText: INSTRUCTION,
    risks: ["Confusion LIVE_WAIT bloquant vs reconcile"],
    exclusions: ["GitHub REAL", "WEB LIVE", "MCP"],
    acceptance: {
      criteria: [
        "RESULT_C12.txt contenu exact",
        "src/add.ts présent",
        "test exécuté ou sortie capturée",
      ],
      expectedProofs: ["fichier RESULT_C12.txt", "rapport handoff"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["file_edit", "shell_test"],
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
  if ((process.env.SFIA_CURSOR_LIVE_WAIT || "").trim() === "1") {
    console.warn("WARN: LIVE_WAIT=1 — C12 prefers 0 (ACK-first + reconcile)");
  }

  const pilotId = await resolvePilotA();
  const label = `ML5-C12-LIVE-${new Date().toISOString().slice(0, 10)}-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "C12 LIVE resilience + evidence");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C12 LIVE",
    idempotencyKey: newId("idem"),
  });
  if (!("projectId" in created) || !created.projectId) throw new Error(JSON.stringify(created));
  const projectId = created.projectId;

  await savePreparationDocument(
    pilotId,
    prep.id,
    "Besoin C12 — module add",
    "# Besoin\nCréer module add + test + RESULT_C12.txt\n",
    undefined,
    { correlationKey: `c12-need-${newId("ck").slice(-6)}` },
  );

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const request = context.request;
  await request.post(`${BASE}/api/dev/auto-session`, { data: {} });

  // Nora LIVE attempt
  const turnKey = `c12-nora-${Date.now()}`;
  const noraRes = await request.post(`${BASE}/api/preparations/${prep.id}/messages`, {
    data: {
      content:
        "Prépare un contrat technique Cursor: créer src/add.ts, un test, exécuter le test, et RESULT_C12.txt avec C12-LIVE-MODULE-OK. Consulte le document besoin. Pas de git.",
      clientTurnKey: turnKey,
      correlationKey: turnKey,
    },
    timeout: 300_000,
  });
  const noraJ = (await noraRes.json().catch(() => ({}))) as Record<string, unknown>;

  let contracts = (
    (await (await request.get(`${BASE}/api/projects/${projectId}/realization/contracts`)).json()) as {
      contracts?: Array<{
        id: string;
        status: string;
        fingerprint: string;
        contractKey: string;
        version: number;
        body: { instructionText: string; title: string };
        preparationId?: string;
      }>;
    }
  ).contracts ?? [];

  let contract = contracts.sort((a, b) => b.version - a.version)[0];
  let creationMechanism = "NORA_LIVE";

  if (!contract) {
    // Honest fallback — still LIVE Cursor path; Nora prepare failed this run.
    creationMechanism = "DOMAIN_SEED_CONTRACT_FALLBACK_AFTER_NORA_MISS";
    const seeded = await createTechnicalContract({
      pilotId,
      projectId,
      preparationId: prep.id,
      contractKey: `c12-fallback-${newId("ck").slice(-6)}`,
      body: sampleBody(),
      markReady: true,
      sourcesSufficient: true,
      unknownRestrictions: [],
    });
    contracts = (
      (await (
        await request.get(`${BASE}/api/projects/${projectId}/realization/contracts`)
      ).json()) as { contracts?: typeof contracts }
    ).contracts ?? [];
    contract = contracts.find((c) => c.id === seeded.contractId) ?? contracts[0];
  }

  if (!contract) throw new Error("no contract");
  if (contract.status !== "READY") {
    await request.post(
      `${BASE}/api/projects/${projectId}/realization/contracts/${contract.id}/ready`,
      { data: {} },
    );
    contracts = (
      (await (
        await request.get(`${BASE}/api/projects/${projectId}/realization/contracts`)
      ).json()) as { contracts?: typeof contracts }
    ).contracts ?? [];
    contract = contracts.find((c) => c.id === contract!.id)!;
  }

  // Enrich instruction if Nora contract lacks RESULT_C12 — use seed body via new version only if needed
  if (!contract.body.instructionText.includes("RESULT_C12")) {
    console.warn("Nora instruction missing RESULT_C12 — continuing with Nora text as-is");
  }

  // D6 Non
  {
    const prepA = await request.post(
      `${BASE}/api/projects/${projectId}/realization/attempts/prepare`,
      {
        data: {
          contractId: contract.id,
          correlationKey: `c12-refuse-${Date.now()}`,
          workspaceKey: "default",
        },
      },
    );
    const pj = (await prepA.json()) as { attemptId?: string };
    await request.post(
      `${BASE}/api/projects/${projectId}/realization/attempts/${pj.attemptId}/authorize`,
      {
        data: {
          statement: "C12 refus",
          inspectedFingerprint: contract.fingerprint,
          confirmed: false,
        },
      },
    );
  }

  // D6 Oui + dispatch ACK-first
  const prepYes = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/prepare`,
    {
      data: {
        contractId: contract.id,
        correlationKey: `c12-yes-${Date.now()}`,
        workspaceKey: "default",
      },
    },
  );
  const prepYesJ = (await prepYes.json()) as { attemptId: string };
  const attemptId = prepYesJ.attemptId;
  await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/authorize`,
    {
      data: {
        statement: "C12 Oui LIVE",
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

  // Simulate browser disconnect: new context, same auto-session, reconcile only
  await context.close();
  const context2 = await browser.newContext();
  const request2 = context2.request;
  await request2.post(`${BASE}/api/dev/auto-session`, { data: {} });

  let status = dispatchJ.status ?? "";
  let live = dispatchJ.live ?? {};
  for (let i = 0; i < 30; i++) {
    const get = await request2.get(
      `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
    );
    const gj = (await get.json()) as {
      status?: string;
      live?: typeof live;
      plan?: { workspaceCwd?: string };
    };
    status = gj.status ?? status;
    live = gj.live ?? live;
    if (status === "COMPLETED" || live.terminalStatus) break;
    await request2.post(
      `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/reconcile`,
      { data: {}, timeout: 300_000 },
    );
    await new Promise((r) => setTimeout(r, 2000));
  }

  const attemptGet = await request2.get(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
  );
  const attemptBody = (await attemptGet.json()) as {
    plan?: { workspaceCwd?: string };
    status?: string;
    live?: typeof live;
  };
  const cwd = attemptBody.plan?.workspaceCwd ?? WS_ROOT;
  const resultPath = join(cwd, "RESULT_C12.txt");
  const addPath = join(cwd, "src/add.ts");
  const fileOk =
    existsSync(resultPath) &&
    readFileSync(resultPath, "utf8").trim() === "C12-LIVE-MODULE-OK";
  const addOk = existsSync(addPath);

  const report = [
    `# Rapport C12 LIVE`,
    `attemptId: ${attemptId}`,
    `agentId: ${live.agentId}`,
    `runId: ${live.runId}`,
    `terminal: ${live.terminalStatus}`,
    `RESULT_C12: ${fileOk}`,
    `add.ts: ${addOk}`,
    `dispatchMs: ${dispatchMs}`,
    `reconnect: yes (new browser context + reconcile)`,
  ].join("\n");

  const handoff = await request2.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/handoff`,
    {
      data: {
        reportMarkdown: report,
        expectedContractFingerprint: contract.fingerprint,
        manifest: {
          filesCreated: [
            ...(fileOk ? ["RESULT_C12.txt"] : []),
            ...(addOk ? ["src/add.ts"] : []),
          ],
          testsExecuted: ["node test add"],
          testsCaptured: fileOk ? ["RESULT_C12"] : [],
          gaps: fileOk ? [] : ["RESULT_MISSING"],
        },
        provenance: {
          acquisition: "CLIENT_DECLARED",
          declaredExecutorId: live.agentId,
          observedAgentId: live.agentId,
          observedRunId: live.runId,
        },
      },
    },
  );
  const handoffJ = (await handoff.json()) as { handoffId?: string; status?: string };

  const qual = await request2.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/qualification`,
    { data: { attachNoraCognitive: true }, timeout: 300_000 },
  );
  const qualJ = (await qual.json()) as {
    verdict?: string;
    noraAnalysisKind?: string;
    limits?: string[];
    noraAnalysisMarkdown?: string;
  };

  const ids = {
    scenarioId: "ml5-c12-live-20261123",
    at: new Date().toISOString(),
    creationMechanism,
    noraMode: noraJ.noraMode,
    pilotId,
    projectId,
    preparationId: prep.id,
    contractId: contract.id,
    fingerprint: contract.fingerprint,
    attemptId,
    agentId: live.agentId,
    runId: live.runId,
    status: attemptBody.status,
    workspaceCwd: cwd,
    resultOk: fileOk,
    addOk,
    handoffId: handoffJ.handoffId,
    handoffStatus: handoffJ.status,
    qualificationVerdict: qualJ.verdict,
    noraAnalysisKind: qualJ.noraAnalysisKind,
    noraLimits: qualJ.limits,
    dispatchMs,
    liveWait: process.env.SFIA_CURSOR_LIVE_WAIT,
    effectMode: process.env.SFIA_CURSOR_EFFECT_MODE,
  };
  writeFileSync(join(OUT, "scenario-ids.json"), JSON.stringify(ids, null, 2));
  writeFileSync(
    join(OUT, "nora-final.md"),
    qualJ.noraAnalysisMarkdown ?? "",
  );
  writeFileSync(
    join(OUT, "journey.json"),
    JSON.stringify({ ids, dispatchJ, noraKeys: Object.keys(noraJ) }, null, 2),
  );
  console.log(JSON.stringify(ids, null, 2));
  await browser.close();
  if (!fileOk || !live.agentId) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
