# SFIA Studio Next — Review Pack Full
## Ensemble 04 — Régularisation preuves CP01/CP02 + Cutover RECETTE

**Date** : 2026-11-17
**Cycle** : R5 / ML4D — qualification + mise à disposition (cycle unique)
**GO Morris** : explicite — régularisation ET cutover dans le même cycle
**Candidat** : `984d77a36695c2f59ebbc18619e54eeeb43ad94e`
**Parent** : `351aea9607c5997f7343212a837dd13c0f1e4429`
**Verdict** : **ENSEMBLE 04 — CP01/CP02 QUALIFIED — RECETTE DEPLOYED AND SMOKE VERIFIED**

```text
READY FOR MORRIS VISUAL RECETTE
http://127.0.0.1:3200
NO PROJECT PUSH / NO PR / NO MERGE
NO STABLE / GATE C OPEN / ML5 NOT STARTED / NO ADOPTED
```

---

# PARTIE A — QUALIFICATION CANDIDAT

## A1. Git Truth Check

| Item | Valeur |
|------|--------|
| Repo | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD / candidat | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Tree | `b92cc822ac67399c6d8753c17dbcce5f4b5b734f` |
| Parent | `351aea9607c5997f7343212a837dd13c0f1e4429` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Amend / rebase / nouveau candidat ce cycle | **Non** |
| Modification code produit ce cycle | **Aucune** |
| Worktree produit | propre hors `.tmp-sfia-review/` |
| Candidat poussé | Non (local) |

### Inventaire fichiers touchés (351aea96..984d77a3)

```
projects/sfia-studio-next/construction/delivery-history.md
projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/manifest.json
projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-journal-nav-1680x970.png (binaire)
projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-projet-overview-1680x970.png (binaire)
projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-travail-1680x970.png (binaire)
projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-travail-long-name-1680x970.png (binaire)
projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
projects/sfia-studio-next/web/src/components/figma/tokens.css
projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
projects/sfia-studio-next/web/tests/e2e/ensemble04-cp01-cp02-correction.spec.ts (créé)
```

Diffstat : 10 files, +479 / −53.

## A2. Diagnostic CP01 / CP02 (reconstitué)

**CP01** : le bandeau pending était rendu *dans* `.fig-travail-composer` (`max-height:160px`). Le contenu peignait hors boîte ; la ligne grid restait ~160px ; le shell `overflow:hidden` clipait le bouton Réconcilier. Correctif : pile `fig-travail-composer-stack` avec bandeau *au-dessus* de la carte Figma ; scroll maîtrisé desktop ; en ≤1100px `max-height:none` pour éviter sous-dimensionnement + `align-self:start` (anti-chevauchement).

**CP02** : rail desktop volontairement `hidden md:flex`. Navigation mobile = `studio-rail-mobile` + testids `nav-*`. Pas de second système de navigation.

**Pas de nouveau moteur pending** : mêmes props `unresolvedPending` / `onReconcile` / sessionStorage ; seule la géométrie change.

## A3. Fichier créé — contenu complet
### `ensemble04-cp01-cp02-correction.spec.ts`

```typescript
import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const OUT =
  process.env.CP_CORRECTION_OUT ||
  path.resolve(__dirname, "../../../.tmp-sfia-review/cp01-cp02-correction");

async function loginAndCreateProject(page: import("@playwright/test").Page, label: string) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  const projectName = `${label} ${Date.now()}`;
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  await page.getByTestId("prep-draft").fill(`${label} draft`);
  await page.getByTestId("prep-send").click();
  await expect(
    page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
  ).toBeVisible({ timeout: 30000 });
  await seedInspectedNameViaApi(page, { name: projectName, summary: label });
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
    { timeout: 20000 },
  );
  return { projectId: projectId!, projectName };
}

async function seedPending(
  page: import("@playwright/test").Page,
  projectId: string,
  stamp: string,
) {
  await page.evaluate(
    ({ id, stamp: s }) => {
      sessionStorage.setItem(
        `sfia.thread.pending:${id}`,
        JSON.stringify({
          content: `Intention incertaine ${s}`,
          clientTurnKey: `ctk_${s}`,
          clientCommandKey: `conv-auth:ctk_${s}`,
        }),
      );
    },
    { id: projectId, stamp },
  );
  await page.reload();
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
  await expect(page.getByTestId("thread-reconcile-pending")).toBeVisible();
}

type Geom = {
  viewport: { w: number; h: number };
  composer: { top: number; bottom: number; h: number; maxHeight: string };
  banner: { top: number; bottom: number; h: number } | null;
  reconcile: {
    top: number;
    bottom: number;
    fullyInViewport: boolean;
    reachableViaStackScroll: boolean;
    clippedByHiddenAncestor: boolean;
  } | null;
  thread: { bottom: number };
  overlapThread: boolean;
  stack: { overflowY: string; maxHeight: string; scrollHeight: number; clientHeight: number } | null;
  pass: boolean;
  reason: string;
};

async function measurePendingGeom(page: import("@playwright/test").Page): Promise<Geom> {
  return page.evaluate(() => {
    const composer = document.querySelector('[data-testid="nora-composer"]') as HTMLElement;
    const banner = document.querySelector('[data-testid="thread-pending-banner"]') as HTMLElement | null;
    const reconcile = document.querySelector(
      '[data-testid="thread-reconcile-pending"]',
    ) as HTMLElement | null;
    const thread = document.querySelector('[data-testid="nora-thread"]') as HTMLElement;
    const panel = document.querySelector(
      '[data-testid="nora-conversation-panel"]',
    ) as HTMLElement;
    const stack = document.querySelector('[data-testid="nora-composer-stack"]') as HTMLElement | null;

    const rect = (el: HTMLElement) => {
      const b = el.getBoundingClientRect();
      return { top: b.top, bottom: b.bottom, h: b.height, left: b.left, right: b.right };
    };
    const c = rect(composer);
    const t = rect(thread);
    const b = banner ? rect(banner) : null;
    const r = reconcile ? rect(reconcile) : null;
    const csComposer = getComputedStyle(composer);
    const csStack = stack ? getComputedStyle(stack) : null;

    let clippedByHiddenAncestor = false;
    if (reconcile) {
      let el: HTMLElement | null = reconcile;
      const rb = reconcile.getBoundingClientRect();
      while (el) {
        const cs = getComputedStyle(el);
        if (
          (cs.overflow === "hidden" || cs.overflowY === "hidden") &&
          el !== reconcile &&
          el !== banner
        ) {
          const er = el.getBoundingClientRect();
          // Control extends past a clipping ancestor (and ancestor is not a scrollport).
          if (rb.bottom > er.bottom + 1 && cs.overflowY === "hidden") {
            // Allow stack overflow:auto as managed scroll.
            if (el.getAttribute("data-testid") !== "nora-composer-stack") {
              clippedByHiddenAncestor = true;
              break;
            }
          }
        }
        el = el.parentElement;
      }
    }

    let reachableViaStackScroll = false;
    if (reconcile && stack) {
      const before = reconcile.getBoundingClientRect();
      const fullyBefore =
        before.top >= 0 && before.bottom <= window.innerHeight + 0.5;
      if (!fullyBefore && stack.scrollHeight > stack.clientHeight + 1) {
        reconcile.scrollIntoView({ block: "nearest", inline: "nearest" });
        const after = reconcile.getBoundingClientRect();
        reachableViaStackScroll =
          after.top >= -0.5 && after.bottom <= window.innerHeight + 0.5;
      } else {
        reachableViaStackScroll = fullyBefore;
      }
    }

    const fullyInViewport = r
      ? r.top >= -0.5 && r.bottom <= window.innerHeight + 0.5
      : false;
    const p = rect(panel);
    // Overlap against the conversation panel (not inner thread scrollport).
    const overlapThread = Boolean(
      b && b.top < p.bottom - 1 && b.bottom > p.top + 1 && b.left < p.right && b.right > p.left,
    );

    const reachable = fullyInViewport || reachableViaStackScroll;
    let reason = "ok";
    let pass = true;
    if (!r || !b) {
      pass = false;
      reason = "missing pending controls";
    } else if (overlapThread) {
      pass = false;
      reason = "overlap thread";
    } else if (clippedByHiddenAncestor && !reachable) {
      pass = false;
      reason = "clipped and unreachable";
    } else if (!reachable) {
      pass = false;
      reason = "reconcile not reachable";
    } else if (parseFloat(csComposer.maxHeight) > 0 && c.h > parseFloat(csComposer.maxHeight) + 1) {
      // composer card itself must still honor nominal max-height
      pass = false;
      reason = "composer exceeded max-height";
    }

    return {
      viewport: { w: window.innerWidth, h: window.innerHeight },
      composer: { top: c.top, bottom: c.bottom, h: c.h, maxHeight: csComposer.maxHeight },
      banner: b ? { top: b.top, bottom: b.bottom, h: b.h } : null,
      reconcile: r
        ? {
            top: r.top,
            bottom: r.bottom,
            fullyInViewport,
            reachableViaStackScroll,
            clippedByHiddenAncestor,
          }
        : null,
      thread: { bottom: t.bottom },
      overlapThread,
      stack: stack
        ? {
            overflowY: csStack!.overflowY,
            maxHeight: csStack!.maxHeight,
            scrollHeight: stack.scrollHeight,
            clientHeight: stack.clientHeight,
          }
        : null,
      pass,
      reason,
    };
  });
}

test.describe("Ensemble 04 CP01/CP02 correction gates", () => {
  test("CP01-A..E geometry + CP02 navigation contracts", async ({ page }) => {
    fs.mkdirSync(OUT, { recursive: true });
    const results: Record<string, unknown> = { at: new Date().toISOString() };

    // --- CP01-A nominal 1680×970 ---
    await page.setViewportSize({ width: 1680, height: 970 });
    const { projectId } = await loginAndCreateProject(page, "CP corr");
    await expect(page.getByTestId("nora-composer")).toBeVisible();
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0);

    const nominal = await page.evaluate(() => {
      const composer = document.querySelector('[data-testid="nora-composer"]') as HTMLElement;
      const panel = document.querySelector(
        '[data-testid="nora-conversation-panel"]',
      ) as HTMLElement;
      const stack = document.querySelector('[data-testid="nora-composer-stack"]') as HTMLElement;
      const c = composer.getBoundingClientRect();
      const p = panel.getBoundingClientRect();
      return {
        composerH: c.height,
        maxHeight: getComputedStyle(composer).maxHeight,
        gap: Math.round(c.top - p.bottom),
        separate: !panel.contains(composer),
        stackPending: stack.getAttribute("data-pending"),
        bottomSlack: Math.round(window.innerHeight - c.bottom),
      };
    });
    await page.screenshot({ path: path.join(OUT, "cp01a-nominal-1680x970.png"), fullPage: false });
    expect(nominal.separate).toBe(true);
    expect(nominal.composerH).toBeLessThanOrEqual(160);
    expect(nominal.gap).toBeGreaterThanOrEqual(18);
    expect(nominal.gap).toBeLessThanOrEqual(32);
    expect(nominal.stackPending).toBe("0");
    results["CP01-A"] = { pass: true, nominal };

    // --- CP01-B..E pending viewports ---
    const pendingViewports = [
      { id: "CP01-B", w: 1680, h: 970 },
      { id: "CP01-C", w: 1280, h: 600 },
      { id: "CP01-D", w: 1024, h: 768 },
      { id: "CP01-E", w: 390, h: 844 },
    ];

    for (const vp of pendingViewports) {
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.goto(`/projects/${projectId}?surface=travail`);
      await expect(page.getByTestId("project-load-state")).toHaveAttribute(
        "data-project-load-state",
        "ready",
        { timeout: 20000 },
      );
      await seedPending(page, projectId, `${vp.id}_${Date.now()}`);
      const geom = await measurePendingGeom(page);
      await page.screenshot({
        path: path.join(OUT, `${vp.id.toLowerCase()}-pending-${vp.w}x${vp.h}.png`),
        fullPage: false,
      });
      fs.writeFileSync(path.join(OUT, `${vp.id.toLowerCase()}-geom.json`), JSON.stringify(geom, null, 2));

      // Focus + activate reconcile without losing pending authority (busy=false → clickable)
      await page.getByTestId("thread-reconcile-pending").focus();
      await expect(page.getByTestId("thread-reconcile-pending")).toBeFocused();
      await expect(page.getByTestId("thread-reconcile-pending")).toBeEnabled();
      await expect(page.getByTestId("nora-composer")).toBeVisible();

      expect(geom.pass, `${vp.id}: ${geom.reason} ${JSON.stringify(geom)}`).toBe(true);
      results[vp.id] = { pass: true, geom };
    }

    // --- CP02 navigation ---
    const navCases = [
      { name: "desktop", w: 1680, h: 970, expectDesktopRail: true },
      { name: "mid", w: 1024, h: 768, expectDesktopRail: true },
      { name: "mobile", w: 390, h: 844, expectDesktopRail: false },
    ];
    const navResults: Record<string, unknown> = {};

    for (const vp of navCases) {
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.goto(`/projects/${projectId}?surface=travail`);
      await expect(page.getByTestId("project-load-state")).toHaveAttribute(
        "data-project-load-state",
        "ready",
        { timeout: 20000 },
      );

      const desktopRail = page.getByTestId("studio-rail");
      const mobileRail = page.getByTestId("studio-rail-mobile");
      if (vp.expectDesktopRail) {
        await expect(desktopRail).toBeVisible();
      } else {
        await expect(desktopRail).toBeHidden();
        await expect(mobileRail).toBeVisible();
      }

      const navRoot = vp.expectDesktopRail ? desktopRail : mobileRail;
      // Four project surfaces (Trajectoire deep-link key remains pilotage).
      const surfaces: Array<{ testId: string; surfaceQuery: string }> = [
        { testId: "nav-travail", surfaceQuery: "travail" },
        { testId: "nav-projet", surfaceQuery: "projet" },
        { testId: "nav-journal", surfaceQuery: "journal" },
        { testId: "nav-pilotage", surfaceQuery: "pilotage" },
      ];
      for (const s of surfaces) {
        await navRoot.getByTestId(s.testId).click();
        await expect(page).toHaveURL(new RegExp(`surface=${s.surfaceQuery}`));
      }

      // Back to Travail
      await navRoot.getByTestId("nav-travail").click();
      await expect(page).toHaveURL(/surface=travail/);
      await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));

      // Portfolio access (same destinations as desktop rail)
      await navRoot.getByTestId("nav-portfolio").click();
      await expect(page).toHaveURL(/\/portfolio/);
      // Return to project
      await page.goto(`/projects/${projectId}?surface=travail`);
      await expect(page.getByTestId("project-load-state")).toHaveAttribute(
        "data-project-load-state",
        "ready",
        { timeout: 20000 },
      );

      const bleed = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      await page.screenshot({
        path: path.join(OUT, `cp02-${vp.name}-${vp.w}x${vp.h}.png`),
        fullPage: false,
      });
      expect(bleed).toBeLessThan(24);
      navResults[vp.name] = { pass: true, bleed, expectDesktopRail: vp.expectDesktopRail };
    }

    results.CP02 = { pass: true, navResults };
    fs.writeFileSync(path.join(OUT, "results.json"), JSON.stringify(results, null, 2));
    console.log("CP_CORRECTION_RESULTS", JSON.stringify(results));
  });
});

```

## A4. Diffs unifiés complets

### NoraConversation.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 08296c92..3d305771 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -106,43 +106,18 @@ export function NoraConversation(props: {
         </div>
       </section>

+      {/*
+        Pending banner lives outside the Figma-sized composer card so
+        max-height:160px never clips reconcile controls under the shell lock.
+      */}
       <div
-        className="fig-composer fig-travail-composer"
-        data-testid="nora-composer"
+        className="fig-travail-composer-stack"
+        data-testid="nora-composer-stack"
+        data-pending={props.unresolvedPending ? "1" : "0"}
       >
-        <textarea
-          className="fig-travail-composer-input"
-          value={props.draft}
-          onChange={(e) => props.onDraft(e.target.value)}
-          placeholder="Écrire à Nora dans ce projet…"
-          aria-label="Message à Nora"
-          data-testid="thread-draft"
-          rows={2}
-          onKeyDown={(e) => {
-            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
-              e.preventDefault();
-              props.onSend();
-            }
-          }}
-        />
-        <div className="fig-travail-composer-bar">
-          <span className="fig-travail-composer-hint">
-            Votre message reste rattaché au projet actif
-          </span>
-          <button
-            type="button"
-            className="fig-travail-composer-send"
-            disabled={props.busy || !props.draft.trim()}
-            onClick={props.onSend}
-            data-testid="thread-send"
-            aria-label="Envoyer"
-          >
-            <span aria-hidden>↑</span>
-          </button>
-        </div>
         {props.unresolvedPending && props.onReconcile ? (
-          <div className="space-y-1 mt-2" data-testid="thread-pending-banner">
-            <p className="text-xs muted">
+          <div className="fig-travail-pending" data-testid="thread-pending-banner">
+            <p className="fig-travail-pending-copy">
               Tentative non résolue — réconcilier avant un nouveau tour.
             </p>
             <button
@@ -156,11 +131,43 @@ export function NoraConversation(props: {
             </button>
           </div>
         ) : null}
-        {props.status ? (
-          <p className="sr-only" data-testid="thread-nora-status" role="status">
-            {props.status}
-          </p>
-        ) : null}
+        <div className="fig-composer fig-travail-composer" data-testid="nora-composer">
+          <textarea
+            className="fig-travail-composer-input"
+            value={props.draft}
+            onChange={(e) => props.onDraft(e.target.value)}
+            placeholder="Écrire à Nora dans ce projet…"
+            aria-label="Message à Nora"
+            data-testid="thread-draft"
+            rows={2}
+            onKeyDown={(e) => {
+              if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
+                e.preventDefault();
+                props.onSend();
+              }
+            }}
+          />
+          <div className="fig-travail-composer-bar">
+            <span className="fig-travail-composer-hint">
+              Votre message reste rattaché au projet actif
+            </span>
+            <button
+              type="button"
+              className="fig-travail-composer-send"
+              disabled={props.busy || !props.draft.trim()}
+              onClick={props.onSend}
+              data-testid="thread-send"
+              aria-label="Envoyer"
+            >
+              <span aria-hidden>↑</span>
+            </button>
+          </div>
+          {props.status ? (
+            <p className="sr-only" data-testid="thread-nora-status" role="status">
+              {props.status}
+            </p>
+          ) : null}
+        </div>
       </div>

       {props.aside ? (

```

### tokens.css

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 98a26e0b..2023a7b1 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -316,6 +316,58 @@
   margin-bottom: 0;
 }

+/* Stage / workspace grid cell: composer + optional pending (CP01). */
+.fig-travail-composer-stack {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+  min-width: 0;
+  min-height: 0;
+  grid-column: 1;
+  grid-row: 4;
+  /* start — never align-self:end with a short grid row (paints upward over the thread). */
+  align-self: start;
+  flex-shrink: 0;
+  overflow-x: hidden;
+  overflow-y: visible;
+}
+
+.fig-travail-composer-stack[data-pending="1"] {
+  /*
+   * Desktop (2-col): conversation is minmax(0,1fr) and yields space; stack may
+   * scroll internally on very short heights without leaving the shell lock.
+   * Avoid overflow:auto alone without a definite height — it under-sizes the
+   * grid row and overlaps the conversation in single-column breakpoints.
+   */
+  max-height: min(50vh, 360px);
+  overflow-y: auto;
+  overscroll-behavior: contain;
+  /* Include full pending+composer in grid max-content contribution. */
+  min-height: min-content;
+}
+
+.fig-travail-workspace > .fig-travail-composer-stack {
+  grid-row: 2;
+}
+
+.fig-travail-pending {
+  flex-shrink: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 8px;
+  border: 1px solid #272e49;
+  border-radius: 12px;
+  padding: 10px 12px;
+  background: #151c29;
+}
+
+.fig-travail-pending-copy {
+  margin: 0;
+  color: #94a2bb;
+  font-size: 12px;
+  line-height: 1.4;
+}
+
 .fig-travail-composer {
   display: flex;
   flex-direction: column;
@@ -328,13 +380,7 @@
   min-height: 118px;
   max-height: 160px;
   flex-shrink: 0;
-  grid-column: 1;
-  grid-row: 4;
-  align-self: end;
-}
-
-.fig-travail-workspace > .fig-travail-composer {
-  grid-row: 2;
+  width: 100%;
 }

 .fig-travail-composer-input {
@@ -1428,9 +1474,10 @@
   translate: 0 -13px;
 }

-.project-travail-stage > .fig-travail-composer {
+.project-travail-stage > .fig-travail-composer-stack {
   margin-top: 0;
-  align-self: stretch;
+  align-self: start;
+  justify-self: stretch;
 }

 .project-space-page .fig-tag {
@@ -1453,12 +1500,22 @@
   .fig-travail-intro,
   .fig-travail-intro-rule,
   .fig-conversation-panel,
-  .fig-travail-composer,
+  .fig-travail-composer-stack,
   .fig-travail-aside {
     grid-column: 1;
     grid-row: auto;
   }

+  /*
+   * Stacked layout already unlocks page overflow. Let the grid row grow to
+   * pending+composer so controls never overlay the conversation panel.
+   */
+  .fig-travail-composer-stack[data-pending="1"] {
+    max-height: none;
+    overflow-y: visible;
+    min-height: 0;
+  }
+
   .fig-conversation-panel {
     min-height: 280px;
     max-height: min(60vh, 520px);

```

### StudioShell.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 1c0ecba1..ebb8332d 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -447,7 +447,12 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
             {items.map((item) => {
               if (!item.href) {
                 return (
-                  <span key={item.key} className="muted whitespace-nowrap" title={item.disabledReason}>
+                  <span
+                    key={item.key}
+                    className="muted whitespace-nowrap"
+                    title={item.disabledReason}
+                    data-testid={`nav-disabled-${item.key}`}
+                  >
                     {item.label}
                   </span>
                 );
@@ -458,6 +463,7 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                   href={item.href}
                   className={`whitespace-nowrap ${item.active ? "font-semibold" : ""}`}
                   aria-current={item.active ? "page" : undefined}
+                  data-testid={`nav-${item.key}`}
                   onClick={() => {
                     const surfaceKey = parseStudioSurface(item.key);
                     if (projectId && surfaceKey) {

```

### delivery-history.md

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index e196ea73..61738fe9 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,22 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-04-CP01-CP02
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~00:10 CET |
+| Macro-lot | ML4D Ensemble 04 — correction bloquants CP01/CP02 |
+| Type | RUN / correction candidat · **NO RELEASE** |
+| Parent candidat | `351aea9607c5997f7343212a837dd13c0f1e4429` |
+| Branch | `feat/next-ml4d-project-space-20261116` |
+| Scope | Compositeur adaptable: bandeau reprise hors max-height 160px; stack scroll maîtrisé; testids nav mobile; tests CP01-A..E / CP02 |
+| Non-scope | Cutover RECETTE; API/DB; Ensemble 05; redesign Figma; push projet |
+| Preuves | CP01-A..E PASS; CP02 PASS; E04+T13/T16+F2+long-thread PASS; next build PASS; vitest studio-rail 13 PASS; tsc 32 parent réserve |
+| RECETTE | **inchangée** `:3200` SHA `a30e75c7` / BUILD `WUqfWdCB7T2rHzDvk-Hre` |
+| Push produit | **AUCUN** |
+| Verdict cible | `ENSEMBLE 04 — CP01/CP02 CORRECTION CANDIDATE READY` |
+

 ## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-VERTICAL-LAYOUT


```

### manifest.json (evidence F2)

```diff
diff --git a/projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/manifest.json b/projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/manifest.json
index 7595a4ff..4bca569a 100644
--- a/projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/manifest.json
+++ b/projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/manifest.json
@@ -1,11 +1,11 @@
 {
-  "capturedAt": "2026-11-16T22:39:49.248Z",
+  "capturedAt": "2026-11-16T23:06:30.157Z",
   "viewport": {
     "width": 1680,
     "height": 970
   },
-  "projectName": "F2 Espace projet 1794868786051",
-  "projectId": "proj_1bbe7c46-ecfc-4c8a-a88a-9e526b78e196",
+  "projectName": "F2 Espace projet 1794870387226",
+  "projectId": "proj_0b4f4996-9d2c-468c-94d8-5c70287d7c21",
   "frames": {
     "travail": "652:8",
     "projet": "652:58",

```

> Captures PNG evidence : binaires locaux sous `web/docs/evidence/ensemble-04-project-space/` — non incorporées dans le handoff.

## A5. Rejeu gate CP01/CP02 + non-régressions

Commandes : Playwright `ensemble04-cp01-cp02-correction` + E04 + F2 + long-thread ; vitest studio-rail ; tsc ; next build worktree.

### results.json

```json
{
  "at": "2026-11-16T23:16:55.602Z",
  "CP01-A": {
    "pass": true,
    "nominal": {
      "composerH": 142,
      "maxHeight": "160px",
      "gap": 25,
      "separate": true,
      "stackPending": "0",
      "bottomSlack": 16
    }
  },
  "CP01-B": {
    "pass": true,
    "geom": {
      "viewport": {
        "w": 1680,
        "h": 970
      },
      "composer": {
        "top": 812,
        "bottom": 954,
        "h": 142,
        "maxHeight": "160px"
      },
      "banner": {
        "top": 711.609375,
        "bottom": 802,
        "h": 90.390625
      },
      "reconcile": {
        "top": 747.40625,
        "bottom": 791,
        "fullyInViewport": true,
        "reachableViaStackScroll": true,
        "clippedByHiddenAncestor": false
      },
      "thread": {
        "bottom": 669.609375
      },
      "overlapThread": false,
      "stack": {
        "overflowY": "auto",
        "maxHeight": "360px",
        "scrollHeight": 242,
        "clientHeight": 242
      },
      "pass": true,
      "reason": "ok"
    }
  },
  "CP01-C": {
    "pass": true,
    "geom": {
      "viewport": {
        "w": 1280,
        "h": 600
      },
      "composer": {
        "top": 442,
        "bottom": 584,
        "h": 142,
        "maxHeight": "160px"
      },
      "banner": {
        "top": 341.609375,
        "bottom": 432,
        "h": 90.390625
      },
      "reconcile": {
        "top": 377.40625,
        "bottom": 421,
        "fullyInViewport": true,
        "reachableViaStackScroll": true,
        "clippedByHiddenAncestor": false
      },
      "thread": {
        "bottom": 299.609375
      },
      "overlapThread": false,
      "stack": {
        "overflowY": "auto",
        "maxHeight": "300px",
        "scrollHeight": 242,
        "clientHeight": 242
      },
      "pass": true,
      "reason": "ok"
    }
  },
  "CP01-D": {
    "pass": true,
    "geom": {
      "viewport": {
        "w": 1024,
        "h": 768
      },
      "composer": {
        "top": 654.8125,
        "bottom": 796.8125,
        "h": 142,
        "maxHeight": "160px"
      },
      "banner": {
        "top": 554.421875,
        "bottom": 644.8125,
        "h": 90.390625
      },
      "reconcile": {
        "top": 590.21875,
        "bottom": 633.8125,
        "fullyInViewport": true,
        "reachableViaStackScroll": true,
        "clippedByHiddenAncestor": false
      },
      "thread": {
        "bottom": 521.421875
      },
      "overlapThread": false,
      "stack": {
        "overflowY": "auto",
        "maxHeight": "none",
        "scrollHeight": 242,
        "clientHeight": 242
      },
      "pass": true,
      "reason": "ok"
    }
  },
  "CP01-E": {
    "pass": true,
    "geom": {
      "viewport": {
        "w": 390,
        "h": 844
      },
      "composer": {
        "top": 753.171875,
        "bottom": 895.171875,
        "h": 142,
        "maxHeight": "160px"
      },
      "banner": {
        "top": 652.78125,
        "bottom": 743.171875,
        "h": 90.390625
      },
      "reconcile": {
        "top": 688.578125,
        "bottom": 732.171875,
        "fullyInViewport": true,
        "reachableViaStackScroll": true,
        "clippedByHiddenAncestor": false
      },
      "thread": {
        "bottom": 619.78125
      },
      "overlapThread": false,
      "stack": {
        "overflowY": "auto",
        "maxHeight": "none",
        "scrollHeight": 242,
        "clientHeight": 242
      },
      "pass": true,
      "reason": "ok"
    }
  },
  "CP02": {
    "pass": true,
    "navResults": {
      "desktop": {
        "pass": true,
        "bleed": 0,
        "expectDesktopRail": true
      },
      "mid": {
        "pass": true,
        "bleed": 0,
        "expectDesktopRail": true
      },
      "mobile": {
        "pass": true,
        "bleed": 0,
        "expectDesktopRail": false
      }
    }
  }
}
```

### cp01-b-geom.json

```json
{
  "viewport": {
    "w": 1680,
    "h": 970
  },
  "composer": {
    "top": 812,
    "bottom": 954,
    "h": 142,
    "maxHeight": "160px"
  },
  "banner": {
    "top": 711.609375,
    "bottom": 802,
    "h": 90.390625
  },
  "reconcile": {
    "top": 747.40625,
    "bottom": 791,
    "fullyInViewport": true,
    "reachableViaStackScroll": true,
    "clippedByHiddenAncestor": false
  },
  "thread": {
    "bottom": 669.609375
  },
  "overlapThread": false,
  "stack": {
    "overflowY": "auto",
    "maxHeight": "360px",
    "scrollHeight": 242,
    "clientHeight": 242
  },
  "pass": true,
  "reason": "ok"
}
```

### cp01-c-geom.json

```json
{
  "viewport": {
    "w": 1280,
    "h": 600
  },
  "composer": {
    "top": 442,
    "bottom": 584,
    "h": 142,
    "maxHeight": "160px"
  },
  "banner": {
    "top": 341.609375,
    "bottom": 432,
    "h": 90.390625
  },
  "reconcile": {
    "top": 377.40625,
    "bottom": 421,
    "fullyInViewport": true,
    "reachableViaStackScroll": true,
    "clippedByHiddenAncestor": false
  },
  "thread": {
    "bottom": 299.609375
  },
  "overlapThread": false,
  "stack": {
    "overflowY": "auto",
    "maxHeight": "300px",
    "scrollHeight": 242,
    "clientHeight": 242
  },
  "pass": true,
  "reason": "ok"
}
```

### cp01-d-geom.json

```json
{
  "viewport": {
    "w": 1024,
    "h": 768
  },
  "composer": {
    "top": 654.8125,
    "bottom": 796.8125,
    "h": 142,
    "maxHeight": "160px"
  },
  "banner": {
    "top": 554.421875,
    "bottom": 644.8125,
    "h": 90.390625
  },
  "reconcile": {
    "top": 590.21875,
    "bottom": 633.8125,
    "fullyInViewport": true,
    "reachableViaStackScroll": true,
    "clippedByHiddenAncestor": false
  },
  "thread": {
    "bottom": 521.421875
  },
  "overlapThread": false,
  "stack": {
    "overflowY": "auto",
    "maxHeight": "none",
    "scrollHeight": 242,
    "clientHeight": 242
  },
  "pass": true,
  "reason": "ok"
}
```

### cp01-e-geom.json

```json
{
  "viewport": {
    "w": 390,
    "h": 844
  },
  "composer": {
    "top": 753.171875,
    "bottom": 895.171875,
    "h": 142,
    "maxHeight": "160px"
  },
  "banner": {
    "top": 652.78125,
    "bottom": 743.171875,
    "h": 90.390625
  },
  "reconcile": {
    "top": 688.578125,
    "bottom": 732.171875,
    "fullyInViewport": true,
    "reachableViaStackScroll": true,
    "clippedByHiddenAncestor": false
  },
  "thread": {
    "bottom": 619.78125
  },
  "overlapThread": false,
  "stack": {
    "overflowY": "auto",
    "maxHeight": "none",
    "scrollHeight": 242,
    "clientHeight": 242
  },
  "pass": true,
  "reason": "ok"
}
```

### Synthèse gates

| Contrôle | Résultat |
|----------|----------|
| CP01-A..E | **PASS** |
| CP02 desktop/mid/mobile | **PASS** |
| E04 + T13 + T16 | **PASS** |
| F2 | **PASS** |
| long-thread | **PASS** |
| Vitest studio-rail | **PASS** 13/13 |
| tsc | **32** erreurs parent UX-005 (réserve) |
| Next build worktree | **PASS** → BUILD_ID `3LzvYPTQc-Km7St6nF97r` |

Vitest GitHub App lane : 3 FAIL préexistants (config lane) — hors impact candidat UX.

Captures locales : `.tmp-sfia-review/cutover-984d77a3/cp/` (`cp01a-nominal-1680x970.png`, `cp01-b-pending-…`, etc.).

## A6. Limites Fake/Real

- Gates CP01/CP02 et non-régressions : **DEV / fixture Nora** — ≠ LIVE.
- Smoke RECETTE : structurelles + DEV test login portfolio ; surfaces projet Morris = **USER_RECETTE_REQUIRED**.

---

# PARTIE B — CUTOVER

## B1. GO et préconditions

GO Morris explicite cycle unique. Gate local pré-cutover **PASS** (fichier `gate-local-pre-cutover.json`).

## B2. RECETTE avant

- URL `http://127.0.0.1:3200`
- SHA `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6`
- BUILD `WUqfWdCB7T2rHzDvk-Hre`
- LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`

## B3. Sauvegarde / rollback

Emplacement hors Git : `/Users/morris/Projects/sfia-recette-backups/ml4d-e04-20261117-pre-984d77a3/`

- Dump custom `sfia_next_recette_ml4_pre_984d77a3.dump` (~526249 bytes, sha256 `dc14fcb1…`)
- TOC 240 entries ; public tables **33**
- Plist + start script a30e75c7 préservés
- Worktree rollback conservé : `…-ensemble04-recette-build-a30e75c7`
- **Pas de restauration auto DB**

## B4. Build immuable

- Worktree : `…-ensemble04-recette-build-984d77a3` @ `984d77a3` (clean)
- `npm ci --include=dev` puis `next build` (env RECETTE sourcée en mémoire, aucun `.env` écrit dans le worktree)
- BUILD_ID : `3LzvYPTQc-Km7St6nF97r`
- Aucune migration dans le diff candidat

## B5. Mutation LaunchAgent

Diff plist (chemins uniquement) :

```diff
--- /Users/morris/Projects/sfia-recette-backups/ml4d-e04-20261117-pre-984d77a3/com.sfia.studio.next.recette.ml4d-ux004.plist.pre-984d77a3	2026-11-17 00:16:17
+++ /Users/morris/Projects/sfia-recette-backups/ml4d-e04-20261117-pre-984d77a3/com.sfia.studio.next.recette.ml4d-ux004.plist.post-984d77a3	2026-11-17 00:19:32
@@ -2,26 +2,26 @@
 <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
 <plist version="1.0">
 <dict>
-  <key>Label</key>
-  <string>com.sfia.studio.next.recette.ml4d-ux004</string>
-  <key>ProgramArguments</key>
-  <array>
-    <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/start-recette-ensemble04-a30e75c7.sh</string>
-  </array>
-  <key>WorkingDirectory</key>
-  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/projects/sfia-studio-next/web</string>
-  <key>RunAtLoad</key>
-  <true/>
-  <key>KeepAlive</key>
-  <true/>
-  <key>StandardOutPath</key>
-  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/launchd.out.log</string>
-  <key>StandardErrorPath</key>
-  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7/launchd.err.log</string>
-  <key>EnvironmentVariables</key>
-  <dict>
-    <key>PATH</key>
-    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
-  </dict>
+	<key>EnvironmentVariables</key>
+	<dict>
+		<key>PATH</key>
+		<string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
+	</dict>
+	<key>KeepAlive</key>
+	<true/>
+	<key>Label</key>
+	<string>com.sfia.studio.next.recette.ml4d-ux004</string>
+	<key>ProgramArguments</key>
+	<array>
+		<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/start-recette-ensemble04-984d77a3.sh</string>
+	</array>
+	<key>RunAtLoad</key>
+	<true/>
+	<key>StandardErrorPath</key>
+	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/launchd.err.log</string>
+	<key>StandardOutPath</key>
+	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/launchd.out.log</string>
+	<key>WorkingDirectory</key>
+	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/projects/sfia-studio-next/web</string>
 </dict>
 </plist>

```

Procédure : bootout → install plist → bootstrap/kickstart → un listener `:3200` → HTTP 200 → BUILD match → `SFIA_SOURCE_SHA=984d77a3` dans le process.

## B6. RECETTE après

| Item | Valeur |
|------|--------|
| URL | `http://127.0.0.1:3200` |
| source_sha | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| Mode | `next start` production |
| DB tables | 33 inchangé |

## B7. Smoke

```json
{
  "at": "2026-11-16T23:21:50.763Z",
  "EXPECT_BUILD": "3LzvYPTQc-Km7St6nF97r",
  "EXPECT_SHA": "984d77a36695c2f59ebbc18619e54eeeb43ad94e",
  "results": {
    "SC01": "PASS (login HTTP + BUILD_ID 3LzvYPTQc-Km7St6nF97r)",
    "SC02": "PASS (portfolio shell rail_w=246; DEV test login — not Morris OAuth)",
    "SC03": "USER_RECETTE_REQUIRED (Sas/prep under Morris OAuth)",
    "SC04": "USER_RECETTE_REQUIRED (project identity under Morris OAuth)",
    "SC05": "USER_RECETTE_REQUIRED (Travail independent cards)",
    "SC06": "USER_RECETTE_REQUIRED (intro/fil/composer/inspector)",
    "SC07": "USER_RECETTE_REQUIRED (long conversation)",
    "SC08": "USER_RECETTE_REQUIRED (pending reconcile)",
    "SC09": "USER_RECETTE_REQUIRED (Projet/Journal/Trajectoire/Travail)",
    "SC10": "PASS (mobile bottom nav personal; railHidden=true; bleed=0) | USER_RECETTE_REQUIRED project mobile strip",
    "SC11": "PASS (unavailable/safe state)",
    "SC12": "PASS (public tables=33 unchanged; dump backup present; non-destructive)",
    "SC13": "PASS build=3LzvYPTQc-Km7St6nF97r sha=984d77a36695c2f59ebbc18619e54eeeb43ad94e url=http://127.0.0.1:3200 LaunchAgent=com.sfia.studio.next.recette.ml4d-ux004"
  }
}
```

## B8. Manifeste ENV-01

```yaml
environment: RECETTE
served_address: http://127.0.0.1:3200
source_repository: mcleland147/sfia-workspace
source_branch: feat/next-ml4d-project-space-20261116
source_sha: 984d77a36695c2f59ebbc18619e54eeeb43ad94e
base_main_sha: 997d4c4e8204993de7107552898c8cc08cd3b0ed
build_id: 3LzvYPTQc-Km7St6nF97r
schema_revision: public_tables=33 (unchanged; no migration files in candidate range)
test_data_revision: preserved (non-destructive cutover; dump backup ml4d-e04-20261117-pre-984d77a3)
product_version: 0.0.0-dev
candidate_version: NO RELEASE
capabilities:
  - next_start_production
  - studio_lane_RECETTE
  - ensemble04_vertical_layout
  - cp01_pending_stack
  - cp02_mobile_strip
quality_evidence:
  CP01_A_to_E: PASS
  CP02: PASS
  playwright_nonreg: PASS
  next_build: PASS
  vitest_studio_rail: PASS_13
  tsc_errors: 32_preexisting_UX005
known_gaps:
  - typescript_32_parent_UX005
  - vitest_github_app_lane_3_fail_preexisting
  - results_preuves_KNOWN_GAP
  - unicode_glyphs_morris_finish
  - nora_advanced_ensemble05
  - oauth_morris_USER_RECETTE_REQUIRED_for_private_surfaces
review_decision: READY_FOR_MORRIS_VISUAL_RECETTE
rollback_source_sha: a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6
rollback_build_id: WUqfWdCB7T2rHzDvk-Hre
smoke_summary: see smoke-results.json
cutover_status: DEPLOYED
launch_agent: com.sfia.studio.next.recette.ml4d-ux004
worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3

```

## B9. Incidents

- Premier `npm ci` sous `NODE_ENV=production` a omis les deps de build → corrigé par réinstall complète (pas de changement code).
- Vérification BUILD via `tr -d '<!->'` erronée (plage ASCII) → fausse alerte ; BUILD réellement servi correct (`3LzvYPTQc-Km7St6nF97r`).

## B10. Review Handoff

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Publisher : `scripts/sfia/publish-review-handoff.sh`
- Commit distant vérifié : `03e121aff0c5336bb7872618d6b337df3e69598d`
- Blob distant vérifié : `4f23c932eb0c7d59cb3d3af7d1c54ecf6b419ddb`
- Verdict publisher : HANDOFF UPDATED — REMOTE VERIFIED
- Push projet : aucun

## B11. Décisions Morris restantes

1. Réception visuelle Figma 652:* sur RECETTE (Travail → Projet → Navigation → Indisponible).
2. Parcours OAuth personnels (SC03–SC09 / SC08 pending).
3. Aucune promotion STABLE / Gate C / ML5.
