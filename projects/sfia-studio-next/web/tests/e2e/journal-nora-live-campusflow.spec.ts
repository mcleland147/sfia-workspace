import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import {
  openNewPreparation,
  constituteAndCreateProject,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 06 — CampusFlow LIVE Nora 20-turn qualification (GO Morris DEV).
 * Real product path: UI → POST /api/preparations/:id/messages → generateNoraReply → OpenAI.
 * Never seeds Journal via journal-e2e-seed. Never calls OpenAI outside Nora.
 */

const EVIDENCE = path.resolve(
  __dirname,
  "../../../.tmp-sfia-review/journal-live-campusflow-20261119",
);

const USD_IN_PER_M = 2.0;
const USD_OUT_PER_M = 10.0;
const CEILING_USD = 10.0;
const RESERVE_USD = 0.6;
const FALLBACK_USD = 0.35;

const TURNS: { id: string; prompt: string }[] = [
  {
    id: "E01",
    prompt:
      "Je souhaite lancer CampusFlow, un projet fictif de réservation de salles de formation. Aide-moi à structurer ce projet.",
  },
  {
    id: "E02",
    prompt:
      "L'objectif est de permettre aux équipes de réserver facilement des salles sur plusieurs sites, avec une visibilité sur les disponibilités.",
  },
  {
    id: "E03",
    prompt:
      "Pour le pilote, on envisage trois sites fictifs : Site Nord, Site Centre et Site Sud.",
  },
  {
    id: "E04",
    prompt:
      "Au départ, l'accès serait réservé aux collaborateurs internes. Il faudra préciser les profils.",
  },
  {
    id: "E05",
    prompt:
      "Le parcours de réservation est important. On souhaite quelque chose de simple, sans validation manuelle systématique.",
  },
  {
    id: "E06",
    prompt:
      "Il faudra éviter les doubles réservations. On n'a pas encore défini le mécanisme.",
  },
  {
    id: "E07",
    prompt:
      "La connexion au système d'identité est encore incertaine. On hésite entre une intégration SSO et un accès dédié.",
  },
  {
    id: "E08",
    prompt:
      "Le SSO semble préférable, mais nous n'avons pas encore de confirmation technique.",
  },
  {
    id: "E09",
    prompt:
      "Il y a aussi un sujet sur la gestion des équipements des salles, distinct de la réservation proprement dite.",
  },
  {
    id: "E10",
    prompt:
      "Peux-tu me faire un premier bilan du projet : ce qui est acquis, ce qui reste ouvert et les grands sujets identifiés ?",
  },
  {
    id: "E11",
    prompt:
      "Pour la première version, nous hésitons entre un outil existant et une solution développée en interne. Quels critères permettraient de choisir ?",
  },
  {
    id: "E12",
    prompt:
      "Je privilégie une solution existante pour limiter le délai, mais ce n'est pas encore un arbitrage officiel.",
  },
  {
    id: "E13",
    prompt:
      "Correction : les formateurs externes devraient aussi pouvoir réserver certaines salles. Cela remet en question le périmètre initial limité aux collaborateurs.",
  },
  {
    id: "E14",
    prompt:
      "Qu'est-ce que ce changement implique pour le parcours de réservation et la gestion des accès ?",
  },
  {
    id: "E15",
    prompt:
      "Une première estimation évoquait 40 000 euros, mais ce chiffre n'est pas encore confirmé.",
  },
  {
    id: "E16",
    prompt:
      "Finalement, l'enveloppe cible envisagée est de 30 000 euros. Il faudra encore la faire valider.",
  },
  {
    id: "E17",
    prompt:
      "Je souhaite retenir un pilote limité aux deux premiers sites pour commencer. Aide-moi à préparer cet arbitrage, sans considérer qu'il est officiel tant que je ne l'ai pas validé.",
  },
  {
    id: "E18",
    prompt:
      "Nous préparons maintenant le lancement du pilote. Est-ce qu'il reste des questions importantes que nous aurions laissées de côté dans nos échanges ?",
  },
  {
    id: "E19",
    prompt:
      "J'ai entendu dire que l'intégration SSO serait possible, mais je n'ai pas encore de document ni de confirmation officielle.",
  },
  {
    id: "E20",
    prompt:
      "Fais-moi un bilan structuré du projet : les sujets, les acquis, les décisions officielles éventuelles, les hypothèses, les questions ouvertes et les prochains arbitrages à préparer.",
  },
];

type TurnRow = {
  id: string;
  startedAt: string;
  durationMs: number;
  statusText: string;
  modeLive: boolean;
  fixtureLeak: boolean;
  simLeak: boolean;
  userMessageId: string | null;
  assistantMessageId: string | null;
  excerpt: string;
  estimatedUsd: number;
  cumulativeUsd: number;
};

type JournalSnapshot = {
  at: string;
  label: "T0" | "T10" | "T20";
  subjectCount: number;
  subjectTitles: string[];
  acquisCount: number;
  openPointCount: number;
  decisionCount: number;
  searchEmpty: boolean;
  raw?: unknown;
};

function estimateUsd(inputTokens?: number, outputTokens?: number): number {
  if (inputTokens == null || outputTokens == null) return FALLBACK_USD;
  return (inputTokens / 1e6) * USD_IN_PER_M + (outputTokens / 1e6) * USD_OUT_PER_M;
}

async function captureJournal(
  page: import("@playwright/test").Page,
  projectId: string,
  label: JournalSnapshot["label"],
): Promise<JournalSnapshot> {
  await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
  await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
  const api = await page.request.get(`/api/projects/${projectId}/journal`);
  const body = api.ok() ? await api.json() : { error: await api.text(), status: api.status() };
  const subjects = Array.isArray(body?.knowledge?.subjects)
    ? body.knowledge.subjects
    : Array.isArray(body?.subjects)
      ? body.subjects
      : [];
  const acquis = Array.isArray(body?.knowledge?.acquis)
    ? body.knowledge.acquis
    : Array.isArray(body?.acquis)
      ? body.acquis
      : [];
  const openPoints = Array.isArray(body?.knowledge?.openPoints)
    ? body.knowledge.openPoints
    : Array.isArray(body?.openPoints)
      ? body.openPoints
      : [];
  const decisions = Array.isArray(body?.decisions) ? body.decisions : [];
  const titles = subjects.map((s: { title?: string }) => String(s.title ?? "")).filter(Boolean);
  const shot = path.join(EVIDENCE, `journal-${label.toLowerCase()}.png`);
  await page.screenshot({ path: shot, fullPage: false });
  const snap: JournalSnapshot = {
    at: new Date().toISOString(),
    label,
    subjectCount: subjects.length,
    subjectTitles: titles,
    acquisCount: acquis.filter((a: { status?: string }) => a.status === "CURRENT").length,
    openPointCount: openPoints.filter((o: { status?: string }) => o.status === "OPEN").length,
    decisionCount: decisions.length,
    searchEmpty: subjects.length === 0 && acquis.length === 0,
    raw: {
      status: body?.status,
      preparationIds: body?.knowledge?.preparationIds ?? body?.preparationIds,
      contradictionCount: Array.isArray(body?.contradictions) ? body.contradictions.length : 0,
      restrictionCount: Array.isArray(body?.restrictions) ? body.restrictions.length : 0,
    },
  };
  fs.writeFileSync(path.join(EVIDENCE, `journal-${label.toLowerCase()}.json`), JSON.stringify(snap, null, 2));
  return snap;
}

test.describe("Journal V4 — CampusFlow LIVE Nora 20-turn", () => {
  test("LIVE 20 échanges + Journal T0/T10/T20", async ({ page }) => {
    test.skip(
      process.env.STUDIO_ALLOW_LIVE_BOUNDED !== "1" || !process.env.OPENAI_API_KEY,
      "requires STUDIO_ALLOW_LIVE_BOUNDED=1 and OPENAI_API_KEY",
    );
    test.setTimeout(1_200_000);
    fs.mkdirSync(EVIDENCE, { recursive: true });

    const ledger: {
      projectName: string;
      projectId: string | null;
      preparationId: string | null;
      ceilingUsd: number;
      model: string;
      turns: TurnRow[];
      journal: JournalSnapshot[];
      stoppedEarly?: string;
      providerProof: string[];
    } = {
      projectName: "",
      projectId: null,
      preparationId: null,
      ceilingUsd: CEILING_USD,
      model: "openai-agents-sdk-live (configured DEV)",
      turns: [],
      journal: [],
      providerProof: [],
    };

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const preparationId = await openNewPreparation(page);
    const projectName = `CampusFlow — Test LIVE Journal ${Date.now()}`;
    ledger.projectName = projectName;
    ledger.preparationId = preparationId;
    const projectId = await constituteAndCreateProject(page, {
      name: projectName,
      summary: "Projet fictif réservation salles — LIVE Journal qualification",
      alreadyUnique: true,
    });
    ledger.projectId = projectId;
    expect(projectId).toBeTruthy();

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    ledger.journal.push(await captureJournal(page, projectId!, "T0"));
    // Prefer explicit project URL for surface restore (rail Link can race after Journal).
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 30000 },
    );
    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("thread-draft")).toBeVisible({ timeout: 30000 });

    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");
    await page.setViewportSize({ width: 1440, height: 900 });

    let cumulative = 0;
    let stopReason: string | undefined;

    for (let i = 0; i < TURNS.length; i++) {
      const turn = TURNS[i]!;
      if (cumulative + RESERVE_USD > CEILING_USD) {
        stopReason = `BUDGET_RESERVE_STOP before ${turn.id}: cumulative=${cumulative.toFixed(2)}`;
        break;
      }

      // Ensure composer is idle before each turn.
      if ((await page.getByTestId("nora-workspace").count()) === 0) {
        await page.goto(`/projects/${projectId}?surface=travail`);
        await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 30000 });
      }

      const t0 = Date.now();
      fs.writeFileSync(
        path.join(EVIDENCE, "live-progress.json"),
        JSON.stringify({ next: turn.id, at: new Date().toISOString(), cumulative }, null, 2),
      );
      await draft.fill(turn.prompt);
      await expect(send).toBeEnabled({ timeout: 10000 });
      await send.click();

      const status = page.getByTestId("thread-nora-status");
      await expect(status).toContainText(/COMPLETE|UNKNOWN|FAILED|INTERRUPTED|Nora|openai/i, {
        timeout: 180_000,
      });
      await expect(draft).toHaveValue("", { timeout: 180_000 });

      const statusText = ((await status.textContent()) ?? "").trim();
      const modeLive = /openai-agents-sdk-live/i.test(statusText);
      const fixtureLeak = /deterministic-fixture/i.test(statusText);
      const simLeak = /provider-simulated/i.test(statusText);
      if (modeLive) ledger.providerProof.push(`${turn.id}:${statusText.slice(0, 160)}`);

      const assistant = page.getByTestId("nora-msg-assistant").last();
      await expect(assistant).toBeVisible({ timeout: 30000 });
      const fullText = (await assistant.innerText()).slice(0, 6000);
      const assistantMessageId =
        (await assistant.getAttribute("data-message-id")) ??
        (await assistant.locator("[data-message-id]").first().getAttribute("data-message-id").catch(() => null));
      const userBubble = page.locator("[data-testid=nora-msg-user], [data-role=user]").last();
      const userMessageId =
        (await userBubble.getAttribute("data-message-id").catch(() => null)) ?? null;

      const cost = estimateUsd();
      cumulative += cost;
      const row: TurnRow = {
        id: turn.id,
        startedAt: new Date(t0).toISOString(),
        durationMs: Date.now() - t0,
        statusText,
        modeLive,
        fixtureLeak,
        simLeak,
        userMessageId,
        assistantMessageId,
        excerpt: fullText.slice(0, 1200).replace(/\s+/g, " "),
        estimatedUsd: cost,
        cumulativeUsd: cumulative,
      };
      ledger.turns.push(row);
      fs.writeFileSync(path.join(EVIDENCE, "live-ledger.json"), JSON.stringify(ledger, null, 2));
      fs.writeFileSync(
        path.join(EVIDENCE, `turn-${turn.id.toLowerCase()}.md`),
        `# ${turn.id}\n\n## Pilote\n\n${turn.prompt}\n\n## Nora\n\n${fullText}\n\n## Meta\n\n- status: ${statusText}\n- live: ${modeLive}\n- durationMs: ${row.durationMs}\n`,
      );

      if (fixtureLeak || simLeak) {
        stopReason = `${turn.id}: FIXTURE_OR_SIM_LEAK status=${statusText}`;
        break;
      }
      if (cumulative > CEILING_USD) {
        stopReason = `BUDGET_EXCEEDED after ${turn.id}`;
        break;
      }

      if (turn.id === "E10") {
        ledger.journal.push(await captureJournal(page, projectId!, "T10"));
        // Continuity: reload project via normal parcours
        await page.goto(`/projects/${projectId}?surface=travail`);
        await expect(page.getByTestId("project-load-state")).toHaveAttribute(
          "data-project-load-state",
          "ready",
          { timeout: 20000 },
        );
        await expect(page.getByTestId("nora-msg-assistant").last()).toBeVisible({ timeout: 20000 });
      }
    }

    if (stopReason) ledger.stoppedEarly = stopReason;
    ledger.journal.push(await captureJournal(page, projectId!, "T20"));

    // Optional D6 via Pilotage if UI available — never insert HumanDecision in DB.
    await page.goto(`/projects/${projectId}?surface=pilotage`);
    await page.waitForTimeout(800);
    const pilotageVisible = (await page.getByTestId("pilotage-panel").count().catch(() => 0)) > 0;
    fs.writeFileSync(
      path.join(EVIDENCE, "d6-attempt.json"),
      JSON.stringify(
        {
          pilotagePanelVisible: pilotageVisible,
          note: pilotageVisible
            ? "Panel visible — acte D6 non forcé si confirmation UI ambiguë; E17 reste proposition non officialisée sauf acte Pilote explicite."
            : "Pilotage panel not found — D6 confirmation NOT APPLICABLE in this run.",
        },
        null,
        2,
      ),
    );

    fs.writeFileSync(path.join(EVIDENCE, "live-ledger.json"), JSON.stringify(ledger, null, 2));

    const liveTurns = ledger.turns.filter((t) => t.modeLive && !t.fixtureLeak);
    expect(liveTurns.length, `expected LIVE turns, got ${JSON.stringify(ledger.turns.map((t) => ({ id: t.id, modeLive: t.modeLive, status: t.statusText })))}`).toBeGreaterThan(0);
    expect(ledger.turns.length).toBeGreaterThan(0);
    // Do not require 20/20 if provider/budget stopped — honesty over cosmetics.
  });
});
