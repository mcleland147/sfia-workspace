# SFIA Review Pack — FULL — UX-004 RECETTE D2 GUARDS

- Date/heure: 2026-11-16T09:31:53+01:00
- Produit: projects/sfia-studio-next/
- Macro-lot: ML4D / UX-004
- Cycle: 11 — Déploiement RECETTE (sous-portée)
- Profil: Standard · Typologie: EVOL / delivery de correctif
- Review Pack: FULL mono-cycle · Handoff: publish-in-cycle L3
- Intégrateur: Cursor · Autorité: Morris
- GO Morris: **OUI** mise à disposition RECETTE du SHA `b05dacf47983ed8d914c92619ede5ffe65ce9264` uniquement
- Code produit: **AUCUNE modification** dans ce cycle

## Verdict Cursor

**RECETTE SERVED AND VERIFIED — MORRIS REVIEW PENDING**

(également compatible: READY WITH RESERVES — MORRIS UX-004 RECETTE)

### Instruction ChatGPT

Lire depuis Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` avant conclusion Morris.

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| Branche projet | `feat/next-ml4d-ux004-portfolio-20261116` |
| HEAD | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Tree web | `467a46216d45651063c7fdfe328f15abec9fd2fc` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Ascendance fb0ac5c8 / bc878568 / a77a3a2b | OUI |
| status | `.tmp-sfia-review/chatgpt-review.md` dirty only (pack) |
| Aucun fichier DEV non commité servi | OK — worktree RECETTE détaché figé |

STOP non déclenché.

---

## 2. Sources

CKC UX-004: ABSENT → fallback SFIA v2.6 (§4.3.0b, §2.0.H, déploiement §6.9, Fake/Real §6.16, Review Pack §7, handoff §7.10–7.11).

ENV-01 v0.1 / product-versioning v1.0 VALIDATED ON MAIN consultés.
As-built UX-004 D2, contrat visuel, delivery-history, manifeste précédent bc878568, scripts start/restore, LaunchAgents.

Aucune nouvelle décision fonctionnelle/visuelle.

---

## 3. Précheck environnement

### Avant remplacement

| Item | Observé |
| --- | --- |
| URL | http://127.0.0.1:3200 HTTP 200 |
| PID | 42636 |
| cwd | `.../ml4d-ux004-recette-build-bc8785683c30/.../web` |
| SHA | `bc8785683c30430aa99bc76e138ba10f49c71c39` |
| Build | `3g7UH7AXjSWhxrT20D3-w` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` running |
| KeepAlive ML4C | **non chargé** (évite réoccupation :3200) |
| UX-003 agent | non chargé ; artefacts préservés |
| DB RECETTE | `127.0.0.1:5434` / `sfia_next_recette_ml4` |
| Lane | STUDIO_LANE=RECETTE · PORT=3200 · BETTER_AUTH_URL=http://127.0.0.1:3200 |
| Secrets | non affichés |

DEV `:3102` non modifié dans ce cycle (hors scope).

---

## 4. Préparation runtime

- Worktree détaché: `/Users/morris/Projects/sfia-workspace-next-ml4d-ux004-recette-build-b05dacf47983`
- SHA/tree vérifiés = candidat autorisé
- `npm ci` + `NODE_ENV=production npm run build` avec env RECETTE
- Build ID **réel**: `20blGylSEta7201PgVvlw` (≠ DEV `BG3QbxjbuMuX_NOaP0rSo` — Next non déterministe)
- Aucune migration schéma

---

## 5. Rollback préservé

| Artefact | Statut |
| --- | --- |
| WT bc878568 | conservé |
| Build `3g7UH7AXjSWhxrT20D3-w` | conservé |
| start-recette-ux004.sh | conservé |
| plist backup | `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.bc878568.plist.bak` |
| Procédure | `RESTORE-PREVIOUS-UX004-RECETTE.txt` |
| UX-003 | conservé (a77a3a2 / vYeNRRzv…) |
| Rien supprimé | OK |

Rollback status: **préparé** (artefacts + procédure ; restore non rejoué après cutover pour ne pas interrompre la recette).

---

## 6. Remplacement contrôlé

1. Build candidat prêt
2. Backup plist bc878568
3. `launchctl bootout` agent ml4d-ux004 uniquement
4. Nouveau plist → `start-recette-ux004-d2guards.sh`
5. `bootstrap` + `kickstart`
6. Observé: PID `23141`, cwd nouveau WT, HTML `<!--20blGylSEta7201PgVvlw-->`
7. `kickstart -k` de contrôle: reste sur `20blGylSEta7201PgVvlw` / même WT
8. ML4C toujours non chargé

---

## 7. Smoke RECETTE (BROWSER)

Cible réelle: http://127.0.0.1:3200 · build HTML observé `20blGylSEta7201PgVvlw`

Ops smoke (4 PASS) — captures `/tmp/ux004-recette-d2-smoke/*.png`

| Cas | Résultat | Preuve |
| --- | --- | --- |
| UX-003 login sans rail | PASS | BROWSER |
| session_expired | PASS | BROWSER |
| Portfolio rail 246 + breadcrumb Portefeuille | PASS | BROWSER |
| Intégrations breadcrumb | PASS | BROWSER |
| Nouveau projet → 1 POST → sas (id réel) | PASS | BROWSER |
| Single-flight rail+portefeuille (fixture) | PASS 1 POST | BROWSER/FAKE fixture |
| UNCERTAIN ACK (fixture) honnête | PASS | BROWSER/FAKE fixture |
| Resume GET sans POST | PASS si prep présente | BROWSER |
| Mobile bottom nav smoke | PASS | BROWSER technique |

Pas de preuve LIVE OAuth / idempotence serveur.
Pas de campagne visuelle mobile Morris.

---

## 8. Manifeste (contenu complet)

```yaml
lane: RECETTE
source_repository: mcleland147/sfia-workspace
source_branch: feat/next-ml4d-ux004-portfolio-20261116
base_main_sha: 997d4c4e8204993de7107552898c8cc08cd3b0ed
candidate_sha: b05dacf47983ed8d914c92619ede5ffe65ce9264
tree_web: 467a46216d45651063c7fdfe328f15abec9fd2fc
build_identifier: 20blGylSEta7201PgVvlw
build_html_comment: 20blGylSEta7201PgVvlw
dev_build_reported: BG3QbxjbuMuX_NOaP0rSo
note_build: RECETTE rebuilt from same SHA; BUILD_ID differs from DEV (non-deterministic Next)
product_version: NOT AVAILABLE
candidate_version: NOT AVAILABLE
release_status: NO RELEASE
release_tag: N/A
environment: RECETTE
served_url: http://127.0.0.1:3200
served_address_observed: http://127.0.0.1:3200
process_pid: 23141
service_identifier: com.sfia.studio.next.recette.ml4d-ux004
worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ux004-recette-build-b05dacf47983
start_script: start-recette-ux004-d2guards.sh
launch_agent: com.sfia.studio.next.recette.ml4d-ux004
deployment_time: 2026-11-16T09:29:00+01:00
database_revision: Postgres RECETTE lane 127.0.0.1:5434 / sfia_next_recette_ml4 (no migration this cycle)
test_data_revision: RECETTE lane fixtures / pilot test identities
quality_evidence: ops-smoke Playwright 4 PASS + screenshots /tmp/ux004-recette-d2-smoke
rollback_candidate_sha: bc8785683c30430aa99bc76e138ba10f49c71c39
rollback_build: 3g7UH7AXjSWhxrT20D3-w
rollback_worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ux004-recette-build-bc8785683c30
rollback_plist_backup: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.bc878568.plist.bak
rollback_status: prepared (artefacts preserved; controlled restore not re-executed after cutover)
ux003_preserved_sha: a77a3a2bf7b942038d771fdcdd2e7a6410330784
ux003_preserved_build: vYeNRRzvLN03N73wmcKkR
known_reservations:
  - single-flight document-scoped only (not multi-tab / server idempotence)
  - OAuth LIVE callback not re-proven this cycle
  - mobile smoke technique only (no Morris visual campaign)
  - user acceptance EN ATTENTE MORRIS
  - Gate C OPEN; ML4D not closed; NO RELEASE / STABLE NOT AVAILABLE
user_acceptance: EN ATTENTE MORRIS
review_decision: EN ATTENTE MORRIS

```

---

## 9. Artefacts d'exploitation créés (contenu)

### `start-recette-ux004-d2guards.sh`

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ux004-recette-build-b05dacf47983/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=b05dacf47983ed8d914c92619ede5ffe65ce9264
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200

```

### `RESTORE-PREVIOUS-UX004-RECETTE.txt`

```
Rollback D2 GUARDS RECETTE → previous UX-004 (bc878568) on 127.0.0.1:3200

1) Stop current D2 GUARDS agent:
   launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004

2) Ensure competing KeepAlive agents stay unloaded:
   launchctl print gui/$(id -u)/com.sfia.studio.next.recette.ml4
   launchctl print gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux003
   # must be absent / not loaded

3) Restore previous UX-004 plist (backup preserved) and start:
   cp ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.bc878568.plist.bak \
      ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist
   launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist
   launchctl kickstart -k gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004

4) Verify:
   curl -sS http://127.0.0.1:3200/login | head -c 120
   # expect HTML comment <!--3g7UH7AXjSWhxrT20D3_w-->
   # cwd: .../ml4d-ux004-recette-build-bc8785683c30/.../web
   # SHA: bc8785683c30430aa99bc76e138ba10f49c71c39

Preserved artefacts (do not delete):
- Worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ux004-recette-build-bc8785683c30
- SHA: bc8785683c30430aa99bc76e138ba10f49c71c39
- Build: 3g7UH7AXjSWhxrT20D3-w
- Script: start-recette-ux004.sh
- Plist backup: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.bc878568.plist.bak
- UX-003 artefacts also preserved (a77a3a2 / vYeNRRzvLN03N73wmcKkR)

```

### `ops-smoke/ux004-recette-d2-smoke.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const ART = "/tmp/ux004-recette-d2-smoke";
fs.mkdirSync(ART, { recursive: true });

async function loginPilotA(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

test.describe("RECETTE UX-004 D2 GUARDS smoke @3200", () => {
  test("UX-003 login entry + session_expired", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/login");
    await expect(page.getByTestId("studio-shell-entry")).toBeVisible();
    await expect(page.getByTestId("studio-rail")).toHaveCount(0);
    await page.screenshot({ path: path.join(ART, "01-login.png"), fullPage: false });

    await page.goto("/login?reason=session_expired");
    await expect(page.getByText("SESSION EXPIRÉE")).toBeVisible();
    await page.screenshot({ path: path.join(ART, "02-session-expired.png"), fullPage: false });
  });

  test("UX-004 portfolio rail breadcrumb integrations + nouveau projet", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await loginPilotA(page);

    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "246");
    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
      /SFIA Studio\s+\/\s+Portefeuille/,
    );
    await page.screenshot({ path: path.join(ART, "03-portfolio.png"), fullPage: false });

    await page.getByTestId("nav-account").click();
    await page.waitForURL("**/settings/integrations");
    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
      /SFIA Studio\s+\/\s+Intégrations/,
    );
    await page.screenshot({ path: path.join(ART, "04-integrations.png"), fullPage: false });

    let posts = 0;
    page.on("request", (req) => {
      if (req.method() === "POST" && req.url().includes("/api/preparations")) posts += 1;
    });
    await page.getByTestId("nav-new-prep").click();
    await page.waitForURL("**/preparations/**");
    expect(posts).toBe(1);
    const prepId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
    expect(prepId).toBeTruthy();
    expect(prepId).not.toBe("prep-cross-flight");
    await page.screenshot({ path: path.join(ART, "05-sas.png"), fullPage: false });
  });

  test("D2 guards: single-flight + uncertain ACK (fixtures)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await loginPilotA(page);

    let posts = 0;
    page.on("request", (req) => {
      if (req.method() === "POST" && req.url().includes("/api/preparations")) posts += 1;
    });
    await page.route("**/api/preparations", async (route) => {
      if (route.request().method() !== "POST") {
        await route.continue();
        return;
      }
      await new Promise((r) => setTimeout(r, 500));
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ preparationId: "prep-recette-flight" }),
      });
    });
    await Promise.all([
      page.getByTestId("nav-new-prep").click({ force: true }),
      page.getByTestId("portfolio-new-prep").click({ force: true }),
    ]);
    await page.waitForURL("**/preparations/prep-recette-flight");
    expect(posts).toBe(1);
    await page.unroute("**/api/preparations");

    await page.goto("/portfolio");
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
            openPreparations: 1,
            preparations: {
              items: [
                {
                  id: "prep-preexisting",
                  previewName: "Déjà là",
                  previewSummary: "",
                  createdAt: "2026-11-15T10:00:00.000Z",
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
    posts = 0;
    await page.route("**/api/preparations", async (route) => {
      if (route.request().method() !== "POST") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: "{}",
      });
    });
    await page.getByTestId("portfolio-new-prep").click();
    await expect(page.getByText(/création incertaine|peut-être été enregistrée/i)).toBeVisible();
    await expect(page).toHaveURL(/\/portfolio/);
    expect(posts).toBe(1);
    await expect(page.getByText(/création confirmée/i)).toHaveCount(0);
    await page.screenshot({ path: path.join(ART, "06-uncertain.png"), fullPage: false });
  });

  test("resume GET no POST + mobile smoke", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await loginPilotA(page);
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

    await page.goto("/portfolio");
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.getByTestId("studio-mobile-bottom-nav")).toBeVisible();
    await expect(page.getByTestId("mobile-nav-create")).toHaveAttribute("type", "button");
    await page.screenshot({ path: path.join(ART, "07-mobile.png"), fullPage: false });
  });
});

```

Aucun fichier produit modifié/commité dans ce cycle.

---

## 10. Identifiants servis

| Champ | Valeur observée |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| SHA | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Tree web | `467a46216d45651063c7fdfe328f15abec9fd2fc` |
| Build | `20blGylSEta7201PgVvlw` |
| PID | `23141` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| Worktree | `.../ml4d-ux004-recette-build-b05dacf47983` |

---

## 11. Handoff

Mode publish-in-cycle L3.
*(Complété après publication.)*

---

## 12. Réserves

1. Acceptation utilisateur Morris **EN ATTENTE**
2. Single-flight document-only
3. OAuth LIVE non re-prouvé
4. Mobile smoke ≠ F2/G5
5. Gate C OPEN · ML4D non clos · NO RELEASE · STABLE NOT AVAILABLE · ADOPTED NON
6. Rollback préparé, non rejoué après cutover

## 13. Gates

push projet NON · PR NON · merge NON · main INCHANGÉ · STABLE NON · release NON · ADOPTED NON · ML4D NON CLOS · Gate C OPEN · ML5 NON
