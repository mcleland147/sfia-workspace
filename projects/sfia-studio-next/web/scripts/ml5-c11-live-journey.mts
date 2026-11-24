/**
 * ML5 C11 — DEV LIVE journey (API-first + optional browser shots):
 * Nora LIVE → contract READY → D6 Non/Oui → Cursor SDK LIVE → handoff D8 → Nora analysis.
 */
import { createHash } from "crypto";
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { join } from "path";
import { chromium, type APIRequestContext, type Page } from "@playwright/test";

const BASE = process.env.SFIA_C11_BASE_URL ?? "http://127.0.0.1:3100";
const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c11");
const IDS_PATH = join(OUT, "scenario-ids.json");
const WS = "/tmp/sfia-c11-cursor-live-ws";
const WITNESS = "DEMO_C11.txt";
const WITNESS_CONTENT = "SFIA-C11-CURSOR-LIVE-OK";

type Step = {
  step: string;
  action: string;
  data: "LIVE" | "OBSERVED" | "DECLARED" | "SCRIPTED";
  verdict: "PASS" | "FAIL" | "PARTIAL" | "N/A";
  criteria?: string[];
  useful?: unknown;
  reserve?: string;
};

function sha256(buf: Buffer | string) {
  return createHash("sha256").update(buf).digest("hex");
}

async function shot(page: Page, name: string) {
  const path = join(OUT, name);
  await page.screenshot({ path, fullPage: false });
  const buf = readFileSync(path);
  return { file: name, sha256: sha256(buf), bytes: buf.length };
}

async function autoSession(request: APIRequestContext) {
  const res = await request.post(`${BASE}/api/dev/auto-session`, { data: {} });
  const j = (await res.json()) as { ok?: boolean; pilotId?: string };
  if (!res.ok() || !j.ok) throw new Error(`auto-session failed: ${res.status()}`);
  return j.pilotId!;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(WS, { recursive: true });
  if (!existsSync(IDS_PATH)) throw new Error(`Missing ${IDS_PATH} — run seed first`);
  const ids = JSON.parse(readFileSync(IDS_PATH, "utf8")) as {
    pilotId: string;
    projectId: string;
    preparationId: string;
    projectName: string;
  };

  const steps: Step[] = [];
  const evidence: Record<string, unknown> = {
    at: new Date().toISOString(),
    effectMode: process.env.SFIA_CURSOR_EFFECT_MODE,
    modelId: process.env.SFIA_CURSOR_MODEL_ID,
    liveWait: process.env.SFIA_CURSOR_LIVE_WAIT,
    cogProfile: process.env.SFIA_COG_PROFILE_TYPE,
    workspace: WS,
  };

  // Preflight: mode must be LIVE
  if ((process.env.SFIA_CURSOR_EFFECT_MODE || "").toUpperCase() !== "LIVE") {
    steps.push({
      step: "A-preflight-mode",
      action: "Check SFIA_CURSOR_EFFECT_MODE",
      data: "OBSERVED",
      verdict: "FAIL",
      useful: { mode: process.env.SFIA_CURSOR_EFFECT_MODE },
      reserve: "LIVE required for C11 — refusing SCRIPTED success claim",
    });
    writeFileSync(join(OUT, "journey-steps.json"), JSON.stringify({ steps, evidence }, null, 2));
    throw new Error("SFIA_CURSOR_EFFECT_MODE must be LIVE");
  }
  steps.push({
    step: "A-preflight-mode",
    action: "SFIA_CURSOR_EFFECT_MODE=LIVE",
    data: "OBSERVED",
    verdict: "PASS",
    criteria: ["A2"],
  });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1680, height: 970 },
  });
  const page = await context.newPage();
  const request = context.request;
  await autoSession(request);

  // ——— B: Nora LIVE investigation + contract prepare ———
  const noraPrompt = [
    "Prépare un contrat technique pour une réalisation Cursor.",
    "Mission: créer le fichier DEMO_C11.txt dans le workspace de test avec exactement la ligne SFIA-C11-CURSOR-LIVE-OK, puis vérifier son contenu.",
    "Consulte les documents du projet (besoin technique et contexte/décisions).",
    "Signale la contradiction DEMO_OK.txt vs DEMO_C11.txt (DEMO_C11 prévaut) et l'inconnue verify-demo si pertinente.",
    "N'autorise aucun push Git. Pas de MCP.",
    "Quand les sources sont consultées, prépare le contrat technique prêt pour inspection Pilote.",
  ].join(" ");

  const turnKey = `c11-nora-prep-${Date.now()}`;
  const t0 = Date.now();
  const noraRes = await request.post(
    `${BASE}/api/preparations/${ids.preparationId}/messages`,
    {
      data: {
        content: noraPrompt,
        clientTurnKey: turnKey,
        correlationKey: turnKey,
      },
      timeout: 300_000,
    },
  );
  const noraJ = (await noraRes.json().catch(() => ({}))) as Record<string, unknown>;
  const noraMs = Date.now() - t0;
  evidence.noraTurn = {
    http: noraRes.status(),
    ms: noraMs,
    status: noraJ.status,
    noraMode: noraJ.noraMode,
    provider: noraJ.provider ?? noraJ.noraProvider,
    model: noraJ.model ?? noraJ.noraModel,
    fixture: noraJ.fixtureUsed ?? noraJ.usedFixture,
    contractBridge: noraJ.contractBridge ?? noraJ.technicalContract,
    keys: Object.keys(noraJ).slice(0, 40),
  };
  const noraLive =
    noraRes.ok() &&
    String(noraJ.noraMode ?? "").toUpperCase() !== "FIXTURE" &&
    noraJ.fixtureUsed !== true &&
    noraJ.usedFixture !== true;
  steps.push({
    step: "B-nora-live-turn",
    action: "POST messages — Nora prepare contract",
    data: noraLive ? "LIVE" : "OBSERVED",
    verdict: noraLive ? "PASS" : "PARTIAL",
    criteria: ["CA-01", "CA-03", "B"],
    useful: evidence.noraTurn,
    reserve: noraLive ? undefined : "Nora turn not clearly LIVE / fixture flags",
  });

  // List contracts
  let contractsRes = await request.get(
    `${BASE}/api/projects/${ids.projectId}/realization/contracts`,
  );
  let contractsJ = (await contractsRes.json()) as {
    contracts?: Array<{
      id: string;
      status: string;
      fingerprint: string;
      contractKey: string;
      version: number;
      body: { title: string; instructionText: string };
    }>;
  };
  let contract = (contractsJ.contracts ?? []).sort((a, b) => b.version - a.version)[0];

  // If Nora did not prepare a contract, try one more deepen turn then fail honestly for B
  if (!contract) {
    const turnKey2 = `c11-nora-deepen-${Date.now()}`;
    const deepen = await request.post(
      `${BASE}/api/preparations/${ids.preparationId}/messages`,
      {
        data: {
          content:
            "Approfondis: lis réellement les documents besoin et contexte, puis prépare un contrat technique pour créer DEMO_C11.txt avec SFIA-C11-CURSOR-LIVE-OK.",
          clientTurnKey: turnKey2,
          correlationKey: turnKey2,
        },
        timeout: 300_000,
      },
    );
    evidence.noraDeepen = { http: deepen.status(), bodyKeys: Object.keys(await deepen.json().catch(() => ({}))) };
    contractsRes = await request.get(
      `${BASE}/api/projects/${ids.projectId}/realization/contracts`,
    );
    contractsJ = (await contractsRes.json()) as typeof contractsJ;
    contract = (contractsJ.contracts ?? []).sort((a, b) => b.version - a.version)[0];
  }

  if (!contract) {
    steps.push({
      step: "B-contract-from-nora",
      action: "Expect DRAFT/READY contract after Nora",
      data: "OBSERVED",
      verdict: "FAIL",
      criteria: ["CA-01"],
      reserve: "Aucun contrat produit par Nora — chaîne E2E LIVE incomplète sur B",
    });
    writeFileSync(join(OUT, "journey-steps.json"), JSON.stringify({ steps, evidence, ids }, null, 2));
    // Continue to Cursor boundary proof with emergency contract via API prepare would violate honesty —
    // stop Cursor path if no contract; still write pack facts.
    await browser.close();
    console.log(JSON.stringify({ steps, evidence }, null, 2));
    process.exit(2);
  }

  // Enrich instruction if witness missing (keep fingerprint path honest — may need new version)
  if (!contract.body.instructionText.includes(WITNESS)) {
    evidence.instructionNote =
      "Instruction Nora sans DEMO_C11 explicite — READY sur version Nora telle quelle; Cursor mission may fail D8";
  }

  // Mark READY server-side
  if (contract.status !== "READY") {
    const readyRes = await request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/contracts/${contract.id}/ready`,
      { data: {} },
    );
    const readyJ = await readyRes.json().catch(() => ({}));
    evidence.ready = { http: readyRes.status(), body: readyJ };
    contractsRes = await request.get(
      `${BASE}/api/projects/${ids.projectId}/realization/contracts`,
    );
    contractsJ = (await contractsRes.json()) as typeof contractsJ;
    contract = (contractsJ.contracts ?? []).find((c) => c.id === contract!.id) ?? contract;
  }

  steps.push({
    step: "B-contract-ready",
    action: "Server READY qualification",
    data: "OBSERVED",
    verdict: contract.status === "READY" ? "PASS" : "FAIL",
    criteria: ["CA-04"],
    useful: {
      contractId: contract.id,
      status: contract.status,
      fingerprint: contract.fingerprint,
      instructionPreview: contract.body.instructionText.slice(0, 240),
    },
  });

  if (contract.status !== "READY") {
    writeFileSync(join(OUT, "journey-steps.json"), JSON.stringify({ steps, evidence, ids }, null, 2));
    await browser.close();
    process.exit(3);
  }

  // ——— C: D6 Non then Oui + Cursor LIVE ———
  // Refuse first
  {
    const prep = await request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/attempts/prepare`,
      {
        data: {
          contractId: contract.id,
          correlationKey: `c11-refuse-${Date.now()}`,
          workspaceKey: "default",
        },
      },
    );
    const pj = (await prep.json()) as { attemptId?: string };
    const auth = await request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/attempts/${pj.attemptId}/authorize`,
      {
        data: {
          statement: "C11 refus D6 — aucun effet Cursor",
          inspectedFingerprint: contract.fingerprint,
          confirmed: false,
        },
      },
    );
    const aj = await auth.json();
    steps.push({
      step: "C-d6-non",
      action: "Authorize confirmed:false",
      data: "OBSERVED",
      verdict: auth.ok() && (aj.status === "CANCELLED" || aj.refused) ? "PASS" : "FAIL",
      criteria: ["CA-05", "D6"],
      useful: { http: auth.status(), attemptId: pj.attemptId, body: aj },
    });
    evidence.attemptRefuse = pj.attemptId;
  }

  // Oui + dispatch LIVE
  const prepYes = await request.post(
    `${BASE}/api/projects/${ids.projectId}/realization/attempts/prepare`,
    {
      data: {
        contractId: contract.id,
        correlationKey: `c11-yes-${Date.now()}`,
        workspaceKey: "default",
      },
    },
  );
  const prepYesJ = (await prepYes.json()) as { attemptId?: string; fingerprint?: string };
  const attemptId = prepYesJ.attemptId!;
  evidence.attemptYes = attemptId;

  const authYes = await request.post(
    `${BASE}/api/projects/${ids.projectId}/realization/attempts/${attemptId}/authorize`,
    {
      data: {
        statement: "C11 Oui D6 — autorise Cursor SDK LIVE sur workspace DEV isolé",
        inspectedFingerprint: contract.fingerprint,
        confirmed: true,
      },
    },
  );
  const authYesJ = await authYes.json();
  steps.push({
    step: "C-d6-oui",
    action: "Authorize confirmed:true",
    data: "OBSERVED",
    verdict: authYes.ok() ? "PASS" : "FAIL",
    criteria: ["D6"],
    useful: { http: authYes.status(), body: authYesJ },
  });

  // Browser shot of execution surface
  await page.goto(`${BASE}/projects/${ids.projectId}?surface=execution`, {
    waitUntil: "networkidle",
  });
  evidence.shotExecution = await shot(page, "c11-01-execution.png");

  const tDispatch = Date.now();
  const dispatch = await request.post(
    `${BASE}/api/projects/${ids.projectId}/realization/attempts/${attemptId}/dispatch`,
    { data: {}, timeout: 600_000 },
  );
  const dispatchJ = (await dispatch.json().catch(() => ({}))) as Record<string, unknown>;
  const dispatchMs = Date.now() - tDispatch;
  evidence.dispatch = {
    http: dispatch.status(),
    ms: dispatchMs,
    status: dispatchJ.status,
    live: dispatchJ.live,
    limits: dispatchJ.limits,
  };

  let attemptStatus = String(dispatchJ.status ?? "");
  let live = (dispatchJ.live ?? {}) as {
    agentId?: string | null;
    runId?: string | null;
    terminalStatus?: string | null;
    limits?: string[];
  };

  // Reconcile if still DISPATCHED
  if (attemptStatus === "DISPATCHED" || !live.terminalStatus) {
    for (let i = 0; i < 12; i++) {
      const rec = await request.post(
        `${BASE}/api/projects/${ids.projectId}/realization/attempts/${attemptId}/reconcile`,
        { data: {}, timeout: 300_000 },
      );
      const rj = (await rec.json().catch(() => ({}))) as Record<string, unknown>;
      evidence[`reconcile_${i}`] = {
        http: rec.status(),
        status: rj.status,
        live: rj.live,
      };
      attemptStatus = String(rj.status ?? attemptStatus);
      live = (rj.live as typeof live) ?? live;
      if (attemptStatus === "COMPLETED" || live.terminalStatus) break;
      await page.waitForTimeout(2000);
    }
  }

  // Witness path = server-resolved plan.workspaceCwd (not WORKSPACE_ROOT alone).
  const attemptGet = await request.get(
    `${BASE}/api/projects/${ids.projectId}/realization/attempts/${attemptId}`,
  );
  const attemptBody = (await attemptGet.json().catch(() => ({}))) as {
    plan?: { workspaceCwd?: string };
  };
  const workspaceCwd = attemptBody.plan?.workspaceCwd || WS;
  evidence.workspaceCwd = workspaceCwd;
  const witnessPath = join(workspaceCwd, WITNESS);
  const fileExists = existsSync(witnessPath);
  const fileContent = fileExists ? readFileSync(witnessPath, "utf8").trim() : null;
  const fileOk = fileExists && fileContent === WITNESS_CONTENT;

  steps.push({
    step: "C-cursor-sdk-live",
    action: "Dispatch + observe LIVE run + witness file",
    data: "LIVE",
    verdict:
      dispatch.ok() && live.agentId && live.runId && (attemptStatus === "COMPLETED" || live.terminalStatus === "finished")
        ? fileOk
          ? "PASS"
          : "PARTIAL"
        : "FAIL",
    criteria: ["CA-05", "E01-E15"],
    useful: {
      attemptStatus,
      agentId: live.agentId,
      runId: live.runId,
      terminalStatus: live.terminalStatus,
      fileExists,
      fileContent,
      fileOk,
      limits: live.limits,
    },
    reserve: fileOk
      ? undefined
      : "Run LIVE observé mais fichier témoin absent/divergente — D8 ne doit pas inventer la conformité",
  });

  // ——— D: Handoff + D8 ———
  const reportMarkdown = [
    `# Rapport de réalisation (Cursor SDK LIVE)`,
    ``,
    `attemptId: ${attemptId}`,
    `agentId: ${live.agentId ?? "unknown"}`,
    `runId: ${live.runId ?? "unknown"}`,
    `terminalStatus: ${live.terminalStatus ?? "unknown"}`,
    `model: ${process.env.SFIA_CURSOR_MODEL_ID ?? "composer-2.5"}`,
    ``,
    `## Inventaire vérifié`,
    fileOk
      ? `- ${WITNESS} créé — contenu observé: ${JSON.stringify(fileContent)}`
      : `- ${WITNESS} NON vérifié (exists=${fileExists}, content=${JSON.stringify(fileContent)})`,
    ``,
    `## Tests`,
    `- Lecture filesystem locale du workspace DEV — ${fileOk ? "PASS" : "FAIL"}`,
    ``,
    `## Réserves`,
    `- Déclaration Cursor ≠ preuve ; ce rapport s'appuie sur observation fichier locale.`,
    `- GitHub REAL non exercé (hors mandat C11 primaire).`,
  ].join("\n");

  const handoffRes = await request.post(
    `${BASE}/api/projects/${ids.projectId}/realization/attempts/${attemptId}/handoff`,
    {
      data: {
        reportMarkdown,
        expectedContractFingerprint: contract.fingerprint,
        manifest: {
          filesCreated: fileOk ? [WITNESS] : [],
          filesModified: [],
          testsExecuted: fileOk ? ["fs.readFile DEMO_C11.txt"] : [],
          testsCaptured: fileOk ? [`sha256:${sha256(fileContent ?? "")}`] : [],
          gaps: fileOk
            ? []
            : ["WITNESS_FILE_NOT_VERIFIED — déclaration SDK ≠ preuve fichier"],
        },
        provenance: {
          // Client cannot self-attest RUNTIME_COLLECTED; bind observed run ids.
          acquisition: "CLIENT_DECLARED",
          declaredExecutorId: live.agentId,
          observedRunId: live.runId,
          observedAgentId: live.agentId,
        },
      },
    },
  );
  const handoffJ = (await handoffRes.json().catch(() => ({}))) as Record<string, unknown>;
  evidence.handoff = { http: handoffRes.status(), body: handoffJ };
  steps.push({
    step: "D-handoff-ingest",
    action: "POST handoff from observed LIVE facts",
    data: "LIVE",
    verdict: handoffRes.ok() ? "PASS" : "FAIL",
    criteria: ["CA-07"],
    useful: { handoffId: (handoffJ as { handoff?: { id?: string } }).handoff?.id ?? handoffJ },
  });

  const qualRes = await request.post(
    `${BASE}/api/projects/${ids.projectId}/realization/attempts/${attemptId}/qualification`,
    {
      data: { attachNoraCognitive: true },
      timeout: 300_000,
    },
  );
  const qualJ = (await qualRes.json().catch(() => ({}))) as {
    verdict?: string;
    rubrics?: unknown[];
    noraAnalysisKind?: string;
    noraAnalysisMarkdown?: string;
    limits?: string[];
  };
  evidence.qualification = {
    http: qualRes.status(),
    verdict: qualJ.verdict,
    noraAnalysisKind: qualJ.noraAnalysisKind,
    limits: qualJ.limits,
    noraPreview: (qualJ.noraAnalysisMarkdown ?? "").slice(0, 500),
  };
  const noraCognitive =
    qualJ.noraAnalysisKind === "NORA_COGNITIVE" ||
    (qualJ.noraAnalysisMarkdown ?? "").includes("ANALYSE COGNITIVE NORA (D3)");
  steps.push({
    step: "D-d8-qualify",
    action: "POST qualification",
    data: "OBSERVED",
    verdict: qualRes.ok() ? "PASS" : "FAIL",
    criteria: ["CA-07", "G01-G11"],
    useful: { verdict: qualJ.verdict, limits: qualJ.limits },
  });
  steps.push({
    step: "E-nora-final-analysis",
    action: "attachNoraCognitive on qualification",
    data: noraCognitive ? "LIVE" : "OBSERVED",
    verdict: noraCognitive ? "PASS" : "PARTIAL",
    criteria: ["CA-08"],
    useful: { kind: qualJ.noraAnalysisKind },
    reserve: noraCognitive
      ? undefined
      : "Analyse jointe non classée NORA_COGNITIVE — vérifier provider / fallback déterministe",
  });

  await page.goto(`${BASE}/projects/${ids.projectId}?surface=results`, {
    waitUntil: "networkidle",
  });
  evidence.shotResults = await shot(page, "c11-02-results.png");

  // ——— F conditionals ———
  steps.push({
    step: "F-web-live",
    action: "B09 WEB LIVE",
    data: "DECLARED",
    verdict: "N/A",
    criteria: ["B09"],
    reserve: "Non requis pour mission C11 primaire — B09 remains NOT_IMPL until LIVE provider wired",
  });
  steps.push({
    step: "F-git-real",
    action: "GitHub REAL mutatif",
    data: "DECLARED",
    verdict: "N/A",
    criteria: ["CA-06"],
    reserve: "Pas de dépôt de test nommé / mandat mutation — skip push",
  });
  steps.push({
    step: "F-mcp",
    action: "MCP conditional",
    data: "DECLARED",
    verdict: "N/A",
    reserve: "Mission C11 sans MCP requis",
  });

  // Double-dispatch negative — idempotent replay of COMPLETED is OK (no second send).
  {
    const again = await request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/attempts/${attemptId}/dispatch`,
      { data: {} },
    );
    const againJ = (await again.json().catch(() => ({}))) as {
      idempotent?: boolean;
      status?: string;
      limits?: string[];
    };
    const noBlind =
      againJ.idempotent === true ||
      (againJ.limits ?? []).some((l) => /NO_BLIND_REDISPATCH|IDEMPOTENT/i.test(l)) ||
      again.status() >= 400;
    steps.push({
      step: "R-no-double-dispatch",
      action: "Second dispatch same attempt",
      data: "OBSERVED",
      verdict: noBlind ? "PASS" : "FAIL",
      useful: { http: again.status(), body: againJ },
      reserve: noBlind
        ? undefined
        : "Second dispatch without idempotent/NO_BLIND marker",
    });
  }

  const updatedIds = {
    ...ids,
    contractId: contract.id,
    contractKey: contract.contractKey,
    contractVersion: contract.version,
    fingerprint: contract.fingerprint,
    attemptIdYes: attemptId,
    attemptIdRefuse: evidence.attemptRefuse,
    agentId: live.agentId,
    runId: live.runId,
    handoffId: (handoffJ as { handoff?: { id?: string } }).handoff?.id ?? null,
    qualificationVerdict: qualJ.verdict ?? null,
    noraAnalysisKind: qualJ.noraAnalysisKind ?? null,
    witnessVerified: fileOk,
  };
  writeFileSync(join(OUT, "scenario-ids.json"), JSON.stringify(updatedIds, null, 2));
  writeFileSync(
    join(OUT, "journey-steps.json"),
    JSON.stringify({ steps, evidence, updatedIds }, null, 2),
  );

  await browser.close();

  const failed = steps.filter((s) => s.verdict === "FAIL");
  console.log(
    JSON.stringify(
      {
        summary: {
          pass: steps.filter((s) => s.verdict === "PASS").length,
          partial: steps.filter((s) => s.verdict === "PARTIAL").length,
          fail: failed.length,
          na: steps.filter((s) => s.verdict === "N/A").length,
        },
        updatedIds,
        failed,
      },
      null,
      2,
    ),
  );
  if (failed.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
