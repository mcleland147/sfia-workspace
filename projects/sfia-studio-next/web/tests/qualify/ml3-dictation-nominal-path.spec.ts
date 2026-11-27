/**
 * ML3 dictation nominal path — product NoraConversation on /projects/{id}?surface=travail.
 *
 * Requires qualify server (`npm run qualify:start`) with:
 *   STUDIO_LANE=DEV
 *   STUDIO_DEV_TEST_LOGIN=1
 *   SFIA_COMPOSER_DICTATION=1
 *   SFIA_DICTATION_TRANSPORT=fixture
 *   SFIA_DICTATION_SUBSTITUTED=1
 *   SFIA_DICTATION_FIXTURE_AUTO_TRANSCRIPT=1
 *   SFIA_DICTATION_FIXTURE_COMMIT_DELAY_MS=80
 *   SFIA_DICTATION_FIXTURE_COMPLETE_DELAY_MS=120
 *   STUDIO_FORCE_NORA_FIXTURE=1
 *
 * Run: npx playwright test tests/qualify/ml3-dictation-nominal-path.spec.ts -c playwright.qualify.config.ts
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

const EVIDENCE = path.resolve(
  __dirname,
  "../../.sfia-evidence/ml3-dictation-nominal-path",
);

test.describe.configure({ mode: "serial" });
test.setTimeout(180_000);

let projectId = "";
let serverUp = false;

async function ensureQualifyServer(
  request: import("@playwright/test").APIRequestContext,
): Promise<boolean> {
  const res = await request.get("/login").catch(() => null);
  return Boolean(res?.ok());
}

async function login(page: import("@playwright/test").Page) {
  // Prefer auto-session — login button can detach under concurrent RSC remounts.
  const auto = await page.request.post("/api/dev/auto-session");
  if (!auto.ok()) {
    await page.goto("/login", { waitUntil: "domcontentloaded" });
    const testBtn = page.getByRole("button", {
      name: /Pilote A|connexion de test|test login|entrer en session/i,
    });
    if (await testBtn.count()) {
      await testBtn.first().click({ timeout: 15_000 });
    } else {
      throw new Error(`auto-session failed status=${auto.status()}`);
    }
  }
  await page.goto("/portfolio", { waitUntil: "domcontentloaded" });
  await page.waitForURL(/\/(portfolio|projects|preparations)/, { timeout: 60_000 });
}

async function assertDictationCapability(
  request: import("@playwright/test").APIRequestContext,
  pid: string,
) {
  const res = await request.get(
    `/api/projects/${encodeURIComponent(pid)}/dictation/capability`,
  );
  if (!res.ok()) {
    const bodyText = await res.text().catch(() => "");
    throw new Error(
      `dictation capability route failed status=${res.status()} body=${bodyText.slice(0, 240)}`,
    );
  }
  const body = (await res.json()) as { enabled?: boolean; ok?: boolean };
  if (!body.enabled) {
    throw new Error(
      "SFIA_COMPOSER_DICTATION off or capability disabled on qualify server (no skip — set env)",
    );
  }
}

function installOscillatorMic(page: import("@playwright/test").Page) {
  return page.addInitScript(() => {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (AC) {
      const Patched = class extends AC {
        constructor(contextOptions?: AudioContextOptions) {
          super(contextOptions);
          void this.resume().catch(() => undefined);
        }
      };
      (window as unknown as { AudioContext: typeof AudioContext }).AudioContext =
        Patched as typeof AudioContext;
    }

    const orig = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = async (constraints) => {
      if (!constraints?.audio) return orig(constraints as MediaStreamConstraints);
      const ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
      void ctx.resume().catch(() => undefined);
      const osc = ctx.createOscillator();
      const dest = ctx.createMediaStreamDestination();
      osc.frequency.value = 440;
      osc.connect(dest);
      osc.start();
      const track = dest.stream.getAudioTracks()[0];
      if (track) track.enabled = true;
      const tracks = dest.stream.getTracks();
      (
        window as unknown as { __sfiaDictationMediaTracks?: MediaStreamTrack[] }
      ).__sfiaDictationMediaTracks = tracks;
      // Silence capture immediately — ScriptProcessor is unreliable in headless;
      // tests pump a bounded PCM volume through the product audio route instead.
      queueMicrotask(() => {
        for (const t of tracks) {
          try {
            t.stop();
          } catch {
            /* */
          }
        }
      });
      return dest.stream;
    };
  });
}

/**
 * Real product audio route with a bounded PCM volume (~3 fixture commits).
 * Browser ScriptProcessor uploads are absorbed by page.route so only the pump
 * reaches the server (headless capture is noisy/unreliable).
 */
async function ensureAudioFragments(
  page: import("@playwright/test").Page,
  pid: string,
  sessionId: string,
  commits = 3,
) {
  const pcm = Buffer.alloc(4_000, 1).toString("base64");
  await page.waitForTimeout(100);
  const posts = Math.max(2, commits * 2);
  for (let i = 0; i < posts; i++) {
    const res = await page.request.post(
      `/api/projects/${encodeURIComponent(pid)}/dictation/sessions/${encodeURIComponent(sessionId)}/audio`,
      {
        data: { pcmBase64: pcm },
        headers: { "x-sfia-dictation-pump": "1" },
      },
    );
    if (!res.ok()) {
      const body = await res.text().catch(() => "");
      throw new Error(`audio pump failed status=${res.status()} ${body.slice(0, 160)}`);
    }
    await page.waitForTimeout(80);
  }
  await page.waitForTimeout(500);
  return { pumped: true, posts };
}

async function gotoTravail(page: import("@playwright/test").Page, pid: string) {
  await page.goto(`/projects/${encodeURIComponent(pid)}?surface=travail`, {
    waitUntil: "domcontentloaded",
  });
  const mic = page.getByTestId("composer-mic");
  await expect(mic).toBeVisible({ timeout: 45_000 });
}

async function waitForDictationProvisional(
  page: import("@playwright/test").Page,
  pattern: RegExp,
  timeoutMs = 60_000,
) {
  const shell = page.getByTestId("composer-dictation");
  await expect(shell).toBeVisible({ timeout: 45_000 });
  const prov = page.getByTestId("dictation-provisional");
  await expect
    .poll(
      async () => {
        if (!(await prov.isVisible().catch(() => false))) return "";
        return (await prov.innerText()).trim();
      },
      { timeout: timeoutMs, intervals: [250, 500, 1000] },
    )
    .toMatch(pattern);
}

async function stopDictationAndWaitMic(page: import("@playwright/test").Page) {
  await page.getByTestId("dictation-stop").click();
  await expect(page.getByTestId("composer-mic")).toBeVisible({ timeout: 60_000 });
  await expect(page.getByTestId("composer-dictation")).toHaveCount(0);
}

async function startDictation(
  page: import("@playwright/test").Page,
  opts?: { projectId?: string; pumpAudio?: boolean },
): Promise<string> {
  // Install before mic click so native ScriptProcessor frames never reach the server.
  if (opts?.pumpAudio !== false) {
    await page.route("**/dictation/sessions/*/audio", async (route) => {
      if (route.request().headers()["x-sfia-dictation-pump"] === "1") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, suppressed: true }),
      });
    });
  }

  let sessionId = "";
  let createError = "";
  const onResp = async (res: import("@playwright/test").Response) => {
    if (res.request().method() !== "POST") return;
    if (!/\/dictation\/sessions(?:\?|$)/.test(res.url())) return;
    if (/\/dictation\/sessions\/[^/]+\//.test(res.url())) return;
    const j = (await res.json().catch(() => null)) as {
      sessionId?: string;
      ok?: boolean;
      code?: string;
      message?: string;
    } | null;
    if (j?.sessionId) sessionId = j.sessionId;
    if (!res.ok() || j?.ok === false) {
      createError = `${res.status()}:${j?.code || j?.message || "create_failed"}`;
    }
  };
  page.on("response", onResp);
  await page.getByTestId("composer-mic").click();
  await expect(page.getByTestId("composer-dictation")).toBeVisible({ timeout: 45_000 });
  await expect
    .poll(
      async () => (createError ? `ERR:${createError}` : sessionId),
      { timeout: 20_000, intervals: [100, 250] },
    )
    .toMatch(/^[0-9a-f-]{36}$/i);
  page.off("response", onResp);
  if (opts?.pumpAudio !== false && opts?.projectId) {
    await ensureAudioFragments(page, opts.projectId, sessionId);
  }
  return sessionId;
}

test.beforeAll(async ({ request }) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  serverUp = await ensureQualifyServer(request);
  if (!serverUp) {
    throw new Error("qualify server required — run npm run qualify:start");
  }
});

test.beforeEach(async ({ page }) => {
  if (!serverUp) {
    throw new Error("qualify server required");
  }
  await installOscillatorMic(page);
  await login(page);
  if (!projectId) {
    await openNewPreparation(page);
    const name = uniqueProjectName("DictNominal");
    projectId = await constituteAndCreateProject(page, {
      name,
      summary: "ML3 dictation nominal path qualify",
    });
    // Use page.request so the authenticated browser cookie jar is shared.
    await assertDictationCapability(page.request, projectId);
  }
  await gotoTravail(page, projectId);
});

test("C01 — Parcours nominal complet", async ({ page }) => {
  const draft = page.getByTestId("thread-draft");
  await expect(draft).toBeVisible({ timeout: 30_000 });
  await draft.fill("Brouillon initial. ");
  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /Première phrase dictée|phrase dictée/i);

  await page.screenshot({
    path: path.join(EVIDENCE, "c01-during-dictation.png"),
    fullPage: true,
  });

  const toggle = page.getByTestId("dictation-toggle-text");
  if (await toggle.isVisible()) {
    await toggle.click();
    await toggle.click();
  }

  // Allow delayed complete events for the last commit, then stop.
  await page.waitForTimeout(800);
  const draftBeforeStop = await draft.inputValue();
  await stopDictationAndWaitMic(page);

  await expect
    .poll(async () => draft.inputValue(), { timeout: 45_000 })
    .toMatch(/Brouillon initial/i);
  const draftAfterDictation = await draft.inputValue();
  expect(draftAfterDictation).toMatch(/Première phrase dictée/i);
  expect(draftAfterDictation).toMatch(/Deuxième phrase dictée/i);
  expect(draftAfterDictation).toMatch(/Troisième phrase dictée/i);
  // Ordered once each — no rotating duplication from over-pumping.
  expect(draftAfterDictation).toMatch(
    /Première phrase dictée\.?\s*Deuxième phrase dictée\.?\s*Troisième phrase dictée/i,
  );
  expect(draftAfterDictation).not.toMatch(
    /Première phrase dictée[\s\S]*Première phrase dictée/,
  );

  await page.screenshot({
    path: path.join(EVIDENCE, "c01-after-draft.png"),
    fullPage: true,
  });

  await draft.fill(`${draftAfterDictation} Édité clavier.`);
  const draftBeforeSend = await draft.inputValue();
  const send = page.getByTestId("thread-send");
  await expect(send).toBeEnabled({ timeout: 15_000 });
  await send.click();
  await expect(draft).toHaveValue("", { timeout: 60_000 });

  await expect(
    page.getByText(draftBeforeSend.slice(0, Math.min(40, draftBeforeSend.length)), {
      exact: false,
    }).first(),
  ).toBeVisible({ timeout: 60_000 });

  const pilotBubbles = page.getByTestId("nora-msg-pilot");
  await expect
    .poll(async () => pilotBubbles.count(), { timeout: 30_000 })
    .toBeGreaterThanOrEqual(1);

  const matching = await pilotBubbles.filter({ hasText: /Édité clavier/i }).count();
  expect(matching).toBe(1);

  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText(/contact.*fournisseur|provider.*live/i)).toHaveCount(0);

  const oracle = {
    projectId,
    draftBeforeSend,
    messageObserved: true,
    ok: true,
    draftBeforeStop,
    draftAfterDictation,
  };
  fs.writeFileSync(
    path.join(EVIDENCE, "c01-oracle.json"),
    JSON.stringify(oracle, null, 2),
  );
});

test("C02 — Annulation et dictées successives", async ({ page }) => {
  const draft = page.getByTestId("thread-draft");
  await draft.fill("Base C02. ");

  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /phrase dictée/i);
  await page.waitForTimeout(3_000);
  await stopDictationAndWaitMic(page);
  const afterDict1 = await draft.inputValue();
  expect(afterDict1).toMatch(/Base C02/i);
  expect(afterDict1.length).toBeGreaterThan("Base C02. ".length);

  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /phrase dictée/i);
  await page.waitForTimeout(3_000);
  await stopDictationAndWaitMic(page);
  const afterDict2 = await draft.inputValue();
  expect(afterDict2.length).toBeGreaterThan(afterDict1.length);

  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /phrase dictée/i);
  await page.waitForTimeout(500);
  const baselineCancel = afterDict2;
  await page.getByTestId("dictation-cancel").click();
  await expect(page.getByTestId("composer-mic")).toBeVisible({ timeout: 45_000 });
  await expect(page.getByTestId("composer-dictation")).toHaveCount(0);

  await expect(draft).toHaveValue(baselineCancel);
  const evidence = {
    projectId,
    afterDict1,
    afterDict2,
    afterCancel: await draft.inputValue(),
    ok: (await draft.inputValue()) === baselineCancel,
  };
  fs.writeFileSync(
    path.join(EVIDENCE, "c02-oracle.json"),
    JSON.stringify(evidence, null, 2),
  );
  expect(evidence.ok).toBe(true);
});

test("C03 — Protection et finalisation différée", async ({ page, playwright }) => {
  const draft = page.getByTestId("thread-draft");
  const api = page.request;

  const cap = await api.get(
    `/api/projects/${encodeURIComponent(projectId)}/dictation/capability`,
  );
  expect(cap.ok()).toBe(true);
  const capBody = (await cap.json()) as { enabled?: boolean };
  expect(capBody.enabled).toBe(true);

  const unowned = await api.post(
    `/api/projects/00000000-0000-0000-0000-000000000000/dictation/sessions`,
    { data: { baselineDraft: "x", conversationKey: "x" } },
  );
  expect([403, 404]).toContain(unowned.status());

  const qualifyBase =
    process.env.SFIA_QUALIFY_BASE_URL || "http://127.0.0.1:3100";
  const bare = await playwright.request.newContext({ baseURL: qualifyBase });
  const noAuth = await bare.post(
    `/api/projects/${encodeURIComponent(projectId)}/dictation/sessions`,
    { data: { baselineDraft: "probe", conversationKey: projectId } },
  );
  expect([401, 403]).toContain(noAuth.status());
  await bare.dispose();

  await draft.fill("Base C03. ");
  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /Première phrase dictée/i, 60_000);
  await page.getByTestId("dictation-stop").click();
  await expect
    .poll(async () => draft.inputValue(), { timeout: 30_000, intervals: [200, 500, 1000] })
    .toMatch(/phrase dictée/i);
  await expect(page.getByTestId("composer-mic")).toBeVisible({ timeout: 60_000 });
  const delayedDraft = await draft.inputValue();
  expect(delayedDraft).toMatch(/Base C03/i);

  await draft.fill("Baseline C03 late. ");
  const baselineLate = "Baseline C03 late. ";
  const sid = await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /phrase dictée/i, 45_000);
  await page.getByTestId("dictation-cancel").click();
  await expect(page.getByTestId("composer-mic")).toBeVisible({ timeout: 45_000 });
  await expect(draft).toHaveValue(baselineLate);

  const latePush = await api.post(
    `/api/projects/${encodeURIComponent(projectId)}/dictation/sessions/${encodeURIComponent(sid)}/fixture-push`,
    {
      data: {
        event: {
          type: "conversation.item.input_audio_transcription.completed",
          item_id: "fixture_late_fake",
          transcript: "Événement tardif fantôme.",
        },
      },
    },
  );
  expect(latePush.ok()).toBe(true);

  await page.waitForTimeout(800);
  await expect(draft).toHaveValue(baselineLate);
  await expect(page.getByTestId("composer-dictation")).toHaveCount(0);
  await expect(page.getByTestId("composer-mic")).toBeVisible();

  fs.writeFileSync(
    path.join(EVIDENCE, "c03-oracle.json"),
    JSON.stringify(
      {
        projectId,
        delayedDraft,
        baselineLate,
        latePushOk: true,
        sessionId: sid,
        ok: true,
      },
      null,
      2,
    ),
  );
});