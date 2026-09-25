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
