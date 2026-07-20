import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-a",
);

const captures = [
  {
    path: "/nouvelle-demande?vs=VS-UX-01",
    name: "inc-a-nouvelle-demande",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-demo-banner")).toBeVisible();
      await expect(page.getByTestId("vs-id-strip")).toContainText("req-vs-poc-001");
    },
  },
  {
    path: "/nouvelle-demande?vs=VS-UX-03",
    name: "inc-a-qualification-proposee",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(
        page.getByRole("heading", { name: /Qualification proposée/i }),
      ).toBeVisible();
      await expect(page.getByText(/Candidat GPT/i).first()).toBeVisible();
    },
  },
  {
    path: "/decision?vs=VS-UX-04",
    name: "inc-a-gate-morris",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-gate-GO")).toBeVisible();
      await expect(page.getByTestId("vs-gate-NO-GO")).toBeVisible();
      await expect(page.getByTestId("vs-gate-CORRIGER")).toBeVisible();
      await expect(page.getByTestId("vs-gate-ABANDONNER")).toBeVisible();
    },
  },
  {
    path: "/cycle-actif?vs=VS-UX-05",
    name: "inc-a-execution",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-stop-execution")).toBeVisible();
    },
  },
  {
    path: "/cycle-actif?vs=VS-UX-06",
    name: "inc-a-rapport",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByText(/CursorExecutionReport/i)).toBeVisible();
    },
  },
  {
    path: "/cycle-actif?vs=VS-UX-08",
    name: "inc-a-verdict",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByText(/Candidat GPT/i).first()).toBeVisible();
    },
  },
  {
    path: "/decision?vs=VS-UX-09",
    name: "inc-a-decision-finale",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-final-CLOTURER")).toBeVisible();
    },
  },
  {
    path: "/synthese?vs=VS-UX-10",
    name: "inc-a-cloture",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-cycle-summary")).toBeVisible();
      await expect(page.getByTestId("vs-no-mvp-claim")).toBeVisible();
      await expect(page.getByText(/Portefeuille des cycles/i)).toHaveCount(0);
    },
  },
  {
    path: "/decision?vs=VS-UX-VAR-GO-INVALID",
    name: "inc-a-go-invalide",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-variant-banner")).toContainText(
        /GO invalide/i,
      );
    },
  },
];

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("Increment A visual & functional", () => {
  test("only four primary routes remain navigable", async ({ page }) => {
    await page.goto("/synthese?vs=VS-UX-10");
    const rail = page.getByTestId("utility-rail");
    for (const label of [
      "Vue synthèse",
      "Nouvelle demande",
      "Cycle actif",
      "Décision Morris",
    ]) {
      await expect(rail.getByRole("link", { name: label })).toBeVisible();
    }
    await expect(rail.getByLabel("Paramètres (désactivé)")).toBeDisabled();
  });

  test("demo switcher reaches ten states", async ({ page }) => {
    await page.goto("/nouvelle-demande?vs=VS-UX-01");
    const switcher = page.getByTestId("vs-demo-switcher");
    await expect(switcher).toBeVisible();
    const values = await switcher.locator("option").evaluateAll((opts) =>
      opts.map((o) => (o as HTMLOptionElement).value),
    );
    for (const id of [
      "VS-UX-01",
      "VS-UX-02",
      "VS-UX-03",
      "VS-UX-04",
      "VS-UX-05",
      "VS-UX-06",
      "VS-UX-07",
      "VS-UX-08",
      "VS-UX-09",
      "VS-UX-10",
      "VS-UX-VAR-LOADING",
      "VS-UX-VAR-ERROR",
      "VS-UX-VAR-STOP",
      "VS-UX-VAR-GO-INVALID",
    ]) {
      expect(values).toContain(id);
    }
  });

  test("abandon confirmation is keyboard reachable", async ({ page }) => {
    await page.goto("/decision?vs=VS-UX-04");
    await page.getByTestId("vs-gate-ABANDONNER").focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByTestId("vs-abandon-confirm");
    await expect(dialog).toBeVisible();
    await page.getByTestId("vs-abandon-confirm-yes").focus();
    await expect(page.getByTestId("vs-abandon-confirm-yes")).toBeFocused();
  });

  test("GPT counter shows À définir and no-retry", async ({ page }) => {
    await page.goto("/nouvelle-demande?vs=VS-UX-02");
    await expect(page.getByTestId("vs-gpt-counter").first()).toContainText(
      "À définir",
    );
    await expect(page.getByTestId("vs-no-retry").first()).toContainText(
      "Aucun retry automatique",
    );
  });

  for (const capture of captures) {
    test(`capture ${capture.name}`, async ({ page }) => {
      const errors: string[] = [];
      const requests: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      page.on("request", (req) => {
        const url = req.url();
        if (/openai|api\.openai|anthropic/i.test(url)) requests.push(url);
      });

      await page.goto(capture.path);
      await capture.assert(page);
      await page.screenshot({
        path: path.join(screenshotDir, `${capture.name}.png`),
        fullPage: true,
      });
      expect(requests).toEqual([]);
      const critical = errors.filter(
        (e) =>
          !/Download the React DevTools|Hydration|Extra attributes/i.test(e),
      );
      expect(critical).toEqual([]);
    });
  }
});
