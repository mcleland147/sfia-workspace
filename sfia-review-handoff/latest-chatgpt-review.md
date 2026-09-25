# PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
## CYCLE 9 — QA / VALIDATION — RC-05 / RC-06 AUTHENTICATED RUNTIME VISUAL CLOSURE
## FULL Review Pack — Cursor → ChatGPT

Generated: 2026-09-25T18:21:04Z
Macro: PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
Cycle: 9 — QA / VALIDATION
Profile: CRITICAL
Mode: PROOF-ONLY
Base expected: `e287f744479fc4b55c3e3082969deea7783996da`
Cursor REAL: NOT RUN
Project commit / push / PR: NOT AUTHORIZED
Secret redaction: ABSOLUTE (no Cookie header, storageState contents, tokens, GitHub raw ids)

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Repo | mcleland147/sfia-workspace |
| Branch | `feat/sfia-studio-pilot-execution-experience-recovery-simplification-01` |
| HEAD | `e287f744479fc4b55c3e3082969deea7783996da` |
| origin/main | `e287f744479fc4b55c3e3082969deea7783996da` |
| Match expected base | YES |
| Dirty candidate | YES (expected) |
| Project Git actions this pass | NONE |
| Prior handoff (pre-cycle) | commit `c7837d3c38832c0014230c33066a1ed19b9580cb` / blob `0fdd2227a0e681f92eaec7aaf54be394f434667d` |

### Attendu respecté

HEAD = origin/main = `e287f744…` — candidat dirty non committé. Aucun reset/clean/stash/commit projet/push projet/PR/merge.

---

## 2. SOURCES

Relues / utilisées : cycle template, routing guide, convergence doctrine/roadmap, product-completion cadrage, UX IA / journey / execution governance / evidence-debt, ckc/09-qa-validation, candidat TrajectorySurface + visual E2E harness + auth surfaces + review pack.

Auth Product **inchangé** cette passe : `middleware.ts`, `lib/auth/auth.ts`, `lib/auth/resolveCurrentPilote.ts` — `git diff` vide.

---

## 3. CYCLE QA CRITICAL — QUALIFICATION

| Item | Status |
|------|--------|
| GAP-14 harness operational (prior) | RETAINED |
| RC-05 deterministic unit (prior) | RETAINED |
| RC-06 deterministic unit (prior) | RETAINED |
| RC-05 authenticated runtime visual | **BLOCKED — NOT PRODUCED** |
| RC-06 authenticated runtime visual | **BLOCKED — NOT PRODUCED** |
| Product modifications this pass | **NONE** |
| QA harness adaptations this pass | visual spec + playwright CURSOR_REAL empty + Cookie type fix |

---

## 4. AUTH SURFACE DIFF REVIEW

### Conclusion

**NO PARALLEL AUTH PATH.**

- `login-client.tsx` : bouton JS `authClient.signIn.social` → lien natif `<a href="/api/auth/github-start?from=…">` (progressive enhancement).
- `app/api/auth/github-start/route.ts` : proxy GET → POST Better Auth `/api/auth/sign-in/social` (`provider: github`), forward `Set-Cookie` OAuth state, redirect vers URL Better Auth. Aucune session custom, aucune validation d’identité, aucun bypass middleware, aucune allowlist disabled, aucune manipulation de credentials.
- Route publique uniquement via enveloppe `/api/auth/*` déjà publique.
- Destination = mécanisme Better Auth / GitHub canonique existant.

### login-client.tsx — DIFF EXPLOITABLE COMPLET

```diff
diff --git a/projects/sfia-studio/app/app/login/login-client.tsx b/projects/sfia-studio/app/app/login/login-client.tsx
index 7a16900e..9dea8ffa 100644
--- a/projects/sfia-studio/app/app/login/login-client.tsx
+++ b/projects/sfia-studio/app/app/login/login-client.tsx
@@ -1,7 +1,6 @@
 "use client";
 
 import { useMemo } from "react";
-import { authClient } from "@/lib/auth/auth-client";
 
 const ERROR_MESSAGES: Record<string, string> = {
   github_user_not_allowlisted:
@@ -38,6 +37,8 @@ export function LoginClient({
       ? fromPath
       : "/studio";
 
+  const githubStartHref = `/api/auth/github-start?from=${encodeURIComponent(callbackURL)}`;
+
   return (
     <div
       style={{
@@ -46,7 +47,8 @@ export function LoginClient({
         alignItems: "center",
         justifyContent: "center",
         padding: "2rem",
-        background: "linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #0f172a 100%)",
+        background:
+          "linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #0f172a 100%)",
         color: "#e2e8f0",
         fontFamily: "var(--font-inter), system-ui, sans-serif",
       }}
@@ -97,17 +99,18 @@ export function LoginClient({
           </p>
         ) : null}
 
-        <button
-          type="button"
+        {/*
+          Native <a> — OAuth must work even when client chunks fail to hydrate
+          (observed: /_next/.../login/page.js → 404 left a dead <button>).
+          No preventDefault: href always navigates to public /api/auth/github-start.
+        */}
+        <a
+          href={githubStartHref}
           data-testid="login-github"
-          onClick={() => {
-            void authClient.signIn.social({
-              provider: "github",
-              callbackURL,
-            });
-          }}
           style={{
+            display: "block",
             width: "100%",
+            boxSizing: "border-box",
             border: 0,
             borderRadius: "8px",
             padding: "0.85rem 1rem",
@@ -115,10 +118,12 @@ export function LoginClient({
             color: "#0f172a",
             fontWeight: 600,
             cursor: "pointer",
+            textAlign: "center",
+            textDecoration: "none",
           }}
         >
           Se connecter avec GitHub
-        </button>
+        </a>
       </main>
     </div>
   );

```

### github-start/route.ts — CONTENU COMPLET (fichier nouveau)

```typescript
import { NextRequest, NextResponse } from "next/server";

/**
 * Progressive-enhancement GitHub OAuth start (works without client JS hydration).
 * Lives under /api/auth/* so middleware public allowlist applies (no middleware edit).
 * Proxies Better Auth sign-in/social and forwards Set-Cookie (OAuth state).
 */
export async function GET(request: NextRequest) {
  const from = request.nextUrl.searchParams.get("from");
  const callbackURL =
    from && from.startsWith("/") && !from.startsWith("//") ? from : "/studio";
  const origin = request.nextUrl.origin;

  try {
    const res = await fetch(`${origin}/api/auth/sign-in/social`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        cookie: request.headers.get("cookie") ?? "",
        origin,
      },
      body: JSON.stringify({ provider: "github", callbackURL }),
      redirect: "manual",
      cache: "no-store",
    });

    const data = (await res.json().catch(() => null)) as {
      url?: string;
    } | null;

    if (!data?.url || typeof data.url !== "string") {
      return NextResponse.redirect(
        new URL("/login?error=AUTH_CONFIG_ERROR", origin),
      );
    }

    const redirect = NextResponse.redirect(data.url);
    const setCookies =
      typeof res.headers.getSetCookie === "function"
        ? res.headers.getSetCookie()
        : [];
    if (setCookies.length > 0) {
      for (const cookie of setCookies) {
        redirect.headers.append("Set-Cookie", cookie);
      }
    } else {
      const single = res.headers.get("set-cookie");
      if (single) redirect.headers.append("Set-Cookie", single);
    }
    return redirect;
  } catch {
    return NextResponse.redirect(
      new URL("/login?error=AUTH_CONFIG_ERROR", origin),
    );
  }
}

```

---

## 5. RC-05 AUTHENTICATED RUNTIME

### Scenario attempted

1. REAL Better Auth session (`studio-storage-state.json` PRESENT) @ `http://localhost:3020`
2. Create project → qualify `__F2_GATED_STANDARD__` (fake provider)
3. Reach Options + Recommendation → HumanDecision → capture before/after

### Blocker (Product)

After qualification (authenticated Pilote):

| CTA | Visible | Server result |
|-----|---------|---------------|
| `lifecycle-start-cta` (« Démarrer ») | YES / enabled | `CYCLE_START_NOT_READY` — « START refused — candidate is not ready to become ACTIVE authority. » |
| `w2-instruct-recoverable-options` (« Instruire les options ») | YES | `CYCLE_NOT_QUALIFIED` — « Aucun cycle qualifié n'est actif — la qualification doit précéder les options. » |

**Deadlock :** START refused ∧ options require active cycle ⇒ cannot reach Options+Recommendation ⇒ cannot take HumanDecision ⇒ cannot prove RC-05 collapse visually.

### Captures

| File | Status |
|------|--------|
| rc05-before-decision-1440.png | NOT PRODUCED |
| rc05-after-decision-1440.png | NOT PRODUCED |
| rc05-after-decision-1600.png | NOT PRODUCED |

### Verdict

**RC-05 — AUTHENTICATED RUNTIME VISUAL PROOF FAIL / BLOCKED**

STOP — MORRIS DECISION REQUIRED (Product defect / flow deadlock; no Product fix authorized in this QA cycle).

---

## 6. RC-06 AUTHENTICATED RUNTIME

### Scenario attempted

Same authenticated bootstrap → FAIL path via W3B adapter arm → recovery GOVERNED → auto-PREPARE → Exécuter visible (no click).

### Blocker

Same deadlock prevents reaching first ExecutionContract / Attempt. Structural recovery therefore unreachable without Product change or alternate seam not available under REAL auth + deterministic gates.

Note: unauthenticated dirty-principal W3-C E2E also fails now (`/studio` → login) — confirms Better Auth wall; cannot fall back to prior dirty-principal visual path without auth bypass (forbidden).

### Captures

| File | Status |
|------|--------|
| rc06-recovery-ready-1440.png | NOT PRODUCED |
| rc06-recovery-ready-1600.png | NOT PRODUCED |

### Attempt count before Exécuter

N/A — state not reached.

### Verdict

**RC-06 — AUTHENTICATED RUNTIME VISUAL PROOF FAIL / BLOCKED**

STOP — MORRIS DECISION REQUIRED.

---

## 7. LAYOUT

Not re-measured on RC-05/RC-06 target states (unreachable). Prior GAP-14 authenticated layout measurements remain reference only (not reclaimed as this-pass proof).

---

## 8. PRODUCT MODIFICATIONS THIS PASS

**NONE.**

QA-only adaptations:
- `e2e/pilot-execution-experience-visual.spec.ts` (RC-05/RC-06 scenarios)
- `playwright.config.ts` (force empty `SFIA_STUDIO_CURSOR_REAL` / `OPS1_CURSOR_REAL` so W3B arming works when parent env has CURSOR_REAL=1)
- `e2e/support/authenticatedStudioSession.ts` (Cookie inject type = addCookies shape)

Evidence artifact: `.tmp-sfia-review/pilot-execution-experience-visual/rc05-rc06-blockers.json`

---

## 9. VALIDATIONS

| Check | Result |
|-------|--------|
| `npm run e2e:visual:auth` | 2 failed — blocked at options (see §5–§6) |
| `npm run typecheck` | PASS (after Cookie type fix) |
| `git diff --check` | PASS (candidate) |
| Critical 165 / pre-m6 129 (prior) | Referenced as prior only; Product diff unchanged this pass except N/A — candidate Product files remain dirty from earlier Delivery cycles, **not modified this QA pass** |

---

## 10. FULL MODIFIED CONTENT / EXPLOITABLE DIFF

### playwright.config.ts

```diff
diff --git a/projects/sfia-studio/app/playwright.config.ts b/projects/sfia-studio/app/playwright.config.ts
index 584d588f..e72e7ec5 100644
--- a/projects/sfia-studio/app/playwright.config.ts
+++ b/projects/sfia-studio/app/playwright.config.ts
@@ -1,9 +1,12 @@
 import { defineConfig, devices } from "@playwright/test";
 
 const playwrightPort = process.env.PLAYWRIGHT_PORT?.trim() || "3020";
+// Align with Better Auth local origin (BETTER_AUTH_URL default = localhost:3020).
+// Authenticated visual QA must not default to 127.0.0.1 (cookie host mismatch).
 const baseURL =
   process.env.PLAYWRIGHT_BASE_URL?.trim() ||
-  `http://127.0.0.1:${playwrightPort}`;
+  `http://localhost:${playwrightPort}`;
+const baseHost = new URL(baseURL).hostname;
 
 export default defineConfig({
   testDir: "./e2e",
@@ -19,7 +22,7 @@ export default defineConfig({
     viewport: { width: 1440, height: 1024 },
   },
   webServer: {
-    command: `npm run dev -- --hostname 127.0.0.1 --port ${playwrightPort}`,
+    command: `npm run dev -- --hostname ${baseHost} --port ${playwrightPort}`,
     url: baseURL,
     reuseExistingServer:
       process.env.PLAYWRIGHT_FORCE_WEBSERVER === "1" ? false : !process.env.CI,
@@ -31,6 +34,10 @@ export default defineConfig({
       // Local Pilote authority TEMPORARY WITH EXIT — required for /studio HD path.
       SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY: "1",
       D1_INTAKE_PROVIDER: process.env.D1_INTAKE_PROVIDER || "fake",
+      // Deterministic E2E must never inherit a parent CURSOR_REAL=1 gate
+      // (disables W3-B boundary arming / recovery FAIL fixtures).
+      SFIA_STUDIO_CURSOR_REAL: "",
+      OPS1_CURSOR_REAL: "",
       // Default E2E: fake provider. Real live capture/smoke: OPS1_ALLOW_LIVE_SMOKE=1
       // without forcing fake (secrets must already be in the environment).
       ...(process.env.OPS1_ALLOW_LIVE_SMOKE === "1"

```

### package.json

```diff
diff --git a/projects/sfia-studio/app/package.json b/projects/sfia-studio/app/package.json
index 302de252..a86f44f6 100644
--- a/projects/sfia-studio/app/package.json
+++ b/projects/sfia-studio/app/package.json
@@ -14,6 +14,8 @@
     "test": "vitest run",
     "test:watch": "vitest",
     "test:e2e": "playwright test",
+    "e2e:auth:bootstrap": "PLAYWRIGHT_BASE_URL=http://localhost:3020 tsx scripts/e2e-auth-bootstrap.ts",
+    "e2e:visual:auth": "PLAYWRIGHT_BASE_URL=http://localhost:3020 playwright test e2e/pilot-execution-experience-visual.spec.ts",
     "test:db": "vitest run __tests__/oa/finops/postgres",
     "migrate:up": "node-pg-migrate up --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT",
     "migrate:down": "node-pg-migrate down --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT",

```

### authenticatedStudioSession.ts (full file — QA harness)

```typescript
/**
 * GAP-14 — Playwright helper: inject a REAL Better Auth session into BrowserContext.
 *
 * Product middleware / auth.ts remain unchanged. This only loads a local cookie
 * file obtained via human GitHub OAuth bootstrap.
 *
 * Never logs cookie values. Never invents sessions.
 */
import fs from "node:fs";
import path from "node:path";
import type { BrowserContext, Page } from "@playwright/test";

/** Cookie shape accepted by BrowserContext.addCookies (url OR domain+path). */
export type StudioInjectCookie = {
  name: string;
  value: string;
  url?: string;
  domain?: string;
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
  expires?: number;
};

export const AUTHENTICATED_VISUAL_SESSION_INVALID_OR_EXPIRED =
  "AUTHENTICATED_VISUAL_SESSION_INVALID_OR_EXPIRED";

/**
 * Authenticated visual QA must share the Better Auth local origin.
 * Product default / .env.example: BETTER_AUTH_URL=http://localhost:3020
 * Do NOT default to 127.0.0.1 — cookies would not bind to the Auth host.
 */
export const AUTH_VISUAL_BASE_URL_DEFAULT = "http://localhost:3020";

export function resolveAuthVisualBaseURL(
  override?: string | null,
): string {
  const fromOverride = override?.trim();
  if (fromOverride) return fromOverride.replace(/\/$/, "");
  const fromEnv = process.env.PLAYWRIGHT_BASE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return AUTH_VISUAL_BASE_URL_DEFAULT;
}

/** Fail closed when BETTER_AUTH_URL (if set) disagrees with the visual base origin. */
export function assertBetterAuthUrlAlignedWithVisualBase(
  baseURL: string = resolveAuthVisualBaseURL(),
): { ok: true; baseURL: string; betterAuthUrl: string | null } {
  const better =
    process.env.BETTER_AUTH_URL?.trim().replace(/\/$/, "") || null;
  if (!better) {
    return { ok: true, baseURL, betterAuthUrl: null };
  }
  const visualOrigin = new URL(baseURL).origin;
  const authOrigin = new URL(better).origin;
  if (visualOrigin !== authOrigin) {
    throw new Error(
      `AUTH_VISUAL_BASE_URL_MISMATCH: PLAYWRIGHT/visual base origin=${visualOrigin} BETTER_AUTH_URL origin=${authOrigin} — use http://localhost:3020 for both`,
    );
  }
  return { ok: true, baseURL, betterAuthUrl: better };
}

const BETTER_AUTH_SESSION_MARKERS = [
  "better-auth.session",
  "better-auth.session_token",
  "__Secure-better-auth.session",
  "__Secure-better-auth.session_token",
] as const;

export type CookieFileStatus = "MISSING" | "EMPTY" | "INVALID" | "PRESENT";

export function resolveAuthCookieFilePath(): string | null {
  const fromEnv = process.env.SFIA_AUTH_REAL_COOKIE_FILE?.trim();
  if (fromEnv) return fromEnv;
  const localDefault = path.resolve(
    process.cwd(),
    "../../../.tmp-sfia-review/auth/studio-cookie.txt",
  );
  if (fs.existsSync(localDefault)) return localDefault;
  return null;
}

export function resolveAuthStorageStatePath(): string | null {
  const fromEnv = process.env.SFIA_AUTH_STORAGE_STATE_FILE?.trim();
  if (fromEnv) return fromEnv;
  const localDefault = path.resolve(
    process.cwd(),
    "../../../.tmp-sfia-review/auth/studio-storage-state.json",
  );
  if (fs.existsSync(localDefault)) return localDefault;
  return null;
}

/** Status only — never returns cookie contents. */
export function inspectAuthCookieFileStatus(
  filePath: string | null = resolveAuthCookieFilePath(),
): CookieFileStatus {
  if (!filePath || !fs.existsSync(filePath)) return "MISSING";
  const raw = fs.readFileSync(filePath, "utf8").trim();
  if (!raw) return "EMPTY";
  const lower = raw.toLowerCase();
  const hasSession = BETTER_AUTH_SESSION_MARKERS.some((m) =>
    lower.includes(m.toLowerCase()),
  );
  if (!hasSession) return "INVALID";
  return "PRESENT";
}

/**
 * Parse a Cookie request-header string into Playwright Cookie objects.
 * Pure — does not log values.
 */
export function parseCookieHeaderToPlaywrightCookies(
  cookieHeader: string,
  baseURL: string,
): StudioInjectCookie[] {
  const trimmed = cookieHeader.trim();
  if (!trimmed) {
    throw new Error("AUTH_COOKIE_HEADER_EMPTY");
  }
  const lower = trimmed.toLowerCase();
  const hasSession = BETTER_AUTH_SESSION_MARKERS.some((m) =>
    lower.includes(m.toLowerCase()),
  );
  if (!hasSession) {
    throw new Error("AUTH_COOKIE_HEADER_MISSING_BETTER_AUTH_SESSION");
  }

  const url = new URL(baseURL);
  const secure = url.protocol === "https:";
  const cookies: StudioInjectCookie[] = [];

  for (const part of trimmed.split(";")) {
    const segment = part.trim();
    if (!segment) continue;
    const eq = segment.indexOf("=");
    if (eq <= 0) continue;
    const name = segment.slice(0, eq).trim();
    const value = segment.slice(eq + 1).trim();
    if (!name || !value) continue;
    // Cookie header dump may include third-party OAuth host cookies
    // (github.com, etc.). Only inject Studio Better Auth cookies for the
    // visual origin — avoids Invalid cookie fields (__Host-*, wrong domain).
    const lowerName = name.toLowerCase();
    if (
      !lowerName.includes("better-auth.session") &&
      !lowerName.includes("better-auth.account")
    ) {
      continue;
    }
    // Prefer url over domain for localhost — Playwright rejects some domain forms.
    cookies.push({
      name,
      value,
      url: `${url.origin}/`,
      path: "/",
      httpOnly: lowerName.includes("session"),
      secure,
      sameSite: "Lax",
      expires: -1,
    });
  }

  if (cookies.length === 0) {
    throw new Error("AUTH_COOKIE_HEADER_PARSE_EMPTY");
  }
  // Ensure at least one Better Auth session marker survived filtering.
  const hasSessionCookie = cookies.some((c) =>
    BETTER_AUTH_SESSION_MARKERS.some((m) =>
      c.name.toLowerCase().includes(m.toLowerCase().replace(/^__secure-/, "")),
    ),
  );
  if (!hasSessionCookie) {
    throw new Error("AUTH_COOKIE_HEADER_MISSING_BETTER_AUTH_SESSION");
  }
  return cookies;
}

export async function applyAuthenticatedStudioCookies(
  context: BrowserContext,
  options?: {
    cookieFilePath?: string | null;
    baseURL?: string;
  },
): Promise<{ status: "APPLIED" }> {
  const filePath = options?.cookieFilePath ?? resolveAuthCookieFilePath();
  const status = inspectAuthCookieFileStatus(filePath);
  if (status !== "PRESENT" || !filePath) {
    throw new Error(
      `AUTH_VISUAL_SESSION_UNAVAILABLE:${status} — run npm run e2e:auth:bootstrap`,
    );
  }
  const baseURL = resolveAuthVisualBaseURL(options?.baseURL);
  assertBetterAuthUrlAlignedWithVisualBase(baseURL);
  const header = fs.readFileSync(filePath, "utf8").trim();
  const cookies = parseCookieHeaderToPlaywrightCookies(header, baseURL);
  // domain = URL hostname (localhost, not 127.0.0.1) — matches Better Auth cookies.
  await context.addCookies(cookies);
  return { status: "APPLIED" };
}

/**
 * Open /studio and fail closed if redirected to login.
 * Does not print cookie values.
 */
export async function gotoAuthenticatedStudio(
  page: Page,
  options?: { path?: string },
): Promise<void> {
  const pathTarget = options?.path ?? "/studio";
  await page.goto(pathTarget, { waitUntil: "domcontentloaded" });
  const url = page.url();
  if (url.includes("/login")) {
    throw new Error(AUTHENTICATED_VISUAL_SESSION_INVALID_OR_EXPIRED);
  }
  // Prefer home marker; tolerate project workspace as success.
  const home = page.getByTestId("studio-projects-home");
  const workspace = page.getByTestId("project-workspace-layout");
  const either = home.or(workspace);
  await either.first().waitFor({ state: "visible", timeout: 30_000 });
}

```

### e2e-auth-bootstrap.ts (full file — QA harness; no secret values)

```typescript
/**
 * GAP-14 — headed bootstrap: Morris completes GitHub OAuth once; session saved locally.
 * Never prints cookie/storage secrets. Never automates GitHub credentials.
 *
 * Host alignment (required):
 *   Better Auth / BETTER_AUTH_URL = http://localhost:3020
 *   Bootstrap + Playwright visual harness must use the same origin (not 127.0.0.1).
 *
 * Interaction model:
 *   Launch a REAL system browser (Brave preferred) with remote debugging,
 *   then attach Playwright via CDP. Playwright-launched Chromium is NOT used
 *   for the human click — it blocks / feels unclickable in Cursor setups.
 *
 * Usage (from projects/sfia-studio/app):
 *   npm run e2e:auth:bootstrap
 */
import fs from "node:fs";
import path from "node:path";
import { spawn, type ChildProcess } from "node:child_process";
import { chromium, type Browser } from "@playwright/test";
import {
  assertBetterAuthUrlAlignedWithVisualBase,
  resolveAuthVisualBaseURL,
} from "../e2e/support/authenticatedStudioSession";

const AUTH_DIR = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/auth",
);
const COOKIE_FILE = path.join(AUTH_DIR, "studio-cookie.txt");
const STORAGE_FILE = path.join(AUTH_DIR, "studio-storage-state.json");
const PROFILE_DIR = path.join(AUTH_DIR, "browser-profile");
const DEBUG_PORT = Number(process.env.SFIA_AUTH_BOOTSTRAP_CDP_PORT || "9333");
const BASE = resolveAuthVisualBaseURL();

const CANDIDATE_BROWSERS = [
  {
    name: "Brave",
    bin: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  },
  {
    name: "Chrome",
    bin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  },
  {
    name: "Edge",
    bin: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  },
  {
    name: "Chromium",
    bin: "/Applications/Chromium.app/Contents/MacOS/Chromium",
  },
] as const;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function resolveSystemBrowser(): { name: string; bin: string } {
  for (const c of CANDIDATE_BROWSERS) {
    if (fs.existsSync(c.bin)) return c;
  }
  throw new Error(
    "AUTH_BOOTSTRAP_NO_SYSTEM_BROWSER — install Brave or Chrome. " +
      "Do not use the Cursor embedded browser for GitHub OAuth.",
  );
}

async function connectCdp(timeoutMs: number): Promise<Browser> {
  const deadline = Date.now() + timeoutMs;
  let lastErr: unknown;
  while (Date.now() < deadline) {
    try {
      return await chromium.connectOverCDP(`http://127.0.0.1:${DEBUG_PORT}`);
    } catch (err) {
      lastErr = err;
      await sleep(400);
    }
  }
  throw new Error(
    `AUTH_BOOTSTRAP_CDP_CONNECT_FAILED port=${DEBUG_PORT}: ${
      lastErr instanceof Error ? lastErr.message : "unknown"
    }`,
  );
}

async function main() {
  assertBetterAuthUrlAlignedWithVisualBase(BASE);
  fs.mkdirSync(AUTH_DIR, { recursive: true });
  fs.mkdirSync(PROFILE_DIR, { recursive: true });

  const browserApp = resolveSystemBrowser();
  console.log("AUTH BOOTSTRAP — opening a REAL system browser (clickable).");
  console.log(`browser=${browserApp.name}`);
  console.log(`Navigate target: ${BASE}/login`);
  console.log("IMPORTANT: click in that browser window — NOT in Cursor preview.");
  console.log("Click « Se connecter avec GitHub », finish OAuth until /studio…");

  let child: ChildProcess | null = null;
  let browser: Browser | null = null;

  try {
    child = spawn(
      browserApp.bin,
      [
        `--remote-debugging-port=${DEBUG_PORT}`,
        `--user-data-dir=${PROFILE_DIR}`,
        "--no-first-run",
        "--no-default-browser-check",
        "--new-window",
        `${BASE}/login`,
      ],
      {
        detached: true,
        stdio: "ignore",
      },
    );
    child.unref();

    browser = await connectCdp(30_000);
    const context = browser.contexts()[0] ?? (await browser.newContext());
    let page = context.pages()[0];
    if (!page) {
      page = await context.newPage();
      await page.goto(`${BASE}/login`, { waitUntil: "domcontentloaded" });
    } else if (!page.url().includes("/login") && !page.url().includes("/studio")) {
      await page.goto(`${BASE}/login`, { waitUntil: "domcontentloaded" });
    }

    await page.waitForURL(
      (url) => {
        const href = url.toString();
        return href.includes("/studio") && !href.includes("/login");
      },
      { timeout: 10 * 60_000 },
    );

  await context.storageState({ path: STORAGE_FILE });

  // Persist only Studio Better Auth cookies for Cookie-header inject fallback.
  // Never dump github.com / third-party host cookies into the local cookie file.
  const cookies = await context.cookies();
  const studioCookies = cookies.filter((c) => {
    const n = c.name.toLowerCase();
    return n.includes("better-auth.session") || n.includes("better-auth.account");
  });
  const header = studioCookies.map((c) => `${c.name}=${c.value}`).join("; ");
  const lower = header.toLowerCase();
  if (!lower.includes("better-auth.session")) {
    console.error("AUTH BOOTSTRAP FAILED — Better Auth session cookie missing.");
    process.exitCode = 1;
    return;
  }
  fs.writeFileSync(COOKIE_FILE, `${header}\n`, { mode: 0o600 });

  console.log("AUTH SESSION SAVED");
  console.log(
    "cookie_file_status=PRESENT path_hint=.tmp-sfia-review/auth/studio-cookie.txt",
  );
  console.log(
    "storage_state_status=PRESENT path_hint=.tmp-sfia-review/auth/studio-storage-state.json",
  );
  console.log(`visual_base_url=${BASE}`);
  console.log(`studio_cookie_count=${studioCookies.length}`);
} finally {
    try {
      await browser?.close();
    } catch {
      /* ignore */
    }
    if (child?.pid) {
      try {
        process.kill(child.pid);
      } catch {
        /* ignore */
      }
    }
  }
}

main().catch((err) => {
  console.error(
    "AUTH BOOTSTRAP ERROR:",
    err instanceof Error ? err.message : "unknown",
  );
  process.exit(1);
});

```

### pilot-execution-experience-visual.spec.ts (full file — QA harness)

```typescript
/**
 * PILOT-EXEC authenticated visual QA — GAP-14 + RC-05 + RC-06 runtime closure.
 * REAL Better Auth session. ZERO Cursor REAL. Execution deterministic only.
 *
 * Skips when no local session file is PRESENT.
 */
import { test, expect, type Page } from "@playwright/test";
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
import {
  armW3bAdapterFail,
  clearW3bBoundary,
} from "./support/w3bBoundaryControl";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/pilot-execution-experience-visual",
);

const cookieStatus = inspectAuthCookieFileStatus();
const storagePath = resolveAuthStorageStatePath();
const hasStorage =
  Boolean(storagePath) &&
  fs.existsSync(storagePath!) &&
  fs.statSync(storagePath!).size > 0;
const sessionReady = cookieStatus === "PRESENT" || hasStorage;

type CaptureMeta = {
  state: string;
  observation: string;
  projectIdRedacted?: string;
  extra?: Record<string, unknown>;
};

async function capture(
  page: Page,
  id: string,
  viewport: { width: number; height: number },
  meta: CaptureMeta,
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  await page.setViewportSize(viewport);
  await page.waitForTimeout(350);
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: false });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth };
  });
  const layout = await page.evaluate(() => {
    const root = document.querySelector(
      '[data-testid="project-workspace-layout"]',
    ) as HTMLElement | null;
    if (!root) return null;
    const kids = Array.from(root.children) as HTMLElement[];
    return {
      cols: getComputedStyle(root).gridTemplateColumns,
      childWidths: kids.map((k) => Math.round(k.getBoundingClientRect().width)),
      width: Math.round(root.getBoundingClientRect().width),
    };
  });
  const rail = await page.evaluate(() => {
    const panel = document.querySelector(
      '[data-testid="w2-trajectory-panel"]',
    ) as HTMLElement | null;
    if (!panel) return null;
    return {
      scrollHeight: panel.scrollHeight,
      clientHeight: panel.clientHeight,
      scrollTop: panel.scrollTop,
    };
  });
  fs.appendFileSync(
    path.join(CAPTURE_ROOT, "manifest.jsonl"),
    `${JSON.stringify({
      id,
      file: path.basename(file),
      sha256,
      viewport,
      url: page.url().replace(/prj%3A[a-f0-9-]+/gi, "prj%3AREDACTED"),
      state: meta.state,
      observation: meta.observation,
      projectIdRedacted: meta.projectIdRedacted ?? "REDACTED",
      overflow,
      layout,
      rail,
      extra: meta.extra ?? null,
      timestamp: new Date().toISOString(),
    })}\n`,
  );
  return { file, sha256, overflow, layout, rail };
}

async function assertNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

async function openQualifiedProject(page: Page, name: string) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await gotoAuthenticatedStudio(page);
  await page.goto("/studio/projects/new", { waitUntil: "networkidle" });
  if (page.url().includes("/login")) {
    throw new Error("AUTHENTICATED_VISUAL_SESSION_INVALID_OR_EXPIRED");
  }
  await expect(page.getByTestId("create-project-form")).toBeVisible({
    timeout: 30_000,
  });
  // Wait for client hydration (idempotency key enables submit) before fill —
  // filling pre-hydration gets wiped when React mounts controlled state.
  await expect(page.getByTestId("create-project-submit")).toBeEnabled({
    timeout: 15_000,
  });
  const nameInput = page.locator("#project-name");
  const objectiveInput = page.locator("#project-objective");
  const contextInput = page.locator("#project-context");
  await nameInput.click();
  await nameInput.fill(name);
  await objectiveInput.click();
  await objectiveInput.fill(
    "QA Critical RC-05/RC-06 authenticated visual — ZERO REAL",
  );
  await contextInput.click();
  await contextInput.fill("REAL=0 DETERMINISTIC");
  await expect(nameInput).toHaveValue(name);
  await expect(objectiveInput).toHaveValue(/QA Critical RC-05/);
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 45_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-workspace-layout")).toBeVisible({
    timeout: 45_000,
  });

  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 20_000 });
  await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
    timeout: 90_000,
  });

  // Real authenticated Pilote may still need to start the proposed cycle
  // before Project W2 options (dirty-principal E2E often already has one).
  const startCycle = page.getByTestId("lifecycle-start-cta");
  if (await startCycle.isVisible().catch(() => false)) {
    await startCycle.click();
    await expect(startCycle).toBeHidden({ timeout: 60_000 }).catch(() => undefined);
  }
  const preStart = page.getByTestId("pre-cycle-start-cycle");
  if (await preStart.isVisible().catch(() => false)) {
    await preStart.click();
    await expect(preStart).toBeHidden({ timeout: 60_000 }).catch(() => undefined);
  }

  const trajectory = page.getByTestId("w2-trajectory-panel");
  await expect(trajectory).toBeVisible({ timeout: 20_000 });
  await trajectory.scrollIntoViewIfNeeded();
}

async function proposeOptions(page: Page) {
  const projectPropose = page.getByTestId("w2-propose-options");
  const proposalPropose = page.getByTestId("w2-instruct-recoverable-options");
  const recoveryPropose = page.getByTestId("w3c-propose-trajectory");
  await expect(
    projectPropose.or(proposalPropose).or(recoveryPropose),
  ).toBeVisible({ timeout: 60_000 });
  if (await projectPropose.isVisible().catch(() => false)) {
    await projectPropose.click();
  } else if (await proposalPropose.isVisible().catch(() => false)) {
    await proposalPropose.click();
  } else {
    await recoveryPropose.click();
  }
  await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 90_000 });
  await expect(page.getByTestId("w2-recommendation")).toBeVisible();
}

/** Reach Exécuter without launching Attempt (confirm/authorize or simplified CTA). */
async function reachExecuteReady(page: Page) {
  await expect(page.getByTestId("w2-contract")).toBeVisible({
    timeout: 60_000,
  });
  // Prefer simplified pilot CTA after auto-inspect.
  const pilotExec = page.getByTestId("w2-pilot-execute");
  const governedExec = page.getByTestId("w3a-governed-execute");
  try {
    await expect(pilotExec.or(governedExec)).toBeVisible({ timeout: 20_000 });
    return;
  } catch {
    // Fall through — classic inspect/confirm/authorize.
  }
  const inspectBtn = page.getByTestId("w2-inspect-contract");
  if ((await inspectBtn.count()) && (await inspectBtn.isVisible())) {
    await inspectBtn.click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
  }
  if (await pilotExec.isVisible().catch(() => false)) return;
  const confirm = page.getByTestId("w2-confirm-contract");
  if ((await confirm.count()) && (await confirm.isVisible())) {
    await confirm.click();
    await expect(page.getByTestId("w2-contract-status")).toContainText(
      /Confirmation|confirm/i,
      { timeout: 30_000 },
    );
  }
  const authz = page.getByTestId("w2-authorize-contract");
  if ((await authz.count()) && (await authz.isVisible())) {
    await authz.click();
  }
  await expect(pilotExec.or(governedExec)).toBeVisible({ timeout: 60_000 });
}

async function clickExecute(page: Page) {
  const pilotExec = page.getByTestId("w2-pilot-execute");
  if (await pilotExec.isVisible().catch(() => false)) {
    await pilotExec.click();
    return;
  }
  await page.getByTestId("w3a-governed-execute").click();
}

test.describe("PILOT-EXEC authenticated visual QA", () => {
  test.describe.configure({ timeout: 420_000 });

  test.skip(
    !sessionReady,
    "AUTH VISUAL BOOTSTRAP REQUIRED — npm run e2e:auth:bootstrap",
  );

  test.use(
    hasStorage && storagePath
      ? { storageState: storagePath }
      : {},
  );

  test.beforeEach(async ({ context, page, request }) => {
    if (cookieStatus === "PRESENT" && !hasStorage) {
      await applyAuthenticatedStudioCookies(context, {
        cookieFilePath: resolveAuthCookieFilePath(),
      });
    }
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
    await clearW3bBoundary(request).catch(() => undefined);
  });

  test.afterEach(async ({ request }) => {
    await clearW3bBoundary(request).catch(() => undefined);
  });

  test("RC-05 — before/after HumanDecision collapse (authenticated)", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    // Append mode — keep prior captures; write a section marker
    fs.appendFileSync(
      path.join(CAPTURE_ROOT, "manifest.jsonl"),
      `${JSON.stringify({ marker: "RC-05-START", timestamp: new Date().toISOString() })}\n`,
    );

    await openQualifiedProject(page, `RC05 Visual ${Date.now()}`);
    await proposeOptions(page);

    // BEFORE decision — options + recommendation primary
    await expect(page.getByTestId("w2-decision")).toHaveCount(0);
    await expect(page.getByTestId("w2-decision-history")).toHaveCount(0);
    const before = await capture(page, "rc05-before-decision-1440", {
      width: 1440,
      height: 900,
    }, {
      state: "options+recommendation pre-HD",
      observation: "Options and Recommendation primary before HumanDecision",
    });
    expect(before.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);

    // Decide first available option (any HD triggers RC-05 collapse)
    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({
      timeout: 60_000,
    });

    // AFTER — history collapsed; present dominant
    const history = page.getByTestId("w2-decision-history");
    await expect(history).toBeVisible();
    const historyOpen = await history.evaluate(
      (el) => (el as HTMLDetailsElement).open,
    );
    expect(historyOpen).toBe(false);
    // Primary options/recommendation gone
    await expect(page.getByTestId("w2-options")).toHaveCount(0);
    await expect(page.getByTestId("w2-recommendation")).toHaveCount(0);
    // History retains provenance
    await expect(page.getByTestId("w2-options-history")).toBeAttached();
    await expect(page.getByTestId("w2-decision-recorded")).toBeVisible();

    const after1440 = await capture(page, "rc05-after-decision-1440", {
      width: 1440,
      height: 900,
    }, {
      state: "post-HD collapsed",
      observation:
        "History closed by default; present decision/next step dominant",
      extra: { historyOpen: false },
    });
    expect(after1440.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);

    const after1600 = await capture(page, "rc05-after-decision-1600", {
      width: 1600,
      height: 1000,
    }, {
      state: "post-HD collapsed large desktop",
      observation: "Collapse retained at 1600; no overflow",
    });
    expect(after1600.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);

    // Layout targets when three-col present
    if (after1440.layout?.childWidths?.length === 3) {
      const [j, c, r] = after1440.layout.childWidths;
      expect(j).toBeGreaterThanOrEqual(260);
      expect(j).toBeLessThanOrEqual(300);
      expect(c).toBeGreaterThanOrEqual(600);
      expect(r).toBeGreaterThanOrEqual(500);
      expect(r).toBeLessThanOrEqual(560);
    }
  });

  test("RC-06 — structural recovery HD → auto-PREPARE → Exécuter (authenticated)", async ({
    page,
    request,
  }) => {
    fs.appendFileSync(
      path.join(CAPTURE_ROOT, "manifest.jsonl"),
      `${JSON.stringify({ marker: "RC-06-START", timestamp: new Date().toISOString() })}\n`,
    );

    await openQualifiedProject(page, `RC06 Visual ${Date.now()}`);
    await proposeOptions(page);

    // First decision: prefer GOVERNED for auto-PREPARE path
    const governed = page.getByTestId(
      "w2-decide-opt:trajectory:governed-gated",
    );
    if (await governed.count()) {
      await governed.click();
    } else {
      await page.locator("[data-testid^='w2-decide-']").first().click();
    }
    await expect(page.getByTestId("w2-decision")).toBeVisible({
      timeout: 60_000,
    });

    // Setup first Attempt: auto-PREPARE or secondary resume
    const contract = page.getByTestId("w2-contract");
    const resume = page.getByTestId("w2-prepare-contract-sandbox");
    try {
      await expect(contract).toBeVisible({ timeout: 45_000 });
    } catch {
      if (await resume.count()) {
        await resume.click();
        await expect(contract).toBeVisible({ timeout: 45_000 });
      } else {
        throw new Error("RC06_SETUP_NO_CONTRACT_AFTER_FIRST_DECISION");
      }
    }

    await reachExecuteReady(page);

    // Deterministic FAIL (no Cursor REAL)
    await armW3bAdapterFail(request, "rc06_visual_adapter_fail");
    await clickExecute(page);
    await expect(page.getByTestId("w3b-product-outcome")).toBeVisible({
      timeout: 120_000,
    });
    await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByTestId("w3c-propose-trajectory")).toBeVisible({
      timeout: 30_000,
    });

    // Structural recovery OptionSet
    await page.getByTestId("w3c-propose-trajectory").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({
      timeout: 90_000,
    });

    // HumanDecision GOVERNED recovery → RC-06 auto-PREPARE
    await page.getByTestId("w2-decide-opt:trajectory:governed-gated").click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({
      timeout: 60_000,
    });

    await expect(page.getByTestId("w2-contract")).toBeVisible({
      timeout: 60_000,
    });
    await expect(
      page.getByTestId("w3a-prepare-execution-from-decision"),
    ).toHaveCount(0);
    await expect(page.getByTestId("w2-prepare-contract-sandbox")).toHaveCount(0);
    await expect(
      page.getByText("Préparer le contrat d'exécution", { exact: true }),
    ).toHaveCount(0);

    // Exécuter visible (simplified CTA or after confirm/authorize) — no click
    await reachExecuteReady(page);
    const executeVisible = await page
      .getByTestId("w2-pilot-execute")
      .or(page.getByTestId("w3a-governed-execute"))
      .isVisible();
    expect(executeVisible).toBe(true);

    // No new Attempt before Exécuter (auto-PREPARE clears attempt state)
    await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);

    const c1440 = await capture(page, "rc06-recovery-ready-1440", {
      width: 1440,
      height: 900,
    }, {
      state: "recovery HD + auto-PREPARE + Exécuter visible",
      observation:
        "No nominal PREPARE; Exécuter visible; Attempt not started",
      extra: { attemptBeforeExecute: 0, autoExecute: false },
    });
    expect(c1440.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);

    const c1600 = await capture(page, "rc06-recovery-ready-1600", {
      width: 1600,
      height: 1000,
    }, {
      state: "recovery ready large desktop",
      observation: "RC-06 state retained at 1600; no overflow",
    });
    expect(c1600.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);

    // CRITICAL: do NOT click Exécuter
  });
});

```

### TrajectorySurface.tsx — RC-05 / RC-06 hunks (macro Product; unchanged this QA pass)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 847c7a01..a6163704 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -572,16 +625,32 @@ export function TrajectorySurface({
       setContinuityDecisionRef(null);
       setExecutionContinuityReadStatus("error");
       return;
     }
     if (result.kind === "none") {
-      // Server durable truth wins — clear any stale client EC projection.
-      setContract(null);
-      setInspection(null);
-      setAuthorization(null);
-      setAmendmentDraft("");
-      setAmendmentNotice(null);
+      // Server durable truth wins for stale client EC — BUT RC-01 / RC-06
+      // auto-PREPARE (and manual same-intention PREPARE) may have just
+      // projected a contract before durable continuity catches up.
+      const refuseOrAmend =
+        decision?.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF ||
+        decision?.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF;
+      const keepFreshPursuePrepare =
+        decision != null &&
+        Boolean(decision.proposalId) &&
+        decision.selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
+        decision.decisionBasisLinked === true;
+      const keepFreshProjectPrepare =
+        decision != null &&
+        !decision.proposalId &&
+        !refuseOrAmend;
+      if (!keepFreshPursuePrepare && !keepFreshProjectPrepare) {
+        setContract(null);
+        setInspection(null);
+        setAuthorization(null);
+        setAmendmentDraft("");
+        setAmendmentNotice(null);
+      }
       setContinuityDecisionRef(null);
       setExecutionContinuityReadStatus("ready");
       return;
     }
 
@@ -863,16 +954,147 @@ export function TrajectorySurface({
         return;
       }
       setDecision(result.decision);
       setDecided(result.trajectory ?? null);
       onDurableFactsChanged?.();
+
+      // RC-01 — Proposal Pursue → auto PREPARE + inspect (same intention).
+      // RC-06 — structural recovery / Project GOVERNED → same chain via W2 prepare.
+      // Never auto-Execute.
+      const next = result.decision;
+      const shouldAutoPrepareProposal =
+        isProposalSubject &&
+        selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
+        Boolean(next.proposalId) &&
+        next.decisionBasisLinked === true;
+      const shouldAutoPrepareGoverned =
+        !isProposalSubject &&
+        selectedOptionRef === GOVERNED_OPTION_REF &&
+        !next.proposalId;
+
+      if (shouldAutoPrepareProposal) {
+        setBusy("contract");
+        setError(null);
+        const preparedResult = await projectAssistantPrepareResolvedM3Action({
+          projectId,
+          decisionId: next.decisionId,
+        });
+        setBusy(null);
+        if (!preparedResult || typeof preparedResult !== "object") {
+          // Harness / transient — keep secondary PREPARE fallback CTA.
+          return;
+        }
+        if (!preparedResult.ok) {
+          setError(preparedResult.message);
+          return;
+        }
+        const prepared = preparedResult.f3?.successor;
+        if (!prepared) {
+          setError("Contrat préparé indisponible.");
+          return;
+        }
+        setContract({
+          executionContractId: prepared.executionContractId,
+          version: prepared.version,
+          status: prepared.status,
+          action: prepared.action,
+          target: prepared.target,
+          scope: prepared.scope,
+          requiredAuthority: prepared.requiredAuthority,
+          constraints: [...prepared.constraints],
+          stopConditions: [...prepared.stopConditions],
+          requiredCapabilities: [...prepared.requiredCapabilities],
+          reversibility: prepared.reversibility,
+          semanticFingerprint: prepared.semanticFingerprint,
+          inspectionDisclosure: toInspectionDisclosureView(
+            prepared.inspectionDisclosure,
+          ),
+        });
+        setInspection(null);
+        setAuthorization(null);
+        setAmendmentDraft("");
+        setAmendmentNotice(null);
+        setAttempt(null);
+        setAttemptPhase(null);
+        setAttemptStatusLabel(null);
+        onDurableFactsChanged?.();
+        await inspectPreparedContractId(prepared.executionContractId);
+        return;
+      }
+
+      if (shouldAutoPrepareGoverned) {
+        // Same-scope Relancer owns when RecoveryExecutionBinding is present —
+        // do not W2-PREPARE (R8). Structural recovery (no binding) → RC-06.
+        const bindingResult = await w2ReadRecoveryExecutionBindingAction({
+          projectId,
+          decisionId: next.decisionId,
+        });
+        if (
+          bindingResult &&
+          typeof bindingResult === "object" &&
+          bindingResult.ok &&
+          bindingResult.binding?.kind === "post_evidence_recovery_execution"
+        ) {
+          setRecoveryBinding(bindingResult.binding);
+          return;
+        }
+        setBusy("contract");
+        setError(null);
+        const preparedResult = await w2PrepareExecutionContractAction({
+          projectId,
+          decisionId: next.decisionId,
+        });
+        setBusy(null);
+        if (!preparedResult || typeof preparedResult !== "object") {
+          // Harness / transient — keep secondary PREPARE fallback CTA.
+          return;
+        }
+        if (!preparedResult.ok) {
+          setError(
+            preparedResult.code === "PREPARE_NOT_APPLICABLE"
+              ? pilotPrepareNotApplicableMessage()
+              : preparedResult.message,
+          );
+          return;
+        }
+        const prepared = preparedResult.contract;
+        setContract({
+          executionContractId: prepared.executionContractId,
+          version: prepared.version,
+          status: prepared.status,
+          action: prepared.action,
+          target: prepared.target,
+          scope: prepared.scope,
+          requiredAuthority: prepared.requiredAuthority,
+          constraints: [...prepared.constraints],
+          stopConditions: [...prepared.stopConditions],
+          requiredCapabilities: [...prepared.requiredCapabilities],
+          reversibility: prepared.reversibility,
+          semanticFingerprint: prepared.semanticFingerprint,
+          effectConfirmationRequired: prepared.effectConfirmationRequired,
+          effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
+          inspectionDisclosure: toInspectionDisclosureView(
+            prepared.inspectionDisclosure,
+          ),
+        });
+        setInspection(null);
+        setAuthorization(null);
+        setAmendmentDraft("");
+        setAmendmentNotice(null);
+        setAttempt(null);
+        setAttemptPhase(null);
+        setAttemptStatusLabel(null);
+        onDurableFactsChanged?.();
+        await inspectPreparedContractId(prepared.executionContractId);
+      }
     },
     [
       continuityMutationBlocked,
       optionSet,
       projectId,
       onDurableFactsChanged,
+      inspectPreparedContractId,
     ],
   );
 
   // R8/R10 — RecoveryExecutionBinding: decision client OR continuityDecisionRef
   // after restart (server still validates HD / recovery coherence).
@@ -1924,11 +2335,13 @@ export function TrajectorySurface({
           Préparez d&apos;abord la trajectoire depuis la recommandation lifecycle
           courante — les options W2 nécessitent un cycle actif.
         </p>
       ) : null}
 
-      {optionSet ? (
+      {/* RC-05 — before decision: options + recommendation primary.
+          After decision: collapse history; show present next step. */}
+      {optionSet && !decision ? (
         <>
           <section
             className={styles.block}
             aria-labelledby="w2-options-title"
             data-testid="w2-options"
@@ -2180,38 +2574,111 @@ export function TrajectorySurface({
               Vous avez choisi de ne pas poursuivre cette proposition.
               Reformulez avec Nora si vous souhaitez un nouveau sujet. Aucune
               préparation d&apos;exécution ici.
             </p>
           ) : null}
+
+          {optionSet ? (
+            <details data-testid="w2-decision-history">
+              <summary>Historique de cette décision</summary>
+              <p className={styles.blockNote} data-testid="w2-decision-basis">
+                Base : {decision.decisionBasisLinked ? "Reliée" : "Absente"} ·
+                décideur {decision.actorRole}
+              </p>
+              <p
+                className={styles.blockNote}
+                data-testid="w2-decided-trajectory"
+              >
+                {decided
+                  ? `${decided.statusLabel} · version ${decided.version}`
+                  : "Aucune promotion ProjectTrajectory"}
+              </p>
+              <p className={styles.blockNote}>
+                Option retenue (réf.) :{" "}
+                <code>{decision.selectedOptionRef}</code>
+                {decision.proposalId ? (
+                  <>
+                    {" "}
+                    · Proposal <code>{decision.proposalId}</code>
+                  </>
+                ) : null}
+              </p>
+              <p className={styles.blockNote} data-testid="w2-recommendation-rationale">
+                Recommandation ayant servi :{" "}
+                {scrubPiloteRecommendationProse(
+                  formatNoraAssistantDisplayText(
+                    optionSet.recommendation.rationale,
+                  ),
+                )}
+              </p>
+              <ul
+                className={styles.optionList}
+                data-testid="w2-options-history"
+              >
+                {optionSet.options.map((option) => (
+                  <li
+                    key={option.optionRef}
+                    className={styles.option}
+                    data-testid={`w2-option-history-${option.optionRef}`}
+                  >
+                    <span className={styles.optionLabel}>{option.label}</span>
+                    <p className={styles.optionIntent}>{option.intent}</p>
+                  </li>
+                ))}
+              </ul>
+              <div data-testid="w2-recommendation-history" hidden />
+            </details>
+          ) : (
+            <details data-testid="w2-technical-details">
+              <summary>Détails techniques</summary>
+              <p className={styles.blockNote}>
+                Réf. option : <code>{decision.selectedOptionRef}</code>
+                {decision.proposalId ? (
+                  <>
+                    {" "}
+                    · Proposal <code>{decision.proposalId}</code>
+                  </>
+                ) : null}
+              </p>
+              <p className={styles.blockNote} data-testid="w2-decision-basis">
+                Base : {decision.decisionBasisLinked ? "Reliée" : "Absente"}
+              </p>
+              <p className={styles.blockNote} data-testid="w2-decided-trajectory">
+                {decided
+                  ? `${decided.statusLabel} · version ${decided.version}`
+                  : "Aucune promotion ProjectTrajectory"}
+              </p>
+            </details>
+          )}
+
           {/*
             JOURNEY-INTEGRITY Lot A-B fail-closed:
             · Proposal pursue + linked DecisionBasis → M3 PREPARE (no selector).
             · Proposal pursue + missing DecisionBasis → fail-closed requalify
-              (NEVER sandbox fallback — subject still owns the journey).
-            · Non-Proposal only → W2 sandbox selector remains.
+            · Non-Proposal GOVERNED → RC-06 auto-PREPARE; CTA = resume only.
             Contract prepared → Inspect owns next action; no re-PREPARE.
           */}
           {!decisionDefersExecution &&
           !contract &&
           proposalBackedPrepareReady ? (
           <div
             className={styles.actions}
             data-testid="w2-proposal-backed-prepare"
           >
             <p className={styles.blockNote} data-testid="w2-proposal-backed-prepare-note">
-              La décision porte déjà l&apos;opération scellée. Préparez le
-              contrat d&apos;exécution à partir de cette décision — sans
-              resélection technique.
+              Reprise secondaire : la préparation automatique n&apos;a pas abouti
+              ou le contrat n&apos;est plus disponible. Vous pouvez reprendre la
+              préparation sans resélection technique.
             </p>
             <button
               type="button"
               className={styles.primaryAction}
               data-testid="w2-prepare-contract"
               onClick={() => void prepareProposalBackedContract()}
               disabled={busy !== null || continuityMutationBlocked}
             >
-              Préparer le contrat d&apos;exécution
+              Reprendre la préparation
             </button>
           </div>
           ) : null}
           {!decisionDefersExecution &&
           !contract &&
@@ -2235,22 +2702,21 @@ export function TrajectorySurface({
           <div
             className={styles.actions}
             data-testid="w3a-prepare-execution-from-decision"
           >
             <p className={styles.blockNote}>
-              Studio prépare le contrat d&apos;exécution à partir de la
-              décision et du contexte produit durable — sans choix technique
-              (lecture, simulation, artefact…).
+              Reprise secondaire : la préparation automatique après décision
+              n&apos;a pas abouti. Vous pouvez reprendre sans nouvel arbitrage.
             </p>
             <button
               type="button"
               className={styles.primaryAction}
               data-testid="w2-prepare-contract-sandbox"
               onClick={() => void prepareContract()}
               disabled={busy !== null || continuityMutationBlocked}
             >
-              Préparer le contrat d&apos;exécution
+              Reprendre la préparation
             </button>
           </div>
           ) : null}
         </section>
       ) : null}

```

Full TrajectorySurface diff also available locally at `.tmp-sfia-review/pilot-execution-experience-visual/diffs/TrajectorySurface.tsx.diff` (not duplicated here for size; hunks above are the reviewable RC-05/RC-06 surface).

---

## 11. FAKE / REAL

| Layer | Claim |
|-------|-------|
| Auth | REAL Better Auth session (storageState PRESENT) |
| UI | REAL local authenticated rendering @ localhost:3020 |
| Execution | DETERMINISTIC intended (CURSOR_REAL forced off for gates) |
| Cursor docs_write REAL | NOT RUN |
| RC-05 authenticated visual | NOT PROVEN |
| RC-06 authenticated visual | NOT PROVEN |

### Anti-claims

- Cursor docs_write REAL proven — FORBIDDEN / NOT CLAIMED
- END-TO-END REAL PROVEN — FORBIDDEN / NOT CLAIMED
- READY FOR REAL global — FORBIDDEN / NOT CLAIMED
- runtime v3 ADOPTED — FORBIDDEN / NOT CLAIMED
- RC-05 AUTHENTICATED VISUAL PROVEN — NOT CLAIMED
- RC-06 AUTHENTICATED VISUAL PROVEN — NOT CLAIMED

---

## 12. RÉSERVES

1. **BLOCKER CRITICAL** — Authenticated greenfield after `__F2_GATED_STANDARD__` : START CTA visible but `CYCLE_START_NOT_READY` ; Instruct options visible but `CYCLE_NOT_QUALIFIED`. Deadlock prevents RC-05/RC-06 authenticated visual closure.
2. Dirty-principal studio E2E without Better Auth session no longer reaches `/studio` (login wall) — prior deterministic studio proofs cannot be reused as unauthenticated substitute.
3. RC-05/RC-06 PNG captures required by contract — NOT PRODUCED.
4. Review Handoff regularization of exploitable diffs — DONE in this pack despite visual STOP.

---

## 13. VERDICT

**STOP — MORRIS DECISION REQUIRED**

| Gate | Result |
|------|--------|
| RC-05 AUTHENTICATED RUNTIME VISUAL | FAIL / BLOCKED |
| RC-06 AUTHENTICATED RUNTIME VISUAL | FAIL / BLOCKED |
| AUTH SURFACE | REVIEWED / NO PARALLEL AUTH PATH |
| PILOT EXECUTION EXPERIENCE & RECOVERY SIMPLIFICATION — QA VISUAL CLOSURE | **NOT PASS** |
| Product fix this cycle | NOT AUTHORIZED |
| Project commit / push / PR | NOT AUTHORIZED |

### Suggested Morris decisions (non-prescriptive)

A. Authorize a Product cycle to resolve cycle START readiness vs options gate for authenticated Pilote greenfield (or hide START when not ready).  
B. Authorize an alternate authenticated QA seam (existing project with active cycle) if Product path is intentional.  
C. Re-scope visual closure after Product GO.

NEXT: awaiting Morris decision — no NEW PR READINESS until visual closure or explicit waiver.
