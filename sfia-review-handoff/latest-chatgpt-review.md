# SFIA Review Pack — FULL · STANDARD
## Ensemble 08 — POST-UAT 02 INTÉGRATIONS UX 11.06

- date_utc: 2026-11-22T04:51:36Z
- timezone_local: Europe/Paris (2026-11-22T05:51:36+0100)
- cycle: CYCLE 8 — DELIVERY / CORRECTIF UX
- typologie: EVOL / UI CONFORMANCE
- profil: STANDARD
- product_versioning: NO RELEASE — DEV CORRECTIVE DELIVERY
- review_handoff: REQUIRED / PUBLISH-IN-CYCLE
- env_01: RECETTE préservée (aucun cutover)

---

## 1. GO Morris

Corriger l'écran Intégrations pour Figma 11.06.
NON : GitHub REAL WRITE · cutover RECETTE · push/PR/merge projet.

---

## 2. Git Truth

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Branche | feat/next-ensemble08-git-publications-nora |
| HEAD tip | 35906960e39eb617d39c76bf991f802ece4865ff |
| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 |
| RECETTE servi | 9f346391… / BUILD F85QQBTLa8nq5zKYxMKKZ (inchangé) |
| Handoff précédent | ea77a86af6d910ce1fc25c369e638daa8ba35ed2 |
| Dirty préexistant | manifeste/as-built/delivery cutover (préservés) + ce correctif UX |
| Push projet | NONE |

---

## 3. Sources

- SFIA v2.6 routing + template Critical/Standard
- methodologie-contrat-figma-cursor.md v1.1
- protocole-fidelite-figma-runtime.md
- Figma file itgvCulInEnFY6DvgIegvP node 1095:339

---

## 4. Extraction Figma L0/L1/L2

| Niveau | Résultat |
| --- | --- |
| L0 | Frame 1680×970 · rail 246 · topbar 70 · contenu x284 w1358 · état CONNECTED |
| L1 | get_metadata arbre 1095:339…379 (panneaux 858/482, actions, cartes) |
| L2 | get_design_context — tokens --panel/--ok/--ok-bg/--accent-bg · boutons secondaires 205×42 · microcopy |
| PNG | 11.06-integrations-github-connected.png 1680×970 |
| SHA256 | d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335 |
| Session | 8c88836d-7841-4c10-94a6-f2c482a7ade1 |

### Mapping

```markdown
# POST-UAT 02 — Mapping Figma 11.06 → runtime

| Champ | Valeur |
| --- | --- |
| File | `itgvCulInEnFY6DvgIegvP` |
| Frame | `1095:339` — 11.06 · Intégrations — connexion GitHub active |
| Viewport ref | 1680×970 |
| PNG natif | `11.06-integrations-github-connected.png` |
| SHA256 | `d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335` |
| Session Figma | `8c88836d-7841-4c10-94a6-f2c482a7ade1` |

## Mapping nœud → React/DOM → CSS → assertion

| Node | Rôle | DOM / React | CSS | Assertion |
| --- | --- | --- | --- | --- |
| `1095:339` | Frame écran | shell + `/settings/integrations` | — | viewport 1680×970 |
| `1095:340` | Rail personnel 246 | `data-testid=studio-rail` | rail variant personnel | width 246 ±2 |
| `1095:334` | Nav Intégrations active | `nav-integrations.is-active` | `.studio-rail-nav-item.is-active` + `--fig-accent-bg` | class `is-active` |
| `1095:353` | Topbar 70 | shell header | shell | h≈70 (shell) |
| `1095:355` | Contenu x284 w1358 | `integrations-1106-page` / panel | max-width 1358 · shell inset | x≈284 w≈1358 ≤2px |
| `1095:357..359` | En-tête + microcopy | `integrations-1106-header` | eyebrow/title/lead | textes Figma |
| `1095:360` | Bandeau vert | `integrations-status-banner` | `.is-ok` → `--fig-ok-bg`/`--fig-ok` | computed rgb(23,56,47)/(108,219,186) |
| `1095:363` | Panneau GitHub 858 | `github-integration-card` | grid 858fr | w≈858 ≤2px |
| `1095:368+` | Cartes dépôts | `repo-list` / `integration-repo-*` | `.integrations-1106-repo` | données réelles provider (0..n) |
| `1095:375` | Actualiser les accès | `refresh-repos` | `git-btn-secondary` 205×42 | label + secondary |
| `1095:377` | Déconnecter GitHub | `disconnect-github` | `git-btn-secondary` 205×42 | label + secondary |
| `1095:379` | Panneau portée 482 | `integrations-explain-column` | grid 482fr | w≈482 ≤2px |
| `1095:380..389` | Microcopy droite | SCOPE_CARDS | — | 3 cartes Figma |

## F2 1680×970 (mesures runtime)

Voir `runtime/runtime-11.06-dom-measures.json`.

| Rectangle | Figma | Runtime | Δ | F2 ≤2 |
| --- | --- | --- | --- | --- |
| Rail w | 246 | 246 | 0 | PASS |
| Contenu x | 284 | 284.39 | 0.39 | PASS |
| Contenu w | 1358 | 1357.22 | 0.78 | PASS |
| GitHub card w | 858 | 857.48 | 0.52 | PASS |
| Explain w | 482 | 481.73 | 0.27 | PASS |
| Boutons | 205×42 | 205×42 | 0 | PASS |

## Réserves

- Repo cards : maquette montre 2 exemples ; runtime affiche N dépôts provider (SCRIPTED/REAL) — **pas d’invention**.
- G5 pixel-diff image globale : non utilisé comme critère unique ; F2 géométrie + styles computed + captures régionales.
- RECETTE : non redéployée ce cycle.
```

---

## 5. Corrections réalisées

P0 composition 858/482 + cartes tokens · P0 thème bandeau vert fig-ok · P0 boutons secondaires réels · P1 microcopy Figma · P1 repos = provider · P1 états conservés · nav rail is-active.

NO CHANGE : D6/D7/D8/D9 · OAuth · WRITE policy serveur.

---

## 6. Tests

| Suite | Résultat |
| --- | --- |
| tsc --noEmit | PASS |
| vitest integrations-panel-1106 + studio-rail | 17 PASS |
| Playwright ensemble08-integrations-1106 | 3 PASS |
| Viewports | 1680/1280/390/320 + zoom 200% captures |
| F2 1680 | rail/contenu/panneaux/boutons ≤2 CSS px PASS |
| Bandeau computed | bg rgb(23,56,47) color rgb(108,219,186) PASS |
| RECETTE :3200 | inchangée <!--F85QQBTLa8nq5zKYxMKKZ--> |

### Mesures DOM

```json
{
  "figmaFrame": {
    "w": 1680,
    "h": 970,
    "nodeId": "1095:339"
  },
  "figmaPngSha256": "d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335",
  "capturedAt": "2026-11-22T04:50:37.784Z",
  "regions": {
    "1680x970": {
      "rail": {
        "x": 0,
        "y": 0,
        "width": 246,
        "height": 970
      },
      "navIntegrations": {
        "x": 19,
        "y": 260.15625,
        "width": 207,
        "height": 42
      },
      "panel": {
        "x": 284.390625,
        "y": 109.59375,
        "width": 1357.21875,
        "height": 577.296875
      },
      "layout": {
        "x": 284.390625,
        "y": 298.328125,
        "width": 1357.21875,
        "height": 388.5625
      },
      "banner": {
        "x": 284.390625,
        "y": 228.78125,
        "width": 1357.21875,
        "height": 45.546875
      },
      "githubCard": {
        "x": 284.390625,
        "y": 298.328125,
        "width": 857.484375,
        "height": 388.5625
      },
      "explainColumn": {
        "x": 1159.875,
        "y": 298.328125,
        "width": 481.734375,
        "height": 388.5625
      },
      "refreshBtn": {
        "x": 306.390625,
        "y": 576.109375,
        "width": 205,
        "height": 42
      },
      "disconnectBtn": {
        "x": 523.390625,
        "y": 576.109375,
        "width": 205,
        "height": 42
      }
    },
    "1680x970-banner-computed": {
      "backgroundColor": "rgb(23, 56, 47)",
      "color": "rgb(108, 219, 186)",
      "borderRadius": "8px",
      "fontSize": "13px",
      "fontWeight": "600"
    }
  }
}
```

---

## 7. Créations intégrales

### `projects/sfia-studio-next/web/tests/unit/integrations-panel-1106.test.ts`

```ts
import { describe, expect, it } from "vitest";
import { readFileSync } from "fs";
import path from "path";

const panelPath = path.resolve(
  __dirname,
  "../../src/components/integrations/IntegrationsPanel.tsx",
);
const cssPath = path.resolve(__dirname, "../../src/components/figma/tokens.css");

describe("E08 POST-UAT 02 — Intégrations 11.06 microcopy + structure", () => {
  const src = readFileSync(panelPath, "utf8");
  const css = readFileSync(cssPath, "utf8");

  it("embeds Figma 11.06 updated pilot-facing labels", () => {
    const required = [
      "PARAMÈTRES / SERVICES EXTERNES",
      "Intégrations",
      "Gérez votre connexion GitHub et consultez les dépôts accessibles.",
      "Votre compte GitHub est connecté. Vos dépôts autorisés sont accessibles.",
      "Dépôts accessibles depuis votre compte GitHub.",
      "Actualiser les accès",
      "Déconnecter GitHub",
      "À propos de votre connexion",
      "Votre compte GitHub",
      "Votre connexion est personnelle et distincte de vos projets.",
      "Dépôts de vos projets",
      "Chaque projet peut associer un ou plusieurs dépôts.",
      "Publier avec Nora",
      "Demandez à Nora de publier vos documents depuis Travail.",
    ];
    for (const label of required) {
      expect(src, `missing label: ${label}`).toContain(label);
    }
  });

  it("keeps refresh/disconnect as secondary actions (no primary for both)", () => {
    expect(src).toMatch(
      /className="git-btn-secondary"[\s\S]{0,180}?data-testid="refresh-repos"/,
    );
    expect(src).toMatch(
      /className="git-btn-secondary"[\s\S]{0,220}?data-testid="disconnect-github"/,
    );
    expect(src).not.toMatch(
      /className="git-btn-primary"[\s\S]{0,220}?data-testid="refresh-repos"/,
    );
  });

  it("does not invent Figma sample repositories in source", () => {
    expect(src).not.toContain("chantiers360");
    expect(src).toContain("repos.map");
  });

  it("declares 11.06 layout tokens in CSS (858/482, green banner)", () => {
    expect(css).toContain("integrations-1106-grid");
    expect(css).toContain("minmax(0, 858fr) minmax(0, 482fr)");
    expect(css).toContain("integrations-1106-banner.is-ok");
    expect(css).toContain("var(--fig-ok-bg)");
  });
});
```
### `projects/sfia-studio-next/web/tests/e2e/ensemble08-integrations-1106.spec.ts`

```ts
/**
 * E08 POST-UAT 02 — Intégrations 11.06 (DEV SCRIPTED).
 * Does not prove GitHub REAL mutations or Morris OAuth.
 */
import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

const evidenceDir = path.resolve(
  __dirname,
  "../../../construction/ensemble-08-git-et-publications/figma-evidence",
);
const runtimeDir = path.join(evidenceDir, "runtime");

async function loginPilotA(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

async function ensureConnected(page: import("@playwright/test").Page) {
  await page.goto("/settings/integrations");
  await expect(page.getByTestId("integrations-panel")).toBeVisible({ timeout: 20_000 });
  if (await page.getByTestId("connect-github").isVisible().catch(() => false)) {
    await page.getByTestId("connect-github").click();
    await expect(page.getByTestId("disconnect-github")).toBeVisible({ timeout: 20_000 });
  }
}

test.describe("E08 Intégrations 11.06 (SCRIPTED DEV)", () => {
  test("connected composition + secondary actions + nav active", async ({ page }) => {
    test.setTimeout(180_000);
    await loginPilotA(page);
    await ensureConnected(page);

    await expect(page.getByTestId("nav-integrations")).toHaveClass(/is-active/);
    await expect(page.getByTestId("integrations-status-banner")).toContainText(
      /Votre compte GitHub est connecté/i,
    );
    await expect(page.getByTestId("refresh-repos")).toHaveText(/Actualiser les accès/i);
    await expect(page.getByTestId("disconnect-github")).toHaveText(/Déconnecter GitHub/i);
    await expect(page.getByTestId("integrations-explain-column")).toContainText(
      /À propos de votre connexion/i,
    );
    await expect(page.getByTestId("integrations-explain-column")).toContainText(
      /Publier avec Nora/i,
    );
    await expect(page.getByTestId("integrations-write-boundary")).toBeVisible();

    // Buttons are real secondary controls (enabled when not busy)
    await expect(page.getByTestId("refresh-repos")).toBeEnabled();
    await expect(page.getByTestId("disconnect-github")).toBeEnabled();

    // Keyboard: focus refresh
    await page.getByTestId("refresh-repos").focus();
    await expect(page.getByTestId("refresh-repos")).toBeFocused();
  });

  test("disconnect confirm cancel restores panel (11.07)", async ({ page }) => {
    test.setTimeout(120_000);
    await loginPilotA(page);
    await ensureConnected(page);
    await page.getByTestId("disconnect-github").click();
    await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
    await page.getByTestId("disconnect-github-cancel").click();
    await expect(page.getByTestId("integrations-panel")).toBeVisible();
    await expect(page.getByTestId("disconnect-github")).toBeVisible();
  });

  test("viewports + G5 geometry measures (connected)", async ({ page }) => {
    test.setTimeout(240_000);
    fs.mkdirSync(runtimeDir, { recursive: true });
    await loginPilotA(page);
    await ensureConnected(page);

    const viewports = [
      { w: 1680, h: 970, name: "1680x970" },
      { w: 1280, h: 970, name: "1280x970" },
      { w: 390, h: 844, name: "390x844" },
      { w: 320, h: 568, name: "320x568" },
    ] as const;

    const measures: Record<string, unknown> = {
      figmaFrame: { w: 1680, h: 970, nodeId: "1095:339" },
      figmaPngSha256:
        "d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335",
      capturedAt: new Date().toISOString(),
      regions: {},
    };

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.goto("/settings/integrations");
      await expect(page.getByTestId("integrations-panel")).toBeVisible({ timeout: 20_000 });
      await page.waitForTimeout(400);
      const shot = path.join(runtimeDir, `runtime-11.06-integrations-${vp.name}.png`);
      await page.screenshot({ path: shot, fullPage: false });

      if (vp.w === 1680) {
        const panel = page.getByTestId("integrations-panel");
        const layout = page.getByTestId("integrations-layout-1106");
        const banner = page.getByTestId("integrations-status-banner");
        const github = page.getByTestId("github-integration-card");
        const aside = page.getByTestId("integrations-explain-column");
        const refresh = page.getByTestId("refresh-repos");
        const disconnect = page.getByTestId("disconnect-github");
        const rail = page.getByTestId("studio-rail");
        const nav = page.getByTestId("nav-integrations");

        const boxes = {
          rail: await rail.boundingBox(),
          navIntegrations: await nav.boundingBox(),
          panel: await panel.boundingBox(),
          layout: await layout.boundingBox(),
          banner: await banner.boundingBox(),
          githubCard: await github.boundingBox(),
          explainColumn: await aside.boundingBox(),
          refreshBtn: await refresh.boundingBox(),
          disconnectBtn: await disconnect.boundingBox(),
        };
        (measures.regions as Record<string, unknown>)[vp.name] = boxes;

        // F2 structural expectations at 1680×970 (shell + content)
        expect(boxes.rail?.width ?? 0).toBeGreaterThanOrEqual(244);
        expect(boxes.rail?.width ?? 0).toBeLessThanOrEqual(248);
        expect(boxes.banner?.width ?? 0).toBeGreaterThan(1000);
        expect(boxes.githubCard?.width ?? 0).toBeGreaterThan(500);
        expect(boxes.explainColumn?.width ?? 0).toBeGreaterThan(280);
        expect(boxes.refreshBtn?.height ?? 0).toBeGreaterThanOrEqual(40);
        expect(boxes.disconnectBtn?.height ?? 0).toBeGreaterThanOrEqual(40);

        const bannerStyles = await banner.evaluate((el) => {
          const s = getComputedStyle(el);
          return {
            backgroundColor: s.backgroundColor,
            color: s.color,
            borderRadius: s.borderRadius,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
          };
        });
        (measures.regions as Record<string, unknown>)["1680x970-banner-computed"] = bannerStyles;
      }
    }

    // Zoom 200% on reference viewport
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.evaluate(() => {
      document.documentElement.style.zoom = "2";
    });
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(runtimeDir, "runtime-11.06-integrations-1680x970-zoom200.png"),
      fullPage: false,
    });
    await page.evaluate(() => {
      document.documentElement.style.zoom = "1";
    });

    fs.writeFileSync(
      path.join(runtimeDir, "runtime-11.06-dom-measures.json"),
      JSON.stringify(measures, null, 2),
    );
  });
});
```
### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/post-uat-02-11.06-mapping.md`

```md
# POST-UAT 02 — Mapping Figma 11.06 → runtime

| Champ | Valeur |
| --- | --- |
| File | `itgvCulInEnFY6DvgIegvP` |
| Frame | `1095:339` — 11.06 · Intégrations — connexion GitHub active |
| Viewport ref | 1680×970 |
| PNG natif | `11.06-integrations-github-connected.png` |
| SHA256 | `d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335` |
| Session Figma | `8c88836d-7841-4c10-94a6-f2c482a7ade1` |

## Mapping nœud → React/DOM → CSS → assertion

| Node | Rôle | DOM / React | CSS | Assertion |
| --- | --- | --- | --- | --- |
| `1095:339` | Frame écran | shell + `/settings/integrations` | — | viewport 1680×970 |
| `1095:340` | Rail personnel 246 | `data-testid=studio-rail` | rail variant personnel | width 246 ±2 |
| `1095:334` | Nav Intégrations active | `nav-integrations.is-active` | `.studio-rail-nav-item.is-active` + `--fig-accent-bg` | class `is-active` |
| `1095:353` | Topbar 70 | shell header | shell | h≈70 (shell) |
| `1095:355` | Contenu x284 w1358 | `integrations-1106-page` / panel | max-width 1358 · shell inset | x≈284 w≈1358 ≤2px |
| `1095:357..359` | En-tête + microcopy | `integrations-1106-header` | eyebrow/title/lead | textes Figma |
| `1095:360` | Bandeau vert | `integrations-status-banner` | `.is-ok` → `--fig-ok-bg`/`--fig-ok` | computed rgb(23,56,47)/(108,219,186) |
| `1095:363` | Panneau GitHub 858 | `github-integration-card` | grid 858fr | w≈858 ≤2px |
| `1095:368+` | Cartes dépôts | `repo-list` / `integration-repo-*` | `.integrations-1106-repo` | données réelles provider (0..n) |
| `1095:375` | Actualiser les accès | `refresh-repos` | `git-btn-secondary` 205×42 | label + secondary |
| `1095:377` | Déconnecter GitHub | `disconnect-github` | `git-btn-secondary` 205×42 | label + secondary |
| `1095:379` | Panneau portée 482 | `integrations-explain-column` | grid 482fr | w≈482 ≤2px |
| `1095:380..389` | Microcopy droite | SCOPE_CARDS | — | 3 cartes Figma |

## F2 1680×970 (mesures runtime)

Voir `runtime/runtime-11.06-dom-measures.json`.

| Rectangle | Figma | Runtime | Δ | F2 ≤2 |
| --- | --- | --- | --- | --- |
| Rail w | 246 | 246 | 0 | PASS |
| Contenu x | 284 | 284.39 | 0.39 | PASS |
| Contenu w | 1358 | 1357.22 | 0.78 | PASS |
| GitHub card w | 858 | 857.48 | 0.52 | PASS |
| Explain w | 482 | 481.73 | 0.27 | PASS |
| Boutons | 205×42 | 205×42 | 0 | PASS |

## Réserves

- Repo cards : maquette montre 2 exemples ; runtime affiche N dépôts provider (SCRIPTED/REAL) — **pas d’invention**.
- G5 pixel-diff image globale : non utilisé comme critère unique ; F2 géométrie + styles computed + captures régionales.
- RECETTE : non redéployée ce cycle.
```
### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/11.06-integrations-github-connected.png.sha256`

```sha256
d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335  /Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/11.06-integrations-github-connected.png
```
### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/runtime/runtime-11.06-dom-measures.json`

```json
{
  "figmaFrame": {
    "w": 1680,
    "h": 970,
    "nodeId": "1095:339"
  },
  "figmaPngSha256": "d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335",
  "capturedAt": "2026-11-22T04:50:37.784Z",
  "regions": {
    "1680x970": {
      "rail": {
        "x": 0,
        "y": 0,
        "width": 246,
        "height": 970
      },
      "navIntegrations": {
        "x": 19,
        "y": 260.15625,
        "width": 207,
        "height": 42
      },
      "panel": {
        "x": 284.390625,
        "y": 109.59375,
        "width": 1357.21875,
        "height": 577.296875
      },
      "layout": {
        "x": 284.390625,
        "y": 298.328125,
        "width": 1357.21875,
        "height": 388.5625
      },
      "banner": {
        "x": 284.390625,
        "y": 228.78125,
        "width": 1357.21875,
        "height": 45.546875
      },
      "githubCard": {
        "x": 284.390625,
        "y": 298.328125,
        "width": 857.484375,
        "height": 388.5625
      },
      "explainColumn": {
        "x": 1159.875,
        "y": 298.328125,
        "width": 481.734375,
        "height": 388.5625
      },
      "refreshBtn": {
        "x": 306.390625,
        "y": 576.109375,
        "width": 205,
        "height": 42
      },
      "disconnectBtn": {
        "x": 523.390625,
        "y": 576.109375,
        "width": 205,
        "height": 42
      }
    },
    "1680x970-banner-computed": {
      "backgroundColor": "rgb(23, 56, 47)",
      "color": "rgb(108, 219, 186)",
      "borderRadius": "8px",
      "fontSize": "13px",
      "fontWeight": "600"
    }
  }
}
```

### IntegrationsPanel.tsx (état final intégral)

```tsx
"use client";

import { useCallback, useEffect, useState } from "react";

type IntegrationView = {
  provider: string;
  providerMode: string;
  status: string;
  repositories: Array<{
    id: string;
    fullName: string;
    defaultBranch: string | null;
    permissions?: { source?: string; contents?: string; pull_requests?: string };
  }>;
};

function statusBanner(status: string): { tone: "ok" | "warn"; text: string } {
  switch (status) {
    case "CONNECTED":
      return {
        tone: "ok",
        text: "Votre compte GitHub est connecté. Vos dépôts autorisés sont accessibles.",
      };
    case "PENDING_APPROVAL":
      return {
        tone: "warn",
        text: "Approbation d'organisation en attente — aucun accès anticipé aux dépôts.",
      };
    case "ACCESS_REMOVED":
    case "REVOKED":
      return {
        tone: "warn",
        text: "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
      };
    default:
      return {
        tone: "warn",
        text: "GitHub n'est pas connecté. Studio et Nora restent entièrement utilisables.",
      };
  }
}

const SCOPE_CARDS: Array<{ title: string; body: string }> = [
  {
    title: "Votre compte GitHub",
    body: "Votre connexion est personnelle et distincte de vos projets.",
  },
  {
    title: "Dépôts de vos projets",
    body: "Chaque projet peut associer un ou plusieurs dépôts.",
  },
  {
    title: "Publier avec Nora",
    body: "Demandez à Nora de publier vos documents depuis Travail.",
  },
];

export function IntegrationsPanel() {
  const [view, setView] = useState<IntegrationView | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [confirmDisconnect, setConfirmDisconnect] = useState(false);

  const refresh = useCallback(async () => {
    const res = await fetch("/api/integrations/status");
    if (res.ok) setView(await res.json());
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function connect() {
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch("/api/integrations/github/authorize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnPath: "/settings/integrations" }),
      });
      const j = await res.json();
      if (!j.authorizeUrl && !j.state) {
        setMessage("Impossible de démarrer l'autorisation");
        return;
      }
      // SCRIPTED complete only when server chose flow=scripted.
      if (j.flow === "scripted") {
        const done = await fetch("/api/integrations/github/authorize/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ state: j.state }),
        });
        const statusBody = await done.json();
        if (!done.ok) {
          setMessage(statusBody.message ?? statusBody.error ?? "Autorisation SCRIPTED refusée");
          await refresh();
          return;
        }
        setView(statusBody);
        return;
      }
      if (!j.authorizeUrl || typeof j.authorizeUrl !== "string") {
        setMessage("URL d'autorisation GitHub absente — flux REAL non démarré");
        return;
      }
      window.location.assign(j.authorizeUrl);
    } finally {
      setBusy(false);
    }
  }

  async function disconnectConfirmed() {
    setBusy(true);
    try {
      await fetch("/api/integrations/github/disconnect", { method: "POST" });
      await refresh();
      setConfirmDisconnect(false);
    } finally {
      setBusy(false);
    }
  }

  async function refreshRepos() {
    setBusy(true);
    await fetch("/api/integrations/github/refresh", { method: "POST" });
    await refresh();
    setBusy(false);
  }

  const status = view?.status ?? "DISCONNECTED";
  const banner = statusBanner(status);
  const repos = view?.repositories ?? [];

  if (confirmDisconnect) {
    return (
      <div className="integrations-1106" data-testid="integrations-disconnect-confirm">
        <header className="integrations-1106-header">
          <p className="integrations-1106-eyebrow">PARAMÈTRES / SERVICES EXTERNES</p>
          <h1 className="integrations-1106-title">Déconnecter GitHub</h1>
          <p className="integrations-1106-lead">
            Le retrait de la connexion personnelle affecte les futures lectures Git de tous les
            projets concernés.
          </p>
        </header>
        <div
          className="integrations-1106-banner is-warn"
          data-testid="disconnect-consequence-banner"
        >
          Aucune suppression de dépôt GitHub ni de document Studio ne résulte de cette action.
        </div>
        <div className="integrations-1106-grid">
          <section className="integrations-1106-card" data-testid="disconnect-confirm-card">
            <h2 className="integrations-1106-card-title">Déconnecter le compte GitHub ?</h2>
            <p className="integrations-1106-muted">
              Les accès Git dépendants de cette connexion seront suspendus dans les projets du
              Pilote. Ceci coupe l’accès Studio local — ce n’est pas automatiquement une révocation
              complète de l’installation GitHub.
            </p>
            <div className="integrations-1106-repo">
              <p className="integrations-1106-repo-name">Dépôts associés aux projets</p>
              <p className="integrations-1106-repo-meta">
                Les associations historiques ne sont pas effacées.
              </p>
            </div>
            <div className="integrations-1106-repo">
              <p className="integrations-1106-repo-name">Publications antérieures</p>
              <p className="integrations-1106-repo-meta">
                Les références, commits et PR observés restent dans les preuves du projet.
              </p>
            </div>
            <div className="integrations-1106-actions">
              <button
                type="button"
                className="git-btn-primary"
                disabled={busy}
                onClick={() => void disconnectConfirmed()}
                data-testid="disconnect-github-confirm"
              >
                Confirmer la déconnexion
              </button>
              <button
                type="button"
                className="git-btn-secondary"
                disabled={busy}
                onClick={() => setConfirmDisconnect(false)}
                data-testid="disconnect-github-cancel"
              >
                Annuler
              </button>
            </div>
          </section>
          <aside className="integrations-1106-card" data-testid="integrations-explain-column">
            <h2 className="integrations-1106-aside-title">États des projets</h2>
            {[
              ["Documents Studio", "Toujours disponibles sans Git."],
              ["Nouvelles lectures", "Refusées jusqu’au rétablissement des accès."],
              ["Publications", "Aucune nouvelle publication autorisée sans capacités effectives."],
            ].map(([title, body]) => (
              <div key={title} className="integrations-1106-repo">
                <p className="integrations-1106-repo-name">{title}</p>
                <p className="integrations-1106-repo-meta">{body}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="integrations-1106" data-testid="integrations-panel">
      <header className="integrations-1106-header">
        <p className="integrations-1106-eyebrow">PARAMÈTRES / SERVICES EXTERNES</p>
        <h1 className="integrations-1106-title">Intégrations</h1>
        <p className="integrations-1106-lead">
          Gérez votre connexion GitHub et consultez les dépôts accessibles.
        </p>
      </header>

      <div
        className={`integrations-1106-banner ${banner.tone === "ok" ? "is-ok" : "is-warn"}`}
        data-testid="integrations-status-banner"
        role="status"
      >
        {banner.text}
      </div>

      <div className="integrations-1106-grid" data-testid="integrations-layout-1106">
        <section className="integrations-1106-card" data-testid="github-integration-card">
          <div className="integrations-1106-provider">
            <h2 className="integrations-1106-card-title">GitHub</h2>
            {status === "CONNECTED" ? (
              <span className="integrations-1106-connected" data-testid="github-connected-badge">
                ● Connecté
              </span>
            ) : null}
          </div>

          {status === "CONNECTED" ? (
            <>
              <p className="integrations-1106-muted">
                Dépôts accessibles depuis votre compte GitHub.
              </p>
              {repos.length === 0 ? (
                <p className="integrations-1106-muted" data-testid="repo-list-empty">
                  Aucun dépôt autorisé.
                </p>
              ) : (
                <ul className="integrations-1106-repo-list" data-testid="repo-list">
                  {repos.map((r) => (
                    <li
                      key={r.id}
                      className="integrations-1106-repo"
                      data-testid={`integration-repo-${r.id}`}
                    >
                      <p className="integrations-1106-repo-name">{r.fullName}</p>
                      <p className="integrations-1106-repo-meta">
                        Accessible au compte Pilote
                        {r.defaultBranch ? ` · branche par défaut ${r.defaultBranch}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <div className="integrations-1106-actions">
                <button
                  type="button"
                  className="git-btn-secondary"
                  disabled={busy}
                  onClick={() => void refreshRepos()}
                  data-testid="refresh-repos"
                >
                  Actualiser les accès
                </button>
                <button
                  type="button"
                  className="git-btn-secondary"
                  disabled={busy}
                  onClick={() => setConfirmDisconnect(true)}
                  data-testid="disconnect-github"
                  title="Ouvre la confirmation — aucun appel de déconnexion avant confirmation"
                >
                  Déconnecter GitHub
                </button>
              </div>
              <p className="integrations-1106-write-note" data-testid="integrations-write-boundary">
                Les publications vers GitHub restent soumises à une autorisation distincte. Si les
                écritures ne sont pas activées pour cet environnement, aucune publication distante
                n’est effectuée depuis cette page.
              </p>
            </>
          ) : (
            <>
              <p className="integrations-1106-muted">
                Consultez vos dépôts autorisés, travaillez avec Nora et publiez des documents sous
                votre contrôle.
              </p>
              <p className="integrations-1106-muted" data-testid="repo-list-empty">
                Aucun dépôt autorisé.
              </p>
              <div className="integrations-1106-actions">
                <button
                  type="button"
                  className="git-btn-primary"
                  disabled={busy}
                  onClick={() => void connect()}
                  data-testid="connect-github"
                >
                  Configurer GitHub
                </button>
                <button
                  type="button"
                  className="git-btn-secondary"
                  disabled={busy}
                  onClick={() => void refresh()}
                >
                  Plus tard
                </button>
              </div>
            </>
          )}
        </section>

        <aside className="integrations-1106-card" data-testid="integrations-explain-column">
          <h2 className="integrations-1106-aside-title">À propos de votre connexion</h2>
          {SCOPE_CARDS.map((card) => (
            <div key={card.title} className="integrations-1106-repo">
              <p className="integrations-1106-repo-name">{card.title}</p>
              <p className="integrations-1106-repo-meta">{card.body}</p>
            </div>
          ))}
        </aside>
      </div>

      {message ? (
        <p className="integrations-1106-message" role="alert">
          {message}
        </p>
      ) : null}
    </div>
  );
}
```

---

## 8. Diffs modifications — COMPLET §7.2.1

Inventaire M (7 fichiers code/docs de ce correctif) :
- `projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx`
- `projects/sfia-studio-next/web/src/components/figma/tokens.css`
- `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`
- `projects/sfia-studio-next/web/src/components/shell/studio-shell.css`
- `projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`
- `projects/sfia-studio-next/construction/delivery-history.md`

### Diff unifié

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f3705b3a..aa8c8c41 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,36 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-02-INTEGRATIONS-UX
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 05:50 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 02 Intégrations UX 11.06 |
+| Type | EVOL / UI CONFORMANCE · STANDARD · **NO RELEASE** |
+| Figma | `itgvCulInEnFY6DvgIegvP` node `1095:339` · PNG SHA256 `d50412ed…` |
+| Blast | IntegrationsPanel · tokens 11.06 · StudioShell nav active · tests · evidence |
+| D6–D9 / OAuth / WRITE | **NO CHANGE** |
+| RECETTE | **préservée** `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` — aucun cutover |
+| Preuves | unit 4 PASS · Playwright 3 PASS · F2 rail/contenu/panneaux/boutons ≤2px · styles bandeau |
+| Push projet | **NONE** |
+| Verdict | **DELIVERY READY — G5 PROVEN** (11.06 rectangles stables ; UAT Morris distinct) |
+
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-RECETTE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 04:50 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 01 cutover RECETTE |
+| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
+| GO Morris | SHA `9f346391…` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
+| Avant | `@98185598` / `1xEbvCdTAX6ht262w4oKF` |
+| Après | servi HTTP `<!--F85QQBTLa8nq5zKYxMKKZ-->` · service `ml4d-ux004` |
+| DB | `sfia_next_recette_ml4` préservée · inventaire identique · Equip'Campus présent |
+| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` + restore proof PASS |
+| Push projet | **NONE** |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-FREEZE-LOCAL

 | Field | Value |
@@ -17,11 +47,11 @@ Append-only logical journal of Cursor product deliveries.
 | TREE | `364c907342772f5430cf855d269cecc458f0546c` |
 | BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
 | Artefact | `…/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/…/web/.next` |
-| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** |
+| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** (à ce stade) |
 | Réserves fermées | A contenu D4↔SCRIPTED · B D7 COMPLETED + D8 · C build détaché |
 | Push projet | **NONE** |
-| Cutover | **NOT EXECUTED** — RECETTE `@98185598` / `1xEbvCdTAX6ht262w4oKF` intacte |
-| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** |
+| Cutover | traité ensuite — voir `…-RECETTE-CUTOVER` |
+| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** (historique freeze) |

 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CLOTURE

diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 72570bbe..a4dda8f9 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -2,14 +2,14 @@

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-22 (POST-UAT 01 clôture publication Nora — as-built mis à jour) |
+| Date | 2026-11-22 (POST-UAT 02 Intégrations 11.06 — as-built mis à jour) |
 | Branche | `feat/next-ensemble08-git-publications-nora` |
 | Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
-| Profil | CRITICAL · Delivery correctif post-UAT · NO RELEASE |
+| Profil | CRITICAL · Delivery cutover post-UAT · NO RELEASE |
 | CKC | FALLBACK (Delivery #8) |
-| Freeze RECETTE (inchangé) | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839f` · BUILD `1xEbvCdTAX6ht262w4oKF` |
-| Candidat DEV post-UAT | **worktree dirty** — nouveau SHA après commit Morris (pas encore figé) |
-| RECETTE | **FROZEN / AVAILABLE** — aucune mutation ce mandat |
+| Runtime RECETTE servi | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
+| Runtime précédent (rollback) | `98185598de0d3f3b84af862aecea04b9099217ca` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| RECETTE | **AVAILABLE** — cutover POST-UAT 01 exécuté · DB préservée · UAT Morris requis |

 ## Livré (y compris finalisation technique)

@@ -37,12 +37,13 @@
 - Champs qual `publication.documentHint` / `objectRef` / `repositoryHint`
 - Preuves PG : WRITE OFF zéro mutation ; SCRIPTED D6/D7/D8 + Nora ; Playwright Nora discriminant (DEV :3101)

-### Capacité UX (POST-UAT 01 + convergence)
+### Capacité UX (POST-UAT 01 + convergence + POST-UAT 02)
 - Double en-tête « Intégration Git » : `ProjectChrome` breadcrumb-only pour surfaces `git`/`publication`
 - Microcopy Pilote : jargon D4/D7/D8 / « projection » retiré des surfaces Dépôts Git / Intégrations
 - Infos : popover ancré `GitFileInfoPopover` — `aria-controls` = `panelId` ; Escape / Fermer restaurent le focus ; fermeture sur changement fichier/ref
-- Intégrations 11.06 : panneau GitHub + repos autorisés + Actualiser/Déconnecter ; colonne « Une connexion à la carte » ; pas de cartes pédagogiques héritées à gauche ; confirmation 11.07 inchangée fonctionnellement
-- G5 pixel Figma : **NOT PROVEN** (Morris UAT)
+- **POST-UAT 02 / Figma 11.06** : composition 858/482, bandeau `--fig-ok-bg`, boutons secondaires « Actualiser les accès » / « Déconnecter GitHub », microcopy Figma (connexion / projets / Publier avec Nora), nav rail `is-active`, dépôts = provider réel (pas d’invention)
+- Confirmation déconnexion 11.07 : comportement inchangé (cancel sans effet)
+- G5 11.06 rectangles stables 1680×970 : **PROVEN** (F2 ≤2 CSS px — voir `figma-evidence/post-uat-02-11.06-mapping.md`)

 ### REAL multi-dépôts
 - Allowlist explicite `allowedFullNames` + env `GITHUB_APP_ALLOWED_REPOS` (même owner)
@@ -64,8 +65,10 @@
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (WRITE/MERGE hors mandat)
 - GitHub REAL READ : **NOT PROVEN** ce cycle
 - Nora LIVE E2E : **NOT PROVEN**
-- Candidate Git figée / build RECETTE : **SERVI** `@98185598` / `1xEbvCdTAX6ht262w4oKF` sur lane E07
+- Candidate POST-UAT : **SERVI** `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` sur lane RECETTE `:3200`
+- Rollback immédiat : artefact `@98185598` / `1xEbvCdTAX6ht262w4oKF` conservé
 - G5 visuelle : **NOT PROVEN** — UAT Morris
+- Nora LIVE / GitHub REAL WRITE : **NOT PROVEN**

 ## Preuves exécutées (finalisation)
 - `tsc --noEmit` PASS
diff --git a/projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx b/projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx
index e57875b9..3bbf7d64 100644
--- a/projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx
@@ -2,7 +2,7 @@ import { IntegrationsPanel } from "@/components/integrations/IntegrationsPanel";

 export default function IntegrationsSettingsPage() {
   return (
-    <div className="max-w-6xl mx-auto p-6 md:p-8">
+    <div className="integrations-1106-page" data-testid="integrations-settings-page">
       <IntegrationsPanel />
     </div>
   );
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 6752bc97..e3891cd1 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5682,3 +5682,212 @@
   .git-repo-card-row { gap: 10px; }
   .git-preview-head { flex-direction: column; }
 }
+
+/* Ensemble 08 — Figma 11.06 Intégrations (node 1095:339) */
+.integrations-1106-page {
+  /* Shell already provides ~38px inset (Figma content x=284 after rail 246). */
+  width: 100%;
+  max-width: 1358px;
+  margin: 0;
+  padding: 16px 0 32px;
+  box-sizing: border-box;
+}
+
+.integrations-1106 {
+  display: flex;
+  flex-direction: column;
+  gap: 24px;
+  width: 100%;
+}
+
+.integrations-1106-header {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+}
+
+.integrations-1106-eyebrow {
+  margin: 0;
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.02em;
+  text-transform: uppercase;
+  color: var(--fig-accent, var(--accent));
+}
+
+.integrations-1106-title {
+  margin: 0;
+  font-size: 34px;
+  line-height: 1.15;
+  font-weight: 700;
+  color: var(--fig-ink, var(--ink));
+}
+
+.integrations-1106-lead {
+  margin: 0;
+  max-width: 1310px;
+  font-size: 14px;
+  line-height: 1.4;
+  color: var(--fig-muted, var(--muted));
+}
+
+.integrations-1106-banner {
+  display: flex;
+  align-items: flex-start;
+  width: 100%;
+  box-sizing: border-box;
+  padding: 14px 17px;
+  border-radius: 8px;
+  font-size: 13px;
+  font-weight: 600;
+  line-height: 1.35;
+}
+
+.integrations-1106-banner.is-ok {
+  background: var(--fig-ok-bg);
+  color: var(--fig-ok, var(--ok));
+}
+
+.integrations-1106-banner.is-warn {
+  background: var(--fig-warn-bg);
+  color: var(--fig-warn, var(--warn));
+}
+
+.integrations-1106-grid {
+  display: grid;
+  grid-template-columns: minmax(0, 858fr) minmax(0, 482fr);
+  gap: 18px;
+  align-items: stretch;
+  width: 100%;
+}
+
+.integrations-1106-card {
+  display: flex;
+  flex-direction: column;
+  gap: 13px;
+  min-height: 0;
+  box-sizing: border-box;
+  padding: 20px 21px;
+  border-radius: 10px;
+  border: 1px solid var(--fig-line, var(--line));
+  background: var(--fig-panel, var(--panel));
+}
+
+.integrations-1106-provider {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 16px;
+}
+
+.integrations-1106-card-title {
+  margin: 0;
+  font-size: 22px;
+  font-weight: 600;
+  color: var(--fig-ink, var(--ink));
+}
+
+.integrations-1106-aside-title {
+  margin: 0;
+  font-size: 20px;
+  font-weight: 600;
+  color: var(--fig-ink, var(--ink));
+}
+
+.integrations-1106-connected {
+  font-size: 13px;
+  font-weight: 600;
+  color: var(--fig-ok, var(--ok));
+  white-space: nowrap;
+}
+
+.integrations-1106-muted {
+  margin: 0;
+  font-size: 13px;
+  line-height: 1.4;
+  color: var(--fig-muted, var(--muted));
+}
+
+.integrations-1106-repo-list {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 13px;
+}
+
+.integrations-1106-repo {
+  display: flex;
+  flex-direction: column;
+  gap: 7px;
+  box-sizing: border-box;
+  padding: 13px 15px;
+  border-radius: 8px;
+  border: 1px solid var(--fig-line, var(--line));
+  background: var(--fig-panel-hi, #1b2639);
+}
+
+.integrations-1106-repo-name {
+  margin: 0;
+  font-size: 16px;
+  font-weight: 600;
+  color: var(--fig-ink, var(--ink));
+  word-break: break-word;
+}
+
+.integrations-1106-repo-meta {
+  margin: 0;
+  font-size: 12px;
+  line-height: 1.4;
+  color: var(--fig-muted, var(--muted));
+}
+
+.integrations-1106-actions {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 12px;
+  padding-top: 2px;
+}
+
+.integrations-1106-actions .git-btn-secondary,
+.integrations-1106-actions .git-btn-primary {
+  min-width: 205px;
+  min-height: 42px;
+  border-radius: 8px;
+  font-size: 12px;
+}
+
+.integrations-1106-write-note {
+  margin: 0;
+  font-size: 12px;
+  line-height: 1.45;
+  color: var(--fig-quiet, var(--fig-muted, var(--muted)));
+}
+
+.integrations-1106-message {
+  margin: 0;
+  font-size: 13px;
+  color: var(--fig-warn, var(--warn));
+}
+
+@media (max-width: 1280px) {
+  .integrations-1106-grid {
+    grid-template-columns: 1fr;
+  }
+}
+
+@media (max-width: 720px) {
+  .integrations-1106-page {
+    padding: 12px 0 24px;
+  }
+  .integrations-1106-title {
+    font-size: 28px;
+  }
+  .integrations-1106-actions .git-btn-secondary,
+  .integrations-1106-actions .git-btn-primary {
+    min-width: 0;
+    width: 100%;
+  }
+}
diff --git a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
index a535cc27..dc66274c 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
@@ -14,32 +14,47 @@ type IntegrationView = {
   }>;
 };

-function statusBanner(status: string): { tone: string; text: string } {
+function statusBanner(status: string): { tone: "ok" | "warn"; text: string } {
   switch (status) {
     case "CONNECTED":
       return {
-        tone: "text-emerald-300",
-        text: "GitHub connecté — accès fournisseur vérifié. Aucun mandat de publication n’est accordé par cette seule connexion.",
+        tone: "ok",
+        text: "Votre compte GitHub est connecté. Vos dépôts autorisés sont accessibles.",
       };
     case "PENDING_APPROVAL":
       return {
-        tone: "text-amber-300",
+        tone: "warn",
         text: "Approbation d'organisation en attente — aucun accès anticipé aux dépôts.",
       };
     case "ACCESS_REMOVED":
     case "REVOKED":
       return {
-        tone: "text-amber-300",
+        tone: "warn",
         text: "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
       };
     default:
       return {
-        tone: "text-amber-300",
+        tone: "warn",
         text: "GitHub n'est pas connecté. Studio et Nora restent entièrement utilisables.",
       };
   }
 }

+const SCOPE_CARDS: Array<{ title: string; body: string }> = [
+  {
+    title: "Votre compte GitHub",
+    body: "Votre connexion est personnelle et distincte de vos projets.",
+  },
+  {
+    title: "Dépôts de vos projets",
+    body: "Chaque projet peut associer un ou plusieurs dépôts.",
+  },
+  {
+    title: "Publier avec Nora",
+    body: "Demandez à Nora de publier vos documents depuis Travail.",
+  },
+];
+
 export function IntegrationsPanel() {
   const [view, setView] = useState<IntegrationView | null>(null);
   const [busy, setBusy] = useState(false);
@@ -115,52 +130,49 @@ export function IntegrationsPanel() {

   const status = view?.status ?? "DISCONNECTED";
   const banner = statusBanner(status);
+  const repos = view?.repositories ?? [];

   if (confirmDisconnect) {
     return (
-      <div className="space-y-5" data-testid="integrations-disconnect-confirm">
-        <header className="space-y-2">
-          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-            PARAMÈTRES / SERVICES EXTERNES
-          </p>
-          <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">
-            Déconnecter GitHub
-          </h1>
-          <p className="text-base text-[var(--muted)] max-w-3xl">
+      <div className="integrations-1106" data-testid="integrations-disconnect-confirm">
+        <header className="integrations-1106-header">
+          <p className="integrations-1106-eyebrow">PARAMÈTRES / SERVICES EXTERNES</p>
+          <h1 className="integrations-1106-title">Déconnecter GitHub</h1>
+          <p className="integrations-1106-lead">
             Le retrait de la connexion personnelle affecte les futures lectures Git de tous les
             projets concernés.
           </p>
         </header>
         <div
-          className="rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,#3d3021_80%,transparent)] p-4 text-sm font-medium text-amber-300"
+          className="integrations-1106-banner is-warn"
           data-testid="disconnect-consequence-banner"
         >
           Aucune suppression de dépôt GitHub ni de document Studio ne résulte de cette action.
         </div>
-        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
-          <section className="studio-card p-5 space-y-4" data-testid="disconnect-confirm-card">
-            <h2 className="text-[22px] font-semibold">Déconnecter le compte GitHub ?</h2>
-            <p className="text-sm text-[var(--muted)]">
+        <div className="integrations-1106-grid">
+          <section className="integrations-1106-card" data-testid="disconnect-confirm-card">
+            <h2 className="integrations-1106-card-title">Déconnecter le compte GitHub ?</h2>
+            <p className="integrations-1106-muted">
               Les accès Git dépendants de cette connexion seront suspendus dans les projets du
               Pilote. Ceci coupe l’accès Studio local — ce n’est pas automatiquement une révocation
               complète de l’installation GitHub.
             </p>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Dépôts associés aux projets</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
+            <div className="integrations-1106-repo">
+              <p className="integrations-1106-repo-name">Dépôts associés aux projets</p>
+              <p className="integrations-1106-repo-meta">
                 Les associations historiques ne sont pas effacées.
               </p>
             </div>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Publications antérieures</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
+            <div className="integrations-1106-repo">
+              <p className="integrations-1106-repo-name">Publications antérieures</p>
+              <p className="integrations-1106-repo-meta">
                 Les références, commits et PR observés restent dans les preuves du projet.
               </p>
             </div>
-            <div className="flex flex-wrap gap-3 pt-1">
+            <div className="integrations-1106-actions">
               <button
                 type="button"
-                className="studio-btn"
+                className="git-btn-primary"
                 disabled={busy}
                 onClick={() => void disconnectConfirmed()}
                 data-testid="disconnect-github-confirm"
@@ -169,7 +181,7 @@ export function IntegrationsPanel() {
               </button>
               <button
                 type="button"
-                className="studio-btn-secondary"
+                className="git-btn-secondary"
                 disabled={busy}
                 onClick={() => setConfirmDisconnect(false)}
                 data-testid="disconnect-github-cancel"
@@ -178,24 +190,18 @@ export function IntegrationsPanel() {
               </button>
             </div>
           </section>
-          <aside className="studio-card p-5 space-y-3">
-            <h2 className="text-[20px] font-semibold">États des projets</h2>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Documents Studio</p>
-              <p className="text-xs text-[var(--muted)] mt-1">Toujours disponibles sans Git.</p>
-            </div>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Nouvelles lectures</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
-                Refusées jusqu’au rétablissement des accès.
-              </p>
-            </div>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Publications</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
-                Aucune nouvelle publication autorisée sans capacités effectives.
-              </p>
-            </div>
+          <aside className="integrations-1106-card" data-testid="integrations-explain-column">
+            <h2 className="integrations-1106-aside-title">États des projets</h2>
+            {[
+              ["Documents Studio", "Toujours disponibles sans Git."],
+              ["Nouvelles lectures", "Refusées jusqu’au rétablissement des accès."],
+              ["Publications", "Aucune nouvelle publication autorisée sans capacités effectives."],
+            ].map(([title, body]) => (
+              <div key={title} className="integrations-1106-repo">
+                <p className="integrations-1106-repo-name">{title}</p>
+                <p className="integrations-1106-repo-meta">{body}</p>
+              </div>
+            ))}
           </aside>
         </div>
       </div>
@@ -203,33 +209,29 @@ export function IntegrationsPanel() {
   }

   return (
-    <div className="space-y-5" data-testid="integrations-panel">
-      <header className="space-y-2">
-        <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-          PARAMÈTRES / SERVICES EXTERNES
-        </p>
-        <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">Intégrations</h1>
-        <p className="text-base text-[var(--muted)] max-w-3xl">
-          Gérer la connexion personnelle GitHub et consulter les dépôts réellement autorisés.
+    <div className="integrations-1106" data-testid="integrations-panel">
+      <header className="integrations-1106-header">
+        <p className="integrations-1106-eyebrow">PARAMÈTRES / SERVICES EXTERNES</p>
+        <h1 className="integrations-1106-title">Intégrations</h1>
+        <p className="integrations-1106-lead">
+          Gérez votre connexion GitHub et consultez les dépôts accessibles.
         </p>
       </header>

       <div
-        className={`rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_80%,transparent)] p-4 text-sm font-medium ${banner.tone}`}
+        className={`integrations-1106-banner ${banner.tone === "ok" ? "is-ok" : "is-warn"}`}
         data-testid="integrations-status-banner"
+        role="status"
       >
         {banner.text}
       </div>

-      <div
-        className="grid gap-5 lg:grid-cols-[minmax(0,858fr)_minmax(0,482fr)]"
-        data-testid="integrations-layout-1106"
-      >
-        <section className="studio-card p-5 space-y-4" data-testid="github-integration-card">
-          <div className="flex items-center gap-3 flex-wrap">
-            <h2 className="text-[22px] font-semibold m-0">GitHub</h2>
+      <div className="integrations-1106-grid" data-testid="integrations-layout-1106">
+        <section className="integrations-1106-card" data-testid="github-integration-card">
+          <div className="integrations-1106-provider">
+            <h2 className="integrations-1106-card-title">GitHub</h2>
             {status === "CONNECTED" ? (
-              <span className="git-badge-ok" data-testid="github-connected-badge">
+              <span className="integrations-1106-connected" data-testid="github-connected-badge">
                 ● Connecté
               </span>
             ) : null}
@@ -237,23 +239,23 @@ export function IntegrationsPanel() {

           {status === "CONNECTED" ? (
             <>
-              <p className="text-sm text-[var(--muted)] m-0">
-                Dépôts autorisés par la GitHub App — affichés côté serveur.
+              <p className="integrations-1106-muted">
+                Dépôts accessibles depuis votre compte GitHub.
               </p>
-              {(view?.repositories?.length ?? 0) === 0 ? (
-                <p className="text-sm muted" data-testid="repo-list-empty">
+              {repos.length === 0 ? (
+                <p className="integrations-1106-muted" data-testid="repo-list-empty">
                   Aucun dépôt autorisé.
                 </p>
               ) : (
-                <ul className="space-y-2 m-0 p-0 list-none" data-testid="repo-list">
-                  {view!.repositories.map((r) => (
+                <ul className="integrations-1106-repo-list" data-testid="repo-list">
+                  {repos.map((r) => (
                     <li
                       key={r.id}
-                      className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-4 py-3"
+                      className="integrations-1106-repo"
                       data-testid={`integration-repo-${r.id}`}
                     >
-                      <p className="text-sm font-semibold m-0 mono">{r.fullName}</p>
-                      <p className="text-xs text-[var(--muted)] mt-1 mb-0">
+                      <p className="integrations-1106-repo-name">{r.fullName}</p>
+                      <p className="integrations-1106-repo-meta">
                         Accessible au compte Pilote
                         {r.defaultBranch ? ` · branche par défaut ${r.defaultBranch}` : ""}
                       </p>
@@ -261,39 +263,46 @@ export function IntegrationsPanel() {
                   ))}
                 </ul>
               )}
-              <div className="flex flex-wrap gap-3 pt-1">
+              <div className="integrations-1106-actions">
                 <button
                   type="button"
-                  className="studio-btn"
+                  className="git-btn-secondary"
                   disabled={busy}
                   onClick={() => void refreshRepos()}
                   data-testid="refresh-repos"
                 >
-                  Actualiser
+                  Actualiser les accès
                 </button>
                 <button
                   type="button"
-                  className="studio-btn-secondary"
+                  className="git-btn-secondary"
                   disabled={busy}
                   onClick={() => setConfirmDisconnect(true)}
                   data-testid="disconnect-github"
                   title="Ouvre la confirmation — aucun appel de déconnexion avant confirmation"
                 >
-                  Déconnecter
+                  Déconnecter GitHub
                 </button>
               </div>
+              <p className="integrations-1106-write-note" data-testid="integrations-write-boundary">
+                Les publications vers GitHub restent soumises à une autorisation distincte. Si les
+                écritures ne sont pas activées pour cet environnement, aucune publication distante
+                n’est effectuée depuis cette page.
+              </p>
             </>
           ) : (
             <>
-              <p className="text-sm text-[var(--muted)]">
-                Consulter vos dépôts autorisés, travailler avec Nora et publier des documents sous
+              <p className="integrations-1106-muted">
+                Consultez vos dépôts autorisés, travaillez avec Nora et publiez des documents sous
                 votre contrôle.
               </p>
-              <p className="text-sm muted">Aucun dépôt autorisé.</p>
-              <div className="flex flex-wrap gap-3 pt-1">
+              <p className="integrations-1106-muted" data-testid="repo-list-empty">
+                Aucun dépôt autorisé.
+              </p>
+              <div className="integrations-1106-actions">
                 <button
                   type="button"
-                  className="studio-btn"
+                  className="git-btn-primary"
                   disabled={busy}
                   onClick={() => void connect()}
                   data-testid="connect-github"
@@ -302,7 +311,7 @@ export function IntegrationsPanel() {
                 </button>
                 <button
                   type="button"
-                  className="studio-btn-secondary"
+                  className="git-btn-secondary"
                   disabled={busy}
                   onClick={() => void refresh()}
                 >
@@ -313,34 +322,22 @@ export function IntegrationsPanel() {
           )}
         </section>

-        <aside className="studio-card p-5 space-y-3" data-testid="integrations-explain-column">
-          <h2 className="text-[20px] font-semibold">Une connexion à la carte</h2>
-          {[
-            [
-              "Connexion personnelle",
-              "Autorisation GitHub propre au Pilote, distincte des projets.",
-            ],
-            [
-              "Rattachements projet",
-              "Chaque projet choisit les dépôts utiles, un ou plusieurs.",
-            ],
-            [
-              "Publication documentaire",
-              "Nora propose, le Pilote inspecte et autorise un mandat distinct.",
-            ],
-          ].map(([title, body]) => (
-            <div
-              key={title}
-              className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3"
-            >
-              <p className="text-sm font-semibold">{title}</p>
-              <p className="text-xs text-[var(--muted)] mt-1">{body}</p>
+        <aside className="integrations-1106-card" data-testid="integrations-explain-column">
+          <h2 className="integrations-1106-aside-title">À propos de votre connexion</h2>
+          {SCOPE_CARDS.map((card) => (
+            <div key={card.title} className="integrations-1106-repo">
+              <p className="integrations-1106-repo-name">{card.title}</p>
+              <p className="integrations-1106-repo-meta">{card.body}</p>
             </div>
           ))}
         </aside>
       </div>

-      {message ? <p className="text-sm text-amber-400">{message}</p> : null}
+      {message ? (
+        <p className="integrations-1106-message" role="alert">
+          {message}
+        </p>
+      ) : null}
     </div>
   );
 }
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 66fafd0f..5d0c406a 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -310,10 +310,13 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                 <div className="studio-rail-section mb-1">Accès</div>
                 <Link
                   href={ACCOUNT_HREF}
-                  className="text-sm muted block px-2 py-1"
+                  className={`studio-rail-nav-item ${
+                    pathname.startsWith("/settings/integrations") ? "is-active" : ""
+                  }`}
+                  aria-current={pathname.startsWith("/settings/integrations") ? "page" : undefined}
                   data-testid="nav-integrations"
                 >
-                  Intégrations
+                  <span>Intégrations</span>
                 </Link>
               </div>
             ) : null}
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 5f86dff0..dce90c04 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -318,9 +318,9 @@ html.studio-shell-lock body {
 }

 .studio-rail-nav-item.is-active {
-  background: #292d58;
-  border-color: transparent;
-  color: #f4f6fc;
+  background: var(--fig-accent-bg, #242c4b);
+  border-color: var(--fig-line, transparent);
+  color: var(--fig-ink, #f3f5ff);
   font-weight: 600;
 }
```

### Diffs par fichier

#### `projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
index a535cc27..dc66274c 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
@@ -14,32 +14,47 @@ type IntegrationView = {
   }>;
 };

-function statusBanner(status: string): { tone: string; text: string } {
+function statusBanner(status: string): { tone: "ok" | "warn"; text: string } {
   switch (status) {
     case "CONNECTED":
       return {
-        tone: "text-emerald-300",
-        text: "GitHub connecté — accès fournisseur vérifié. Aucun mandat de publication n’est accordé par cette seule connexion.",
+        tone: "ok",
+        text: "Votre compte GitHub est connecté. Vos dépôts autorisés sont accessibles.",
       };
     case "PENDING_APPROVAL":
       return {
-        tone: "text-amber-300",
+        tone: "warn",
         text: "Approbation d'organisation en attente — aucun accès anticipé aux dépôts.",
       };
     case "ACCESS_REMOVED":
     case "REVOKED":
       return {
-        tone: "text-amber-300",
+        tone: "warn",
         text: "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
       };
     default:
       return {
-        tone: "text-amber-300",
+        tone: "warn",
         text: "GitHub n'est pas connecté. Studio et Nora restent entièrement utilisables.",
       };
   }
 }

+const SCOPE_CARDS: Array<{ title: string; body: string }> = [
+  {
+    title: "Votre compte GitHub",
+    body: "Votre connexion est personnelle et distincte de vos projets.",
+  },
+  {
+    title: "Dépôts de vos projets",
+    body: "Chaque projet peut associer un ou plusieurs dépôts.",
+  },
+  {
+    title: "Publier avec Nora",
+    body: "Demandez à Nora de publier vos documents depuis Travail.",
+  },
+];
+
 export function IntegrationsPanel() {
   const [view, setView] = useState<IntegrationView | null>(null);
   const [busy, setBusy] = useState(false);
@@ -115,52 +130,49 @@ export function IntegrationsPanel() {

   const status = view?.status ?? "DISCONNECTED";
   const banner = statusBanner(status);
+  const repos = view?.repositories ?? [];

   if (confirmDisconnect) {
     return (
-      <div className="space-y-5" data-testid="integrations-disconnect-confirm">
-        <header className="space-y-2">
-          <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-            PARAMÈTRES / SERVICES EXTERNES
-          </p>
-          <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">
-            Déconnecter GitHub
-          </h1>
-          <p className="text-base text-[var(--muted)] max-w-3xl">
+      <div className="integrations-1106" data-testid="integrations-disconnect-confirm">
+        <header className="integrations-1106-header">
+          <p className="integrations-1106-eyebrow">PARAMÈTRES / SERVICES EXTERNES</p>
+          <h1 className="integrations-1106-title">Déconnecter GitHub</h1>
+          <p className="integrations-1106-lead">
             Le retrait de la connexion personnelle affecte les futures lectures Git de tous les
             projets concernés.
           </p>
         </header>
         <div
-          className="rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,#3d3021_80%,transparent)] p-4 text-sm font-medium text-amber-300"
+          className="integrations-1106-banner is-warn"
           data-testid="disconnect-consequence-banner"
         >
           Aucune suppression de dépôt GitHub ni de document Studio ne résulte de cette action.
         </div>
-        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
-          <section className="studio-card p-5 space-y-4" data-testid="disconnect-confirm-card">
-            <h2 className="text-[22px] font-semibold">Déconnecter le compte GitHub ?</h2>
-            <p className="text-sm text-[var(--muted)]">
+        <div className="integrations-1106-grid">
+          <section className="integrations-1106-card" data-testid="disconnect-confirm-card">
+            <h2 className="integrations-1106-card-title">Déconnecter le compte GitHub ?</h2>
+            <p className="integrations-1106-muted">
               Les accès Git dépendants de cette connexion seront suspendus dans les projets du
               Pilote. Ceci coupe l’accès Studio local — ce n’est pas automatiquement une révocation
               complète de l’installation GitHub.
             </p>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Dépôts associés aux projets</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
+            <div className="integrations-1106-repo">
+              <p className="integrations-1106-repo-name">Dépôts associés aux projets</p>
+              <p className="integrations-1106-repo-meta">
                 Les associations historiques ne sont pas effacées.
               </p>
             </div>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Publications antérieures</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
+            <div className="integrations-1106-repo">
+              <p className="integrations-1106-repo-name">Publications antérieures</p>
+              <p className="integrations-1106-repo-meta">
                 Les références, commits et PR observés restent dans les preuves du projet.
               </p>
             </div>
-            <div className="flex flex-wrap gap-3 pt-1">
+            <div className="integrations-1106-actions">
               <button
                 type="button"
-                className="studio-btn"
+                className="git-btn-primary"
                 disabled={busy}
                 onClick={() => void disconnectConfirmed()}
                 data-testid="disconnect-github-confirm"
@@ -169,7 +181,7 @@ export function IntegrationsPanel() {
               </button>
               <button
                 type="button"
-                className="studio-btn-secondary"
+                className="git-btn-secondary"
                 disabled={busy}
                 onClick={() => setConfirmDisconnect(false)}
                 data-testid="disconnect-github-cancel"
@@ -178,24 +190,18 @@ export function IntegrationsPanel() {
               </button>
             </div>
           </section>
-          <aside className="studio-card p-5 space-y-3">
-            <h2 className="text-[20px] font-semibold">États des projets</h2>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Documents Studio</p>
-              <p className="text-xs text-[var(--muted)] mt-1">Toujours disponibles sans Git.</p>
-            </div>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Nouvelles lectures</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
-                Refusées jusqu’au rétablissement des accès.
-              </p>
-            </div>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Publications</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
-                Aucune nouvelle publication autorisée sans capacités effectives.
-              </p>
-            </div>
+          <aside className="integrations-1106-card" data-testid="integrations-explain-column">
+            <h2 className="integrations-1106-aside-title">États des projets</h2>
+            {[
+              ["Documents Studio", "Toujours disponibles sans Git."],
+              ["Nouvelles lectures", "Refusées jusqu’au rétablissement des accès."],
+              ["Publications", "Aucune nouvelle publication autorisée sans capacités effectives."],
+            ].map(([title, body]) => (
+              <div key={title} className="integrations-1106-repo">
+                <p className="integrations-1106-repo-name">{title}</p>
+                <p className="integrations-1106-repo-meta">{body}</p>
+              </div>
+            ))}
           </aside>
         </div>
       </div>
@@ -203,33 +209,29 @@ export function IntegrationsPanel() {
   }

   return (
-    <div className="space-y-5" data-testid="integrations-panel">
-      <header className="space-y-2">
-        <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-          PARAMÈTRES / SERVICES EXTERNES
-        </p>
-        <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">Intégrations</h1>
-        <p className="text-base text-[var(--muted)] max-w-3xl">
-          Gérer la connexion personnelle GitHub et consulter les dépôts réellement autorisés.
+    <div className="integrations-1106" data-testid="integrations-panel">
+      <header className="integrations-1106-header">
+        <p className="integrations-1106-eyebrow">PARAMÈTRES / SERVICES EXTERNES</p>
+        <h1 className="integrations-1106-title">Intégrations</h1>
+        <p className="integrations-1106-lead">
+          Gérez votre connexion GitHub et consultez les dépôts accessibles.
         </p>
       </header>

       <div
-        className={`rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_80%,transparent)] p-4 text-sm font-medium ${banner.tone}`}
+        className={`integrations-1106-banner ${banner.tone === "ok" ? "is-ok" : "is-warn"}`}
         data-testid="integrations-status-banner"
+        role="status"
       >
         {banner.text}
       </div>

-      <div
-        className="grid gap-5 lg:grid-cols-[minmax(0,858fr)_minmax(0,482fr)]"
-        data-testid="integrations-layout-1106"
-      >
-        <section className="studio-card p-5 space-y-4" data-testid="github-integration-card">
-          <div className="flex items-center gap-3 flex-wrap">
-            <h2 className="text-[22px] font-semibold m-0">GitHub</h2>
+      <div className="integrations-1106-grid" data-testid="integrations-layout-1106">
+        <section className="integrations-1106-card" data-testid="github-integration-card">
+          <div className="integrations-1106-provider">
+            <h2 className="integrations-1106-card-title">GitHub</h2>
             {status === "CONNECTED" ? (
-              <span className="git-badge-ok" data-testid="github-connected-badge">
+              <span className="integrations-1106-connected" data-testid="github-connected-badge">
                 ● Connecté
               </span>
             ) : null}
@@ -237,23 +239,23 @@ export function IntegrationsPanel() {

           {status === "CONNECTED" ? (
             <>
-              <p className="text-sm text-[var(--muted)] m-0">
-                Dépôts autorisés par la GitHub App — affichés côté serveur.
+              <p className="integrations-1106-muted">
+                Dépôts accessibles depuis votre compte GitHub.
               </p>
-              {(view?.repositories?.length ?? 0) === 0 ? (
-                <p className="text-sm muted" data-testid="repo-list-empty">
+              {repos.length === 0 ? (
+                <p className="integrations-1106-muted" data-testid="repo-list-empty">
                   Aucun dépôt autorisé.
                 </p>
               ) : (
-                <ul className="space-y-2 m-0 p-0 list-none" data-testid="repo-list">
-                  {view!.repositories.map((r) => (
+                <ul className="integrations-1106-repo-list" data-testid="repo-list">
+                  {repos.map((r) => (
                     <li
                       key={r.id}
-                      className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-4 py-3"
+                      className="integrations-1106-repo"
                       data-testid={`integration-repo-${r.id}`}
                     >
-                      <p className="text-sm font-semibold m-0 mono">{r.fullName}</p>
-                      <p className="text-xs text-[var(--muted)] mt-1 mb-0">
+                      <p className="integrations-1106-repo-name">{r.fullName}</p>
+                      <p className="integrations-1106-repo-meta">
                         Accessible au compte Pilote
                         {r.defaultBranch ? ` · branche par défaut ${r.defaultBranch}` : ""}
                       </p>
@@ -261,39 +263,46 @@ export function IntegrationsPanel() {
                   ))}
                 </ul>
               )}
-              <div className="flex flex-wrap gap-3 pt-1">
+              <div className="integrations-1106-actions">
                 <button
                   type="button"
-                  className="studio-btn"
+                  className="git-btn-secondary"
                   disabled={busy}
                   onClick={() => void refreshRepos()}
                   data-testid="refresh-repos"
                 >
-                  Actualiser
+                  Actualiser les accès
                 </button>
                 <button
                   type="button"
-                  className="studio-btn-secondary"
+                  className="git-btn-secondary"
                   disabled={busy}
                   onClick={() => setConfirmDisconnect(true)}
                   data-testid="disconnect-github"
                   title="Ouvre la confirmation — aucun appel de déconnexion avant confirmation"
                 >
-                  Déconnecter
+                  Déconnecter GitHub
                 </button>
               </div>
+              <p className="integrations-1106-write-note" data-testid="integrations-write-boundary">
+                Les publications vers GitHub restent soumises à une autorisation distincte. Si les
+                écritures ne sont pas activées pour cet environnement, aucune publication distante
+                n’est effectuée depuis cette page.
+              </p>
             </>
           ) : (
             <>
-              <p className="text-sm text-[var(--muted)]">
-                Consulter vos dépôts autorisés, travailler avec Nora et publier des documents sous
+              <p className="integrations-1106-muted">
+                Consultez vos dépôts autorisés, travaillez avec Nora et publiez des documents sous
                 votre contrôle.
               </p>
-              <p className="text-sm muted">Aucun dépôt autorisé.</p>
-              <div className="flex flex-wrap gap-3 pt-1">
+              <p className="integrations-1106-muted" data-testid="repo-list-empty">
+                Aucun dépôt autorisé.
+              </p>
+              <div className="integrations-1106-actions">
                 <button
                   type="button"
-                  className="studio-btn"
+                  className="git-btn-primary"
                   disabled={busy}
                   onClick={() => void connect()}
                   data-testid="connect-github"
@@ -302,7 +311,7 @@ export function IntegrationsPanel() {
                 </button>
                 <button
                   type="button"
-                  className="studio-btn-secondary"
+                  className="git-btn-secondary"
                   disabled={busy}
                   onClick={() => void refresh()}
                 >
@@ -313,34 +322,22 @@ export function IntegrationsPanel() {
           )}
         </section>

-        <aside className="studio-card p-5 space-y-3" data-testid="integrations-explain-column">
-          <h2 className="text-[20px] font-semibold">Une connexion à la carte</h2>
-          {[
-            [
-              "Connexion personnelle",
-              "Autorisation GitHub propre au Pilote, distincte des projets.",
-            ],
-            [
-              "Rattachements projet",
-              "Chaque projet choisit les dépôts utiles, un ou plusieurs.",
-            ],
-            [
-              "Publication documentaire",
-              "Nora propose, le Pilote inspecte et autorise un mandat distinct.",
-            ],
-          ].map(([title, body]) => (
-            <div
-              key={title}
-              className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3"
-            >
-              <p className="text-sm font-semibold">{title}</p>
-              <p className="text-xs text-[var(--muted)] mt-1">{body}</p>
+        <aside className="integrations-1106-card" data-testid="integrations-explain-column">
+          <h2 className="integrations-1106-aside-title">À propos de votre connexion</h2>
+          {SCOPE_CARDS.map((card) => (
+            <div key={card.title} className="integrations-1106-repo">
+              <p className="integrations-1106-repo-name">{card.title}</p>
+              <p className="integrations-1106-repo-meta">{card.body}</p>
             </div>
           ))}
         </aside>
       </div>

-      {message ? <p className="text-sm text-amber-400">{message}</p> : null}
+      {message ? (
+        <p className="integrations-1106-message" role="alert">
+          {message}
+        </p>
+      ) : null}
     </div>
   );
 }
```
#### `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 6752bc97..e3891cd1 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5682,3 +5682,212 @@
   .git-repo-card-row { gap: 10px; }
   .git-preview-head { flex-direction: column; }
 }
+
+/* Ensemble 08 — Figma 11.06 Intégrations (node 1095:339) */
+.integrations-1106-page {
+  /* Shell already provides ~38px inset (Figma content x=284 after rail 246). */
+  width: 100%;
+  max-width: 1358px;
+  margin: 0;
+  padding: 16px 0 32px;
+  box-sizing: border-box;
+}
+
+.integrations-1106 {
+  display: flex;
+  flex-direction: column;
+  gap: 24px;
+  width: 100%;
+}
+
+.integrations-1106-header {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+}
+
+.integrations-1106-eyebrow {
+  margin: 0;
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.02em;
+  text-transform: uppercase;
+  color: var(--fig-accent, var(--accent));
+}
+
+.integrations-1106-title {
+  margin: 0;
+  font-size: 34px;
+  line-height: 1.15;
+  font-weight: 700;
+  color: var(--fig-ink, var(--ink));
+}
+
+.integrations-1106-lead {
+  margin: 0;
+  max-width: 1310px;
+  font-size: 14px;
+  line-height: 1.4;
+  color: var(--fig-muted, var(--muted));
+}
+
+.integrations-1106-banner {
+  display: flex;
+  align-items: flex-start;
+  width: 100%;
+  box-sizing: border-box;
+  padding: 14px 17px;
+  border-radius: 8px;
+  font-size: 13px;
+  font-weight: 600;
+  line-height: 1.35;
+}
+
+.integrations-1106-banner.is-ok {
+  background: var(--fig-ok-bg);
+  color: var(--fig-ok, var(--ok));
+}
+
+.integrations-1106-banner.is-warn {
+  background: var(--fig-warn-bg);
+  color: var(--fig-warn, var(--warn));
+}
+
+.integrations-1106-grid {
+  display: grid;
+  grid-template-columns: minmax(0, 858fr) minmax(0, 482fr);
+  gap: 18px;
+  align-items: stretch;
+  width: 100%;
+}
+
+.integrations-1106-card {
+  display: flex;
+  flex-direction: column;
+  gap: 13px;
+  min-height: 0;
+  box-sizing: border-box;
+  padding: 20px 21px;
+  border-radius: 10px;
+  border: 1px solid var(--fig-line, var(--line));
+  background: var(--fig-panel, var(--panel));
+}
+
+.integrations-1106-provider {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 16px;
+}
+
+.integrations-1106-card-title {
+  margin: 0;
+  font-size: 22px;
+  font-weight: 600;
+  color: var(--fig-ink, var(--ink));
+}
+
+.integrations-1106-aside-title {
+  margin: 0;
+  font-size: 20px;
+  font-weight: 600;
+  color: var(--fig-ink, var(--ink));
+}
+
+.integrations-1106-connected {
+  font-size: 13px;
+  font-weight: 600;
+  color: var(--fig-ok, var(--ok));
+  white-space: nowrap;
+}
+
+.integrations-1106-muted {
+  margin: 0;
+  font-size: 13px;
+  line-height: 1.4;
+  color: var(--fig-muted, var(--muted));
+}
+
+.integrations-1106-repo-list {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 13px;
+}
+
+.integrations-1106-repo {
+  display: flex;
+  flex-direction: column;
+  gap: 7px;
+  box-sizing: border-box;
+  padding: 13px 15px;
+  border-radius: 8px;
+  border: 1px solid var(--fig-line, var(--line));
+  background: var(--fig-panel-hi, #1b2639);
+}
+
+.integrations-1106-repo-name {
+  margin: 0;
+  font-size: 16px;
+  font-weight: 600;
+  color: var(--fig-ink, var(--ink));
+  word-break: break-word;
+}
+
+.integrations-1106-repo-meta {
+  margin: 0;
+  font-size: 12px;
+  line-height: 1.4;
+  color: var(--fig-muted, var(--muted));
+}
+
+.integrations-1106-actions {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 12px;
+  padding-top: 2px;
+}
+
+.integrations-1106-actions .git-btn-secondary,
+.integrations-1106-actions .git-btn-primary {
+  min-width: 205px;
+  min-height: 42px;
+  border-radius: 8px;
+  font-size: 12px;
+}
+
+.integrations-1106-write-note {
+  margin: 0;
+  font-size: 12px;
+  line-height: 1.45;
+  color: var(--fig-quiet, var(--fig-muted, var(--muted)));
+}
+
+.integrations-1106-message {
+  margin: 0;
+  font-size: 13px;
+  color: var(--fig-warn, var(--warn));
+}
+
+@media (max-width: 1280px) {
+  .integrations-1106-grid {
+    grid-template-columns: 1fr;
+  }
+}
+
+@media (max-width: 720px) {
+  .integrations-1106-page {
+    padding: 12px 0 24px;
+  }
+  .integrations-1106-title {
+    font-size: 28px;
+  }
+  .integrations-1106-actions .git-btn-secondary,
+  .integrations-1106-actions .git-btn-primary {
+    min-width: 0;
+    width: 100%;
+  }
+}
```
#### `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 66fafd0f..5d0c406a 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -310,10 +310,13 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                 <div className="studio-rail-section mb-1">Accès</div>
                 <Link
                   href={ACCOUNT_HREF}
-                  className="text-sm muted block px-2 py-1"
+                  className={`studio-rail-nav-item ${
+                    pathname.startsWith("/settings/integrations") ? "is-active" : ""
+                  }`}
+                  aria-current={pathname.startsWith("/settings/integrations") ? "page" : undefined}
                   data-testid="nav-integrations"
                 >
-                  Intégrations
+                  <span>Intégrations</span>
                 </Link>
               </div>
             ) : null}
```
#### `projects/sfia-studio-next/web/src/components/shell/studio-shell.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 5f86dff0..dce90c04 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -318,9 +318,9 @@ html.studio-shell-lock body {
 }

 .studio-rail-nav-item.is-active {
-  background: #292d58;
-  border-color: transparent;
-  color: #f4f6fc;
+  background: var(--fig-accent-bg, #242c4b);
+  border-color: var(--fig-line, transparent);
+  color: var(--fig-ink, #f3f5ff);
   font-weight: 600;
 }
```
#### `projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx b/projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx
index e57875b9..3bbf7d64 100644
--- a/projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/settings/integrations/page.tsx
@@ -2,7 +2,7 @@ import { IntegrationsPanel } from "@/components/integrations/IntegrationsPanel";

 export default function IntegrationsSettingsPage() {
   return (
-    <div className="max-w-6xl mx-auto p-6 md:p-8">
+    <div className="integrations-1106-page" data-testid="integrations-settings-page">
       <IntegrationsPanel />
     </div>
   );
```
#### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`

```diff
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 72570bbe..a4dda8f9 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -2,14 +2,14 @@

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-22 (POST-UAT 01 clôture publication Nora — as-built mis à jour) |
+| Date | 2026-11-22 (POST-UAT 02 Intégrations 11.06 — as-built mis à jour) |
 | Branche | `feat/next-ensemble08-git-publications-nora` |
 | Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
-| Profil | CRITICAL · Delivery correctif post-UAT · NO RELEASE |
+| Profil | CRITICAL · Delivery cutover post-UAT · NO RELEASE |
 | CKC | FALLBACK (Delivery #8) |
-| Freeze RECETTE (inchangé) | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839f` · BUILD `1xEbvCdTAX6ht262w4oKF` |
-| Candidat DEV post-UAT | **worktree dirty** — nouveau SHA après commit Morris (pas encore figé) |
-| RECETTE | **FROZEN / AVAILABLE** — aucune mutation ce mandat |
+| Runtime RECETTE servi | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
+| Runtime précédent (rollback) | `98185598de0d3f3b84af862aecea04b9099217ca` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| RECETTE | **AVAILABLE** — cutover POST-UAT 01 exécuté · DB préservée · UAT Morris requis |

 ## Livré (y compris finalisation technique)

@@ -37,12 +37,13 @@
 - Champs qual `publication.documentHint` / `objectRef` / `repositoryHint`
 - Preuves PG : WRITE OFF zéro mutation ; SCRIPTED D6/D7/D8 + Nora ; Playwright Nora discriminant (DEV :3101)

-### Capacité UX (POST-UAT 01 + convergence)
+### Capacité UX (POST-UAT 01 + convergence + POST-UAT 02)
 - Double en-tête « Intégration Git » : `ProjectChrome` breadcrumb-only pour surfaces `git`/`publication`
 - Microcopy Pilote : jargon D4/D7/D8 / « projection » retiré des surfaces Dépôts Git / Intégrations
 - Infos : popover ancré `GitFileInfoPopover` — `aria-controls` = `panelId` ; Escape / Fermer restaurent le focus ; fermeture sur changement fichier/ref
-- Intégrations 11.06 : panneau GitHub + repos autorisés + Actualiser/Déconnecter ; colonne « Une connexion à la carte » ; pas de cartes pédagogiques héritées à gauche ; confirmation 11.07 inchangée fonctionnellement
-- G5 pixel Figma : **NOT PROVEN** (Morris UAT)
+- **POST-UAT 02 / Figma 11.06** : composition 858/482, bandeau `--fig-ok-bg`, boutons secondaires « Actualiser les accès » / « Déconnecter GitHub », microcopy Figma (connexion / projets / Publier avec Nora), nav rail `is-active`, dépôts = provider réel (pas d’invention)
+- Confirmation déconnexion 11.07 : comportement inchangé (cancel sans effet)
+- G5 11.06 rectangles stables 1680×970 : **PROVEN** (F2 ≤2 CSS px — voir `figma-evidence/post-uat-02-11.06-mapping.md`)

 ### REAL multi-dépôts
 - Allowlist explicite `allowedFullNames` + env `GITHUB_APP_ALLOWED_REPOS` (même owner)
@@ -64,8 +65,10 @@
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (WRITE/MERGE hors mandat)
 - GitHub REAL READ : **NOT PROVEN** ce cycle
 - Nora LIVE E2E : **NOT PROVEN**
-- Candidate Git figée / build RECETTE : **SERVI** `@98185598` / `1xEbvCdTAX6ht262w4oKF` sur lane E07
+- Candidate POST-UAT : **SERVI** `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` sur lane RECETTE `:3200`
+- Rollback immédiat : artefact `@98185598` / `1xEbvCdTAX6ht262w4oKF` conservé
 - G5 visuelle : **NOT PROVEN** — UAT Morris
+- Nora LIVE / GitHub REAL WRITE : **NOT PROVEN**

 ## Preuves exécutées (finalisation)
 - `tsc --noEmit` PASS
```
#### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f3705b3a..aa8c8c41 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,36 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-02-INTEGRATIONS-UX
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 05:50 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 02 Intégrations UX 11.06 |
+| Type | EVOL / UI CONFORMANCE · STANDARD · **NO RELEASE** |
+| Figma | `itgvCulInEnFY6DvgIegvP` node `1095:339` · PNG SHA256 `d50412ed…` |
+| Blast | IntegrationsPanel · tokens 11.06 · StudioShell nav active · tests · evidence |
+| D6–D9 / OAuth / WRITE | **NO CHANGE** |
+| RECETTE | **préservée** `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` — aucun cutover |
+| Preuves | unit 4 PASS · Playwright 3 PASS · F2 rail/contenu/panneaux/boutons ≤2px · styles bandeau |
+| Push projet | **NONE** |
+| Verdict | **DELIVERY READY — G5 PROVEN** (11.06 rectangles stables ; UAT Morris distinct) |
+
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-RECETTE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 04:50 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 01 cutover RECETTE |
+| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
+| GO Morris | SHA `9f346391…` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
+| Avant | `@98185598` / `1xEbvCdTAX6ht262w4oKF` |
+| Après | servi HTTP `<!--F85QQBTLa8nq5zKYxMKKZ-->` · service `ml4d-ux004` |
+| DB | `sfia_next_recette_ml4` préservée · inventaire identique · Equip'Campus présent |
+| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` + restore proof PASS |
+| Push projet | **NONE** |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-FREEZE-LOCAL

 | Field | Value |
@@ -17,11 +47,11 @@ Append-only logical journal of Cursor product deliveries.
 | TREE | `364c907342772f5430cf855d269cecc458f0546c` |
 | BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
 | Artefact | `…/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/…/web/.next` |
-| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** |
+| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** (à ce stade) |
 | Réserves fermées | A contenu D4↔SCRIPTED · B D7 COMPLETED + D8 · C build détaché |
 | Push projet | **NONE** |
-| Cutover | **NOT EXECUTED** — RECETTE `@98185598` / `1xEbvCdTAX6ht262w4oKF` intacte |
-| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** |
+| Cutover | traité ensuite — voir `…-RECETTE-CUTOVER` |
+| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** (historique freeze) |

 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CLOTURE
```

Note : `manifeste-cutover-recette-e07-plus-e08.md` dirty = documentation cutover précédent (préservée), hors blast UI 11.06.
Artefacts PNG runtime binaires référencés par chemin (non inlinés).

---

## 9. Fake / Real

| Frontière | Niveau |
| --- | --- |
| UI DEV SCRIPTED | BROWSER OBSERVED |
| F2 géométrie 11.06 | DETERMINISTIC MEASURED |
| GitHub REAL WRITE | NOT PROVEN / OFF / hors GO |
| Nora LIVE | NOT PROVEN |
| RECETTE UAT | NOT THIS CYCLE |

---

## 10. Réserves / gates

1. UAT Morris visuelle globale (hors rectangles F2 11.06)
2. Compte Morris REAL READ multi-dépôts en RECETTE
3. Freeze + GO cutover si promotion runtime
4. Push/PR projet

---

## 11. Verdict

**DELIVERY READY — G5 PROVEN**

Cadre : fidélité 11.06 rectangles stables + styles bandeau + microcopy/actions ; pas de promotion RECETTE automatique.

FIN PACK — Ensemble 08 POST-UAT 02 INTÉGRATIONS 11.06
