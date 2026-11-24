/**
 * ML5 C13 — STOP Cursor LIVE réellement exercé (CANCEL ≠ ROLLBACK).
 * Lance un run LIVE, observe un premier effet, demande STOP, réconcilie le terminal.
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
const WS_ROOT = "/tmp/sfia-c13-cursor-stop-ws";

const INSTRUCTION = [
  "# Mission C13 — STOP LIVE",
  "",
  "Dans le workspace Cursor:",
  "1. Créer immédiatement `BEFORE_STOP.txt` avec exactement: C13-BEFORE-STOP",
  "2. Ensuite boucler / sleep pendant au moins 120 secondes",
  "3. Seulement après le délai, créer `AFTER_STOP.txt` avec: C13-SHOULD-NOT-IF-CANCELLED",
  "",
  "Aucun git push.",
].join("\n");

function body(): TechnicalContractBody {
  return {
    title: "ML5 C13 — STOP LIVE",
    engagements: {
      willDo: "Créer BEFORE_STOP puis attendre longtemps",
      willNotDo: "Aucun push",
      expectedResult: "STOP transmis; effets partiels conservés",
      pilotControl: "D6 Oui puis STOP",
    },
    volets: {
      mission: "Exercer STOP LIVE via SDK",
      perimeter: "Workspace DEV isolé",
      capabilitiesAuthority: "CURSOR_SDK_LOCAL",
      stopConditions: "STOP demandé ≠ rollback",
      proofsSources: "BEFORE_STOP.txt + états stop",
      integrity: "Fingerprint = D6",
    },
    instructionText: INSTRUCTION,
    risks: ["STOP uncertain"],
    exclusions: ["GitHub REAL"],
    acceptance: {
      criteria: ["BEFORE_STOP observé", "STOP demandé/transmis/observé qualifiés"],
      expectedProofs: ["états live + fichier"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["file_edit", "shell"],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["CANCEL ≠ ROLLBACK"],
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
  const label = `ML5-C13-STOP-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "C13 STOP LIVE");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C13 STOP",
    idempotencyKey: newId("idem"),
  });
  if (!("projectId" in created) || !created.projectId) throw new Error(JSON.stringify(created));
  const projectId = created.projectId;

  const seeded = await createTechnicalContract({
    pilotId,
    projectId,
    preparationId: prep.id,
    contractKey: `c13-stop-${newId("ck").slice(-6)}`,
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
  const contract = contracts.find((c) => c.id === seeded.contractId) ?? contracts[0]!;

  const prepYes = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/prepare`,
    {
      data: {
        contractId: contract.id,
        correlationKey: `c13-stop-${Date.now()}`,
        workspaceKey: "default",
      },
    },
  );
  const { attemptId } = (await prepYes.json()) as { attemptId: string };
  await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/authorize`,
    {
      data: {
        statement: "C13 Oui STOP",
        inspectedFingerprint: contract.fingerprint,
        confirmed: true,
      },
    },
  );

  const dispatch = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/dispatch`,
    { data: {}, timeout: 120_000 },
  );
  const dispatchJ = (await dispatch.json()) as {
    status?: string;
    live?: { agentId?: string; runId?: string };
  };

  // Wait for first local effect
  let cwd = WS_ROOT;
  let beforeOk = false;
  for (let i = 0; i < 40; i++) {
    const get = await request.get(
      `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
    );
    const gj = (await get.json()) as { plan?: { workspaceCwd?: string } };
    cwd = gj.plan?.workspaceCwd ?? cwd;
    if (
      existsSync(join(cwd, "BEFORE_STOP.txt")) &&
      readFileSync(join(cwd, "BEFORE_STOP.txt"), "utf8").trim() === "C13-BEFORE-STOP"
    ) {
      beforeOk = true;
      break;
    }
    await new Promise((r) => setTimeout(r, 2000));
  }

  const stopRes = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/stop`,
    { data: {}, timeout: 60_000 },
  );
  const stopJ = (await stopRes.json()) as {
    status?: string;
    stopRequested?: boolean;
    stopObserved?: boolean;
    live?: {
      terminalStatus?: string | null;
      limits?: string[];
      stopRequestedAt?: string;
      stopObservedAt?: string | null;
    };
    limits?: string[];
  };

  // Reconcile terminal
  for (let i = 0; i < 15; i++) {
    await request.post(
      `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/reconcile`,
      { data: {}, timeout: 60_000 },
    );
    await new Promise((r) => setTimeout(r, 2000));
    const get = await request.get(
      `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
    );
    const gj = (await get.json()) as {
      status?: string;
      live?: { terminalStatus?: string | null; limits?: string[] };
    };
    if (
      gj.status === "COMPLETED" ||
      gj.live?.terminalStatus === "cancelled" ||
      gj.live?.terminalStatus === "finished" ||
      gj.live?.terminalStatus === "error"
    ) {
      break;
    }
  }

  const finalGet = await request.get(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}`,
  );
  const final = (await finalGet.json()) as {
    status?: string;
    live?: {
      terminalStatus?: string | null;
      limits?: string[];
      agentId?: string;
      runId?: string;
      stopRequestedAt?: string;
      stopObservedAt?: string | null;
    };
    plan?: { workspaceCwd?: string };
  };
  cwd = final.plan?.workspaceCwd ?? cwd;
  const afterExists = existsSync(join(cwd, "AFTER_STOP.txt"));

  // Honest handoff with partial effects
  const report = [
    `# Rapport C13 STOP LIVE`,
    `stopRequested: ${stopJ.stopRequested}`,
    `stopObserved: ${stopJ.stopObserved}`,
    `terminal: ${final.live?.terminalStatus}`,
    `BEFORE_STOP: ${beforeOk}`,
    `AFTER_STOP exists: ${afterExists}`,
    `CANCEL ≠ ROLLBACK — effets antérieurs conservés`,
  ].join("\n");

  const handoff = await request.post(
    `${BASE}/api/projects/${projectId}/realization/attempts/${attemptId}/handoff`,
    {
      data: {
        reportMarkdown: report,
        expectedContractFingerprint: contract.fingerprint,
        manifest: {
          filesCreated: beforeOk ? ["BEFORE_STOP.txt"] : [],
          filesObserved: beforeOk ? ["BEFORE_STOP.txt"] : [],
          filesDeclared: beforeOk ? ["BEFORE_STOP.txt"] : [],
          testsDeclared: [],
          testsExecuted: [],
          testsCaptured: [],
          gaps: [
            afterExists
              ? "AFTER_STOP_WRITTEN — cancel may not have prevented later write"
              : "AFTER_STOP_ABSENT",
            ...(stopJ.stopObserved ? [] : ["STOP_OBSERVATION_UNCERTAIN"]),
          ],
        },
        provenance: {
          acquisition: "CLIENT_DECLARED",
          observedAgentId: final.live?.agentId,
          observedRunId: final.live?.runId,
        },
      },
    },
  );
  const handoffJ = (await handoff.json()) as { handoffId?: string; status?: string; limits?: string[] };

  const ids = {
    scenarioId: "ml5-c13-stop-live-20261123",
    at: new Date().toISOString(),
    pilotId,
    projectId,
    contractId: contract.id,
    attemptId,
    agentId: dispatchJ.live?.agentId,
    runId: dispatchJ.live?.runId,
    beforeOk,
    afterExists,
    stopHttp: stopRes.status(),
    stopRequested: stopJ.stopRequested === true,
    stopObserved: stopJ.stopObserved === true,
    stopLimits: stopJ.limits ?? stopJ.live?.limits,
    finalStatus: final.status,
    terminal: final.live?.terminalStatus,
    handoffId: handoffJ.handoffId,
    handoffStatus: handoffJ.status,
    handoffLimits: handoffJ.limits,
    workspaceCwd: cwd,
    distinction: {
      stopRequested: stopJ.stopRequested === true,
      stopTransmitted: Boolean(
        (stopJ.limits ?? stopJ.live?.limits ?? []).some((l) =>
          /LIVE_CANCEL|STOP_REQUESTED|CANCEL/.test(l),
        ) || stopJ.stopRequested,
      ),
      stopObservedBySdk: stopJ.stopObserved === true,
      terminalCancelled: final.live?.terminalStatus === "cancelled",
      priorEffectsPreserved: beforeOk,
      rollback: false,
    },
  };
  writeFileSync(join(OUT, "stop-live-ids.json"), JSON.stringify(ids, null, 2));
  console.log(JSON.stringify(ids, null, 2));
  await browser.close();

  if (!dispatchJ.live?.agentId || !beforeOk) process.exit(2);
  // PASS if stop was requested; observed/cancelled may be PARTIAL (provider limit)
  if (!ids.stopRequested) process.exit(3);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
