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
