/**
 * ML3 dictation qualify — real ComposerDictationControl + fixture transport.
 *
 * Requires qualify server (`npm run qualify:start`) with vars (qualify-session.env or env):
 *   STUDIO_LANE=DEV
 *   STUDIO_DEV_TEST_LOGIN=1
 *   SFIA_COMPOSER_DICTATION=1
 *   SFIA_DICTATION_TRANSPORT=fixture
 *   SFIA_DICTATION_SUBSTITUTED=1
 * Optional: SFIA_DICTATION_HARNESS_PROJECT_ID or NEXT_PUBLIC_SFIA_DICTATION_HARNESS_PROJECT_ID
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
  "../../.sfia-evidence/ml3-composer-dictation-integrated",
);

test.describe.configure({ mode: "serial" });
test.setTimeout(120_000);

let harnessProjectId = (process.env.SFIA_DICTATION_HARNESS_PROJECT_ID || "").trim();

async function ensureQualifyServer(request: import("@playwright/test").APIRequestContext) {
  const res = await request.get("/login").catch(() => null);
  if (!res || !res.ok()) return false;
  return true;
}

async function login(page: import("@playwright/test").Page) {
  await page.goto("/login", { waitUntil: "domcontentloaded" });
  if (page.url().includes("/login")) {
    const testBtn = page.getByRole("button", {
      name: /Pilote A|connexion de test|test login|entrer en session/i,
    });
    if (await testBtn.count()) {
      await testBtn.first().click();
    } else {
      const auto = await page.request.post("/api/dev/auto-session");
      if (!auto.ok()) throw new Error("auto-session failed");
      await page.goto("/portfolio");
    }
  }
  await page.waitForURL(/\/(portfolio|projects|preparations)/, { timeout: 60_000 });
}

test.beforeAll(async () => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

test("ML3-DICT — harness mounts and enters listening (fixture transport)", async ({
  page,
  request,
}, testInfo) => {
  const serverUp = await ensureQualifyServer(request);
  if (!serverUp) {
    testInfo.skip(true, "qualify server not reachable — run npm run qualify:start");
    return;
  }

  await login(page);

  if (!harnessProjectId) {
    await openNewPreparation(page);
    const name = uniqueProjectName("DictHarness");
    await constituteAndCreateProject(page, {
      name,
      summary: "ML3 dictation qualify harness",
    });
    const m = page.url().match(/\/projects\/([^/?#]+)/);
    harnessProjectId = m?.[1] ?? "";
  }
  if (!harnessProjectId) {
    testInfo.skip(true, "no projectId — set SFIA_DICTATION_HARNESS_PROJECT_ID");
    return;
  }

  await page.addInitScript(() => {
    const orig = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = async (constraints) => {
      if (!constraints?.audio) return orig(constraints as MediaStreamConstraints);
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const dest = ctx.createMediaStreamDestination();
      osc.frequency.value = 440;
      osc.connect(dest);
      osc.start();
      const track = dest.stream.getAudioTracks()[0];
      if (track) track.enabled = true;
      return dest.stream;
    };
  });

  const probe = await request.post(
    `/api/projects/${encodeURIComponent(harnessProjectId)}/dictation/sessions`,
    {
      data: {
        baselineDraft: "qualify probe",
        conversationKey: harnessProjectId,
      },
    },
  );
  if (probe.status() === 403) {
    const body = (await probe.json().catch(() => ({}))) as { code?: string };
    if (body.code === "FLAG_OFF") {
      testInfo.skip(true, "SFIA_COMPOSER_DICTATION off on qualify server");
      return;
    }
  }

  await page.goto(
    `/dev/dictation-harness?projectId=${encodeURIComponent(harnessProjectId)}`,
    { waitUntil: "domcontentloaded" },
  );
  if (await page.getByRole("heading", { name: /introuvable/i }).count()) {
    testInfo.skip(
      true,
      "harness route missing from qualify build — run npm run qualify:build && qualify:start",
    );
    return;
  }
  await expect(page.getByTestId("dictation-harness")).toBeVisible({ timeout: 30_000 });

  const forbidden = page.getByTestId("dictation-harness-forbidden");
  if (await forbidden.count()) {
    testInfo.skip(true, "harness forbidden on this lane");
    return;
  }

  const mic = page.getByTestId("composer-mic");
  await expect(mic).toBeVisible({ timeout: 15_000 });
  await mic.click();

  const listening = page.getByTestId("composer-dictation");
  await expect(listening).toBeVisible({ timeout: 45_000 });

  const toggle = page.getByTestId("dictation-toggle-text");
  if (await toggle.isVisible()) {
    await toggle.click();
  }

  const stop = page.getByTestId("dictation-stop");
  await expect(stop).toBeEnabled({ timeout: 30_000 });
  await stop.click();

  await expect(mic).toBeVisible({ timeout: 45_000 });

  const draft = page.getByTestId("dictation-harness-draft");
  await expect(draft).toBeVisible();

  fs.writeFileSync(
    path.join(EVIDENCE, "ml3-dict-integrated.json"),
    JSON.stringify(
      {
        at: new Date().toISOString(),
        projectId: harnessProjectId,
        url: page.url(),
        ok: true,
      },
      null,
      2,
    ),
  );

  await page.screenshot({
    path: path.join(EVIDENCE, "ml3-dict-harness.png"),
    fullPage: true,
  });
});