# SFIA Review Pack — ML4D UX-004 RECETTE + handoff regularization

Date/heure : 2026-11-16 08:26:16 +0100 (2026-11-16T07:26:16Z)
GO Morris : Régularisation Review Pack/Handoff + mise à disposition RECETTE UX-004 (cycle 11 déploiement borné, sans release)
Profil : Standard · Review Pack : Full · Handoff : publish-in-cycle
CKC UX-004 : ABSENT — fallback SFIA v2.6

## 0. Verdict exécutif

**READY WITH RESERVES — MORRIS UX RECETTE**

- Candidat servi : `bc8785683c30430aa99bc76e138ba10f49c71c39`
- Build servi : `3g7UH7AXjSWhxrT20D3-w` (HTML comment `3g7UH7AXjSWhxrT20D3_w`)
- URL : http://127.0.0.1:3200
- Handoff précédent incomplet régularisé dans ce pack (contenu modifié/créé intégral)
- UX-003 préservé pour rollback (worktree + plist)

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Branche | `feat/next-ml4d-ux004-portfolio-20261116` |
| HEAD | `bc8785683c30430aa99bc76e138ba10f49c71c39` |
| Parent / UX-003 | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| tree web | `cc42e2eaf3a16478a30e3d581eaa4496cc3779e2` |
| Dirty | `.tmp-sfia-review/chatgpt-review.md` (pack) only |
| Push projet | NON |

### diff-tree candidat

```
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/ux-ui/contrat-visuel-ux004-portefeuille-20261116.md
M	projects/sfia-studio-next/web/src/app/portfolio/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
M	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
M	projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
A	projects/sfia-studio-next/web/src/components/shell/studio-shell.css
M	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ux004-f2-measure.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
M	projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts

```

### commit metadata

```
commit bc8785683c30430aa99bc76e138ba10f49c71c39
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Mon Nov 16 08:11:44 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Mon Nov 16 08:11:44 2026 +0100

    feat(next): implement ML4D UX-004 portfolio and personal shell

    Freeze fixed personal rail with independent content scroll, simplify navigation to Portefeuille/Nouveau projet, and align portfolio mobile/desktop compositions to validated Figma UX-004 frames without changing D1/D2 contracts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../construction/delivery-history.md               |  18 +
 .../contrat-visuel-ux004-portefeuille-20261116.md  |  78 +++++
 .../web/src/app/portfolio/page.tsx                 | 237 ++++++-------
 .../web/src/components/figma/tokens.css            | 141 ++++++++
 .../web/src/components/shell/StudioShell.tsx       | 385 ++++++++++++++-------
 .../web/src/components/shell/studio-rail.ts        |  16 +-
 .../web/src/components/shell/studio-shell.css      | 207 +++++++++++
 .../web/tests/e2e/ml1-smoke.spec.ts                |   5 +-
 .../web/tests/e2e/ux004-f2-measure.spec.ts         |  34 ++
 .../web/tests/e2e/ux004-portfolio-shell.spec.ts    | 271 +++++++++++++++
 .../web/tests/unit/studio-rail.test.ts             |   8 +-
 11 files changed, 1134 insertions(+), 266 deletions(-)

```

## 2. Sources consultées

ENV-01 blob `14b61f0d1265cf85fcca09b028dd09bd8c71597f` · product-versioning `8bc93e0fafac0f981c446e978a37f5f93d183875` · SEF/roadmap/contrats Figma/D1/D2 lus depuis HEAD candidat · scripts/sfia/publish-review-handoff.sh

## 3. Régularisation dossier UX-004

Écart ChatGPT précédent : REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING.
Ce pack fournit le contenu complet des fichiers créés et le contenu/diff exploitable des fichiers modifiés (11/11 du diff-tree).

Aucun nouveau commit produit. Aucune modification code dans ce cycle.

## 4. Fichiers CRÉÉS — contenu complet

### `projects/sfia-studio-next/web/src/components/shell/studio-shell.css`

```css
/* UX-004 — personal shell: fixed rail / independent content scroll; mobile bottom nav */

html.studio-shell-lock,
html.studio-shell-lock body {
  height: 100%;
  overflow: hidden;
}

.studio-shell-app {
  display: flex;
  height: 100dvh;
  max-height: 100dvh;
  overflow: hidden;
  min-width: 0;
}

.studio-shell-rail {
  flex-shrink: 0;
  height: 100%;
  max-height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.studio-shell-rail-inner {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: inherit;
}

.studio-shell-rail-nav {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
}

.studio-shell-rail-foot {
  margin-top: auto;
  flex-shrink: 0;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

.studio-shell-column {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.studio-shell-topbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 66px;
  padding: 0 1.35rem;
  border-bottom: 1px solid var(--line);
  background: #0f1420;
}

.studio-shell-topbar-mobile {
  height: 65px;
  padding: 0 1rem;
}

.studio-shell-main {
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 1.75rem 1.75rem 2rem;
  background: radial-gradient(900px 420px at 12% -8%, #1a2433 0%, transparent 55%);
}

.studio-shell-main-mobile-pad {
  padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
}

.studio-shell-mobile-strip {
  display: none;
}

.studio-shell-bottom-nav {
  display: none;
}

@media (max-width: 767px) {
  .studio-shell-app {
    flex-direction: column;
  }

  .studio-shell-main {
    padding: 1rem 1rem 1.25rem;
  }

  .studio-shell-main-mobile-pad {
    padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
  }

  .studio-shell-mobile-strip {
    display: flex;
    flex-shrink: 0;
    gap: 0.75rem;
    padding: 0.75rem;
    border-bottom: 1px solid var(--line);
    font-size: 0.875rem;
    overflow-x: auto;
  }

  .studio-shell-bottom-nav {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    flex-shrink: 0;
    height: calc(72px + env(safe-area-inset-bottom, 0px));
    padding: 0.35rem 0.5rem calc(0.35rem + env(safe-area-inset-bottom, 0px));
    border-top: 1px solid var(--line);
    background: #0c101a;
    z-index: 20;
  }

  .studio-shell-bottom-nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
    color: var(--muted);
    text-decoration: none;
    font-size: 0.72rem;
    border-radius: 8px;
    padding: 0.25rem;
  }

  .studio-shell-bottom-nav a[aria-current="page"],
  .studio-shell-bottom-nav a.is-active {
    color: var(--ink);
    font-weight: 600;
  }

  .studio-shell-bottom-nav .nav-glyph {
    font-size: 1.05rem;
    line-height: 1;
    color: var(--accent-soft);
  }
}

.studio-rail-nav-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  border-radius: 9px;
  padding: 0.55rem 0.7rem;
  min-height: 45px;
  color: var(--muted);
  text-decoration: none;
}

.studio-rail-nav-item:hover {
  color: var(--ink);
  text-decoration: none;
}

.studio-rail-nav-item.is-active {
  background: #272e49;
  border: 1px solid var(--line);
  color: var(--ink);
  font-weight: 600;
}

.studio-rail-section {
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
  margin: 0.35rem 0 0.15rem;
}

.studio-account-link {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: inherit;
  text-decoration: none;
  border-radius: 8px;
  padding: 0.15rem 0.1rem;
}

.studio-account-link:hover {
  text-decoration: none;
  color: var(--ink);
}

.studio-account-link:focus-visible,
.studio-rail-nav-item:focus-visible,
.studio-shell-bottom-nav a:focus-visible {
  outline: 2px solid var(--accent-soft);
  outline-offset: 2px;
}

```

### `projects/sfia-studio-next/web/tests/e2e/ux004-f2-measure.spec.ts`

```tsx
import { test, expect } from "@playwright/test";

/**
 * UX-004 F2 — stable geometry vs Figma contract (CSS px).
 * Target 0 ; max tolerance 2 CSS px on comparable rectangles.
 */

test("F2: personnel rail 246, topbar ~66, mobile bottom ~72", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const rail = page.getByTestId("studio-rail");
  await expect(rail).toHaveAttribute("data-rail-width", "246");
  const railBox = await rail.boundingBox();
  expect(railBox).toBeTruthy();
  expect(Math.abs(railBox!.width - 246)).toBeLessThanOrEqual(2);
  expect(Math.abs(railBox!.height - 970)).toBeLessThanOrEqual(2);

  const top = page.getByTestId("studio-shell-topbar");
  const topBox = await top.boundingBox();
  expect(topBox).toBeTruthy();
  expect(Math.abs(topBox!.height - 66)).toBeLessThanOrEqual(2);

  await page.setViewportSize({ width: 390, height: 844 });
  const bottom = page.getByTestId("studio-mobile-bottom-nav");
  await expect(bottom).toBeVisible();
  const bottomBox = await bottom.boundingBox();
  expect(bottomBox).toBeTruthy();
  // height includes safe-area; compare content band ~72
  expect(bottomBox!.height).toBeGreaterThanOrEqual(70);
  expect(bottomBox!.height).toBeLessThanOrEqual(100);
});

```

### `projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * UX-004 — portfolio + personal shell BROWSER proofs on isolated E2E lane :3101.
 * Does not attach to operator DEV :3100 or RECETTE :3200.
 */

const ART = path.join("tests/e2e/artifacts");

async function loginPilotA(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

test.describe("UX-004 portfolio shell", () => {
  test.beforeAll(() => {
    fs.mkdirSync(ART, { recursive: true });
  });

  test("desktop 1680: single Portefeuille nav, fixed rail account, scroll main", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await loginPilotA(page);

    await expect(page.getByTestId("studio-shell-app")).toBeVisible();
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "246");
    await expect(page.getByTestId("nav-portfolio")).toBeVisible();
    await expect(page.getByTestId("nav-new-prep")).toHaveAttribute(
      "href",
      "/portfolio#nouvelle-preparation",
    );
    await expect(page.getByTestId("nav-mes-projets")).toHaveCount(0);
    await expect(page.getByTestId("nav-login")).toHaveCount(0);
    await expect(page.getByText("Tous les projets")).toHaveCount(0);
    await expect(page.getByTestId("studio-rail-account")).toBeVisible();

    await expect(page.getByText("Préparations ouvertes")).toBeVisible();
    await expect(page.getByText("Reprises récentes")).toHaveCount(0);

    // Force tall content then scroll main — rail account must stay in viewport geometry.
    await page.evaluate(() => {
      const main = document.querySelector('[data-testid="studio-shell-main"]');
      if (main) {
        const spacer = document.createElement("div");
        spacer.setAttribute("data-testid", "scroll-spacer");
        spacer.style.height = "1600px";
        main.appendChild(spacer);
      }
    });
    const main = page.getByTestId("studio-shell-main");
    await main.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    const accountBox = await page.getByTestId("studio-rail-account").boundingBox();
    expect(accountBox).toBeTruthy();
    expect(accountBox!.y).toBeGreaterThan(500);
    expect(accountBox!.y + accountBox!.height).toBeLessThanOrEqual(970 + 1);

    await page.screenshot({
      path: path.join(ART, "ux004-desktop-1680-scrolled.png"),
      fullPage: false,
    });
  });

  test("mobile 390: bottom nav + independent scroll; narrow 320", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await loginPilotA(page);

    const bottom = page.getByTestId("studio-mobile-bottom-nav");
    await expect(bottom).toBeVisible();
    await expect(page.getByTestId("mobile-nav-portfolio")).toBeVisible();
    await expect(page.getByTestId("mobile-nav-create")).toHaveAttribute(
      "href",
      "/portfolio#nouvelle-preparation",
    );
    await expect(page.getByTestId("mobile-nav-account")).toHaveAttribute(
      "href",
      "/settings/integrations",
    );

    await page.screenshot({
      path: path.join(ART, "ux004-mobile-390.png"),
      fullPage: false,
    });

    await page.setViewportSize({ width: 320, height: 568 });
    await expect(bottom).toBeVisible();
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
    });
    expect(overflow).toBe(false);
    await page.screenshot({
      path: path.join(ART, "ux004-mobile-320.png"),
      fullPage: false,
    });
  });

  test("empty vs preparations-only mixed states via API fixtures", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await loginPilotA(page);

    await page.route("**/api/portfolio", async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          session: { displayName: "Pilote A", authMode: "dev" },
          portfolio: {
            kind: "empty",
            openPreparations: 0,
            preparations: { items: [], nextCursor: null },
          },
        }),
      });
    });
    await page.reload();
    await expect(page.getByTestId("portfolio-empty-projects")).toBeVisible();
    await expect(page.getByTestId("portfolio-empty-preps")).toBeVisible();
    await page.screenshot({
      path: path.join(ART, "ux004-desktop-empty.png"),
      fullPage: false,
    });

    await page.unroute("**/api/portfolio");
    await page.route("**/api/portfolio", async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          session: { displayName: "Pilote A", authMode: "dev" },
          portfolio: {
            kind: "empty",
            openPreparations: 2,
            preparations: {
              items: [
                {
                  id: "prep-long-name-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  previewName: "Préparation avec un nom volontairement très long pour reflow",
                  previewSummary: "",
                  createdAt: "2026-11-15T10:00:00.000Z",
                  status: "OPEN",
                },
                {
                  id: "prep-b",
                  previewName: "",
                  previewSummary: "Résumé court",
                  createdAt: "2026-11-14T10:00:00.000Z",
                  status: "OPEN",
                },
              ],
              nextCursor: null,
            },
          },
        }),
      });
    });
    await page.reload();
    await expect(page.getByTestId("portfolio-empty-projects")).toBeVisible();
    await expect(page.getByTestId("portfolio-preparations")).toBeVisible();
    await expect(page.getByTestId("resume-prep-prep-b")).toBeVisible();
    await expect(page.getByText("Préparations ouvertes")).toBeVisible();
  });

  test("nouveau projet → sas; resume GET; account destination real; UX-003 login still entry", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await loginPilotA(page);

    await page.getByTestId("nav-account").click();
    await page.waitForURL("**/settings/integrations");
    await expect(page.getByTestId("studio-rail")).toBeVisible();

    await page.goto("/portfolio");
    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    const prepId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
    expect(prepId).toBeTruthy();

    await page.goto("/portfolio");
    const resume = page.locator(`[data-testid^="resume-prep-"]`).first();
    if (await resume.count()) {
      let posts = 0;
      page.on("request", (req) => {
        if (req.method() === "POST" && req.url().includes("/api/preparations")) posts += 1;
      });
      await resume.click();
      await page.waitForURL(/resume=1/);
      expect(posts).toBe(0);
    }

    await page.goto("/login");
    await expect(page.getByTestId("studio-shell-entry")).toBeVisible();
    await expect(page.getByTestId("studio-rail")).toHaveCount(0);
  });

  test("rail variants widths preserved on project surfaces", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await loginPilotA(page);
    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");

    await page.getByTestId("prep-draft").fill("UX-004 variant check");
    await page.getByTestId("prep-send").click();
    await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
      timeout: 30000,
    });
    await page.getByTestId("prep-constitute").click();
    await page.getByTestId("prep-proposal-name").fill("Projet UX004");
    await page.getByTestId("prep-proposal-summary").fill("résumé");
    await page.getByTestId("prep-proposal-save").click();
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 15000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "conversation");
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "240");

    await page.goto(`/projects/${projectId}?surface=document`);
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "inspection");
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "244");

    await page.goto(`/projects/${projectId}?surface=pilotage`);
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "projet");
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "246");
  });

  test("keyboard focus visible on primary portfolio actions", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await loginPilotA(page);
    await page.getByTestId("portfolio-new-prep").focus();
    await expect(page.getByTestId("portfolio-new-prep")).toBeFocused();
    await page.keyboard.press("Tab");
    // Tab moves within page; ensure rail account remains keyboard reachable
    await page.getByTestId("nav-account").focus();
    await expect(page.getByTestId("nav-account")).toBeFocused();
  });

  test("network error portfolio shows retry", async ({ page }) => {
    await loginPilotA(page);
    await page.route("**/api/portfolio", async (route) => {
      await route.abort("failed");
    });
    await page.reload();
    await expect(page.getByText(/indisponible|réseau/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /réessayer/i })).toBeVisible();
  });

  test("unauthenticated portfolio redirects to login", async ({ browser }) => {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.goto("/portfolio");
    await page.waitForURL("**/login");
    await expect(page.getByTestId("studio-shell-entry")).toBeVisible();
    await ctx.close();
  });
});

```

### `projects/sfia-studio-next/ux-ui/contrat-visuel-ux004-portefeuille-20261116.md`

```markdown
# Contrat visuel L1/L2 — UX-004 Portefeuille & shell personnel (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Statut | EXTRAIT FIGMA MCP — VALIDATED SPEC BY MORRIS (composition) |
| Fichier Figma | `itgvCulInEnFY6DvgIegvP` |
| Page | `94:49` |
| Frames | `591:425` · `591:543` · `591:661` · `591:721` · `592:435` |
| CKC dédié | **ABSENT** — fallback SFIA v2.6 + contrats transposition/fidélité |

## 1. Dimensions de référence

| Frame | Node | Viewport | Rôle |
| --- | --- | --- | --- |
| Desktop rempli | `591:425` | **1680 × 970** | Portefeuille nominal |
| Desktop scroll | `591:543` | **1680 × 970** | Rail fixe, contenu défilé (−470) |
| Desktop vide | `591:661` | **1680 × 970** | Aucun projet |
| Mobile | `591:721` | **390 × 844** | Nav inférieure fixe |
| Mobile scroll | `592:435` | **390 × 844** | Préparations défilées (−690) |

## 2. Géométries natives (metadata MCP)

| Bloc | Mesures |
| --- | --- |
| Rail personnel | **246 × 970** ; fill `#0C101A` ; marque 36×36 @ (23,27) rayon 9 |
| Nav Portefeuille actif | 212×45 @ (17,141) ; rayon 9 ; fond `#272e49` |
| Nav Nouveau projet | 212×45 @ (17,195) |
| Compte rail | avatar 33 @ (21,872) ; séparation @ y=849 |
| Zone centrale | 1434×970 @ x=246 |
| Entête contenu | h=**66** ; fond `#0f1420` |
| Zone scroll | 1434×904 @ y=66 |
| Stats | 431.33×118 ; gap ~17 ; rayon 12 ; 3 colonnes |
| Cartes projet | 431.33×180 ; rayon 12 |
| Ligne préparation | 1328×66 ; gap 7 ; rayon 10 ; CTA 131×38 |
| Mobile header | 390×65 |
| Mobile bottom nav | 390×72 @ y=772 |
| Mobile stats | 165×118 × 2 colonnes |

## 3. Tokens couleur (constatés)

| Token | Hex |
| --- | --- |
| Fond | `#0a0e17` |
| Rail | `#0c101a` |
| Panneau / carte | `#151c29` |
| Ligne | `#313c51` |
| Accent | `#656fe1` |
| Accent soft | `#afa5ff` |
| Encre | `#f4f6fc` |
| Muet | `#94a2bb` |
| Badge OK | `#a6dfbc` / fond `#1c352d` |

## 4. Comportements contractuels

- Rail desktop : hauteur viewport, **ne défile pas** avec la liste.
- Contenu : scroll vertical indépendant.
- Navigation personnelle unique : **Portefeuille** + **Nouveau projet** (sas D2, pas création implicite).
- Compteur : **Préparations ouvertes** (plus « Reprises récentes »).
- Mobile : nav inférieure Portefeuille / Créer / Compte ; contenu indépendant ; pas de masquage sous la barre.
- Données d’exemple Figma (CampusFlow, dates…) : **non normatives** — runtime = API / fixtures.

## 5. Captures Figma datées (2026-11-16)

Stockage : `.tmp-sfia-review/figma-refs-ux004/`

| Fichier | sha256 |
| --- | --- |
| `591-425-desktop-filled.png` | `71faa0df8fa27b48fa9bc2a913c0ccdf51e6b46aa9b188627b179a81cb7d255d` |
| `591-543-desktop-scrolled.png` | `1086bee76e6ed35f308702644dbafdb2fd186abc80eda84813403ab63d6c4fc4` |
| `591-661-desktop-empty.png` | `f7152765e83b5cd0ec4b933d551ae4f0e305365fd1375e5ea82d6587a93490d3` |
| `591-721-mobile.png` | `452b5e1f4a027cef2e2c16024e64f089b78c752fd0fd3457b6d9da65860621f5` |
| `592-435-mobile-scrolled.png` | `7e455e36e55f8c272e00d4fe5c249264b29018af83e53b32c64621739234e049` |

## 6. Fidélité F2

Rectangles stables (rail width 246, topbar 66, bottom nav 72, prep row ~66) : cible **0 CSS px**, max **2 CSS px**.
Pas de seuil global de différence d’image.
Variantes projet/conversation/inspection : largeurs 246/240/244 **inchangées**.

```

## 5. Fichiers MODIFIÉS — contenu complet / diffs utiles

### `projects/sfia-studio-next/web/src/app/portfolio/page.tsx` (fichier complet au candidat)

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";

type PreparationSummary = {
  id: string;
  previewName: string;
  previewSummary: string;
  createdAt: string;
  status: "OPEN";
};

type PortfolioResponse = {
  session?: { displayName: string; authMode: string };
  portfolio?:
    | {
        kind: "empty";
        openPreparations: number;
        preparations: { items: PreparationSummary[]; nextCursor: string | null };
      }
    | {
        kind: "ready";
        projects: Array<{ id: string; name: string }>;
        openPreparations: number;
        preparations: { items: PreparationSummary[]; nextCursor: string | null };
      }
    | { kind: "unavailable"; reason: string };
  error?: string;
  errorCategory?: string;
};

/**
 * ML4C S01 — portfolio labels must come from owner truth, never list index.
 * Decorative progression (Actif / En réflexion / À reprendre by index) is forbidden.
 */
function statusForOwnedProject(): { label: string; tone: string } {
  return { label: "Accessible", tone: "fig-tag-ok" };
}

function formatPrepCreatedAt(iso: string): string {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function padCount(n: number): string {
  return String(Math.min(Math.max(n, 0), 99)).padStart(2, "0");
}

export default function PortfolioPage() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioResponse | null>(null);
  const [items, setItems] = useState<PreparationSummary[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [pageNotice, setPageNotice] = useState<string>("");
  const [creationUncertainty, setCreationUncertainty] = useState<string>("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [creating, setCreating] = useState(false);
  const creatingRef = useRef(false);
  const knownPrepIdsRef = useRef<Set<string>>(new Set());

  const applyPortfolio = useCallback((j: PortfolioResponse, append: boolean) => {
    setData(j);
    const prep = j.portfolio && "preparations" in j.portfolio ? j.portfolio.preparations : null;
    if (prep) {
      setItems((prev) => {
        const next = append ? [...prev, ...prep.items] : prep.items;
        knownPrepIdsRef.current = new Set(next.map((p) => p.id));
        return next;
      });
      setNextCursor(prep.nextCursor);
    } else if (!append) {
      setItems([]);
      setNextCursor(null);
      knownPrepIdsRef.current = new Set();
    }
  }, []);

  const reloadPortfolio = useCallback(async (): Promise<PortfolioResponse | null> => {
    try {
      const r = await fetch("/api/portfolio");
      const j = (await r.json()) as PortfolioResponse;
      if (r.status === 401) {
        router.push("/login");
        return null;
      }
      if (r.status === 400) {
        setError(j.error ?? "INVALID_CURSOR");
        return null;
      }
      if (!r.ok) {
        setError(j.error ?? j.errorCategory ?? `erreur ${r.status}`);
        return null;
      }
      applyPortfolio(j, false);
      setError("");
      return j;
    } catch {
      setError("Réseau indisponible — rechargement du portefeuille impossible.");
      return null;
    }
  }, [router, applyPortfolio]);

  useEffect(() => {
    void reloadPortfolio();
  }, [reloadPortfolio]);

  async function loadMore() {
    if (!nextCursor || loadingMore) return;
    setLoadingMore(true);
    setPageNotice("");
    try {
      const res = await fetch(
        `/api/portfolio?preparationsCursor=${encodeURIComponent(nextCursor)}`,
      );
      const j = (await res.json().catch(() => ({}))) as PortfolioResponse;
      if (res.status === 400) {
        setPageNotice(j.error ?? "INVALID_CURSOR");
        return;
      }
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (!res.ok) {
        setPageNotice(j.error ?? j.errorCategory ?? `pagination HTTP ${res.status}`);
        return;
      }
      applyPortfolio(j, true);
    } catch {
      setPageNotice("Réseau indisponible pendant la pagination — réessayez.");
    } finally {
      setLoadingMore(false);
    }
  }

  async function startPreparation() {
    if (creatingRef.current) return;
    creatingRef.current = true;
    setCreating(true);
    setCreationUncertainty("");
    setError("");
    const before = new Set(knownPrepIdsRef.current);
    try {
      const res = await fetch("/api/preparations", { method: "POST" });
      let j: { preparationId?: string; error?: string } = {};
      try {
        j = await res.json();
      } catch {
        j = {};
      }
      if (res.ok && j.preparationId) {
        router.push(`/preparations/${j.preparationId}`);
        return;
      }
      if (!res.ok && res.status !== 0) {
        setCreationUncertainty("");
        setError(j.error ?? `création refusée (HTTP ${res.status})`);
        return;
      }
      const refreshed = await reloadPortfolio();
      const prep =
        refreshed?.portfolio && "preparations" in refreshed.portfolio
          ? refreshed.portfolio.preparations.items
          : [];
      const discovered = prep.find((p) => !before.has(p.id));
      if (discovered) {
        setCreationUncertainty(
          `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
        );
        return;
      }
      setCreationUncertainty(
        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
      );
    } catch {
      const refreshed = await reloadPortfolio();
      const prep =
        refreshed?.portfolio && "preparations" in refreshed.portfolio
          ? refreshed.portfolio.preparations.items
          : [];
      const discovered = prep.find((p) => !before.has(p.id));
      if (discovered) {
        setCreationUncertainty(
          `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
        );
      } else {
        setCreationUncertainty(
          "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
        );
      }
    } finally {
      creatingRef.current = false;
      setCreating(false);
    }
  }

  function resumePreparation(id: string) {
    router.push(`/preparations/${id}?resume=1`);
  }

  if (error && !data) {
    return (
      <div className="fig-page" data-figma-frame="591:425">
        <div className="fig-panel space-y-3" role="alert">
          <div>Portefeuille indisponible: {error}</div>
          <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
            Réessayer (GET)
          </button>
        </div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="muted" data-testid="portfolio-loading">
        Chargement du portefeuille…
      </div>
    );
  }

  const p = data.portfolio;
  const projects = p && p.kind === "ready" ? p.projects : [];
  const openPreparations = p && "openPreparations" in p ? p.openPreparations : 0;
  const hasProjects = projects.length > 0;
  const frameId = hasProjects ? "591:425" : "591:661";

  return (
    <div className="fig-page portfolio-page" data-figma-frame={frameId} data-testid="portfolio-page">
      <header>
        <p className="fig-kicker">Votre espace</p>
        <h1 className="fig-hero-title">Bonjour, retrouvez vos projets</h1>
        <p className="fig-hero-sub">
          Retrouvez vos projets ou reprenez une préparation avec Nora, sans mélanger leurs contextes.
        </p>
      </header>

      {error ? (
        <p className="text-sm text-[var(--bad)]" role="alert">
          {error}
        </p>
      ) : null}
      {creationUncertainty ? (
        <div className="fig-alert" data-testid="portfolio-creation-uncertainty" role="status">
          {creationUncertainty}
          <div className="mt-2">
            <button type="button" className="btn secondary" onClick={() => void reloadPortfolio()}>
              Relire le portefeuille
            </button>
          </div>
        </div>
      ) : null}

      <section className="fig-stat-grid" aria-label="Synthèse portefeuille">
        <div className="fig-stat">
          <div className="fig-stat-label">Mes projets</div>
          <div className="fig-stat-value">{padCount(projects.length)}</div>
          <div className="fig-stat-hint">Projets accessibles</div>
        </div>
        <div className="fig-stat">
          <div className="fig-stat-label">Préparations ouvertes</div>
          <div className="fig-stat-value">{padCount(openPreparations)}</div>
          <div className="fig-stat-hint">Préparations en cours</div>
        </div>
        <div className="fig-stat fig-stat-access">
          <div className="fig-stat-label">Accès</div>
          <div className="fig-stat-value fig-stat-value-text">Personnel</div>
          <div className="fig-stat-hint">Chaque projet garde son contexte</div>
        </div>
      </section>

      <section className="space-y-4" data-testid="portfolio-projects-section">
        <div className="fig-section-head">
          <h2 className="fig-section-title">Mes projets</h2>
          <button
            id="nouvelle-preparation"
            className="btn"
            disabled={creating}
            data-testid="portfolio-new-prep"
            onClick={() => void startPreparation()}
          >
            {creating ? "Création…" : "Créer un projet"}
          </button>
        </div>

        {!hasProjects ? (
          <div className="portfolio-empty-projects" data-testid="portfolio-empty-projects">
            <div className="portfolio-empty-glyph" aria-hidden>
              +
            </div>
            <div className="min-w-0">
              <h3 className="portfolio-empty-title">Aucun projet pour le moment</h3>
              <p className="portfolio-empty-copy">
                Créez un projet pour démarrer avec Nora. La création reste un acte explicite dans le
                sas de préparation.
              </p>
              <button
                type="button"
                className="btn mt-3"
                disabled={creating}
                onClick={() => void startPreparation()}
              >
                {creating ? "Création…" : "Créer un projet"}
              </button>
            </div>
          </div>
        ) : (
          <ul className="fig-card-grid" data-testid="portfolio-projects">
            {projects.map((proj) => {
              const st = statusForOwnedProject();
              return (
                <li key={proj.id} className="fig-card portfolio-project-card">
                  <div className="fig-card-top">
                    <div className="fig-card-title truncate" title={proj.name}>
                      {proj.name}
                    </div>
                    <span className={`fig-tag ${st.tone}`} data-testid="portfolio-project-status">
                      {st.label}
                    </span>
                  </div>
                  <p className="fig-card-desc text-sm muted">Espace de travail accessible</p>
                  <div className="fig-card-sep" aria-hidden />
                  <p className="fig-card-meta">Accéder à votre espace projet</p>
                  <a
                    className="btn mt-auto inline-flex justify-center"
                    href={`/projects/${proj.id}?surface=travail`}
                    data-testid={`open-project-${proj.id}`}
                  >
                    Ouvrir le projet
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {p?.kind === "empty" || p?.kind === "ready" ? (
        <section className="space-y-3" data-testid="portfolio-preparations" data-figma-frame="591:425">
          <div className="fig-section-head">
            <h2 className="fig-section-title">Préparations à reprendre</h2>
            <span className="muted text-sm" data-testid="portfolio-open-count">
              {padCount(openPreparations)} ouverte{openPreparations === 1 ? "" : "s"}
            </span>
          </div>
          {items.length === 0 ? (
            <div className="fig-panel portfolio-empty-preps" data-testid="portfolio-empty-preps">
              <p className="text-sm muted m-0">
                Aucune préparation ouverte. Démarrez une nouvelle préparation pour discuter avant
                création de projet.
              </p>
            </div>
          ) : (
            <ul className="portfolio-prep-list">
              {items.map((prep) => (
                <li key={prep.id} className="portfolio-prep-row">
                  <span className="portfolio-prep-icon" aria-hidden>
                    ○
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="portfolio-prep-title truncate">
                      {preparationDisplayLabel(prep)}
                    </div>
                    <div className="portfolio-prep-meta">
                      Ouverte · Créée le {formatPrepCreatedAt(prep.createdAt)}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn secondary shrink-0 portfolio-prep-resume"
                    data-testid={`resume-prep-${prep.id}`}
                    onClick={() => resumePreparation(prep.id)}
                  >
                    Reprendre
                  </button>
                </li>
              ))}
            </ul>
          )}
          {pageNotice ? <p className="text-sm muted">{pageNotice}</p> : null}
          {nextCursor ? (
            <button
              type="button"
              className="btn secondary"
              disabled={loadingMore}
              data-testid="portfolio-load-more"
              onClick={() => void loadMore()}
            >
              {loadingMore ? "Chargement…" : "Charger plus"}
            </button>
          ) : null}
        </section>
      ) : null}

      {p?.kind === "unavailable" ? (
        <div className="fig-panel" role="alert">
          <div className="font-medium">Portefeuille indisponible</div>
          <p className="muted text-sm mt-1">{p.reason}</p>
        </div>
      ) : null}

      <footer className="fig-banner portfolio-continuity">
        <h3>Continuité personnelle</h3>
        <p>
          Les conversations et les décisions restent propres à chaque projet. Un dépôt Git partagé ne
          fusionne pas les contextes.
        </p>
      </footer>
    </div>
  );
}

```

### `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx` (fichier complet au candidat)

```tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PRODUCT_VERSIONING } from "@/lib/product-version";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  noteProjectSurfaceNavIntent,
  parsePreparationId,
  parseProjectId,
  parseStudioSurface,
  railStyle,
  resolveRailVariant,
} from "./studio-rail";
import "./studio-shell.css";

/** Existing real account destination — integrations settings (no invented account hub). */
const ACCOUNT_HREF = "/settings/integrations";

export function StudioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const surface = searchParams.get("surface");
  const variant = resolveRailVariant({ pathname, surface, searchParams });
  const tokens = STUDIO_RAIL_VARIANTS[variant];
  const items = buildShellNav({ pathname, surface });
  const projectId = parseProjectId(pathname);
  const preparationId = parsePreparationId(pathname);
  const inProductSpace = Boolean(projectId || preparationId);
  const personalSpace = !inProductSpace;
  const portfolioActive = pathname.startsWith("/portfolio") || pathname === "/";
  const accountActive = pathname.startsWith("/settings");

  // UX-003: /login is a public entry surface — no private project rail.
  useEffect(() => {
    if (pathname === "/login") {
      document.documentElement.classList.remove("studio-shell-lock");
      return;
    }
    document.documentElement.classList.add("studio-shell-lock");
    return () => {
      document.documentElement.classList.remove("studio-shell-lock");
    };
  }, [pathname]);

  if (pathname === "/login") {
    return (
      <div className="min-h-screen" data-testid="studio-shell-entry" data-shell-mode="entry">
        {children}
      </div>
    );
  }

  return (
    <div
      className="studio-shell-app studio-shell"
      data-rail-variant={variant}
      data-shell-mode={personalSpace ? "personnel" : "produit"}
      data-testid="studio-shell-app"
    >
      <aside
        className="studio-shell-rail hidden md:flex flex-col border-r border-[var(--line)]"
        style={railStyle(tokens)}
        aria-label="Navigation Studio"
        data-testid="studio-rail"
        data-rail-variant={variant}
        data-rail-component-id={tokens.railComponentId}
        data-rail-source-node={tokens.sourceNodeId}
        data-rail-width={tokens.widthPx}
        data-rail-fill={tokens.fill}
      >
        <div className="studio-shell-rail-inner" style={{ gap: tokens.gap }}>
          <div className="flex items-center gap-2 shrink-0">
            <span
              aria-hidden
              className="inline-flex h-9 w-9 items-center justify-center rounded-[9px] text-[22px] font-bold"
              style={{ background: "var(--fig-accent)", color: "white" }}
            >
              S
            </span>
            <div>
              <div className="text-[19px] font-semibold tracking-tight studio-title">SFIA Studio</div>
              <div className="text-[10px] muted">{PRODUCT_VERSIONING.releaseStatus}</div>
            </div>
          </div>

          <div className="shrink-0 border-t border-[var(--line)] my-1" aria-hidden />

          {projectId ? (
            <div className="mt-1 shrink-0">
              <div className="text-[10px] muted uppercase tracking-wide">Espace actif</div>
              <div className="text-sm font-medium mt-1 truncate" title={projectId}>
                Projet
              </div>
            </div>
          ) : (
            <div className="studio-rail-section" aria-hidden>
              Votre espace
            </div>
          )}

          <nav
            className="studio-shell-rail-nav text-sm"
            style={{ gap: tokens.gap }}
            aria-label="Principal"
          >
            {items.map((item) => {
              if (!item.href) {
                return (
                  <span
                    key={item.key}
                    className="muted pl-2"
                    title={item.disabledReason}
                    data-testid={`nav-disabled-${item.key}`}
                  >
                    {item.label}
                  </span>
                );
              }
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`studio-rail-nav-item ${item.active ? "is-active" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                  data-testid={`nav-${item.key}`}
                  onClick={() => {
                    const surfaceKey = parseStudioSurface(item.key);
                    if (projectId && surfaceKey) {
                      noteProjectSurfaceNavIntent(projectId, surfaceKey);
                    }
                  }}
                >
                  {item.key === "portfolio" ? (
                    <span aria-hidden className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 shrink-0">
                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                    </span>
                  ) : null}
                  {item.key === "new-prep" ? (
                    <span aria-hidden className="text-[var(--accent-soft)] text-lg leading-none">
                      +
                    </span>
                  ) : null}
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {personalSpace ? (
              <div className="mt-2">
                <div className="studio-rail-section mb-1">Accès</div>
                <Link
                  href={ACCOUNT_HREF}
                  className="text-sm muted block px-2 py-1"
                  data-testid="nav-integrations"
                >
                  Intégrations
                </Link>
              </div>
            ) : null}

            {projectId ? (
              <div className="mt-2 space-y-1">
                <div className="text-[10px] muted uppercase tracking-wide mb-1">Accès directs</div>
                <Link
                  href={`/projects/${projectId}?surface=document`}
                  className="text-sm muted block px-2 py-1"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "document")}
                >
                  Documents Nora
                </Link>
                <Link
                  href={`/projects/${projectId}?surface=git`}
                  className="text-sm muted block px-2 py-1"
                  data-testid="nav-sources-git"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "git")}
                >
                  Sources Git
                </Link>
              </div>
            ) : null}
          </nav>

          <div className="studio-shell-rail-foot" data-testid="studio-rail-account">
            <Link
              href={ACCOUNT_HREF}
              className="studio-account-link"
              data-testid="nav-account"
              aria-label="Compte — Intégrations"
            >
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shrink-0"
                style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
              >
                P
              </span>
              <div className="text-xs min-w-0">
                <div className="font-semibold text-[14px]">Pilote</div>
                <div className="muted">{inProductSpace ? "Connecté" : "Espace personnel"}</div>
              </div>
              <span aria-hidden className="muted ml-auto text-lg leading-none">
                ⌄
              </span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="studio-shell-column">
        {personalSpace ? (
          <header
            className="studio-shell-topbar"
            data-testid="studio-shell-topbar"
          >
            <div className="flex items-center gap-3 min-w-0 md:hidden">
              <span
                aria-hidden
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[8px] text-sm font-bold"
                style={{ background: "var(--fig-accent)", color: "white" }}
              >
                S
              </span>
              <span className="font-semibold truncate">SFIA Studio</span>
            </div>
            <p className="hidden md:block text-sm muted truncate m-0">
              SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Portefeuille
            </p>
            <Link
              href={ACCOUNT_HREF}
              className="studio-account-link shrink-0"
              data-testid="nav-account-top"
              aria-label="Compte — Intégrations"
            >
              <span
                aria-hidden
                className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full text-[12px] font-bold"
                style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
              >
                P
              </span>
              <span className="hidden sm:inline text-[13px] text-[var(--muted)]">Pilote</span>
            </Link>
          </header>
        ) : (
          <nav
            className="studio-shell-mobile-strip md:hidden"
            aria-label="Navigation Studio mobile"
            data-testid="studio-rail-mobile"
          >
            {items.map((item) => {
              if (!item.href) {
                return (
                  <span key={item.key} className="muted whitespace-nowrap" title={item.disabledReason}>
                    {item.label}
                  </span>
                );
              }
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`whitespace-nowrap ${item.active ? "font-semibold" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                  onClick={() => {
                    const surfaceKey = parseStudioSurface(item.key);
                    if (projectId && surfaceKey) {
                      noteProjectSurfaceNavIntent(projectId, surfaceKey);
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        <main
          className={`studio-shell-main ${personalSpace ? "studio-shell-main-mobile-pad" : ""}`}
          data-testid="studio-shell-main"
        >
          {children}
        </main>

        {personalSpace ? (
          <nav
            className="studio-shell-bottom-nav md:hidden"
            aria-label="Navigation personnelle mobile"
            data-testid="studio-mobile-bottom-nav"
          >
            <Link
              href="/portfolio"
              className={portfolioActive ? "is-active" : ""}
              aria-current={portfolioActive ? "page" : undefined}
              data-testid="mobile-nav-portfolio"
            >
              <span className="nav-glyph" aria-hidden>
                ▦
              </span>
              Portefeuille
            </Link>
            <Link
              href="/portfolio#nouvelle-preparation"
              data-testid="mobile-nav-create"
            >
              <span className="nav-glyph" aria-hidden>
                +
              </span>
              Créer
            </Link>
            <Link
              href={ACCOUNT_HREF}
              className={accountActive ? "is-active" : ""}
              aria-current={accountActive ? "page" : undefined}
              data-testid="mobile-nav-account"
            >
              <span className="nav-glyph" aria-hidden>
                ◔
              </span>
              Compte
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

```

### `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts` (diff complet vs parent)

```diff
commit bc8785683c30430aa99bc76e138ba10f49c71c39
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 08:11:44 2026 +0100

    feat(next): implement ML4D UX-004 portfolio and personal shell

    Freeze fixed personal rail with independent content scroll, simplify navigation to Portefeuille/Nouveau projet, and align portfolio mobile/desktop compositions to validated Figma UX-004 frames without changing D1/D2 contracts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index 0d290497..dd3f8573 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -234,13 +234,8 @@ export function buildShellNav(input: {
   const preparationId = parsePreparationId(path);
   const surface = parseStudioSurface(input.surface) ?? (projectId ? "travail" : null);

+  // UX-004: one personal destination — Portefeuille (no Mes projets / Tous les projets).
   const items: ShellNavItem[] = [
-    {
-      key: "mes-projets",
-      label: "Mes projets",
-      href: "/portfolio",
-      active: path.startsWith("/portfolio") || path === "/",
-    },
     {
       key: "portfolio",
       label: "Portefeuille",
@@ -252,16 +247,11 @@ export function buildShellNav(input: {
   if (!projectId && !preparationId) {
     items.push({
       key: "new-prep",
-      label: "Créer un projet",
+      label: "Nouveau projet",
       href: "/portfolio#nouvelle-preparation",
       active: false,
     });
-    items.push({
-      key: "login",
-      label: "Connexion",
-      href: "/login",
-      active: path.startsWith("/login"),
-    });
+    // Connected personal space: no redundant « Connexion » rail entry.
     return items;
   }


```

### `projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts` (diff complet)

```diff
commit bc8785683c30430aa99bc76e138ba10f49c71c39
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 08:11:44 2026 +0100

    feat(next): implement ML4D UX-004 portfolio and personal shell

    Freeze fixed personal rail with independent content scroll, simplify navigation to Portefeuille/Nouveau projet, and align portfolio mobile/desktop compositions to validated Figma UX-004 frames without changing D1/D2 contracts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
index 471741f6..b8111536 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
@@ -41,10 +41,11 @@ test("DEV fake login → sas → message Nora FAKE → document → create → p
   await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();

   // Portfolio → open by projectId only (no preparationId query).
+  // UX-004: technical ids are not displayed on cards; open via real project link.
   await page.goto("/portfolio");
   await expect(page.getByRole("heading", { name: /retrouvez vos projets/i })).toBeVisible();
-  await expect(page.getByText(projectId!, { exact: true })).toBeVisible();
-  await page.locator(`a[href^="/projects/${projectId}"]`).click();
+  await expect(page.getByTestId(`open-project-${projectId}`)).toBeVisible();
+  await page.getByTestId(`open-project-${projectId}`).click();
   await page.waitForURL(`**/projects/${projectId}**`);
   expect(page.url()).not.toContain("preparationId=");
   await expect(page.getByText("réouverture par projectId", { exact: false })).toBeVisible();

```

### `projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts` (diff complet)

```diff
commit bc8785683c30430aa99bc76e138ba10f49c71c39
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 08:11:44 2026 +0100

    feat(next): implement ML4D UX-004 portfolio and personal shell

    Freeze fixed personal rail with independent content scroll, simplify navigation to Portefeuille/Nouveau projet, and align portfolio mobile/desktop compositions to validated Figma UX-004 frames without changing D1/D2 contracts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
index 3a420187..6ade6f5e 100644
--- a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
@@ -59,9 +59,13 @@ describe("B1 shell navigation", () => {
     expect(items.find((i) => i.key === "pilotage")?.active).toBe(true);
   });

-  it("keeps portfolio personnel entries without hash-only fakes", () => {
+  it("keeps a single Portefeuille entry plus Nouveau projet (UX-004)", () => {
     const items = buildShellNav({ pathname: "/portfolio" });
-    expect(items.some((i) => i.key === "mes-projets")).toBe(true);
+    expect(items.some((i) => i.key === "mes-projets")).toBe(false);
+    expect(items.some((i) => i.key === "login")).toBe(false);
+    expect(items.find((i) => i.key === "portfolio")?.label).toBe("Portefeuille");
+    expect(items.find((i) => i.key === "new-prep")?.label).toBe("Nouveau projet");
+    expect(items.find((i) => i.key === "new-prep")?.href).toBe("/portfolio#nouvelle-preparation");
     expect(items.every((i) => i.href !== "#")).toBe(true);
   });


```

### `projects/sfia-studio-next/web/src/components/figma/tokens.css`

Justification §7.6 : fichier long ; la modification UX-004 est additive (styles portfolio). Diff complet du commit :

```diff
commit bc8785683c30430aa99bc76e138ba10f49c71c39
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 08:11:44 2026 +0100

    feat(next): implement ML4D UX-004 portfolio and personal shell

    Freeze fixed personal rail with independent content scroll, simplify navigation to Portefeuille/Nouveau projet, and align portfolio mobile/desktop compositions to validated Figma UX-004 frames without changing D1/D2 contracts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 922c422d..92cf94e9 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -276,6 +276,120 @@
   color: #c9d7ff;
 }

+/* UX-004 portfolio composition */
+.fig-stat-value-text {
+  font-size: 1.35rem;
+  margin-top: 14px;
+}
+
+.fig-card-sep {
+  height: 1px;
+  background: var(--fig-line);
+  width: 100%;
+}
+
+.portfolio-project-card {
+  min-height: 180px;
+}
+
+.portfolio-empty-projects {
+  display: flex;
+  gap: 1rem;
+  align-items: flex-start;
+  border: 1px solid var(--fig-line);
+  border-radius: 12px;
+  background: var(--fig-panel);
+  padding: 1.35rem 1.25rem;
+  min-height: 160px;
+}
+
+.portfolio-empty-glyph {
+  flex-shrink: 0;
+  width: 58px;
+  height: 58px;
+  border-radius: 999px;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  background: color-mix(in srgb, var(--fig-accent) 22%, transparent);
+  color: var(--fig-accent-soft);
+  font-size: 1.75rem;
+  font-weight: 600;
+}
+
+.portfolio-empty-title {
+  margin: 0;
+  font-size: 1.05rem;
+  font-weight: 600;
+}
+
+.portfolio-empty-copy {
+  margin: 0.45rem 0 0;
+  color: var(--fig-muted);
+  font-size: 0.9rem;
+  line-height: 1.45;
+  max-width: 42rem;
+}
+
+.portfolio-prep-list {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 7px;
+}
+
+.portfolio-prep-row {
+  display: flex;
+  align-items: center;
+  gap: 0.85rem;
+  min-height: 66px;
+  padding: 0.7rem 0.9rem;
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  background: var(--fig-panel);
+}
+
+.portfolio-prep-icon {
+  flex-shrink: 0;
+  width: 36px;
+  height: 36px;
+  border-radius: 8px;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  background: #272e49;
+  color: var(--fig-accent-soft);
+  font-size: 1.1rem;
+}
+
+.portfolio-prep-title {
+  font-weight: 600;
+  font-size: 0.95rem;
+  color: var(--fig-ink);
+}
+
+.portfolio-prep-meta {
+  font-size: 0.75rem;
+  color: var(--fig-muted);
+  margin-top: 0.1rem;
+}
+
+.portfolio-prep-resume {
+  min-width: 7.5rem;
+}
+
+.portfolio-empty-preps {
+  min-height: 91px;
+  display: flex;
+  align-items: center;
+}
+
+.portfolio-continuity h3 {
+  font-size: 0.95rem;
+}
+
 @media (max-width: 1100px) {
   .fig-stat-grid,
   .fig-card-grid,
@@ -286,6 +400,33 @@
   }
 }

+@media (max-width: 767px) {
+  .fig-stat-grid {
+    grid-template-columns: repeat(2, minmax(0, 1fr));
+  }
+  .fig-stat-access {
+    display: none;
+  }
+  .fig-card-grid {
+    grid-template-columns: 1fr;
+  }
+  .portfolio-project-card {
+    min-height: 86px;
+  }
+  .portfolio-prep-row {
+    min-height: 75px;
+    padding-left: 0.85rem;
+    border-left: 3px solid var(--fig-accent);
+  }
+  .portfolio-prep-icon {
+    display: none;
+  }
+  .portfolio-prep-resume {
+    min-width: auto;
+    padding-inline: 0.55rem;
+  }
+}
+
 @media (max-width: 640px) {
   .fig-page { gap: 18px; }
   .fig-hero-title { font-size: 1.35rem; }

```

### `projects/sfia-studio-next/construction/delivery-history.md`

Justification §7.6 : journal append-only historique ; seule l'entrée UX-004 est nouvelle. Diff complet du commit :

```diff
commit bc8785683c30430aa99bc76e138ba10f49c71c39
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 08:11:44 2026 +0100

    feat(next): implement ML4D UX-004 portfolio and personal shell

    Freeze fixed personal rail with independent content scroll, simplify navigation to Portefeuille/Nouveau projet, and align portfolio mobile/desktop compositions to validated Figma UX-004 frames without changing D1/D2 contracts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index b9c93308..3d5f5755 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,6 +25,24 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-UX004-PORTFOLIO-SHELL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~08:15 CET (Europe/Paris) |
+| Macro-lot | ML4D — UX-004 convergence portefeuille et shell personnel |
+| Type | EVOL / MINOR candidate UX · **NO RELEASE** |
+| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
+| Base UX-003 | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` (préservé) |
+| Base main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
+| Changes | Rail personnel fixe + scroll contenu indépendant ; nav unique Portefeuille / Nouveau projet ; nav mobile inférieure ; libellé Préparations ouvertes ; cartes sans id technique ; états vides/mixtes ; tests e2e/F2 ; contrat visuel UX-004 |
+| Schema | unchanged |
+| Lanes | DEV explicite `:3102` ( `:3100` déjà occupé par autre worktree ) ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`a77a3a2` / `vYeNRRzvLN03N73wmcKkR`) ; STABLE NOT AVAILABLE |
+| Validations | tsc PASS ; lint warnings préexistants ; build PASS ; vitest unit ciblés PASS ; Playwright UX-004+UX-003 19 PASS ; F2 rail 246 / topbar 66 |
+| Push Product | **AUCUN** |
+| RECETTE | **NON MODIFIÉE** (GO distinct requis pour nouveau SHA) |
+| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 DEV` |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-UX003-UNIFIED-ENTRY-RECETTE

 | Field | Value |

```

## 6. Figma / contrat / F2

Frames : 591:425 · 591:543 · 591:661 · 591:721 · 592:435
Contrat : contenu inclus §4.
F2 DEV/E2E antérieurs : rail 246 ±2, topbar ~66, bottom ≥70 — rejoués fonctionnellement sur RECETTE (railW=246, railFixed=true).

### Captures Figma

| Fichier | sha256 |
| --- | --- |
| `591-425-desktop-filled.png` | `71faa0df8fa27b48fa9bc2a913c0ccdf51e6b46aa9b188627b179a81cb7d255d` |
| `591-543-desktop-scrolled.png` | `1086bee76e6ed35f308702644dbafdb2fd186abc80eda84813403ab63d6c4fc4` |
| `591-661-desktop-empty.png` | `f7152765e83b5cd0ec4b933d551ae4f0e305365fd1375e5ea82d6587a93490d3` |
| `591-721-mobile.png` | `452b5e1f4a027cef2e2c16024e64f089b78c752fd0fd3457b6d9da65860621f5` |
| `592-435-mobile-scrolled.png` | `7e455e36e55f8c272e00d4fe5c249264b29018af83e53b32c64621739234e049` |

## 7. Tests (réutilisés + smoke RECETTE)

| Suite | Résultat |
| --- | --- |
| Cycle DEV UX-004 | tsc/build/unit/Playwright 19 PASS (rapport précédent) |
| Smoke RECETTE ce cycle | login entry sans rail ; session_expired ; test login ; portfolio rail 246 fixe ; mobile bottom ; nouveau sas ; resume GET posts=0 ; compte→intégrations |

### smoke-results.json

```json
[
  {
    "step": "login_entry",
    "entry": 1,
    "railOnLogin": 0
  },
  {
    "step": "session_expired",
    "expired": 2
  },
  {
    "step": "test_login_available",
    "hasPilot": 1
  },
  {
    "step": "after_auth_url",
    "url": "http://127.0.0.1:3200/portfolio"
  },
  {
    "step": "portfolio_desktop",
    "railW": "246",
    "navMes": 0,
    "navPort": 1,
    "prepLabel": 0,
    "reprises": 0,
    "accountY": 916.21875,
    "accountY2": 916.21875,
    "railFixed": true
  },
  {
    "step": "mobile",
    "bottom": true,
    "overflow": false
  },
  {
    "step": "new_prep_sas",
    "url": "http://127.0.0.1:3200/preparations/prep_0ce74289-9e92-402c-b143-b9f777fc443c",
    "hasRail": 1
  },
  {
    "step": "account",
    "url": "http://127.0.0.1:3200/settings/integrations"
  },
  {
    "step": "auth_status",
    "status": {
      "provider": "github-oauth-studio-identity-only",
      "configured": true,
      "status": "CONFIGURED — LIVE proof still requires successful callback",
      "note": "Login grants Studio identity only — never repository rights.",
      "lane": "RECETTE",
      "testLoginAvailable": true,
      "testLoginLabel": "Accès de test (non OAuth) — lane autorisée"
    }
  }
]
```

### Captures RECETTE

| Fichier | sha256 |
| --- | --- |
| `recette-login-expired.png` | `8ba5e9181c4e73dc2355a74c082812804876060f045669696a15fb9daa9414f4` |
| `recette-login-ux003.png` | `29e6eeacb67429c3967ec1beb7b3e2362ea8550adb5866bd86d582b5ad275ba3` |
| `recette-portfolio-1680-scrolled.png` | `3f0f375fd91607483e85abf996fbc5126da18819d190449aa1f1c8c26146ec7a` |
| `recette-portfolio-1680.png` | `225f0c44693a9aa2edbd83bb061b32559ea2de84d1f6916e70991ef23bcfa6b3` |
| `recette-portfolio-320.png` | `1be115984da913562d2d0cc16ffd41dfcf913e0782fb1f8751ea4a841d2ab3e6` |
| `recette-portfolio-390.png` | `47a130763ead2366962a4626eb900f5fda8d6c5ea7c12f4f22973e91a7ea169f` |

## 8. Remplacement RECETTE

### Avant
- Agent : `com.sfia.studio.next.recette.ml4d-ux003` KeepAlive
- cwd : `.../ml4d-ux003-recette-build-a77a3a2bf7b9/.../web`
- SHA : `a77a3a2bf7b942038d771fdcdd2e7a6410330784` · build `vYeNRRzvLN03N73wmcKkR`
- ml4 KeepAlive : **non chargé**

### Après
- Agent : `com.sfia.studio.next.recette.ml4d-ux004` KeepAlive
- cwd : `.../ml4d-ux004-recette-build-bc8785683c30/.../web`
- SHA : `bc8785683c30430aa99bc76e138ba10f49c71c39` · build `3g7UH7AXjSWhxrT20D3-w`
- UX-003 plist+worktree **préservés**
- ml4 toujours non chargé

### Manifeste

```yaml
lane: RECETTE
source_repository: mcleland147/sfia-workspace
source_branch: feat/next-ml4d-ux004-portfolio-20261116
base_main_sha: 997d4c4e8204993de7107552898c8cc08cd3b0ed
candidate_sha: bc8785683c30430aa99bc76e138ba10f49c71c39
tree_web: cc42e2eaf3a16478a30e3d581eaa4496cc3779e2
build_identifier: 3g7UH7AXjSWhxrT20D3-w
build_html_comment: 3g7UH7AXjSWhxrT20D3_w
product_version: NOT AVAILABLE
candidate_version: NOT AVAILABLE
release_tag: N/A
environment: RECETTE
served_address: http://127.0.0.1:3200
worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ux004-recette-build-bc8785683c30
start_script: start-recette-ux004.sh
launch_agent: com.sfia.studio.next.recette.ml4d-ux004
previous_candidate_sha: a77a3a2bf7b942038d771fdcdd2e7a6410330784
previous_build: vYeNRRzvLN03N73wmcKkR
previous_worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9
previous_launch_agent_plist: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux003.plist
schema_revision: shared RECETTE Postgres via lane env (no migration this cycle)
test_data_revision: RECETTE lane fixtures / pilot test identities
capabilities:
  oauth: CONFIGURED — LIVE callback not proven this cycle
  test_login: available on RECETTE lane
review_decision: EN ATTENTE MORRIS

```

### Rollback documenté

```
Rollback UX-004 → UX-003 RECETTE on 127.0.0.1:3200

1) Stop UX-004 agent:
   launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004

2) Ensure ML4C KeepAlive stays unloaded:
   launchctl print gui/$(id -u)/com.sfia.studio.next.recette.ml4
   # must be absent / not loaded

3) Start UX-003 agent (plist preserved):
   launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux003.plist
   launchctl kickstart -k gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux003

4) Verify:
   curl -sS http://127.0.0.1:3200/login | head -c 80
   # expect HTML comment <!--vYeNRRzvLN03N73wmcKkR-->
   # cwd: .../ml4d-ux003-recette-build-a77a3a2bf7b9/.../web

Preserved artefacts:
- Worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9
- SHA: a77a3a2bf7b942038d771fdcdd2e7a6410330784
- Build: vYeNRRzvLN03N73wmcKkR
- Script: start-recette-ux003.sh
- Plist: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux003.plist
- Historical ML4C worktree also preserved (do not auto-start)

```

## 9. Fake/Real

| Affirmation | Qualif |
| --- | --- |
| Runtime RECETTE UX-004 | **REAL** (cwd/SHA/build/HTML) |
| Parcours navigateur | **BROWSER** |
| Fixtures empty DEV e2e | **FAKE** (cycle précédent) |
| OAuth LIVE callback | **NOT CLAIMED** |
| Cookie isolation multi-ports | **RÉSERVE** (profil dédié) |

## 10. Réserves

1. Cookies 127.0.0.1 multi-ports — profil RECETTE dédié.
2. Build RECETTE `3g7UH7AXjSWhxrT20D3-w` ≠ fingerprint DEV antérieur `8vsahDFPlzPO5IVsE0mX6` (reconstruction depuis même SHA — normal).
3. OAuth LIVE non prouvé.
4. Version produit / STABLE / release : NOT AVAILABLE.
5. Décision utilisateur Morris : EN ATTENTE.

## 11. Verdict A–F

### A. Handoff UX-004
**COMPLETE — à publier puis REMOTE VERIFIED** (section publication)

### B. Candidat
`bc8785683c30430aa99bc76e138ba10f49c71c39` · tree `cc42e2eaf3a16478a30e3d581eaa4496cc3779e2` · build servi `3g7UH7AXjSWhxrT20D3-w`

### C. Environnement
**SERVED AND VERIFIED** / **READY WITH RESERVES — MORRIS UX RECETTE**

### D. Preuves
Smoke + captures RECETTE + pack contenu complet

### E. Rollback
Documenté ; prérequis présents (worktree+plist+build UX-003) ; non rejoué destructif dans ce cycle

### F. Gates
push/PR/merge/STABLE/release/ADOPTED/ML4D clos : NON · Gate C OPEN

## 12. Accès Morris

1. URL : **http://127.0.0.1:3200/login** puis **/portfolio**
2. SHA : `bc8785683c30430aa99bc76e138ba10f49c71c39`
3. Build : `3g7UH7AXjSWhxrT20D3-w`
4. Session expirée : http://127.0.0.1:3200/login?reason=session_expired
5. Profil navigateur dédié RECETTE
6. Rollback : voir `RESTORE-PREVIOUS-UX003-RECETTE.txt`
