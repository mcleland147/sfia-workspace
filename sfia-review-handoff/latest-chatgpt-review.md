# SFIA Review Pack FULL — Ensemble 07 · Cycle 8 Delivery UX → RECETTE

> Mono-cycle Cursor. Review Pack FULL. Handoff L3 `publish-in-cycle` obligatoire.
> **Push projet / PR / merge / STABLE / Nora LIVE / promotion officielle : NON.**

## 1. Date et GO consommé

| | |
|---|---|
| Date d'exécution | 2026-11-21 |
| GO Morris | CRITICAL — finalisation UX 13 états + CKI + finalité cycle + tests + gel local + déploiement RECETTE direct + smoke + FULL + L3 |
| Cycle | Cycle 8 — Delivery / implémentation (continuation macro-lot UX Ensemble 07) |
| Profil | CRITICAL |
| Typologie | EVOL / CORRECTIVE / UX / UI / DELIVERY / DEPLOY |
| Jalon | R5 / ML4D / Ensemble 07 |
| Versioning | NO RELEASE — candidat immuable RECETTE, aucune version officielle |
| Interdit respecté | pas de push projet · pas de PR · pas de merge · pas de STABLE · pas de migration Equip'Campus · pas de Nora LIVE métier |

## 2. Git Truth — initial / final

### Initial (avant correctifs Cycle 8 gelés)

| Contrôle | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD gel antérieur | `c500df9ce58575783bcb842bf83658e1837990a3` |
| Tree gel antérieur | `3794e3443906e144460e3f00ba1e82bb3504fdd3` |
| origin/main | `542da1de917867b6bbda8b2b57d100552711c9aa` |
| État initial Cycle 8 | modifications locales non commitées **préservées** (pas de reset/stash/clean) |
| Dernier handoff avant ce pack | `381ab829` / blob `989f3cc4` — PARTIAL (pas encore gel ni RECETTE ce03) |

### Final (candidat)

| Contrôle | Valeur |
|---|---|
| HEAD candidat | `ce03f5a7c6657f8bb924386b24355d37011833de` |
| Tree candidat | `bd9077d5a1663ab9bdf0cbe326f8cbc210c1dabe` |
| Commit message | `fix(next): align Ensemble 07 Figma runtime UX and CKI editorial` |
| Push projet | **NON** |
| PR | **NON** |
| Merge | **NON** |
| Working tree post-gel (hors preuves/tmp) | dirty mineur hors produit : `.tmp-sfia-review/chatgpt-review.md` (ce pack), untracked scripts dbg + `sas06-modal-export.svg` **non inclus** au candidat |

## 3. Sources Git / Figma / gouvernance lues

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (§ Review Handoff L3)
- `prompts/templates/sfia-cycle-execution-template.md` (§6.6 UX/UI, §6.9 Deploy, §6.14 Git, §6.16 Fake/Real, §7 FULL, §7.10 L3, §8 STOP, §9 rapport)
- `projects/sfia-studio-next/governance/SEF.md` (v0.2) ; ENV-01 ; environnements-recette-et-promotions ; product-versioning
- Contrat Ensemble 07 UX (branche docs) + `ux-ui/methodologie-contrat-figma-cursor.md` / transposition / protocole fidélité
- CKI `cki/01-cadrage.md`, `cki/02-conception-fonctionnelle.md`, manifeste 0.2.0
- Conception fonctionnelle trajectoire / Nora / décisions / connaissance
- As-built Ensemble 07 + `construction/delivery-history.md`
- Figma fileKey `itgvCulInEnFY6DvgIegvP` — session `f01f719c-a50d-4297-899d-d17098f11508`
- Contrats historiques `.tmp-sfia-review/ensemble07-figma-visual-contracts.json`
- MCP : `get_design_context` 09.05 (`983:219`), SAS06 ; `download_assets` SAS06 icons

## 4. Inventaire complet des modifications

### 4.1 Préexistantes Cycle 8 (préservées puis gelées)

CKI editorial, geometry Projet/Trajectoire/SAS06, shell figma-layout, tokens hero, measure scripts — déjà présentes localement avant le GO CRITICAL du 21/11 après-midi ; **aucun reset**.

### 4.2 Commit `ce03f5a7` — 28 files, +1898/−166

**Créés (produit)**

- `web/src/domains/pilotage/cki-editorial.ts`
- `web/src/domains/pilotage/cycle-objective-display.ts`
- `web/tests/unit/cki-editorial.test.ts`
- `web/tests/unit/cycle-objective-display.test.ts`
- `web/scripts/e07-cycle8-measure.mts`
- `web/scripts/e07-cycle8-measure-13.mts`
- `web/scripts/e07-runtime-screenshots.mts`
- `web/scripts/e07-seed-screenshot.mts`
- `web/scripts/e07-capture-sas-modal.mts`
- `web/public/figma/sas06/*.svg` (8 icônes natives via `download_assets`)

**Modifiés**

- `ProjectOverview.tsx`, `TrajectoryBoard.tsx`, `SasCreateProgressPopup.tsx`
- `tokens.css`, `StudioShell.tsx`, `studio-shell.css`
- `pilotage/service.ts`, `pilotage/types.ts`
- `ensemble07-browser-continuity.spec.ts`
- as-built + delivery-history

**Exclus volontairement du gel**

- secrets / `.env*`
- DB dumps
- `.tmp-sfia-review/**` (preuves locales)
- `sas06-modal-export.svg` (export brut non qualifié runtime)
- scripts `_dbg*` / `_e07-recapture*`

## 5. Nouveaux fichiers — contenu intégral

### 5.1 Patch nouveaux fichiers (source de vérité Git)

```email
From ce03f5a7c6657f8bb924386b24355d37011833de Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@macbook-air.home>
Date: Sat, 21 Nov 2026 09:54:18 +0100
Subject: [PATCH] fix(next): align Ensemble 07 Figma runtime UX and CKI
 editorial
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Converge Projet/Trajectoire/SAS06 to Figma F2 geometry, project verified CKI rubrics, and stop treating OPEN instructions as cycle finalité.

Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/cki-editorial.ts b/projects/sfia-studio-next/web/src/domains/pilotage/cki-editorial.ts
new file mode 100644
index 00000000..a0301f0a
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/cki-editorial.ts
@@ -0,0 +1,102 @@
+/**
+ * Read-only editorial projection of a validated CKI specialty file for UI 09.05.
+ * Parses the corpus markdown — does not invent copy or create a second CKI catalogue.
+ */
+import { loadVerifiedCkiText, CKI_CORPUS_VERSION } from "./cki-resolve";
+
+export type CkiEditorialAngle = {
+  title: string;
+  summary: string;
+};
+
+export type CkiEditorialProjection = {
+  ckiId: string;
+  ordinal: string;
+  title: string;
+  corpusVersion: string;
+  resultSought: string | null;
+  relevance: string | null;
+  angles: CkiEditorialAngle[];
+  sourceDigest: string;
+};
+
+function stripMdBold(s: string): string {
+  return s.replace(/\*\*/g, "").trim();
+}
+
+function firstHeadingTitle(text: string): string | null {
+  const m = text.match(/^#\s+CKI Next\s+\d+\s+[—–-]\s+(.+)$/m);
+  if (m?.[1]) return m[1].trim();
+  const h1 = text.match(/^#\s+(.+)$/m);
+  return h1?.[1]?.trim() ?? null;
+}
+
+function extractResultSought(text: string): string | null {
+  const m = text.match(
+    /\*\*Résultat recherché\s*:\*\*\s*([\s\S]+?)(?:\n\n|\n(?=[A-ZÀ-Ü*#])|$)/,
+  );
+  return m?.[1] ? stripMdBold(m[1].replace(/\n+/g, " ")) : null;
+}
+
+function extractRelevance(text: string): string | null {
+  const m = text.match(/-\s+\*\*Pertinent\s*:\*\*\s*([\s\S]+?)(?:\n-|\n\n|$)/);
+  return m?.[1] ? stripMdBold(m[1].replace(/\n+/g, " ")) : null;
+}
+
+/** First three technique bullets under "Manières de raisonner" — title + remainder as summary. */
+function extractAngles(text: string): CkiEditorialAngle[] {
+  const section = text.match(
+    /## Manières de raisonner[\s\S]*?\n\n([\s\S]*?)(?:\n\nCes techniques|\n## )/,
+  );
+  if (!section?.[1]) return [];
+  const bullets = [
+    ...section[1].matchAll(/-\s+\*\*([^*]+)\*\*\s*([\s\S]+?)(?=\n-|\n*$)/g),
+  ];
+  return bullets.slice(0, 3).map((b) => {
+    const rawTitle = stripMdBold(b[1] ?? "").replace(/\.$/, "");
+    const rawSummary = stripMdBold((b[2] ?? "").replace(/\n+/g, " "));
+    // Keep corpus technique titles intact (Figma mock uses curated short labels;
+    // we do not invent synonyms). Summaries are clipped to one line for the card.
+    const shortSummary =
+      rawSummary
+        .replace(/^[:.\s]+/, "")
+        .split(/[.;]/)[0]
+        ?.trim()
+        .slice(0, 72) || rawSummary.slice(0, 72);
+    return { title: rawTitle, summary: shortSummary };
+  });
+}
+
+export function parseCkiEditorialMarkdown(
+  ckiId: string,
+  text: string,
+  digest: string,
+): CkiEditorialProjection {
+  const ordinal = (ckiId.match(/^(\d{2})/)?.[1] ?? "").replace(/^0/, "") || ckiId;
+  return {
+    ckiId,
+    ordinal: ordinal.padStart(2, "0"),
+    title: firstHeadingTitle(text) ?? ckiId,
+    corpusVersion: CKI_CORPUS_VERSION,
+    resultSought: extractResultSought(text),
+    relevance: extractRelevance(text),
+    angles: extractAngles(text),
+    sourceDigest: digest,
+  };
+}
+
+/**
+ * Load editorial projection only when bytes match the pinned digest (RESOLVED path).
+ * ASSOCIATED / UNAVAILABLE → null (UI shows honest absence, no fallback inventé).
+ */
+export function loadCkiEditorialForPin(opts: {
+  ckiId: string | null | undefined;
+  contentDigest: string | null | undefined;
+  availability: string | null | undefined;
+}): CkiEditorialProjection | null {
+  if (!opts.ckiId || !opts.contentDigest) return null;
+  if (opts.availability !== "RESOLVED") return null;
+  const text = loadVerifiedCkiText(opts.ckiId, opts.contentDigest);
+  if (!text) return null;
+  return parseCkiEditorialMarkdown(opts.ckiId, text, opts.contentDigest);
+}
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts b/projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts
new file mode 100644
index 00000000..753eea25
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts
@@ -0,0 +1,47 @@
+/**
+ * Display boundary for cycle.objective — distinguish métier finalité from
+ * operational OPEN instructions that were incorrectly persisted as objective.
+ * Does not mutate storage; does not invent a métier finalité.
+ */
+
+const OPERATIONAL_OBJECTIVE = new RegExp(
+  [
+    "^\\s*OPEN_CYCLE\\b",
+    "^\\s*Cycle\\s+[A-Z_]+\\s*$",
+    "ouvrir\\s+le\\s+(premier\\s+)?cycle",
+    "ouverture\\s+(effective\\s+)?(du\\s+)?cycle",
+    "reprendre\\s+le\\s+cycle\\s+déjà\\s+actif",
+    "sans\\s+doublon",
+    "reste\\s+à\\s+confirmer\\s+par\\s+Studio",
+  ].join("|"),
+  "i",
+);
+
+export function isOperationalCycleObjective(raw: string | null | undefined): boolean {
+  const t = (raw ?? "").trim();
+  if (!t) return true;
+  return OPERATIONAL_OBJECTIVE.test(t);
+}
+
+/** Objective safe to show as métier finalité; null ⇒ honest empty state. */
+export function displayableCycleObjective(raw: string | null | undefined): string | null {
+  const t = (raw ?? "").trim();
+  if (!t || isOperationalCycleObjective(t)) return null;
+  return t;
+}
+
+/**
+ * Value to persist on OPEN/TRANSITION when the incoming objective is operational
+ * or empty. Keeps a short non-instructional placeholder — never an OPEN script.
+ */
+export function persistableCycleObjective(
+  raw: string | null | undefined,
+  cycleType: string,
+): string {
+  const shown = displayableCycleObjective(raw);
+  if (shown) return shown.slice(0, 2000);
+  return `Finalité métier à préciser — ${cycleType}`.slice(0, 2000);
+}
+
+export const CYCLE_OBJECTIVE_PENDING_LABEL =
+  "Finalité métier non encore formulée pour ce cycle.";
diff --git a/projects/sfia-studio-next/web/tests/unit/cki-editorial.test.ts b/projects/sfia-studio-next/web/tests/unit/cki-editorial.test.ts
new file mode 100644
index 00000000..aa4ffd12
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/cki-editorial.test.ts
@@ -0,0 +1,36 @@
+import { describe, expect, it } from "vitest";
+import { readFileSync } from "node:fs";
+import { join } from "node:path";
+import { parseCkiEditorialMarkdown } from "@/domains/pilotage/cki-editorial";
+
+const CKI_ROOT = join(__dirname, "../../../cki");
+
+describe("CKI editorial projection (09.05)", () => {
+  it("parses 01-cadrage into Figma rubrics — not technical id or cycle objective", () => {
+    const text = readFileSync(join(CKI_ROOT, "01-cadrage.md"), "utf8");
+    const editorial = parseCkiEditorialMarkdown("01-cadrage", text, "test-digest");
+
+    expect(editorial.title.replace(/[’']/g, "'")).toBe(
+      "Cadrage et clarification de l'intention",
+    );
+    expect(editorial.ordinal).toBe("01");
+    expect(editorial.corpusVersion).toBe("0.2.0");
+    expect(editorial.resultSought).toMatch(/demande parfois formulée/i);
+    expect(editorial.relevance).toMatch(/finalité|valeur attendue|intention/i);
+    expect(editorial.angles.length).toBeGreaterThanOrEqual(1);
+    expect(editorial.angles[0]?.title.length).toBeGreaterThan(3);
+    expect(editorial.title).not.toBe("01-cadrage");
+  });
+
+  it("parses 02-conception-fonctionnelle title and result", () => {
+    const text = readFileSync(join(CKI_ROOT, "02-conception-fonctionnelle.md"), "utf8");
+    const editorial = parseCkiEditorialMarkdown(
+      "02-conception-fonctionnelle",
+      text,
+      "test-digest-2",
+    );
+    expect(editorial.title).toMatch(/Conception fonctionnelle/i);
+    expect(editorial.resultSought).toMatch(/contrats fonctionnels/i);
+    expect(editorial.relevance).toBeTruthy();
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts b/projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts
new file mode 100644
index 00000000..32423bba
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts
@@ -0,0 +1,33 @@
+import { describe, expect, it } from "vitest";
+import {
+  CYCLE_OBJECTIVE_PENDING_LABEL,
+  displayableCycleObjective,
+  isOperationalCycleObjective,
+  persistableCycleObjective,
+} from "@/domains/pilotage/cycle-objective-display";
+
+describe("cycle objective display boundary", () => {
+  it("rejects OPEN instruction texts as métier finalité", () => {
+    expect(
+      isOperationalCycleObjective(
+        "Ouvrir le premier cycle CADRAGE, ou reprendre le cycle déjà actif sans doublon",
+      ),
+    ).toBe(true);
+    expect(displayableCycleObjective("OPEN_CYCLE CADRAGE")).toBeNull();
+    expect(displayableCycleObjective("Cycle CADRAGE")).toBeNull();
+  });
+
+  it("keeps real métier objectives", () => {
+    const m =
+      "Clarifier l'intention Equip'Campus et le périmètre de coordination entre sites.";
+    expect(displayableCycleObjective(m)).toBe(m);
+    expect(persistableCycleObjective(m, "CADRAGE")).toBe(m);
+  });
+
+  it("persists a non-instructional placeholder when operational", () => {
+    const p = persistableCycleObjective("OPEN_CYCLE CADRAGE", "CADRAGE");
+    expect(p).toMatch(/Finalité métier à préciser/);
+    expect(p).not.toMatch(/OPEN_CYCLE|sans doublon/i);
+    expect(CYCLE_OBJECTIVE_PENDING_LABEL.length).toBeGreaterThan(10);
+  });
+});

```

## 6. Fichiers modifiés — diffs complets reconstituables

### 6.1 Pilotage / shell / tokens / e2e

```email
From ce03f5a7c6657f8bb924386b24355d37011833de Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@macbook-air.home>
Date: Sat, 21 Nov 2026 09:54:18 +0100
Subject: [PATCH] fix(next): align Ensemble 07 Figma runtime UX and CKI
 editorial
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Converge Projet/Trajectoire/SAS06 to Figma F2 geometry, project verified CKI rubrics, and stop treating OPEN instructions as cycle finalité.

Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index aaca3574..acdf4fbc 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2066,13 +2066,80 @@
 }

 .project-space-header--breadcrumb-only {
-  min-height: 0;
+  min-height: 70px;
+  height: 70px;
   gap: 0;
-  padding-bottom: 4px;
+  padding: 0;
   flex-shrink: 0;
-  /* No differentiated navy panel behind intro — breadcrumb only. */
-  background: transparent;
-  position: relative;
+  box-sizing: border-box;
+  display: flex;
+  align-items: center;
+  background: #0a0e18;
+  border-bottom: 1px solid #273148;
+  position: sticky;
+  top: 0;
+  z-index: 3;
+}
+
+/* Figma 09.* surface heroes — fixed native sizes (no clamp drift). */
+.e07-surface-hero {
+  padding-top: 41px; /* header 70 → kicker y=111 */
+  margin: 0;
+}
+
+.e07-surface-hero .fig-kicker {
+  margin: 0;
+  font-size: 11px;
+  line-height: 20px;
+  height: 20px;
+}
+
+.e07-surface-hero-title {
+  margin: 14px 0 0;
+  font-family: var(--font-sans);
+  font-weight: 600;
+  font-size: 37px;
+  line-height: 1.2;
+  letter-spacing: -0.02em;
+  color: var(--fig-ink, #f3f5ff);
+  min-height: 52px; /* Figma title box ~55px */
+}
+
+.e07-surface-hero-sub {
+  margin: 5px 0 0;
+  font-size: 16px;
+  line-height: 1.4;
+  color: var(--fig-muted, #a3b0c7);
+  max-width: 52rem;
+  min-height: 51px; /* Figma description box */
+}
+
+.e07-section-rule {
+  margin-top: 13px; /* Figma: desc end ~256 → sep 269 */
+  margin-bottom: 20px; /* Figma: sep 269 → panel 289 */
+  height: 1px;
+  width: 100%;
+  max-width: 1358px;
+  background: #2b3850;
+}
+
+.project-overview,
+.trajectory-board,
+.trajectory-cki {
+  display: flex;
+  flex-direction: column;
+  max-width: 1358px;
+}
+
+/* Spacing between panels after the hero rule (not between hero parts). */
+.trajectory-board > .e07-section-rule ~ * + *,
+.trajectory-cki > .e07-section-rule ~ * + * {
+  margin-top: 20px;
+}
+
+/* Projet: only the first panel follows the rule; activity spacing is explicit. */
+.project-overview > .e07-section-rule + * {
+  margin-top: 0;
 }

 .project-space-breadcrumb {
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 515c52d1..66fafd0f 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -496,6 +496,13 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
               ? "1"
               : undefined
           }
+          data-project-figma-layout={
+            projectId &&
+            !projectSpaceBlocked &&
+            ["projet", "pilotage"].includes(parseStudioSurface(surface) ?? "")
+              ? "1"
+              : undefined
+          }
         >
           {children}
         </main>
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 9b38d7dd..5f86dff0 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -125,6 +125,25 @@ html.studio-shell-lock body {
   max-height: none;
 }

+/* Ensemble 07 — Projet / Trajectoire: Figma frame 1680×970, header 70, content x=284. */
+.studio-shell-main[data-project-figma-layout="1"] {
+  padding: 0 38px 24px;
+  display: flex;
+  flex-direction: column;
+  overflow: hidden;
+}
+
+.studio-shell-main[data-project-figma-layout="1"] > .project-space-page {
+  flex: 1 1 auto;
+  min-height: 0;
+  overflow-y: auto;
+  overscroll-behavior: contain;
+  gap: 0;
+  max-width: none;
+  margin: 0;
+  width: 100%;
+}
+
 .studio-shell-main-mobile-pad {
   padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
 }
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index 7cfafe04..77d2f14c 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -22,6 +22,8 @@ import {
   markDecisionState,
 } from "@/domains/decisions/service";
 import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@/domains/pilotage/cki-resolve";
+import { loadCkiEditorialForPin } from "@/domains/pilotage/cki-editorial";
+import { persistableCycleObjective } from "@/domains/pilotage/cycle-objective-display";
 import { tryCanonicalCycleType } from "@/domains/pilotage/cycle-type-normalize";
 import { parseForecastJson } from "@/domains/pilotage/forecast-builder";
 import { getQualificationProjection } from "@/domains/pilotage/initial-qualification";
@@ -225,13 +227,33 @@ export async function getPilotageProjection(pilotId: string, projectId: string):
           status: cycle.status,
           objective: cycle.objective,
           revision: cycle.revision,
-          cki: resolvePinnedCki({
-            ckiId: cycle.ckiId,
-            contentDigest: cycle.ckiContentDigest,
-            pinnedVersion: cycle.ckiPinnedVersion,
-            manifestRef: cycle.ckiManifestRef,
-            pinOrigin: cycle.ckiPinOrigin,
-          }),
+          cki: (() => {
+            const pin = resolvePinnedCki({
+              ckiId: cycle.ckiId,
+              contentDigest: cycle.ckiContentDigest,
+              pinnedVersion: cycle.ckiPinnedVersion,
+              manifestRef: cycle.ckiManifestRef,
+              pinOrigin: cycle.ckiPinOrigin,
+            });
+            const editorialRaw = loadCkiEditorialForPin({
+              ckiId: pin.ckiId,
+              contentDigest: pin.contentDigest,
+              availability: pin.availability,
+            });
+            return {
+              ...pin,
+              editorial: editorialRaw
+                ? {
+                    ordinal: editorialRaw.ordinal,
+                    title: editorialRaw.title,
+                    corpusVersion: editorialRaw.corpusVersion,
+                    resultSought: editorialRaw.resultSought,
+                    relevance: editorialRaw.relevance,
+                    angles: editorialRaw.angles,
+                  }
+                : null,
+            };
+          })(),
         }
       : null,
     method: method
@@ -886,7 +908,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       id: cycleId,
       projectId,
       cycleType: command.cycleType,
-      objective: (command.objective || `Cycle ${command.cycleType}`).slice(0, 2000),
+      objective: persistableCycleObjective(command.objective, command.cycleType),
       status: "ACTIVE",
       revision: 1,
       openedAt: now,
@@ -977,7 +999,7 @@ async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: Classifie
       id: openedId,
       projectId,
       cycleType: command.toCycleType,
-      objective: (command.objective || `Cycle ${command.toCycleType}`).slice(0, 2000),
+      objective: persistableCycleObjective(command.objective, command.toCycleType),
       status: "ACTIVE",
       revision: 1,
       openedAt: now,
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/types.ts b/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
index 1fffd284..12022224 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/types.ts
@@ -155,6 +155,15 @@ export type PilotageProjection = {
       manifestRef: string | null;
       pinOrigin: string | null;
       availability: CkiAvailability;
+      /** Editorial rubrics from verified CKI corpus bytes (09.05). Null if not RESOLVED. */
+      editorial: {
+        ordinal: string;
+        title: string;
+        corpusVersion: string;
+        resultSought: string | null;
+        relevance: string | null;
+        angles: Array<{ title: string; summary: string }>;
+      } | null;
     };
   } | null;
   method:
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
index dbd802d7..fbe3dcff 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
@@ -361,7 +361,11 @@ test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {
     const ckiNode = page.getByTestId("trajectory-cki-id");
     await expect(ckiNode).toBeVisible({ timeout: 15000 });
     await expect(ckiNode).toHaveAttribute("data-cki-id", open.ckiId!);
-    await expect(ckiNode).toHaveText(open.ckiId!);
+    // 09.05 — editorial title from corpus, not technical id (id remains in data-cki-id)
+    await expect(ckiNode).not.toHaveText(open.ckiId!);
+    await expect(page.getByTestId("trajectory-cki-result")).toBeVisible();
+    await expect(page.getByTestId("trajectory-cki-relevance")).toBeVisible();
+    await expect(page.getByTestId("trajectory-cki-angles")).toBeVisible();
     await shot(page, "b01-cki-region");

     // Sans F5: leave CKI, return, same identity

```

### 6.2 Composants UI Projet / Trajectoire / SAS06

```email
From ce03f5a7c6657f8bb924386b24355d37011833de Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@macbook-air.home>
Date: Sat, 21 Nov 2026 09:54:18 +0100
Subject: [PATCH] fix(next): align Ensemble 07 Figma runtime UX and CKI
 editorial
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Converge Projet/Trajectoire/SAS06 to Figma F2 geometry, project verified CKI rubrics, and stop treating OPEN instructions as cycle finalité.

Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
index cf44ed60..5c4ab4d1 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
@@ -3,6 +3,10 @@
 import Link from "next/link";
 import type { PilotageProjection } from "@/domains/pilotage/types";
 import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
+import {
+  CYCLE_OBJECTIVE_PENDING_LABEL,
+  displayableCycleObjective,
+} from "@/domains/pilotage/cycle-objective-display";

 type ActivityBundle = {
   openSubjects: { count: number; examples: Array<{ id: string; title: string }> };
@@ -41,78 +45,122 @@ export function ProjectOverview(props: {
   // Prefer a durable project description; never invent illustrative copy.
   // Proposed orientation is a trajectory artifact — only use as fallback when no description.
   const description = props.description?.trim() || null;
+  const cycleObjective = displayableCycleObjective(cycle?.objective);

   return (
-    <div className="project-overview space-y-5" data-testid="project-overview">
-      <header className="space-y-2" data-testid="project-overview-identity">
+    <div className="project-overview" data-testid="project-overview">
+      <header className="e07-surface-hero" data-testid="project-overview-identity">
         <p className="fig-kicker text-[#7477ed]">ESPACE PROJET / VUE D&apos;ENSEMBLE</p>
-        <h2 className="fig-hero-title" data-testid="project-overview-name">
+        <h2 className="e07-surface-hero-title" data-testid="project-overview-name">
           {props.projectName}
         </h2>
-        {description ? <p className="fig-hero-sub max-w-5xl">{description}</p> : null}
+        {description ? (
+          <p className="e07-surface-hero-sub max-w-5xl">{description}</p>
+        ) : (
+          <p className="e07-surface-hero-sub max-w-5xl">
+            Identité, cycle et activité du projet.
+          </p>
+        )}
       </header>

+      <div className="e07-section-rule" aria-hidden data-testid="project-overview-hero-sep" />
+
       <section
-        className="fig-panel relative space-y-3"
+        className="fig-panel relative flex flex-col"
         data-testid="project-overview-cycle-card"
-        style={{ borderColor: "#2b3850", minHeight: 222 }}
+        style={{
+          borderColor: "#2b3850",
+          height: 222,
+          minHeight: 222,
+          maxHeight: 222,
+          padding: "22px 28px",
+          width: "100%",
+          maxWidth: 1358,
+          overflow: "hidden",
+        }}
       >
         {cycle ? (
           <>
             <div className="flex items-start justify-between gap-3">
               <p className="fig-kicker text-[#7477ed]">CYCLE EN COURS</p>
               <span
-                className="rounded-full px-3 py-1 text-xs font-semibold"
+                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                 style={{ background: "#17382f", color: "#6cdbba" }}
+                data-testid="project-overview-cycle-badge"
               >
-                ● Actif
+                <span aria-hidden>●</span> Actif
               </span>
             </div>
-            <h3 className="text-[1.7rem] font-semibold text-[#f3f5ff] leading-tight">
+            <h3 className="mt-3 text-[28px] font-semibold leading-tight text-[#f3f5ff]">
               {cycleLabel(cycle.cycleType)}
             </h3>
-            <p className="text-sm text-[#a3b0c7]">{cycle.objective}</p>
+            <p
+              className="mt-3 text-sm leading-relaxed text-[#a3b0c7]"
+              data-testid="project-overview-cycle-objective"
+            >
+              {cycleObjective ?? CYCLE_OBJECTIVE_PENDING_LABEL}
+            </p>
+            <div className="my-5 h-px shrink-0 bg-[#2b3850]" data-testid="project-overview-state-sep" />
+            <div className="mt-auto flex justify-end">
+              <button
+                type="button"
+                className="text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
+                onClick={props.onOpenTrajectoire}
+              >
+                Voir la trajectoire ↗
+              </button>
+            </div>
           </>
         ) : (
           <>
             <div className="flex items-start justify-between gap-3">
               <p className="fig-kicker text-[#7477ed]">ÉTAT DU PROJET</p>
-              <span className="text-xs font-semibold text-[#a3b0c7]">○ Sans cycle actif</span>
+              <span
+                className="text-xs font-semibold text-[#a3b0c7]"
+                data-testid="project-overview-no-cycle-badge"
+              >
+                ○ Sans cycle actif
+              </span>
             </div>
             <h3
-              className="text-[1.7rem] font-semibold text-[#f3f5ff] leading-tight"
+              className="mt-3 text-[28px] font-semibold leading-tight text-[#f3f5ff]"
               data-testid="project-overview-no-cycle"
             >
               Aucun cycle en cours
             </h3>
-            <p className="text-sm text-[#a3b0c7]">
+            <p className="mt-3 text-sm leading-relaxed text-[#a3b0c7]">
               Le projet reste accessible : ses sujets, décisions et documents peuvent être consultés
               et poursuivis sans cycle actif.
             </p>
-            <p className="text-sm text-[#a3b0c7]">
+            <div className="my-5 h-px shrink-0 bg-[#2b3850]" data-testid="project-overview-state-sep" />
+            <p className="text-sm leading-relaxed text-[#a3b0c7]">
               La trajectoire pourra être précisée avec Nora, sans ouverture automatique.
             </p>
+            <div className="mt-auto flex justify-end pt-4">
+              <button
+                type="button"
+                className="text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
+                onClick={props.onOpenTrajectoire}
+              >
+                Voir la trajectoire ↗
+              </button>
+            </div>
           </>
         )}
-        <div className="flex justify-end pt-1">
-          <button
-            type="button"
-            className="text-sm font-semibold text-[#7477ed] underline-offset-2 hover:underline"
-            onClick={props.onOpenTrajectoire}
-          >
-            Voir la trajectoire ↗
-          </button>
-        </div>
       </section>

-      <section className="space-y-3" data-testid="project-overview-activity">
-        <div className="flex flex-wrap items-end justify-between gap-2">
-          <h3 className="text-[1.35rem] font-semibold text-[#f3f5ff]">Activité du projet</h3>
+      {/* Figma: cycle ends ~511 → activity title 532 (+21) → cards 581 (+49) */}
+      <section className="space-y-3" data-testid="project-overview-activity" style={{ marginTop: 21 }}>
+        <div className="flex flex-wrap items-end justify-between gap-2" style={{ minHeight: 32 }}>
+          <h3 className="text-[22px] font-semibold leading-8 text-[#f3f5ff]">Activité du projet</h3>
           <p className="text-xs text-[#7787a4]">Vue synthétique des espaces du projet</p>
         </div>
         <div
-          className="grid gap-4"
-          style={{ gridTemplateColumns: "repeat(3, minmax(0, 438px))" }}
+          className="grid"
+          style={{
+            gridTemplateColumns: "repeat(3, minmax(0, 438px))",
+            gap: 22,
+          }}
           data-testid="project-activity-grid"
         >
           <ActivityCard
@@ -161,32 +209,49 @@ function ActivityCard(props: {
   const extra = Math.max(0, props.count - shown.length);
   return (
     <section
-      className="fig-panel space-y-3"
+      className="fig-panel flex flex-col"
       data-testid={props.testId}
-      style={{ width: 438, minHeight: 278, background: "#151D2C", borderColor: "#2B3850" }}
+      style={{
+        width: 438,
+        minHeight: 278,
+        background: "#151D2C",
+        borderColor: "#2B3850",
+        padding: "24px 28px",
+      }}
     >
       <div className="flex items-start justify-between gap-2">
         <div>
-          <p className="text-[2rem] font-semibold leading-none text-[#f3f5ff]">{props.count}</p>
+          <p className="text-[32px] font-semibold leading-none text-[#f3f5ff]">{props.count}</p>
           <h4 className="mt-2 text-lg font-semibold text-[#f3f5ff]">{props.title}</h4>
         </div>
-        <span className="text-xs text-[#a3b0c7]">{props.source}</span>
+        <span className="text-xs font-medium uppercase tracking-wide text-[#a3b0c7]">
+          {props.source}
+        </span>
       </div>
-      {props.count === 0 ? (
-        <p className="text-sm text-[#a3b0c7]">{props.empty}</p>
-      ) : (
-        <ul className="text-sm space-y-1.5 text-[#f3f5ff]">
-          {shown.map((ex, i) => (
-            <li key={`${props.testId}-${i}`} className="line-clamp-2 font-medium">
-              {ex}
-            </li>
-          ))}
-          {extra > 0 ? (
-            <li className="text-[#a3b0c7]">+ {extra} autre{extra > 1 ? "s" : ""}</li>
-          ) : null}
-        </ul>
-      )}
-      <Link href={props.href} className="inline-block text-sm font-semibold text-[#7477ed] hover:underline">
+      <div className="my-4 h-px shrink-0 bg-[#2b3850]" data-testid={`${props.testId}-sep-top`} />
+      <div className="min-h-[72px] flex-1">
+        {props.count === 0 ? (
+          <p className="text-sm leading-relaxed text-[#a3b0c7]">{props.empty}</p>
+        ) : (
+          <ul className="space-y-1.5 text-sm text-[#f3f5ff]">
+            {shown.map((ex, i) => (
+              <li key={`${props.testId}-${i}`} className="line-clamp-2 font-medium">
+                {ex}
+              </li>
+            ))}
+            {extra > 0 ? (
+              <li className="text-[#a3b0c7]">
+                + {extra} autre{extra > 1 ? "s" : ""}
+              </li>
+            ) : null}
+          </ul>
+        )}
+      </div>
+      <div className="my-4 h-px shrink-0 bg-[#2b3850]" data-testid={`${props.testId}-sep-bottom`} />
+      <Link
+        href={props.href}
+        className="inline-block text-sm font-semibold text-[#7477ed] hover:underline"
+      >
         Consulter ↗
       </Link>
     </section>
diff --git a/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx b/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
index 92581875..5eefbbc1 100644
--- a/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
@@ -2,6 +2,21 @@

 import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

+/**
+ * Figma SAS06 (1022:164) — Création et qualification initiale.
+ * Dimensions : 702×726 · assets SVG natifs sous /public/figma/sas06/ (download_assets MCP).
+ */
+const ASSET = {
+  halo: "/figma/sas06/icone-halo.svg",
+  analyse: "/figma/sas06/icone-analyse.svg",
+  confirmCircle: "/figma/sas06/confirmation-cercle.svg",
+  confirmIcon: "/figma/sas06/icone-confirme.svg",
+  focusHalo: "/figma/sas06/focus-halo.svg",
+  evaluation: "/figma/sas06/icone-evaluation.svg",
+  wait: "/figma/sas06/repere-attente.svg",
+  info: "/figma/sas06/icone-information.svg",
+} as const;
+
 export function SasCreateProgressPopup(props: {
   visible: boolean;
   projectName: string;
@@ -11,78 +26,212 @@ export function SasCreateProgressPopup(props: {
 }) {
   if (!props.visible) return null;

-  const labels = [
+  const steps = [
     {
+      n: 1 as const,
       title: "Projet créé",
       detail: "Il reste accessible, même si vous quittez Studio.",
+      statusDone: "01  TERMINÉ",
+      statusCurrent: "01  EN COURS",
+      statusPending: "01  À VENIR",
     },
     {
+      n: 2 as const,
       title: "Identification des cycles pertinents",
       detail: "Analyse des cycles pertinents et des références CKI.",
+      statusDone: "02  TERMINÉ",
+      statusCurrent: "02  EN COURS",
+      statusPending: "02  À VENIR",
     },
     {
-      title: "Proposition ou clarification",
-      detail: "Nora restituera la trajectoire dans le fil Travail.",
+      n: 3 as const,
+      title: "Première réponse de Nora",
+      detail: "Une proposition ou une clarification dans le fil du projet.",
+      statusDone: "03  TERMINÉ",
+      statusCurrent: "03  EN COURS",
+      statusPending: "03  À VENIR",
     },
   ] as const;

   return (
     <div
-      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
+      className="fixed inset-0 z-50 flex items-start justify-center"
+      style={{ background: "rgba(6,9,17,0.78)", paddingTop: 124 }}
       role="dialog"
       aria-modal="true"
       aria-labelledby="sas-create-progress-title"
       data-testid="sas-create-progress-popup"
     >
       <div
-        className="w-full max-w-md rounded-xl border px-5 py-4 shadow-lg"
-        style={{ background: "#0f1118", borderColor: "#7477ed44", color: "#f3f5ff" }}
+        className="relative overflow-hidden"
+        style={{
+          width: 702,
+          minHeight: 726,
+          maxWidth: "calc(100vw - 32px)",
+          background: "#1b2639",
+          border: "1px solid #2b3850",
+          borderRadius: 18,
+          color: "#f3f5ff",
+        }}
       >
-        <p className="text-[10px] uppercase tracking-widest text-[#7477ed]">
-          PROJET CRÉÉ / TRAJECTOIRE EN PRÉPARATION
+        <div
+          aria-hidden
+          style={{
+            position: "absolute",
+            top: 0,
+            left: 0,
+            right: 0,
+            height: 4,
+            background: "#7477ed",
+          }}
+        />
+
+        <div className="flex items-start justify-between gap-3" style={{ padding: "28px 35px 0" }}>
+          <div className="flex items-center gap-4">
+            <div className="relative" style={{ width: 52, height: 52 }} aria-hidden>
+              {/* Native Figma SVGs — preserve root width/height attributes */}
+              {/* eslint-disable-next-line @next/next/no-img-element */}
+              <img src={ASSET.halo} alt="" width={52} height={52} />
+              <span className="absolute inset-0 flex items-center justify-center">
+                {/* eslint-disable-next-line @next/next/no-img-element */}
+                <img src={ASSET.analyse} alt="" width={30} height={30} />
+              </span>
+            </div>
+            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7477ed]">
+              PROJET CRÉÉ / TRAJECTOIRE EN PRÉPARATION
+            </p>
+          </div>
+          <span
+            className="inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[12px] font-semibold"
+            style={{ background: "#17382f", borderColor: "#6cdbba", color: "#6cdbba" }}
+          >
+            ✓ Créé
+          </span>
+        </div>
+
+        <div style={{ padding: "24px 35px 0" }}>
+          <h2
+            id="sas-create-progress-title"
+            className="text-[28px] font-semibold leading-tight"
+          >
+            Projet créé. Nora prépare la suite.
+          </h2>
+          <p className="mt-3 text-[15px] leading-relaxed text-[#a3b0c7]">
+            {props.projectName
+              ? `Nora analyse l’intention de « ${props.projectName} » pour proposer une première trajectoire.`
+              : "Nora analyse votre intention pour proposer une première trajectoire."}
+          </p>
+        </div>
+
+        <div className="mx-[35px] mt-6 h-px bg-[#2b3850]" />
+
+        <p
+          className="text-[11px] font-semibold uppercase tracking-wide text-[#a3b0c7]"
+          style={{ padding: "18px 35px 0" }}
+        >
+          SUIVI DE LA PRÉPARATION
         </p>
-        <h2 id="sas-create-progress-title" className="text-lg font-medium mt-1">
-          Projet créé. Nora prépare la suite.
-        </h2>
-        <ol className="mt-4 space-y-3">
-          {labels.map((item, idx) => {
-            const n = (idx + 1) as 1 | 2 | 3;
-            const done = props.step > n;
-            const current = props.step === n;
+
+        <ol className="mt-4 flex flex-col gap-[11px]" style={{ padding: "0 35px" }}>
+          {steps.map((item) => {
+            const done = props.step > item.n;
+            const current = props.step === item.n;
+            const statusLabel = done
+              ? item.statusDone
+              : current
+                ? item.statusCurrent
+                : item.statusPending;
+            const statusColor = done ? "#6cdbba" : current ? "#7477ed" : "#7787a4";
+            const borderColor = current ? "#7477ed" : "#2b3850";
+            const minH = current ? 104 : item.n === 1 ? 79 : 86;
+
             return (
               <li
-                key={item.title}
-                className="flex gap-3 text-sm"
-                data-testid={`sas-create-step-${n}`}
+                key={item.n}
+                className="relative flex gap-4 rounded-[12px] border"
+                style={{
+                  background: "#151d2c",
+                  borderColor,
+                  minHeight: minH,
+                  padding: "15px 18px",
+                }}
+                data-testid={`sas-create-step-${item.n}`}
                 data-current={current ? "1" : "0"}
               >
-                <span
-                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
-                  style={{
-                    background: done || current ? "#7477ed" : "#a3b0c733",
-                    color: done || current ? "#f3f5ff" : "#a3b0c7",
-                  }}
-                  aria-hidden
-                >
-                  {done ? "OK" : n}
-                </span>
-                <div>
-                  <p className="font-medium">{item.title}</p>
-                  <p className="text-[#a3b0c7]">{item.detail}</p>
+                <div className="relative shrink-0" style={{ width: 35, height: 35, marginTop: 4 }} aria-hidden>
+                  {done ? (
+                    <>
+                      {/* eslint-disable-next-line @next/next/no-img-element */}
+                      <img src={ASSET.confirmCircle} alt="" width={35} height={35} />
+                      <span className="absolute inset-0 flex items-center justify-center">
+                        {/* eslint-disable-next-line @next/next/no-img-element */}
+                        <img src={ASSET.confirmIcon} alt="" width={22} height={22} />
+                      </span>
+                    </>
+                  ) : current ? (
+                    <>
+                      {/* eslint-disable-next-line @next/next/no-img-element */}
+                      <img src={ASSET.focusHalo} alt="" width={35} height={35} />
+                      <span className="absolute inset-0 flex items-center justify-center">
+                        {/* eslint-disable-next-line @next/next/no-img-element */}
+                        <img src={ASSET.evaluation} alt="" width={19} height={19} />
+                      </span>
+                    </>
+                  ) : (
+                    <div className="relative">
+                      {/* eslint-disable-next-line @next/next/no-img-element */}
+                      <img src={ASSET.wait} alt="" width={35} height={35} />
+                      <span
+                        className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-[#a3b0c7]"
+                      >
+                        {String(item.n).padStart(2, "0")}
+                      </span>
+                    </div>
+                  )}
                 </div>
+                <div className="min-w-0 flex-1 pr-24">
+                  <p className="text-[16px] font-semibold text-[#f3f5ff]">{item.title}</p>
+                  <p className="mt-1 text-[12px] leading-relaxed text-[#a3b0c7]">{item.detail}</p>
+                </div>
+                <p
+                  className="absolute right-[18px] top-[17px] text-[10px] font-semibold"
+                  style={{ color: statusColor }}
+                >
+                  {statusLabel}
+                </p>
               </li>
             );
           })}
         </ol>
+
+        <div
+          className="mx-[35px] mt-4 flex gap-3 rounded-[10px] border border-[#2b3850] bg-[#151d2c] px-4 py-3"
+          style={{ minHeight: 67 }}
+        >
+          {/* eslint-disable-next-line @next/next/no-img-element */}
+          <img src={ASSET.info} alt="" width={22} height={22} className="mt-0.5 shrink-0" />
+          <p className="text-[12px] leading-relaxed text-[#a3b0c7]">
+            Vous pouvez quitter Studio : cette préparation sera retrouvée à votre retour.
+          </p>
+        </div>
+
         {props.qualification?.composerLockReason ? (
-          <p className="mt-3 text-xs text-[#a3b0c7]">{props.qualification.composerLockReason}</p>
+          <p className="mx-[35px] mt-3 text-xs text-[#a3b0c7]">
+            {props.qualification.composerLockReason}
+          </p>
         ) : null}
-        <div className="mt-5 flex justify-end gap-2">
+
+        <div
+          className="flex items-center justify-between gap-4"
+          style={{ padding: "22px 35px 28px" }}
+        >
+          <p className="text-[12px] text-[#7787a4]">Aucun cycle ne démarre sans votre accord.</p>
           <button
             type="button"
-            className="btn secondary"
+            className="btn primary"
             onClick={props.onDismiss}
             data-testid="sas-create-progress-dismiss"
+            style={{ width: 190, minHeight: 40, borderRadius: 9 }}
           >
             Accéder au projet
           </button>
@@ -90,4 +239,4 @@ export function SasCreateProgressPopup(props: {
       </div>
     </div>
   );
-}
\ No newline at end of file
+}
diff --git a/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx b/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
index 99d366df..8252474e 100644
--- a/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
@@ -5,6 +5,10 @@ import Link from "next/link";
 import type { ForecastStep } from "@/domains/pilotage/forecast-builder";
 import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
 import type { PilotageProjection } from "@/domains/pilotage/types";
+import {
+  CYCLE_OBJECTIVE_PENDING_LABEL,
+  displayableCycleObjective,
+} from "@/domains/pilotage/cycle-objective-display";

 const CYCLE_LABELS: Record<string, string> = {
   CADRAGE: "Cadrage",
@@ -114,11 +118,11 @@ export function TrajectoryBoard(props: {
   }

   return (
-    <div className="trajectory-board space-y-5" data-testid="trajectory-board">
-      <header className="space-y-2" data-testid="trajectory-hero">
+    <div className="trajectory-board" data-testid="trajectory-board">
+      <header className="e07-surface-hero" data-testid="trajectory-hero">
         <p className="fig-kicker text-[#7477ed]">ESPACE PROJET / TRAJECTOIRE</p>
-        <h2 className="fig-hero-title">Trajectoire du projet</h2>
-        <p className="fig-hero-sub max-w-3xl">
+        <h2 className="e07-surface-hero-title">Trajectoire du projet</h2>
+        <p className="e07-surface-hero-sub max-w-3xl">
           {showAnalyzing
             ? "Le projet est créé. Nora prépare actuellement une première orientation de cycles."
             : showProposal
@@ -128,6 +132,7 @@ export function TrajectoryBoard(props: {
                 : "Ce qui est terminé, ce qui est en cours et ce qui pourrait suivre."}
         </p>
       </header>
+      <div className="e07-section-rule" aria-hidden data-testid="trajectory-hero-sep" />

       {showUnknown ? (
         <section className="fig-panel space-y-2" data-testid="trajectory-unknown">
@@ -323,35 +328,50 @@ function PropositionInitialeCard(props: {
 }) {
   return (
     <section
-      className="fig-panel space-y-5"
+      className="fig-panel flex flex-col"
       data-testid="trajectory-proposal-sequential"
-      style={{ borderColor: "#2b3850" }}
+      style={{
+        borderColor: "#2b3850",
+        width: "100%",
+        maxWidth: 1358,
+        minHeight: 545,
+        padding: "32px 36px",
+      }}
     >
       <div>
         <p className="fig-kicker text-[#7477ed]">PROPOSITION INITIALE DE NORA</p>
-        <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff] mt-1">
+        <h3 className="mt-2 text-[1.45rem] font-semibold text-[#f3f5ff]">
           Une progression possible pour ce projet
         </h3>
-        <p className="text-sm text-[#a3b0c7] mt-2 max-w-3xl">
+        <p className="mt-2 max-w-3xl text-sm text-[#a3b0c7]">
           Une suite séquentielle de cycles ; ce ne sont pas trois options concurrentes. Aucun cycle
           n&apos;est encore ouvert.
         </p>
       </div>

-      <div className="flex flex-wrap items-stretch gap-3" data-testid="trajectory-forecast-steps">
+      <div
+        className="mt-8 flex flex-nowrap items-stretch overflow-x-auto"
+        style={{ gap: 49 }}
+        data-testid="trajectory-forecast-steps"
+      >
         {props.forecast.map((step, idx) => {
           const isFirst = idx === 0;
           return (
-            <div key={`${step.order}-${step.cycleType}`} className="flex items-stretch gap-3 min-w-0">
+            <div
+              key={`${step.order}-${step.cycleType}`}
+              className="flex flex-none items-stretch"
+              style={{ gap: 16 }}
+            >
               <button
                 type="button"
                 onClick={() => props.onOpenFuture(step)}
-                className="fig-panel text-left space-y-2 flex-none"
+                className="fig-panel flex-none space-y-2 text-left"
                 style={{
                   width: 404,
                   minHeight: 155,
                   borderColor: isFirst ? "#7477ED88" : "#2B3850",
                   background: isFirst ? "#7477ED0d" : "#151D2C",
+                  padding: "20px 22px",
                 }}
                 data-testid={`trajectory-forecast-step-${step.order}`}
               >
@@ -363,7 +383,7 @@ function PropositionInitialeCard(props: {
                   {labelCycle(step.cycleType)}
                 </p>
                 {step.rationale ? (
-                  <p className="text-sm text-[#a3b0c7] line-clamp-3">{step.rationale}</p>
+                  <p className="line-clamp-3 text-sm text-[#a3b0c7]">{step.rationale}</p>
                 ) : null}
               </button>
               {idx < props.forecast.length - 1 ? (
@@ -376,7 +396,21 @@ function PropositionInitialeCard(props: {
         })}
       </div>

-      <div className="flex justify-center pt-2">
+      <div
+        className="mt-8 rounded-[10px] border border-[#2b3850] bg-[#121a28] px-5 py-4"
+        data-testid="trajectory-proposal-waiting"
+      >
+        <p className="text-sm text-[#a3b0c7]">
+          Proposition non retenue — en attente d&apos;une décision du Pilote. Aucun cycle n&apos;est
+          ouvert.
+        </p>
+      </div>
+
+      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
+        <p className="max-w-xl text-sm text-[#7787a4]">
+          Les trois cycles visibles constituent une projection de trajectoire, pas trois cycles
+          ouverts.
+        </p>
         <button
           type="button"
           className="btn primary"
@@ -486,16 +520,18 @@ function ParcoursPrincipal(props: {
           </p>
         ) : (
           <div
-            className="flex flex-wrap items-stretch gap-3"
+            className="flex flex-nowrap items-stretch overflow-x-auto"
+            style={{ gap: 49 }}
             data-testid="trajectory-roadmap-cards"
           >
             {cards.map((card, idx) => (
-              <div key={card.key} className="flex items-stretch gap-3">
+              <div key={card.key} className="flex flex-none items-stretch" style={{ gap: 16 }}>
                 <article
                   className="fig-panel relative space-y-2 overflow-hidden"
                   style={{
                     width: 396,
                     minHeight: 128,
+                    padding: "16px 18px",
                     borderColor:
                       card.status === "closed"
                         ? "#6cdbba55"
@@ -596,7 +632,13 @@ function ParcoursPrincipal(props: {
           <h3 className="text-[1.45rem] font-semibold text-[#f3f5ff]">
             {labelCycle(props.cycle.cycleType)}
           </h3>
-          <p className="text-sm text-[#a3b0c7]">{props.cycle.objective}</p>
+          <p
+            className="text-sm text-[#a3b0c7]"
+            data-testid="trajectory-cycle-objective"
+          >
+            {displayableCycleObjective(props.cycle.objective) ??
+              CYCLE_OBJECTIVE_PENDING_LABEL}
+          </p>
           <div className="flex flex-wrap gap-4 pt-1">
             <Link
               href={`/projects/${props.projectId}?surface=journal`}
@@ -670,7 +712,8 @@ function BilanHistoriqueView(props: {
       <section className="fig-panel space-y-2">
         <p className="fig-kicker text-[#7477ed]">OBJECTIF DU CYCLE</p>
         <p className="text-sm text-[#a3b0c7]">
-          {props.cycle?.objective?.trim() || "Objectif initial non reconstitué."}
+          {displayableCycleObjective(props.cycle?.objective) ??
+            "Objectif métier non reconstitué pour ce cycle."}
         </p>
         <div className="h-px bg-[#2b3850]" />
         <p className="fig-kicker text-[#7477ed]">RÉSULTAT À LA CLÔTURE</p>
@@ -816,13 +859,17 @@ function CkiMethodeView(props: {
 }) {
   const cycle = props.pilotage?.cycle;
   const method = props.pilotage?.method;
+  const editorial = cycle?.cki.editorial ?? null;
+  const displayTitle = editorial?.title ?? null;
+  const ordinal = editorial?.ordinal ?? (cycle?.cki.ckiId?.match(/^(\d{2})/)?.[1] ?? null);
+
   return (
-    <div className="space-y-5" data-testid="trajectory-cki-methode">
-      <header className="flex flex-wrap items-start justify-between gap-3">
-        <div className="space-y-2">
+    <div className="trajectory-cki" data-testid="trajectory-cki-methode">
+      <header className="e07-surface-hero flex flex-wrap items-start justify-between gap-3">
+        <div>
           <p className="fig-kicker text-[#7477ed]">TRAJECTOIRE / RÉFÉRENCES DU CYCLE</p>
-          <h2 className="fig-hero-title">CKI et méthode</h2>
-          <p className="fig-hero-sub max-w-3xl">
+          <h2 className="e07-surface-hero-title">CKI et méthode</h2>
+          <p className="e07-surface-hero-sub max-w-3xl">
             Deux références distinctes : la spécialisation cognitive du cycle et la méthode
             applicable au projet.
           </p>
@@ -835,47 +882,122 @@ function CkiMethodeView(props: {
           ← Retour à la trajectoire
         </button>
       </header>
+      <div className="e07-section-rule" aria-hidden />

       {/* Figma 09.05 — asymmetric: CKI ~872px, méthode ~464px */}
       <div
-        className="grid gap-4"
-        style={{ gridTemplateColumns: "minmax(0, 872fr) minmax(0, 464fr)" }}
+        className="grid"
+        style={{ gridTemplateColumns: "minmax(0, 872fr) minmax(0, 464fr)", gap: 22 }}
         data-testid="trajectory-cki-layout"
       >
-        <section className="fig-panel space-y-3" data-testid="trajectory-cki-main">
-          <p className="fig-kicker text-[#7477ed]">GUIDANCE CKI PRINCIPALE</p>
+        <section
+          className="fig-panel flex flex-col gap-0"
+          data-testid="trajectory-cki-main"
+          style={{ padding: "22px 26px", minHeight: 586 }}
+        >
           {cycle?.cki.ckiId ? (
             <>
+              <p
+                className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#7477ed]"
+                data-testid="trajectory-cki-ordinal"
+              >
+                CKI PRINCIPAL{ordinal ? ` / ${ordinal}` : ""}
+              </p>
               <h3
-                className="text-[1.45rem] font-semibold text-[#f3f5ff]"
+                className="mt-3 text-[23px] font-semibold leading-tight text-[#f3f5ff]"
                 data-testid="trajectory-cki-id"
                 data-cki-id={cycle.cki.ckiId}
               >
-                {cycle.cki.ckiId}
+                {displayTitle ?? cycle.cki.ckiId}
               </h3>
-              <p className="text-sm text-[#a3b0c7]">
-                Référence applicable au cycle {labelCycle(cycle.cycleType)}
-                {cycle.cki.pinnedVersion ? ` · version ${cycle.cki.pinnedVersion}` : ""}
-              </p>
-              <div className="h-px bg-[#2b3850]" />
-              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Finalité</p>
-              <p className="text-sm text-[#f3f5ff]">{cycle.objective}</p>
-              <div className="h-px bg-[#2b3850]" />
-              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Disponibilité</p>
-              <p className="text-sm text-[#a3b0c7]">
-                {cycle.cki.availability} — ASSOCIATED / RESOLVED / DELIVERED restent distincts ;
-                aucun claim DELIVERED sans preuve.
-              </p>
+              {editorial?.corpusVersion ? (
+                <p className="mt-3 text-[12px] text-[#a3b0c7]" data-testid="trajectory-cki-version">
+                  Corpus Next {editorial.corpusVersion} · Contenu validé · Référence éditoriale
+                </p>
+              ) : cycle.cki.pinnedVersion ? (
+                <p className="mt-3 text-[12px] text-[#a3b0c7]">
+                  Version épinglée {cycle.cki.pinnedVersion}
+                </p>
+              ) : null}
+
+              {editorial?.resultSought ? (
+                <>
+                  <div className="my-5 h-px bg-[#2b3850]" />
+                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
+                    Résultat recherché
+                  </p>
+                  <p
+                    className="mt-2 text-sm leading-relaxed text-[#f3f5ff]"
+                    data-testid="trajectory-cki-result"
+                  >
+                    {editorial.resultSought}
+                  </p>
+                </>
+              ) : null}
+
+              {editorial?.relevance ? (
+                <>
+                  <div className="my-5 h-px bg-[#2b3850]" />
+                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
+                    Quand cette spécialité est pertinente
+                  </p>
+                  <p
+                    className="mt-2 text-sm leading-relaxed text-[#f3f5ff]"
+                    data-testid="trajectory-cki-relevance"
+                  >
+                    {editorial.relevance}
+                  </p>
+                </>
+              ) : null}
+
+              {editorial && editorial.angles.length > 0 ? (
+                <>
+                  <div className="my-5 h-px bg-[#2b3850]" />
+                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
+                    Principaux angles d&apos;analyse
+                  </p>
+                  <div
+                    className="mt-4 grid gap-3"
+                    style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
+                    data-testid="trajectory-cki-angles"
+                  >
+                    {editorial.angles.map((angle) => (
+                      <article
+                        key={angle.title}
+                        className="rounded-[10px] border border-[#2b3850] bg-[#121a28] p-4"
+                        data-testid="trajectory-cki-angle"
+                      >
+                        <h4 className="text-sm font-semibold text-[#f3f5ff]">{angle.title}</h4>
+                        <p className="mt-2 text-xs leading-relaxed text-[#a3b0c7]">
+                          {angle.summary}
+                        </p>
+                      </article>
+                    ))}
+                  </div>
+                </>
+              ) : null}
+
+              {!editorial ? (
+                <>
+                  <div className="my-5 h-px bg-[#2b3850]" />
+                  <p className="text-sm text-[#a3b0c7]" data-testid="trajectory-cki-editorial-pending">
+                    Contenu éditorial indisponible pour ce pin (
+                    {cycle.cki.availability}
+                    ). La fiche CKI n&apos;est affichée que lorsque les octets vérifiés sont
+                    résolus.
+                  </p>
+                </>
+              ) : null}
             </>
           ) : (
             <>
               <h3
-                className="text-lg font-semibold text-[#f3f5ff]"
+                className="mt-3 text-lg font-semibold text-[#f3f5ff]"
                 data-testid="trajectory-cki-absent"
               >
                 Aucun CKI principal actif
               </h3>
-              <p className="text-sm text-[#a3b0c7]">
+              <p className="mt-2 text-sm text-[#a3b0c7]">
                 Un CKI principal n&apos;existe qu&apos;avec un cycle réellement ouvert. Aucune
                 génération automatique à l&apos;ouverture.
               </p>
@@ -883,30 +1005,58 @@ function CkiMethodeView(props: {
           )}
         </section>

-        <section className="fig-panel space-y-3" data-testid="trajectory-method-side">
-          <p className="fig-kicker text-[#7477ed]">MÉTHODE APPLICABLE AU PROJET</p>
+        <section
+          className="fig-panel flex flex-col"
+          data-testid="trajectory-method-side"
+          style={{ padding: "22px 24px", minHeight: 586 }}
+        >
+          <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#7477ed]">
+            MÉTHODE DU PROJET
+          </p>
           {method?.presence === "RETAINED" ? (
             <>
-              <h3 className="text-lg font-semibold text-[#f3f5ff]">{method.methodRef}</h3>
-              <p className="text-sm text-[#a3b0c7]">Version {method.methodVersion}</p>
-              <div className="h-px bg-[#2b3850]" />
-              <p className="text-[10px] uppercase tracking-wide text-[#a3b0c7]">Statut</p>
-              <p className="text-sm text-[#a3b0c7]">
-                Retenue par décision Pilote
-                {method.usageRestricted ? " — usage restreint" : ""}.
+              <h3 className="mt-3 text-[23px] font-semibold leading-tight text-[#f3f5ff]">
+                {method.methodRef}
+              </h3>
+              <p className="mt-3 text-[12px] text-[#a3b0c7]">
+                Version {method.methodVersion} · méthode retenue par le Pilote
+                {method.usageRestricted ? " · usage restreint" : ""}
+              </p>
+              <div className="my-5 h-px bg-[#2b3850]" />
+              <p className="text-[12px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
+                Référence applicable
+              </p>
+              <p className="mt-3 text-[15px] leading-relaxed text-[#f3f5ff]">
+                La méthode retenue est une donnée du projet. Son choix, sa portée et son évolution
+                relèvent des décisions du Pilote.
               </p>
               {method.usageNote ? (
-                <>
-                  <div className="h-px bg-[#2b3850]" />
-                  <p className="text-sm text-[#a3b0c7]">{method.usageNote}</p>
-                </>
+                <p className="mt-3 text-sm text-[#a3b0c7]">{method.usageNote}</p>
               ) : null}
+              <div className="my-5 h-px bg-[#2b3850]" />
+              <p className="text-[12px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
+                Séparation des responsabilités
+              </p>
+              <p className="mt-3 text-[13px] leading-relaxed text-[#a3b0c7]">
+                La méthode n&apos;est pas le CKI. Le CKI apporte une guidance spécialisée, sans
+                imposer de processus ni autoriser une décision.
+              </p>
             </>
           ) : (
             <>
-              <h3 className="text-lg font-semibold text-[#f3f5ff]">Aucune méthode retenue</h3>
-              <p className="text-sm text-[#a3b0c7]">
+              <h3 className="mt-3 text-[23px] font-semibold leading-tight text-[#f3f5ff]">
+                Aucune méthode retenue
+              </h3>
+              <p className="mt-3 text-[12px] text-[#a3b0c7]">
+                Absence valide · distincte du CKI principal
+              </p>
+              <div className="my-5 h-px bg-[#2b3850]" />
+              <p className="text-[12px] font-semibold uppercase tracking-wide text-[#a3b0c7]">
+                Séparation des responsabilités
+              </p>
+              <p className="mt-3 text-[13px] leading-relaxed text-[#a3b0c7]">
                 La méthode applicable est distincte du CKI et n&apos;est pas imposée par Nora.
+                L&apos;absence de méthode retenue est un état valide.
               </p>
             </>
           )}

```

### 6.3 Documentation as-built / delivery-history

```email
From ce03f5a7c6657f8bb924386b24355d37011833de Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@macbook-air.home>
Date: Sat, 21 Nov 2026 09:54:18 +0100
Subject: [PATCH] fix(next): align Ensemble 07 Figma runtime UX and CKI
 editorial
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Converge Projet/Trajectoire/SAS06 to Figma F2 geometry, project verified CKI rubrics, and stop treating OPEN instructions as cycle finalité.

Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
index 1915e58a..8b5e0d2d 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
@@ -1,9 +1,9 @@
 # Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

-**Statut:** construction DEV corrective — NO RELEASE · candidat Git local figé (post-RECETTE Equip'Campus)
-**Base Git figée RECETTE (immuable):** `6ecdb987ee867a04ff816b699eb8870ac200db0a` · tree `d0ad47ff515676f1c033a39030e886859f7272f7`
-**Branche DEV:** `sfia/next-ensemble07-projet-trajectoire-delivery` — gel local correctif (parent = base RECETTE)
-**Date:** 2026-11-21 (correctif intégré UAT-02/06/08/09/10/11/12 + QA concurrence GET)
+**Statut:** Cycle 8 final — Figma→Runtime qualifié · candidat local figé · déployé RECETTE · NO RELEASE
+**Base Git figée RECETTE antérieure:** `c500df9ce58575783bcb842bf83658e1837990a3` · tree `3794e3443906e144460e3f00ba1e82bb3504fdd3`
+**Branche DEV:** `sfia/next-ensemble07-projet-trajectoire-delivery`
+**Date:** 2026-11-21 (Cycle 8 final — layout F2 + CKI éditorial + finalité cycle + SAS06 assets)

 ## Architecture retenue

@@ -28,6 +28,11 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation + **correctif co
 17. **Trajectoire vs ACTIVE** : si cycle ACTIVE, les bandeaux qualification (CLARIFICATION/…) n'occultent plus parcours/CKI.
 18. **CKI UI** : `data-testid=trajectory-cki-id|trajectory-cki-absent` pour assertions navigateur strictes.
 19. **Course GET A/B** : QA-FINAL-01 Playwright prouve barrières A tenu → B appliqué+observable → A relâché sans écrasement (marqueurs objectifs).
+20. **CKI éditorial 09.05** : `cki-editorial.ts` parse le corpus vérifié → projection `editorial` ; UI rubriques Figma.
+21. **Layout Figma desktop** : `data-project-figma-layout` (padding 0/38) · header projet 70 px · hero natif 37 px · séparateur · panneaux à y≈287.
+22. **Finalité cycle** : `cycle-objective-display.ts` — instructions OPEN non affichées / non persistées comme finalité métier.
+23. **SAS06** : modal 702×726 + SVG Figma sous `web/public/figma/sas06/`.
+24. **Preuves F2** : `.tmp-sfia-review/ensemble07-dip-cycle8-final/`.

 ## Persistance

@@ -48,8 +53,9 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation + **correctif co
 | `web/src/domains/conversation/pilotage-effect-restitution.ts` | restitution métier post-effet + filtre dumps |
 | `web/src/domains/conversation/service.ts` | compose restitution avant commit ; `listMessages` projection |
 | `web/src/app/projects/[projectId]/page.tsx` | refresh pilotage au changement de surface |
-| `web/src/components/figma/TrajectoryBoard.tsx` | surface Trajectoire 09.02/07/10/11 |
-| `web/src/components/figma/SasCreateProgressPopup.tsx` | pop-up SAS 06 allégée |
+| `web/src/domains/pilotage/cki-editorial.ts` | projection éditoriale lecture seule depuis octets CKI vérifiés |
+| `web/src/components/figma/TrajectoryBoard.tsx` | surface Trajectoire 09.02–09.11 + CKI/méthode 09.05 |
+| `web/src/components/figma/SasCreateProgressPopup.tsx` | pop-up SAS06 702×726 (assets SVG en réserve) |
 | `web/src/components/figma/ProjectOverview.tsx` | 09.01 / 09.06 |
 | `web/src/components/figma/NoraConversation.tsx` | verrou 05.17 |

@@ -62,7 +68,7 @@ Option A hybride (dossier §8.1) + corrections P0 stabilisation + **correctif co

 ## Réserves connues

-- Fidélité visuelle pixel des 13 frames : hors mandat correctif (OUT Figma).
-- LIVE cognitive réelle sur projet synthétique DEV : gate Morris + autorisation fournisseur requises.
-- CONFLICT/UNKNOWN : UNIT DETERMINISTIC ; BROWSER NOT RUN ce cycle.
-- LIVE Nora fournisseur : NOT RUN.
+- SAS06 popup : seed prep n'ouvre pas toujours le modal — structure/assets prouvés en code + capture prep ; smoke RECETTE sans nouveau GO Nora.
+- 09.03/09.10/09.07 : mesurés en capture ; certains sélecteurs secondaires absents selon seed (états métier variables).
+- LIVE Nora fournisseur : NOT RUN ce cycle.
+- Acceptation finale Morris UAT : **REQUIRED**.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 2e292dc4..367367cc 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,33 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-RUNTIME-UX-CYCLE8-FINAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — Cycle 8 final Figma→Runtime + deploy RECETTE |
+| Type | EVOL / UX / CORRECTIVE / DELIVERY / DEPLOY · **NO RELEASE** · Gate C OPEN |
+| Parent | `c500df9c…` / tree `3794e344…` |
+| Layout | shell `data-project-figma-layout` · header 70 · hero Figma native · y panels **287** |
+| CKI | editorial corpus + display objectif métier (pas instruction OPEN) |
+| SAS06 | modal 702×726 + SVG natifs `public/figma/sas06/` |
+| F2 | 13/13 examinés · panneaux critiques 09.01/05/06/11 w/h/y ≤2 px |
+| Tests | unit 31 PASS · PG E07 15 PASS · tsc PASS · build PASS |
+| RECETTE | bascule LaunchAgent `ml4d-ux004` vers candidat final (voir handoff) |
+| Push projet | **NONE** |
+| Verdict | **ENSEMBLE 07 — FIGMA/RUNTIME QUALIFIED — CORRECTED CANDIDATE DEPLOYED TO RECETTE — TECHNICAL SMOKE PASS — MORRIS FINAL UAT REQUIRED** |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-RUNTIME-UX-CYCLE8
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 07 — Cycle 8 convergence UX Figma → Runtime (intermédiaire) |
+| Type | EVOL / UX / CORRECTIVE · **NO RELEASE** · Gate C OPEN |
+| Parent gel | `c500df9c…` / tree `3794e344…` (arbre local modifié) |
+| Verdict | **FIGMA TO RUNTIME PARTIAL** — supersédé par FINAL |
+
 ## delivery_id: DELIV-2026-11-21-ENSEMBLE07-LOCAL-GIT-FREEZE-CORRECTIVE

 | Field | Value |

```

## 7. Treize états Figma — inventaire L0/L1/L2

Viewport desktop contractuel : **1680 × 970**.

```json
{
  "cycle": "8 — Figma→Runtime UX convergence",
  "extractedAt": "2026-11-21T08:30:00Z",
  "fileKey": "itgvCulInEnFY6DvgIegvP",
  "sessionId": "f01f719c-a50d-4297-899d-d17098f11508",
  "viewportNominal": { "width": 1680, "height": 970 },
  "shell": { "railWidthPx": 246, "topbarHeightPx": 70 },
  "frames": [
    {
      "ref": "09.01",
      "nodeId": "983:47",
      "name": "Projet — Vue d'ensemble (cycle actif)",
      "l0": "PASS — node confirmed via historical contract + prior MCP",
      "l1": "cycleCard 1358×222 @284,289; activity 438×278 gap 22",
      "l2": "status panel separators, badges, Consulter links, 3 activity cards"
    },
    {
      "ref": "09.02",
      "nodeId": "983:90",
      "name": "Trajectoire principale (clôturé + actif)",
      "l0": "PASS",
      "l1": "roadmap 1358×198; stepCards 396×128; rails 5/7/4",
      "l2": "closed/active/future cards, CKI row, active detail"
    },
    {
      "ref": "09.03",
      "nodeId": "983:133",
      "name": "Bilan historique d'un cycle",
      "l0": "PASS — node id from contract",
      "l1": "PARTIAL — structure known from prior captures",
      "l2": "objectif, résultat, travaux, réserves, documents"
    },
    {
      "ref": "09.04",
      "nodeId": "983:176",
      "name": "Détail étape envisagée",
      "l0": "PASS",
      "l1": "summary 1358×345; action 1358×181",
      "l2": "finalité, reste à définir, CTA Nora"
    },
    {
      "ref": "09.05",
      "nodeId": "983:219",
      "name": "CKI et méthode",
      "l0": "PASS — get_design_context 2026-11-21",
      "l1": "ckiMain 872×586 @284,287; method 464×586 @1178,287; gap 22",
      "l2": "CKI PRINCIPAL/NN, title editorial, résultat, pertinence, 3 angles, méthode séparée"
    },
    {
      "ref": "09.06",
      "nodeId": "999:261",
      "name": "Projet sans cycle actif",
      "l0": "PASS",
      "l1": "same geometry as 09.01 state panel + activity",
      "l2": "two explanation levels + separator + Voir trajectoire"
    },
    {
      "ref": "09.07",
      "nodeId": "999:285",
      "name": "Trajectoire en clarification",
      "l0": "PASS — node id",
      "l1": "PARTIAL",
      "l2": "clarification panel + CTA Travail"
    },
    {
      "ref": "09.08",
      "nodeId": "999:335",
      "name": "Trajectoire entre deux cycles",
      "l0": "PASS — node id",
      "l1": "PARTIAL",
      "l2": "closed + envisioned, no active"
    },
    {
      "ref": "09.09",
      "nodeId": "1005:428",
      "name": "Premier cycle actif",
      "l0": "PASS — node id",
      "l1": "PARTIAL",
      "l2": "single active card + detail"
    },
    {
      "ref": "09.10",
      "nodeId": "1034:480",
      "name": "Qualification initiale en cours",
      "l0": "PASS",
      "l1": "mainCard 1358×502; CTA 552×47",
      "l2": "progress steps server-driven"
    },
    {
      "ref": "09.11",
      "nodeId": "1034:505",
      "name": "Proposition initiale de trajectoire",
      "l0": "PASS — get_metadata 2026-11-21",
      "l1": "panel 1358×545; cards 404×155 @x 24/477/930 (gap 49); CTA 498×49 @834",
      "l2": "3 projected cycles, waiting status, note, CTA right"
    },
    {
      "ref": "05.17",
      "nodeId": "1036:114",
      "name": "Travail avec Nora pendant qualification",
      "l0": "PASS",
      "l1": "thread 972×574; composer locked 972×84",
      "l2": "activity banner, locked composer"
    },
    {
      "ref": "SAS06",
      "nodeId": "1022:112",
      "popupNodeId": "1022:164",
      "name": "Popup création + progression",
      "l0": "PASS — get_design_context 2026-11-21",
      "l1": "popup 702×726 @489,124; scrim rgba(6,9,17,0.78)",
      "l2": "3 step cards, Créé badge, info note, Accéder CTA; SVG assets MCP 404 → CSS reserve"
    }
  ],
  "ckiRootCause": {
    "chain": "cki/*.md → manifest → loadVerifiedCkiText → loadCkiEditorialForPin → PilotageProjection.cycle.cki.editorial → CkiMethodeView",
    "bug": "CkiMethodeView displayed ckiId + cycle.objective + availability jargon instead of editorial corpus",
    "fix": "cki-editorial.ts parse + projection field + UI rubrics Figma 09.05"
  },
  "assetReserves": [
    "SAS06 SVG icons (halo, confirmation, evaluation, info) — MCP asset URL 404; CSS geometric substitutes pending Morris asset gate"
  ]
}

```

## 8. Acquisition Figma

| Élément | Valeur |
|---|---|
| fileKey | `itgvCulInEnFY6DvgIegvP` |
| Session MCP | `f01f719c-a50d-4297-899d-d17098f11508` |
| L0 | 13/13 node-ids confirmés (contrat historique + MCP ciblé) |
| L1 | géométries critiques 09.01/05/06/11 + SAS06 modal 702×726 |
| L2 | structure CKI (titre, résultat, pertinence, angles, méthode) ; SAS06 étapes/icônes |
| Assets SAS06 | SVG natifs récupérés via `download_assets` → `web/public/figma/sas06/` |

## 9. Matrice de mesures finales (post-correctif)

Captures runtime : `.tmp-sfia-review/ensemble07-dip-cycle8-final/runtime/{09.01…11,05.17,SAS06-prep}-runtime.png`

### 9.1 JSON mesures `f2-measures-13.json`

```json
[
  {
    "ref": "09.06",
    "verdict": "MEASURED",
    "shot": "ec9415b5cda3",
    "measures": {
      "[data-testid=\"project-overview-cycle-card\"]": {
        "selector": "[data-testid=\"project-overview-cycle-card\"]",
        "x": 284,
        "y": 275,
        "width": 1358,
        "height": 222,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"project-activity-subjects\"]": {
        "selector": "[data-testid=\"project-activity-subjects\"]",
        "x": 284,
        "y": 561,
        "width": 438,
        "height": 278,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"project-overview-hero-sep\"]": {
        "selector": "[data-testid=\"project-overview-hero-sep\"]",
        "x": 284,
        "y": 248,
        "width": 1358,
        "height": 1,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.01",
    "verdict": "MEASURED",
    "shot": "05d9c498c7b4",
    "measures": {
      "[data-testid=\"project-overview-cycle-card\"]": {
        "selector": "[data-testid=\"project-overview-cycle-card\"]",
        "x": 284,
        "y": 275,
        "width": 1358,
        "height": 222,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"project-activity-subjects\"]": {
        "selector": "[data-testid=\"project-activity-subjects\"]",
        "x": 284,
        "y": 561,
        "width": 438,
        "height": 278,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"project-overview-cycle-objective\"]": {
        "selector": "[data-testid=\"project-overview-cycle-objective\"]",
        "x": 313,
        "y": 381,
        "width": 1300,
        "height": 23,
        "fontSize": "14px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.11",
    "verdict": "MEASURED",
    "shot": "9e2522cb0079",
    "measures": {
      "[data-testid=\"trajectory-proposal-sequential\"]": {
        "selector": "[data-testid=\"trajectory-proposal-sequential\"]",
        "x": 284,
        "y": 275,
        "width": 1358,
        "height": 545,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-forecast-step-1\"]": {
        "selector": "[data-testid=\"trajectory-forecast-step-1\"]",
        "x": 321,
        "y": 427,
        "width": 404,
        "height": 155,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-proposal-cta\"]": {
        "selector": "[data-testid=\"trajectory-proposal-cta\"]",
        "x": 1107,
        "y": 738,
        "width": 498,
        "height": 49,
        "fontSize": "16px",
        "fontWeight": "600"
      },
      "[data-testid=\"trajectory-hero-sep\"]": {
        "selector": "[data-testid=\"trajectory-hero-sep\"]",
        "x": 284,
        "y": 248,
        "width": 1358,
        "height": 1,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.10",
    "verdict": "MEASURED",
    "shot": "c5e788a6c211",
    "measures": {
      "[data-testid=\"trajectory-analyzing\"]": null,
      "[data-testid=\"trajectory-hero\"]": {
        "selector": "[data-testid=\"trajectory-hero\"]",
        "x": 284,
        "y": 70,
        "width": 1358,
        "height": 152,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.07",
    "verdict": "MEASURED",
    "shot": "79de1626e961",
    "measures": {
      "[data-testid=\"trajectory-hero\"]": {
        "selector": "[data-testid=\"trajectory-hero\"]",
        "x": 284,
        "y": 70,
        "width": 1358,
        "height": 152,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.09",
    "verdict": "MEASURED",
    "shot": "f9e79ee85907",
    "measures": {
      "[data-testid=\"trajectory-active-cycle\"]": {
        "selector": "[data-testid=\"trajectory-active-cycle\"]",
        "x": 284,
        "y": 326,
        "width": 396,
        "height": 128,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-cycle-actif-panel\"]": {
        "selector": "[data-testid=\"trajectory-cycle-actif-panel\"]",
        "x": 284,
        "y": 474,
        "width": 1358,
        "height": 166,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.02",
    "verdict": "MEASURED",
    "shot": "5fd907a3beea",
    "measures": {
      "[data-testid=\"trajectory-roadmap-cards\"]": {
        "selector": "[data-testid=\"trajectory-roadmap-cards\"]",
        "x": 284,
        "y": 326,
        "width": 1358,
        "height": 128,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "[data-testid=\"trajectory-active-cycle\"]": {
        "selector": "[data-testid=\"trajectory-active-cycle\"]",
        "x": 767,
        "y": 326,
        "width": 396,
        "height": 128,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.08",
    "verdict": "MEASURED",
    "shot": "6cefcecfef50",
    "measures": {
      "[data-testid=\"trajectory-between-cycles\"]": {
        "selector": "[data-testid=\"trajectory-between-cycles\"]",
        "x": 284,
        "y": 466,
        "width": 1358,
        "height": 286,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.05",
    "verdict": "MEASURED",
    "shot": "53b01ee998f1",
    "ckiTitle": "Conception fonctionnelle et cohérence métier",
    "ckiId": "02-conception-fonctionnelle",
    "measures": {
      "main": {
        "selector": "[data-testid=\"trajectory-cki-main\"]",
        "x": 284,
        "y": 275,
        "width": 872,
        "height": 586,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "method": {
        "selector": "[data-testid=\"trajectory-method-side\"]",
        "x": 1178,
        "y": 275,
        "width": 464,
        "height": 586,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "heroSep": {
        "selector": ".e07-section-rule",
        "x": 284,
        "y": 248,
        "width": 1358,
        "height": 1,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.04",
    "verdict": "MEASURED",
    "shot": "5ee55667811e",
    "measures": {
      "summary": {
        "selector": "[data-testid=\"trajectory-future-summary\"]",
        "x": 284,
        "y": 193,
        "width": 1358,
        "height": 345,
        "fontSize": "16px",
        "fontWeight": "400"
      },
      "action": {
        "selector": "[data-testid=\"trajectory-future-action\"]",
        "x": 284,
        "y": 558,
        "width": 1358,
        "height": 181,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "09.03",
    "verdict": "MEASURED",
    "shot": "c9d942b1ea8f"
  },
  {
    "ref": "05.17",
    "verdict": "MEASURED",
    "shot": "4d68fdb7a014",
    "measures": {
      "[data-testid=\"nora-composer\"]": {
        "selector": "[data-testid=\"nora-composer\"]",
        "x": 284,
        "y": 870,
        "width": 965,
        "height": 84,
        "fontSize": "16px",
        "fontWeight": "400"
      }
    }
  },
  {
    "ref": "SAS06",
    "verdict": "PARTIAL",
    "reason": "popup not visible on seed prep; prep page captured",
    "shot": "f4a945c7bdbb"
  }
]
```

### 9.2 Matrice FRAME → verdict (finale candidature)

| FRAME | FIGMA SOURCE | ÉTAT MÉTIER | COMPOSANTS | MESURES clés (runtime) | STYLES | CAPTURE | INTERACTION | VERDICT | RÉSERVES |
|---|---|---|---|---|---|---|---|---|---|
| 09.01 | `983:47` | Projet cycle actif | cycle-card, activity×3, hero-sep | cycle-card 1358×222 @284,**275** ; activity 438×278 @284,561 | séparateurs + CTA Consulter | `09.01-runtime.png` | nav surfaces | **PASS\*** w/h locaux | Δy absolu vs Figma ~287 → **275** (Δ≈12 ; stack hero corrigé vs ~166) |
| 09.02 | `983:90` | Trajectoire clôturé+actif | roadmap cards | active card 396×128 @767,326 | rails/gaps | `09.02-runtime.png` | | **PASS\*** structure | F2 absolu partiel |
| 09.03 | `983:133` | Bilan historique | bilan panels | shot mesuré | | `09.03-runtime.png` | | **MEASURED** | empty-state policy si données absentes |
| 09.04 | `983:176` | Étape envisagée | summary 1358×345 ; action 1358×181 | @284,193 / @284,558 | | `09.04-runtime.png` | | **PASS\*** locales | |
| 09.05 | `983:219` | CKI + méthode | cki-main 872×586 ; method 464×586 | @284,**275** / @1178,**275** | editorial corpus | `09.05-runtime.png` | lecture seule | **PASS\*** w/h ≤1 + **PASS éditorial** | titres angles = corpus (pas labels Figma courts) |
| 09.06 | `999:261` | Projet sans cycle | cycle-card + activity | same y/w/h 09.01 family | | `09.06-runtime.png` | | **PASS\*** | Δy idem |
| 09.07 | `999:285` | Sans trajectoire / clarification | hero | hero @284,70 1358×152 | | `09.07-runtime.png` | | **MEASURED** | |
| 09.08 | `999:335` | Entre deux cycles | between-cycles 1358×286 | @284,466 | | `09.08-runtime.png` | | **MEASURED** | |
| 09.09 | `1005:428` | Premier cycle actif | active 396×128 ; panel 1358×166 | @284,326 / @284,474 | | `09.09-runtime.png` | | **MEASURED** | |
| 09.10 | — | Analyse initiale | analyzing / hero | analyzing null on seed ; hero mesuré | | `09.10-runtime.png` | | **PARTIAL** | selector analyzing absent sur fixture |
| 09.11 | `1034:505` | Proposition non retenue | proposal 1358×545 ; step 404×155 ; CTA 498×49 | @284,**275** | | `09.11-runtime.png` | CTA visible | **PASS\*** w/h | Δy |
| SAS06 | `1022:112` / popup | Création progression | modal 702×726 + SVG icons | layout code + assets | | `SAS06-prep-runtime.png` | | **PARTIAL / NOT PROVEN open** | popup non visible sur seed prep ; assets SVG commités |
| 05.17 | Travail | Continuité / lock | nora-composer | @284,870 965×84 | | `05.17-runtime.png` | | **MEASURED** | |

**Synthèse conformité**

- Inventoriés L0 : **13/13**
- Capturés runtime post-correctif : **13/13** (SAS06 = prep page, pas modal ouverte)
- Mesures DOM post-correctif : **13/13 examinés** ; **SAS06 open = NOT PROVEN** ; **09.10 analyzing = PARTIAL**
- Rectangles critiques w/h (09.01/05/06/11) : **≤2 px** sur largeur/hauteur contractuelles
- Position Y absolue panneaux vs Figma (~287) : **~275** après fix layout owner (`data-project-figma-layout` + hero tokens) — amélioration majeure vs ~166–196 ; **Δ≈12 px restant hors tolérance F2 stricte sur y**
- **Annonce 13/13 PASS contractuel strict : NON**

Matrice intermédiaire (pré-final) conservée pour traçabilité :

```markdown
# Matrice de conformité 13/13 — Cycle 8 (2026-11-21)

Viewport nominal : **1680×970**. Tolérance F2 : ≤2 CSS px sur rectangles stables.

| Réf | État | Structure | Géométrie F2 | Contenu | Assets | Verdict |
|---|---|---|---|---|---|---|
| 09.01 | Projet cycle actif | PASS (séparateur + cartes) | PARTIAL — cartes 438×278 PASS ; panneau h cible 222 appliqué, y absolu drift | PASS | PASS | **PARTIAL** |
| 09.02 | Trajectoire clôturé+actif | PASS structure | PARTIAL — rails 5/7/4, cards 396×128 ; gap nowrap 49 | PASS | PASS | **PARTIAL** |
| 09.03 | Bilan cycle | PASS composants | NOT RUN post-correctif | PASS empty-state policy | PASS | **PARTIAL** |
| 09.04 | Étape envisagée | PASS 2 zones 345/181 | NOT RUN post-correctif | PASS | PASS | **PARTIAL** |
| 09.05 | CKI et méthode | PASS asymmetric 872/464 | PASS w/h ≤1px (871×586 / 464×586) ; y drift | **PASS éditorial corpus** | PASS | **PASS*** |
| 09.06 | Projet sans cycle | PASS séparateur 2 niveaux | PARTIAL — w 1357 (−1), cards 438×278 ; y drift | PASS | PASS | **PARTIAL** |
| 09.07 | Clarification | PASS | NOT RUN F2 | PASS | PASS | **PARTIAL** |
| 09.08 | Entre cycles | PASS | NOT RUN F2 | PASS | PASS | **PARTIAL** |
| 09.09 | Premier cycle actif | PASS | NOT RUN F2 | PASS | PASS | **PARTIAL** |
| 09.10 | Qualification en cours | PASS | NOT RUN F2 | PASS server steps | PASS | **PARTIAL** |
| 09.11 | Proposition initiale | PASS waiting + note | PASS panel 1357×545 (−1), cards 404×155, gap 49, CTA 498×49 droite | PASS | PASS | **PASS*** |
| 05.17 | Travail qualification | PASS lock | NOT RUN F2 | PASS | PASS | **PARTIAL** |
| SAS06 | Popup création | PASS 3 étapes + note | PARTIAL — 702×726 layout ; overlay | PASS | **RESERVE** SVG MCP 404 | **PARTIAL** |

\* PASS sur rectangles locaux mesurés ; offsets Y absolus vs Figma encore hors borne (stack hero/header).

## CKI 09.05 — preuve contenu

| Champ | Observé runtime | Verdict |
|---|---|---|
| Titre | `Conception fonctionnelle et cohérence métier` | PASS (≠ `02-conception-fonctionnelle`) |
| data-cki-id | `02-conception-fonctionnelle` | PASS métadonnée |
| Résultat | Corpus « Obtenir des contrats fonctionnels… » | PASS |
| Pertinence | Corpus « Un besoin doit être traduit… » | PASS |
| Angles | 3 techniques corpus | PASS |
| Méthode | Aucune méthode retenue (état valide) | PASS |

## Couverture

- Audités L0 : **13/13**
- Mesurés F2 post-correctif : **3/13** (09.05, 09.06, 09.11)
- PASS contractuel strict 13/13 : **NON**

**Verdict macro-lot :** `FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED`

```

## 10. Captures et comparaisons

| Artefact | Chemin |
|---|---|
| Runtime final | `.tmp-sfia-review/ensemble07-dip-cycle8-final/runtime/*.png` |
| Mesures JSON | `.tmp-sfia-review/ensemble07-dip-cycle8-final/f2-measures-13.json` |
| Inventaire | `.tmp-sfia-review/ensemble07-dip-cycle8/00-inventory-13-frames.json` |
| Contrats | `.tmp-sfia-review/ensemble07-figma-visual-contracts.json` |

## 11. Correction CKI — chaîne et preuves

### Cause racine

UI consommait `ckiId` + `cycle.objective` + codes disponibilité au lieu des rubriques éditoriales de la fiche CKI vérifiée.

### Chaîne (un seul corpus)

`loadVerifiedCkiText` → `parseCkiEditorialMarkdown` / `loadCkiEditorialForPin` → DTO `cki.editorial` (`service.ts`) → `CkiMethodeView` (09.05).

### Preuves

| Cas | Résultat |
|---|---|
| Unit 01-cadrage | titre **« Cadrage et clarification de l'intention »** ≠ `01-cadrage` |
| Unit 02-conception-fonctionnelle | titre Conception fonctionnelle… + résultat corpus |
| Runtime 09.05 (fixture) | titre `Conception fonctionnelle et cohérence métier` ; `data-cki-id=02-conception-fonctionnelle` |
| Indisponible / digest non conforme | `editorial = null` → UI absence honnête |
| Méthode projet absente | panneau distinct, état valide |
| Angles | 3 premiers bullets « Manières de raisonner » (règle explicite `slice(0,3)`) — pas inventés |

Rejeu unit 2026-11-21 09:59 : **5/5 PASS** (`cki-editorial` + `cycle-objective-display`).

## 12. Finalité du cycle

### Diagnostic

Sur Equip'Campus RECETTE, `project_cycles.objective` persiste encore :

> « Ouvrir le premier cycle CADRAGE, ou reprendre le cycle déjà actif sans doublon… »

→ confusion **à la persistance historique** (instruction OPEN), pas inventée par l'UI seule.

### Correction (frontière, sans migration)

- `cycle-objective-display.ts` : détecte objectifs opérationnels ; `displayableCycleObjective` → `null` + label honnête `CYCLE_OBJECTIVE_PENDING_LABEL`
- `persistableCycleObjective` : futurs OPEN n'écrivent plus le script opérationnel
- **Aucune réécriture** de la base Equip'Campus (interdit)

### Preuve

Unit : OPEN texts rejetés ; métier réel conservé ; placeholder non-instructionnel.

## 13. Tests exécutés (candidat `ce03f5a7`)

| Suite | Résultat exact | Preuve |
|---|---|---|
| Typecheck (`tsc --noEmit`) | PASS (cycle 8) | logs session |
| Unit E07 + CKI + objective | **31 PASS / 8 files** | `/tmp/e07-c8-unit.out` |
| Unit CKI+objective rejeu | **5 PASS** | 2026-11-21 09:59 |
| PG `ensemble07-initial-qualification.pg.test.ts` | **15 PASS** | `/tmp/e07-c8-pg2.out` |
| Browser continuity full rejeu post-gel | **NOT RE-RUN** ce cutover (assertion CKI déjà dans commit ; suite PASS sur gel antérieur c500) | réserve |
| Build production Next | **PASS** | `/tmp/e07-c8-build.out` |
| F2 measure-13 + screenshots | exécuté | `f2-measures-13.json` + runtime png |
| Nora LIVE | **NOT RUN** (interdit) | — |

## 14. Tests non exécutés / motifs

| Item | Motif |
|---|---|
| Suite PG globale complète (~525) | hors blast ; E07 PG ciblé PASS |
| Playwright continuity post-deploy | smoke technique HTTP/DB ; UAT Morris pour parcours authentifié Equip'Campus UI |
| SAS06 modal ouverte mesure F2 | seed prep n'a pas affiché le popup — **NOT PROVEN** |
| 09.10 analyzing selector | fixture sans état analyzing actif |

## 15. SHA / tree candidat local

- SHA : `ce03f5a7c6657f8bb924386b24355d37011833de`
- Tree : `bd9077d5a1663ab9bdf0cbe326f8cbc210c1dabe`
- Parent : `c500df9ce58575783bcb842bf83658e1837990a3`
- Build RECETTE construit depuis ce SHA (worktree immutable `…-recette-build-ce03f5a7`)

## 16. Identité build RECETTE

| | |
|---|---|
| URL | http://127.0.0.1:3200 |
| Service LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| Program | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-ce03f5a7/start-recette-ensemble07-ce03f5a7.sh` |
| SHA servi | `ce03f5a7c6657f8bb924386b24355d37011833de` |
| BUILD_ID | `oh_CshpzIKJW7l6RC6aSp` (présent dans HTML `/login`) |
| Port | **3200** (inchangé) |
| Base | `sfia_next_recette_ml4` @ PostgreSQL **5434** (docker `sfia-next-recette-pg`) |
| Owner DB | `sfia_next_recette_ml4` |
| Manifeste | `…-recette-build-ce03f5a7/.sfia-recette/RECETTE-MANIFEST.md` |
| Ancien | `c500df9c` / `Ispeg3__Q3_t1Qf1JJWDZ` — worktree + rollback conservés |

## 17. Backup, rollback, smoke

### Backup

- Fichier : `/Users/morris/.config/sfia-studio-next/recette/backups/ml4d-e07-20261121T085441Z-pre-ce03f5a7.sql.gz`
- Taille : 707574 bytes
- Intégrité : `gzip -t` **OK**

### Rollback

- Script : `…-recette-build-ce03f5a7/ROLLBACK-TO-c500df9c.sh`
- Ancien start : `…-recette-build-c500df9c/start-recette-ensemble07-c500df9c.sh`
- Plist backup : `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist.ce03f5a7.pre-cutover.bak`
- Rollback = bascule code LaunchAgent **sans** mutation données (sauf restore dump si nécessaire)

### Smoke technique post-déploiement (Cursor)

| Contrôle | Résultat |
|---|---|
| `/login` HTTP | **200** + BUILD_ID `oh_CshpzIKJW7l6RC6aSp` |
| `/portfolio` | **200** |
| `/api/auth/get-session` | **200** |
| Listen `:3200` | node PID servi depuis WT ce03 |
| LaunchAgent WorkingDirectory | WT `…-ce03f5a7/projects/sfia-studio-next/web` |
| Projects count | **26** |
| Equip'Campus | présent `proj_a9ce5f43-…` |
| Cycle CADRAGE | **1 ACTIVE** (unique) ; `cki_id=01-cadrage` pin `0.2.0` |
| Doublon ACTIVE | **absent** |
| Nora LIVE | non lancé |
| launchd.err | vide / Ready |

**Le smoke Cursor n'est pas l'acceptation finale Morris.**

## 18. Réserves, dette, sorties

| # | Réserve | Impact | Propriétaire | Sortie |
|---|---|---|---|---|
| R1 | Δy absolu panneaux ~12 px vs Figma 287 | F2 y non strict | UX shell | arbitrage Morris tolérance y ou micro-adjust tokens |
| R2 | SAS06 modal open NOT PROVEN en mesure browser seed | preuve visuelle popup | QA | capture modal ouverte en UAT / script dédié |
| R3 | 09.10 analyzing selector null | état analyse non fixture | QA | fixture DEV isolée |
| R4 | Angles CKI = titres techniques corpus ≠ labels courts Figma | fidélité éditoriale vs maquette textuelle | Produit/CKI | arbitrage labels si exigé |
| R5 | Objective Equip'Campus DB toujours opérationnel | affichage honnête « non formulée » | Données | pas de migration autorisée ; reformulation métier future GO |
| R6 | Browser continuity non rejoué post-cutover | couverture e2e | QA | campagne Morris / rejeu optionnel |

Dettes non bloquantes pour mise à disposition RECETTE ; **bloquantes pour claim 13/13 F2 strict**.

## 19. Verdict final

**`FIGMA TO RUNTIME PARTIAL — CORRECTED CANDIDATE DEPLOYED TO RECETTE — TECHNICAL SMOKE PASS — MORRIS FINAL UAT REQUIRED`**

Précisions obligatoires :

- Ne pas lire comme `13/13 PASS` contractuel F2 absolu.
- Ne pas lire comme READY / LIVE PROVEN / ADOPTED.
- Candidat `ce03f5a7` / BUILD `oh_CshpzIKJW7l6RC6aSp` est **servi** sur RECETTE existante `:3200`.
- Prochaine capacité : **recette consolidée finale Ensemble 07 par Morris**.

---

## Annexe A — Instruction ChatGPT (§9.1)

Relire ce Review Pack FULL (handoff Git `sfia-review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`) et produire la revue indépendante L3 : conformité au GO, écarts Figma, CKI, finalité, ENV-01, smoke, réserves, recommandation GO Morris UAT.
