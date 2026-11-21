# SFIA Review Pack LIGHT — Ensemble 07 · Acquis/À clarifier 50/50 · Clôture recette

> Review Pack LIGHT · Handoff L3 publish-in-cycle
> Push projet / PR / merge / STABLE / ADOPTED / Ensemble 08 : **NON**

## 1. Date et GO

| | |
|---|---|
| Date | 2026-11-21T10:39Z |
| GO Morris | STANDARD — correctif unique Acquis/À clarifier · RECETTE direct · clôture E07 |
| Décision UAT | Acceptation 21/11 avec réserve UX unique (~50/50) |

## 2. Git Truth

### Initial
| | |
|---|---|
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD | `09a935bc71a3ab77eb063e9425b6f07ca1162417` |
| Tree | `5809a0bb707822eadde898b477e341125b746971` |
| origin/main | `542da1de917867b6bbda8b2b57d100552711c9aa` |

### Final
| | |
|---|---|
| Runtime RECETTE SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| Runtime tree | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
| Tip delivery (PV docs) | `e784dc93bc7816bc9724a95bc8abc2b3d633e140` |
| Tip tree | `804c25746339d92770c77bbe6d12f9110dcfa8d5` |
| Push projet / PR / Merge | **NON** |

## 3. Correctif

**Propriétaire :** `TrajectoryBoard` — `data-testid="trajectory-cycle-knowledge-row"`.

**Cause :** `640fr 646fr` sans `minmax(0,…)` / `min-w-0` → collapse Acquis.

**Fix :** `md:grid-cols-[minmax(0,640fr)_minmax(0,646fr)]` + gap 24 · `min-w-0` · `break-words` · stack `grid-cols-1` sous md.

Figma Page 10 inchangé (640/646/gap24/h157).

## 4. Diff intégral

```email
From 5ad8fa57e4d529726244ddfae394074f5ea65432 Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@macbook-air.home>
Date: Sat, 21 Nov 2026 11:35:42 +0100
Subject: [PATCH] =?UTF-8?q?fix(next):=20balance=20Ensemble=2007=20Acquis/?=
 =?UTF-8?q?=C3=80=20clarifier=20panels=2050/50?=
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Restore Page 10 knowledge-row proportions (640/646 + gap 24) with minmax(0) grid sizing so content no longer collapses one panel; prove F2 on 09.02/09.09 and record Morris UAT acceptance with technical reserve clearance.

Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts b/projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts
index b3e959ed..c13fedd6 100644
--- a/projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts
+++ b/projects/sfia-studio-next/web/scripts/e07-cycle8-measure-13.mts
@@ -132,10 +132,16 @@ async function main() {
   await visit("09.09", urls.urls.traj09, '[data-testid="trajectory-board"]', [
     '[data-testid="trajectory-active-cycle"]',
     '[data-testid="trajectory-cycle-actif-panel"]',
+    '[data-testid="trajectory-acquis"]',
+    '[data-testid="trajectory-a-clarifier"]',
+    '[data-testid="trajectory-cycle-knowledge-row"]',
   ]);
   await visit("09.02", urls.urls.traj02, '[data-testid="trajectory-board"]', [
     '[data-testid="trajectory-roadmap-cards"]',
     '[data-testid="trajectory-active-cycle"]',
+    '[data-testid="trajectory-acquis"]',
+    '[data-testid="trajectory-a-clarifier"]',
+    '[data-testid="trajectory-cycle-knowledge-row"]',
   ]);
   await visit("09.08", urls.urls.traj08, '[data-testid="trajectory-board"]', [
     '[data-testid="trajectory-between-cycles"]',
diff --git a/projects/sfia-studio-next/web/scripts/e07-measure-acquis-panels.mts b/projects/sfia-studio-next/web/scripts/e07-measure-acquis-panels.mts
new file mode 100644
index 00000000..1485b5c8
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/e07-measure-acquis-panels.mts
@@ -0,0 +1,268 @@
+/**
+ * Targeted F2 — Acquis / À clarifier panels @ 1680×970 (09.02 + 09.09).
+ * Expectation Page 10: ~640 / ~646 / gap 24 (tolérance 2 CSS px).
+ */
+import { chromium } from "@playwright/test";
+import { mkdirSync, writeFileSync, readFileSync, existsSync } from "fs";
+import { resolve } from "path";
+import { createHash } from "crypto";
+import { spawnSync } from "child_process";
+
+const ROOT = resolve(process.cwd(), "../../..");
+const OUT = resolve(
+  ROOT,
+  ".tmp-sfia-review/ensemble07-acquis-panels-fix",
+);
+mkdirSync(resolve(OUT, "runtime"), { recursive: true });
+const urlsPath = "/tmp/sfia-e07-shot-urls.json";
+
+const TARGET = {
+  acquisW: 640,
+  clarifierW: 646,
+  gap: 24,
+  height: 157,
+  tol: 2,
+};
+
+function sha12(buf: Buffer) {
+  return createHash("sha256").update(buf).digest("hex").slice(0, 12);
+}
+
+async function box(page: import("@playwright/test").Page, sel: string) {
+  return page.evaluate((s) => {
+    const el = document.querySelector(s) as HTMLElement | null;
+    if (!el) return null;
+    const r = el.getBoundingClientRect();
+    return {
+      x: Math.round(r.x),
+      y: Math.round(r.y),
+      width: Math.round(r.width),
+      height: Math.round(r.height),
+    };
+  }, sel);
+}
+
+function delta(actual: number, expected: number) {
+  return Math.abs(actual - expected);
+}
+
+function pass(actual: number, expected: number, tol = TARGET.tol) {
+  return delta(actual, expected) <= tol;
+}
+
+async function main() {
+  if (!existsSync(urlsPath)) {
+    const r = spawnSync("npx", ["tsx", "scripts/e07-seed-screenshot.mts"], {
+      cwd: process.cwd(),
+      env: process.env,
+      encoding: "utf8",
+      timeout: 180_000,
+    });
+    if (r.status !== 0) {
+      console.error(r.stderr || r.stdout);
+      process.exit(1);
+    }
+  }
+  const urls = JSON.parse(readFileSync(urlsPath, "utf8")) as {
+    urls: Record<string, string>;
+  };
+
+  const browser = await chromium.launch();
+  const context = await browser.newContext({
+    viewport: { width: 1680, height: 970 },
+  });
+  const page = await context.newPage();
+  await page.goto("http://127.0.0.1:3100/login", { waitUntil: "networkidle" });
+  await page.evaluate(async () => {
+    await fetch("/api/dev/login", {
+      method: "POST",
+      headers: { "Content-Type": "application/json" },
+      body: JSON.stringify({ pilot: "a" }),
+      credentials: "include",
+    });
+  });
+
+  const rows: Array<Record<string, unknown>> = [];
+  let allPass = true;
+
+  for (const ref of ["09.02", "09.09"] as const) {
+    const url = ref === "09.02" ? urls.urls.traj02 : urls.urls.traj09;
+    if (!url) {
+      rows.push({ ref, verdict: "NOT PROVEN", reason: "no seed URL" });
+      allPass = false;
+      continue;
+    }
+    await page.goto(url, { waitUntil: "networkidle", timeout: 45_000 });
+    await page.waitForSelector('[data-testid="trajectory-acquis"]', {
+      timeout: 20_000,
+    });
+    await page.waitForTimeout(400);
+
+    const acquis = await box(page, '[data-testid="trajectory-acquis"]');
+    const clarifier = await box(page, '[data-testid="trajectory-a-clarifier"]');
+    const row = await box(page, '[data-testid="trajectory-cycle-knowledge-row"]');
+    const emptyA = await page.$('[data-testid="trajectory-acquis-empty"]');
+    const emptyC = await page.$('[data-testid="trajectory-a-clarifier-empty"]');
+    const linkA = await page.$('[data-testid="trajectory-acquis-journal-link"]');
+    const linkC = await page.$(
+      '[data-testid="trajectory-a-clarifier-journal-link"]',
+    );
+
+    const shotPath = resolve(OUT, "runtime", `${ref}-acquis-panels.png`);
+    await page.screenshot({ path: shotPath, fullPage: false });
+    const shotSha = sha12(readFileSync(shotPath));
+
+    if (!acquis || !clarifier || !row) {
+      rows.push({
+        ref,
+        verdict: "FAIL",
+        reason: "panel missing",
+        acquis,
+        clarifier,
+        row,
+      });
+      allPass = false;
+      continue;
+    }
+
+    const gap = clarifier.x - (acquis.x + acquis.width);
+    const checks = {
+      acquisW: {
+        actual: acquis.width,
+        expected: TARGET.acquisW,
+        pass: pass(acquis.width, TARGET.acquisW),
+      },
+      clarifierW: {
+        actual: clarifier.width,
+        expected: TARGET.clarifierW,
+        pass: pass(clarifier.width, TARGET.clarifierW),
+      },
+      gap: {
+        actual: gap,
+        expected: TARGET.gap,
+        pass: pass(gap, TARGET.gap),
+      },
+      acquisMinH: {
+        actual: acquis.height,
+        expected: TARGET.height,
+        pass: acquis.height >= TARGET.height - TARGET.tol,
+      },
+      clarifierMinH: {
+        actual: clarifier.height,
+        expected: TARGET.height,
+        pass: clarifier.height >= TARGET.height - TARGET.tol,
+      },
+      noHOverflow: {
+        actual: row.width,
+        expected: 1310,
+        pass: row.width <= 1310 + TARGET.tol && row.x + row.width <= 1680,
+      },
+      journalLinks: {
+        actual: Boolean(linkA && linkC),
+        expected: true,
+        pass: Boolean(linkA && linkC),
+      },
+    };
+
+    const refPass = Object.values(checks).every((c) => c.pass);
+    if (!refPass) allPass = false;
+
+    rows.push({
+      ref,
+      verdict: refPass ? "PASS" : "FAIL",
+      shot: shotSha,
+      emptyStates: { acquis: Boolean(emptyA), clarifier: Boolean(emptyC) },
+      boxes: { acquis, clarifier, row, gap },
+      checks,
+    });
+
+    // Narrow viewport — stack, no horizontal overflow
+    await page.setViewportSize({ width: 390, height: 844 });
+    await page.waitForTimeout(300);
+    const overflow = await page.evaluate(() => {
+      return document.documentElement.scrollWidth > window.innerWidth + 2;
+    });
+    const stacked = await page.evaluate(() => {
+      const a = document.querySelector(
+        '[data-testid="trajectory-acquis"]',
+      ) as HTMLElement | null;
+      const c = document.querySelector(
+        '[data-testid="trajectory-a-clarifier"]',
+      ) as HTMLElement | null;
+      if (!a || !c) return false;
+      const ar = a.getBoundingClientRect();
+      const cr = c.getBoundingClientRect();
+      return cr.y >= ar.y + ar.height - 2;
+    });
+    rows.push({
+      ref: `${ref}-narrow`,
+      verdict: !overflow && stacked ? "PASS" : "FAIL",
+      overflow,
+      stacked,
+    });
+    if (overflow || !stacked) allPass = false;
+
+    await page.setViewportSize({ width: 1680, height: 970 });
+  }
+
+  // Long text wrap: inject via DOM on 09.02 if available
+  if (urls.urls.traj02) {
+    await page.goto(urls.urls.traj02, { waitUntil: "networkidle" });
+    await page.waitForSelector('[data-testid="trajectory-acquis"]');
+    await page.evaluate(() => {
+      const ul = document.querySelector(
+        '[data-testid="trajectory-acquis"] ul',
+      );
+      const host =
+        ul ||
+        document.querySelector('[data-testid="trajectory-acquis"]');
+      if (!host) return;
+      const li = document.createElement("p");
+      li.setAttribute("data-testid", "trajectory-acquis-long-probe");
+      li.className = "mt-3 text-[13px] leading-[1.35] text-[#f3f5ff] break-words";
+      li.textContent =
+        "Probe wrapping: " +
+        "clarification métier et périmètre opérationnel du pilote Equip'Campus ".repeat(
+          6,
+        );
+      host.appendChild(li);
+    });
+    const before = await box(page, '[data-testid="trajectory-acquis"]');
+    const afterC = await box(page, '[data-testid="trajectory-a-clarifier"]');
+    const probe = await box(page, '[data-testid="trajectory-acquis-long-probe"]');
+    const wrapOk =
+      !!before &&
+      !!afterC &&
+      !!probe &&
+      pass(before.width, TARGET.acquisW) &&
+      pass(afterC.width, TARGET.clarifierW) &&
+      (probe.height ?? 0) > 20;
+    rows.push({
+      ref: "09.02-long-wrap",
+      verdict: wrapOk ? "PASS" : "FAIL",
+      before,
+      afterC,
+      probe,
+    });
+    if (!wrapOk) allPass = false;
+    const shotPath = resolve(OUT, "runtime", "09.02-long-wrap.png");
+    await page.screenshot({ path: shotPath, fullPage: false });
+  }
+
+  const report = {
+    measuredAt: new Date().toISOString(),
+    viewport: "1680x970",
+    target: TARGET,
+    allPass,
+    rows,
+  };
+  writeFileSync(resolve(OUT, "f2-acquis-panels.json"), JSON.stringify(report, null, 2));
+  console.log(JSON.stringify({ allPass, summary: rows.map((r) => ({ ref: r.ref, verdict: r.verdict })) }, null, 2));
+  await browser.close();
+  process.exit(allPass ? 0 : 1);
+}
+
+main().catch((e) => {
+  console.error(e);
+  process.exit(1);
+});
diff --git a/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx b/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
index e41a4af8..4a685735 100644
--- a/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
@@ -738,14 +738,13 @@ function ParcoursPrincipal(props: {
               CYCLE_OBJECTIVE_PENDING_LABEL}
           </p>

-          {/* Page 10 — Acquis / À clarifier remain present even when empty (honest empty state). */}
+          {/* Page 10 — Acquis / À clarifier ~50/50 (640/646 + gap 24); minmax(0) avoids content min-size collapse. */}
           <div
-            className="mt-4 grid"
-            style={{ gridTemplateColumns: "640fr 646fr", gap: 24 }}
+            className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,640fr)_minmax(0,646fr)]"
             data-testid="trajectory-cycle-knowledge-row"
           >
             <div
-              className="rounded-[10px] border border-[#2b3850] bg-[#1b2639] px-[19px] py-[15px]"
+              className="min-w-0 rounded-[10px] border border-[#2b3850] bg-[#1b2639] px-[19px] py-[15px]"
               style={{ minHeight: 157 }}
               data-testid="trajectory-acquis"
             >
@@ -757,7 +756,7 @@ function ParcoursPrincipal(props: {
               ) : (
                 <ul className="mt-3 space-y-[6px]">
                   {acquisItems.map((a) => (
-                    <li key={a.id} className="text-[13px] text-[#f3f5ff] truncate">
+                    <li key={a.id} className="text-[13px] leading-[1.35] text-[#f3f5ff] break-words">
                       {a.statement}
                     </li>
                   ))}
@@ -769,12 +768,13 @@ function ParcoursPrincipal(props: {
               <Link
                 href={`/projects/${props.projectId}?surface=journal`}
                 className="mt-3 inline-block text-[12px] font-semibold text-[#7477ed] hover:underline"
+                data-testid="trajectory-acquis-journal-link"
               >
                 Consulter le Journal ↗
               </Link>
             </div>
             <div
-              className="rounded-[10px] border border-[#2b3850] bg-[#1b2639] px-[19px] py-[15px]"
+              className="min-w-0 rounded-[10px] border border-[#2b3850] bg-[#1b2639] px-[19px] py-[15px]"
               style={{ minHeight: 157 }}
               data-testid="trajectory-a-clarifier"
             >
@@ -789,7 +789,7 @@ function ParcoursPrincipal(props: {
               ) : (
                 <ul className="mt-3 space-y-[6px]">
                   {clarifierItems.map((o) => (
-                    <li key={o.id} className="text-[13px] text-[#f3f5ff] truncate">
+                    <li key={o.id} className="text-[13px] leading-[1.35] text-[#f3f5ff] break-words">
                       {o.statement}
                     </li>
                   ))}
@@ -803,6 +803,7 @@ function ParcoursPrincipal(props: {
               <Link
                 href={`/projects/${props.projectId}?surface=journal`}
                 className="mt-3 inline-block text-[12px] font-semibold text-[#7477ed] hover:underline"
+                data-testid="trajectory-a-clarifier-journal-link"
               >
                 Consulter le Journal ↗
               </Link>
```

## 5. Preuves F2

```json
{
  "measuredAt": "2026-11-21T10:34:19.788Z",
  "viewport": "1680x970",
  "target": {
    "acquisW": 640,
    "clarifierW": 646,
    "gap": 24,
    "height": 157,
    "tol": 2
  },
  "allPass": true,
  "rows": [
    {
      "ref": "09.02",
      "verdict": "PASS",
      "shot": "dc3559e38be2",
      "emptyStates": {
        "acquis": true,
        "clarifier": true
      },
      "boxes": {
        "acquis": {
          "x": 309,
          "y": 621,
          "width": 639,
          "height": 157
        },
        "clarifier": {
          "x": 972,
          "y": 621,
          "width": 645,
          "height": 157
        },
        "row": {
          "x": 309,
          "y": 621,
          "width": 1308,
          "height": 157
        },
        "gap": 24
      },
      "checks": {
        "acquisW": {
          "actual": 639,
          "expected": 640,
          "pass": true
        },
        "clarifierW": {
          "actual": 645,
          "expected": 646,
          "pass": true
        },
        "gap": {
          "actual": 24,
          "expected": 24,
          "pass": true
        },
        "acquisMinH": {
          "actual": 157,
          "expected": 157,
          "pass": true
        },
        "clarifierMinH": {
          "actual": 157,
          "expected": 157,
          "pass": true
        },
        "noHOverflow": {
          "actual": 1308,
          "expected": 1310,
          "pass": true
        },
        "journalLinks": {
          "actual": true,
          "expected": true,
          "pass": true
        }
      }
    },
    {
      "ref": "09.02-narrow",
      "verdict": "PASS",
      "overflow": false,
      "stacked": true
    },
    {
      "ref": "09.09",
      "verdict": "PASS",
      "shot": "1be036bb1499",
      "emptyStates": {
        "acquis": true,
        "clarifier": true
      },
      "boxes": {
        "acquis": {
          "x": 309,
          "y": 621,
          "width": 639,
          "height": 157
        },
        "clarifier": {
          "x": 972,
          "y": 621,
          "width": 645,
          "height": 157
        },
        "row": {
          "x": 309,
          "y": 621,
          "width": 1308,
          "height": 157
        },
        "gap": 24
      },
      "checks": {
        "acquisW": {
          "actual": 639,
          "expected": 640,
          "pass": true
        },
        "clarifierW": {
          "actual": 645,
          "expected": 646,
          "pass": true
        },
        "gap": {
          "actual": 24,
          "expected": 24,
          "pass": true
        },
        "acquisMinH": {
          "actual": 157,
          "expected": 157,
          "pass": true
        },
        "clarifierMinH": {
          "actual": 157,
          "expected": 157,
          "pass": true
        },
        "noHOverflow": {
          "actual": 1308,
          "expected": 1310,
          "pass": true
        },
        "journalLinks": {
          "actual": true,
          "expected": true,
          "pass": true
        }
      }
    },
    {
      "ref": "09.09-narrow",
      "verdict": "PASS",
      "overflow": false,
      "stacked": true
    },
    {
      "ref": "09.02-long-wrap",
      "verdict": "PASS",
      "before": {
        "x": 309,
        "y": 621,
        "width": 639,
        "height": 215
      },
      "afterC": {
        "x": 972,
        "y": 621,
        "width": 645,
        "height": 215
      },
      "probe": {
        "x": 329,
        "y": 732,
        "width": 599,
        "height": 88
      }
    }
  ]
}
```

Captures : `.tmp-sfia-review/ensemble07-acquis-panels-fix/runtime/`

## 6. Tests

| Suite | Résultat |
|---|---|
| tsc | PASS |
| unit ciblés | 8 PASS |
| Browser F2 acquis 09.02/09.09 | PASS |
| Build RECETTE | PASS · BUILD `BtZP6qDx5oAw8jwPQSEhc` |
| Campagne 11/11 | NOT RE-RUN |

## 7. RECETTE

| | |
|---|---|
| URL | http://127.0.0.1:3200 |
| SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
| Backup | `ml4d-e07-20261121T103623Z-pre-5ad8fa57.sql.gz` |
| Rollback | → 09a935bc |
| EquipCampus | intact · 1 ACTIVE CADRAGE |

## 8. Acceptation Morris

- UAT accepté 21/11 ; réserve unique Acquis/À clarifier.
- Réserve techniquement levée (F2 + RECETTE).
- PV `docs/next-ensemble07-recette-20261121@16e9107a`.
- Réserves historiques hors scope : non rouvertes.

## 9. Readiness Git

- vs main@542da1de : ~14 commits ; ~73 files.
- Inclure methodo v1.1 (`a4516496`) dans future intégration.
- Pas de push projet / PR / merge / Ensemble 08 ce cycle.

## 10. Verdict

**`ENSEMBLE 07 — MORRIS UAT ACCEPTED — FINAL UX RESERVE TECHNICALLY CLEARED — RECETTE UPDATED — READY FOR GIT INTEGRATION REVIEW`**
