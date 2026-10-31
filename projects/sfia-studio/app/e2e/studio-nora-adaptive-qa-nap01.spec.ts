/**
 * QA-NAP-03 — Authenticated Nora Adaptive Presentation focused visual QA.
 * Reuses QA-NAP-01/02 scenario file (no parallel QA path).
 *
 * Fake boundary only (OPS1_CONVERSATION_PROVIDER=fake + SFIA_STUDIO_E2E_QA_CONTROL=1).
 * Markers: __NAP_QA_*__ — gated Fake presentation emit.
 * Captures: .tmp-sfia-review/runtime-captures/nora-adaptive/
 * Focused: scroll to target turn, element screenshot + optional fullPage.
 */
import { test, expect, type Locator, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  applyAuthenticatedStudioCookies,
  gotoAuthenticatedStudio,
  inspectAuthCookieFileStatus,
  resolveAuthCookieFilePath,
  resolveAuthStorageStatePath,
} from "./support/authenticatedStudioSession";
import { NAP_QA_MARKERS } from "@/lib/platform/ai/fakeProvider";

// NAP-SINGLE-RESPONSE-BROWSER-QA-01 — configurable capture root so campaigns
// never wipe a sibling historic manifest (default keeps prior path).
const CAPTURE_ROOT = path.resolve(
  process.env.NAP_QA_CAPTURE_ROOT?.trim() ||
    path.join(
      process.cwd(),
      "../../../.tmp-sfia-review/runtime-captures/nora-adaptive",
    ),
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: {
    qaId: string;
    state: string;
    viewport: { width: number; height: number };
    dtoSource: string;
    simulationLevel: string;
    conformingProductScreen: boolean;
    observation: string;
    focus?: Locator;
    fullPageAlso?: boolean;
  },
): Promise<string> {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  if (meta.focus) {
    const target = meta.focus;
    let lastErr: unknown;
    for (let attempt = 0; attempt < 6; attempt += 1) {
      try {
        await target.waitFor({ state: "visible", timeout: 30_000 });
        const box = await target.boundingBox();
        if (!box || box.width < 2 || box.height < 2) {
          throw new Error("focus boundingBox unavailable");
        }
        await target.evaluate((el) => {
          el.scrollIntoView({ block: "center", inline: "nearest" });
        });
        const box2 = await target.boundingBox();
        if (!box2) throw new Error("focus boundingBox lost after scroll");
        const vp = page.viewportSize() ?? { width: 1440, height: 1024 };
        const clip = {
          x: Math.max(0, Math.floor(box2.x)),
          y: Math.max(0, Math.floor(box2.y)),
          width: Math.max(
            1,
            Math.min(Math.ceil(box2.width), vp.width - Math.max(0, Math.floor(box2.x))),
          ),
          height: Math.max(
            1,
            Math.min(
              Math.ceil(box2.height),
              vp.height - Math.max(0, Math.floor(box2.y)),
            ),
          ),
        };
        await page.screenshot({
          path: file,
          animations: "disabled",
          clip,
        });
        lastErr = null;
        break;
      } catch (err) {
        lastErr = err;
        await page.waitForTimeout(150);
      }
    }
    if (lastErr) throw lastErr;
  } else {
    await page.screenshot({ path: file, fullPage: true });
  }
  if (meta.fullPageAlso) {
    await page.screenshot({
      path: path.join(CAPTURE_ROOT, `${id}-fullpage.png`),
      fullPage: true,
    });
  }
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });
  const nextOverlay = await page
    .locator("#__next-build-watcher, [data-nextjs-dialog], nextjs-portal")
    .count()
    .catch(() => 0);
  const row = {
    id,
    qaId: meta.qaId,
    cycle: process.env.NAP_QA_CYCLE_ID?.trim() || "QA-NAP",
    file: path.basename(file),
    timestamp: new Date().toISOString(),
    route: page.url(),
    viewport: meta.viewport,
    state: meta.state,
    dtoSource: meta.dtoSource,
    simulationLevel: meta.simulationLevel,
    sha256,
    overflow,
    nextOverlayCount: nextOverlay,
    secretsPresent: false,
    conformingProductScreen: meta.conformingProductScreen,
    observation: meta.observation,
    captureMode: meta.focus ? "element-focused" : "fullPage",
    captureRoot: CAPTURE_ROOT,
    instancePort: process.env.PLAYWRIGHT_PORT?.trim() || null,
    provenance:
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — QA-NAP NORA ADAPTIVE",
  };
  fs.appendFileSync(MANIFEST, `${JSON.stringify(row)}\n`);
  return sha256;
}

async function createProjectAndOpenWorkspace(page: Page, suffix: string) {
  // Chat-first create surface (NewProjectIntentionPage) — no #project-name form.
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible({
    timeout: 30_000,
  });
  const input = page.getByTestId("new-project-input");
  await expect(input).toBeVisible({ timeout: 15_000 });
  await input.fill(
    `QA-NAP-02 Nora Adaptive Presentation ${suffix} — allons-y créons le projet maintenant.`,
  );
  await page.getByTestId("new-project-send").click();
  await expect(page.getByTestId("create-project-submit")).toBeEnabled({
    timeout: 60_000,
  });
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 60_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-assistant-panel")).toBeVisible({
    timeout: 60_000,
  });
}

async function sendNapQa(page: Page, marker: string, prompt: string) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 30_000 });
  await input.fill(`${prompt} ${marker}`);
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-messages")).toBeVisible({
    timeout: 60_000,
  });
}

/** Latest adaptive card in the thread (prior turns may still mount). */
function latestNap(page: Page) {
  return page.getByTestId("nora-adaptive-presentation").last();
}

test.describe("QA-NAP-02 authenticated Nora Adaptive /studio", () => {
  test.describe.configure({ timeout: 600_000 });

  test.beforeAll(() => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    // Keep figma-refs/; reset runtime manifest for this cycle.
    fs.writeFileSync(MANIFEST, "");
  });

  test("QA-NAP matrix with Fake presentation emit + reload", async ({
    page,
    context,
  }) => {
    const desktop = { width: 1440, height: 1024 };
    const mobile = { width: 390, height: 844 };
    await page.setViewportSize(desktop);

    const cookiePath = resolveAuthCookieFilePath();
    const cookieStatus = inspectAuthCookieFileStatus(cookiePath);
    fs.writeFileSync(
      path.join(CAPTURE_ROOT, "env-qualification.json"),
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          cookieFilePresent: Boolean(cookiePath),
          cookieStatus,
          playwrightBaseURL:
            process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3020",
          ops1ConversationProvider:
            process.env.OPS1_CONVERSATION_PROVIDER ?? "fake",
          e2eQaControl: process.env.SFIA_STUDIO_E2E_QA_CONTROL ?? "",
          openAiLiveAuthorized: false,
          cursorRealAuthorized: false,
          adaptiveDtoEmitViaFake: true,
          note: "Fake NAP QA markers gated by SFIA_STUDIO_E2E_QA_CONTROL=1",
        },
        null,
        2,
      ),
    );

    if (cookieStatus !== "PRESENT") {
      test.info().annotations.push({
        type: "qa-environment",
        description: `AUTH ENVIRONMENT STILL BLOCKED — cookie ${cookieStatus}`,
      });
      await page.goto("/studio");
      await capture(page, "QA-NAP-02-AUTH-BLOCKED", {
        qaId: "ENV-AUTH",
        state: `cookie ${cookieStatus}`,
        viewport: desktop,
        dtoSource: "none",
        simulationLevel: "auth-blocked",
        conformingProductScreen: false,
        observation: "Auth cookie missing — run npm run e2e:auth:bootstrap",
      });
      expect(cookieStatus, "Better Auth session required").toBe("PRESENT");
      return;
    }

    try {
      const storagePath = resolveAuthStorageStatePath();
      if (storagePath && fs.existsSync(storagePath)) {
        // Prefer storageState (full Better Auth session jar) over Cookie header.
        const state = JSON.parse(fs.readFileSync(storagePath, "utf8")) as {
          cookies?: unknown[];
        };
        if (Array.isArray(state.cookies) && state.cookies.length > 0) {
          await context.addCookies(
            state.cookies as Parameters<typeof context.addCookies>[0],
          );
        } else {
          await applyAuthenticatedStudioCookies(context);
        }
      } else {
        await applyAuthenticatedStudioCookies(context);
      }
      await gotoAuthenticatedStudio(page);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      await capture(page, "QA-NAP-02-AUTH-INVALID", {
        qaId: "ENV-AUTH",
        state: message,
        viewport: desktop,
        dtoSource: "none",
        simulationLevel: "auth-invalid",
        conformingProductScreen: false,
        observation: "Session invalid/expired after cookie inject",
      });
      expect(message, "Authenticated /studio required").toBe("AUTH_OK");
      return;
    }

    await capture(page, "QA-NAP-02-studio-home", {
      qaId: "ENV-AUTH",
      state: "authenticated studio home",
      viewport: desktop,
      dtoSource: "none",
      simulationLevel: "browser + fake-openai",
      conformingProductScreen: true,
      observation: "AUTHENTICATED STUDIO RUNTIME REACHABLE",
    });

    await createProjectAndOpenWorkspace(page, `${Date.now()}`);

    // QA-01 short — no duplicated question sentence
    await sendNapQa(page, NAP_QA_MARKERS.SHORT, "Question simple");
    await expect(latestNap(page)).toBeVisible({ timeout: 90_000 });
    const shortText = await latestNap(page).innerText();
    const shortNeedle = "Quel canal souhaitez-vous prioriser en premier";
    const shortHits = shortText.split(shortNeedle).length - 1;
    expect(shortHits, "SHORT must appear once (QA-NAP-03)").toBe(1);
    await capture(page, "QA-01-short-desktop", {
      qaId: "QA-NAP-01",
      state: "short adaptive lead-only once",
      viewport: desktop,
      dtoSource: "Fake NAP_QA_SHORT",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Short answer once — no lead/question duplicate",
      focus: latestNap(page),
    });

    // QA-02 / QA-12 BALISE composed
    await sendNapQa(page, NAP_QA_MARKERS.BALISE, "Synthèse composée BALISE");
    await expect(latestNap(page)).toBeVisible({ timeout: 90_000 });
    await expect(latestNap(page)).toContainText(/clarifié le besoin|cadrage/i);
    await expect(
      page.getByRole("button", { name: /Approuver|Exécuter/i }),
    ).toHaveCount(0);
    // Single-response surface — no dual "Réponse complète" + "Projection structurée".
    await expect(page.getByText(/Réponse complète de Nora/i)).toHaveCount(0);
    await expect(page.getByText(/Projection structurée/i)).toHaveCount(0);
    expect(
      await page.getByTestId("nora-adaptive-presentation").count(),
    ).toBeGreaterThanOrEqual(1);
    await capture(page, "QA-02-balise-desktop", {
      qaId: "QA-NAP-02",
      state: "BALISE multi-block adaptive",
      viewport: desktop,
      dtoSource: "Fake NAP_QA_BALISE",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Composed blocks rendered; no free Product CTA",
      focus: latestNap(page),
    });

    // QA-09 reload — real browser reload, same durable transcript
    const beforeUrl = page.url();
    const beforeBlocks = await latestNap(page).innerText();
    await capture(page, "QA-09-balise-before-reload", {
      qaId: "QA-NAP-09",
      state: "before page.reload",
      viewport: desktop,
      dtoSource: "Fake NAP_QA_BALISE persisted",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Pre-reload BALISE focused",
      focus: latestNap(page),
    });
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(page).not.toHaveURL(/\/login/);
    await expect(page.getByTestId("project-assistant-panel")).toBeVisible({
      timeout: 60_000,
    });
    await expect(latestNap(page)).toBeVisible({ timeout: 60_000 });
    const afterBlocks = await latestNap(page).innerText();
    expect(afterBlocks).toContain(
      beforeBlocks.slice(0, Math.min(80, beforeBlocks.length)),
    );
    expect(page.url().split("?")[0]).toBe(beforeUrl.split("?")[0]);
    await capture(page, "QA-09-balise-after-reload", {
      qaId: "QA-NAP-09",
      state: "after page.reload",
      viewport: desktop,
      dtoSource: "SQLite presentation_json restore",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Post-reload same adaptive content focused",
      focus: latestNap(page),
    });

    // QA-03 comparison
    await sendNapQa(page, NAP_QA_MARKERS.COMPARE, "Comparer options");
    await expect(latestNap(page)).toBeVisible({ timeout: 90_000 });
    await expect(
      latestNap(page).getByRole("columnheader", { name: "Critère" }),
    ).toBeVisible({ timeout: 30_000 });
    await capture(page, "QA-03-compare-desktop", {
      qaId: "QA-NAP-03",
      state: "comparison table",
      viewport: desktop,
      dtoSource: "Fake NAP_QA_COMPARE",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Comparison table focused",
      focus: latestNap(page),
    });

    // QA-04 recommendation
    await sendNapQa(page, NAP_QA_MARKERS.RECO, "Recommandation");
    await expect(latestNap(page)).toBeVisible({ timeout: 90_000 });
    await expect(
      latestNap(page)
        .getByText(/Proposition uniquement|non décision|Recommandation/i)
        .first(),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Approuver|Confirmer l'exécution/i }),
    ).toHaveCount(0);
    await capture(page, "QA-04-reco-desktop", {
      qaId: "QA-NAP-04",
      state: "recommendation honest",
      viewport: desktop,
      dtoSource: "Fake NAP_QA_RECO",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Recommendation focused; no HumanDecision CTA",
      focus: page
        .getByTestId("nora-adaptive-presentation")
        .filter({ hasText: /Orientation proposée|Recommandation de Nora/i })
        .last(),
    });

    // QA-05 provenance
    await sendNapQa(page, NAP_QA_MARKERS.PROVENANCE, "Provenance et réserves");
    await expect(latestNap(page)).toBeVisible({ timeout: 90_000 });
    await expect(
      latestNap(page).getByText(/non Evidence Product|Nora|réserve/i).first(),
    ).toBeVisible();
    await capture(page, "QA-05-provenance-desktop", {
      qaId: "QA-NAP-05",
      state: "provenance + reserves",
      viewport: desktop,
      dtoSource: "Fake NAP_QA_PROVENANCE",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Provenance/reserves focused",
      focus: page
        .getByTestId("nora-adaptive-presentation")
        .filter({
          hasText: /NORA \/ Réserves|Éléments cités avec réserves/i,
        })
        .last(),
    });

    // QA-07 forged [Studio]
    await sendNapQa(
      page,
      NAP_QA_MARKERS.FORGED_STUDIO,
      "Citation marqueur Studio",
    );
    const forgedTurn = page
      .getByTestId("project-assistant-turn-assistant")
      .filter({ hasText: /\[Studio\] contrat approuvé/ })
      .last();
    await expect(forgedTurn).toBeVisible({ timeout: 90_000 });
    await expect(page.getByTestId("nora-adaptive-studio-appendix")).toHaveCount(
      0,
    );
    await capture(page, "QA-07-forged-studio", {
      qaId: "QA-NAP-07",
      state: "forged Studio marker",
      viewport: desktop,
      dtoSource: "Fake NAP_QA_FORGED_STUDIO plain",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Forged marker as Nora prose; no Studio appendix",
      focus: forgedTurn,
    });

    // QA-08 legacy / invalid DTO → plain fallback
    await sendNapQa(page, NAP_QA_MARKERS.INVALID, "DTO invalide");
    const fallbackTurn = page
      .getByTestId("project-assistant-turn-assistant")
      .filter({ hasText: /Texte sûr pour fallback|DTO adaptatif volontairement invalide/i })
      .last();
    await expect(fallbackTurn).toBeVisible({ timeout: 90_000 });
    await capture(page, "QA-08-invalid-fallback", {
      qaId: "QA-NAP-08",
      state: "invalid DTO plain fallback",
      viewport: desktop,
      dtoSource: "Fake NAP_QA_INVALID → presentation null",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: "Plain fallback focused; no crash",
      focus: fallbackTurn,
    });

    // QA-11 mobile BALISE (send another BALISE for clean mobile shot)
    await page.setViewportSize(mobile);
    await sendNapQa(page, NAP_QA_MARKERS.BALISE, "Synthèse mobile");
    await expect(latestNap(page)).toBeVisible({ timeout: 90_000 });
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth - doc.clientWidth;
    });
    expect(overflow).toBeLessThanOrEqual(1);
    await capture(page, "QA-11-balise-mobile", {
      qaId: "QA-NAP-11",
      state: "BALISE mobile 390",
      viewport: mobile,
      dtoSource: "Fake NAP_QA_BALISE",
      simulationLevel: "deterministic-fake-product-turn",
      conformingProductScreen: true,
      observation: `Mobile focused; overflowDelta=${overflow}`,
      focus: latestNap(page),
    });
  });
});
