/**
 * GAP-14 / QA-NAP-02 — cookie header parse / Playwright cookie-shape without leaking values.
 * Deterministic Vitest oracle only — no Chromium launch (CI does not install browsers).
 * BrowserContext.addCookies acceptance remains covered by E2E harness / QA-NAP-03.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import {
  assertBetterAuthUrlAlignedWithVisualBase,
  AUTH_VISUAL_BASE_URL_DEFAULT,
  inspectAuthCookieFileStatus,
  parseCookieHeaderToPlaywrightCookies,
  resolveAuthVisualBaseURL,
} from "../../e2e/support/authenticatedStudioSession";

const PREV_PLAYWRIGHT = process.env.PLAYWRIGHT_BASE_URL;
const PREV_BETTER = process.env.BETTER_AUTH_URL;

afterEach(() => {
  if (PREV_PLAYWRIGHT === undefined) delete process.env.PLAYWRIGHT_BASE_URL;
  else process.env.PLAYWRIGHT_BASE_URL = PREV_PLAYWRIGHT;
  if (PREV_BETTER === undefined) delete process.env.BETTER_AUTH_URL;
  else process.env.BETTER_AUTH_URL = PREV_BETTER;
});

describe("GAP-14 authenticatedStudioSession helper", () => {
  it("parses Better Auth session cookie header into url-only Playwright cookie shape", () => {
    const header =
      "better-auth.session_token=fake-test-token; other=1; Path=/";
    const cookies = parseCookieHeaderToPlaywrightCookies(
      header,
      "http://localhost:3020",
    );
    expect(cookies.some((c) => c.name.includes("better-auth.session"))).toBe(
      true,
    );
    expect(cookies.every((c) => typeof c.value === "string")).toBe(true);
    expect(cookies.every((c) => (c.value ?? "").length > 0)).toBe(true);
    expect(cookies.every((c) => typeof c.url === "string")).toBe(true);
    expect(cookies.every((c) => c.url?.startsWith("http://localhost"))).toBe(
      true,
    );
    // QA-NAP-02 — url XOR path (Playwright rejects url+path together).
    expect(cookies.every((c) => c.path === undefined)).toBe(true);
    expect(cookies.every((c) => c.domain === undefined)).toBe(true);
    expect(cookies.length).toBeGreaterThanOrEqual(1);
    // Structural contract only — ≠ BrowserContext.addCookies acceptance
    // (E2E: applyAuthenticatedStudioCookies / studio-nora-adaptive-qa-nap01).
  });

  it("rejects headers without Better Auth session marker", () => {
    expect(() =>
      parseCookieHeaderToPlaywrightCookies(
        "foo=bar; baz=qux",
        "http://localhost:3020",
      ),
    ).toThrow(/AUTH_COOKIE_HEADER_MISSING_BETTER_AUTH_SESSION/);
  });

  it("filters third-party cookies and rejects empty header", () => {
    expect(() =>
      parseCookieHeaderToPlaywrightCookies("", "http://localhost:3020"),
    ).toThrow(/AUTH_COOKIE_HEADER_EMPTY/);
    const cookies = parseCookieHeaderToPlaywrightCookies(
      "better-auth.session_token=abc; _gh_sess=x; logged_in=yes",
      "http://localhost:3020",
    );
    expect(cookies.every((c) => c.name.startsWith("better-auth."))).toBe(true);
  });

  it("defaults visual base URL to localhost (not 127.0.0.1)", () => {
    delete process.env.PLAYWRIGHT_BASE_URL;
    expect(resolveAuthVisualBaseURL()).toBe(AUTH_VISUAL_BASE_URL_DEFAULT);
    expect(AUTH_VISUAL_BASE_URL_DEFAULT).toBe("http://localhost:3020");
  });

  it("fail-closed when BETTER_AUTH_URL origin disagrees with visual base", () => {
    process.env.BETTER_AUTH_URL = "http://localhost:3020";
    expect(
      assertBetterAuthUrlAlignedWithVisualBase("http://localhost:3020").ok,
    ).toBe(true);
    expect(() =>
      assertBetterAuthUrlAlignedWithVisualBase("http://127.0.0.1:3020"),
    ).toThrow(/AUTH_VISUAL_BASE_URL_MISMATCH/);
  });

  it("inspectAuthCookieFileStatus returns MISSING for absent path", () => {
    expect(inspectAuthCookieFileStatus("/tmp/sfia-auth-does-not-exist-xyz")).toBe(
      "MISSING",
    );
  });
});
