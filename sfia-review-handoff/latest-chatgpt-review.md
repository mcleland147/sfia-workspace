# SFIA Review Pack — FULL — UX-004 D2 GUARDS

- Date/heure: 2026-11-16T09:17:20+01:00
- Produit: projects/sfia-studio-next/
- Macro-lot: ML4D / UX-004
- Cycle: 8 — Delivery, correctif borné
- Profil: Standard · Typologie: EVOL / PATCH candidate
- Review Pack: FULL mono-cycle · Handoff: publish-in-cycle L3
- Intégrateur: Cursor · Autorité: Morris
- GO Morris: **OUI** (16 nov 2026) — vérité des effets + concurrence

## Verdict Cursor

**READY FOR CHATGPT REVIEW — UX-004 D2 GUARDS**

### Instruction ChatGPT

Lire depuis Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` avant conclusion.

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `feat/next-ml4d-ux004-portfolio-20261116` |
| Parent candidat | `fb0ac5c865f1d562a3778e207e5e8729165c5c4d` |
| HEAD correctif | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Ascendance UX-004 `bc878568` | OUI |
| Ascendance UX-003 `a77a3a2b` | OUI |
| Ascendance parent `fb0ac5c8` | OUI |
| status post-commit | ` M .tmp-sfia-review/chatgpt-review.md` |
| RECETTE WT | `…-ux004-recette-build-bc8785683c30` @ `bc878568` / BUILD `3g7UH7AXjSWhxrT20D3-w` — **non modifié** |
| DEV | `:3102` HTTP 200 |
| RECETTE | `:3200` HTTP 200 inchangée |
| Handoff tip précédent | `6bb19f74991f71f0a708411a8188e351b0b38195` / blob `4a8d6f8d…` |

STOP non déclenché.

---

## 2. Sources

CKC UX-004: ABSENT → fallback SFIA v2.6 (§4.3.0b, §2.0.H, Review Pack §7, handoff §7.10–7.11).

Sources Next / conception / ENV-01 / versioning / décision R5 / as-built parent / contrat visuel UX-004 consultés. Pas de nouveau contrat Figma.

---

## 3. État initial (parent `fb0ac5c8`)

- `openPreparation({ knownPreparationIds })` : sur ACK vide, GET portfolio + id « nouveau » → message « Création confirmée… » + `discoveredId` (fausse garantie causale ; shell appelait sans known ids).
- Concurrence : `openingRef` (shell) et `creatingRef` (portefeuille) séparés → double POST possible rail+portefeuille.

---

## 4. Blast radius

| Zone | Impact |
| --- | --- |
| `open-preparation.ts` | Classification honnête + single-flight |
| StudioShell / portfolio | `runOpenPreparation` + busy partagé |
| Tests | unit + Playwright concurrence / uncertain |
| Docs | as-built + delivery-history |
| Hors périmètre | API, DB, Figma, Nora, OAuth, RECETTE, rails projet |

---

## 5. Correctifs

### A — UNCERTAIN honnête
`OPENED` seulement si POST OK + `preparationId` non vide. Sinon `UNCERTAIN` / `REFUSED` / `UNAUTHORIZED`. Aucune confirmation via diff d'ids. Pas de navigation par supposition. Pas de second POST.

### B — Single-flight document-scoped
`runOpenPreparation(onResult)` : un seul POST ; appel concurrent → `busy` ; verrou tenu jusqu'à fin de `onResult` (navigation incluse) ; `subscribeOpenPreparationBusy` pour UI.

### Limites
Garde mémoire frontend ≠ idempotence serveur. Ne couvre pas multi-onglet / multi-session / multi-appareil.

---

## 6. Fichiers — contenu complet (helpers / as-built)

### `projects/sfia-studio-next/web/src/lib/open-preparation.ts`

```
/**
 * Canonical D2 open-preparation client action (UX-004).
 * One voluntary POST /api/preparations; no automatic second POST after uncertain ACK.
 * Does not create a durable project.
 *
 * OPENED requires an API preparationId for this command — portfolio diffs alone
 * never upgrade UNCERTAIN to a confirmed creation (no causal correlation in the
 * existing API contract).
 *
 * Single-flight is in-memory for the current browser document only — not
 * server idempotence, and not cross-tab / cross-session protection.
 */

export type OpenPreparationResult =
  | { kind: "opened"; preparationId: string }
  | { kind: "refused"; message: string; httpStatus?: number }
  | { kind: "unauthorized" }
  | { kind: "uncertain"; message: string };

export type OpenPreparationOutcome = OpenPreparationResult | { kind: "busy" };

const UNCERTAIN_MESSAGE =
  "Création incertaine (accusé de réception insuffisant). La préparation a peut-être été enregistrée — consultez les préparations existantes. Aucun nouveau POST automatique.";

const NETWORK_UNCERTAIN_MESSAGE =
  "Réseau interrompu pendant la création. Résultat non vérifiable — consultez les préparations existantes. Pas de second POST automatique.";

type BusyListener = (busy: boolean) => void;

let flight: Promise<OpenPreparationResult> | null = null;
const busyListeners = new Set<BusyListener>();

function setFlight(next: Promise<OpenPreparationResult> | null): void {
  flight = next;
  const busy = flight !== null;
  for (const listener of busyListeners) {
    listener(busy);
  }
}

/** Subscribe to shared open-preparation busy state (same document only). */
export function subscribeOpenPreparationBusy(listener: BusyListener): () => void {
  busyListeners.add(listener);
  listener(flight !== null);
  return () => {
    busyListeners.delete(listener);
  };
}

export function isOpenPreparationBusy(): boolean {
  return flight !== null;
}

async function postOpenPreparation(): Promise<OpenPreparationResult> {
  try {
    const res = await fetch("/api/preparations", { method: "POST" });
    let j: { preparationId?: string; error?: string } = {};
    try {
      j = await res.json();
    } catch {
      j = {};
    }

    if (res.status === 401) {
      return { kind: "unauthorized" };
    }

    if (res.ok && typeof j.preparationId === "string" && j.preparationId.length > 0) {
      return { kind: "opened", preparationId: j.preparationId };
    }

    if (!res.ok) {
      return {
        kind: "refused",
        message: j.error ?? `création refusée (HTTP ${res.status})`,
        httpStatus: res.status,
      };
    }

    // ACK incomplete: never infer a new preparation from portfolio membership.
    return { kind: "uncertain", message: UNCERTAIN_MESSAGE };
  } catch {
    return { kind: "uncertain", message: NETWORK_UNCERTAIN_MESSAGE };
  }
}

/**
 * Run the canonical open-preparation POST under a document-scoped single-flight lock.
 * Concurrent callers receive `{ kind: "busy" }` and do not start a second POST.
 * The lock is held until `onResult` finishes (including navigation), closing the
 * window between ACK and route change.
 */
export async function runOpenPreparation(
  onResult: (result: OpenPreparationResult) => void | Promise<void>,
): Promise<OpenPreparationOutcome> {
  if (flight) {
    return { kind: "busy" };
  }

  const pending = postOpenPreparation();
  setFlight(pending);
  try {
    const result = await pending;
    await onResult(result);
    return result;
  } finally {
    setFlight(null);
  }
}

/** Test-only: POST classification without acquiring the UI single-flight lock. */
export async function openPreparationForTest(): Promise<OpenPreparationResult> {
  return postOpenPreparation();
}
```
### `projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md`

```
# As-built — UX-004 open-preparation + breadcrumb + D2 guards (2026-11-16)

## Scope

Borned shell/portfolio correctif on ML4D UX-004. No Figma change. No API/schema change. No RECETTE redeploy in this cycle.

## Correction A — Nouveau projet → D2

Canonical client action: `web/src/lib/open-preparation.ts` → `runOpenPreparation()`.

- One voluntary `POST /api/preparations`.
- Success (`OPENED`) → navigate to `/preparations/{preparationId}` (API id only).
- `REFUSED` / `UNAUTHORIZED` / `UNCERTAIN` → user-visible state; **no automatic second POST**.
- `UNCERTAIN` never upgrades to confirmed creation via portfolio id diff (no causal correlation in the current API).

Entry points sharing this action:

| UI | Location |
| --- | --- |
| Rail « Nouveau projet » | `StudioShell` via `ShellNavItem.action = "open-preparation"` |
| Mobile « Créer » | bottom nav button |
| Portefeuille « Créer un projet » | `portfolio/page.tsx` `startPreparation()` |

Removed: hash navigation `/portfolio#nouvelle-preparation` as the rail/mobile create path.

## Correction B — Fil d'Ariane

`resolvePersonalBreadcrumb(pathname)` in `studio-rail.ts`:

| Route | Label |
| --- | --- |
| `/portfolio` | Portefeuille |
| `/settings/integrations` | Intégrations |
| `/settings` (other) | Paramètres |
| unknown | `null` → shell shows `SFIA Studio` only (never invent / never keep Portefeuille by default) |

## Correction C — D2 effect honesty (ACK)

| Kind | Condition |
| --- | --- |
| `opened` | HTTP OK + non-empty `preparationId` from this POST |
| `refused` | Explicit non-OK (≠ 401) |
| `unauthorized` | HTTP 401 |
| `uncertain` | Empty/incomplete ACK or network failure |

Portfolio re-read after `uncertain` is an aid to reprise only — it does **not** confirm creation and does **not** drive navigation.

## Correction D — Document-scoped single-flight

`runOpenPreparation` holds one in-memory lock for the current browser document until `onResult` completes (including navigation). Concurrent entry points receive `{ kind: "busy" }` and do not start a second POST. Busy state is shared via `subscribeOpenPreparationBusy`.

### Limits (not server idempotence)

This guard does **not** cover: multiple tabs, multiple sessions, multiple devices, or server-side duplicate processing. Stronger guarantees would require a server/persistence mandate.

## Non-goals preserved

D1 identity, durable project creation, Nora conversation, OAuth UX-003, rails projet/conversation/inspection, DB, permissions, ML5.
```
## 7. Diff parent→HEAD (`fb0ac5c8..HEAD`)

```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md b/projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md
index 6e18b3fa..e50bc4f0 100644
--- a/projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md
+++ b/projects/sfia-studio-next/construction/as-built-ux004-open-preparation-breadcrumb-20261116.md
@@ -1,4 +1,4 @@
-# As-built — UX-004 correctif open-preparation + breadcrumb (2026-11-16)
+# As-built — UX-004 open-preparation + breadcrumb + D2 guards (2026-11-16)

 ## Scope

@@ -6,12 +6,12 @@ Borned shell/portfolio correctif on ML4D UX-004. No Figma change. No API/schema

 ## Correction A — Nouveau projet → D2

-Canonical client action: `web/src/lib/open-preparation.ts` → `openPreparation()`.
+Canonical client action: `web/src/lib/open-preparation.ts` → `runOpenPreparation()`.

 - One voluntary `POST /api/preparations`.
-- Success → navigate to `/preparations/{preparationId}` (real id only).
-- Refused / unauthorized / uncertain ACK → user-visible state; **no automatic second POST**.
-- Callers guard concurrency (`openingRef` / `creatingRef`).
+- Success (`OPENED`) → navigate to `/preparations/{preparationId}` (API id only).
+- `REFUSED` / `UNAUTHORIZED` / `UNCERTAIN` → user-visible state; **no automatic second POST**.
+- `UNCERTAIN` never upgrades to confirmed creation via portfolio id diff (no causal correlation in the current API).

 Entry points sharing this action:

@@ -34,6 +34,25 @@ Removed: hash navigation `/portfolio#nouvelle-preparation` as the rail/mobile cr
 | `/settings` (other) | Paramètres |
 | unknown | `null` → shell shows `SFIA Studio` only (never invent / never keep Portefeuille by default) |

+## Correction C — D2 effect honesty (ACK)
+
+| Kind | Condition |
+| --- | --- |
+| `opened` | HTTP OK + non-empty `preparationId` from this POST |
+| `refused` | Explicit non-OK (≠ 401) |
+| `unauthorized` | HTTP 401 |
+| `uncertain` | Empty/incomplete ACK or network failure |
+
+Portfolio re-read after `uncertain` is an aid to reprise only — it does **not** confirm creation and does **not** drive navigation.
+
+## Correction D — Document-scoped single-flight
+
+`runOpenPreparation` holds one in-memory lock for the current browser document until `onResult` completes (including navigation). Concurrent entry points receive `{ kind: "busy" }` and do not start a second POST. Busy state is shared via `subscribeOpenPreparationBusy`.
+
+### Limits (not server idempotence)
+
+This guard does **not** cover: multiple tabs, multiple sessions, multiple devices, or server-side duplicate processing. Stronger guarantees would require a server/persistence mandate.
+
 ## Non-goals preserved

 D1 identity, durable project creation, Nora conversation, OAuth UX-003, rails projet/conversation/inspection, DB, permissions, ML5.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 75c3aed6..dea527f7 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,6 +25,23 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-UX004-D2-GUARDS
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~09:20 CET (Europe/Paris) |
+| Macro-lot | ML4D — UX-004 D2 guards (effet honnête + single-flight) |
+| Type | EVOL / PATCH candidate compatible · **NO RELEASE** |
+| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
+| Parent tip | `fb0ac5c865f1d562a3778e207e5e8729165c5c4d` |
+| Causes | (A) UNCERTAIN confirmé à tort via diff d'ids portefeuille ; (B) verrous locaux shell/portefeuille non partagés |
+| Changes | `runOpenPreparation` single-flight document-scoped ; UNCERTAIN sans upgrade portfolio ; messages honnêtes ; tests unit + Playwright concurrence inter-entrées |
+| Schema / API | unchanged |
+| Limites | Garde frontend ≠ idempotence serveur ; hors multi-onglet / multi-session |
+| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`bc878568` / `3g7UH7AXjSWhxrT20D3-w`) |
+| Push Product | **AUCUN** |
+| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 D2 GUARDS` |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-UX004-NAV-BREADCRUMB-CORRECTIF

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
index b4477f76..93f7a706 100644
--- a/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/portfolio/page.tsx
@@ -3,7 +3,10 @@
 import { useCallback, useEffect, useRef, useState } from "react";
 import { useRouter } from "next/navigation";
 import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";
-import { openPreparation } from "@/lib/open-preparation";
+import {
+  runOpenPreparation,
+  subscribeOpenPreparationBusy,
+} from "@/lib/open-preparation";

 type PreparationSummary = {
   id: string;
@@ -68,9 +71,10 @@ export default function PortfolioPage() {
   const [creationUncertainty, setCreationUncertainty] = useState<string>("");
   const [loadingMore, setLoadingMore] = useState(false);
   const [creating, setCreating] = useState(false);
-  const creatingRef = useRef(false);
   const knownPrepIdsRef = useRef<Set<string>>(new Set());

+  useEffect(() => subscribeOpenPreparationBusy(setCreating), []);
+
   const applyPortfolio = useCallback((j: PortfolioResponse, append: boolean) => {
     setData(j);
     const prep = j.portfolio && "preparations" in j.portfolio ? j.portfolio.preparations : null;
@@ -147,14 +151,9 @@ export default function PortfolioPage() {
   }

   async function startPreparation() {
-    if (creatingRef.current) return;
-    creatingRef.current = true;
-    setCreating(true);
     setCreationUncertainty("");
     setError("");
-    const before = new Set(knownPrepIdsRef.current);
-    try {
-      const result = await openPreparation({ knownPreparationIds: before });
+    const outcome = await runOpenPreparation(async (result) => {
       if (result.kind === "opened") {
         router.push(`/preparations/${result.preparationId}`);
         return;
@@ -168,13 +167,11 @@ export default function PortfolioPage() {
         setError(result.message);
         return;
       }
-      // Uncertain ACK — refresh known ids; never auto-retry POST.
+      // UNCERTAIN: refresh list for reprise aid; never confirm creation or navigate by guess.
       await reloadPortfolio();
       setCreationUncertainty(result.message);
-    } finally {
-      creatingRef.current = false;
-      setCreating(false);
-    }
+    });
+    if (outcome.kind === "busy") return;
   }

   function resumePreparation(id: string) {
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index e6d9bedb..f86cc0b4 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -1,9 +1,12 @@
 "use client";

 import Link from "next/link";
-import { useEffect, useRef, useState } from "react";
+import { useEffect, useState } from "react";
 import { usePathname, useRouter, useSearchParams } from "next/navigation";
-import { openPreparation } from "@/lib/open-preparation";
+import {
+  runOpenPreparation,
+  subscribeOpenPreparationBusy,
+} from "@/lib/open-preparation";
 import { PRODUCT_VERSIONING } from "@/lib/product-version";
 import {
   STUDIO_RAIL_VARIANTS,
@@ -38,15 +41,12 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
   const breadcrumb = resolvePersonalBreadcrumb(pathname);
   const [openingPrep, setOpeningPrep] = useState(false);
   const [prepNotice, setPrepNotice] = useState("");
-  const openingRef = useRef(false);
+
+  useEffect(() => subscribeOpenPreparationBusy(setOpeningPrep), []);

   async function handleOpenPreparation() {
-    if (openingRef.current) return;
-    openingRef.current = true;
-    setOpeningPrep(true);
     setPrepNotice("");
-    try {
-      const result = await openPreparation();
+    const outcome = await runOpenPreparation(async (result) => {
       if (result.kind === "opened") {
         router.push(`/preparations/${result.preparationId}`);
         return;
@@ -59,11 +59,10 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
         setPrepNotice(result.message);
         return;
       }
+      // UNCERTAIN: honest message; never navigate by guess.
       setPrepNotice(result.message);
-    } finally {
-      openingRef.current = false;
-      setOpeningPrep(false);
-    }
+    });
+    if (outcome.kind === "busy") return;
   }

   // UX-003: /login is a public entry surface — no private project rail.
diff --git a/projects/sfia-studio-next/web/src/lib/open-preparation.ts b/projects/sfia-studio-next/web/src/lib/open-preparation.ts
index 6af70b0d..0bdf44af 100644
--- a/projects/sfia-studio-next/web/src/lib/open-preparation.ts
+++ b/projects/sfia-studio-next/web/src/lib/open-preparation.ts
@@ -1,38 +1,57 @@
 /**
  * Canonical D2 open-preparation client action (UX-004).
- * One POST /api/preparations; no automatic second POST after uncertain ACK.
+ * One voluntary POST /api/preparations; no automatic second POST after uncertain ACK.
  * Does not create a durable project.
+ *
+ * OPENED requires an API preparationId for this command — portfolio diffs alone
+ * never upgrade UNCERTAIN to a confirmed creation (no causal correlation in the
+ * existing API contract).
+ *
+ * Single-flight is in-memory for the current browser document only — not
+ * server idempotence, and not cross-tab / cross-session protection.
  */

 export type OpenPreparationResult =
   | { kind: "opened"; preparationId: string }
   | { kind: "refused"; message: string; httpStatus?: number }
   | { kind: "unauthorized" }
-  | { kind: "uncertain"; message: string; discoveredId?: string };
+  | { kind: "uncertain"; message: string };

-type PrepItem = { id: string };
+export type OpenPreparationOutcome = OpenPreparationResult | { kind: "busy" };

-async function readPortfolioPrepItems(): Promise<PrepItem[]> {
-  try {
-    const r = await fetch("/api/portfolio");
-    if (!r.ok) return [];
-    const j = (await r.json()) as {
-      portfolio?: { preparations?: { items?: PrepItem[] } };
-    };
-    return j.portfolio?.preparations?.items ?? [];
-  } catch {
-    return [];
+const UNCERTAIN_MESSAGE =
+  "Création incertaine (accusé de réception insuffisant). La préparation a peut-être été enregistrée — consultez les préparations existantes. Aucun nouveau POST automatique.";
+
+const NETWORK_UNCERTAIN_MESSAGE =
+  "Réseau interrompu pendant la création. Résultat non vérifiable — consultez les préparations existantes. Pas de second POST automatique.";
+
+type BusyListener = (busy: boolean) => void;
+
+let flight: Promise<OpenPreparationResult> | null = null;
+const busyListeners = new Set<BusyListener>();
+
+function setFlight(next: Promise<OpenPreparationResult> | null): void {
+  flight = next;
+  const busy = flight !== null;
+  for (const listener of busyListeners) {
+    listener(busy);
   }
 }

-/**
- * Start a new OPEN preparation and return its real id, or a controlled uncertainty.
- * Callers must guard against concurrent invocations.
- */
-export async function openPreparation(input?: {
-  knownPreparationIds?: Iterable<string>;
-}): Promise<OpenPreparationResult> {
-  const before = new Set(input?.knownPreparationIds ?? []);
+/** Subscribe to shared open-preparation busy state (same document only). */
+export function subscribeOpenPreparationBusy(listener: BusyListener): () => void {
+  busyListeners.add(listener);
+  listener(flight !== null);
+  return () => {
+    busyListeners.delete(listener);
+  };
+}
+
+export function isOpenPreparationBusy(): boolean {
+  return flight !== null;
+}
+
+async function postOpenPreparation(): Promise<OpenPreparationResult> {
   try {
     const res = await fetch("/api/preparations", { method: "POST" });
     let j: { preparationId?: string; error?: string } = {};
@@ -46,7 +65,7 @@ export async function openPreparation(input?: {
       return { kind: "unauthorized" };
     }

-    if (res.ok && j.preparationId) {
+    if (res.ok && typeof j.preparationId === "string" && j.preparationId.length > 0) {
       return { kind: "opened", preparationId: j.preparationId };
     }

@@ -58,35 +77,38 @@ export async function openPreparation(input?: {
       };
     }

-    // ACK uncertainty: re-read portfolio, never auto-retry POST.
-    const items = await readPortfolioPrepItems();
-    const discovered = items.find((p) => !before.has(p.id));
-    if (discovered) {
-      return {
-        kind: "uncertain",
-        discoveredId: discovered.id,
-        message: `Création confirmée après relecture · ${discovered.id.slice(0, 8)}… — ouvrez « Reprendre ».`,
-      };
-    }
-    return {
-      kind: "uncertain",
-      message:
-        "Création incertaine (ACK perdu). Aucun nouveau POST automatique. Relisez le portefeuille ou réessayez explicitement.",
-    };
+    // ACK incomplete: never infer a new preparation from portfolio membership.
+    return { kind: "uncertain", message: UNCERTAIN_MESSAGE };
   } catch {
-    const items = await readPortfolioPrepItems();
-    const discovered = items.find((p) => !before.has(p.id));
-    if (discovered) {
-      return {
-        kind: "uncertain",
-        discoveredId: discovered.id,
-        message: `Réseau interrompu, mais une préparation nouvelle apparaît · ${discovered.id.slice(0, 8)}… — Reprendre (GET).`,
-      };
-    }
-    return {
-      kind: "uncertain",
-      message:
-        "Réseau interrompu pendant la création. Résultat non vérifiable — pas de second POST automatique.",
-    };
+    return { kind: "uncertain", message: NETWORK_UNCERTAIN_MESSAGE };
+  }
+}
+
+/**
+ * Run the canonical open-preparation POST under a document-scoped single-flight lock.
+ * Concurrent callers receive `{ kind: "busy" }` and do not start a second POST.
+ * The lock is held until `onResult` finishes (including navigation), closing the
+ * window between ACK and route change.
+ */
+export async function runOpenPreparation(
+  onResult: (result: OpenPreparationResult) => void | Promise<void>,
+): Promise<OpenPreparationOutcome> {
+  if (flight) {
+    return { kind: "busy" };
   }
+
+  const pending = postOpenPreparation();
+  setFlight(pending);
+  try {
+    const result = await pending;
+    await onResult(result);
+    return result;
+  } finally {
+    setFlight(null);
+  }
+}
+
+/** Test-only: POST classification without acquiring the UI single-flight lock. */
+export async function openPreparationForTest(): Promise<OpenPreparationResult> {
+  return postOpenPreparation();
 }
diff --git a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
index d1b49629..5f67e2dd 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
@@ -255,6 +255,116 @@ test.describe("UX-004 portfolio shell", () => {
     await expect(page.getByTestId("studio-rail")).toHaveCount(0);
   });

+  test("single-flight: rail + portfolio create during delayed POST → one POST", async ({ page }) => {
+    await page.setViewportSize({ width: 1280, height: 800 });
+    await loginPilotA(page);
+
+    let posts = 0;
+    page.on("request", (req) => {
+      if (req.method() === "POST" && req.url().includes("/api/preparations")) posts += 1;
+    });
+    await page.route("**/api/preparations", async (route) => {
+      if (route.request().method() !== "POST") {
+        await route.continue();
+        return;
+      }
+      await new Promise((r) => setTimeout(r, 500));
+      await route.fulfill({
+        status: 200,
+        contentType: "application/json",
+        body: JSON.stringify({ preparationId: "prep-cross-flight" }),
+      });
+    });
+
+    // force: bypass disabled-after-busy so both entry points can race the lock
+    // (mirrors two near-simultaneous clicks before React re-render).
+    await Promise.all([
+      page.getByTestId("nav-new-prep").click({ force: true }),
+      page.getByTestId("portfolio-new-prep").click({ force: true }),
+    ]);
+    await page.waitForURL("**/preparations/prep-cross-flight");
+    expect(posts).toBe(1);
+    await page.unroute("**/api/preparations");
+  });
+
+  test("uncertain ACK: no confirm, no navigate by guess, no second POST", async ({ page }) => {
+    await page.setViewportSize({ width: 1280, height: 800 });
+    await loginPilotA(page);
+
+    // Pre-existing preparations must not be declared newly created.
+    await page.route("**/api/portfolio", async (route) => {
+      if (route.request().method() !== "GET") {
+        await route.continue();
+        return;
+      }
+      await route.fulfill({
+        status: 200,
+        contentType: "application/json",
+        body: JSON.stringify({
+          session: { displayName: "Pilote A", authMode: "dev" },
+          portfolio: {
+            kind: "empty",
+            openPreparations: 1,
+            preparations: {
+              items: [
+                {
+                  id: "prep-preexisting",
+                  previewName: "Déjà là",
+                  previewSummary: "",
+                  createdAt: "2026-11-15T10:00:00.000Z",
+                  status: "OPEN",
+                },
+              ],
+              nextCursor: null,
+            },
+          },
+        }),
+      });
+    });
+    await page.reload();
+    await expect(page.getByTestId("resume-prep-prep-preexisting")).toBeVisible();
+
+    let posts = 0;
+    page.on("request", (req) => {
+      if (req.method() === "POST" && req.url().includes("/api/preparations")) posts += 1;
+    });
+    await page.route("**/api/preparations", async (route) => {
+      if (route.request().method() !== "POST") {
+        await route.continue();
+        return;
+      }
+      await route.fulfill({
+        status: 200,
+        contentType: "application/json",
+        body: "{}",
+      });
+    });
+
+    await page.getByTestId("portfolio-new-prep").click();
+    await expect(page.getByText(/création incertaine|peut-être été enregistrée/i)).toBeVisible();
+    await expect(page).toHaveURL(/\/portfolio/);
+    expect(posts).toBe(1);
+    await expect(page.getByText(/création confirmée/i)).toHaveCount(0);
+
+    // Lock released: a later refused call must not retry-loop.
+    await page.unroute("**/api/preparations");
+    await page.route("**/api/preparations", async (route) => {
+      if (route.request().method() !== "POST") {
+        await route.continue();
+        return;
+      }
+      await route.fulfill({
+        status: 500,
+        contentType: "application/json",
+        body: JSON.stringify({ error: "refus métier" }),
+      });
+    });
+    posts = 0;
+    await page.getByTestId("nav-new-prep").click();
+    await expect(page.getByTestId("shell-prep-notice")).toContainText(/refus/i);
+    expect(posts).toBe(1);
+  });
+
   test("rail variants widths preserved on project surfaces", async ({ page }) => {
     await page.setViewportSize({ width: 1680, height: 970 });
     await loginPilotA(page);
diff --git a/projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts b/projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts
index e8c7ceb9..690db416 100644
--- a/projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/open-preparation.test.ts
@@ -1,7 +1,12 @@
 import { beforeEach, describe, expect, it, vi } from "vitest";
-import { openPreparation } from "@/lib/open-preparation";
+import {
+  isOpenPreparationBusy,
+  openPreparationForTest,
+  runOpenPreparation,
+  subscribeOpenPreparationBusy,
+} from "@/lib/open-preparation";

-describe("openPreparation (D2 client)", () => {
+describe("openPreparation POST classification (D2 client)", () => {
   beforeEach(() => {
     vi.restoreAllMocks();
   });
@@ -16,7 +21,7 @@ describe("openPreparation (D2 client)", () => {
         }),
       ),
     );
-    const r = await openPreparation();
+    const r = await openPreparationForTest();
     expect(r).toEqual({ kind: "opened", preparationId: "prep-1" });
     expect(fetch).toHaveBeenCalledTimes(1);
     expect(fetch).toHaveBeenCalledWith("/api/preparations", { method: "POST" });
@@ -32,32 +37,137 @@ describe("openPreparation (D2 client)", () => {
         }),
       ),
     );
-    const r = await openPreparation();
+    const r = await openPreparationForTest();
     expect(r.kind).toBe("refused");
     expect(fetch).toHaveBeenCalledTimes(1);
   });

-  it("on uncertain empty body, reloads portfolio once and never retries POST", async () => {
-    const fetchMock = vi
-      .fn()
-      .mockResolvedValueOnce(
-        new Response("{}", { status: 200, headers: { "Content-Type": "application/json" } }),
-      )
-      .mockResolvedValueOnce(
-        new Response(
+  it("returns unauthorized on 401", async () => {
+    vi.stubGlobal(
+      "fetch",
+      vi.fn(async () => new Response(JSON.stringify({ error: "auth" }), { status: 401 })),
+    );
+    const r = await openPreparationForTest();
+    expect(r).toEqual({ kind: "unauthorized" });
+    expect(fetch).toHaveBeenCalledTimes(1);
+  });
+
+  it("on empty ACK body stays UNCERTAIN without confirming via portfolio ids", async () => {
+    const fetchMock = vi.fn(async (url: RequestInfo | URL, init?: RequestInit) => {
+      if (typeof url === "string" && url.includes("/api/portfolio")) {
+        return new Response(
           JSON.stringify({
             portfolio: {
-              preparations: { items: [{ id: "prep-new" }], nextCursor: null },
+              preparations: { items: [{ id: "prep-preexisting" }], nextCursor: null },
             },
           }),
           { status: 200, headers: { "Content-Type": "application/json" } },
-        ),
-      );
+        );
+      }
+      return new Response("{}", {
+        status: 200,
+        headers: { "Content-Type": "application/json" },
+      });
+    });
     vi.stubGlobal("fetch", fetchMock);
-    const r = await openPreparation({ knownPreparationIds: [] });
+    const r = await openPreparationForTest();
     expect(r.kind).toBe("uncertain");
-    if (r.kind === "uncertain") expect(r.discoveredId).toBe("prep-new");
-    expect(fetchMock).toHaveBeenCalledTimes(2);
+    if (r.kind === "uncertain") {
+      expect(r.message).toMatch(/incertaine|peut-être/i);
+      expect(r.message).not.toMatch(/confirmée/i);
+      expect("discoveredId" in r).toBe(false);
+    }
     expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(1);
+    // No portfolio GET required for classification — never invent OPENED from list diff.
+    expect(fetchMock.mock.calls.filter((c) => String(c[0]).includes("/api/portfolio"))).toHaveLength(
+      0,
+    );
+  });
+
+  it("network failure stays UNCERTAIN without second POST", async () => {
+    vi.stubGlobal(
+      "fetch",
+      vi.fn(async () => {
+        throw new Error("network down");
+      }),
+    );
+    const r = await openPreparationForTest();
+    expect(r.kind).toBe("uncertain");
+    expect(fetch).toHaveBeenCalledTimes(1);
+  });
+});
+
+describe("runOpenPreparation single-flight", () => {
+  beforeEach(() => {
+    vi.restoreAllMocks();
+  });
+
+  it("serializes concurrent callers to a single POST", async () => {
+    let resolvePost!: (v: Response) => void;
+    const postGate = new Promise<Response>((r) => {
+      resolvePost = r;
+    });
+    const fetchMock = vi.fn(async (_url: RequestInfo | URL, init?: RequestInit) => {
+      if (init?.method === "POST") return postGate;
+      throw new Error("unexpected fetch");
+    });
+    vi.stubGlobal("fetch", fetchMock);
+
+    const busyStates: boolean[] = [];
+    const unsub = subscribeOpenPreparationBusy((b) => busyStates.push(b));
+
+    const navigations: string[] = [];
+    const first = runOpenPreparation(async (result) => {
+      if (result.kind === "opened") navigations.push(result.preparationId);
+    });
+    // Let first acquire the lock.
+    await Promise.resolve();
+    expect(isOpenPreparationBusy()).toBe(true);
+
+    const second = runOpenPreparation(async (result) => {
+      if (result.kind === "opened") navigations.push(`second:${result.preparationId}`);
+    });
+
+    resolvePost(
+      new Response(JSON.stringify({ preparationId: "prep-only" }), {
+        status: 200,
+        headers: { "Content-Type": "application/json" },
+      }),
+    );
+
+    const [a, b] = await Promise.all([first, second]);
+    expect(a).toEqual({ kind: "opened", preparationId: "prep-only" });
+    expect(b).toEqual({ kind: "busy" });
+    expect(navigations).toEqual(["prep-only"]);
+    expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(1);
+    expect(isOpenPreparationBusy()).toBe(false);
+    expect(busyStates).toContain(true);
+    unsub();
+  });
+
+  it("releases lock after refused so a later call can POST", async () => {
+    const fetchMock = vi
+      .fn()
+      .mockResolvedValueOnce(
+        new Response(JSON.stringify({ error: "NOPE" }), {
+          status: 500,
+          headers: { "Content-Type": "application/json" },
+        }),
+      )
+      .mockResolvedValueOnce(
+        new Response(JSON.stringify({ preparationId: "prep-2" }), {
+          status: 200,
+          headers: { "Content-Type": "application/json" },
+        }),
+      );
+    vi.stubGlobal("fetch", fetchMock);
+
+    const first = await runOpenPreparation(async () => undefined);
+    expect(first.kind).toBe("refused");
+    expect(isOpenPreparationBusy()).toBe(false);
+
+    const second = await runOpenPreparation(async () => undefined);
+    expect(second).toEqual({ kind: "opened", preparationId: "prep-2" });
+    expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(2);
   });
 });
```

---

## 8. Tests et preuves

| Suite | Résultat | Niveau |
| --- | --- | --- |
| tsc | PASS | static |
| lint | PASS (warnings préexistants) | static |
| vitest open-preparation + studio-rail | 20 PASS | UNIT / FAKE |
| Playwright UX-004+UX-003 | 20 PASS | BROWSER / FAKE |
| next build | PASS · `BG3QbxjbuMuX_NOaP0rSo` | build |

Preuves clés :
- UNIT : ACK vide → UNCERTAIN, pas de GET portfolio de confirmation, 1 POST
- UNIT : concurrence → 1 POST, 2e `busy`, 1 navigation
- BROWSER : rail+portefeuille force-click → 1 POST → sas
- BROWSER : ACK `{}` + prep préexistante → message incertaine, reste `/portfolio`, pas « confirmée », 1 POST ; refus ultérieur libère le verrou
- Pas de preuve LIVE / idempotence serveur

---

## 9. Identifiants candidat

| Champ | Valeur |
| --- | --- |
| SHA | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Tree web | `467a46216d45651063c7fdfe328f15abec9fd2fc` |
| Build | `BG3QbxjbuMuX_NOaP0rSo` |
| Parent | `fb0ac5c865f1d562a3778e207e5e8729165c5c4d` |
| Push projet | NON |
| RECETTE redeploy | NON |
| Version / STABLE / Release | NOT AVAILABLE / NOT AVAILABLE / NO RELEASE |
| Gate C | OPEN |

---

## 10. Handoff

Mode publish-in-cycle L3 via `scripts/sfia/publish-review-handoff.sh`.
*(Complété après publication distante.)*

---

## 11. Réserves

1. RECETTE sert encore `bc878568` — pas ce SHA.
2. Single-flight document-only — pas multi-onglet.
3. Pas F2/G5 mobile Morris.
4. Pas ADOPTED / clôture ML4D.
